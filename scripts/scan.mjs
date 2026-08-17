/**
 * Scan test — strips a page to the three layers a visitor actually reads when
 * they are skimming (headings, numbers, images) and prints them back, so the
 * question "can you tell what this page is about without reading it?" has an
 * answer instead of an opinion.
 *
 *   npm run scan                              every curated route
 *   npm run scan -- --routes patient-pulse    one route
 *   npm run scan -- --viewport mobile         scan at a different breakpoint
 *   npm run scan -- --strict                  exit 1 if any route fails
 *   npm run scan -- --json                    machine-readable output
 *
 * Read the COLD READ block as prose. If it argues the page's case on its own,
 * the page passes and the paragraph copy underneath can be as long as the
 * search work needs it to be — scannability is a property of the heading layer,
 * not of word count. If the cold read is a list of abstract nouns, no amount of
 * trimming body copy will fix it.
 *
 * Runs against the rendered DOM rather than the source. An earlier version of
 * this check grepped the .tsx files and undercounted every page that composes
 * shared section components — patient-pulse reported six headings when it in
 * fact has thirty, because the rest live inside <PulseCapabilityTabs> and
 * friends. Source greps cannot see through an import; a browser can.
 *
 * Requires a server on BASE_URL (`npm run dev`, or `npm run build && npm run
 * start` — see the image-optimiser note in CLAUDE.md).
 */
import { chromium } from "playwright";
import { writeFile } from "node:fs/promises";
import { ROUTES, VIEWPORTS, BASE_URL } from "./routes.mjs";

const argv = process.argv.slice(2);
const flag = (name) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 ? null : argv[i + 1];
};
const has = (name) => argv.includes(`--${name}`);

const only = (list, csv, key = "name") =>
  csv ? list.filter((x) => csv.split(",").map((s) => s.trim()).includes(x[key])) : list;

const routes = only(ROUTES, flag("routes"));
const vpName = flag("viewport") ?? "desktop";
const viewport = VIEWPORTS.find((v) => v.name === vpName);
const asJson = has("json");
const strict = has("strict");

if (!routes.length) {
  console.error("No routes matched. Check --routes.");
  process.exit(1);
}
if (!viewport) {
  console.error(`Unknown viewport "${vpName}". Options: ${VIEWPORTS.map((v) => v.name).join(", ")}`);
  process.exit(1);
}

try {
  const res = await fetch(BASE_URL, { signal: AbortSignal.timeout(5000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
} catch (err) {
  console.error(`\nCannot reach ${BASE_URL} — ${err.message}`);
  console.error("Start the server first:  npm run dev\n");
  process.exit(1);
}

const browser = await chromium.launch({ channel: "chrome" });
const ctx = await browser.newContext({
  viewport: { width: viewport.width, height: viewport.height },
  // Without this, every FadeUp is still at opacity 0 when we measure and the
  // whole page reports as hidden. The reduced-motion branch renders reveals in
  // their resting state, which is also what a visitor with the OS setting on
  // actually sees — so it is the honest thing to measure against.
  reducedMotion: "reduce",
});
await ctx.addInitScript(() => {
  try {
    localStorage.setItem("ce-cookie-consent", "accepted");
  } catch {}
});

const results = [];

for (const route of routes) {
  const page = await ctx.newPage();
  const url = BASE_URL.replace(/\/$/, "") + route.path;

  try {
    await page.goto(url, { waitUntil: "load", timeout: 90000 });
    await page.evaluate(() => document.fonts.ready);
    // Scroll the full height so anything gated on useInView has fired before we
    // ask what is visible, then return to the top.
    await page.evaluate(async () => {
      const step = window.innerHeight;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(300);

    const data = await page.evaluate(() => {
      // Deliberately exact matches, not substrings. A heading that merely
      // contains "system" is often fine ("One system that makes sure you keep
      // them"); a heading that is only the word is not. Substring matching here
      // produced enough false positives to make the report worth ignoring,
      // which is the one thing a check like this cannot afford to be.
      const GENERIC = new Set([
        "what we do", "our approach", "our process", "the process", "features",
        "benefits", "why choose us", "why us", "overview", "our services",
        "services", "solutions", "how it works", "our system", "the system",
        "our framework", "key features", "what you get", "our mission",
        "about us", "our values", "the journey", "next steps", "get started",
      ]);

      const norm = (s) => s.replace(/\s+/g, " ").trim();
      const key = (s) => norm(s).toLowerCase().replace(/[.,:;!?—–-]+$/g, "");

      // An accordion that collapses with `max-h-0 overflow-hidden` leaves its
      // contents at full size in the layout — the *parent* is what shrinks to
      // nothing. So the child's own rect is useless here and checkVisibility
      // reports it as shown. Without this walk the script counted every
      // collapsed FAQ answer on the site as visible prose, which inflated the
      // density figure on every page carrying an FAQ and hid a genuine
      // scannability failure behind a measurement error.
      const clippedAway = (el) => {
        for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
          const cs = getComputedStyle(p);
          const clips = /hidden|clip/.test(cs.overflowY) || /hidden|clip/.test(cs.overflowX);
          if (clips && (p.clientHeight === 0 || p.clientWidth === 0)) return true;
        }
        return false;
      };

      const visible = (el) => {
        // A tab panel, an accordion body or a closed <details> is in the DOM
        // and crawlable but invisible to a person scanning the page. That gap
        // is the single most useful thing this script measures.
        if (el.closest("[hidden]")) return false;
        if (el.closest('[aria-hidden="true"]')) return false;
        if (el.closest("details:not([open])")) return false;
        if (clippedAway(el)) return false;
        // opacityProperty is off on purpose: a reveal caught mid-transition
        // would otherwise read as hidden. reducedMotion already pins those at
        // rest, so anything still transparent here is a false positive.
        if (typeof el.checkVisibility === "function") {
          if (!el.checkVisibility({ contentVisibilityAuto: true, visibilityProperty: true })) {
            return false;
          }
        }
        const r = el.getBoundingClientRect();
        return r.width > 0 || r.height > 0;
      };

      // Why the element is hidden, so the report says what to do about it
      // rather than only that something is wrong.
      const hiddenReason = (el) => {
        if (el.closest('[role="tabpanel"][hidden]')) return "behind a tab";
        if (el.closest("details:not([open])")) return "inside a closed <details>";
        if (el.closest("[hidden]")) return "hidden attribute";
        if (el.closest('[aria-hidden="true"]')) return "aria-hidden";
        if (clippedAway(el)) return "collapsed (accordion)";
        return "not rendered";
      };

      // One querySelectorAll returns document order, which is what makes the
      // cold read readable as prose.
      const nodes = Array.from(
        document.querySelectorAll("main h1, main h2, main h3, main h4, main .eyebrow, main .text-label")
      );

      const layer = nodes.map((el) => {
        const tag = el.tagName.toLowerCase();
        const isKicker = /^(p|span|div)$/.test(tag);
        const shown = visible(el);
        // innerText, not textContent: a headline split into block-level lines
        // for typographic control concatenates without separators under
        // textContent ("More patients.Better follow-up."), which makes the cold
        // read look like a bug in the page rather than in the report. innerText
        // respects rendered line boxes. It returns "" for anything not
        // rendered, so hidden nodes still need textContent.
        return {
          kind: isKicker ? "eyebrow" : tag,
          level: isKicker ? 0 : Number(tag[1]),
          text: norm((shown && el.innerText) || el.textContent || ""),
          visible: shown,
          reason: shown ? null : hiddenReason(el),
        };
      }).filter((n) => n.text.length > 1);

      // Numbers a scanner's eye will land on. Leaf elements only, short text,
      // and a shape that reads as a figure rather than as prose containing a
      // digit. Reported, not scored: whether a page has enough evidence on it
      // is a judgement, but you cannot make it without seeing the list.
      const NUM = /^[+-]?[£$]?\d[\d,.]*\s?(%|×|x|\+|k|mo|min|hrs?|days?|weeks?|months?|years?)?$/i;
      // Before/after pairs — "8 → 3,822", "0 → page one", "£45 to £399". This
      // site states most of its evidence as movement rather than as a single
      // figure, and an earlier version of this regex matched only the latter,
      // so it reported a page carrying three sourced results as having none.
      const PAIR = /^[£$]?[\w,.]+\s*(→|->|to)\s*[£$]?[\w,.]+([ \w]{0,12})?$/i;
      const numbers = [...new Set(
        Array.from(document.querySelectorAll("main *"))
          .filter((el) => el.children.length === 0)
          .map((el) => norm(el.textContent || ""))
          .filter((t) => t.length > 0 && /\d/.test(t)
            && ((t.length <= 14 && NUM.test(t)) || (t.length <= 26 && PAIR.test(t))))
      )];

      const images = Array.from(document.querySelectorAll("main img")).map((img) => ({
        alt: img.getAttribute("alt"),
        hasAltAttr: img.hasAttribute("alt"),
        visible: visible(img),
      }));

      // Body words per visible heading. A high number means long runs of prose
      // with no signpost — the reader has to actually read to find out whether
      // the section is relevant to them.
      const bodyWords = Array.from(document.querySelectorAll("main p"))
        .filter((p) => !p.classList.contains("eyebrow") && !p.classList.contains("text-label"))
        .filter(visible)
        .reduce((n, p) => n + norm(p.textContent || "").split(/\s+/).filter(Boolean).length, 0);

      // Headings are only the visible tip of what a tab swallows. The
      // capability lists on this site are <span>s inside <li>s, so counting
      // hidden headings alone reported "3" for a section that is in fact
      // withholding two dozen product claims. Words are the honest unit.
      //
      // Two buckets, because the two cases deserve opposite verdicts. A tab
      // hides primary content the visitor never asked to have hidden, and it is
      // a scan failure. An FAQ accordion hides secondary content behind a
      // question the reader has already chosen to ask, which is progressive
      // disclosure working as intended. Counting them together would either
      // excuse the tabs or condemn every FAQ on the site.
      const words = (el) => norm(el.textContent || "").split(/\s+/).filter(Boolean).length;
      const topmost = (els) => els.filter((el) => !els.some((o) => o !== el && o.contains(el)));

      const gated = topmost(Array.from(
        document.querySelectorAll('main [role="tabpanel"][hidden], main [hidden], main details:not([open])')
      ));
      const collapsed = topmost(Array.from(document.querySelectorAll("main *")).filter((el) => {
        if (el.children.length === 0) return false;
        const cs = getComputedStyle(el);
        const clips = /hidden|clip/.test(cs.overflowY) || /hidden|clip/.test(cs.overflowX);
        return clips && el.clientHeight === 0 && words(el) > 0;
      }));

      const hiddenWords = gated.reduce((n, el) => n + words(el), 0);
      const collapsedWords = collapsed.reduce((n, el) => n + words(el), 0);

      return { layer, numbers, images, bodyWords, hiddenWords, collapsedWords, GENERIC: [...GENERIC] };
    });

    const { layer, numbers, images, bodyWords, hiddenWords, collapsedWords } = data;
    const GENERIC = new Set(data.GENERIC);
    const norm = (s) => s.replace(/\s+/g, " ").trim();
    const key = (s) => norm(s).toLowerCase().replace(/[.,:;!?—–-]+$/g, "");

    const shown = layer.filter((n) => n.visible);
    const hidden = layer.filter((n) => !n.visible);
    const headings = shown.filter((n) => n.level > 0);
    const flags = [];

    // An eyebrow is the second-most-scanned element on a section after its
    // heading. Spending that slot on "Step 05" tells a cold reader nothing —
    // it only means something to someone who counted the four cards above it.
    const ordinal = /^(step|stage|phase|part)\s*\d+/i;
    for (const n of shown) {
      if (ordinal.test(n.text)) flags.push(`ordinal-only ${n.kind}: "${n.text}"`);
    }

    for (const n of headings) {
      if (GENERIC.has(key(n.text))) flags.push(`generic heading: "${n.text}"`);
    }

    const h1s = layer.filter((n) => n.level === 1);
    if (h1s.length === 0) flags.push("no h1 in <main>");
    if (h1s.length > 1) flags.push(`${h1s.length} h1s — a scanner cannot tell which is the subject`);

    let prev = 0;
    for (const n of headings) {
      if (prev && n.level > prev + 1) {
        flags.push(`heading level jumps h${prev} to h${n.level} at "${n.text}"`);
      }
      prev = n.level;
    }

    const noAlt = images.filter((i) => !i.hasAltAttr).length;
    if (noAlt) flags.push(`${noAlt} image(s) with no alt attribute`);

    const density = headings.length ? Math.round(bodyWords / headings.length) : bodyWords;
    if (density > 120) {
      flags.push(`${density} body words per heading — long unsignposted runs`);
    }

    // Hidden scan content is a failure on its own: the page has done the work
    // and then put it behind an interaction the skimmer will never perform.
    const hiddenHeadings = hidden.filter((n) => n.level > 0);
    if (hiddenWords > 40) {
      flags.push(
        `${hiddenWords} words behind an interaction — a skimmer never sees them`
      );
    }
    const pass = hiddenHeadings.length === 0 && flags.length === 0;

    results.push({
      name: route.name, path: route.path, shown, hidden, numbers, images,
      flags, density, hiddenWords, collapsedWords, pass,
    });
  } catch (err) {
    results.push({
      name: route.name, path: route.path, error: err.message.split("\n")[0],
      shown: [], hidden: [], numbers: [], images: [], flags: [], pass: false,
    });
  }

  await page.close();
}

await ctx.close();
await browser.close();

if (asJson) {
  await writeFile(".scan.json", JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
} else {
  const indent = { 0: "  ·  ", 1: " h1  ", 2: " h2  ", 3: " h3  ", 4: " h4  " };
  const pad = { 0: "      ", 1: "", 2: "   ", 3: "      ", 4: "         " };

  for (const r of results) {
    console.log(`\n${"━".repeat(76)}`);
    console.log(`${r.pass ? "PASS" : "FAIL"}  ${r.name}   ${r.path}`);
    console.log("━".repeat(76));

    if (r.error) {
      console.log(`  FAILED — ${r.error}`);
      continue;
    }

    console.log("\n  COLD READ — everything a skimmer gets\n");
    for (const n of r.shown) {
      console.log(`  ${indent[n.level]}${pad[n.level]}${n.text}`);
    }

    if (r.hidden.length) {
      console.log(`\n  HIDDEN FROM SKIMMERS (${r.hidden.length} headings, ` +
        `${r.hiddenWords} words) — in the DOM, not on the page\n`);
      for (const n of r.hidden) {
        console.log(`  ${indent[n.level]}${pad[n.level]}${n.text}   [${n.reason}]`);
      }
    }

    if (r.numbers.length) {
      console.log(`\n  NUMBERS ON THE PAGE (${r.numbers.length})`);
      console.log(`    ${r.numbers.join("  ·  ")}`);
    }

    console.log(`\n  IMAGES ${r.images.filter((i) => i.visible).length} visible` +
      `   ·   DENSITY ${r.density} body words per heading` +
      (r.collapsedWords ? `   ·   ${r.collapsedWords} words in accordions (fine)` : ""));

    if (r.flags.length) {
      console.log(`\n  FLAGS (${r.flags.length})`);
      for (const f of r.flags) console.log(`    ! ${f}`);
    }
  }

  const failed = results.filter((r) => !r.pass);
  console.log(`\n${"━".repeat(76)}`);
  console.log(`${results.length - failed.length}/${results.length} routes pass the scan test.`);
  if (failed.length) console.log(`Failing: ${failed.map((r) => r.name).join(", ")}`);
  console.log();
}

if (strict && results.some((r) => !r.pass)) process.exit(1);

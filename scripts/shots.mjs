/**
 * Screenshot loop — renders routes at each breakpoint so design work can be
 * reviewed against what the browser actually paints rather than against the
 * source that was meant to produce it.
 *
 *   npm run shots                          all routes, all viewports, sliced
 *   npm run shots -- --routes home,contact only those routes
 *   npm run shots -- --viewports desktop   only that breakpoint
 *   npm run shots -- --fold                above-the-fold only (fast)
 *   npm run shots -- --full                one tall image per page as well
 *
 * Pages are captured as viewport-sized slices rather than a single full-page
 * image. The home page is ~16,000px tall; as one PNG it can only be reviewed
 * scaled down to the point where type, spacing and alignment — the things
 * worth reviewing — are no longer legible. Slices stay at 1:1.
 *
 * Requires `npm run dev` in another terminal. Output lands in .shots/ which is
 * gitignored — these are a working surface, not artefacts. The committed
 * baselines live in tests/visual.spec.ts-snapshots/ instead.
 */
import { chromium } from "playwright";
import { mkdir, rm } from "node:fs/promises";
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
const viewports = only(VIEWPORTS, flag("viewports"));
const foldOnly = has("fold");
const alsoFull = has("full");
const OUT = ".shots";
// Slices are captured at 1x. A full-page capture at 2x produced an 8MB, 16k-tall
// PNG for the home page, and the extra density bought nothing that survived the
// downscale needed to view it.
const SCALE = 1;

if (!routes.length || !viewports.length) {
  console.error("No routes or viewports matched. Check --routes / --viewports.");
  process.exit(1);
}

// Fail loudly and early rather than producing a directory of identical Next.js
// error pages, which is what a dead dev server otherwise yields.
try {
  const res = await fetch(BASE_URL, { signal: AbortSignal.timeout(5000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
} catch (err) {
  console.error(`\nCannot reach ${BASE_URL} — ${err.message}`);
  console.error("Start the dev server first:  npm run dev\n");
  process.exit(1);
}

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

// System Chrome, matching scripts/mobile-check.mjs — avoids a ~400MB browser
// download and renders in the engine the audience actually uses.
const browser = await chromium.launch({ channel: "chrome" });
const written = [];
const problems = [];

for (const vp of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: SCALE,
    // Scroll-triggered reveals key off useInView and never fire during a
    // single screenshot pass, so the elements would capture at opacity 0.
    // The reduced-motion branch renders them in their resting state.
    reducedMotion: "reduce",
  });

  // Pre-seed cookie consent so the banner does not sit over the hero CTA in
  // every capture. `--cookies` keeps it, for when the banner itself is what
  // needs reviewing.
  const keepCookieBanner = has("cookies");

  await ctx.addInitScript((keepBanner) => {
    if (!keepBanner) {
      try {
        localStorage.setItem("ce-cookie-consent", "accepted");
      } catch {}
    }
    // The dev-server issue badge and error overlay are injected as
    // <nextjs-portal>. Left visible they sit in the corner of every slice and
    // would bake into the visual-regression baselines. Injected at document
    // start so the rule exists before the portal mounts.
    document.addEventListener("DOMContentLoaded", () => {
      const style = document.createElement("style");
      style.textContent = "nextjs-portal { display: none !important; }";
      document.head.appendChild(style);
    });
  }, keepCookieBanner);

  for (const route of routes) {
    const page = await ctx.newPage();
    const url = BASE_URL.replace(/\/$/, "") + route.path;
    const label = `${route.name}-${vp.name}`;

    const consoleErrors = [];
    const failedRequests = [];
    page.on("console", (m) => m.type() === "error" && consoleErrors.push(m.text()));
    page.on("pageerror", (e) => consoleErrors.push(String(e)));
    // The URL matters far more than the console text: "400 Bad Request" is
    // noise, "400 on every /_next/static chunk" is a stale build being served
    // as an unstyled page, and only the URL distinguishes the two.
    page.on("response", (r) => {
      if (r.status() >= 400) failedRequests.push(`${r.status()} ${new URL(r.url()).pathname}`);
    });

    try {
      // "load", not "networkidle" — the dev server compiles routes on first
      // request and the network does not reliably go idle within the timeout.
      await page.goto(url, { waitUntil: "load", timeout: 90000 });
      // Webfonts swap in after first paint; screenshotting before they land
      // captures fallback metrics and every line-length judgement made from
      // the image is then wrong.
      await page.evaluate(() => document.fonts.ready);
      // Scroll the full height to trigger any lazy-loaded imagery, then return
      // to the top so full-page capture starts from a settled layout.
      await page.evaluate(async () => {
        const step = window.innerHeight;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 60));
        }
        window.scrollTo(0, 0);
      });
      // next/image swaps its blurred placeholder for the real bitmap once
      // decoded; capturing in between yields a half-blurred photo.
      await page
        .waitForFunction(
          () => Array.from(document.images).every((img) => img.complete && img.naturalWidth > 0),
          null,
          { timeout: 30000 }
        )
        .catch(() => problems.push(`${label}: some images never finished loading`));

      await page.waitForTimeout(400);

      const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);

      if (foldOnly) {
        const path = `${OUT}/${label}-fold.png`;
        await page.screenshot({ path });
        written.push(path);
      } else {
        // Playwright honours `clip` against the full page, not just the
        // viewport, so each slice is a direct crop of the whole document.
        const sliceCount = Math.ceil(pageHeight / vp.height);
        for (let i = 0; i < sliceCount; i++) {
          const y = i * vp.height;
          const path = `${OUT}/${label}-${String(i + 1).padStart(2, "0")}.png`;
          await page.screenshot({
            path,
            fullPage: true,
            clip: { x: 0, y, width: vp.width, height: Math.min(vp.height, pageHeight - y) },
          });
          written.push(path);
        }
      }

      if (alsoFull) {
        const path = `${OUT}/${label}-full.png`;
        await page.screenshot({ path, fullPage: true });
        written.push(path);
      }

      // A horizontal scrollbar is the single most common regression on this
      // site's asymmetric layouts, and it is invisible in a full-page capture.
      //
      // Measured by actually attempting the scroll rather than by comparing
      // scrollWidth to clientWidth: body carries `overflow-x: clip`, under
      // which scrollWidth still reports the full content width even though
      // nothing can scroll. Comparing the two reports a ~1600px overflow on
      // every page of this site, all of it phantom.
      const overflow = await page.evaluate(() => {
        const start = window.scrollX;
        window.scrollTo(2000, window.scrollY);
        const reached = window.scrollX;
        window.scrollTo(start, window.scrollY);
        return reached - start;
      });
      if (overflow > 1) problems.push(`${label}: page scrolls horizontally by ${overflow}px`);

      const uniqueFails = [...new Set(failedRequests)];
      if (uniqueFails.length) {
        problems.push(
          `${label}: ${failedRequests.length} failed request(s) — ${uniqueFails.slice(0, 3).join(", ")}` +
            (uniqueFails.length > 3 ? ` (+${uniqueFails.length - 3} more)` : "")
        );
      }
      if (consoleErrors.length) {
        problems.push(`${label}: ${consoleErrors.length} console error(s) — ${consoleErrors[0].slice(0, 120)}`);
      }
    } catch (err) {
      problems.push(`${label}: FAILED — ${err.message.split("\n")[0]}`);
    }

    await page.close();
  }

  await ctx.close();
}

await browser.close();

console.log(`\n${written.length} screenshot(s) written to ${OUT}/\n`);
for (const p of written) console.log(`  ${p}`);

if (problems.length) {
  console.log(`\n${problems.length} problem(s) detected:\n`);
  for (const p of problems) console.log(`  ! ${p}`);
}
console.log();

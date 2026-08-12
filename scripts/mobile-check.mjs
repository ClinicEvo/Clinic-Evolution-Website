import { chromium, devices } from "playwright";

const URL = process.env.URL ?? "http://localhost:4321/patient-pulse/";
const OUT = process.env.OUT ?? ".";

// Use the system Google Chrome rather than downloading a Playwright build.
const browser = await chromium.launch({ channel: "chrome" });

for (const [label, device] of [
  ["iphone", devices["iPhone 13"]],
  ["pixel", devices["Pixel 5"]],
]) {
  const ctx = await browser.newContext({
    ...device,
    // FadeUp keys off useInView; scroll-driven reveals never fire in a single
    // screenshot pass, so render the reduced-motion branch which is visible
    // immediately.
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  const report = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const offenders = [];
    for (const el of document.querySelectorAll("*")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.right <= vw + 1) continue;
      // Ignore anything already inside a clipping or scrolling ancestor: that is
      // intended behaviour for the wide table and the logo marquee.
      let p = el.parentElement;
      let contained = false;
      while (p) {
        if (/auto|scroll|hidden|clip/.test(getComputedStyle(p).overflowX)) {
          contained = true;
          break;
        }
        p = p.parentElement;
      }
      if (!contained) {
        offenders.push(
          `<${el.tagName.toLowerCase()} class="${String(el.className).slice(0, 70)}"> right=${Math.round(r.right)}`
        );
      }
    }
    // Tap-target audit on the things a thumb actually has to hit.
    const small = [];
    for (const el of document.querySelectorAll("a, button, [role=tab]")) {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && (r.height < 24 || r.width < 24)) {
        small.push(
          `${el.tagName.toLowerCase()} "${(el.textContent || "").trim().slice(0, 28)}" ${Math.round(r.width)}x${Math.round(r.height)}`
        );
      }
    }
    return {
      layoutViewport: vw,
      docScrollWidth: document.documentElement.scrollWidth,
      horizontallyScrollable: document.documentElement.scrollWidth > vw + 1,
      uncontainedOverflow: offenders,
      smallTapTargets: small,
      h1: document.querySelector("h1")?.textContent?.trim(),
      tabCount: document.querySelectorAll('[role="tab"]').length,
    };
  });

  console.log(`\n===== ${label} (${device.viewport.width}x${device.viewport.height})`);
  console.log(JSON.stringify(report, null, 1));

  await page.screenshot({ path: `${OUT}/mob-${label}.png`, fullPage: true });

  // Exercise the tabs, since a screenshot only ever shows the first panel.
  const tabs = page.locator('[role="tab"]');
  for (let i = 0; i < (await tabs.count()); i++) {
    await tabs.nth(i).click();
    await page.waitForTimeout(250);
    const visible = await page
      .locator('[role="tabpanel"]:not([hidden])')
      .count();
    const name = (await tabs.nth(i).textContent())?.trim();
    console.log(`  tab "${name}" -> ${visible} panel(s) visible`);
  }
  await page.screenshot({ path: `${OUT}/mob-${label}-lasttab.png`, fullPage: true });

  await ctx.close();
}

await browser.close();

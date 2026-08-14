import { test, expect, type Page } from "@playwright/test";
// Shared with scripts/shots.mjs so the review loop and the baselines can never
// drift onto different route lists. Resolves under tsconfig's allowJs.
import { ROUTES } from "../scripts/routes.mjs";

type Route = { path: string; name: string };

/**
 * Bring a page to a state that is identical on every run.
 *
 * Almost all visual-regression flake comes from this function being too thin.
 * Each step below exists because of a specific source of nondeterminism, noted
 * inline — resist trimming them.
 */
async function settle(page: Page) {
  // Webfonts swap in after first paint. Capturing before they land bakes
  // fallback metrics into the baseline, and every subsequent run then differs
  // by a few pixels of line height on every text node.
  await page.evaluate(() => document.fonts.ready);

  // Reveal-on-scroll sections render at opacity 0 until seen. Walking the full
  // height settles them and triggers any lazy-loaded imagery.
  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });

  // next/image swaps a blurred placeholder for the real bitmap once decoded.
  // Capturing between those two states was the cause of the home page failing
  // on all three viewports while every text-only page passed: the diff landed
  // exactly on the photographic regions and nowhere else.
  await page.waitForFunction(
    () =>
      Array.from(document.images).every(
        (img) => img.complete && img.naturalWidth > 0
      ),
    null,
    { timeout: 60_000 }
  );

  // The grain overlay and aurora CTA run infinite CSS animations. `animations:
  // "disabled"` in the config freezes them at their first frame, but the
  // freeze has to happen after they have started or the element is captured
  // mid-transition.
  await page.waitForTimeout(400);
}

test.describe("visual baselines", () => {
  test.beforeEach(async ({ context }) => {
    await context.addInitScript(() => {
      // Consent state is persisted in localStorage; without seeding it the
      // banner is present in run one and absent in run two.
      try {
        localStorage.setItem("ce-cookie-consent", "accepted");
      } catch {}
      // <nextjs-portal> carries the dev issue badge and error overlay. Baking
      // a dev-only badge into a baseline makes the suite fail in CI, where it
      // is absent.
      document.addEventListener("DOMContentLoaded", () => {
        const style = document.createElement("style");
        style.textContent = "nextjs-portal { display: none !important; }";
        document.head.appendChild(style);
      });
    });
  });

  for (const route of ROUTES as Route[]) {
    test(route.name, async ({ page }) => {
      const failed: string[] = [];
      page.on("response", (r) => {
        if (r.status() >= 400) failed.push(`${r.status()} ${new URL(r.url()).pathname}`);
      });

      // "load" rather than "networkidle": the dev server compiles routes on
      // first request, and with several workers in flight the network never
      // goes idle inside the timeout. Playwright discourages networkidle for
      // this reason — determinism comes from settle() below instead.
      await page.goto(route.path, { waitUntil: "load" });
      await settle(page);

      // A stale .next serves every chunk as a 400, which renders an unstyled
      // page. Without this guard the suite would happily rebaseline against
      // that and report success.
      const brokenAssets = failed.filter((f) => f.includes("/_next/"));
      expect(brokenAssets, `broken build assets: ${brokenAssets.slice(0, 3).join(", ")}`).toHaveLength(0);

      await expect(page).toHaveScreenshot(`${route.name}.png`, { fullPage: true });
    });
  }
});

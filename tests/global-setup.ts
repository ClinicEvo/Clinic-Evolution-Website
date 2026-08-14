import { chromium } from "@playwright/test";
import { ROUTES } from "../scripts/routes.mjs";

type Route = { path: string; name: string };

/**
 * Warm the dev server before any comparison runs.
 *
 * Two things in Next.js are compiled or transformed on first request and
 * cached afterwards: the route itself, and every `/_next/image` derivative.
 * Cold, a single large PNG can take longer to optimise than the whole test
 * timeout, so the first run captured half-loaded photographs and the second
 * captured them complete — which is exactly the flake this suite existed to
 * detect, coming from the harness rather than from the site.
 *
 * One serial pass here makes every subsequent capture hit warm caches.
 */
async function globalSetup() {
  const baseURL = process.env.BASE_URL ?? "http://localhost:3000";
  const browser = await chromium.launch({ channel: "chrome" });
  // Widest viewport, so the largest image derivative of each `sizes` set is
  // the one generated and cached.
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const started = Date.now();
  for (const route of ROUTES as Route[]) {
    try {
      await page.goto(baseURL.replace(/\/$/, "") + route.path, {
        waitUntil: "load",
        timeout: 120_000,
      });
      // Walk the page so lazy images are requested and enter the cache.
      await page.evaluate(async () => {
        const step = window.innerHeight;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 50));
        }
      });
      await page
        .waitForFunction(
          () => Array.from(document.images).every((i) => i.complete),
          null,
          { timeout: 60_000 }
        )
        .catch(() => {});
    } catch {
      // A route that will not warm will fail loudly in its own test; there is
      // nothing useful to assert here.
    }
  }

  await browser.close();
  console.log(`[global-setup] warmed ${ROUTES.length} routes in ${Math.round((Date.now() - started) / 1000)}s`);
}

export default globalSetup;

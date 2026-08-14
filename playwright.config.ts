import { defineConfig, devices } from "@playwright/test";

/**
 * Visual-regression config.
 *
 * The point of this suite is not to assert that the design is good — nothing
 * automated can do that. It is to make unintended visual change *visible*, so
 * that refactoring a shared component stops being an act of faith.
 */
export default defineConfig({
  testDir: "./tests",
  // Warms route compilation and the on-demand image optimiser before any
  // comparison runs — see tests/global-setup.ts for why this is load-bearing.
  globalSetup: "./tests/global-setup.ts",
  // Snapshots are the artefact under review, so they live next to the spec and
  // are committed. A baseline nobody can diff against is not a baseline.
  snapshotPathTemplate: "{testDir}/__screenshots__/{projectName}/{arg}{ext}",

  // Screenshot comparison is CPU-bound and the pages are heavy, so this is not
  // worth maximising. Against a prebuilt production server there is no
  // per-route compilation for workers to queue behind.
  workers: process.env.CI ? 2 : 4,
  timeout: 90_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : [["list"], ["html", { open: "never" }]],

  expect: {
    toHaveScreenshot: {
      // Antialiasing of text differs slightly between runs even on identical
      // pixels. 0 would fail constantly; this threshold catches a moved
      // element or a changed colour while ignoring subpixel noise.
      maxDiffPixelRatio: 0.01,
      threshold: 0.2,
      animations: "disabled",
      caret: "hide",
      scale: "css",
    },
  },

  use: {
    baseURL: process.env.BASE_URL ?? "http://localhost:3000",
    // System Chrome, matching scripts/shots.mjs and scripts/mobile-check.mjs —
    // no 400MB browser download, and the engine the audience actually uses.
    channel: "chrome",
    // Under this version `reducedMotion` is only accepted via contextOptions,
    // not as a top-level `use` key.
    contextOptions: { reducedMotion: "reduce" },
    trace: "retain-on-failure",
  },

  projects: [
    { name: "mobile",  use: { ...devices["Desktop Chrome"], viewport: { width: 390,  height: 844  } } },
    { name: "tablet",  use: { ...devices["Desktop Chrome"], viewport: { width: 768,  height: 1024 } } },
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900  } } },
  ],

  webServer: {
    // A production build, not `next dev`, and deliberately so.
    //
    // In dev, `/_next/image` optimises on demand and reliably hangs on a
    // handful of derivatives — three home-page images never returned at all
    // across a 120s wait, while the same images complete in about a second
    // against `next start`. Baselining against dev meant either flaky
    // half-loaded photographs or a suite that hid them behind a threshold.
    //
    // Production is also the more faithful target: minified, no HMR, no
    // on-demand route compilation, no dev overlay.
    command: "npm run build && npm run start",
    url: "http://localhost:3000",
    // Locally this attaches to a `npm run start` you already have running,
    // which skips the rebuild. In CI it builds and starts its own.
    reuseExistingServer: !process.env.CI,
    timeout: 300_000,
  },
});

# Clinic Evo — project instructions

Global rules in `~/.claude/CLAUDE.md` and `~/.claude/docs/UI.md` still apply.
This file covers what is specific to this site.

## What this site is

A marketing site for a UK clinic-marketing agency, selling to owners of
osteopathy, physiotherapy and chiropractic practices. The founder runs a real
clinic; that is the core credibility claim and most pages lean on it.

Two consequences for design decisions:

- **It has to sell, not just rank.** Recent commit history is a run of
  conversion work — giving pages a CTA path, cutting hedged copy. A change that
  improves visual polish but removes or buries a conversion path is a
  regression, not an improvement.
- **The audience is clinicians, not designers.** Credibility beats novelty.
  Concrete numbers, named clinics and real photography carry more weight than
  visual invention.

## Art direction

**Palette** — navy `--color-ink` #0D1B2A, coral `--color-accent` #FF5B4A, white
paper, cool greys. Coral is the only accent and it is load-bearing: it marks
eyebrows, CTAs, list bullets and the second half of a hero headline. Do not
introduce a second accent, and do not spend coral on decoration — if everything
is coral, nothing reads as the action.

**Type** — DM Sans for body, Plus Jakarta Sans SemiBold for display, Brume for
the wordmark only. All three are loaded locally via `next/font/local` in
`src/app/layout.tsx`. Do not add a webfont; the CSP sets `font-src 'self'`.

**Feel** — restrained and clinical rather than showy. The shadow scale is
deliberately shallow, radii are small, and section padding is generous
(`--space-section`, 136px). When in doubt, add space rather than ornament.

## Use the tokens

`src/app/globals.css` defines the system in `@theme`: colours, shadows, radii,
containers, a type scale (`.text-display`, `.text-h1`–`.text-h4`,
`.text-body-*`), motion durations and easings, and vertical rhythm.

Compose from these. A raw hex, a one-off `0.3s ease`, or a hand-picked padding
value is how this drifts. If a value is genuinely missing, add a token.

## Motion

Framer Motion only. `FadeUp` and `PageTransition` cover reveals and route
changes — reuse them rather than hand-rolling either.

Scrolling is the browser's own. Lenis smooth scrolling was built and removed
deliberately, so don't reintroduce it as an improvement: it adds latency to the
one interaction every visitor performs constantly, it reads as a dated agency
tic rather than as quality, and its actual payoff — synchronising scrubbed or
pinned animation — is worth nothing until such animation exists.

If genuine scroll choreography is ever built (a pinned sequence, a scrubbed
diagram), GSAP ScrollTrigger is the right tool and Lenis can come back with it.
At that point ScrollTrigger must be driven from Lenis's loop rather than the
browser scroll event, or it lags; and `scroll-behavior: smooth` must stay out of
the CSS, since it fights Lenis on anchor jumps.

`lenis` remains in package.json but nothing imports it.

## Verifying UI work

Source review does not catch overlap, overflow or a photo that failed to load.

```bash
npm run dev
npm run shots                            # all routes, 3 breakpoints, sliced
npm run shots -- --routes home --viewports mobile
npm run shots -- --fold                  # above the fold only, fast
```

Output goes to `.shots/` (gitignored) as viewport-sized slices, and the script
reports horizontal scroll, failed requests and console errors alongside. Look
at the images before saying a UI change works.

`npm run shots` is the project-local version, tuned to a curated route list in
`scripts/routes.mjs` that it shares with the visual-regression suite. The global
`visual-check` skill does the same job by crawling, for projects without this
setup — prefer `npm run shots` here, since the curated list covers one of each
distinct template rather than whatever the nav happens to link.

Known trap: if a run reports 400s on `/_next/` chunks, the page rendered
unstyled and every screenshot is worthless — `rm -rf .next` and restart dev.

## The scan test

The standing criticism of this site from the 10 Aug review is that you cannot
tell what a page is about by scanning it. `npm run scan` makes that measurable
instead of arguable.

```bash
npm run scan                             # every curated route
npm run scan -- --routes patient-pulse   # one route
npm run scan -- --strict                 # exit 1 on failure, for CI
```

It renders each route and strips it to the three layers a skimmer actually
reads — headings, numbers, images — then prints the heading ladder back as a
COLD READ. Read that block as prose. If it argues the page's case on its own,
the page passes.

The important consequence: **scannability is a property of the heading layer,
not of word count.** A page whose cold read works can carry as much body copy
as the search work needs, which is why this check does not conflict with the
long-form and FAQ content that earns organic traffic. Do not delete depth to
"improve scannability" — fix the headings instead.

It fails a page for content hidden behind an interaction, ordinal-only eyebrows
("Step 05" means nothing to someone who did not count the cards above it),
generic headings, missing or duplicated `h1`s, heading-level jumps and very
long unsignposted prose runs. Collapsed FAQ accordions are reported but never
failed — that is progressive disclosure of secondary content, which is fine;
tabs hiding primary content are not.

Run it against a production server when images matter, for the reason in Known
issues below. Two traps are already handled inside the script and worth knowing
about before you extend it: framer-motion reveals sit at opacity 0 until
scrolled into view, so the context forces `reducedMotion` — without it every
page reports as invisible; and an accordion collapsed with `max-h-0
overflow-hidden` leaves its children at full size while the *parent* clips to
nothing, so visibility has to be judged by walking ancestors rather than by
measuring the element.

## Known issues

- **Next dev's image optimiser hangs.** Three home-page images
  (`danny-morgan-angel-clinic.png`, `resources/get-more-patients.jpg`,
  `resources/local-seo-healthcare.jpg`) request a `w=3840` derivative that never
  returns under `next dev` — verified over a 120s wait. The same images complete
  in ~1s against `npm run build && npm run start`. Production is unaffected, but
  anything that waits on image load must run against a production server.
- **Visual-regression suite is unfinished.** `playwright.config.ts`,
  `tests/visual.spec.ts` and `tests/global-setup.ts` are in place and wired to a
  production server, but no baselines are committed — the last run was 24/33 and
  the remainder were not diagnosed. Generate with `npm run visual:update` and
  check the diffs by hand before trusting them.
- **Contact hero has a dead right column** at ≥1024px — headline and CTA sit
  left, nothing balances them.
- Hydration attribute mismatch warning on most pages, benign so far, not traced.

## Constraints

- `trailingSlash: true` — internal links need the trailing slash or they redirect
- Strict CSP in `next.config.mjs`; `img-src` allows only self, data:,
  bodyfunction.co.uk and images.unsplash.com. Adding a third-party asset means
  editing the header.
- `/private-assets/` holds unredacted screenshots with real patient data. Never
  commit, never publish, never read into a shared context.

import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import { LP_TURNAROUND, type LpVariant } from "@/lib/lp";
import LpCtaButton from "./LpCtaButton";

/**
 * Above the fold on a 390px phone this has to fit: eyebrow, headline, one short
 * paragraph, and the CTA. The subhead was previously three sentences and
 * ~55 words, which pushed the button off the first screen on a phone — the site
 * hero runs ~40, and this one is now shorter than that again.
 *
 * The reassurance line sits directly under the buttons rather than only at the
 * form, 900px further down, because a paid visitor decides whether the offer is
 * worth their details before they have scrolled at all.
 */
/*
 * "Rolling monthly, no lock-in contract" was the third point until 9 Sep 2026.
 * Removed on Simon's instruction: the commercial model is not universally
 * rolling monthly, and it should not be represented that way on live ad
 * traffic. No source in this repo ever supported it. Nothing contractual
 * replaces it — the third point now states the positioning instead, which is
 * checkable and is the actual differentiator.
 *
 * DO NOT PUT A CONTRACT OR NOTICE-PERIOD CLAIM BACK HERE without a written
 * source from Simon. The same claim is still live in three places on the
 * organic pages and is flagged for a separate pass.
 */
const TRUST_POINTS = [
  "Built and run by a practising clinic owner",
  "MSK clinics only: osteopathy, physio, chiropractic",
  "One team for the website, search, ads and follow-up",
];

/*
 * EVERY FadeUp HERE IS `immediate`. The hero is the LCP candidate on all four
 * pages and it was shipping at opacity 0 inside a framer wrapper, so nothing
 * above the fold painted until the JavaScript had loaded and hydrated: 3.4 to
 * 4.8 seconds on a throttled phone against a 0.2s server response. There is no
 * entrance animation to lose; nobody was seeing one on a first paint.
 */
export default function LandingHero({ variant }: { variant: LpVariant }) {
  return (
    <section className="grain relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-paper)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 88% 0%, var(--color-accent-light) 0%, transparent 60%)",
        }}
      />

      {/* Tight top padding on mobile is deliberate: the first CTA has to land
          above the fold on a small phone, not just on a large one. */}
      <div className="cx-main relative pt-7 pb-14 sm:pt-12 sm:pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Copy */}
          <div>
            <FadeUp immediate>
              <p className="eyebrow mb-4 sm:mb-5">{variant.badge}</p>
              <h1 className="text-h1 mb-5 text-[var(--color-ink)]">
                {variant.headline.start}
                <em className="not-italic text-[var(--color-accent)]">
                  {variant.headline.accent}
                </em>
                {variant.headline.end}
              </h1>
            </FadeUp>

            <FadeUp immediate>
              {/* Sized with utilities rather than .text-body-lg so it can step
                  down on mobile — the design-system text classes are plain CSS
                  and take no responsive variants. */}
              <p className="mb-7 max-w-[52ch] text-base leading-[1.6] text-[var(--color-muted)] sm:text-[1.125rem] sm:leading-[1.65]">
                {variant.subhead}
              </p>
            </FadeUp>

            <FadeUp immediate>
              {/* One action. Full width on a phone so it is not a narrow tap
                  target, shrink-to-fit from sm. */}
              <div className="flex flex-col items-stretch sm:flex-row sm:items-center">
                <LpCtaButton placement="hero" />
              </div>
            </FadeUp>

            <FadeUp immediate>
              <p className="mt-4 text-body-sm text-[var(--color-muted)]">
                Free, no obligation. A written review of your{" "}
                {variant.practiceNoun}, back to you {LP_TURNAROUND}.
              </p>
            </FadeUp>
          </div>

          {/* Real clinic, real practitioner — deliberately not stock photography */}
          <FadeUp immediate>
            <figure className="relative">
              {/* 4:3 below lg, square from lg. The source is square, and at
                  100vw on a phone that was a 390px-tall photograph filling most
                  of the second screen before the first hard number. Cropping
                  from the top keeps the faces and the sign on the wall. */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] shadow-[var(--shadow-card)] lg:aspect-square">
                <Image
                  src="/images/danny_and_co.jpg"
                  alt="Danny Morgan with the practitioner team at Bodyfunction Clinic reception"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 18%" }}
                  priority
                />
              </div>
              <figcaption className="mt-4 flex gap-3 text-body-sm text-[var(--color-muted)]">
                <span
                  aria-hidden="true"
                  className="mt-2 h-px w-6 flex-shrink-0 bg-[var(--color-accent)] opacity-60"
                />
                <span>
                  <strong className="font-semibold text-[var(--color-ink)]">
                    Danny Morgan, M.Ost
                  </strong>
                  , Clinic Evo&apos;s founder, with his team at Bodyfunction
                  Clinic, London.
                </span>
              </figcaption>
            </figure>
          </FadeUp>
        </div>

        {/* Trust strip as one full-width row beneath the grid, the same pattern
            PageHero uses on the site pages. Inside the copy column these three
            wrap to a stack, because that column is only ~530px at 1440. */}
        <FadeUp immediate>
          <div className="mt-10 border-t border-[var(--color-border)] pt-7">
            <ul
              role="list"
              className="flex flex-col flex-wrap gap-x-10 gap-y-2.5 sm:flex-row"
            >
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className="flex-shrink-0 text-[var(--color-accent)]"
                  >
                    <path
                      d="M2.5 7l3 3 6-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm font-medium text-[var(--color-charcoal)]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

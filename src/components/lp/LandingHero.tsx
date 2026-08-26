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
const TRUST_POINTS = [
  "Built and run by a practising clinic owner",
  "MSK clinics only — osteopathy, physio, chiropractic",
  "Rolling monthly, no lock-in contract",
];

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
            <FadeUp>
              <p className="eyebrow mb-4 sm:mb-5">{variant.badge}</p>
              <h1 className="text-h1 mb-5 text-[var(--color-ink)]">
                {variant.headline.start}
                <em className="not-italic text-[var(--color-accent)]">
                  {variant.headline.accent}
                </em>
                {variant.headline.end}
              </h1>
            </FadeUp>

            <FadeUp delay={0.08}>
              {/* Sized with utilities rather than .text-body-lg so it can step
                  down on mobile — the design-system text classes are plain CSS
                  and take no responsive variants. */}
              <p className="mb-7 max-w-[52ch] text-base leading-[1.6] text-[var(--color-muted)] sm:text-[1.125rem] sm:leading-[1.65]">
                {variant.subhead}
              </p>
            </FadeUp>

            <FadeUp delay={0.14}>
              {/* One action. Full width on a phone so it is not a narrow tap
                  target, shrink-to-fit from sm. */}
              <div className="flex flex-col items-stretch sm:flex-row sm:items-center">
                <LpCtaButton placement="hero" />
              </div>
            </FadeUp>

            <FadeUp delay={0.18}>
              <p className="mt-4 text-body-sm text-[var(--color-muted)]">
                Free, no obligation. A written review of your{" "}
                {variant.practiceNoun}, back to you {LP_TURNAROUND}.
              </p>
            </FadeUp>
          </div>

          {/* Real clinic, real practitioner — deliberately not stock photography */}
          <FadeUp delay={0.1}>
            <figure className="relative">
              <div className="overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] shadow-[var(--shadow-card)]">
                <Image
                  src="/images/danny_and_co.jpg"
                  alt="Danny Morgan with the practitioner team at Bodyfunction Clinic reception"
                  width={1400}
                  height={1400}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-auto w-full"
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
                  </strong>{" "}
                  — Clinic Evo&apos;s founder, with his team at Bodyfunction Clinic,
                  London. The clinic this system was built and tested inside.
                </span>
              </figcaption>
            </figure>
          </FadeUp>
        </div>

        {/* Trust strip as one full-width row beneath the grid, the same pattern
            PageHero uses on the site pages. Inside the copy column these three
            wrap to a stack, because that column is only ~530px at 1440. */}
        <FadeUp delay={0.22}>
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

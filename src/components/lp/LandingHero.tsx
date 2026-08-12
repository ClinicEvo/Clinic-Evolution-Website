import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import type { LpVariant } from "@/lib/lp";
import LpCtaButton from "./LpCtaButton";

const TRUST_POINTS = [
  "Built by a working clinic owner",
  "Proven in a real clinic first",
  "No jargon, no lock-in contracts",
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
      <div className="cx-main relative pt-7 pb-16 sm:pt-12 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Copy */}
          <div>
            <FadeUp>
              <p className="eyebrow mb-4 sm:mb-5">{variant.badge}</p>
              <h1 className="text-h1 mb-5 text-[var(--color-ink)] sm:mb-6">
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
              <p className="mb-6 max-w-[54ch] text-base leading-[1.6] text-[var(--color-muted)] sm:mb-8 sm:text-[1.125rem] sm:leading-[1.7]">
                {variant.subhead}
              </p>
            </FadeUp>

            <FadeUp delay={0.14}>
              <LpCtaButton placement="hero" />

              <ul
                role="list"
                className="mt-8 flex flex-col gap-x-7 gap-y-2.5 sm:flex-row sm:flex-wrap"
              >
                {TRUST_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-2.5">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="flex-shrink-0 text-[var(--color-accent)]"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-body-sm font-medium text-[var(--color-charcoal)]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
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
      </div>
    </section>
  );
}

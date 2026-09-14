import FadeUp from "@/components/ui/FadeUp";
import {
  GROWTH_ENGINES,
  GROWTH_TRUST_LINE,
  type GrowthVariant,
} from "@/lib/growth-system";
import GrowthCtaButton from "./GrowthCtaButton";

/**
 * The brief's first-screen test: the visitor should understand the audience,
 * the outcome and the scope before scrolling. [src: lp brief, p4]
 *
 * Left: who it is for (eyebrow), what it is (H1), what is in it (subhead), the
 * one action, and the trust line the brief puts under the CTA.
 *
 * Right: the four engines at a glance, so the scope is on the first screen
 * rather than three sections down. The engine names are deliberately NOT
 * headings here: they are h3s in GrowthEngines, and putting four h2s in the
 * hero would front-load the heading ladder with a menu before the page has
 * stated its case. The panel's footer says the price is on the page, which is
 * what a sceptical clinic owner scans for first, without putting the figure
 * above the argument for it.
 *
 * Every FadeUp is `immediate`: the hero is the LCP candidate and must paint
 * before hydration. See LandingHero for the measurement behind that.
 */
export default function GrowthHero({ variant }: { variant: GrowthVariant }) {
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

      <div className="cx-main relative pt-7 pb-14 sm:pt-12 sm:pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <FadeUp immediate>
              <p className="eyebrow mb-4 sm:mb-5">{variant.eyebrow}</p>
              <h1 className="text-h1 mb-5 text-[var(--color-ink)]">
                {variant.headline.start}
                <em className="not-italic text-[var(--color-accent)]">
                  {variant.headline.accent}
                </em>
                {variant.headline.end}
              </h1>
            </FadeUp>

            <FadeUp immediate>
              <p className="mb-7 max-w-[52ch] text-base leading-[1.6] text-[var(--color-muted)] sm:text-[1.125rem] sm:leading-[1.65]">
                {variant.subhead}
              </p>
            </FadeUp>

            <FadeUp immediate>
              <div className="flex flex-col items-stretch sm:flex-row sm:items-center">
                <GrowthCtaButton placement="hero" />
              </div>
            </FadeUp>

            <FadeUp immediate>
              <p className="mt-4 text-body-sm text-[var(--color-muted)]">
                {GROWTH_TRUST_LINE}
              </p>
            </FadeUp>
          </div>

          <FadeUp immediate>
            <div className="overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
              <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-muted)]">
                  The system at a glance
                </p>
              </div>
              <ol role="list" className="divide-y divide-[var(--color-border)]">
                {GROWTH_ENGINES.map((engine, index) => (
                  <li key={engine.name} className="grid grid-cols-[1.75rem_1fr] gap-3 px-6 py-4">
                    <span
                      aria-hidden="true"
                      className="pt-0.5 font-display text-sm font-semibold tabular-nums text-[var(--color-accent-text)]"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold leading-snug text-[var(--color-ink)]">
                        {engine.name}
                      </p>
                      <p className="mt-0.5 text-sm leading-snug text-[var(--color-muted)]">
                        {engine.short}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="border-t border-[var(--color-border)] bg-[var(--color-accent-light)] px-6 py-4 text-sm leading-relaxed text-[var(--color-charcoal)]">
                <strong className="font-semibold text-[var(--color-ink)]">
                  One system, one monthly fee, one team.
                </strong>{" "}
                The price is on this page, above the questions.
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

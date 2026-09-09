import FadeUp from "@/components/ui/FadeUp";
import { LP_RESULTS_CAVEAT, type LpVariant } from "@/lib/lp";

/**
 * §5 and §6 — four hard numbers, directly under the hero.
 *
 * This is the structural change the brief was really asking for. The paid
 * journey used to run claim, then origin story, then offer, and a visitor met
 * their first checkable figure three sections down. Everything above it was
 * assertion: built by clinic owners, healthcare specialists, no jargon. Every
 * competitor in the same auction says those things. Only these four can be
 * looked up.
 *
 * WHICH FOUR DIFFERS PER PAGE since 9 Sep 2026 — see `proofStrip` and the note
 * on STRIP_OSTEOPATHY / STRIP_MSK in src/lib/lp.ts. Osteopathy leads with both
 * Lind Street figures so every tile on it is an osteopathy clinic's own result;
 * the other three lead with a broader MSK mix. The evidence base is identical
 * on all four pages; only the selection and the heading above it change.
 *
 * FOUR TILES IS THE CAP, and it is a deliberate reversal of a standing
 * instruction, which is worth knowing before adding a fifth. Simon, 3 Sep 2026:
 * "dont use these all in one block we dont want to overwhelm with numbers - as
 * soon as a few numbers are seen together they loose their meaning." That
 * produced the one-figure-per-page rule in src/lib/clinic-capacity.ts, which is
 * why 212 lives on the home page and 572 on the Bodyfunction case study. §6 of
 * the 9 Sep brief asks for exactly these four together on the paid pages, so
 * the later instruction wins here — but only here, and the earlier reasoning is
 * still right about the organic pages.
 *
 * WHY IT IS SAFE AS A BLOCK where a StatBand was not: each tile carries its own
 * unit and its own owner, so nothing has to be held in memory and reconciled
 * later. That was the actual fault in the old three-up bands, not the count.
 *
 * NO COUNTERS. `StatTiles` on the case studies animates from zero, and because
 * it is a client component that zero is what went into the server-rendered
 * HTML: crawlers and no-JS visitors were served "+0%" and "0×" where the copy
 * said "+570%" and "5×". These are plain strings and must stay plain strings.
 * The fix for StatTiles is in src/components/case-studies/CaseStudyCharts.tsx.
 *
 * THE CAVEAT IS NOT DECORATION. §27 forbids implying that past results repeat,
 * and the audience is qualified to spot it if we do. It sits with the figures
 * rather than in the footer for that reason.
 */
export default function LandingProofStrip({ variant }: { variant: LpVariant }) {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] py-12 sm:py-14 lg:py-16">
      <div className="cx-main">
        <FadeUp>
          <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="text-h3 max-w-[30ch] text-[var(--color-ink)]">
              {variant.proofHeading.start}
              <em className="not-italic text-[var(--color-accent)]">
                {variant.proofHeading.accent}
              </em>
            </h2>
            {/* §5 asks for this transparency explicitly, and it belongs level
                with the figures rather than under them: a reader who spots the
                relationship for themselves after reading the numbers has been
                caught out, and a reader who is told first has been given a
                reason to trust the rest. */}
            <p className="text-body-sm max-w-[42ch] text-[var(--color-muted)] lg:text-right">
              Bodyfunction Clinic in London belongs to Clinic Evo&apos;s founder,
              Danny Morgan. It is where this system was built, and it was the
              first clinic it had to work for.
            </p>
          </div>
        </FadeUp>

        {/* Four across at lg, two-up on a phone. Divided by rules rather than
            boxed as cards: the global rule bans three-up equal card layouts and
            a four-up card row is the same shape one wider. */}
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10 lg:grid-cols-4"
        >
          {variant.proofStrip.map((stat, index) => (
            <FadeUp key={stat.figure} delay={0.05 + index * 0.06}>
              <li className="border-t-2 border-[var(--color-ink)]/10 pt-4">
                {/* Figure and label in one h3, so the number reaches the
                    heading ladder carrying its own unit. `npm run scan` reads
                    headings, and a bare 48px figure is invisible to it. */}
                <h3 className="text-[var(--color-ink)]">
                  <span className="block font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-[1.05] tracking-tight text-[var(--color-accent-text)]">
                    {stat.figure}
                  </span>
                {/* The label class is spelled out rather than using
                    `.text-label`. scripts/scan.mjs treats a .text-label element
                    as a label in its own right wherever it sits, so nesting one
                    inside the h3 made every tile appear twice in the cold read:
                    "212 NEW PATIENTS" as the heading and "NEW PATIENTS" again
                    beneath it. Identical rendering, no double count. */}
                  <span className="mt-2.5 block text-[0.68rem] font-bold uppercase leading-[1.35] tracking-[0.15em] text-[var(--color-charcoal)]">
                    {stat.label}
                  </span>
                </h3>
                <p className="text-body-sm mt-1.5 text-[var(--color-muted)]">
                  {stat.context}
                </p>
              </li>
            </FadeUp>
          ))}
        </ul>

        <FadeUp delay={0.3}>
          <p className="mt-8 max-w-[68ch] text-[13px] leading-relaxed text-[var(--color-muted)]">
            {LP_RESULTS_CAVEAT}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

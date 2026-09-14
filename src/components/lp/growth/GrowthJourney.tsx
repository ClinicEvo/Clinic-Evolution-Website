import FadeUp from "@/components/ui/FadeUp";
import { GROWTH_JOURNEY } from "@/lib/growth-system";

/**
 * Section 04, "How it works": traffic, enquiry, conversion, patient,
 * retention, reactivation, referrals and reviews. [src: lp brief, p5]
 *
 * Eight stages divided by rules, four across on a laptop and two on a phone.
 * Not cards: the global rule bans equal card rows, and a rule-divided grid is
 * the same device the audit pages' proof strip uses. The stage name is the h3
 * and the numeral is a quiet index beside it, because "05" tells a skimmer
 * nothing on its own.
 */
export default function GrowthJourney() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] py-24 sm:py-28 lg:py-32">
      <div className="cx-main">
        <FadeUp>
          <div className="mb-12 max-w-[52rem] lg:mb-14">
            <p className="eyebrow mb-5">How it works</p>
            <h2 className="text-h2 mb-5 text-[var(--color-ink)]">
              From a local search to a booked patient,{" "}
              <em className="not-italic text-[var(--color-accent)]">
                and back again
              </em>
            </h2>
            <p className="text-body-lg max-w-[56ch] text-[var(--color-muted)]">
              The first four stages bring a new patient in. The last four keep
              them, bring them back, and turn them into the next patient. Most
              clinics run the first half and hope for the second.
            </p>
          </div>
        </FadeUp>

        <ol
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-12"
        >
          {GROWTH_JOURNEY.map((step, index) => (
            <li key={step.stage} className="border-t-2 border-[var(--color-ink)]/10 pt-4">
              <FadeUp delay={0.04 + index * 0.04}>
                <span
                  aria-hidden="true"
                  className="block text-xs font-semibold tabular-nums text-[var(--color-accent-text)]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-h4 mt-2 text-[var(--color-ink)]">{step.stage}</h3>
                <p className="text-body-sm mt-2 text-[var(--color-muted)]">{step.body}</p>
              </FadeUp>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import FadeUp from "@/components/ui/FadeUp";
import {
  GROWTH_AD_BUDGET_NOTE,
  GROWTH_COSTS,
  GROWTH_COST_NOTE,
  GROWTH_FEE,
  GROWTH_FEE_COVERS,
  GROWTH_PRICING_CTA_LABEL,
  GROWTH_SECTION_ANCHORS,
  GROWTH_TOTAL,
} from "@/lib/growth-system";
import GrowthCtaButton from "./GrowthCtaButton";

/**
 * Section 08, "Investment": the £1,350 monthly fee plus transparent additional
 * costs, before the FAQ and the final CTA. [src: lp brief, p5, p7 and p9]
 *
 * The fee is in the h2 so it reaches the heading ladder with its unit and its
 * qualifier attached: a skimmer reads "£1,350 a month, and what is paid
 * separately" and has the whole commercial picture in one line.
 *
 * The table is the brief's, in its order, with the total as the last row. The
 * total row is navy rather than coral: coral marks the action on this site,
 * and the action here is the button under the table, not the number in it.
 */
export default function GrowthInvestment() {
  return (
    <section
      id={GROWTH_SECTION_ANCHORS.investment.slice(1)}
      tabIndex={-1}
      className="scroll-mt-20 focus-visible:outline-none border-b border-[var(--color-border)] bg-[var(--color-surface)] py-24 sm:py-28 lg:py-32"
    >
      <div className="cx-main">
        <FadeUp>
          <div className="mb-12 max-w-[52rem] lg:mb-14">
            <p className="eyebrow mb-5">Investment</p>
            <h2 className="text-h2 mb-5 text-[var(--color-ink)]">
              {GROWTH_FEE} a month,{" "}
              <em className="not-italic text-[var(--color-accent)]">
                and what is paid separately
              </em>
            </h2>
            <p className="text-body-lg max-w-[58ch] text-[var(--color-muted)]">
              The Growth System is one monthly fee. Three costs sit outside it
              and are paid by the clinic directly. They are set out here so
              there is nothing left to discover on the call.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <FadeUp delay={0.06}>
            <div>
              <div className="overflow-x-auto rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                      <th
                        scope="col"
                        className="px-4 py-4 text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-muted)] sm:px-6"
                      >
                        Cost
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-right text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-muted)] sm:px-6"
                      >
                        Estimated monthly amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {GROWTH_COSTS.map((row) => (
                      <tr key={row.item} className="border-b border-[var(--color-border)]">
                        <td className="px-4 py-4 text-body text-[var(--color-charcoal)] sm:px-6">
                          {row.item}
                          {"included" in row && row.included ? (
                            <span className="ml-2 inline-block rounded-[var(--radius-sm)] bg-[var(--color-accent-light)] px-2 py-0.5 align-middle text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-accent-text)]">
                              The fee
                            </span>
                          ) : null}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right font-display text-lg font-semibold tabular-nums text-[var(--color-ink)] sm:px-6">
                          {row.amount}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-[var(--color-ink)] text-white">
                      <th scope="row" className="px-4 py-5 text-left text-body font-semibold sm:px-6">
                        {GROWTH_TOTAL.label}
                      </th>
                      <td className="whitespace-nowrap px-4 py-5 text-right font-display text-xl font-bold tabular-nums text-[var(--color-accent)] sm:px-6">
                        {GROWTH_TOTAL.amount}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 max-w-[64ch] text-body-sm text-[var(--color-muted)]">
                {GROWTH_COST_NOTE}
              </p>
              <p className="mt-3 max-w-[64ch] text-body-sm text-[var(--color-muted)]">
                {GROWTH_AD_BUDGET_NOTE}
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div className="card-surface p-7 sm:p-8">
              <p className="text-h4 mb-1.5 text-[var(--color-ink)]">
                What the {GROWTH_FEE} covers
              </p>
              <p className="text-body-sm mb-6 text-[var(--color-muted)]">
                Delivery and ongoing management of all of it.
              </p>
              <ul role="list" className="flex flex-col gap-2.5">
                {GROWTH_FEE_COVERS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="mt-1 flex-shrink-0 text-[var(--color-accent)]"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-body-sm text-[var(--color-charcoal)]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-[var(--color-border)] pt-6">
                <GrowthCtaButton
                  placement="pricing"
                  size="md"
                  wrap
                  label={GROWTH_PRICING_CTA_LABEL}
                  className="w-full"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

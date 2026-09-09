import FadeUp from "@/components/ui/FadeUp";
import { LP_TURNAROUND, type LpVariant } from "@/lib/lp";
import LpCtaButton from "./LpCtaButton";

/**
 * §8 — the offer, stated third instead of last.
 *
 * The audit was only ever explained at the bottom of the page, in LandingAudit,
 * beside the form. That is fine for someone who read the whole thing and wrong
 * for everyone else: the thing being offered for free was invisible to a
 * visitor who bounced at 40% depth, which on paid traffic is most of them. So
 * the proposition is stated here, once the numbers above have earned the right
 * to make it, and LandingAudit at the foot of the page now does the form and
 * the reassurance rather than introducing the idea.
 *
 * The two are deliberately not the same copy. This section says what the audit
 * LOOKS AT (§8's list, which is about their clinic). LandingAudit says what
 * COMES BACK and what it costs them to ask. Repeating either would be the
 * "double content next to each other" fault the 10 Aug review objected to.
 *
 * §8: "Do not make the audit sound like a generic automated report." Hence the
 * last line, which is the only promise the section makes and the one that
 * separates this from a scanner tool.
 */
const AUDIT_LOOKS_AT = [
  "Your website, and what it does with somebody who is ready to book",
  "Your Google Business Profile and whether it is earning the map results",
  "Where you rank locally, and which clinics are above you",
  "Your organic search visibility and the conditions you are missing",
  "Your Google Ads, if you are running any, and what they pay per enquiry",
  "What happens to an enquiry after it arrives, and how fast",
  "Whether there are lapsed patients worth contacting again",
];

export default function LandingAuditPitch({ variant }: { variant: LpVariant }) {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] py-20 sm:py-24 lg:py-28">
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <FadeUp>
            <div>
              <p className="eyebrow mb-5">Free clinic audit</p>
              {/* §8's suggested heading. It names the reader's problem rather
                  than our deliverable, which is why it beats "What the free
                  clinic audit includes" in the same slot. */}
              <h2 className="text-h2 mb-6 text-[var(--color-ink)]">
                Find out where your {variant.practiceNoun} is{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  losing potential patients
                </em>
              </h2>
              <p className="text-body-lg mb-7 max-w-[46ch] text-[var(--color-muted)]">
                We go through your clinic the way we went through our own, and
                come back {LP_TURNAROUND} with what is working, what is costing
                you patients, and what we would fix first.
              </p>
              <p className="text-body mb-9 max-w-[46ch] font-medium text-[var(--color-ink)]">
                A person does it and writes it. It is not a tool that emails you
                a score out of a hundred.
              </p>

              <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
                <LpCtaButton placement="mid-audit-pitch" />
                <p className="text-body-sm text-[var(--color-muted)]">
                  Free, and yours to keep either way.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="lg:pt-11">
              <p className="text-label mb-5 text-[var(--color-muted)]">
                What we look at
              </p>
              <ul role="list" className="flex flex-col">
                {AUDIT_LOOKS_AT.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 border-t border-[var(--color-border)] py-3.5 last:border-b"
                  >
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
                    <span className="text-body text-[var(--color-charcoal)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

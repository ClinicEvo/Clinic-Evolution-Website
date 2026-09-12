import LpAuditForm from "@/components/forms/LpAuditForm";
import FadeUp from "@/components/ui/FadeUp";
import { LP_FORM_ANCHOR, LP_TURNAROUND, type LpVariant } from "@/lib/lp";

/**
 * §8 — the offer, stated third instead of last. AND, SINCE 9 SEP 2026, THE
 * FORM, which is the structural change in this file's history that matters.
 *
 * The audit used to be explained here and asked for at the foot of the page,
 * nine sections and roughly 1,500 words later, at 88% depth on a phone. For a
 * free offer that costs the reader four fields, that is a long walk between
 * the pitch and the ask, and the proportion argument in page.tsx says the page
 * should be shorter than it can be made without losing the sections that earn
 * organic trust. Putting the form where the offer is made is the other way to
 * close that gap. The foot-of-page form stays as the second chance for the
 * reader who went through the FAQ first.
 *
 * Every CTA on the page and the mobile sticky bar point at this section
 * (#audit), and the CTA that used to sit under the pitch copy is gone: a button
 * saying "get my free audit" beside a form that gets you your free audit is a
 * button pointing at itself.
 *
 * ORDER ON A PHONE: pitch copy, then the form, then the "what we look at" list.
 * The reader who has just read the pitch gets the ask immediately; the list is
 * supporting detail. On desktop the grid puts the form in a sticky right column
 * spanning both rows, so it is beside the copy AND beside the list.
 *
 * The two sections are deliberately not the same copy. This one says what the
 * audit LOOKS AT (§8's list, which is about their clinic). LandingAudit says
 * what it costs them to ask. Repeating either would be the "double content next
 * to each other" fault the 10 Aug review objected to.
 *
 * §8: "Do not make the audit sound like a generic automated report." Hence the
 * line under the paragraph, which is the only promise the section makes and
 * the one place on the page that reassurance now lives.
 *
 * THE WHOLE SECTION IS A POSITIVE FRAME and should stay one. By the time a
 * reader is here they have accepted the problem and want the offer. Do not put
 * "where you are losing patients" back into this heading.
 */
const AUDIT_LOOKS_AT = [
  "Your website, and what it does with somebody who is ready to book",
  "Your Google Business Profile and whether it is earning the map results",
  "Where you rank locally, and which clinics are above you",
  "Your organic search visibility, and the conditions worth ranking for",
  "Your Google Ads, if you are running any, and what they pay per enquiry",
  "What happens to an enquiry after it arrives, and how fast",
  "Whether there are lapsed patients worth contacting again",
];

export default function LandingAuditPitch({ variant }: { variant: LpVariant }) {
  return (
    // Every CTA on the page lands here — see LP_FORM_ANCHOR before renaming.
    <section
      id={LP_FORM_ANCHOR.slice(1)}
      tabIndex={-1}
      className="scroll-mt-20 focus-visible:outline-none border-b border-[var(--color-border)] bg-[var(--color-paper)] py-20 sm:py-24 lg:py-28"
    >
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-12">
          <FadeUp className="lg:col-start-1 lg:row-start-1">
            <div>
              <p className="eyebrow mb-5">No cost, no obligation</p>
              <h2 className="text-h2 mb-6 text-[var(--color-ink)]">
                Free audit:{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  where your next patients will come from
                </em>
              </h2>
              {/* "where we would start", not "what we would do first": the
                  foot-of-page heading owns that phrase. */}
              <p className="text-body-lg mb-7 max-w-[46ch] text-[var(--color-muted)]">
                We go through your {variant.practiceNoun} the way we went
                through our own, and come back {LP_TURNAROUND} with what is
                already working, where the biggest gains are, and where we
                would start.
              </p>
              <p className="text-body max-w-[46ch] font-medium text-[var(--color-ink)]">
                A person goes through it themselves, start to finish.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.08} className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
            {/* data-lp-form: LandingStickyCta hides while any form is on screen. */}
            <div className="lg:sticky lg:top-28" data-lp-form>
              <div className="card-surface p-6 sm:p-8">
                <p className="text-h4 mb-1.5 text-[var(--color-ink)]">
                  Get your free clinic audit
                </p>
                <p className="text-body-sm mb-6 text-[var(--color-muted)]">
                  No obligation, and nothing to prepare.
                </p>
                <LpAuditForm variant={variant} position="pitch" />
              </div>
              <p className="mt-4 text-body-sm text-[var(--color-muted)]">
                Free, whether or not we end up working together.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.12} className="lg:col-start-1 lg:row-start-2">
            <div>
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

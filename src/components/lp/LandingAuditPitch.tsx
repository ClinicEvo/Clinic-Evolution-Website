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
 *
 * THE WHOLE SECTION IS A POSITIVE FRAME and should stay one. The problems are
 * LandingProblem's job, immediately before this; by the time a reader is here
 * they have accepted the problem and want the offer. Do not put "where you are
 * losing patients" back into this heading.
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
    <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] py-20 sm:py-24 lg:py-28">
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <FadeUp>
            <div>
              {/* The eyebrow gave up "Free clinic audit" when the h2 took
                  "Free audit" as its opening words. Two of them at 11px and
                  52px inches apart is the close-range repetition this project
                  keeps having to remove; the eyebrow now adds the terms
                  instead of restating the name. */}
              <p className="eyebrow mb-5">No cost, no obligation</p>
              {/* POSITIVE FRAME, on Simon's instruction 9 Sep 2026. This was
                  §8's suggested heading, "Find out where your clinic is losing
                  potential patients", and it went in as supplied. It is a loss
                  frame and it is also faintly accusatory: it opens the OFFER
                  section by telling a clinic owner they are getting something
                  wrong.
                  
                  The problems belong in LandingProblem, which is the section
                  before this one and is built to name them. By the time a
                  reader arrives here they have already agreed something is
                  wrong; what they want now is what they get. So this section
                  is positive throughout, which is also the right division of
                  labour between the two. */}
              {/* Opened on "See where", which conveys nothing. This is the
                  free-audit section: read as a heading on its own it has to say
                  so, and "free" is the highest-value word available anywhere on
                  the page. */}
              <h2 className="text-h2 mb-6 text-[var(--color-ink)]">
                Free audit:{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  where your next patients will come from
                </em>
              </h2>
              <p className="text-body-lg mb-7 max-w-[46ch] text-[var(--color-muted)]">
                We go through your {variant.practiceNoun} the way we went
                through our own, and come back {LP_TURNAROUND} with what is
                already working, where the biggest gains are, and what we would
                do first.
              </p>
              {/* Second sentence dropped: "It is not a tool that emails you a
                  score out of a hundred" was a fourth instance of the
                  "not X, but Y" device in the page's visible copy, and the
                  same point is already made in LandingAudit's reassurance list
                  and in the FAQ. */}
              <p className="text-body mb-9 max-w-[46ch] font-medium text-[var(--color-ink)]">
                A person goes through it and writes the response themselves.
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

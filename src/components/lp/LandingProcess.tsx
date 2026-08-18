import FadeUp from "@/components/ui/FadeUp";
import { LP_TURNAROUND } from "@/lib/lp";

/**
 * Recast from our procedure into the reader's next four steps.
 *
 * The old h2 was "The audit comes first, then the system is scoped to your
 * clinic". Four faults at once, all of them the reason it read as asking the
 * reader to decode us:
 *
 *  - No reader in the sentence. Both verbs are agentless ("comes first", "is
 *    scoped") and both grammatical subjects are our artefacts, so the one line
 *    answering "what happens to me" contained no "you" doing anything.
 *  - "The system" had no local referent. Its antecedent is LandingSystem's h2,
 *    but the Patient Pulse sections sit between them, carrying a product logo —
 *    so on a scroll-scan the nearest thing that looks like a named system is
 *    Patient Pulse, and the definite article resolves to the wrong noun.
 *  - "Scoped" is procurement vocabulary. It was not one slip: it appeared five
 *    times in reader-visible copy, and coral — which this project treats as
 *    load-bearing — was spending itself on it twice in adjacent sections (here
 *    and in the FAQ heading).
 *  - The eyebrow "How we start" declared the section to be about our procedure,
 *    and the four step labels agreed with it: "Free clinic audit / Scope and
 *    plan / Build and launch / Run and report" are internal phase names, and the
 *    first duplicated LandingAudit's eyebrow verbatim so its slot argued nothing.
 *
 * Two further fixes the client did not name. Step two used to promise a written
 * plan including "what it will cost you to run", while LandingAudit deliberately
 * excludes a costed figure from the audit deliverables — the page contradicted
 * itself one screen apart. Confirmed 18 Aug 2026: the plan is written, the cost
 * is a conversation, and both sections now say that.
 *
 * And this intro was the only one on the page with no second column — a
 * max-w-[42ch] heading alone in a 1200px row, which left a hole. It has a right
 * column now, which is also where the risk reversal goes.
 *
 * Deliberately says nothing about what is or is not charged before sign-off:
 * that was raised and not settled, so it stays off the page.
 */
const STEPS = [
  {
    label: "You answer four questions",
    body: "Your name, email, phone and your clinic website. No questionnaire, and nothing to dig out beforehand.",
  },
  {
    label: "You get the audit back",
    body: `In writing, ${LP_TURNAROUND}. It says where your clinic stands on each of the things listed further down this page, and what to fix first.`,
  },
  {
    label: "You decide, knowing the cost",
    body: "A written plan in plain English: which layers your clinic needs first, and what each one is meant to change. We talk you through what it would realistically cost to run, so the number you are deciding against is a real one.",
  },
  {
    label: "We build it, then report monthly",
    body: "Website, search foundations and campaigns go live together, wired into Patient Pulse and call handling from day one, so nothing arrives with no one to answer it. Then one team reports on enquiries and bookings, with the ad spend and the cost per enquiry next to them.",
  },
];

export default function LandingProcess() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)] py-24 sm:py-28 lg:py-32">
      <div className="cx-main">
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <FadeUp>
            <div>
              <p className="eyebrow mb-5">What happens after you send the form</p>
              <h2 className="text-h2 text-[var(--color-ink)]">
                You get the audit first, then the plan, then{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  you decide
                </em>
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div>
              <p className="text-body-lg mb-4 max-w-[50ch] text-[var(--color-muted)]">
                The audit tells you where your clinic stands. The plan says what
                we would do about it, and in what order. Nothing is built until
                you have both of those in front of you and say yes.
              </p>
              <p className="text-body max-w-[50ch] font-medium text-[var(--color-ink)]">
                The audit is free and the plan is yours to keep, whether you go
                ahead or not.
              </p>
            </div>
          </FadeUp>
        </div>

        <ol
          role="list"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {STEPS.map((step, index) => (
            <FadeUp key={step.label} delay={index * 0.07}>
              {/* Stagger the columns so this does not read as an even card row */}
              <li className={index % 2 === 1 ? "lg:mt-12" : ""}>
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] text-[13px] font-bold tabular-nums text-white">
                    {index + 1}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-[var(--color-border)]"
                  />
                </div>
                <h3 className="text-h4 mb-2 text-[var(--color-ink)]">
                  {step.label}
                </h3>
                <p className="text-body-sm text-[var(--color-muted)]">{step.body}</p>
              </li>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}

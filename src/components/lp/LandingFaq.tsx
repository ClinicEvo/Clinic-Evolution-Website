import FAQAccordion from "@/components/sections/FAQAccordion";
import FadeUp from "@/components/ui/FadeUp";
import type { LpVariant } from "@/lib/lp";

/**
 * Shared objections, plus one question written for this ad group specifically.
 *
 * The variant question is most of what makes a variant more than a headline
 * swap: a physiotherapist who clicked a physiotherapy ad previously found
 * nothing below the H1 written for physiotherapists.
 *
 * No FAQSchema on this page, deliberately — it is noindex, and marking up
 * questions Google is told not to index is pointless. The organic service pages
 * carry the schema.
 *
 * The cost answer is the one that matters most on paid traffic and it used to be
 * "it depends". It still cannot quote a price — the site publishes none, and
 * inventing one is out — so it names what drives the number and says the audit
 * conversation is where a real one arrives. Deliberately a conversation rather
 * than a promised written quote: every audit response would otherwise owe the
 * reader a costed proposal, which is a commitment the page should not make on
 * the delivery team's behalf.
 */
const SHARED_FAQS = [
  {
    question: "What does it cost?",
    answer:
      "We do not publish a single price, because the honest answer depends on how competitive your town is, how much of the system you already have working, and what you want to spend on ads. The audit is where that gets answered: we will talk you through what the work involves and what it would realistically cost to run, so you are deciding against a real number rather than a guess. If it is more than you want to spend, you have lost nothing.",
  },
  {
    question: "Is this a fixed package, or can it be scoped to my clinic?",
    answer:
      "It is one system, scoped. Every clinic gets the same five layers connected to each other, because a website that ranks and then leaves its enquiries unanswered produces a quiet diary anyway — that connection is the point. What changes clinic to clinic is the order, the emphasis and the budget: the audit works out which layer needs the most attention first, and the scope is built from that rather than from a tier list.",
  },
  {
    question: "How is this different from a normal marketing agency?",
    answer:
      "We were a clinic before we were an agency. Clinic Evo was built inside Bodyfunction Clinic in London by its owner, tested on that clinic's own diary, and only then offered to anyone else. The practical difference is that we take responsibility past the enquiry: the call handling, the follow-up and the recall are ours to run, so there is no gap to argue about.",
  },
  {
    question: "Do I have to sign a long contract?",
    answer:
      "No. Rolling monthly, no long-term lock-in. The work needs a few months to compound, and we will tell you that plainly, but you are not tied in while it does.",
  },
  {
    question: "What actually happens after I send the form?",
    answer:
      "A person reviews your clinic — not an automated report generator — and comes back within two working days with what they found. If you would rather talk it through first, call the number at the top of this page.",
  },
];

export default function LandingFaq({ variant }: { variant: LpVariant }) {
  const faqs = [SHARED_FAQS[0], variant.variantFaq, ...SHARED_FAQS.slice(1)];

  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] py-24 sm:py-28 lg:py-32">
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <FadeUp>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-5">Questions</p>
              <h2 className="text-h2 text-[var(--color-ink)]">
                Cost, contracts, and how the{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  scope is decided
                </em>
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] px-6 py-2 shadow-[var(--shadow-card)] sm:px-9">
              <FAQAccordion items={faqs} />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

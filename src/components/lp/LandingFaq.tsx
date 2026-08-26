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
 * Pricing is deliberately absent. These pages need to earn the enquiry before
 * opening a commercial conversation, and a generic "it depends" answer gives a
 * skimmer neither a useful number nor a reason to get in touch.
 */
const SHARED_FAQS = [
  {
    question: "Is this a fixed package, or is it built around my clinic?",
    answer:
      "It is built around your clinic. The five layers are designed to work together as one system, but they are not an all-or-nothing package. If you only need one part, we can deliver it as a standalone service. The audit shows what needs attention first, and we recommend the work your clinic actually needs.",
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
      "A person reviews your clinic — not an automated report generator — and comes back within two working days with what they found.",
  },
];

export default function LandingFaq({ variant }: { variant: LpVariant }) {
  const faqs = [variant.variantFaq, ...SHARED_FAQS];

  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] py-24 sm:py-28 lg:py-32">
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <FadeUp>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-5">Questions</p>
              <h2 className="text-h2 text-[var(--color-ink)]">
                How it works, what happens next, and{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  where we would start
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

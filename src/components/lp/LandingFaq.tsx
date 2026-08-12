import FAQAccordion from "@/components/sections/FAQAccordion";
import FadeUp from "@/components/ui/FadeUp";

const FAQS = [
  {
    question: "How is Clinic Evo different from a normal marketing agency?",
    answer:
      "We were a clinic before we were an agency. Clinic Evo was built inside Bodyfunction Clinic by its owner, tested on a real diary, and only then offered to other clinics. We also do not stop at leads — we build and manage the website, SEO, ad campaigns and the follow-up system as one connected service.",
  },
  {
    question: "Do you only provide leads, or do you manage what happens after?",
    answer:
      "Both. Every enquiry is followed up automatically through Patient Pulse, so leads do not go cold waiting for someone to call back.",
  },
  {
    question:
      "Does this work for physiotherapists and chiropractors, not just osteopaths?",
    answer:
      "Yes. Clinic Evo is built specifically for MSK clinics — osteopaths, physiotherapists and chiropractors — because the patient journey, compliance requirements and diary structure are similar across all three.",
  },
  {
    question: "What does healthcare marketing with Clinic Evo cost?",
    answer:
      "It depends on your location, competition and current setup. You will get a clear projection as part of your free audit, with no obligation to go further.",
  },
  {
    question: "Do I have to sign a long contract?",
    answer: "No. Rolling monthly arrangements, no long-term lock-in.",
  },
];

export default function LandingFaq() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] py-24 sm:py-28 lg:py-32">
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <FadeUp>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-5">Questions</p>
              <h2 className="text-h2 text-[var(--color-ink)]">
                The things clinic owners ask first
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] px-6 py-2 shadow-[var(--shadow-card)] sm:px-9">
              <FAQAccordion items={FAQS} />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

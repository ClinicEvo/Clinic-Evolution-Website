import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import PageHero from "@/components/sections/PageHero";
import ArrowLink from "@/components/ui/ArrowLink";
import Badge from "@/components/ui/Badge";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FAQSchema from "@/components/schema/FAQSchema";

export const metadata = buildMetadata({
  title: "AI Integration & Patient Reactivation for MSK Clinics",
  description:
    "Automated patient reactivation and recall systems for UK osteopaths, physiotherapists and chiropractors. Lapsed patients contacted at 3, 6 and 12 months, without manual effort.",
  path: "/ai-integration/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "AI Integration", href: "/ai-integration/" },
];

const faqs = [
  {
    question: "What is patient reactivation?",
    answer:
      "Patient reactivation is the process of reconnecting with previous patients who have not been seen for a period of time. For most MSK clinics, a significant portion of past patients are candidates for a return visit, but nobody has contacted them.",
  },
  {
    question: "How does automated reactivation work?",
    answer:
      "Clinic Evo sets up automated sequences that contact lapsed patients at defined intervals, typically 3, 6 and 12 months after their last appointment. Messages are personalised, sent at appropriate times, and designed to prompt a booking without being aggressive.",
  },
  {
    question: "Does this require AI tools the clinic manages?",
    answer:
      "No. Clinic Evo manages the entire system. The clinic does not need to learn new software or manage automated sequences manually. Everything runs through Patient Pulse.",
  },
  {
    question: "What kind of results can a clinic expect?",
    answer:
      "Results vary by clinic size and how lapsed the patient database is. Clinics with a reasonable patient history typically see a meaningful number of return bookings from reactivation campaigns, often within the first 30 days of the system going live.",
  },
  {
    question: "Is this the same as the old AI Patient Reactivation service?",
    answer:
      "Yes. AI Integration is the updated name for what was previously called AI Patient Reactivation. The service has been expanded to cover a broader set of automation and retention tools, all connected through Patient Pulse.",
  },
];

const automations = [
  {
    title: "Lapsed patient reactivation",
    desc: "Patients who haven't been seen in 3, 6 or 12 months are contacted automatically with a personalised message. No manual effort required.",
  },
  {
    title: "Review requests",
    desc: "After a positive session, every patient receives a review request timed to when they are most likely to respond, same day, not weeks later.",
  },
  {
    title: "Post-treatment follow-up",
    desc: "Automated check-ins after discharge help identify patients who have had a recurrence or new issue, and bring them back before they look elsewhere.",
  },
  {
    title: "Appointment reminders",
    desc: "Automated SMS reminders before appointments reduce no-shows without requiring any manual action from reception or the practitioner.",
  },
  {
    title: "Birthday and anniversary messages",
    desc: "Light-touch automated touchpoints that keep your clinic front of mind between active treatment episodes.",
  },
  {
    title: "Nurture sequences",
    desc: "Leads not ready to book enter a 12-month automated nurture sequence that maintains contact without requiring manual follow-up.",
  },
];

export default function AiIntegrationPage() {
  return (
    <>
      <ServiceSchema
        name="AI Integration & Patient Reactivation"
        description="Automated patient reactivation and retention systems for UK MSK clinics. Lapsed patients contacted automatically. No manual effort."
        url="/ai-integration/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="Patient retention, automated"
        heading={
          <>
            Lapsed patients contacted{" "}
            <em className="not-italic text-[var(--color-accent)]">
              before they find someone else
            </em>
          </>
        }
        subtext="Most MSK clinic databases contain hundreds of patients who haven't been seen in months. They are not gone, they just haven't been contacted. Clinic Evo's AI integration brings them back automatically."
        bullets={[
          "Automated reactivation at 3, 6 and 12 months",
          "Review requests after every positive session",
          "All managed through Patient Pulse, no new tools to learn",
        ]}
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "See all automations", href: "#automations" }}
        breadcrumbs={crumbs}
      />

      {/* The retention problem */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main max-w-3xl">
          <FadeUp>
            <Badge className="mb-5 inline-block">The retention gap</Badge>
            <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
              Your best source of new bookings is your existing patient database
            </h2>
            <p className="text-body text-[var(--color-muted)] mb-5">
              A clinic running 60% rebooking loses four patients in every ten after a
              single session. At £63 per follow-up across a five-session course,
              that is £250 in lost revenue per patient who does not return.
            </p>
            <p className="text-body text-[var(--color-muted)] mb-5">
              Across a year, those numbers compound. Most clinics spend money on
              advertising to acquire new patients while leaving significant revenue
              sitting in a patient database that nobody has contacted.
            </p>
            <p className="text-body text-[var(--color-muted)]">
              Automated reactivation is not a replacement for new patient acquisition.
              It is a parallel system that extracts consistent value from existing
              relationships, without adding any manual effort to the clinic.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Automations */}
      <section id="automations" className="section bg-[var(--color-surface)]/30">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12">
              <Badge className="mb-5 inline-block">What&apos;s included</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Retention automations built for MSK clinics
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                Every automation is managed through{" "}
                <a href="/patient-pulse/" className="text-[var(--color-accent)] hover:underline">Patient Pulse</a>.
                The clinic does not need to learn new tools or manage sequences manually.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automations.map((a, i) => (
              <FadeUp key={a.title} delay={i * 0.07}>
                <div className="flex flex-col h-full bg-transparent pt-6 border-t border-[var(--color-border)]">
                  <div className="w-8 h-8 rounded-[4px] bg-[var(--color-surface)] flex items-center justify-center mb-4 text-[var(--color-ink)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-h4 text-[var(--color-ink)] mb-2 font-semibold">{a.title}</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed font-light">{a.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Connected to the system */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main max-w-3xl">
          <FadeUp>
            <Badge className="mb-5 inline-block">Part of the whole chain</Badge>
            <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
              Retention is the fifth stage. All five need to work.
            </h2>
            <p className="text-body text-[var(--color-muted)] mb-8">
              Automated reactivation solves the retention problem. But clinics also
              need to be found, to convert visitors into enquiries, to follow up
              immediately, and to answer calls. Clinic Evo connects all five stages
              into a single system.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <ArrowLink href="/patient-pulse/">Patient Pulse</ArrowLink>
              <ArrowLink href="/seo-for-clinics/">SEO for clinics</ArrowLink>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--color-surface)]/30">
        <div className="cx-main max-w-2xl mx-auto">
          <FadeUp>
            <div className="text-center mb-10">
              <Badge className="mb-5 inline-block">FAQ</Badge>
              <h2 className="text-h2 text-[var(--color-ink)]">
                Common questions about patient reactivation
              </h2>
            </div>
          </FadeUp>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        heading="Find out how many lapsed patients your clinic has"
        subheading="Book a free clinic audit. We'll review your patient database, your current reactivation rate, and show you what an automated system would do differently."
      />
    </>
  );
}

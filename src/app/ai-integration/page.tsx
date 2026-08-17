import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import PageHero from "@/components/sections/PageHero";
import ArrowLink from "@/components/ui/ArrowLink";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FAQSchema from "@/components/schema/FAQSchema";
import StatBand from "@/components/sections/StatBand";
import HeroStatCard from "@/components/sections/HeroStatCard";
import ProcessSteps from "@/components/sections/ProcessSteps";
import StickyMobileCta from "@/components/ui/StickyMobileCta";

export const metadata = buildMetadata({
  title: "AI Integration & Patient Reactivation for MSK Clinics",
  description:
    "Automated patient reactivation and recall systems for UK osteopaths, physiotherapists and chiropractors, contacting lapsed patients without manual effort.",
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
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  },
  {
    title: "Review requests",
    desc: "After a positive session, every patient receives a review request timed to when they are most likely to respond, same day, not weeks later.",
    icon: <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8L3.5 9.3l5.9-.9z" />,
  },
  {
    title: "Post-treatment follow-up",
    desc: "Automated check-ins after discharge help identify patients who have had a recurrence or new issue, and bring them back before they look elsewhere.",
    icon: <><rect x="6" y="4" width="12" height="16" rx="2" /><path d="M9.5 4h5v2h-5z" /><path d="M9 13l2 2 4-4" /></>,
  },
  {
    title: "Appointment reminders",
    desc: "Automated SMS reminders before appointments reduce no-shows without requiring any manual action from reception or the practitioner.",
    icon: <><path d="M6 9a6 6 0 0112 0c0 5 2 6 2 6H4s2-1 2-6" /><path d="M10 20a2 2 0 004 0" /></>,
  },
  {
    title: "Birthday and anniversary messages",
    desc: "Light-touch automated touchpoints that keep your clinic front of mind between active treatment episodes.",
    icon: <><rect x="4" y="11" width="16" height="9" rx="1" /><path d="M2 8h20v3H2z" /><path d="M12 8v12" /><path d="M12 8c-2.5 0-3.5-4 0-4s2.5 4 0 4z" /></>,
  },
  {
    title: "Nurture sequences",
    desc: "Leads not ready to book enter a 12-month automated nurture sequence that maintains contact without requiring manual follow-up.",
    icon: <path d="M3 5h18l-7 8v6l-4-2v-4z" />,
  },
];

const steps = [
  {
    number: 1,
    title: "Audit",
    description:
      "We review your patient database, current rebooking rate, recall process and the systems your clinic already runs on.",
  },
  {
    number: 2,
    title: "Segment",
    description:
      "We identify the patient groups worth contacting, lapsed patients, incomplete treatment plans and seasonal recurrences, so messages stay relevant.",
  },
  {
    number: 3,
    title: "Build",
    description:
      "We write the sequences and message copy and connect them through Patient Pulse, in a tone appropriate for a healthcare setting.",
  },
  {
    number: 4,
    title: "Go live",
    description:
      "Reactivation, review requests and reminders start running automatically, with the clinic in control of what is sent and why.",
  },
  {
    number: 5,
    title: "Measure",
    description:
      "We track bookings, replies and engagement so the system keeps improving and stays tied to real revenue.",
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
        rightPanel={
          /* Describes what the system does rather than what it has returned.
             The previous card claimed a 38% rebook rate, 312+ patients
             reactivated and 6h/wk saved — none of which we can evidence, since
             no tool we run sees bookings. Every value below is checkable
             against this page. */
          <HeroStatCard
            title="How reactivation runs"
            stats={[
              { label: "Contact intervals", value: "3, 6, 12", note: "months after a patient's last appointment" },
              { label: "Automations included", value: "6", note: "reactivation, reviews, follow-up, reminders, milestones, nurture" },
              { label: "Software for you to learn", value: "None", note: "built and managed for you through Patient Pulse" },
            ]}
          />
        }
      />

      {/* The retention problem */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main max-w-3xl">
          <FadeUp>
            <p className="eyebrow mb-5">The retention gap</p>
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
              Reactivation does not replace new patient acquisition; it runs alongside it.
              Past patients already know your clinic, so a sensible recall system keeps
              in touch and makes sure they know where to come back if they need
              treatment again.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Automations */}
      <section id="automations" className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">What&apos;s included</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                What the recall system does
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Every automation is managed through{" "}
                <a href="/patient-pulse/" className="text-[var(--color-accent-text)] hover:underline">Patient Pulse</a>.
                The clinic does not need to learn new tools or manage sequences manually.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {automations.map((a, i) => (
              <FadeUp key={a.title} delay={i * 0.07}>
                <div className="card-surface group flex h-full flex-col p-7 md:p-8">
                  <div className="mb-5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{a.icon}</svg>
                  </div>
                  <h3 className="text-h4 text-[var(--color-ink)] mb-2">{a.title}</h3>
                  <p className="text-body text-[var(--color-muted)]">{a.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <p className="eyebrow mb-5">How it works</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                A responsible setup, from database to first bookings
              </h2>
              <p className="text-body text-[var(--color-muted)]">
                Clinic Evo builds and runs the whole system. The clinic stays in
                control of what is sent, while the manual work disappears.
              </p>
            </FadeUp>
            <div>
              <ProcessSteps steps={steps} />
            </div>
          </div>
        </div>
      </section>

      {/* Stat band */}
      <StatBand
        eyebrow="The revenue sitting in your database"
        heading="Your next bookings are already in your patient list."
        body="Reactivation runs in parallel with new-patient acquisition, pulling consistent revenue from relationships you have already paid to build."
        stats={[
          { value: "£250", label: "Lost revenue per patient who drops out of a five-session course" },
          { value: "30 days", label: "Typical window to first return bookings once the system is live" },
          { value: "3, 6, 9, 12", label: "Month intervals at which lapsed patients are contacted" },
        ]}
      />

      {/* A proof band sat here quoting 34 lapsed patients recovered in the first
          month. Not a real client quote, and no tool we use can evidence a
          reactivation figure — Search Console and Ahrefs see search, not
          bookings. Removed rather than backfilled with an unrelated SEO stat.
          Restore once a live clinic will share its recall numbers.
      */}

      {/* Responsible AI */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">Responsible by design</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Automated, but never intrusive
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Healthcare communication needs care. Reactivation should never
                  feel like spam, and patients should only hear from you when there
                  is a genuine reason to get back in touch.
                </p>
                <p className="text-body text-[var(--color-muted)]">
                  Automation handles the timing, segmentation and message drafting.
                  The clinic stays in control of consent, tone and what is sent, so
                  every message reflects how you would speak to a patient yourself.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-8">
                <p className="text-label text-[var(--color-accent)] mb-5">What this means in practice</p>
                <div className="flex flex-col gap-3.5">
                  {[
                    "Messages only go to patients with a relevant reason to return",
                    "Personalised to the patient, not a generic blast",
                    "Sent at appropriate times, never aggressive or repetitive",
                    "Consent and opt-out respected throughout",
                    "The clinic approves the tone and content up front",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-1 text-[var(--color-accent)]" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-body-sm text-[var(--color-muted)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Connected to the system */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main max-w-3xl">
          <FadeUp>
            <p className="eyebrow mb-5">Part of the whole chain</p>
            <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
              Recall is part of the chain
            </h2>
            <p className="text-body text-[var(--color-muted)] mb-8">
              Automated reactivation solves the retention problem. But clinics also
              need to be found, to convert visitors into enquiries, to follow up
              immediately, and to answer calls. Clinic Evo connects all five stages
              into a single system.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <ArrowLink href="/patient-pulse/">Patient Pulse</ArrowLink>
              <ArrowLink href="/seo-for-clinics/">SEO for Clinics</ArrowLink>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--color-paper)] !pb-10">
        <div className="cx-main">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10">
                <p className="eyebrow mb-5">FAQ</p>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  Common questions about patient reactivation
                </h2>
              </div>
            </FadeUp>
            <div className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] px-6 sm:px-10 py-2">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        id="closing-cta"
        heading="Find out how many lapsed patients your clinic has"
        subheading="Book a free clinic audit. We'll review your patient database, your current reactivation rate, and show you what an automated system would do differently."
      />

      <StickyMobileCta hideNearId="closing-cta" />
    </>
  );
}

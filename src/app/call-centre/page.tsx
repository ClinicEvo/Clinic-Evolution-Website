import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import PageHero from "@/components/sections/PageHero";
import ArrowLink from "@/components/ui/ArrowLink";
import Badge from "@/components/ui/Badge";
import StatBand from "@/components/sections/StatBand";
import ProofBand from "@/components/sections/ProofBand";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CallCostCalculator from "@/components/sections/CallCostCalculator";

export const metadata = buildMetadata({
  title: "Call Handling for MSK Clinics, Never Miss a Patient",
  description:
    "Clinic Evo's call handling service ensures every patient call to your UK osteopathy, physiotherapy or chiropractic clinic is answered by a trained handler. No voicemail. No missed appointments.",
  path: "/call-centre/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Call Handling", href: "/call-centre/" },
];

const steps = [
  {
    number: 1,
    title: "A patient calls your clinic",
    description:
      "From a Google search, an ad or a recommendation, on whichever lines you choose to divert, including the ones that currently ring out while you are with a patient.",
  },
  {
    number: 2,
    title: "A trained handler answers",
    description:
      "Briefed on your services, practitioners, availability and booking process. A real person who knows your clinic, not a generic script and never a voicemail.",
  },
  {
    number: 3,
    title: "The call is logged into Patient Pulse",
    description:
      "Every enquiry, callback and new lead is captured automatically in one place, so nothing is left on a notepad or lost on a personal phone.",
  },
  {
    number: 4,
    title: "Follow-up happens automatically",
    description:
      "Bookings are confirmed, and any caller who didn't book enters the same fast follow-up sequence as your online enquiries, including out-of-hours calls.",
  },
];

const faqs = [
  {
    question: "Who answers the calls?",
    answer:
      "Trained handlers who have been briefed specifically on your clinic, its services, practitioners, availability and booking process. It is not a generic answering service reading from a script that could belong to any business.",
  },
  {
    question: "Does call handling cover out-of-hours calls?",
    answer:
      "Yes. Patients often call at inconvenient times, evenings, weekends and during busy clinic hours. Out-of-hours coverage means enquiries that arrive outside your core hours are captured and followed up rather than lost to voicemail.",
  },
  {
    question: "How does call handling connect to the rest of my system?",
    answer:
      "Every call is logged directly into Patient Pulse, our lead management system. Missed calls, enquiries and new leads are tracked and entered into the same automatic follow-up as your online enquiries, so phone and digital enquiries are handled the same way.",
  },
  {
    question: "Will handlers be able to book patients in?",
    answer:
      "Handlers are briefed on your booking process and availability so they can guide a caller towards an appointment and capture everything needed to confirm it, rather than simply taking a message.",
  },
  {
    question: "What does a missed call actually cost my clinic?",
    answer:
      "A single missed patient is often £300–500 in immediate treatment revenue and £1,500+ across a full course and future visits. Most callers who reach voicemail simply call the next clinic, so across a year the lost revenue is significant and largely preventable.",
  },
];

export default function CallCentrePage() {
  return (
    <>
      <ServiceSchema
        name="Call Handling for MSK Clinics"
        description="Professional call handling for UK osteopaths, physiotherapists and chiropractors. Every patient call answered. No voicemail."
        url="/call-centre/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="No missed appointments"
        heading={
          <>
            Every call answered.{" "}
            <em className="not-italic text-[var(--color-accent)]">
              Every enquiry captured.
            </em>
          </>
        }
        subtext="A prospective patient who rings while you are mid-treatment and hears a voicemail is a £300–500 revenue opportunity that cost nothing to generate, and is now gone. Clinic Evo's call handling service makes sure that never happens."
        bullets={[
          "Every call answered by a trained handler",
          "Handlers briefed on your clinic, services and availability",
          "All calls logged into Patient Pulse automatically",
        ]}
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "How it works", href: "#how-it-works" }}
        breadcrumbs={crumbs}
      />

      {/* The cost of a missed call */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <Badge className="mb-5 inline-block">The cost of a missed call</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                A missed call is not an inconvenience. It is lost revenue.
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                A typical MSK patient who calls a clinic is usually ready to book. They
                have already decided they need treatment. They are not researching,
                they are choosing which clinic to attend. When your phone rings out,
                they call the next clinic on the list.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                A single missed patient represents £300–500 in immediate treatment
                revenue, and potentially £1,500+ across a full treatment course and
                future return visits. Across a year of missed calls, the total is
                significant, and entirely preventable.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                Clinic Evo's call handling service sits alongside{" "}
                <a href="/patient-pulse/" className="text-[var(--color-accent)] hover:underline">Patient Pulse</a>{" "}
                to ensure nothing falls through the gap, whether the enquiry comes by
                phone, form, or message.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <CallCostCalculator />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <p className="eyebrow mb-4">How it works</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                A handler who knows your clinic
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                This is not a generic answering service. Every call follows the same
                path, from the moment a patient dials to the moment they are booked
                and followed up.
              </p>
            </FadeUp>
            <div>
              <ProcessSteps steps={steps} />
            </div>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <StatBand
        eyebrow="The cost of an unanswered phone"
        heading="Every missed call is a patient who books the next clinic instead."
        body="A caller who reaches voicemail rarely calls back. Trained handling turns those ringing phones into booked appointments."
        stats={[
          { value: "£300–500", label: "Immediate treatment revenue in a single missed patient" },
          { value: "£1,500+", label: "Lifetime value across a full course and return visits" },
          { value: "0", label: "Voicemails: every call answered by a real handler" },
        ]}
      />

      {/* Testimonial */}
      <ProofBand
        eyebrow="What answered calls are worth"
        quote="Calls that used to ring out while we were treating now get answered and booked. It paid for itself in the first fortnight."
      />

      {/* Part of the system */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main max-w-3xl">
          <FadeUp>
            <Badge className="mb-5 inline-block">Part of the whole chain</Badge>
            <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
              Call handling works best as part of the system
            </h2>
            <p className="text-body text-[var(--color-muted)] mb-8">
              Call handling solves the phone problem. But a complete clinic needs more
              than answered calls, it needs a fast SMS follow-up for online enquiries,
              a booking system that converts callers, and a reactivation system that
              brings lapsed patients back. Clinic Evo connects all of these.
            </p>
            <ArrowLink href="/patient-pulse/">Patient Pulse, the lead management system</ArrowLink>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="max-w-2xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10">
                <Badge className="mb-5 inline-block">FAQ</Badge>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  Call handling FAQs
                </h2>
              </div>
            </FadeUp>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        heading="Stop losing patients to unanswered calls"
        subheading="Book a free clinic audit. We'll identify exactly how many enquiries your clinic is likely losing to unanswered calls, and what a full system would do about it."
      />
    </>
  );
}

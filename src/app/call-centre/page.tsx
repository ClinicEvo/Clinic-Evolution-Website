import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import PageHero from "@/components/sections/PageHero";
import ArrowLink from "@/components/ui/ArrowLink";
import StatBand from "@/components/sections/StatBand";
import ProofBand from "@/components/sections/ProofBand";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CallCostCalculator from "@/components/sections/CallCostCalculator";

export const metadata = buildMetadata({
  title: "Call Handling & Booking for MSK Clinics, Inbound & Outbound",
  description:
    "Clinic Evo answers every patient call to your UK osteopathy, physiotherapy or chiropractic clinic, calls back the leads your marketing generates, and books patients straight into your diary. No voicemail. No lead left waiting.",
  path: "/call-centre/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Call Handling & Booking", href: "/call-centre/" },
];

const steps = [
  {
    number: 1,
    title: "A patient calls, or a lead comes in",
    description:
      "Inbound calls land on whichever lines you choose to divert, including the ones that ring out while you are with a patient. New enquiries from your ads and website forms arrive at the same time.",
  },
  {
    number: 2,
    title: "A trained handler answers, or calls them back",
    description:
      "Every inbound call is answered by a handler briefed on your services, practitioners and availability, never left to voicemail. Leads from your marketing get a fast outbound call back, while their intent is still high.",
  },
  {
    number: 3,
    title: "The patient is booked into your diary",
    description:
      "Because handlers know your live availability and booking process, they book the patient straight into your diary, synced to avoid double-bookings, rather than simply taking a message.",
  },
  {
    number: 4,
    title: "Everything is logged into Patient Pulse",
    description:
      "Every call, callback and new lead is captured in one place. Bookings are confirmed, and anyone not yet booked enters the same fast follow-up as your online enquiries, including out-of-hours.",
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
    question: "Do you call back the leads my marketing generates?",
    answer:
      "Yes. As well as answering inbound calls, handlers make outbound calls to the new enquiries your ads and website forms generate, reaching them quickly while their intent is high, rather than leaving them waiting for someone at the clinic to find a spare moment.",
  },
  {
    question: "Will handlers be able to book patients in?",
    answer:
      "Yes. Handlers are briefed on your booking process and work from your live availability, so they book patients straight into your diary, synced to avoid double-bookings, rather than simply taking a message for someone else to action later.",
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
        name="Call Handling & Booking for MSK Clinics"
        description="Inbound and outbound call handling for UK osteopaths, physiotherapists and chiropractors. Every patient call answered, every marketing lead called back, and patients booked straight into your diary."
        url="/call-centre/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="Inbound & outbound"
        heading={
          <>
            Every call answered.{" "}
            <em className="not-italic text-[var(--color-accent)]">
              Every lead booked.
            </em>
          </>
        }
        subtext="A patient who rings while you are mid-treatment and hears a voicemail is a £300–500 opportunity, gone. So is a lead from your ads that nobody calls back. Clinic Evo answers your calls, rings those leads back, and books patients straight into your diary."
        bullets={[
          "Every inbound call answered by a trained handler",
          "Leads from your ads and forms called back while intent is high",
          "Patients booked straight into your diary, not left as a message",
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
              <p className="eyebrow mb-5">The cost of a missed call</p>
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
                The same is true of a lead your ads worked hard to generate: if
                nobody rings it back quickly, it goes cold. Clinic Evo's call
                handling sits alongside{" "}
                <a href="/patient-pulse/" className="text-[var(--color-accent)] hover:underline">Patient Pulse</a>{" "}
                to ensure nothing falls through the gap, whether the enquiry comes by
                phone, form, or ad, inbound or called back.
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
        eyebrow="The cost of an unworked enquiry"
        heading="A missed call, or a lead nobody rings back, is a patient who books the next clinic instead."
        body="A caller who reaches voicemail rarely calls back, and a lead left waiting goes cold. Answered calls and fast callbacks turn both into booked appointments."
        stats={[
          { value: "£300–500", label: "Immediate treatment revenue in a single missed patient" },
          { value: "£1,500+", label: "Lifetime value across a full course and return visits" },
          { value: "0", label: "Leads left waiting: every call answered, every lead called back" },
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
            <p className="eyebrow mb-5">Part of the whole chain</p>
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
                <p className="eyebrow mb-5">FAQ</p>
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

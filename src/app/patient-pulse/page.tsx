import { ReactNode } from "react";
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
import FAQAccordion from "@/components/sections/FAQAccordion";
import PatientPulseMockup from "@/components/sections/PatientPulseMockup";

export const metadata = buildMetadata({
  title: "Patient Pulse, Lead Management & Follow-Up for MSK Clinics",
  description:
    "Patient Pulse is Clinic Evo's managed CRM and communication system for UK osteopaths, physiotherapists and chiropractors. Automatic SMS follow-up, lead pipelines and patient reactivation in one platform.",
  path: "/patient-pulse/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Patient Pulse", href: "/patient-pulse/" },
];

interface Feature {
  title: string;
  desc: string;
  icon: ReactNode;
}

const features: Feature[] = [
  {
    title: "Automatic SMS within minutes",
    desc: "Every new enquiry, from Google, Facebook, your website, or any other source, triggers an automatic SMS response within minutes. Not the next morning. Within minutes.",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    ),
  },
  {
    title: "Structured lead pipelines",
    desc: "Every lead moves through a clear pipeline from first contact to booked appointment. Nothing falls through the gap between appointments.",
    icon: <path d="M3 4h18l-7 8v6l-4 2v-8z" />,
  },
  {
    title: "Two-way messaging from one inbox",
    desc: "WhatsApp, SMS and email from a single platform. No switching between apps, no missed threads, no leads lost in personal phone messages.",
    icon: (
      <>
        <path d="M22 12h-6l-2 3h-4l-2-3H2" />
        <path d="M5.5 5h13l3.5 7v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z" />
      </>
    ),
  },
  {
    title: "12-month nurture sequences",
    desc: "Leads not ready to book today enter an automated nurture sequence that stays in contact for up to 12 months, without any manual effort.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    title: "Review requests",
    desc: "Every patient who leaves a positive session receives a review request the same day, timed to when they are most likely to respond.",
    icon: <path d="M12 2l3 6.5 7 .6-5.3 4.6 1.6 6.8L12 17l-6.9 3.5 1.6-6.8L1.4 9.1l7-.6z" />,
  },
  {
    title: "Lapsed patient reactivation",
    desc: "Patients who haven't been seen in 3, 6 or 12 months are contacted automatically, before they find a different clinic.",
    icon: (
      <>
        <path d="M21 12a9 9 0 11-3-6.7L21 8" />
        <path d="M21 3v5h-5" />
      </>
    ),
  },
];

const faqs = [
  {
    question: "How fast does Patient Pulse respond to a new enquiry?",
    answer:
      "Automatically, within minutes, day or night. Every enquiry from Google, Facebook, your website or any other source triggers an SMS response without anyone at the clinic needing to act, so the first impression is instant even when every practitioner is in a treatment room.",
  },
  {
    question: "Does Patient Pulse integrate with my clinic booking software?",
    answer:
      "Patient Pulse is designed to sit alongside the practice management and booking tools MSK clinics already use, capturing enquiries, missed calls and conversations in one place. As part of your free clinic audit we confirm exactly how it connects to your current setup.",
  },
  {
    question: "Do I keep my patient data and pipelines if I stop working with Clinic Evo?",
    answer:
      "Yes. Your lead pipelines, nurture sequences and patient database belong to your clinic, not to us. If you ever stop working with Clinic Evo, Patient Pulse and everything in it stays with you.",
  },
  {
    question: "Is Patient Pulse compliant for UK healthcare clinics?",
    answer:
      "Patient Pulse is built specifically for UK osteopaths, physiotherapists and chiropractors, with the consent, messaging and data handling expectations of regulated MSK practice in mind, rather than a generic sales CRM.",
  },
  {
    question: "Can Patient Pulse reactivate patients who haven't been seen in months?",
    answer:
      "Yes. Lapsed patients are contacted automatically at 3, 6 and 12 months with messaging designed to bring them back before they choose a different clinic. This is one of the fastest ways most clinics recover revenue from people already in their database.",
  },
];

export default function PatientPulsePage() {
  return (
    <>
      <ServiceSchema
        name="Patient Pulse"
        description="Managed CRM and communication system for UK MSK clinics. Automatic follow-up, lead pipelines and patient reactivation."
        url="/patient-pulse/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="The product at the heart of it"
        heading={
          <>
            Most clinics don&apos;t have a lead problem.{" "}
            <em className="not-italic text-[var(--color-accent)]">
              They have a follow-up problem.
            </em>
          </>
        }
        subtext="Patient Pulse is Clinic Evo's lead management and communication system, built specifically for MSK clinics. Every enquiry, website form, missed call and patient conversation flows into one connected platform."
        bullets={[
          "Automatic SMS to every enquiry within minutes",
          "Two-way WhatsApp, SMS and email from one inbox",
          "Lapsed patients contacted at 3, 6 and 12 months",
        ]}
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "See all features", href: "#features" }}
        breadcrumbs={crumbs}
        rightPanel={<PatientPulseMockup />}
      />

      {/* The problem */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main max-w-3xl">
          <FadeUp>
            <p className="eyebrow mb-5">Why follow-up matters</p>
            <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
              The clinic that responds first gets the booking
            </h2>
            <p className="text-body text-[var(--color-muted)] mb-5">
              Every new enquiry, whether it arrives through Google at 2pm or a Facebook
              ad at 11pm, needs a response within minutes. Not the next morning.
              The first clinic to respond wins the appointment, regardless of which clinic
              is better.
            </p>
            <p className="text-body text-[var(--color-muted)] mb-5">
              Most clinics respond manually, during business hours, when they remember.
              Patient Pulse removes that dependency entirely. The system responds automatically,
              immediately, every time, whether the practitioner is in a treatment room,
              at lunch, or completely offline.
            </p>
            <p className="text-body text-[var(--color-muted)]">
              The result is a consistent, professional first impression that immediately
              separates your clinic from every competitor who replies hours later.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">What Patient Pulse does</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Every part of the follow-up chain, automated
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Patient Pulse is not a single tool. It is a connected set of systems
                that covers every stage from the first enquiry to the returning patient.
              </p>
            </div>
          </FadeUp>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.07}>
                <li className="flex flex-col h-full bg-transparent pt-6 border-t-2 border-[var(--color-accent)]/40 list-none">
                  <div className="mb-4 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {f.icon}
                    </svg>
                  </div>
                  <h3 className="text-h4 text-[var(--color-ink)] mb-2 font-semibold">{f.title}</h3>
                  <p className="text-body-sm text-[var(--color-muted)] leading-relaxed">{f.desc}</p>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      {/* Proof band */}
      <StatBand
        eyebrow="Why fast follow-up wins"
        heading="The clinic that replies first books the patient."
        body="Patient Pulse closes the gap between enquiry and response, then keeps every lead and lapsed patient in contact automatically."
        stats={[
          { value: "15 min", label: "Automatic first response to every new enquiry, day or night" },
          { value: "12 mo", label: "Nurture sequences that keep not-yet-ready leads warm" },
          { value: "3, 6, 9, 12", label: "Month intervals at which lapsed patients are reactivated" },
        ]}
      />

      {/* Testimonial */}
      <ProofBand
        eyebrow="Patient Pulse in a working clinic"
        quote="The follow-up system alone recovered 34 lapsed patients in the first month. Enquiries that used to sit in a personal phone now get answered in minutes."
      />

      {/* Why it's different */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main max-w-3xl">
          <FadeUp>
            <p className="eyebrow mb-5">Built for MSK clinics</p>
            <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
              Not a generic CRM. Built inside a working clinic.
            </h2>
            <p className="text-body text-[var(--color-muted)] mb-5">
              Most CRM platforms are built for sales teams. Patient Pulse is built for
              MSK clinics, by practitioners who understand the treatment arc, the patient
              relationship, and the specific compliance requirements of UK osteopaths,
              physiotherapists and chiropractors.
            </p>
            <p className="text-body text-[var(--color-muted)] mb-5">
              When you stop working with Clinic Evo, Patient Pulse stays. Your lead
              pipelines, your nurture sequences, your patient database, they belong
              to your clinic, not to us.
            </p>
            <p className="text-body text-[var(--color-muted)] mb-8">
              Patient Pulse also captures every phone enquiry when paired with our{" "}
              <a href="/call-centre/" className="text-[var(--color-accent)] hover:underline">call handling service</a>,
              so a missed call becomes a logged, followed-up lead instead of a lost one.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <ArrowLink href="/osteopath-marketing/">Marketing for Osteopaths</ArrowLink>
              <ArrowLink href="/physiotherapy-marketing/">Physiotherapy Marketing</ArrowLink>
              <ArrowLink href="/chiropractic-marketing/">Chiropractic Marketing</ArrowLink>
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
                  Patient Pulse FAQs
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
        heading="See Patient Pulse working for your clinic"
        subheading="Book a free clinic audit. We'll walk you through Patient Pulse live on the call and show you exactly where your current follow-up system is losing bookings."
      />
    </>
  );
}

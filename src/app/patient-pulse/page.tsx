import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import PageHero from "@/components/sections/PageHero";
import ArrowLink from "@/components/ui/ArrowLink";
import Badge from "@/components/ui/Badge";

export const metadata = buildMetadata({
  title: "Patient Pulse — Lead Management & Follow-Up for MSK Clinics",
  description:
    "Patient Pulse is ClinicEvo's managed CRM and communication system for UK osteopaths, physiotherapists and chiropractors. Automatic SMS follow-up, lead pipelines and patient reactivation in one platform.",
  path: "/patient-pulse/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Patient Pulse", href: "/patient-pulse/" },
];

const features = [
  {
    title: "Automatic SMS within minutes",
    desc: "Every new enquiry — from Google, Facebook, your website, or any other source — triggers an automatic SMS response within minutes. Not the next morning. Within minutes.",
  },
  {
    title: "Structured lead pipelines",
    desc: "Every lead moves through a clear pipeline from first contact to booked appointment. Nothing falls through the gap between appointments.",
  },
  {
    title: "Two-way messaging from one inbox",
    desc: "WhatsApp, SMS and email from a single platform. No switching between apps, no missed threads, no leads lost in personal phone messages.",
  },
  {
    title: "12-month nurture sequences",
    desc: "Leads not ready to book today enter an automated nurture sequence that stays in contact for up to 12 months — without any manual effort.",
  },
  {
    title: "Review requests",
    desc: "Every patient who leaves a positive session receives a review request the same day, timed to when they are most likely to respond.",
  },
  {
    title: "Lapsed patient reactivation",
    desc: "Patients who haven't been seen in 3, 6 or 12 months are contacted automatically, before they find a different clinic.",
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
        subtext="Patient Pulse is ClinicEvo's lead management and communication system — built specifically for MSK clinics. Every enquiry, website form, missed call and patient conversation flows into one connected platform."
        bullets={[
          "Automatic SMS to every enquiry within minutes",
          "Two-way WhatsApp, SMS and email from one inbox",
          "Lapsed patients contacted at 3, 6 and 12 months",
        ]}
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "See all features", href: "#features" }}
        breadcrumbs={crumbs}
      />

      {/* The problem */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main max-w-3xl">
          <FadeUp>
            <Badge className="mb-5 inline-block">Why follow-up matters</Badge>
            <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
              The clinic that responds first gets the booking
            </h2>
            <p className="text-body text-[var(--color-muted)] mb-5">
              Every new enquiry — whether it arrives through Google at 2pm or a Facebook
              ad at 11pm — needs a response within minutes. Not the next morning.
              The first clinic to respond wins the appointment, regardless of which clinic
              is better.
            </p>
            <p className="text-body text-[var(--color-muted)] mb-5">
              Most clinics respond manually, during business hours, when they remember.
              Patient Pulse removes that dependency entirely. The system responds automatically,
              immediately, every time — whether the practitioner is in a treatment room,
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
      <section id="features" className="section bg-[var(--color-surface)]/30">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12">
              <Badge className="mb-5 inline-block">What Patient Pulse does</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Every part of the follow-up chain, automated
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                Patient Pulse is not a single tool. It is a connected set of systems
                that covers every stage from the first enquiry to the returning patient.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.07}>
                <div className="flex flex-col h-full bg-white border border-[var(--color-border)] rounded-xl p-7">
                  <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">{f.title}</h3>
                  <p className="text-body text-[var(--color-muted)] leading-relaxed">{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why it's different */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main max-w-3xl">
          <FadeUp>
            <Badge className="mb-5 inline-block">Built for MSK clinics</Badge>
            <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
              Not a generic CRM. Built inside a working clinic.
            </h2>
            <p className="text-body text-[var(--color-muted)] mb-5">
              Most CRM platforms are built for sales teams. Patient Pulse is built for
              MSK clinics — by practitioners who understand the treatment arc, the patient
              relationship, and the specific compliance requirements of UK osteopaths,
              physiotherapists and chiropractors.
            </p>
            <p className="text-body text-[var(--color-muted)] mb-8">
              When you stop working with ClinicEvo, Patient Pulse stays. Your lead
              pipelines, your nurture sequences, your patient database — they belong
              to your clinic, not to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <ArrowLink href="/osteopath-marketing/">marketing for osteopaths</ArrowLink>
              <ArrowLink href="/physiotherapy-marketing/">physiotherapy marketing</ArrowLink>
              <ArrowLink href="/chiropractic-marketing/">chiropractic marketing</ArrowLink>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection
        heading="See Patient Pulse working for your clinic"
        subheading="Book a free clinic audit. We'll walk you through Patient Pulse live on the call and show you exactly where your current follow-up system is losing bookings."
      />
    </>
  );
}

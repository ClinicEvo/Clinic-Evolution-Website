import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import PageHero from "@/components/sections/PageHero";
import ArrowLink from "@/components/ui/ArrowLink";
import Badge from "@/components/ui/Badge";

export const metadata = buildMetadata({
  title: "Call Handling for MSK Clinics — Never Miss a Patient",
  description:
    "ClinicEvo's call handling service ensures every patient call to your UK osteopathy, physiotherapy or chiropractic clinic is answered by a trained handler. No voicemail. No missed appointments.",
  path: "/call-centre/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Call Handling", href: "/call-centre/" },
];

const points = [
  {
    title: "Every call answered",
    desc: "No voicemail, no ringing out, no 'please hold'. Every call to your clinic is answered by a real person who knows your clinic.",
  },
  {
    title: "Trained on your clinic",
    desc: "Handlers are briefed on your services, your practitioners, your availability and your booking process — not a generic script.",
  },
  {
    title: "Linked to Patient Pulse",
    desc: "Every call is logged directly into Patient Pulse. Missed calls, enquiries, and new leads are tracked and followed up automatically.",
  },
  {
    title: "Out-of-hours coverage",
    desc: "Patients call at inconvenient times. Out-of-hours handling means enquiries that arrive outside your core hours are captured, not lost.",
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
        subtext="A prospective patient who rings while you are mid-treatment and hears a voicemail is a £300–500 revenue opportunity that cost nothing to generate — and is now gone. ClinicEvo's call handling service makes sure that never happens."
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
        <div className="cx-main max-w-3xl">
          <FadeUp>
            <Badge className="mb-5 inline-block">The cost of a missed call</Badge>
            <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
              A missed call is not an inconvenience. It is lost revenue.
            </h2>
            <p className="text-body text-[var(--color-muted)] mb-5">
              A typical MSK patient who calls a clinic is usually ready to book. They
              have already decided they need treatment. They are not researching —
              they are choosing which clinic to attend. When your phone rings out,
              they call the next clinic on the list.
            </p>
            <p className="text-body text-[var(--color-muted)] mb-5">
              A single missed patient represents £300–500 in immediate treatment
              revenue, and potentially £1,500+ across a full treatment course and
              future return visits. Across a year of missed calls, the total is
              significant — and entirely preventable.
            </p>
            <p className="text-body text-[var(--color-muted)]">
              ClinicEvo's call handling service sits alongside{" "}
              <a href="/patient-pulse/" className="text-[var(--color-accent)] hover:underline">Patient Pulse</a>{" "}
              to ensure nothing falls through the gap — whether the enquiry comes by
              phone, form, or message.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="section bg-[var(--color-surface)]/30">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12">
              <Badge className="mb-5 inline-block">What's included</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                A handler who knows your clinic
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                This is not a generic answering service. Handlers are trained on
                your specific clinic, services and booking process.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {points.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.08}>
                <div className="flex gap-5 bg-white border border-[var(--color-border)] rounded-xl p-7 h-full">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-h3 text-[var(--color-ink)] mb-2">{p.title}</h3>
                    <p className="text-body text-[var(--color-muted)] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

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
              than answered calls — it needs a fast SMS follow-up for online enquiries,
              a booking system that converts callers, and a reactivation system that
              brings lapsed patients back. ClinicEvo connects all of these.
            </p>
            <ArrowLink href="/patient-pulse/">Patient Pulse — the lead management system</ArrowLink>
          </FadeUp>
        </div>
      </section>

      <CTASection
        heading="Stop losing patients to unanswered calls"
        subheading="Book a free clinic audit. We'll identify exactly how many enquiries your clinic is likely losing to unanswered calls — and what a full system would do about it."
      />
    </>
  );
}

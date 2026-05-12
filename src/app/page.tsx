import Link from "next/link";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import DisciplineCard from "@/components/sections/DisciplineCard";
import ResourceCard from "@/components/sections/ResourceCard";
import CTASection from "@/components/sections/CTASection";
import PatientFunnel from "@/components/sections/PatientFunnel";
import StatStrip from "@/components/sections/StatStrip";
import HeroDashboard from "@/components/sections/HeroDashboard";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

const clinicNames = [
  "Peak Physio",
  "Align Chiropractic",
  "Restore Osteopathy",
  "Motion Clinic",
  "Vital Physiotherapy",
  "Core Health",
];

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }]} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-paper)] pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="cx-main">
          <div className="grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">

            {/* Left — copy */}
            <div>
              <FadeUp>
                <p className="text-label mb-8">UK Clinic Growth Partner</p>
              </FadeUp>
              <FadeUp delay={0.06}>
                <h1 className="font-display font-bold text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-[var(--color-ink)] mb-7">
                  More of the<br />right patients.<br />
                  <em className="not-italic text-[var(--color-accent)]">Without guessing</em><br />what works.
                </h1>
              </FadeUp>
              <FadeUp delay={0.12}>
                <p className="text-body-lg text-[var(--color-ink)]/60 mb-10 max-w-md leading-relaxed">
                  We build and run the systems that turn local demand into booked
                  appointments — for UK osteopaths, physiotherapists and chiropractors.
                </p>
              </FadeUp>
              <FadeUp delay={0.17}>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10">
                  <Button href="/free-clinic-audit/" size="lg">
                    Book a free clinic audit
                  </Button>
                  <Link
                    href="/case-studies/"
                    className="text-sm font-bold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2"
                  >
                    See our results
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </FadeUp>
              <FadeUp delay={0.22}>
                <div className="flex items-center gap-3">
                  {/* Avatar stack */}
                  <div className="flex -space-x-2">
                    {["P","A","M"].map((initial, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-paper)] flex items-center justify-center text-[0.65rem] font-bold text-[var(--color-muted)]"
                      >
                        {initial}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-0.5">
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="var(--color-accent)" aria-hidden="true">
                          <path d="M6 1l1.39 2.82 3.11.45-2.25 2.19.53 3.09L6 8.1 3.22 9.55l.53-3.09L1.5 4.27l3.11-.45L6 1z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs text-[var(--color-muted)]">Trusted by UK clinic owners</p>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right — animated metrics dashboard */}
            <HeroDashboard />

          </div>
        </div>
      </section>

      {/* ── Stat strip ────────────────────────────────────────────────────── */}
      <div className="bg-[var(--color-paper)] border-t border-[var(--color-border)]">
        <div className="cx-main">
          <StatStrip />
        </div>
      </div>

      {/* ── Client logos ──────────────────────────────────────────────────── */}
      <section className="py-10 border-t border-[var(--color-border)] bg-[var(--color-surface)]/20">
        <div className="cx-main">
          <p className="text-[0.65rem] font-bold tracking-widest uppercase text-[var(--color-muted)] text-center mb-7">
            Trusted by clinics that are growing
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
            {clinicNames.map((name) => (
              <span
                key={name}
                className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-[var(--color-muted)]/60"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── System Problem ────────────────────────────────────────────────── */}
      <section className="section">
        <div className="cx-main">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <FadeUp>
              <div>
                <p className="text-label mb-5">The problem</p>
                <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight tracking-tight text-[var(--color-ink)] mb-5">
                  Most clinics don&apos;t have a growth problem.
                  <br />
                  <em className="not-italic text-[var(--color-accent)]">They have a system problem.</em>
                </h2>
                <p className="text-body text-[var(--color-ink)]/60 mb-6 leading-relaxed">
                  The gap between your website traffic and your booked diary isn&apos;t luck —
                  it&apos;s measurable drop-off. We find it and fix it.
                </p>
                <Link
                  href="/free-clinic-audit/"
                  className="text-sm font-bold text-[var(--color-accent)] flex items-center gap-2 hover:gap-3 transition-all"
                >
                  See how we do it
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="border border-[var(--color-border)] rounded-2xl p-8 lg:p-10 bg-white">
                <div className="flex items-center justify-between mb-8">
                  <p className="text-label">The ClinicEvo growth system</p>
                  <div className="hidden sm:flex items-center gap-2 text-[0.7rem] font-semibold text-[var(--color-muted)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    Full-funnel
                  </div>
                </div>
                <PatientFunnel />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Who We Help ──────────────────────────────────────────────────── */}
      <section id="who-we-help" className="section bg-[var(--color-surface)]/30">
        <div className="cx-main">
          <div className="max-w-2xl mb-16">
            <FadeUp>
              <p className="text-label mb-5">Who we work with</p>
              <h2 className="text-h1 text-[var(--color-ink)] mb-5">Built for your practice.</h2>
              <p className="text-body text-[var(--color-ink)]/60">
                We only work with MSK clinics. Not gyms, not dentists — clinics that need
                a predictable, measurable flow of the right patients.
              </p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DisciplineCard
              title="Osteopaths"
              description="High-intent SEO and Google Ads to fill your diary with local patients seeking osteopathic care."
              href="/osteopath-marketing/"
              features={["SEO Strategy", "Local Presence", "Google Ads"]}
            />
            <DisciplineCard
              title="Physiotherapists"
              description="Conversion-led website design and patient reactivation systems to increase lifetime value."
              href="/physiotherapy-marketing/"
              features={["Web Design", "Reactivation", "Conversion"]}
            />
            <DisciplineCard
              title="Chiropractors"
              description="Full-funnel systems that generate high-quality enquiries and turn them into long-term patients."
              href="/chiropractic-marketing/"
              features={["Full Systems", "Lead Gen", "Nurturing"]}
            />
          </div>
        </div>
      </section>

      {/* ── Why ClinicEvo ────────────────────────────────────────────────── */}
      <section className="section">
        <div className="cx-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div>
                <p className="text-label mb-5">Why it works</p>
                <h2 className="text-h1 text-[var(--color-ink)] mb-6 leading-tight">
                  A system built on what actually moves clinics forward.
                </h2>
                <p className="text-body text-[var(--color-ink)]/60 leading-relaxed">
                  Generic agencies treat clinic marketing like any other vertical.
                  We don&apos;t. Every decision is made through the lens of how MSK
                  patients search, decide and book — because that&apos;s all we do.
                </p>
              </div>
            </FadeUp>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Specialists only",
                  body: "We work exclusively with MSK clinics. Not gyms, not dentists — clinics.",
                },
                {
                  title: "Measurable from day one",
                  body: "Every engagement is tracked to enquiries and bookings, not impressions or rankings.",
                },
                {
                  title: "Systems, not campaigns",
                  body: "We build infrastructure that compounds — not one-off campaigns that stop when the budget stops.",
                },
              ].map((point, i) => (
                <FadeUp key={point.title} delay={i * 0.08}>
                  <div className="flex gap-5 p-6 rounded-xl border border-[var(--color-border)] bg-white hover:border-[var(--color-accent)]/25 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/8 flex items-center justify-center mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7l3 3 6-6" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-[var(--color-ink)] mb-1">{point.title}</p>
                      <p className="text-sm text-[var(--color-ink)]/55 leading-relaxed">{point.body}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest Insights ─────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-surface)]/20">
        <div className="cx-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <FadeUp>
              <div className="max-w-2xl">
                <p className="text-label mb-5">Resources</p>
                <h2 className="text-h1 text-[var(--color-ink)] mb-4">
                  Read the thinking behind the system.
                </h2>
                <p className="text-body text-[var(--color-ink)]/60">
                  Practical guides on clinic growth, patient acquisition and retention.
                </p>
              </div>
            </FadeUp>
            <Button href="/resources/" variant="outline">View all resources</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              category="Growth"
              title="How to Get More Patients to Your Clinic"
              excerpt="How to build a predictable engine for new patient enquiries without wasting money on generic agency retainers."
              href="/resources/how-to-get-more-patients-to-your-clinic/"
              readTime="8 min read"
            />
            <ResourceCard
              category="SEO"
              title="Local SEO for Healthcare Clinics"
              excerpt="What actually works to get your clinic to the top of local search results — and why most clinics get it wrong."
              href="/resources/local-seo-for-healthcare-clinics/"
              readTime="6 min read"
            />
            <ResourceCard
              category="Patient Retention"
              title="Building a Patient Recall System"
              excerpt="Using structured automation to turn your database of lapsed patients into booked appointments."
              href="/resources/patient-recall-system/"
              readTime="5 min read"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import Link from "next/link";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import ResourceCard from "@/components/sections/ResourceCard";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import PatientPulseMockup from "@/components/sections/PatientPulseMockup";
import ScenarioCards from "@/components/sections/ScenarioCards";

const systemStages = [
  {
    num: "01",
    label: "Get Found",
    body: "SEO and Google Ads built around the exact searches your patients run — 'physio near me', 'osteopath [town]', 'back pain specialist'. Not broad healthcare terms nobody books from.",
    href: "/seo-for-clinics/",
    anchor: "SEO for clinics",
  },
  {
    num: "02",
    label: "Convert",
    body: "Clinic websites built for MSK patients. Condition pages that earn trust. Booking paths that don't require three clicks and a phone call.",
    href: "/website-design-for-clinics/",
    anchor: "clinic website design",
  },
  {
    num: "03",
    label: "Follow Up",
    body: "Patient Pulse sends an automatic SMS within minutes of every new enquiry. The clinic that responds first gets the booking. Every time.",
    href: "/patient-pulse/",
    anchor: "Patient Pulse",
  },
  {
    num: "04",
    label: "Book",
    body: "Every call answered by a trained handler who knows your clinic, your services, and your availability. No voicemail. No missed appointments.",
    href: "/call-centre/",
    anchor: "call handling",
  },
  {
    num: "05",
    label: "Retain",
    body: "Automated reactivation at 3, 6 and 12 months. Review requests timed to positive sessions. Lapsed patients contacted before they find someone else.",
    href: "/ai-integration/",
    anchor: "AI patient reactivation",
  },
];


const disciplineCards = [
  {
    title: "Osteopaths",
    headline: "Marketing built by someone who practises as one.",
    body: "We understand the patient relationship in osteopathy — the typical treatment arc, GOsC compliance, and the challenge of competing with NHS referral pathways. Every strategy is built around how osteopathy patients actually search and choose.",
    href: "/osteopath-marketing/",
    anchor: "marketing for osteopaths",
  },
  {
    title: "Physiotherapists",
    headline: "The highest search volume in MSK. We know how to win it.",
    body: "Physiotherapy is the most competitive discipline in local search. CSP-compliant copy, local SEO built to own your area, and Google Ads targeting the exact terms patients use when they're ready to book.",
    href: "/physiotherapy-marketing/",
    anchor: "physiotherapy marketing",
  },
  {
    title: "Chiropractors",
    headline: "Chiropractic patients research more before booking. We build for that journey.",
    body: "GCC-compliant advertising and local search built around the longer consideration cycle of chiropractic patients — where trust signals and consistent follow-up drive long-term growth.",
    href: "/chiropractic-marketing/",
    anchor: "chiropractic marketing",
  },
];

const whyCards = [
  {
    heading: "When you stop working with us, the system stays.",
    body: "Most agencies take their tools when you leave. Patient Pulse, your lead pipelines, your nurture sequences, your patient database — they belong to your clinic. You are building an asset, not renting a service.",
  },
  {
    heading: "We know why a patient chooses an osteopath over a physio. Most agencies don't.",
    body: "Patient decision-making in MSK is specific. Search intent differs by discipline, condition, location, and how long someone has been in pain. That understanding shapes every page we build and every ad we write. No generalist agency has it.",
  },
  {
    heading: "Five numbers. Every month. All of them connected to your diary.",
    body: "Enquiries received. Bookings from enquiries. Response time. Reactivation rate. Cost per new patient. If any of those numbers moves in the wrong direction, we tell you why — and what we're doing about it. No vanity metrics. No hiding behind impressions.",
  },
];

const metricQuestions = [
  "How many new enquiries did the clinic receive this month?",
  "What percentage of those enquiries booked an appointment?",
  "How long did it take to respond to the first contact?",
  "How many lapsed patients returned after reactivation?",
  "What was the cost to acquire each new patient?",
];

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }]} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-paper)] pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="cx-main">
          <div className="grid lg:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-center">

            {/* Left — copy */}
            <div>
              <FadeUp>
                {/* H1: SEO pre-label — visible but styled small */}
                <h1 className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[var(--color-ink)] mb-5 leading-relaxed">
                  Clinic marketing and patient systems for UK osteopaths, physiotherapists and chiropractors
                </h1>
              </FadeUp>

              <FadeUp delay={0.06}>
                {/* Display headline — NOT the h1 */}
                <p className="font-display font-bold text-[clamp(2.4rem,5.5vw,3.8rem)] leading-[1.06] tracking-[-0.03em] text-[var(--color-ink)] mb-3">
                  A full diary is the only metric that matters.
                </p>
                <p
                  className="font-display text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)] mb-8"
                  style={{ fontStyle: "italic" }}
                >
                  ClinicEvo is the connected system that fills it.
                </p>
              </FadeUp>

              <FadeUp delay={0.12}>
                <p className="text-body-lg text-[var(--color-ink)] mb-10 max-w-lg leading-relaxed">
                  We build the marketing, follow-up and communication systems that turn enquiries into
                  booked appointments — and keep patients coming back. Built exclusively for UK
                  osteopaths, physiotherapists and chiropractors.
                </p>
              </FadeUp>

              <FadeUp delay={0.17}>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10">
                  <Button href="/free-clinic-audit/" size="lg">
                    Book Your Free Clinic Audit
                  </Button>
                  <Link
                    href="#system-section"
                    className="text-sm font-bold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2"
                  >
                    See How It Works
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </FadeUp>

              <FadeUp delay={0.22}>
                {/* Trust strip */}
                <div className="flex flex-wrap gap-x-6 gap-y-2.5 items-center">
                  {[
                    "Founded by a GOsC-registered osteopath",
                    "MSK clinics only",
                    "Trusted by UK osteopaths, physiotherapists and chiropractors",
                  ].map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 text-xs text-[var(--color-ink)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right — Patient Pulse mockup */}
            <PatientPulseMockup />
          </div>
        </div>
      </section>

      {/* ── Problem ───────────────────────────────────────────────────────── */}
      <section id="problem-section" className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <FadeUp>
            <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[var(--color-accent)] mb-5">
              Where your diary is losing patients
            </p>
            <h2 className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight text-[var(--color-ink)] mb-6 max-w-3xl">
              Most MSK clinics lose 20–40% of potential revenue.
              <br />
              <span className="text-[var(--color-ink)]">Not from a lack of patients — from a broken system around their diary.</span>
            </h2>
          </FadeUp>

          <div className="mt-12 mb-12">
            <ScenarioCards />
          </div>

          <FadeUp delay={0.32}>
            <p className="text-[var(--color-ink)] leading-relaxed max-w-3xl border-t border-[var(--color-border)] pt-8">
              The gap between a clinic running at 65% diary capacity and one at 80% is not more
              advertising. It is a faster response, more consistent follow-up, and a retention system
              that reaches patients before a competitor does.{" "}
              <span className="text-[var(--color-ink)] font-semibold">That is what ClinicEvo builds.</span>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── System ────────────────────────────────────────────────────────── */}
      <section id="system-section" className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <p className="text-label mb-5">How ClinicEvo works</p>
            <h2 className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight text-[var(--color-ink)] mb-5">
              Every gap in your diary has a cause.
              <br />
              <em className="not-italic text-[var(--color-accent)]">We fix the whole chain.</em>
            </h2>
            <p className="text-body text-[var(--color-ink)] mb-14 max-w-2xl leading-relaxed">
              Most agencies handle one part of the chain — traffic, or a website, or follow-up emails
              — and leave everything else disconnected. An SEO agency gets you found. A web designer
              builds your site. Nobody makes sure the enquiry that arrives at 8pm on a Tuesday gets a
              reply before your competitor does.
              <br />
              <br />
              <strong className="text-[var(--color-ink)] font-semibold">ClinicEvo is the whole chain.</strong>
            </p>
          </FadeUp>

          {/* Stage cards — vertical on mobile, grid on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 mb-10 relative">
            {systemStages.map((stage, i) => (
              <FadeUp key={stage.num} delay={i * 0.09}>
                <div className="relative flex flex-col h-full border border-[var(--color-border)] rounded-xl p-6 bg-white hover:border-[var(--color-accent)]/30 hover:shadow-sm transition-all">
                  <span className="text-[0.65rem] font-bold tracking-widest uppercase text-[var(--color-accent)] mb-3">
                    {stage.num}
                  </span>
                  <h3 className="font-display font-bold text-[var(--color-ink)] text-lg mb-3">
                    {stage.label}
                  </h3>
                  <p className="text-xs text-[var(--color-ink)] leading-relaxed flex-1 mb-4">
                    {stage.body}
                  </p>
                  <Link
                    href={stage.href}
                    className="text-xs font-bold text-[var(--color-accent)] hover:opacity-75 transition-opacity flex items-center gap-1.5"
                  >
                    {stage.anchor}
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>

                  {/* Arrow connector — desktop only, not on last card */}
                  {i < systemStages.length - 1 && (
                    <span
                      className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 items-center justify-center bg-white border border-[var(--color-border)] rounded-full z-10"
                      aria-hidden="true"
                    >
                      <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.5}>
            <p className="text-sm text-[var(--color-ink)] max-w-2xl leading-relaxed">
              Every component works as part of the same system. Remove one and the chain breaks. Run
              them together and growth becomes measurable, consistent and self-reinforcing.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Patient Pulse ─────────────────────────────────────────────────── */}
      <section id="patient-pulse" className="section bg-[var(--color-surface)]/30">
        <div className="cx-main">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left — copy */}
            <div>
              <FadeUp>
                <p className="text-label mb-5">The product at the heart of it</p>
                <h2 className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight text-[var(--color-ink)] mb-7">
                  Most clinics don&apos;t have a lead problem.
                  <br />
                  <em className="not-italic text-[var(--color-accent)]">They have a follow-up problem.</em>
                </h2>
              </FadeUp>

              <FadeUp delay={0.08}>
                <p className="text-body text-[var(--color-ink)] mb-5 leading-relaxed">
                  Patient Pulse is ClinicEvo&apos;s lead management and communication system — built
                  specifically for MSK clinics. Every enquiry, website form, missed call, and patient
                  conversation flows into one connected platform.
                </p>
                <p className="text-body text-[var(--color-ink)] mb-8 leading-relaxed">
                  Every new enquiry — whether it arrives through Google at 2pm or a Facebook ad at
                  11pm — receives an automatic SMS within minutes.{" "}
                  <strong className="text-[var(--color-ink)] font-semibold">Not the next morning. Within minutes.</strong>
                </p>
              </FadeUp>

              <FadeUp delay={0.14}>
                <ul className="flex flex-col gap-3.5 mb-8" role="list">
                  {[
                    "Every enquiry gets an automatic response within minutes — day, night, or weekend",
                    "Every lead is tracked through a structured pipeline — nothing disappears between appointments",
                    "Two-way WhatsApp, SMS and email from one inbox — no switching between apps",
                    "Leads not ready to book enter a 12-month automated nurture sequence automatically",
                    "Every patient who leaves a positive session gets a review request the same day",
                    "Lapsed patients are contacted at 3, 6 and 12 months — without a single manual action",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[var(--color-ink)] leading-relaxed">
                      <span className="flex-shrink-0 mt-1 w-4 h-4 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2 6l3 3 5-5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-sm text-[var(--color-ink)] italic mb-8 leading-relaxed max-w-md">
                  While other clinics chase leads on spreadsheets and sticky notes, Patient Pulse
                  works in the background — whether you&apos;re in a treatment room or completely offline.
                </p>
                <Link
                  href="/patient-pulse/"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)] hover:opacity-75 transition-opacity"
                >
                  Explore Patient Pulse
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </FadeUp>
            </div>

            {/* Right — mockup */}
            <div>
              <PatientPulseMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder ───────────────────────────────────────────────────────── */}
      <section id="about-founder" className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — founder card placeholder */}
            <FadeUp>
              <div className="w-full aspect-[4/5] rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/6 via-transparent to-transparent" />
                {/* Centre monogram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center shadow-sm">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
                {/* Name cards pinned to bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 space-y-2.5">
                  <div className="bg-white rounded-xl border border-[var(--color-border)] px-4 py-3 shadow-sm">
                    <p className="text-xs font-bold text-[var(--color-ink)]">Simon Smith</p>
                    <p className="text-[0.65rem] text-[var(--color-muted)]">GOsC-registered Osteopath · Co-founder</p>
                  </div>
                  <div className="bg-white rounded-xl border border-[var(--color-border)] px-4 py-3 shadow-sm">
                    <p className="text-xs font-bold text-[var(--color-ink)]">Danny Morgan</p>
                    <p className="text-[0.65rem] text-[var(--color-muted)]">Physiotherapist &amp; Clinic Owner · Co-founder</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right — copy + feature items */}
            <div>
              <FadeUp>
                <p className="text-label mb-5">Built from the inside</p>
                <h2 className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight text-[var(--color-ink)] mb-5">
                  Built inside a real clinic.
                </h2>
                <p className="text-body-lg text-[var(--color-ink)] mb-5 leading-relaxed">
                  Most clinic owners who&apos;ve worked with a generic marketing agency have the same story.
                  Decent traffic. A lead or two. A monthly report full of impressions. An empty diary on
                  Wednesday afternoon.
                </p>
                <p className="text-body-lg text-[var(--color-ink)] mb-8 leading-relaxed">
                  We built these tools because we have sat in treatment rooms wondering whether the phone
                  rang while we were with a patient. We know what Wednesday afternoon costs.{" "}
                  <strong className="font-semibold">We built the thing that fixes it.</strong>
                </p>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div className="flex flex-col gap-7 pt-8 border-t border-[var(--color-border)]">
                  {[
                    {
                      title: "GOsC-registered practising osteopath",
                      desc: "Simon founded ClinicEvo after running his own MSK practice — the system was built to solve a problem he experienced daily.",
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                        </svg>
                      ),
                    },
                    {
                      title: "Physiotherapist and clinic owner",
                      desc: "Danny's practice was the first clinic to run the full ClinicEvo system, from first enquiry to patient reactivation.",
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      ),
                    },
                    {
                      title: "Tested inside a live MSK clinic",
                      desc: "Every tool was built and refined in a real clinical environment, not a boardroom. It has to work in practice, not just in a demo.",
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      ),
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-[var(--color-accent)]/8 border border-[var(--color-accent)]/15 text-[var(--color-accent)]">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[var(--color-ink)] mb-1">{item.title}</h3>
                        <p className="text-sm text-[var(--color-ink)] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* ── Results ───────────────────────────────────────────────────────── */}
      <section id="results" className="section bg-[var(--color-surface)]/30">
        <div className="cx-main">
          <FadeUp>
            <p className="text-label mb-5">Real clinic data</p>
            <h2 className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight text-[var(--color-ink)] mb-4">
              We track five numbers.{" "}
              <span className="text-[var(--color-ink)]">None of them are impressions.</span>
            </h2>
            <p className="text-body text-[var(--color-ink)] mb-12 max-w-2xl leading-relaxed">
              If your current agency can&apos;t answer all five of these questions about your clinic right
              now, that&apos;s the gap.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {metricQuestions.map((q, i) => (
              <FadeUp key={q} delay={i * 0.07}>
                <div className="flex flex-col h-full border border-[var(--color-border)] rounded-xl p-6 bg-white">
                  <span className="text-[0.65rem] font-bold tracking-widest uppercase text-[var(--color-accent)] mb-4">
                    0{i + 1}
                  </span>
                  <p className="text-sm font-semibold text-[var(--color-ink)] leading-snug">{q}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Bodyfunction block — Option B (interim until numbers confirmed) */}
          <FadeUp delay={0.4}>
            <div className="border border-[var(--color-border)] rounded-2xl p-8 lg:p-10 bg-white">
              <p className="text-label mb-4">Case study — Bodyfunction Clinic, London</p>
              <p className="text-body text-[var(--color-ink)] mb-2 leading-relaxed">
                Physiotherapy and MSK clinic · Danny Morgan
              </p>
              <p className="text-body text-[var(--color-ink)] mb-8 leading-relaxed">
                We are completing the Bodyfunction Clinic case study — the first MSK practice to run
                the complete ClinicEvo system. The numbers aren&apos;t published yet. If you&apos;re curious
                about the results before then, ask on your audit call.
              </p>
              <Button href="/free-clinic-audit/">
                Book Your Free Clinic Audit
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Who We Help ───────────────────────────────────────────────────── */}
      <section id="who-we-help" className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <p className="text-label mb-5">Built for your discipline</p>
            <h2 className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight text-[var(--color-ink)] mb-5">
              Built specifically for MSK clinics.
            </h2>
            <p className="text-body text-[var(--color-ink)] mb-12 max-w-xl leading-relaxed">
              We work exclusively with osteopaths, physiotherapists and chiropractors across the UK.
              Not gyms. Not dentists. Not generic private healthcare.{" "}
              <strong className="text-[var(--color-ink)] font-semibold">MSK clinics.</strong>
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {disciplineCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.09}>
                <div className="flex flex-col h-full border border-[var(--color-border)] rounded-xl p-8 bg-white hover:border-[var(--color-accent)]/30 hover:shadow-sm transition-all">
                  <p className="text-[0.65rem] font-bold tracking-widest uppercase text-[var(--color-accent)] mb-3">
                    {card.title}
                  </p>
                  <h3 className="font-display font-bold text-[var(--color-ink)] text-lg leading-snug mb-4">
                    {card.headline}
                  </h3>
                  <p className="text-sm text-[var(--color-ink)] leading-relaxed flex-1 mb-6">
                    {card.body}
                  </p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)] hover:opacity-75 transition-opacity"
                  >
                    {card.anchor}
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ClinicEvo ─────────────────────────────────────────────────── */}
      <section id="why-clinicevo" className="section bg-[var(--color-surface)]/30">
        <div className="cx-main">
          <FadeUp>
            <p className="text-label mb-5">The difference</p>
            <h2 className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight text-[var(--color-ink)] mb-12">
              Not a marketing agency.
              <br />
              <em className="not-italic text-[var(--color-accent)]">A patient acquisition and retention system.</em>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <FadeUp key={card.heading} delay={i * 0.09}>
                <div className="flex flex-col h-full border border-[var(--color-border)] rounded-xl p-8 bg-white hover:border-[var(--color-accent)]/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/8 flex items-center justify-center mb-5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7l3 3 6-6" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-[var(--color-ink)] text-base leading-snug mb-4">
                    {card.heading}
                  </h3>
                  <p className="text-sm text-[var(--color-ink)] leading-relaxed">{card.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section id="book-audit" className="section bg-[var(--color-paper)]">
        <div className="cx-main max-w-2xl">
          <FadeUp>
            <p className="text-label text-[var(--color-accent)] mb-6">Take the first step</p>
            <h2 className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight text-[var(--color-ink)] mb-7">
              Find out exactly where your clinic is losing patients.
            </h2>
            <p className="text-body-lg text-[var(--color-ink)] mb-4 leading-relaxed">
              Book a free clinic audit. We review your diary, your current search visibility, your
              enquiry handling, and your follow-up systems — and tell you honestly where patients are
              falling through the gaps. Within two business days.
            </p>
            <p className="text-body-lg text-[var(--color-ink)] mb-10 leading-relaxed">
              No agency jargon. No commitment. Just the honest assessment most clinic owners have
              never received.
            </p>
            <Button href="/free-clinic-audit/" size="lg">
              Book Your Free Clinic Audit
            </Button>
            <div className="flex flex-wrap gap-5 mt-7">
              <span className="text-xs text-[var(--color-ink)]">
                Exclusively for UK osteopaths, physiotherapists and chiropractors.
              </span>
              <span className="text-xs text-[var(--color-ink)]">
                Founded by a GOsC-registered osteopath.
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Resources ─────────────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-surface)]/20">
        <div className="cx-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <FadeUp>
              <div className="max-w-xl">
                <p className="text-label mb-5">Resources</p>
                <h2 className="text-h1 text-[var(--color-ink)] mb-4">
                  Practical resources for growing your MSK clinic.
                </h2>
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
    </>
  );
}

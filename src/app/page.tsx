import Link from "next/link";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import ResourceCard from "@/components/sections/ResourceCard";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ScenarioCards from "@/components/sections/ScenarioCards";

const systemStages = [
  {
    num: "01",
    label: "Get Found",
    body: "Local SEO and Google Ads built around how MSK patients actually search.",
    href: "/seo-for-clinics/",
    anchor: "SEO for clinics",
  },
  {
    num: "02",
    label: "Convert",
    body: "Websites and enquiry handling designed to turn visits into bookings.",
    href: "/website-design-for-clinics/",
    anchor: "clinic website design",
  },
  {
    num: "03",
    label: "Follow Up",
    body: "Automatic responses within minutes, so the enquiry never goes cold.",
    href: "/patient-pulse/",
    anchor: "Patient Pulse",
  },
  {
    num: "04",
    label: "Book",
    body: "A clear route to book by phone or online, with no enquiry left sitting unanswered.",
    href: "/call-centre/",
    anchor: "call handling",
  },
  {
    num: "05",
    label: "Retain",
    body: "Recall systems that bring recovered patients back when they need you again.",
    href: "/ai-integration/",
    anchor: "AI patient reactivation",
  },
];

const disciplineCards = [
  {
    title: "Osteopaths",
    headline: "You built your clinic on clinical reputation. We make sure patients can find it.",
    body: "We understand your patients, your GOsC obligations and how osteopathy patients search and choose.",
    href: "/osteopath-marketing/",
    anchor: "marketing for osteopaths",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v5" />
        <path d="M9 12c0 0-2 1-2 4s2 4 2 4" />
        <path d="M15 12c0 0 2 1 2 4s-2 4-2 4" />
        <path d="M10 20h4" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
  },
  {
    title: "Physiotherapists",
    headline: "The most competitive discipline in local search. We know how to win it.",
    body: "Local SEO, Google Ads and follow-up systems built around how physiotherapy patients search and book.",
    href: "/physiotherapy-marketing/",
    anchor: "physiotherapy marketing",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="4" r="2" />
        <path d="M6 8l3 2 1 4-3 7" />
        <path d="M18 8l-3 2-1 4 3 7" />
        <path d="M9 10h6" />
      </svg>
    ),
  },
  {
    title: "Chiropractors",
    headline: "Chiropractic patients research longer before booking. We build for that journey.",
    body: "Local visibility and patient follow-up designed around the trust and consideration chiropractic patients need before they commit.",
    href: "/chiropractic-marketing/",
    anchor: "chiropractic marketing",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3c-1 0-2 .5-2 1.5S11 6 12 6s2-.5 2-1.5S13 3 12 3z" />
        <path d="M12 6c-1 0-2 .5-2 1.5S11 9 12 9s2-.5 2-1.5S13 6 12 6z" />
        <path d="M12 9c-1 0-2 .5-2 1.5S11 12 12 12s2-.5 2-1.5S13 9 12 9z" />
        <path d="M12 12c-1 0-2 .5-2 1.5S11 15 12 15s2-.5 2-1.5S13 12 12 12z" />
        <path d="M12 15c-1 0-2 .5-2 1.5S11 18 12 18s2-.5 2-1.5S13 15 12 15z" />
        <path d="M10 4.5 Q8 8 8 12 Q8 16 10 19.5" />
        <path d="M14 4.5 Q16 8 16 12 Q16 16 14 19.5" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }]} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-paper)] min-h-[calc(100vh-73px)] flex items-center py-20 lg:py-0">
        <div className="cx-main w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — copy */}
            <div>
              <FadeUp>
                <h1 className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[var(--color-ink)] mb-8 leading-relaxed">
                  Specialist clinic marketing and patient systems for osteopaths, physiotherapists, chiropractors and MSK clinics
                </h1>
              </FadeUp>

              <FadeUp delay={0.06}>
                <p className="font-display font-bold text-[clamp(2.4rem,5.5vw,3.8rem)] leading-[1.06] tracking-[-0.03em] text-[var(--color-ink)] mb-6">
                  More patients. Better follow-up. Fuller diaries.
                </p>
              </FadeUp>

              <FadeUp delay={0.1}>
                <p className="text-body-lg text-[var(--color-ink)] mb-8 leading-relaxed">
                  We help MSK clinics get found, fill their diaries and keep them full.
                </p>
              </FadeUp>

              <FadeUp delay={0.15}>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
                  {[
                    "Honest assessment, no upsell",
                    "Back to you in 2 business days",
                    "Specific to your clinic, not generic",
                  ].map((line) => (
                    <li key={line} className="flex items-center gap-2 text-xs text-[var(--color-ink)]">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="flex-shrink-0">
                        <circle cx="7" cy="7" r="6" fill="var(--color-accent)" fillOpacity="0.12" />
                        <path d="M4 7l2 2 4-4" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Button href="/free-clinic-audit/" size="lg" className="!rounded-full shadow-md">
                    Book a Free Clinic Audit
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
                <div className="flex flex-wrap gap-x-6 gap-y-2.5 items-center mt-8">
                  {[
                    "Built by clinicians with real-world MSK clinic experience",
                    "Specialist support for UK MSK clinics",
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

            {/* Right — founders placeholder */}
            <FadeUp delay={0.1}>
              <div className="hidden lg:block relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/8 via-transparent to-[var(--color-ink)]/5" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 pb-36">
                  <div className="flex gap-5">
                    {["Simon Smith", "Danny Morgan"].map((name) => (
                      <div key={name} className="flex flex-col items-center gap-2">
                        <div className="w-24 h-24 rounded-full bg-white border-2 border-[var(--color-border)] flex items-center justify-center shadow-sm">
                          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                        <p className="text-[0.65rem] font-semibold text-[var(--color-ink)] text-center">{name}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[0.65rem] text-[var(--color-muted)] tracking-wide">Co-founders — ClinicEvo</p>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 space-y-2">
                  <div className="bg-white rounded-xl border border-[var(--color-border)] px-4 py-2.5 shadow-sm flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <p className="text-xs text-[var(--color-ink)]">GOsC-registered osteopath</p>
                  </div>
                  <div className="bg-white rounded-xl border border-[var(--color-border)] px-4 py-2.5 shadow-sm flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <p className="text-xs text-[var(--color-ink)]">Tested inside a live MSK clinic</p>
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── Problem ───────────────────────────────────────────────────────── */}
      <section id="problem-section" className="section bg-[#f7f4f0]">
        <div className="cx-main">
          <FadeUp>
            <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[var(--color-accent)] mb-5">
              The four ways clinics lose patients before they even book
            </p>
            <h2 className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight text-[var(--color-ink)] mb-6 max-w-3xl">
              Most MSK clinics are leaking patients long before treatment begins.
            </h2>
          </FadeUp>

          <div className="mt-12 mb-12">
            <ScenarioCards />
          </div>
        </div>
      </section>

      {/* ── System ────────────────────────────────────────────────────────── */}
      <section id="system-section" className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <p className="text-label mb-5">How ClinicEvo works</p>
            <h2 className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight text-[var(--color-ink)] mb-5">
              Marketing, follow-up and patient communication built to work together.
            </h2>
            <p className="text-body text-[var(--color-ink)] mb-5 max-w-2xl leading-relaxed">
              Most agencies generate leads and leave the rest to you. An enquiry arrives, but too often it is not followed up quickly enough. ClinicEvo helps you get found, convert more enquiries, follow up faster and bring inactive patients back.
            </p>
            <p className="text-body text-[var(--color-ink)] mb-14 max-w-2xl leading-relaxed">
              We build the website, SEO, Google Ads, follow-up and patient communication systems that turn more enquiries into long-term patients. Every part is built to work with the others — including Patient Pulse, our automated follow-up and patient recall system.
            </p>
          </FadeUp>

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
            <Button href="/patient-pulse/" variant="outline">
              See how the follow-up system works
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── Proof ─────────────────────────────────────────────────────────── */}
      <section id="about-founder" className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — founder card placeholder */}
            <FadeUp>
              <div className="w-full aspect-[4/5] rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/6 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center shadow-sm">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
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

            {/* Right — copy */}
            <div>
              <FadeUp>
                <p className="text-label mb-5">Built in practice, not theory</p>
                <h2 className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight text-[var(--color-ink)] mb-5">
                  Built in a real clinic. Proven in practice.
                </h2>
                <p className="text-body-lg text-[var(--color-ink)] mb-8 leading-relaxed">
                  We built ClinicEvo because we know what missed calls, empty diary gaps and weak follow-up cost a clinic. Danny&apos;s clinic was the first to run the full system, so everything we build has been tested against the operational reality of a working MSK practice, not designed in a marketing agency.
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
                      desc: "Bodyfunction Clinic in London was the first practice to run the full system. We'll show you the results on your audit call.",
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

      {/* ── Who We Help ───────────────────────────────────────────────────── */}
      <section id="who-we-help" className="section bg-[var(--color-surface)]/30">
        <div className="cx-main">
          <FadeUp>
            <p className="text-label mb-5">Our specialisms</p>
            <h2 className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight text-[var(--color-ink)] mb-5">
              Built for MSK clinics.
            </h2>
            <p className="text-body text-[var(--color-ink)] mb-12 max-w-xl leading-relaxed">
              Specialist marketing and patient systems for osteopaths, physiotherapists and chiropractors across the UK.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {disciplineCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.09}>
                <div className="flex flex-col h-full border border-[var(--color-border)] rounded-xl p-8 bg-white hover:border-[var(--color-accent)]/30 hover:shadow-sm transition-all">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-accent)]/8 border border-[var(--color-accent)]/12 flex items-center justify-center text-[var(--color-accent)] mb-5">
                    {card.icon}
                  </div>
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

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section id="book-audit" className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — text */}
            <FadeUp>
              <p className="text-label text-[var(--color-accent)] mb-6">Get started</p>
              <h2 className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight text-[var(--color-ink)] mb-7">
                Find out where your clinic is losing patients.
              </h2>
              <p className="text-body-lg text-[var(--color-ink)] mb-6 leading-relaxed">
                Book a free clinic audit. We review your search visibility, website, enquiry handling and follow-up systems, then tell you honestly where patients are falling through the gaps. Back to you within two business days.{" "}
                <strong className="font-semibold">No commitment. No agency jargon.</strong>
              </p>
              <ul className="flex flex-col gap-2.5 mb-8">
                {[
                  "We check your Google Business Profile and local search visibility",
                  "We review your website conversion rate and booking path",
                  "We assess your enquiry handling speed and follow-up system",
                  "We tell you what to fix first",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-[var(--color-ink)]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0 mt-0.5">
                      <circle cx="8" cy="8" r="7" fill="var(--color-accent)" fillOpacity="0.1" />
                      <path d="M5 8l2 2 4-4" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {line}
                  </li>
                ))}
              </ul>
              <Button href="/free-clinic-audit/" size="lg" className="!rounded-full shadow-md">
                Book Your Free Clinic Audit
              </Button>
              <p className="text-xs text-[var(--color-ink)] mt-5">
                Specialist support for UK osteopaths, physiotherapists, chiropractors and MSK clinics.
              </p>
            </FadeUp>

            {/* Right — placeholder image */}
            <FadeUp delay={0.1}>
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/8 via-transparent to-[var(--color-ink)]/5" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 pb-28">
                  <div className="flex gap-5">
                    {["Simon Smith", "Danny Morgan"].map((name) => (
                      <div key={name} className="flex flex-col items-center gap-2">
                        <div className="w-20 h-20 rounded-full bg-white border-2 border-[var(--color-border)] flex items-center justify-center shadow-sm">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                        <p className="text-[0.6rem] font-semibold text-[var(--color-ink)] text-center">{name}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[0.6rem] text-[var(--color-muted)] tracking-wide">Founders — ClinicEvo</p>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="bg-white rounded-xl border border-[var(--color-border)] px-4 py-3 shadow-sm">
                    <p className="text-xs font-bold text-[var(--color-ink)] mb-0.5">Free clinic audit</p>
                    <p className="text-[0.65rem] text-[var(--color-muted)]">Honest · No commitment · Back to you in 2 days</p>
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
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
              title="Why Most MSK Clinics Lose Patients Before Treatment Begins"
              excerpt="The four moments where potential patients slip through — and what a connected system does differently."
              href="/resources/why-most-msk-clinics-lose-patients-before-treatment-begins/"
              readTime="8 min read"
            />
            <ResourceCard
              category="SEO"
              title="The Local SEO Mistakes Most Clinics Still Make"
              excerpt="What actually works to get your clinic to the top of local search results — and why most clinics get it wrong."
              href="/resources/local-seo-for-healthcare-clinics/"
              readTime="6 min read"
            />
            <ResourceCard
              category="Patient Retention"
              title="The Follow-Up Systems Most Clinics Still Do Manually"
              excerpt="Using structured automation to turn your database of lapsed patients into booked appointments."
              href="/resources/the-follow-up-systems-most-clinics-still-do-manually/"
              readTime="5 min read"
            />
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import ResourceCard from "@/components/sections/ResourceCard";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ScenarioCards from "@/components/sections/ScenarioCards";
import DashboardMockup from "@/components/hero/DashboardMockup";
import AnimatedHeadline from "@/components/ui/AnimatedHeadline";
import TiltCard from "@/components/ui/TiltCard";

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
    accentColor: "#6B21A8",
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
    accentColor: "#0F766E",
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
    accentColor: "#1E3A5F",
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
      <section
        className="grain min-h-[calc(100vh-73px)] flex items-center py-14 lg:py-20"
        style={{ background: "#0D0818" }}
      >
        <div className="cx-main w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — copy */}
            <div>
              <FadeUp>
                <span
                  className="inline-flex items-center mb-8"
                  style={{
                    padding: "4px 12px",
                    borderRadius: "99px",
                    background: "rgba(155,95,227,0.15)",
                    border: "1px solid rgba(155,95,227,0.3)",
                    color: "#C4A0F0",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  UK MSK Growth Partner
                </span>
              </FadeUp>

              <AnimatedHeadline
                text="The only growth system built for MSK clinics."
                as="h1"
                baseDelay={0.08}
                className="font-display text-white mb-6"
                style={{
                  fontSize: "4.2rem",
                  fontWeight: 800,
                  lineHeight: "1.2em",
                  letterSpacing: "-0.03em",
                }}
              />

              <FadeUp delay={0.1}>
                <p
                  className="mb-8"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "17px",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.55)",
                    maxWidth: "480px",
                  }}
                >
                  We build and run the patient acquisition systems that fill diaries, recover lapsed patients, and scale revenue — for UK osteopaths, physiotherapists and chiropractors.
                </p>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-4">
                  <Link
                    href="/free-clinic-audit/"
                    className="inline-flex items-center font-semibold text-white transition-colors hover:opacity-90"
                    style={{
                      background: "#7B3FBE",
                      padding: "13px 24px",
                      borderRadius: "8px",
                      fontSize: "15px",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Book your free clinic audit
                  </Link>
                  <Link
                    href="#system-section"
                    className="inline-flex items-center gap-2 transition-colors hover:border-white/40"
                    style={{
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.6)",
                      padding: "13px 24px",
                      borderRadius: "8px",
                      fontSize: "15px",
                    }}
                  >
                    See it in action
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </Link>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  30-minute call · No contract · Immediate findings
                </p>
              </FadeUp>

              <FadeUp delay={0.22}>
                <div
                  className="mt-8 pt-8 flex items-center gap-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="flex">
                    {[
                      { initials: "SM", bg: "#6B21A8" },
                      { initials: "DM", bg: "#0F766E" },
                      { initials: "JR", bg: "#1E3A5F" },
                      { initials: "KW", bg: "#7C3AED" },
                    ].map((a, i) => (
                      <div
                        key={a.initials}
                        style={{
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          background: a.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "10px",
                          fontWeight: 600,
                          color: "white",
                          border: "2px solid #0D0818",
                          marginLeft: i > 0 ? "-7px" : 0,
                          position: "relative",
                          zIndex: 4 - i,
                        }}
                      >
                        {a.initials}
                      </div>
                    ))}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    Trusted by{" "}
                    <span style={{ color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>40+</span>{" "}
                    UK MSK clinics
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Right — Patient Pulse Dashboard Mockup (animated) */}
            <FadeUp delay={0.1}>
              <DashboardMockup />
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── Problem ───────────────────────────────────────────────────────── */}
      <section id="problem-section" className="section" style={{ background: "#FAFAF8" }}>
        <div className="cx-main">
          <FadeUp>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#6B21A8",
                marginBottom: "16px",
              }}
            >
              The four ways clinics lose patients before they even book
            </p>
            <h2
              className="font-display font-bold text-[var(--color-ink)]"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.019em",
                maxWidth: "680px",
                marginBottom: "56px",
              }}
            >
              Most MSK clinics are leaking patients long before treatment begins.
            </h2>
          </FadeUp>

          <ScenarioCards />
        </div>
      </section>

      {/* ── System ────────────────────────────────────────────────────────── */}
      <section id="system-section" className="grain section" style={{ background: "#0A1628" }}>
        <div className="cx-main">
          <FadeUp>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "rgba(155,95,227,0.8)",
                marginBottom: "16px",
              }}
            >
              How ClinicEvo works
            </p>
            <h2
              className="font-display font-bold text-white"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.019em",
                marginBottom: "16px",
              }}
            >
              The CE Patient Engine
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "18px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                maxWidth: "560px",
                marginBottom: "64px",
              }}
            >
              Five connected systems that turn strangers into long-term patients — and bring lapsed ones back.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5 mb-12 relative">
            {/* Connector line between step nodes */}
            <div
              className="hidden md:block absolute"
              style={{
                top: "44px",
                left: "calc(10% + 12px)",
                right: "calc(10% + 12px)",
                height: "1px",
                background: "rgba(155,95,227,0.3)",
                zIndex: 0,
              }}
              aria-hidden="true"
            />

            {systemStages.map((stage, i) => (
              <FadeUp key={stage.num} delay={i * 0.09}>
                <div
                  className="relative flex flex-col h-full transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(155,95,227,0.15)",
                    borderRadius: "12px",
                    padding: "24px",
                  }}
                >
                  <span
                    className="font-display font-extrabold mb-3 block"
                    style={{
                      fontSize: "40px",
                      color: "#9B5FE3",
                      lineHeight: 1,
                    }}
                  >
                    {stage.num}
                  </span>
                  <h3
                    className="font-display font-semibold text-white mb-3"
                    style={{ fontSize: "17px" }}
                  >
                    {stage.label}
                  </h3>
                  <p
                    className="flex-1 mb-4"
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.6,
                    }}
                  >
                    {stage.body}
                  </p>
                  <Link
                    href={stage.href}
                    className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-75"
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#9B5FE3",
                    }}
                  >
                    {stage.anchor}
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.5}>
            <Link
              href="/patient-pulse/"
              className="inline-flex items-center gap-2 font-semibold transition-colors hover:bg-white/5"
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "15px",
              }}
            >
              See Patient Pulse in action →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Social Proof ──────────────────────────────────────────────────── */}
      <section id="about-founder" className="section bg-white">
        <div className="cx-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — branded stat card with testimonial */}
            <FadeUp>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#1A0F2E",
                  border: "1px solid rgba(107,33,168,0.25)",
                }}
              >
                <div style={{ padding: "40px" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "#9B5FE3",
                      marginBottom: "16px",
                    }}
                  >
                    Founding partner results
                  </p>
                  <p
                    className="font-display font-extrabold text-white"
                    style={{
                      fontSize: "clamp(3rem, 6vw, 4rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    342
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "16px",
                      color: "rgba(255,255,255,0.6)",
                      marginTop: "8px",
                      lineHeight: 1.5,
                    }}
                  >
                    new patient enquiries in 30 days
                  </p>

                  <div
                    style={{
                      marginTop: "32px",
                      paddingTop: "28px",
                      borderTop: "1px solid rgba(155,95,227,0.2)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontStyle: "italic",
                        fontSize: "15px",
                        color: "rgba(255,255,255,0.55)",
                        lineHeight: 1.7,
                        marginBottom: "20px",
                      }}
                    >
                      &ldquo;We went from page 4 to position 1 in 11 weeks. The follow-up system alone recovered 34 lapsed patients in the first month.&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: "#6B21A8",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "white",
                          flexShrink: 0,
                        }}
                      >
                        DM
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "white",
                          }}
                        >
                          Danny Morgan
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "12px",
                            color: "rgba(255,255,255,0.4)",
                          }}
                        >
                          Bodyfunction Clinic, London — Founding partner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right — copy */}
            <div>
              <FadeUp>
                <p className="text-label mb-5">Built in practice, not theory</p>
                <h2
                  className="font-display font-bold text-[var(--color-ink)] mb-5"
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                  }}
                >
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
                      <div
                        className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg"
                        style={{
                          background: "rgba(107,33,168,0.08)",
                          border: "1px solid rgba(107,33,168,0.15)",
                          color: "#6B21A8",
                        }}
                      >
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
      <section id="who-we-help" className="section" style={{ background: "#F5F4F1" }}>
        <div className="cx-main">
          <FadeUp>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#6B21A8",
                marginBottom: "16px",
              }}
            >
              Our specialisms
            </p>
            <h2
              className="font-display font-bold text-[var(--color-ink)]"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.019em",
                marginBottom: "48px",
              }}
            >
              Built for MSK clinics.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {disciplineCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.09}>
                <TiltCard
                  className="flex flex-col h-full bg-white group"
                  style={{
                    borderTop: `3px solid ${card.accentColor}`,
                    border: "1px solid #E5E7EB",
                    borderTopColor: card.accentColor,
                    borderTopWidth: "3px",
                    borderRadius: "12px",
                    padding: "36px",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                    style={{
                      background: `${card.accentColor}14`,
                      color: card.accentColor,
                    }}
                  >
                    {card.icon}
                  </div>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      color: card.accentColor,
                      marginBottom: "10px",
                    }}
                  >
                    {card.title}
                  </p>
                  <h3
                    className="font-display font-semibold text-[var(--color-ink)] mb-4"
                    style={{ fontSize: "22px", lineHeight: 1.3, letterSpacing: "-0.01em" }}
                  >
                    {card.headline}
                  </h3>
                  <p
                    className="flex-1 mb-6"
                    style={{
                      fontSize: "14px",
                      color: "#6B7280",
                      lineHeight: 1.6,
                    }}
                  >
                    {card.body}
                  </p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 transition-all group-hover:gap-3"
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: card.accentColor,
                    }}
                  >
                    {card.anchor}
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </TiltCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        id="book-audit"
        className="grain text-center"
        style={{ background: "#3B0764", padding: "140px 0" }}
      >
        <div className="cx-main">
          <FadeUp>
            <h2
              className="font-display font-extrabold text-white mx-auto mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.019em",
                maxWidth: "680px",
              }}
            >
              See exactly where your clinic is losing patients.
            </h2>
            <p
              className="mx-auto mb-10"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "18px",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                maxWidth: "540px",
              }}
            >
              We review your search visibility, website, follow-up handling, and ad systems — then show you exactly where patients are falling through the gaps.
            </p>
            <Link
              href="/free-clinic-audit/"
              className="inline-flex items-center font-semibold transition-colors hover:bg-white/90"
              style={{
                background: "white",
                color: "#3B0764",
                padding: "14px 28px",
                borderRadius: "8px",
                fontSize: "15px",
                fontFamily: "var(--font-display)",
              }}
            >
              Book your free clinic audit
            </Link>
            <p
              className="mt-5"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              47 UK clinics audited · No cost · No commitment
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Resources ─────────────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="cx-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <FadeUp>
              <div className="max-w-xl">
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#6B21A8",
                    marginBottom: "12px",
                  }}
                >
                  Resources
                </p>
                <h2
                  className="font-display font-bold text-[var(--color-ink)]"
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.015em",
                  }}
                >
                  Practical resources for growing your MSK clinic.
                </h2>
              </div>
            </FadeUp>
            <Link
              href="/resources/"
              className="inline-flex items-center gap-2 font-semibold transition-colors hover:bg-[#6B21A8] hover:text-white flex-shrink-0"
              style={{
                border: "2px solid #6B21A8",
                color: "#6B21A8",
                padding: "10px 20px",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            >
              View all resources
            </Link>
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

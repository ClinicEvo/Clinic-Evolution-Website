import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import ResourceCard from "@/components/sections/ResourceCard";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ScenarioCards from "@/components/sections/ScenarioCards";
import HeroVisual from "@/components/hero/HeroVisual";
import HeroHeadline from "@/components/hero/HeroHeadline";
import CTASection from "@/components/sections/CTASection";

const ACCENT = "#ff5b4a";

const systemStages = [
  {
    num: "01",
    label: "Get Found",
    body: "Local SEO and Google Ads built around how MSK patients actually search.",
    href: "/seo-for-clinics/",
    anchor: "SEO for Clinics",
  },
  {
    num: "02",
    label: "Convert",
    body: "Websites and enquiry handling designed to turn visits into bookings.",
    href: "/website-design-for-clinics/",
    anchor: "Clinic Website Design",
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
    body: "Calls answered and ad leads called back, then booked straight into your diary, with no enquiry left sitting unanswered.",
    href: "/call-centre/",
    anchor: "Call Handling",
  },
  {
    num: "05",
    label: "Retain",
    body: "Recall systems that bring recovered patients back when they need you again.",
    href: "/ai-integration/",
    anchor: "AI Patient Reactivation",
  },
];

const disciplineCards = [
  {
    title: "Osteopaths",
    headline: "You built your clinic on clinical reputation. We make sure patients can find it.",
    body: "We understand your patients, your GOsC obligations and how osteopathy patients search and choose.",
    href: "/osteopath-marketing/",
    anchor: "Marketing for Osteopaths",
    accentColor: ACCENT,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {/* Vertebrae + discs — front view of spinal column */}
        <rect x="8" y="2" width="8" height="4" rx="1.5" />
        <path d="M9 6 Q12 7.5 15 6" />
        <rect x="7" y="8" width="10" height="4" rx="1.5" />
        <path d="M8 12 Q12 13.5 16 12" />
        <rect x="8" y="14" width="8" height="4" rx="1.5" />
        <path d="M10 18 Q12 21 14 18" />
      </svg>
    ),
    watermarkImg: "/images/watermark-osteopath.jpg",
  },
  {
    title: "Physiotherapists",
    headline: "The most competitive discipline in local search. We know how to win it.",
    body: "Local SEO, Google Ads and follow-up systems built around how physiotherapy patients search and book.",
    href: "/physiotherapy-marketing/",
    anchor: "Physiotherapy Marketing",
    accentColor: "#0F766E",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="10" width="3" height="4" rx="1" />
        <rect x="5" y="8" width="2" height="8" rx="1" />
        <line x1="7" y1="12" x2="17" y2="12" />
        <rect x="17" y="8" width="2" height="8" rx="1" />
        <rect x="19" y="10" width="3" height="4" rx="1" />
      </svg>
    ),
    watermarkImg: "/images/watermark-physio.jpg",
  },
  {
    title: "Chiropractors",
    headline: "Chiropractic patients research longer before booking. We build for that journey.",
    body: "Local visibility and patient follow-up designed around the trust and consideration chiropractic patients need before they commit.",
    href: "/chiropractic-marketing/",
    anchor: "Chiropractic Marketing",
    accentColor: "#1E3A5F",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {/* Vertebra with opposing adjustment arrows */}
        <path d="M12 2 L12 7" />
        <rect x="9" y="7" width="6" height="10" rx="1.5" />
        <path d="M12 17 L12 22" />
        <path d="M2 12 L7 12" />
        <path d="M4.5 9.5 L7.5 12 L4.5 14.5" />
        <path d="M22 12 L17 12" />
        <path d="M19.5 9.5 L16.5 12 L19.5 14.5" />
      </svg>
    ),
    watermarkImg: "/images/watermark-chiro.jpg",
  },
];

const systemStats = [
  { value: "2 min", label: "Typical first reply to a new enquiry" },
  { value: "52", label: "Booked leads in a typical month" },
  { value: "1", label: "Connected system, not five disconnected tools" },
];

function OperatingSystemBand() {
  return (
    <div
      className="relative my-16 overflow-hidden bg-[var(--color-ink)] text-white"
      style={{ borderRadius: "var(--radius-panel)" }}
    >
      <div className="grid gap-10 p-9 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:p-14">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            The Clinic Evo operating system
          </p>
          <h3 className="mt-4 max-w-md font-display text-3xl font-semibold leading-[1.15] text-white md:text-[2.4rem]">
            One connected patient journey, not five disconnected marketing tasks.
          </h3>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
            Search visibility, conversion, instant follow-up and patient recall run in one growth loop, so you can see where demand is created, where enquiries slow down, and what happens next.
          </p>
        </div>

        <div className="flex flex-col justify-center divide-y divide-white/10 border-t border-white/10 lg:border-t-0">
          {systemStats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-5 py-5 first:pt-0 lg:first:pt-5">
              <span className="whitespace-nowrap font-display text-4xl font-semibold leading-none text-[var(--color-accent)] md:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm leading-snug text-white/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }]} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-[var(--color-border)] bg-[var(--color-paper)] grain">
        <div className="grid items-stretch lg:grid-cols-2 lg:gap-x-16">

          {/* Left, copy, aligned to the container edge */}
          <div
            className="flex flex-col justify-center pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-8"
            style={{
              paddingLeft: "max(1.5rem, calc((100vw - 75rem) / 2))",
              paddingRight: "2.5rem",
            }}
          >
            <div className="max-w-[34rem]">
              <FadeUp>
                <span className="eyebrow mb-5">
                  For UK osteopaths, physios &amp; chiropractors
                </span>
              </FadeUp>

              <HeroHeadline />

              <FadeUp delay={0.18}>
                <p
                  className="mt-5"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "18px",
                    lineHeight: 1.6,
                    color: "var(--color-charcoal)",
                    maxWidth: "452px",
                  }}
                >
                  Clinic Evo is the marketing and patient follow-up system for MSK clinics, it gets you found on Google, turns enquiries into bookings, and brings lapsed patients back. All in one place.
                </p>
              </FadeUp>

              <FadeUp delay={0.24}>
                <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/free-clinic-audit/"
                    className="inline-flex items-center font-semibold text-white transition-all hover:bg-[var(--color-accent-dim)] active:translate-y-px"
                    style={{
                      background: ACCENT,
                      padding: "15px 28px",
                      borderRadius: "var(--radius-btn)",
                      fontSize: "15px",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Book a free clinic audit
                  </Link>
                  <Link
                    href="#system-section"
                    className="group inline-flex items-center gap-2 font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
                    style={{ padding: "15px 8px", fontSize: "15px" }}
                  >
                    See how it works
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-t border-[var(--color-border)] pt-4">
                  {[
                    "Built by clinicians",
                    "UK MSK specialists",
                    "Follow-up & recall included",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5"
                      style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--color-charcoal)" }}
                    >
                      <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full" style={{ background: "var(--color-accent-light)", color: ACCENT }}>
                        <svg width="9" height="9" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M2.5 7.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
          </div>

          {/* Right, clinical photography with one patient-journey overlay */}
          <div className="relative">
            <HeroVisual />
          </div>

        </div>
      </section>

      {/* ── Problem ───────────────────────────────────────────────────────── */}
      <section id="problem-section" className="section bg-[var(--color-paper)] border-t border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <p
              className="eyebrow mb-4"
            >
              Why most clinic marketing underperforms
            </p>
            <h2
              className="text-h2 text-balance text-[var(--color-ink)] max-w-[680px] mb-14"
            >
              Most MSK clinics are leaking patients long before treatment begins.
            </h2>
          </FadeUp>

          <ScenarioCards />

          <FadeUp>
            <p
              className="text-h3 mx-auto mt-16 max-w-3xl text-balance text-center font-medium text-[var(--color-ink)]"
            >
              Four quiet leaks. Most clinics never see them in the accounts, they just feel the empty diary.{" "}
              <span className="text-[var(--color-accent)]">A connected system closes all four.</span>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── System ────────────────────────────────────────────────────────── */}
      <section id="system-section" className="section bg-[var(--color-surface)] border-y border-[var(--color-border)] grain">
        <div className="cx-main">
          <FadeUp>
            <p
              className="eyebrow mb-4"
            >
              How Clinic Evo works
            </p>
            <h2
              className="text-h2 text-[var(--color-ink)] mb-4"
            >
              Marketing, follow-up and patient communication built to work together.
            </h2>
            <p
              className="text-body-lg text-[var(--color-charcoal)] max-w-[580px]"
            >
              Most agencies generate leads and leave the rest to you. We build the website, SEO, Google Ads and follow-up that work as one system, every part designed to turn more enquiries into long-term patients, including Patient Pulse, our automated follow-up and recall engine.
            </p>
          </FadeUp>

          <OperatingSystemBand />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8 mb-12 relative">
            {systemStages.map((stage, i) => (
              <FadeUp key={stage.num} delay={i * 0.09}>
                <div className="group relative flex h-full flex-col border-t-2 border-[var(--color-border)] pt-6 transition-colors hover:border-[var(--color-accent)]">
                  <span
                    className="mb-3 block font-display font-light leading-none text-[var(--color-muted-light)] transition-colors group-hover:text-[var(--color-accent)]"
                    style={{ fontSize: "36px" }}
                  >
                    {stage.num}
                  </span>
                  <h3
                    className="text-h4 text-[var(--color-ink)] mb-3"
                  >
                    {stage.label}
                  </h3>
                  <p
                    className="text-body-sm text-[var(--color-muted)] flex-1 mb-4"
                  >
                    {stage.body}
                  </p>
                  <Link
                    href={stage.href}
                    className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-75"
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "var(--color-ink)",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
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
              className="inline-flex items-center gap-2 font-semibold transition-all hover:border-[var(--color-ink)] hover:bg-[var(--color-surface)]"
              style={{
                border: `1px solid var(--color-border)`,
                color: "var(--color-ink)",
                padding: "13px 26px",
                borderRadius: "var(--radius-btn)",
                fontSize: "15px",
              }}
            >
              See how the follow-up system works →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Social Proof ──────────────────────────────────────────────────── */}
      <section id="about-founder" className="section bg-[var(--color-paper)] border-t border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 md:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-20 items-center">

            {/* Left, stat card with testimonial (light version) */}
            <FadeUp>
              <div className="bg-transparent py-4">
                <div>
                  <p
                    className="eyebrow mb-4"
                  >
                    Founding partner results
                  </p>
                  <p
                    className="font-display font-extrabold"
                    style={{
                      fontSize: "clamp(4rem, 9vw, 7rem)",
                      lineHeight: 1,
                      letterSpacing: "0",
                      color: ACCENT,
                    }}
                  >
                    342
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "16px",
                      color: "var(--color-muted)",
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
                      borderTop: "1px solid var(--color-border)",
                    }}
                  >
                    <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
                      <Image
                        src="/images/danny_and_co.png"
                        alt="The Bodyfunction Clinic team in London, Danny Morgan and colleagues"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 560px"
                      />
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        fontSize: "20px",
                        color: "var(--color-ink)",
                        lineHeight: 1.6,
                        marginBottom: "24px",
                      }}
                    >
                      &ldquo;We went from page 4 to position 1 in 11 weeks. The follow-up system alone recovered 34 lapsed patients in the first month.&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: "50%",
                          overflow: "hidden",
                          position: "relative",
                          border: "1px solid var(--color-border)",
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src="/images/danny-morgan-angel-clinic.png"
                          alt="Danny Morgan"
                          fill
                          className="object-cover"
                          sizes="42px"
                        />
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "var(--color-ink)",
                          }}
                        >
                          Danny Morgan
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "12px",
                            color: "var(--color-muted)",
                          }}
                        >
                          Bodyfunction Clinic, London, Founding partner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right, copy */}
            <div>
              <FadeUp>
                <p className="text-label mb-5">Built in practice, not theory</p>
                <h2
                  className="text-h2 text-[var(--color-ink)] mb-5"
                >
                  Built in a real clinic. Proven in practice.
                </h2>
                <p className="text-body-lg text-[var(--color-ink)] mb-8 leading-relaxed max-w-xl">
                  We built Clinic Evo because we know what missed calls, empty diary gaps and weak follow-up cost a clinic. Danny&apos;s clinic was the first to run the full system, so everything we build has been tested against the operational reality of a working MSK practice, not designed in a marketing agency.
                </p>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div className="flex flex-col gap-7 pt-8 border-t border-[var(--color-border)]">
                  {[
                    {
                      title: "Founded by two registered osteopaths",
                      desc: "Simon and Danny are both GOsC-registered osteopaths. Clinic Evo was built from inside the profession, not by a marketing agency looking in.",
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 3l7 3v5c0 4.5-2.8 7.6-7 9-4.2-1.4-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" />
                        </svg>
                      ),
                    },
                    {
                      title: "Owned and run by a practising clinician",
                      desc: "Danny owns and practises at Bodyfunction Clinic in London, the first practice to run the full Clinic Evo system.",
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 21V8.5l7-4 7 4V21" /><path d="M3.5 21h17" /><path d="M12 11v3.4M10.3 12.7h3.4" />
                        </svg>
                      ),
                    },
                    {
                      title: "Tested inside a live MSK clinic",
                      desc: "Every tool was built and refined in a real clinical environment, not a boardroom. It has to work in practice, not just in a demo.",
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M2 12.5h4.5l2-6 3 11 2.5-5H22" />
                        </svg>
                      ),
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg"
                        style={{
                          background: "var(--color-surface)",
                          color: "var(--color-ink)",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[var(--color-ink)] mb-1">{item.title}</h3>
                        <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
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
      <section id="who-we-help" className="section bg-[var(--color-surface)] border-y border-[var(--color-border)] grain">
        <div className="cx-main">
          <FadeUp>
            <p
              className="eyebrow mb-4"
            >
              Our specialisms
            </p>
            <h2
              className="text-h2 text-[var(--color-ink)] mb-12"
            >
              Built for MSK clinics.
            </h2>
          </FadeUp>

          <div className="flex flex-col gap-5">
            {disciplineCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.09}>
                <Link
                  href={card.href}
                  className="group flex flex-col sm:flex-row overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-[2px]"
                  style={{ background: "var(--color-paper)" }}
                >
                  {/* Image — left */}
                  <div className="relative h-52 w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-64 lg:w-72">
                    <Image
                      src={card.watermarkImg}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 288px"
                    />
                    <div className="absolute inset-0 bg-[var(--color-ink)]/10" />
                  </div>
                  {/* Content — right */}
                  <div className="flex flex-1 flex-col justify-center p-7 md:p-9 lg:p-10">
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)]"
                        style={{ background: "var(--color-accent-light)", color: "var(--color-accent)" }}
                      >
                        {card.icon}
                      </div>
                      <p className="eyebrow">{card.title}</p>
                    </div>
                    <h3 className="text-h3 text-[var(--color-ink)] mb-3">{card.headline}</h3>
                    <p className="text-body-sm text-[var(--color-muted)] mb-6">{card.body}</p>
                    <span
                      className="inline-flex items-center gap-2 transition-all group-hover:gap-3 group-hover:text-[var(--color-accent)]"
                      style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-ink)", textDecoration: "underline", textUnderlineOffset: "4px" }}
                    >
                      {card.anchor}
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CTASection
        id="book-audit"
        heading="Find out where your clinic is losing patients."
        subheading="Book a free clinic audit. We review your search visibility, website, enquiry handling and follow-up systems, then tell you honestly where patients are falling through the gaps. Back to you within two business days. No commitment. No agency jargon."
        primaryLabel="Book a free clinic audit"
        primaryHref="/free-clinic-audit/"
      />

      {/* ── Resources ─────────────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-paper)] border-t border-[var(--color-border)]">
        <div className="cx-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <FadeUp>
              <div className="max-w-xl">
                <p
                  className="eyebrow mb-4"
                >
                  Learning Hub
                </p>
                <h2
                  className="font-display font-bold text-[var(--color-ink)]"
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    lineHeight: 1.15,
                    letterSpacing: "0",
                  }}
                >
                  Practical resources for growing your MSK clinic.
                </h2>
              </div>
            </FadeUp>
            <Link
              href="/learning-hub/"
              className="inline-flex items-center gap-2 font-semibold transition-all hover:border-[var(--color-ink)] hover:bg-[var(--color-surface)] flex-shrink-0"
              style={{
                border: `1px solid var(--color-border)`,
                color: "var(--color-ink)",
                padding: "11px 22px",
                borderRadius: "var(--radius-btn)",
                fontSize: "14px",
              }}
            >
              Visit the Learning Hub
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <ResourceCard
              category="Patient Acquisition"
              title="How to get more patients to your clinic"
              excerpt="A clear breakdown of the main digital levers that help clinics attract more patient enquiries, from local search to conversion-focused service pages."
              href="/learning-hub/how-to-get-more-patients-to-your-clinic/"
              readTime="7 min read"
              image="/images/resources/get-more-patients.jpg"
            />
            <ResourceCard
              category="SEO"
              title="Local SEO for healthcare clinics"
              excerpt="A broader guide to local SEO for healthcare clinics that want to appear more consistently for relevant local searches."
              href="/learning-hub/local-seo-for-healthcare-clinics/"
              readTime="5 min read"
              image="/images/resources/local-seo-healthcare.jpg"
            />
            <ResourceCard
              category="Patient Retention"
              title="Patient recall system: what it is and why clinics need one"
              excerpt="A guide to patient recall, follow-up and reactivation systems for clinics that want to reconnect with past patients more effectively."
              href="/learning-hub/patient-recall-system/"
              readTime="5 min read"
              image="/images/resources/patient-recall.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

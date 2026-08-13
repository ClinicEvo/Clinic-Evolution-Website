import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  GoogleLogo,
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
} from "@/components/brand/PlatformLogos";
import FadeUp from "@/components/animations/FadeUp";
import ResourceCard from "@/components/sections/ResourceCard";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import HeroVisual from "@/components/hero/HeroVisual";
import HeroHeadline from "@/components/hero/HeroHeadline";
import CTASection from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url,
    languages: { "en-GB": siteConfig.url },
  },
  openGraph: {
    url: siteConfig.url,
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} | ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    images: ["/og-default.jpg"],
  },
};

const ACCENT = "#ff5b4a";

// The four acquisition channels. Patient Pulse is rendered separately, as the
// layer that connects them, rather than as a fifth sibling.
//
// `platforms` makes the service concrete at a glance, using Phosphor's brand
// logos (already a dependency) in each platform's brand colour.
const channels = [
  {
    num: "01",
    label: "Clinic Websites",
    body: "Built after the search and competitor research, not before it. The right patients find you, understand why you are relevant to them, and can book without friction.",
    href: "/website-design-for-clinics/",
    anchor: "Clinic Websites",
    platforms: [],
  },
  {
    num: "02",
    label: "SEO for Clinics",
    body: "Visibility for the local treatment and symptom searches people are already making, across map results, organic listings and AI answers.",
    href: "/seo-for-clinics/",
    anchor: "SEO for Clinics",
    platforms: [{ name: "Google", icon: GoogleLogo }],
  },
  {
    num: "03",
    label: "Google Ads",
    body: "Paid search that reaches people actively looking for treatment right now, on the terms worth paying for rather than broad ones that drain the budget.",
    href: "/google-ads-for-clinics/",
    anchor: "Google Ads for Clinics",
    platforms: [{ name: "Google Ads", icon: GoogleLogo }],
  },
  {
    num: "04",
    label: "Paid Social",
    body: "Campaigns that create demand among people who were not searching yet. Each platform needs its own creative, offer and audience — they are not interchangeable.",
    href: "/digital-marketing/",
    anchor: "Digital Marketing",
    // Facebook, Instagram and TikTok — exactly the three Danny named in the
    // review: "I would on this page include logos for Tik Tok, Facebook, and
    // Instagram". Meta is not listed because he did not ask for it.
    platforms: [
      { name: "Facebook", icon: FacebookLogo },
      { name: "Instagram", icon: InstagramLogo },
      { name: "TikTok", icon: TiktokLogo },
    ],
  },
];

// What Patient Pulse actually does. Every item here comes from the capability
// list Danny gave in the 10 Aug review — nothing is inferred or invented.
const pulseBenefits = [
  {
    title: "Every enquiry in one place",
    body: "Prospective and existing patients stored and organised, so nothing disappears into an inbox or a spreadsheet.",
  },
  {
    title: "One inbox, not five apps",
    body: "Website, Facebook, Instagram and TikTok conversations arrive in the same place instead of five open tabs.",
  },
  {
    title: "Google reviews chased automatically",
    body: "Review follow-up runs on its own, so your reputation is not dependent on someone remembering to ask.",
  },
  {
    title: "Social posts and newsletters from one place",
    body: "Plan and schedule content and patient email in advance, which removes the need for a separate mailing tool.",
  },
  {
    title: "Lead pipelines your team can see",
    body: "Staff can see which enquiries need attention and which have progressed to a booking, and reception can work in it too.",
  },
  {
    title: "Follow-up that runs without chasing",
    body: "Automated journeys keep in touch with leads who are not ready yet, and bring lapsed patients back.",
  },
];

// Clinics we work with. Danny named Body Restore and 1% Club in the 10 Aug
// review and pointed at Lind Street as the next one to add ("you might be able
// to get a couple of your mob on board near the Lind Street practice").
// Bodyfunction is deliberately NOT here — it is the origin story, not a client,
// and listing it alongside clients recreates the confusion Danny asked us to
// fix. Its logo appears in the origin section instead.
//
// `logoHeight` is tuned per mark rather than shared, because these have very
// different aspect ratios and a single height makes the near-square 1% Club
// mark read as tiny next to the wordmarks.
//
// `dim` is opt-out for the same reason. The 85% wash reads as a tasteful
// unification on the two dark navy marks, but Lind Street's brand is pale sage
// and cream — dimming an already low-contrast mark on a white strip makes it
// look broken rather than understated.
const clientLogos: Array<{
  name: string;
  src: string;
  width: number;
  height: number;
  logoHeight: number;
  dim?: boolean;
}> = [
  {
    name: "Body Restore Clinic",
    src: "/images/clients/body-restore.png",
    width: 1714,
    height: 564,
    logoHeight: 40,
    dim: true,
  },
  {
    name: "1 Percent Club",
    src: "/images/clients/one-percent-club.png",
    width: 500,
    height: 461,
    logoHeight: 58,
    dim: true,
  },
  {
    name: "Lind Street Osteopathy",
    src: "/images/clients/lind-street.png",
    width: 1500,
    height: 500,
    logoHeight: 50,
  },
];

// The two capabilities that operate after an enquiry arrives, so they sit
// inside the Patient Pulse layer rather than alongside the channels.
const pulseCapabilities = [
  {
    label: "Call Handling & Booking",
    body: "Every call answered and every ad lead called back, then booked into your diary.",
    href: "/call-centre/",
  },
  {
    label: "AI Integration",
    body: "Reactivation sequences that reach lapsed patients before a competitor does.",
    href: "/ai-integration/",
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

// The connected journey, stated as stages rather than figures. The previous
// version of this band used invented performance numbers, which are out.
const journeyStages = [
  { stage: "Get found", body: "A technically strong website and sustained search visibility." },
  { stage: "Create demand", body: "Google Ads and paid social reaching the right patients." },
  { stage: "Get chosen", body: "Journeys that make it easy to pick your clinic and book." },
  { stage: "Follow up", body: "Every enquiry answered, tracked and chased in Patient Pulse." },
  { stage: "Come back", body: "Lapsed patients contacted before a competitor reaches them." },
];

function OperatingSystemBand() {
  return (
    <div
      className="relative my-16 overflow-hidden bg-[var(--color-ink)] text-white"
      style={{ borderRadius: "var(--radius-panel)" }}
    >
      <div className="grid gap-10 p-9 md:p-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:p-14">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            The Clinic Evo operating system
          </p>
          <h3 className="mt-4 max-w-md font-display text-3xl font-semibold leading-[1.15] text-white md:text-[2.4rem]">
            One connected patient journey, not five disconnected marketing tasks.
          </h3>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
            Most clinics buy these pieces separately and hope they add up. We build
            them as one system, so you can see where demand is created, where
            enquiries slow down, and what happens next.
          </p>
        </div>

        <ol className="flex flex-col justify-center divide-y divide-white/10 border-t border-white/10 lg:border-t-0">
          {journeyStages.map((s, i) => (
            <li key={s.stage} className="flex items-baseline gap-5 py-4 first:pt-0 lg:first:pt-4">
              <span
                className="w-6 flex-shrink-0 font-display text-sm font-semibold leading-none text-[var(--color-accent)]"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="w-32 flex-shrink-0 font-display text-[15px] font-semibold leading-snug text-white">
                {s.stage}
              </span>
              <span className="text-sm leading-snug text-white/60">{s.body}</span>
            </li>
          ))}
        </ol>
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
                  Clinic Evo builds the website, search visibility and campaigns that bring the right patients to your clinic. Then Patient Pulse connects every enquiry, conversation and follow-up, so none of them go cold.
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

      {/* ── Client logos ──────────────────────────────────────────────────── */}
      {/* Social proof sits high on the page, per the 10 Aug review. A rotating
          carousel is on hold until there are enough clinics to justify one. */}
      {clientLogos.length > 0 && (
        <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] py-9">
          <div className="cx-main">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
              <p className="flex-shrink-0 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]">
                Clinics we work with
              </p>
              <span
                aria-hidden
                className="hidden h-8 w-px flex-shrink-0 sm:block"
                style={{ background: "var(--color-border)" }}
              />
              <ul className="flex flex-wrap items-center gap-x-14 gap-y-6">
                {clientLogos.map((logo) => (
                  <li key={logo.name} className="flex items-center">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={logo.width}
                      height={logo.height}
                      style={{ height: logo.logoHeight, width: "auto" }}
                      className={`transition-opacity hover:opacity-100 ${
                        logo.dim ? "opacity-85" : ""
                      }`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

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
              Four ways patients find your clinic. One system that makes sure you keep them.
            </h2>
            <p
              className="text-body-lg text-[var(--color-charcoal)] max-w-[580px]"
            >
              Most agencies generate leads and leave the rest to you. We build the website,
              search visibility and campaigns that bring the right patients to your door,
              then connect what happens next through Patient Pulse, so the enquiry becomes
              a booking and the patient comes back.
            </p>
          </FadeUp>

          <OperatingSystemBand />

          {/* Step 1, the four acquisition channels that bring patients in. */}
          <p className="text-label mb-6">Bringing the right patients in</p>

          <div className="mb-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7">
            {channels.map((channel, i) => (
              <FadeUp key={channel.num} delay={i * 0.08}>
                <Link
                  href={channel.href}
                  className="group flex h-full flex-col border-t-2 border-[var(--color-border)] pt-6 transition-colors hover:border-[var(--color-accent)]"
                >
                  <span
                    className="mb-3 block font-display font-light leading-none text-[var(--color-muted-light)] transition-colors group-hover:text-[var(--color-accent)]"
                    style={{ fontSize: "36px" }}
                    aria-hidden
                  >
                    {channel.num}
                  </span>
                  <h3 className="text-h4 text-[var(--color-ink)] mb-3">{channel.label}</h3>
                  <p className="text-body-sm text-[var(--color-muted)] flex-1 mb-4">
                    {channel.body}
                  </p>
                  {channel.platforms.length > 0 && (
                    <ul className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                      {channel.platforms.map((p) => (
                        <li key={p.name} className="flex items-center">
                          <p.icon size={30} />
                        </li>
                      ))}
                    </ul>
                  )}
                  <span
                    className="inline-flex items-center gap-1.5 transition-all group-hover:gap-2.5 group-hover:text-[var(--color-accent)]"
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "var(--color-ink)",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    {channel.anchor}
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>

          {/* The connector, so Patient Pulse reads as the layer beneath the four
              channels rather than a fifth service sitting next to them. */}
          <div aria-hidden className="flex flex-col items-center pt-2">
            <span className="h-10 w-px" style={{ background: "var(--color-border)" }} />
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" className="-mt-px">
              <path d="M1 1l6 6 6-6" stroke="var(--color-muted-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Step 2, Patient Pulse as the connecting layer. */}
          <FadeUp delay={0.12}>
            <div
              className="mt-4 overflow-hidden border border-[var(--color-border)] bg-[var(--color-paper)] shadow-[var(--shadow-card)]"
              style={{ borderRadius: "var(--radius-panel)" }}
            >
              <div className="p-8 md:p-11">
                {/* Copy left, product wordmark right — the right-hand space was empty,
                    and the logo does useful brand work there. flex-col-reverse puts the
                    wordmark above the copy on narrow screens rather than orphaning it. */}
                <div className="flex flex-col-reverse gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
                  <div className="max-w-2xl">
                    <p className="eyebrow mb-4">Step 05, the glue</p>
                    <h3 className="text-h3 text-[var(--color-ink)] mb-4">
                      Patient Pulse connects every enquiry those four channels create.
                    </h3>
                    <p className="text-body text-[var(--color-muted)]">
                      Getting found is half the job. Patient Pulse is the one place your
                      clinic manages what happens between a marketing enquiry and a booked
                      patient, and it replaces several separate subscriptions while it does it.
                    </p>
                  </div>

                  <Image
                    src="/images/patientpulse_logo.png"
                    alt="Patient Pulse"
                    width={3116}
                    height={440}
                    className="h-7 w-auto flex-shrink-0 self-start lg:h-9 lg:mt-1"
                  />
                </div>

                {/* What it actually does. Danny's note in the review was that the
                    homepage named Patient Pulse without ever saying what it delivers. */}
                <ul className="mt-9 grid gap-x-12 gap-y-7 border-t border-[var(--color-border)] pt-9 sm:grid-cols-2">
                  {pulseBenefits.map((b) => (
                    <li key={b.title}>
                      <h4 className="mb-1.5 font-display text-[15px] font-semibold text-[var(--color-ink)]">
                        {b.title}
                      </h4>
                      <p className="text-body-sm text-[var(--color-muted)]">{b.body}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col items-start gap-6 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href="/patient-pulse/"
                    className="inline-flex items-center gap-2 font-semibold text-white transition-all hover:bg-[var(--color-accent-dim)] active:translate-y-px"
                    style={{
                      background: ACCENT,
                      padding: "13px 26px",
                      borderRadius: "var(--radius-btn)",
                      fontSize: "15px",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    See everything Patient Pulse does
                  </Link>
                  <ul className="flex flex-wrap gap-x-7 gap-y-2">
                    {pulseCapabilities.map((cap) => (
                      <li key={cap.label}>
                        <Link
                          href={cap.href}
                          className="text-[13px] font-medium text-[var(--color-ink)] underline decoration-[var(--color-border)] underline-offset-4 transition-colors hover:text-[var(--color-accent)]"
                        >
                          {cap.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Social Proof ──────────────────────────────────────────────────── */}
      <section id="about-founder" className="section bg-[var(--color-paper)] border-t border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 md:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-20 items-center">

            {/* Left, the origin clinic. The previous version led with "572 new
                patient enquiries in 30 days" and a testimonial quoting a page-4
                to position-1 move and 34 recovered patients. All three figures
                were unverifiable, so they are out until real numbers exist. */}
            <FadeUp>
              <figure className="m-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
                  <Image
                    src="/images/danny_and_co.jpg"
                    alt="The Bodyfunction Clinic team in London, Danny Morgan and colleagues"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                </div>
                <figcaption className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-4">
                  <span className="flex items-center gap-3.5">
                    <span className="relative block h-11 w-11 flex-shrink-0 overflow-hidden rounded-full border border-[var(--color-border)]">
                      <Image
                        src="/images/danny-morgan-angel-clinic.png"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </span>
                    <span className="block">
                      <span className="block font-display text-[13px] font-semibold text-[var(--color-ink)]">
                        Danny Morgan
                      </span>
                      <span className="block text-[12px] text-[var(--color-muted)]">
                        Founder, Bodyfunction Clinic &middot; Co-founder, Clinic Evo
                      </span>
                    </span>
                  </span>
                  {/* Bodyfunction's mark belongs here, with the origin story, rather
                      than in the client-logo strip above. */}
                  <Image
                    src="/images/clients/bodyfunction.png"
                    alt="Bodyfunction Clinic"
                    width={2000}
                    height={600}
                    style={{ height: 26, width: "auto" }}
                    className="ml-auto opacity-70"
                  />
                </figcaption>
              </figure>
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
                {/* Danny's own framing from the 10 Aug review: "Clinic evolution was
                    built out of the learnings of body function clinic". Not "our own
                    clinic" — Bodyfunction is Danny's practice, a separate business. */}
                <p className="text-body-lg text-[var(--color-ink)] mb-8 leading-relaxed max-w-xl">
                  Clinic Evo was built out of the learnings of Bodyfunction Clinic in
                  London. Danny founded Bodyfunction and still practises there, and he
                  co-founded Clinic Evo to bring what he worked out running it, combined
                  with Simon&apos;s digital expertise, to other healthcare businesses.
                </p>
              </FadeUp>

              {/* Icons removed deliberately. Danny's note in the review was that a
                  box with a word and a generic icon "screams preset website". */}
              <FadeUp delay={0.1}>
                <dl className="m-0 flex flex-col">
                  {[
                    {
                      // Simon has resigned from the GOsC register, so the old
                      // "both GOsC-registered osteopaths" line was untrue as
                      // well as a regulatory claim we cannot make. Danny is on
                      // the register and practising, and that is what this says.
                      title: "Founded from inside the profession",
                      desc: "Both founders came through the same integrated Master's in Osteopathy, and Danny is a GOsC-registered osteopath still treating patients. Clinic Evo was built from inside the profession, not by a marketing agency looking in.",
                    },
                    {
                      title: "Owned and run by a practising clinician",
                      desc: "Danny owns and still treats patients at Bodyfunction Clinic in London, so the operational realities of running a clinic are not theoretical to us.",
                    },
                    {
                      title: "Worked out in a live MSK clinic",
                      desc: "The approach came from running a real practice, not from a boardroom. It has to work with a full diary and a busy reception, not just in a demo.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="border-t border-[var(--color-border)] py-5 last:border-b"
                    >
                      <dt className="mb-1 font-display text-[15px] font-semibold text-[var(--color-ink)]">
                        {item.title}
                      </dt>
                      <dd className="m-0 text-sm leading-relaxed text-[var(--color-muted)]">
                        {item.desc}
                      </dd>
                    </div>
                  ))}
                </dl>
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

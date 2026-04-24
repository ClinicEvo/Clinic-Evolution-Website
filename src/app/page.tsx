import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import ArrowLink from "@/components/ui/ArrowLink";
import DisciplineCard from "@/components/sections/DisciplineCard";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata = buildMetadata({
  title: "ClinicEvo | Clinic Marketing Agency UK — SEO, Google Ads & Websites",
  description:
    "ClinicEvo helps UK osteopaths, physiotherapists and chiropractors attract more patients with specialist SEO, Google Ads, website design and AI patient reactivation.",
  path: "/",
});

const services = [
  {
    number: "01",
    title: "SEO for Clinics",
    description:
      "Rank at the top of Google when local patients search for your specialty. Technical foundations and content that compound over time.",
    href: "/seo-for-clinics/",
  },
  {
    number: "02",
    title: "Google Ads for Clinics",
    description:
      "Patient-ready campaigns that fill your diary fast. We manage every aspect so you only pay for qualified clicks.",
    href: "/google-ads-for-clinics/",
  },
  {
    number: "03",
    title: "Clinic Website Design",
    description:
      "Fast, accessible websites built to convert visitors into booked appointments — designed specifically for healthcare practices.",
    href: "/website-design-for-clinics/",
  },
  {
    number: "04",
    title: "AI Patient Reactivation",
    description:
      "Re-engage patients who haven't visited in months. Personalised AI messages sent at exactly the right moment.",
    href: "/ai-patient-reactivation/",
  },
  {
    number: "05",
    title: "Healthcare Marketing Consultant",
    description:
      "Strategic guidance and a clear growth plan — without committing to a full-service retainer.",
    href: "/healthcare-marketing-consultant/",
  },
];

const disciplines = [
  {
    title: "Osteopaths",
    description:
      "We understand the patient journey for musculoskeletal care. Our campaigns speak directly to people searching for osteopathic treatment.",
    href: "/osteopath-marketing/",
    features: [
      "Rank for 'osteopath near me' and condition-specific queries",
      "Google Ads targeting back pain, neck pain and sports injury",
      "Websites designed for new patient conversion",
    ],
  },
  {
    title: "Physiotherapists",
    description:
      "From sports rehab to chronic pain clinics, we help physiotherapists attract the patients they specialise in treating.",
    href: "/physiotherapy-marketing/",
    features: [
      "Local SEO to outrank NHS waiting lists in search",
      "Targeted PPC for sports injury and post-surgical rehab",
      "Patient reactivation for discharge-to-rebook journeys",
    ],
  },
  {
    title: "Chiropractors",
    description:
      "We help chiropractic clinics present their evidence-based care to the patients who need it most.",
    href: "/chiropractic-marketing/",
    features: [
      "Authoritative content that builds trust and rankings",
      "Google Ads for high-intent spine and posture keywords",
      "Professional websites that reflect clinical credibility",
    ],
  },
];

const stats = [
  { value: "3×", label: "Patient enquiries — Body Function Clinic" },
  { value: "£0", label: "Lock-in contracts, ever" },
  { value: "30d", label: "To first results with Google Ads" },
  { value: "UK", label: "Clinics only — no generalist work" },
];

const testimonials = [
  {
    quote:
      "Within 3 months our Google rankings improved dramatically and new patient enquiries nearly doubled.",
    author: "Sarah M.",
    role: "Principal Osteopath, London",
  },
  {
    quote:
      "The Google Ads campaign has the lowest cost-per-booking we've ever achieved. They properly understood our specialty.",
    author: "James T.",
    role: "Sports Physiotherapy Clinic, Manchester",
  },
  {
    quote:
      "The AI patient reactivation brought back patients we thought were gone. It paid for itself within the first week.",
    author: "Dr. Claire R.",
    role: "Chiropractic Clinic, Bristol",
  },
];

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }]} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--color-ink)] overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
        {/* Subtle dot grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="cx-main relative">
          <FadeUp>
            <p className="text-label text-[var(--color-accent)] mb-6 tracking-widest">
              UK Clinic Marketing Agency
            </p>
          </FadeUp>
          <FadeUp delay={0.07}>
            <h1 className="text-display text-white mb-6 max-w-3xl">
              The growth partner for UK clinic owners.
            </h1>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="text-body-lg text-white/60 mb-10 max-w-lg">
              We help osteopaths, physiotherapists and chiropractors attract
              consistent new patients — through specialist SEO, Google Ads,
              website design and AI patient reactivation.
            </p>
          </FadeUp>
          <FadeUp delay={0.21}>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button href="/free-clinic-audit/" size="lg">
                Book a free clinic audit
              </Button>
              <Button
                href="/case-studies/"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/5 hover:border-white/40"
              >
                See results
              </Button>
            </div>
          </FadeUp>
          <FadeUp delay={0.28}>
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-sm text-white/30">
                Exclusively serving osteopaths, physiotherapists &amp;
                chiropractors across the UK
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)]">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[var(--color-paper)] px-8 py-10 text-center">
            <p className="text-h1 font-bold text-[var(--color-accent)] mb-1.5 tabular-nums tracking-tight">
              {stat.value}
            </p>
            <p className="text-sm text-[var(--color-muted)] leading-snug">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* ── Services (editorial numbered list) ────────────────────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-label text-[var(--color-accent)] mb-4">Services</p>
                <h2 className="text-h2 text-[var(--color-ink)] max-w-md">
                  Everything your clinic needs to grow online
                </h2>
              </div>
              <p className="text-body text-[var(--color-muted)] max-w-xs">
                A complete digital growth suite built exclusively for UK
                musculoskeletal practices.
              </p>
            </div>
          </FadeUp>

          <div className="flex flex-col">
            {services.map((service, i) => (
              <FadeUp key={service.href} delay={i * 0.05}>
                <Link
                  href={service.href}
                  className="group flex items-start gap-6 lg:gap-12 py-7 border-t border-[var(--color-border)] hover:bg-[var(--color-warm)] -mx-3 px-3 lg:-mx-6 lg:px-6 transition-colors duration-150 rounded-sm"
                >
                  <span className="text-sm font-mono text-[var(--color-accent)] opacity-60 flex-shrink-0 pt-0.5 w-7">
                    {service.number}
                  </span>
                  <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-1.5 lg:gap-10">
                    <h3 className="text-h3 text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors duration-150">
                      {service.title}
                    </h3>
                    <p className="text-body text-[var(--color-muted)]">
                      {service.description}
                    </p>
                  </div>
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="flex-shrink-0 mt-0.5 text-[var(--color-border)] group-hover:text-[var(--color-accent)] transition-all duration-150 group-hover:translate-x-0.5"
                  >
                    <path d="M4 9h10M9 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </FadeUp>
            ))}
            <div className="border-t border-[var(--color-border)]" />
          </div>
        </div>
      </section>

      {/* ── Who we help ───────────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-warm)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12">
              <p className="text-label text-[var(--color-accent)] mb-4">Who we help</p>
              <h2 className="text-h2 text-[var(--color-ink)] max-w-lg">
                We work exclusively in three disciplines
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {disciplines.map((d, i) => (
              <FadeUp key={d.href} delay={i * 0.07}>
                <DisciplineCard {...d} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case study feature ─────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-paper)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-3">
                <p className="text-label text-[var(--color-accent)] mb-5">Case Study</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-5">
                  Body Function Clinic — 3× new patient enquiries in 6 months
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-8 max-w-prose">
                  A multi-discipline clinic in London needed to cut through fierce
                  local competition. Through targeted local SEO and a rebuilt
                  website, we tripled their monthly new patient enquiries within
                  six months.
                </p>
                <ArrowLink href="/case-studies/bodyfunction-clinic/">
                  Read the full case study
                </ArrowLink>
              </div>
              <div className="lg:col-span-2 flex items-center justify-center bg-[var(--color-surface)] rounded-xl p-12 border border-[var(--color-border)]">
                <div className="text-center">
                  <p className="font-bold text-[var(--color-accent)] mb-2" style={{ fontSize: "clamp(4rem, 10vw, 6rem)", lineHeight: 1, letterSpacing: "-0.03em" }}>
                    3×
                  </p>
                  <p className="text-body text-[var(--color-muted)]">new patient enquiries</p>
                  <p className="text-label text-[var(--color-muted-light)] mt-1">in 6 months</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12">
              <p className="text-label text-[var(--color-accent)] mb-4">From clinic owners</p>
              <h2 className="text-h2 text-[var(--color-ink)]">What they say</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <figure className="flex flex-col h-full bg-white rounded-xl p-7 border border-[var(--color-border)]">
                  <div className="w-8 h-0.5 bg-[var(--color-accent)] mb-6" />
                  <blockquote className="text-body text-[var(--color-ink)] flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption>
                    <p className="font-semibold text-sm text-[var(--color-ink)]">{t.author}</p>
                    <p className="text-xs text-[var(--color-muted)] mt-0.5">{t.role}</p>
                  </figcaption>
                </figure>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

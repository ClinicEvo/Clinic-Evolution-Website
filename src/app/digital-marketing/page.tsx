import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import PageHero from "@/components/sections/PageHero";
import ArrowLink from "@/components/ui/ArrowLink";
import Badge from "@/components/ui/Badge";

export const metadata = buildMetadata({
  title: "Digital Marketing for MSK Clinics — Coordinated Growth",
  description:
    "ClinicEvo builds coordinated digital marketing systems for UK osteopaths, physiotherapists and chiropractors — SEO, Google Ads, follow-up and patient retention working together.",
  path: "/digital-marketing/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Digital Marketing", href: "/digital-marketing/" },
];

const channels = [
  {
    title: "Search engine optimisation",
    desc: "Ranking for the terms your patients use — 'physio near me', 'osteopath [town]', 'back pain specialist' — so new patients find you before they find a competitor.",
    href: "/seo-for-clinics/",
    cta: "SEO for clinics",
  },
  {
    title: "Google Ads",
    desc: "Paid search targeting high-intent MSK patients in your area. Campaigns built around patient decision-making, not broad healthcare keywords.",
    href: "/google-ads-for-clinics/",
    cta: "Google Ads for clinics",
  },
  {
    title: "Clinic website design",
    desc: "Websites built for MSK patients — condition pages, local trust signals, and booking paths that convert visitors into enquiries.",
    href: "/website-design-for-clinics/",
    cta: "clinic website design",
  },
  {
    title: "Patient Pulse follow-up",
    desc: "Automatic SMS follow-up for every enquiry, structured lead pipelines, and two-way messaging from one inbox.",
    href: "/patient-pulse/",
    cta: "Patient Pulse",
  },
  {
    title: "Call handling",
    desc: "Every patient call answered by a trained handler who knows your clinic. No voicemail. No missed appointments.",
    href: "/call-centre/",
    cta: "call handling",
  },
  {
    title: "AI patient reactivation",
    desc: "Lapsed patients contacted automatically at 3, 6 and 12 months. Review requests timed to positive sessions.",
    href: "/ai-integration/",
    cta: "AI patient reactivation",
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <ServiceSchema
        name="Digital Marketing for MSK Clinics"
        description="Coordinated digital marketing for UK osteopaths, physiotherapists and chiropractors. SEO, Google Ads, follow-up and retention working together."
        url="/digital-marketing/"
      />
      <BreadcrumbSchema items={crumbs} />

      <PageHero
        badge="Coordinated clinic growth"
        heading={
          <>
            Digital marketing that works{" "}
            <em className="not-italic text-[var(--color-accent)]">
              as a connected system
            </em>
          </>
        }
        subtext="Most agencies handle one part of the chain — traffic, or a website, or follow-up emails — and leave everything else disconnected. ClinicEvo coordinates every channel so nothing falls through the gaps."
        bullets={[
          "SEO, Google Ads, web design and follow-up connected",
          "Built exclusively for MSK clinics",
          "Every metric tied back to booked appointments",
        ]}
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "See all services", href: "#services" }}
        breadcrumbs={crumbs}
      />

      {/* The disconnected agency problem */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main max-w-3xl">
          <FadeUp>
            <Badge className="mb-5 inline-block">The problem with single-channel agencies</Badge>
            <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
              Every gap in your diary has a cause. Most agencies only fix one part of it.
            </h2>
            <p className="text-body text-[var(--color-muted)] mb-5">
              An SEO agency gets you found. A web designer builds your site. A CRM
              vendor sells you a platform. Nobody makes sure the enquiry that arrives
              at 8pm on a Tuesday gets a reply before your competitor does.
            </p>
            <p className="text-body text-[var(--color-muted)] mb-5">
              The result is a clinic that is visible in search, has a decent website,
              and still loses patients — because the handoff between traffic, enquiry,
              follow-up and booking has never been connected.
            </p>
            <p className="text-body text-[var(--color-muted)]">
              ClinicEvo connects the entire chain. Each component is built to hand off
              to the next. Remove one and the chain breaks. Run them together and
              growth becomes measurable, consistent and self-reinforcing.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section bg-[var(--color-surface)]/30">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12">
              <Badge className="mb-5 inline-block">All services</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Every part of the growth chain
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                ClinicEvo works exclusively with MSK clinics — osteopaths,
                physiotherapists and chiropractors. Not gyms. Not dentists.
                Not generic private healthcare.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.07}>
                <div className="flex flex-col h-full bg-white border border-[var(--color-border)] rounded-xl p-7">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-3">{c.title}</h3>
                  <p className="text-body text-[var(--color-muted)] leading-relaxed flex-1 mb-5">{c.desc}</p>
                  <ArrowLink href={c.href}>{c.cta}</ArrowLink>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main max-w-3xl">
          <FadeUp>
            <Badge className="mb-5 inline-block">Discipline-specific</Badge>
            <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
              Digital marketing built for your discipline
            </h2>
            <p className="text-body text-[var(--color-muted)] mb-8">
              Each MSK discipline has different patient decision-making patterns,
              different search behaviour, different regulatory requirements and different
              competitive landscapes. ClinicEvo builds for those differences — not a
              generic healthcare template applied to every clinic.
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
        heading="See the whole system working for your clinic"
        subheading="Book a free clinic audit. We review every part of your current digital presence and show you honestly where growth is being lost — and what a connected system would do differently."
      />
    </>
  );
}

import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import PageHero from "@/components/sections/PageHero";
import ArrowLink from "@/components/ui/ArrowLink";
import Badge from "@/components/ui/Badge";
import StatBand from "@/components/sections/StatBand";
import HeroStatCard from "@/components/sections/HeroStatCard";
import ProofBand from "@/components/sections/ProofBand";
import PatientFunnel from "@/components/sections/PatientFunnel";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FAQSchema from "@/components/schema/FAQSchema";

export const metadata = buildMetadata({
  title: "Digital Marketing for MSK Clinics, Coordinated Growth",
  description:
    "Clinic Evo builds coordinated digital marketing systems for UK osteopaths, physiotherapists and chiropractors, SEO, Google Ads, follow-up and patient retention working together.",
  path: "/digital-marketing/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Digital Marketing", href: "/digital-marketing/" },
];

const channels = [
  {
    title: "Search engine optimisation",
    desc: "Ranking for the terms your patients use, 'physio near me', 'osteopath [town]', 'back pain specialist', so new patients find you before they find a competitor.",
    href: "/seo-for-clinics/",
    cta: "SEO for clinics",
    icon: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
  },
  {
    title: "Google Ads",
    desc: "Paid search targeting high-intent MSK patients in your area. Campaigns built around patient decision-making, not broad healthcare keywords.",
    href: "/google-ads-for-clinics/",
    cta: "Google Ads for clinics",
    icon: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>,
  },
  {
    title: "Clinic website design",
    desc: "Websites built for MSK patients, condition pages, local trust signals, and booking paths that convert visitors into enquiries.",
    href: "/website-design-for-clinics/",
    cta: "clinic website design",
    icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></>,
  },
  {
    title: "Patient Pulse follow-up",
    desc: "Automatic SMS follow-up for every enquiry, structured lead pipelines, and two-way messaging from one inbox.",
    href: "/patient-pulse/",
    cta: "Patient Pulse",
    icon: <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />,
  },
  {
    title: "Call handling & booking",
    desc: "Every patient call answered, every lead from your ads called back, and patients booked straight into your diary. No voicemail. No lead left waiting.",
    href: "/call-centre/",
    cta: "call handling & booking",
    icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />,
  },
  {
    title: "AI patient reactivation",
    desc: "Lapsed patients contacted automatically at 3, 6 and 12 months. Review requests timed to positive sessions.",
    href: "/ai-integration/",
    cta: "AI patient reactivation",
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  },
];

const faqs = [
  {
    question: "What does digital marketing for a clinic include?",
    answer:
      "For an MSK clinic it usually combines SEO, Google Ads, website design, immediate enquiry follow-up, inbound and outbound call handling that books patients into the diary, and patient reactivation. Clinic Evo coordinates these as one system rather than treating them as separate, disconnected services.",
  },
  {
    question: "Why coordinate channels instead of buying them separately?",
    answer:
      "Most clinics lose patients in the gaps between suppliers, the enquiry that arrives after hours and never gets a reply, or the caller who reaches voicemail. When traffic, follow-up, calls and retention are run by one team, every handoff is covered and nothing falls through.",
  },
  {
    question: "Do I have to take every service at once?",
    answer:
      "No. Clinic Evo can start with the part of the chain that is leaking the most, then connect the others over time. The plan is built around where your clinic is losing patients now, not a fixed package.",
  },
  {
    question: "Is this suitable for osteopaths, physios and chiropractors?",
    answer:
      "Yes. Clinic Evo works exclusively with MSK clinics. Each discipline has different patient decision-making, search behaviour and competition, so the marketing is built for those differences rather than a generic healthcare template.",
  },
  {
    question: "How do you measure whether it is working?",
    answer:
      "Every channel is tied back to booked appointments, not vanity metrics. You see how traffic becomes enquiries, how enquiries become bookings, and how patients are retained, so spend stays connected to revenue.",
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
      <FAQSchema items={faqs} />

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
        subtext="Most agencies handle one part of the chain, the traffic, the website, or the follow-up, and leave everything else disconnected. Clinic Evo coordinates every channel so nothing falls through the gaps."
        bullets={[
          "SEO, Google Ads, web design and follow-up connected",
          "Built exclusively for MSK clinics",
          "Every metric tied back to booked appointments",
        ]}
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "See all services", href: "#services" }}
        breadcrumbs={crumbs}
        rightPanel={
          <HeroStatCard
            title="One connected system"
            stats={[
              { label: "Growth channels", value: "6", note: "coordinated under one plan" },
              { label: "Visitor to booking", value: "2.1×", note: "vs single-channel setups" },
              { label: "Built for", value: "MSK", note: "clinics only, never generic" },
            ]}
          />
        }
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
              and still loses patients, because the handoff between traffic, enquiry,
              follow-up and booking has never been connected.
            </p>
            <p className="text-body text-[var(--color-muted)]">
              Clinic Evo connects the entire chain. Each component is built to hand off
              to the next. Remove one and the chain breaks. Run them together and
              growth becomes measurable, consistent and self-reinforcing.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">All services</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Every part of the growth chain
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Clinic Evo works exclusively with MSK clinics, osteopaths,
                physiotherapists and chiropractors. Not gyms. Not dentists.
                Not generic private healthcare.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {channels.map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.07}>
                <div className="card-surface group flex h-full flex-col p-7 md:p-8">
                  <div className="mb-5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{c.icon}</svg>
                  </div>
                  <h3 className="text-h4 text-[var(--color-ink)] mb-2">{c.title}</h3>
                  <p className="text-body text-[var(--color-muted)] flex-1 mb-5">{c.desc}</p>
                  <ArrowLink href={c.href}>{c.cta}</ArrowLink>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Proof band */}
      <StatBand
        eyebrow="One connected system"
        heading="Six channels, five stages, one team accountable for the whole chain."
        body="Most clinics buy each piece from a different supplier and own the gaps between them. Clinic Evo runs the whole chain so every handoff is covered."
        stats={[
          { value: "6", label: "Growth channels coordinated under a single plan" },
          { value: "5", label: "Connected stages from first search to rebooking" },
          { value: "1", label: "Team accountable end to end, instead of scattered vendors" },
        ]}
      />

      {/* The connected chain */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">The chain in numbers</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Where patients are won and lost, stage by stage
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Each stage hands off to the next. A weak link anywhere drags down
                everything downstream, which is why coordinating the chain beats
                optimising any single channel in isolation.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <PatientFunnel />
          </FadeUp>
        </div>
      </section>

      {/* Proof band */}
      <ProofBand
        eyebrow="What a connected system looks like"
        quote="We went from page 4 to position 1 in 11 weeks, and the follow-up system recovered 34 lapsed patients in the first month. It finally works as one thing."
      />

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
              competitive landscapes. Clinic Evo builds for those differences, not a
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

      {/* FAQ */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="max-w-2xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10">
                <Badge className="mb-5 inline-block">FAQ</Badge>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  Digital marketing for clinics FAQs
                </h2>
              </div>
            </FadeUp>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        heading="See the whole system working for your clinic"
        subheading="Book a free clinic audit. We review every part of your current digital presence and show you honestly where growth is being lost, and what a connected system would do differently."
      />
    </>
  );
}

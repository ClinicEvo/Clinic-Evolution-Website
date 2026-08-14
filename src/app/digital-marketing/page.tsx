import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import PageHero from "@/components/sections/PageHero";
import StatBand from "@/components/sections/StatBand";
import PatientFunnel from "@/components/sections/PatientFunnel";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FAQSchema from "@/components/schema/FAQSchema";
import PhoneVideoMockup from "@/components/sections/PhoneVideoMockup";

export const metadata = buildMetadata({
  title: "Digital Marketing for MSK Clinics, Coordinated Growth",
  description:
    "Clinic Evo builds coordinated digital marketing for UK osteopaths, physiotherapists and chiropractors: SEO, Google Ads, follow-up and retention together.",
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
    cta: "SEO for Clinics",
    icon: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
  },
  {
    title: "Google Ads",
    desc: "Paid search targeting high-intent MSK patients in your area. Campaigns built around patient decision-making, not broad healthcare keywords.",
    href: "/google-ads-for-clinics/",
    cta: "Google Ads for Clinics",
    icon: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>,
  },
  {
    title: "Clinic website design",
    desc: "Websites built for MSK patients, condition pages, local trust signals, and booking paths that convert visitors into enquiries.",
    href: "/website-design-for-clinics/",
    cta: "Clinic Website Design",
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
    cta: "Call Handling & Booking",
    icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />,
  },
  {
    title: "Social media paid ads",
    desc: "Facebook and Instagram campaigns targeting local MSK patients by condition, age and location, built to fill specific treatment slots rather than chase generic brand awareness.",
    href: "/google-ads-for-clinics/",
    cta: "Paid Ads for Clinics",
    icon: <><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></>,
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
        rightPanelWidth="1.1fr"
        rightPanel={
          <div className="relative aspect-[1258/591] overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)]">
            <Image
              src="/images/digital-marketing/digital-marketing-hero.png"
              alt="Meta Ads Manager dashboard showing coordinated campaign results across a clinic's growth channels"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        }
      />

      {/* The disconnected agency problem */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main max-w-3xl">
          <FadeUp>
            <p className="eyebrow mb-5">The problem with single-channel agencies</p>
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
                <Link href={c.href} className="card-surface group flex h-full flex-col p-7 md:p-8">
                  <div className="mb-5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{c.icon}</svg>
                  </div>
                  <h3 className="text-h4 text-[var(--color-ink)] mb-2">{c.title}</h3>
                  <p className="text-body text-[var(--color-muted)] flex-1 mb-5">{c.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-text)] transition-colors duration-150 group-hover:text-[var(--color-accent-dim)]">
                    {c.cta}
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-150 group-hover:translate-x-0.5">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Paid social media */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <FadeUp>
              <p className="eyebrow mb-5">Facebook, Instagram, TikTok, Meta</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Paid social media built around real patient conditions
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                Search captures people already looking for treatment. Paid social
                reaches people who haven&apos;t started searching yet, but who
                match your ideal patient: the right age, the right condition, the
                right location.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                Clinic Evo builds Meta campaigns across Facebook, Instagram and
                TikTok around specific conditions and audiences, rather than
                generic clinic awareness, so the message actually speaks to the
                person watching it.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                This is a real clinic ad, targeting patients aged 55 and over
                about arthritis, exactly how it appears in a patient&apos;s feed.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <PhoneVideoMockup src="/videos/social-ads-arthritis-55plus.mp4" />
            </FadeUp>
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

      {/* Real ad proof */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <p className="eyebrow mb-5">Real campaign, real clinic</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                A closer look at our paid social in practice
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                This is a live Facebook and Instagram ad currently running for
                Bodyfunction Clinic in Islington. Rather than stock photography, it
                features the practitioners patients actually meet, paired with the
                trust signal that tends to matter most locally: real recommendations
                from people nearby.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                Every social ad Clinic Evo builds is connected to the same system.
                The click leads to a page designed to convert, the enquiry receives
                an automatic reply within minutes, and the outcome is tracked
                through to a booked appointment, not just a like or a click.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-5 md:p-6 max-w-md mx-auto lg:ml-auto lg:mr-0">
                <div className="relative aspect-[940/788] overflow-hidden rounded-[var(--radius-sm)]">
                  <Image
                    src="/images/digital-marketing/ad-example.png"
                    alt="Live Facebook and Instagram ad for Bodyfunction Clinic in Islington, featuring the real clinic team and the message: the treatment more Islington locals are recommending to friends"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 440px"
                  />
                </div>
                <p className="mt-4 text-body-sm text-[var(--color-muted)]">
                  An actual, currently running ad for Bodyfunction Clinic.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-5">Discipline-specific</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Digital marketing built for your discipline
              </h2>
              <p className="text-body text-[var(--color-muted)]">
                Each MSK discipline has different patient decision-making patterns,
                different search behaviour, different regulatory requirements and different
                competitive landscapes. Clinic Evo builds for those differences, not a
                generic healthcare template applied to every clinic.
              </p>
            </div>
          </FadeUp>
          <div className="flex flex-col gap-5">
            {[
              {
                title: "Osteopaths",
                href: "/osteopath-marketing/",
                cta: "Marketing for Osteopaths",
                watermarkImg: "/images/watermark-osteopath.jpg",
                accentColor: "#ff5b4a",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="8" y="2" width="8" height="4" rx="1.5" />
                    <path d="M9 6 Q12 7.5 15 6" />
                    <rect x="7" y="8" width="10" height="4" rx="1.5" />
                    <path d="M8 12 Q12 13.5 16 12" />
                    <rect x="8" y="14" width="8" height="4" rx="1.5" />
                    <path d="M10 18 Q12 21 14 18" />
                  </svg>
                ),
              },
              {
                title: "Physiotherapists",
                href: "/physiotherapy-marketing/",
                cta: "Physiotherapy Marketing",
                watermarkImg: "/images/watermark-physio.jpg",
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
              },
              {
                title: "Chiropractors",
                href: "/chiropractic-marketing/",
                cta: "Chiropractic Marketing",
                watermarkImg: "/images/watermark-chiro.jpg",
                accentColor: "#1E3A5F",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2 L12 7" />
                    <rect x="9" y="7" width="6" height="10" rx="1.5" />
                    <path d="M12 17 L12 22" />
                    <path d="M2 12 L7 12" />
                    <path d="M4.5 9.5 L7.5 12 L4.5 14.5" />
                    <path d="M22 12 L17 12" />
                    <path d="M19.5 9.5 L16.5 12 L19.5 14.5" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <FadeUp key={item.href} delay={i * 0.09}>
                <Link
                  href={item.href}
                  className="group flex flex-col sm:flex-row overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-[2px]"
                  style={{ background: "var(--color-paper)" }}
                >
                  <div className="relative h-52 w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-64 lg:w-72">
                    <Image src={item.watermarkImg} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 288px" />
                    <div className="absolute inset-0 bg-[var(--color-ink)]/10" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-7 md:p-9 lg:p-10">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)]" style={{ background: "var(--color-accent-light)", color: "var(--color-accent)" }}>
                        {item.icon}
                      </div>
                      <p className="eyebrow">{item.title}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 transition-all group-hover:gap-3 group-hover:text-[var(--color-accent)]" style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-ink)", textDecoration: "underline", textUnderlineOffset: "4px" }}>
                      {item.cta}
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

      {/* FAQ */}
      <section className="section bg-[var(--color-paper)] !pb-10">
        <div className="cx-main">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10">
                <p className="eyebrow mb-5">FAQ</p>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  Digital marketing for clinics FAQs
                </h2>
              </div>
            </FadeUp>
            <div className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] px-6 sm:px-10 py-2">
              <FAQAccordion items={faqs} />
            </div>
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

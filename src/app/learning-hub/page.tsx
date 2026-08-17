import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import PageHero from "@/components/sections/PageHero";
import ResourceTabNav from "@/components/sections/ResourceTabNav";
import { ReactNode } from "react";
import StickyMobileCta from "@/components/ui/StickyMobileCta";

export const metadata = buildMetadata({
  title: "Learning Hub: Clinic Marketing Guides for Private Clinics",
  description:
    "Practical clinic marketing resources for osteopaths, physiotherapists and chiropractors, covering SEO, Google Ads, patient acquisition and patient reactivation.",
  path: "/learning-hub/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Learning Hub", href: "/learning-hub/" },
];

/* ─── Raw SVG icons (no wrapper) ────────────────────────────────────────── */

const svgs: Record<string, ReactNode> = {
  budget: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 7v1m0 8v1M9.5 9.5C9.5 8.67 10.67 8 12 8s2.5.67 2.5 1.5S13.33 11 12 11s-2.5.67-2.5 1.5S10.67 14 12 14s2.5.67 2.5 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  patients: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M16 11c1.66 0 3 1.34 3 3s-1.34 3-3 3m-8 0c-1.66 0-3-1.34-3-3s1.34-3 3-3m8 0c0-1.66-1.34-3-3-3s-3 1.34-3 3m3 3v2m0-8V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 17H5a2 2 0 0 0-2 2v1m18-1a2 2 0 0 0-2-2h-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  recall: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 4v5h5M20 20v-5h-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 9A8 8 0 0 0 6.22 6.22L4 9m16 6-2.22 2.78A8 8 0 0 1 4 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  megaphone: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 11v2M19 5v14M3 13H7l10 4V7L7 11H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 11v6l3-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  globe: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 12h18M12 3c-2 2.5-3 5.5-3 9s1 6.5 3 9M12 3c2 2.5 3 5.5 3 9s-1 6.5-3 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  certificate: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 20l2-3 2 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 8h2M6 11h1M6 14h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  trendUp: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 17l5-5 4 4 9-9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 7h5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  mapPin: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C8.69 2 6 4.69 6 8c0 5 6 12 6 12s6-7 6-12c0-3.31-2.69-6-6-6Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  heartbeat: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 12h3l3-7 4 14 3-9 2 2h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  crosshair: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  cursor: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 4l7.07 17 2.51-7.39L21 11.07 4 4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M13.5 13.5l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  target: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  article: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  buildings: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 21V8l7-5v18M13 21V11l8-3v13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 21h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M6 10v2M6 14v2M10 10v2M10 14v2M16 14v2M16 18v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
};

/* ─── Resource card ─────────────────────────────────────────────────────── */

interface ResourceCard {
  icon: ReactNode;
  title: string;
  desc: string;
  href: string;
  readTime: string;
  image?: string;
}

function ResourceCardEl({ card, delay }: { card: ResourceCard; delay: number }) {
  return (
    <FadeUp delay={delay}>
      <a href={card.href} className="card-surface overflow-hidden h-full flex flex-col group block">
        {/* Featured image / placeholder */}
        <div className="aspect-[16/9] relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface)] flex-shrink-0">
          {card.image ? (
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-surface) 0%, var(--color-accent-light) 100%)",
              }}
            >
              <span className="text-[var(--color-accent)] opacity-40 transition-opacity duration-300 group-hover:opacity-60">
                {card.icon}
              </span>
            </div>
          )}
        </div>

        {/* Card body */}
        <div className="p-6 flex flex-col flex-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)] mb-3 block">
            {card.readTime}
          </span>
          <h3 className="text-body-lg font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors leading-snug">
            {card.title}
          </h3>
          <p className="text-body-sm text-[var(--color-muted)] mb-5 flex-1 leading-relaxed">
            {card.desc}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-text)] mt-auto">
            Read the guide
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-150 group-hover:translate-x-0.5">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </a>
    </FadeUp>
  );
}

export default function ResourcesHubPage() {
  const acquisitionCards: ResourceCard[] = [
    {
      icon: svgs.budget,
      title: "How much should a clinic spend on marketing?",
      desc: "A practical guide to thinking about marketing spend, expected returns and what private clinics should consider before investing in SEO, ads or a new website.",
      href: "/learning-hub/how-much-should-a-clinic-spend-on-marketing/",
      readTime: "6 min read",
      image: "/images/resources/marketing-budget.jpg",
    },
    {
      icon: svgs.patients,
      title: "How to get more patients to your clinic",
      desc: "A clear breakdown of the main digital levers that help clinics attract more patient enquiries, from local search to conversion-focused service pages.",
      href: "/learning-hub/how-to-get-more-patients-to-your-clinic/",
      readTime: "7 min read",
      image: "/images/resources/get-more-patients.jpg",
    },
    {
      icon: svgs.recall,
      title: "Patient recall system: what it is and why clinics need one",
      desc: "A guide to patient recall, follow-up and reactivation systems for clinics that want to reconnect with past patients more effectively.",
      href: "/learning-hub/patient-recall-system/",
      readTime: "5 min read",
      image: "/images/resources/patient-recall.jpg",
    },
  ];

  const strategyCards: ResourceCard[] = [
    {
      icon: svgs.megaphone,
      title: "How to market your clinic",
      desc: "A practical overview of how private clinics can approach digital marketing without wasting time on disconnected tactics.",
      href: "/learning-hub/how-to-market-your-clinic/",
      readTime: "8 min read",
      image: "/images/resources/market-your-clinic.jpg",
    },
    {
      icon: svgs.globe,
      title: "How to market a private practice online",
      desc: "A guide for clinic owners who want to understand the foundations of online marketing for private healthcare services.",
      href: "/learning-hub/how-to-market-a-private-practice-online/",
      readTime: "7 min read",
      image: "/images/resources/market-private-practice.jpg",
    },
    {
      icon: svgs.certificate,
      title: "How to market your chiropractic practice",
      desc: "A chiropractic-specific guide covering visibility, trust, patient education and ways to reduce reliance on referral-only growth.",
      href: "/learning-hub/how-to-market-your-chiropractic-practice/",
      readTime: "6 min read",
      image: "/images/resources/chiro-practice.jpg",
    },
    {
      icon: svgs.trendUp,
      title: "Physio business growth: the complete guide",
      desc: "A longer-form guide for physiotherapy clinic owners who want to improve patient acquisition, local visibility and diary flow.",
      href: "/learning-hub/physio-business-growth/",
      readTime: "10 min read",
      image: "/images/resources/physio-growth.jpg",
    },
  ];

  const seoCards: ResourceCard[] = [
    {
      icon: svgs.mapPin,
      title: "Local SEO for physio clinics",
      desc: "A practical guide to improving local visibility for physiotherapy clinics, including service pages, Google Business Profile, reviews and location signals.",
      href: "/learning-hub/local-seo-for-physio-clinics/",
      readTime: "6 min read",
      image: "/images/resources/local-seo-physio.jpg",
    },
    {
      icon: svgs.heartbeat,
      title: "Local SEO for healthcare clinics",
      desc: "A broader guide to local SEO for healthcare and private medical clinics that want to appear more consistently for relevant local searches.",
      href: "/learning-hub/local-seo-for-healthcare-clinics/",
      readTime: "7 min read",
      image: "/images/resources/local-seo-healthcare.jpg",
    },
  ];

  const adsCards: ResourceCard[] = [
    {
      icon: svgs.cursor,
      title: "Google Ads for physios",
      desc: "A guide to how physiotherapy clinics can use Google Ads to generate relevant patient enquiries and avoid common campaign mistakes.",
      href: "/learning-hub/google-ads-for-physios/",
      readTime: "6 min read",
      image: "/images/resources/google-ads-physio.jpg",
    },
    {
      icon: svgs.target,
      title: "Google Ads for chiropractors",
      desc: "A chiropractic-specific guide to using Google Ads for high-intent searches, patient acquisition and campaign testing.",
      href: "/learning-hub/google-ads-for-chiropractors/",
      readTime: "6 min read",
      image: "/images/resources/google-ads-chiro.jpg",
    },
  ];

  const categories = [
    { label: "Patient Acquisition", count: 3, href: "#patient-acquisition", icon: svgs.patients },
    { label: "Growth Strategy",     count: 4, href: "#growth-strategy",     icon: svgs.megaphone },
    { label: "SEO for Clinics",     count: 2, href: "#clinic-seo",          icon: svgs.globe     },
    { label: "Google Ads",          count: 2, href: "#google-ads",          icon: svgs.target    },
    { label: "Case Studies",        count: 2, href: "#case-studies",        icon: svgs.buildings },
  ];

  const heroPanel = (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white overflow-hidden shadow-[var(--shadow-card)]">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <p className="text-[0.65rem] font-bold tracking-widest uppercase text-[var(--color-muted)] mb-1">Resource library</p>
        <p className="font-display font-semibold text-[var(--color-ink)] text-lg leading-snug">
          13 guides across 5 topics
        </p>
      </div>

      {/* Category list */}
      <ul className="divide-y divide-[var(--color-border)]">
        {categories.map(({ label, count, href, icon }) => (
          <li key={href}>
            <a
              href={href}
              className="flex items-center gap-3 px-5 py-3.5 hover:bg-[var(--color-surface)] transition-colors group"
            >
              <span className="flex-shrink-0 text-[var(--color-accent)] opacity-60 group-hover:opacity-100 transition-opacity [&>svg]:w-[18px] [&>svg]:h-[18px]">
                {icon}
              </span>
              <span className="flex-1 text-sm font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                {label}
              </span>
              <span className="text-[11px] font-medium text-[var(--color-muted)] tabular-nums">
                {count} guides
              </span>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="flex-shrink-0 text-[var(--color-muted)] transition-transform group-hover:translate-x-0.5">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </li>
        ))}
      </ul>

      {/* Footer note */}
      <div className="px-5 py-3.5 bg-[var(--color-accent-light)] border-t border-[var(--color-border)]">
        <p className="text-[11px] text-[var(--color-muted)] leading-relaxed">
          Written for UK osteopaths, physiotherapists and chiropractors.
        </p>
      </div>
    </div>
  );

  const caseStudyCards: ResourceCard[] = [
    {
      icon: svgs.buildings,
      title: "Bodyfunction Clinic case study",
      desc: "How clinic website, SEO and patient journey improvements supported a stronger digital growth system for a London MSK practice.",
      href: "/case-studies/bodyfunction-clinic/",
      readTime: "8 min read",
      image: "https://bodyfunction.co.uk/wp-content/uploads/2026/01/bodyfunction-clinic-team-at-reception-01.png",
    },
    {
      icon: svgs.article,
      title: "Chiropractic marketing case study",
      desc: "The digital marketing approach Clinic Evo applies to chiropractic clinics, covering website structure, SEO and enquiry growth.",
      href: "/learning-hub/chiropractic-marketing-case-study/",
      readTime: "5 min read",
      image: "/images/resources/chiro-case-study.jpg",
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      <PageHero
        badge="Learning Hub"
        heading={<>Read the thinking <em className="not-italic text-[var(--color-accent)]">behind the system</em></>}
        subtext="Practical guides on patient acquisition, clinic SEO, Google Ads, website conversion and patient reactivation, written for UK osteopaths, physiotherapists and chiropractors."
        breadcrumbs={crumbs}
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        rightPanel={heroPanel}
        compactBottom
      />

      <ResourceTabNav />

      {/* Patient acquisition resources */}
      <section id="patient-acquisition" className="py-14 lg:py-20 bg-[var(--color-paper)] border-t border-[var(--color-border)] scroll-mt-[133px] sm:scroll-mt-[163px]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-10">
              <p className="eyebrow mb-3">Patient acquisition</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">Patient acquisition resources</h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                Guides focused on attracting more of the right patients, improving enquiry flow and
                helping clinic owners understand what to prioritise when they want more bookings.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {acquisitionCards.map((card, i) => (
              <ResourceCardEl key={card.href} card={card} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Clinic growth strategy resources */}
      <section id="growth-strategy" className="py-14 lg:py-20 grain bg-[var(--color-surface)] border-t border-[var(--color-border)] scroll-mt-[133px] sm:scroll-mt-[163px]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-10">
              <p className="eyebrow mb-3">Growth strategy</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">Clinic growth strategy resources</h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                Broader growth strategy for private clinics, including how to position your
                services, improve visibility and build a more sustainable enquiry system.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategyCards.map((card, i) => (
              <ResourceCardEl key={card.href} card={card} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO for clinics resources */}
      <section id="clinic-seo" className="py-14 lg:py-20 bg-[var(--color-paper)] border-t border-[var(--color-border)] scroll-mt-[133px] sm:scroll-mt-[163px]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-10">
              <p className="eyebrow mb-3">SEO</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">SEO for clinics resources</h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                Guides to help clinic owners understand how local SEO, service pages and search
                visibility work in practice — supporting the{" "}
                <a href="/seo-for-clinics/" className="text-[var(--color-accent-text)] hover:underline">SEO for Clinics</a> service.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seoCards.map((card, i) => (
              <ResourceCardEl key={card.href} card={card} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Google Ads for clinics resources */}
      <section id="google-ads" className="py-14 lg:py-20 grain bg-[var(--color-surface)] border-t border-[var(--color-border)] scroll-mt-[133px] sm:scroll-mt-[163px]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-10">
              <p className="eyebrow mb-3">Google Ads</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">Google Ads for clinics resources</h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                How private clinics can use paid search to reach people actively looking for
                treatment, while avoiding wasteful campaigns and weak landing pages.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adsCards.map((card, i) => (
              <ResourceCardEl key={card.href} card={card} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="py-14 lg:py-20 bg-[var(--color-paper)] border-y border-[var(--color-border)] scroll-mt-[133px] sm:scroll-mt-[163px]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-10">
              <p className="eyebrow mb-3">Case studies</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">Proof and case studies</h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                Clinic marketing should be judged by real-world outcomes. These resources show
                how strategy, websites, SEO and patient journeys come together in practice.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudyCards.map((card, i) => (
              <ResourceCardEl key={card.href} card={card} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        id="closing-cta"
        heading="Need a clearer plan for your clinic?"
        subheading="A free Clinic Evo audit reviews your website, search visibility, enquiry handling and patient follow-up — and shows you where the strongest opportunities are."
        primaryLabel="Get a free clinic audit"
        primaryHref="/free-clinic-audit/"
      />

      <StickyMobileCta hideNearId="closing-cta" />
    </>
  );
}

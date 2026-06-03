import { buildMetadata } from "@/lib/metadata";
import Badge from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import Breadcrumb from "@/components/sections/Breadcrumb";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import PageHero from "@/components/sections/PageHero";
import { ReactNode } from "react";

export const metadata = buildMetadata({
  title: "Clinic Marketing Resources for Private Clinics | Clinic Evo",
  description:
    "Practical clinic marketing resources for osteopaths, physiotherapists and chiropractors, covering SEO, Google Ads, patient acquisition and patient reactivation.",
  path: "/resources/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources/" },
];

/* ─── Icon tile ─────────────────────────────────────────────────────────── */

function IconTile({ children }: { children: ReactNode }) {
  return (
    <div className="w-11 h-11 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center mb-5 flex-shrink-0 text-[var(--color-accent)]">
      {children}
    </div>
  );
}

/* ─── Icons ─────────────────────────────────────────────────────────────── */

const icons = {
  budget: (
    <IconTile>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7v1m0 8v1M9.5 9.5C9.5 8.67 10.67 8 12 8s2.5.67 2.5 1.5S13.33 11 12 11s-2.5.67-2.5 1.5S10.67 14 12 14s2.5.67 2.5 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </IconTile>
  ),
  patients: (
    <IconTile>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M16 11c1.66 0 3 1.34 3 3s-1.34 3-3 3m-8 0c-1.66 0-3-1.34-3-3s1.34-3 3-3m8 0c0-1.66-1.34-3-3-3s-3 1.34-3 3m3 3v2m0-8V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 17H5a2 2 0 0 0-2 2v1m18-1a2 2 0 0 0-2-2h-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </IconTile>
  ),
  recall: (
    <IconTile>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4v5h5M20 20v-5h-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 9A8 8 0 0 0 6.22 6.22L4 9m16 6-2.22 2.78A8 8 0 0 1 4 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </IconTile>
  ),
  megaphone: (
    <IconTile>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 11v2M19 5v14M3 13H7l10 4V7L7 11H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 11v6l3-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </IconTile>
  ),
  globe: (
    <IconTile>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 12h18M12 3c-2 2.5-3 5.5-3 9s1 6.5 3 9M12 3c2 2.5 3 5.5 3 9s-1 6.5-3 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </IconTile>
  ),
  certificate: (
    <IconTile>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 20l2-3 2 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 8h2M6 11h1M6 14h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </IconTile>
  ),
  trendUp: (
    <IconTile>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 17l5-5 4 4 9-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </IconTile>
  ),
  mapPin: (
    <IconTile>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C8.69 2 6 4.69 6 8c0 5 6 12 6 12s6-7 6-12c0-3.31-2.69-6-6-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </IconTile>
  ),
  heartbeat: (
    <IconTile>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 12h3l3-7 4 14 3-9 2 2h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </IconTile>
  ),
  crosshair: (
    <IconTile>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </IconTile>
  ),
  cursor: (
    <IconTile>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4l7.07 17 2.51-7.39L21 11.07 4 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M13.5 13.5l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </IconTile>
  ),
  target: (
    <IconTile>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    </IconTile>
  ),
  article: (
    <IconTile>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </IconTile>
  ),
  buildings: (
    <IconTile>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21V8l7-5v18M13 21V11l8-3v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 21h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M6 10v2M6 14v2M10 10v2M10 14v2M16 14v2M16 18v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </IconTile>
  ),
};

/* ─── Resource card ─────────────────────────────────────────────────────── */

interface ResourceCard {
  icon: ReactNode;
  title: string;
  desc: string;
  href: string;
}

function ResourceCardEl({ card, delay }: { card: ResourceCard; delay: number }) {
  return (
    <FadeUp delay={delay}>
      <a
        href={card.href}
        className="card-surface p-7 h-full flex flex-col group block"
      >
        {card.icon}
        <h3 className="font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-accent)] transition-colors leading-snug">
          {card.title}
        </h3>
        <p className="text-body-sm text-[var(--color-muted)] mb-5 flex-1 leading-relaxed">{card.desc}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] mt-auto">
          Read the guide
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-150 group-hover:translate-x-0.5">
            <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </FadeUp>
  );
}

export default function ResourcesHubPage() {
  const acquisitionCards: ResourceCard[] = [
    {
      icon: icons.budget,
      title: "How much should a clinic spend on marketing?",
      desc: "A practical guide to thinking about marketing spend, expected returns and what private clinics should consider before investing in SEO, ads or a new website.",
      href: "/resources/how-much-should-a-clinic-spend-on-marketing/",
    },
    {
      icon: icons.patients,
      title: "How to get more patients to your clinic",
      desc: "A clear breakdown of the main digital levers that help clinics attract more patient enquiries, from local search to conversion-focused service pages.",
      href: "/resources/how-to-get-more-patients-to-your-clinic/",
    },
    {
      icon: icons.recall,
      title: "Patient recall system: what it is and why clinics need one",
      desc: "A guide to patient recall, follow-up and reactivation systems for clinics that want to reconnect with past patients more effectively.",
      href: "/resources/patient-recall-system/",
    },
  ];

  const strategyCards: ResourceCard[] = [
    {
      icon: icons.megaphone,
      title: "How to market your clinic",
      desc: "A practical overview of how private clinics can approach digital marketing without wasting time on disconnected tactics.",
      href: "/resources/how-to-market-your-clinic/",
    },
    {
      icon: icons.globe,
      title: "How to market a private practice online",
      desc: "A guide for clinic owners who want to understand the foundations of online marketing for private healthcare services.",
      href: "/resources/how-to-market-a-private-practice-online/",
    },
    {
      icon: icons.certificate,
      title: "How to market your chiropractic practice",
      desc: "A chiropractic-specific guide covering visibility, trust, patient education and ways to reduce reliance on referral-only growth.",
      href: "/resources/how-to-market-your-chiropractic-practice/",
    },
    {
      icon: icons.trendUp,
      title: "Physio business growth: the complete guide",
      desc: "A longer-form guide for physiotherapy clinic owners who want to improve patient acquisition, local visibility and diary flow.",
      href: "/resources/physio-business-growth/",
    },
  ];

  const seoCards: ResourceCard[] = [
    {
      icon: icons.mapPin,
      title: "Local SEO for physio clinics",
      desc: "A practical guide to improving local visibility for physiotherapy clinics, including service pages, Google Business Profile, reviews and location signals.",
      href: "/resources/local-seo-for-physio-clinics/",
    },
    {
      icon: icons.heartbeat,
      title: "Local SEO for healthcare clinics",
      desc: "A broader guide to local SEO for healthcare clinics that want to appear more consistently for relevant local searches.",
      href: "/resources/local-seo-for-healthcare-clinics/",
    },
    {
      icon: icons.crosshair,
      title: "Local SEO for medical clinics",
      desc: "A guide to the core SEO foundations medical and private healthcare clinics need to strengthen local discovery.",
      href: "/resources/local-seo-for-medical-clinics/",
    },
  ];

  const adsCards: ResourceCard[] = [
    {
      icon: icons.cursor,
      title: "Google Ads for physios",
      desc: "A guide to how physiotherapy clinics can use Google Ads to generate relevant patient enquiries and avoid common campaign mistakes.",
      href: "/resources/google-ads-for-physios/",
    },
    {
      icon: icons.target,
      title: "Google Ads for chiropractors",
      desc: "A chiropractic-specific guide to using Google Ads for high-intent searches, patient acquisition and campaign testing.",
      href: "/resources/google-ads-for-chiropractors/",
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      <PageHero
        badge="Clinic growth resources"
        heading={<>Read the thinking <em className="not-italic text-[var(--color-accent)]">behind the system</em></>}
        subtext="Practical guides on patient acquisition, clinic SEO, Google Ads, website conversion and patient reactivation, written for UK osteopaths, physiotherapists and chiropractors."
        breadcrumbs={crumbs}
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
      />

      {/* Intro */}
      <section className="section grain bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="cx-main">
          <div className="max-w-3xl">
            <FadeUp>
              <Badge className="mb-5 inline-block">Guidance</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Practical guidance for growing a private clinic
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                Clinic Evo&apos;s resource library is designed to support clinic owners
                who want to make better decisions about marketing, SEO, paid ads,
                websites and patient reactivation.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                The guides are intentionally practical. They are not written for
                generic businesses. They are written around the realities of MSK
                clinics, where trust, patient education, local visibility, reviews,
                practitioner credibility and rebooking behaviour all matter.
              </p>
              <p className="text-body text-[var(--color-muted)] font-semibold">
                Use these resources to understand where your clinic may be losing
                enquiries, what to improve first, and how to build a more joined-up
                digital growth system.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Patient acquisition resources */}
      <section className="section bg-[var(--color-paper)] border-t border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-10">
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Patient acquisition resources
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                These guides focus on attracting more of the right patients,
                improving enquiry flow and helping clinic owners understand what
                to prioritise when they want more bookings.
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
      <section className="section grain bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-10">
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Clinic growth strategy resources
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                These resources look at broader growth strategy for private
                clinics, including how to position your services, improve
                visibility and build a more sustainable enquiry system.
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
      <section className="section bg-[var(--color-paper)] border-t border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-10">
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                SEO for clinics resources
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                These guides support the main <a href="/seo-for-clinics/" className="text-[var(--color-accent)] hover:underline">SEO for Clinics</a> service
                page and help clinic owners understand how local SEO, service
                pages and search visibility work in practice.
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
      <section className="section grain bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-10">
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Google Ads for clinics resources
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                These resources explain how private clinics can use paid search
                to reach people who are actively looking for treatment, while
                avoiding wasteful campaigns and weak landing pages.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {adsCards.map((card, i) => (
              <ResourceCardEl key={card.href} card={card} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Proof and case studies */}
      <section className="section bg-[var(--color-paper)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <Badge className="mb-5 inline-block">Proof</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Proof and case studies
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Clinic marketing should be judged by real-world outcomes, not
                  surface-level activity. These resources are designed to show how
                  strategy, websites, SEO and patient journeys come together in
                  practice.
                </p>
              </div>
            </FadeUp>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: icons.buildings,
                  title: "Bodyfunction Clinic case study",
                  desc: "A core Clinic Evo proof asset showing how clinic website, SEO and patient journey work can support a stronger digital growth system.",
                  href: "/case-studies/bodyfunction-clinic/",
                  action: "Read the case study",
                },
                {
                  icon: icons.article,
                  title: "Chiropractic marketing case study",
                  desc: "An overview of the digital marketing approach Clinic Evo applies to chiropractic clinics, covering website structure, SEO and enquiry growth.",
                  href: "/resources/chiropractic-marketing-case-study/",
                  action: "View resource",
                },
              ].map((item, i) => (
                <FadeUp key={item.href} delay={i * 0.1}>
                  <a
                    href={item.href}
                    className="card-surface p-6 group flex gap-5 items-start block"
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-body-lg font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-body-sm text-[var(--color-muted)] mb-4">{item.desc}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
                        {item.action}
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-150 group-hover:translate-x-0.5">
                          <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Need a clearer plan for your clinic?"
        subheading="Reading about clinic marketing can help you understand the options. The more useful next step is to look at your own website, search visibility, booking journey and patient follow-up system. Clinic Evo's free clinic audit gives you a practical view of what is working, what is missing and where the strongest opportunities are likely to be."
        primaryLabel="Get a free clinic audit"
        primaryHref="/free-clinic-audit/"
      />
    </>
  );
}

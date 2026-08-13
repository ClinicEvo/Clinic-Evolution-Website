import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ProcessSteps from "@/components/sections/ProcessSteps";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import PageHero from "@/components/sections/PageHero";
import ProofBand from "@/components/sections/ProofBand";

export const metadata = buildMetadata({
  title: "SEO for Medical Clinics | Specialist Clinic SEO",
  description:
    "Specialist SEO for medical clinics, osteopaths, physiotherapists and chiropractors. Improve local visibility, service pages, enquiries and patient bookings.",
  path: "/seo-for-clinics/",
});

const faqs = [
  {
    question: "What is SEO for clinics?",
    answer:
      "SEO for clinics is the process of improving a clinic website so more patients can find it through Google. It usually includes technical SEO, local SEO, service page optimisation, content strategy, Google Business Profile improvements and internal linking.",
  },
  {
    question: "Is local SEO important for private clinics?",
    answer:
      "Yes. Most patients search locally when choosing a clinic, especially for osteopathy, physiotherapy and chiropractic care. Local SEO helps improve visibility for searches connected to services, conditions, locations and nearby availability.",
  },
  {
    question: "How long does clinic SEO take to work?",
    answer:
      "Some improvements can appear within weeks, especially when a site has low competition keywords or pages that are already close to ranking. Bigger gains usually take several months because Google needs time to crawl, assess and trust the updated website.",
  },
  {
    question: "Do clinics need blog posts for SEO?",
    answer:
      "Blog posts can help, but clinics should usually fix core service pages first. The most important SEO pages are often the treatment, condition, location and practitioner pages that support patient decisions and booking intent.",
  },
  {
    question: "Can Clinic Evo help with SEO for an existing clinic website?",
    answer:
      "Yes. Clinic Evo can audit an existing clinic website, identify SEO weaknesses, improve service pages, strengthen internal linking, refine local SEO and create a clearer plan for increasing patient enquiries.",
  },
];

const steps = [
  {
    number: 1,
    title: "Audit",
    description:
      "We review your website structure, rankings, technical setup, Google Business Profile, local visibility and conversion points.",
  },
  {
    number: 2,
    title: "Map",
    description:
      "We map the right keywords to the right pages so your homepage, discipline pages, service pages and resources are not competing with each other.",
  },
  {
    number: 3,
    title: "Improve",
    description:
      "We improve the pages, metadata, internal links, technical issues and content gaps most likely to support rankings and enquiries.",
  },
  {
    number: 4,
    title: "Measure",
    description:
      "We track keyword movement, organic traffic, enquiries and booking-related actions so the work stays connected to growth.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "SEO for Clinics", href: "/seo-for-clinics/" },
];

export default function SeoForClinicsPage() {
  return (
    <>
      <ServiceSchema
        name="SEO for Medical Clinics"
        description="Specialist SEO for UK private healthcare clinics, osteopaths, physiotherapists and chiropractors."
        url="/seo-for-clinics/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="Specialist SEO for private healthcare clinics"
        heading={<>SEO for clinics that need <em className="not-italic text-[var(--color-accent)]">more patient enquiries</em></>}
        subtext="Clinic Evo helps UK private clinics improve their visibility on Google, strengthen their service pages and turn more local searches into booked appointments, built around how MSK patients actually search and decide."
        bullets={[
          "Local SEO, service pages and technical improvements",
          "Built around enquiries, bookings and patient trust",
          "MSK and private healthcare specialists only",
        ]}
        primaryCta={{ label: "Get a free clinic SEO audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "See how clinic SEO works", href: "#what-we-improve" }}
        breadcrumbs={crumbs}
        rightPanelWidth="1.15fr"
        rightPanel={
          <div className="relative aspect-[2028/774] overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)]">
            <Image
              src="/images/seo-for-clinics/seo-graph.png"
              alt="Google Search Console performance report showing clicks and impressions climbing over three months"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        }
      />

      {/* Positioning */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <p className="eyebrow mb-5">Why clinic SEO is different</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Clinic SEO is different from normal local SEO
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                A clinic website has to do more than appear in Google. Patients are
                often searching while worried, in pain, uncertain or comparing
                several possible routes for care. They look for symptoms,
                conditions, treatments, location, reviews, availability and signs
                of clinical trust.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                That is why SEO for clinics needs more than keyword placement. It
                needs a structure that helps patients understand what you treat,
                why they can trust you, how your clinic works and what they should
                do next.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                Clinic Evo builds SEO around that patient journey.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-5 md:p-6 max-w-md mx-auto lg:ml-auto lg:mr-0">
                <div className="relative aspect-[660/446] overflow-hidden rounded-[var(--radius-sm)]">
                  <Image
                    src="/images/seo-for-clinics/seo-organic-search.png"
                    alt="SEO tool report showing 1.2K organic keywords and 3.4K organic traffic, against zero paid keywords and paid traffic"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 440px"
                  />
                </div>
                <p className="mt-4 text-body-sm text-[var(--color-muted)]">
                  Real organic growth, not paid clicks. Rankings and traffic Clinic Evo
                  clients earn through search, with zero paid spend behind them.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What we improve */}
      <section id="what-we-improve" className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">What we improve</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                What Clinic Evo improves
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Clinic SEO works best when the whole website supports search
                visibility and patient decision-making. We look at the technical
                foundation, content structure, local signals and conversion points
                together.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Service page SEO", desc: "We improve the pages that describe your treatments, conditions and clinic services so they are clearer for both patients and Google.", icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 9h10M7 13h6" /></> },
              { title: "Local SEO", desc: "We strengthen the signals that help your clinic appear for relevant local searches, including location terms, Google Business Profile alignment and service-area relevance.", icon: <><path d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></> },
              { title: "Technical SEO", desc: "We review crawlability, metadata, headings, page speed, indexation, broken links, redirects, schema and the technical barriers that can hold rankings back.", icon: <><path d="M10.3 5.7a3 3 0 104 4l5 5a2 2 0 01-3 3l-5-5a3 3 0 01-4-4z" /></> },
              { title: "Content strategy", desc: "We identify the pages and resources your clinic needs to answer real patient questions and support stronger organic growth over time.", icon: <><path d="M4 5h16M4 12h10M4 19h7" /></> },
              { title: "Internal linking", desc: "We connect related services, conditions, locations and resources so Google can understand your clinic\u2019s expertise and patients can move through the site more easily.", icon: <><path d="M9 12a3 3 0 013-3h3a3 3 0 010 6h-1.5" /><path d="M15 12a3 3 0 01-3 3H9a3 3 0 010-6h1.5" /></> },
              { title: "Booking journey", desc: "We review how easily a patient can move from search to understanding, trust and booking.", icon: <><path d="M5 12h14M13 6l6 6-6 6" /></> },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="card-surface group flex h-full flex-col p-7 md:p-8">
                  <div className="mb-5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{item.icon}</svg>
                  </div>
                  <h3 className="text-h4 text-[var(--color-ink)] mb-2">{item.title}</h3>
                  <p className="text-body text-[var(--color-muted)]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Proof band */}
      <ProofBand
        eyebrow="What good clinic SEO looks like"
        stat={{ value: "8 → 3,900", label: "Monthly organic visitors, Bodyfunction Clinic, over two years" }}
        body="Flat at 8 to 15 visits a month for a full year, then a clean inflection once the content and structure work landed. Organic keywords went from 104 to 1,100, and from no top-three rankings at all to 332 of them."
        source="Ahrefs, bodyfunction.co.uk, Aug 2024 – Aug 2026"
      />

      {/* Who this is for */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Who we help</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                SEO for osteopaths, physios and chiropractors
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Clinic Evo focuses on MSK and private healthcare clinics where
                patient trust, clinical credibility and local search visibility
                are central to growth. Each discipline has its own search patterns.
              </p>
            </div>
          </FadeUp>
          <div className="flex flex-col gap-5">
            {[
              {
                title: "Osteopaths",
                desc: "An osteopathy clinic may need stronger visibility for back pain, neck pain and local treatment searches.",
                href: "/osteopath-marketing/",
                cta: "SEO and Marketing for Osteopaths",
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
                desc: "A physiotherapy clinic may need clearer pathways around sports injuries, rehabilitation, post-operative support and private treatment.",
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
                desc: "A chiropractic clinic may need to communicate trust, outcomes and differentiation in a competitive local market.",
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
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)]" style={{ background: "var(--color-accent-light)", color: "var(--color-accent)" }}>
                        {item.icon}
                      </div>
                      <p className="eyebrow">{item.title}</p>
                    </div>
                    <p className="text-body-sm text-[var(--color-muted)] mb-6">{item.desc}</p>
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

      {/* Common problems */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <p className="eyebrow mb-5">Common problems</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Why most clinic websites struggle to rank
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                Many clinic websites are built to look presentable, but not to
                perform in search. The homepage may be doing too much. Service
                pages may be too thin. Condition pages may be missing.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                For clinics, the biggest SEO gains often come from fixing the
                structure first. That means making it clear what you offer, who
                you help, where you are based, why patients should trust you and
                which page should rank for each search intent.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-7 md:p-8">
                <p className="text-label text-[var(--color-accent)] mb-5">Common SEO issues we fix</p>
                <div className="flex flex-col gap-3">
                  {[
                    "Thin or generic service pages",
                    "No clear keyword ownership between pages",
                    "Weak local SEO signals",
                    "Poor internal linking",
                    "Treatment pages that do not answer patient concerns",
                    "Technical issues affecting crawlability or indexation",
                    "Google Business Profile not aligned with the website",
                    "Blog posts that do not support commercial pages",
                    "Unclear calls to action and booking pathways",
                  ].map((issue) => (
                    <div key={issue} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-1 text-[var(--color-error)]" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span className="text-body-sm text-[var(--color-muted)]">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <p className="eyebrow mb-5">What is included</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                What is included in clinic SEO?
              </h2>
              <p className="text-body text-[var(--color-muted)]">
                Clinic Evo can support your clinic with a full SEO improvement
                plan or focused work on the areas that matter most.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-3">
                {[
                  "SEO audit of your current website",
                  "Keyword mapping by service, condition and location",
                  "Metadata and heading recommendations",
                  "Service page copy and content improvement",
                  "Local SEO and Google Business Profile recommendations",
                  "Technical SEO checks",
                  "Schema recommendations",
                  "Internal linking plan",
                  "Content roadmap for patient education and organic growth",
                  "Conversion recommendations for enquiries and bookings",
                  "Monthly visibility and enquiry tracking where appropriate",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="flex-shrink-0 mt-1 text-[var(--color-accent)]" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-body text-[var(--color-muted)]">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Patient acquisition */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <p className="eyebrow mb-5">Growth</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                How SEO supports patient acquisition
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                SEO is not just about ranking for more terms. For clinics, the
                real goal is to become easier to find at the moment a patient is
                actively looking for help.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                Clinic Evo connects SEO with the wider growth system: better website
                pages through{" "}
                <a href="/website-design-for-clinics/" className="text-[var(--color-accent)] hover:underline">clinic website design</a>,
                stronger local visibility,{" "}
                <a href="/google-ads-for-clinics/" className="text-[var(--color-accent)] hover:underline">Google Ads for clinics</a>{" "}
                where useful, and{" "}
                <a href="/ai-integration/" className="text-[var(--color-accent)] hover:underline">AI patient reactivation</a>{" "}
                for people already in your database.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-5 md:p-6 max-w-md mx-auto lg:ml-auto lg:mr-0" style={{ background: "var(--color-paper)" }}>
                <div className="relative aspect-[539/400] overflow-hidden rounded-[var(--radius-sm)]">
                  <Image
                    src="/images/seo-for-clinics/seo-new-users.png"
                    alt="Analytics report showing organic search generating far more new users than direct, paid search, social or referral channels combined"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 440px"
                  />
                </div>
                <p className="mt-4 text-body-sm text-[var(--color-muted)]">
                  Organic search is consistently the largest source of new patients,
                  ahead of direct, paid, social and referral traffic combined.
                </p>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { title: "Local SEO for physio clinics", href: "/learning-hub/local-seo-for-physio-clinics/" },
                { title: "Local SEO for medical clinics", href: "/learning-hub/local-seo-for-medical-clinics/" },
                { title: "Local SEO for healthcare clinics", href: "/learning-hub/local-seo-for-healthcare-clinics/" },
              ].map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  className="card-surface group flex items-center justify-between gap-4 p-6"
                >
                  <div>
                    <p className="text-label text-[var(--color-accent)] mb-2">Guide</p>
                    <h3 className="text-h4 text-[var(--color-ink)]">{r.title}</h3>
                  </div>
                  <svg className="flex-shrink-0 text-[var(--color-muted)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]" width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <p className="eyebrow mb-5">Process</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                A practical clinic SEO process
              </h2>
              <p className="text-body text-[var(--color-muted)]">
                Clear, jargon-free and focused on results you can measure.
              </p>
            </FadeUp>
            <div>
              <ProcessSteps steps={steps} />
            </div>
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
                  SEO for clinics FAQs
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
        heading="Start with a free clinic SEO audit"
        subheading="Your free audit will look at your website, search visibility, page structure, local SEO, patient journey and missed opportunities."
      />
    </>
  );
}

import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Breadcrumb from "@/components/sections/Breadcrumb";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import ArrowLink from "@/components/ui/ArrowLink";
import { ClinicGrowthStats, SEOVisibilityMetrics, PatientConversionFunnel } from "@/components/case-studies/CaseStudyCharts";

export const metadata = buildMetadata({
  title: "Physio Marketing Case Study | Bodyfunction Clinic | ClinicEvo",
  description:
    "See how ClinicEvo improved the digital growth foundations for Bodyfunction Clinic through clearer website structure, SEO-led service pages, stronger patient journeys and clinic marketing strategy.",
  path: "/case-studies/bodyfunction-clinic/",
});

const faqs = [
  {
    question: "What is a clinic marketing case study?",
    answer:
      "A clinic marketing case study shows how a private clinic improved its digital presence, visibility, patient journey or enquiry generation through structured marketing work. It helps other clinic owners understand what can be improved and what a stronger growth foundation looks like.",
  },
  {
    question: "Is this only relevant to physiotherapy clinics?",
    answer:
      "No. Although Bodyfunction Clinic is used as the proof point, the same principles apply to many osteopathy, physiotherapy and chiropractic clinics. Clear service pages, strong SEO structure, patient-focused copy and a better booking journey are relevant across MSK private practice.",
  },
  {
    question: "Do I need a full website rebuild to improve clinic marketing?",
    answer:
      "Not always. Some clinics need a full redesign, but others can make meaningful progress by improving page structure, SEO targeting, internal links, calls to action and patient journey clarity.",
  },
  {
    question: "What should a clinic audit review?",
    answer:
      "A useful clinic audit should review your website structure, SEO visibility, local search presence, service pages, booking journey, calls to action, trust signals, competitor position and missed patient reactivation opportunities.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Bodyfunction Clinic", href: "/case-studies/bodyfunction-clinic/" },
];

export default function BodyfunctionCaseStudyPage() {
  return (
    <>
      <ServiceSchema
        name="Bodyfunction Clinic Case Study"
        description="A real clinic marketing case study showing how better SEO, website structure and patient journey improvements can support private clinic growth."
        url="/case-studies/bodyfunction-clinic/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <section className="bg-[var(--color-paper)] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-surface)] -z-10 skew-x-[-12deg] translate-x-20 hidden lg:block" />
        
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <FadeUp>
                <Breadcrumb items={crumbs} />
                <Badge variant="accent" className="mt-6 mb-5">Case Study</Badge>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h1 className="text-h1 text-[var(--color-ink)] mb-6 tracking-tight">
                  Bodyfunction Clinic marketing case study
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="space-y-6 max-w-xl">
                  <p className="text-body-lg text-[var(--color-muted)] leading-relaxed">
                    Bodyfunction Clinic needed a clearer digital growth foundation: a
                    website structure that better reflected its services, stronger SEO
                    visibility, a more intuitive patient journey and clearer routes
                    from search to booking.
                  </p>
                  <p className="text-body-lg text-[var(--color-muted)] leading-relaxed">
                    ClinicEvo&apos;s work focused on turning the website into a more
                    useful growth asset, with clearer service positioning, stronger
                    clinic SEO foundations and a patient journey designed around how
                    people actually search for and choose private treatment.
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="flex flex-col sm:flex-row gap-5 mt-10">
                  <Button href="/free-clinic-audit/" size="lg">
                    Get a free clinic audit
                  </Button>
                  <Button href="/seo-for-clinics/" variant="outline" size="lg" >
                    Explore SEO for clinics
                  </Button>
                </div>
              </FadeUp>
            </div>
            
            <div className="lg:col-span-6 relative">
              <FadeUp delay={0.2}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white/20">
                  <Image
                    src="https://bodyfunction.co.uk/wp-content/uploads/2026/01/bodyfunction-clinic-team-at-reception-01.png"
                    alt="Bodyfunction Clinic team at reception"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                </div>
                {/* Visual accent */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--color-accent)]/10 rounded-2xl -z-10 blur-2xl" />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="section bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <FadeUp>
                <Badge className="mb-5 inline-block">Overview</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  A real clinic growth project, not a theoretical strategy
                </h2>
                <div className="space-y-5">
                  <p className="text-body-lg text-[var(--color-muted)]">
                    Many clinic websites look professional on the surface but are not
                    structured around how patients search, compare and book.
                    Bodyfunction Clinic offered strong clinical services, but the
                    digital presence needed clearer SEO architecture, better content
                    structure and a more intentional conversion journey.
                  </p>
                  <p className="text-body-lg text-[var(--color-muted)]">
                    The aim was not simply to make the website look better. The goal
                    was to make it easier for prospective patients to understand the
                    clinic, find the right service, trust the practitioners and take
                    the next step.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <ClinicGrowthStats />
              </FadeUp>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {[
              { label: "Clinic type", value: "Private healthcare / MSK clinic" },
              { label: "Focus areas", value: "Website structure, SEO, service pages, patient journey" },
              { label: "Core goal", value: "Improve visibility, clarity and enquiry flow" },
              { label: "Strategy", value: "Build a stronger digital foundation for long-term clinic growth" },
            ].map((card, i) => (
              <FadeUp key={card.label} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] h-full shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-xs font-bold text-[var(--color-accent)] mb-4 uppercase tracking-widest">{card.label}</p>
                  <p className="text-body font-medium text-[var(--color-ink)]">{card.value}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            <div className="lg:col-span-6 space-y-12">
              <FadeUp>
                <Badge className="mb-5 inline-block">The challenge</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-8 leading-tight">
                  The challenge
                </h2>
                <div className="space-y-6">
                  <p className="text-body text-[var(--color-muted)] leading-relaxed">
                    Bodyfunction Clinic had valuable clinical expertise, but the website
                    needed to work harder as a patient acquisition and trust-building
                    tool.
                  </p>
                  <p className="text-body text-[var(--color-muted)] leading-relaxed">
                    For clinic owners, this is often where growth is lost. The clinic
                    may be clinically strong, but the website does not clearly
                    translate that value into visibility, trust and bookings.
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-border)]">
                  <Image
                    src="https://bodyfunction.co.uk/wp-content/uploads/2026/01/bodyfunction-clinic-neck-treatment-session-close.png"
                    alt="Neck treatment session at Bodyfunction Clinic"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeUp>
            </div>
            
            <div className="lg:col-span-6 lg:pt-32">
              <FadeUp delay={0.1}>
                <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] shadow-sm">
                  <p className="text-label text-[var(--color-accent)] mb-6 font-bold tracking-wider uppercase text-xs">Common issues identified:</p>
                  <div className="space-y-4">
                    {[
                      "Service pages were not fully structured around patient search intent.",
                      "Important treatment and condition areas needed clearer SEO targeting.",
                      "The patient journey could be made simpler and more reassuring.",
                      "The website needed stronger internal linking between services, conditions and booking actions.",
                      "Past and returning patient opportunities were not being used as effectively as they could be.",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-4 p-3 bg-white/50 rounded-xl border border-white transition-all hover:shadow-sm">
                        <svg className="flex-shrink-0 mt-1 text-[var(--color-error)]" width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span className="text-body-sm text-[var(--color-ink)] font-medium leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <FadeUp>
                <Badge className="mb-5 inline-block">The opportunity</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  The clinic growth opportunity
                </h2>
                <div className="space-y-6">
                  <p className="text-body text-[var(--color-muted)] leading-relaxed">
                    Private clinic growth is rarely about one isolated tactic. A clinic
                    does not grow from SEO alone, a new website alone, or a few ads
                    alone. Growth comes when the digital system works together.
                  </p>
                  <p className="text-body text-[var(--color-muted)] leading-relaxed">
                    For Bodyfunction Clinic, the opportunity was to improve the
                    foundations: clearer pages, stronger search intent, better
                    explanations, more useful calls to action and a smoother path from
                    first visit to booking.
                  </p>
                  <p className="text-body text-[var(--color-muted)] leading-relaxed">
                    This is the kind of work many osteopaths, physiotherapists and
                    chiropractors need before increasing ad spend or chasing more
                    traffic. The website needs to be able to convert the people who
                    already find it.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <SEOVisibilityMetrics />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* What we improved */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="text-center mb-12">
              <Badge className="mb-5 inline-block">Improvements</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                What ClinicEvo improved
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                The work focused on the areas that matter most for a private
                clinic&apos;s digital growth.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Website structure", desc: "We reviewed how the website was organised and identified where service, condition and booking journeys could be made clearer for patients and search engines." },
              { title: "SEO-led service content", desc: "We strengthened the role of important service pages so they could better target relevant clinic SEO searches and answer the questions prospective patients are likely to have before booking." },
              { title: "Patient journey", desc: "We looked at how people move from symptoms and services through to trust signals, practitioner information and booking actions." },
              { title: "Internal linking", desc: "We improved the logic between key pages so patients could navigate more easily and Google could better understand the relationship between services, conditions and clinic expertise." },
              { title: "Conversion clarity", desc: "We focused on making the next step clearer, including booking prompts, contact routes and calls to action at the right points in the page journey." },
              { title: "Reactivation opportunities", desc: "We identified opportunities for smarter follow-up and patient reactivation so the clinic could create value beyond new patient acquisition alone." },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] h-full">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">{item.title}</h3>
                  <p className="text-body text-[var(--color-muted)]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SEO & Structure */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <Badge className="mb-5 inline-block">Foundations</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  SEO and website structure
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  A clinic website needs to help two audiences at the same time:
                  patients and search engines.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  For patients, the structure needs to make the clinic feel clear,
                  trustworthy and easy to navigate. For search engines, each page
                  needs a defined purpose, a clear topic, helpful internal links and
                  enough context to understand when that page should rank.
                </p>
                <p className="text-body text-[var(--color-muted)]">
                  The Bodyfunction Clinic project showed how much opportunity can
                  sit inside the structure of an existing clinic website. Better
                  page organisation, clearer copy and more intentional internal
                  linking can give a clinic a stronger base before investing in
                  further marketing activity.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                <h3 className="text-h3 text-[var(--color-ink)] mb-4">
                  Related services
                </h3>
                <div className="flex flex-col gap-4">
                  <ArrowLink href="/seo-for-clinics/">SEO for clinics</ArrowLink>
                  <ArrowLink href="/website-design-for-clinics/">Clinic website design</ArrowLink>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Journey & Conversion */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="max-w-xl order-2 lg:order-1">
              <FadeUp>
                <Badge className="mb-5 inline-block">Conversion</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-8 leading-tight">
                  Patient journey and conversion improvements
                </h2>
                <div className="space-y-6">
                  <p className="text-body text-[var(--color-muted)] leading-relaxed">
                    Patients do not make healthcare decisions in the same way they buy
                    ordinary local services. They need to feel understood, reassured and
                    confident that the clinic can help with their specific issue.
                  </p>
                  <p className="text-body text-[var(--color-muted)] leading-relaxed">
                    That means the website has to do more than list treatments. It needs
                    to explain who the service is for, what the patient can expect, when
                    treatment may be appropriate and how to take the next step.
                  </p>
                  <p className="text-body text-[var(--color-muted)] leading-relaxed italic border-l-2 border-[var(--color-accent)] pl-6 py-2">
                    For Bodyfunction Clinic, the focus was on making that journey
                    clearer, reducing friction and helping more visitors move from
                    interest to action.
                  </p>
                </div>
              </FadeUp>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <FadeUp delay={0.1}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-border)]">
                  <Image
                    src="https://bodyfunction.co.uk/wp-content/uploads/2026/01/bodyfunction-physiotherapy-strength-conditioning-floor-exercise-02.png"
                    alt="Physiotherapy strength and conditioning floor exercise"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Visual accent */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--color-accent)]/5 rounded-full -z-10 blur-xl" />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <FadeUp>
                <Badge className="mb-5 inline-block">Takeaway</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  What other clinics can learn from this
                </h2>
                <div className="space-y-6">
                  <p className="text-body text-[var(--color-muted)] leading-relaxed">
                    The Bodyfunction Clinic project highlights a common issue for
                    private clinics: the website exists, the services are valuable, but
                    the digital structure is not yet strong enough to support growth
                    properly.
                  </p>
                  <p className="text-body text-[var(--color-muted)] leading-relaxed">
                    For osteopaths, physiotherapists and chiropractors, the lesson is
                    simple. Before spending heavily on ads or posting more content,
                    make sure the core website is built around search intent, patient
                    trust and booking behaviour.
                  </p>
                  <p className="text-body text-[var(--color-muted)] font-semibold border-l-4 border-[var(--color-accent)] pl-6 py-1">
                    A stronger digital foundation can help every other marketing channel
                    perform better.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <PatientConversionFunnel />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="text-center mb-12">
              <Badge className="mb-5 inline-block">Capabilities</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Related ClinicEvo support
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                ClinicEvo can help your clinic improve the same core growth
                foundations: search visibility, service page structure, patient
                journey, booking flow and reactivation opportunities.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "SEO for clinics", href: "/seo-for-clinics/" },
              { label: "Clinic website design", href: "/website-design-for-clinics/" },
              { label: "Google Ads for clinics", href: "/google-ads-for-clinics/" },
              { label: "AI patient reactivation", href: "/ai-patient-reactivation/" },
            ].map((link, i) => (
              <FadeUp key={link.href} delay={i * 0.05}>
                <a href={link.href} className="block group bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors">
                  <span className="font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">{link.label}</span>
                  <svg className="mt-4 text-[var(--color-accent)]" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="max-w-2xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10">
                <Badge className="mb-5 inline-block">FAQ</Badge>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  Clinic marketing case study FAQs
                </h2>
              </div>
            </FadeUp>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        heading="Want to see what your clinic is missing?"
        subheading="A free clinic audit will show where your current website, SEO, patient journey and conversion points could be improved. You will get practical recommendations based on how your clinic appears online."
        primaryLabel="Get a free clinic audit"
        primaryHref="/free-clinic-audit/"
      />
    </>
  );
}

import { buildMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Breadcrumb from "@/components/sections/Breadcrumb";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import ArrowLink from "@/components/ui/ArrowLink";

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
    question: "Can ClinicEvo help with SEO for an existing clinic website?",
    answer:
      "Yes. ClinicEvo can audit an existing clinic website, identify SEO weaknesses, improve service pages, strengthen internal linking, refine local SEO and create a clearer plan for increasing patient enquiries.",
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

      {/* Hero */}
      <section className="bg-[var(--color-ink)] pt-40 pb-28 lg:pt-48 lg:pb-36">
        <div className="cx-main">
          <FadeUp>
            <Breadcrumb items={crumbs} light />
            <Badge variant="accent" className="mt-6 mb-4">Specialist SEO for private healthcare clinics</Badge>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="text-display text-white mb-8 max-w-3xl leading-tight">
              SEO for medical clinics that need more patient enquiries
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-body-lg text-white/70 mb-6 max-w-2xl leading-relaxed">
              ClinicEvo helps UK private clinics improve their visibility on
              Google, strengthen their service pages and turn more local searches
              into patient enquiries.
            </p>
            <p className="text-body-lg text-white/70 mb-10 max-w-2xl leading-relaxed">
              Our clinic SEO work is built around how real patients search,
              compare and choose osteopaths, physiotherapists, chiropractors and
              other MSK providers.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/free-clinic-audit/" size="lg">
                Get a free clinic SEO audit
              </Button>
              <Button href="#what-we-improve" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                See how our clinic SEO works
              </Button>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              {[
                "SEO for MSK and private healthcare clinics",
                "Local SEO, service pages and technical improvements",
                "Built around enquiries, bookings and patient trust",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <svg className="flex-shrink-0 text-[var(--color-accent)]" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-white/60">{point}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Positioning */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="max-w-3xl">
            <FadeUp>
              <Badge className="mb-5 inline-block">Why clinic SEO is different</Badge>
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
                ClinicEvo builds SEO around that patient journey.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What we improve */}
      <section id="what-we-improve" className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <FadeUp>
            <div className="text-center mb-12">
              <Badge className="mb-5 inline-block">What we improve</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                What ClinicEvo improves
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                Clinic SEO works best when the whole website supports search
                visibility and patient decision-making. We look at the technical
                foundation, content structure, local signals and conversion points
                together.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Service page SEO", desc: "We improve the pages that describe your treatments, conditions and clinic services so they are clearer for both patients and Google." },
              { title: "Local SEO", desc: "We strengthen the signals that help your clinic appear for relevant local searches, including location terms, Google Business Profile alignment and service-area relevance." },
              { title: "Technical SEO", desc: "We review crawlability, metadata, headings, page speed, indexation, broken links, redirects, schema and the technical barriers that can hold rankings back." },
              { title: "Content strategy", desc: "We identify the pages and resources your clinic needs to answer real patient questions and support stronger organic growth over time." },
              { title: "Internal linking", desc: "We connect related services, conditions, locations and resources so Google can understand your clinic\u2019s expertise and patients can move through the site more easily." },
              { title: "Booking journey improvements", desc: "We review how easily a patient can move from search to understanding, trust and booking." },
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

      {/* Who this is for */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="text-center mb-12">
              <Badge className="mb-5 inline-block">Who we help</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                SEO for osteopaths, physios and chiropractors
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                ClinicEvo focuses on MSK and private healthcare clinics where
                patient trust, clinical credibility and local search visibility
                are central to growth. Each discipline has its own search patterns.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Osteopaths",
                desc: "An osteopathy clinic may need stronger visibility for back pain, neck pain and local treatment searches.",
                href: "/osteopath-marketing/",
                cta: "SEO and marketing for osteopaths",
              },
              {
                title: "Physiotherapists",
                desc: "A physiotherapy clinic may need clearer pathways around sports injuries, rehabilitation, post-operative support and private treatment.",
                href: "/physiotherapy-marketing/",
                cta: "Physiotherapy marketing",
              },
              {
                title: "Chiropractors",
                desc: "A chiropractic clinic may need to communicate trust, outcomes and differentiation in a competitive local market.",
                href: "/chiropractic-marketing/",
                cta: "Chiropractic marketing",
              },
            ].map((item, i) => (
              <FadeUp key={item.href} delay={i * 0.07}>
                <div className="bg-[var(--color-surface)] rounded-2xl p-7 border border-[var(--color-border)] h-full flex flex-col">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">{item.title}</h3>
                  <p className="text-body text-[var(--color-muted)] mb-4 flex-1">{item.desc}</p>
                  <ArrowLink href={item.href}>{item.cta}</ArrowLink>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Common problems */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <Badge className="mb-5 inline-block">Common problems</Badge>
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
              <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)]">
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
              <Badge className="mb-5 inline-block">What is included</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                What is included in clinic SEO?
              </h2>
              <p className="text-body text-[var(--color-muted)]">
                ClinicEvo can support your clinic with a full SEO improvement
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
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="max-w-3xl">
            <FadeUp>
              <Badge className="mb-5 inline-block">Growth</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                How SEO supports patient acquisition
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                SEO is not just about ranking for more terms. For clinics, the
                real goal is to become easier to find at the moment a patient is
                actively looking for help.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                ClinicEvo connects SEO with the wider growth system: better website
                pages through{" "}
                <a href="/website-design-for-clinics/" className="text-[var(--color-accent)] hover:underline">clinic website design</a>,
                stronger local visibility,{" "}
                <a href="/google-ads-for-clinics/" className="text-[var(--color-accent)] hover:underline">Google Ads for clinics</a>{" "}
                where useful, and{" "}
                <a href="/ai-patient-reactivation/" className="text-[var(--color-accent)] hover:underline">AI patient reactivation</a>{" "}
                for people already in your database.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <Badge className="mb-5 inline-block">Process</Badge>
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
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="max-w-2xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10">
                <Badge className="mb-5 inline-block">FAQ</Badge>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  SEO for clinics FAQs
                </h2>
              </div>
            </FadeUp>
            <FAQAccordion items={faqs} />
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

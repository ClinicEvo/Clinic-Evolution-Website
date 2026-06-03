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
import PageHero from "@/components/sections/PageHero";
import HeroStatCard from "@/components/sections/HeroStatCard";
import StatBand from "@/components/sections/StatBand";

export const metadata = buildMetadata({
  title: "Osteopath Marketing UK | Grow Your Osteopathy Practice",
  description:
    "Specialist marketing for UK osteopaths. SEO, Google Ads and website design that fills your diary with new patients. Book a free clinic audit.",
  path: "/osteopath-marketing/",
});

const faqs = [
  {
    question: "How long does osteopath SEO take to show results?",
    answer:
      "Most clients see measurable improvements in local rankings within 3–4 months. For competitive city locations it may take 6 months to reach top positions, but the results compound over time unlike paid ads.",
  },
  {
    question: "Do you only work with osteopaths?",
    answer:
      "We work exclusively with UK musculoskeletal clinics, osteopaths, physiotherapists and chiropractors. This focus means our strategies are built around the specific patient journeys and search behaviour in your field.",
  },
  {
    question: "What does the free clinic audit include?",
    answer:
      "We review your website, Google Business Profile, local search rankings, and any existing ad campaigns. You'll receive a written report with specific, prioritised recommendations within 2 business days.",
  },
  {
    question: "Can you help a new osteopathy practice with no online presence?",
    answer:
      "Yes. We frequently work with practices launching from scratch. We'll build the right foundations, website, Google Business Profile, and initial SEO, to get you visible quickly.",
  },
  {
    question: "Do you manage Google Ads for osteopaths?",
    answer:
      "Absolutely. We run targeted Google Ads campaigns for osteopaths, focusing on high-intent keywords like 'osteopath near me', 'back pain treatment [city]' and treatment-specific terms.",
  },
];

const steps = [
  {
    number: 1,
    title: "Free clinic audit",
    description:
      "We assess your current online presence, website, Google rankings, and any paid campaigns, and identify the biggest growth opportunities specific to your practice.",
  },
  {
    number: 2,
    title: "Custom growth strategy",
    description:
      "You receive a clear, prioritised plan covering which channels to focus on, what content to create, and how to convert more website visitors into booked appointments.",
  },
  {
    number: 3,
    title: "Implementation & management",
    description:
      "We handle everything: technical SEO, content, Google Ads management, and reporting. You stay focused on patient care while we handle the marketing.",
  },
  {
    number: 4,
    title: "Monthly reporting & refinement",
    description:
      "Every month you receive a plain-English report covering rankings, traffic, enquiries and ad performance. We continuously refine based on what's working.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Who We Help", href: "/#who-we-help" },
  { label: "Osteopaths", href: "/osteopath-marketing/" },
];

export default function OsteopathMarketingPage() {
  return (
    <>
      <ServiceSchema
        name="Osteopath Marketing"
        description="Specialist digital marketing for UK osteopathy practices including SEO, Google Ads, and website design."
        url="/osteopath-marketing/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="Osteopath marketing for UK practices"
        heading={<>More patients for your <em className="not-italic text-[var(--color-accent)]">osteopathy practice</em>, consistently</>}
        subtext="We help UK osteopaths attract consistent new patients through specialist SEO, Google Ads and conversion-focused website design, built around how patients actually choose an osteopath."
        bullets={[
          "SEO, ads and web design for osteopathy clinics",
          "Local and national search visibility",
          "Results tracked to enquiries, not just rankings",
        ]}
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "See our results", href: "/case-studies/" }}
        breadcrumbs={crumbs}
        rightPanel={
          <HeroStatCard
            title="Osteopath clinic results"
            stats={[
              { label: "New patients per month", value: "+23", note: "avg increase" },
              { label: "Organic traffic growth", value: "3.1×", note: "6-month average" },
              { label: "Google Maps ranking", value: "Top 3", note: "for local searches" },
            ]}
          />
        }
      />

      {/* Why Clinic Evo for osteopaths */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <Badge className="mb-5 inline-block">Why Clinic Evo</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Marketing that understands osteopathy
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Generic marketing agencies don&apos;t understand the nuances of
                  osteopathic care, the patient journey from acute pain to long-term
                  wellness, the role of word-of-mouth and referrals, or how patients
                  search when they&apos;re in discomfort.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-8">
                  We work exclusively with musculoskeletal clinics. That means every
                  strategy, every piece of content, and every ad campaign is built
                  around what actually works for osteopaths in the UK.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "Rank for 'osteopath near me' and condition-specific searches",
                    "Google Ads targeting back pain, neck pain, and sports injury keywords",
                    "Websites designed to convert visitors into booked appointments",
                    "AI patient reactivation to bring lapsed patients back",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-1 text-[var(--color-accent)]" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-body text-[var(--color-muted)]">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-8">
                <p className="text-label text-[var(--color-accent)] mb-4">Case study highlight</p>
                <p className="text-h2 text-[var(--color-ink)] font-bold mb-2">3× new patient enquiries</p>
                <p className="text-body text-[var(--color-muted)] mb-6">
                  A London osteopathy practice increased their monthly new patient
                  enquiries threefold within 6 months through targeted local SEO
                  and a rebuilt website.
                </p>
                <ArrowLink href="/case-studies/bodyfunction-clinic/">
                  Read the full case study
                </ArrowLink>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <StatBand
        eyebrow="What osteopath clinics see"
        heading="Growth measured in booked patients, not rankings alone."
        body="Every channel we run is tied back to new enquiries and filled diaries, the numbers that actually move an osteopathy practice forward."
        stats={[
          { value: "+23", label: "Average increase in new patients per month" },
          { value: "3.1×", label: "Average organic traffic growth over six months" },
          { value: "Top 3", label: "Google Maps ranking for local osteopath searches" },
        ]}
      />

      {/* Services for osteopaths */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Services</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Marketing services for osteopaths
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { title: "SEO for Osteopaths", desc: "Technical and content SEO that ranks your practice for local and condition-specific searches.", href: "/seo-for-clinics/" },
              { title: "Google Ads for Osteopaths", desc: "Patient-ready campaigns targeting people actively searching for osteopathic treatment.", href: "/google-ads-for-clinics/" },
              { title: "Osteopath Website Design", desc: "Fast, trust-building websites designed specifically to convert visitors into new patients.", href: "/website-design-for-clinics/" },
              { title: "AI Patient Reactivation", desc: "Re-engage patients who haven't visited in months with personalised automated messages.", href: "/ai-integration/" },
            ].map((s, i) => (
              <FadeUp key={s.href} delay={i * 0.07}>
                <div className="card-surface flex h-full flex-col p-7 md:p-8">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">{s.title}</h3>
                  <p className="text-body text-[var(--color-muted)] mb-4">{s.desc}</p>
                  <ArrowLink href={s.href}>Learn more</ArrowLink>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <Badge className="mb-5 inline-block">How it works</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                From audit to growing practice
              </h2>
              <p className="text-body text-[var(--color-muted)]">
                A clear, transparent process with no jargon and no long lock-in
                contracts.
              </p>
            </FadeUp>
            <div>
              <ProcessSteps steps={steps} />
            </div>
          </div>
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
                  Common questions from osteopaths
                </h2>
              </div>
            </FadeUp>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to grow your osteopathy practice?"
        subheading="Book a free clinic audit and discover exactly what's holding your clinic back online."
      />
    </>
  );
}

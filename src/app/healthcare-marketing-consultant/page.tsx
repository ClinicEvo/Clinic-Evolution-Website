import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Breadcrumb from "@/components/sections/Breadcrumb";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import PageHero from "@/components/sections/PageHero";
import HeroStatCard from "@/components/sections/HeroStatCard";
import StatBand from "@/components/sections/StatBand";
import StickyMobileCta from "@/components/ui/StickyMobileCta";

export const metadata = buildMetadata({
  title: "Healthcare Marketing Consultant for Private Clinics",
  description:
    "Clinic Evo provides healthcare marketing consultancy for UK private clinics, helping osteopaths, physios and chiropractors improve SEO, websites and ads.",
  path: "/healthcare-marketing-consultant/",
});

const faqs = [
  {
    question: "What does a healthcare marketing consultant do?",
    answer:
      "A healthcare marketing consultant helps clinics improve the way they attract, convert and retain patients. This can include website strategy, SEO, local search, paid ads, content, patient communication, enquiry tracking and patient reactivation.",
  },
  {
    question: "Is this different from hiring a marketing agency?",
    answer:
      "Yes. A marketing agency usually focuses on delivery, while a consultant can help you decide what should be done first and why. Clinic Evo can support both strategy and delivery, but this page is designed for clinic owners who want a clearer growth plan before committing budget.",
  },
  {
    question: "Do you work with all healthcare businesses?",
    answer:
      "Clinic Evo is focused on private clinics, especially osteopaths, physiotherapists, chiropractors and MSK clinics. This focus means the advice can be more specific to patient journeys, local visibility, service pages, trust signals and booking behaviour.",
  },
  {
    question: "Can you review our existing clinic website?",
    answer:
      "Yes. A website review is often the best starting point. Clinic Evo can assess your service pages, user journey, mobile experience, local SEO, technical issues, calls to action and whether the website is helping or limiting patient enquiries.",
  },
  {
    question: "What should a private clinic fix first in its marketing?",
    answer:
      "Most clinics should start by reviewing their website, local SEO, service pages, booking journey and enquiry tracking. These foundations usually affect every other marketing channel, including Google Ads, social media, content and patient reactivation.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Healthcare Marketing Consultant", href: "/healthcare-marketing-consultant/" },
];

export default function HealthcareMarketingConsultantPage() {
  return (
    <>
      <ServiceSchema
        name="Healthcare Marketing Consultancy"
        description="Specialist healthcare marketing consultancy for UK private clinics, osteopaths, physiotherapists and chiropractors."
        url="/healthcare-marketing-consultant/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="Founder-led strategy for private clinic growth"
        heading={<>Healthcare marketing consultancy <em className="not-italic text-[var(--color-accent)]">built for MSK clinics</em></>}
        subtext="Clinic Evo provides specialist healthcare marketing consultancy for UK private clinics, helping osteopaths, physiotherapists and chiropractors understand what is working, what is holding them back, and where growth is most likely to come from."
        bullets={[
          "Strategy across SEO, websites, Google Ads and reactivation",
          "Built with real clinical and digital growth experience",
          "Clear plan delivered within 5 business days",
        ]}
        primaryCta={{ label: "Get a free clinic audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "Explore services", href: "#strategy-areas" }}
        breadcrumbs={crumbs}
        rightPanel={
          /* "Avg implementation ROI 3.4×" was here and is not a figure we can
             evidence for any clinic. Replaced with what the consultancy
             actually delivers, all of which is checkable against this page. */
          <HeroStatCard
            title="What the consultancy covers"
            stats={[
              { label: "Strategy delivery", value: "5 days", note: "from first session" },
              { label: "Areas reviewed", value: "6", note: "positioning, website, SEO, paid, reactivation, measurement" },
              { label: "Growth roadmap", value: "90 day", note: "clear, prioritised plan" },
            ]}
          />
        }
      />

      {/* Why clinics need specialist marketing */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="max-w-3xl">
            <FadeUp>
              <p className="eyebrow mb-5">The challenge</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Private clinic marketing is different from ordinary local business marketing
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                A clinic does not grow through traffic alone. Patients need trust
                before they book. They compare practitioners, read reviews, check
                symptoms, look for reassurance, assess location and availability,
                and often return to your website several times before making
                contact.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                A healthcare marketing consultant helps you see the full picture:
                your positioning, your website, your search visibility, your local
                presence, your ads, your content, your enquiry process and your
                patient reactivation opportunities.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Strategy areas */}
      <section id="strategy-areas" className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Strategy</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                A clearer growth strategy for your clinic
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Clinic Evo helps clinic owners make better decisions across the
                main areas that affect patient acquisition and retention.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Clinic positioning", desc: "Clarify what your clinic should be known for, which services need stronger visibility, and how to communicate your value without sounding generic." },
              { title: "Website and conversion review", desc: "Identify whether your website explains your services clearly, supports trust, loads quickly, works well on mobile and makes booking easy." },
              { title: "SEO and local visibility", desc: "Review the keywords, pages, local signals and content gaps that could help more patients find your clinic through Google." },
              { title: "Google Ads and paid acquisition", desc: "Assess whether paid search could help you capture high-intent patients, and whether your landing pages are strong enough." },
              { title: "Patient reactivation", desc: "Find opportunities to reconnect with past patients, support follow-up care and improve recall without adding unnecessary admin." },
              { title: "Measurement and priorities", desc: "Turn scattered marketing activity into a practical plan with clearer priorities, better tracking and a more realistic view of what to do first." },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="card-surface flex h-full flex-col p-7 md:p-8">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">{item.title}</h3>
                  <p className="text-body text-[var(--color-muted)]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Proof band */}
      <StatBand
        eyebrow="What consultancy delivers"
        heading="A plan in priority order."
        body="The aim is clarity: a clear view of what to fix first, why it matters and what return it is likely to produce before you commit budget."
        stats={[
          { value: "5 days", label: "From first session to a delivered strategy" },
          { value: "6", label: "Areas reviewed, from positioning through to measurement" },
          { value: "90 days", label: "A clear, prioritised growth roadmap to work from" },
        ]}
      />

      {/* Who this is for */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <p className="eyebrow mb-5">Is this for you?</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                For clinic owners who want senior guidance before spending more money
              </h2>
              <p className="text-body text-[var(--color-muted)]">
                Clinic Evo works especially well for osteopaths, physiotherapists,
                chiropractors and MSK clinics where local search, trust,
                education and booking confidence all matter.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-7 md:p-8">
                <p className="text-label text-[var(--color-accent)] mb-5">This page is for you if:</p>
                <div className="flex flex-col gap-3">
                  {[
                    "You own or manage a private clinic and are not sure what to fix first",
                    "Your website looks acceptable but does not generate enough enquiries",
                    "You have tried SEO, ads or social media without a clear strategy",
                    "You want to grow but do not want to waste budget on disconnected marketing activity",
                    "You need an experienced view of your clinic\u2019s digital presence before committing to a bigger project",
                    "You want marketing advice that understands patient journeys, not only clicks and impressions",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-1 text-[var(--color-accent)]" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-body-sm text-[var(--color-muted)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why Clinic Evo */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="max-w-3xl">
            <FadeUp>
              <p className="eyebrow mb-5">Why Clinic Evo</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Advice from people who run a clinic
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                Many marketing consultants understand campaigns. Fewer understand
                how patients choose a private clinic. Clinic Evo brings together
                clinical understanding, digital growth experience and practical
                website strategy.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                The aim is not to overwhelm you with a long list of marketing
                tactics. The aim is to show you what is most likely to improve
                enquiries, bookings and patient relationships.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Services</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Practical support across your clinic&apos;s digital growth system
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "SEO for clinics",
                desc: "Improve the pages, keywords, local signals and content structure that help patients find your clinic through Google.",
                href: "/seo-for-clinics/",
                cta: "SEO for Clinics",
              },
              {
                title: "Clinic website design",
                desc: "Create or improve a website that explains your services clearly and makes it easier for patients to book.",
                href: "/website-design-for-clinics/",
                cta: "Clinic Website Design",
              },
              {
                title: "Google Ads for clinics",
                desc: "Build paid search campaigns around high-intent enquiries, with landing pages designed to convert.",
                href: "/google-ads-for-clinics/",
                cta: "Google Ads for Clinics",
              },
              {
                title: "AI patient reactivation",
                desc: "Use smarter systems to reconnect with past patients and support recall, follow-up and retention.",
                href: "/ai-integration/",
                cta: "AI Patient Reactivation",
              },
              {
                title: "Marketing for osteopaths",
                desc: "Build growth plans for osteopaths based on the way patients search and book osteopathic care.",
                href: "/osteopath-marketing/",
                cta: "Marketing for Osteopaths",
              },
              {
                title: "Physiotherapy marketing",
                desc: "Growth plans for physiotherapy clinics based on private patient search and booking behaviour.",
                href: "/physiotherapy-marketing/",
                cta: "Physiotherapy Marketing",
              },
            ].map((s, i) => (
              <FadeUp key={s.href} delay={i * 0.07}>
                <Link href={s.href} className="card-surface group flex h-full flex-col p-7 md:p-8">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">{s.title}</h3>
                  <p className="text-body text-[var(--color-muted)] mb-4 flex-1">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-text)] transition-colors duration-150 group-hover:text-[var(--color-accent-dim)]">
                    {s.cta}
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

      {/* Founder-led strategy */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">Strategy first</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Senior advice before you commit to the wrong marketing activity
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  A lot of clinics spend money on marketing before the
                  fundamentals are clear. They pay for ads before the landing page
                  is ready. They post on social media while their core service
                  pages are weak. They redesign their website without checking
                  search demand.
                </p>
                <p className="text-body text-[var(--color-muted)]">
                  Clinic Evo helps you avoid that problem by starting with
                  strategy. The first step is to look at your current position,
                  your competitors, your website, your Google visibility, your
                  patient journey and your missed opportunities.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Link href="/case-studies/bodyfunction-clinic/" className="card-surface group block p-8">
                <p className="text-label text-[var(--color-accent)] mb-4">Proof</p>
                <h3 className="text-h3 text-[var(--color-ink)] mb-4">
                  Where the advice comes from
                </h3>
                <p className="text-body text-[var(--color-muted)] mb-6">
                  Clinic Evo&apos;s approach is shaped by hands-on work with
                  private clinics, including Bodyfunction Clinic. The focus is
                  on strengthening the digital foundations that actually influence
                  patient growth.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-text)] transition-colors duration-150 group-hover:text-[var(--color-accent-dim)]">
                  Read the Bodyfunction Clinic case study
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-150 group-hover:translate-x-0.5">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </FadeUp>
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
                  Healthcare marketing consultant FAQs
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
        id="closing-cta"
        heading="Start with a free clinic marketing audit"
        subheading="Your free clinic audit will review your website, search visibility, patient journey and obvious growth gaps. You will come away with practical recommendations."
      />

      <StickyMobileCta hideNearId="closing-cta" />
    </>
  );
}

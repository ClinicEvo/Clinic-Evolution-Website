import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ProcessSteps from "@/components/sections/ProcessSteps";
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
        secondaryCta={{ label: "See how it works", href: "#what-we-improve" }}
        breadcrumbs={crumbs}
        rightPanel={
          <HeroStatCard
            title="Osteopath clinic results"
            stats={[
              { label: "New patient enquiries", value: "2.4×", note: "6-month average" },
              { label: "Avg cost per new patient", value: "£68", note: "osteo clinic average" },
              { label: "Patient course value", value: "£900+", note: "typical care plan" },
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
                <p className="eyebrow mb-5">Why Clinic Evo</p>
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
                <h3 className="text-h3 text-[var(--color-ink)] mb-6">
                  Built around how osteopathy patients decide
                </h3>
                <div className="flex flex-col gap-5">
                  {[
                    { label: "Acute pain searches", desc: "Reaching people searching in discomfort who want to book quickly and locally." },
                    { label: "Trust before booking", desc: "Explaining your approach, practitioners and treatment clearly so patients feel confident." },
                    { label: "Long-term care plans", desc: "Supporting rebooking and maintenance visits, not just the first appointment." },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-semibold text-[var(--color-ink)] text-sm mb-1">{item.label}</p>
                      <p className="text-body-sm text-[var(--color-muted)]">{item.desc}</p>
                    </div>
                  ))}
                </div>
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

      {/* Growth system */}
      <section id="what-we-improve" className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Growth system</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                A stronger website, clearer SEO and smarter patient follow-up
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Osteopathy marketing works best when every part of your digital
                presence supports the next. Your SEO brings in relevant search
                traffic, your website turns that traffic into enquiries, your ads
                accelerate demand and your follow-up brings the right patients back.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Improve visibility for high-intent searches",
                desc: "We help your clinic rank for local osteopath searches, condition-led queries and treatment-specific terms that match real patient demand.",
                icon: <><circle cx="11" cy="11" r="7" /><path d="M16.5 16.5L20 20" /></>,
              },
              {
                title: "Build patient trust before they enquire",
                desc: "We improve how your website explains your treatments, practitioners, approach, reviews, location and booking process.",
                icon: <><path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.7 7.1 18.2l.9-5.5-4-3.9 5.5-.8L12 3z" /></>,
              },
              {
                title: "Run campaigns that focus on enquiries",
                desc: "Google Ads and social campaigns support growth when they are connected to clear landing pages and proper conversion tracking, not just clicks.",
                icon: <><path d="M4 15l5-5 4 4 6-8" /></>,
              },
              {
                title: "Reconnect with lapsed patients",
                desc: "AI patient reactivation identifies and re-engages people who may need follow-up care, maintenance appointments or support with recurring issues.",
                icon: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></>,
              },
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

      {/* Services for osteopaths */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Services</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Marketing services for osteopaths
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Focused digital support across the areas most likely to improve
                visibility, enquiries, bookings and patient retention for your
                osteopathy practice.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "SEO for Osteopaths", desc: "Technical and content SEO that ranks your practice for local and condition-specific searches.", href: "/seo-for-clinics/", cta: "Explore SEO for clinics", icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 9h10M7 13h6" /></> },
              { title: "Google Ads for Osteopaths", desc: "Patient-ready campaigns targeting people actively searching for osteopathic treatment.", href: "/google-ads-for-clinics/", cta: "Explore Google Ads for clinics", icon: <><path d="M4 15l5-5 4 4 6-8" /><path d="M19 6v4h-4" /></> },
              { title: "Osteopath Website Design", desc: "Fast, trust-building websites designed specifically to convert visitors into new patients.", href: "/website-design-for-clinics/", cta: "Explore clinic website design", icon: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8" /></> },
              { title: "AI Patient Reactivation", desc: "Re-engage patients who haven't visited in months with personalised automated messages.", href: "/ai-integration/", cta: "Explore AI patient reactivation", icon: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></> },
              { title: "Local SEO", desc: "Strengthen the local signals and Google Business Profile that help you win 'near me' searches.", href: "/seo-for-clinics/", cta: "Explore local SEO", icon: <><path d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></> },
              { title: "Free clinic audit", desc: "A clear, prioritised review of where your clinic is losing visibility, enquiries and rebookings.", href: "/free-clinic-audit/", cta: "Get a free clinic audit", icon: <><path d="M5 12h14M13 6l6 6-6 6" /></> },
            ].map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.07}>
                <div className="card-surface flex h-full flex-col p-7 md:p-8">
                  <div className="mb-5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{s.icon}</svg>
                  </div>
                  <h3 className="text-h4 text-[var(--color-ink)] mb-2">{s.title}</h3>
                  <p className="text-body text-[var(--color-muted)] mb-4 flex-1">{s.desc}</p>
                  <ArrowLink href={s.href}>{s.cta}</ArrowLink>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why generic marketing is not enough */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">Specialist focus</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Why generic marketing does not work well for osteopathy clinics
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  A generic agency may understand websites, traffic or paid ads. That
                  does not mean they understand the hesitations patients feel before
                  booking with an osteopath.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Osteopathy patients often want reassurance. They may be comparing
                  osteopaths with physios, chiropractors and NHS pathways. They may be
                  unsure what treatment involves, how many sessions they need or
                  whether the clinic feels credible.
                </p>
                <p className="text-body text-[var(--color-muted)]">
                  Your website and marketing need to answer those questions clearly,
                  without overpromising, using language that respects both patient
                  concerns and professional standards.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-8">
                <h3 className="text-h3 text-[var(--color-ink)] mb-6">
                  Built for clinic owners who want practical growth
                </h3>
                <div className="flex flex-col gap-5">
                  {[
                    {
                      label: "Specialist MSK clinic focus",
                      desc: "The strategy is built around osteopaths, physiotherapists, chiropractors and private MSK clinics, not every possible business category.",
                    },
                    {
                      label: "Patient journey thinking",
                      desc: "We look at how patients move from search to service page, from service page to enquiry, and from past treatment to future rebooking.",
                    },
                    {
                      label: "SEO-first website structure",
                      desc: "Pages are planned around search demand, local relevance, patient questions and conversion intent.",
                    },
                    {
                      label: "Clear, commercially useful recommendations",
                      desc: "The goal is not marketing noise. It is the work most likely to improve patient acquisition and clinic growth.",
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-semibold text-[var(--color-ink)] text-sm mb-1">{item.label}</p>
                      <p className="text-body-sm text-[var(--color-muted)]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Case study teaser */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">Proof</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  3× new patient enquiries for a London osteopathy practice
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  A London osteopathy practice increased their monthly new patient
                  enquiries threefold within 6 months through targeted local SEO and
                  a rebuilt, conversion-focused website.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-6">
                  The <a href="/case-studies/bodyfunction-clinic/" className="text-[var(--color-accent)] hover:underline">Bodyfunction Clinic case study</a> shows
                  how focused website, SEO and patient journey improvements support a
                  stronger private clinic growth strategy.
                </p>
                <ArrowLink href="/case-studies/bodyfunction-clinic/">
                  Read the full case study
                </ArrowLink>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-10 text-center">
                <p className="text-display text-[var(--color-accent)] font-bold mb-2">3×</p>
                <p className="text-body text-[var(--color-muted)]">new patient enquiries</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <p className="eyebrow mb-5">How it works</p>
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
                <p className="eyebrow mb-5">FAQ</p>
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

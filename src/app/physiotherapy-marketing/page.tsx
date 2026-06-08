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
  title: "Physiotherapy Marketing UK | Grow Your Physio Practice",
  description:
    "Specialist marketing for UK physiotherapists. SEO, Google Ads and website design that attracts more patients to your physio clinic. Book a free clinic audit.",
  path: "/physiotherapy-marketing/",
});

const faqs = [
  {
    question: "How do you help physiotherapy clinics compete with the NHS?",
    answer:
      "We focus on the things that differentiate private physio: speed of access, specialist expertise, and personalised care. Our SEO strategies target patients actively seeking private treatment, and our ad campaigns highlight your unique advantages.",
  },
  {
    question: "Which physiotherapy keywords do you target?",
    answer:
      "We research and target the full spectrum, from broad terms like 'physiotherapist near me' and 'private physio [city]' to condition-specific queries like 'sports injury physio' and 'post-operative rehabilitation'. Keyword strategy is tailored to your specialisms.",
  },
  {
    question: "Can you help with sports physiotherapy marketing specifically?",
    answer:
      "Yes. Sports physio marketing requires different messaging and targeting than general physiotherapy. We create campaigns and content that speak directly to athletes, gym-goers and active people seeking specialist sports rehabilitation.",
  },
  {
    question: "How much do physiotherapy Google Ads cost?",
    answer:
      "Ad spend varies by location and competition. In London, expect £800–£1,500/month in ad spend to generate meaningful appointment volumes. Outside major cities, £400–£800/month is often sufficient. We provide detailed projections in your free audit.",
  },
  {
    question: "Do you sign long contracts?",
    answer:
      "No. We work on rolling monthly arrangements with 30 days' notice. We believe in earning your business every month through results, not locking you in.",
  },
];

const steps = [
  {
    number: 1,
    title: "Free clinic audit",
    description:
      "We review your website, Google Business Profile, local search rankings, and existing ad performance to identify your biggest opportunities.",
  },
  {
    number: 2,
    title: "Tailored growth plan",
    description:
      "You receive a clear, jargon-free strategy covering the right channels for your practice, content opportunities, and how we'll convert more visitors into bookings.",
  },
  {
    number: 3,
    title: "Campaign launch",
    description:
      "We build and launch your SEO foundations, Google Ads campaigns, or website, depending on your plan. You'll see new patient enquiries flowing within weeks of your ads going live.",
  },
  {
    number: 4,
    title: "Ongoing management & reporting",
    description:
      "Monthly reporting in plain English. We continuously optimise what's working and give you the data you need to make good decisions about your marketing budget.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Who We Help", href: "/#who-we-help" },
  { label: "Physiotherapists", href: "/physiotherapy-marketing/" },
];

export default function PhysiotherapyMarketingPage() {
  return (
    <>
      <ServiceSchema
        name="Physiotherapy Marketing"
        description="Specialist digital marketing for UK physiotherapy practices including SEO, Google Ads, and website design."
        url="/physiotherapy-marketing/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="Physiotherapy marketing for UK practices"
        heading={<>More patients for your <em className="not-italic text-[var(--color-accent)]">physiotherapy clinic</em>, predictably</>}
        subtext="We help UK physiotherapists grow their private practice through specialist SEO, targeted Google Ads and high-converting websites, built around how physio patients search, compare and book."
        bullets={[
          "SEO, ads and website design for physio clinics",
          "Results tracked to enquiries and bookings",
          "No long-term lock-in contracts",
        ]}
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "See how it works", href: "#what-we-improve" }}
        breadcrumbs={crumbs}
        rightPanel={
          <HeroStatCard
            title="Physio clinic results"
            stats={[
              { label: "Enquiry increase", value: "2.3×", note: "in the first 90 days" },
              { label: "Avg cost per new patient", value: "£72", note: "physio clinic average" },
              { label: "12-month patient retention", value: "78%", note: "return within a year" },
            ]}
          />
        }
      />

      {/* Why Clinic Evo */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">Why Clinic Evo</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Physio marketing that speaks your language
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Physiotherapy covers a huge range of specialisms, from sports
                  rehabilitation to neurological rehab, women&apos;s health to
                  paediatric physio. Generic marketing agencies treat them all the
                  same. We don&apos;t.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-8">
                  We tailor your marketing to your specific specialisms, your local
                  competitive landscape, and the types of patients you most want to
                  attract.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "Local SEO to rank above NHS listings for private treatment searches",
                    "Targeted PPC for sports injury, post-surgical rehab, and specialist conditions",
                    "Patient reactivation to convert discharged patients into returning ones",
                    "Websites built for health and care, not just aesthetics",
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
                  Specialisms we help clinics grow
                </h3>
                <div className="flex flex-col gap-5">
                  {[
                    { label: "Sports rehabilitation", desc: "Targeting athletes and gym-goers who need fast, specialist care." },
                    { label: "Post-operative rehab", desc: "Reaching patients after surgery who need quality private follow-up." },
                    { label: "Chronic pain & MSK", desc: "Content that builds trust with patients managing long-term conditions." },
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
        eyebrow="What physio clinics see"
        heading="Specialist marketing that fills specialist diaries."
        body="From sports rehab to post-surgical care, we tie every channel back to booked appointments and patients who keep coming back."
        stats={[
          { value: "+19", label: "Average increase in new patients per month" },
          { value: "2.9×", label: "Average organic traffic growth over six months" },
          { value: "Top 3", label: "Google Maps ranking for local physio searches" },
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
                Physiotherapy marketing works best when every part of your digital
                presence supports the next. Your SEO brings in relevant search
                traffic, your website turns that traffic into enquiries, your ads
                accelerate demand and your follow-up brings discharged patients back.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Rank above NHS and generic listings",
                desc: "We target local physio searches, specialism-led queries and condition-specific terms so private patients find you first.",
                icon: <><circle cx="11" cy="11" r="7" /><path d="M16.5 16.5L20 20" /></>,
              },
              {
                title: "Build patient trust before they enquire",
                desc: "We improve how your website explains your specialisms, practitioners, approach, reviews, location and booking process.",
                icon: <><path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.7 7.1 18.2l.9-5.5-4-3.9 5.5-.8L12 3z" /></>,
              },
              {
                title: "Run campaigns that focus on enquiries",
                desc: "Targeted PPC for sports injury, post-surgical rehab and specialist conditions, connected to clear landing pages and proper conversion tracking.",
                icon: <><path d="M4 15l5-5 4 4 6-8" /></>,
              },
              {
                title: "Reconnect with discharged patients",
                desc: "Patient reactivation identifies and re-engages people who may need follow-up care, ongoing rehab or support with recurring issues.",
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

      {/* Services */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Services</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Marketing services for physiotherapists
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Focused digital support across the areas most likely to improve
                visibility, enquiries, bookings and patient retention for your physio
                clinic.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "SEO for Physiotherapists", desc: "Rank for local searches and specialty-specific queries that bring in the patients you want.", href: "/seo-for-clinics/", cta: "Explore SEO for Clinics", icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 9h10M7 13h6" /></> },
              { title: "Google Ads for Physio Clinics", desc: "Targeted PPC campaigns that drive booked appointments, not just clicks.", href: "/google-ads-for-clinics/", cta: "Explore Google Ads for Clinics", icon: <><path d="M4 15l5-5 4 4 6-8" /><path d="M19 6v4h-4" /></> },
              { title: "Physiotherapy Website Design", desc: "Professional, fast websites that convert visitors into new patients.", href: "/website-design-for-clinics/", cta: "Explore Clinic Website Design", icon: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8" /></> },
              { title: "Patient Reactivation", desc: "Re-engage discharged and lapsed patients automatically with personalised AI messages.", href: "/ai-integration/", cta: "Explore AI Patient Reactivation", icon: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></> },
              { title: "Local SEO", desc: "Strengthen the local signals and Google Business Profile that help you win 'near me' searches.", href: "/seo-for-clinics/", cta: "Explore Local SEO", icon: <><path d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></> },
              { title: "Free clinic audit", desc: "A clear, prioritised review of where your clinic is losing visibility, enquiries and rebookings.", href: "/free-clinic-audit/", cta: "Get a Free Clinic Audit", icon: <><path d="M5 12h14M13 6l6 6-6 6" /></> },
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
                  Why generic marketing does not work well for physio clinics
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  A generic agency may understand websites, traffic or paid ads. That
                  does not mean they understand how private physio patients choose, or
                  the barriers they feel before booking.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Physio patients often weigh private care against the NHS, compare
                  specialisms, and want to know whether a clinic treats their specific
                  condition. Sports rehab, post-surgical care and chronic pain each
                  need different messaging.
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
                      desc: "The strategy is built around physiotherapists, osteopaths, chiropractors and private MSK clinics, not every possible business category.",
                    },
                    {
                      label: "Patient journey thinking",
                      desc: "We look at how patients move from search to service page, from service page to enquiry, and from discharge to ongoing rehab.",
                    },
                    {
                      label: "SEO-first website structure",
                      desc: "Pages are planned around search demand, specialism relevance, patient questions and conversion intent.",
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
                  Proof from real private clinic growth work
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Clinic Evo&apos;s approach is shaped by real work with private MSK
                  clinics, including Bodyfunction Clinic. The focus was to improve the
                  digital foundation, strengthen service pages, make the patient
                  journey clearer and build smarter systems for growth.
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
                A clear path to more patients
              </h2>
              <p className="text-body text-[var(--color-muted)]">
                We keep the process simple and jargon-free so you can focus on
                running your clinic.
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
                  Questions from physiotherapy clinic owners
                </h2>
              </div>
            </FadeUp>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to grow your physiotherapy practice?"
        subheading="Book a free clinic audit and get a personalised growth plan for your clinic."
      />
    </>
  );
}

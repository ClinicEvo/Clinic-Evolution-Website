import Link from "next/link";
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
import HeroImagePlaceholder from "@/components/sections/HeroImagePlaceholder";
import StatBand from "@/components/sections/StatBand";
import Image from "next/image";

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
    note: "Most clinic owners tell us the audit alone gave them useful clarity, even before we start any work together.",
  },
  {
    number: 2,
    title: "Custom growth strategy",
    description:
      "You receive a clear, prioritised plan covering which channels to focus on, what content to create, and how to convert more website visitors into booked appointments.",
    note: "You'll see exactly what we'd focus on and why — no obligation to proceed.",
  },
  {
    number: 3,
    title: "Implementation & management",
    description:
      "We handle everything: technical SEO, content, Google Ads management, and reporting. You stay focused on patient care while we handle the marketing.",
    note: "You focus on treating patients. We handle every technical and content detail.",
  },
  {
    number: 4,
    title: "Monthly reporting & refinement",
    description:
      "Every month you receive a plain-English report covering rankings, traffic, enquiries and ad performance. We continuously refine based on what's working.",
    note: "No jargon, no vanity metrics — just numbers tied to enquiries and booked appointments.",
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
        rightPanel={<HeroImagePlaceholder src="/images/hero/osteopathy-hero.jpg" alt="Osteopath treating a patient" />}
      />

      {/* Why Clinic Evo for osteopaths */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 items-center">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">Why Clinic Evo</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Marketing that understands osteopathy
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5 max-w-xl">
                  Generic marketing agencies don&apos;t understand the nuances of
                  osteopathic care, the patient journey from acute pain to long-term
                  wellness, the role of word-of-mouth and referrals, or how patients
                  search when they&apos;re in discomfort.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-8 max-w-xl">
                  We work exclusively with musculoskeletal clinics. That means every
                  strategy, every piece of content, and every ad campaign is built
                  around what actually works for osteopaths in the UK.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                  {[
                    { text: "Rank for 'osteopath near me' and condition-specific searches", icon: <><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L20 20"/></> },
                    { text: "Google Ads targeting back pain, neck pain, and sports injury keywords", icon: <><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 8v4l3 2"/></> },
                    { text: "Websites designed to convert visitors into booked appointments", icon: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8"/></> },
                    { text: "AI patient reactivation to bring lapsed patients back", icon: <><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0115-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 01-15 6.7L3 16"/></> },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-9 w-9 rounded-[var(--radius-sm)] bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{item.icon}</svg>
                      </div>
                      <span className="text-sm font-medium text-[var(--color-ink)] leading-snug pt-1">{item.text}</span>
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
                    { icon: <path d="M13 10V3L4 14h7v7l9-11h-7z"/>, label: "Acute pain searches", desc: "Reaching people searching in discomfort who want to book quickly and locally." },
                    { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, label: "Trust before booking", desc: "Explaining your approach, practitioners and treatment clearly so patients feel confident." },
                    { icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>, label: "Long-term care plans", desc: "Supporting rebooking and maintenance visits, not just the first appointment." },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex-shrink-0 h-9 w-9 rounded-[var(--radius-sm)] bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{item.icon}</svg>
                      </div>
                      <div>
                        <p className="font-semibold text-[var(--color-ink)] text-sm mb-1">{item.label}</p>
                        <p className="text-body-sm text-[var(--color-muted)]">{item.desc}</p>
                      </div>
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
          { value: "70%", label: "Average increase in new patients per month" },
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
              { title: "SEO for Osteopaths", desc: "Technical and content SEO that ranks your practice for local and condition-specific searches.", href: "/seo-for-clinics/", cta: "Explore SEO for Clinics", icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 9h10M7 13h6" /></> },
              { title: "Google Ads for Osteopaths", desc: "Patient-ready campaigns targeting people actively searching for osteopathic treatment.", href: "/google-ads-for-clinics/", cta: "Explore Google Ads for Clinics", icon: <><path d="M4 15l5-5 4 4 6-8" /><path d="M19 6v4h-4" /></> },
              { title: "Osteopath Website Design", desc: "Fast, trust-building websites designed specifically to convert visitors into new patients.", href: "/website-design-for-clinics/", cta: "Explore Clinic Website Design", icon: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8" /></> },
              { title: "AI Patient Reactivation", desc: "Re-engage patients who haven't visited in months with personalised automated messages.", href: "/ai-integration/", cta: "Explore AI Patient Reactivation", icon: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></> },
              { title: "Local SEO", desc: "Strengthen the local signals and Google Business Profile that help you win 'near me' searches.", href: "/seo-for-clinics/", cta: "Explore Local SEO", icon: <><path d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></> },
              { title: "Social media paid ads", desc: "Facebook and Instagram campaigns targeting local osteopathy patients by condition, age and location, built to fill specific treatment slots rather than chase generic brand awareness.", href: "/google-ads-for-clinics/", cta: "Paid Ads for Clinics", icon: <><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></> },
            ].map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.07}>
                <Link href={s.href} className="card-surface group flex h-full flex-col p-7 md:p-8">
                  <div className="mb-5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{s.icon}</svg>
                  </div>
                  <h3 className="text-h4 text-[var(--color-ink)] mb-2">{s.title}</h3>
                  <p className="text-body text-[var(--color-muted)] mb-4 flex-1">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-colors duration-150 group-hover:text-[var(--color-accent-dim)]">
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
                <p className="text-body text-[var(--color-muted)] mb-5">
                  The <a href="/case-studies/bodyfunction-clinic/" className="text-[var(--color-accent)] hover:underline">Bodyfunction Clinic case study</a> shows
                  how focused website, SEO and patient journey improvements support a
                  stronger private clinic growth strategy.
                </p>
                <blockquote className="border-l-2 border-[var(--color-accent)] pl-4 mb-6">
                  <p className="text-body-lg text-[var(--color-ink)] italic mb-2">
                    &ldquo;We&apos;d tried two agencies before. This was the first time someone actually understood how our patients think.&rdquo;
                  </p>
                  <cite className="text-sm font-semibold text-[var(--color-muted)] not-italic">— Danny, Bodyfunction Clinic</cite>
                </blockquote>
                <ArrowLink href="/case-studies/bodyfunction-clinic/">
                  Read the full clinic story
                </ArrowLink>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="relative overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/bodyfunction-clinic-team-at-reception-01.png"
                  alt="Bodyfunction Clinic — London osteopathy practice"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/80 via-[var(--color-ink)]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display font-bold text-4xl text-white mb-1">3×</p>
                  <p className="text-sm text-white/90 font-medium">new patient enquiries in 6 months</p>
                </div>
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
              <p className="text-body text-[var(--color-muted)] mb-4">
                A clear, transparent process with no jargon and no long lock-in
                contracts.
              </p>
              <p className="text-body-sm text-[var(--color-muted)]">
                Not ready to start?{" "}
                <a href="/case-studies/bodyfunction-clinic/" className="text-[var(--color-accent)] hover:underline font-medium">
                  See how it worked for a real clinic first.
                </a>
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
                  Common questions from osteopaths
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
        heading="Ready to grow your osteopathy practice?"
        subheading="Get a clear picture of your current visibility, website performance and missed enquiries — delivered within 2 business days."
        primaryLabel="See what's holding your clinic back"
        primaryHref="/free-clinic-audit/"
      />
    </>
  );
}

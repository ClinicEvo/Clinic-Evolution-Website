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
  title: "SEO for Chiropractors UK | Chiropractic Marketing",
  description:
    "Clinic Evo helps UK chiropractors attract more patients with specialist chiropractic marketing, SEO, clinic website design, Google Ads and patient reactivation.",
  path: "/chiropractic-marketing/",
});

const faqs = [
  {
    question: "What is chiropractic marketing?",
    answer:
      "Chiropractic marketing is the strategy used to help chiropractic clinics attract, convert and retain patients. It usually includes SEO, local search, website design, Google Ads, patient education content, reviews, booking optimisation, social media and patient reactivation.",
  },
  {
    question: "How can SEO help a chiropractic clinic?",
    answer:
      "SEO helps a chiropractic clinic appear when people search for chiropractors, treatment options, condition support and local clinic information. Strong SEO can reduce reliance on referrals and create a more consistent source of patient enquiries over time.",
  },
  {
    question: "Are Google Ads useful for chiropractors?",
    answer:
      "Google Ads can be useful for chiropractors when campaigns target high-intent searches and send visitors to relevant landing pages. They usually work best when the clinic website is clear, fast and easy to book from.",
  },
  {
    question: "Does Clinic Evo build websites for chiropractic clinics?",
    answer:
      "Yes. Clinic Evo helps chiropractic clinics create clearer, more conversion-focused websites that support SEO, patient education, trust-building and online booking.",
  },
  {
    question: "Can Clinic Evo help with chiropractic social media marketing?",
    answer:
      "Yes. Clinic Evo can help chiropractic clinics use clearer educational content, social media ads and patient-focused messaging to support awareness, trust and enquiries.",
  },
];

const steps = [
  {
    number: 1,
    title: "Free clinic audit",
    description:
      "We review your website, SEO, local search presence, patient journey, competitors and main growth opportunities. You come away with practical, prioritised recommendations.",
    note: "Many clinic owners tell us the audit gave them a clearer picture of their online presence than anything they'd had before.",
  },
  {
    number: 2,
    title: "Custom growth strategy",
    description:
      "You receive a clear plan covering which channels to focus on, what content to create, and how to convert more website visitors into booked chiropractic appointments.",
    note: "You'll see exactly which channels make sense for your clinic and why \u2014 no pressure to proceed.",
  },
  {
    number: 3,
    title: "Implementation & management",
    description:
      "We handle everything: technical SEO, content, Google Ads management, website improvements and reporting. You stay focused on patient care while we drive growth.",
    note: "We manage all the work. You keep your focus on patient care while we drive enquiries.",
  },
  {
    number: 4,
    title: "Monthly reporting & refinement",
    description:
      "Every month you receive a plain-English report covering rankings, traffic, enquiries and ad performance. We continuously refine based on what's working.",
    note: "No dense reports or vanity metrics \u2014 just honest numbers tied to enquiries and bookings.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Who We Help", href: "/#who-we-help" },
  { label: "Chiropractors", href: "/chiropractic-marketing/" },
];

export default function ChiropracticMarketingPage() {
  return (
    <>
      <ServiceSchema
        name="Chiropractic Marketing"
        description="Specialist digital marketing for UK chiropractic clinics including SEO, Google Ads, website design and patient reactivation."
        url="/chiropractic-marketing/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="Chiropractic marketing for UK clinics"
        heading={<>SEO and marketing for chiropractors who want <em className="not-italic text-[var(--color-accent)]">more of the right patients</em></>}
        subtext="Clinic Evo helps chiropractic clinics improve online visibility, attract better enquiries and build a clearer route from search to booked appointment, built around how people actually choose a chiropractor."
        bullets={[
          "Local SEO and Google Ads for chiro clinics",
          "Conversion-focused website design",
          "AI patient reactivation systems",
        ]}
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "See how it works", href: "#what-we-improve" }}
        breadcrumbs={crumbs}
        rightPanel={<HeroImagePlaceholder src="/images/hero/chiropractor-hero.jpg" alt="Chiropractor treating a patient" />}
      />

      {/* Problem and positioning */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 items-center">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">The challenge</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Chiropractic marketing built around trust, visibility and patient acquisition
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5 max-w-xl">
                  Chiropractic clinics face a particular challenge online. Many
                  potential patients are searching because they are in pain,
                  frustrated by recurring symptoms, or unsure which type of
                  practitioner they should see.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-5 max-w-xl">
                  They may compare chiropractors with osteopaths, physiotherapists,
                  massage therapists, NHS pathways and private pain clinics. They
                  may also have questions about safety, treatment approach, reviews,
                  qualifications and whether chiropractic care is right for their
                  problem.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-5 max-w-xl">
                  That means your marketing needs to do more than drive traffic. It
                  needs to build trust quickly, explain your clinical value clearly
                  and make the next step feel easy.
                </p>
                <p className="text-body text-[var(--color-muted)] max-w-xl">
                  Clinic Evo helps chiropractic clinics create a clearer digital
                  presence that supports search visibility, patient confidence and
                  enquiry growth.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-8">
                <h3 className="text-h3 text-[var(--color-ink)] mb-6">
                  Why referrals alone aren&apos;t enough
                </h3>
                <div className="flex flex-col gap-5">
                  {[
                    { icon: <><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></>, label: "Referrals have a ceiling", desc: "Word of mouth is valuable but not a complete growth system — vulnerable when competition rises or referral sources slow down." },
                    { icon: <><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L20 20"/></>, label: "Patients still search first", desc: "Even referred patients check your website, read reviews and decide whether they feel confident enough to book." },
                    { icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>, label: "Marketing that works on both", desc: "Good chiropractic marketing supports new patient acquisition and referral conversion — helping more people find you, trust you and take action." },
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
        eyebrow="What chiropractic clinics see"
        heading="Less reliance on referrals. More patients who find you first."
        body="We build the digital foundation that turns searches into enquiries and one-off visits into long-term chiropractic patients."
        stats={[
          { value: "2.8×", label: "Average enquiry increase in the first 90 days" },
          { value: "31", label: "Local keywords ranking in the top three positions" },
          { value: "£2,800+", label: "Average lifetime value of a long-term chiro patient" },
        ]}
      />

      {/* Growth system */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Growth system</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                A stronger website, clearer SEO and smarter patient follow-up
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Chiropractic marketing works best when the main parts of your
                digital presence support each other. Your SEO brings in relevant
                search traffic. Your website converts that traffic into enquiries.
                Your Google Ads can accelerate demand. Your follow-up systems help
                suitable past patients return.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Improve visibility for high-intent searches",
                desc: "We help your clinic target searches such as local chiropractic care, treatment-related searches and service-led keywords that match real patient demand.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M15.5 15.5L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Build patient trust before they enquire",
                desc: "We improve the way your website explains your services, practitioners, approach, reviews, location, pricing and booking process.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M11 2l2.5 5 5.5.8-4 3.9.9 5.5L11 14.7 6.1 17.2l.9-5.5-4-3.9 5.5-.8L11 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Create campaigns that focus on enquiries",
                desc: "Google Ads and social media ads can support chiropractic growth, but only when they are connected to clear landing pages and proper conversion tracking.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M3 14l5-5 4 4 5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Reconnect with suitable past patients",
                desc: "Patient reactivation systems help clinics identify and re-engage people who may need follow-up care, maintenance appointments or support with recurring issues.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M11 3a8 8 0 100 16A8 8 0 0011 3z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M11 7v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="card-surface flex h-full flex-col p-7 md:p-8">
                  <div className="text-[var(--color-accent)] mb-4">{item.icon}</div>
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">{item.title}</h3>
                  <p className="text-body text-[var(--color-muted)]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Services for chiropractors */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Services</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                How Clinic Evo helps chiropractors grow online
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Clinic Evo gives chiropractic clinics focused digital support across
                the areas most likely to improve visibility, enquiries, bookings
                and patient retention.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "SEO for chiropractors",
                desc: "Improve your organic visibility for local searches, chiropractic services, condition-led searches and high-intent patient queries.",
                href: "/seo-for-clinics/",
                cta: "Explore SEO for Clinics",
              },
              {
                title: "Chiropractic website design",
                desc: "Create a clearer, faster and more trustworthy website that explains your approach and helps patients book with confidence.",
                href: "/website-design-for-clinics/",
                cta: "Explore Clinic Website Design",
              },
              {
                title: "Chiropractic Google Ads",
                desc: "Reach people actively searching for chiropractic care and build campaigns around enquiries, bookings and measurable patient acquisition.",
                href: "/google-ads-for-clinics/",
                cta: "Explore Google Ads for Clinics",
              },
              {
                title: "Chiropractic social media marketing",
                desc: "Use clearer messaging, educational content and targeted campaigns to support awareness, trust and conversion for your clinic.",
                href: "/free-clinic-audit/",
                cta: "Get a Free Clinic Audit",
              },
              {
                title: "AI patient reactivation",
                desc: "Reconnect with suitable past patients using smarter recall and follow-up systems that support long-term clinic growth.",
                href: "/ai-integration/",
                cta: "Explore AI Patient Reactivation",
              },
            ].map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.07}>
                <Link href={s.href} className="card-surface group flex h-full flex-col p-7 md:p-8">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">{s.title}</h3>
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
                  Why generic marketing does not work well for chiropractic clinics
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  A generic marketing agency may understand websites, traffic or
                  paid ads. That does not mean they understand the barriers patients
                  feel before booking with a chiropractor.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Chiropractic patients often want reassurance. They may be
                  comparing different types of MSK care. They may be unsure what
                  treatment involves, whether it is suitable for them, how many
                  sessions they might need or whether the clinic feels credible.
                </p>
                <p className="text-body text-[var(--color-muted)]">
                  Your website and marketing need to answer those questions clearly
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
                      desc: "The goal is not to create marketing noise. It is to identify the work most likely to improve patient acquisition and clinic growth.",
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
                  Proof from real clinic growth work
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Clinic Evo&apos;s approach is shaped by real work with private
                  clinics, including Bodyfunction Clinic. The focus was to improve
                  the digital foundation, strengthen service pages, make the
                  patient journey clearer and build smarter systems for growth.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  The <a href="/case-studies/bodyfunction-clinic/" className="text-[var(--color-accent)] hover:underline">Bodyfunction Clinic case study</a> shows
                  how focused website, SEO and patient journey improvements can
                  support a stronger private clinic growth strategy.
                </p>
                <blockquote className="border-l-2 border-[var(--color-accent)] pl-4 mb-6">
                  <p className="text-body-lg text-[var(--color-ink)] italic mb-2">
                    &ldquo;We&apos;d tried two agencies before. This was the first time someone actually understood how our patients think.&rdquo;
                  </p>
                  <cite className="text-sm font-semibold text-[var(--color-muted)] not-italic">— Sarah, Bodyfunction Clinic</cite>
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
                  alt="Bodyfunction Clinic — London MSK clinic"
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
                Start with a free chiropractic marketing audit
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-4">
                Get a clear view of where your clinic is currently losing
                visibility, enquiries or rebooking opportunities.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-4">
                Your audit will review your website, SEO, local search presence,
                patient journey, competitors and main growth opportunities. You
                will come away with practical recommendations for improving your
                clinic&apos;s digital performance.
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
                  Chiropractic marketing FAQs
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
        heading="Ready to grow your chiropractic clinic?"
        subheading="Get a clear picture of your current visibility, website performance and missed enquiries — delivered within 2 business days."
        primaryLabel="See what's holding your clinic back"
        primaryHref="/free-clinic-audit/"
      />
    </>
  );
}

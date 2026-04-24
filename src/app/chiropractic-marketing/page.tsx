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
  title: "SEO for Chiropractors UK | Chiropractic Marketing",
  description:
    "ClinicEvo helps UK chiropractors attract more patients with specialist chiropractic marketing, SEO, clinic website design, Google Ads and patient reactivation.",
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
    question: "Does ClinicEvo build websites for chiropractic clinics?",
    answer:
      "Yes. ClinicEvo helps chiropractic clinics create clearer, more conversion-focused websites that support SEO, patient education, trust-building and online booking.",
  },
  {
    question: "Can ClinicEvo help with chiropractic social media marketing?",
    answer:
      "Yes. ClinicEvo can help chiropractic clinics use clearer educational content, social media ads and patient-focused messaging to support awareness, trust and enquiries.",
  },
];

const steps = [
  {
    number: 1,
    title: "Free clinic audit",
    description:
      "We review your website, SEO, local search presence, patient journey, competitors and main growth opportunities. You come away with practical, prioritised recommendations.",
  },
  {
    number: 2,
    title: "Custom growth strategy",
    description:
      "You receive a clear plan covering which channels to focus on, what content to create, and how to convert more website visitors into booked chiropractic appointments.",
  },
  {
    number: 3,
    title: "Implementation & management",
    description:
      "We handle everything: technical SEO, content, Google Ads management, website improvements and reporting. You stay focused on patient care while we drive growth.",
  },
  {
    number: 4,
    title: "Monthly reporting & refinement",
    description:
      "Every month you receive a plain-English report covering rankings, traffic, enquiries and ad performance. We continuously refine based on what\u2019s working.",
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

      {/* Hero */}
      <section className="bg-[var(--color-ink)] pt-40 pb-28 lg:pt-48 lg:pb-36">
        <div className="cx-main">
          <FadeUp>
            <Breadcrumb items={crumbs} light />
            <Badge variant="accent" className="mt-6 mb-4">Chiropractic marketing for UK clinics</Badge>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="text-display text-white mb-8 max-w-3xl leading-tight">
              SEO and marketing for chiropractors who want more of the right patients
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-body-lg text-white/70 mb-6 max-w-2xl leading-relaxed">
              ClinicEvo helps chiropractic clinics improve online visibility,
              attract better enquiries and build a clearer route from search to
              booked appointment.
            </p>
            <p className="text-body-lg text-white/70 mb-10 max-w-2xl leading-relaxed">
              From <a href="/seo-for-clinics/" className="text-[var(--color-accent)] hover:underline">SEO for clinics</a> and
              chiropractic website design to Google Ads, social media campaigns
              and <a href="/ai-patient-reactivation/" className="text-[var(--color-accent)] hover:underline">AI patient reactivation</a>,
              we build practical growth systems around how people actually choose
              a chiropractor.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/free-clinic-audit/" size="lg">
                Get a free clinic audit
              </Button>
              <Button href="/seo-for-clinics/" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Explore SEO for clinics
              </Button>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              {[
                "Built for chiropractors and MSK clinics",
                "SEO, websites, Google Ads and patient reactivation",
                "Focused on visibility, enquiries and booking growth",
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

      {/* Problem and positioning */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <div>
                <Badge className="mb-5 inline-block">The challenge</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Chiropractic marketing built around trust, visibility and patient acquisition
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Chiropractic clinics face a particular challenge online. Many
                  potential patients are searching because they are in pain,
                  frustrated by recurring symptoms, or unsure which type of
                  practitioner they should see.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  They may compare chiropractors with osteopaths, physiotherapists,
                  massage therapists, NHS pathways and private pain clinics. They
                  may also have questions about safety, treatment approach, reviews,
                  qualifications and whether chiropractic care is right for their
                  problem.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  That means your marketing needs to do more than drive traffic. It
                  needs to build trust quickly, explain your clinical value clearly
                  and make the next step feel easy.
                </p>
                <p className="text-body text-[var(--color-muted)]">
                  ClinicEvo helps chiropractic clinics create a clearer digital
                  presence that supports search visibility, patient confidence and
                  enquiry growth.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)]">
                <Badge variant="surface" className="mb-5">Why referrals alone aren&apos;t enough</Badge>
                <p className="text-body text-[var(--color-muted)] mb-4">
                  Referrals are valuable, but they are not a complete growth system.
                  A clinic that relies too heavily on word of mouth can become
                  vulnerable when demand fluctuates, local competition increases or
                  existing referral sources slow down.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-4">
                  Modern patients often start their decision online, even when they
                  have been recommended by someone else. They search your clinic
                  name, check your website, read reviews and decide whether they
                  feel confident enough to book.
                </p>
                <p className="text-body text-[var(--color-muted)]">
                  Good chiropractic marketing supports both new patient acquisition
                  and referral conversion. It helps more people find you, understand
                  you and take action.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Growth system */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <FadeUp>
            <div className="text-center mb-12">
              <Badge className="mb-5 inline-block">Growth system</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                A stronger website, clearer SEO and smarter patient follow-up
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                Chiropractic marketing works best when the main parts of your
                digital presence support each other. Your SEO brings in relevant
                search traffic. Your website converts that traffic into enquiries.
                Your Google Ads can accelerate demand. Your follow-up systems help
                suitable past patients return.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] h-full">
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
            <div className="text-center mb-12">
              <Badge className="mb-5 inline-block">Services</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                How ClinicEvo helps chiropractors grow online
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                ClinicEvo gives chiropractic clinics focused digital support across
                the areas most likely to improve visibility, enquiries, bookings
                and patient retention.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "SEO for chiropractors",
                desc: "Improve your organic visibility for local searches, chiropractic services, condition-led searches and high-intent patient queries.",
                href: "/seo-for-clinics/",
                cta: "Explore SEO for clinics",
              },
              {
                title: "Chiropractic website design",
                desc: "Create a clearer, faster and more trustworthy website that explains your approach and helps patients book with confidence.",
                href: "/website-design-for-clinics/",
                cta: "Explore clinic website design",
              },
              {
                title: "Chiropractic Google Ads",
                desc: "Reach people actively searching for chiropractic care and build campaigns around enquiries, bookings and measurable patient acquisition.",
                href: "/google-ads-for-clinics/",
                cta: "Explore Google Ads for clinics",
              },
              {
                title: "Chiropractic social media marketing",
                desc: "Use clearer messaging, educational content and targeted campaigns to support awareness, trust and conversion for your clinic.",
                href: "/free-clinic-audit/",
                cta: "Get a free clinic audit",
              },
              {
                title: "AI patient reactivation",
                desc: "Reconnect with suitable past patients using smarter recall and follow-up systems that support long-term clinic growth.",
                href: "/ai-patient-reactivation/",
                cta: "Explore AI patient reactivation",
              },
            ].map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.07}>
                <div className="bg-[var(--color-surface)] rounded-2xl p-7 border border-[var(--color-border)] h-full flex flex-col">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">{s.title}</h3>
                  <p className="text-body text-[var(--color-muted)] mb-4 flex-1">{s.desc}</p>
                  <ArrowLink href={s.href}>{s.cta}</ArrowLink>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why generic marketing is not enough */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <Badge className="mb-5 inline-block">Specialist focus</Badge>
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
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
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
                <Badge className="mb-5 inline-block">Proof</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Proof from real clinic growth work
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  ClinicEvo&apos;s approach is shaped by real work with private
                  clinics, including Bodyfunction Clinic. The focus was to improve
                  the digital foundation, strengthen service pages, make the
                  patient journey clearer and build smarter systems for growth.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-6">
                  The <a href="/case-studies/bodyfunction-clinic/" className="text-[var(--color-accent)] hover:underline">Bodyfunction Clinic case study</a> shows
                  how focused website, SEO and patient journey improvements can
                  support a stronger private clinic growth strategy.
                </p>
                <ArrowLink href="/case-studies/bodyfunction-clinic/">
                  Read the Bodyfunction Clinic case study
                </ArrowLink>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-[var(--color-surface)] rounded-2xl p-10 border border-[var(--color-border)] text-center">
                <p className="text-display text-[var(--color-accent)] font-bold mb-2">3×</p>
                <p className="text-body text-[var(--color-muted)]">new patient enquiries</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <Badge className="mb-5 inline-block">How it works</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Start with a free chiropractic marketing audit
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-4">
                Get a clear view of where your clinic is currently losing
                visibility, enquiries or rebooking opportunities.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                Your audit will review your website, SEO, local search presence,
                patient journey, competitors and main growth opportunities. You
                will come away with practical recommendations for improving your
                clinic&apos;s digital performance.
              </p>
            </FadeUp>
            <div>
              <ProcessSteps steps={steps} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="max-w-2xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10">
                <Badge className="mb-5 inline-block">FAQ</Badge>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  Chiropractic marketing FAQs
                </h2>
              </div>
            </FadeUp>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to grow your chiropractic clinic?"
        subheading="Book a free audit and see exactly what's holding your clinic back online."
      />
    </>
  );
}

import { buildMetadata } from "@/lib/metadata";
import Badge from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ProcessSteps from "@/components/sections/ProcessSteps";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import ArrowLink from "@/components/ui/ArrowLink";
import PageHero from "@/components/sections/PageHero";
import ProofBand from "@/components/sections/ProofBand";
import AdsMockup from "@/components/sections/mockups/AdsMockup";

export const metadata = buildMetadata({
  title: "Google Ads for Physios & Clinics",
  description:
    "Clinic Evo builds Google Ads campaigns for UK physiotherapists, osteopaths and chiropractors, helping clinics attract high-intent patients and reduce wasted ad spend.",
  path: "/google-ads-for-clinics/",
});

const faqs = [
  {
    question: "Do Google Ads work for physiotherapy clinics?",
    answer:
      "Yes, Google Ads can work well for physiotherapy clinics when campaigns target high-intent searches and send visitors to relevant landing pages. The campaign needs clear tracking, strong negative keywords and a booking journey that turns clicks into enquiries.",
  },
  {
    question: "How much should a clinic spend on Google Ads?",
    answer:
      "The right budget depends on the clinic location, services, competition, conversion rate and growth goals. Many clinics should start with a controlled test budget rather than a large campaign. The priority is to prove enquiry quality before scaling spend.",
  },
  {
    question: "Should my clinic use SEO or Google Ads?",
    answer:
      "SEO is usually stronger for long-term growth, while Google Ads can generate visibility more quickly. Many clinics benefit from both, but ads work best when the website and landing pages are already clear and conversion-focused.",
  },
  {
    question: "Can you manage Google Ads if our clinic already has campaigns running?",
    answer:
      "Yes. Clinic Evo can review existing campaigns, identify wasted spend, improve keyword targeting, refine ad copy, check tracking and recommend better landing page alignment.",
  },
  {
    question: "Do you build landing pages for Google Ads campaigns?",
    answer:
      "Yes. If the existing website pages are not strong enough, Clinic Evo can recommend or create landing pages that match the campaign intent and give patients a clearer route to enquire or book.",
  },
];

const steps = [
  {
    number: 1,
    title: "Audit",
    description:
      "We review your current website, services, local search presence, booking journey, competitors and any existing ad account data.",
  },
  {
    number: 2,
    title: "Plan",
    description:
      "We identify the highest-intent services and locations to target, then map keywords, negative keywords, ad groups and landing page needs.",
  },
  {
    number: 3,
    title: "Build",
    description:
      "We create or refine campaigns around commercial searches and make sure the landing journey supports patient enquiries.",
  },
  {
    number: 4,
    title: "Measure",
    description:
      "We track calls, forms, bookings and enquiry quality so decisions are based on evidence rather than guesswork.",
  },
  {
    number: 5,
    title: "Improve",
    description:
      "We reduce waste, test new messages, adjust spend and refine the campaign as real data comes in.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Google Ads for Clinics", href: "/google-ads-for-clinics/" },
];

export default function GoogleAdsForClinicsPage() {
  return (
    <>
      <ServiceSchema
        name="Google Ads for Clinics"
        description="Specialist Google Ads campaigns for UK osteopaths, physiotherapists, chiropractors and private MSK clinics."
        url="/google-ads-for-clinics/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="Paid search for private MSK clinics"
        heading={<>Google Ads for clinics that want <em className="not-italic text-[var(--color-accent)]">bookings, not clicks</em></>}
        subtext="Clinic Evo builds Google Ads campaigns for UK physiotherapists, osteopaths and chiropractors, focused on high-intent searches, relevant landing pages and enquiry quality, not just impressions."
        bullets={[
          "Campaigns focused on bookings, not vanity clicks",
          "Landing page and tracking support included",
          "Osteopaths, physios and chiropractors only",
        ]}
        primaryCta={{ label: "Get a free clinic audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "See how it works", href: "#what-we-manage" }}
        breadcrumbs={crumbs}
        rightPanel={<AdsMockup />}
      />

      {/* Patient search intent */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="max-w-3xl">
            <FadeUp>
              <Badge className="mb-5 inline-block">Patient intent</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Google Ads built around real patient searches
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                When someone searches for a private physiotherapist, osteopath or
                chiropractor, they are usually trying to solve a specific problem.
                They may be looking for back pain treatment, sports injury support,
                sciatica help, post-operative rehab, or a clinic close to home.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                That means a clinic Google Ads campaign has to be more precise than
                a generic local business campaign. It needs the right keywords, the
                right exclusions, the right landing pages and a clear booking
                journey.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                Clinic Evo builds Google Ads campaigns around patient intent, not
                broad traffic.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why campaigns waste money */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Common mistakes</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Why clinic PPC campaigns often waste money
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Many clinics try Google Ads and decide it does not work. In
                reality, the problem is often the campaign structure, the landing
                page, or the tracking.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Too many broad keywords",
                desc: "Broad campaigns can attract people looking for NHS services, jobs, courses, insurance, free advice or general information rather than private treatment.",
              },
              {
                title: "Weak landing pages",
                desc: "Sending traffic to a homepage or thin service page often reduces conversion. Patients need clear relevance, trust signals, location information and an easy booking route.",
              },
              {
                title: "Poor tracking",
                desc: "If calls, forms, online bookings and enquiry sources are not tracked properly, the clinic cannot tell which campaigns are actually working.",
              },
              {
                title: "No clinic-specific strategy",
                desc: "A campaign for a physiotherapy clinic should not be structured the same way as a campaign for an e-commerce store, solicitor, restaurant or general healthcare brand.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="card-surface flex h-full flex-col p-7 md:p-8">
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="flex-shrink-0 mt-1 text-[var(--color-error)]" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <h3 className="text-h3 text-[var(--color-ink)]">{item.title}</h3>
                  </div>
                  <p className="text-body text-[var(--color-muted)]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Discipline-specific */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Who we help</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Paid search for physios, osteopaths and chiropractors
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Clinic Evo focuses on private MSK clinics, where patient trust
                and clinical relevance matter. Each clinic type needs its own
                keyword strategy, ad messaging and landing page structure.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Physiotherapy clinics",
                desc: "Google Ads can help promote high-value services, fill practitioner diaries, support new locations, and reach people looking for private care.",
                href: "/physiotherapy-marketing/",
                cta: "Physiotherapy marketing",
              },
              {
                title: "Osteopathy clinics",
                desc: "Paid search can support local visibility, promote specific treatment pages, and capture people looking for help with pain, mobility and recurring issues.",
                href: "/osteopath-marketing/",
                cta: "Marketing for osteopaths",
              },
              {
                title: "Chiropractic clinics",
                desc: "Google Ads can help reduce reliance on referrals and reach patients searching for treatment options in their area.",
                href: "/chiropractic-marketing/",
                cta: "Chiropractic marketing",
              },
            ].map((item, i) => (
              <FadeUp key={item.href} delay={i * 0.07}>
                <div className="card-surface flex h-full flex-col p-7 md:p-8">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">{item.title}</h3>
                  <p className="text-body text-[var(--color-muted)] mb-4 flex-1">{item.desc}</p>
                  <ArrowLink href={item.href}>{item.cta}</ArrowLink>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Proof band */}
      <ProofBand
        eyebrow="What good clinic paid search looks like"
        quote="We went from page 4 to position 1 in 11 weeks. The follow-up system alone recovered 34 lapsed patients in the first month."
      />

      {/* What we manage */}
      <section id="what-we-manage" className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Full service</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                What we manage for your clinic
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Clinic Evo can support the full paid search journey, from campaign
                setup to landing page improvements and conversion tracking.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Campaign strategy", desc: "We identify the services, locations and patient search terms most likely to generate valuable enquiries for your clinic.", icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.5" fill="currentColor" /></> },
              { title: "Keyword & negative keywords", desc: "We build campaigns around commercial search intent and exclude irrelevant searches such as jobs, training, courses and NHS-related searches.", icon: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3M9 11h4" /></> },
              { title: "Ad copywriting", desc: "We write search ads that reflect patient priorities: treatment relevance, location, trust, availability and the next step.", icon: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" /></> },
              { title: "Landing page guidance", desc: "We review or create landing pages that match the campaign intent, so people do not land on a generic page after clicking a specific advert.", icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 13l2 2 4-4" /></> },
              { title: "Conversion tracking", desc: "We help track calls, forms, bookings and enquiry routes so the campaign is judged on patient acquisition, not just clicks.", icon: <><path d="M3 3v18h18" /><path d="M7 14l3-3 3 3 5-6" /></> },
              { title: "Reporting & optimisation", desc: "We review what is working, reduce wasted spend, refine the campaign and improve the balance between cost and enquiry quality.", icon: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></> },
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

      {/* Booking journey */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="max-w-3xl">
            <FadeUp>
              <Badge className="mb-5 inline-block">Conversion</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Clicks are only useful if the booking journey works
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                A Google Ads campaign cannot fix a weak patient journey on its own.
                If the landing page is unclear, slow, generic, hard to read, or
                difficult to book from, the clinic may pay for good traffic and
                still lose the enquiry.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                That is why Clinic Evo looks at the full journey: search term, ad,
                landing page, trust signals, call to action, booking route and
                follow-up. We also connect paid search with{" "}
                <a href="/website-design-for-clinics/" className="text-[var(--color-accent)] hover:underline">clinic website design</a>,{" "}
                <a href="/seo-for-clinics/" className="text-[var(--color-accent)] hover:underline">SEO for clinics</a> and{" "}
                <a href="/ai-integration/" className="text-[var(--color-accent)] hover:underline">AI patient reactivation</a>{" "}
                where it makes sense.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <Badge className="mb-5 inline-block">Process</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                How Clinic Evo approaches Google Ads
              </h2>
              <p className="text-body text-[var(--color-muted)]">
                A structured approach that starts with understanding your clinic,
                not just launching ads.
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
                  Google Ads for clinics FAQs
                </h2>
              </div>
            </FadeUp>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        heading="Find out whether Google Ads is right for your clinic"
        subheading="A free clinic audit will highlight where your current digital presence is helping, where it may be losing enquiries, and whether paid search should be part of your growth plan."
      />
    </>
  );
}

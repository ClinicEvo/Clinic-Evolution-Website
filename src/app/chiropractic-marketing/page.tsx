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
import ClientLogoStrip from "@/components/sections/ClientLogoStrip";
import ConnectedJourney from "@/components/sections/ConnectedJourney";
import StatBand from "@/components/sections/StatBand";
import Image from "next/image";
import StickyMobileCta from "@/components/ui/StickyMobileCta";
import Button from "@/components/ui/Button";

export const metadata = buildMetadata({
  // The root layout's template appends " | Clinic Evo".
  title: "Chiropractic Marketing Agency & SEO",
  description:
    "We offer chiropractic marketing and SEO exclusively for UK MSK clinics. Request your free clinic audit.",
  path: "/chiropractic-marketing/",
});

const faqs = [
  {
    question: "What is chiropractic marketing?",
    answer:
      "Chiropractic marketing is the strategy used to help chiropractic clinics attract, convert and retain patients. It usually includes SEO, local search, website design, Google Ads, patient education content, reviews, booking optimisation, social media and patient reactivation.",
  },
  {
    question: "What should a chiropractic marketing agency do for my clinic?",
    answer:
      "It should identify where your route from search to enquiry needs work, then explain what to fix first. At Clinic Evo, that can mean SEO and local search, website improvements or Google Ads, depending on your clinic. We also offer paid social and patient reactivation. You should understand why each recommendation belongs in the plan. Start with our free clinic audit: we review your website, Google Business Profile, local rankings and any ads, with findings back within two business days.",
    link: { text: "free clinic audit", href: "/free-clinic-audit/" },
  },
  {
    question: "How can SEO help a chiropractic clinic?",
    answer:
      "SEO helps a chiropractic clinic appear when people search for chiropractors, treatment options, condition support and local clinic information. Strong SEO can reduce reliance on referrals and create a more consistent source of patient enquiries over time.",
  },
  {
    question: "How long will SEO take for my chiropractic clinic?",
    answer:
      "We cannot give you a reliable date before reviewing your website and local rankings. The evidence we can show is from osteopathy: Lind Street Osteopathy, a new single-practitioner clinic in Ryde, reached page one for its core local searches within twelve months of opening. That is context, not a forecast for your chiropractic clinic. Your starting point and the work needed will differ. Our free clinic audit gives us the basis for discussing priorities and realistic expectations, with no obligation.",
    link: { text: "free clinic audit", href: "/free-clinic-audit/" },
  },
  {
    question: "What is local SEO for chiropractors?",
    answer:
      "Local SEO is the part of search that decides whether your clinic appears when somebody nearby looks for a chiropractor. It covers your Google Business Profile, the consistency of your name, address and phone number across the web, review volume and recency, and location-relevant content on your own site. For a single-site clinic it is usually the highest-return SEO work available, because the competition is only the other clinics in your catchment rather than the whole internet.",
  },
  {
    question:
      "What separates the best SEO for chiropractors from generic SEO?",
    answer:
      "Generic SEO chases traffic. Chiropractic SEO has to account for a longer consideration cycle, a patient who is often nervous about the first appointment, and regulatory limits on how treatment claims can be worded. That changes which pages are worth building, what the content has to prove, and how success is measured: enquiries and booked patients rather than sessions or impressions.",
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
    note: "Back to you within two business days.",
  },
  {
    number: 2,
    title: "Custom growth strategy",
    description:
      "You receive a clear plan covering which channels to focus on, what content to create, and how to convert more website visitors into booked chiropractic appointments.",
    note: "You'll see exactly which channels make sense for your clinic and why. No pressure to proceed.",
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
    note: "No dense reports or vanity metrics: just honest numbers tied to enquiries and bookings.",
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
        heading={<>A chiropractic marketing agency that connects SEO with <em className="not-italic text-[var(--color-accent)]">patient enquiries</em></>}
        subtext="We help you attract the right patients by making your clinic easier to find and your approach clearer before they book. Our chiropractic SEO and website work connect local searches with pages that explain your treatments and first appointment, with Google Ads where the audit identifies a role for them. We work only with UK MSK clinics."
        bullets={[
          "Local SEO and Google Ads for chiro clinics",
          "Conversion-focused website design",
          "AI patient reactivation systems",
        ]}
        primaryCta={{ label: "Get my free clinic audit", href: "/free-clinic-audit/" }}
        breadcrumbs={crumbs}
        rightPanel={
          <HeroImagePlaceholder
            src="/images/hero/chiropractor-cervical-adjustment.jpg"
            alt="A chiropractor adjusting a patient's neck in a treatment room"
          />
        }
        bulletsBelow
      />

      <ClientLogoStrip />

      {/* Problem and positioning.
          Prose against a photograph rather than prose against a second card of
          titled blocks — the 10 Aug review objected to that shape by name. The
          referral argument runs full width underneath as a divided band. */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 lg:gap-20 items-center">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">The challenge</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Your patient is in pain and does not know if they want a chiropractor
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5 max-w-xl">
                  They are comparing chiropractors with osteopaths,
                  physiotherapists, massage therapists, NHS pathways and private
                  pain clinics. They have questions about safety, about what an
                  adjustment involves, about whether it is right for their problem
                  at all.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-5 max-w-xl">
                  That means your marketing has to do more than drive traffic. It
                  has to answer those questions before the enquiry, build trust
                  fast, and make booking feel like the obvious next step.
                </p>
                <p className="text-body text-[var(--color-muted)] max-w-xl">
                  We come from the same trade. Danny Morgan is a practising
                  osteopath who founded and still runs Bodyfunction Clinic, and
                  every method on this page was tested there before it was offered
                  to anyone else.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] shadow-[var(--shadow-card)]">
                <Image
                  src="/images/chiropractic-shoulder-assessment.jpg"
                  alt="A clinician assessing a patient's shoulder on a treatment couch"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.16}>
            <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-3">
              {[
                {
                  label: "Referrals have a ceiling",
                  desc: "Word of mouth is valuable but it is not a growth system. It stalls when a competitor opens or a referring GP retires.",
                },
                {
                  label: "Referred patients still search",
                  desc: "Even a warm referral checks your website, reads your reviews and decides whether they feel confident enough to book.",
                },
                {
                  label: "The same work fixes both",
                  desc: "A clearer site and stronger local presence convert the referrals you already get as well as the strangers you do not.",
                },
              ].map((item) => (
                <div key={item.label} className="bg-[var(--color-paper)] p-7">
                  <p className="font-display text-[0.95rem] font-semibold text-[var(--color-ink)]">
                    {item.label}
                  </p>
                  <p className="text-body-sm mt-2 text-[var(--color-muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Proof band.
          The figures below are from osteopathy and MSK clinics and are labelled
          as such. Do not relabel them as chiropractic results. */}
      <StatBand
        eyebrow="What we can evidence"
        heading="The same foundations, proven in MSK practice."
        body="These figures come from osteopathy and MSK clinics, measured in Google Search Console and Ahrefs. The work behind them (local search, condition pages, follow-up) is the same for a chiropractic clinic."
        stats={[
          { value: "8 → 3,822", label: "Monthly organic visitors at a London MSK clinic, over two years" },
          { value: "332", label: "Keywords now ranking in Google's top three, from none in 2024" },
          { value: "0 → page one", label: "Every core local term for a new clinic, within twelve months of launch" },
        ]}
      />

      {/* Growth system */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Growth system</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Chiropractic patients want to know what the first visit involves
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
          {/* No icons in these cards. The 10 Aug review was blunt about it:
              "when I see a box with some words with some generic icon on it, it
              to me just screams preset website". */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "They search when the pain wins",
                desc: "Nobody books a chiropractor on a good day. We target local chiropractic searches, treatment-related queries and service-led keywords, so you are visible at the moment they give in and look.",
              },
              {
                title: "They want to know what the first visit involves",
                desc: "Safety, technique, cost, how many sessions. We improve the way your website explains your services, practitioners, approach, reviews, location, pricing and booking process.",
              },
              {
                title: "They open three or four tabs before they call",
                desc: "Google Ads and social ads can bring that decision forward, but only when they are connected to clear landing pages and proper conversion tracking rather than a homepage.",
              },
              {
                title: "They drift away between courses of care",
                desc: "Reactivation systems help you identify and re-engage people who may need follow-up care, maintenance appointments or support with a recurring issue, without anyone having to remember.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="card-surface flex h-full flex-col p-7 md:p-8">
                  <h3 className="text-h4 text-[var(--color-ink)] mb-2">{item.title}</h3>
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
                desc: "Local SEO and clear service pages built around your clinic’s treatments, practitioners and route to booking.",
                href: "/seo-for-clinics/",
                cta: "How our clinic SEO works",
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
                desc: "Facebook, Instagram and TikTok campaigns built around clearer messaging and educational content, to support awareness, trust and conversion for your clinic.",
                href: "/digital-marketing/",
                cta: "Paid Social for Clinics",
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
                  <h3 className="text-h4 text-[var(--color-ink)] mb-2">{s.title}</h3>
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

      {/* Chiropractic SEO.
          Copy left; on the right, the site drawn as the copy describes it: a
          Google Business Profile that matches the site, and each page with its
          own job rather than a homepage covering everything. The Bodyfunction
          figure is not repeated as a big number here; the StatBand and the
          proof panel already carry it. */}
      <section id="chiropractic-seo" className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-14 lg:gap-20 items-start">
            <FadeUp>
              <p className="eyebrow mb-5">Chiropractic SEO</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Chiropractic SEO starts with the questions before booking
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)] mb-5">
                A local search needs somewhere useful to land. We build
                chiropractic SEO around the services you actually offer, with
                condition pages where relevant and clear links to practitioner
                information and booking.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                Your Google Business Profile is part of the same work. We review
                how it describes your clinic and whether its details match your
                website. On the site, we check technical barriers and give each
                page a distinct search purpose, rather than asking the homepage to
                cover everything.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-8">
                The advantage of a specialist chiropractic marketing agency is the
                starting point. We work only with UK MSK clinics, so the brief
                starts with your treatments and the decisions patients need to
                make. We want your pages to explain your approach and first
                appointment clearly, without promising a clinical outcome.
              </p>
              <div className="border-l-2 border-[var(--color-accent)] pl-4 mb-8">
                <p className="text-body text-[var(--color-charcoal)]">
                  Our method was built and tested at Bodyfunction Clinic, a London
                  MSK clinic founded by Clinic Evo co-founder Danny Morgan. That is
                  evidence from an MSK clinic, not a chiropractic client result. We
                  report search results in your own Search Console and Ahrefs.
                </p>
              </div>
              <Button href="/free-clinic-audit/" size="lg">Get my free clinic audit</Button>
              <p className="text-body-sm text-[var(--color-muted)] mt-4 max-w-xl">
                See what needs attention on your site and in local search. We
                return the findings within two business days, with no obligation.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="lg:sticky lg:top-28 flex flex-col">
                {/* Google Business Profile */}
                <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] p-5 shadow-[var(--shadow-card)]">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <p className="font-display text-[0.95rem] font-semibold text-[var(--color-ink)]">Google Business Profile</p>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-surface)] px-2.5 py-1 text-xs font-semibold text-[var(--color-charcoal)]">
                      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7.5 5.5 10.5 11.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Matches the website
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Services", "Address", "Phone", "Opening hours"].map((d) => (
                      <span key={d} className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-muted)]">{d}</span>
                    ))}
                  </div>
                </div>

                <span aria-hidden="true" className="mx-auto h-8 w-px bg-[var(--color-muted-light)]" />

                {/* The website, one job per page */}
                <div className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] shadow-[var(--shadow-card)]">
                  <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-3">
                    <p className="font-display text-[0.95rem] font-semibold text-[var(--color-ink)]">Your website</p>
                    <p className="text-xs text-[var(--color-muted)]">One job per page</p>
                  </div>
                  <ul className="divide-y divide-[var(--color-border)]">
                    {[
                      { page: "Homepage", job: "Who you are and where you are" },
                      { page: "Service pages", job: "What each treatment involves" },
                      { page: "Condition pages", job: "Whether you can help with my problem" },
                      { page: "Practitioners", job: "Who I will see, and their training" },
                      { page: "First appointment", job: "What happens, and how to book" },
                    ].map((row) => (
                      <li key={row.page} className="grid grid-cols-[8.5rem_1fr] items-baseline gap-4 px-5 py-3.5">
                        <span className="flex items-center gap-2.5 text-body-sm font-semibold text-[var(--color-ink)]">
                          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                          {row.page}
                        </span>
                        <span className="text-body-sm text-[var(--color-muted)]">{row.job}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* How the services work as one thing.
          The 10 Aug review asked for exactly this on the who-we-help pages:
          "explain to the client how all these systems nicely come together...
          how the Google ads and the Facebook ads and the TikTok and the
          Instagram ads all come together and how that is glued together with
          the patient pulse system in the background". It also carries the
          platform marks Danny asked to see. */}
      <ConnectedJourney />

      {/* Why generic marketing is not enough */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">Specialist focus</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  What a general agency gets wrong about chiropractic
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
                  Those questions have to be answered on the page in plain terms:
                  what an adjustment involves, who it suits, how many sessions is
                  realistic and what the practitioner&apos;s training actually is.
                  Overclaiming costs more trust than it buys.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-8">
                <h3 className="text-h3 text-[var(--color-ink)] mb-6">
                  For chiropractors on a busy high street
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
                  A method proven in a working MSK clinic
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-6">
                  Danny Morgan founded Bodyfunction Clinic in Angel, London, and
                  co-founded Clinic Evo; our methods were tested in his own clinic
                  first. Bodyfunction grew from 8 → 3,822 estimated monthly organic
                  visitors over two years, according to Ahrefs, Aug 2024–Aug 2026,
                  as detailed in the{" "}
                  <a href="/case-studies/bodyfunction-clinic/" className="text-[var(--color-accent-text)] hover:underline">Bodyfunction Clinic case study</a>.
                  These are search figures from a London MSK clinic, not bookings
                  or a chiropractic client result.
                </p>
                <ArrowLink href="/case-studies/bodyfunction-clinic/">
                  Read the full clinic story
                </ArrowLink>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="relative overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/bodyfunction-clinic-team-at-reception-01.jpg"
                  alt="Bodyfunction Clinic, London MSK clinic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/80 via-[var(--color-ink)]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display font-bold text-4xl text-white mb-1">8 → 3,822</p>
                  <p className="text-sm text-white/90 font-medium">monthly organic visitors in two years</p>
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
                Get a clear view of the visibility, enquiries and rebooking
                your clinic could be winning, and what it takes to get there.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-4">
                Your audit will review your website, SEO, local search presence,
                patient journey, competitors and main growth opportunities. You
                will come away with practical recommendations for improving your
                clinic&apos;s digital performance.
              </p>
              <p className="text-body-sm text-[var(--color-muted)]">
                Not ready to start?{" "}
                <a href="/case-studies/bodyfunction-clinic/" className="text-[var(--color-accent-text)] hover:underline font-medium">
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
        id="closing-cta"
        heading="Ready to grow your chiropractic clinic?"
        subheading="Get a clear picture of your current visibility, website performance and missed enquiries, delivered within 2 business days."
        primaryLabel="See what's holding your clinic back"
        primaryHref="/free-clinic-audit/"
      />

      <StickyMobileCta hideNearId="closing-cta" />
    </>
  );
}

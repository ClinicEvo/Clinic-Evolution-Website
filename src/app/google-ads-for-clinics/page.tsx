import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import ArrowLink from "@/components/ui/ArrowLink";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ProcessSteps from "@/components/sections/ProcessSteps";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import PageHero from "@/components/sections/PageHero";
import ProofBand from "@/components/sections/ProofBand";
import BrowserFrame from "@/components/sections/mockups/BrowserFrame";
import GoogleAdsPanel from "@/components/sections/mockups/GoogleAdsPanel";
import AdsToBookingChain from "@/components/sections/AdsToBookingChain";
import { GoogleAdsLockup } from "@/components/icons/GoogleColorMark";
import { AD_CLINIC, CONVERSION_CAVEAT, FIGURES } from "@/lib/google-ads-evidence";
import StickyMobileCta from "@/components/ui/StickyMobileCta";

export const metadata = buildMetadata({
  title: "Google Ads for Physios & Clinics",
  description:
    "Clinic Evo builds Google Ads campaigns for UK physiotherapists, osteopaths and chiropractors, attracting high-intent patients and cutting wasted ad spend.",
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

/* The four ways a clinic campaign burns money. Kept as copy from the version the
   10 Aug review called one of the stronger parts of the site; only the
   presentation changed, from a 2×2 grid of boxes into a list. */
const mistakes = [
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
];

/* What the management covers. Numbered rather than iconed: the six coral tiles
   that used to head these were exactly the "box with a generic icon screams
   preset website" objection from the 10 Aug call, and as a three-across grid of
   equal cards they also broke the house layout rule. */
const managed = [
  {
    title: "Campaign strategy",
    desc: "We identify the services, locations and patient search terms most likely to generate valuable enquiries for your clinic.",
  },
  {
    title: "Keyword & negative keywords",
    desc: "We build campaigns around commercial search intent and exclude irrelevant searches such as jobs, training, courses and NHS-related searches.",
  },
  {
    title: "Ad copywriting",
    desc: "We write search ads that reflect patient priorities: treatment relevance, location, trust, availability and the next step.",
  },
  {
    title: "Landing page guidance",
    desc: "We review or create landing pages that match the campaign intent, so people do not land on a generic page after clicking a specific advert.",
  },
  {
    title: "Conversion tracking",
    desc: "We help track calls, forms, bookings and enquiry routes so the campaign is judged on patient acquisition, not just clicks.",
  },
  {
    title: "Reporting & optimisation",
    desc: "We review what is working, reduce wasted spend, refine the campaign and improve the balance between cost and enquiry quality.",
  },
];

/* Photographs rather than icons, for the same reason. */
const disciplines = [
  {
    title: "Physiotherapy clinics",
    desc: "Google Ads can help promote high-value services, fill practitioner diaries, support new locations, and reach people looking for private care.",
    href: "/physiotherapy-marketing/",
    cta: "Physiotherapy Marketing",
    watermarkImg: "/images/watermark-physio.jpg",
  },
  {
    title: "Osteopathy clinics",
    desc: "Paid search can support local visibility, promote specific treatment pages, and capture people looking for help with pain, mobility and recurring issues.",
    href: "/osteopath-marketing/",
    cta: "Marketing for Osteopaths",
    watermarkImg: "/images/watermark-osteopath.jpg",
  },
  {
    title: "Chiropractic clinics",
    desc: "Google Ads can help reduce reliance on referrals and reach patients searching for treatment options in their area.",
    href: "/chiropractic-marketing/",
    cta: "Chiropractic Marketing",
    watermarkImg: "/images/watermark-chiro.jpg",
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

      {/* Hero.
          One call to action, not two: "See how it works" sat beside the audit
          button and Danny's note on 10 Aug was that his brain only wants to deal
          with one. The three supporting points moved out of the copy column into
          their own row beneath the fold line, which is where the brief asked for
          them. */}
      <PageHero
        badge="Paid search for private MSK clinics"
        heading={<>Google Ads for clinics that want <em className="not-italic text-[var(--color-accent)]">bookings, not clicks</em></>}
        subtext="Clinic Evo builds Google Ads campaigns for UK physiotherapists, osteopaths and chiropractors, focused on high-intent searches, relevant landing pages and enquiry quality, not just impressions."
        bullets={[
          "Campaigns focused on bookings, not vanity clicks",
          "Landing page and tracking support included",
          "Osteopaths, physios and chiropractors only",
        ]}
        bulletsBelow
        primaryCta={{ label: "Get a free clinic audit", href: "/free-clinic-audit/" }}
        breadcrumbs={crumbs}
        rightPanelWidth="520px"
        rightPanel={<GoogleAdsPanel />}
      />

      {/* Patient search intent */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <p className="eyebrow mb-5">Patient intent</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                The searches worth paying for
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
            {/* The ad itself, in the tool's own chrome and named. The display URL
                in the screenshot is links.bodyfunction.co.uk/Osteopath/Angel, so
                this one names its own advertiser — see lib/google-ads-evidence.ts */}
            <FadeUp delay={0.1}>
              <div className="mx-auto max-w-md lg:ml-auto lg:mr-0">
                <BrowserFrame
                  label="ads.google.com — ad preview"
                  caption={<GoogleAdsLockup label="Google Search ad" />}
                >
                  <div className="relative aspect-[483/368]">
                    <Image
                      src="/images/google-ads/google-ad.png"
                      alt="Live Google Ad for an osteopathy clinic, with 2,646 impressions, 206 clicks and a 7.79% click-through rate"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 440px"
                    />
                  </div>
                </BrowserFrame>
                <p className="mt-4 text-body-sm text-[var(--color-muted)]">
                  A real ad for{" "}
                  <span className="font-semibold text-[var(--color-charcoal)]">
                    {AD_CLINIC}
                  </span>
                  , Islington, matched to a specific search, a specific location and
                  a specific service, not a generic healthcare message.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why campaigns waste money.
          The auction-insights screenshot used to sit in this section, which meant
          a picture of an account dominating its market was filed under a heading
          about failure. It now heads the evidence section below. */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <FadeUp>
              <div>
                <p className="eyebrow mb-4">Common mistakes</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                  Why clinic PPC campaigns often waste money
                </h2>
                <p className="text-body-lg text-[var(--color-charcoal)]">
                  Many clinics try Google Ads and decide it does not work. In
                  reality, the problem is often the campaign structure, the landing
                  page, or the tracking.
                </p>
                <div className="mt-8">
                  <ArrowLink href="/free-clinic-audit/">
                    Have us look at your account, free
                  </ArrowLink>
                </div>
              </div>
            </FadeUp>

            {/* A list, not four boxes. Same four points, a third of the height,
                and nothing for a reader to mistake for decoration. */}
            <ul className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
              {mistakes.map((item, i) => (
                <li key={item.title}>
                  <FadeUp delay={i * 0.06}>
                    <div className="flex gap-4 py-6">
                      <svg
                        className="mt-[6px] flex-shrink-0 text-[var(--color-error)]"
                        width="15"
                        height="15"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 4l8 8M12 4l-8 8"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div>
                        <h3 className="text-h4 text-[var(--color-ink)]">{item.title}</h3>
                        <p className="text-body mt-1.5 text-[var(--color-muted)]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Evidence.
          The page carried three real screenshots and quoted not one figure from
          them in words. Every number here is read off a screenshot on this page
          and carries its source; the caveat under them is not optional — cost per
          conversion is not cost per booked patient. See
          lib/google-ads-evidence.ts */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <FadeUp>
                <p className="eyebrow mb-4">Real campaign data</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                  What a well-run clinic Google Ads account looks like
                </h2>
                <p className="text-body-lg text-[var(--color-charcoal)]">
                  These are screenshots from live accounts, with the numbers read
                  straight off them. No industry averages, no invented percentages.
                </p>
              </FadeUp>

              <dl className="mt-10 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
                {FIGURES.map((f, i) => (
                  <FadeUp key={f.value} delay={i * 0.07}>
                    <div className="flex flex-col gap-1.5 py-6 sm:flex-row sm:items-baseline sm:gap-8">
                      <dt className="font-display text-4xl font-bold leading-none tracking-[-0.02em] text-[var(--color-ink)] sm:w-[7.5rem] sm:flex-shrink-0">
                        {f.value}
                      </dt>
                      <dd className="min-w-0">
                        <p className="text-[0.95rem] font-semibold text-[var(--color-charcoal)]">
                          {f.label}
                        </p>
                        <p className="mt-1 text-body-sm text-[var(--color-muted)]">
                          {f.source}
                        </p>
                      </dd>
                    </div>
                  </FadeUp>
                ))}
              </dl>

              <FadeUp delay={0.2}>
                <p className="mt-7 max-w-xl text-[0.78rem] leading-relaxed text-[var(--color-muted)]">
                  {CONVERSION_CAVEAT}
                </p>
                <div className="mt-9">
                  <Button href="/free-clinic-audit/" size="lg">
                    Get a free clinic audit
                  </Button>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.12}>
              <div className="mx-auto max-w-md lg:ml-auto lg:mr-0">
                <BrowserFrame
                  label="ads.google.com — auction insights"
                  caption={
                    <span className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                      <GoogleAdsLockup label="Google Ads auction insights" />
                      <span className="text-[0.65rem] tabular-nums">70% share</span>
                    </span>
                  }
                >
                  <div className="relative aspect-[494/356]">
                    <Image
                      src="/images/google-ads/google-ppc.png"
                      alt="Google Ads auction insights showing the clinic at 70% impression share, far ahead of competing clinics under 10%"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 440px"
                    />
                  </div>
                </BrowserFrame>
                <p className="mt-4 text-body-sm text-[var(--color-muted)]">
                  Impression share is how often your ad showed when it could have.
                  Here the clinic appears in 70% of its local auctions and the three
                  competing advertisers sit under 10% — the difference between
                  being the obvious choice and being the fourth one seen.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Proof band.
          This replaced a quote reading "page 4 to position 1 in 11 weeks" — an
          organic ranking claim on a paid search page, and one Danny asked us to
          remove on the 10 Aug call because they were not his words.

          What is here now is Danny's own statement about Clinic Evo's track
          record, made on that call and confirmed by Simon on 13 Aug 2026. He is
          bylined as a Clinic Evo co-founder rather than as a clinic client,
          because that is the capacity he is speaking in. The campaign outcomes
          are in the evidence section above, sourced to the screenshots they came
          from; this band is the experience behind the work.
      */}
      <ProofBand
        eyebrow="The experience behind the campaigns"
        quote="We've been doing this for years. We've invested over £70,000 into paid ads specifically in healthcare, and we know exactly which ones work and which ones don't, so we take the guesswork out of it."
        authorName="Danny Morgan"
        authorRole="Co-founder, Clinic Evo — and a practising osteopath"
        image="/images/danny-morgan-angel-clinic.png"
        imageAlt="Danny Morgan, co-founder of Clinic Evo"
        ctaLabel="Get a free clinic audit"
        ctaHref="/free-clinic-audit/"
      />

      {/* What we manage */}
      <section id="what-we-manage" className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-14 max-w-2xl">
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
          <ol className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
            {managed.map((item, i) => (
              <li
                key={item.title}
                className="border-t border-[var(--color-border)] py-7"
              >
                <FadeUp delay={(i % 2) * 0.06}>
                  <div className="flex gap-5">
                    <span className="font-display text-[0.8rem] font-semibold tabular-nums text-[var(--color-accent-text)] pt-[5px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-h4 text-[var(--color-ink)]">{item.title}</h3>
                      <p className="text-body mt-2 text-[var(--color-muted)]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Booking journey.
          Three paragraphs in a narrow column with the right half of the section
          empty. The argument is a sequence, so it is drawn now — and the chain is
          where the brief's "connect Ads to the landing page and to Patient Pulse"
          is delivered, without this page turning into a tour of every service. */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <FadeUp>
              <p className="eyebrow mb-5">Conversion</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Clicks are only useful if the booking journey works
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                A Google Ads campaign cannot fix a weak patient journey on its own.
                If the landing page is unclear, slow, generic, hard to read, or
                difficult to book from, the clinic may pay for good traffic and
                still lose the enquiry.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                That is why Clinic Evo looks at the full journey: search term, ad,
                landing page, trust signals, call to action, booking route and
                follow-up. We also connect paid search with{" "}
                <Link href="/website-design-for-clinics/" className="text-[var(--color-accent-text)] hover:underline">clinic website design</Link>,{" "}
                <Link href="/seo-for-clinics/" className="text-[var(--color-accent-text)] hover:underline">SEO for clinics</Link>,{" "}
                <Link href="/patient-pulse/" className="text-[var(--color-accent-text)] hover:underline">Patient Pulse follow-up</Link> and{" "}
                <Link href="/ai-integration/" className="text-[var(--color-accent-text)] hover:underline">AI patient reactivation</Link>{" "}
                where it makes sense.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                Every step on the right is a point where a clinic can pay for the
                click and still lose the patient.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <AdsToBookingChain />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Discipline-specific.
          The coral icon tiles that used to head each card are gone: "a box with
          words and a generic icon screams preset website". The photograph and the
          discipline name carry it. */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
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
          <div className="flex flex-col gap-5">
            {disciplines.map((item, i) => (
              <FadeUp key={item.href} delay={i * 0.09}>
                <Link
                  href={item.href}
                  className="group flex flex-col sm:flex-row overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-[2px]"
                  style={{ background: "var(--color-paper)" }}
                >
                  <div className="relative h-52 w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-64 lg:w-72">
                    <Image src={item.watermarkImg} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 288px" />
                    <div className="absolute inset-0 bg-[var(--color-ink)]/10" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-7 md:p-9 lg:p-10">
                    <p className="eyebrow mb-4">{item.title}</p>
                    <p className="text-body-sm text-[var(--color-muted)] mb-6">{item.desc}</p>
                    <span className="inline-flex items-center gap-2 transition-all group-hover:gap-3 group-hover:text-[var(--color-accent)]" style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-ink)", textDecoration: "underline", textUnderlineOffset: "4px" }}>
                      {item.cta}
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process.
          The left column ran out of copy roughly 500px before the steps did, so
          it carries the audit CTA now — the one that starts step 1. */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <FadeUp>
                <p className="eyebrow mb-5">Process</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                  How Clinic Evo approaches Google Ads
                </h2>
                <p className="text-body text-[var(--color-muted)]">
                  A structured approach that starts with understanding your clinic,
                  not just launching ads.
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="mt-10 rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-paper)] p-7 sm:p-8 shadow-[var(--shadow-card)]">
                  <p className="font-display text-[1.05rem] font-semibold leading-snug text-[var(--color-ink)]">
                    Step one is free
                  </p>
                  <p className="text-body-sm mt-3 text-[var(--color-muted)]">
                    The audit is the whole of stage one: your site, your local
                    search presence, your booking journey and, if you already run
                    campaigns, where the current budget is going. You get the
                    findings whether or not you work with us.
                  </p>
                  <div className="mt-7">
                    <Button href="/free-clinic-audit/">Get a free clinic audit</Button>
                  </div>
                  {/* Deliberately a claim we can stand behind. An earlier draft
                      said campaigns run in the clinic's own Google Ads account,
                      which is standard practice but is an operational policy
                      nobody has confirmed — do not restore it unverified. */}
                  <p className="mt-6 border-t border-[var(--color-border)] pt-5 text-[0.78rem] leading-relaxed text-[var(--color-muted)]">
                    Run by people who have paid for their own clinic&apos;s ads.
                    Clinic Evo came out of Bodyfunction Clinic in Islington.
                  </p>
                </div>
              </FadeUp>
            </div>
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
                  Google Ads for clinics FAQs
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
        heading="Find out whether Google Ads is right for your clinic"
        subheading="A free clinic audit will highlight where your current digital presence is helping, where it may be losing enquiries, and whether paid search should be part of your growth plan."
      />

      <StickyMobileCta hideNearId="closing-cta" />
    </>
  );
}

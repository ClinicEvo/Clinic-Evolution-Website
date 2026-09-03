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

export const metadata = buildMetadata({
  // "osteopathy marketing agency" (70/mo) is the only researched osteopathy
  // term. "osteopath marketing" — the previous title and the URL — is not in
  // the keyword set at all, so its volume is unvalidated.
  title: "Osteopathy Marketing Agency UK",
  description:
    "Specialist marketing for UK osteopaths. SEO, Google Ads and website design that fills your diary with new patients. Book a free clinic audit.",
  path: "/osteopath-marketing/",
});

const faqs = [
  {
    question: "How long does osteopath SEO take to show results?",
    answer:
      "Slower than paid ads, and the early months are the hardest to sit through. Bodyfunction Clinic in Angel had close to a year of work with almost nothing to show before the line turned, then reached 3,822 monthly organic visitors over two years. Lind Street Osteopathy, opening cold in Ryde, was on page one for its core local searches inside twelve months. What your clinic should expect depends on your catchment and what is already in place, which is what the audit works out.",
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
      "Yes. Lind Street Osteopathy came to us as a brand new single-practitioner clinic in Ryde with no logo, no website and no search presence, and held page one across its catchment twelve months after opening. The foundations go in first, brand, website and Google Business Profile, with paid social running alongside so the diary is not empty while search catches up.",
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
    note: "A written report with prioritised recommendations, back to you within two business days.",
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
          "Results tracked to enquiries and booked appointments",
        ]}
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        breadcrumbs={crumbs}
        rightPanel={
          <HeroImagePlaceholder
            src="/images/hero/osteopath-manual-treatment.jpg"
            alt="An osteopath treating a patient on a clinic couch"
          />
        }
        bulletsBelow
      />

      <ClientLogoStrip />

      {/* Why Clinic Evo for osteopaths.
          This used to be prose on the left and a second card of four titled
          blocks on the right — the exact shape the 10 Aug review objected to
          ("I don't think we should have double content like that back next to
          each other"). Prose now sits against a photograph, and the claims run
          full width underneath as a divided band rather than a third card grid. */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 lg:gap-20 items-center">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">Why Clinic Evo</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  The people doing your marketing also run an osteopathy clinic
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5 max-w-xl">
                  Danny Morgan is a practising osteopath. He founded Bodyfunction
                  Clinic in Angel, spent years working out how to fill its diary,
                  and co-founded Clinic Evo to do the same job for other clinics.
                  Every method on this page was tested on his own practice first.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-5 max-w-xl">
                  That matters because a generic agency has never sat in your
                  position: a quiet Tuesday, a diary with gaps in it, and an
                  invoice from someone who promised leads and delivered clicks.
                </p>
                <p className="text-body text-[var(--color-muted)] max-w-xl">
                  We work only with musculoskeletal clinics, so every strategy,
                  page and campaign starts from how patients in pain actually
                  search, compare and book.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] shadow-[var(--shadow-card)]">
                <Image
                  src="/images/osteopath-hip-assessment.jpg"
                  alt="An osteopath assessing a patient's hip during treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.16}>
            <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: "Found in local search",
                  desc: "Ranking for 'osteopath near me' and the condition searches your treatments answer.",
                },
                {
                  label: "Paid search that books",
                  desc: "Google Ads aimed at back pain, neck pain and sports injury intent, not broad traffic.",
                },
                {
                  label: "A site built to convert",
                  desc: "Pages that answer the patient's question and put booking one click away.",
                },
                {
                  label: "Patients who come back",
                  desc: "Automated recall and reactivation for maintenance visits, not just first appointments.",
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

      {/* Proof band */}
      <StatBand
        eyebrow="What we can evidence"
        heading="Two clinics at different stages."
        body="Every figure here comes from Google Search Console or Ahrefs and can be checked in either tool. Both tools measure search, not appointments, so none of these three is a booking figure."
        stats={[
          { value: "8 → 3,822", label: "Monthly organic visitors at a London osteopathy clinic, over two years" },
          { value: "332", label: "Keywords now ranking in Google's top three, from none in 2024" },
          { value: "0 → page one", label: "Every core local term for a new Isle of Wight clinic, within twelve months" },
        ]}
      />

      {/* Growth system */}
      <section id="what-we-improve" className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Growth system</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                What osteopathy patients look for before they book
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Osteopathy marketing works best when every part of your digital
                presence supports the next. Your SEO brings in relevant search
                traffic, your website turns that traffic into enquiries, your ads
                accelerate demand and your follow-up brings the right patients back.
              </p>
            </div>
          </FadeUp>
          {/* No icons in these cards. The 10 Aug review was blunt about it:
              "when I see a box with some words with some generic icon on it, it
              to me just screams preset website". */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "They search in pain, and locally",
                desc: "People look for an osteopath when something hurts now. We get your clinic ranking for local osteopath searches, condition-led queries and treatment-specific terms, so you are there at the moment they look.",
              },
              {
                title: "They check whether you look credible",
                desc: "Before they call, they read your treatment pages, look at your practitioners, scan your reviews and check how far away you are. We make your website answer all four quickly.",
              },
              {
                title: "They compare you with two or three others",
                desc: "Google Ads and social campaigns bring that decision forward, but only when they are connected to clear landing pages and conversion tracking that follows the enquiry through to a booking.",
              },
              {
                title: "They stop coming back long before they say so",
                desc: "Most osteopathy revenue is in maintenance and rebooking. AI patient reactivation re-engages people who need follow-up care or support with a recurring issue, without anyone in the clinic remembering to chase.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="card-surface group flex h-full flex-col p-7 md:p-8">
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
              { title: "SEO for Osteopaths", desc: "Technical and content SEO that ranks your practice for local and condition-specific searches.", href: "/seo-for-clinics/", cta: "Explore SEO for Clinics" },
              { title: "Google Ads for Osteopaths", desc: "Patient-ready campaigns targeting people actively searching for osteopathic treatment.", href: "/google-ads-for-clinics/", cta: "Explore Google Ads for Clinics" },
              { title: "Osteopath Website Design", desc: "Fast, trust-building websites designed specifically to convert visitors into new patients.", href: "/website-design-for-clinics/", cta: "Explore Clinic Website Design" },
              { title: "AI Patient Reactivation", desc: "Re-engage patients who haven't visited in months with personalised automated messages.", href: "/ai-integration/", cta: "Explore AI Patient Reactivation" },
              { title: "Local SEO", desc: "Strengthen the local signals and Google Business Profile that help you win 'near me' searches.", href: "/seo-for-clinics/", cta: "Explore Local SEO" },
              { title: "Social media paid ads", desc: "Facebook, Instagram and TikTok campaigns targeting local osteopathy patients by condition, age and location, built to fill specific treatment slots rather than chase generic brand awareness.", href: "/digital-marketing/", cta: "Paid Social for Clinics" },
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
                  What a general agency gets wrong about osteopathy
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
                  Those questions have to be settled on the page before the booking
                  button will do anything: what an osteopathic appointment actually
                  involves, where osteopathy differs from the physio down the road,
                  and how many sessions is realistic. Plain answers beat confident
                  ones.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-8">
                <h3 className="text-h3 text-[var(--color-ink)] mb-6">
                  For osteopaths who would rather not learn SEO
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
                  425% more Google clicks for a London osteopathy practice
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Bodyfunction Clinic in Angel went from 8 organic visitors a month
                  to 3,822 over two years, and from no top-three rankings at all to
                  332 of them. Google clicks rose 425% year on year.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  The <a href="/case-studies/bodyfunction-clinic/" className="text-[var(--color-accent-text)] hover:underline">Bodyfunction Clinic case study</a> sets
                  out every figure, where it came from, and the local rankings that
                  are still being worked on.
                </p>
                <div className="border-l-2 border-[var(--color-accent)] pl-4 mb-6">
                  <p className="text-body text-[var(--color-charcoal)]">
                    Bodyfunction is our own clinic. Danny Morgan founded it and
                    co-founded Clinic Evo, so this is the practice the method was
                    built and tested in before we offered it to anyone else.
                  </p>
                </div>
                <ArrowLink href="/case-studies/bodyfunction-clinic/">
                  Read the full clinic story
                </ArrowLink>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="relative overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/bodyfunction-clinic-team-at-reception-01.jpg"
                  alt="Bodyfunction Clinic — London osteopathy practice"
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
                From audit to growing practice
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-4">
                A clear, transparent process with no jargon and no long lock-in
                contracts.
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
        id="closing-cta"
        heading="Ready to grow your osteopathy practice?"
        subheading="Get a clear picture of your current visibility, website performance and missed enquiries — delivered within 2 business days."
        primaryLabel="See what's holding your clinic back"
        primaryHref="/free-clinic-audit/"
      />

      <StickyMobileCta hideNearId="closing-cta" />
    </>
  );
}

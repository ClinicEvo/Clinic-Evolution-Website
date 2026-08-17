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
import StickyMobileCta from "@/components/ui/StickyMobileCta";

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
      "Most people who go private have already tried the NHS route and hit a waiting list, so the searches worth owning are the ones carrying that intent: 'private physio [town]', 'physio near me', condition terms with 'private' attached. Your service pages then have to answer what those patients check first — how soon you can see them, what it costs, and whether you treat their condition. That is the first thing we look at in an audit.",
  },
  {
    question: "Which physiotherapy keywords do you target?",
    answer:
      "Broad local terms like 'physiotherapist near me' and 'private physio [city]', plus condition-specific queries like 'sports injury physio' and 'post-operative rehabilitation'. The condition terms get searched less often but convert better, because someone typing their diagnosis has already decided they need treatment. Which ones we chase depends on what you actually treat.",
  },
  {
    question: "Can you help with sports physiotherapy marketing specifically?",
    answer:
      "Yes, and it works better kept separate from your general physio pages. Someone searching 'sports injury physio' wants to know you treat their sport and how quickly they will be back training, which a general rehab overview does not answer. In practice that means its own service page, its own ad group and its own keyword set.",
  },
  {
    question: "How much do physiotherapy Google Ads cost?",
    answer:
      "Ad spend varies by location and competition. In London, expect £800–£1,500/month before the numbers settle enough to plan around. Outside major cities, £400–£800/month is often sufficient. We put projections for your area in the free audit.",
  },
  {
    question: "Do you sign long contracts?",
    answer:
      "No. Rolling monthly, 30 days' notice. Long contracts mainly protect agencies whose results arrive late — SEO that is working shows movement in Search Console inside a quarter, and you should be able to leave if it does not.",
  },
];

const steps = [
  {
    number: 1,
    title: "Free clinic audit",
    description:
      "We go through your website, Google Business Profile, local rankings and any existing ad account, then come back with what is currently losing you enquiries.",
    note: "Back to you within two business days.",
  },
  {
    number: 2,
    title: "What we would do first",
    description:
      "Which channels are worth your budget, which pages need writing or rewriting, and what to fix before you spend anything on ads.",
    note: "No obligation to go further.",
  },
  {
    number: 3,
    title: "Campaign launch",
    description:
      "We build the SEO foundations, the Google Ads campaigns or the website, depending on what the plan called for. Ads can produce enquiries in the first few weeks. SEO is slower — expect a quarter before rankings move.",
    note: "Conversion tracking goes in before anything goes live, so the numbers mean something later.",
  },
  {
    number: 4,
    title: "Ongoing management & reporting",
    description:
      "A monthly report in plain English: what moved, what did not, and what we changed because of it.",
    note: "Every figure traces back to Search Console or your ad account, so you can check it yourself.",
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
        rightPanel={<HeroImagePlaceholder src="/images/hero/physiotherapy-hero.jpg" alt="Physiotherapist treating a patient" />}
      />

      {/* Why Clinic Evo */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 items-center">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">Why Clinic Evo</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Physio marketing that speaks your language
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5 max-w-xl">
                  Physiotherapy covers a huge range of specialisms, from sports
                  rehabilitation to neurological rehab, women&apos;s health to
                  paediatric physio. Generic marketing agencies treat them all the
                  same. We don&apos;t.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-8 max-w-xl">
                  A sports rehab clinic and a neuro rehab clinic need different
                  pages, different ad copy and different search terms. We start
                  from what you actually treat and who is searching for it near you.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                  {[
                    { text: "Local SEO to rank above NHS listings for private treatment searches", icon: <><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L20 20"/></> },
                    { text: "Targeted PPC for sports injury, post-surgical rehab, and specialist conditions", icon: <><path d="M4 15l5-5 4 4 6-8"/><path d="M19 6v4h-4"/></> },
                    { text: "Patient reactivation to convert discharged patients into returning ones", icon: <><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0115-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 01-15 6.7L3 16"/></> },
                    { text: "Websites built for health and care, not just aesthetics", icon: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8"/></> },
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
                  Specialisms we help clinics grow
                </h3>
                <div className="flex flex-col gap-5">
                  {[
                    { icon: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/></>, label: "Sports rehabilitation", desc: "Targeting athletes and gym-goers who need fast, specialist care." },
                    { icon: <><rect x="6" y="4" width="12" height="16" rx="2"/><path d="M9.5 4h5v2h-5z"/><path d="M9 13l2 2 4-4"/></>, label: "Post-operative rehab", desc: "Reaching patients after surgery who need quality private follow-up." },
                    { icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>, label: "Chronic pain & MSK", desc: "Content that builds trust with patients managing long-term conditions." },
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
        eyebrow="What we can evidence"
        heading="Measured in a working MSK clinic."
        body="Every figure here comes from Google Search Console or Ahrefs and can be checked in either tool. Both tools measure search, not appointments, so we do not publish a booking figure."
        stats={[
          { value: "8 → 3,822", label: "Monthly organic visitors at a London MSK clinic, over two years" },
          { value: "+425%", label: "Google clicks year on year across the same period" },
          { value: "332", label: "Keywords now ranking in Google's top three, from none in 2024" },
        ]}
      />

      {/* Growth system */}
      <section id="what-we-improve" className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Growth system</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Physio clinics sell several services to several audiences
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Physiotherapy marketing works best when every part of your digital
                presence supports the next. Your SEO brings in relevant search
                traffic, your website turns that traffic into enquiries, your ads
                bring demand forward and your follow-up brings discharged patients back.
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
                Six areas, and most clinics do not need all of them at once. The
                audit says which two or three are worth starting with.
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
              { title: "Social media paid ads", desc: "Facebook and Instagram campaigns targeting local physiotherapy patients by condition, age and location, built to fill specific treatment slots rather than chase generic brand awareness.", href: "/google-ads-for-clinics/", cta: "Paid Ads for Clinics", icon: <><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></> },
            ].map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.07}>
                <Link href={s.href} className="card-surface group flex h-full flex-col p-7 md:p-8">
                  <div className="mb-5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{s.icon}</svg>
                  </div>
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

      {/* Why generic marketing is not enough */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">Specialist focus</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  What a general agency gets wrong about physiotherapy
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
                  For clinics with more than one practitioner
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
                      label: "Recommendations you can act on",
                      desc: "The audit comes back as a short list in priority order, not a document cataloguing everything that could theoretically be improved.",
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
                  clinics. Bodyfunction Clinic in Angel went from 8 organic visitors
                  a month to 3,822 over two years, and from no top-three rankings at
                  all to 332 of them.
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
                A clear path to more patients
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-4">
                We keep the process simple and jargon-free so you can focus on
                running your clinic.
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
                  Questions from physiotherapy clinic owners
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
        heading="Ready to grow your physiotherapy practice?"
        subheading="Get a clear picture of your current visibility, website performance and missed enquiries — delivered within 2 business days."
        primaryLabel="See what's holding your clinic back"
        primaryHref="/free-clinic-audit/"
      />

      <StickyMobileCta hideNearId="closing-cta" />
    </>
  );
}

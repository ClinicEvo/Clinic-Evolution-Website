import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import ArrowLink from "@/components/ui/ArrowLink";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import PageHero from "@/components/sections/PageHero";
import ProofBand from "@/components/sections/ProofBand";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ResearchPagePlan from "@/components/sections/ResearchPagePlan";
import RealClinicSites from "@/components/sections/mockups/RealClinicSites";
import StickyMobileCta from "@/components/ui/StickyMobileCta";

/*
 * Clinic website design — rebuilt around the research, 13 Aug 2026.
 *
 * The page used to argue "we build good clinic websites, and we also do SEO",
 * which put it in competition with /seo-for-clinics/ and left the actual
 * difference unsaid. The difference is the order of the work: we research the
 * market, the competitors and the searches first, so the site's architecture is
 * an answer to real demand rather than a guess. That is now the spine of the
 * page, and ResearchPagePlan shows the working with real Lind Street figures.
 *
 * Three changes came straight out of Danny's 10 Aug review:
 *   - The invented "yourclinic.co.uk" mock-up is gone. The hero carries two real
 *     sites we built (RealClinicSites), which is also what the brief asked for.
 *   - Three near-identical icon-card grids are down to one plain typographic
 *     list. The icon-in-a-box look was his "screams preset website" complaint.
 *   - Social proof sits directly under the hero rather than two thirds down.
 *
 * Also corrected: the old Bodyfunction card implied an arm's-length client. Danny
 * founded Bodyfunction and co-founded Clinic Evo, and the site says so.
 *
 * H1 note: the previous H1 carried no target phrase at all. The new one leads
 * with "Clinic website design", so this is a keyword gain, not a conversational
 * rewrite of a working title.
 */

export const metadata = buildMetadata({
  title: "Clinic Website Design for MSK Practices",
  description:
    "Clinic Evo designs clear, fast, booking-focused websites for UK physiotherapists, osteopaths and chiropractors, planned from search and competitor research before any design work starts.",
  path: "/website-design-for-clinics/",
});

const faqs = [
  {
    question: "What makes clinic website design different from normal web design?",
    answer:
      "Clinic website design needs to account for patient trust, clinical services, location searches, booking behaviour, practitioner credibility and healthcare-related decision making. A clinic website should not just look good. It should help patients understand their options and feel confident enough to book.",
  },
  {
    question: "How do you decide what pages my clinic website needs?",
    answer:
      "From research, before any design work starts. We look at what patients in your area actually search for, how much of that demand exists, which competitors currently hold those results and what Google is already rewarding for each one. That produces a page plan. Every page on the site exists because somebody is searching for it, which is why a site built this way keeps earning enquiries long after launch.",
  },
  {
    question: "Do you design websites for physiotherapy clinics?",
    answer:
      "Yes. Clinic Evo designs websites for UK physiotherapy clinics, including service pages, practitioner profiles, booking journeys, local SEO structure and content designed to support patient acquisition.",
  },
  {
    question: "Can you help with website design for osteopaths?",
    answer:
      "Yes. Clinic Evo supports osteopaths with website design, SEO structure, service pages and patient-facing copy that explains osteopathic care clearly and builds trust with new patients.",
  },
  {
    question: "Do you work with chiropractic clinics?",
    answer:
      "Yes. Clinic Evo creates chiropractic clinic websites that support SEO, service clarity, practitioner credibility and patient enquiry generation.",
  },
  {
    question: "Should I redesign my clinic website or improve the current one?",
    answer:
      "It depends on the quality of the current website. Some clinics need a full redesign, while others need better service pages, improved SEO, clearer calls to action, faster performance or a stronger booking journey. The free clinic audit is designed to identify the most practical next step.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Clinic Website Design", href: "/website-design-for-clinics/" },
];

/* The five things that lose a patient who was already interested. Straight from
   the page brief — kept as a plain list rather than cards on purpose. */
const frictionPoints = [
  {
    label: "Grainy or borrowed photography",
    body: "Stock images of models in a studio tell a patient nothing about your clinic, and they can tell.",
  },
  {
    label: "Navigation that hides the treatment",
    body: "If somebody cannot find the page about their problem in a few seconds, they go back to the results and open the next clinic.",
  },
  {
    label: "Branding that could belong to anyone",
    body: "A template site makes you interchangeable with the other three clinics in your town.",
  },
  {
    label: "Slow pages and awkward mobile layouts",
    body: "Most patients are searching on a phone, often in pain and rarely patient about it.",
  },
  {
    label: "A booking journey with friction in it",
    body: "Every extra click, form field or dead end between deciding and booking costs you appointments.",
  },
];

/* The six-step build from the page brief. Research is step one because it
   genuinely is — everything after it is a consequence of what it finds. */
const buildSteps = [
  {
    number: 1,
    title: "Understand the market",
    description:
      "Search demand in your catchment, a teardown of the clinics currently taking it, and a look at what Google is actually rewarding for each search. Nothing gets designed until this is done.",
  },
  {
    number: 2,
    title: "Turn the research into a page plan",
    description:
      "Which pages need to exist, what each one has to answer, how they link together and where the booking route sits. The site structure comes out of the research, not out of a template.",
  },
  {
    number: 3,
    title: "Build it properly",
    description:
      "Fast, technically clean, genuinely responsive, and written for the patient the page was planned for. Built to the highest spec we can hit on performance and technical health.",
  },
  {
    number: 4,
    title: "Connect the booking journey",
    description:
      "Your booking system integrated where it makes sense, with the friction taken out of the route from reading to booked. As much work as possible taken off the practice owner.",
  },
  {
    number: 5,
    title: "Install the measurement",
    description:
      "Analytics and conversion tracking from day one, so what happens next is a matter of evidence rather than opinion. We are not going on blind faith.",
  },
  {
    number: 6,
    title: "Improve with the data",
    description:
      "Real behaviour shows which pages earn enquiries and which need work. The site gets stronger over time instead of ageing quietly.",
  },
];

/* Logos. Bodyfunction is in the strip as well as the origin section — the strip
   is the fastest read on the page and the origin nuance is not worth omitting
   our strongest name from it. Neometa is Simon's agency rather than a clinic,
   which is why the label says "brands".
   Heights are tuned per mark because the aspect ratios differ wildly. */
const clientLogos = [
  { name: "Body Restore Clinic", src: "/images/clients/body-restore.png", w: 1714, h: 564, height: 34, dim: true },
  { name: "1 Percent Club", src: "/images/clients/one-percent-club.png", w: 500, h: 461, height: 48, dim: true },
  { name: "Lind Street Osteopathy", src: "/images/clients/lind-street.png", w: 1500, h: 500, height: 42 },
  { name: "Bodyfunction Clinic", src: "/images/clients/bodyfunction.png", w: 1850, h: 304, height: 24 },
  { name: "Neometa", src: "/images/clients/neometa.png", w: 1403, h: 238, height: 20 },
];

/* Both founders, because the work genuinely splits between them and an earlier
   version of this page credited the whole method to Danny.

   Simon's line matters: he resigned from the register, so he is a FORMER
   registered osteopath. Never "osteopath", "registered" or "practising" for him
   anywhere on the site. Danny does still practise, so his line stands. */
const founders = [
  {
    name: "Danny Morgan",
    role: "Osteopath, founder of Bodyfunction Clinic",
    image: "/images/danny-morgan-angel-clinic.png",
    alt: "Danny Morgan, osteopath, founder of Bodyfunction Clinic and co-founder of Clinic Evo",
    w: 1500,
    h: 1500,
  },
  {
    name: "Simon Smith",
    role: "Former registered osteopath, founder of Neometa",
    image: "/images/simon-smith.jpg",
    alt: "Simon Smith, co-founder of Clinic Evo and founder of Neometa",
    w: 1500,
    h: 1500,
  },
];

const buildScope = [
  {
    title: "New clinic websites",
    desc: "A complete website for a new or growing clinic, including homepage, service pages, practitioner pages, contact page and booking journey.",
  },
  {
    title: "Website redesigns",
    desc: "A clearer, stronger version of your current website, built around better structure, messaging, SEO and conversion.",
  },
  {
    title: "Service and condition pages",
    desc: "Pages built from the research, so patients find the thing that is wrong with them and Google understands your clinical relevance.",
  },
  {
    title: "Booking journey improvements",
    desc: "Cleaner calls to action, stronger contact flows and better integration with booking tools where appropriate.",
  },
  {
    title: "Local search foundations",
    desc: "Metadata, headings, internal links, schema and location signals built into the site structure from the start rather than bolted on later.",
  },
  {
    title: "Ongoing optimisation",
    desc: "Support after launch to improve content, track visibility and strengthen the pages most likely to generate enquiries.",
  },
];

export default function WebsiteDesignForClinicsPage() {
  return (
    <>
      <ServiceSchema
        name="Clinic Website Design"
        description="Specialist clinic website design for UK osteopaths, physiotherapists, chiropractors and private MSK clinics, planned from search and competitor research."
        url="/website-design-for-clinics/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="Clinic website design for MSK practices"
        heading={
          <>
            Clinic website design that starts with{" "}
            <em className="not-italic text-[var(--color-accent)]">research</em>, not a template
          </>
        }
        subtext="Clinic Evo designs websites for UK physiotherapists, osteopaths and chiropractors. We find out what patients in your area are searching for and which clinics are taking it, then build the site around the answer, so it keeps bringing you enquiries long after launch."
        bullets={[
          "Researched before it is designed",
          "Built for the searches your patients actually make",
          "Booking never more than one click away",
        ]}
        primaryCta={{ label: "Get a free website audit", href: "/free-clinic-audit/" }}
        breadcrumbs={crumbs}
        rightPanel={<RealClinicSites />}
        rightPanelWidth="520px"
        bulletsBelow
      />

      {/* Proof, high up — Danny asked for social proof near the top of every page,
          not two thirds of the way down it. */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-9">
        <div className="cx-main">
          <div className="flex flex-col items-center gap-7 sm:flex-row sm:justify-between sm:gap-10">
            <p className="text-label flex-shrink-0 text-[var(--color-muted)]">
              Brands we build and grow
            </p>
            {/* Grid below sm, free-wrapping row above. Five marks left to wrap on
                a phone give ragged rows and a lone logo on the last one; the odd
                mark out spans both columns so it centres. */}
            <div className="grid w-full grid-cols-2 place-items-center gap-x-8 gap-y-7 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-12 sm:gap-y-6">
              {clientLogos.map((logo, i) => (
                <div
                  key={logo.name}
                  className={`flex items-center ${
                    i === clientLogos.length - 1 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.w}
                    height={logo.h}
                    style={{ "--logo-h": `${logo.height}px` } as CSSProperties}
                    className={`cx-logo ${logo.dim ? "opacity-[0.85]" : ""}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The real patient decision */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <FadeUp>
              <p className="eyebrow mb-5">The real decision</p>
              <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                You are almost never the only clinic they are looking at
              </h2>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                A patient in pain opens three or four tabs. Yours is one of them. They are not
                comparing your clinical skill, because they have no way to judge it yet. They are
                comparing what they can see in about five seconds: whether you treat the thing
                that is wrong with them, whether you look like somebody who does this properly,
                and how quickly they can get an appointment.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                That is a decision your website makes on your behalf, several times a day, whether
                or not it was built to. A good-looking site that does not answer those three
                questions loses to a plainer one that does.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-label mb-6 text-[var(--color-charcoal)]">
                What loses a patient who was already interested
              </p>
              <ul role="list" className="border-t border-[var(--color-border)]">
                {frictionPoints.map((point) => (
                  <li key={point.label} className="border-b border-[var(--color-border)] py-5">
                    <p className="text-[15px] font-semibold text-[var(--color-ink)]">{point.label}</p>
                    <p className="text-body-sm mt-1.5 text-[var(--color-muted)]">{point.body}</p>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* The research — the spine of the page */}
      <section
        id="the-research"
        className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]"
      >
        <div className="cx-main">
          <div className="mb-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <FadeUp>
              <p className="eyebrow mb-5">Before we design anything</p>
              <h2 className="text-h2 leading-tight text-[var(--color-ink)]">
                We do not build until we know what needs building
              </h2>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                Most clinic websites are designed first and marketed afterwards, which is why so
                many of them end up as a brochure the owner has to send people to. We work the
                other way round. Before anything is designed we map the search demand in your
                catchment, pull apart the clinics currently holding those results, and look at what
                Google is already rewarding for each one.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                That research is the design brief. It decides which pages exist, what each one has
                to answer and how somebody gets from reading it to booked. Build it that way and
                every page is aimed at somebody who is already looking for exactly that, which is
                why the enquiries compound instead of stopping when the ad budget does.
              </p>
            </FadeUp>
          </div>

          <ResearchPagePlan />

          {/* What the foundation turns into. The chart is the payoff for the table
              above: pages aimed at real demand make organic the channel that
              feeds the clinic, and it keeps running when nothing is being spent. */}
          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <FadeUp>
              <h3 className="text-h3 mb-5 text-[var(--color-ink)]">
                Why this is worth doing in the right order
              </h3>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                A site built on research earns its patients from search, and search does not stop
                when you stop paying. Every page you add on a term somebody is genuinely typing
                compounds on the last one, so the site gets more valuable the longer it runs.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                Ads are still worth running, and we run them — they fill the diary while search
                matures. But paid traffic is rented and organic is owned, which is why we would
                rather spend the first fortnight on research than on a homepage carousel.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <figure>
                <div className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
                  <Image
                    src="/images/website-design/seo-first-design.png"
                    alt="Google Analytics chart showing organic search as by far the largest source of new patients for a Clinic Evo clinic website"
                    width={526}
                    height={338}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, 440px"
                  />
                </div>
                <figcaption className="text-body-sm mt-4 text-[var(--color-muted)]">
                  New patients by the channel that first brought them in, on a clinic site we
                  built. Google Analytics 4.
                </figcaption>
              </figure>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* The six-step build */}
      <section id="what-we-build" className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <FadeUp>
                <p className="eyebrow mb-5">How we build</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  Six steps, in this order, every time
                </h2>
                <p className="text-body text-[var(--color-muted)]">
                  The order matters more than any single step. Research before design, measurement
                  before opinion, and improvement as a habit rather than a rescue job two years
                  later.
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="mt-9 border-t border-[var(--color-border)] pt-7">
                  <p className="text-body-sm text-[var(--color-muted)]">
                    Once the foundation is right, the same research feeds{" "}
                    <Link href="/seo-for-clinics/" className="text-[var(--color-accent-text)] hover:underline">
                      ongoing SEO
                    </Link>
                    ,{" "}
                    <Link
                      href="/google-ads-for-clinics/"
                      className="text-[var(--color-accent-text)] hover:underline"
                    >
                      Google Ads
                    </Link>
                    ,{" "}
                    <Link href="/digital-marketing/" className="text-[var(--color-accent-text)] hover:underline">
                      paid social
                    </Link>{" "}
                    and{" "}
                    <Link href="/ai-integration/" className="text-[var(--color-accent-text)] hover:underline">
                      patient reactivation
                    </Link>
                    . One piece of work, not four.
                  </p>
                </div>
              </FadeUp>
            </div>
            <ProcessSteps steps={buildSteps} />
          </div>
        </div>
      </section>

      {/* Proof band — the Lind Street standing start. Image is the clinic sign
          rather than the homepage, which the hero already shows. */}
      <ProofBand
        eyebrow="A site built from nothing"
        stat={{ value: "0 → page one", label: "Every core local search term, twelve months from launch" }}
        body="Lind Street Osteopathy launched with no logo, no website and no search history of any kind. A year on it holds position one for its own name at a 67% click-through rate, and page one across its whole catchment."
        source="Google Search Console, lindstreetosteopathy.co.uk, to Jul 2026"
        image="/images/lind-street/clinic-sign.png"
        imageAlt="The Lind Street Osteopathy clinic sign in Ryde, Isle of Wight"
        ctaLabel="Read the Lind Street case study"
        ctaHref="/case-studies/lind-street-osteopathy/"
      />

      {/* What the clinical side actually changes */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <FadeUp>
              <p className="eyebrow mb-5">Why healthcare people build better clinic sites</p>
              <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                Patients search for what is wrong with them, not for your treatment list
              </h2>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                This is the single most useful thing we know, and it changes the whole structure of
                a clinic website. Nobody wakes up wanting osteopathy. They wake up unable to turn
                their head, and they type that. A site organised around the services you sell will
                always lose to one organised around the problems people arrive with.
              </p>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                At Lind Street the condition pages outperform the general osteopathy and sports
                massage pages by a distance — the fibromyalgia, hypermobility and TMJ pages are
                doing the heavy lifting. That is not a design opinion, it is what the data showed
                once the pages were live.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                We know it because this business was built inside a working clinic, and because we
                have sat on both sides of it: running the practice and building the thing that
                fills it. It shapes the practitioner pages, the way treatment gets explained, what
                goes above the fold, and which questions a page has to answer before somebody will
                book.
              </p>
            </FadeUp>

            {/* Treatment, not a reception shot: the point of the section is what
                happens in the room, and a square holds the column better than a
                landscape crop beside three paragraphs. */}
            <FadeUp delay={0.1}>
              <div className="overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] shadow-[var(--shadow-card)]">
                <Image
                  src="/images/bodyfunction-clinic-neck-treatment-session-close.jpg"
                  alt="An osteopath treating a patient's neck at Bodyfunction Clinic in Islington"
                  width={1400}
                  height={1400}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What we can build — one plain list, where three card grids used to be */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Scope</p>
              <h2 className="text-h2 mb-4 text-[var(--color-ink)]">
                What we can build or improve for your clinic
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Depending on where you are starting from, this is either a new website or a
                stronger version of the one you have.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
            {buildScope.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.05}>
                <div className="flex gap-5 border-t border-[var(--color-border)] py-6">
                  <span className="font-display text-lg font-light leading-none text-[var(--color-muted-light)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-h4 mb-1.5 text-[var(--color-ink)]">{item.title}</h3>
                    <p className="text-body-sm text-[var(--color-muted)]">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Who we help</p>
              <h2 className="text-h2 mb-4 text-[var(--color-ink)]">
                Website design for physios, osteopaths and chiropractors
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Every discipline is searched for differently, so every one gets its own research.
              </p>
            </div>
          </FadeUp>
          <div className="flex flex-col gap-5">
            {[
              {
                title: "Physiotherapy clinics",
                desc: "Private physiotherapy clinics need websites that clearly explain treatment pathways, conditions, practitioner expertise and booking options.",
                href: "/physiotherapy-marketing/",
                cta: "Physiotherapy Marketing",
                watermarkImg: "/images/watermark-physio.jpg",
              },
              {
                title: "Osteopathy clinics",
                desc: "Osteopath websites need to explain the value of osteopathic care, build trust quickly and show how treatment can support common pain and mobility concerns.",
                href: "/osteopath-marketing/",
                cta: "Marketing for Osteopaths",
                watermarkImg: "/images/watermark-osteopath.jpg",
              },
              {
                title: "Chiropractic clinics",
                desc: "Chiropractic websites need clear messaging, strong trust signals and careful positioning around symptoms, treatment expectations and patient confidence.",
                href: "/chiropractic-marketing/",
                cta: "Chiropractic Marketing",
                watermarkImg: "/images/watermark-chiro.jpg",
              },
            ].map((item, i) => (
              <FadeUp key={item.href} delay={i * 0.09}>
                <Link
                  href={item.href}
                  className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[var(--shadow-card-hover)] sm:flex-row"
                  style={{ background: "var(--color-paper)" }}
                >
                  <div className="relative h-52 w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-64 lg:w-72">
                    <Image
                      src={item.watermarkImg}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 288px"
                    />
                    <div className="absolute inset-0 bg-[var(--color-ink)]/10" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-7 md:p-9 lg:p-10">
                    <p className="eyebrow mb-4">{item.title}</p>
                    <p className="text-body-sm mb-6 text-[var(--color-muted)]">{item.desc}</p>
                    <span
                      className="inline-flex items-center gap-2 transition-all group-hover:gap-3 group-hover:text-[var(--color-accent)]"
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "var(--color-ink)",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                      }}
                    >
                      {item.cta}
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path
                          d="M3 7h8M7 3l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Where this came from */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Both founders, because the work splits between them: Danny runs the
                clinic, Simon does the web and search side. An earlier version
                credited the whole method to Danny, which was wrong. */}
            <FadeUp>
              <div className="grid max-w-[440px] grid-cols-2 gap-5">
                {founders.map((person) => (
                  <figure key={person.name}>
                    <div className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-card)]">
                      <Image
                        src={person.image}
                        alt={person.alt}
                        width={person.w}
                        height={person.h}
                        className="h-auto w-full"
                        sizes="(max-width: 1024px) 45vw, 200px"
                      />
                    </div>
                    <figcaption className="mt-3">
                      <span className="block text-[0.85rem] font-semibold text-[var(--color-ink)]">
                        {person.name}
                      </span>
                      <span className="text-[0.75rem] leading-snug text-[var(--color-muted)]">
                        {person.role}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="eyebrow mb-5">Where this came from</p>
              <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                Both halves of this job, under one roof
              </h2>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                Clinic Evo has two founders and they cover the two sides of the problem. Danny
                Morgan is an osteopath who founded Bodyfunction Clinic in Islington and still
                practises there, so he knows exactly what a clinic needs in order to grow. Simon
                Smith trained in osteopathy on the same course and is a former registered
                osteopath, then founded Neometa — the web design, SEO and digital marketing agency
                that built Bodyfunction&apos;s website and search presence.
              </p>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                That is where this method came from, and why it is not the usual agency pitch. One
                side of the table has run the diary, taken the calls and felt a quiet week. The
                other has spent years getting websites found. Bodyfunction was the first clinic we
                did it on together, which is also why it is not a client and we would rather say so
                plainly.
              </p>
              <p className="text-body mb-8 text-[var(--color-muted)]">
                Eight people a month finding that clinic through Google became nearly four
                thousand. Everything on this page is the method that got it there, written down so
                other clinic owners do not have to work it out the hard way.
              </p>
              <ArrowLink href="/case-studies/bodyfunction-clinic/">
                Read the Bodyfunction Clinic case study
              </ArrowLink>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section grain border-t border-[var(--color-border)] bg-[var(--color-surface)] !pb-10">
        <div className="cx-main">
          <div className="mx-auto max-w-3xl">
            <FadeUp>
              <div className="mb-10 text-center">
                <p className="eyebrow mb-5">FAQ</p>
                <h2 className="text-h2 text-[var(--color-ink)]">Clinic website design FAQs</h2>
              </div>
            </FadeUp>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] px-6 py-2 shadow-[var(--shadow-card)] sm:px-10">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        id="closing-cta"
        heading="Start with a free clinic website audit"
        subheading="We will show you what your site is already ranking for, what your local competitors are taking that you are not, and what a patient hits when they try to book with you."
      />

      <StickyMobileCta hideNearId="closing-cta" />
    </>
  );
}

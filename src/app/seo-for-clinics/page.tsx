import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import ArrowLink from "@/components/ui/ArrowLink";
import Button from "@/components/ui/Button";
import StickyMobileCta from "@/components/ui/StickyMobileCta";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ProcessSteps from "@/components/sections/ProcessSteps";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import PageHero from "@/components/sections/PageHero";
import ProofBand from "@/components/sections/ProofBand";
import SearchSurfaces from "@/components/sections/SearchSurfaces";
import BrowserFrame from "@/components/sections/mockups/BrowserFrame";
import SearchConsolePanel from "@/components/sections/mockups/SearchConsolePanel";
import {
  StatTiles,
  OrganicGrowthChart,
  PositionDumbbell,
  RankingTable,
} from "@/components/case-studies/CaseStudyCharts";

/*
 * SEO for clinics — rebuilt around Danny's 10 Aug review and the page brief.
 *
 * The old page argued its case entirely in prose and illustrated it with three
 * unattributed screenshots. It ranked-in-waiting but did not sell, which is the
 * whole of Danny's objection: "it doesn't speak to the individual, it doesn't
 * speak to the pain points, it doesn't clearly demonstrate what we're going to
 * do and why you should pick up the phone."
 *
 * What changed:
 *   - Plain-English explanation of what SEO does, high on the page, before any
 *     jargon. He came at this as the layman who does not know what SEO means.
 *   - Real, sourced evidence replacing generic claims: Bodyfunction's two-year
 *     arc and Lind Street's standing start, using the same chart components as
 *     the case studies so the proof reads as one body of work.
 *   - Every screenshot now sits in a device or browser shell. A bare landscape
 *     export was exactly the "stuff like this" he pointed at.
 *   - One hero CTA. "See how clinic SEO works" is gone — his brain only wants
 *     to deal with one.
 *   - The three hero ticks moved into their own numbered section beneath it.
 *   - Icon-in-a-box card grids removed. "When I see a box with some words with
 *     some generic icon on it, it screams preset website."
 *   - A section on how search is changing (AI answers, map pack, blue links),
 *     which he asked for and the page did not have.
 *
 * What deliberately did NOT change, because Simon defended both on the call:
 *   - The H1. It carries "SEO for clinics", "patient" and "enquiries", and the
 *     domain has no authority to spend on a more conversational title yet.
 *   - The volume of search-targeted copy, including "Why most clinic websites
 *     struggle to rank", which exists to win the AEO/GEO snippet. The fix for
 *     heavy copy here is presentation, not deletion.
 *
 * EVIDENCE RULE: every figure on this page traces to Google Search Console or
 * Ahrefs via case-study-data-bodyfunction-lindstreet.md. If you add one, add its
 * source with it. Do not round up, and do not imply clicks are bookings.
 */

/* Title carries the head term once, then spends the rest of the space on the
   three disciplines rather than repeating itself — the previous version said
   "SEO" three times and "clinic" three times once the site suffix landed. The
   H1 below is deliberately unchanged; that one was defended on the 10 Aug call. */
export const metadata = buildMetadata({
  title: "SEO for Medical Clinics | Osteopaths, Physios, Chiropractors",
  description:
    "Specialist SEO for medical clinics, osteopaths, physiotherapists and chiropractors. Improve local visibility, service pages, enquiries and patient bookings.",
  path: "/seo-for-clinics/",
});

const faqs = [
  {
    question: "What is SEO for clinics?",
    answer:
      "SEO for clinics is the process of improving a clinic website so more patients can find it through Google. It usually includes technical SEO, local SEO, service page optimisation, content strategy, Google Business Profile improvements and internal linking.",
  },
  {
    question: "Is local SEO important for private clinics?",
    answer:
      "Yes. A clinic can only treat people who can physically reach it, so the searches worth winning either carry a place name or trigger the map pack. Local SEO is the work that gets a clinic into those results: service and condition pages tied to the areas you cover, consistent name and address data, and a Google Business Profile that matches the site.",
  },
  {
    question: "How long does clinic SEO take to work?",
    answer:
      "Some improvements can appear within weeks, especially when a site has low competition keywords or pages that are already close to ranking. Bigger gains usually take several months because Google needs time to crawl, assess and trust the updated website. On Bodyfunction Clinic the first movement showed within a couple of months and the curve turned sharply around six months in.",
  },
  {
    question: "Does SEO still matter now that Google answers questions with AI?",
    answer:
      "Yes, and arguably more. AI answers are assembled from pages Google already trusts, so the work that earns a top ranking is the same work that gets a clinic quoted in an AI answer: clear structure, genuine clinical expertise on the page, consistent local signals and content that answers the question directly. What changes is that being visible now means appearing across AI answers, the map pack and the standard results, instead of one blue link.",
  },
  {
    question: "Is clinic SEO a maintenance package?",
    answer:
      "No. Maintenance keeps a website working. Clinic SEO is a growth package: it is ongoing work to increase how many people find your clinic through search, expand the terms you appear for and turn more of that visibility into enquiries. Search results change constantly, and competitors keep publishing, so a site left alone slowly loses ground.",
  },
  {
    question: "Do clinics need blog posts for SEO?",
    answer:
      "Blog posts can help, but clinics should usually fix core service pages first. The most important SEO pages are often the treatment, condition, location and practitioner pages that support patient decisions and booking intent. Where content does earn its place, it compounds: one Bodyfunction condition article now ranks for around 250 separate search terms on its own.",
  },
  {
    question: "How much does SEO cost for a clinic?",
    answer:
      "It depends on the size of your website, how competitive your area is and how much of the work is already done. A single-practitioner clinic in a small town and a multi-site practice in a city are different jobs, and quoting a single number for both would be guesswork. The free audit is what makes the price real: we look at your site, your rankings and your local competition, then tell you what the work involves and what it costs. There is no charge for that and no obligation afterwards.",
  },
  {
    question: "What happens after the free clinic SEO audit?",
    answer:
      "We come back to you within two business days with what we found: what you already rank for, which searches in your area are going to competitors, what is holding the site back technically, and where a patient drops out on the way to booking. You get those findings whether or not you work with us. If you do want to go ahead, that audit becomes the plan and we agree scope and price from it.",
  },
  {
    question: "We have been burnt by a marketing agency before. How is this different?",
    answer:
      "Two things. Clinic Evo is run by healthcare professionals, not by marketers who took on a clinic as a client, so the work is built around how patients actually choose a practitioner. And the results are reported in your own Google Search Console and Ahrefs, which you can log into and check yourself, instead of in a monthly PDF only we can produce. The figures on this page come from those tools and name their source for exactly that reason.",
  },
  {
    question: "Can Clinic Evo help with SEO for an existing clinic website?",
    answer:
      "Yes. Clinic Evo can audit an existing clinic website, identify SEO weaknesses, improve service pages, strengthen internal linking, refine local SEO and create a clearer plan for increasing patient enquiries.",
  },
];

const steps = [
  {
    number: 1,
    title: "Audit",
    description:
      "We review your website structure, rankings, technical setup, Google Business Profile, local visibility and conversion points, and tell you what is actually holding the site back.",
  },
  {
    number: 2,
    title: "Map",
    description:
      "We map the right search terms to the right pages so your homepage, discipline pages, service pages and resources are not competing with each other for the same result.",
  },
  {
    number: 3,
    title: "Improve",
    description:
      "We improve the pages, metadata, internal links, technical issues and content gaps most likely to support rankings and enquiries, working down from the ones that move first.",
  },
  {
    number: 4,
    title: "Grow",
    description:
      "Then we keep going. New condition pages, new local terms, new competitors answered, tracked against keyword movement, organic traffic and booking-related actions.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "SEO for Clinics", href: "/seo-for-clinics/" },
];

/* The three hero ticks, out of the hero and into their own section — the brief
   and the review both asked for this. Numbered rather than iconned on purpose. */
const pillars = [
  {
    title: "Found where patients look",
    body: "Local searches, the map pack, condition and symptom terms, and the AI answers that increasingly sit above them.",
  },
  {
    title: "Built around enquiries, not rankings",
    body: "A top ranking that nobody clicks has done nothing for your diary. We report on the enquiries, calls and booking clicks, in your own accounts.",
  },
  {
    title: "MSK and private healthcare only",
    body: "Every clinic we have grown is an osteopathy, physiotherapy or chiropractic practice. We are not a general agency with a healthcare page.",
  },
];

/* Written to the clinic owner, not about the service. The last one is the
   quiet killer: on the 10 Aug call Danny described this reader as somebody
   whose "head is all over the place with all the different features, and they
   just don't know what to do". Naming that is what earns the next scroll. */
const painPoints = [
  "Quiet weeks you cannot explain, and no lever to pull when one arrives.",
  "A clinic you know you are better than, sitting above you in Google.",
  "A website that looks perfectly nice and has never brought anybody in.",
  "Money already spent with an agency that sent reports instead of patients.",
  "No real idea which of your marketing works, or whether any of it does.",
  "The nagging feeling that you ought to have worked this out by now.",
];

/* Logos. Bodyfunction is here as well as in the evidence section below — the
   strip is the fastest read on the page and leaving the clinic with the biggest
   numbers off it was costing more than the origin-story nuance was worth.
   Neometa is Simon's agency rather than a clinic, hence "brands" in the label.
   Heights tuned per mark — the ratios differ wildly. */
const clientLogos = [
  { name: "Body Restore Clinic", src: "/images/clients/body-restore.png", w: 1714, h: 564, height: 34, dim: true },
  { name: "1 Percent Club", src: "/images/clients/one-percent-club.png", w: 500, h: 461, height: 48, dim: true },
  { name: "Lind Street Osteopathy", src: "/images/clients/lind-street.png", w: 1500, h: 500, height: 42 },
  { name: "Bodyfunction Clinic", src: "/images/clients/bodyfunction.png", w: 1850, h: 304, height: 24 },
  { name: "Neometa", src: "/images/clients/neometa.png", w: 1403, h: 238, height: 20 },
];

/* Ahrefs, bodyfunction.co.uk, Aug 2024 vs Aug 2026. Search Console for clicks. */
const bodyfunctionStats = [
  {
    display: "+425%",
    label: "Clicks from Google, year on year",
    source: "Search Console, 9,345 → 49,065",
  },
  {
    display: "8 → 3,822",
    /* "Estimated" is not hedging — Ahrefs models organic traffic, it does not
       measure it, and the chart beside this tile already says so. The evidence
       rule at the top of this file requires the label to match the source. */
    label: "Estimated monthly visitors from search",
    source: "Ahrefs, Aug 2024 → Aug 2026",
  },
  {
    display: "0 → 383",
    label: "Search terms ranking in the top three",
    source: "Ahrefs, from 104 to 1,112 terms overall",
  },
  {
    display: "5x",
    label: "More people searching for the clinic by name",
    source: "Search Console, combined brand terms",
  },
];

/* GSC year-on-year position and click movement on individual patient questions.
   These are the honest ones — real terms, real jumps, no rounding. */
const bodyfunctionMoves = [
  { query: "neck pain and nausea", before: 17.8, after: 4.6, note: "2 → 68 clicks" },
  { query: "can back pain cause stomach pain", before: 21.0, after: 6.5, note: "1,833 → 5,241 clicks" },
  { query: "lower back pain and groin pain", before: 18.8, after: 6.0, note: "6 → 34 clicks" },
  { query: "is back pain a sign of pregnancy", before: 19.4, after: 7.3, note: "1 → 26 clicks" },
  { query: "can neck pain cause nausea", before: 14.9, after: 6.5, note: "4 → 32 clicks" },
];

/* Lind Street, Search Console, twelve months from launch. Every term below is a
   commercial local search — the ones that put somebody on a treatment table.

   "osteopath near me" used to sit in this list at position 5.4 on 3 clicks and a
   5.1% CTR. It was the one row that argued against the table: a near-zero number
   next to a claim that this is what winning looks like, inviting the reader to
   total the column and conclude the whole thing came to nothing. It is a
   national term that resolves locally, so a small catchment barely registers on
   it, and it earned less than any other line here. Dropped rather than defended. */
const lindStreetRankings = [
  { query: "lind street osteopathy", position: 1.0, clicks: 113, ctr: "67%" },
  { query: "ryde osteopath", position: 4.0, clicks: 22, ctr: "15.2%" },
  { query: "osteopath ryde", position: 4.9, clicks: 45, ctr: "19.4%" },
  { query: "sports massage ryde", position: 5.2, clicks: 6, ctr: "20.0%" },
  { query: "osteopath isle of wight", position: 7.4, clicks: 67, ctr: "7.5%" },
];

/* What healthcare changes about the strategy. Prose rather than cards — this is
   the section that has to prove specialism rather than assert it. */
const healthcareDifferences = [
  {
    label: "Clinical authorship has to be visible on the page",
    body: "Google's search quality guidelines single out content that can affect somebody's health or money. Pages about treatment need a named practitioner, real credentials and accurate claims, or they underperform however well optimised they are.",
  },
  {
    label: "Patients search for the problem, not the treatment",
    body: "Nobody wakes up wanting osteopathy. They wake up unable to turn their head, and type that — which is why the condition pages carry more weight here than the service list.",
  },
  {
    label: "Trust signals are ranking signals here",
    body: "Registration details, practitioner profiles, reviews, consistent name and address data, clear pricing and genuine clinic photography all feed both the patient's decision and Google's confidence in the site.",
  },
  {
    label: "The map pack is often worth more than position one",
    body: "For a local clinic, appearing in the three businesses shown beside the map can matter more than any organic ranking. It is a separate piece of work with different signals behind it.",
  },
  {
    label: "Regulated claims constrain the copy",
    body: "The ASA and the professional registers limit what a clinic can promise. Writing pages that rank without promising an outcome the clinic is not allowed to promise takes knowing both sides.",
  },
];

/* The old six-card icon grid, as a plain numbered list. */
const whatWeImprove = [
  {
    title: "Service and condition pages",
    desc: "The pages describing your treatments and the problems you fix, made clearer for patients and legible to Google.",
  },
  {
    title: "Local SEO and the map pack",
    desc: "Location terms, service-area relevance, Google Business Profile alignment and the signals behind the three results shown next to the map.",
  },
  {
    title: "Technical SEO",
    desc: "Crawlability, metadata, headings, page speed, indexation, broken links, redirects, schema and the technical barriers holding rankings back.",
  },
  {
    title: "Content and authority",
    desc: "The pages and resources your clinic needs to answer real patient questions, and the clinical credibility that makes Google trust them.",
  },
  {
    title: "Internal linking",
    desc: "Connecting services, conditions, locations and resources so Google understands your expertise and patients move through the site more easily.",
  },
  {
    title: "From search result to booked appointment",
    desc: "What a patient meets between clicking the result and reaching the booking form, and where they currently give up.",
  },
];

/* Written as things we do, not things we suggest.
   Every one of these used to end in "recommendations", "plan" or "checks",
   which read as a document handed over for the clinic owner to action. That is
   the opposite of what we sell — Danny's line on the call was "we're offering
   to do all the dirty work" — and the process section on this same page already
   says we make the changes. This list now matches it.
   The honest qualifier lives in one line under the list rather than being
   sprinkled through eleven bullets, where it weakened all of them. */
const included = [
  "A full audit of your site, your rankings and your local visibility",
  "Keyword mapping across every service, condition and location you cover",
  "Metadata and headings rewritten across the site",
  "Service and condition pages written for patients and for search",
  "Your Google Business Profile brought into line with the site",
  "Technical SEO issues fixed, not just flagged",
  "Schema markup implemented",
  "Internal linking built out so your best pages carry the rest",
  "A content roadmap aimed at the searches your patients actually make",
  "The route from search result to enquiry tightened up",
  "Monthly reporting on visibility, traffic and enquiries",
];

const commonIssues = [
  "Thin or generic service pages",
  "No clear keyword ownership between pages",
  "Weak local SEO signals",
  "Poor internal linking",
  "Treatment pages that do not answer patient concerns",
  "Technical issues affecting crawlability or indexation",
  "Google Business Profile not aligned with the website",
  "Blog posts that do not support commercial pages",
  "Unclear calls to action and booking pathways",
];

export default function SeoForClinicsPage() {
  return (
    <>
      <ServiceSchema
        name="SEO for Medical Clinics"
        description="Specialist SEO for UK private healthcare clinics, osteopaths, physiotherapists and chiropractors."
        url="/seo-for-clinics/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="Specialist SEO for private healthcare clinics"
        heading={
          <>
            SEO for clinics that need{" "}
            <em className="not-italic text-[var(--color-accent)]">more patient enquiries</em>
          </>
        }
        subtext="When somebody near you searches for the treatment they need, SEO decides whether your clinic appears at all. Clinic Evo does that work for UK osteopaths, physiotherapists and chiropractors. Every figure on this page comes from a named clinic's Search Console or Ahrefs account, with the source and the date beside it."
        primaryCta={{ label: "Get a free clinic SEO audit", href: "/free-clinic-audit/" }}
        breadcrumbs={crumbs}
        rightPanelWidth="520px"
        rightPanel={<SearchConsolePanel />}
      />

      {/* The three hero ticks, given their own room. Numbered, not iconned. */}
      <section className="section border-t border-[var(--color-border)] bg-[var(--color-paper)] !py-14 sm:!py-16">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-x-14 gap-y-2 md:grid-cols-3">
            {pillars.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.07}>
                <div className="flex gap-5 border-t border-[var(--color-border)] py-6 md:border-t-0 md:pt-0">
                  <span className="font-display text-lg font-light leading-none text-[var(--color-muted-light)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    {/* Styled as a heading, not marked up as one. These three are
                        a feature strip, not sections of the document, and as
                        <h2> they were the first three headings after the H1 —
                        the most valuable slots on the page spent on labels that
                        say nothing about clinic SEO. Out of the outline, the H1
                        now runs straight into the real H2s. */}
                    <p className="text-h4 mb-1.5 text-[var(--color-ink)]">{p.title}</p>
                    <p className="text-body-sm text-[var(--color-muted)]">{p.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>


      {/* Social proof high on the page, as the review asked, rather than two
          thirds of the way down it. */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-9">
        <div className="cx-main">
          <div className="flex flex-col items-center gap-7 sm:flex-row sm:justify-between sm:gap-10">
            <p className="text-label flex-shrink-0 text-[var(--color-muted)]">
              Brands we grow in search
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

      {/* The moment of recognition, before any explaining.
          Danny's core objection to the old page was that it never spoke to the
          person reading it: "someone who searches osteopath marketing is probably
          stressed and desperate for a solution... our clients are going to care
          what the pain point is and what you're going to do to help." Nothing on
          the page said "this is you" before it started teaching. This does, and
          it sits above the explanation on purpose. */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <FadeUp>
              <p className="eyebrow mb-5">If this sounds familiar</p>
              <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                The patients are out there. They are just finding somebody else
              </h2>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                Somebody two streets from your clinic typed their symptom into Google
                this morning and had an appointment booked by lunchtime. Not with you,
                and not because they weighed you up and chose the other clinic. Because
                yours never came up.
              </p>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                The demand is already in your catchment, today. You are not trying to
                create patients out of nothing; you are losing people who are already
                looking for exactly what you do.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                All of it is fixable, and none of it requires you to become a marketer.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-2 md:p-3">
                <p className="text-label px-5 pb-4 pt-5 text-[var(--color-accent)]">
                  What this usually feels like
                </p>
                <ul role="list" className="overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-paper)]">
                  {painPoints.map((point) => (
                    <li
                      key={point}
                      className="border-b border-[var(--color-border)] px-5 py-4 last:border-b-0"
                    >
                      <span className="text-[15px] font-medium leading-snug text-[var(--color-ink)]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why most clinic websites struggle to rank.
          This H2 is an AEO/GEO snippet target — keep the exact wording. */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
            <FadeUp>
              <p className="eyebrow mb-5">Common problems</p>
              <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                Why most clinic websites struggle to rank
              </h2>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                Three reasons, usually. The homepage is trying to cover every service
                at once, so it ranks clearly for none of them. The service pages are
                too thin to compete with anything. And the condition pages patients
                actually search for, the ones naming a symptom, were never written.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                The biggest gains usually come from fixing the structure first: what
                you treat, where you are, why anyone should trust you, and which
                single page owns each search.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-7 md:p-8">
                <p className="text-label mb-5 text-[var(--color-accent)]">
                  What we usually find in an audit
                </p>
                <div className="flex flex-col gap-3">
                  {commonIssues.map((issue) => (
                    <div key={issue} className="flex items-start gap-3">
                      <svg
                        className="mt-1 flex-shrink-0 text-[var(--color-error)]"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3.5 3.5l7 7M10.5 3.5l-7 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="text-body-sm text-[var(--color-muted)]">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* A place to act, in the middle of the longest stretch without one.
          The reader has just been handed a list of nine faults; "which of these
          are true of mine" is the question they are already asking, so the ask
          costs nothing to make here.

          Light card rather than a second dark panel — the dark one further down
          is the page's one big break, and running two of them makes the first a
          rehearsal. Pattern borrowed from the "step one is free" card on
          /google-ads-for-clinics/. */}
      <section className="bg-[var(--color-paper)] pt-14 sm:pt-16">
        <div className="cx-main">
          <FadeUp>
            <div className="flex flex-col gap-6 rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="text-h4 mb-1.5 text-[var(--color-ink)]">
                  Which of those are true of your site?
                </p>
                <p className="text-body-sm max-w-xl text-[var(--color-muted)]">
                  The audit works through this list on your clinic and tells you which
                  of them are actually costing you patients.
                </p>
              </div>
              <Button href="/free-clinic-audit/" size="md" className="flex-shrink-0">
                Get a free clinic SEO audit
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Plain English, before any jargon. */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <FadeUp>
              <p className="eyebrow mb-5">In plain English</p>
              <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                Having a website does not mean Google shows it to anybody
              </h2>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                Nobody tells clinic owners this. Your website going live does not put
                you in front of the person typing &ldquo;osteopath near me&rdquo; at
                nine on a Sunday night. Google chooses who to show, every time, out of
                every clinic in your catchment. SEO is the work that makes it choose
                you.
              </p>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                It is not advertising. You are not renting the position, so it does
                not disappear the day you stop paying. Turn Google Ads off and the
                enquiries stop the same afternoon. A page that ranks carries on
                working while you build the next one, which is why we do search
                before anything else.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                The demand is already there. Right now it is going to whichever
                clinic Google decided to put in front of it.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <BrowserFrame
                label="Ahrefs — organic vs paid, a Clinic Evo clinic"
                caption="Left column is what the clinic earns through search. Right column is what it pays for. Nothing in this account is bought."
              >
                <div className="px-4 py-4">
                  <Image
                    src="/images/seo-for-clinics/seo-organic-search.png"
                    alt="Ahrefs report showing 1.2K organic keywords and 3.4K monthly organic traffic against zero paid keywords and zero paid traffic"
                    width={660}
                    height={446}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, 460px"
                  />
                </div>
              </BrowserFrame>
            </FadeUp>
          </div>

          {/* Second row, reversed, so the page alternates instead of stacking two
              screenshots down one edge. */}
          <div className="mt-16 grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <FadeUp>
              <BrowserFrame
                label="Google Analytics — new users by channel"
                caption="First visit source for new users on a clinic site we run."
              >
                <div className="px-4 py-4">
                  <Image
                    src="/images/seo-for-clinics/seo-new-users.png"
                    alt="Analytics report showing organic search generating far more new users than direct, paid search, social or referral channels combined"
                    width={539}
                    height={400}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, 460px"
                  />
                </div>
              </BrowserFrame>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="text-h3 mb-5 text-[var(--color-ink)]">
                Where the first-time visitors come from
              </h3>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                On the clinic in that report, organic search brought more first-time
                visitors to the site than direct, paid search, social and referral put
                together. The screenshot is the full channel breakdown, uncropped.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                Paid social and Google Ads stop the moment the budget does. Search
                keeps returning people after the work is finished, so we do it first
                and then use the same keyword research to point the paid campaigns.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── The evidence: Bodyfunction ─────────────────────────────────────
          Real numbers, named sources, and the relationship stated plainly —
          Danny founded this clinic, and the old page let it read as a client. */}
      <section
        id="the-evidence"
        className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]"
      >
        <div className="cx-main">
          <div className="mb-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <FadeUp>
              <p className="eyebrow mb-5">What this looks like when it works</p>
              <h2 className="text-h2 leading-tight text-[var(--color-ink)]">
                Eight people a month found this clinic. Now it is nearly four thousand
              </h2>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                Bodyfunction Clinic is an osteopathy practice in Angel, London. It is
                also where Clinic Evo came from: Danny Morgan founded the clinic and
                co-founded this company. It is our own diary, not a client&rsquo;s,
                which is why we can open the whole account instead of showing you one
                flattering screenshot.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                For a full year the site sat flat at eight to fifteen visits a month.
                Nothing was wrong with the clinic; the website simply was not being
                found. Everything below is what changed after the structure and content
                work landed, pulled from Search Console and Ahrefs.
              </p>
            </FadeUp>
          </div>

          <FadeUp>
            <StatTiles items={bodyfunctionStats} columns={2} />
          </FadeUp>

          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <FadeUp>
              <h3 className="text-h3 mb-5 text-[var(--color-ink)]">
                The inflection is visible in the data
              </h3>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                Worth understanding before you buy any SEO: the line stays flat for
                months while the pages and the structure go in, then climbs and keeps
                climbing. There is no paid traffic in this account at all.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                It also answers &ldquo;how long does it take&rdquo; more honestly than
                a single number would. First movement showed within a couple of months,
                the curve turned sharply at around six, and it has not flattened since.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <OrganicGrowthChart />
            </FadeUp>
          </div>

          <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeUp>
              <PositionDumbbell
                title="Where individual condition questions moved to"
                source="Search Console, bodyfunction.co.uk, 12 months year on year"
                rows={bodyfunctionMoves}
              />
              {/* Say what these five are, rather than leaving a reader to work it
                  out and feel they have caught us. They are symptom questions —
                  national, informational, and not the same thing as somebody in
                  Islington looking for an appointment. The local terms are the
                  next section's argument, and they are named there. */}
              <p className="text-body-sm mt-5 text-[var(--color-muted)]">
                These are condition questions: somebody describing a symptom,
                searching from anywhere in the country. They build the authority a
                site needs before it can compete for local appointment terms, which
                is the next section&rsquo;s argument. Authority comes first, and the
                local searches follow it.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <BrowserFrame
                scrollOnMobile
                label="app.ahrefs.com — organic keywords, bodyfunction.co.uk"
                caption="The tracked keyword list as it stands today. Green is movement since the last check."
              >
                <Image
                  src="/images/case-studies/bodyfunction-ahrefs-keywords.png"
                  alt="Ahrefs organic keyword report for bodyfunction.co.uk showing page-one positions across a range of back pain and neck pain search terms"
                  width={1200}
                  height={900}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </BrowserFrame>
            </FadeUp>
          </div>

          {/* The single strongest proof point on the page. Given its own room
              rather than buried in a card grid. */}
          <FadeUp>
            <div className="mt-16 border-l-4 border-[var(--color-accent)] py-2 pl-7 sm:pl-9">
              <p className="text-h3 mb-4 font-medium leading-snug text-[var(--color-ink)]">
                One article on that site now ranks for around 250 separate search terms,
                and would cost roughly $200 a month to replace with ads.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                Three more articles on the same site clear $99 a month each on the same
                measure. Each was written once and has kept earning since, which is what
                people mean when they say content compounds.
              </p>
              <p className="mt-4 text-[0.8rem] text-[var(--color-muted)]">
                Ahrefs traffic value, bodyfunction.co.uk, Aug 2026. Ahrefs reports in
                US dollars.
              </p>
            </div>
          </FadeUp>

          {/* This block used to be headed "What we are not claiming" and spent two
              paragraphs talking the numbers down on a page whose job is to sell.
              Same facts, told forwards: the authority is built, the brand demand
              is real, and the local pack is the next thing we take. That is a
              sale, not an apology.

              The underlying rule still holds — never state or imply that clicks
              are bookings anywhere on this site. Keep it as momentum. */}
          <FadeUp>
            <div className="mt-14 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] p-7 md:p-9">
              <p className="text-label mb-4 text-[var(--color-accent)]">
                And it is still climbing
              </p>
              <p className="text-body mb-4 text-[var(--color-muted)]">
                This clinic now has the search authority that takes years to build,
                and the brand demand alongside it: five times as many people search
                for it by name as did two years ago. Both make everything from here
                cheaper and quicker.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                The map pack is the next job. Terms like &ldquo;osteopath
                islington&rdquo; sit mid page one today, which is a far shorter
                distance to close than the two years it took to reach this point.
                Very few clinic sites have either the authority or the brand demand
                yet.
              </p>
              {/* This page carried the biggest block of Bodyfunction evidence on the
                  site and never once linked to the case study. A dead end for
                  anybody who wanted more proof, and an internal link Google should
                  have had from here. */}
              <div className="mt-7 border-t border-[var(--color-border)] pt-6">
                <ArrowLink href="/case-studies/bodyfunction-clinic/">
                  Read the full Bodyfunction Clinic case study
                </ArrowLink>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Dark band to break the rhythm before the second case. */}
      <ProofBand
        eyebrow="A clinic that started from nothing"
        stat={{
          value: "0 → page one",
          label: "Every core local search term, twelve months from launch",
        }}
        body="Lind Street Osteopathy had no website, no logo and no search history of any kind — literally zero clicks and zero impressions before August 2025. A year later it holds position one for its own name at a 67% click-through rate, and page one across its whole catchment."
        source="Search Console, lindstreetosteopathy.co.uk, to Jul 2026"
        image="/images/lind-street/clinic-sign.png"
        imageAlt="The Lind Street Osteopathy clinic sign in Ryde, Isle of Wight"
        ctaLabel="Read the Lind Street case study"
        ctaHref="/case-studies/lind-street-osteopathy/"
      />

      {/* ── The evidence: Lind Street ──────────────────────────────────────
          The counterweight to Bodyfunction. Small numbers, total local
          visibility — the case for a clinic that thinks SEO is for big budgets. */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <FadeUp>
              <p className="eyebrow mb-5">The other kind of win</p>
              <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                You do not need a big clinic for this to work
              </h2>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                The table on the right is all of it: every commercially relevant
                search in Ryde, twelve months after launch. Three of the five sit
                inside the top five positions and the other two are on page one.
              </p>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                Lind Street is one practitioner, on an island of 140,000 people,
                competing against practices that had been there for years. If it can
                be done from a standing start in a market that size, it can be done
                in yours.
              </p>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                The click-through rates are the column worth reading twice. 67% on the
                brand term and 19.4% on &ldquo;osteopath ryde&rdquo; mean people are
                seeing the listing and then choosing it over the ones beside it.
              </p>
              {/* The honest bridge. A reader who totals the clicks column gets a
                  number in the hundreds and wonders whether that was worth it.
                  Better to answer it than to hope they do not do the sum: in a
                  catchment this size the ceiling is low, and the thing being
                  measured is share, not volume. Careful not to imply a booking
                  anywhere in this — the standing rule. */}
              <p className="text-body text-[var(--color-muted)]">
                The absolute numbers are small, and in a catchment this size they
                should be — only so many people search for an osteopath in one
                seaside town in a year. What the table measures is share: at 19.4% on
                &ldquo;osteopath ryde&rdquo;, roughly one searcher in five clicks
                this clinic rather than one of the practices listed above or below
                it.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <RankingTable
                title="Twelve months from a standing start"
                source="Search Console, lindstreetosteopathy.co.uk, to Jul 2026"
                rows={lindStreetRankings}
              />
            </FadeUp>
          </div>

          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <FadeUp>
              <BrowserFrame
                scrollOnMobile
                label="app.ahrefs.com — tracked positions, lindstreetosteopathy.co.uk"
                caption="Position one for back pain, neck pain, women's health and shoulder pain in Ryde. Each one is a page built for that search on purpose."
              >
                <Image
                  src="/images/case-studies/lind-street-ahrefs-keywords.png"
                  alt="Ahrefs keyword report for Lind Street Osteopathy showing position 1 for back pain osteopath ryde, osteopath ryde, women's health osteopath ryde, neck pain osteopath ryde and shoulder pain osteopath ryde"
                  width={1075}
                  height={1022}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </BrowserFrame>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="text-h3 mb-5 text-[var(--color-ink)]">
                Name the condition, not the treatment
              </h3>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                The best performing pages on that site are named after problems, not
                treatments: the fibromyalgia, hypermobility and TMJ pages all outrank
                the general osteopathy and sports massage pages.
              </p>
              <p className="text-body mb-6 text-[var(--color-muted)]">
                Patients search for what is wrong with them, usually in the words their
                GP or a forum used. A page titled for that condition matches what they
                typed. A page listing every treatment matches it only loosely, and
                loosely does not rank. In a small catchment this is the cheapest
                advantage available, because competitors rarely build the condition
                pages at all.
              </p>
              <ArrowLink href="/case-studies/lind-street-osteopathy/">
                Read the full Lind Street case study
              </ArrowLink>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Mid-page CTA, at the point of peak persuasion — straight after the proof.
          The brief asks for one dominant call to action in each major conversion
          area, and before this the page ran fifteen thousand pixels between the
          hero button and the closing one. Dark and full-bleed so it reads as a
          break in the page rather than a rehearsal of the footer panel. */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)] !py-12 sm:!py-14">
        <div className="cx-main">
          <FadeUp>
            <div
              className="overflow-hidden bg-[var(--color-ink)] px-8 py-11 md:px-14 md:py-14"
              style={{ borderRadius: "var(--radius-panel)" }}
            >
              <div className="grid items-center gap-9 lg:grid-cols-[1.15fr_auto] lg:gap-14">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    Where does your clinic stand?
                  </p>
                  <h2 className="text-h3 mt-4 max-w-xl text-white">
                    Find out what you already rank for, and what your competitors are
                    taking
                  </h2>
                  <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/60">
                    The free audit is the same first step we took on both clinics
                    above: what you rank for now, which searches in your area are
                    going to competitors, and what it would take to change that. Two
                    business days, no obligation.
                  </p>
                </div>
                <Button href="/free-clinic-audit/" size="lg">
                  Get a free clinic SEO audit
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* What we improve, and what is included. One section, two jobs — this was
          two near-identical stacks before. The icon cards are gone. */}
      <section id="what-we-improve" className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          {/* Two columns rather than a 2xl block with an empty right half. The
              heading and the qualifier were stacked in one narrow column, which
              left roughly half the row doing nothing at 1440. */}
          <FadeUp>
            <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <div>
                <p className="eyebrow mb-4">What we do</p>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  What Clinic Evo improves, and what you get
                </h2>
              </div>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                A maintenance plan keeps a website working. This is a growth
                engagement: continuous work to widen the set of searches your clinic
                appears for, and to increase how many of those visits become
                enquiries.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
            {whatWeImprove.map((item, i) => (
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

          <FadeUp delay={0.1}>
            <div className="mt-14 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 md:p-9">
              <p className="text-label mb-6 text-[var(--color-accent)]">
                Included in a clinic SEO engagement
              </p>
              <div className="grid grid-cols-1 gap-x-12 gap-y-3 sm:grid-cols-2">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg
                      className="mt-1 flex-shrink-0 text-[var(--color-accent)]"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-body-sm text-[var(--color-muted)]">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-body-sm mt-7 border-t border-[var(--color-border)] pt-6 text-[var(--color-muted)]">
                The audit tells us which of these will move your clinic first, so the
                order and the weight change from clinic to clinic. The work does not.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why healthcare SEO is a different job */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <FadeUp>
              <p className="eyebrow mb-5">Why clinic SEO is different</p>
              <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                Google holds clinic sites to a higher standard
              </h2>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                Most local SEO advice is written for any small business. Healthcare
                does not behave that way, and a generalist agency will work that out
                slowly, on your budget.
              </p>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                Patients arrive in pain and worried, comparing three or four clinics
                at once for a reason to trust one of them. Google&rsquo;s own search
                quality guidelines put health content in the category it scrutinises
                hardest. Those two facts change the strategy.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                Danny founded Bodyfunction Clinic and still treats patients there;
                Simon has spent years getting clinic websites found. The list on the
                right is what that changes about the work.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <ul role="list" className="border-t border-[var(--color-border)]">
                {healthcareDifferences.map((d) => (
                  <li key={d.label} className="border-b border-[var(--color-border)] py-5">
                    <p className="text-[15px] font-semibold text-[var(--color-ink)]">{d.label}</p>
                    <p className="text-body-sm mt-1.5 text-[var(--color-muted)]">{d.body}</p>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* How search is changing — asked for on the call, absent from the old page */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">How search is changing</p>
              <h2 className="text-h2 mb-4 text-[var(--color-ink)]">
                Ranking is no longer one blue link
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Google now answers a lot of questions itself, before anybody reaches a
                website. That has not made SEO less important, but it has changed what
                being visible means. A clinic can now appear in three different places
                for the same search, and they are earned in different ways.
              </p>
            </div>
          </FadeUp>

          <SearchSurfaces />

          <FadeUp delay={0.1}>
            <div className="mt-12 max-w-3xl">
              <p className="text-body text-[var(--color-muted)]">
                The work that earns an AI citation is largely the work that earned a
                top ranking anyway: clear structure, questions answered directly,
                genuine clinical expertise attached to a named practitioner, and
                consistent local data. All three surfaces come out of the same work.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Who we help. Icons removed from the cards — they were the "preset
          website" tell, and the photograph already does that job. */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Who we help</p>
              <h2 className="text-h2 mb-4 text-[var(--color-ink)]">
                SEO for osteopaths, physios and chiropractors
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Clinic Evo works with MSK and private healthcare clinics, where patient
                trust, clinical credibility and local visibility decide who gets the
                appointment. Each discipline is searched for differently, so each one
                gets its own research.
              </p>
            </div>
          </FadeUp>
          <div className="flex flex-col gap-5">
            {[
              {
                title: "Osteopaths",
                desc: "An osteopathy clinic usually needs visibility across back pain, neck pain and local treatment searches, plus the condition pages patients actually type.",
                href: "/osteopath-marketing/",
                cta: "SEO and Marketing for Osteopaths",
                watermarkImg: "/images/watermark-osteopath.jpg",
              },
              {
                title: "Physiotherapists",
                desc: "A physiotherapy clinic often needs clearer pathways around sports injuries, rehabilitation, post-operative support and private treatment.",
                href: "/physiotherapy-marketing/",
                cta: "Physiotherapy Marketing",
                watermarkImg: "/images/watermark-physio.jpg",
              },
              {
                title: "Chiropractors",
                desc: "A chiropractic clinic needs to communicate trust, outcomes and difference in a market where three competitors are usually one search away.",
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

      {/* Process and where SEO sits in the wider system */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <FadeUp>
                <p className="eyebrow mb-5">Process</p>
                <h2 className="text-h2 mb-6 text-[var(--color-ink)]">
                  A practical clinic SEO process
                </h2>
                <p className="text-body text-[var(--color-muted)]">
                  Clear, jargon-free, and reported against numbers you can check
                  yourself in your own Search Console.
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="mt-9 border-t border-[var(--color-border)] pt-7">
                  <p className="text-body-sm text-[var(--color-muted)]">
                    Search rarely works alone. The same research feeds your{" "}
                    <Link
                      href="/website-design-for-clinics/"
                      className="text-[var(--color-accent-text)] hover:underline"
                    >
                      website structure
                    </Link>
                    ,{" "}
                    <Link
                      href="/google-ads-for-clinics/"
                      className="text-[var(--color-accent-text)] hover:underline"
                    >
                      Google Ads
                    </Link>
                    ,{" "}
                    <Link
                      href="/digital-marketing/"
                      className="text-[var(--color-accent-text)] hover:underline"
                    >
                      paid social
                    </Link>
                    , the{" "}
                    <Link
                      href="/patient-pulse/"
                      className="text-[var(--color-accent-text)] hover:underline"
                    >
                      follow-up system
                    </Link>{" "}
                    that catches the enquiries once they arrive, and{" "}
                    <Link
                      href="/ai-integration/"
                      className="text-[var(--color-accent-text)] hover:underline"
                    >
                      patient reactivation
                    </Link>{" "}
                    for the people already in your database. One piece of work, not
                    five.
                  </p>
                </div>
              </FadeUp>
            </div>
            <ProcessSteps steps={steps} />
          </div>

          {/* Two guides, not three. The medical one was a near-duplicate of the
              healthcare one and has been merged into it, so this row was sending
              equal internal weight to two pages competing for the same intent.
              Two columns also retires the equal-thirds card grid the house style
              rules out. */}
          <FadeUp delay={0.1}>
            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {[
                { title: "Local SEO for physio clinics", href: "/learning-hub/local-seo-for-physio-clinics/" },
                { title: "Local SEO for healthcare clinics", href: "/learning-hub/local-seo-for-healthcare-clinics/" },
              ].map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="card-surface group flex items-center justify-between gap-4 p-6"
                >
                  <div>
                    <p className="text-label mb-2 text-[var(--color-accent)]">Guide</p>
                    <h3 className="text-h4 text-[var(--color-ink)]">{r.title}</h3>
                  </div>
                  <svg
                    className="flex-shrink-0 text-[var(--color-muted)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]"
                    width="18"
                    height="18"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 7h8M7 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="section grain border-t border-[var(--color-border)] bg-[var(--color-surface)] !pb-10">
        <div className="cx-main">
          <div className="mx-auto max-w-3xl">
            <FadeUp>
              <div className="mb-10 text-center">
                <p className="eyebrow mb-5">FAQ</p>
                <h2 className="text-h2 text-[var(--color-ink)]">SEO for clinics FAQs</h2>
              </div>
            </FadeUp>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] px-6 py-2 shadow-[var(--shadow-card)] sm:px-10">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* The close carries the risk reversal the page had been asking people to
          take on trust: free, yours to keep, no obligation, and a named
          turnaround. Every one of those is already true elsewhere on the site. */}
      <CTASection
        id="closing-cta"
        heading="Start with a free clinic SEO audit"
        subheading="We will show you what you already rank for, which searches in your area are going to competitors, and the shortest route to more enquiries. Back with you within two business days. It is free, the findings are yours to keep, and there is nothing to cancel if you decide not to go ahead."
      />

      {/* This page is ~29,000px on a phone. The header CTA is desktop-only, so
          below 1024px a reader had 15,000px between the hero button and the next
          chance to act — measured, not estimated. The bar retracts over the
          closing CTA above so the same ask is never made twice at once. */}
      <StickyMobileCta hideNearId="closing-cta" label="Get a free clinic SEO audit" />
    </>
  );
}

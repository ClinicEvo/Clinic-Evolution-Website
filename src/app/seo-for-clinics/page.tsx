import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import ArrowLink from "@/components/ui/ArrowLink";
import Button from "@/components/ui/Button";
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

export const metadata = buildMetadata({
  title: "SEO for Medical Clinics | Specialist Clinic SEO",
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
      "Yes. Most patients search locally when choosing a clinic, especially for osteopathy, physiotherapy and chiropractic care. Local SEO helps improve visibility for searches connected to services, conditions, locations and nearby availability.",
  },
  {
    question: "How long does clinic SEO take to work?",
    answer:
      "Some improvements can appear within weeks, especially when a site has low competition keywords or pages that are already close to ranking. Bigger gains usually take several months because Google needs time to crawl, assess and trust the updated website. On Bodyfunction Clinic the first movement showed within a couple of months and the steep part of the curve came around six months in.",
  },
  {
    question: "Does SEO still matter now that Google answers questions with AI?",
    answer:
      "Yes, and arguably more. AI answers are assembled from pages Google already trusts, so the work that earns a top ranking is the same work that gets a clinic quoted in an AI answer: clear structure, genuine clinical expertise on the page, consistent local signals and content that answers the question directly. What changes is that being visible now means appearing across AI answers, the map pack and the standard results, rather than one blue link.",
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
    body: "A ranking that nobody clicks and a click that nobody books are both worth nothing. The work is judged on what reaches your diary.",
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

/* Logos. Bodyfunction is deliberately absent: it is the clinic Clinic Evo grew
   out of, not a client, and listing it here recreates exactly the confusion the
   10 Aug review asked us to fix. It is named as the origin clinic in the
   evidence section instead. Heights tuned per mark — the ratios differ wildly. */
const clientLogos = [
  { name: "Body Restore Clinic", src: "/images/clients/body-restore.png", w: 1714, h: 564, height: 34, dim: true },
  { name: "1 Percent Club", src: "/images/clients/one-percent-club.png", w: 500, h: 461, height: 48, dim: true },
  { name: "Lind Street Osteopathy", src: "/images/clients/lind-street.png", w: 1500, h: 500, height: 42 },
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
    label: "Monthly visitors from search",
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
   commercial local search — the ones that put somebody on a treatment table. */
const lindStreetRankings = [
  { query: "lind street osteopathy", position: 1.0, clicks: 113, ctr: "67%" },
  { query: "ryde osteopath", position: 4.0, clicks: 22, ctr: "15.2%" },
  { query: "osteopath ryde", position: 4.9, clicks: 45, ctr: "19.4%" },
  { query: "sports massage ryde", position: 5.2, clicks: 6, ctr: "20.0%" },
  { query: "osteopath near me", position: 5.4, clicks: 3, ctr: "5.1%" },
  { query: "osteopath isle of wight", position: 7.4, clicks: 67, ctr: "7.5%" },
];

/* What healthcare changes about the strategy. Prose rather than cards — this is
   the section that has to prove specialism rather than assert it. */
const healthcareDifferences = [
  {
    label: "Google treats health pages more carefully than most",
    body: "Search quality guidelines single out content that can affect somebody's health or money. Pages about treatment need visible clinical authorship, real credentials and accurate claims, or they quietly underperform however well optimised they are.",
  },
  {
    label: "Patients search for the problem, not the treatment",
    body: "Nobody wakes up wanting osteopathy. They wake up unable to turn their head and type that. A site organised around your service list will lose to one organised around what people arrive with.",
  },
  {
    label: "Trust signals are ranking signals here",
    body: "Registration details, practitioner profiles, reviews, consistent name and address data, clear pricing and genuine clinic photography all feed both the patient's decision and Google's confidence in the site.",
  },
  {
    label: "The map pack is often worth more than position one",
    body: "For a local clinic, appearing in the three businesses shown beside the map can matter more than any organic ranking. That is a different piece of work with different signals behind it.",
  },
  {
    label: "Regulated claims constrain the copy",
    body: "The ASA and the professional registers limit what a clinic can promise. Writing pages that rank without writing cheques the clinic cannot cash takes knowing both sides.",
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
    title: "The booking journey",
    desc: "How easily somebody gets from a search result to understanding, trust and a booked appointment.",
  },
];

const included = [
  "SEO audit of your current website",
  "Keyword mapping by service, condition and location",
  "Metadata and heading recommendations",
  "Service page copy and content improvement",
  "Local SEO and Google Business Profile recommendations",
  "Technical SEO checks",
  "Schema recommendations",
  "Internal linking plan",
  "Content roadmap for patient education and organic growth",
  "Conversion recommendations for enquiries and bookings",
  "Monthly visibility and enquiry tracking where appropriate",
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
        subtext="When somebody near you searches for the treatment they need, SEO decides whether your clinic is one of the ones they find. Clinic Evo does that work for UK osteopaths, physiotherapists and chiropractors, and we have the search data from our own clinics to show what it looks like when it works."
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
                    <h2 className="text-h4 mb-1.5 text-[var(--color-ink)]">{p.title}</h2>
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
              Clinics we grow in search
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {clientLogos.map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  width={logo.w}
                  height={logo.h}
                  style={{ height: logo.height, width: "auto" }}
                  className={logo.dim ? "opacity-[0.85]" : undefined}
                />
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
                That is the part that stings. The demand is already there, in your
                catchment, today. You are not trying to create patients out of nothing.
                You are losing people who are actively looking for exactly what you do.
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
                Most clinic websites are built to look presentable rather than to
                perform in search. The homepage is doing too much. The service pages
                are too thin to rank for anything. The condition pages that patients
                actually search for were never written.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                The biggest gains usually come from fixing the structure first: making
                it obvious what you treat, who you help, where you are, why anyone
                should trust you, and which single page should own each search.
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
                This is the part most clinic owners are never told. Your website
                going live does not put you in front of the person two streets away
                typing &ldquo;osteopath near me&rdquo; at nine on a Sunday night.
                Google chooses who to show, every time, out of every clinic in your
                catchment. SEO is the work that makes it choose you.
              </p>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                It is not advertising. You are not renting the position, so it does
                not disappear the day you stop paying. That is why search is the
                keystone: ads fill the diary this month, search fills it for years,
                and every page you add compounds on the one before it.
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
                Where new patients actually come from
              </h3>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                On the clinics we run, organic search brings in more new patients than
                direct, paid search, social and referrals put together. Not by a
                little. By more than all of them combined.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                That is the argument for doing this properly. Every other channel is a
                tap you have to keep paying to leave running. Search is the one that
                keeps delivering after the work is done, which is why we treat it as
                the foundation everything else sits on rather than an add-on.
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
                co-founded this company, so this is our own work on our own diary
                rather than a client we are quoting. That is exactly why we can show
                you the whole account instead of one flattering screenshot.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                For a full year the site sat flat at eight to fifteen visits a month.
                The practitioners were good. Nobody could find them. Everything below
                is what changed after the structure and content work landed, pulled
                from Search Console and Ahrefs.
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
                This is the shape SEO makes when it is working, and it is worth
                understanding before you buy any: a long flat stretch where the
                foundations are going in, then a curve that keeps climbing on its own.
                Nothing here was bought. There is no paid traffic in this account at
                all.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                That is also the honest answer to &ldquo;how long does it take&rdquo;.
                The first movement showed within a couple of months. The steep part
                arrived around six. The compounding has not stopped since.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <OrganicGrowthChart />
            </FadeUp>
          </div>

          <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeUp>
              <PositionDumbbell
                title="Where individual patient questions moved to"
                source="Search Console, bodyfunction.co.uk, 12 months year on year"
                rows={bodyfunctionMoves}
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              <BrowserFrame
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
                That is what people mean when they say content compounds. It was written
                once. Three more articles on the same site clear $99 a month each on the
                same measure. This is the difference between a website that sits there
                and one that keeps earning.
              </p>
              <p className="mt-4 text-[0.8rem] text-[var(--color-muted)]">
                Ahrefs, traffic value, bodyfunction.co.uk, Aug 2026
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
                The hard part is done. This clinic now has the search authority that
                takes years to build, and the brand demand to go with it: five times
                as many people search for it by name as did two years ago. That is
                the asset. Everything from here is easier because of it.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                The local pack is the next thing we take. Terms like &ldquo;osteopath
                islington&rdquo; sit mid page one today, which is exactly the position
                you want to be attacking from, and a far shorter job than the two
                years it took to get here. Most clinics are still at the starting
                line on both.
              </p>
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
                Twelve months ago Lind Street had no website, no logo and no search
                history of any kind. Today it is on page one for effectively every
                commercially relevant search in its area, and holds the top five for
                the ones that actually bring patients through the door.
              </p>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                That is one practitioner in Ryde, on an island of 140,000 people,
                competing against practices that had been there for years. If it can
                be done from a standing start in a market that size, it can be done
                in yours.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                The click-through rates are the quiet win in this table. A 67% rate on
                the brand term and 19.4% on &ldquo;osteopath ryde&rdquo; mean people
                are not just seeing the listing, they are choosing it over the ones
                around it.
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
                The best performing pages on that site are not named after treatments.
                They are named after problems. The fibromyalgia, hypermobility and TMJ
                pages all outrank the general osteopathy and sports massage pages.
              </p>
              <p className="text-body mb-6 text-[var(--color-muted)]">
                Patients search for what is wrong with them, usually in the words their
                GP or a forum used. A page that names their condition meets them there.
                A treatments page covering everything meets nobody. In a small
                catchment that is the whole game, and it is the cheapest advantage
                available to a small clinic because most competitors will not bother.
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
                    above. You get your current visibility, the searches you are
                    missing, and the shortest route to more enquiries. No obligation,
                    and the findings are yours either way.
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
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">What we do</p>
              <h2 className="text-h2 mb-4 text-[var(--color-ink)]">
                What Clinic Evo improves, and what you get
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                This is a growth package rather than a maintenance plan. Maintenance
                keeps a website working; this is ongoing work to increase how many
                people find your clinic and how many of them get in touch.
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
                A clinic is not a plumber with a treatment table
              </h2>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                Most local SEO advice assumes any small business will do. Healthcare
                does not behave that way, and a generalist agency will spend your first
                six months finding that out on your money.
              </p>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                Patients arrive worried, in pain, uncertain, comparing three or four
                clinics at once and looking for reasons to trust one of them. Google,
                for its part, holds health content to a higher standard than almost
                any other category. Those two facts change the whole strategy.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                We know it because we run clinics. Danny still practises; Simon spent
                years getting clinic websites found. The list on the right is what that
                actually changes about the work.
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
                The useful part: the work that earns an AI citation is largely the work
                that earned a top ranking anyway. Clear structure, questions answered
                directly, genuine clinical expertise attached to a named practitioner,
                and consistent local data. We build for how people search now, not for
                a version of Google that stopped existing.
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
                      className="text-[var(--color-accent)] hover:underline"
                    >
                      website structure
                    </Link>
                    ,{" "}
                    <Link
                      href="/google-ads-for-clinics/"
                      className="text-[var(--color-accent)] hover:underline"
                    >
                      Google Ads
                    </Link>
                    ,{" "}
                    <Link
                      href="/digital-marketing/"
                      className="text-[var(--color-accent)] hover:underline"
                    >
                      paid social
                    </Link>
                    , the{" "}
                    <Link
                      href="/patient-pulse/"
                      className="text-[var(--color-accent)] hover:underline"
                    >
                      follow-up system
                    </Link>{" "}
                    that catches the enquiries once they arrive, and{" "}
                    <Link
                      href="/ai-integration/"
                      className="text-[var(--color-accent)] hover:underline"
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

          <FadeUp delay={0.1}>
            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              {[
                { title: "Local SEO for physio clinics", href: "/learning-hub/local-seo-for-physio-clinics/" },
                { title: "Local SEO for medical clinics", href: "/learning-hub/local-seo-for-medical-clinics/" },
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

      <CTASection
        heading="Start with a free clinic SEO audit"
        subheading="We will show you what you already rank for, what your local competitors are taking that you are not, and the shortest route to more enquiries from search."
      />
    </>
  );
}

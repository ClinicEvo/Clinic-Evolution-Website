import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Breadcrumb from "@/components/sections/Breadcrumb";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import ArrowLink from "@/components/ui/ArrowLink";
import {
  StatTiles,
  OrganicGrowthChart,
  PositionDumbbell,
  RankingTable,
} from "@/components/case-studies/CaseStudyCharts";

/*
 * Bodyfunction Clinic — the origin story, not a client case study.
 *
 * Per the 10 Aug review and the case study brief: Danny Morgan is a Clinic Evo
 * co-founder AND the founder of Bodyfunction Clinic. The previous version of
 * this page implied Bodyfunction hired Clinic Evo as an outside agency, which
 * is not what happened. The relationship is now stated explicitly and up front.
 *
 * Data sources: Google Search Console (direct API) and Ahrefs, pulled 13 Aug
 * 2026. Per-page click totals are deliberately NOT published — several URLs
 * appear twice in GSC either side of a mid-period URL change, so the per-page
 * figures need reconciling first. Query-level figures are unaffected, so those
 * are what appear here.
 */

export const metadata = buildMetadata({
  title: "Clinic SEO Case Study | Bodyfunction Clinic",
  description:
    "The clinic Clinic Evo was built out of. How Bodyfunction Clinic grew from 8 to 3,822 monthly organic visitors, and what those lessons became.",
  path: "/case-studies/bodyfunction-clinic/",
});

const faqs = [
  {
    question: "Is Bodyfunction Clinic a Clinic Evo client?",
    answer:
      "No, and we would rather say so plainly. Danny Morgan is a co-founder of Clinic Evo and also the founder of Bodyfunction Clinic. Clinic Evo grew directly out of the work of building Bodyfunction's digital presence. We publish it as our origin story and our longest-running body of evidence, not as an arm's-length client project.",
  },
  {
    question: "How long does clinic SEO take to show results?",
    answer:
      "Bodyfunction sat flat at 8 to 15 organic visitors a month for a full year before the content and structure work took hold. Movement began around three months in, became obvious at six, and the compounding really showed from twelve months onward. Any agency promising meaningful results in the first month is not describing how search works.",
  },
  {
    question: "Does more search traffic mean more patients?",
    answer:
      "Not automatically, and this case study is a good example of why. Most of Bodyfunction's search volume is national informational health search rather than London booking intent. What it has produced is authority and a fivefold increase in people searching for the clinic by name. Local commercial rankings are the next phase of the work.",
  },
  {
    question: "What should a clinic audit review?",
    answer:
      "Your website structure, search visibility, local presence, service and condition pages, booking journey, calls to action, trust signals, competitor position and patient reactivation opportunities. The point is to find where the gap between what you offer and what a patient can find is costing you appointments.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Bodyfunction Clinic", href: "/case-studies/bodyfunction-clinic/" },
];

/* GSC, bodyfunction.co.uk. Aug 2024 – Jul 2025 against Aug 2025 – Jul 2026. */
const headlineStats = [
  {
    value: 425,
    prefix: "+",
    suffix: "%",
    label: "Google clicks year on year",
    source: "GSC — 9,345 rising to 49,065",
  },
  {
    display: "8 → 3,822",
    label: "Estimated monthly organic visitors",
    source: "Ahrefs — Aug 2024 against Aug 2026",
  },
  {
    display: "0 → 383",
    label: "Keywords ranking in the top three",
    source: "Ahrefs — from 104 to 1,112 keywords in total",
  },
  {
    value: 5,
    suffix: "×",
    label: "Growth in people searching for the clinic by name",
    source: "GSC — combined branded search clicks",
  },
];

/* Query-level position movement, GSC 12-month year on year. */
const positionJumps = [
  { query: "neck pain and nausea", before: 17.8, after: 4.6, note: "2 → 68 clicks" },
  { query: "neck pain nausea", before: 20.1, after: 4.8, note: "2 → 36 clicks" },
  { query: "lower back pain and groin pain (female)", before: 18.8, after: 6.0, note: "6 → 34 clicks" },
  { query: "can neck pain cause nausea", before: 14.9, after: 6.5, note: "4 → 32 clicks" },
  { query: "is back pain a sign of pregnancy", before: 19.4, after: 7.3, note: "1 → 26 clicks" },
];

/* Terms now holding position one or two. */
const topRankings = [
  { query: "back and stomach pain together", position: 1.0 },
  { query: "osteopathic medicine vs homeopathic medicine", position: 1.3, ctr: "11.6%" },
  { query: "osteopathic vs homeopathic", position: 1.4 },
  { query: "what to wear for osteopath appointment", position: 1.9 },
  { query: "what to wear to an osteopath appointment", position: 2.0, clicks: 87 },
  { query: "can an osteopath help with spinal stenosis", position: 2.6 },
];

/* The local commercial terms that are still to be won. */
const localTerms = [
  { query: "osteopath islington", position: 9.0 },
  { query: "osteopath near me", position: 9.2 },
  { query: "osteopath", position: 25.9, impressions: 6612 },
];

export default function BodyfunctionCaseStudyPage() {
  return (
    <>
      <ServiceSchema
        name="Bodyfunction Clinic Case Study"
        description="The clinic Clinic Evo was built out of: a two-year clinic SEO and website project measured in Google Search Console and Ahrefs."
        url="/case-studies/bodyfunction-clinic/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--color-paper)] pt-10 pb-20 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28">
        <div className="absolute right-0 top-0 -z-10 hidden h-full w-1/3 translate-x-20 skew-x-[-12deg] bg-[var(--color-surface)] lg:block" />

        <div className="cx-main">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <FadeUp>
                <Breadcrumb items={crumbs} />
                <p className="eyebrow mb-5 mt-6">Where Clinic Evo came from</p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h1 className="text-h1 mb-6 tracking-tight text-[var(--color-ink)]">
                  Bodyfunction Clinic marketing case study
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="max-w-xl space-y-6">
                  <p className="text-body-lg leading-relaxed text-[var(--color-muted)]">
                    This is not a client project, and we would rather be straight
                    about that than let you assume otherwise. Danny Morgan is a
                    co-founder of Clinic Evo. He is also the founder of Bodyfunction
                    Clinic in Angel, London.
                  </p>
                  <p className="text-body-lg leading-relaxed text-[var(--color-muted)]">
                    Clinic Evo exists because of what he learned growing it. Two
                    years of working out which decisions actually moved a clinic
                    forward, and which were noise, became the method we now apply to
                    other practices. This page is the evidence, with the numbers
                    behind it.
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="mt-10 flex flex-col gap-5 sm:flex-row">
                  <Button href="/free-clinic-audit/" size="lg">
                    Get a free clinic audit
                  </Button>
                  <Button href="/seo-for-clinics/" variant="outline" size="lg">
                    Explore SEO for clinics
                  </Button>
                </div>
              </FadeUp>
            </div>

            <div className="relative lg:col-span-6">
              <FadeUp delay={0.2}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                  <Image
                    src="/images/bodyfunction-clinic-team-at-reception-01.jpg"
                    alt="The Bodyfunction Clinic team at reception in Angel, London"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-2xl bg-[var(--color-accent)]/10 blur-2xl" />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── The relationship, stated plainly ─────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <FadeUp>
                <p className="eyebrow mb-5">The origin</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  A marketing agency run by people who had to fill their own diary
                  first
                </h2>
                <div className="space-y-5">
                  <p className="text-body-lg text-[var(--color-muted)]">
                    Danny is an osteopath. He built Bodyfunction Clinic, and then had
                    to work out how to get patients through the door without a
                    marketing budget or an agency worth paying.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    That meant teaching himself what actually moved the needle: how
                    patients search before they book, why some pages brought people
                    in and others did nothing, what followed up an enquiry properly
                    and what let it go cold. Most of it was learned the slow way.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    Clinic Evo was created to give that method to other clinic
                    owners, combined with Simon&apos;s side of it — the technical SEO
                    and digital marketing experience that turned a set of hard-won
                    instincts into something repeatable.
                  </p>
                  <p className="border-l-4 border-[var(--color-accent)] py-1 pl-6 text-body font-semibold text-[var(--color-muted)]">
                    We are not a digital marketing company that happens to have
                    healthcare clients. We are healthcare professionals who had to
                    solve this problem for ourselves.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-lg">
                  <Image
                    src="/images/danny_and_co.jpg"
                    alt="Danny Morgan and the Bodyfunction Clinic team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 440px"
                  />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── The challenge ────────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="space-y-12 lg:col-span-6">
              <FadeUp>
                <p className="eyebrow mb-5">The challenge</p>
                <h2 className="text-h2 mb-8 leading-tight text-[var(--color-ink)]">
                  A clinic nobody could find
                </h2>
                <div className="space-y-6">
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    In August 2024 the site was drawing eight organic visitors a
                    month. Not eight a day. Eight a month, and it had been flat at
                    that level for a full year. It ranked for 104 keywords and not
                    one of them sat in the top three.
                  </p>
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    The clinical work was strong and the practitioners were good. The
                    problem was that none of that reached anyone who had not already
                    been recommended by a friend.
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-lg">
                  <Image
                    src="/images/bodyfunction-clinic-neck-treatment-session-close.jpg"
                    alt="Neck treatment session at Bodyfunction Clinic"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-6 lg:pt-32">
              <FadeUp delay={0.1}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm">
                  <p className="text-label mb-6 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                    What was actually wrong
                  </p>
                  <div className="space-y-4">
                    {[
                      "Nothing on the site answered the questions patients type before they book.",
                      "Condition and treatment pages were not targeting how people actually search.",
                      "No page had enough depth to compete with established health sites.",
                      "Internal linking gave Google no sense of what the clinic specialised in.",
                      "Past patients were a standing asset nobody was contacting.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 rounded-xl border border-white bg-white/50 p-3 transition-all hover:shadow-sm"
                      >
                        <svg
                          className="mt-1 flex-shrink-0 text-[var(--color-error)]"
                          width="18"
                          height="18"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 4l8 8M12 4l-8 8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="text-body-sm font-medium leading-snug text-[var(--color-ink)]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── The numbers ──────────────────────────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Two years on</p>
              <h2 className="text-h2 mb-4 text-[var(--color-ink)]">
                What the search data actually shows
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Every figure below comes from Google Search Console or Ahrefs and
                can be checked in either tool.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.05}>
            <StatTiles items={headlineStats} />
          </FadeUp>

          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <FadeUp delay={0.1}>
                <OrganicGrowthChart />
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={0.15}>
                <p className="eyebrow mb-5">The inflection</p>
                <h3 className="text-h3 mb-5 text-[var(--color-ink)]">
                  A year of nothing, then compounding
                </h3>
                <div className="space-y-5">
                  <p className="text-body text-[var(--color-muted)]">
                    The shape of this line is the most useful thing on the page for
                    any clinic owner considering SEO. For twelve months, nothing
                    visible happened. Then it moved to 50 visits a month, 140 by
                    January 2025, past 1,100 by that March, and beyond 3,000 by the
                    start of 2026.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    That flat first stretch is where most clinics give up. It is also
                    the period doing the work — search engines were building a
                    picture of what the site was authoritative about long before
                    that showed up in traffic.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    That organic visibility is now worth roughly{" "}
                    <strong className="font-semibold text-[var(--color-ink)]">
                      $11,400 a year
                    </strong>{" "}
                    in equivalent paid search spend, against $80 two years ago.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Position movement ────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <FadeUp>
                <p className="eyebrow mb-5">Rankings</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  Buried on page two, now near the top of page one
                </h2>
                <div className="space-y-5">
                  <p className="text-body text-[var(--color-muted)]">
                    Position two on Google is not half as good as position one. It is
                    a fraction as good. Almost nobody reaches page two at all, which
                    is why moving a term from 18 to 6 does not increase clicks by a
                    third — it multiplies them.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    These are query-level figures, so they are unaffected by the
                    site&apos;s mid-period URL change. The clicks in each note are
                    the real-world consequence of the position move beside it.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-7">
              <FadeUp delay={0.1}>
                <PositionDumbbell
                  title="Position movement, year on year"
                  source="Google Search Console, 12 months to Jul 2026"
                  rows={positionJumps}
                  scaleMax={22}
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── One page, 250 keywords ───────────────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <FadeUp delay={0.1}>
                <RankingTable
                  title="Terms now holding position one or two"
                  source="Google Search Console, 12 months to Jul 2026"
                  rows={topRankings}
                  metric="clicks"
                />
              </FadeUp>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <FadeUp>
                <p className="eyebrow mb-5">Compounding</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  One article now ranks for 250 different searches
                </h2>
                <div className="space-y-5">
                  <p className="text-body text-[var(--color-muted)]">
                    A single condition page on the clinic&apos;s site — covering
                    whether back pain can cause stomach pain — now ranks for{" "}
                    <strong className="font-semibold text-[var(--color-ink)]">
                      250 separate keywords
                    </strong>{" "}
                    and is worth $202 a month in equivalent ad spend on its own.
                    Three further articles clear $99 a month each.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    This is the part that is hard to believe until you have watched
                    it happen. You do not write a page per keyword. You write one
                    genuinely thorough page about a problem patients have, and it
                    accumulates hundreds of ways in.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    Across the site, that is 1,112 keywords and 1,637 distinct search
                    queries bringing people in, against 104 keywords two years ago.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand demand ─────────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <FadeUp>
                <p className="eyebrow mb-5">The signal that matters</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  Five times as many people now search for the clinic by name
                </h2>
                <div className="space-y-5">
                  <p className="text-body text-[var(--color-muted)]">
                    Traffic figures can flatter. Branded search cannot. When somebody
                    types your clinic&apos;s name into Google, they already know who
                    you are and they are looking for you specifically.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    Combined branded search clicks grew roughly fivefold. That is
                    real-world awareness in Angel and Islington increasing, not just
                    a ranking moving on a screen — including a term that did not
                    exist for the clinic two years ago and now converts at 34%.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-6">
              <FadeUp delay={0.1}>
                <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
                  <div className="border-b border-[var(--color-border)] px-6 py-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                      Branded search growth
                    </span>
                    <p className="mt-1 text-body-sm text-[var(--color-muted)]">
                      Google Search Console, clicks year on year
                    </p>
                  </div>
                  <div className="divide-y divide-[var(--color-border)]">
                    {[
                      { term: "bodyfunction clinic", from: 136, to: 702, pos: "1.0" },
                      { term: "body function clinic", from: 140, to: 630, pos: "1.1" },
                      { term: "bodyfunction", from: 32, to: 133, pos: "1.0" },
                      { term: "body function clinic angel", from: 0, to: 45, pos: "1.0" },
                    ].map((row) => (
                      <div key={row.term} className="flex items-center justify-between gap-4 px-6 py-4">
                        <div>
                          <p className="text-body-sm font-medium text-[var(--color-ink)]">
                            {row.term}
                          </p>
                          <p className="text-[11px] text-[var(--color-muted)]">
                            Position {row.pos}
                          </p>
                        </div>
                        <p className="flex-shrink-0 text-body-sm tabular-nums text-[var(--color-muted)]">
                          {row.from}
                          <span className="mx-1.5" aria-hidden>
                            →
                          </span>
                          <span className="font-bold text-[var(--color-accent)]">{row.to}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── The honest bit ───────────────────────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <FadeUp>
                <p className="eyebrow mb-5">Straight answer</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  What this has not done yet
                </h2>
                <div className="space-y-5">
                  <p className="text-body text-[var(--color-muted)]">
                    49,000 clicks a year did not become 49,000 bookings, and any
                    agency telling you otherwise is selling you something. Most of
                    this volume is national informational health search — people
                    across the country asking whether their neck pain could be
                    causing their nausea, not Londoners looking to book.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    The local commercial terms are still mid-page-one at best. That
                    is the honest position, and it is the obvious next phase of the
                    work rather than a hidden failure.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    What the last two years built is the thing that makes those local
                    terms winnable: domain authority, 383 top-three rankings and
                    fivefold brand demand. A clinic with none of that competing for
                    &ldquo;osteopath near me&rdquo; has no chance. A clinic with all
                    of it has a real one.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-6">
              <FadeUp delay={0.1}>
                <RankingTable
                  title="The local terms still to be won"
                  source="Google Search Console, 12 months to Jul 2026"
                  rows={localTerms}
                  metric="impressions"
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we changed ──────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">What we did</p>
              <h2 className="text-h2 mb-4 text-[var(--color-ink)]">
                How we rebuilt the website around growth
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                The specific changes behind the numbers above, and the ones we now
                apply to every clinic we work with.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {[
              {
                title: "Wrote for the question, not the treatment",
                desc: "Patients do not search for osteopathy. They search for whether their back pain could be causing their stomach pain. Every high-performing page on the site answers a question somebody actually typed, thoroughly enough to be the best answer available.",
              },
              {
                title: "Built depth on a few pages, not thin pages everywhere",
                desc: "One article ranking for 250 keywords beats fifty pages ranking for none. We went deep on the conditions the clinic genuinely knew about rather than publishing a page for every possible search term.",
              },
              {
                title: "Connected the pages to each other",
                desc: "Internal linking between conditions, treatments and booking gave Google a clear picture of what the clinic specialised in, and gave patients an obvious route from reading about a problem to doing something about it.",
              },
              {
                title: "Made the booking route obvious from anywhere",
                desc: "Somebody arriving on a page about neck pain and nausea should never have to hunt for how to see somebody about it. The path from information to appointment was shortened on every page.",
              },
              {
                title: "Fixed the technical foundations first",
                desc: "Site structure, page speed and crawlability were sorted before any content work, because content on a technically weak site does not rank no matter how good it is.",
              },
              {
                title: "Stopped ignoring past patients",
                desc: "The existing patient list was the cheapest source of appointments the clinic had and nothing was being done with it. Reactivation became a standing part of the system rather than an afterthought.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="card-surface flex h-full flex-col p-7 md:p-8">
                  <h3 className="text-h3 mb-2 text-[var(--color-ink)]">{item.title}</h3>
                  <p className="text-body text-[var(--color-muted)]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Patient journey ──────────────────────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="order-2 max-w-xl lg:order-1">
              <FadeUp>
                <p className="eyebrow mb-5">Conversion</p>
                <h2 className="text-h2 mb-8 leading-tight text-[var(--color-ink)]">
                  Getting found is only half of it
                </h2>
                <div className="space-y-6">
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    Patients do not choose a clinic the way they choose a plumber.
                    They need to feel understood before they will book, particularly
                    when they are in pain and have already been let down by somebody
                    else.
                  </p>
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    That means a page has to do more than list what you offer. It has
                    to show you understand the specific problem, explain what will
                    happen in the room, and make the next step feel small.
                  </p>
                  <p className="border-l-2 border-[var(--color-accent)] py-2 pl-6 text-body italic leading-relaxed text-[var(--color-muted)]">
                    All the search visibility in the world is wasted on a page that
                    does not convince somebody you can help them.
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="relative order-1 lg:order-2">
              <FadeUp delay={0.1}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-2xl">
                  <Image
                    src="/images/bodyfunction-physiotherapy-strength-conditioning-floor-exercise-02.jpg"
                    alt="Physiotherapy strength and conditioning session at Bodyfunction Clinic"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -right-6 -top-6 -z-10 h-24 w-24 rounded-full bg-[var(--color-accent)]/5 blur-xl" />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Takeaway ─────────────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <FadeUp>
                <p className="eyebrow mb-5">Takeaway</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  What other clinics can learn from this
                </h2>
                <div className="space-y-6">
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    The first lesson is the uncomfortable one. Nothing visible
                    happened for a year. If you are going to do this properly, you
                    need to accept a period where you are doing the work and seeing
                    very little back, because that is when the foundation is
                    actually being laid.
                  </p>
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    The second is that depth beats breadth. One page that genuinely
                    answers a patient&apos;s question will outperform twenty thin
                    ones, and it keeps earning for years after you write it.
                  </p>
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    The third is that the order matters. Fix the technical
                    foundations, then build content that answers real questions, then
                    push on local commercial terms once you have the authority to
                    compete for them. Clinics that start at the end wonder why their
                    ad spend does not work.
                  </p>
                  <p className="border-l-4 border-[var(--color-accent)] py-1 pl-6 text-body font-semibold text-[var(--color-muted)]">
                    A stronger foundation makes every other marketing channel you run
                    perform better.
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <div className="card-surface p-8">
                  <h3 className="text-h3 mb-5 text-[var(--color-ink)]">
                    See the same approach from a standing start
                  </h3>
                  <p className="text-body mb-6 text-[var(--color-muted)]">
                    Lind Street Osteopathy launched with no website and no search
                    history at all, and reached page one across its whole catchment
                    in twelve months.
                  </p>
                  <ArrowLink href="/case-studies/lind-street-osteopathy/">
                    Read the Lind Street case study
                  </ArrowLink>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── How Clinic Evo can help ──────────────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Next step</p>
              <h2 className="text-h2 mb-4 text-[var(--color-ink)]">
                How Clinic Evo can help your clinic
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                The same foundations, applied to your practice: search visibility,
                site structure, the patient journey, booking flow and reactivation.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "SEO for clinics", href: "/seo-for-clinics/" },
              { label: "Clinic website design", href: "/website-design-for-clinics/" },
              { label: "Google Ads for clinics", href: "/google-ads-for-clinics/" },
              { label: "AI patient reactivation", href: "/ai-integration/" },
            ].map((link, i) => (
              <FadeUp key={link.href} delay={i * 0.05}>
                <a href={link.href} className="card-surface group block p-6">
                  <span className="font-semibold text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
                    {link.label}
                  </span>
                  <svg
                    className="mt-4 text-[var(--color-accent)]"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10h12M11 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section !pb-10 bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="mx-auto max-w-3xl">
            <FadeUp>
              <div className="mb-10 text-center">
                <p className="eyebrow mb-5 justify-center">FAQ</p>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  Clinic marketing case study FAQs
                </h2>
              </div>
            </FadeUp>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] px-6 py-2 shadow-[var(--shadow-card)] sm:px-10">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Want to see what your clinic is missing?"
        subheading="A free clinic audit will show where your current website, SEO, patient journey and conversion points could be improved. You will get practical recommendations based on how your clinic appears online."
        primaryLabel="Get a free clinic audit"
        primaryHref="/free-clinic-audit/"
      />
    </>
  );
}

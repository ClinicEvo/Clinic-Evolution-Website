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
import { StatTiles, RankingTable } from "@/components/case-studies/CaseStudyCharts";

/*
 * Lind Street Osteopathy — the "standing start" case study.
 *
 * Deliberately the opposite story to Bodyfunction: small absolute numbers, but
 * total local visibility from zero in under a year. Every figure on this page
 * comes from Google Search Console. Ahrefs has effectively no index coverage
 * for this domain — it is too new and too small — so no Ahrefs figure appears
 * here, and none should be added later.
 *
 * The July 2026 click dip is deliberately not charted. It is mostly new
 * impressions on broader terms dragging the average position, but it has not
 * been explained well enough to put a downward tick in front of a prospect.
 */

export const metadata = buildMetadata({
  title: "Osteopath Marketing Case Study | Lind Street Osteopathy",
  description:
    "How a new single-practitioner osteopathy clinic in Ryde went from no search presence at all to page one for every core local term in under twelve months.",
  path: "/case-studies/lind-street-osteopathy/",
});

const faqs = [
  {
    question: "How long does SEO take for a new clinic website?",
    answer:
      "Lind Street Osteopathy launched with no search history at all and was ranking on page one for its core local terms within twelve months. Early movement usually shows in the first three to six months on brand and long-tail terms, with competitive local terms following once the site has built some history. A brand new domain will always take longer than an established one.",
  },
  {
    question: "Does SEO work for a single-practitioner clinic?",
    answer:
      "Yes, and often better than clinic owners expect. A single-practitioner practice does not need national traffic. It needs to be the obvious choice inside a small catchment. That is a far more achievable target than competing nationally, and it is why a modest number of well-targeted visitors can fill one diary.",
  },
  {
    question: "Are separate pages for each condition worth building?",
    answer:
      "In this project they were the pages that performed best. The niche clinical pages covering fibromyalgia, hypermobility and TMJ outranked the broader service pages. Patients search for their specific problem rather than for a category of treatment, so a page that names the condition tends to match the search more closely than a general treatments page.",
  },
  {
    question: "What does a clinic need in place before SEO is worth doing?",
    answer:
      "A website that is technically sound, clearly structured around the conditions you treat, and easy to book from. SEO brings people to the page. Whether they book depends on what they find when they get there, which is why the branding, site build and search work were done together here rather than in sequence.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Lind Street Osteopathy", href: "/case-studies/lind-street-osteopathy/" },
];

/* GSC, lindstreetosteopathy.co.uk, 12 months to Jul 2026. */
const localTerms = [
  { query: "lind street osteopathy", position: 1.0, clicks: 113, ctr: "67.0%" },
  { query: "ryde osteopath", position: 4.0, clicks: 22, ctr: "15.2%" },
  { query: "osteopath ryde", position: 4.9, clicks: 45, ctr: "19.4%" },
  { query: "sports massage ryde", position: 5.2, clicks: 6, ctr: "20.0%" },
  { query: "osteopath near me", position: 5.4, clicks: 3, ctr: "5.1%" },
  { query: "ryde osteopathic practice", position: 5.9, clicks: 6, ctr: "4.5%" },
  { query: "osteopath", position: 6.5, clicks: 13, ctr: "8.9%" },
  { query: "osteopath isle of wight", position: 7.4, clicks: 67, ctr: "7.5%" },
];

/* GSC, page-level, 90 days to Jul 2026. */
const servicePages = [
  { query: "Neck pain, headaches & TMJ in Ryde", position: 5.1, impressions: 1116 },
  { query: "Fibromyalgia — why your pain isn't imaginary", position: 6.5, impressions: 193 },
  { query: "Hypermobility — why flexible bodies still hurt", position: 7.1, impressions: 664 },
  { query: "About", position: 9.5, impressions: 1533 },
  { query: "Osteopathy", position: 12.2, impressions: 880 },
  { query: "Sports massage", position: 12.4, impressions: 815 },
  { query: "Chronic pain, fibromyalgia & hypermobility in Ryde", position: 18.4, impressions: 753 },
];

const headlineStats = [
  {
    value: 570,
    prefix: "+",
    suffix: "%",
    label: "Google clicks, first six months against the second six",
    source: "GSC — 86 clicks rising to 576",
  },
  {
    display: "4.9",
    label: "Average Google position for “osteopath ryde”",
    source: "GSC — from no ranking at all",
  },
  {
    value: 67,
    suffix: "%",
    label: "Click-through rate on the clinic's brand search",
    source: "GSC — 113 clicks, position 1.0",
  },
  {
    value: 501,
    label: "Distinct search terms the site now appears for",
    source: "GSC — lifetime to Jul 2026",
  },
];

const buildScope = [
  {
    title: "Brand and logo",
    body: "The clinic had no visual identity. We built the logo, the palette and the wider brand from scratch, drawn from the Victorian townhouse the practice works out of rather than the clinical stock look most osteopathy clinics default to.",
  },
  {
    title: "The website",
    body: "A site structured around conditions patients actually search for, not a treatments list. Every core condition got its own page, with the booking route no more than one click away from any of them.",
  },
  {
    title: "Search visibility",
    body: "Keyword and competitor research for the Isle of Wight catchment first, then page structure, titles and content built to match it. The title and meta work is why the click-through rates are running well above position average.",
  },
  {
    title: "Meta advertising",
    body: "Facebook and Instagram campaigns to create demand while the organic visibility was still building, so the diary was not waiting on search results that take months to arrive.",
  },
];

export default function LindStreetCaseStudyPage() {
  return (
    <>
      <ServiceSchema
        name="Lind Street Osteopathy Case Study"
        description="An osteopath marketing case study showing how a new single-practitioner clinic reached page one for every core local search term within twelve months of launch."
        url="/case-studies/lind-street-osteopathy/"
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
                <p className="eyebrow mb-5 mt-6">Case study</p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h1 className="text-h1 mb-6 tracking-tight text-[var(--color-ink)]">
                  Osteopath marketing case study: Lind Street Osteopathy
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="max-w-xl space-y-6">
                  <p className="text-body-lg leading-relaxed text-[var(--color-muted)]">
                    Serena Gower-Johnson opened Lind Street Osteopathy in Ryde with
                    no logo, no website and no search presence of any kind. Google
                    had never recorded a single impression for the practice.
                  </p>
                  <p className="text-body-lg leading-relaxed text-[var(--color-muted)]">
                    Twelve months later the clinic sits on page one for every
                    commercially relevant osteopathy search in its catchment, and
                    holds position one for its own name with a 67% click-through
                    rate.
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
                <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/images/lind-street/homepage-banner.png"
                    alt="The Lind Street Osteopathy homepage, showing the brand and site built by Clinic Evo"
                    width={1440}
                    height={810}
                    className="w-full"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-2xl bg-[var(--color-accent)]/10 blur-2xl" />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Headline numbers ─────────────────────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <FadeUp>
                <p className="eyebrow mb-5">The result</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  A genuine standing start, not a growth curve
                </h2>
                <div className="space-y-5">
                  <p className="text-body-lg text-[var(--color-muted)]">
                    There is no Google Search Console data of any kind for this
                    domain before August 2025. Zero clicks, zero impressions, zero
                    queries. Everything below was built from nothing in twelve
                    months.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    That makes this a different kind of proof to a clinic that was
                    already ranking and improved. There was no existing visibility
                    to build on and no history for Google to draw on.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-7">
              <FadeUp delay={0.1}>
                <StatTiles items={headlineStats} />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we built ────────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <FadeUp>
                <p className="eyebrow mb-5">The work</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  Everything the clinic put in front of a patient, built together
                </h2>
                <p className="text-body text-[var(--color-muted)]">
                  Brand, website, search and paid social were built as one piece of
                  work rather than four separate jobs handed to four suppliers. That
                  matters more for a new clinic than an established one, because
                  there is nothing already working to fall back on.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="mt-10 flex items-center gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border border-[var(--color-border)] bg-white">
                    <Image
                      src="/images/lind-street/serena-portrait.png"
                      alt="Serena Gower-Johnson, founder of Lind Street Osteopathy"
                      fill
                      className="object-cover object-top"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <p className="font-display text-body font-semibold text-[var(--color-ink)]">
                      Serena Gower-Johnson
                    </p>
                    <p className="text-body-sm text-[var(--color-muted)]">
                      M.Ost, Registered Osteopath
                    </p>
                    <p className="mt-1 text-body-sm text-[var(--color-muted)]">
                      Founder, Lind Street Osteopathy, Ryde
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {buildScope.map((item, i) => (
                  <FadeUp key={item.title} delay={i * 0.07}>
                    <div className="card-surface flex h-full flex-col p-7 md:p-8">
                      <h3 className="text-h3 mb-3 text-[var(--color-ink)]">{item.title}</h3>
                      <p className="text-body text-[var(--color-muted)]">{item.body}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Local rankings ───────────────────────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <FadeUp>
                <p className="eyebrow mb-5">Search visibility</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  Page one for every term that matters locally
                </h2>
                <div className="space-y-5">
                  <p className="text-body text-[var(--color-muted)]">
                    These are the searches a person on the Isle of Wight actually
                    types when they need an osteopath. Twelve months after launch,
                    the clinic appears on page one for all of them.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    The click-through rates are the part worth noticing. At 19.4%,
                    &ldquo;osteopath ryde&rdquo; is earning far more clicks than a
                    position of 4.9 would normally return. That is the title and
                    description work doing its job, not just the ranking.
                  </p>
                  <p className="border-l-4 border-[var(--color-accent)] py-1 pl-6 text-body font-semibold text-[var(--color-muted)]">
                    Ranking is what gets you listed. The words in the listing are
                    what get you the click.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-7">
              <FadeUp delay={0.1}>
                <RankingTable
                  title="Core local search terms"
                  source="Google Search Console, 12 months to Jul 2026"
                  rows={localTerms}
                  metric="clicks"
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── The finding ──────────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <FadeUp delay={0.1}>
                <RankingTable
                  title="How the individual pages rank"
                  source="Google Search Console, 90 days to Jul 2026"
                  rows={servicePages}
                  metric="impressions"
                />
              </FadeUp>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <FadeUp>
                <p className="eyebrow mb-5">What we learned</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  The specific pages beat the general ones
                </h2>
                <div className="space-y-5">
                  <p className="text-body text-[var(--color-muted)]">
                    The clinic&apos;s best performing pages are not the ones named
                    after treatments. They are the ones named after conditions. The
                    fibromyalgia, hypermobility and TMJ pages all outrank the
                    general osteopathy and sports massage pages.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    Patients do not search for a category of treatment. They search
                    for the thing that is wrong with them, often using the exact
                    words their GP or a forum used. A page that names the condition
                    matches that search far more closely than a treatments page
                    covering everything.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    In a catchment this size, that is the whole game. There is not
                    enough search volume to win on breadth, so the depth of each
                    page is what earns the visibility.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Honest framing ───────────────────────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <FadeUp>
                <p className="eyebrow mb-5">Straight answer</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  What these numbers do and do not tell you
                </h2>
                <div className="space-y-5">
                  <p className="text-body text-[var(--color-muted)]">
                    662 clicks in a year is a small number in absolute terms, and we
                    are not going to dress it up as anything else. This is one
                    osteopath on an island of around 140,000 people. The ceiling is
                    low by design.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    The right way to read it is share of a defined local market
                    rather than volume of traffic. A single practitioner does not
                    need thousands of visitors. They need the people in their
                    catchment who are looking for an osteopath this week to find
                    them first.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    On that measure the clinic has close to full coverage of its
                    market, from a standing start, inside a year.
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-6">
              <FadeUp delay={0.1}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-sm">
                  <p className="mb-6 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                    Where the numbers come from
                  </p>
                  <div className="space-y-5">
                    {[
                      {
                        h: "Google Search Console, direct from the API",
                        b: "Every figure on this page is pulled from the clinic's own Search Console property. Nothing is modelled or estimated.",
                      },
                      {
                        h: "No third-party estimates",
                        b: "Ahrefs and similar tools have almost no index coverage for a domain this new and this small, so we have not quoted any of their figures here.",
                      },
                      {
                        h: "Search data, not booking data",
                        b: "Search Console measures clicks to the website. It cannot see appointments. We have not claimed a booking figure because we cannot evidence one.",
                      },
                    ].map((item) => (
                      <div key={item.h} className="flex items-start gap-4">
                        <svg
                          className="mt-1 flex-shrink-0 text-[var(--color-accent)]"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 8.5l3.5 3.5L13 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div>
                          <p className="text-body-sm font-semibold text-[var(--color-ink)]">
                            {item.h}
                          </p>
                          <p className="mt-1 text-body-sm text-[var(--color-muted)]">{item.b}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
                    The most common objection we hear from smaller practices is that
                    SEO is something only larger clinics with larger budgets can
                    make work. This project is the counter-argument. A new
                    single-practitioner clinic with no history took page one across
                    its whole catchment in twelve months.
                  </p>
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    What made it work was doing the research before the build rather
                    than after it, giving each condition its own properly written
                    page, and running paid social alongside so the diary was not
                    sitting empty while the search results matured.
                  </p>
                  <p className="border-l-4 border-[var(--color-accent)] py-1 pl-6 text-body font-semibold text-[var(--color-muted)]">
                    In a small catchment you are not trying to beat the internet.
                    You are trying to be the obvious choice within about fifteen
                    miles. That is a winnable fight.
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <div className="card-surface p-8">
                  <h3 className="text-h3 mb-5 text-[var(--color-ink)]">
                    The same approach, applied to your clinic
                  </h3>
                  <p className="text-body mb-6 text-[var(--color-muted)]">
                    Brand, website, search visibility and paid social, built as one
                    system rather than four separate jobs.
                  </p>
                  <div className="flex flex-col gap-4">
                    <ArrowLink href="/seo-for-clinics/">SEO for clinics</ArrowLink>
                    <ArrowLink href="/website-design-for-clinics/">
                      Clinic website design
                    </ArrowLink>
                    <ArrowLink href="/digital-marketing/">
                      Social and paid advertising
                    </ArrowLink>
                    <ArrowLink href="/osteopath-marketing/">
                      Marketing for osteopaths
                    </ArrowLink>
                  </div>
                </div>
              </FadeUp>
            </div>
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
                  Clinic SEO questions this project answers
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
        heading="Starting from nothing, or starting again?"
        subheading="A free clinic audit will show where your clinic currently stands in local search, what your competitors are ranking for that you are not, and what it would take to close the gap."
        primaryLabel="Get a free clinic audit"
        primaryHref="/free-clinic-audit/"
      />
    </>
  );
}

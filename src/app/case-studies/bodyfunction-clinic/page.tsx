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
} from "@/components/case-studies/CaseStudyCharts";

/*
 * Bodyfunction Clinic — the origin story, written for a clinic owner.
 *
 * This page is a case study, not an SEO report. An earlier version stacked
 * ranking tables and sourcing caveats until it read like an analytics export;
 * that is the "generic Lego blocks" problem Danny raised on the 10 Aug call.
 * The numbers are still here and still sourced, but they support a story about
 * a clinic that could not be found and now can.
 *
 * Danny Morgan founded Bodyfunction and co-founded Clinic Evo. That is stated
 * up front rather than implied — the brief was explicit that presenting it as
 * an arm's-length client engagement is the thing to fix.
 */

export const metadata = buildMetadata({
  title: "Osteopathy Clinic Marketing Case Study | Bodyfunction Clinic",
  description:
    "How a London osteopathy clinic went from eight website visitors a month to nearly 4,000, reached page one for local patient searches, and five-timesed the number of people searching for it by name.",
  path: "/case-studies/bodyfunction-clinic/",
});

const faqs = [
  {
    question: "How long before a clinic sees results from this kind of work?",
    answer:
      "The local patient searches — the ones where somebody is looking for an osteopath near them right now — reached page one within six months. The bigger content engine took longer to compound, which is normal. Any agency promising you page one in week three is describing something that does not happen.",
  },
  {
    question: "Is Bodyfunction Clinic a Clinic Evo client?",
    answer:
      "No, and we would rather say so plainly. Danny Morgan is a co-founder of Clinic Evo and also the founder of Bodyfunction Clinic. Clinic Evo grew directly out of the work of building Bodyfunction's digital presence. We publish it as our origin story and our longest-running body of evidence.",
  },
  {
    question: "Does this work for a clinic that is not in London?",
    answer:
      "Yes, and often faster. A smaller catchment has less competition to displace, so local visibility usually comes sooner. Our Lind Street Osteopathy case study covers a single-practitioner clinic on the Isle of Wight that reached page one across its whole catchment within twelve months of opening.",
  },
  {
    question: "What does a free clinic audit actually involve?",
    answer:
      "We look at where your clinic currently appears for the searches your patients actually make, what your local competitors are ranking for that you are not, how your website handles somebody who is ready to book, and where enquiries are going cold. You get a prioritised list of what to fix first.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Bodyfunction Clinic", href: "/case-studies/bodyfunction-clinic/" },
];

/* GSC and Ahrefs, bodyfunction.co.uk. Aug 2024 – Jul 2025 against Aug 2025 – Jul 2026. */
const headlineStats = [
  {
    display: "8 → 3,900",
    label: "People finding the clinic through Google each month",
    source: "Ahrefs — Aug 2024 against Aug 2026",
  },
  {
    value: 425,
    prefix: "+",
    suffix: "%",
    label: "More clicks through to the website, year on year",
    source: "GSC — 9,345 rising to 49,065",
  },
  {
    display: "Page one",
    label: "For the local searches patients use to find an osteopath nearby",
    source: "GSC — reached within six months",
  },
  {
    value: 5,
    suffix: "×",
    label: "More people searching for the clinic by name",
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

export default function BodyfunctionCaseStudyPage() {
  return (
    <>
      <ServiceSchema
        name="Bodyfunction Clinic Case Study"
        description="How a London osteopathy clinic grew from eight monthly visitors to nearly 4,000, reached page one for local patient searches and five-timesed its branded search demand."
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
                {/* H1 keeps the page's target keyword. The brief is explicit
                    that it must not be rewritten to be more conversational, and
                    Simon made the same point on the call — the story hook lives
                    in the paragraphs below, not in the H1. */}
                <h1 className="text-h1 mb-6 tracking-tight text-[var(--color-ink)]">
                  Bodyfunction Clinic marketing case study
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="max-w-xl space-y-6">
                  <p className="text-body-lg leading-relaxed text-[var(--color-muted)]">
                    In August 2024, Bodyfunction Clinic in Angel was getting eight
                    visitors a month from Google. Not eight a day. Eight a month, and
                    it had been stuck there for a year. The practitioners were good.
                    Nobody could find them.
                  </p>
                  <p className="text-body-lg leading-relaxed text-[var(--color-muted)]">
                    Today it is found by nearly 4,000 people a month, sits on page one
                    for the local searches patients actually use, and five times as
                    many people search for it by name. This is what we did, and why we
                    now do it for other clinics.
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="mt-10 flex flex-col gap-5 sm:flex-row">
                  <Button href="/free-clinic-audit/" size="lg">
                    Get a free clinic audit
                  </Button>
                  <Button href="/case-studies/lind-street-osteopathy/" variant="outline" size="lg">
                    See a clinic starting from zero
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

      {/* ── Why this one is different ────────────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <FadeUp>
                <p className="eyebrow mb-5">Why we can tell you the truth about this one</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  It is our own clinic
                </h2>
                <div className="space-y-5">
                  <p className="text-body-lg text-[var(--color-muted)]">
                    Danny Morgan is an osteopath. He built Bodyfunction Clinic, and
                    then had to work out how to fill it without a marketing budget or
                    an agency worth paying. He is also a co-founder of Clinic Evo.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    Which means everything on this page was learned the hard way, on
                    his own diary and his own money. We know which decisions moved the
                    needle because we were the ones who lost income when they did not.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    Clinic Evo exists to give that to other clinic owners, without the
                    two years of guessing. Simon brought the technical SEO and digital
                    marketing side; Danny brought the clinical reality of what patients
                    actually do before they book.
                  </p>
                  <p className="border-l-4 border-[var(--color-accent)] py-1 pl-6 text-body font-semibold text-[var(--color-muted)]">
                    We are not a marketing company that happens to have healthcare
                    clients. We are healthcare professionals who had to solve this for
                    ourselves first.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                {/* Danny himself, not the team shot — danny_and_co.jpg is the
                    same photograph as the hero, just cropped square, and using
                    both put the identical picture on the page twice. This
                    section is about him founding both businesses anyway. */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-lg">
                  <Image
                    src="/images/danny-morgan-angel-clinic.png"
                    alt="Danny Morgan, osteopath, founder of Bodyfunction Clinic and co-founder of Clinic Evo"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 440px"
                  />
                </div>
              </FadeUp>
            </div>
          </div>

          {/* The Project Overview section was removed per the brief, but Danny
              asked to keep the summary boxes that sat beneath it — "that's
              enough strain on the eyes for that section". */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Clinic type", value: "Osteopathy and MSK clinic, Angel, London" },
              { label: "What we worked on", value: "Website structure, local visibility, condition content, patient follow-up" },
              { label: "Timeframe", value: "Two years, August 2024 to August 2026" },
              { label: "Relationship", value: "Clinic Evo's founding clinic, not an outside client" },
            ].map((card, i) => (
              <FadeUp key={card.label} delay={i * 0.07}>
                <div className="card-surface h-full p-8">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-accent-text)]">
                    {card.label}
                  </p>
                  <p className="text-body font-medium text-[var(--color-ink)]">{card.value}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── The problem, in a clinic owner's terms ───────────────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="space-y-12 lg:col-span-6">
              <FadeUp>
                <p className="eyebrow mb-5">The problem</p>
                <h2 className="text-h2 mb-8 leading-tight text-[var(--color-ink)]">
                  Every patient came from a recommendation, and that was the ceiling
                </h2>
                <div className="space-y-6">
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    If you rely on word of mouth, your diary is only ever as full as
                    your last happy patient made it. There is no way to turn it up when
                    you need to, and no way to plan around it.
                  </p>
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    Meanwhile, people two streets away were searching for exactly what
                    the clinic did and finding somebody else. That is the part that
                    stings. The demand was already there. It was just going to whoever
                    Google put in front of them.
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

            <div className="lg:col-span-6 lg:pt-24">
              <FadeUp delay={0.1}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm">
                  <p className="text-label mb-6 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                    If any of this sounds familiar
                  </p>
                  <div className="space-y-4">
                    {[
                      "Quiet weeks you cannot explain, and no lever to pull when they happen.",
                      "Competitors you know you are better than, sitting above you in Google.",
                      "A website that looks fine but has never actually brought anyone in.",
                      "Patients you treated once, who you have not spoken to since.",
                      "No real idea which of your marketing is working, or whether any of it is.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 rounded-xl border border-white bg-white/50 p-3 transition-all hover:shadow-sm"
                      >
                        <svg
                          className="mt-1 flex-shrink-0 text-[var(--color-accent)]"
                          width="18"
                          height="18"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M8 1.5l6 3v4c0 3.2-2.4 5.4-6 6-3.6-.6-6-2.8-6-6v-4z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-body-sm font-medium leading-snug text-[var(--color-ink)]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-body-sm text-[var(--color-muted)]">
                    That was this clinic two years ago. Every one of those is fixable.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we did ──────────────────────────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">What we did</p>
              <h2 className="text-h2 mb-4 text-[var(--color-ink)]">
                Six changes that did the work
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                None of these are clever. They are the things most clinic websites
                simply have not had done to them.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {[
              {
                title: "Answered what patients actually type",
                desc: "Nobody searches for “osteopathy”. They search for whether their back pain could be causing their stomach pain, at eleven at night, worried. Every page that works on this site answers a real question somebody asked.",
              },
              {
                title: "Went deep instead of wide",
                desc: "One thorough page beats twenty thin ones. We wrote properly about the conditions the clinic genuinely knew, rather than publishing a shallow page for every service and hoping.",
              },
              {
                title: "Made the local searches winnable",
                desc: "The terms that bring in someone ready to book — “osteopath near me”, “osteopath islington” — need local signals, consistent details and pages built for the area, not just good content.",
              },
              {
                title: "Shortened the route to booking",
                desc: "Someone reading about their neck pain at midnight should never have to hunt for how to see somebody about it. The path from worry to appointment got shorter on every page.",
              },
              {
                title: "Fixed the foundations first",
                desc: "Site structure, speed and how Google reads the site were sorted before any content went up. Good content on a broken site does not rank, and most clinics find this out the expensive way.",
              },
              {
                title: "Stopped ignoring past patients",
                desc: "The existing patient list was the cheapest source of appointments the clinic had, and nothing was being done with it. Follow-up became a system rather than a good intention.",
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

      {/* ── What happened ────────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">What happened</p>
              <h2 className="text-h2 mb-4 text-[var(--color-ink)]">
                From invisible to the first clinic patients see
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Measured in Google Search Console and Ahrefs, so you can check every
                one of these.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <FadeUp delay={0.05}>
                <StatTiles items={headlineStats} />
              </FadeUp>
            </div>
            <div className="lg:col-span-4">
              <FadeUp delay={0.12}>
                <figure className="m-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
                  <figcaption className="border-b border-[var(--color-border)] px-6 py-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-text)]">
                      Straight from Ahrefs
                    </span>
                    <p className="mt-1 text-body-sm text-[var(--color-muted)]">
                      bodyfunction.co.uk, today
                    </p>
                  </figcaption>
                  <div className="p-5">
                    <Image
                      src="/images/case-studies/bodyfunction-ahrefs-summary.png"
                      alt="Ahrefs summary for bodyfunction.co.uk showing 1.1K organic keywords, 332 in the top three, 3.9K monthly organic traffic and $980 monthly traffic value"
                      width={598}
                      height={210}
                      className="w-full"
                    />
                  </div>
                  <div className="border-t border-[var(--color-border)] px-6 py-4">
                    <p className="text-body-sm leading-relaxed text-[var(--color-muted)]">
                      The green figures are the change since the last check. Still
                      climbing.
                    </p>
                  </div>
                </figure>
              </FadeUp>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <FadeUp delay={0.1}>
                <OrganicGrowthChart />
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={0.15}>
                <p className="eyebrow mb-5">The bit nobody warns you about</p>
                <h3 className="text-h3 mb-5 text-[var(--color-ink)]">
                  Nothing visible happens, and then it all does
                </h3>
                <div className="space-y-5">
                  <p className="text-body text-[var(--color-muted)]">
                    Look at the flat stretch at the start of that line. That is a year
                    of work with almost nothing to show for it. It is also the exact
                    point where most clinic owners conclude SEO does not work and stop
                    paying for it.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    Then it moved to 50 visits a month, 140 by January 2025, past 1,100
                    by that March, and beyond 3,000 by the start of 2026. Same work.
                    It simply takes that long for Google to trust you.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    If you take one thing from this page, take that. The clinics that
                    win at this are the ones who did not quit in month five.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Local page one ───────────────────────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <FadeUp>
                <p className="eyebrow mb-5">The searches that fill a diary</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  Page one for local patient searches, inside six months
                </h2>
                <div className="space-y-5">
                  <p className="text-body text-[var(--color-muted)]">
                    Article traffic is satisfying, but it is not what fills Tuesday
                    afternoon. What fills Tuesday afternoon is somebody in your
                    postcode typing &ldquo;back pain treatment islington&rdquo;
                    because their back has gone and they want it seen this week.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    Those are the hardest searches to win, because every clinic in the
                    area wants them. Bodyfunction reached page one for them within six
                    months, in one of the most competitive boroughs in the country, and
                    now holds the top three for treatment searches across joints,
                    muscles, posture and hips.
                  </p>
                  <p className="border-l-4 border-[var(--color-accent)] py-1 pl-6 text-body font-semibold text-[var(--color-muted)]">
                    Page one is where patients look. Page two may as well not exist.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-6">
              <FadeUp delay={0.1}>
                <figure className="m-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
                  <figcaption className="border-b border-[var(--color-border)] px-6 py-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-text)]">
                      Local Islington search positions
                    </span>
                    <p className="mt-1 text-body-sm text-[var(--color-muted)]">
                      Ahrefs, bodyfunction.co.uk
                    </p>
                  </figcaption>
                  {/* Cropped to the columns that carry meaning — the original
                      export trails six columns of N/A. */}
                  <Image
                    src="/images/case-studies/bodyfunction-ahrefs-keywords.png"
                    alt="Ahrefs keyword report for Bodyfunction Clinic showing position 1 for improve postural issues islington, position 2 for joint and muscle pain treatment islington, position 3 for hip pain treatment islington and page one positions across other local treatment searches"
                    width={1110}
                    height={1238}
                    className="w-full"
                  />
                </figure>
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
                <p className="eyebrow mb-5">What moving up is worth</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  Position two is not half as good as position one
                </h2>
                <div className="space-y-5">
                  <p className="text-body text-[var(--color-muted)]">
                    It is a fraction as good, and almost nobody reaches page two at
                    all. So moving a search term from 18th to 6th does not increase
                    your patients by a third. It multiplies them.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    Look at what each of these moves was actually worth in people
                    arriving at the clinic&apos;s website. This is the difference
                    between existing online and being found.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-7">
              <FadeUp delay={0.1}>
                <PositionDumbbell
                  title="Where the clinic ranked, then and now"
                  source="Google Search Console, 12 months to Jul 2026"
                  rows={positionJumps}
                  scaleMax={22}
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand demand ─────────────────────────────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <FadeUp>
                <p className="eyebrow mb-5">The result that matters most</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  Five times as many people now search for the clinic by name
                </h2>
                <div className="space-y-5">
                  <p className="text-body text-[var(--color-muted)]">
                    This is the number we would show you first if we could only show
                    you one. When somebody types your clinic&apos;s name into Google,
                    they are not browsing. They already know who you are and they have
                    decided.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    Five times as many people in Angel and Islington now do that. That
                    is a clinic becoming the name people remember in its area — the
                    thing every practice owner actually wants, underneath all the
                    talk about rankings.
                  </p>
                  <p className="text-body text-[var(--color-muted)]">
                    One of those searches, &ldquo;body function clinic angel&rdquo;,
                    did not exist at all two years ago. A third of the people who see
                    it now click straight through.
                  </p>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-6">
              <FadeUp delay={0.1}>
                <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
                  <div className="border-b border-[var(--color-border)] px-6 py-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-text)]">
                      People searching for the clinic by name
                    </span>
                    <p className="mt-1 text-body-sm text-[var(--color-muted)]">
                      Google Search Console, clicks year on year
                    </p>
                  </div>
                  <div className="divide-y divide-[var(--color-border)]">
                    {[
                      { term: "bodyfunction clinic", from: 136, to: 702 },
                      { term: "body function clinic", from: 140, to: 630 },
                      { term: "bodyfunction", from: 32, to: 133 },
                      { term: "body function clinic angel", from: 0, to: 45 },
                    ].map((row) => (
                      <div key={row.term} className="flex items-center justify-between gap-4 px-6 py-4">
                        <p className="text-body-sm font-medium text-[var(--color-ink)]">
                          {row.term}
                        </p>
                        <p className="flex-shrink-0 text-body-sm tabular-nums text-[var(--color-muted)]">
                          {row.from}
                          <span className="mx-1.5" aria-hidden>
                            →
                          </span>
                          <span className="font-bold text-[var(--color-accent-text)]">{row.to}</span>
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

      {/* ── Patient journey and conversion ───────────────────────────────
          Retained per the brief and the call. Presented visually and tied to
          real click-through evidence rather than left as generic copy. */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="order-2 max-w-xl lg:order-1">
              <FadeUp>
                <p className="eyebrow mb-5">Patient journey</p>
                <h2 className="text-h2 mb-8 leading-tight text-[var(--color-ink)]">
                  Getting found is only half of it
                </h2>
                <div className="space-y-6">
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    Patients do not choose a clinic the way they choose a plumber.
                    They are in pain, often worried, and frequently they have already
                    been let down by somebody who did not help. They need to feel
                    understood before they will book.
                  </p>
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    So a page has to do more than list what you offer. It has to show
                    you understand their specific problem, explain what will actually
                    happen in the room, and make booking feel like a small step rather
                    than a commitment.
                  </p>
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    You can see it working in the click-through rates. Nearly 12% of
                    people who see the clinic listed for &ldquo;osteopathic medicine vs
                    homeopathic medicine&rdquo; click it, and a third of those who see
                    it for &ldquo;body function clinic angel&rdquo; do. Those are well
                    above what those positions would normally earn, and that gap is the
                    wording doing its job.
                  </p>
                  <p className="border-l-2 border-[var(--color-accent)] py-2 pl-6 text-body italic leading-relaxed text-[var(--color-muted)]">
                    All the visibility in the world is wasted on a page that does not
                    convince somebody you can help them.
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="relative order-1 lg:order-2">
              <FadeUp delay={0.1}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-2xl">
                  <Image
                    src="/images/bodyfunction-physiotherapy-strength-conditioning-floor-exercise-02.jpg"
                    alt="Strength and conditioning session at Bodyfunction Clinic"
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
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
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
                    <strong className="font-semibold text-[var(--color-ink)]">
                      The local searches come first.
                    </strong>{" "}
                    Page one for &ldquo;osteopath near me&rdquo; inside six months is
                    the part that puts people on your table this quarter. Everything
                    else compounds behind it.
                  </p>
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    <strong className="font-semibold text-[var(--color-ink)]">
                      Depth beats volume.
                    </strong>{" "}
                    One page that genuinely answers a patient&apos;s question will
                    outperform twenty thin ones, and it keeps earning for years after
                    you write it.
                  </p>
                  <p className="text-body leading-relaxed text-[var(--color-muted)]">
                    <strong className="font-semibold text-[var(--color-ink)]">
                      Order matters.
                    </strong>{" "}
                    Foundations, then local visibility, then content that builds
                    authority. Clinics that start at the wrong end wonder why their ad
                    spend never works.
                  </p>
                  <p className="border-l-4 border-[var(--color-accent)] py-1 pl-6 text-body font-semibold text-[var(--color-muted)]">
                    You do not need two years of trial and error. That part is already
                    done, and you can have it.
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <div className="card-surface p-8">
                  <h3 className="text-h3 mb-5 text-[var(--color-ink)]">
                    &ldquo;But my clinic is much smaller than that&rdquo;
                  </h3>
                  <p className="text-body mb-6 text-[var(--color-muted)]">
                    Then read the other one. Lind Street Osteopathy is a single
                    osteopath on the Isle of Wight who opened with no website at all
                    and took page one across her whole area in twelve months.
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
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Next step</p>
              <h2 className="text-h2 mb-4 text-[var(--color-ink)]">
                How Clinic Evo can help your clinic
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                The same work, applied to your practice, without you learning it the
                slow way first.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "SEO for clinics", href: "/seo-for-clinics/" },
              { label: "Clinic website design", href: "/website-design-for-clinics/" },
              { label: "Google Ads for clinics", href: "/google-ads-for-clinics/" },
              { label: "Patient reactivation", href: "/ai-integration/" },
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
                  What clinic owners ask us about this
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
        heading="Where does your clinic actually rank right now?"
        subheading="A free clinic audit shows you where you appear for the searches your patients are making, which competitors are taking that work, and what it would take to be the one they find first."
        primaryLabel="Get a free clinic audit"
        primaryHref="/free-clinic-audit/"
      />
    </>
  );
}

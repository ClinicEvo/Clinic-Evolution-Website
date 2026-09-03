import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import ArrowLink from "@/components/ui/ArrowLink";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FAQSchema from "@/components/schema/FAQSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import StickyMobileCta from "@/components/ui/StickyMobileCta";
import GraduateForm from "@/components/forms/GraduateForm";
import GoogleReviews from "@/components/sections/GoogleReviews";
import {
  GRADUATE_CONSTRAINTS,
  GRADUATE_EQUATION,
  GRADUATE_FOUNDERS,
  GRADUATE_FOUNDER_QUOTE,
  GRADUATE_PHILOSOPHY,
  GRADUATE_PRESSURES,
  GRADUATE_ELIGIBILITY,
  GRADUATE_ELIGIBILITY_NOTE,
  GRADUATE_INTAKE,
  GRADUATE_ROADMAP,
  GRADUATE_SYSTEM,
  GRADUATE_TERMS,
  MENTORING_TOPICS,
  NOT_TRAINED_IN,
  STRONG_FIRST_YEAR,
  TRAINED_IN,
} from "@/lib/graduate";

/*
 * /graduate/ — the Graduate Clinic Launch Programme.
 *
 * NOT AN SEO PAGE, and it should not be briefed as one. The keyword research at
 * ~/claude/clinic-evo-graduate-seo-research.md found no measurable GB search
 * demand for graduate practice-startup terms across 17 seeds and every
 * expansion: career and employment intent outweighs it roughly 110:1. This page
 * converts traffic that arrives already warm — from a course leader's email, a
 * professional-body listing, social, or a conversation on campus. It is indexed
 * because it cannibalises nothing and people will search the brand, but organic
 * sessions are not one of its success metrics.
 *
 * That constraint is a gift, not a limitation: nothing here is written for a
 * crawler, so the page can be as direct as the offer deserves.
 *
 * WHAT THIS PAGE MAY NOT SAY, and why:
 *
 *   - The deck's case-study figures (572 enquiries / page 4 to position 1 /
 *     34 lapsed patients). All three were deliberately removed from this site
 *     as unverifiable, one at Danny's request. See src/lib/graduate.ts.
 *   - Any check-in or session cadence. Simon's instruction, 3 Sep 2026. The
 *     mentoring can be named and described; its rhythm cannot.
 *   - A fee, in either direction. No price is published anywhere on this site,
 *     so the page states the halving and never a number.
 *
 * ONE OPEN ITEM. Serena Gower-Johnson's testimonial (LP_TESTIMONIAL in
 * src/lib/lp.ts) would be the strongest thing on this page — she opened cold,
 * which is exactly the reader's position. It is deliberately NOT used here: the
 * approval note on it says re-use on another page needs re-approving. The
 * Lind Street figures below are tool-sourced and carry no such restriction, so
 * the section runs on those until Serena okays the quote moving.
 *
 * SCOPE. Argued to osteopathy, physiotherapy and chiropractic; open to other
 * healthcare on a case-by-case basis [src: client — Simon, 3 Sep 2026]. The
 * body copy stays MSK because that is where every proof asset is, and the soft
 * edge lives in exactly two operable places: the note under the eligibility
 * list, and the FAQ. Keep it that way — a healthcare-wide claim in the hero
 * would meet MSK-only evidence a few scrolls later.
 */

export const metadata = buildMetadata({
  title: "Graduate Clinic Launch Programme",
  description:
    "A six-month launch programme for newly qualified osteopaths, physiotherapists and chiropractors starting their first private practice. Website, Google presence, reviews and mentoring, at half our normal fee. Next intake 15 October.",
  path: "/graduate/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Graduate Clinic Launch", href: "/graduate/" },
];

/*
 * Lind Street Osteopathy, the standing-start clinic.
 *
 * Chosen over Bodyfunction on purpose. Bodyfunction is the founding clinic and
 * an established multi-practitioner practice, which is why the deck has to
 * apologise for it ("your first clinic will not look like an established
 * multi-practitioner clinic"). Lind Street opened with no logo, no website and
 * no search presence — the reader's actual position — so it needs no apology.
 *
 * Every figure and its source is lifted verbatim from
 * /case-studies/lind-street-osteopathy/, where the sourcing lanes are explained.
 * Ahrefs supplies positions, GSC supplies clicks; they are never mixed on one
 * claim, because GSC averages across every device and location and always reads
 * worse for the same term.
 */
const STANDING_START_PROOF = [
  {
    figure: "No. 1",
    headline:
      "for six of her local searches, including “osteopath Ryde”, within twelve months of opening",
    source: "Ahrefs — all ten tracked local terms sit in the top four",
  },
  {
    figure: "+570%",
    headline: "growth in people arriving from Google, half on half",
    source: "Google Search Console — 86 clicks rising to 576",
  },
  {
    figure: "67%",
    headline: "of the people who see her name in Google click it",
    source: "Google Search Console — 113 clicks at position 1.0",
  },
];

const faqs = [
  {
    question: "What happens after the six months?",
    answer:
      "From month seven you move to our standard rate. Nothing else changes. The mentoring is not something that starts once the discount ends — it runs from month one, and it carries on.",
  },
  {
    question: "I do not qualify until next summer. Can I still apply?",
    answer:
      "Yes. Final-year students are eligible, and starting before you qualify is an advantage rather than a problem: search visibility takes months to build, so the work done now is what makes your first weeks in practice look different. Put your qualifying date on the application.",
  },
  {
    question: "I am not an osteopath, physio or chiropractor. Can I apply?",
    answer:
      "Yes. Pick the last option on the form, tell us what you do, and we will give it a proper look. The programme is built around MSK clinics because that is where our case studies are and where one of the founders practises, so that is who it fits most closely. But getting a new practice found, trusted and booked is not unique to MSK, and we would rather read your application than turn you away on a category.",
  },
  {
    question: "I have no premises and no business name yet.",
    answer:
      "That is the normal starting point at this stage and it does not count against you. Month one is the brand, the website, the Google presence and the booking path, so this is the part we would be building with you anyway. Tell us on the application where you have got to.",
  },
  {
    question: "Do I need patients already?",
    answer:
      "No. The programme assumes you are starting from zero — no patient base, no reviews, no visibility. That is what it is for.",
  },
  {
    question: "What does the half-price actually apply to?",
    answer:
      "Our normal fee for the programme, halved for your first six months. You get the same work either way.",
  },
];

export default function GraduatePage() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        badge="Graduate Clinic Launch Programme"
        heading={
          <>
            You qualified as a clinician.{" "}
            <em className="not-italic text-[var(--color-accent)]">
              Now let&apos;s get you patients.
            </em>
          </>
        }
        subtext="Six months to take you from a standing start to a practice patients can find and book. Your job is to become a brilliant clinician. Ours is to make sure people know you exist."
        bullets={[
          `Next intake ${GRADUATE_INTAKE.label}`,
          `${GRADUATE_INTAKE.places} places`,
          "Half our normal fee for six months",
        ]}
        primaryCta={{ label: "Apply for the October intake", href: "#apply" }}
        secondaryCta={{ label: "What the six months covers", href: "#system" }}
        breadcrumbs={crumbs}
        bulletsBelow
        rightPanelWidth="600px"
        rightPanel={
          <figure className="m-0">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
              <Image
                src="/images/graduate/graduate-clinicians-campus.jpg"
                alt="Five clinical students in scrubs outside a university building"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </figure>
        }
      />

      {/* ── 2. Where you are by month six (Transformation) ─────────────────── */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)] py-10 sm:py-12">
        <div className="cx-main">
          <FadeUp>
            <p className="text-label mb-6 text-[var(--color-muted)]">
              Where you are by month six
            </p>
          </FadeUp>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {[
              "A website that looks established, not new",
              "A Google presence people nearby actually find",
              "Your first reviews, arriving without you chasing them",
              "Enquiries answered and tracked, so none go cold",
              "Numbers that tell you where your patients came from",
            ].map((item, i) => (
              <FadeUp key={item} delay={0.04 + i * 0.05}>
                <li className="flex items-start gap-3 border-t border-[var(--color-border)] pt-4">
                  <svg
                    className="mt-[0.35rem] flex-shrink-0 text-[var(--color-accent)]"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 7l3 3 6-6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-body-sm text-[var(--color-charcoal)]">
                    {item}
                  </span>
                </li>
              </FadeUp>
            ))}
          </ul>
          <FadeUp delay={0.3}>
            <p className="text-body-sm mt-7 text-[var(--color-muted)]">
              Mentoring runs from month one. At month{" "}
              {GRADUATE_TERMS.standardRateFromMonthWord} the fee goes to our
              standard rate and{" "}
              <strong className="font-semibold text-[var(--color-ink)]">
                everything else carries on
              </strong>
              .
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── 3. Why Clinic Evo (Founder Credibility - moved up) ─────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <FadeUp>
              <div>
                <p className="eyebrow mb-4">Why Clinic Evo</p>
                <h2 className="text-h2 mb-5 text-[var(--color-ink)]">
                  Built from inside a{" "}
                  <em className="not-italic text-[var(--color-accent)]">
                    real clinic
                  </em>
                </h2>
                <p className="text-body-lg mb-6 text-[var(--color-charcoal)]">
                  Clinic Evo wasn&apos;t created by people who decided healthcare
                  looked like a good marketing niche. It was built and tested
                  inside a working MSK clinic before it was offered to anyone
                  else.
                </p>
                <figure className="m-0 mb-8">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-card)]">
                    <Image
                      src="/images/bodyfunction-clinic-team-at-reception-01.jpg"
                      alt="The Bodyfunction Clinic team at reception in Angel, London, with Danny Morgan on the right"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />
                  </div>
                  <figcaption className="text-body-sm mt-3 text-[var(--color-muted)]">
                    Bodyfunction Clinic, Angel. The clinic Clinic Evo was built
                    inside.
                  </figcaption>
                </figure>

                <blockquote className="m-0 border-l-2 border-[var(--color-accent)] pl-6">
                  <p className="text-h4 text-[var(--color-ink)]">
                    &ldquo;{GRADUATE_FOUNDER_QUOTE}&rdquo;
                  </p>
                  <footer className="text-body-sm mt-3 text-[var(--color-muted)]">
                    Danny Morgan and Simon Smith, co-founders
                  </footer>
                </blockquote>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <ul role="list" className="flex flex-col">
                {GRADUATE_FOUNDERS.map((f) => (
                  <li
                    key={f.name}
                    className="flex flex-col gap-5 border-t border-[var(--color-border)] py-7 last:border-b sm:flex-row sm:items-start sm:gap-6"
                  >
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]">
                      <Image
                        src={f.image}
                        alt={`${f.name}, ${f.role} at Clinic Evo`}
                        fill
                        className="object-cover object-top"
                        sizes="80px"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-h4 text-[var(--color-ink)]">
                        {f.name}
                      </h3>
                      <p className="text-body-sm mt-1 font-semibold text-[var(--color-accent-text)]">
                        {f.role}
                      </p>
                      <p className="text-body mt-3 text-[var(--color-muted)]">
                        {f.line}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 4. The Clinical Gap (Consolidated Reality Check) ──────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="mb-12 max-w-[46rem]">
            <FadeUp>
              <div>
                <p className="eyebrow mb-4">The graduate reality</p>
                <h2 className="text-h2 mb-5 text-[var(--color-ink)]">
                  The bit university doesn&apos;t teach you
                </h2>
                <p className="text-body-lg text-[var(--color-charcoal)]">
                  You leave university ready to treat patients. Building the
                  patient base that lets you practise is a completely different
                  skill, and nobody examined you on it.
                </p>
              </div>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
            <FadeUp delay={0.06}>
              <div className="flex h-full flex-col justify-between rounded-[var(--radius-card)] bg-[var(--color-ink)] p-8 lg:p-10">
                <div>
                  <h3 className="text-h3 mb-6 text-white">
                    What you were trained in
                  </h3>
                  <ul role="list" className="flex flex-col gap-4">
                    {TRAINED_IN.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.6rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]"
                        />
                        <span className="text-body text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-body-sm mt-8 border-t border-white/10 pt-4 text-white/50">
                  Ready to diagnose and deliver exceptional patient care.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="flex h-full flex-col justify-between rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] p-8 shadow-[var(--shadow-card)] lg:p-10">
                <div>
                  <h3 className="text-h3 mb-6 text-[var(--color-accent-text)]">
                    What nobody trained you in
                  </h3>
                  <ul role="list" className="flex flex-wrap gap-2.5">
                    {NOT_TRAINED_IN.map((item) => (
                      <li
                        key={item}
                        className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-2 text-body-sm text-[var(--color-charcoal)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 border-t border-[var(--color-border)] pt-5">
                  <p className="text-body text-[var(--color-charcoal)]">
                    <strong className="font-semibold text-[var(--color-ink)]">
                      Starting from zero is hard:
                    </strong>{" "}
                    no reviews, no search visibility, and a limited budget, all
                    while learning to run a business. You shouldn&apos;t have to
                    become a marketing specialist just to practise.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 5. The System & Philosophy ────────────────────────────────────── */}
      <section id="system" className="section scroll-mt-20 bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-10 max-w-[44rem]">
              <p className="eyebrow mb-4">The system</p>
              <h2 className="text-h2 mb-5 text-[var(--color-ink)]">
                Five things get built, in this order
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                The order matters. Reviews are worth little if nobody can find
                you, and visibility is wasted if the enquiry goes unanswered.
              </p>
            </div>
          </FadeUp>

          {/* Growth Equation formula */}
          <FadeUp delay={0.06}>
            <div className="mb-12 flex flex-wrap items-baseline gap-x-4 gap-y-2 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] px-7 py-5 text-h3 text-[var(--color-ink)] shadow-[var(--shadow-card)]">
              {GRADUATE_EQUATION.map(({ term, op }) => (
                <span key={term} className="inline-flex items-baseline gap-3">
                  <span>{term}</span>
                  {op && (
                    <span className="font-display font-bold text-[var(--color-accent-text)]">
                      {op}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </FadeUp>

          <ul role="list" className="flex flex-col">
            {GRADUATE_SYSTEM.map((pillar, i) => (
              <FadeUp key={pillar.title} delay={0.05 + i * 0.05}>
                <li className="grid grid-cols-1 gap-5 border-t border-[var(--color-border)] py-8 last:border-b lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
                  <h3 className="text-h3 text-[var(--color-ink)]">
                    {pillar.title}
                  </h3>
                  <ul role="list" className="flex flex-col gap-3">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <svg
                          className="mt-[0.45rem] flex-shrink-0 text-[var(--color-accent)]"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2.5 7l3 3 6-6"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-body text-[var(--color-charcoal)]">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 6. What a strong first year looks like ─────────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <FadeUp>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-4">What you&apos;re building toward</p>
                <h2 className="text-h2 mb-5 text-[var(--color-ink)]">
                  What does a strong first year actually look like?
                </h2>
                <p className="text-body mb-8 text-[var(--color-muted)]">
                  Not a full diary in week one. These are the things that,
                  together, mean your practice has started behaving like a
                  predictable business.
                </p>
                <figure className="m-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-card)]">
                    <Image
                      src="/images/graduate/manual-therapy-lower-back.jpg"
                      alt="A clinician in scrubs treating a patient's lower back on a treatment couch"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                  </div>
                </figure>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <ul role="list" className="flex flex-col">
                {STRONG_FIRST_YEAR.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-t border-[var(--color-border)] py-5 last:border-b"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 font-display text-sm font-bold text-[var(--color-accent-text)]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-body-lg text-[var(--color-ink)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 7. Proof: The Standing Start ────────────────────────────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:items-start">
            <div>
              <FadeUp>
                <div className="mb-10 max-w-[42rem]">
                  <p className="eyebrow mb-4">What a standing start looks like</p>
                  <h2 className="text-h2 mb-5 text-[var(--color-ink)]">
                    Lind Street Osteopathy opened with no logo, no website and
                    no search presence
                  </h2>
                  <p className="text-body text-[var(--color-muted)]">
                    One osteopath, one treatment room, a brand new business on
                    the Isle of Wight with no reputation online. Twelve months
                    later she held page one across her catchment.
                  </p>
                </div>
              </FadeUp>

              <ul role="list" className="flex flex-col">
                {STANDING_START_PROOF.map((row, i) => (
                  <FadeUp key={row.figure} delay={0.06 + i * 0.06}>
                    <li className="grid grid-cols-1 gap-2 border-t border-[var(--color-border)] py-6 last:border-b lg:grid-cols-[1fr_auto] lg:items-baseline lg:gap-8">
                      <h3 className="text-h4 font-normal text-[var(--color-charcoal)]">
                        <span className="font-display text-[2.25rem] font-bold leading-none text-[var(--color-ink)] md:text-[2.75rem]">
                          {row.figure}
                        </span>{" "}
                        {row.headline}
                      </h3>
                      <p className="text-body-sm text-[var(--color-muted)] lg:text-right">
                        {row.source}
                      </p>
                    </li>
                  </FadeUp>
                ))}
              </ul>

              <FadeUp delay={0.24}>
                <div className="mt-8">
                  <p className="text-body mb-6 max-w-[46rem] text-[var(--color-muted)]">
                    Lind Street is an osteopathy clinic. A physiotherapy or
                    chiropractic practice competes for different searches and
                    against different neighbours. The order of operations is
                    identical: get found, earn trust, get booked, follow up.
                    That is the work the six months does.
                  </p>
                  <ArrowLink href="/case-studies/lind-street-osteopathy/">
                    Read the full Lind Street case study
                  </ArrowLink>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.14} className="lg:sticky lg:top-28">
              <figure className="m-0">
                <div className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
                  <Image
                    src="/images/lind-street/clinic-sign.png"
                    alt="The brass Lind Street Osteopathy clinic sign in Ryde, listing back pain, neck pain, sciatica, arthritis and other conditions treated"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
                <figcaption className="text-body-sm mt-4 text-[var(--color-muted)]">
                  Lind Street Osteopathy, Ryde. Opened cold, and built its
                  search presence from nothing.
                </figcaption>
              </figure>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 8. Google Reviews (Directly following the case study) ─────────── */}
      <GoogleReviews
        surface="surface"
        heading={
          <>
            What clinic owners say{" "}
            <em className="not-italic text-[var(--color-accent)]">on Google</em>
          </>
        }
        intro="The first of these is Serena Gower-Johnson, whose clinic is the standing start featured above."
      />

      {/* ── 9. Mentoring (Becoming a business owner) ───────────────────────── */}
      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-ink)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <FadeUp>
              <div>
                <p className="eyebrow eyebrow-invert mb-4">
                  Becoming a business owner
                </p>
                <h2 className="text-h2 mb-6 text-white">
                  We want you confident running the business, not dependent on
                  us
                </h2>
                <p className="text-body-lg mb-6 leading-relaxed text-white/70">
                  Alongside the build, we show you how the numbers behind it
                  work: where patients come from, what an enquiry is worth, why
                  some convert and some do not.
                </p>
                <p className="text-body leading-relaxed text-white/60">
                  Sessions are with Danny and Simon — one still practising,
                  one who built the marketing side of it. You are not handed to
                  an account manager.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <ul role="list" className="flex flex-col">
                {MENTORING_TOPICS.map((topic) => (
                  <li
                    key={topic}
                    className="border-t border-white/10 py-4 text-body text-white/85 last:border-b"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 10. Roadmap ────────────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-[44rem]">
              <p className="eyebrow mb-4">The roadmap</p>
              <h2 className="text-h2 mb-5 text-[var(--color-ink)]">
                Your first six months
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Six months in, you are not &ldquo;just starting out&rdquo; any
                more. You have a professional presence, real patient data,
                reviews, visibility, and a view of where growth comes from.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {GRADUATE_ROADMAP.map((phase, i) => (
              <FadeUp key={phase.period} delay={0.05 + i * 0.07}>
                <div className="border-t-2 border-[var(--color-accent)] pt-5">
                  <p className="text-label mb-3 text-[var(--color-accent-text)]">
                    {phase.period}
                  </p>
                  <h3 className="text-h4 mb-3 text-[var(--color-ink)]">
                    {phase.title}
                  </h3>
                  <p className="text-body-sm text-[var(--color-muted)]">
                    {phase.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. FAQ (Moved directly ABOVE Apply to resolve objections) ──────── */}
      <section className="section grain border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <FadeUp>
              <div>
                <p className="eyebrow mb-4">Questions</p>
                <h2 className="text-h2 mb-5 text-[var(--color-ink)]">
                  The things graduates ask first
                </h2>
                <p className="text-body text-[var(--color-muted)]">
                  Common questions on timing, qualifications, premises and how
                  the programme runs.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <FAQAccordion items={faqs} />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 12. The Offer & Apply (Unified conversion section) ─────────────── */}
      <section id="apply" className="section scroll-mt-20 border-t border-[var(--color-border)] bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:items-start">
            <FadeUp>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-4">The offer &amp; apply</p>
                <h2 className="text-h2 mb-5 text-[var(--color-ink)]">
                  Half our normal fee for your first six months
                </h2>
                <p className="text-body-lg mb-6 text-[var(--color-charcoal)]">
                  You are building a patient base before you have built an
                  income. So the fee is halved while you do it. Same system, same
                  team. From month {GRADUATE_TERMS.standardRateFromMonthWord} the fee
                  moves to standard, and everything else carries on.
                </p>

                <div className="mb-8 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
                  <p className="text-label mb-4 text-[var(--color-muted)]">
                    Who it is for
                  </p>
                  <ul role="list" className="flex flex-col gap-3">
                    {GRADUATE_ELIGIBILITY.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="mt-1 flex-shrink-0 text-[var(--color-accent)]"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2.5 7l3 3 6-6"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-body-sm text-[var(--color-ink)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-body-sm mt-4 border-t border-[var(--color-border)] pt-4 text-[var(--color-muted)]">
                    {GRADUATE_ELIGIBILITY_NOTE}
                  </p>
                </div>

                <div className="border-t border-[var(--color-border)] pt-6">
                  <p className="text-body-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]">
                    What happens next
                  </p>
                  <ul role="list" className="mt-4 flex flex-col gap-3.5">
                    {[
                      "Send the application — it takes a couple of minutes",
                      "We read it and come back to you",
                      "A short call about where you are and what you need",
                      `If it is a fit, you secure one of the ${GRADUATE_INTAKE.places} places for the ${GRADUATE_INTAKE.label} intake`,
                    ].map((step, i) => (
                      <li key={step} className="flex items-start gap-3.5">
                        <span
                          aria-hidden="true"
                          className="mt-px w-4 flex-shrink-0 font-display text-sm font-bold text-[var(--color-accent-text)]"
                        >
                          {i + 1}
                        </span>
                        <span className="text-body text-[var(--color-charcoal)]">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-card)] sm:p-9">
                <GraduateForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 13. Closing Reassurance Micro-bar ──────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-8">
        <div className="cx-main text-center">
          <p className="text-body-sm text-[var(--color-muted)]">
            No hard sell, no lock-in. Just an honest conversation to see if the
            programme is the right fit for your practice.
          </p>
        </div>
      </section>

      <StickyMobileCta href="#apply" label="Apply for a place" hideNearId="apply" />
    </>
  );
}


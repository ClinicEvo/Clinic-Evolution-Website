import { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import ResourceCard from "@/components/sections/ResourceCard";
import ClientLogo from "@/components/sections/ClientLogo";
import ScenarioCards from "@/components/sections/ScenarioCards";
import HeroVideo from "@/components/hero/HeroVideo";
import StickyMobileCta from "@/components/ui/StickyMobileCta";
import { GOOGLE_PROFILE_URL, GOOGLE_RATING, GOOGLE_REVIEWS } from "@/lib/reviews";
import { PREVIEW_BRAND_NAME, SYSTEM_STAGES } from "@/lib/nav";
import DraftAuditForm from "./_components/DraftAuditForm";

/**
 * Draft of the next homepage, for internal feedback before it replaces
 * src/app/page.tsx. Not for search: noindex, nofollow, absent from sitemap.ts,
 * nothing links to it, and deliberately NOT blocked in robots.ts — Google has
 * to be able to crawl the page to read the directive, same as the /lp/ pages.
 *
 * The brief behind it: one story told once. You are losing patients in four
 * places, here is the system that closes each one, here is proof it works.
 * Every section does a different job, in that order — what is going wrong,
 * what we do about it, can you trust us — and the page ends on the CTA.
 *
 * Header and footer differences (nav labels, brand name, footer columns, no
 * footer CTA band) are switched by path in src/lib/nav.ts, so the live site
 * is untouched.
 */
const TITLE = `${PREVIEW_BRAND_NAME} | Clinic Marketing Agency UK`;
const DESCRIPTION = `${PREVIEW_BRAND_NAME} helps UK osteopaths, physiotherapists and chiropractors attract more patients with SEO, Google Ads, websites and AI patient reactivation.`;

export const metadata: Metadata = {
  // "Healthcare" dropped from the title, per the brief. Every name-bearing
  // field is set here, because the root layout's defaults say "Clinic Evo" and
  // this page uses the full name, Clinic Evolution.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: PREVIEW_BRAND_NAME },
  twitter: { title: TITLE, description: DESCRIPTION },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

/* The tick marks use the stronger coral so they read on the light-coral wash. */
const ACCENT = "var(--color-accent-strong)";

/* CTA fills on this draft use the brand coral, the same as "Fuller diaries."
   in the h1, at the reviewers' request: the darker accessible coral read as
   dull. CHECK BEFORE LAUNCH. White 15px labels on the brand coral are 3.07:1,
   under the 4.5:1 WCAG AA needs at this size (see the note in
   src/components/ui/Button.tsx). Before this replaces the homepage, either set
   the labels at 19px bold (large text, 3:1 passes), use navy labels, or go
   back to --color-accent-strong. Hover darkens to that stronger coral. */


/* Buttons on this draft are pills, which nothing else on the site uses yet.
   Kept as one constant so the choice is easy to keep or revert as a whole. */
const PILL = "9999px";

/* CHECK BEFORE LAUNCH. The brief's "≈£300 lost" per card, standing for a
   typical first course of treatment. It has no source in the repo yet — the
   site's rule is that every published figure has one (see
   src/lib/clinic-capacity.ts) — so Danny needs to confirm it from Bodyfunction's
   own average before this goes live. Order matches the cards in ScenarioCards. */
const LOSS_COSTS = ["≈£300 lost", "≈£300 lost", "≈£300 + the ad", "≈£300 a time"];

// The five stages, each mapped to the service that handles it, shared with the
// draft footer. Patient Pulse is drawn underneath all five rather than given a
// column of its own, because it is the record every stage writes to.
const stages = SYSTEM_STAGES;

// Before and after, drawn from the capability list Danny gave in the 10 Aug
// review and the Growth System copy. The left column is meant to read as the
// clinic owner's own week.
const pulseRows = [
  { before: "Leads tracked in spreadsheets", after: "All leads in one pipeline" },
  { before: "Messages spread across five apps", after: "Website, Facebook, Instagram and TikTok in one inbox" },
  { before: "Replies wait until the next morning", after: "An instant first reply, day or night" },
  { before: "Follow-up depends on who remembers", after: "Twelve months of follow-up that runs itself" },
  { before: "Review requests forgotten", after: "Google review requests sent automatically" },
  { before: "Lapsed patients never hear from you", after: "Reactivation messages before the next flare-up" },
];

// The live homepage's five marks under the hero, set deliberately quiet:
// about 85% of the live strip's sizes, with the label spaced as one of the
// row's items so six items share the width and the gaps stay moderate.
// Greyscale and faded until hovered, so
// the strip reads as supporting evidence rather than competing with the hero.
// Neometa is Simon's agency rather than a clinic, which is why the label says
// "brands". `logoHeight` is still tuned per mark because the aspect ratios
// differ a lot, and `fade` too: Lind Street's mark is pale sage to begin
// with, so the shared fade would wash it out entirely.
const clientLogos: Array<{
  name: string;
  src: string;
  width: number;
  height: number;
  logoHeight: number;
  fade?: number;
}> = [
  { name: "Body Restore Clinic", src: "/images/clients/body-restore.png", width: 1714, height: 564, logoHeight: 32 },
  { name: "1 Percent Club", src: "/images/clients/one-percent-club.png", width: 500, height: 461, logoHeight: 44 },
  { name: "Lind Street Osteopathy", src: "/images/clients/lind-street.png", width: 1500, height: 500, logoHeight: 39, fade: 0.9 },
  { name: "Bodyfunction Clinic", src: "/images/clients/bodyfunction.png", width: 1850, height: 304, logoHeight: 23 },
  { name: "Neometa", src: "/images/clients/neometa.png", width: 1403, height: 238, logoHeight: 16 },
];

const heroChecks = ["Built by clinicians", "UK MSK specialists", "Follow-up & recall included"];

// Serena's line sits inside her own case study block, so she is not shown
// twice in a row; Elliot's review stands on its own beside the rating. Both
// verbatim. The long four-paragraph version is cut, per the brief.
const serenaQuote = {
  text: GOOGLE_REVIEWS[0].body[0].split(". ")[0] + ".",
  name: GOOGLE_REVIEWS[0].name,
};
const elliotQuote = {
  text: GOOGLE_REVIEWS[1].body[0],
  name: GOOGLE_REVIEWS[1].name,
};

const founders = [
  {
    name: "Danny Morgan",
    image: "/images/danny-morgan-angel-clinic.png",
    line: "GOsC-registered osteopath. Founded Bodyfunction Clinic in London and still treats patients there.",
  },
  {
    // Simon has resigned from the GOsC register: "former registered osteopath",
    // never "osteopath", "registered" or "practising".
    name: "Simon Smith",
    image: "/images/simon-smith.jpg",
    line: "Former registered osteopath. Founded Neometa, a web design, SEO and digital marketing agency.",
  },
];

const disciplineCards = [
  {
    title: "Osteopaths",
    headline: "You built your clinic on clinical reputation. We make sure patients can find it.",
    href: "/osteopath-marketing/",
    anchor: "Marketing for Osteopaths",
    image: "/images/watermark-osteopath.jpg",
  },
  {
    title: "Physiotherapists",
    headline: "The most competitive discipline in local search. We know how to win it.",
    href: "/physiotherapy-marketing/",
    anchor: "Physiotherapy Marketing",
    image: "/images/watermark-physio.jpg",
  },
  {
    title: "Chiropractors",
    headline: "Chiropractic patients research longer before booking. We build for that journey.",
    href: "/chiropractic-marketing/",
    anchor: "Chiropractic Marketing",
    image: "/images/watermark-chiro.jpg",
  },
];

const auditIncludes = [
  "Your search visibility and website, reviewed by a practising osteopath",
  "Where enquiries slip through: missed calls, slow replies, no follow-up",
  "What we would fix first, back to you within two business days",
];

function Arrow({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Check() {
  return (
    <span
      className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
      style={{ background: "var(--color-accent-light)", color: ACCENT }}
    >
      <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2.5 7.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/** Google's yellow, inside an attributed Google rating. See GoogleReviews.tsx. */
function Stars() {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width={14} height={14} viewBox="0 0 24 24" fill="#FBBC05">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </span>
  );
}

export default function HomeDraftPage() {
  return (
    <div className="draft-home">
      {/* ── 1. Hero + client logos: one screen ─────────────────────────────
          From lg the hero and the logo strip fill exactly the first screen
          under the sticky header (70.5px: the floating pill plus its top gap),
          with the logos pinned to the bottom edge. The type and spacing scale
          with viewport HEIGHT as well as width, so the whole frame still fits
          on a 1280x720 laptop rather than only on a 1080p monitor. */}
      <div className="flex flex-col lg:min-h-[calc(100svh-70.5px)]">
      <section className="relative flex flex-1 items-center border-b border-[var(--color-border)] bg-[var(--color-paper)] grain">
        <div className="cx-main grid w-full items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-[clamp(1rem,3vh,3.5rem)]">
          <div className="max-w-[36rem]">
            <FadeUp>
              <span className="eyebrow mb-4 lg:mb-[clamp(0.75rem,2vh,1.25rem)]">For UK osteopaths, physios &amp; chiropractors</span>
            </FadeUp>

            {/* The social tagline, so the site and the feed match. Coral on
                the payoff only, the way every hero on the site marks its H1. */}
            <FadeUp delay={0.06}>
              <h1
                className="font-display text-balance text-[var(--color-ink)]"
                style={{
                  fontSize: "clamp(2.25rem, min(7vw, 6.4vh), 4rem)",
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                More patients. Better <span className="whitespace-nowrap">follow-up.</span>{" "}
                <em className="not-italic text-[var(--color-accent)]">Fuller diaries.</em>
              </h1>
            </FadeUp>

            <FadeUp delay={0.14}>
              <p
                className="mt-5 max-w-[32rem] leading-relaxed text-[var(--color-charcoal)] lg:mt-[clamp(1rem,2.6vh,1.5rem)]"
                style={{ fontSize: "clamp(1rem, 2.2vh, 1.125rem)" }}
              >
                Clinic Evolution runs the marketing, call handling and{" "}
                <span className="whitespace-nowrap">follow-up</span> for UK osteopaths,
                physios and chiropractors, as one system.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center lg:mt-[clamp(1.25rem,3vh,2rem)]">
                <Link
                  href="#book-audit"
                  className="inline-flex items-center font-semibold text-white transition-colors bg-[var(--color-accent)] hover:bg-[var(--color-accent-strong)] active:translate-y-px"
                  style={{
                    padding: "11px 26px",
                    borderRadius: PILL,
                    fontSize: "15px",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Get my free clinic audit
                </Link>
                <Link
                  href="#system-section"
                  className="group inline-flex items-center gap-2 font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent-text)]"
                  style={{ padding: "11px 8px", fontSize: "15px" }}
                >
                  See how it works
                  <span className="transition-transform group-hover:translate-x-0.5">
                    <Arrow size={13} />
                  </span>
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.26}>
              <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-t border-[var(--color-border)] pt-4 lg:mt-[clamp(1.25rem,3vh,1.75rem)]">
                {heroChecks.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[13px] text-[var(--color-charcoal)]">
                    <span
                      className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ background: "var(--color-accent-light)", color: ACCENT }}
                    >
                      <svg width="9" height="9" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2.5 7.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          {/* Danny's video in place of the Patient Pulse card. The cover is
              the video's own frame at 0:50, the system diagram, so the product
              is still the first thing seen. The square frame is capped by
              viewport height as well as width so it fits the one-screen hero
              on a 720px-tall laptop. Its "Clinic Evo" wording is burned into
              the video itself. */}
          <figure
            className="m-0 mx-auto w-full lg:mr-0"
            style={{ maxWidth: "min(32rem, calc(100svh - 15.5rem))" }}
          >
            <HeroVideo posterSrc="/images/hero-video-cover-0050.jpg" lightPoster />
            <figcaption className="mt-3 text-[12px] leading-relaxed text-[var(--color-muted)]">
              <span className="font-semibold text-[var(--color-ink)]">See Patient Pulse at work.</span>{" "}
              Danny Morgan shows how every enquiry gets a reply within minutes
              and follow-up for a year.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Client logos, as on the live homepage ───────────────────────── */}
      <section className="flex-shrink-0 border-b border-[var(--color-border)] bg-[var(--color-paper)] py-6 lg:py-[clamp(0.75rem,2vh,1.25rem)]">
        <div className="cx-main">
          {/* From sm the label and the five marks are six items spread evenly
              across the row (the list uses `display: contents` so its items
              join the row), which fills the width without opening big gaps. */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <p className="flex-shrink-0 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]">
              Brands we work with
            </p>
            {/* Two-column grid below sm so five marks sit in three tidy rows;
                the odd one out spans both columns and centres. */}
            <ul className="grid grid-cols-2 place-items-center gap-x-8 gap-y-5 sm:contents">
              {clientLogos.map(({ fade = 0.55, ...logo }) => (
                <li
                  key={logo.name}
                  style={{ "--fade": fade } as CSSProperties}
                  className="flex items-center opacity-[var(--fade)] grayscale transition-[opacity,filter] duration-[var(--duration-base)] last:col-span-2 hover:opacity-100 hover:grayscale-0 sm:last:col-span-1"
                >
                  <ClientLogo {...logo} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      </div>

      {/* ── 2. The problem: four places patients are lost ─────────────────── */}
      <section id="problem" className="section bg-[var(--color-surface)] border-b border-[var(--color-border)] grain">
        <div className="cx-main">
          <FadeUp>
            <p className="eyebrow mb-4">Where clinics lose patients</p>
            <h2 className="text-h2 text-balance mb-14 max-w-[680px] text-[var(--color-ink)]">
              Most MSK clinics lose patients long before treatment begins
            </h2>
          </FadeUp>

          <ScenarioCards costs={LOSS_COSTS} />

          <FadeUp>
            <p className="text-h3 mx-auto mt-16 max-w-3xl text-balance text-center font-medium text-[var(--color-ink)]">
              Most clinics never see these in the accounts.{" "}
              <span className="text-[var(--color-accent-text)]">They just feel the empty diary.</span>
            </p>
            <p className="mx-auto mt-4 max-w-xl text-center text-[12px] text-[var(--color-muted)]">
              ≈£300 is a typical first course of treatment. Draft figure, to confirm before launch.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── 3. The system: one list ───────────────────────────────────────── */}
      <section id="system-section" className="section bg-[var(--color-paper)] border-b border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <p className="eyebrow mb-4">How Clinic Evolution closes each gap</p>
            <h2 className="text-h2 mb-4 max-w-[720px] text-[var(--color-ink)]">
              Five stages from first search to return visit, run as one system
            </h2>
            <p className="text-body-lg mb-14 max-w-[580px] text-[var(--color-charcoal)]">
              Each stage is handled by one of our services, and Patient Pulse runs
              underneath all five, so nothing falls between suppliers.
            </p>
          </FadeUp>

          {/* A flow, not five boxes: arrows between the cards (across on
              desktop, down on phones) and a drop line from each into the
              Patient Pulse bar. The two-column tablet grid carries neither,
              because a 2-2-1 layout has no single reading direction. */}
          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5 lg:gap-8">
            {stages.map((s, i) => (
              <li key={s.stage} className="relative">
                <FadeUp delay={i * 0.06} className="h-full">
                  <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] p-6 shadow-[var(--shadow-card)]">
                    <span
                      className="mb-4 flex h-8 w-8 items-center justify-center rounded-full font-display text-[13px] font-semibold text-white"
                      style={{ background: "var(--color-ink)" }}
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <h3 className="text-h4 mb-2 text-[var(--color-ink)]">{s.stage}</h3>
                    <p className="text-body mb-5 text-[var(--color-charcoal)]">{s.body}</p>
                    <ul className="mt-auto flex flex-col gap-1.5 border-t border-[var(--color-border)] pt-4">
                      {s.services.map((svc) => (
                        <li key={svc.href}>
                          <Link
                            href={svc.href}
                            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent-text)]"
                          >
                            {svc.label}
                            <Arrow size={10} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
                {i < stages.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute z-10 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-paper)] text-[var(--color-accent-text)] shadow-[var(--shadow-card)] left-1/2 top-full mt-[6px] -translate-x-1/2 rotate-90 sm:hidden lg:flex lg:left-auto lg:-right-[30px] lg:top-1/2 lg:mt-0 lg:translate-x-0 lg:-translate-y-1/2 lg:rotate-0"
                  >
                    <Arrow size={11} />
                  </span>
                )}
                {/* Drop line into the Patient Pulse bar, desktop only. */}
                <span
                  aria-hidden
                  className="absolute left-1/2 top-full hidden h-6 w-px bg-[var(--color-muted-light)] lg:block"
                />
              </li>
            ))}
          </ol>

          <FadeUp delay={0.3}>
            <div
              className="mt-4 flex flex-col gap-4 bg-[var(--color-ink)] px-7 py-6 text-white sm:flex-row sm:items-center sm:justify-between lg:mt-6"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <p className="text-[15px] leading-relaxed text-white/70">
                <span className="font-display font-semibold text-white">Patient Pulse, underneath every stage.</span>{" "}
                One pipeline and one inbox, with every enquiry, reply and follow-up logged.
              </p>
              <Link
                href="/patient-pulse/"
                className="inline-flex flex-shrink-0 items-center gap-1.5 text-[13px] font-semibold text-[var(--color-accent)] transition-colors hover:text-white"
              >
                How Patient Pulse works
                <Arrow size={10} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 4. Patient Pulse spotlight ────────────────────────────────────── */}
      <section className="section bg-[var(--color-surface)] border-b border-[var(--color-border)] grain">
        <div className="cx-main grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <FadeUp>
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow mb-4">Patient Pulse</p>
              <h2 className="text-h2 mb-5 text-[var(--color-ink)]">
                Spreadsheets and five inboxes, replaced by one pipeline
              </h2>
              <p className="text-body-lg mb-8 text-[var(--color-charcoal)]">
                If the left-hand column sounds like your week, this is the part of
                the system that changes it first.
              </p>
              <Link
                href="/patient-pulse/"
                className="inline-flex items-center gap-2 font-semibold transition-colors hover:bg-[var(--color-paper)]"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-ink)",
                  padding: "13px 24px",
                  borderRadius: PILL,
                  fontSize: "15px",
                }}
              >
                See everything Patient Pulse does
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] shadow-[var(--shadow-card)]">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">A clinic week without and with Patient Pulse</caption>
                <thead>
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                    <th scope="col" className="text-label w-1/2 px-5 py-4 sm:px-7">Without it</th>
                    <th scope="col" className="w-1/2 px-5 py-4 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-[var(--color-accent-text)] sm:px-7">
                      With Patient Pulse
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pulseRows.map((r) => (
                    <tr key={r.before} className="border-b border-[var(--color-border)] last:border-b-0 align-top">
                      <td className="px-5 py-4 text-[14px] leading-snug text-[var(--color-muted)] sm:px-7">{r.before}</td>
                      <td className="px-5 py-4 text-[14px] font-semibold leading-snug text-[var(--color-ink)] sm:px-7">
                        <span className="flex gap-3">
                          <Check />
                          {r.after}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 5. Proof ──────────────────────────────────────────────────────── */}
      <section id="results" className="section bg-[var(--color-paper)] border-b border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <p className="eyebrow mb-4">Client results</p>
            <h2 className="text-h2 mb-12 max-w-[760px] text-[var(--color-ink)]">
              A clinic that opened with no website, now No. 1 on Google for six local searches
            </h2>
          </FadeUp>

          {/* Lind Street leads: a real client from a cold start, one specific
              metric, and the owner's own words inside the same block. Figures
              from the case study, src/app/case-studies/lind-street-osteopathy/:
              Ahrefs shows No. 1 for six terms and all ten tracked in the top
              four. */}
          <FadeUp>
            <div className="grid overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] shadow-[var(--shadow-card)] md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image
                  src="/images/lind-street/clinic-sign.png"
                  alt="The sign outside Lind Street Osteopathy in Ryde"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-11">
                <p className="text-label mb-5">Lind Street Osteopathy · Ryde</p>
                <p
                  className="font-display font-semibold leading-none text-[var(--color-accent-text)]"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  No. 1
                </p>
                <p className="text-body-lg mt-4 text-[var(--color-ink)]">
                  on Google for six of her local searches, including
                  &ldquo;osteopath ryde&rdquo;. All ten tracked searches sit in the
                  top four.
                </p>
                <p className="mt-2 text-[12px] text-[var(--color-muted)]">Source: Ahrefs tracked keyword positions</p>

                <figure className="m-0 mt-7 border-l-2 border-[var(--color-accent)] pl-5">
                  <blockquote className="text-[15px] font-medium leading-relaxed text-[var(--color-ink)]">
                    &ldquo;{serenaQuote.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 flex items-center gap-3 text-[13px] text-[var(--color-muted)]">
                    <span className="relative block h-9 w-9 flex-shrink-0 overflow-hidden rounded-full border border-[var(--color-border)]">
                      <Image src="/images/lind-street/serena-portrait.png" alt="" fill className="object-cover" sizes="36px" />
                    </span>
                    <span>
                      <span className="font-semibold text-[var(--color-ink)]">{serenaQuote.name}</span>, founder, in her Google review
                    </span>
                  </figcaption>
                </figure>

                <Link
                  href="/case-studies/lind-street-osteopathy/"
                  className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--color-ink)] underline underline-offset-4 transition-colors hover:text-[var(--color-accent-text)]"
                >
                  Read the Lind Street case study
                  <Arrow />
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* Elliot's review and the rating, with no count. */}
          <FadeUp delay={0.06}>
            <figure className="m-0 mt-6 flex flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 md:p-9">
              <Stars />
              <blockquote className="text-h4 mt-4 font-medium text-[var(--color-ink)]">
                &ldquo;{elliotQuote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[13px] text-[var(--color-muted)]">
                <span>
                  <span className="font-semibold text-[var(--color-ink)]">{elliotQuote.name}</span> · Clinic owner
                </span>
                <a
                  href={GOOGLE_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--color-ink)]"
                >
                  <span className="font-semibold text-[var(--color-ink)]">{GOOGLE_RATING.average} out of 5</span> on Google
                </a>
              </figcaption>
            </figure>
          </FadeUp>
        </div>
      </section>

      {/* ── 6. Founders and where it was built ─────────────────────────── */}
      {/* One origin story, told once. Bodyfunction used to close the results
          section as a dark card and then this section told the same story
          again; it now lives here, beside the people who built it. Danny's
          video moved up to the hero, so Bodyfunction's reception photo is the
          section's image. */}
      <section id="founders" className="section bg-[var(--color-surface)] border-b border-[var(--color-border)] grain">
        <div className="cx-main grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <figure className="m-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-paper)] shadow-[var(--shadow-card)]">
                <Image
                  src="/images/bodyfunction-clinic-team-at-reception-01.jpg"
                  alt="The team at the reception desk of Bodyfunction Clinic in Angel, London"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
              <figcaption className="mt-4 text-[14px] leading-relaxed text-[var(--color-muted)]">
                Every part of the system was tested in Bodyfunction Clinic,
                Danny&apos;s own practice in Angel, London, before any client saw it.{" "}
                <Link
                  href="/case-studies/bodyfunction-clinic/"
                  className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-ink)] underline underline-offset-4 transition-colors hover:text-[var(--color-accent-text)]"
                >
                  The Bodyfunction story
                  <Arrow />
                </Link>
              </figcaption>
            </figure>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div>
              <p className="eyebrow mb-4">The founders</p>
              <h2 className="text-h2 mb-10 text-[var(--color-ink)]">
                Built from inside the profession, not by an agency looking in
              </h2>
              <ul className="flex flex-col">
                {founders.map((f) => (
                  <li key={f.name} className="flex items-center gap-5 border-t border-[var(--color-border)] py-5 last:border-b">
                    <span className="relative block h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-paper)]">
                      <Image src={f.image} alt={f.name} fill className="object-cover" sizes="64px" />
                    </span>
                    <span>
                      <span className="block font-display text-[15px] font-semibold text-[var(--color-ink)]">{f.name}</span>
                      <span className="block text-[14px] leading-relaxed text-[var(--color-muted)]">{f.line}</span>
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 7. Who we help ────────────────────────────────────────────────── */}
      <section id="who-we-help" className="section bg-[var(--color-paper)] border-b border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <p className="eyebrow mb-4">Who we work with</p>
            <h2 className="text-h2 mb-12 text-[var(--color-ink)]">
              Osteopaths, physiotherapists and chiropractors
            </h2>
          </FadeUp>
          <div className="grid gap-6 md:grid-cols-3">
            {disciplineCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.06}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] shadow-[var(--shadow-card)] transition-all hover:-translate-y-[2px] hover:shadow-[var(--shadow-card-hover)]"
                  style={{ transitionDuration: "var(--duration-slow)" }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="eyebrow mb-3">{card.title}</p>
                    <h3 className="text-h4 mb-5 flex-1 text-[var(--color-ink)]">{card.headline}</h3>
                    <span className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--color-ink)] underline underline-offset-4 transition-colors group-hover:text-[var(--color-accent-text)]">
                      {card.anchor}
                      <Arrow />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Learning Hub, above the CTA so the page ends on the ask ────── */}
      <section className="section bg-[var(--color-surface)] border-b border-[var(--color-border)] grain">
        <div className="cx-main">
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <FadeUp>
              <div className="max-w-xl">
                <p className="eyebrow mb-4">Learning Hub</p>
                <h2 className="text-h2 text-[var(--color-ink)]">Practical guides to growing an MSK clinic</h2>
              </div>
            </FadeUp>
            <Link
              href="/learning-hub/"
              className="inline-flex flex-shrink-0 items-center gap-2 font-semibold transition-colors hover:bg-[var(--color-paper)]"
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-ink)",
                padding: "11px 22px",
                borderRadius: PILL,
                fontSize: "14px",
              }}
            >
              Visit the Learning Hub
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <ResourceCard
              category="Patient Acquisition"
              title="How to get more patients to your clinic"
              excerpt="A clear breakdown of the main digital levers that help clinics attract more patient enquiries, from local search to conversion-focused service pages."
              href="/learning-hub/how-to-get-more-patients-to-your-clinic/"
              readTime="7 min read"
              image="/images/resources/get-more-patients.jpg"
            />
            <ResourceCard
              category="SEO"
              title="Local SEO for healthcare clinics"
              excerpt="A broader guide to local SEO for healthcare clinics that want to appear more consistently for relevant local searches."
              href="/learning-hub/local-seo-for-healthcare-clinics/"
              readTime="5 min read"
              image="/images/resources/local-seo-healthcare.jpg"
            />
            <ResourceCard
              category="Patient Retention"
              title="Patient recall system: what it is and why clinics need one"
              excerpt="A guide to patient recall, follow-up and reactivation systems for clinics that want to reconnect with past patients more effectively."
              href="/learning-hub/patient-recall-system/"
              readTime="5 min read"
              image="/images/resources/patient-recall.jpg"
            />
          </div>
        </div>
      </section>

      {/* ── 9. One closing CTA, with the form on the page ─────────────────── */}
      <section id="book-audit" className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div
            className="grid gap-10 border border-[var(--color-border)] p-8 shadow-[var(--shadow-card)] md:p-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:p-14"
            style={{
              borderRadius: "var(--radius-panel)",
              background: "linear-gradient(180deg, var(--color-paper) 0%, var(--color-accent-light) 100%)",
            }}
          >
            <FadeUp>
              <div>
                <p className="eyebrow mb-4">Free clinic audit</p>
                <h2 className="text-h2 mb-6 text-[var(--color-ink)]">
                  Find out where your clinic is losing patients
                </h2>
                <p className="text-body-lg mb-8 text-[var(--color-charcoal)]">What you get:</p>
                <ul className="flex flex-col gap-4">
                  {auditIncludes.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-[var(--color-ink)]">
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] p-6 shadow-[var(--shadow-card)] sm:p-8">
                <DraftAuditForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <StickyMobileCta hideNearId="book-audit" href="#book-audit" pill />
    </div>
  );
}

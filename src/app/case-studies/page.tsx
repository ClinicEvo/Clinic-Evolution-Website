import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import PageHero from "@/components/sections/PageHero";
import HeroCliniciansPanel from "@/components/sections/HeroCliniciansPanel";
import BrowserFrame from "@/components/sections/mockups/BrowserFrame";

export const metadata = buildMetadata({
  title: "Clinic Marketing Case Studies",
  description:
    "Measured results from UK osteopathy clinics: an established London practice grown to 3,822 monthly organic visitors, and a new Isle of Wight clinic taken to page one from zero.",
  path: "/case-studies/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies/" },
];

/*
 * The two case studies are deliberately a pair covering opposite ends of the
 * prospect spectrum: an established clinic that wanted to own its category, and
 * a brand new practice starting from nothing. Running one without the other
 * leaves half the audience thinking "that isn't my situation".
 *
 * Bodyfunction is labelled as the origin story rather than a client. Danny
 * Morgan founded it and co-founded Clinic Evo, and the 10 Aug review was
 * explicit that implying otherwise is the thing to fix.
 *
 * Bodyfunction leads, and leads at the wider column. Two identical cards told
 * the reader nothing about where to start, and the hero sentence introduces
 * London first — the order now matches it.
 *
 * `media` differs per card on purpose. The Bodyfunction asset is a photograph
 * of the clinic team, which is the credibility claim this whole site rests on,
 * so it runs at full strength. The Lind Street asset is a screenshot of a
 * website, which reads as decoration when bled edge to edge, so it goes in
 * browser chrome with the real domain in the address pill. Both images used to
 * sit under a bg-white/80 wash so a 72px figure could be stacked on top; the
 * wash made the photo a ghost and the screenshot unreadable, and the figure has
 * a proper home in the card body now.
 */
const caseStudies = [
  {
    href: "/case-studies/bodyfunction-clinic/",
    eyebrow: "Osteopathy & MSK · London",
    title: "Bodyfunction Clinic",
    tag: "Our origin story",
    before: "8",
    after: "3,822",
    statLabel: "Monthly organic visitors, Aug 2024 to Aug 2026",
    body: "The clinic Clinic Evo was built out of. Eight visitors a month and every patient arriving by word of mouth, in one of the most competitive boroughs in the country. Now page one for local patient searches, and five times as many people searching for it by name.",
    media: {
      kind: "photo" as const,
      src: "/images/bodyfunction-clinic-team-at-reception-01.jpg",
      alt: "The Bodyfunction Clinic team at reception in Angel, London",
    },
    span: "lg:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    href: "/case-studies/lind-street-osteopathy/",
    eyebrow: "Osteopathy · Isle of Wight",
    title: "Lind Street Osteopathy",
    tag: "Client project",
    before: "0",
    after: "Page one",
    statLabel: "Every core local search term, twelve months from launch",
    body: "One osteopath, one treatment room, opening cold with no logo, no website and no reputation online. Twelve months later, if you need an osteopath on the Isle of Wight, she is the one you find.",
    media: {
      kind: "site" as const,
      src: "/images/lind-street/homepage-banner.png",
      alt: "The Lind Street Osteopathy website built by Clinic Evo",
      label: "lindstreetosteopathy.co.uk",
    },
    span: "lg:col-span-5",
    aspect: "aspect-[16/11]",
  },
];

/* What both engagements covered. Taken from the Lind Street build scope rather
   than written fresh — a prospect reading the index should be able to see the
   same four pieces in the study itself. Four in a 2×2, not a row of three. */
const shared = [
  {
    title: "The brand",
    body: "Identity, palette and look, drawn from the clinic itself rather than the interchangeable clinical stock look most practices settle for.",
  },
  {
    title: "The website",
    body: "Built around the conditions patients search for, not a list of treatments, with booking never more than one click away.",
  },
  {
    title: "Getting found",
    body: "The local market researched before anything was built, then pages, titles and content shaped around what people there actually type.",
  },
  {
    title: "Ads while search matured",
    body: "Paid social running from day one, so the diary was filling before the search results had caught up.",
  },
];

/* Before → after, in the emphasis pattern CaseStudyCharts already establishes
   on the detail pages: the recessive "before" in grey, coral carrying the
   movement, the "after" figure in ink. The index previously set both halves in
   72px coral, which put more weight on a statistic than on the button the page
   exists to get clicked. */
function StatFigure({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  return (
    <div className="mb-6 border-l-2 border-[var(--color-accent)] bg-[var(--color-surface)] py-4 pl-5 pr-4">
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-display font-bold leading-none">
        <span className="text-[1.5rem] text-[var(--color-muted)]">{before}</span>
        <svg
          aria-hidden="true"
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          className="flex-shrink-0 self-center text-[var(--color-accent-text)]"
        >
          <path
            d="M1 6h16M13 1.5L17.5 6 13 10.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[2rem] text-[var(--color-ink)] sm:text-[2.375rem]">
          {after}
        </span>
      </p>
      {/* Sentence case, not uppercase: these labels carry a date range and a
          qualifier, and at 12px uppercase with tracking they both shouted and
          wrapped, orphaning the last word. */}
      <p className="mt-2.5 text-[0.8rem] leading-snug text-[var(--color-muted)]">
        {label}
      </p>
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      <PageHero
        badge="Client results"
        heading={
          <>
            Real growth from{" "}
            <em className="not-italic text-[var(--color-accent)]">real clinic systems</em>
          </>
        }
        subtext="Two clinics at opposite ends of the scale. One established practice in London that nobody could find, and one brand new osteopath opening cold on the Isle of Wight. Here is what changed for both, and what it would mean for you."
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        breadcrumbs={crumbs}
        rightPanel={<HeroCliniciansPanel />}
      />

      <section className="section grain border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          {/* This paragraph used to sit under the cards at 12px grey, where it
              read as an apology for only having two studies. It is the sharpest
              positioning line on the page, so it frames the pair instead. */}
          <FadeUp>
            <p className="text-body-lg mb-12 max-w-3xl text-[var(--color-charcoal)]">
              Two deliberately different stories: what an established city clinic
              can build over two years, and what a brand new
              single-practitioner practice can do in twelve months in a small
              catchment.{" "}
              <span className="font-semibold text-[var(--color-ink)]">
                Most clinics see themselves in one or the other.
              </span>
            </p>
          </FadeUp>

          {/* Stretch, not items-start. The lead card carries a taller image, so
              aligning to the top left the second card ending 200px short with a
              visible hole under it. Stretched, both bottoms line up and the
              flex-1 body copy absorbs the difference. */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {caseStudies.map((cs, i) => (
              <FadeUp key={cs.href} delay={i * 0.1} className={cs.span}>
                <Link
                  href={cs.href}
                  className="card-surface group flex h-full flex-col overflow-hidden"
                >
                  {cs.media.kind === "photo" ? (
                    <div
                      className={`relative ${cs.aspect} w-full overflow-hidden`}
                    >
                      <Image
                        src={cs.media.src}
                        alt={cs.media.alt}
                        fill
                        className="object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-quart)] group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 640px"
                      />
                    </div>
                  ) : (
                    <BrowserFrame label={cs.media.label} flush>
                      <div className={`relative ${cs.aspect} w-full overflow-hidden`}>
                        <Image
                          src={cs.media.src}
                          alt={cs.media.alt}
                          fill
                          className="object-cover object-top transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-quart)] group-hover:scale-[1.03]"
                          sizes="(max-width: 1024px) 100vw, 460px"
                        />
                      </div>
                    </BrowserFrame>
                  )}

                  <div className="flex flex-1 flex-col border-t border-[var(--color-border)] p-7 md:p-8">
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                      <p className="eyebrow">{cs.eyebrow}</p>
                      <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                        {cs.tag}
                      </span>
                    </div>

                    <h2 className="text-h3 mb-5 text-[var(--color-ink)]">{cs.title}</h2>

                    <StatFigure
                      before={cs.before}
                      after={cs.after}
                      label={cs.statLabel}
                    />

                    <p className="text-body mb-7 flex-1 text-[var(--color-muted)]">
                      {cs.body}
                    </p>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-text)] transition-colors duration-[var(--duration-fast)] group-hover:text-[var(--color-accent-dim)]">
                      Read the case study
                      <svg
                        aria-hidden="true"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5"
                      >
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

      <section className="section grain bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <FadeUp>
                <p className="eyebrow mb-5">What both had in common</p>
                <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                  The same four pieces, at two different scales
                </h2>
                <p className="text-body text-[var(--color-muted)]">
                  Neither clinic bought a website from one supplier and search
                  from another. Brand, site, visibility and paid social were one
                  job in both cases, which is the only reason a two-year London
                  build and a twelve-month Isle of Wight one produced the same
                  shape of result.
                </p>
              </FadeUp>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {shared.map((item, i) => (
                  <FadeUp key={item.title} delay={i * 0.07}>
                    <div className="flex h-full flex-col border-t border-[var(--color-border)] pt-6">
                      <span className="mb-3 block font-display text-[0.8rem] font-bold text-[var(--color-accent-text)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-h4 mb-2.5 text-[var(--color-ink)]">
                        {item.title}
                      </h3>
                      <p className="text-body-sm text-[var(--color-muted)]">
                        {item.body}
                      </p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Want to see what your clinic is missing?"
        subheading="A free clinic audit will show where your current website, SEO, patient journey and conversion points could be improved."
        primaryLabel="Get a free clinic audit"
        primaryHref="/free-clinic-audit/"
      />
    </>
  );
}

import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import PageHero from "@/components/sections/PageHero";

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
 */
const caseStudies = [
  {
    href: "/case-studies/lind-street-osteopathy/",
    eyebrow: "Osteopathy · Isle of Wight",
    title: "Lind Street Osteopathy",
    stat: "0 → page one",
    statLabel: "on every core local term",
    image: "/images/lind-street/homepage-banner.png",
    imageAlt: "The Lind Street Osteopathy website built by Clinic Evo",
    body: "A brand new single-practitioner clinic in Ryde with no logo, no website and no search presence at all. Twelve months on it holds page one for every commercially relevant osteopathy search in its catchment.",
    tag: "Client project",
  },
  {
    href: "/case-studies/bodyfunction-clinic/",
    eyebrow: "Osteopathy & MSK · London",
    title: "Bodyfunction Clinic",
    stat: "8 → 3,822",
    statLabel: "monthly organic visitors",
    image: "/images/bodyfunction-clinic-team-at-reception-01.jpg",
    imageAlt: "The Bodyfunction Clinic team at reception in Angel, London",
    body: "The clinic Clinic Evo was built out of. Two years of content-led SEO in a fiercely competitive London market took it from 104 keywords and no top-three rankings to 1,112 keywords and 383 of them in the top three.",
    tag: "Our origin story",
  },
];

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
        subtext="These are not projections. Every figure on these pages comes from Google Search Console or Ahrefs and can be checked in either tool, including the parts that are still work in progress."
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        breadcrumbs={crumbs}
      />

      <section className="section grain min-h-[50vh] border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <FadeUp key={cs.href} delay={i * 0.1}>
                <Link href={cs.href} className="card-surface group flex h-full flex-col overflow-hidden">
                  <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden border-b border-[var(--color-border)] p-8">
                    <Image
                      src={cs.image}
                      alt={cs.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-white/80" />
                    <div className="relative text-center">
                      <p className="text-display font-bold text-[var(--color-accent)]">{cs.stat}</p>
                      <p className="text-body font-medium text-[var(--color-muted)]">
                        {cs.statLabel}
                      </p>
                    </div>
                    <span className="absolute right-4 top-4 rounded-full border border-[var(--color-border)] bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                      {cs.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <p className="eyebrow mb-4">{cs.eyebrow}</p>
                    <h2 className="text-h3 mb-4 text-[var(--color-ink)]">{cs.title}</h2>
                    <p className="text-body mb-6 flex-1 text-[var(--color-muted)]">{cs.body}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-colors duration-150 group-hover:text-[var(--color-accent-dim)]">
                      Read the case study
                      <svg
                        aria-hidden="true"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="transition-transform duration-150 group-hover:translate-x-0.5"
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

          <FadeUp delay={0.2}>
            <p className="mt-10 max-w-3xl text-body-sm text-[var(--color-muted)]">
              Two deliberately different stories. Bodyfunction shows what an
              established clinic can build over two years in a competitive city
              market. Lind Street shows what a brand new single-practitioner
              practice can achieve in twelve months in a small catchment. Most
              clinics see themselves in one or the other.
            </p>
          </FadeUp>
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

import Image from "next/image";
import LaptopFrame from "./LaptopFrame";
import BrowserFrame from "./BrowserFrame";

/*
 * Hero panel for /seo-for-clinics/.
 *
 * The page used to open with the Search Console chart floating in a rounded
 * rectangle, which is exactly the "generic landscape image" the 10 Aug review
 * objected to. Same screenshot, but on a screen: a laptop with the tool's own
 * chrome around it, so a clinic owner reads it as a report somebody pulled
 * rather than as page furniture.
 *
 * The figure card overhangs the base rather than sitting inside the screen. It
 * is a different tool's number — Ahrefs, not Search Console — and putting it
 * inside the bezel would imply it was part of the screenshot.
 *
 * Both are Bodyfunction, and the panel now says so. The screenshot is the GSC
 * three-month default view, 5 Apr to 4 Jul 2026, which is why 10.6k clicks does
 * not contradict the 49,065 annual figure further down the page — pro-rated to
 * 91 days the annual total gives ~12.2k, and the click-through rate is 0.6% on
 * both. Keep the window in the caption: without it the two numbers look like
 * they disagree.
 */
export default function SearchConsolePanel() {
  return (
    <div className="relative">
      {/* The card is anchored to this wrapper, not the outer one — anchor it
          outside and the caption's height pushes it down the page. */}
      <div className="relative">
        <LaptopFrame>
          <BrowserFrame flush label="search.google.com/search-console">
            <div className="px-3 py-3">
              <Image
                src="/images/seo-for-clinics/seo-graph.png"
                alt="Google Search Console performance report for Bodyfunction Clinic showing 10.6 thousand clicks and 1.77 million impressions over three months"
                width={2028}
                height={774}
                className="h-auto w-full"
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </BrowserFrame>
        </LaptopFrame>

        {/* Overhanging figure. Ahrefs, not Search Console, and captioned as such. */}
        <div className="absolute -bottom-16 left-2 w-[62%] max-w-[280px] rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] p-4 shadow-[var(--shadow-card-hover)] sm:-bottom-20 sm:left-0">
          <p className="font-display text-2xl font-bold leading-none text-[var(--color-ink)] sm:text-3xl">
            8 <span className="text-[var(--color-muted-light)]">&rarr;</span> 3,822
          </p>
          <p className="mt-2 text-[0.72rem] font-medium leading-snug text-[var(--color-charcoal)]">
            Estimated monthly visitors from Google
          </p>
          <p className="mt-1.5 text-[0.65rem] leading-snug text-[var(--color-muted)]">
            Ahrefs, Aug 2024 &ndash; Aug 2026
          </p>
        </div>
      </div>

      {/* Attribution. Named clinic and named window — an unattributed screenshot
          was the thing the review objected to, and the date range is what stops
          10.6k clicks reading as a contradiction of the 49,065 further down.
          The margin clears the overhanging card; the width keeps it clear too. */}
      <p className="ml-auto mt-24 max-w-[58%] text-right text-[0.7rem] leading-relaxed text-[var(--color-muted)] sm:mt-28">
        Both figures are{" "}
        <span className="font-semibold text-[var(--color-charcoal)]">Bodyfunction Clinic</span>,
        Islington. The report on screen is the three months to 4 July 2026.
      </p>

      <div className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-2xl bg-[var(--color-accent)]/10 blur-2xl" />
    </div>
  );
}

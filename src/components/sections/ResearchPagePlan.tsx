import FadeUp from "@/components/ui/FadeUp";

/*
 * The research artefact, made concrete.
 *
 * "We research before we build" is a claim every agency makes, so this shows the
 * working: the search demand we found in Ryde, the page that demand turned into,
 * and where that page sits now. It is the same argument as the Ahrefs screenshot
 * on the Lind Street case study, but readable at a glance and pointed at the
 * build decision rather than at the ranking.
 *
 * Every figure here is real and cross-checked:
 *   - Search terms and monthly volumes: Ahrefs tracked keywords for
 *     lindstreetosteopathy.co.uk, the same export used on the case study.
 *   - Positions: Ahrefs current position from that export, Jul 2026. Do NOT mix
 *     these with Search Console positions, which average across every location
 *     and read worse for the same term.
 *   - Pages: lindstreetosteopathy.co.uk/page-sitemap.xml. Every row below maps to
 *     a page that genuinely exists. If a row is ever added, check the sitemap
 *     first — inventing a page here would be the easiest lie on the site to
 *     catch.
 *
 * Deliberately not a card grid. This page already carried three of those, which
 * is the "generic Lego blocks" Danny objected to on the 10 Aug call.
 */

const rows: Array<{ term: string; volume: string; page: string; position: string }> = [
  { term: "osteopath isle of wight", volume: "150", page: "Homepage", position: "4" },
  { term: "back pain osteopath ryde", volume: "40", page: "Back pain in Ryde", position: "1" },
  { term: "osteopath ryde", volume: "30", page: "Homepage", position: "1" },
  {
    term: "women's health osteopath ryde",
    volume: "20",
    page: "Women's health and menopause",
    position: "1",
  },
  {
    term: "neck pain osteopath ryde",
    volume: "20",
    page: "Neck pain, headaches and TMJ",
    position: "1",
  },
  {
    term: "chronic pain osteopath ryde",
    volume: "20",
    page: "Chronic pain, fibromyalgia and hypermobility",
    position: "2",
  },
  { term: "shoulder pain osteopath ryde", volume: "10", page: "Shoulder pain in Ryde", position: "1" },
];

export default function ResearchPagePlan() {
  return (
    <div>
      <FadeUp>
        {/* Column headings, desktop only. On a phone each row reads as a short
            block instead, so a header would be labelling nothing. */}
        <div className="hidden border-b border-[var(--color-ink)]/12 pb-3 sm:grid sm:grid-cols-[1.25fr_auto_1.4fr_auto] sm:items-baseline sm:gap-6">
          <p className="text-label text-[var(--color-muted)]">What patients type</p>
          <p className="text-label text-right text-[var(--color-muted)]">Searches / mo</p>
          <p className="text-label text-[var(--color-muted)]">The page we built for it</p>
          <p className="text-label text-right text-[var(--color-muted)]">Ranks now</p>
        </div>
      </FadeUp>

      <ul role="list">
        {rows.map((row, i) => (
          <FadeUp key={row.term} delay={i * 0.05}>
            <li className="flex flex-col gap-2 border-b border-[var(--color-border)] py-5 sm:grid sm:grid-cols-[1.25fr_auto_1.4fr_auto] sm:items-center sm:gap-6">
              <p className="text-[15px] font-medium leading-snug text-[var(--color-ink)]">
                &ldquo;{row.term}&rdquo;
              </p>
              <p className="text-[13px] tabular-nums text-[var(--color-muted)] sm:text-right">
                <span className="sm:hidden">{row.volume} searches a month</span>
                <span className="hidden sm:inline">{row.volume}</span>
              </p>
              <p className="flex items-center gap-2.5 text-[15px] leading-snug text-[var(--color-charcoal)]">
                <svg
                  className="flex-shrink-0 text-[var(--color-accent)]"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7h9M7.5 3.5L11 7l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {row.page}
              </p>
              <p className="text-[13px] font-semibold tabular-nums text-[var(--color-ink)] sm:text-right">
                <span className="sm:hidden">Now position </span>
                {row.position}
              </p>
            </li>
          </FadeUp>
        ))}
      </ul>

      <FadeUp>
        <p className="mt-6 text-body-sm text-[var(--color-muted)]">
          Lind Street Osteopathy, Ryde. Search demand and positions from Ahrefs, July 2026. The
          clinic opened with no website and no search history of any kind — every page above was
          decided before a line of design work started.
        </p>
      </FadeUp>
    </div>
  );
}

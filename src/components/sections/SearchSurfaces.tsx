import BrowserFrame from "@/components/sections/mockups/BrowserFrame";

/*
 * The three places a clinic can now show up for one search.
 *
 * Deliberately a diagram, not a fake screenshot. It carries no figures, no
 * competitor names and no claim about anybody's ranking — it exists to answer
 * "where does SEO actually put me?" for an owner who has never thought about
 * the difference between the AI answer, the map pack and the blue links.
 *
 * "Your clinic" is a diagram label in the way a floor plan says "you are here".
 * Do not add invented metrics, review counts or clinic names to it — the moment
 * it looks like a screenshot it becomes a claim, which is the thing the 10 Aug
 * review told us to stop doing on this page.
 */

const zones = [
  {
    tag: "AI answer",
    note: "Google writes the answer itself and cites a handful of sources. Being one of them now matters as much as ranking.",
  },
  {
    tag: "Map pack",
    note: "The three local businesses shown with the map. For a clinic this is usually the most valuable position on the page.",
  },
  {
    tag: "Organic results",
    note: "The classic blue links. Still where most of the considered, compare-two-clinics traffic comes from.",
  },
];

function Line({ w, dim = false }: { w: string; dim?: boolean }) {
  return (
    <span
      className="block h-[5px] rounded-full"
      style={{
        width: w,
        background: dim ? "var(--color-border)" : "var(--color-muted-light)",
      }}
    />
  );
}

/* Spans the container rather than stopping at max-w-4xl. Inside a full-width
   .cx-main the old cap left roughly 300px of nothing down the right at 1440,
   which read as an unfinished row rather than as breathing room. The mock keeps
   its fixed width; the zone list takes the recovered space. */
export default function SearchSurfaces() {
  return (
    <div className="grid gap-8 sm:grid-cols-[minmax(0,290px)_minmax(0,1fr)] sm:items-start sm:gap-14 lg:gap-20">
      <BrowserFrame label="google.co.uk — one search">
        <div className="space-y-3 p-3.5">
          {/* Query */}
          <div className="flex items-center gap-2 rounded-full bg-[var(--color-surface)] px-3 py-2 ring-1 ring-[var(--color-border)]">
            <svg
              className="flex-shrink-0 text-[var(--color-muted)]"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span className="text-[0.7rem] text-[var(--color-ink)]">osteopath near me</span>
          </div>

          {/* AI answer */}
          <div className="rounded-lg border border-[var(--color-accent)]/25 bg-[var(--color-accent-light)] p-3">
            <p className="mb-2 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent-text)]">
              AI answer
            </p>
            <div className="space-y-1.5">
              <Line w="100%" />
              <Line w="88%" />
              <Line w="62%" />
            </div>
          </div>

          {/* Map pack */}
          <div className="rounded-lg border border-[var(--color-border)] p-3">
            <p className="mb-2.5 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              Map results
            </p>
            <div className="space-y-2">
              {[true, false, false].map((isYou, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2.5 rounded-md px-2 py-1.5 ${
                    isYou
                      ? "bg-[var(--color-accent)]/10 ring-1 ring-[var(--color-accent)]/30"
                      : ""
                  }`}
                >
                  <span
                    className="h-4 w-4 flex-shrink-0 rounded-sm"
                    style={{
                      background: isYou
                        ? "var(--color-accent)"
                        : "var(--color-border)",
                    }}
                  />
                  {isYou ? (
                    <span className="text-[0.62rem] font-semibold text-[var(--color-ink)]">
                      Your clinic
                    </span>
                  ) : (
                    <Line w="58%" dim />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Organic */}
          <div className="space-y-2.5 px-1 pb-1">
            <p className="text-[0.55rem] font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              Results
            </p>
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-1.5">
                <Line w={i === 0 ? "72%" : "64%"} />
                <Line w="92%" dim />
              </div>
            ))}
          </div>
        </div>
      </BrowserFrame>

      <ul role="list" className="border-t border-[var(--color-border)]">
        {zones.map((z) => (
          <li key={z.tag} className="border-b border-[var(--color-border)] py-5">
            <p className="text-[15px] font-semibold text-[var(--color-ink)]">{z.tag}</p>
            <p className="text-body-sm mt-1.5 text-[var(--color-muted)]">{z.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Stylised local search result — shows the clinic owning the map pack and the
// top organic result, without claiming any specific metric.
const competitors = [
  { name: "Your Clinic", you: true },
  { name: "Nearby Physio Practice", you: false },
  { name: "City Osteopaths", you: false },
];

function Stars() {
  return (
    <span className="flex items-center gap-0.5 text-[var(--color-accent)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
        </svg>
      ))}
    </span>
  );
}

export default function SerpMockup() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
        {/* Search bar */}
        <div className="border-b border-[var(--color-border)] p-4">
          <div className="flex items-center gap-2.5 rounded-full bg-[var(--color-surface)] px-4 py-2.5 ring-1 ring-[var(--color-border)]">
            <svg className="text-[var(--color-muted)]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
            </svg>
            <span className="text-[12px] text-[var(--color-ink)]">osteopath near me</span>
          </div>
        </div>

        {/* Map pack */}
        <div className="p-4">
          <div className="mb-3 flex items-center gap-1.5">
            <svg className="text-[var(--color-muted)]" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
            </svg>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              Map results
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {competitors.map((c, i) => (
              <div
                key={c.name}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 ${
                  c.you
                    ? "bg-[var(--color-accent-light)] ring-1 ring-[var(--color-accent)]/40"
                    : "bg-[var(--color-surface)]"
                }`}
              >
                <span
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                    c.you ? "bg-[var(--color-accent)] text-white" : "bg-white text-[var(--color-muted)] ring-1 ring-[var(--color-border)]"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className={`truncate text-[12px] font-semibold ${c.you ? "text-[var(--color-ink)]" : "text-[var(--color-charcoal)]"}`}>
                    {c.name}
                  </p>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <Stars />
                    <span className="text-[9px] text-[var(--color-muted)]">Open · Books online</span>
                  </div>
                </div>
                {c.you && (
                  <span className="flex-shrink-0 rounded-full bg-[var(--color-accent)] px-2 py-0.5 text-[9px] font-semibold text-white">
                    You
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Organic result */}
          <div className="mt-4 border-t border-[var(--color-border)] pt-4">
            <p className="text-[10px] text-[var(--color-muted)]">yourclinic.co.uk › osteopathy</p>
            <p className="mt-1 font-display text-[13px] font-semibold text-[var(--color-ink)]">
              Osteopathy for Back &amp; Neck Pain — Your Clinic
            </p>
            <div className="mt-1.5 space-y-1">
              <span className="block h-1.5 w-full rounded-full bg-[var(--color-surface)]" />
              <span className="block h-1.5 w-4/5 rounded-full bg-[var(--color-surface)]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 top-[34%] hidden rounded-full bg-[var(--color-ink)] px-3 py-1.5 text-[10px] font-semibold text-white shadow-lg lg:block">
        Ranked #1 locally
      </div>
    </div>
  );
}

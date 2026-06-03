// Stylised paid-search result paired with a matching landing page — makes the
// "ad and landing page alignment" message visual.
export default function AdsMockup() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
        <div className="p-5">
          {/* Sponsored ad */}
          <div className="rounded-lg bg-[var(--color-surface)] p-3.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-[var(--color-ink)]">Sponsored</span>
              <span className="text-[10px] text-[var(--color-muted)]">yourclinic.co.uk/physiotherapy</span>
            </div>
            <p className="mt-1.5 font-display text-[13px] font-semibold text-[var(--color-ink)]">
              Private Physiotherapy — Same-Week Appointments
            </p>
            <p className="mt-1 text-[10px] leading-relaxed text-[var(--color-muted)]">
              Book a private physio assessment with a registered clinician. Sports injuries, back pain and rehab.
            </p>
            <div className="mt-2.5 flex gap-2">
              <span className="rounded px-2 py-1 text-[9px] font-medium text-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/25">Book online</span>
              <span className="rounded px-2 py-1 text-[9px] font-medium text-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/25">Our prices</span>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center py-2.5">
            <svg className="text-[var(--color-accent)]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </div>

          {/* Matching landing page */}
          <div className="overflow-hidden rounded-lg ring-1 ring-[var(--color-border)]">
            <div className="flex items-center justify-between bg-[var(--color-ink)] px-3.5 py-2.5">
              <span className="font-display text-[11px] font-bold text-white">Private Physiotherapy</span>
              <span className="rounded bg-[var(--color-accent)] px-2 py-1 text-[9px] font-semibold text-white">Book now</span>
            </div>
            <div className="p-3.5">
              <p className="font-display text-[12px] font-bold leading-snug text-[var(--color-ink)]">
                Same-week physiotherapy assessments
              </p>
              <div className="mt-2 space-y-1.5">
                <span className="block h-1.5 w-full rounded-full bg-[var(--color-surface)]" />
                <span className="block h-1.5 w-5/6 rounded-full bg-[var(--color-surface)]" />
              </div>
              <div className="mt-3 flex gap-2">
                {["Sports injury", "Back pain", "Rehab"].map((t) => (
                  <span key={t} className="rounded-full bg-[var(--color-surface)] px-2 py-1 text-[9px] font-medium text-[var(--color-charcoal)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-[var(--color-ink)] px-3 py-1.5 text-[10px] font-semibold text-white shadow-lg lg:block">
        Ad → page match
      </div>
    </div>
  );
}

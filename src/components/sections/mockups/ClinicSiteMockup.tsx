// Stylised preview of a clinic website — the booking CTA and trust signals are
// annotated to make the "built around bookings" message visual, not just stated.
export default function ClinicSiteMockup() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-muted-light)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-muted-light)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-muted-light)]" />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-md bg-white px-3 py-1.5 text-[11px] text-[var(--color-muted)] ring-1 ring-[var(--color-border)]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" />
            </svg>
            yourclinic.co.uk
          </div>
        </div>

        {/* Page body */}
        <div className="p-5">
          {/* Site nav */}
          <div className="mb-5 flex items-center justify-between">
            <span className="font-display text-[13px] font-bold text-[var(--color-ink)]">Your Clinic</span>
            <span className="rounded-md bg-[var(--color-accent)] px-3 py-1.5 text-[10px] font-semibold text-white">
              Book online
            </span>
          </div>

          {/* Hero block */}
          <div className="rounded-lg bg-[var(--color-surface)] p-4">
            <div className="h-2 w-16 rounded-full bg-[var(--color-accent)]/70" />
            <p className="mt-3 font-display text-base font-bold leading-snug text-[var(--color-ink)]">
              Back pain? See a registered<br />osteopath this week.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-md bg-[var(--color-accent)] px-3 py-1.5 text-[10px] font-semibold text-white">
                Book appointment
              </span>
              <span className="rounded-md px-3 py-1.5 text-[10px] font-medium text-[var(--color-muted)] ring-1 ring-[var(--color-border)]">
                Our treatments
              </span>
            </div>
          </div>

          {/* Trust chips */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["GOsC registered", "Verified reviews", "Same-week slots"].map((t) => (
              <div key={t} className="flex items-center gap-1.5 rounded-md bg-white px-2 py-2 ring-1 ring-[var(--color-border)]">
                <svg className="flex-shrink-0 text-[var(--color-accent)]" width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[9px] font-medium leading-tight text-[var(--color-charcoal)]">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating annotations */}
      <div className="absolute -right-3 top-[42%] hidden rounded-full bg-[var(--color-ink)] px-3 py-1.5 text-[10px] font-semibold text-white shadow-lg lg:block">
        Clear booking CTA
      </div>
      <div className="absolute -left-3 bottom-6 hidden rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-[var(--color-ink)] shadow-lg ring-1 ring-[var(--color-border)] lg:block">
        Trust signals
      </div>
    </div>
  );
}

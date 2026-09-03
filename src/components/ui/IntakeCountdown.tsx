"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Days / hours / minutes remaining until a dated event.
 *
 * WHAT THIS IS AND IS NOT. It counts down to a real date that the page already
 * states in words — the intake. It is not an "offer ends" clock, and it must
 * never be pointed at an invented deadline: the whole reason the graduate page
 * can carry a timer at all is that 15 October is a fact the reader can check
 * against everything else on the page. If the target ever needs to be an
 * applications-close date, get the date from the client first.
 *
 * NO SECONDS, deliberately. At six weeks out a seconds ticker reads as an
 * infomercial rather than as a diary date, and it forces a re-render every
 * second for a digit nobody is watching. Minutes update on a 30s interval,
 * which is accurate to within half a minute and costs nothing.
 *
 * HYDRATION. The server has no clock the client will agree with, so the first
 * paint renders em-dashes at the final size and the real figures arrive on
 * mount. Rendering the numbers on the server instead is what produces the
 * attribute-mismatch warnings this codebase already has enough of, and it would
 * also ship a stale figure inside the full-page cache.
 *
 * ACCESSIBILITY. The digits are aria-hidden and a plain sentence carries the
 * same information to a screen reader. A live-updating timer announced every
 * thirty seconds is hostile, and the useful fact here is the date, not the
 * remaining minutes.
 */

interface IntakeCountdownProps {
  /** Target instant, ISO 8601 WITH an explicit UTC offset. */
  target: string;
  /** Human date, for the screen-reader sentence. */
  targetLabel: string;
  /** Standing head above the digits, e.g. "Next intake starts 15 October 2026".
   *  It belongs to the component rather than to the caller because it has to
   *  disappear WITH the clock — left outside, the expired state reads "Next
   *  intake starts 15 October 2026 / This intake has started." */
  label?: ReactNode;
  /** Rendered instead of the clock AND the label once the target has passed. */
  expired: ReactNode;
  /** Palette. The band this ships in is navy; `light` is here so a second
   *  placement does not have to fork the component. */
  tone?: "dark" | "light";
}

function remaining(target: number, now: number) {
  const ms = target - now;
  if (ms <= 0) return null;
  const totalMinutes = Math.floor(ms / 60000);
  return {
    days: Math.floor(totalMinutes / 1440),
    hours: Math.floor((totalMinutes % 1440) / 60),
    minutes: totalMinutes % 60,
  };
}

export default function IntakeCountdown({
  target,
  targetLabel,
  label,
  expired,
  tone = "dark",
}: IntakeCountdownProps) {
  const targetMs = Date.parse(target);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    // A malformed target must not render a NaN clock. Leaving `now` null holds
    // the placeholder, which is the least wrong thing a broken date can do.
    if (Number.isNaN(targetMs)) return;
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(id);
  }, [targetMs]);

  const left = now === null ? undefined : remaining(targetMs, now);

  // Mounted, and the date has gone. Hand back the caller's fallback so the
  // section around it keeps working rather than showing a frozen zero.
  if (now !== null && left === null) return <>{expired}</>;

  const dark = tone === "dark";

  const units = [
    { value: left?.days, label: "Days" },
    { value: left?.hours, label: "Hours" },
    { value: left?.minutes, label: "Mins" },
  ];

  return (
    <div>
      <p className="sr-only">The next intake begins on {targetLabel}.</p>
      {label && (
        <p
          aria-hidden="true"
          className={`mb-4 text-[0.625rem] font-semibold uppercase tracking-[0.14em] ${
            dark ? "text-white/55" : "text-[var(--color-muted)]"
          }`}
        >
          {label}
        </p>
      )}
      <div aria-hidden="true" className="flex gap-2.5 sm:gap-3">
        {units.map((unit) => (
          <div
            key={unit.label}
            className={`min-w-[4.75rem] rounded-[var(--radius-sm)] border px-3 py-3 text-center sm:min-w-[5.5rem] ${
              dark
                ? "border-white/15 bg-white/[0.06]"
                : "border-[var(--color-border)] bg-[var(--color-surface)]"
            }`}
          >
            <span
              className={`block font-display text-[2rem] font-bold leading-none tabular-nums sm:text-[2.5rem] ${
                dark ? "text-[var(--color-accent)]" : "text-[var(--color-accent-text)]"
              }`}
            >
              {unit.value === undefined
                ? "—"
                : String(unit.value).padStart(2, "0")}
            </span>
            <span
              className={`mt-2 block text-[0.625rem] font-semibold uppercase tracking-[0.14em] ${
                dark ? "text-white/55" : "text-[var(--color-muted)]"
              }`}
            >
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

import { ReactNode } from "react";

/*
 * Browser chrome around a screenshot.
 *
 * Every piece of ranking evidence on the site is a screenshot of a real tool —
 * Search Console, Ahrefs, Analytics. Dropped straight onto the page as a bare
 * landscape image they read as decoration, which was the 10 Aug complaint about
 * this page ("stuff like this" rather than evidence). Chrome around them says
 * "this is a screen somebody was looking at", and the address pill names the
 * tool so the source is attached to the picture instead of floating under it.
 *
 * Built from layout rather than an image so it stays crisp, costs nothing to
 * load, and inherits the brand ink instead of the pure black the house style
 * bans.
 *
 * Nests inside LaptopFrame — pass `flush` there so the two shells do not stack
 * two borders and two radii on top of each other.
 */
export default function BrowserFrame({
  children,
  label,
  caption,
  flush = false,
}: {
  children: ReactNode;
  /** What is on screen, shown in the address pill. A tool name, not a made-up
   *  URL — never invent a domain here. */
  label: string;
  /** Optional note in the footer, e.g. what the reader is looking at. */
  caption?: ReactNode;
  /** Drop the outer border, radius and shadow, for use inside a device shell. */
  flush?: boolean;
}) {
  return (
    <figure
      className={
        flush
          ? "m-0 bg-white"
          : "m-0 overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]"
      }
    >
      <div className="flex items-center gap-3 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-2.5">
        <span className="flex flex-shrink-0 gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[var(--color-muted-light)]" />
          <span className="h-2 w-2 rounded-full bg-[var(--color-muted-light)]" />
          <span className="h-2 w-2 rounded-full bg-[var(--color-muted-light)]" />
        </span>
        <span className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-[var(--color-border)]">
          <svg
            className="flex-shrink-0 text-[var(--color-muted)]"
            width="9"
            height="9"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <rect x="4" y="10" width="16" height="11" rx="2" />
            <path d="M8 10V7a4 4 0 018 0v3" />
          </svg>
          <span className="truncate text-[0.65rem] font-medium text-[var(--color-muted)]">
            {label}
          </span>
        </span>
      </div>

      <div className="bg-white">{children}</div>

      {caption && (
        <figcaption className="border-t border-[var(--color-border)] px-4 py-3 text-[0.7rem] leading-snug text-[var(--color-muted)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

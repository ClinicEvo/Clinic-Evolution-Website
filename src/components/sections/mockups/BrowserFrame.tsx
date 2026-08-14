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
  scrollOnMobile = false,
  scrollMinWidth = "42rem",
  scrollLabel = "Screenshot, scroll sideways to read",
}: {
  children: ReactNode;
  /** What is on screen, shown in the address pill. A tool name, not a made-up
   *  URL — never invent a domain here. */
  label: string;
  /** Optional note in the footer, e.g. what the reader is looking at. */
  caption?: ReactNode;
  /** Drop the outer border, radius and shadow, for use inside a device shell. */
  flush?: boolean;
  /** Hold the screenshot at a legible width on small screens and let it scroll
   *  sideways inside the frame, instead of shrinking it to nothing.
   *
   *  A dense tool export — an Ahrefs keyword table, say — scaled to a 340px
   *  column renders its type at about five pixels. It is not small, it is
   *  unreadable, which makes it decoration rather than evidence and defeats the
   *  point of showing it. Above `sm` the image goes back to filling its column,
   *  where there is room for it. RankingTable in CaseStudyCharts already uses
   *  overflow-x-auto for the same reason. */
  scrollOnMobile?: boolean;
  /** Width to hold the content at while scrolling. Wide enough that the type
   *  survives; past that the reader is scrolling further than it is worth. */
  scrollMinWidth?: string;
  /** Accessible name for the scroll region. */
  scrollLabel?: string;
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

      {scrollOnMobile ? (
        /* tabIndex makes a scroll container reachable without a pointer, which
           a keyboard user otherwise cannot pan. The `sm:` resets hand the image
           back to the column once there is width for it. */
        <div
          className="bg-white overflow-x-auto sm:overflow-x-visible"
          tabIndex={0}
          role="group"
          aria-label={scrollLabel}
        >
          <div className="sm:!min-w-0" style={{ minWidth: scrollMinWidth }}>
            {children}
          </div>
        </div>
      ) : (
        <div className="bg-white">{children}</div>
      )}

      {(caption || scrollOnMobile) && (
        <figcaption className="border-t border-[var(--color-border)] px-4 py-3 text-[0.7rem] leading-snug text-[var(--color-muted)]">
          {caption}
          {/* --color-muted, not --color-muted-light: this is an instruction, and
              the light grey is only about 1.6:1 on white. */}
          {scrollOnMobile && (
            <span className="mt-1 block font-medium text-[var(--color-muted)] sm:hidden">
              Scroll sideways to read the full table.
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}

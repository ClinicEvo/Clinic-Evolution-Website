import { ReactNode } from "react";

interface HeroChecklistPanelProps {
  title: string;
  items: string[];
  footer?: ReactNode;
  /** Numbered steps rather than ticks, for panels describing a sequence. */
  numbered?: boolean;
}

/** Fills the right half of a PageHero on pages that have no screenshot or
 *  dashboard to show. Same card language as HeroStatCard so the heroes across
 *  the site stay one family. */
export default function HeroChecklistPanel({ title, items, footer, numbered }: HeroChecklistPanelProps) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white overflow-hidden shadow-[var(--shadow-card)]">
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4">
        <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-muted)]">
          {title}
        </p>
      </div>
      <ul className="divide-y divide-[var(--color-border)]">
        {items.map((item, i) => (
          <li key={item} className="flex items-start gap-3 px-6 py-3.5">
            {numbered ? (
              <span
                aria-hidden="true"
                className="mt-px w-4 flex-shrink-0 font-display text-sm font-bold text-[var(--color-accent-text)]"
              >
                {i + 1}
              </span>
            ) : (
              <svg
                className="mt-1 flex-shrink-0 text-[var(--color-accent)]"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 7l3 3 6-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            <span className="text-sm leading-snug text-[var(--color-charcoal)]">{item}</span>
          </li>
        ))}
      </ul>
      {footer && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-accent-light)] px-6 py-4 text-sm text-[var(--color-charcoal)]">
          {footer}
        </div>
      )}
    </div>
  );
}

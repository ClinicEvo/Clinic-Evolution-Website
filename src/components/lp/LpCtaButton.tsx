"use client";

import { events } from "@/lib/analytics";
import { LP_CTA_LABEL, LP_FORM_ANCHOR } from "@/lib/lp";

type Size = "md" | "lg";

const sizes: Record<Size, string> = {
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

interface LpCtaButtonProps {
  /** Where on the page this button sits — used as the analytics event label. */
  placement: string;
  size?: Size;
  label?: string;
  className?: string;
}

/**
 * The only CTA on the landing page. Every instance points at the audit form
 * and reports its placement, so we can see which position actually converts.
 */
export default function LpCtaButton({
  placement,
  size = "lg",
  label = LP_CTA_LABEL,
  className = "",
}: LpCtaButtonProps) {
  return (
    <a
      href={LP_FORM_ANCHOR}
      onClick={() => events.auditCtaClick(placement)}
      style={{ fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.03rem" }}
      className={`inline-flex items-center justify-center gap-2 rounded-[4px] bg-[var(--color-accent-strong)] !text-white transition-all duration-200 hover:bg-[var(--color-accent-dim)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 whitespace-nowrap ${sizes[size]} ${className}`}
    >
      {label}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M3 7h8M8 4l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

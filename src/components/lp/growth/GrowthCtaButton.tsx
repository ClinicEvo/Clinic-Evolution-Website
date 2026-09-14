"use client";

import { events } from "@/lib/analytics";
import { GROWTH_CTA_LABEL, GROWTH_FORM_ANCHOR } from "@/lib/growth-system";
import { lpCtaBase, lpCtaBaseWrap, lpCtaSizes, type LpCtaSize } from "../LpCtaButton";

interface GrowthCtaButtonProps {
  /** Where on the page this button sits: the analytics event label. */
  placement: string;
  size?: LpCtaSize;
  label?: string;
  className?: string;
  /** Let a long label wrap instead of overflowing a phone screen. */
  wrap?: boolean;
}

/**
 * The only CTA on the Growth System pages. Same button as LpCtaButton, pointed
 * at the booking form instead of the audit form and reporting to its own
 * event, so the two funnels never share a conversion count.
 */
export default function GrowthCtaButton({
  placement,
  size = "lg",
  label = GROWTH_CTA_LABEL,
  className = "",
  wrap = false,
}: GrowthCtaButtonProps) {
  return (
    <a
      href={GROWTH_FORM_ANCHOR}
      onClick={() => events.growthCtaClick(placement)}
      style={{ fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.03rem" }}
      className={`${wrap ? `${lpCtaBaseWrap} text-center` : lpCtaBase} bg-[var(--color-accent-strong)] !text-white hover:bg-[var(--color-accent-dim)] ${lpCtaSizes[size]} ${className}`}
    >
      {label}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="flex-shrink-0">
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

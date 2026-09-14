"use client";

import { events } from "@/lib/analytics";
import { LP_CTA_LABEL, LP_FORM_ANCHOR } from "@/lib/lp";

type Size = "md" | "lg";

const sizes: Record<Size, string> = {
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

/**
 * Exported so GrowthCtaButton (src/components/lp/growth/) renders the same
 * button for a different destination without a second copy of these strings.
 * `lpCtaBaseWrap` is the same base without `whitespace-nowrap`, for the one
 * long label on the pricing section that has to wrap on a phone.
 */
export const lpCtaBaseWrap =
  "inline-flex items-center justify-center gap-2 rounded-[4px] transition-[background-color,color,border-color,transform] duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2";
export const lpCtaBase = `${lpCtaBaseWrap} whitespace-nowrap`;
export const lpCtaSizes = sizes;
export type LpCtaSize = Size;
const base = lpCtaBase;

interface LpCtaButtonProps {
  /** Where on the page this button sits — used as the analytics event label. */
  placement: string;
  size?: Size;
  label?: string;
  className?: string;
}

/**
 * The only CTA on these pages. Every instance points at the audit form and
 * reports its placement, so we can see which position actually converts.
 *
 * There is deliberately no second action beside it — see LP_PHONE for why
 * click-to-call was removed rather than restyled.
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
      className={`${base} bg-[var(--color-accent-strong)] !text-white hover:bg-[var(--color-accent-dim)] ${sizes[size]} ${className}`}
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

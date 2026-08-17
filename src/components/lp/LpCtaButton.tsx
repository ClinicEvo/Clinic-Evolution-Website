"use client";

import { PhoneIcon } from "@phosphor-icons/react/dist/icons/Phone";
import { events } from "@/lib/analytics";
import { LP_CTA_LABEL, LP_FORM_ANCHOR, LP_PHONE } from "@/lib/lp";

type Size = "md" | "lg";

const sizes: Record<Size, string> = {
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[4px] transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 whitespace-nowrap";

interface LpCtaButtonProps {
  /** Where on the page this button sits — used as the analytics event label. */
  placement: string;
  size?: Size;
  label?: string;
  className?: string;
}

/**
 * The primary CTA. Every instance points at the audit form and reports its
 * placement, so we can see which position actually converts.
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

/**
 * The second action, offered wherever the first one is.
 *
 * A clinic owner reading this on a phone between patients is more likely to call
 * than to fill in a form, and the phone number was previously a 15px text link
 * in the header only. `variant` decides how loudly it is drawn: "quiet" beside
 * the hero CTA, "outline" where it has to hold its own half of a split bar.
 *
 * Returns null when LP_PHONE is blanked out, so every call site can render it
 * unconditionally.
 */
export function LpCallButton({
  placement,
  size = "lg",
  variant = "quiet",
  className = "",
}: {
  placement: string;
  size?: Size;
  variant?: "quiet" | "outline";
  className?: string;
}) {
  if (!LP_PHONE.display || !LP_PHONE.href) return null;

  const skin =
    variant === "outline"
      ? "border border-[var(--color-border)] bg-[var(--color-paper)] text-[var(--color-ink)] hover:border-[var(--color-ink)] hover:bg-[var(--color-surface)]"
      : "text-[var(--color-ink)] hover:text-[var(--color-accent-text)]";

  return (
    <a
      href={LP_PHONE.href}
      onClick={() => events.phoneClick(placement)}
      style={{ fontWeight: "var(--font-weight-semibold)" }}
      className={`${base} ${skin} ${sizes[size]} ${className}`}
    >
      <PhoneIcon
        size={17}
        weight="fill"
        className="flex-shrink-0 text-[var(--color-accent-text)]"
      />
      <span>
        {variant === "outline" ? "Call us" : `Or call ${LP_PHONE.display}`}
      </span>
    </a>
  );
}

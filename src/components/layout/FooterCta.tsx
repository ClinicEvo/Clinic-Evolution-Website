"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ctaNav, resolveCtaHref } from "@/lib/nav";

/** Split out of Footer purely so the CTA can read the current route. On
 *  /free-clinic-audit/ the strip otherwise links to the page it is already on;
 *  resolveCtaHref points it at the form instead. Footer itself stays a server
 *  component. */
export default function FooterCta() {
  const href = resolveCtaHref(usePathname());

  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-10 mb-10"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div>
        <p className="font-display font-bold text-[1.35rem] leading-snug text-white mb-1">
          Find out where your clinic is losing patients.
        </p>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          Free audit, honest assessment within 2 business days. No jargon. No commitment.
        </p>
      </div>
      <Link
        href={href}
        className="flex-shrink-0 inline-flex items-center gap-2 bg-[var(--color-accent-strong)] text-white text-sm font-bold px-5 py-3 rounded-[4px] transition-opacity hover:opacity-90 whitespace-nowrap"
      >
        {ctaNav.label}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}

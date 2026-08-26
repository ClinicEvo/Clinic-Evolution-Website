"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { GOOGLE_TAG_IDS } from "@/lib/analytics";

const STORAGE_KEY = "ce-cookie-consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Push the visitor's choice into Google Consent Mode v2. All four signals are
 * sent together: ad_user_data and ad_personalization are required alongside
 * ad_storage for Google Ads conversion measurement in the UK/EEA, and omitting
 * any of them leaves that signal at its denied default.
 *
 * ad_storage is what lets a Google Ads conversion be tied back to the click
 * that caused it. Without it, conversions from paid campaigns are modelled
 * estimates rather than counted events.
 */
function updateConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  // Gate on "is any Google tag on the page", not on GA4 specifically. This read
  // NEXT_PUBLIC_GA4_ID, which meant a site running Google Ads without GA4
  // configured never granted consent at all — ad_storage stayed denied for
  // every visitor, and paid conversions stayed permanently modelled.
  if (GOOGLE_TAG_IDS.length === 0 || typeof window.gtag !== "function") return;
  const value = granted ? "granted" : "denied";
  window.gtag("consent", "update", {
    analytics_storage: value,
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setVisible(true);
    } else if (saved === "accepted") {
      updateConsent(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    updateConsent(true);
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    // Denied is already the default, but send it explicitly so the choice is
    // recorded rather than merely assumed.
    updateConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="cookie-in fixed z-50 inset-x-0 bottom-0 p-4 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:p-0"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto w-full max-w-sm bg-[var(--color-paper)] text-[var(--color-ink)] rounded-2xl p-5 shadow-[0_12px_40px_-8px_rgba(13,27,42,0.18)] border border-[var(--color-border)]">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          We use cookies to analyse site traffic, improve your experience and
          measure our advertising. Accepting also allows advertising cookies from
          Google. See our{" "}
          <Link
            href="/cookie-policy/"
            className="text-[var(--color-ink)] underline underline-offset-2 hover:text-[var(--color-accent)]"
          >
            Cookie Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex items-center gap-3">
          <Button size="sm" variant="secondary" onClick={accept} className="flex-1 sm:flex-initial">
            Accept cookies
          </Button>
          <button
            onClick={decline}
            className="flex-1 sm:flex-initial rounded-[4px] px-5 py-2.5 text-xs uppercase tracking-widest font-[var(--font-weight-semibold)] text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

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

/**
 * How long a visitor who does not scroll or touch anything waits before the
 * banner appears anyway.
 */
const REVEAL_AFTER_MS = 5000;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  /*
   * THE BANNER WAITS FOR THE FIRST SCROLL OR TAP (or five seconds), since
   * 9 Sep 2026. It used to mount immediately, which on a phone put a 217px
   * card over the bottom quarter of the first screen: on a 667px-tall phone
   * that covered the hero CTA on every paid landing page, and on an 844px one
   * it stacked with the sticky header and sticky CTA into 44% of the viewport.
   *
   * Nothing this delays needs consent to be lawful. Google Consent Mode
   * starts with all four signals denied (see the root layout), so no
   * advertising or analytics cookie is set until Accept is pressed, whenever
   * that is. The visitor simply gets to read the first screen before being
   * asked about cookies, which is what they came for.
   */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "accepted") {
      updateConsent(true);
      return;
    }
    if (saved) return;

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      setVisible(true);
      cleanup();
    };
    const timer = window.setTimeout(reveal, REVEAL_AFTER_MS);
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("pointerdown", reveal, { passive: true });
    window.addEventListener("keydown", reveal);
    const cleanup = () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("pointerdown", reveal);
      window.removeEventListener("keydown", reveal);
    };
    return cleanup;
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
      className="cookie-in fixed z-50 inset-x-0 bottom-0 p-3 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:p-0"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      {/* Tighter on a phone: smaller type, less padding, and one fewer clause
          in the sentence. This card is the one piece of chrome every first-time
          visitor meets, and on the paid pages every visitor is first-time. */}
      <div className="mx-auto w-full max-w-sm bg-[var(--color-paper)] text-[var(--color-ink)] rounded-2xl p-4 sm:p-5 shadow-[0_12px_40px_-8px_rgba(13,27,42,0.18)] border border-[var(--color-border)]">
        <p className="text-[13px] leading-snug sm:text-sm sm:leading-relaxed text-[var(--color-muted)]">
          We use cookies to analyse site traffic and measure our advertising.
          Accepting also allows advertising cookies from Google. See our{" "}
          <Link
            href="/cookie-policy/"
            className="text-[var(--color-ink)] underline underline-offset-2 hover:text-[var(--color-accent)]"
          >
            Cookie Policy
          </Link>
          .
        </p>
        <div className="mt-3 sm:mt-4 flex items-center gap-3">
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

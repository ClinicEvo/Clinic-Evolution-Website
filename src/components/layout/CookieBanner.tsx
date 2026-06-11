"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const STORAGE_KEY = "ce-cookie-consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function enableAnalytics() {
  if (typeof window === "undefined") return;
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
  if (!ga4Id || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
  });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setVisible(true);
    } else if (saved === "accepted") {
      enableAnalytics();
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    enableAnalytics();
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
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
          We use cookies to analyse site traffic and improve your experience. See
          our{" "}
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

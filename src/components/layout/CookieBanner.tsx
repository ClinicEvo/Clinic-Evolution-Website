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
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6"
    >
      <div className="max-w-2xl mx-auto bg-[var(--color-ink)] text-white rounded-2xl shadow-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-[var(--color-muted-light)] flex-1">
          We use cookies to analyse site traffic and improve your experience. See
          our{" "}
          <Link
            href="/cookie-policy/"
            className="text-white underline underline-offset-2 hover:text-[var(--color-accent-light)]"
          >
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-sm text-[var(--color-muted-light)] hover:text-white transition-colors underline underline-offset-2"
          >
            Decline
          </button>
          <Button size="sm" onClick={accept}>
            Accept cookies
          </Button>
        </div>
      </div>
    </div>
  );
}

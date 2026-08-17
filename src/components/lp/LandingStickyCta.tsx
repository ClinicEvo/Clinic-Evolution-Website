"use client";

import { useEffect, useState } from "react";
import { LP_FORM_ANCHOR, LP_PHONE } from "@/lib/lp";
import LpCtaButton, { LpCallButton } from "./LpCtaButton";

const SHOW_AFTER_PX = 520;
const FORM_ID = LP_FORM_ANCHOR.replace("#", "");
const COOKIE_BANNER = '[role="dialog"][aria-label="Cookie consent"]';

/**
 * Mobile sticky CTA. Appears once the hero (and its own CTA) has scrolled away,
 * gets out of the way again while the form is on screen so it never covers the
 * submit button, and sits above the cookie banner while that is up — every paid
 * visitor is a first-time visitor, so the two would otherwise always collide.
 *
 * Split into two actions where a phone number is configured. A clinic owner
 * reading this on a phone between patients is at least as likely to call as to
 * fill in a form, and calling was previously offered nowhere below the header.
 * The form keeps the wider half: it is still the measurable conversion, and the
 * call button only needs to fit two words.
 */
export default function LandingStickyCta() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [formInView, setFormInView] = useState(false);
  const [cookieBannerHeight, setCookieBannerHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolledPastHero(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const form = document.getElementById(FORM_ID);
    const observer = form
      ? new IntersectionObserver(
          ([entry]) => setFormInView(entry.isIntersecting),
          { rootMargin: "0px 0px -20% 0px" },
        )
      : null;
    if (form && observer) observer.observe(form);

    // The banner mounts after hydration and unmounts on consent, so watch for
    // both rather than measuring once.
    const measureCookieBanner = () => {
      const banner = document.querySelector(COOKIE_BANNER);
      setCookieBannerHeight(banner ? banner.getBoundingClientRect().height : 0);
    };
    measureCookieBanner();
    const mutations = new MutationObserver(measureCookieBanner);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
      mutations.disconnect();
    };
  }, []);

  const visible = scrolledPastHero && !formInView;

  return (
    <div
      aria-hidden={visible ? undefined : true}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-[var(--color-paper)]/95 px-4 py-3 backdrop-blur-sm transition-[opacity,transform] duration-300 lg:hidden ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        // Offset via transform only — never by animating `bottom`.
        transform: visible
          ? `translateY(-${Math.round(cookieBannerHeight)}px)`
          : "translateY(100%)",
      }}
    >
      {LP_PHONE.display ? (
        <div className="flex items-stretch gap-2">
          <LpCallButton
            placement="sticky-mobile"
            size="md"
            variant="outline"
            className="flex-shrink-0"
          />
          <LpCtaButton
            placement="sticky-mobile"
            size="md"
            label="Book a free audit"
            className="flex-1"
          />
        </div>
      ) : (
        <LpCtaButton placement="sticky-mobile" className="w-full" />
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import LpCtaButton from "./LpCtaButton";

const SHOW_AFTER_PX = 520;
/** Every audit form on the page carries this attribute; see LpAuditForm's callers. */
const FORM_SELECTOR = "[data-lp-form]";
const COOKIE_BANNER = '[role="dialog"][aria-label="Cookie consent"]';

/**
 * Mobile sticky CTA. Appears once the hero (and its own CTA) has scrolled away
 * and gets out of the way again whenever a form is on screen, so it never
 * covers a submit button.
 *
 * IT STAYS HIDDEN WHILE THE COOKIE BANNER IS UP. It used to translate itself
 * above the banner instead, and on a first visit, which every paid visitor is,
 * that stacked the sticky header, this bar and the banner into 371px of fixed
 * chrome on an 844px phone: 44% of the screen, with the proof strip's figures
 * underneath it. The header already carries the same action, so nothing is lost
 * by waiting for the banner to be answered.
 *
 * `invisible` alongside the opacity: an opacity-0 element is still in the tab
 * order, so a keyboard user was landing on a button they could not see.
 *
 * One full-width action. This was previously split with a "Call us" button
 * taking the left half; that was removed with the rest of the phone CTAs, since
 * the form is the only conversion these pages are for. See LP_PHONE.
 */
export default function LandingStickyCta() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [formsInView, setFormsInView] = useState(0);
  const [bannerUp, setBannerUp] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolledPastHero(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Two forms since 9 Sep 2026 (the audit pitch and the foot of the page), so
    // this counts rather than toggling.
    const inView = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inView.add(entry.target);
          else inView.delete(entry.target);
        }
        setFormsInView(inView.size);
      },
      { rootMargin: "0px 0px -20% 0px" },
    );
    document.querySelectorAll(FORM_SELECTOR).forEach((form) => observer.observe(form));

    // The banner mounts after hydration (and, since 9 Sep 2026, only after the
    // visitor scrolls or a few seconds pass) and unmounts on consent, so watch
    // for both rather than measuring once.
    const measureCookieBanner = () =>
      setBannerUp(document.querySelector(COOKIE_BANNER) !== null);
    measureCookieBanner();
    const mutations = new MutationObserver(measureCookieBanner);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  const visible = scrolledPastHero && formsInView === 0 && !bannerUp;

  return (
    <div
      aria-hidden={visible ? undefined : true}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-[var(--color-paper)]/95 px-4 py-3 backdrop-blur-sm transition-[opacity,transform,visibility] duration-300 lg:hidden ${
        visible ? "opacity-100" : "invisible pointer-events-none opacity-0"
      }`}
      style={{
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        // Offset via transform only, never by animating `bottom`.
        transform: visible ? "translateY(0)" : "translateY(100%)",
      }}
    >
      <LpCtaButton placement="sticky-mobile" className="w-full" />
    </div>
  );
}

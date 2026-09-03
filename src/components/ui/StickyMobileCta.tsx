"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ctaNav, resolveCtaHref } from "@/lib/nav";
import { events } from "@/lib/analytics";

const SHOW_AFTER_PX = 520;
const COOKIE_BANNER = '[role="dialog"][aria-label="Cookie consent"]';

/**
 * Persistent mobile CTA for long editorial pages.
 *
 * The sibling of LandingStickyCta, which solves the same problem for /lp/ routes
 * and is where the two awkward parts of this were worked out. The difference is
 * the input: this one takes its label and href from `ctaNav` so it stays in step
 * with the header and footer, rather than the /lp/-specific LP_CTA_LABEL.
 *
 * Why it exists: /seo-for-clinics/ runs ~29,000px on a 390px viewport. The
 * header CTA is `hidden lg:block`, so below 1024px the only way to act on the
 * page mid-scroll was to open the hamburger — measured at 15,263px between the
 * hero button and the next one. Desktop never had the problem, because the
 * sticky header keeps its CTA on screen the whole way down.
 *
 * Three things it has to coexist with, all of them fixed to the same corner:
 *   - CookieBanner, z-50, full width along the bottom on mobile. Measured rather
 *     than assumed, because it mounts after hydration and unmounts on consent.
 *   - WhatsAppButton, z-40, bottom-right. It reads --sticky-cta-h to lift itself
 *     clear; that variable is published here.
 *   - The page's own closing CTASection. The bar retracts while that is on
 *     screen, so the reader is never offered the same action twice at once.
 */
export default function StickyMobileCta({
  /** id of the element that should suppress the bar while it is in view —
   *  normally the closing CTASection. */
  hideNearId,
  label = ctaNav.label,
  href: hrefOverride,
}: {
  hideNearId?: string;
  label?: string;
  /** Overrides the site-wide CTA target. Set on pages whose conversion is not
   *  the free audit — /graduate/ sends this bar to its own application form,
   *  and offering an audit there would be the wrong ask. */
  href?: string;
}) {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [targetInView, setTargetInView] = useState(false);
  const [cookieBannerHeight, setCookieBannerHeight] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const href = hrefOverride ?? resolveCtaHref(pathname);

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const target = hideNearId ? document.getElementById(hideNearId) : null;
    const observer = target
      ? new IntersectionObserver(([entry]) => setTargetInView(entry.isIntersecting), {
          rootMargin: "0px 0px -20% 0px",
        })
      : null;
    if (target && observer) observer.observe(target);

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
  }, [hideNearId]);

  const visible = scrolledPast && !targetInView;

  /* Publish the bar's height so WhatsAppButton can sit above it instead of on
     top of it. Zero when hidden, so the bubble drops back to its normal place. */
  useEffect(() => {
    const root = document.documentElement;
    const height = visible ? (barRef.current?.offsetHeight ?? 0) : 0;
    root.style.setProperty("--sticky-cta-h", `${Math.round(height)}px`);
    return () => {
      root.style.removeProperty("--sticky-cta-h");
    };
  }, [visible]);

  return (
    <div
      ref={barRef}
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
      <a
        href={href}
        tabIndex={visible ? undefined : -1}
        onClick={() => events.auditCtaClick("sticky-mobile")}
        className="flex w-full items-center justify-center rounded-[4px] bg-[var(--color-accent-strong)] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[var(--color-accent-dim)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-strong)] focus-visible:ring-offset-2"
      >
        {label}
      </a>
    </div>
  );
}

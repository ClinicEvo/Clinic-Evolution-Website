"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { mainNav, ctaNav } from "@/lib/nav";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const light = !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-paper)]/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="cx-main">
        <nav
          ref={navRef}
          className="flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* Wordmark */}
          <Link
            href="/"
            className={`font-brand text-2xl transition-colors duration-200 flex-shrink-0 ${
              light
                ? "text-white hover:text-[var(--color-accent)]"
                : "text-[var(--color-ink)] hover:text-[var(--color-accent)]"
            }`}
            aria-label="ClinicEvo home"
            onClick={() => setMobileOpen(false)}
          >
            ClinicEvo
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {mainNav.map((item) => (
              <li key={item.href} className="relative group/nav">
                {item.children ? (
                  <>
                    <button
                      className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                        openDropdown === item.label
                          ? "text-[var(--color-accent)]"
                          : light
                          ? "text-white/80 hover:text-white"
                          : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                      }`}
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        aria-hidden="true"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className={`transition-transform duration-150 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      >
                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <ul
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-[var(--color-border)] py-1.5 z-10"
                        role="list"
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface)] transition-colors duration-100"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                      light
                        ? "text-white/80 hover:text-white"
                        : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            {light ? (
              <Link
                href={ctaNav.href}
                className="hidden lg:inline-flex items-center justify-center font-sans font-semibold rounded-lg px-4 py-2 text-sm border border-white/40 text-white hover:bg-white/10 hover:border-white/70 transition-colors duration-150 whitespace-nowrap"
              >
                {ctaNav.label}
              </Link>
            ) : (
              <Button href={ctaNav.href} size="sm" className="hidden lg:inline-flex">
                {ctaNav.label}
              </Button>
            )}
            <button
              className={`lg:hidden p-2 rounded-md transition-colors ${
                light
                  ? "text-white hover:bg-white/10"
                  : "text-[var(--color-ink)] hover:bg-[var(--color-surface)]"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-[var(--color-paper)] z-40 overflow-y-auto border-t border-[var(--color-border)]">
          <div className="cx-main py-6 flex flex-col">
            {mainNav.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <>
                    <p className="px-3 pt-5 pb-2 text-label text-[var(--color-muted-light)]">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-3 text-base font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] rounded-md transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-3.5 text-base font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] border-b border-[var(--color-border)] last:border-0 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6">
              <Button href={ctaNav.href} size="lg" className="w-full" onClick={() => setMobileOpen(false)}>
                {ctaNav.label}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

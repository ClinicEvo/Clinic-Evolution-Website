"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { mainNav, ctaNav } from "@/lib/nav";
import Button from "@/components/ui/Button";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[var(--color-ink)] text-white/70 text-[0.7rem] font-medium tracking-wide text-center py-2 px-4 hidden sm:block">
        Founded inside a working MSK clinic. Built exclusively for UK osteopaths, physiotherapists and chiropractors.
      </div>

      {/* Main header */}
      <header className="bg-[var(--color-paper)] border-b border-[var(--color-surface)] py-4 lg:py-5">
        <div className="cx-main">
          <nav
            ref={navRef}
            className="flex items-center justify-between"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-none group"
              aria-label="ClinicEvo home"
              onClick={() => setMobileOpen(false)}
            >
              <span
                className="text-[1.6rem] text-[var(--color-ink)] transition-colors duration-200 leading-none"
                style={{ fontFamily: "var(--font-dm-sans-medium)", letterSpacing: "0.1em", fontWeight: 700 }}
              >
                clinic <span style={{ color: "#6B21A8" }}>evo</span>
              </span>
              <span className="text-[0.55rem] font-bold tracking-[0.18em] uppercase text-[var(--color-muted)] mt-0.5">
                Patient Acquisition &amp; Retention Systems
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1" role="list">
              {mainNav.map((item) => (
                <li key={item.label} className="relative">
                  {item.children ? (
                    <>
                      <button
                        className={`flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium transition-colors rounded-md ${
                          openDropdown === item.label
                            ? "bg-[var(--color-surface)]"
                            : "hover:bg-[var(--color-surface)]"
                        }`}
                        style={{
                          color: openDropdown === item.label ? "#111827" : "#6B7280",
                          letterSpacing: "0.01em",
                        }}
                        aria-haspopup="true"
                        aria-expanded={openDropdown === item.label}
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.label ? null : item.label)
                        }
                      >
                        {item.label}
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                        >
                          <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {openDropdown === item.label && (
                        <ul className="absolute top-full left-0 mt-2 w-72 bg-white border border-[var(--color-surface)] rounded-xl shadow-lg p-2 z-10">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-4 py-3 rounded-lg hover:bg-[var(--color-paper)] transition-colors group"
                                onClick={() => setOpenDropdown(null)}
                              >
                                <p className="text-sm font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors mb-0.5">
                                  {child.label}
                                </p>
                                {child.description && (
                                  <p className="text-xs text-[var(--color-muted)] leading-snug">
                                    {child.description}
                                  </p>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 rounded-md transition-colors hover:bg-[var(--color-surface)]"
                      style={{ fontSize: "14px", fontWeight: 500, color: "#6B7280", letterSpacing: "0.01em" }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Button href={ctaNav.href} size="md" className="hidden lg:inline-flex" style={{ letterSpacing: "0.03em", background: "#6B21A8", borderRadius: "8px" }}>
                {ctaNav.label}
              </Button>

              <button
                className="lg:hidden p-2 text-[var(--color-ink)]"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {mobileOpen ? (
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div id="mobile-menu" className="lg:hidden fixed inset-0 top-[73px] bg-white z-40 p-6 overflow-y-auto">
            <ul className="flex flex-col gap-6">
              {mainNav.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] mb-3">
                        {item.label}
                      </p>
                      <ul className="flex flex-col gap-3 pl-4 border-l-2 border-[var(--color-surface)]">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="text-base font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-lg font-bold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-6 border-t border-[var(--color-surface)]">
                <Button href={ctaNav.href} size="lg" className="w-full">
                  {ctaNav.label}
                </Button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

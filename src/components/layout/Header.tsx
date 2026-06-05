"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Monitor,
  MagnifyingGlass,
  Target,
  ChatCircleDots,
  Phone,
  Sparkle,
  ChartLineUp,
  type Icon,
} from "@phosphor-icons/react";
import { mainNav, ctaNav } from "@/lib/nav";
import Button from "@/components/ui/Button";

type AnyIcon = Icon | React.ComponentType<{ size?: number }>;

const OsteopathIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v5" />
    <path d="M9 12c0 0-2 1-2 4s2 4 2 4" />
    <path d="M15 12c0 0 2 1 2 4s-2 4-2 4" />
    <path d="M10 20h4" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);

const PhysioIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="4" r="2" />
    <path d="M6 8l3 2 1 4-3 7" />
    <path d="M18 8l-3 2-1 4 3 7" />
    <path d="M9 10h6" />
  </svg>
);

const ChiroIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3c-1 0-2 .5-2 1.5S11 6 12 6s2-.5 2-1.5S13 3 12 3z" />
    <path d="M12 6c-1 0-2 .5-2 1.5S11 9 12 9s2-.5 2-1.5S13 6 12 6z" />
    <path d="M12 9c-1 0-2 .5-2 1.5S11 12 12 12s2-.5 2-1.5S13 9 12 9z" />
    <path d="M12 12c-1 0-2 .5-2 1.5S11 15 12 15s2-.5 2-1.5S13 12 12 12z" />
    <path d="M12 15c-1 0-2 .5-2 1.5S11 18 12 18s2-.5 2-1.5S13 15 12 15z" />
    <path d="M10 4.5 Q8 8 8 12 Q8 16 10 19.5" />
    <path d="M14 4.5 Q16 8 16 12 Q16 16 14 19.5" />
  </svg>
);

const iconMap: Record<string, AnyIcon> = {
  Monitor,
  MagnifyingGlass,
  Target,
  ChatCircleDots,
  Phone,
  Sparkle,
  ChartLineUp,
  OsteopathIcon,
  PhysioIcon,
  ChiroIcon,
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      clearCloseTimer();
    };
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[var(--color-ink)] text-white/70 text-[0.7rem] font-medium tracking-wide text-center py-2 px-4 hidden sm:block">
        Founded inside a working MSK clinic. Built exclusively for UK osteopaths, physiotherapists and chiropractors.
      </div>

      {/* Main header */}
      <header className="bg-[var(--color-paper)] border-b border-[var(--color-border)] py-4 lg:py-5">
        <div className="cx-main relative">
          <nav
            ref={navRef}
            className="flex items-center justify-between"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-none group"
              aria-label="Clinic Evo home"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src="/images/cevo_newlogo.png"
                alt="Clinic Evo"
                width={180}
                height={52}
                style={{ objectFit: "contain" }}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1" role="list">
              {mainNav.map((item) => {
                const hasMenu = Boolean(item.groups || item.children);
                return (
                  <li
                    key={item.label}
                    className={item.groups ? "static" : "relative"}
                    onMouseEnter={
                      hasMenu
                        ? () => {
                            clearCloseTimer();
                            setOpenDropdown(item.label);
                          }
                        : undefined
                    }
                    onMouseLeave={hasMenu ? scheduleClose : undefined}
                  >
                    {hasMenu ? (
                      <>
                        <button
                          className={`flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium transition-colors ${
                            openDropdown === item.label
                              ? "bg-[var(--color-surface)]"
                              : "hover:bg-[var(--color-surface)]"
                          }`}
                          style={{
                            color: "var(--color-ink)",
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

                        {/* Mega-menu (grouped) — aligned with logo + CTA */}
                        {item.groups && openDropdown === item.label && (
                          <div className="absolute top-full left-10 right-10 mt-2 z-10">
                            <div className="mega-in bg-[var(--color-paper)] border border-[var(--color-border)] shadow-[var(--shadow-md)] rounded-[var(--radius-card)] overflow-hidden">
                              <div className="flex">
                                  <div className="grid grid-cols-3 gap-x-8 gap-y-6 p-8 flex-1">
                                    {item.groups.map((group) => (
                                      <div key={group.label}>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)] mb-3">
                                          {group.label}
                                        </p>
                                        <ul className="flex flex-col gap-1">
                                          {group.items.map((child) => {
                                            const IconCmp = child.icon ? iconMap[child.icon] : null;
                                            return (
                                              <li key={child.href}>
                                                <Link
                                                  href={child.href}
                                                  className="flex gap-3 -mx-2 px-2 py-2 rounded-md hover:bg-[var(--color-surface)] transition-colors group"
                                                  onClick={() => setOpenDropdown(null)}
                                                >
                                                  {IconCmp && (
                                                    <span className="mt-0.5 shrink-0 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors">
                                                      <IconCmp size={17} weight="regular" />
                                                    </span>
                                                  )}
                                                  <span className="block">
                                                    <span className="block text-[13px] font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors mb-0.5 leading-tight">
                                                      {child.label}
                                                    </span>
                                                    {child.description && (
                                                      <span className="block text-[11px] text-[var(--color-muted)] leading-normal font-light">
                                                        {child.description}
                                                      </span>
                                                    )}
                                                  </span>
                                                </Link>
                                              </li>
                                            );
                                          })}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>

                                  {item.callout && (
                                    <Link
                                      href={item.callout.href}
                                      onClick={() => setOpenDropdown(null)}
                                      className="flex flex-col justify-between w-[260px] flex-shrink-0 py-8 pl-8 border-l border-[var(--color-border)] group"
                                      style={{ background: "linear-gradient(180deg, #fff 0%, var(--color-accent-light) 100%)" }}
                                    >
                                      <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dim)] mb-2">
                                          {item.callout.eyebrow}
                                        </p>
                                        <p className="text-[17px] font-semibold leading-snug mb-2 text-[var(--color-ink)]">
                                          {item.callout.title}
                                        </p>
                                        <p className="text-[11px] text-[var(--color-charcoal)] leading-normal font-light">
                                          {item.callout.description}
                                        </p>
                                      </div>
                                      <span className="inline-flex items-center gap-1.5 mt-5 px-3.5 py-2 text-[12px] font-semibold text-white rounded-md bg-[var(--color-accent)] group-hover:bg-[var(--color-accent-dim)] transition-colors self-start">
                                        {item.callout.ctaLabel}
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-0.5">
                                          <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      </span>
                                    </Link>
                                  )}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Simple dropdown (flat children) */}
                        {item.children && openDropdown === item.label && (
                          <div className="absolute top-full left-0 mt-2 z-10">
                            <ul className="mega-in w-72 bg-[var(--color-paper)] border border-[var(--color-border)] shadow-[var(--shadow-md)] rounded-[var(--radius-card)] overflow-hidden divide-y divide-[var(--color-border)]">
                              {item.children.map((child) => {
                                const IconCmp = child.icon ? iconMap[child.icon] : null;
                                return (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      className="flex gap-3 px-5 py-4 hover:bg-[var(--color-surface)] transition-colors group"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {IconCmp && (
                                        <span className="mt-0.5 shrink-0 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors">
                                          <IconCmp size={17} />
                                        </span>
                                      )}
                                      <span>
                                        <span className="block text-[13px] font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors mb-0.5 leading-tight">
                                          {child.label}
                                        </span>
                                        {child.description && (
                                          <span className="block text-[11px] text-[var(--color-muted)] leading-normal font-light">
                                            {child.description}
                                          </span>
                                        )}
                                      </span>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 transition-colors hover:bg-[var(--color-surface)]"
                        style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-ink)", letterSpacing: "0.01em" }}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Button href={ctaNav.href} size="md" className="hidden lg:inline-flex" style={{ letterSpacing: "0.03em", background: "#ff5b4a" }}>
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
                  {item.groups ? (
                    <>
                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] mb-4">
                        {item.label}
                      </p>
                      <div className="flex flex-col gap-5 pl-4 border-l-2 border-[var(--color-surface)]">
                        {item.groups.map((group) => (
                          <div key={group.label}>
                            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)] mb-2">
                              {group.label}
                            </p>
                            <ul className="flex flex-col gap-3">
                              {group.items.map((child) => {
                                const IconCmp = child.icon ? iconMap[child.icon] : null;
                                return (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      className="flex items-center gap-2.5 text-base font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {IconCmp && (
                                        <IconCmp size={18} weight="regular" className="shrink-0 text-[var(--color-muted)]" />
                                      )}
                                      {child.label}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {item.callout && (
                        <Link
                          href={item.callout.href}
                          onClick={() => setMobileOpen(false)}
                          className="mt-5 flex flex-col gap-1 p-5 rounded-md border border-[var(--color-border)]"
                          style={{ background: "linear-gradient(180deg, #fff 0%, var(--color-accent-light) 100%)" }}
                        >
                          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dim)]">
                            {item.callout.eyebrow}
                          </span>
                          <span className="text-[15px] font-semibold leading-snug text-[var(--color-ink)]">
                            {item.callout.title}
                          </span>
                          <span className="mt-1 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--color-accent-dim)]">
                            {item.callout.ctaLabel}
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </Link>
                      )}
                    </>
                  ) : item.children ? (
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

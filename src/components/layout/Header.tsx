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
    <rect x="8" y="2" width="8" height="4" rx="1.5" />
    <path d="M9 6 Q12 7.5 15 6" />
    <rect x="7" y="8" width="10" height="4" rx="1.5" />
    <path d="M8 12 Q12 13.5 16 12" />
    <rect x="8" y="14" width="8" height="4" rx="1.5" />
    <path d="M10 18 Q12 21 14 18" />
  </svg>
);

const PhysioIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="10" width="3" height="4" rx="1" />
    <rect x="5" y="8" width="2" height="8" rx="1" />
    <line x1="7" y1="12" x2="17" y2="12" />
    <rect x="17" y="8" width="2" height="8" rx="1" />
    <rect x="19" y="10" width="3" height="4" rx="1" />
  </svg>
);

const ChiroIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2 L12 7" />
    <rect x="9" y="7" width="6" height="10" rx="1.5" />
    <path d="M12 17 L12 22" />
    <path d="M2 12 L7 12" />
    <path d="M4.5 9.5 L7.5 12 L4.5 14.5" />
    <path d="M22 12 L17 12" />
    <path d="M19.5 9.5 L16.5 12 L19.5 14.5" />
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
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
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
                          <div className="absolute top-full left-0 right-0 mt-2 z-10">
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
              <div className="hidden lg:block">
                <Button href={ctaNav.href} size="md" style={{ letterSpacing: "0.03em", background: "#ff5b4a" }}>
                  {ctaNav.label}
                </Button>
              </div>

              <button
                className="lg:hidden p-2 text-[var(--color-ink)]"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => { setMobileOpen(!mobileOpen); if (mobileOpen) setMobileExpanded(null); }}
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
          <div id="mobile-menu" className="lg:hidden fixed inset-0 top-[73px] bg-white z-40 overflow-y-auto flex flex-col">
            {/* Nav rows */}
            <ul role="list" className="flex-1 border-t border-[var(--color-border)]">
              {mainNav.map((item) => {
                const hasMenu = Boolean(item.groups || item.children);
                const isExpanded = mobileExpanded === item.label;
                const flatItems = item.groups
                  ? item.groups.flatMap((g) => g.items)
                  : item.children ?? [];
                return (
                  <li key={item.label} className="border-b border-[var(--color-border)]">
                    {hasMenu ? (
                      <>
                        <button
                          className="flex w-full items-center justify-between px-6 py-4 text-left"
                          onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                          aria-expanded={isExpanded}
                        >
                          <span className="text-[15px] font-semibold text-[var(--color-ink)]">{item.label}</span>
                          <svg
                            width="16" height="16" viewBox="0 0 16 16" fill="none"
                            className={`text-[var(--color-muted)] transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                            aria-hidden="true"
                          >
                            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        {isExpanded && (
                          <ul className="border-t border-[var(--color-border)]" role="list">
                            {flatItems.map((child) => {
                              const IconCmp = child.icon ? iconMap[child.icon] : null;
                              return (
                                <li key={child.href} className="border-b border-[var(--color-border)] last:border-b-0">
                                  <Link
                                    href={child.href}
                                    className="flex items-center px-6 py-3.5 gap-3 group"
                                    onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                                  >
                                    {IconCmp && (
                                      <span className="shrink-0 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors">
                                        <IconCmp size={16} />
                                      </span>
                                    )}
                                    <span className="text-[14px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                                      {child.label}
                                    </span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href!}
                        className="flex items-center px-6 py-4 group"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="text-[15px] font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                          {item.label}
                        </span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Callout card + CTA — pinned to bottom */}
            <div className="p-6 flex flex-col gap-4 border-t border-[var(--color-border)]">
              {mainNav.filter((item) => item.callout).map((item) => (
                <Link
                  key={item.callout!.href}
                  href={item.callout!.href}
                  onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                  className="flex flex-col gap-1 p-5 rounded-[var(--radius-card)] border border-[var(--color-border)]"
                  style={{ background: "linear-gradient(180deg, #fff 0%, var(--color-accent-light) 100%)" }}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dim)]">
                    {item.callout!.eyebrow}
                  </span>
                  <span className="text-[15px] font-semibold leading-snug text-[var(--color-ink)]">
                    {item.callout!.title}
                  </span>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--color-accent-dim)]">
                    {item.callout!.ctaLabel}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              ))}
              <Button href={ctaNav.href} size="lg" className="w-full">
                {ctaNav.label}
              </Button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

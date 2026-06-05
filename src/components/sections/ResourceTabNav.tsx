"use client";

import { useEffect, useState } from "react";

const tabs = [
  { label: "Patient Acquisition", href: "#patient-acquisition", id: "patient-acquisition" },
  { label: "Growth Strategy",     href: "#growth-strategy",     id: "growth-strategy"     },
  { label: "SEO",                 href: "#clinic-seo",          id: "clinic-seo"          },
  { label: "Google Ads",          href: "#google-ads",          id: "google-ads"          },
  { label: "Case Studies",        href: "#case-studies",        id: "case-studies"        },
];

export default function ResourceTabNav() {
  const [active, setActive] = useState<string>(tabs[0].id);

  useEffect(() => {
    // Track which sections are currently intersecting, then pick the topmost one
    const visible = new Set<string>();

    const update = () => {
      const first = tabs.find(({ id }) => visible.has(id));
      if (first) setActive(first.id);
    };

    const observers: IntersectionObserver[] = [];

    tabs.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visible.add(id);
          } else {
            visible.delete(id);
          }
          update();
        },
        { rootMargin: "-10% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="sticky z-40 bg-[var(--color-surface)] border-y border-[var(--color-border)]"
      style={{ top: "110px" }}
      aria-label="Resource sections"
    >
      <div className="cx-main">
        <div className="flex items-center gap-3 py-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] whitespace-nowrap hidden sm:block pr-3 border-r border-[var(--color-border)]">
            Browse by topic
          </span>

          {/* Scrollable pill row with right-edge fade */}
          <div className="relative flex-1 min-w-0">
            <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-6">
              {tabs.map(({ label, href, id }) => {
                const isActive = active === id;
                return (
                  <a
                    key={id}
                    href={href}
                    className={[
                      "flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold",
                      "border transition-all whitespace-nowrap",
                      isActive
                        ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                        : "bg-white text-[var(--color-ink)] border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
                    ].join(" ")}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
            <div
              className="absolute right-0 top-0 bottom-0 w-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, var(--color-surface), transparent)" }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

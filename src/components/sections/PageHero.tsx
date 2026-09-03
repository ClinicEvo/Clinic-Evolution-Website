import { CSSProperties, ReactNode } from "react";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import Breadcrumb from "@/components/sections/Breadcrumb";
import Link from "next/link";

interface PageHeroProps {
  badge: string;
  heading: ReactNode;
  subtext: string;
  bullets?: string[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  rightPanel?: ReactNode;
  breadcrumbs?: Array<{ label: string; href: string }>;
  compactBottom?: boolean;
  rightPanelWidth?: string;
  /** Render the bullets as one full-width row beneath the grid instead of inside
   *  the copy column. The copy column is only ~530px at 1440, so three bullets of
   *  any real length wrap to a stack there; full width they sit across. */
  bulletsBelow?: boolean;
  /** Let the right panel run past the container to the right edge of the screen
   *  at >=1024px. The geometry lives in `.hero-bleed-r` in globals.css. The panel
   *  keeps its own corner radius and border, so a bleeding panel should drop the
   *  ones on its trailing edge itself. */
  rightPanelBleed?: boolean;
}

export default function PageHero({
  badge,
  heading,
  subtext,
  bullets,
  primaryCta,
  secondaryCta,
  rightPanel,
  breadcrumbs,
  compactBottom,
  rightPanelWidth = "480px",
  bulletsBelow = false,
  rightPanelBleed = false,
}: PageHeroProps) {
  const bulletRow =
    bullets && bullets.length > 0 ? (
      <FadeUp delay={0.2}>
        <div className="flex flex-col flex-wrap gap-x-10 gap-y-2.5 sm:flex-row">
          {bullets.map((b) => (
            <div key={b} className="flex items-center gap-2">
              <svg
                className="flex-shrink-0 text-[var(--color-accent)]"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 7l3 3 6-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-medium text-[var(--color-charcoal)]">{b}</span>
            </div>
          ))}
        </div>
      </FadeUp>
    ) : null;

  return (
    <section className={`grain bg-[var(--color-paper)] pt-10 sm:pt-12 lg:pt-14 ${compactBottom ? "pb-6 lg:pb-8" : "pb-20 sm:pb-24 lg:pb-28"}`}>
      <div className="cx-main">
        {breadcrumbs && (
          <FadeUp>
            <Breadcrumb items={breadcrumbs} />
          </FadeUp>
        )}

        <div
          className={`grid gap-12 lg:gap-16 items-center ${breadcrumbs ? "mt-6" : ""} ${rightPanel ? "lg:grid-cols-[var(--hero-right-w)]" : ""}`}
          style={rightPanel ? ({ "--hero-right-w": `1fr ${rightPanelWidth}` } as CSSProperties) : undefined}
        >
          {/* Left, copy.
              min-w-0 matters: a grid item defaults to min-width:auto, so a wide
              right-hand panel (PulsePipelineBoard carries min-w-[34rem]) stretches
              the single mobile track past the viewport and drags the h1 with it,
              clipping hero copy on every phone. */}
          <div className="min-w-0">
            <FadeUp delay={0.03}>
              <p className="eyebrow mb-6">{badge}</p>
            </FadeUp>
            <FadeUp delay={0.07}>
              <h1 className="text-h1 tracking-[-0.025em] text-[var(--color-ink)] mb-6 max-w-2xl">
                {heading}
              </h1>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="text-body-lg text-[var(--color-charcoal)] mb-8 max-w-xl leading-relaxed">
                {subtext}
              </p>
            </FadeUp>
            <FadeUp delay={0.16}>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8">
                <Button href={primaryCta.href} size="lg">{primaryCta.label}</Button>
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="text-sm font-bold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2"
                  >
                    {secondaryCta.label}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                )}
              </div>
            </FadeUp>
            {bulletRow && !bulletsBelow && bulletRow}
          </div>

          {/* Right, optional panel */}
          {rightPanel && (
            <FadeUp
              delay={0.22}
              className={`min-w-0 ${rightPanelBleed ? "hero-bleed-r" : ""}`}
            >
              <div className="min-w-0">{rightPanel}</div>
            </FadeUp>
          )}
        </div>

        {bulletRow && bulletsBelow && (
          <div className="mt-12 border-t border-[var(--color-border)] pt-8">
            {bulletRow}
          </div>
        )}
      </div>
    </section>
  );
}

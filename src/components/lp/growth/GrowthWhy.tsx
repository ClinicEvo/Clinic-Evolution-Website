import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import { GROWTH_WHY } from "@/lib/growth-system";

/**
 * Section 06, "Why Clinic Evolution": MSK specialism and Bodyfunction as the
 * development clinic. [src: lp brief, p5 and p8] Every fact in the copy is
 * sourced in GROWTH_WHY's docblock.
 *
 * Same shape as LandingFounder: portrait and credentials left, the argument
 * right. It sits after the product and before the proof because a reader who
 * has just read seven inclusions wants to know who is behind them before
 * being shown the numbers.
 */
export default function GrowthWhy() {
  const { heading, paragraphs, portrait } = GROWTH_WHY;

  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] py-24 sm:py-28 lg:py-32">
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <FadeUp>
            <div className="lg:sticky lg:top-28">
              <div className="max-w-[280px] overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] shadow-[var(--shadow-card)] lg:max-w-none">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  width={1000}
                  height={1000}
                  sizes="(max-width: 1024px) 280px, 28vw"
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-5 max-w-[280px] lg:max-w-none">
                <p className="text-h4 text-[var(--color-ink)]">{portrait.name}</p>
                <p className="text-body-sm text-[var(--color-muted)]">{portrait.role}</p>
              </div>
            </div>
          </FadeUp>

          <div>
            <FadeUp delay={0.06}>
              <p className="eyebrow mb-5">Why Clinic Evolution</p>
              <h2 className="text-h2 mb-7 text-[var(--color-ink)]">
                {heading.start}
                <em className="not-italic text-[var(--color-accent)]">{heading.accent}</em>
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex max-w-[62ch] flex-col gap-5">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-body-lg text-[var(--color-muted)]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

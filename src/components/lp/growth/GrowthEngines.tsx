import FadeUp from "@/components/ui/FadeUp";
import { brandHex, brandMarks, brandTitle } from "@/components/icons/BrandIcons";
import {
  GROWTH_ENGINES,
  GROWTH_SECTION_ANCHORS,
  GROWTH_SUPPORTING_LINE,
} from "@/lib/growth-system";
import GrowthCtaButton from "./GrowthCtaButton";

/**
 * Section 03, "The system": four growth engines presented as one integrated
 * product, not a list of unrelated agency services. [src: lp brief, p5–6]
 *
 * One ordered list under one heading, the shape LandingSystem settled on: a
 * continuous rule down the left so the four read as stages of one thing
 * rather than four cards. Each row carries the brief's two columns, what we
 * deliver and the outcome, with the engine name as the h3.
 *
 * The brand marks are the only glyphs. Four platform names in a sentence are
 * abstract; four logos are concrete at a glance.
 */
export default function GrowthEngines() {
  return (
    <section
      id={GROWTH_SECTION_ANCHORS.system.slice(1)}
      tabIndex={-1}
      className="scroll-mt-20 focus-visible:outline-none border-b border-[var(--color-border)] bg-[var(--color-surface)] py-24 sm:py-28 lg:py-32"
    >
      <div className="cx-main">
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <FadeUp>
            <div>
              <p className="eyebrow mb-5">The system</p>
              <h2 className="text-h2 text-[var(--color-ink)]">
                Four growth engines,{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  run as one system
                </em>
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div>
              <p className="text-body-lg mb-5 text-[var(--color-muted)]">
                Each of these is something you could buy from a separate
                supplier. Buy them that way and the gaps between them belong to
                you: the enquiry the ads produced that the website lost, the
                patient the website booked that nobody followed up.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                <strong className="font-semibold text-[var(--color-ink)]">
                  We build all four, connect them, and run them as one.
                </strong>{" "}
                The same team is answerable for the whole route from a local
                search to a patient in your diary, and back again when they are
                due to return.
              </p>
            </div>
          </FadeUp>
        </div>

        <ol role="list" className="relative flex flex-col">
          {GROWTH_ENGINES.map((engine, index) => (
            <li
              key={engine.name}
              className="group relative border-t border-[var(--color-border)] py-7 last:border-b sm:py-8"
            >
              <FadeUp delay={index * 0.06} className="flex gap-5 sm:gap-8">
                <span
                  aria-hidden="true"
                  className="w-7 flex-shrink-0 pt-1 font-display text-sm font-semibold tabular-nums text-[var(--color-muted-light)]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="grid flex-1 grid-cols-1 gap-x-10 gap-y-4 lg:grid-cols-[0.7fr_1.1fr_0.9fr]">
                  <div>
                    <h3 className="text-h3 text-[var(--color-ink)]">{engine.name}</h3>
                    {engine.platforms.length > 0 ? (
                      <ul role="list" className="mt-3 flex items-center gap-3.5">
                        {engine.platforms.map((slug) => {
                          const Mark = brandMarks[slug];
                          return (
                            <li key={slug}>
                              <Mark className="h-[18px] w-[18px]" style={{ color: brandHex[slug] }} />
                              <span className="sr-only">{brandTitle[slug]}</span>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </div>

                  <div>
                    <p className="text-label mb-2 text-[var(--color-muted)]">What we deliver</p>
                    <p className="text-body max-w-[52ch] text-[var(--color-charcoal)]">
                      {engine.delivers}
                    </p>
                  </div>

                  <div>
                    <p className="text-label mb-2 text-[var(--color-muted)]">Outcome</p>
                    <p className="text-body max-w-[36ch] font-medium text-[var(--color-ink)]">
                      {engine.outcome}
                    </p>
                  </div>
                </div>
              </FadeUp>
            </li>
          ))}
        </ol>

        <FadeUp delay={0.3}>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-body-lg max-w-[40ch] font-medium text-[var(--color-ink)]">
              {GROWTH_SUPPORTING_LINE}
            </p>
            <GrowthCtaButton
              placement="mid-system"
              size="md"
              className="w-full flex-shrink-0 sm:w-auto"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

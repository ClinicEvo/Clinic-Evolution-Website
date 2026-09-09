import FadeUp from "@/components/ui/FadeUp";
import { brandHex, brandMarks, brandTitle, type BrandSlug } from "@/components/icons/BrandIcons";
import { LP_SYSTEM_LAYERS, type LpVariant } from "@/lib/lp";
import LpCtaButton from "./LpCtaButton";

/**
 * Replaces the old LandingPillars.
 *
 * Pillars had a heading that said "one connected system" above three cards that
 * looked exactly like three products, with Patient Pulse then sitting in its own
 * section below like a fourth. The layout argued against the copy, and it also
 * omitted call handling and reactivation entirely.
 *
 * This is one ordered list under one heading — the shape the homepage's
 * OperatingSystemBand settled on — so the eye reads a single sequence rather
 * than a menu.
 *
 * It does NOT say the layers cannot be bought separately, and that changed on
 * 9 Sep 2026. This docblock used to end "nothing here is presented as
 * separately buyable, because it is not: the audit sets the scope, the system
 * ships whole." Simon's correction: the proposition is that the connected
 * system produces the strongest results, not that a clinic is refused one part
 * of it. The list argues for the whole; it no longer rules out the parts.
 *
 * Stage names carry the sequence, with the numeral as a quiet index beside them.
 * Ordinals alone are a scan failure — "05" tells a skimmer nothing.
 *
 * No decorative glyphs. The only marks are real platform logos in their official
 * colours, which is the entire point of them: four platform names in a sentence
 * are abstract, four logos are concrete at a glance.
 */
export default function LandingSystem({ variant }: { variant: LpVariant }) {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] py-24 sm:py-28 lg:py-32">
      <div className="cx-main">
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <FadeUp>
            <div>
              <p className="eyebrow mb-5">What you get</p>
              <h2 className="text-h2 text-[var(--color-ink)]">
                One system that takes a patient from{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  first search to booked appointment
                </em>
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div>
              {/* "Most clinics buy a web designer, an SEO freelancer and an ads
                  agency who never speak to each other" — an unsourced claim
                  about how a whole market behaves, which is the one thing this
                  project's rules put above everything else. LandingProblem's
                  own comments record an identical line being removed for the
                  same reason; this one survived because it reads as scene-
                  setting rather than as a statistic.

                  Recast as a conditional about a purchase the reader might
                  make, which asserts nothing about anybody and puts them in the
                  sentence. Same argument, no claim. */}
              <p className="text-body-lg mb-5 text-[var(--color-muted)]">
                Buy a web designer, an SEO freelancer and an ads agency
                separately and you have three suppliers who never speak to each
                other, with the enquiries they produce still landing on you. We
                run all five layers below as one thing, with one team, aimed at
                one number: patients in the diary.
              </p>
              {/* Was "You do not pick items off this list." Replaced on
                  9 Sep 2026 on Simon's instruction: the strategic proposition
                  is that the connected system produces the strongest results,
                  NOT that a clinic is forbidden from buying one part. The old
                  line asserted the second, which is a commercial claim nobody
                  had verified, and it was also the half of a contradiction with
                  the FAQ that used to offer standalone services.
                  
                  The integrated positioning is unchanged and is doing more work
                  than before, because it is now an argument rather than a rule.
                  Wording direction supplied by Simon. */}
              <p className="text-body text-[var(--color-muted)]">
                <strong className="font-semibold text-[var(--color-ink)]">
                  The strongest results come when these parts work together.
                </strong>{" "}
                Rather than treating your website, SEO, advertising and
                follow-up as four separate projects, we connect them around one
                goal, and the audit works out which of them your{" "}
                {variant.practiceNoun} needs first.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* One connected sequence: a continuous rule runs down the left of every
            row, so the five read as stages of one process rather than five
            cards. Indentation steps in on desktop to keep it off a rigid grid. */}
        <ol role="list" className="relative flex flex-col">
          {LP_SYSTEM_LAYERS.map((layer, index) => (
            <FadeUp key={layer.stage} delay={index * 0.06}>
              <li className="group relative flex gap-5 border-t border-[var(--color-border)] py-7 last:border-b sm:gap-8 sm:py-8">
                {/* Stage index. Quiet, because the stage name does the work. */}
                <span
                  aria-hidden="true"
                  className="w-7 flex-shrink-0 pt-1 font-display text-sm font-semibold tabular-nums text-[var(--color-muted-light)]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="grid flex-1 grid-cols-1 gap-x-10 gap-y-3 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <h3 className="text-h4 mb-1.5 text-[var(--color-ink)]">
                      {layer.stage}
                    </h3>
                    <p className="text-body-sm max-w-[34ch] text-[var(--color-accent-text)]">
                      {layer.summary}
                    </p>
                  </div>

                  <div>
                    <p className="text-body max-w-[58ch] text-[var(--color-muted)]">
                      {/* Colon, not an em dash. The global copy rule bans em
                          dashes in anything client-facing, and this template
                          was generating one into visible body copy on all four
                          landing pages. A colon is also the right mark here:
                          what follows is a list the clause introduces. */}
                      {layer.stage === "Get found"
                        ? `${layer.detail.replace(/\.$/, "")}: ${variant.seoConditions}.`
                        : layer.detail}
                    </p>

                    {layer.platforms.length > 0 ? (
                      <ul role="list" className="mt-4 flex items-center gap-3.5">
                        {layer.platforms.map((slug: BrandSlug) => {
                          const Mark = brandMarks[slug];
                          return (
                            <li key={slug}>
                              {/* Inline style: the brand's own hex, not a token. */}
                              <Mark
                                className="h-[18px] w-[18px]"
                                style={{ color: brandHex[slug] }}
                              />
                              <span className="sr-only">{brandTitle[slug]}</span>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </li>
            </FadeUp>
          ))}
        </ol>

        <FadeUp delay={0.36}>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-body max-w-[46ch] font-medium text-[var(--color-ink)]">
              Every layer is built, run and reported on by the same team, so
              there is one place to ask why the diary looks the way it does.
            </p>
            <LpCtaButton
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

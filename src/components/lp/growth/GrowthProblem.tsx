import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import { GROWTH_PROBLEMS, type GrowthVariant } from "@/lib/growth-system";
import GrowthCtaButton from "./GrowthCtaButton";

/**
 * Section 02, "The problem": disconnected marketing, missed leads and underused
 * databases. [src: lp brief, p5 and p7]
 *
 * The same photograph band as LandingDiscipline, because it is the one place
 * on the page that carries the discipline's own photograph, and the four
 * variants differ here more than anywhere else: the lead paragraph is written
 * in the discipline's terms and the picture is of its treatment.
 *
 * The five problems are the brief's core problems, offered as a checklist the
 * reader self-selects from. The eyebrow does that framing and must stay.
 */
export default function GrowthProblem({ variant }: { variant: GrowthVariant }) {
  const { band } = variant;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-ink)]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[62vw] sm:h-[46vw] lg:inset-0 lg:h-auto">
        <Image
          src={band.image}
          alt={band.alt}
          aria-hidden={band.alt === "" ? true : undefined}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: band.objectPosition }}
        />
        <div className="absolute inset-0 bg-[var(--color-ink)]/22 lg:bg-[var(--color-ink)]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-ink)]/45 to-[var(--color-ink)] lg:bg-gradient-to-r lg:from-[var(--color-ink)] lg:via-[var(--color-ink)]/85 lg:to-[var(--color-ink)]/20" />
      </div>

      <div className="cx-main pt-[calc(62vw+2rem)] pb-14 sm:pt-[calc(46vw+2.5rem)] sm:pb-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,58%)_1fr]">
          <FadeUp>
            <div>
              <p className="eyebrow eyebrow-invert mb-6">If any of this is your clinic</p>

              <h2 className="text-h2 mb-6 text-white">
                A good website on its own{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  is not a growth system
                </em>
              </h2>

              <p className="text-body-lg max-w-[46ch] text-white/75">
                {variant.problemLead}
              </p>

              <ol role="list" className="mt-10 flex flex-col border-t border-white/15">
                {GROWTH_PROBLEMS.map((problem, index) => (
                  <li
                    key={problem.title}
                    className="grid grid-cols-[1.75rem_1fr] gap-4 border-b border-white/15 py-5 sm:grid-cols-[2.25rem_1fr]"
                  >
                    <span
                      aria-hidden="true"
                      className="pt-1.5 text-xs font-semibold tabular-nums text-[var(--color-accent)]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-h4 mb-1.5 text-white">{problem.title}</h3>
                      <p className="text-body-sm max-w-[52ch] text-white/65">{problem.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
                <GrowthCtaButton
                  placement="mid-problem"
                  size="md"
                  className="w-full sm:w-auto sm:flex-shrink-0"
                />
                <p className="text-body-sm max-w-[36ch] text-white/60">
                  The growth call goes through all five for your {variant.practiceNoun}.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

import FadeUp from "@/components/ui/FadeUp";
import GooglePullQuote from "@/components/sections/GooglePullQuote";
import ProofBand from "@/components/sections/ProofBand";
import { GROWTH_PROOF_STAT, GROWTH_SECTION_ANCHORS, type GrowthVariant } from "@/lib/growth-system";
import GrowthCtaButton from "./GrowthCtaButton";

/**
 * Section 07, "Proof": case studies, results and client testimonials.
 * [src: lp brief, p5 and p8]
 *
 * One figure, per the one-number rule (see GROWTH_PROOF_STAT), inside the
 * same navy ProofBand the site pages use, then Serena Gower-Johnson's public
 * Google review verbatim. Her first paragraph names the website, the SEO and
 * the business advice, which is three of the four engines, and it is her own
 * writing rather than ours.
 *
 * The brief also lists screenshots; the Patient Pulse one is in the inclusions
 * section beside the thing it shows, which is where a screenshot is evidence
 * rather than decoration.
 */
export default function GrowthProof({ variant }: { variant: GrowthVariant }) {
  return (
    <section
      id={GROWTH_SECTION_ANCHORS.results.slice(1)}
      tabIndex={-1}
      className="grain scroll-mt-20 focus-visible:outline-none border-b border-[var(--color-border)] bg-[var(--color-paper)] py-24 sm:py-28 lg:py-32"
    >
      <div className="cx-main">
        <FadeUp>
          <div className="mb-10 max-w-[48rem] sm:mb-12">
            <p className="eyebrow mb-5">Results</p>
            <h2 className="text-h2 text-[var(--color-ink)]">
              Results from the clinics where this was{" "}
              <em className="not-italic text-[var(--color-accent)]">built and tested</em>
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.06}>
          <ProofBand
            bare
            eyebrow={GROWTH_PROOF_STAT.eyebrow}
            stat={{ value: GROWTH_PROOF_STAT.value, label: GROWTH_PROOF_STAT.label }}
            body={GROWTH_PROOF_STAT.body}
            source={GROWTH_PROOF_STAT.source}
          />
        </FadeUp>

        <FadeUp delay={0.12}>
          <GooglePullQuote className="mt-12 sm:mt-14" />
        </FadeUp>

        <FadeUp delay={0.16}>
          <div className="mt-10 flex flex-col gap-5 border-t border-[var(--color-border)] pt-7 sm:mt-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <p className="text-body max-w-[52ch] font-medium text-[var(--color-ink)]">
              Those figures are theirs. The growth call is about your{" "}
              {variant.practiceNoun}.
            </p>
            <div className="flex flex-col items-stretch sm:flex-row sm:items-center lg:flex-shrink-0">
              <GrowthCtaButton placement="mid-proof" size="md" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

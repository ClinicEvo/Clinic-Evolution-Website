import FAQAccordion from "@/components/sections/FAQAccordion";
import FadeUp from "@/components/ui/FadeUp";
import {
  GROWTH_SECTION_ANCHORS,
  GROWTH_SHARED_FAQS,
  type GrowthVariant,
} from "@/lib/growth-system";

/**
 * Section 09, "FAQ": objections, responsibilities, timelines and suitability.
 * [src: lp brief, p5] The discipline's own question leads, then the shared
 * set from GROWTH_SHARED_FAQS.
 *
 * No FAQSchema: the page is noindex, and marking up questions Google is told
 * not to index is pointless. The organic pages carry the schema.
 *
 * Collapsed answers are progressive disclosure of secondary content, which
 * `npm run scan` reports but does not fail. The primary content on this page
 * is all open.
 */
export default function GrowthFaq({ variant }: { variant: GrowthVariant }) {
  const faqs = [variant.variantFaq, ...GROWTH_SHARED_FAQS];

  return (
    <section
      id={GROWTH_SECTION_ANCHORS.faq.slice(1)}
      tabIndex={-1}
      className="scroll-mt-20 focus-visible:outline-none border-b border-[var(--color-border)] bg-[var(--color-paper)] py-24 sm:py-28 lg:py-32"
    >
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <FadeUp>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-5">Questions</p>
              <h2 className="text-h2 text-[var(--color-ink)]">
                Cost, fit, and{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  what happens next
                </em>
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] px-6 py-2 shadow-[var(--shadow-card)] sm:px-9">
              <FAQAccordion items={faqs} />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

import FadeUp from "@/components/ui/FadeUp";
import { brandHex, brandMarks, type BrandSlug } from "@/components/icons/BrandIcons";
import type { LpVariant } from "@/lib/lp";

/**
 * No generic icons here on purpose. A card with a decorative glyph in the corner
 * reads as a template — the same note the 10 Aug review made about the old
 * Patient Pulse card grid. The numeral carries the sequence instead.
 *
 * The paid channels do get their real marks, in official colours, for the reason
 * the homepage adopted them: four platform names in a sentence are abstract,
 * four logos are concrete at a glance.
 */
const PAID_CHANNELS: BrandSlug[] = ["google", "tiktok", "facebook", "instagram"];

export default function LandingPillars({ variant }: { variant: LpVariant }) {
  const pillars = [
    {
      title: "Clinic websites",
      body: "Fast, trustworthy websites built to explain your specialisms, build confidence before the enquiry, and make booking the obvious next step — not just a digital brochure.",
      offset: "",
    },
    {
      title: "SEO for clinics",
      body: `Local and condition-specific SEO that ranks you above NHS listings and generic directories for the searches your ideal patients are already making — ${variant.seoConditions}.`,
      offset: "lg:ml-[7%]",
    },
    {
      title: "Digital marketing: Google, TikTok, Facebook & Instagram",
      body: "Targeted paid campaigns built around specific conditions and treatment slots rather than generic brand awareness — connected to proper conversion tracking, so you know exactly what each channel is worth.",
      offset: "lg:ml-[14%]",
      channels: PAID_CHANNELS,
    },
  ];

  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] py-24 sm:py-28 lg:py-32">
      <div className="cx-main">
        <FadeUp>
          <div className="mb-14 max-w-[46ch]">
            <p className="eyebrow mb-5">The system</p>
            <h2 className="text-h2 mb-6 text-[var(--color-ink)]">
              One connected system. Not{" "}
              <em className="not-italic text-[var(--color-accent)]">
                three disconnected suppliers
              </em>
              .
            </h2>
            <p className="text-body-lg text-[var(--color-muted)]">
              Most clinics end up stitching together a web designer, an SEO
              freelancer and an ads agency who never speak to each other. We run
              all three as one system, built around a single goal: booked patients,
              not isolated metrics.
            </p>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-5">
          {pillars.map((pillar, index) => (
            <FadeUp key={pillar.title} delay={index * 0.07}>
              <article
                className={`card-surface flex gap-6 p-7 sm:gap-9 sm:p-9 lg:max-w-[86%] ${pillar.offset}`}
              >
                <span className="text-label flex-shrink-0 pt-1.5 tabular-nums text-[var(--color-accent)]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-h3 mb-2.5 text-[var(--color-ink)]">
                    {pillar.title}
                  </h3>
                  <p className="text-body max-w-[62ch] text-[var(--color-muted)]">
                    {pillar.body}
                  </p>
                  {pillar.channels ? (
                    <ul role="list" className="mt-5 flex items-center gap-4">
                      {pillar.channels.map((slug) => {
                        const Mark = brandMarks[slug];
                        return (
                          <li key={slug}>
                            {/* Inline style: the brand's own hex, not a token. */}
                            <Mark className="h-5 w-5" style={{ color: brandHex[slug] }} />
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

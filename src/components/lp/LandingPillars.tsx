import { MonitorIcon } from "@phosphor-icons/react/dist/ssr/Monitor";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import { TargetIcon } from "@phosphor-icons/react/dist/ssr/Target";
import FadeUp from "@/components/ui/FadeUp";
import type { LpVariant } from "@/lib/lp";

export default function LandingPillars({ variant }: { variant: LpVariant }) {
  const pillars = [
    {
      icon: MonitorIcon,
      title: "Clinic websites",
      body: "Fast, trustworthy websites built to explain your specialisms, build confidence before the enquiry, and make booking the obvious next step — not just a digital brochure.",
      offset: "",
    },
    {
      icon: MagnifyingGlassIcon,
      title: "SEO for clinics",
      body: `Local and condition-specific SEO that ranks you above NHS listings and generic directories for the searches your ideal patients are already making — ${variant.seoConditions}.`,
      offset: "lg:ml-[7%]",
    },
    {
      icon: TargetIcon,
      title: "Digital marketing: Google, TikTok, Facebook & Instagram",
      body: "Targeted paid campaigns built around specific conditions and treatment slots rather than generic brand awareness — connected to proper conversion tracking, so you know exactly what each channel is worth.",
      offset: "lg:ml-[14%]",
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
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <FadeUp key={pillar.title} delay={index * 0.07}>
                <article
                  className={`card-surface flex flex-col gap-6 p-7 sm:flex-row sm:items-start sm:gap-8 sm:p-9 lg:max-w-[86%] ${pillar.offset}`}
                >
                  <div className="flex items-center gap-4 sm:flex-col sm:gap-3">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                      <Icon size={22} />
                    </span>
                    <span className="text-label tabular-nums text-[var(--color-muted-light)]">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-h3 mb-2.5 text-[var(--color-ink)]">
                      {pillar.title}
                    </h3>
                    <p className="text-body max-w-[62ch] text-[var(--color-muted)]">
                      {pillar.body}
                    </p>
                  </div>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

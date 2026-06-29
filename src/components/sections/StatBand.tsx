import React from "react";
import FadeUp from "@/components/ui/FadeUp";

interface Stat {
  value: React.ReactNode;
  label: string;
}

interface StatBandProps {
  eyebrow: string;
  heading: string;
  body?: string;
  stats: Stat[];
  /** When true, renders without the outer .section wrapper (for inline use inside a section). */
  bare?: boolean;
}

function Band({ eyebrow, heading, body, stats }: Omit<StatBandProps, "bare">) {
  return (
    <div
      className="relative overflow-hidden bg-[var(--color-ink)] text-white"
      style={{ borderRadius: "var(--radius-panel)" }}
    >
      <div className="grid gap-10 p-9 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:p-14">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
          <h3 className="text-h2 mt-4 max-w-md text-white">
            {heading}
          </h3>
          {body && (
            <p className="text-body mt-5 max-w-md leading-relaxed text-white/65">
              {body}
            </p>
          )}
        </div>

        <div className="flex flex-col justify-center divide-y divide-white/10 border-t border-white/10 lg:border-t-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-5 py-5 first:pt-0 lg:first:pt-5"
            >
              <span className="shrink-0 whitespace-nowrap font-display text-4xl font-semibold leading-none text-[var(--color-accent)] md:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm leading-snug text-white/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function StatBand(props: StatBandProps) {
  if (props.bare) {
    return <Band {...props} />;
  }
  return (
    <section className="section grain bg-[var(--color-paper)]">
      <div className="cx-main">
        <FadeUp>
          <Band {...props} />
        </FadeUp>
      </div>
    </section>
  );
}

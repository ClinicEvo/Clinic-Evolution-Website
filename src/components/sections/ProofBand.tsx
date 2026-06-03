import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import ArrowLink from "@/components/ui/ArrowLink";

interface ProofBandProps {
  eyebrow: string;
  /** The testimonial quote, without surrounding quotation marks. */
  quote: string;
  authorName?: string;
  authorRole?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Render without the outer .section wrapper, for inline use inside a section. */
  bare?: boolean;
}

function Band({
  eyebrow,
  quote,
  authorName = "Danny Morgan",
  authorRole = "Bodyfunction Clinic, London — Founding partner",
  ctaLabel = "Read the Bodyfunction Clinic case study",
  ctaHref = "/case-studies/bodyfunction-clinic/",
}: Omit<ProofBandProps, "bare">) {
  return (
    <div
      className="relative overflow-hidden bg-[var(--color-ink)] text-white"
      style={{ borderRadius: "var(--radius-panel)" }}
    >
      <div className="grid items-stretch lg:grid-cols-[0.85fr_1.15fr]">
        {/* Clinic photograph */}
        <div className="relative min-h-[260px] lg:min-h-full">
          <Image
            src="/images/danny_and_co.png"
            alt="The Bodyfunction Clinic team in London"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 440px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-transparent to-transparent lg:bg-gradient-to-r" />
        </div>

        {/* Quote */}
        <div className="flex flex-col justify-center p-9 md:p-12 lg:p-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
          <svg
            className="mt-6 text-[var(--color-accent)]"
            width="34"
            height="26"
            viewBox="0 0 34 26"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M0 26V14.5C0 6.7 4.6 1.3 13.2 0l1.3 4.2C9.8 5.6 7.5 8 7.3 11.7H14V26H0Zm19 0V14.5C19 6.7 23.6 1.3 32.2 0l1.3 4.2c-4.7 1.4-7 3.8-7.2 7.5H33V26H19Z" />
          </svg>
          <blockquote className="mt-5 font-display text-2xl font-medium leading-[1.4] text-white md:text-[1.9rem]">
            {quote}
          </blockquote>
          <div className="mt-8 flex items-center gap-3.5">
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-white/20">
              <Image
                src="/images/danny-morgan-angel-clinic.png"
                alt={authorName}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-white">{authorName}</p>
              <p className="text-[13px] text-white/55">{authorRole}</p>
            </div>
          </div>
          {ctaHref && (
            <div className="mt-8 border-t border-white/10 pt-7">
              <ArrowLink href={ctaHref} light>
                {ctaLabel}
              </ArrowLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProofBand(props: ProofBandProps) {
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

import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import ArrowLink from "@/components/ui/ArrowLink";

/*
 * Two modes.
 *
 * `quote` renders a testimonial. `stat` renders verifiable evidence with its
 * source named. Evidence is the default across the site because we do not
 * currently hold a signed-off client quote — the ones that used to sit here
 * were not Danny's words, and one of them ("page 4 to position 1 in 11 weeks")
 * he asked us to remove on the 10 Aug call.
 *
 * Testimonial mode is kept rather than deleted so a real, approved quote can be
 * dropped in without rebuilding the component. Do not put words in a client's
 * mouth to fill it.
 */

interface ProofBandBaseProps {
  eyebrow: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Panel photograph. */
  image?: string;
  imageAlt?: string;
  /** object-position for the panel image. A wide screenshot in this narrow
   *  column crops to its middle by default, which loses the logo and headline —
   *  pass "left" for those. */
  imagePosition?: "center" | "left" | "top";
  /** Render without the outer .section wrapper, for inline use inside a section. */
  bare?: boolean;
}

interface TestimonialProps extends ProofBandBaseProps {
  /** The testimonial quote, without surrounding quotation marks. */
  quote: string;
  authorName?: string;
  authorRole?: string;
  /** Author headshot, shown beside the name. */
  authorImage?: string;
  stat?: never;
  body?: never;
  source?: never;
}

interface EvidenceProps extends ProofBandBaseProps {
  quote?: never;
  authorName?: never;
  authorRole?: never;
  authorImage?: never;
  /** The headline figure and what it measures. */
  stat: { value: string; label: string };
  /** Supporting sentence beneath the figure. */
  body: string;
  /** Where the figure came from. Required — an unsourced number is the thing
   *  this component exists to avoid. */
  source: string;
}

type ProofBandProps = TestimonialProps | EvidenceProps;

function Band(props: Omit<ProofBandProps, "bare">) {
  const {
    eyebrow,
    ctaLabel = "Read the Bodyfunction Clinic case study",
    ctaHref = "/case-studies/bodyfunction-clinic/",
    image = "/images/danny_and_co.jpg",
    imageAlt = "The Bodyfunction Clinic team in London",
    imagePosition = "center",
  } = props;

  const objectPosition = {
    center: "object-center",
    left: "object-left",
    top: "object-top",
  }[imagePosition];

  return (
    <div
      className="relative overflow-hidden bg-[var(--color-ink)] text-white"
      style={{ borderRadius: "var(--radius-panel)" }}
    >
      <div className="grid items-stretch lg:grid-cols-[0.85fr_1.15fr]">
        {/* Photograph */}
        <div className="relative min-h-[260px] lg:min-h-full">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={`object-cover ${objectPosition}`}
            sizes="(max-width: 1024px) 100vw, 440px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-transparent to-transparent lg:bg-gradient-to-r" />
        </div>

        <div className="flex flex-col justify-center p-9 md:p-12 lg:p-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            {eyebrow}
          </p>

          {props.stat ? (
            <>
              <p className="mt-6 font-display text-5xl font-bold leading-none text-white md:text-6xl">
                {props.stat.value}
              </p>
              <p className="mt-3 max-w-md text-[15px] font-medium text-white/80">
                {props.stat.label}
              </p>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
                {props.body}
              </p>
              <p className="mt-6 flex items-center gap-2 text-[13px] text-white/45">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="flex-shrink-0 text-[var(--color-accent)]"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8.5l3.5 3.5L13 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {props.source}
              </p>
            </>
          ) : (
            <>
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
              <blockquote className="text-h3 mt-5 font-medium text-white">
                {props.quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-3.5">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-white/20">
                  <Image
                    src={props.authorImage ?? "/images/danny-morgan-angel-clinic.png"}
                    alt={props.authorName ?? "Danny Morgan"}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-white">
                    {props.authorName ?? "Danny Morgan"}
                  </p>
                  <p className="text-body-sm text-white/55">
                    {props.authorRole ?? "Bodyfunction Clinic, London — Founding partner"}
                  </p>
                </div>
              </div>
            </>
          )}

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

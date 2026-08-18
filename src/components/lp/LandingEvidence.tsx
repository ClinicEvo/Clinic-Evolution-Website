import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import ClientLogoStrip from "@/components/sections/ClientLogoStrip";
import LpCtaButton, { LpCallButton } from "./LpCtaButton";
import { LP_PROOF, LP_PROOF_CAVEAT, LP_TESTIMONIAL } from "@/lib/lp";

/**
 * One proof layer, not two.
 *
 * This section used to render three anonymous figures and then, under a rule,
 * two clinic panels labelled "The clinics those figures come from" — which
 * re-stated two of the same figures and introduced a fourth number for an
 * achievement already claimed above. A skimmer met five numbers for three
 * facts, in four unit systems, none of them attached to a clinic at the moment
 * it was read. That is the whole of why the figures read as random: the eye
 * landed on a quantity before it knew the unit, and never learned the owner.
 *
 * Three things changed, and they work together:
 *
 * 1. THE FIGURE IS INSIDE A HEADING. Each row's number and its meaning are one
 *    `<h3>`, so the heading ladder carries "8 → 3,822 people a month finding
 *    Bodyfunction Clinic on Google" rather than a bare 48px "3,822". This is
 *    what makes the section legible to `npm run scan`, which reads headings —
 *    the old clinic names were `<p className="text-h4">`, styled as headings and
 *    invisible to both the scan and to screen-reader heading navigation. The
 *    same fault was fixed in LandingProblem for the same reason; see its header.
 *
 * 2. THE METRIC NAME COMES FIRST. `metric` sits above the figure in
 *    `.text-label`, so the unit arrives before the quantity. Not coral: the
 *    figure beneath it is already coral, and doubling the accent inside one row
 *    spends it on decoration.
 *
 * 3. EVERY FIGURE HAS AN OWNER, WITH ITS MARK. The clinic's real logo sits in
 *    the row's right rail. Two of the three rows are Bodyfunction and that
 *    repetition is fine — it is the same clinic and the mark reinforces it.
 *    Attribution on the ads row only became possible when Simon confirmed on
 *    18 Aug 2026 that all three Google Ads shots are Bodyfunction's; before
 *    that, `ACCOUNT` in google-ads-evidence.ts was deliberately unnamed.
 *
 * `note` on Bodyfunction is the one disclosure kept: it is the founding clinic,
 * not an outside client. It appears once, on the first row, not on both
 * Bodyfunction rows — the relationship is declared, not re-declared.
 *
 * The testimonial is verbatim as approved. See LP_TESTIMONIAL before touching a
 * word of it.
 */
export default function LandingEvidence() {
  return (
    <>
      <ClientLogoStrip label="Clinics and brands we build and grow" />

      <section className="grain bg-[var(--color-paper)] py-20 sm:py-24 lg:py-28">
        <div className="cx-main">
          {/* Intro. Two columns rather than the old sticky rail: the rows below
              now carry their own right-hand rail, so a sticky heading beside
              them would collide with it. */}
          <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">What we can evidence</p>
                {/* Was "What the system has produced, and where you can check
                    it" — the coral half spent the section's most-read line on
                    our own auditability, which answers a question the reader has
                    not formed yet. This says whose numbers these are and that
                    they belong to clinics that exist. */}
                <h2 className="text-h2 text-[var(--color-ink)]">
                  Two clinics you can look up, and{" "}
                  <em className="not-italic text-[var(--color-accent)]">
                    what changed at each one
                  </em>
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <p className="text-body-lg max-w-[52ch] text-[var(--color-muted)]">
                Both are real clinics. Open their websites, read the case
                studies, and check every figure against the source beside it.
              </p>
            </FadeUp>
          </div>

          {/* One row per figure. Asymmetric: the figure and its meaning carry
              the row, the clinic identifies it. */}
          <ul role="list" className="flex flex-col">
            {LP_PROOF.map((row, index) => (
              <FadeUp key={row.headline} delay={0.06 + index * 0.06}>
                <li className="grid grid-cols-1 gap-6 border-t border-[var(--color-border)] py-8 last:border-b sm:py-9 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
                  <div>
                    <p className="text-label mb-4 text-[var(--color-muted)]">
                      {row.metric}
                    </p>

                    {/* Figure and meaning in ONE heading, so the number reaches
                        the heading ladder with its unit and its owner attached. */}
                    <h3 className="text-[var(--color-ink)]">
                      <span className="block font-display text-5xl font-semibold leading-none tracking-tight text-[var(--color-accent-text)] sm:text-6xl">
                        {row.figure}
                      </span>
                      <span className="text-h4 mt-4 block max-w-[34ch] font-medium">
                        {row.headline}
                      </span>
                    </h3>

                    <p className="mt-4 max-w-[54ch] text-[13px] leading-relaxed text-[var(--color-muted)]">
                      {row.source}
                    </p>

                  </div>

                  {/* The owner. The mark does the recognition, so the name is not
                      repeated as text — it is already in the h3 above. */}
                  <div className="flex flex-col lg:items-start">
                    <Image
                      src={row.clinic.logo}
                      alt={row.clinic.name}
                      width={row.clinic.logoW}
                      height={row.clinic.logoH}
                      style={{ height: `${row.clinic.logoHeight}px` }}
                      className="w-auto flex-shrink-0"
                    />
                    <p className="text-body-sm mt-3.5 max-w-[30ch] text-[var(--color-muted)]">
                      {row.clinic.where}
                    </p>

                    {row.note ? (
                      <p className="mt-2 max-w-[30ch] text-[13px] leading-relaxed text-[var(--color-muted)]">
                        {row.note}
                      </p>
                    ) : null}

                    {row.work ? (
                      <p className="text-body-sm mt-4 max-w-[34ch] text-[var(--color-charcoal)]">
                        {row.work}
                      </p>
                    ) : null}

                    {row.href ? (
                      <Link
                        href={row.href}
                        className="text-body-sm mt-4 inline-flex items-center gap-2 self-start font-semibold text-[var(--color-ink)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--color-accent-text)]"
                      >
                        Read the full case study
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 14 14"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 7h8M8 4l3 3-3 3"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    ) : null}
                  </div>
                </li>
              </FadeUp>
            ))}
          </ul>

          <FadeUp delay={0.24}>
            <p className="mt-7 max-w-[62ch] text-[13px] leading-relaxed text-[var(--color-muted)]">
              {LP_PROOF_CAVEAT}
            </p>
          </FadeUp>

          {/* The only practitioner voice on a page selling to practitioners, so
              it carries display size rather than body size. */}
          <FadeUp delay={0.28}>
            <blockquote className="mt-14 border-l-2 border-[var(--color-accent)] pl-6 sm:mt-16 sm:pl-8">
              <p className="text-h3 max-w-[46ch] text-[var(--color-ink)]">
                &ldquo;{LP_TESTIMONIAL.text}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <Image
                  src={LP_TESTIMONIAL.portrait}
                  alt={`${LP_TESTIMONIAL.name}, ${LP_TESTIMONIAL.role}`}
                  width={80}
                  height={80}
                  sizes="48px"
                  className="h-12 w-12 flex-shrink-0 rounded-full border border-[var(--color-border)] bg-white object-cover object-top"
                />
                <span className="text-body-sm">
                  <strong className="font-semibold text-[var(--color-ink)]">
                    {LP_TESTIMONIAL.name}
                  </strong>
                  <span className="block text-[var(--color-muted)]">
                    {LP_TESTIMONIAL.role}
                  </span>
                </span>
              </footer>
            </blockquote>
          </FadeUp>

          {/* The turn from proof to offer. A visitor convinced by the rows above
              has one question — "what about my clinic" — and this is the only
              place on this screen that answers it. Not a full CTA band: one line
              and the two actions, so it reads as the next step rather than as an
              interruption. */}
          <FadeUp delay={0.32}>
            <div className="mt-14 flex flex-col gap-5 border-t border-[var(--color-border)] pt-9 sm:mt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <p className="text-body max-w-[52ch] font-medium text-[var(--color-ink)]">
                The free audit does this first part for your clinic: where you
                rank now, who is above you, and what to fix first. Yours to keep
                either way.
              </p>
              <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3 lg:flex-shrink-0">
                <LpCtaButton placement="mid-evidence" size="md" />
                <LpCallButton placement="mid-evidence" size="md" variant="outline" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

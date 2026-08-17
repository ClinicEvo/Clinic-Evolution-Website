import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import ClientLogoStrip from "@/components/sections/ClientLogoStrip";
import { LP_CASE_STUDIES, LP_EVIDENCE, LP_EVIDENCE_CAVEAT } from "@/lib/lp";

/**
 * The thing these landing pages were missing entirely.
 *
 * All three carried no logo, no figure, no named clinic — the whole argument was
 * "we own a clinic", on a page competing in an auction against agencies making
 * the same claim. Meanwhile the site had two sourced case studies and a sourced
 * Google Ads account sitting unused.
 *
 * Every figure is quoted from `LP_EVIDENCE`, which copies the case studies and
 * google-ads-evidence.ts verbatim rather than restating them. Each one shows its
 * source on the page, next to the number, because a figure whose source is one
 * click away is a claim and a figure with its source beside it is evidence.
 *
 * `LP_EVIDENCE_CAVEAT` is load-bearing and must not be trimmed for balance. It
 * says out loud that both clinics are osteopathy practices, that these measure
 * search rather than bookings, and that one account over one period is not a
 * forecast. A physio or chiropractor reading matched ad copy has to be told the
 * proof is not discipline-matched, rather than left to assume it is.
 *
 * One approved testimonial, from Serena Gower-Johnson at Lind Street. It is in
 * `LP_CASE_STUDIES` with its approval recorded beside it, and it is verbatim as
 * approved — see the note there before touching a word of it. Bodyfunction has
 * none and gets none: it is the founding clinic, so a quote from it would be
 * Clinic Evo quoting itself.
 */
export default function LandingEvidence() {
  return (
    <>
      <ClientLogoStrip label="Clinics and brands we build and grow" />

      <section className="grain bg-[var(--color-paper)] py-20 sm:py-24 lg:py-28">
        <div className="cx-main">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <FadeUp>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-5">What we can evidence</p>
                {/* Was "Three numbers, and where each one can be checked" — a
                    heading about the page's own honesty rather than about the
                    reader's clinic. "Three numbers" gives a skimmer nothing to
                    hold, which is most of why the figures below read as
                    undecodable on a cold pass. Auditability is still the second
                    half of the sentence; it is no longer the whole of it. */}
                <h2 className="text-h2 mb-6 text-[var(--color-ink)]">
                  What the system has produced, and{" "}
                  <em className="not-italic text-[var(--color-accent)]">
                    where you can check it
                  </em>
                </h2>
                <p className="text-body text-[var(--color-muted)]">
                  Every figure here is read off Google Search Console, Ahrefs or a
                  live Google Ads account, and the source sits next to the number
                  so you can ask us to open the tool and show you.
                </p>
              </div>
            </FadeUp>

            <div>
              <dl className="m-0 flex flex-col">
                {LP_EVIDENCE.map((item, index) => (
                  <FadeUp key={item.label} delay={0.06 + index * 0.06}>
                    <div className="border-t border-[var(--color-border)] py-7 last:border-b">
                      <dt className="font-display text-4xl font-semibold leading-none tracking-tight text-[var(--color-accent-text)] sm:text-5xl">
                        {item.value}
                      </dt>
                      <dd className="m-0 mt-3.5">
                        <p className="text-body max-w-[44ch] text-[var(--color-ink)]">
                          {item.label}
                        </p>
                        <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-muted)]">
                          {item.source}
                        </p>
                      </dd>
                    </div>
                  </FadeUp>
                ))}
              </dl>

              <FadeUp delay={0.26}>
                <p className="mt-7 max-w-[62ch] text-[13px] leading-relaxed text-[var(--color-muted)]">
                  {LP_EVIDENCE_CAVEAT}
                </p>
              </FadeUp>
            </div>
          </div>

          {/*
            The clinics behind the figures, named. Three unattributed numbers
            invite "whose numbers?", and the honest answer is on the site already
            — it was just a click away instead of on the page.

            Two panels, not three: the site has two case studies, and a third
            filled with anything else would be invention. Asymmetric widths, and
            asymmetric contents — only one of the two carries a testimonial,
            because only one of them can.
          */}
          <div className="mt-16 border-t border-[var(--color-border)] pt-12 sm:mt-20 sm:pt-14">
            <FadeUp>
              <p className="text-label mb-7 text-[var(--color-muted)]">
                The clinics those figures come from
              </p>
            </FadeUp>

            <ul
              role="list"
              className="grid grid-cols-1 gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8"
            >
              {LP_CASE_STUDIES.map((study, index) => (
                <FadeUp key={study.clinic} delay={0.06 + index * 0.08} className="flex">
                  <li className="flex w-full flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7">
                    <p className="text-h4 text-[var(--color-ink)]">{study.clinic}</p>
                    <p className="text-body-sm mt-1 text-[var(--color-muted)]">
                      {study.where}
                    </p>

                    <div className="mt-6 flex items-baseline gap-3">
                      <span className="font-display text-3xl font-semibold leading-none tracking-tight text-[var(--color-accent-text)]">
                        {study.figure}
                      </span>
                    </div>
                    <p className="text-body-sm mt-2.5 max-w-[38ch] text-[var(--color-ink)]">
                      {study.figureLabel}
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-muted)]">
                      {study.source}
                    </p>

                    <p className="text-body-sm mt-6 max-w-[46ch] flex-1 text-[var(--color-muted)]">
                      {study.work}
                    </p>

                    {study.note ? (
                      <p className="mt-5 border-l-2 border-[var(--color-border)] pl-3.5 text-[13px] leading-relaxed text-[var(--color-muted)]">
                        {study.note}
                      </p>
                    ) : null}

                    <Link
                      href={study.href}
                      className="mt-6 inline-flex items-center gap-2 self-start text-body-sm font-semibold text-[var(--color-ink)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--color-accent-text)]"
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
                  </li>
                </FadeUp>
              ))}
            </ul>

            {/*
              The testimonial sits below both cards, not inside one of them.
              Inside the Lind Street card it made that card ~200px taller than
              Bodyfunction's, and since the grid stretches both, the extra height
              opened as dead space in the middle of the Bodyfunction card — a
              hole, not a layout. Nothing can honestly be added to fill it: the
              founding clinic has no signed-off quote and is not getting one.

              Out here it is also simply better placed. It is the only
              practitioner voice above the fold-and-a-half on a page selling to
              practitioners, so it can carry display size instead of body size,
              and the attribution names her clinic so it still reads against the
              card above it.
            */}
            {LP_CASE_STUDIES.map((study) =>
              study.quote ? (
                <FadeUp key={`${study.clinic}-quote`} delay={0.22}>
                  <blockquote className="mt-10 border-l-2 border-[var(--color-accent)] pl-6 sm:mt-12 sm:pl-8">
                    <p className="text-h3 max-w-[46ch] text-[var(--color-ink)]">
                      &ldquo;{study.quote.text}&rdquo;
                    </p>
                    <footer className="mt-6 flex items-center gap-4">
                      <Image
                        src={study.quote.portrait}
                        alt={`${study.quote.name}, ${study.quote.role}`}
                        width={80}
                        height={80}
                        sizes="48px"
                        className="h-12 w-12 flex-shrink-0 rounded-full border border-[var(--color-border)] bg-white object-cover object-top"
                      />
                      <span className="text-body-sm">
                        <strong className="font-semibold text-[var(--color-ink)]">
                          {study.quote.name}
                        </strong>
                        <span className="block text-[var(--color-muted)]">
                          {study.quote.role}
                        </span>
                      </span>
                    </footer>
                  </blockquote>
                </FadeUp>
              ) : null,
            )}
          </div>
        </div>
      </section>
    </>
  );
}

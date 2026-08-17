import FadeUp from "@/components/ui/FadeUp";
import ClientLogoStrip from "@/components/sections/ClientLogoStrip";
import { LP_EVIDENCE, LP_EVIDENCE_CAVEAT } from "@/lib/lp";

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
 * There is no testimonial here on purpose: no client quote has been signed off,
 * and writing one would be the single thing the project rules forbid outright.
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
                <h2 className="text-h2 mb-6 text-[var(--color-ink)]">
                  Three numbers, and where each one{" "}
                  <em className="not-italic text-[var(--color-accent)]">
                    can be checked
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
        </div>
      </section>
    </>
  );
}

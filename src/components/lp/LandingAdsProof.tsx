import FadeUp from "@/components/ui/FadeUp";
import { GoogleAdsLockup } from "@/components/icons/GoogleColorMark";
import { type LpVariant } from "@/lib/lp";

/**
 * §7 — the advertising figures, kept away from the top of the page.
 *
 * "Business outcomes should lead. Technical marketing metrics should support."
 * A clinic owner cares about patients, appointments and enquiries before cost
 * per click or auction share, so the proof strip under the hero carries the
 * diary figures and these three sit down here beside the paid part of the
 * system, where they answer a question the reader has by then actually got:
 * does the advertising work.
 *
 * THE HEADING AND INTRO ARE PER VARIANT since 9 Sep 2026, because the tiles
 * are. The three MSK pages carry £30 in their proof strip, so this block shows
 * the account's auction share and click-through rate instead and its heading
 * points back at the cost rather than promising it. The osteopathy strip has no
 * ad figure, so this is where £30 appears on that page and the heading can say
 * "what an enquiry costs". One heading used to serve both sets, and on three
 * pages it promised a cost above three tiles none of which was one.
 *
 * The intro attributes each figure to the account it is from. £70k+ is Clinic
 * Evo's own spend across accounts, not Bodyfunction's, and the old intro said
 * everything here was Bodyfunction's. See `adsHeading` / `adsIntro` in
 * src/lib/lp.ts.
 *
 * £30, NOT £42.50, anywhere under /lp/. Read the long note on
 * STAT_COST_PER_ENQUIRY in src/lib/lp.ts before changing that: both figures
 * measure the same thing, only one has a period attached, and they must never
 * share a page.
 *
 * "TRACKED ENQUIRY" IS THE ONLY PERMITTED WORDING. Google counts a conversion
 * as a tracked action: a call, a form or a chat. It is not a booked patient and
 * no evidence on this site connects the two, so "per new patient" is a claim we
 * cannot make. §5 says so and so does CONVERSION_CAVEAT in
 * src/lib/google-ads-evidence.ts.
 */
export default function LandingAdsProof({ variant }: { variant: LpVariant }) {
  return (
    <section className="border-b border-white/10 bg-[var(--color-ink)] py-16 sm:py-20">
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <FadeUp>
            <div>
              <div className="mb-5">
                <GoogleAdsLockup
                  label="Google Ads"
                  markClass="h-[1.15rem] w-[1.15rem]"
                  invert
                />
              </div>
              {/* Front-loaded on "Google Ads", the most informative pair of
                  words available here in a heading-only scan. */}
              <h2 className="text-h3 mb-4 text-white">
                {variant.adsHeading.start}
                <em className="not-italic text-[var(--color-accent)]">
                  {variant.adsHeading.accent}
                </em>
              </h2>
              <p className="text-body max-w-[46ch] text-white/70">{variant.adsIntro}</p>
            </div>
          </FadeUp>

          <ul
            role="list"
            className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-3"
          >
            {variant.adsProof.map((stat, index) => (
              <li key={stat.figure} className="border-t border-white/20 pt-4">
                {/* Reveal inside the <li>: a <div> between <ul> and <li> is
                    invalid and loses the list semantics. */}
                <FadeUp delay={0.08 + index * 0.06}>
                  <h3 className="text-white">
                    <span className="block font-display text-[clamp(1.6rem,4vw,2.15rem)] font-bold leading-[1.05] tracking-tight text-[var(--color-accent)]">
                      {stat.figure}
                    </span>
                    {/* Spelled out, not `.text-label` — see the note in
                        LandingProofStrip: a nested .text-label double-counts in
                        the scan test's cold read. */}
                    <span className="mt-2 block text-[0.68rem] font-bold uppercase leading-[1.35] tracking-[0.15em] text-white/70">
                      {stat.label}
                    </span>
                  </h3>
                  <p className="text-body-sm mt-1.5 text-white/55">
                    {stat.context}
                  </p>
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

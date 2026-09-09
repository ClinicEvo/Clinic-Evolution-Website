import FadeUp from "@/components/ui/FadeUp";
import { GoogleAdsLockup } from "@/components/icons/GoogleColorMark";
import { LP_ADS_PROOF } from "@/lib/lp";

/**
 * §7 — the advertising figures, kept away from the top of the page.
 *
 * "Business outcomes should lead. Technical marketing metrics should support."
 * A clinic owner cares about patients, appointments and enquiries before cost
 * per click or auction share, so the proof strip under the hero carries 212
 * new patients and 8 → 3,822, and these three sit down here beside the paid
 * part of the system where they answer a question the reader has by then
 * actually got: does the advertising work, and what does it cost.
 *
 * £42.50, NOT £30. Read the long note on LP_ADS_PROOF in src/lib/lp.ts before
 * changing this. Both figures measure the same thing, only one of them has a
 * period attached, and they must never appear on the same page.
 *
 * "TRACKED ENQUIRY" IS THE ONLY PERMITTED WORDING. Google counts a conversion
 * as a tracked action: a call, a form or a chat. It is not a booked patient and
 * no evidence on this site connects the two, so "per new patient" is a claim we
 * cannot make. §5 says so and so does CONVERSION_CAVEAT in
 * src/lib/google-ads-evidence.ts.
 *
 * The three figures deliberately do NOT include the 7.79% CTR or the ~70%
 * auction share, both of which are verified and both of which are exactly the
 * channel metric §7 says should not lead. They stay on
 * /google-ads-for-clinics/, next to the screenshots they are read off.
 */
export default function LandingAdsProof() {
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
              <h2 className="text-h3 mb-4 text-white">
                What the paid side actually{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  costs and returns
                </em>
              </h2>
              <p className="text-body max-w-[46ch] text-white/70">
                From the Bodyfunction Clinic account, which is our founder&apos;s
                own clinic. A tracked enquiry means a call, a form or a chat that
                the account recorded, not a booked patient.
              </p>
            </div>
          </FadeUp>

          <ul
            role="list"
            className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-3"
          >
            {LP_ADS_PROOF.map((stat, index) => (
              <FadeUp key={stat.figure} delay={0.08 + index * 0.06}>
                <li className="border-t border-white/20 pt-4">
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
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

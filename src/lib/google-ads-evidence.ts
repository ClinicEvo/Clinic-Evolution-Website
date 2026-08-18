/*
 * Provenance for the three Google Ads screenshots on /google-ads-for-clinics/.
 *
 * Every figure quoted as text on that page is read off one of those PNGs, and
 * every one of them is sourced in the copy. This file exists so the wording is
 * written once: the same number described two different ways in two places is
 * how a page stops being evidence.
 *
 * What the screenshots actually show:
 *
 *   ads-graph.png  Google Ads overview. 929 clicks, £3.78k cost, 89
 *                  conversions, £42.50 cost per conversion. The x-axis runs
 *                  29 Dec 2025 to 22 Jun 2026, which is where WINDOW comes from.
 *   google-ad.png  A live search ad with 2,646 impressions, 206 clicks, 7.79%
 *                  CTR. The display URL in the shot is
 *                  links.bodyfunction.co.uk/Osteopath/Angel, so this one is
 *                  provably Bodyfunction's Angel clinic and is named as such.
 *   google-ppc.png Auction insights: "You" at 70% impression share, three
 *                  competing advertisers under 10%.
 *
 * ACCOUNT is now named. It was deliberately unnamed while nothing outside the ad
 * screenshot's display URL identified the advertiser; Simon confirmed on
 * 18 Aug 2026 that all three shots come from the Bodyfunction Clinic account
 * [src: client confirmation]. That is what lets the landing page attach a clinic
 * name and logo to the cost-per-enquiry figure instead of leaving one of three
 * proof rows anonymous.
 *
 * CONVERSION_CAVEAT is not optional ON THIS PAGE. Google counts a conversion as
 * a tracked action — a call, a form, a chat — so FIGURES' £42.50 is a cost per
 * conversion and /google-ads-for-clinics/ must keep saying so.
 *
 * The £30-per-patient figure is no longer held back: Simon confirmed it on
 * 18 Aug 2026 [src: client confirmation] and the /lp/ pages state it as a cost
 * per booked patient. That is a DIFFERENT measure from the £42.50 here, not a
 * correction of it, which is why both numbers are live on different pages. The
 * patient count behind £30 is not recorded — if it turns up, it belongs here
 * beside the figure it produces.
 */

/** The date range visible on the overview chart's x-axis. */
export const WINDOW = "29 Dec 2025 – 22 Jun 2026";

/** How we describe whose account this is. See the note above before changing. */
export const ACCOUNT = "the Bodyfunction Clinic Google Ads account";

/** The clinic the ad screenshot names itself, via its display URL. */
export const AD_CLINIC = "Bodyfunction Clinic";

export const CONVERSION_CAVEAT =
  "Google counts a conversion as a tracked enquiry — a call, a form or a chat — not a booked patient. Figures are from one account over one period and are not a forecast for another clinic.";

/** Figures quoted as text, each with the source that backs it. */
export const FIGURES = [
  {
    value: "£42.50",
    label: "Cost per tracked conversion",
    source: `Google Ads overview, ${WINDOW}. 89 conversions from £3.78k of spend.`,
  },
  {
    value: "7.79%",
    label: "Click-through rate on the live ad",
    source: `Google Ads, the ${AD_CLINIC} search ad shown above: 2,646 impressions, 206 clicks.`,
  },
  {
    value: "70%",
    label: "Share of the local ad auction",
    source: "Google Ads auction insights. The three competing advertisers sat under 10%.",
  },
] as const;

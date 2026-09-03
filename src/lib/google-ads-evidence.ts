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
 * £30 AND £42.50 ARE THE SAME MEASURE OVER DIFFERENT PERIODS. This note used
 * to say they were different measures — £30 a cost per booked patient, £42.50 a
 * cost per conversion — and that reasoning is void. Danny gave £30 as "cost per
 * patient" in WhatsApp on 3 Sep 2026 and Simon confirmed the same day that he
 * means per conversion [src: WhatsApp, Danny + client confirmation, 3 Sep 2026].
 * So both figures count tracked enquiries, and /lp/ has been relabelled to say
 * enquiry rather than booked patient.
 *
 * That leaves one metric with two values live on one site, which is only
 * survivable because they never share a page. £42.50 stays HERE, on the page
 * that shows the screenshot it is read off, described as what that window
 * averaged. £30 stays on /lp/ as Danny's own current figure, with no window,
 * because none has been given for it. DO NOT put £30 on this page or £42.50 on
 * /lp/: side by side they read as a 40% discrepancy in the same number, which is
 * exactly what a clinician checking two pages would spot.
 *
 * Still not recorded: what period £30 covers. Worth asking — with a window it
 * could replace £42.50 outright and the site would carry one figure instead of
 * two.
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

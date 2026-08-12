/**
 * Config for the PPC landing pages under /lp/.
 *
 * These are ad destinations, not site pages: no site nav, no footer sitemap,
 * noindex, and one conversion goal (the audit form at #audit). One structure
 * serves three ad groups so message-match stays tight per ad group without
 * three separate builds.
 */

/**
 * Phone number shown in the landing page header, in two forms.
 * Leave both blank to hide the phone from the landing pages entirely.
 *
 * Note: this is currently the direct number, not a Google Ads call-tracking
 * number, so calls from the campaign are not separable from any other call.
 * Swapping in a forwarding number here is all that is needed to fix that.
 */
export const LP_PHONE = {
  display: "07460 082 683",
  href: "tel:+447460082683",
};

export const LP_CTA_LABEL = "Book a free clinic audit";
export const LP_FORM_ANCHOR = "#audit";
export const LP_THANK_YOU_PATH = "/lp/thank-you/";

export const LP_VARIANT_SLUGS = [
  "healthcare-marketing",
  "physiotherapy-marketing",
  "chiropractic-marketing",
] as const;

export type LpVariantSlug = (typeof LP_VARIANT_SLUGS)[number];

export interface LpVariant {
  slug: LpVariantSlug;
  /** Which Google Ads ad group this URL is the destination for. */
  adGroup: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  /** Split so the middle phrase can carry the accent colour. */
  headline: { start: string; accent: string; end: string };
  subhead: string;
  /** Pre-selects the discipline field so the form matches the ad's intent. */
  defaultDiscipline?: "Physiotherapist" | "Chiropractor";
  /** Conditions named in the SEO pillar — kept discipline-specific. */
  seoConditions: string;
}

const VARIANTS: Record<LpVariantSlug, LpVariant> = {
  "healthcare-marketing": {
    slug: "healthcare-marketing",
    adGroup: "Healthcare marketing / healthcare SEO",
    metaTitle: "Healthcare Marketing Built By Clinic Owners",
    metaDescription:
      "Website, SEO and digital marketing for UK healthcare clinics — built inside a working MSK clinic and managed through Patient Pulse. Book a free clinic audit.",
    badge: "Built inside a working MSK clinic",
    headline: {
      start: "Healthcare marketing built by clinic owners, ",
      accent: "for clinic owners",
      end: "",
    },
    subhead:
      "Clinic Evo is the website, SEO and digital marketing system built inside a real MSK clinic — proven there before we ever offered it to anyone else. Managed day-to-day by Patient Pulse, so every enquiry gets followed up and every gap in the diary gets filled.",
    seoConditions: "back pain, sciatica, sports injury, postural issues and more",
  },
  "physiotherapy-marketing": {
    slug: "physiotherapy-marketing",
    adGroup: "Marketing for physiotherapist",
    metaTitle: "Marketing For Physiotherapists That Fills Diaries",
    metaDescription:
      "Website, SEO and digital marketing for UK physiotherapy clinics — built inside a working MSK clinic, managed through Patient Pulse. Book a free clinic audit.",
    badge: "Built inside a working MSK clinic",
    headline: {
      start: "Marketing that ",
      accent: "fills physiotherapy diaries",
      end: ". Not just traffic reports.",
    },
    subhead:
      "Clinic Evo is the website, SEO and digital marketing system built inside a real MSK clinic — proven on its own diary before we ever offered it to another physio practice. Managed day-to-day by Patient Pulse, so every enquiry gets followed up and every gap in the diary gets filled.",
    defaultDiscipline: "Physiotherapist",
    seoConditions:
      "back pain, sciatica, sports injury, post-operative rehab and more",
  },
  "chiropractic-marketing": {
    slug: "chiropractic-marketing",
    adGroup: "Marketing for chiropractic",
    metaTitle: "Marketing For Chiropractors That Fills Diaries",
    metaDescription:
      "Website, SEO and digital marketing for UK chiropractic clinics — built inside a working MSK clinic, managed through Patient Pulse. Book a free clinic audit.",
    badge: "Built inside a working MSK clinic",
    headline: {
      start: "Marketing that ",
      accent: "fills chiropractic diaries",
      end: ". Not just traffic reports.",
    },
    subhead:
      "Clinic Evo is the website, SEO and digital marketing system built inside a real MSK clinic — proven on its own diary before we ever offered it to another chiropractic practice. Managed day-to-day by Patient Pulse, so every enquiry gets followed up and every gap in the diary gets filled.",
    defaultDiscipline: "Chiropractor",
    seoConditions:
      "back pain, sciatica, neck pain, postural issues and more",
  },
};

export function isLpVariantSlug(value: string): value is LpVariantSlug {
  return (LP_VARIANT_SLUGS as readonly string[]).includes(value);
}

export function getLpVariant(slug: string): LpVariant | null {
  return isLpVariantSlug(slug) ? VARIANTS[slug] : null;
}

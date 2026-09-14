/**
 * The Google tag IDs this site configures, in the order they are configured.
 *
 * There is ONE gtag.js on the page serving both products. Google's own
 * instruction for a second account is to add a `config` command to the existing
 * tag rather than paste a second loader — two loaders means two `gtag()`
 * bootstraps racing over one dataLayer.
 *
 * The Ads ID is hardcoded rather than env-only on purpose: it is a public value
 * that appears in the page source anyway, and requiring a Vercel env var to be
 * set would mean the tag silently does nothing until someone remembers. Set
 * NEXT_PUBLIC_GOOGLE_ADS_ID to override it per environment — worth doing if
 * preview deploys start polluting remarketing audiences, since this fires
 * everywhere the site runs, localhost included.
 *
 * AW-18383138793 is Danny Morgan's Google Ads account (shared 26 Aug 2026).
 */
export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18383138793";

/** GA4 stays env-gated, as it was — it is not configured in every environment. */
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";

/**
 * Every ID to hand to `gtag('config', ...)`. Non-empty means a tag is on the
 * page, which is the condition CookieBanner needs before it can push consent —
 * checking GA4 alone would leave ad_storage denied forever on a site running
 * Ads without GA4.
 */
export const GOOGLE_TAG_IDS = [GA4_ID, GOOGLE_ADS_ID].filter(Boolean);

type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent({ action, category, label, value }: GTagEvent) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

export const events = {
  // `label` is which form on the page converted. The paid landing pages carry
  // two since 9 Sep 2026 (at the audit pitch and at the foot of the page), and
  // without this they would be indistinguishable in the event report.
  freeAuditSubmit: (label?: string) =>
    trackEvent({ action: "free_audit_submit", category: "conversion", label }),
  contactFormSubmit: () =>
    trackEvent({ action: "contact_form_submit", category: "conversion" }),
  // Its own action rather than a label on free_audit_submit: the graduate
  // intake is a separate funnel with a separate cap, and merging the two would
  // make the audit conversion count meaningless the moment an intake opens.
  graduateApplySubmit: () =>
    trackEvent({ action: "graduate_apply_submit", category: "conversion" }),
  whatsappClick: () =>
    trackEvent({ action: "whatsapp_click", category: "engagement" }),
  // `label` carries the placement. It was added when the landing pages offered
  // click-to-call in three positions; all three were removed on 26 Aug 2026
  // (see LP_PHONE in src/lib/lp.ts), so on /lp/ this now only fires from the
  // thank-you page's number. The parameter stays for the site pages and for
  // whenever a tracked call-forwarding number is put back.
  phoneClick: (label?: string) =>
    trackEvent({ action: "phone_click", category: "engagement", label }),
  emailClick: () =>
    trackEvent({ action: "email_click", category: "engagement" }),
  auditCtaClick: (label?: string) =>
    trackEvent({ action: "audit_cta_click", category: "engagement", label }),
  // The Growth System pages (/lp/growth-system/) have their own conversion
  // and their own CTA event. Kept apart from the audit events on purpose: one
  // funnel offers something free, the other asks for a call about a monthly
  // fee, and a shared count would make both meaningless.
  growthCallSubmit: () =>
    trackEvent({ action: "growth_call_submit", category: "conversion" }),
  growthCtaClick: (label?: string) =>
    trackEvent({ action: "growth_cta_click", category: "engagement", label }),
};

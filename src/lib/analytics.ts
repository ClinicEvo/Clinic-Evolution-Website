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
  freeAuditSubmit: () =>
    trackEvent({ action: "free_audit_submit", category: "conversion" }),
  contactFormSubmit: () =>
    trackEvent({ action: "contact_form_submit", category: "conversion" }),
  whatsappClick: () =>
    trackEvent({ action: "whatsapp_click", category: "engagement" }),
  // `label` carries the placement on the landing pages, where click-to-call is
  // offered in three positions and we need to know which one earns the calls.
  phoneClick: (label?: string) =>
    trackEvent({ action: "phone_click", category: "engagement", label }),
  emailClick: () =>
    trackEvent({ action: "email_click", category: "engagement" }),
  auditCtaClick: (label?: string) =>
    trackEvent({ action: "audit_cta_click", category: "engagement", label }),
};

"use client";

import { useEffect, useState } from "react";

/**
 * Carries ad-click and campaign parameters through the form submission so a
 * lead in the CRM can be traced back to the campaign, ad group and search term
 * that produced it. Empty for organic visitors, which is fine.
 *
 * gbraid and wbraid are the iOS equivalents of gclid: since App Tracking
 * Transparency, Google Ads clicks from Safari on iPhone arrive with one of
 * those instead, so a form that only read gclid was losing attribution on the
 * device most paid clinic-owner traffic arrives on. utm_content is where the
 * ad or creative variant is usually put.
 *
 * Read from window.location rather than useSearchParams so the surrounding
 * form does not need a Suspense boundary.
 */
const TRACKED_PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const MAX_LENGTH = 200;

export default function TrackingFields() {
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    for (const key of TRACKED_PARAMS) {
      const value = params.get(key);
      if (value) found[key] = value.slice(0, MAX_LENGTH);
    }
    setValues(found);
  }, []);

  return (
    <>
      {TRACKED_PARAMS.map((key) => (
        <input key={key} type="hidden" name={key} value={values[key] ?? ""} readOnly />
      ))}
    </>
  );
}

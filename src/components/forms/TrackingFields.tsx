"use client";

import { useEffect, useState } from "react";

/**
 * Carries ad-click and campaign parameters through the form submission so a
 * lead in the CRM can be traced back to the campaign, ad group and search term
 * that produced it. Empty for organic visitors, which is fine.
 *
 * Read from window.location rather than useSearchParams so the surrounding
 * form does not need a Suspense boundary.
 */
const TRACKED_PARAMS = [
  "gclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
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

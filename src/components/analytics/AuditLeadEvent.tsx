"use client";

import { useEffect } from "react";
import { trackAuditLead } from "@/lib/analytics";

/** Sends the GA4 `generate_lead` event once, on the audit thank-you page, for a
 *  visit that came from a successful submission. See trackAuditLead. */
export default function AuditLeadEvent() {
  useEffect(() => {
    trackAuditLead();
  }, []);
  return null;
}

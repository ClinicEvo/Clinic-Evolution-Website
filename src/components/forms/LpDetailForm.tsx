"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { Field, Input, Select, Textarea, Honeypot } from "./Field";

/**
 * The questions the landing-page form stopped asking.
 *
 * Shortening the audit form to four fields raises submissions and loses the
 * qualification data, so the data is asked for here instead — after the lead is
 * already saved server-side, where abandoning this form costs nothing. The
 * submission upserts on the same email, so GHL updates the existing contact
 * rather than creating a second one.
 *
 * Renders nothing unless LpAuditForm left an identity in sessionStorage. That is
 * deliberate: with no email there is no contact to attach the answers to, and a
 * form that silently discards what someone typed is worse than no form. Anyone
 * landing here directly, or in a private window where the write threw, simply
 * does not see it.
 */
const DISCIPLINES = ["Osteopath", "Physiotherapist", "Chiropractor", "Other"];
const BOOKING_SYSTEMS = ["Cliniko", "Pabau", "Jane", "Other online booking", "Phone / email only", "Not sure"];
const LEAD_SOURCES = ["Google search", "Google Ads", "Word of mouth / referrals", "Social media", "Directories / health platforms", "A real mix", "Not sure"];
const GOALS = ["More enquiries", "Better SEO visibility", "Improved website", "Google Ads", "Patient reactivation", "Not sure yet"];

interface Lead {
  email: string;
  first_name: string;
  last_name: string;
  discipline: string;
  lp_variant: string;
}

export default function LpDetailForm() {
  const [lead, setLead] = useState<Lead | null>(null);
  const { state, errorMsg, handleSubmit } = useFormSubmit({ formType: "audit" });

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("lp_audit_lead");
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<Lead>;
      if (parsed.email) setLead(parsed as Lead);
    } catch {
      // Malformed or unavailable. Nothing to attach answers to, so render nothing.
    }
  }, []);

  if (!lead) return null;

  if (state === "success") {
    return (
      <div className="card-surface max-w-lg p-6">
        <p className="text-body font-semibold text-[var(--color-ink)]">
          Got it — that goes on your file.
        </p>
        <p className="text-body-sm mt-1.5 text-[var(--color-muted)]">
          It means the audit that lands in your inbox is about your clinic
          specifically rather than a generic checklist.
        </p>
      </div>
    );
  }

  return (
    <div className="card-surface max-w-lg p-6">
      <p className="text-h4 mb-1.5 text-[var(--color-ink)]">
        Want a sharper audit? Four more questions.
      </p>
      <p className="text-body-sm mb-6 text-[var(--color-muted)]">
        Entirely optional — your request is already with us. These just let us
        skip the guesswork.
      </p>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <Honeypot />
        {/* Identity, so this upserts onto the contact the audit form created. */}
        <input type="hidden" name="email" value={lead.email} readOnly />
        <input type="hidden" name="first_name" value={lead.first_name} readOnly />
        <input type="hidden" name="last_name" value={lead.last_name} readOnly />
        <input type="hidden" name="lp_variant" value={lead.lp_variant} readOnly />

        <Field label="Discipline">
          <Select id="discipline" name="discipline" defaultValue={lead.discipline}>
            <option value="">Select your discipline…</option>
            {DISCIPLINES.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </Select>
        </Field>

        <Field label="Clinic name">
          <Input id="clinic_name" name="clinic_name" type="text" placeholder="Bodyfunction Clinic" />
        </Field>

        <Field label="Town / city">
          <Input id="location" name="location" type="text" placeholder="e.g. Bristol" />
        </Field>

        <Field label="Booking system">
          <Select id="booking_system" name="booking_system" defaultValue="">
            <option value="">How do patients book?</option>
            {BOOKING_SYSTEMS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </Select>
        </Field>

        <Field label="Where do most new patients come from now?">
          <Select id="lead_sources" name="lead_sources" defaultValue="">
            <option value="">Select the main source…</option>
            {LEAD_SOURCES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </Select>
        </Field>

        <Field label="Main goal">
          <Select id="goal" name="goal" defaultValue="">
            <option value="">What is your main focus?</option>
            {GOALS.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </Select>
        </Field>

        <Field label="Anything else we should know?">
          <Textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Whatever is on your mind about the clinic right now…"
          />
        </Field>

        {state === "error" && (
          <p role="alert" className="text-sm text-[var(--color-error)]">
            {errorMsg}
          </p>
        )}

        <Button type="submit" size="md" disabled={state === "submitting"} className="w-full sm:w-auto">
          {state === "submitting" ? "Saving…" : "Add this to my audit"}
        </Button>
      </form>
    </div>
  );
}

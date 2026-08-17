"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { events } from "@/lib/analytics";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { LP_TURNAROUND, type LpVariant } from "@/lib/lp";
import { Field, Input, Honeypot } from "./Field";
import TrackingFields from "./TrackingFields";

/**
 * Four questions. The organic /free-clinic-audit/ form asks eleven, nine of them
 * required, which is a reasonable trade on a visitor who arrived through the
 * site and is defensible there. On paid traffic it asks a stranger for their
 * booking system and their main goal before anything has earned the right to.
 *
 * What is left is the minimum needed to actually run an audit: who you are, two
 * ways to reach you, and the website to look at. Everything else is asked on the
 * thank-you page instead, after the lead is already captured, where abandoning it
 * costs nothing — see LpDetailForm.
 *
 * `discipline` is a hidden field rather than a dropdown because the ad group
 * already answered it. It is empty on the broad healthcare variant, which the
 * API allows for paid leads only.
 *
 * The name is one field. It is split on submit rather than asked twice, because
 * "First name / Last name" is two required boxes for one piece of information.
 */
export default function LpAuditForm({ variant }: { variant: LpVariant }) {
  const router = useRouter();
  const { state, errorMsg, handleSubmit } = useFormSubmit({
    formType: "audit",
    onSuccess: (payload) => {
      events.freeAuditSubmit();
      // Hand the identity to the thank-you page so its optional follow-up
      // questions can upsert onto the same CRM contact. sessionStorage rather
      // than a query string: this is PII and does not belong in a URL, in
      // history, or in a referrer header.
      try {
        sessionStorage.setItem(
          "lp_audit_lead",
          JSON.stringify({
            email: payload.email ?? "",
            first_name: payload.first_name ?? "",
            last_name: payload.last_name ?? "",
            discipline: payload.discipline ?? "",
            lp_variant: variant.slug,
          }),
        );
      } catch {
        // Private browsing can throw on write. The lead is already saved
        // server-side, so the follow-up step simply will not render.
      }
      router.push("/lp/thank-you/");
    },
  });

  /** Splits "Danny Morgan" into the two fields the CRM expects. */
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const full = (form.elements.namedItem("full_name") as HTMLInputElement | null)?.value ?? "";
    const parts = full.trim().split(/\s+/);
    const first = form.elements.namedItem("first_name") as HTMLInputElement | null;
    const last = form.elements.namedItem("last_name") as HTMLInputElement | null;
    if (first) first.value = parts[0] ?? "";
    if (last) last.value = parts.slice(1).join(" ");
    handleSubmit(e);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <Honeypot />
      <TrackingFields />
      <input type="hidden" name="lp_variant" value={variant.slug} readOnly />
      <input
        type="hidden"
        name="discipline"
        value={variant.defaultDiscipline ?? ""}
        readOnly
      />
      {/* Populated from full_name on submit. */}
      <input type="hidden" name="first_name" defaultValue="" />
      <input type="hidden" name="last_name" defaultValue="" />

      <Field label="Your name" required>
        <Input
          id="full_name"
          name="full_name"
          type="text"
          required
          autoComplete="name"
          placeholder="Danny Morgan"
        />
      </Field>

      <Field label="Email address" required>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@yourclinic.co.uk"
        />
      </Field>

      <Field label="Phone" required>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="So we can talk it through"
        />
      </Field>

      <Field label="Clinic website" required>
        <Input
          id="clinic_website"
          name="clinic_website"
          type="text"
          required
          autoComplete="url"
          inputMode="url"
          placeholder="yourclinic.co.uk"
        />
      </Field>

      {state === "error" && (
        <p role="alert" className="text-sm text-[var(--color-error)]">
          {errorMsg}
        </p>
      )}

      <Button type="submit" size="lg" disabled={state === "submitting"} className="w-full">
        {state === "submitting" ? "Sending…" : "Book my free clinic audit"}
      </Button>

      <p className="text-xs leading-relaxed text-[var(--color-muted)]">
        Four questions, no obligation. A person reads it and comes back{" "}
        {LP_TURNAROUND} with what they found.
      </p>
    </form>
  );
}

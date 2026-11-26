"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input, Textarea, Honeypot } from "@/components/forms/Field";
import TrackingFields from "@/components/forms/TrackingFields";
import { events } from "@/lib/analytics";
import { useFormSubmit } from "@/lib/useFormSubmit";

/**
 * The audit form proposed for the foot of the homepage: full name, email,
 * clinic website (optional), phone number, and an optional note. Town or
 * city was dropped in review and the phone field added.
 *
 * WIRED TO GOHIGHLEVEL through /api/submit-form as form_type
 * "homepage-audit", its own branch: the "audit" branch that
 * /free-clinic-audit/ uses requires fields this form does not ask for, and
 * is left exactly as it was. Leads arrive with the source "Website –
 * Homepage audit form" and the tag homepage-audit-form. Every submission,
 * including a reviewer trying the draft, creates a real contact.
 *
 * The name is one field, split into first and last on submit, as LpAuditForm
 * does.
 */
/* Required marker: a coral asterisk, read aloud as "required" since the
   visual star alone means nothing to a screen reader. */
function Req() {
  return (
    <span className="text-[var(--color-accent-text)]">
      <span aria-hidden="true">*</span>
      <span className="sr-only">(required)</span>
    </span>
  );
}

const LABEL = "mb-1.5 block text-sm font-medium text-[var(--color-ink)]";

export default function DraftAuditForm() {
  const router = useRouter();
  const { state, errorMsg, handleSubmit } = useFormSubmit({
    formType: "homepage-audit",
    onSuccess: () => {
      // Same conversion as the audit page, labelled so the two can be told apart.
      events.freeAuditSubmit("homepage");
      router.push("/free-clinic-audit/thank-you/");
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
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Honeypot />
      <TrackingFields />
      <input type="hidden" name="first_name" defaultValue="" />
      <input type="hidden" name="last_name" defaultValue="" />
      {/* Required fields carry a coral asterisk, explained by a quiet note
          under the button; the optional ones also say so. Labels wrap their
          inputs, as Field does, so each control stays labelled. */}
      <label className="block">
        <span className={LABEL}>Full name <Req /></span>
        <Input name="full_name" type="text" required autoComplete="name" />
      </label>
      <label className="block">
        <span className={LABEL}>Phone number <Req /></span>
        <Input name="phone" type="tel" required autoComplete="tel" />
      </label>
      <label className="block">
        <span className={LABEL}>Email address <Req /></span>
        <Input name="email" type="email" required autoComplete="email" />
      </label>
      <label className="block">
        <span className={LABEL}>
          Clinic website <span className="font-normal text-[var(--color-muted)]">(optional)</span>
        </span>
        <Input name="clinic_website" type="url" autoComplete="url" />
      </label>
      <label className="block">
        <span className={LABEL}>
          Anything else you&apos;d like us to know?{" "}
          <span className="font-normal text-[var(--color-muted)]">(optional)</span>
        </span>
        <Textarea name="message" rows={3} />
      </label>

      {/* The privacy notice UK GDPR expects at the point of collection,
          read before the button rather than after it. */}
      <p className="mt-1 text-[12px] text-[var(--color-muted)]">
        By submitting, you agree to our{" "}
        <Link
          href="/privacy-policy/"
          className="underline underline-offset-2 transition-colors hover:text-[var(--color-ink)]"
        >
          Privacy Policy
        </Link>
        .
      </p>

      {state === "error" && (
        <p role="alert" className="text-sm text-[var(--color-error)]">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="-mt-1 inline-flex w-full items-center justify-center font-semibold text-white transition-colors bg-[var(--color-accent)] hover:bg-[var(--color-accent-strong)] active:translate-y-px disabled:opacity-70"
        style={{
          padding: "0.85rem 28px",
          borderRadius: "var(--radius-btn)",
          fontSize: "15px",
          fontFamily: "var(--font-display)",
          transitionDuration: "var(--duration-base)",
        }}
      >
        {state === "submitting" ? "Sending…" : "Get my free clinic audit"}
      </button>

      {/* What the asterisks mean, quiet and left-aligned under the button. */}
      <p className="-mt-1 text-[12px] text-[var(--color-muted)]">
        <span aria-hidden="true">*</span> Required
      </p>
    </form>
  );
}

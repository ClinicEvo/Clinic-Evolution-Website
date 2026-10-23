"use client";

import { useState } from "react";
import { Field, Input } from "@/components/forms/Field";

/**
 * The four-field audit form proposed for the foot of the homepage: name,
 * email, website, town.
 *
 * DELIBERATELY NOT WIRED. This renders on an internal review draft, so a real
 * submission would land a test lead in the CRM every time a reviewer tried it.
 * It also cannot be wired as specified yet: /api/submit-form requires a phone
 * number on every audit submission, and this form has no phone field. Either
 * the API relaxes that for this form or a fifth field comes back — decide that
 * before this replaces the live homepage, and build it on useFormSubmit the way
 * LpAuditForm does.
 */
export default function DraftAuditForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-4"
    >
      <Field label="Your name" required>
        <Input name="full_name" type="text" required autoComplete="name" placeholder="Jane Smith" />
      </Field>
      <Field label="Email address" required>
        <Input name="email" type="email" required autoComplete="email" placeholder="jane@myclinic.co.uk" />
      </Field>
      <Field label="Clinic website">
        <Input name="clinic_website" type="url" autoComplete="url" placeholder="https://www.myclinic.co.uk" />
      </Field>
      <Field label="Town or city" required>
        <Input name="location" type="text" required placeholder="e.g. Bristol" />
      </Field>

      <button
        type="submit"
        className="mt-2 inline-flex w-full items-center justify-center font-semibold text-white transition-colors bg-[var(--color-accent)] hover:bg-[var(--color-accent-strong)] active:translate-y-px"
        style={{
          padding: "15px 28px",
          borderRadius: "9999px",
          fontSize: "15px",
          fontFamily: "var(--font-display)",
          transitionDuration: "var(--duration-base)",
        }}
      >
        Get my free clinic audit
      </button>

      <p className="text-[12px] text-[var(--color-muted)]" role="status">
        {submitted
          ? "Draft preview: this form is not connected yet, so nothing was sent."
          : "Back to you within two business days. No commitment."}
      </p>
    </form>
  );
}

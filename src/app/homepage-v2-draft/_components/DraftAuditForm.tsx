"use client";

import { useState } from "react";
import { Input } from "@/components/forms/Field";

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
const LABEL = "mb-1.5 block text-sm font-medium text-[var(--color-ink)]";

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
      {/* No asterisks: three of the four fields are required, so the one
          that is not says so instead. Labels wrap their inputs, as Field does,
          so each control stays labelled for screen readers. */}
      <label className="block">
        <span className={LABEL}>Your name</span>
        <Input name="full_name" type="text" required autoComplete="name" />
      </label>
      <label className="block">
        <span className={LABEL}>Email address</span>
        <Input name="email" type="email" required autoComplete="email" />
      </label>
      <label className="block">
        <span className={LABEL}>
          Clinic website <span className="font-normal text-[var(--color-muted)]">(optional)</span>
        </span>
        <Input name="clinic_website" type="url" autoComplete="url" />
      </label>
      <label className="block">
        <span className={LABEL}>Town or city</span>
        <Input name="location" type="text" required autoComplete="address-level2" />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex w-full items-center justify-center font-semibold text-white transition-colors bg-[var(--color-accent)] hover:bg-[var(--color-accent-strong)] active:translate-y-px"
        style={{
          padding: "0.85rem 28px",
          borderRadius: "var(--radius-btn)",
          fontSize: "15px",
          fontFamily: "var(--font-display)",
          transitionDuration: "var(--duration-base)",
        }}
      >
        Get my free clinic audit
      </button>

      <p className="text-center text-[13px] leading-snug text-[var(--color-muted)]" role="status">
        {submitted
          ? "Draft preview: this form is not connected yet, so nothing was sent."
          : "Back to you within two business days. No commitment."}
      </p>
    </form>
  );
}

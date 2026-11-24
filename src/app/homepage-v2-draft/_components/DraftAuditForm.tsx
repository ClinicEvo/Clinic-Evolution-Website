"use client";

import Link from "next/link";
import { useState } from "react";
import { Input, Textarea } from "@/components/forms/Field";

/**
 * The audit form proposed for the foot of the homepage: full name, email,
 * clinic website (optional), phone number, and an optional note. Town or
 * city was dropped in review and the phone field added, which also meets
 * /api/submit-form's requirement of a phone number on audit submissions.
 *
 * DELIBERATELY NOT WIRED. This renders on an internal review draft, so a real
 * submission would land a test lead in the CRM every time a reviewer tried it.
 * Before this replaces the live homepage, build it on useFormSubmit the way
 * LpAuditForm does.
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
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-4"
    >
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

      <button
        type="submit"
        className="-mt-1 inline-flex w-full items-center justify-center font-semibold text-white transition-colors bg-[var(--color-accent)] hover:bg-[var(--color-accent-strong)] active:translate-y-px"
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

      {/* What the asterisks mean, quiet and left-aligned under the button. */}
      <p className="-mt-1 text-[12px] text-[var(--color-muted)]">
        <span aria-hidden="true">*</span> Required
      </p>

      {/* Only the required note sits under the button, at the user's
          request. The status note only appears after a submit, since this
          draft form sends nothing. */}
      <p
        className={`text-center text-[13px] leading-snug text-[var(--color-muted)]${submitted ? "" : " sr-only"}`}
        role="status"
      >
        {submitted ? "Draft preview: this form is not connected yet, so nothing was sent." : null}
      </p>
    </form>
  );
}

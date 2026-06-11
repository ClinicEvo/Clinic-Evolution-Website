"use client";

import Button from "@/components/ui/Button";
import { events } from "@/lib/analytics";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { Field, Input, Textarea, Honeypot } from "./Field";

export default function ContactForm() {
  const { state, errorMsg, handleSubmit } = useFormSubmit({
    formType: "contact",
    onSuccess: (_p, form) => {
      events.contactFormSubmit();
      form.reset();
    },
  });

  if (state === "success") {
    return (
      <div className="rounded-xl bg-[var(--color-accent-light)] border border-[var(--color-accent)]/20 p-8 text-center">
        <svg aria-hidden="true" className="mx-auto mb-4 text-[var(--color-accent)]" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
          <path d="M12 20l5.5 5.5L28 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="text-h3 text-[var(--color-ink)] mb-2">Message received!</h3>
        <p className="text-body text-[var(--color-muted)]">We&apos;ll be in touch within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Honeypot />

      <Field label="Name" required>
        <Input id="contact_name" name="name" type="text" required autoComplete="name" placeholder="Jane Smith" />
      </Field>

      <Field label="Email address" required>
        <Input id="contact_email" name="email" type="email" required autoComplete="email" placeholder="jane@myclinic.co.uk" />
      </Field>

      <Field label="Message" required>
        <Textarea id="contact_message" name="message" rows={5} required placeholder="Tell us about your clinic and what you're hoping to achieve…" />
      </Field>

      {state === "error" && (
        <p role="alert" className="text-sm text-[var(--color-error)]">{errorMsg}</p>
      )}

      <Button type="submit" size="lg" disabled={state === "submitting"}>
        {state === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

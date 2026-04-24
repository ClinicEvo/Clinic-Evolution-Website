"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";
import { events } from "@/lib/analytics";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    if (payload._honey) {
      setState("success");
      return;
    }

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!key) {
      setState("error");
      setErrorMsg("Form is not configured. Please email us directly.");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: `Website enquiry from ${payload.name}`,
          ...payload,
          _honey: undefined,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      events.contactFormSubmit();
      setState("success");
      form.reset();
    } catch {
      setState("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-xl bg-[var(--color-accent-light)] border border-[var(--color-accent)]/20 p-8 text-center">
        <svg
          aria-hidden="true"
          className="mx-auto mb-4 text-[var(--color-accent)]"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 20l5.5 5.5L28 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="text-h3 text-[var(--color-ink)] mb-2">Message received!</h3>
        <p className="text-body text-[var(--color-muted)]">
          We&apos;ll be in touch within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot */}
      <input
        type="text"
        name="_honey"
        defaultValue=""
        aria-hidden="true"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="contact_name" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
          Name <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
        </label>
        <input
          id="contact_name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-muted-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition"
          placeholder="Jane Smith"
        />
      </div>

      <div>
        <label htmlFor="contact_email" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
          Email address <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
        </label>
        <input
          id="contact_email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-muted-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition"
          placeholder="jane@myclinic.co.uk"
        />
      </div>

      <div>
        <label htmlFor="contact_message" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
          Message <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
        </label>
        <textarea
          id="contact_message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-muted-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition resize-none"
          placeholder="Tell us about your clinic and what you're hoping to achieve…"
        />
      </div>

      {state === "error" && (
        <p role="alert" className="text-sm text-[var(--color-error)]">
          {errorMsg}
        </p>
      )}

      <Button type="submit" size="lg" disabled={state === "submitting"}>
        {state === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

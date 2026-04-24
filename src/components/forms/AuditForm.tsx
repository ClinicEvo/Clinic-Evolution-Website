"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { events } from "@/lib/analytics";

type FormState = "idle" | "submitting" | "error";

const DISCIPLINES = ["Osteopath", "Physiotherapist", "Chiropractor", "Other"];

export default function AuditForm() {
  const router = useRouter();
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    // Honeypot check (should be empty)
    if (payload._honey) {
      router.push("/free-clinic-audit/thank-you/");
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
          subject: `Free Clinic Audit Request – ${payload.clinic_name}`,
          ...payload,
          _honey: undefined,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      events.freeAuditSubmit();
      router.push("/free-clinic-audit/thank-you/");
    } catch {
      setState("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
    >
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="first_name" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
            First name <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            autoComplete="given-name"
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-muted-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="last_name" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
            Last name <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            required
            autoComplete="family-name"
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-muted-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
          Email address <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-muted-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition"
          placeholder="jane@myclinic.co.uk"
        />
      </div>

      <div>
        <label htmlFor="clinic_name" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
          Clinic name <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
        </label>
        <input
          id="clinic_name"
          name="clinic_name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-muted-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition"
          placeholder="Acme Osteopathy"
        />
      </div>

      <div>
        <label htmlFor="clinic_website" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
          Clinic website
        </label>
        <input
          id="clinic_website"
          name="clinic_website"
          type="url"
          autoComplete="url"
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-muted-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition"
          placeholder="https://www.myclinic.co.uk"
        />
      </div>

      <div>
        <label htmlFor="discipline" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
          Discipline <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
        </label>
        <select
          id="discipline"
          name="discipline"
          required
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition appearance-none"
        >
          <option value="">Select your discipline…</option>
          {DISCIPLINES.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
          Anything else you&apos;d like us to know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-muted-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition resize-none"
          placeholder="Tell us your current challenges or goals…"
        />
      </div>

      {state === "error" && (
        <p role="alert" className="text-sm text-[var(--color-error)]">
          {errorMsg}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={state === "submitting"}
        className="w-full sm:w-auto"
      >
        {state === "submitting" ? "Sending…" : "Book my free audit"}
      </Button>

      <p className="text-xs text-[var(--color-muted)]">
        No commitment. We&apos;ll review your clinic&apos;s online presence and send you a
        personalised report within 2 business days.
      </p>
    </form>
  );
}

"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { events } from "@/lib/analytics";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { Field, Input, Textarea, Select, Honeypot } from "./Field";

const DISCIPLINES = ["Osteopath", "Physiotherapist", "Chiropractor", "Other"];

export default function AuditForm() {
  const router = useRouter();
  const { state, errorMsg, handleSubmit } = useFormSubmit({
    subject: (p) => `Free Clinic Audit Request – ${p.clinic_name}`,
    onSuccess: () => {
      events.freeAuditSubmit();
      router.push("/free-clinic-audit/thank-you/");
    },
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Honeypot />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="First name" required>
          <Input id="first_name" name="first_name" type="text" required autoComplete="given-name" placeholder="Jane" />
        </Field>
        <Field label="Last name" required>
          <Input id="last_name" name="last_name" type="text" required autoComplete="family-name" placeholder="Smith" />
        </Field>
      </div>

      <Field label="Email address" required>
        <Input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@myclinic.co.uk" />
      </Field>

      <Field label="Clinic name" required>
        <Input id="clinic_name" name="clinic_name" type="text" required placeholder="Peak Physio" />
      </Field>

      <Field label="Clinic website">
        <Input id="clinic_website" name="clinic_website" type="url" autoComplete="url" placeholder="https://www.myclinic.co.uk" />
      </Field>

      <Field label="Discipline" required>
        <Select id="discipline" name="discipline" required>
          <option value="">Select your discipline…</option>
          {DISCIPLINES.map((d) => <option key={d} value={d}>{d}</option>)}
        </Select>
      </Field>

      <Field label="Anything else you'd like us to know?">
        <Textarea id="message" name="message" rows={4} placeholder="Tell us your current challenges or goals…" />
      </Field>

      {state === "error" && (
        <p role="alert" className="text-sm text-[var(--color-error)]">{errorMsg}</p>
      )}

      <Button type="submit" size="lg" disabled={state === "submitting"} className="w-full sm:w-auto">
        {state === "submitting" ? "Sending…" : "Book a free clinic audit"}
      </Button>

      <p className="text-xs text-[var(--color-muted)]">
        No commitment. We&apos;ll review your clinic&apos;s online presence and send you a
        personalised report within 2 business days.
      </p>
    </form>
  );
}

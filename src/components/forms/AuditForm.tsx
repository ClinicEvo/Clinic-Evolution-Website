"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { events } from "@/lib/analytics";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { Field, Input, Textarea, Select, Honeypot } from "./Field";
import TrackingFields from "./TrackingFields";

const DISCIPLINES = ["Osteopath", "Physiotherapist", "Chiropractor", "Other"];
const BOOKING_SYSTEMS = ["Cliniko", "Pabau", "Jane", "Other online booking", "Phone / email only", "Not sure"];
const LEAD_SOURCES = ["Google search", "Google Ads", "Word of mouth / referrals", "Social media", "Directories / health platforms", "A real mix", "Not sure"];
const GOALS = ["More enquiries", "Better SEO visibility", "Improved website", "Google Ads", "Patient reactivation", "Not sure yet"];

interface AuditFormProps {
  /**
   * Set on the PPC landing pages so paid leads are tagged separately in the CRM
   * from organic audit requests. Validated against a server-side allowlist.
   */
  lpVariant?: string;
  /** Pre-selects the discipline when the traffic source already implies it. */
  defaultDiscipline?: string;
  /** Confirmation page to land on after a successful submission. */
  redirectTo?: string;
}

export default function AuditForm({
  lpVariant,
  defaultDiscipline,
  redirectTo = "/free-clinic-audit/thank-you/",
}: AuditFormProps = {}) {
  const router = useRouter();
  const { state, errorMsg, handleSubmit } = useFormSubmit({
    formType: "audit",
    onSuccess: () => {
      events.freeAuditSubmit();
      router.push(redirectTo);
    },
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Honeypot />
      <TrackingFields />
      {lpVariant ? <input type="hidden" name="lp_variant" value={lpVariant} readOnly /> : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="First name" required>
          <Input id="first_name" name="first_name" type="text" required autoComplete="given-name" placeholder="Jane" />
        </Field>
        <Field label="Last name" required>
          <Input id="last_name" name="last_name" type="text" required autoComplete="family-name" placeholder="Smith" />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email address" required>
          <Input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@myclinic.co.uk" />
        </Field>
        <Field label="Phone">
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" />
        </Field>
      </div>

      <Field label="Clinic name" required>
        <Input id="clinic_name" name="clinic_name" type="text" required placeholder="Peak Physio" />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Clinic website" required>
          <Input id="clinic_website" name="clinic_website" type="url" required autoComplete="url" placeholder="https://www.myclinic.co.uk" />
        </Field>
        <Field label="Town / City" required>
          <Input id="location" name="location" type="text" required placeholder="e.g. Bristol" />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Discipline" required>
          <Select id="discipline" name="discipline" required defaultValue={defaultDiscipline ?? ""}>
            <option value="">Select your discipline…</option>
            {DISCIPLINES.map((d) => <option key={d} value={d}>{d}</option>)}
          </Select>
        </Field>
        <Field label="Booking system" required>
          <Select id="booking_system" name="booking_system" required>
            <option value="">How do patients book?</option>
            {BOOKING_SYSTEMS.map((b) => <option key={b} value={b}>{b}</option>)}
          </Select>
        </Field>
      </div>

      <Field label="Where do most new patients come from now?" required>
        <Select id="lead_sources" name="lead_sources" required>
          <option value="">Select the main source…</option>
          {LEAD_SOURCES.map((s) => <option key={s} value={s}>{s}</option>)}
        </Select>
      </Field>

      <Field label="Main goal" required>
        <Select id="goal" name="goal" required>
          <option value="">What is your main focus?</option>
          {GOALS.map((g) => <option key={g} value={g}>{g}</option>)}
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

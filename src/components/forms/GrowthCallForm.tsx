"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { events } from "@/lib/analytics";
import { useFormSubmit } from "@/lib/useFormSubmit";
import {
  GROWTH_BOOKING_SYSTEMS,
  GROWTH_BUDGET_BANDS,
  GROWTH_CHALLENGES,
  GROWTH_CONSENT_LABEL,
  GROWTH_CTA_LABEL,
  GROWTH_LOCATION_COUNTS,
  GROWTH_PROFESSIONS,
  GROWTH_REVENUE_BANDS,
  GROWTH_THANK_YOU_PATH,
  type GrowthVariant,
} from "@/lib/growth-system";
import { Field, Honeypot, Input, Select } from "./Field";
import TrackingFields from "./TrackingFields";

/**
 * The growth call request: the brief's ten fields, nine required and the
 * booking system optional, plus the consent checkbox. [src: lp brief, p10]
 *
 * This is the long form the audit pages deliberately are not, and the
 * proportion argument that made theirs short makes this one long: the audit
 * asks four fields for something free; this asks a clinic owner considering a
 * monthly commitment for enough to judge fit before either side spends an hour
 * on a call. Revenue and budget are the two questions that do that job, and
 * they are the ones a shorter form would drop.
 *
 * The name is one field, split on submit, as on LpAuditForm. The profession
 * pre-selects from the page's discipline, so on three of the four pages it is
 * already answered.
 *
 * On success the identity goes to sessionStorage (not the URL: it is PII) and
 * the visitor is sent to the thank-you page, which confirms the request and
 * says a person will be in touch to arrange the time.
 */
export default function GrowthCallForm({ variant }: { variant: GrowthVariant }) {
  const router = useRouter();
  const { state, errorMsg, handleSubmit } = useFormSubmit({
    formType: "growth-call",
    onSuccess: (payload) => {
      events.growthCallSubmit();
      try {
        sessionStorage.setItem(
          "growth_call_lead",
          JSON.stringify({
            first_name: payload.first_name ?? "",
            email: payload.email ?? "",
            growth_variant: variant.slug,
          }),
        );
      } catch {
        // Private browsing can throw on write. The lead is already saved
        // server-side; the thank-you page simply renders without a name.
      }
      router.push(GROWTH_THANK_YOU_PATH);
    },
  });

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
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <Honeypot />
      <TrackingFields />
      <input type="hidden" name="growth_variant" value={variant.slug} readOnly />
      <input type="hidden" name="first_name" defaultValue="" />
      <input type="hidden" name="last_name" defaultValue="" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Your name" required>
          <Input id="book-full_name" name="full_name" type="text" required autoComplete="name" placeholder="Danny Morgan" />
        </Field>
        <Field label="Clinic name" required>
          <Input id="book-clinic_name" name="clinic_name" type="text" required autoComplete="organization" placeholder="Bodyfunction Clinic" />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email address" required>
          <Input id="book-email" name="email" type="email" required autoComplete="email" placeholder="you@yourclinic.co.uk" />
        </Field>
        <Field label="Mobile number" required>
          <Input id="book-phone" name="phone" type="tel" required autoComplete="tel" placeholder="07700 900123" />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Profession" required>
          <Select id="book-profession" name="profession" required defaultValue={variant.defaultProfession ?? ""}>
            <option value="">Select your profession…</option>
            {GROWTH_PROFESSIONS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </Select>
        </Field>
        <Field label="Clinic location" required>
          <Input id="book-location" name="location" type="text" required placeholder="Town or city" />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Number of locations" required>
          <Select id="book-locations_count" name="locations_count" required defaultValue="">
            <option value="">How many sites?</option>
            {GROWTH_LOCATION_COUNTS.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </Select>
        </Field>
        <Field label="Approximate monthly revenue" required>
          <Select id="book-monthly_revenue" name="monthly_revenue" required defaultValue="">
            <option value="">Select a range…</option>
            {GROWTH_REVENUE_BANDS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Monthly marketing budget" required>
          <Select id="book-marketing_budget" name="marketing_budget" required defaultValue="">
            <option value="">Including advertising spend…</option>
            {GROWTH_BUDGET_BANDS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </Select>
        </Field>
        <Field label="Main growth challenge" required>
          <Select id="book-growth_challenge" name="growth_challenge" required defaultValue="">
            <option value="">What is in the way?</option>
            {GROWTH_CHALLENGES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Booking system (optional)">
        <Select id="book-booking_system" name="booking_system" defaultValue="">
          <option value="">How do patients book now?</option>
          {GROWTH_BOOKING_SYSTEMS.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </Select>
      </Field>

      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          value="yes"
          required
          className="mt-1 h-4 w-4 flex-shrink-0 rounded-[3px] border border-[var(--color-border)] accent-[var(--color-accent-strong)]"
        />
        <span className="text-sm leading-relaxed text-[var(--color-charcoal)]">
          {GROWTH_CONSENT_LABEL}{" "}
          <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
        </span>
      </label>

      {state === "error" ? (
        <p role="alert" className="text-sm text-[var(--color-error)]">
          {errorMsg}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={state === "submitting"} className="w-full">
        {state === "submitting" ? "Sending…" : GROWTH_CTA_LABEL}
      </Button>

      <p className="text-xs leading-relaxed text-[var(--color-muted)]">
        We never ask for patient information. Your details are used to prepare
        for and arrange the call.
      </p>
    </form>
  );
}

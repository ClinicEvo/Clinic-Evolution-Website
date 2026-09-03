"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { events } from "@/lib/analytics";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { Field, Input, Textarea, Select, Honeypot } from "./Field";
import TrackingFields from "./TrackingFields";
import {
  GRADUATE_INTAKE,
  GRADUATE_PROFESSIONS,
  GRADUATE_STAGES,
  GRADUATE_STARTING_POINTS,
  GRADUATE_THANK_YOU_PATH,
  OTHER_PROFESSION,
} from "@/lib/graduate";

/**
 * Application form for the Graduate Clinic Launch Programme.
 *
 * Deliberately longer than the audit form. This is an application for a capped
 * number of places, not a lead magnet — the friction is doing a job, and the
 * answers are what makes an intake reviewable rather than a list of names.
 *
 * It posts as its own `form_type`, so graduate applications carry their own
 * source and tags in the CRM and never merge into the audit pipeline.
 */
export default function GraduateForm() {
  const router = useRouter();
  const [profession, setProfession] = useState("");
  const { state, errorMsg, handleSubmit } = useFormSubmit({
    formType: "graduate",
    onSuccess: () => {
      events.graduateApplySubmit();
      router.push(GRADUATE_THANK_YOU_PATH);
    },
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Honeypot />
      <TrackingFields />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="First name" required>
          <Input id="first_name" name="first_name" type="text" required autoComplete="given-name" placeholder="Your first name" />
        </Field>
        <Field label="Last name" required>
          <Input id="last_name" name="last_name" type="text" required autoComplete="family-name" placeholder="Your last name" />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email address" required>
          <Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
        </Field>
        <Field label="Phone">
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" />
        </Field>
      </div>

      <Field label="Your discipline" required>
        <Select
          id="profession"
          name="profession"
          required
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        >
          <option value="">Select your discipline</option>
          {GRADUATE_PROFESSIONS.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </Select>
      </Field>

      {/* Only rendered for the catch-all, so the majority who picked one of
          the three never meet a dead field. This is the one place the
          programme's soft edge is actually operable — see the FAQ. */}
      {profession === OTHER_PROFESSION && (
        <Field label="Which discipline?" required>
          <Input
            id="profession_other"
            name="profession_other"
            type="text"
            required
            placeholder="Tell us what you qualified in"
          />
        </Field>
      )}

      <Field label="Where are you up to?" required>
        <Select id="stage" name="stage" required defaultValue="">
          <option value="" disabled>Select one</option>
          {GRADUATE_STAGES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </Select>
      </Field>

      <Field label="Where are you setting up?" required>
        <Input id="location" name="location" type="text" required placeholder="Town or city" />
      </Field>

      <Field label="What have you got so far?" required>
        <Select id="starting_point" name="starting_point" required defaultValue="">
          <option value="" disabled>Select one</option>
          {GRADUATE_STARTING_POINTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </Select>
      </Field>

      <Field label="Anything you want us to know?">
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Optional. Your plans, your timings, or what you are most worried about."
        />
      </Field>

      {/* Errors sit next to the control that failed wherever the field itself
          can own them; this one is the server's response to the whole form. */}
      {state === "error" && (
        <p role="alert" className="text-sm text-[var(--color-error)]">
          {errorMsg}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending your application" : "Apply for a place"}
        </Button>
        <p className="text-body-sm text-[var(--color-muted)]">
          For the {GRADUATE_INTAKE.labelLong} intake.
        </p>
      </div>
    </form>
  );
}

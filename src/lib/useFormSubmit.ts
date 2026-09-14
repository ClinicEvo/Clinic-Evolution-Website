"use client";

import { useState, FormEvent } from "react";

export type FormState = "idle" | "submitting" | "success" | "error";

interface Options {
  formType: "contact" | "audit" | "graduate" | "growth-call";
  onSuccess?: (payload: Record<string, string>, form: HTMLFormElement) => void;
}

export function useFormSubmit({ formType, onSuccess }: Options) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Client-side honeypot: defence-in-depth only — server validates too
    if (payload._honey) {
      setState("success");
      return;
    }

    try {
      // TRAILING SLASH IS REQUIRED. next.config.mjs sets `trailingSlash: true`,
      // which applies to route handlers too, so "/api/submit-form" answers 308
      // to "/api/submit-form/". A 308 preserves the method and body and fetch
      // follows it, so this worked either way — it just did it in two requests
      // instead of one, on every submission from every form on the site.
      const res = await fetch("/api/submit-form/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, form_type: formType }),
      });

      const json = await res.json().catch(() => ({})) as { error?: string };

      if (!res.ok) {
        throw new Error(json.error ?? "Submission failed.");
      }

      setState("success");
      onSuccess?.(payload, form);
    } catch (err) {
      setState("error");
      const msg = err instanceof Error ? err.message : "";
      setErrorMsg(msg || "Something went wrong. Please try again or email us directly.");
    }
  }

  return { state, errorMsg, handleSubmit };
}

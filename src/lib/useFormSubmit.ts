"use client";

import { useState, FormEvent, useRef } from "react";

export type FormState = "idle" | "submitting" | "success" | "error";

interface Options {
  subject: (payload: Record<string, string>) => string;
  onSuccess?: (payload: Record<string, string>, form: HTMLFormElement) => void;
}

export function useFormSubmit({ subject, onSuccess }: Options) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

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
        body: JSON.stringify({ access_key: key, subject: subject(payload), ...payload, _honey: undefined }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setState("success");
      onSuccess?.(payload, form);
    } catch {
      setState("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  }

  return { state, errorMsg, handleSubmit, formRef };
}

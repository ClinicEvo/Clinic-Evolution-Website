import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from "react";

export const inputCls =
  "w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-muted-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition";

interface FieldProps {
  label: string;
  required?: boolean;
  children: ReactNode;
}

/** The label wraps the control rather than sitting beside it. A sibling
 *  <label> with no htmlFor is not associated with anything, which left every
 *  control on the audit and contact forms unlabelled to screen readers and
 *  voice input. Wrapping gives implicit association without threading an id
 *  through each call site. */
export function Field({ label, required, children }: FieldProps) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
        {label}{" "}
        {required && <span aria-hidden="true" className="text-[var(--color-error)]">*</span>}
      </span>
      {children}
    </label>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={inputCls} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputCls} resize-none`} />;
}

export function Select({ children, ...props }: SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <select {...props} className={`${inputCls} appearance-none`}>
      {children}
    </select>
  );
}

export function Honeypot() {
  return (
    <input
      type="text"
      name="_honey"
      defaultValue=""
      aria-hidden="true"
      className="hidden"
      tabIndex={-1}
      autoComplete="off"
    />
  );
}

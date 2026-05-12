import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from "react";

export const inputCls =
  "w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-ink)] placeholder:text-[var(--color-muted-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition";

interface FieldProps {
  label: string;
  required?: boolean;
  children: ReactNode;
}

export function Field({ label, required, children }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
        {label}{" "}
        {required && <span aria-hidden="true" className="text-[var(--color-error)]">*</span>}
      </label>
      {children}
    </div>
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

"use client";

import { useState } from "react";

const POUND = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

export default function CallCostCalculator() {
  const [missedPerWeek, setMissedPerWeek] = useState(5);
  const [valuePerPatient, setValuePerPatient] = useState(400);

  // Assume roughly half of missed callers never call back and are lost.
  const lostPerWeek = missedPerWeek * 0.5;
  const annualLost = Math.round(lostPerWeek * valuePerPatient * 52);

  return (
    <div className="card-surface p-7 md:p-9">
      <p className="text-label text-[var(--color-accent)] mb-6">
        Estimate your missed-call cost
      </p>

      {/* Missed calls slider */}
      <div className="mb-8">
        <div className="flex items-baseline justify-between mb-3">
          <label htmlFor="missed-calls" className="text-body-sm font-semibold text-[var(--color-ink)]">
            Missed calls per week
          </label>
          <span className="font-display font-bold text-[1.35rem] text-[var(--color-ink)] leading-none tabular-nums">
            {missedPerWeek}
          </span>
        </div>
        <input
          id="missed-calls"
          type="range"
          min={1}
          max={25}
          step={1}
          value={missedPerWeek}
          onChange={(e) => setMissedPerWeek(Number(e.target.value))}
          className="w-full accent-[var(--color-accent)] cursor-pointer"
          aria-describedby="missed-calls-hint"
        />
        <p id="missed-calls-hint" className="text-[0.7rem] text-[var(--color-muted)] mt-2">
          Calls that ring out while you are mid-treatment, at lunch or out of hours.
        </p>
      </div>

      {/* Value per patient slider */}
      <div className="mb-9">
        <div className="flex items-baseline justify-between mb-3">
          <label htmlFor="patient-value" className="text-body-sm font-semibold text-[var(--color-ink)]">
            Value of a new patient
          </label>
          <span className="font-display font-bold text-[1.35rem] text-[var(--color-ink)] leading-none tabular-nums">
            {POUND.format(valuePerPatient)}
          </span>
        </div>
        <input
          id="patient-value"
          type="range"
          min={100}
          max={1500}
          step={50}
          value={valuePerPatient}
          onChange={(e) => setValuePerPatient(Number(e.target.value))}
          className="w-full accent-[var(--color-accent)] cursor-pointer"
          aria-describedby="patient-value-hint"
        />
        <p id="patient-value-hint" className="text-[0.7rem] text-[var(--color-muted)] mt-2">
          A single appointment is often {POUND.format(300)}–{POUND.format(500)}; a full course can be {POUND.format(1500)}+.
        </p>
      </div>

      {/* Result */}
      <div className="rounded-[var(--radius-sm)] bg-[var(--color-accent-light)] border border-[var(--color-accent)]/20 p-6">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)] mb-2">
          Likely lost every year
        </p>
        <p
          className="font-display font-bold text-[clamp(2rem,6vw,2.75rem)] leading-none text-[var(--color-ink)] tabular-nums"
          aria-live="polite"
        >
          {POUND.format(annualLost)}
        </p>
        <p className="text-[0.72rem] text-[var(--color-muted)] mt-3 leading-relaxed">
          Assumes around half of missed callers book elsewhere and never return.
          Trained call handling is designed to recover most of this.
        </p>
      </div>
    </div>
  );
}

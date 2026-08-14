"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const stages = [
  {
    label: "Traffic",
    display: "12,540",
    unit: "monthly visitors",
    icon: (
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    label: "Enquiries",
    display: "1,248",
    unit: "contact attempts",
    icon: (
      <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    label: "Bookings",
    display: "214",
    unit: "appointments",
    icon: (
      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    label: "New Patients",
    display: "126",
    unit: "attend first appt",
    icon: (
      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
  {
    label: "Retention",
    display: "98",
    unit: "become regulars",
    icon: (
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
  },
];

const transitions = [
  { avg: "10%", ours: "18%", label: "enquiry rate" },
  { avg: "17%", ours: "34%", label: "booking rate" },
  { avg: "59%", ours: "82%", label: "show-up rate" },
  { avg: "78%", ours: "91%", label: "retention" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function PatientFunnel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="flex flex-col gap-6">

      {/* ── Desktop: horizontal row ─────────────────────────────────────── */}
      <div className="hidden lg:flex items-center">
        {stages.map((stage, i) => (
          <div key={stage.label} className="contents">

            {/* Stage */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              animate={inView || reduce ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.09, ease }}
              className="flex-1 flex flex-col items-center text-center min-w-0"
            >
              <div className="w-11 h-11 rounded-full border border-[var(--color-border)] bg-[var(--color-paper)] flex items-center justify-center text-[var(--color-ink)]/50 mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24">{stage.icon}</svg>
              </div>
              <p className="text-[0.65rem] font-bold tracking-wider uppercase text-[var(--color-muted)] mb-1">{stage.label}</p>
              <p className="font-display font-bold text-[1.4rem] text-[var(--color-ink)] leading-none mb-1">{stage.display}</p>
              <p className="text-[0.68rem] text-[var(--color-muted)] leading-snug">{stage.unit}</p>
            </motion.div>

            {/* Connector */}
            {i < transitions.length && (
              <motion.div
                initial={reduce ? {} : { opacity: 0 }}
                animate={inView || reduce ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.09, ease }}
                className="flex flex-col items-center gap-1.5 w-[76px] flex-shrink-0"
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-[0.62rem] font-semibold text-[var(--color-muted)]/60 line-through decoration-[var(--color-muted)]/40">
                    {transitions[i].avg}
                  </span>
                  <span className="text-[0.72rem] font-bold text-[var(--color-accent-text)]">
                    {transitions[i].ours}
                  </span>
                </div>
                <span className="text-[0.55rem] font-medium text-[var(--color-muted)]/60 uppercase tracking-wide leading-none">
                  {transitions[i].label}
                </span>
                <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
                  <path d="M0 5h24M20 1l4 4-4 4" stroke="var(--color-border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            )}

          </div>
        ))}
      </div>

      {/* ── Mobile: vertical stack ──────────────────────────────────────── */}
      <div className="flex lg:hidden flex-col gap-0">
        {stages.map((stage, i) => (
          <div key={stage.label}>
            <motion.div
              initial={reduce ? {} : { opacity: 0, x: -10 }}
              animate={inView || reduce ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08, ease }}
              className="flex items-center gap-4 py-3"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-paper)] flex items-center justify-center text-[var(--color-ink)]/50">
                <svg width="17" height="17" viewBox="0 0 24 24">{stage.icon}</svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[0.65rem] font-bold tracking-wider uppercase text-[var(--color-muted)]">{stage.label}</p>
                <p className="font-display font-bold text-xl text-[var(--color-ink)] leading-tight">{stage.display}</p>
                <p className="text-[0.68rem] text-[var(--color-muted)]">{stage.unit}</p>
              </div>
            </motion.div>

            {i < transitions.length && (
              <motion.div
                initial={reduce ? {} : { opacity: 0 }}
                animate={inView || reduce ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.08, ease }}
                className="flex items-center gap-3 pl-5 py-1.5"
              >
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" className="flex-shrink-0">
                  <path d="M5 0v15M1 11l4 5 4-5" stroke="var(--color-border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[0.65rem] font-semibold text-[var(--color-muted)]/60 line-through">{transitions[i].avg}</span>
                  <span className="text-[0.72rem] font-bold text-[var(--color-accent-text)]">{transitions[i].ours}</span>
                  <span className="text-[0.6rem] text-[var(--color-muted)]/60">{transitions[i].label}</span>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* ── Legend ─────────────────────────────────────────────────────── */}
      <motion.div
        initial={reduce ? {} : { opacity: 0 }}
        animate={inView || reduce ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.8, ease }}
        className="flex items-center gap-5 justify-center"
      >
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-px bg-[var(--color-muted)]/40 inline-block" />
          <span className="text-[0.6rem] font-semibold text-[var(--color-muted)]/70 uppercase tracking-wider">Industry avg</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-px bg-[var(--color-accent)] inline-block" />
          <span className="text-[0.6rem] font-bold text-[var(--color-accent-text)] uppercase tracking-wider">With Clinic Evo</span>
        </div>
      </motion.div>

      {/* ── Callout ────────────────────────────────────────────────────── */}
      <motion.div
        initial={reduce ? {} : { opacity: 0, y: 8 }}
        animate={inView || reduce ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.9, ease }}
        className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/15"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-[var(--color-accent)]">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 5v3.5M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <p className="text-sm font-semibold text-[var(--color-ink)]/80">
          Clinics on our system convert{" "}
          <span className="text-[var(--color-accent)]">2.1× more visitors</span>{" "}
          into booked appointments.
        </p>
      </motion.div>

    </div>
  );
}

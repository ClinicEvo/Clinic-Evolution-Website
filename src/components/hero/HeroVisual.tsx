"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

// The patient journey, one believable lifecycle, not a fake analytics dashboard.
const journey = [
  { label: "New enquiry", meta: "9:42" },
  { label: "Follow-up sent", meta: "9:44" },
  { label: "Booking recovered", meta: "9:51" },
  { label: "Review requested", meta: "Today" },
  { label: "Patient recalled", meta: "Live", active: true },
];

function CheckDot() {
  return (
    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] text-white">
      <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2.5 7.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function LiveDot() {
  return (
    <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
      <span
        className="absolute inset-0 rounded-full"
        style={{ background: "var(--color-accent)", opacity: 0.25, animation: "pulse-ring 2.4s ease-out infinite" }}
      />
      <span className="relative h-3 w-3 rounded-full" style={{ background: "var(--color-accent)" }} />
    </span>
  );
}

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reduce = useReducedMotion();

  const reveal = (i: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 14 },
    animate: inView || reduce ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay: 0.25 + i * 0.08, ease },
  });

  return (
    <div ref={ref} className="relative h-full min-h-[58vh] w-full lg:min-h-[72vh]">
      {/* Clinical photograph, full-bleed, the product is the patient experience */}
      <Image
        src="/images/hero_clinic_spine_consult.jpg"
        alt="Clinician using a spine model to explain treatment to a patient in an MSK clinic"
        fill
        priority
        className="object-cover object-[60%_center]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0D1B2A]/35 via-[#0D1B2A]/5 to-transparent" />

      {/* The journey overlay, one proprietary product moment, at full scale */}
      <motion.div
        initial={reduce ? {} : { opacity: 0, y: 28 }}
        animate={inView || reduce ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease }}
        className="absolute bottom-5 left-6 right-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-6 shadow-[0_40px_90px_-30px_rgba(12,26,36,0.5)] sm:bottom-[calc(var(--spacing)*17)] sm:left-10 sm:right-auto sm:w-[320px] lg:-left-16"
      >
        <div className="mb-5 flex items-center justify-between">
          <Image src="/images/patientpulse_logo.png" alt="Patient Pulse" width={100} height={20} className="h-4 w-auto" />
          <span className="flex items-center gap-2 text-[12px] font-medium text-[var(--color-muted)]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-accent)" }} />
            Live
          </span>
        </div>

        <ul>
          {journey.map((step, i) => (
            <motion.li
              key={step.label}
              {...reveal(i)}
              className="flex items-center gap-4 py-2.5"
            >
              {step.active ? <LiveDot /> : <CheckDot />}
              <span
                className="flex-1 text-[17px] font-medium leading-none"
                style={{ color: step.active ? "var(--color-accent-text)" : "var(--color-ink)" }}
              >
                {step.label}
              </span>
              <span className="text-[13px] tabular-nums leading-none text-[var(--color-muted)]">{step.meta}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

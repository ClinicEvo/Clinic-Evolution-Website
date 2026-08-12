"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * A designed representation of the Patient Pulse lead pipeline.
 *
 * Deliberately NOT a screenshot. The real product screenshots showed
 * identifiable patient names alongside presenting conditions, which cannot be
 * published. Every value below is illustrative, and enquiries are labelled by
 * source and treatment interest rather than by person.
 */
const columns = [
  {
    stage: "New enquiry",
    count: 6,
    cards: [
      { source: "Google Ads", interest: "Back pain", age: "2 min" },
      { source: "Website form", interest: "Sports injury", age: "18 min" },
      { source: "Google Business", interest: "Sciatica", age: "41 min" },
    ],
  },
  {
    stage: "Contacted",
    count: 9,
    cards: [
      { source: "Paid social", interest: "Neck pain", age: "1 hr" },
      { source: "Missed call", interest: "Callback due", age: "3 hr" },
      { source: "Instagram", interest: "Post-op rehab", age: "5 hr" },
    ],
  },
  {
    stage: "Nurture",
    count: 14,
    cards: [
      { source: "Paid social", interest: "Not ready yet", age: "6 days" },
      { source: "Website form", interest: "Price enquiry", age: "9 days" },
    ],
  },
  {
    stage: "Booked",
    count: 11,
    booked: true,
    cards: [
      { source: "Google Ads", interest: "First visit", age: "Today" },
      { source: "Recall", interest: "Returning", age: "Today" },
      { source: "WhatsApp", interest: "Follow-up", age: "Today" },
    ],
  },
];

export default function PulsePipelineBoard({ bare = false }: { bare?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduce ? {} : { opacity: 0, y: 24 }}
      animate={inView || reduce ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15, ease }}
      // `bare` drops the panel chrome so the board can sit flush inside a device
      // frame, which supplies its own edge.
      className={
        bare
          ? "bg-white"
          : "overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]"
      }
    >
      {/* Chrome */}
      <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/patientpulse_logo.png"
            alt="Patient Pulse"
            width={100}
            height={20}
            className="h-4 w-auto"
          />
          <span className="rounded-full bg-[var(--color-surface)] px-2 py-0.5 text-[0.6rem] font-semibold text-[var(--color-muted)]">
            Lead pipeline
          </span>
        </div>
        <span className="flex items-center gap-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--color-accent)" }}
            animate={reduce ? {} : { opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-[0.6rem] font-semibold uppercase tracking-widest text-[var(--color-muted)]">
            Live
          </span>
        </span>
      </div>

      {/* Board — scrolls horizontally on narrow screens rather than squashing */}
      <div className="overflow-x-auto">
        <div className="flex min-w-[28rem] gap-3 bg-[var(--color-surface)]/40 p-4">
          {columns.map((col, ci) => (
            <motion.div
              key={col.stage}
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              animate={inView || reduce ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + ci * 0.09, ease }}
              className="flex min-w-0 flex-1 flex-col gap-2"
            >
              {/* Column head */}
              <div className="flex items-baseline justify-between gap-2 px-0.5">
                <span className="truncate text-[0.66rem] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                  {col.stage}
                </span>
                <span
                  className="font-display text-[0.8rem] font-bold leading-none tabular-nums"
                  style={{ color: col.booked ? "var(--color-accent)" : "var(--color-ink)" }}
                >
                  {col.count}
                </span>
              </div>

              {col.cards.map((card) => (
                <div
                  key={`${col.stage}-${card.interest}`}
                  className="rounded-[var(--radius-sm)] border bg-white px-2.5 py-2"
                  style={{
                    borderColor: col.booked ? "color-mix(in srgb, var(--color-accent) 32%, transparent)" : "var(--color-border)",
                  }}
                >
                  <p className="truncate text-[0.68rem] font-semibold leading-snug text-[var(--color-ink)]">
                    {card.interest}
                  </p>
                  <p className="mt-0.5 truncate text-[0.6rem] leading-snug text-[var(--color-muted)]">
                    {card.source}
                  </p>
                  <p className="mt-1 text-[0.58rem] uppercase tracking-wide text-[var(--color-muted)]/70">
                    {card.age}
                  </p>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer note — keeps the visual honest. Suppressed when bare: inside a
          device frame the disclosure belongs under the device as a caption, not
          printed on the screen as if the app rendered it. */}
      {!bare && (
        <p className="border-t border-[var(--color-border)] px-5 py-2.5 text-[0.6rem] leading-snug text-[var(--color-muted)]">
          Illustrative view of the Patient Pulse pipeline. Patient details are never shown.
        </p>
      )}
    </motion.div>
  );
}

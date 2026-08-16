"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * A designed representation of a day on the call desk.
 *
 * This replaces a screenshot of Aircall's own marketing homepage, which carried
 * their branding, their promotional banner and a mock contact called "Elizabeth
 * Zimmerman at Acme Inc.", captioned as an interface used by Clinic Evo. None of
 * that was ours to show and none of it was true.
 *
 * Deliberately NOT a screenshot, for the same reason as PulsePipelineBoard: a
 * real call log holds patient names against presenting conditions and cannot be
 * published. Calls are labelled by source and reason instead, and every value
 * below is illustrative.
 *
 * It carries the whole service in one glance — inbound answered, ad lead called
 * back, out-of-hours caught, all of it landing in Patient Pulse — so the hero
 * makes its argument before anyone reads the bullets.
 */

const live = {
  source: "Inbound call",
  reason: "Lower back pain, new patient",
  elapsed: "01:12",
};

const handled: Array<{
  source: string;
  reason: string;
  outcome: string;
  booked?: boolean;
}> = [
  {
    source: "Ad lead callback",
    reason: "Sports injury",
    outcome: "Booked Fri, 9:15am",
    booked: true,
  },
  {
    source: "Inbound call",
    reason: "Sciatica",
    outcome: "Booked Thu, 4:30pm",
    booked: true,
  },
  {
    source: "Out of hours",
    reason: "Neck pain",
    outcome: "Booked Mon, 8:00am",
    booked: true,
  },
  {
    source: "Inbound call",
    reason: "Price enquiry",
    outcome: "Follow-up set",
  },
];

export default function CallDeskPanel({ bare = false }: { bare?: boolean }) {
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
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="truncate font-display text-[0.78rem] font-bold text-[var(--color-ink)]">
            Call desk
          </span>
          <span className="hidden rounded-full bg-[var(--color-surface)] px-2 py-0.5 text-[0.6rem] font-semibold text-[var(--color-muted)] sm:inline">
            Today
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
            On call
          </span>
        </span>
      </div>

      <div className="bg-[var(--color-surface)]/40 p-4">
        {/* The call happening right now. Ink ground so it reads as the one live
            row rather than the fifth item in a list. */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 10 }}
          animate={inView || reduce ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.3, ease }}
          className="rounded-[var(--radius-sm)] bg-[var(--color-ink)] px-3.5 py-3 text-white"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="flex min-w-0 items-center gap-2">
              <motion.span
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ background: "var(--color-accent)" }}
                animate={reduce ? {} : { opacity: [1, 0.25, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="truncate text-[0.62rem] font-semibold uppercase tracking-widest text-white/60">
                {live.source}
              </span>
            </span>
            <span className="flex-shrink-0 font-display text-[0.72rem] font-bold tabular-nums text-white/85">
              {live.elapsed}
            </span>
          </div>
          <p className="mt-1.5 truncate text-[0.82rem] font-semibold leading-snug">
            {live.reason}
          </p>
          <p className="mt-1 text-[0.66rem] leading-snug text-white/55">
            Answered by a handler briefed on your clinic
          </p>
        </motion.div>

        {/* Everything already handled today */}
        <ul className="mt-2.5 space-y-1.5">
          {handled.map((call, i) => (
            <motion.li
              key={call.reason}
              initial={reduce ? {} : { opacity: 0, y: 10 }}
              animate={inView || reduce ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08, ease }}
              className="flex items-center justify-between gap-3 rounded-[var(--radius-sm)] border bg-white px-3 py-2.5"
              style={{
                borderColor: call.booked
                  ? "color-mix(in srgb, var(--color-accent) 32%, transparent)"
                  : "var(--color-border)",
              }}
            >
              <span className="min-w-0">
                <span className="block truncate text-[0.72rem] font-semibold leading-snug text-[var(--color-ink)]">
                  {call.reason}
                </span>
                <span className="mt-0.5 block truncate text-[0.62rem] leading-snug text-[var(--color-muted)]">
                  {call.source}
                </span>
              </span>
              <span
                className="flex-shrink-0 text-[0.64rem] font-semibold leading-snug"
                style={{
                  color: call.booked
                    ? "var(--color-accent-text)"
                    : "var(--color-muted)",
                }}
              >
                {call.outcome}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Where it all lands. The last line of the hero's argument. */}
      <div className="flex items-center gap-2 border-t border-[var(--color-border)] px-4 py-2.5">
        <span className="text-[0.62rem] font-semibold text-[var(--color-muted)]">
          Every call logged to
        </span>
        <Image
          src="/images/patientpulse_logo.png"
          alt="Patient Pulse"
          width={3116}
          height={440}
          sizes="120px"
          className="h-[0.8rem] w-auto"
        />
      </div>
    </motion.div>
  );
}

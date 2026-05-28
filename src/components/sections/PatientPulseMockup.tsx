"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const events = [
  {
    icon: "check",
    title: "New enquiry — Google Ads",
    sub: '"physio near me" · Auto SMS sent',
    time: "2 min ago",
    accent: true,
  },
  {
    icon: "call",
    title: "Missed call — 07XXX XXX XXX",
    sub: "Callback queued",
    time: "8 min ago",
    accent: false,
  },
  {
    icon: "star",
    title: "Review request sent",
    sub: "★★★★★  “Really helpful, would recommend”",
    time: "1 hr ago",
    accent: true,
  },
  {
    icon: "check",
    title: "6-month reactivation sent",
    sub: "Sarah M. · Replied: &ldquo;Yes, please book me in&rdquo;",
    time: "2 hrs ago",
    accent: true,
  },
];

const weekStats = [
  { value: "14", label: "enquiries" },
  { value: "4 min", label: "avg response" },
  { value: "11/14", label: "booked" },
];

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CallIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M10.5 8.5c0 .2-.05.4-.14.59a1.7 1.7 0 01-.38.5c-.28.25-.6.37-.96.37-.25 0-.5-.05-.77-.17a7.4 7.4 0 01-.76-.42 13.3 13.3 0 01-.73-.57 13 13 0 01-.57-.73 7.4 7.4 0 01-.42-.76c-.12-.27-.17-.52-.17-.77 0-.35.12-.67.36-.95.24-.28.53-.42.85-.42.12 0 .24.03.35.08.11.05.21.13.29.24l1 1.4c.08.11.14.21.18.3.04.09.06.18.06.26 0 .1-.03.2-.08.3-.05.1-.13.2-.23.3l-.3.3c-.04.04-.06.09-.06.14 0 .02 0 .05.01.07.02.03.03.05.04.07.08.14.22.32.41.54.2.22.4.44.62.64.22.2.44.38.67.54.22.16.4.27.55.33l.06.02c.04 0 .08-.01.12-.04l.3-.31c.1-.1.2-.18.3-.22.1-.04.19-.06.28-.06.08 0 .17.02.27.06.1.04.2.1.31.18l1.41 1.01c.11.08.19.18.24.3.04.12.07.23.07.36z" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M6 1l1.12 2.27 2.5.36-1.81 1.77.43 2.49L6 6.76 3.76 7.89l.43-2.49L2.38 3.63l2.5-.36L6 1z" />
    </svg>
  );
}

export default function PatientPulseMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduce ? {} : { opacity: 0, y: 24 }}
      animate={inView || reduce ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2, ease }}
      className="rounded-2xl border border-[var(--color-border)] bg-white overflow-hidden shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-bold text-[var(--color-ink)] tracking-wide">Patient Pulse</span>
          <span className="text-[0.6rem] font-semibold text-[var(--color-muted)] bg-[var(--color-surface)] px-2 py-0.5 rounded-full">
            by ClinicEvo
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
            animate={reduce ? {} : { opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-[0.6rem] font-semibold text-emerald-600 uppercase tracking-widest">Live</span>
        </div>
      </div>

      {/* Event feed */}
      <div className="divide-y divide-[var(--color-border)]">
        {events.map((evt, i) => (
          <motion.div
            key={evt.title}
            initial={reduce ? {} : { opacity: 0, x: -8 }}
            animate={inView || reduce ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.35 + i * 0.1, ease }}
            className="flex items-start gap-3.5 px-5 py-3.5"
          >
            {/* Status icon */}
            <div
              className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
                evt.accent
                  ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                  : "bg-amber-50 text-amber-500"
              }`}
            >
              {evt.icon === "check" && <CheckIcon />}
              {evt.icon === "call" && <CallIcon />}
              {evt.icon === "star" && <StarIcon />}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-[0.73rem] font-semibold text-[var(--color-ink)] leading-snug mb-0.5 truncate">
                {evt.title}
              </p>
              <p className="text-[0.65rem] text-[var(--color-muted)] leading-snug truncate">{evt.sub}</p>
            </div>

            {/* Time */}
            <span className="flex-shrink-0 text-[0.6rem] text-[var(--color-muted)]/70 mt-0.5 whitespace-nowrap">
              {evt.time}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Weekly stats */}
      <motion.div
        initial={reduce ? {} : { opacity: 0 }}
        animate={inView || reduce ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.85, ease }}
        className="grid grid-cols-3 divide-x divide-[var(--color-border)] border-t border-[var(--color-border)] bg-[var(--color-surface)]/30"
      >
        {weekStats.map((s) => (
          <div key={s.label} className="px-4 py-3 text-center">
            <p className="font-display font-bold text-[1.1rem] text-[var(--color-ink)] leading-none mb-0.5">
              {s.value}
            </p>
            <p className="text-[0.6rem] text-[var(--color-muted)] uppercase tracking-wide">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

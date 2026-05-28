"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

// ── Icons ─────────────────────────────────────────────────────────────────

function PhoneOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.68 13.31a16 16 0 003.41 2.6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 011.72 2v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07" />
      <path d="M14.35 14.35L3.7 3.7" />
      <path d="M3.07 10.8A19.5 19.5 0 012 5.76a2 2 0 011.17-1.85L5.5 2.8" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinejoin="round" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

function UserXIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M17 11l4 4m0-4l-4 4" />
    </svg>
  );
}

// ── Illustrations ──────────────────────────────────────────────────────────

function MissedCallIllustration() {
  return (
    <div aria-hidden className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 space-y-2.5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-[var(--color-ink)]">Incoming call</p>
          <p className="text-[0.65rem] text-[var(--color-muted)]">New patient — mid-treatment</p>
        </div>
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1 h-3 rounded-full bg-[var(--color-border)]" style={{ height: `${6 + i * 4}px` }} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-red-50 border border-red-100 px-3 py-2.5">
        <span className="text-[0.68rem] font-semibold text-red-700">Missed — no answer</span>
        <span className="text-[0.68rem] font-bold text-red-700">~£400 lost</span>
      </div>
    </div>
  );
}

function LateResponseIllustration() {
  const steps = [
    { time: "9:00 PM", label: "Form submitted", dot: "bg-[var(--color-accent)]", text: "text-[var(--color-ink)]" },
    { time: "9:00 AM", label: "Your reply sent", dot: "bg-[var(--color-border)]", text: "text-[var(--color-muted)]" },
    { time: "9:05 AM", label: "Already booked elsewhere", dot: "bg-red-400", text: "text-red-600" },
  ];

  return (
    <div aria-hidden className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
      <div className="flex gap-4">
        {/* Timeline */}
        <div className="flex flex-col items-center pt-1 flex-shrink-0">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className={`w-2 h-2 rounded-full ${step.dot}`} />
              {i < steps.length - 1 && <div className="w-px flex-1 bg-[var(--color-border)] my-1.5" style={{ height: "28px" }} />}
            </div>
          ))}
        </div>
        {/* Labels */}
        <div className="flex flex-col justify-between flex-1" style={{ gap: "16px" }}>
          {steps.map((step, i) => (
            <div key={i}>
              <p className="text-[0.6rem] font-semibold uppercase tracking-wider text-[var(--color-muted)]">{step.time}</p>
              <p className={`text-xs font-semibold ${step.text}`}>{step.label}</p>
            </div>
          ))}
        </div>
        <div className="flex-shrink-0 self-start mt-0.5">
          <span className="inline-block rounded-full bg-amber-100 border border-amber-200 px-2 py-0.5 text-[0.6rem] font-bold text-amber-700">
            12 hr gap
          </span>
        </div>
      </div>
    </div>
  );
}

function LostEnquiryIllustration() {
  return (
    <div aria-hidden className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 space-y-2">
      {/* Patient message bubble */}
      <div className="flex justify-start">
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white border border-[var(--color-border)] px-3 py-2">
          <p className="text-[0.68rem] text-[var(--color-ink)] leading-relaxed">
            Hi, I&apos;d like to book an appointment for my back pain…
          </p>
        </div>
      </div>
      {/* Screenshot note */}
      <p className="text-[0.62rem] text-[var(--color-muted)] italic pl-1">
        → Screenshotted &amp; dropped in WhatsApp
      </p>
      {/* No response notice */}
      <div className="rounded-lg bg-red-50 border border-red-100 px-3 py-2">
        <p className="text-[0.68rem] font-semibold text-red-700">No follow-up. Thread never revisited.</p>
      </div>
    </div>
  );
}

function LapsedPatientIllustration() {
  return (
    <div aria-hidden className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 space-y-2.5">
      {/* Patient row */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center flex-shrink-0">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth="1.5" strokeLinecap="round">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-[var(--color-ink)]">Sarah M.</p>
          <p className="text-[0.65rem] text-[var(--color-muted)]">Last seen: 4 months ago</p>
        </div>
        <span className="text-[0.6rem] font-bold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
          Lapsed
        </span>
      </div>
      {/* Follow-up status */}
      <div className="flex items-center justify-between rounded-lg bg-white border border-[var(--color-border)] px-3 py-2">
        <span className="text-[0.68rem] text-[var(--color-ink)]">Follow-up sent</span>
        <span className="text-[0.68rem] font-bold text-red-500">None</span>
      </div>
      {/* Revenue row */}
      <div className="flex items-center justify-between rounded-lg bg-red-50 border border-red-100 px-3 py-2">
        <span className="text-[0.68rem] text-red-700">Unrealised revenue</span>
        <span className="text-[0.68rem] font-bold text-red-700">£250</span>
      </div>
    </div>
  );
}

// ── Card data ─────────────────────────────────────────────────────────────

const cards = [
  {
    icon: <PhoneOffIcon />,
    heading: "The phone rings out.",
    body: "A prospective patient calls while you are mid-treatment. That call was worth £300–500 in treatment revenue — and nothing to generate. It's gone.",
    illustration: <MissedCallIllustration />,
  },
  {
    icon: <ClockIcon />,
    heading: "Your reply goes out at 9am.",
    body: "A form is submitted at 9pm. The clinic that responds first gets the booking. Not the best clinic. The fastest.",
    illustration: <LateResponseIllustration />,
  },
  {
    icon: <MessageIcon />,
    heading: "No system. No follow-up. No booking.",
    body: "An enquiry arrives through Facebook. Someone screenshots it and drops it in a WhatsApp thread. Nobody follows up.",
    illustration: <LostEnquiryIllustration />,
  },
  {
    icon: <UserXIcon />,
    heading: "Nobody contacts them.",
    body: "A patient attends twice, recovers well, and says they'll book again. At £63 per follow-up across five sessions, that's £250 in lost revenue — per patient, every time.",
    illustration: <LapsedPatientIllustration />,
  },
];

// ── Component ─────────────────────────────────────────────────────────────

export default function ScenarioCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => (
        <motion.div
          key={card.heading}
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          animate={inView || reduce ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: i * 0.1, ease }}
          className="flex flex-col bg-white rounded-2xl border border-[var(--color-border)] p-6 overflow-hidden"
        >
          {/* Icon badge */}
          <div className="w-9 h-9 rounded-xl bg-[var(--color-accent)]/8 flex items-center justify-center text-[var(--color-accent)] mb-5 flex-shrink-0">
            {card.icon}
          </div>
          {/* Heading */}
          <h3 className="font-display font-bold text-[var(--color-ink)] text-lg leading-snug mb-3">
            {card.heading}
          </h3>
          {/* Body */}
          <p className="text-sm text-[var(--color-ink)] leading-relaxed">
            {card.body}
          </p>
          {/* Illustration */}
          {card.illustration}
        </motion.div>
      ))}
    </div>
  );
}

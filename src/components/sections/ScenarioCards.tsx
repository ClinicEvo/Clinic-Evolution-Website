"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

// ── Illustrations ──────────────────────────────────────────────────────────

function MissedCallIllustration() {
  return (
    <div aria-hidden className="mt-8 rounded-lg border border-[var(--color-border)] p-4 space-y-2.5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center flex-shrink-0 text-[var(--color-accent)]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-[var(--color-ink)]">Incoming call</p>
          <p className="text-[0.65rem] text-[var(--color-muted)]">New patient, mid-treatment</p>
        </div>
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1 h-3 rounded-full bg-[var(--color-border)]" style={{ height: `${6 + i * 4}px` }} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-2.5">
        <span className="text-[0.68rem] font-semibold text-[var(--color-accent)]">Missed, no answer</span>
        <span className="text-[0.68rem] font-bold text-[var(--color-ink)]">No callback</span>
      </div>
    </div>
  );
}

function LateResponseIllustration() {
  const steps = [
    { time: "9:00 PM", label: "Form submitted", dot: "border border-[var(--color-accent)] bg-transparent", text: "text-[var(--color-ink)]" },
    { time: "9:00 AM", label: "Your reply sent", dot: "border border-[var(--color-border)] bg-transparent", text: "text-[var(--color-muted)]" },
    { time: "9:05 AM", label: "Already booked elsewhere", dot: "bg-[var(--color-accent)]", text: "text-[var(--color-accent)]" },
  ];

  return (
    <div aria-hidden className="mt-8 rounded-lg border border-[var(--color-border)] p-4">
      <div className="flex gap-4">
        {/* Timeline */}
        <div className="flex flex-col items-center pt-1 flex-shrink-0">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className={`w-2.5 h-2.5 rounded-full ${step.dot}`} />
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
          <span className="inline-block rounded-[4px] border border-[var(--color-border)] px-2 py-0.5 text-[0.6rem] font-bold text-[var(--color-ink)] bg-transparent">
            12 hr gap
          </span>
        </div>
      </div>
    </div>
  );
}

function LostEnquiryIllustration() {
  return (
    <div aria-hidden className="mt-8 rounded-lg border border-[var(--color-border)] p-4 space-y-2">
      {/* Patient message bubble */}
      <div className="flex justify-start">
        <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-[#F5F7FA] border border-[var(--color-border)] px-3 py-2">
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
      <div className="rounded-[4px] border border-[var(--color-border)] px-3 py-2">
        <p className="text-[0.68rem] font-semibold text-[var(--color-accent)]">No follow-up. Thread never revisited.</p>
      </div>
    </div>
  );
}

function LapsedPatientIllustration() {
  return (
    <div aria-hidden className="mt-8 rounded-lg border border-[var(--color-border)] p-4 space-y-2.5">
      {/* Patient row */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#F5F7FA] border border-[var(--color-border)] flex items-center justify-center flex-shrink-0">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth="1.5" strokeLinecap="round">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-[var(--color-ink)]">Sarah M.</p>
          <p className="text-[0.65rem] text-[var(--color-muted)]">Last seen: 4 months ago</p>
        </div>
        <span className="text-[0.6rem] font-bold text-[var(--color-ink)] border border-[var(--color-border)] rounded-[4px] px-2 py-0.5 bg-transparent">
          Lapsed
        </span>
      </div>
      {/* Follow-up status */}
      <div className="flex items-center justify-between rounded-[4px] border border-[var(--color-border)] px-3 py-2 bg-transparent">
        <span className="text-[0.68rem] text-[var(--color-ink)]">Follow-up sent</span>
        <span className="text-[0.68rem] font-bold text-[var(--color-accent-text)]">None</span>
      </div>
      {/* Outcome row */}
      <div className="flex items-center justify-between rounded-[4px] border border-[var(--color-border)] px-3 py-2 bg-transparent text-[var(--color-accent)]">
        <span className="text-[0.68rem] text-[var(--color-ink)]">Reactivation sent</span>
        <span className="text-[0.68rem] font-bold">Never</span>
      </div>
    </div>
  );
}

// ── Card data ─────────────────────────────────────────────────────────────

const cards = [
  {
    heading: "The phone rings out.",
    body: "A prospective patient calls while you are mid-treatment. They had already decided they needed treatment, and they were choosing which clinic to attend. Nobody calls them back, so they call the next clinic on the list.",
    illustration: <MissedCallIllustration />,
  },
  {
    heading: "Your reply goes out at 9am.",
    body: "A form is submitted at 9pm. Nobody replies until the following morning. The clinic that responds first gets the booking. Not the best clinic. The fastest.",
    illustration: <LateResponseIllustration />,
  },
  {
    heading: "No system. No follow-up. No booking.",
    body: "A lead you paid to generate arrives through Facebook and disappears into a WhatsApp thread nobody revisits. No one calls it back.",
    illustration: <LostEnquiryIllustration />,
  },
  {
    heading: "Nobody contacts them.",
    body: "A patient attends twice, makes a good recovery, and says they will book again when they need you. Months later the pain returns, but nobody has been in touch, so they search again and find whoever comes up first.",
    illustration: <LapsedPatientIllustration />,
  },
];

// ── Component ─────────────────────────────────────────────────────────────

export default function ScenarioCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
      {cards.map((card, i) => (
        <motion.div
          key={card.heading}
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          animate={inView || reduce ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: i * 0.1, ease }}
          whileHover={reduce ? {} : { y: -4 }}
          className="card-surface group/card flex flex-col overflow-hidden p-7 md:p-8"
        >
          {/* Header: the leak-point number alone.
              A line icon sat opposite it until the 10 Aug review — "a box with
              some words with some generic icon on it screams preset website".
              The numeral is the only marker a leak in a numbered sequence needs,
              and each card already carries an illustration doing real work. */}
          <div className="mb-6">
            <span
              className="font-display text-[34px] font-light leading-none text-[var(--color-muted-light)] transition-colors group-hover/card:text-[var(--color-accent)]"
              aria-hidden
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          {/* Heading */}
          <h3 className="font-display font-bold text-[var(--color-ink)] text-xl leading-snug mb-3">
            {card.heading}
          </h3>
          {/* Body */}
          <p className="text-sm text-[var(--color-charcoal)] leading-relaxed">
            {card.body}
          </p>
          {/* Evidence mockup, pinned to the card bottom so all four align */}
          <div className="mt-auto">{card.illustration}</div>
        </motion.div>
      ))}
    </div>
  );
}

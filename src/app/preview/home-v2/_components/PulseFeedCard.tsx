"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * The hero visual for the homepage draft: a Patient Pulse activity feed, so the
 * product is seen working in the first two seconds instead of being described.
 *
 * Illustrative, like PulsePipelineBoard — not a screenshot. Real product
 * screens carry patient names beside presenting conditions, so enquiries here
 * are labelled by source and complaint, never by person.
 *
 * Read top to bottom it is one morning: an enquiry lands mid-treatment, gets an
 * instant reply and a follow-up nobody had to remember, and books. The last row
 * is a lapsed patient coming back, which is the loss clinics never see.
 *
 * Row spacing scales with viewport height so the card fits the one-screen
 * hero on short laptop screens as well as tall monitors.
 */
type Tone = "in" | "auto" | "win";

const feed: Array<{ time: string; title: string; detail: string; tone: Tone }> = [
  { time: "8:42", title: "New enquiry, Google Ads", detail: "Lower back pain · wants an evening slot", tone: "in" },
  { time: "8:42", title: "Instant reply sent", detail: "SMS with booking link, while you treat", tone: "auto" },
  { time: "8:44", title: "Follow-up sent", detail: "No booking yet, second message queued", tone: "auto" },
  { time: "9:10", title: "Booked", detail: "New patient · Tuesday 6:30pm", tone: "win" },
  { time: "9:26", title: "Booking recovered", detail: "Lapsed 5 months · replied to check-in", tone: "win" },
];

const dot: Record<Tone, string> = {
  in: "bg-[var(--color-ink)]",
  auto: "border border-[var(--color-muted-light)] bg-[var(--color-paper)]",
  win: "bg-[var(--color-accent)]",
};

export default function PulseFeedCard() {
  const reduce = useReducedMotion();

  return (
    <div
      className="overflow-hidden border border-[var(--color-border)] bg-[var(--color-paper)] shadow-[var(--shadow-card-hover)]"
      style={{ borderRadius: "var(--radius-panel)" }}
    >
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-[clamp(0.75rem,1.8vh,1rem)]">
        <Image
          src="/images/patientpulse_logo.png"
          alt="Patient Pulse"
          width={3116}
          height={440}
          className="h-5 w-auto"
          priority
        />
        <span className="inline-flex items-center gap-2 text-[12px] font-medium text-[var(--color-muted)]">
          <span className="relative flex h-2 w-2" aria-hidden>
            {!reduce && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          </span>
          Today
        </span>
      </div>

      <ol className="px-6 py-[clamp(0.25rem,1vh,0.75rem)]">
        {feed.map((row, i) => (
          <motion.li
            key={row.title}
            initial={reduce ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.35, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-[2.75rem_0.75rem_1fr] items-start gap-x-3 border-b border-[var(--color-border)] py-[clamp(0.5rem,1.5vh,0.875rem)] last:border-b-0"
          >
            <span className="pt-px text-[12px] font-medium tabular-nums text-[var(--color-muted)]">
              {row.time}
            </span>
            <span className={`mt-[5px] h-2.5 w-2.5 rounded-full ${dot[row.tone]}`} aria-hidden />
            <span>
              <span
                className={`block font-display text-[14px] font-semibold ${
                  row.tone === "win" ? "text-[var(--color-accent-text)]" : "text-[var(--color-ink)]"
                }`}
              >
                {row.title}
              </span>
              <span className="block text-[13px] text-[var(--color-muted)]">{row.detail}</span>
            </span>
          </motion.li>
        ))}
      </ol>

      <p className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-[clamp(0.5rem,1.3vh,0.75rem)] text-[11px] text-[var(--color-muted)]">
        Illustrative feed. No patient data shown.
      </p>
    </div>
  );
}

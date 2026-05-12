"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─── Shared hook ──────────────────────────────────────────────────────── */

function useOnceInView() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return { ref, isInView };
}

/* ─── Animated counter ─────────────────────────────────────────────────── */

function Counter({ to, duration = 1.4 }: { to: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();
  const started = useRef(false);
  const { ref, isInView } = useOnceInView();

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    if (reduce) { setValue(to); return; }
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * to));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, to, duration, reduce]);

  return <span ref={ref}>{value}</span>;
}

/* ─── 1. Clinic Growth Stats ───────────────────────────────────────────── */

const stats = [
  { value: 47, suffix: "", label: "Service areas reviewed" },
  { value: 6, suffix: "", label: "Key page structures improved" },
  { value: 12, suffix: "+", label: "Priority SEO fixes identified" },
  { value: 3, suffix: "x", label: "Clearer patient journey steps" },
];

export function ClinicGrowthStats() {
  const reduce = useReducedMotion();
  const { ref, isInView } = useOnceInView();

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-sm"
    >
      {/* Header bar */}
      <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-center gap-2">
        <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
          Project overview
        </span>
      </div>

      <div className="grid grid-cols-2 divide-x divide-y divide-[var(--color-border)]">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={reduce ? {} : { opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="p-6"
          >
            <p className="text-3xl font-bold text-[var(--color-ink)] tabular-nums leading-none mb-2">
              <Counter to={s.value} duration={1.2 + i * 0.1} />
              {s.suffix}
            </p>
            <p className="text-xs text-[var(--color-muted)] leading-snug">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Animated progress bar */}
      <div className="px-6 pb-6 pt-4 border-t border-[var(--color-border)]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-[var(--color-muted)]">Overall foundation score</span>
          <span className="text-xs font-bold text-[var(--color-accent)]">
            {isInView ? "84%" : "0%"}
          </span>
        </div>
        <div className="h-2 bg-[var(--color-surface)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-accent)] rounded-full"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "84%" } : {}}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── 2. SEO Visibility Metrics ────────────────────────────────────────── */

const seoData = [
  { label: "Service pages", before: 22, after: 78 },
  { label: "Local keywords", before: 18, after: 65 },
  { label: "Internal links", before: 30, after: 82 },
  { label: "Structured content", before: 15, after: 71 },
];

export function SEOVisibilityMetrics() {
  const reduce = useReducedMotion();
  const { ref, isInView } = useOnceInView();

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-sm"
    >
      <div className="px-6 py-4 border-b border-[var(--color-border)]">
        <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
          SEO foundation score
        </span>
      </div>

      <div className="p-6 space-y-5">
        {seoData.map((row, i) => (
          <motion.div
            key={row.label}
            initial={reduce ? {} : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: i * 0.08 }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-[var(--color-ink)]">{row.label}</span>
              <span className="text-xs text-[var(--color-accent)] font-bold tabular-nums">
                {isInView ? `${row.after}%` : `${row.before}%`}
              </span>
            </div>
            <div className="relative h-2.5 bg-[var(--color-surface)] rounded-full overflow-hidden">
              {/* before bar (faint) */}
              <div
                className="absolute inset-y-0 left-0 bg-[var(--color-surface)] rounded-full"
                style={{ width: `${row.before}%` }}
              />
              {/* after bar */}
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: "var(--color-accent)" }}
                initial={{ width: `${row.before}%` }}
                animate={isInView ? { width: `${row.after}%` } : { width: `${row.before}%` }}
                transition={{ duration: 1.1, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="px-6 pb-5 flex items-center gap-4 border-t border-[var(--color-border)] pt-4">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-surface)]" />
          <span className="text-xs text-[var(--color-muted)]">Before</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
          <span className="text-xs text-[var(--color-muted)]">After</span>
        </div>
      </div>
    </div>
  );
}

/* ─── 3. Patient Conversion Funnel ─────────────────────────────────────── */

const funnelSteps = [
  { label: "Search", sub: "Patient searches for treatment", pct: 100, icon: "M11 4a7 7 0 100 14A7 7 0 0011 4zm0 0l6 6" },
  { label: "Finds clinic", sub: "Lands on a relevant service page", pct: 68 },
  { label: "Builds trust", sub: "Reviews credentials & testimonials", pct: 47 },
  { label: "Takes action", sub: "Clicks to book or enquire", pct: 29 },
];

export function PatientConversionFunnel() {
  const reduce = useReducedMotion();
  const { ref, isInView } = useOnceInView();

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-sm"
    >
      <div className="px-6 py-4 border-b border-[var(--color-border)]">
        <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
          Patient journey funnel
        </span>
      </div>

      <div className="p-6 space-y-3">
        {funnelSteps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={reduce ? {} : { opacity: 0, x: -8 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between mb-1">
              <div>
                <span className="text-xs font-bold text-[var(--color-ink)]">{step.label}</span>
                <span className="text-xs text-[var(--color-muted)] ml-2">{step.sub}</span>
              </div>
              <span className="text-xs font-bold tabular-nums" style={{ color: `color-mix(in srgb, var(--color-accent) ${step.pct}%, var(--color-muted))` }}>
                {step.pct}%
              </span>
            </div>
            <div className="h-6 bg-[var(--color-surface)] rounded-lg overflow-hidden">
              <motion.div
                className="h-full rounded-lg flex items-center px-2"
                style={{ background: "var(--color-accent)", opacity: 0.15 + (step.pct / 100) * 0.75 }}
                initial={{ width: "0%" }}
                animate={isInView ? { width: `${step.pct}%` } : { width: "0%" }}
                transition={{ duration: 1, delay: 0.25 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="px-6 pb-5 border-t border-[var(--color-border)] pt-4">
        <p className="text-xs text-[var(--color-muted)] leading-relaxed">
          A clearer website structure improves every conversion stage.
        </p>
      </div>
    </div>
  );
}

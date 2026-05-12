"use client";

import { motion, useInView, useReducedMotion, animate, type Variants, type Transition } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { label: "New Enquiries", value: 342,    display: "342",     delta: "+27%", sub: "vs previous 30 days" },
  { label: "New Bookings",  value: 214,    display: "214",     delta: "+18%", sub: "vs previous 30 days" },
  { label: "New Patients",  value: 156,    display: "156",     delta: "+22%", sub: "vs previous 30 days" },
  { label: "Revenue",       value: 28650,  display: "£28,650", delta: "+31%", sub: "vs previous 30 days", currency: true },
];

const LINE = "M0 70 L40 62 L80 58 L120 50 L160 45 L200 38 L240 32 L280 20 L320 15 L360 8 L400 5";
const AREA = `${LINE} L400 80 L0 80 Z`;

function CountUp({
  target,
  currency,
  inView,
  reduce,
}: {
  target: number;
  currency?: boolean;
  inView: boolean;
  reduce: boolean | null;
}) {
  const [val, setVal] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current || reduce) return;
    hasRun.current = true;
    const ctrl = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.35,
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, target, reduce]);

  if (reduce) {
    return <>{currency ? `£${target.toLocaleString()}` : target.toString()}</>;
  }

  return <>{currency ? `£${val.toLocaleString()}` : val.toString()}</>;
}

const tileEase = [0.22, 1, 0.36, 1] as const;

const tileVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.25 + i * 0.07, ease: tileEase } as Transition,
  }),
};

export default function HeroDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduce ? {} : { opacity: 0, y: 24 }}
      animate={inView || reduce ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-[var(--color-border)] bg-white overflow-hidden shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--color-border)]">
        <p className="text-xs font-bold text-[var(--color-ink)]">Overview</p>
        <span className="text-[0.7rem] font-semibold text-[var(--color-muted)] bg-[var(--color-surface)] px-2.5 py-1 rounded-full">
          Last 30 days
        </span>
      </div>

      {/* Metric tiles */}
      <div className="grid grid-cols-2 divide-x divide-y divide-[var(--color-border)]">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            custom={i}
            variants={reduce ? {} : tileVariants}
            initial="hidden"
            animate={inView || reduce ? "visible" : "hidden"}
            className="px-5 py-4"
          >
            <p className="text-[0.65rem] font-bold tracking-wider uppercase text-[var(--color-muted)] mb-2">
              {m.label}
            </p>
            <div className="flex items-baseline gap-2 mb-0.5">
              <span className="font-display font-bold text-[1.5rem] leading-none text-[var(--color-ink)]">
                <CountUp target={m.value} currency={m.currency} inView={inView} reduce={reduce} />
              </span>
              <motion.span
                className="text-[0.7rem] font-bold text-[var(--color-accent)]"
                initial={reduce ? {} : { opacity: 0 }}
                animate={inView || reduce ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
              >
                {m.delta}
              </motion.span>
            </div>
            <p className="text-[0.65rem] text-[var(--color-muted)]">{m.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Sparkline */}
      <div className="px-5 py-4 border-t border-[var(--color-border)]">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[0.65rem] font-bold tracking-wider uppercase text-[var(--color-muted)]">
            Bookings over time
          </p>
        </div>
        <svg viewBox="0 0 400 80" className="w-full h-16" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </linearGradient>
            <clipPath id="sparkClip">
              <motion.rect
                x="0" y="0" height="80"
                initial={reduce ? { width: 400 } : { width: 0 }}
                animate={inView || reduce ? { width: 400 } : {}}
                transition={{ duration: 1.3, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </clipPath>
          </defs>

          {/* Area — clipped */}
          <path d={AREA} fill="url(#lineGrad)" clipPath="url(#sparkClip)" />

          {/* Line — pathLength draw */}
          <motion.path
            d={LINE}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 1 }}
            animate={inView || reduce ? { pathLength: 1 } : {}}
            transition={{ duration: 1.3, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Dot — scale in after line finishes */}
          <motion.circle
            cx="400" cy="5" r="3.5"
            fill="var(--color-accent)"
            initial={reduce ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            animate={inView || reduce ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 1.6, ease: "backOut" }}
            style={{ transformOrigin: "400px 5px" }}
          />
        </svg>
        <div className="flex justify-between mt-1">
          {["May 1", "May 8", "May 15", "May 22", "May 29"].map((d) => (
            <span key={d} className="text-[0.6rem] text-[var(--color-muted)]">{d}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

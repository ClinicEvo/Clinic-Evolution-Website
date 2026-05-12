"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "90",
    unit: "days",
    label: "Average time to first measurable results",
  },
  {
    value: "3–5×",
    unit: "",
    label: "Typical increase in qualified organic enquiries",
  },
  {
    value: "£2,400+",
    unit: "",
    label: "Average lifetime value of a retained MSK patient",
  },
];

export default function StatStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border)]">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 py-7 first:pl-0 last:pr-0"
        >
          <div className="flex items-baseline gap-1.5 mb-2">
            <span className="font-display font-bold text-[2.25rem] leading-none text-[var(--color-ink)] tracking-tight">
              {stat.value}
            </span>
            {stat.unit && (
              <span className="text-sm font-semibold text-[var(--color-muted)]">{stat.unit}</span>
            )}
          </div>
          <p className="text-[0.8125rem] text-[var(--color-muted)] leading-snug">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

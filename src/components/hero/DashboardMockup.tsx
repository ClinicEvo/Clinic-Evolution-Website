"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { label: "New Enquiries", value: 342, change: "+27%" },
  { label: "New Bookings",  value: 214, change: "+18%" },
  { label: "New Patients",  value: 156, change: "+22%" },
  { label: "Revenue",       value: 28650, prefix: "£", change: "+31%" },
];

const barHeights = [40, 55, 42, 70, 58, 80, 63, 90, 72, 85, 68, 95];

function useCountUp(target: number, duration = 1.5, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return count;
}

function MetricTile({ label, value, prefix = "", change, active }: {
  label: string; value: number; prefix?: string; change: string; active: boolean;
}) {
  const count = useCountUp(value, 1.4, active);
  return (
    <div style={{ background: "#1A0F2E", padding: "18px 20px" }}>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "6px" }}>
        {label}
      </p>
      <p style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 700, color: "white", lineHeight: 1, letterSpacing: "-0.02em" }}>
        {prefix}{count.toLocaleString()}
      </p>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "#4ADE80", marginTop: "4px", fontWeight: 600 }}>
        {change}
      </p>
    </div>
  );
}

export default function DashboardMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="hidden lg:block"
      style={{ borderRadius: "12px", overflow: "hidden" }}
    >
      <div
        style={{
          background: "#1A0F2E",
          border: "1px solid rgba(155,95,227,0.25)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {/* Header bar */}
        <div
          className="flex items-center gap-2"
          style={{ padding: "14px 20px", borderBottom: "1px solid rgba(155,95,227,0.15)" }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#9B5FE3" }} />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Patient Pulse — Live Dashboard
          </span>
        </div>

        {/* 4 metric tiles with count-up */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(155,95,227,0.12)" }}>
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.15 + i * 0.08 }}
            >
              <MetricTile {...m} active={inView} />
            </motion.div>
          ))}
        </div>

        {/* Bar chart */}
        <div style={{ padding: "20px 20px 16px" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", color: "rgba(255,255,255,0.35)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Bookings over time
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "56px" }}>
            {barHeights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={inView ? { height: `${h}%` } : {}}
                transition={{ delay: 0.5 + i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  flex: 1,
                  background: `rgba(107,33,168,${(0.25 + (h / 95) * 0.75).toFixed(2)})`,
                  borderRadius: "3px 3px 0 0",
                }}
              />
            ))}
          </div>
        </div>

        {/* Live notification with pulsing dot */}
        <div style={{ padding: "12px 20px", borderTop: "1px solid rgba(155,95,227,0.15)", display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Pulse ring container */}
          <div style={{ position: "relative", width: 8, height: 8, flexShrink: 0 }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "#4ADE80",
                animation: "pulse-ring 1.6s ease-out infinite",
              }}
            />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80", position: "relative", boxShadow: "0 0 6px #4ADE80" }} />
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>
            <span style={{ fontWeight: 600, color: "white" }}>New booking confirmed</span>
            {" "}— Sarah M. · Back pain · Tomorrow 10am
          </p>
        </div>
      </div>
    </motion.div>
  );
}

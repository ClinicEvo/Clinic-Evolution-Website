"use client";

import { motion } from "framer-motion";

// Same copy, deliberate, non-breaking lines so "follow-up" never splits.
const lines = ["More patients.", "Better follow-up.", "Fuller diaries."];

export default function HeroHeadline() {
  return (
    <h1
      className="font-display text-[var(--color-ink)]"
      style={{
        fontSize: "clamp(2.4rem, 5.4vw, 4.5rem)",
        fontWeight: 600,
        lineHeight: 1.0,
        letterSpacing: "-0.02em",
      }}
    >
      {lines.map((line, i) => (
        <motion.span
          key={line}
          className="block whitespace-nowrap"
          initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.06 + i * 0.1, type: "spring", stiffness: 68, damping: 18 }}
        >
          {line}
        </motion.span>
      ))}
    </h1>
  );
}

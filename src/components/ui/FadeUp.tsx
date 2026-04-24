"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.01 });

  return (
    <motion.div
      ref={ref}
      initial={reduce ? {} : { opacity: 0, y: 20 }}
      animate={isInView || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

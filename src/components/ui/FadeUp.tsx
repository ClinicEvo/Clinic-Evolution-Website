"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

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
      initial={reduce ? {} : { opacity: 0, y: 24, scale: 0.97 }}
      animate={isInView || reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.97 }}
      transition={
        reduce
          ? {}
          : {
              type: "spring",
              stiffness: 70,
              damping: 18,
              delay,
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

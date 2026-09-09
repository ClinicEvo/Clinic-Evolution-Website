"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /**
   * Render visible in the server HTML and skip the entrance.
   *
   * For anything that has to be on screen before JavaScript runs, which on a
   * landing page means everything above the fold. Without it the wrapper ships
   * as `opacity:0; transform: …` and the block is blank until hydration, so the
   * hero H1 and CTA of the paid pages were painting three to five seconds late
   * on a throttled phone. Below the fold the reveal is fine: nothing there is
   * being waited for.
   */
  immediate?: boolean;
}

export default function FadeUp({ children, delay = 0, className, immediate = false }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.01 });
  // `initial={false}` makes framer render the `animate` values on the server,
  // so the element arrives visible rather than waiting to be revealed.
  const still = reduce || immediate;

  return (
    <motion.div
      ref={ref}
      initial={still ? false : { opacity: 0, y: 24, scale: 0.97 }}
      animate={isInView || still ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.97 }}
      transition={
        still
          ? { duration: 0 }
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

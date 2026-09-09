"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Cross-fades route changes.
 *
 * `initial={false}` on AnimatePresence is load-bearing. Without it the wrapper
 * ships in the server HTML at opacity 0 and every page is blank until
 * framer-motion has hydrated: with JavaScript disabled the site rendered as a
 * white page below the header, and on a throttled phone the paid landing pages
 * painted their H1 three to five seconds after the server had answered. The
 * fade still runs on client-side navigation, which is the only time it was ever
 * visible anyway; a first paint has nothing to fade from.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

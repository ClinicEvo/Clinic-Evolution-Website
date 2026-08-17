"use client";

import { motion } from "framer-motion";

/* The H1 carried no target term of any kind. The homepage title tag is
   "Clinic Evo | Clinic Marketing Agency UK" and the description targets UK
   osteopaths, physios and chiropractors — none of which appeared here, so the
   strongest heading on the page we most want to rank was contributing nothing
   to it. The revision brief protects an H1 only "if it contains the page target
   keyword"; this one did not, so the protection never applied.

   It is also the page's only comprehension gap: the word "marketing" appeared
   nowhere above the fold, so what Clinic Evo does had to be inferred from the
   subtext. Leading with the category fixes the search signal and the scan test
   in the same line. The professions stay in the eyebrow directly above rather
   than being repeated here.

   One balanced block rather than hand-set lines. The previous headline was
   three short phrases pinned with `whitespace-nowrap` so "follow-up" could not
   split at its hyphen, and at 4rem in a 34rem column that left roughly
   seventeen characters per line. This headline does not fit those breaks: split
   by hand it orphans "that fills" on a line of its own. `text-wrap: balance`
   lets the browser even the lines at every width instead, which is also why the
   reveal is now one motion element rather than a stagger — there are no longer
   fixed lines to stagger.

   Split in two so the payoff carries the coral, the way every other hero on the
   site marks its H1. The category term stays in ink — it is what the page ranks
   for and it reads first — and the accent lands on the promise a clinic owner
   is actually scanning for. Only that phrase: "and keeps it full" stays ink so
   the coral marks one thing rather than half the headline. */
const HEADLINE_LEAD = "Clinic marketing that ";
const HEADLINE_ACCENT = "fills your diary";
const HEADLINE_TAIL = " and keeps it full";

export default function HeroHeadline() {
  return (
    <motion.h1
      className="font-display text-balance text-[var(--color-ink)]"
      style={{
        fontSize: "clamp(1.75rem, 8vw, 4rem)",
        fontWeight: 600,
        lineHeight: 1.05,
        letterSpacing: "-0.02em",
      }}
      initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.06, type: "spring", stiffness: 68, damping: 18 }}
    >
      {HEADLINE_LEAD}
      <em className="not-italic text-[var(--color-accent)]">{HEADLINE_ACCENT}</em>
      {HEADLINE_TAIL}
    </motion.h1>
  );
}

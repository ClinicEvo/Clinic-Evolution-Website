import FadeUp from "@/components/ui/FadeUp";
import { type LpVariant } from "@/lib/lp";

/**
 * §14 — the problem section, back on the page and now per-variant.
 *
 * HISTORY, because this file was dormant. It shipped on 18 Aug 2026 as a
 * shared, four-row, ~400-word navy section, was cut from the page later the
 * same day for length, and sat unused until the 9 Sep brief asked for a problem
 * section again. What it carried then was good and is mostly gone: the copy is
 * now five short rows drawn from `variant.problems`, three of which every MSK
 * clinic recognises and two written for the discipline. It is about a third of
 * the words it was.
 *
 * THE EYEBROW IS LOAD-BEARING. "If any of this is your clinic" is what makes
 * the second person in these rows safe. "Your website gets traffic but too few
 * visitors enquire" stated flatly is an unsourced claim about the reader's
 * business, which this project does not write. Offered as a checklist they
 * self-select from, it claims nothing about anybody. Do not delete the eyebrow
 * and leave the rows as assertions.
 *
 * WHAT WAS DROPPED FROM THE OLD VERSION, and should not come back: it closed by
 * asserting what a whole industry does and does not sell, and it ran three
 * "it is not X, it is Y" constructions where the page as a whole had seven. The
 * one instance the page keeps is the Patient Pulse heading, where the contrast
 * is the actual point.
 *
 * On a light ground rather than navy. It sits between the proof strip
 * (--color-surface) and the "why us" section, and the two navy bands on this
 * page are already spoken for by LandingDiscipline and LandingPatientPulse.
 * Three dark sections would stop any of them reading as an emphasis.
 */
export default function LandingProblem({ variant }: { variant: LpVariant }) {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] py-20 sm:py-24 lg:py-28">
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <FadeUp>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-5">If any of this is your clinic</p>
              <h2 className="text-h2 mb-6 text-[var(--color-ink)]">
                None of it is a marketing problem.{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  It is a joined-up problem
                </em>
              </h2>
              <p className="text-body-lg max-w-[42ch] text-[var(--color-muted)]">
                Each one of these has somebody responsible for it. What none of
                them has is somebody responsible for the whole route from a
                search to a patient on the table.
              </p>
            </div>
          </FadeUp>

          <div>
            <ul role="list" className="flex flex-col">
              {variant.problems.map((problem, index) => (
                <FadeUp key={problem.title} delay={0.06 + index * 0.05}>
                  <li className="grid grid-cols-[1.75rem_1fr] gap-4 border-t border-[var(--color-border)] py-5 last:border-b sm:gap-5">
                    <span
                      aria-hidden="true"
                      className="pt-1 font-display text-sm font-semibold tabular-nums text-[var(--color-muted-light)]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-h4 mb-1.5 text-[var(--color-ink)]">
                        {problem.title}
                      </h3>
                      <p className="text-body max-w-[56ch] text-[var(--color-muted)]">
                        {problem.body}
                      </p>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

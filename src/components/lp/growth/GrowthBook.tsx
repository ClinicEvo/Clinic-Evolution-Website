import GrowthCallForm from "@/components/forms/GrowthCallForm";
import FadeUp from "@/components/ui/FadeUp";
import { GROWTH_FORM_ANCHOR, type GrowthVariant } from "@/lib/growth-system";

/**
 * Section 10, the final CTA, and THE form. [src: lp brief, p5, p10 and p11]
 *
 * Every CTA on the page and the mobile sticky bar point here. The form sits
 * after the price on purpose: this page asks for a monthly commitment, and a
 * clinic owner who books a call without having seen the figure is the
 * unqualified lead the brief's pricing transparency exists to avoid.
 *
 * Left column: what happens after they book, then who this is and is not for.
 * The disqualifiers are the brief's own [src: lp brief, p3], stated plainly.
 * A genuine "not for you if" is the kind of specific admission that makes the
 * rest of a page believable, and it saves both sides a call.
 *
 * `data-lp-form` on the form's wrapper is what LandingStickyCta watches, so
 * the sticky bar never covers the submit button.
 */
const AFTER_BOOKING = [
  "We review your website, Google presence and current marketing before we speak.",
  "On the call we go through your numbers, your capacity and where the system would start for you.",
  "If it fits, you leave with the plan and the exact monthly figure. If it does not, we will say so.",
];

const FOR_YOU_IF = [
  "You own an independent osteopathy, chiropractic or physiotherapy clinic with one or two locations",
  "The clinic is typically taking under £20,000 a month and you want to grow it",
  "You have the capacity to see more patients",
  "You are willing to invest in marketing, software and the work of implementing it",
];

const NOT_FOR_YOU_IF = [
  "You only want a cheap website or a one-off task",
  "There is no budget for advertising",
  "The diary has no room for more patients",
  "You need rankings, leads, patients or revenue guaranteed before you start",
];

export default function GrowthBook({ variant }: { variant: GrowthVariant }) {
  return (
    <section
      id={GROWTH_FORM_ANCHOR.slice(1)}
      tabIndex={-1}
      className="scroll-mt-20 focus-visible:outline-none bg-[var(--color-surface)] py-24 pb-32 sm:py-28 lg:py-32"
    >
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <FadeUp>
              <p className="eyebrow mb-5">Book your clinic growth call</p>
              <h2 className="text-h2 mb-6 text-[var(--color-ink)]">
                Your {variant.practiceNoun},{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  and whether this fits it
                </em>
              </h2>
              <p className="text-body-lg mb-9 max-w-[48ch] text-[var(--color-muted)]">
                Send the details and pick a time. We do the reading before the
                call, so it starts from your clinic rather than from a slide.
              </p>
            </FadeUp>

            <FadeUp delay={0.06}>
              <div className="border-t border-[var(--color-border)] pt-7">
                <h3 className="text-h4 mb-4 text-[var(--color-ink)]">What happens after you book</h3>
                <ol role="list" className="flex flex-col gap-3">
                  {AFTER_BOOKING.map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xs font-bold tabular-nums text-[var(--color-accent-text)]">
                        {index + 1}
                      </span>
                      <span className="text-body-sm leading-relaxed text-[var(--color-charcoal)]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="mt-9 grid grid-cols-1 gap-8 border-t border-[var(--color-border)] pt-7 sm:grid-cols-2">
                <div>
                  <h3 className="text-h4 mb-4 text-[var(--color-ink)]">This is for you if</h3>
                  <ul role="list" className="flex flex-col gap-2.5">
                    {FOR_YOU_IF.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-1 flex-shrink-0 text-[var(--color-accent)]">
                          <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-body-sm text-[var(--color-charcoal)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-h4 mb-4 text-[var(--color-ink)]">It is not for you if</h3>
                  <ul role="list" className="flex flex-col gap-2.5">
                    {NOT_FOR_YOU_IF.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-1 flex-shrink-0 text-[var(--color-muted-light)]">
                          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                        <span className="text-body-sm text-[var(--color-muted)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.08}>
            <div data-lp-form>
              <div className="card-surface p-6 sm:p-8">
                <p className="text-h4 mb-1.5 text-[var(--color-ink)]">
                  Book your clinic growth call
                </p>
                <p className="text-body-sm mb-6 text-[var(--color-muted)]">
                  Ten short questions, so the call is about your clinic from the first minute.
                </p>
                <GrowthCallForm variant={variant} />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

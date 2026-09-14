import AppWindow from "@/components/sections/mockups/AppWindow";
import FadeUp from "@/components/ui/FadeUp";
import { GROWTH_INCLUDED, GROWTH_SECTION_ANCHORS } from "@/lib/growth-system";
import GrowthCtaButton from "./GrowthCtaButton";

/**
 * Section 05, "What is included": website, SEO, paid media, Patient Pulse,
 * reactivation, referrals and mentoring. [src: lp brief, p5 and p7]
 *
 * The longest section on the page, and deliberately open rather than tabbed
 * or collapsed: this is primary content, and `npm run scan` is right to fail a
 * page that hides its product behind an interaction. Scannability comes from
 * the seven h3s, not from cutting the detail underneath them; a clinic owner
 * comparing this to a £1,350 fee wants the detail.
 *
 * Only the Patient Pulse item carries a screenshot, inside AppWindow: the rule
 * is no bare screenshots anywhere on the site, and the capture is the one with
 * patient details already replaced.
 */
function Tick() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mt-1 flex-shrink-0 text-[var(--color-accent)]"
    >
      <path
        d="M3 8l3.5 3.5L13 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function GrowthIncluded() {
  return (
    <section
      id={GROWTH_SECTION_ANCHORS.included.slice(1)}
      tabIndex={-1}
      className="scroll-mt-20 focus-visible:outline-none border-b border-[var(--color-border)] bg-[var(--color-surface)] py-24 sm:py-28 lg:py-32"
    >
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <FadeUp>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-5">What is included</p>
              <h2 className="text-h2 mb-6 text-[var(--color-ink)]">
                Seven things we build, install and manage,{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  for one monthly fee
                </em>
              </h2>
              <p className="text-body-lg mb-8 max-w-[42ch] text-[var(--color-muted)]">
                Every item below is part of the Growth System. The fee, and the
                three costs that sit outside it, are set out further down the
                page.
              </p>
              <GrowthCtaButton placement="mid-included" size="md" className="w-full sm:w-auto" />
            </div>
          </FadeUp>

          <ol role="list" className="flex flex-col">
            {GROWTH_INCLUDED.map((item, index) => (
              // id + scroll-mt + tabIndex: three of these are Google Ads sitelink
              // destinations (see GrowthVariant.sitelinks), so a click has to land with
              // the heading clear of the sticky header and focus moved here.
              <li
                key={item.title}
                id={item.id}
                tabIndex={-1}
                className="scroll-mt-20 border-t border-[var(--color-border)] py-8 last:border-b focus-visible:outline-none sm:py-9"
              >
                <FadeUp delay={0.04 + index * 0.04} className="grid grid-cols-[1.75rem_1fr] gap-4 sm:grid-cols-[2.25rem_1fr] sm:gap-5">
                  <span
                    aria-hidden="true"
                    className="pt-1.5 font-display text-sm font-semibold tabular-nums text-[var(--color-muted-light)]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-h3 mb-3 text-[var(--color-ink)]">{item.title}</h3>
                    <p className="text-body mb-5 max-w-[60ch] text-[var(--color-muted)]">
                      {item.summary}
                    </p>
                    <ul
                      role="list"
                      className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2"
                    >
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <Tick />
                          <span className="text-body-sm text-[var(--color-charcoal)]">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {item.screenshot ? (
                      <div className="mt-7">
                        <AppWindow
                          view="Conversations"
                          src="/images/patient-pulse/pp-conversations.png"
                          alt="The Patient Pulse team inbox showing website and social enquiries, an automated SMS reply and a Cliniko booking link"
                          ratio="1917/918"
                          footnote="A real Patient Pulse account. Patient names and contact details have been replaced."
                        />
                      </div>
                    ) : null}
                  </div>
                </FadeUp>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

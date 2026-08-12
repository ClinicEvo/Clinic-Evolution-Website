import AuditForm from "@/components/forms/AuditForm";
import FadeUp from "@/components/ui/FadeUp";
import { siteConfig } from "@/lib/metadata";
import { LP_FORM_ANCHOR, LP_THANK_YOU_PATH, type LpVariant } from "@/lib/lp";

const REASSURANCE = [
  "Free audit, honest assessment within 2 business days",
  "No jargon, no obligation to go further",
  "Rolling monthly arrangements — no long-term lock-in",
];

export default function LandingAudit({ variant }: { variant: LpVariant }) {
  return (
    <section
      id={LP_FORM_ANCHOR.replace("#", "")}
      tabIndex={-1}
      className="scroll-mt-20 bg-[var(--color-paper)] py-24 pb-32 sm:py-28 lg:py-32"
    >
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <FadeUp>
              <p className="eyebrow mb-5">Free clinic audit</p>
              <h2 className="text-h2 mb-6 text-[var(--color-ink)]">
                Find out where your clinic is{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  losing patients
                </em>
              </h2>
              <p className="text-body-lg mb-8 max-w-[46ch] text-[var(--color-muted)]">
                We will review your website, Google Business Profile, local
                rankings and current ad performance, then tell you plainly where
                the gaps are and what to fix first.
              </p>
            </FadeUp>

            <FadeUp delay={0.08}>
              <ul role="list" className="flex flex-col gap-3.5">
                {REASSURANCE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      width="16"
                      height="16"
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
                    <span className="text-body text-[var(--color-charcoal)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.12}>
              <p className="text-body-sm mt-10 border-t border-[var(--color-border)] pt-6 text-[var(--color-muted)]">
                Would rather write to us? Email{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-[var(--color-ink)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--color-accent)]"
                >
                  {siteConfig.email}
                </a>
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.06}>
            <div className="card-surface p-6 sm:p-9">
              <AuditForm
                lpVariant={variant.slug}
                defaultDiscipline={variant.defaultDiscipline}
                redirectTo={LP_THANK_YOU_PATH}
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

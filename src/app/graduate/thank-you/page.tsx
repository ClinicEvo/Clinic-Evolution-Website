import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import ArrowLink from "@/components/ui/ArrowLink";
import { GRADUATE_INTAKE, GRADUATE_THANK_YOU_PATH } from "@/lib/graduate";

/**
 * Confirmation page for a Graduate Clinic Launch application.
 *
 * Its own URL rather than the audit or /lp/ confirmations, so a graduate
 * application can be counted as a destination conversion on its own without
 * audit requests inflating it.
 *
 * NO TURNAROUND PROMISE HERE, deliberately. /free-clinic-audit/ can say "within
 * 2 business days" because that is a commitment Clinic Evo has made and
 * published. Nothing equivalent has been agreed for graduate applications, so
 * this page bounds the wait by the intake date — which is sourced — and stops
 * there. If a response time gets agreed, this is the place to add it.
 */
export const metadata = buildMetadata({
  title: "Application Received",
  description:
    "Your Graduate Clinic Launch Programme application has been received.",
  path: GRADUATE_THANK_YOU_PATH,
  noIndex: true,
});

const NEXT_STEPS = [
  "We read your application ourselves — no automated triage",
  "We come back to you about a short call",
  "The call covers where you are, what you are building and what you need first",
  `If it is a fit, you start with the ${GRADUATE_INTAKE.labelLong} intake`,
];

export default function GraduateThankYouPage() {
  return (
    <div className="flex min-h-[70dvh] items-center bg-[var(--color-paper)]">
      <div className="cx-main w-full py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:items-start">
          <div>
            <FadeUp>
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
                <svg
                  aria-hidden="true"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[var(--color-accent)]"
                >
                  <path
                    d="M4 12l5.5 5.5L20 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </FadeUp>

            <FadeUp delay={0.06}>
              <p className="text-label mb-4 text-[var(--color-accent)]">
                Application received
              </p>
              <h1 className="text-h1 mb-6 text-[var(--color-ink)]">
                That is with us. You are in for the{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  {GRADUATE_INTAKE.label}
                </em>{" "}
                intake.
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-body-lg mb-8 max-w-[52ch] text-[var(--color-muted)]">
                A person reads every application. Nothing about the next step is
                automated, and there is nothing else you need to send.
              </p>
            </FadeUp>

            <FadeUp delay={0.14}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <ArrowLink href="/case-studies/lind-street-osteopathy/">
                  Read how a clinic like yours started
                </ArrowLink>
                <Link
                  href="/learning-hub/"
                  className="text-sm font-bold text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
                >
                  Browse the learning hub
                </Link>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.18}>
            <div className="rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 lg:p-10">
              <p className="text-label mb-6 text-[var(--color-muted)]">
                What happens next
              </p>
              <ul role="list" className="flex flex-col">
                {NEXT_STEPS.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-3.5 border-t border-[var(--color-border)] py-4 first:border-t-0 first:pt-0 last:pb-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 w-4 flex-shrink-0 font-display text-sm font-bold text-[var(--color-accent-text)]"
                    >
                      {i + 1}
                    </span>
                    <span className="text-body text-[var(--color-charcoal)]">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

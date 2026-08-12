import { buildMetadata, siteConfig } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import { LP_PHONE, LP_THANK_YOU_PATH } from "@/lib/lp";

/**
 * Confirmation page for the PPC landing pages. Kept separate from
 * /free-clinic-audit/thank-you/ so this URL can be used on its own as a
 * destination conversion in Google Ads without organic audit requests
 * being counted as paid conversions.
 */
export const metadata = buildMetadata({
  title: "Audit Request Received",
  description:
    "Your free clinic audit request has been received. Clinic Evo will be in touch within 2 business days.",
  path: LP_THANK_YOU_PATH,
  noIndex: true,
});

const NEXT_STEPS = [
  "We review your website, search visibility and local presence",
  "We look at where enquiries are being lost in the patient journey",
  "We send you a practical summary of what to fix first",
  "If there is a good fit, we can talk through how we would run it",
];

export default function LandingThankYouPage() {
  const hasPhone = LP_PHONE.display !== "" && LP_PHONE.href !== "";

  return (
    <div className="flex min-h-[70dvh] items-center bg-[var(--color-paper)]">
      <div className="cx-main w-full py-20">
        <div className="max-w-2xl">
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
              Audit request received
            </p>
            <h1 className="text-h1 mb-6 text-[var(--color-ink)]">
              We have your request. We will be in touch within 2 business days.
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-body-lg mb-10 max-w-[52ch] text-[var(--color-muted)]">
              A real person reviews every audit request — no automated report. If
              anything is urgent in the meantime, the fastest way to reach us is
              below.
            </p>
          </FadeUp>

          <FadeUp delay={0.14}>
            <div className="card-surface mb-10 max-w-lg p-6">
              <p className="mb-4 text-sm font-semibold text-[var(--color-ink)]">
                What happens next
              </p>
              <ol className="flex flex-col gap-3">
                {NEXT_STEPS.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xs font-bold tabular-nums text-[var(--color-accent)]">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-[var(--color-muted)]">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeUp>

          <FadeUp delay={0.18}>
            <div className="flex flex-col gap-2">
              {hasPhone ? (
                <a
                  href={LP_PHONE.href}
                  className="text-body font-semibold text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
                >
                  Call us on {LP_PHONE.display}
                </a>
              ) : null}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-body text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                Email {siteConfig.email}
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

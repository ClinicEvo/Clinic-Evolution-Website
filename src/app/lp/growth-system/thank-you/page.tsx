import FadeUp from "@/components/ui/FadeUp";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { GROWTH_THANK_YOU_PATH } from "@/lib/growth-system";
import { LP_PHONE } from "@/lib/lp";

/**
 * Confirmation page for the Growth System form.
 *
 * One state: the request is acknowledged and a person arranges the time. The
 * GoHighLevel booking calendar this page used to embed was removed on
 * 15 Sep 2026 at Simon's request; with it went the
 * NEXT_PUBLIC_GROWTH_CALL_CALENDAR_URL override and the frame-src allowance
 * for the widget's origin in next.config.mjs. See the note in
 * src/lib/growth-system.ts before reinstating any of it.
 *
 * Its own URL rather than /lp/thank-you/, so a URL-based conversion action in
 * Google Ads can count growth call requests separately from audit requests.
 * The header shows the phone number here and nowhere else on these pages,
 * for the reason recorded on LP_PHONE.
 *
 * The steps below are the same three the landing page promises under "What
 * happens after you book" in GrowthBook.tsx. Two places, one sequence: if one
 * changes, change the other.
 */
export const metadata = buildMetadata({
  title: "Growth Call Request Received",
  description:
    "Your clinic growth call request has been received. We review your clinic, current marketing and growth goals before we speak.",
  path: GROWTH_THANK_YOU_PATH,
  noIndex: true,
});

const NEXT_STEPS = [
  "We review your website, Google presence and current marketing before we speak",
  "We come back to you to arrange a time that suits your clinic diary",
  "On the call we go through your numbers, your capacity and where the system would start for you",
];

export default function GrowthThankYouPage() {
  const hasPhone = LP_PHONE.display !== "" && LP_PHONE.href !== "";

  return (
    <div className="flex min-h-[70dvh] items-center bg-[var(--color-paper)]">
      <div className="cx-main w-full py-16 sm:py-20">
        <div className="max-w-2xl">
          <FadeUp immediate>
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-accent)]">
                <path d="M4 12l5.5 5.5L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </FadeUp>

          <FadeUp immediate>
            <p className="text-label mb-4 text-[var(--color-accent-text)]">
              Request received
            </p>
            <h1 className="text-h1 mb-6 text-[var(--color-ink)]">
              That is with us. We will be in touch to{" "}
              <em className="not-italic text-[var(--color-accent)]">arrange your growth call</em>
            </h1>
          </FadeUp>

          <FadeUp immediate>
            <p className="text-body-lg mb-10 max-w-[56ch] text-[var(--color-muted)]">
              We will review your clinic, current marketing and growth goals
              before we speak, so the call starts from where your clinic
              already is.
            </p>
          </FadeUp>

          <FadeUp immediate>
            <div className="card-surface mb-10 max-w-lg p-6">
              <p className="mb-4 text-sm font-semibold text-[var(--color-ink)]">
                What happens next
              </p>
              <ol className="flex flex-col gap-3">
                {NEXT_STEPS.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xs font-bold tabular-nums text-[var(--color-accent-text)]">
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

          <FadeUp immediate>
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

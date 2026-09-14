import FadeUp from "@/components/ui/FadeUp";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { GROWTH_CALL_CALENDAR_URL, GROWTH_THANK_YOU_PATH } from "@/lib/growth-system";
import { LP_PHONE } from "@/lib/lp";

/**
 * Confirmation page for the Growth System form, and the booking step.
 *
 * Two states, keyed off whether a calendar URL is configured (see
 * GROWTH_CALL_CALENDAR_URL):
 *
 *   - With a calendar: "pick a time", the embedded booking widget, and the
 *     brief's line about reviewing the clinic before the call.
 *   - Without one: the request is acknowledged and a person arranges the time.
 *     Nothing on the page promises a calendar that is not there.
 *
 * Its own URL rather than /lp/thank-you/, so a URL-based conversion action in
 * Google Ads can count growth call requests separately from audit requests.
 * The header shows the phone number here and nowhere else on these pages,
 * for the reason recorded on LP_PHONE.
 *
 * The iframe has a fixed minimum height rather than GoHighLevel's resize
 * script: the script is a third-party script on the page for the sake of a
 * few pixels of scrollbar, and the CSP would need widening for it.
 */
export const metadata = buildMetadata({
  title: "Growth Call Request Received",
  description:
    "Your clinic growth call request has been received. We review your clinic, current marketing and growth goals before we speak.",
  path: GROWTH_THANK_YOU_PATH,
  noIndex: true,
});

export default function GrowthThankYouPage() {
  const hasCalendar = GROWTH_CALL_CALENDAR_URL !== "";
  const hasPhone = LP_PHONE.display !== "" && LP_PHONE.href !== "";

  return (
    <div className="flex min-h-[70dvh] items-center bg-[var(--color-paper)]">
      <div className="cx-main w-full py-16 sm:py-20">
        <div className={hasCalendar ? "max-w-4xl" : "max-w-2xl"}>
          <FadeUp immediate>
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-accent)]">
                <path d="M4 12l5.5 5.5L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </FadeUp>

          <FadeUp immediate>
            <p className="text-label mb-4 text-[var(--color-accent-text)]">
              {hasCalendar ? "One more step" : "Request received"}
            </p>
            <h1 className="text-h1 mb-6 text-[var(--color-ink)]">
              {hasCalendar ? (
                <>
                  Pick a time for your{" "}
                  <em className="not-italic text-[var(--color-accent)]">clinic growth call</em>
                </>
              ) : (
                <>
                  That is with us. We will be in touch to{" "}
                  <em className="not-italic text-[var(--color-accent)]">arrange your growth call</em>
                </>
              )}
            </h1>
          </FadeUp>

          <FadeUp immediate>
            <p className="text-body-lg mb-10 max-w-[56ch] text-[var(--color-muted)]">
              We will review your clinic, current marketing and growth goals
              before we speak, so the call starts from where your clinic
              already is.
            </p>
          </FadeUp>

          {hasCalendar ? (
            <FadeUp immediate>
              <div className="mb-10 overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
                <iframe
                  src={GROWTH_CALL_CALENDAR_URL}
                  title="Choose a time for your clinic growth call"
                  className="block w-full"
                  style={{ minHeight: "760px", border: 0 }}
                />
              </div>
            </FadeUp>
          ) : null}

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

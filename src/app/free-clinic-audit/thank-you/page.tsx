import { buildMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import ArrowLink from "@/components/ui/ArrowLink";
import FadeUp from "@/components/ui/FadeUp";

export const metadata = buildMetadata({
  title: "Audit Request Received",
  description: "Your free clinic audit request has been received. Clinic Evo will review your clinic's digital presence and be in touch within 2 business days.",
  path: "/free-clinic-audit/thank-you/",
  noIndex: true,
});

export default function AuditThankYouPage() {
  return (
    <div className="min-h-[100dvh] bg-[var(--color-paper)] flex items-center">
      <div className="cx-main w-full py-24">
        <div className="max-w-2xl">
          <FadeUp>
            {/* Check icon */}
            <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-8">
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
            <p className="text-label text-[var(--color-accent)] mb-4">Audit request received</p>
            <h1 className="font-display font-bold text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] tracking-[-0.025em] text-[var(--color-ink)] mb-6">
              We have your request.<br />We will be in touch shortly.
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-body-lg text-[var(--color-muted)] mb-8 leading-relaxed max-w-xl">
              Clinic Evo will review your clinic's website, search visibility, local presence and patient journey. You can expect to hear from us within 2 business days.
            </p>
          </FadeUp>

          <FadeUp delay={0.14}>
            <div className="card-surface p-6 mb-10 max-w-lg">
              <p className="text-sm font-semibold text-[var(--color-ink)] mb-3">What happens next</p>
              <ol className="flex flex-col gap-3">
                {[
                  "We review your clinic's website, SEO and local visibility",
                  "We identify the clearest growth opportunities",
                  "We send you a practical summary of recommendations",
                  "If there is a good fit, we can discuss next steps together",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[var(--color-muted)] leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeUp>

          <FadeUp delay={0.18}>
            <div className="flex flex-col sm:flex-row items-start gap-5 mb-14">
              <Button href="/" variant="outline">
                Back to home
              </Button>
              <a
                href="mailto:hello@clinicevolution.com"
                className="text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors self-center"
              >
                or email hello@clinicevolution.com
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.22}>
            <div className="border-t border-[var(--color-border)] pt-10">
              <p className="text-label text-[var(--color-muted)] mb-5">While you wait</p>
              <div className="flex flex-col gap-4">
                <ArrowLink href="/resources/how-to-get-more-patients-to-your-clinic/">
                  How to get more patients to your clinic
                </ArrowLink>
                <ArrowLink href="/resources/local-seo-for-healthcare-clinics/">
                  Local SEO for healthcare clinics
                </ArrowLink>
                <ArrowLink href="/resources/patient-recall-system/">
                  Building a patient recall system
                </ArrowLink>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

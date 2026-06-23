import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import { ctaNav } from "@/lib/nav";
import { siteConfig } from "@/lib/metadata";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  id?: string;
}

export default function CTASection({
  heading = "Find out exactly where your clinic is losing patients.",
  subheading = "Book a free clinic audit. We review your diary, your search visibility, your enquiry handling and your follow-up systems, and tell you honestly where patients are falling through the gaps. Within two business days.",
  primaryLabel = ctaNav.label,
  primaryHref = ctaNav.href,
  id,
}: CTASectionProps) {
  return (
    <section id={id} className="section grain bg-[var(--color-paper)] text-center !pt-10">
      <div className="cx-main">
        <div
          className="mx-auto max-w-5xl px-8 py-16 md:px-16"
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-panel)",
            background: "linear-gradient(180deg, #fff 0%, var(--color-accent-light) 100%)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <FadeUp>
            <p className="eyebrow mb-4 justify-center">Take the first step</p>
            <h2
              className="text-h2 mx-auto mb-6 text-[var(--color-ink)] max-w-[680px]"
            >
              {heading}
            </h2>
            <p
              className="text-body-lg mx-auto mb-10 max-w-[560px] text-[var(--color-muted)]"
            >
              {subheading}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={primaryHref}
                className="inline-flex items-center font-semibold text-white transition-all hover:bg-[var(--color-accent-dim)] active:translate-y-px"
                style={{
                  background: "var(--color-accent)",
                  padding: "15px 30px",
                  borderRadius: "var(--radius-btn)",
                  fontSize: "15px",
                  fontFamily: "var(--font-display)",
                }}
              >
                {primaryLabel}
              </Link>
              {siteConfig.email && (
                <span className="text-sm font-semibold text-[var(--color-muted)]">
                  or email{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition-colors hover:text-[var(--color-ink)] underline underline-offset-2"
                  >
                    {siteConfig.email}
                  </a>
                </span>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

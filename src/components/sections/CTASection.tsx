import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import { ctaNav } from "@/lib/nav";
import { siteConfig } from "@/lib/metadata";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CTASection({
  heading = "Find out exactly where your clinic is losing patients.",
  subheading = "Book a free clinic audit. We review your diary, your search visibility, your enquiry handling and your follow-up systems, and tell you honestly where patients are falling through the gaps. Within two business days.",
  primaryLabel = ctaNav.label,
  primaryHref = ctaNav.href,
}: CTASectionProps) {
  return (
    <section className="section grain bg-[var(--color-paper)] text-center">
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
              className="mx-auto mb-6 font-display font-extrabold text-[var(--color-ink)]"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: 1.15,
                letterSpacing: "0",
                maxWidth: "680px",
              }}
            >
              {heading}
            </h2>
            <p
              className="mx-auto mb-10"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "17px",
                color: "var(--color-muted)",
                lineHeight: 1.7,
                maxWidth: "560px",
              }}
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
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
                >
                  or email {siteConfig.email}
                </a>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

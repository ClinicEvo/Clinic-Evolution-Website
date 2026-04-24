import Button from "@/components/ui/Button";
import { ctaNav } from "@/lib/nav";
import { siteConfig } from "@/lib/metadata";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CTASection({
  heading = "Ready to grow your clinic?",
  subheading = "Book a free audit and get a personalised plan for your practice within 2 business days.",
  primaryLabel = ctaNav.label,
  primaryHref = ctaNav.href,
}: CTASectionProps) {
  return (
    <section className="bg-[var(--color-ink)] section">
      <div className="cx-main">
        <div className="max-w-2xl">
          <p className="text-label text-[var(--color-accent)] mb-5">Get started</p>
          <h2 className="text-h1 text-white mb-5">{heading}</h2>
          <p className="text-body-lg text-white/60 mb-10">{subheading}</p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white transition-colors pt-4 sm:pt-0"
              >
                or email {siteConfig.email}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

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
  heading = "Find out exactly where your clinic is losing patients.",
  subheading = "Book a free clinic audit. We review your diary, your search visibility, your enquiry handling and your follow-up systems — and tell you honestly where patients are falling through the gaps. Within two business days.",
  primaryLabel = ctaNav.label,
  primaryHref = ctaNav.href,
}: CTASectionProps) {
  return (
    <section className="bg-[var(--color-paper)] section">
      <div className="cx-main">
        <div className="max-w-3xl">
          <p className="text-label text-[var(--color-accent)] mb-6">Take the first step</p>
          <h2 className="text-h1 text-[var(--color-ink)] mb-8">{heading}</h2>
          <p className="text-body-lg text-[var(--color-muted)] mb-12 max-w-2xl">{subheading}</p>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
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

import Link from "next/link";
import { siteConfig } from "@/lib/metadata";

/**
 * Minimal footer for the PPC landing pages. No sitemap and no service links —
 * only the legal pages ad platforms require to be reachable, plus a contact
 * fallback for anyone who would rather email than fill in the form.
 */
export default function LandingFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-10">
      <div className="cx-main flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-body-sm font-semibold text-[var(--color-ink)]">
            {siteConfig.legalName}
          </p>
          <p className="text-body-sm text-[var(--color-muted)]">
            Marketing for UK osteopathy, physiotherapy and chiropractic clinics.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-body-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            {siteConfig.email}
          </a>
          <Link
            href="/privacy-policy/"
            className="text-body-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            Privacy policy
          </Link>
          <Link
            href="/terms/"
            className="text-body-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}

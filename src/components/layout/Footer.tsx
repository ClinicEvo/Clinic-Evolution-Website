import Link from "next/link";
import { footerNav } from "@/lib/nav";
import { siteConfig } from "@/lib/metadata";
import FooterCta from "@/components/layout/FooterCta";
import FooterLogoLink from "@/components/layout/FooterLogoLink";
import FooterNavColumns from "@/components/layout/FooterNavColumns";

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ background: "var(--color-ink)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="cx-main pt-12 pb-8">

        {/* ── CTA strip ──────────────────────────────────────────────────── */}
        <FooterCta />

        {/* ── Nav grid ───────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <FooterLogoLink />
            <p className="mt-5 text-sm max-w-xs leading-relaxed text-white">
              Patient acquisition and retention systems for UK MSK clinics.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {siteConfig.email}
              </a>
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Clinic Evo on LinkedIn"
                  className="transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  <LinkedInIcon />
                </a>
              )}
            </div>
          </div>

          <FooterNavColumns />
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────────── */}
        <div
          className="mt-14 pt-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-6" role="list">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}

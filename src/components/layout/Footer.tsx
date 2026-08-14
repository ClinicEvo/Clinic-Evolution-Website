import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/lib/nav";
import { siteConfig } from "@/lib/metadata";
import FooterCta from "@/components/layout/FooterCta";

/* Coral on the navy footer clears AA at 5.67:1, so the footer keeps the full
   brightness accent rather than the darker text variant used on light ground. */
const ACCENT = "var(--color-accent)";

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FooterLogo = () => (
  <Image
    src="/images/cevo_newlogo_dark.png"
    alt="Clinic Evo"
    width={190}
    height={55}
    style={{ objectFit: "contain" }}
  />
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
            <Link href="/" aria-label="Clinic Evo home" className="inline-block">
              <FooterLogo />
            </Link>
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

          {/* Who We Help */}
          <div className="lg:pl-12">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] mb-3" style={{ color: ACCENT }}>Who We Help</h3>
            <ul className="flex flex-col gap-2" role="list">
              {footerNav.whoWeHelp.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] transition-colors hover:opacity-70"
                    style={{ color: "rgba(255,255,255,1)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] mb-3" style={{ color: ACCENT }}>Services</h3>
            <ul className="flex flex-col gap-2" role="list">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] transition-colors hover:opacity-70"
                    style={{ color: "rgba(255,255,255,1)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] mb-3" style={{ color: ACCENT }}>Company</h3>
            <ul className="flex flex-col gap-2" role="list">
              {footerNav.company.map((item) => {
                const isAudit = item.href.includes("audit");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13px] transition-colors hover:text-white"
                      style={{
                        color: isAudit ? ACCENT : "rgba(255,255,255,1)",
                        fontWeight: isAudit ? 600 : 400,
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
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

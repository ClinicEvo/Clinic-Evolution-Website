import Link from "next/link";
import { footerNav } from "@/lib/nav";
import { siteConfig } from "@/lib/metadata";

const ACCENT = "#ff5b4a";

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* Brand lockup recreated for dark backgrounds, no white plate needed */
const FooterLogo = () => (
  <span className="inline-flex items-center gap-2.5">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* navy/light ring with orange accent arc on the right */}
      <circle cx="16" cy="16" r="14" stroke="rgba(255,255,255,0.85)" strokeWidth="2" />
      <path
        d="M16 2a14 14 0 0 1 0 28"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* orange check / V mark */}
      <path
        d="M9 13l5 8 4-13"
        stroke={ACCENT}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="font-display font-bold text-white text-[1.35rem] leading-none tracking-tight">
      Clinic Evo
    </span>
  </span>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ background: "#0d1b2a", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="cx-main pt-16 pb-10">

        {/* ── CTA strip ──────────────────────────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-14 mb-14"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div>
            <p className="font-display font-bold text-[1.35rem] leading-snug text-white mb-1">
              Find out where your clinic is losing patients.
            </p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              Free audit, honest assessment within 2 business days. No jargon. No commitment.
            </p>
          </div>
          <Link
            href="/free-clinic-audit/"
            className="flex-shrink-0 inline-flex items-center gap-2 text-white text-sm font-bold px-5 py-3 rounded-[4px] transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: ACCENT }}
          >
            Book a free clinic audit
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* ── Nav grid ───────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Clinic Evo home" className="inline-block">
              <FooterLogo />
            </Link>
            <p className="mt-5 text-sm max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
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
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-white mb-5">Who We Help</h3>
            <ul className="flex flex-col gap-3.5" role="list">
              {footerNav.whoWeHelp.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-white mb-5">Services</h3>
            <ul className="flex flex-col gap-3.5" role="list">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-white mb-5">Company</h3>
            <ul className="flex flex-col gap-3.5" role="list">
              {footerNav.company.map((item) => {
                const isAudit = item.href.includes("audit");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13px] transition-colors hover:text-white"
                      style={{
                        color: isAudit ? ACCENT : "rgba(255,255,255,0.5)",
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

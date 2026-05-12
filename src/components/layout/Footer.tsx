import Link from "next/link";
import { footerNav } from "@/lib/nav";
import { siteConfig } from "@/lib/metadata";

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
      className="text-white border-t border-white/5 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #181d2e 0%, #111520 100%)" }}
    >
      {/* Subtle radial glow top-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
      />

      <div className="cx-main pt-16 pb-10">

        {/* ── CTA strip ──────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-14 border-b border-white/8 mb-14">
          <div>
            <p className="font-display font-bold text-[1.35rem] leading-snug text-white mb-1">
              Ready to grow your clinic?
            </p>
            <p className="text-sm text-white/50">
              Free audit — personalised growth report within 2 business days.
            </p>
          </div>
          <Link
            href="/free-clinic-audit/"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover,var(--color-accent))]/90 text-white text-sm font-bold px-5 py-3 rounded-lg transition-opacity hover:opacity-90 whitespace-nowrap"
          >
            Book free audit
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* ── Nav grid ───────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-[1.5rem] leading-none text-white hover:text-[var(--color-accent)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-wordmark)" }}
            >
              ClinicEvo
            </Link>
            <p className="mt-5 text-sm text-white/45 max-w-xs leading-relaxed">
              Growth systems for UK MSK clinics that want predictable,
              measurable patient flow.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-white/45 hover:text-white transition-colors"
              >
                {siteConfig.email}
              </a>
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ClinicEvo on LinkedIn"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <LinkedInIcon />
                </a>
              )}
            </div>
          </div>

          {/* Who We Help */}
          <div>
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[var(--color-accent)] mb-5">Who We Help</h3>
            <ul className="flex flex-col gap-3.5" role="list">
              {footerNav.whoWeHelp.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[var(--color-accent)] mb-5">Services</h3>
            <ul className="flex flex-col gap-3.5" role="list">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[var(--color-accent)] mb-5">Company</h3>
            <ul className="flex flex-col gap-3.5" role="list">
              {footerNav.company.map((item) => {
                const isAudit = item.href.includes("audit");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={
                        isAudit
                          ? "text-sm font-semibold text-[var(--color-accent)] hover:opacity-80 transition-opacity"
                          : "text-sm text-white/55 hover:text-white transition-colors"
                      }
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
        <div className="mt-14 pt-7 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-xs text-white/35">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-6" role="list">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-xs text-white/35 hover:text-white transition-colors">
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

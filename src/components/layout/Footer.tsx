import Link from "next/link";
import { footerNav } from "@/lib/nav";
import { siteConfig } from "@/lib/metadata";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-ink)] text-white">
      <div className="cx-main section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-brand text-2xl text-white hover:text-[var(--color-accent)] transition-colors duration-150"
              aria-label="ClinicEvo home"
            >
              ClinicEvo
            </Link>
            <p className="mt-4 text-sm text-white/40 max-w-xs leading-relaxed">
              Specialist digital growth partner for UK osteopaths,
              physiotherapists and chiropractors.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-white/40 hover:text-white transition-colors duration-150"
              >
                {siteConfig.email}
              </a>
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-white transition-colors duration-150"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          {/* Who We Help */}
          <div>
            <h3 className="text-label text-white/30 mb-4">Who We Help</h3>
            <ul className="flex flex-col gap-3" role="list">
              {footerNav.whoWeHelp.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-label text-white/30 mb-4">Services</h3>
            <ul className="flex flex-col gap-3" role="list">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-label text-white/30 mb-4">Company</h3>
            <ul className="flex flex-col gap-3" role="list">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2" role="list">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-xs text-white/30 hover:text-white/60 transition-colors duration-150">
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

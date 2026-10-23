"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerNav, previewFooterNav, isHomeDraftPath, SYSTEM_STAGES } from "@/lib/nav";

/* Coral on the navy footer clears AA at 5.67:1, so the footer keeps the full
   brightness accent rather than the darker text variant used on light ground. */
const ACCENT = "var(--color-accent)";

/** The footer's three link columns, split out of Footer, like FooterCta, so
 *  they can read the route. The homepage draft lists services by the five
 *  stages the homepage draft is built around, and drop the graduate and
 *  consultant pages. */
export default function FooterNavColumns() {
  const isPreview = isHomeDraftPath(usePathname());
  const nav = isPreview ? previewFooterNav : footerNav;

  return (
    <>
      {/* Who We Help */}
      <div className="lg:pl-12">
        <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] mb-3" style={{ color: ACCENT }}>Who We Help</h3>
        <ul className="flex flex-col gap-2" role="list">
          {nav.whoWeHelp.map((item) => (
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
        {isPreview ? (
          <ul className="flex flex-col gap-3" role="list">
            {SYSTEM_STAGES.map((s) => (
              <li key={s.stage}>
                <span className="block text-[11px] uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {s.stage}
                </span>
                <span className="mt-0.5 flex flex-wrap gap-x-3 gap-y-1">
                  {s.services.map((svc) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      className="text-[13px] transition-colors hover:opacity-70"
                      style={{ color: "rgba(255,255,255,1)" }}
                    >
                      {svc.label}
                    </Link>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex flex-col gap-2" role="list">
            {nav.services.map((item) => (
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
        )}
      </div>

      {/* Company */}
      <div>
        <h3 className="text-[13px] font-semibold uppercase tracking-[0.04em] mb-3" style={{ color: ACCENT }}>Company</h3>
        <ul className="flex flex-col gap-2" role="list">
          {nav.company.map((item) => {
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
    </>
  );
}

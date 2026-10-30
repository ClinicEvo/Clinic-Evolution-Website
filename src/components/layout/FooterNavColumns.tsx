"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerNav, previewFooterNav, isHomeDraftPath, SYSTEM_STAGES } from "@/lib/nav";

/* Coral on the navy footer clears AA at 5.67:1, so the footer keeps the full
   brightness accent rather than the darker text variant used on light ground. */
const ACCENT = "var(--color-accent)";

/** The footer's three link columns, split out of Footer, like FooterCta, so
 *  they can read the route. The homepage draft lists its services in the
 *  order of the five stages it is built around, and drops the graduate and
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
          // Services in the order of the five stages, but without the stage
          // names: one link a line, like the other two columns.
          <ul className="flex flex-col gap-2" role="list">
            {SYSTEM_STAGES.flatMap((s) => s.services).map((svc) => (
              <li key={svc.href}>
                <Link
                  href={svc.href}
                  className="text-[13px] transition-colors hover:opacity-70"
                  style={{ color: "rgba(255,255,255,1)" }}
                >
                  {svc.label}
                </Link>
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

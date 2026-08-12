"use client";

import { usePathname } from "next/navigation";

/**
 * Hides the main site chrome (header, footer, floating buttons) on the PPC
 * landing pages under /lp/. Those pages carry their own stripped-back header
 * and footer so there is exactly one conversion path on the page.
 *
 * Server Components can be passed straight through as children.
 */
export default function SiteChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/lp" || pathname.startsWith("/lp/");

  return isLandingPage ? null : <>{children}</>;
}

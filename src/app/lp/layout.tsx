import LandingHeader from "@/components/lp/LandingHeader";
import LandingFooter from "@/components/lp/LandingFooter";

/**
 * Chrome for the PPC landing pages. The main site header and footer are
 * suppressed for /lp/ routes by SiteChromeGate in the root layout, so these
 * pages get a single-purpose header and a legal-only footer instead.
 */
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[var(--color-paper)]">
      <LandingHeader />
      {children}
      <LandingFooter />
    </div>
  );
}

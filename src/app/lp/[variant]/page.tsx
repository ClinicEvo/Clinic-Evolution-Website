import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { LP_VARIANT_SLUGS, getLpVariant } from "@/lib/lp";
import LandingHero from "@/components/lp/LandingHero";
import LandingProblem from "@/components/lp/LandingProblem";
import LandingFounder from "@/components/lp/LandingFounder";
import LandingPillars from "@/components/lp/LandingPillars";
import LandingPatientPulse from "@/components/lp/LandingPatientPulse";
import LandingProcess from "@/components/lp/LandingProcess";
import LandingFaq from "@/components/lp/LandingFaq";
import LandingAudit from "@/components/lp/LandingAudit";
import LandingStickyCta from "@/components/lp/LandingStickyCta";

// Only the three ad-group variants exist; anything else is a 404 rather than
// an accidental thin page.
export const dynamicParams = false;

export function generateStaticParams() {
  return LP_VARIANT_SLUGS.map((variant) => ({ variant }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant: slug } = await params;
  const variant = getLpVariant(slug);
  if (!variant) return {};

  return buildMetadata({
    title: variant.metaTitle,
    description: variant.metaDescription,
    path: `/lp/${variant.slug}/`,
    // Paid destination only. Kept out of the index so it cannot compete with
    // the organic service pages targeting the same keywords, and out of
    // sitemap.ts for the same reason. Deliberately NOT blocked in robots.ts —
    // Google has to be able to crawl the page to see this directive.
    noIndex: true,
  });
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant: slug } = await params;
  const variant = getLpVariant(slug);
  if (!variant) notFound();

  return (
    <>
      <LandingHero variant={variant} />
      <LandingProblem />
      <LandingFounder />
      <LandingPillars variant={variant} />
      <LandingPatientPulse />
      <LandingProcess />
      <LandingFaq />
      <LandingAudit variant={variant} />
      <LandingStickyCta />
    </>
  );
}

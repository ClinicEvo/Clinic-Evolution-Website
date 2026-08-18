import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { LP_VARIANT_SLUGS, getLpVariant } from "@/lib/lp";
import LandingHero from "@/components/lp/LandingHero";
import LandingEvidence from "@/components/lp/LandingEvidence";
import LandingSystem from "@/components/lp/LandingSystem";
import LandingPatientPulse from "@/components/lp/LandingPatientPulse";
import LandingFounder from "@/components/lp/LandingFounder";
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

  // The paid journey stays linear: claim, proof, origin, offer, product,
  // process, objections, form. Each section adds new information.
  return (
    <>
      <LandingHero variant={variant} />
      <LandingEvidence />
      <LandingFounder />
      <LandingSystem variant={variant} />
      <LandingPatientPulse />
      <LandingProcess />
      <LandingFaq variant={variant} />
      <LandingAudit variant={variant} />
      <LandingStickyCta />
    </>
  );
}

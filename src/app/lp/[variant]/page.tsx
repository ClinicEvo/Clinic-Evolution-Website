import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { LP_VARIANT_SLUGS, getLpVariant } from "@/lib/lp";
import LandingHero from "@/components/lp/LandingHero";
import LandingEvidence from "@/components/lp/LandingEvidence";
import LandingProblem from "@/components/lp/LandingProblem";
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

  /*
   * Section order, and why it changed.
   *
   * Proof moved to second. It was previously absent from the page entirely, and
   * the position directly under the hero is where the site's own service pages
   * put the logo strip — a paid visitor decides whether to keep reading before
   * they have read anything, and "we own a clinic" is a claim every competitor
   * in the auction also makes.
   *
   * The offer (LandingSystem) moved ahead of the founder story. The old order
   * spent the third screen on who we are before saying what is being sold. The
   * story is stronger as the answer to "why should this lot be able to do that",
   * which means it belongs after the claim, not before it.
   *
   * Patient Pulse now sits immediately after the system it is part of, so the
   * two read as one argument rather than as a product and then another product.
   *
   * The founder story then moved again, from sixth to fourth — directly after
   * the problem section rather than after the whole offer. The earlier reasoning
   * (the story answers "why should this lot be able to do that", so it belongs
   * after the claim) was right about the relationship and wrong about which
   * claim. LandingProblem ends on "marketing bought from an industry that has
   * never run a diary"; the founder hired two of those agencies and then built
   * this. That is the same sentence continuing, and putting the system between
   * them broke it. The offer still follows, now as the resolution rather than as
   * an assertion the reader has no reason yet to credit.
   *
   * It also fixes the band rhythm. Founder and Process are both
   * --color-surface and used to sit adjacent, which was the one flat stretch on
   * the page; the order below alternates paper / ink / surface throughout.
   */
  return (
    <>
      <LandingHero variant={variant} />
      <LandingEvidence />
      <LandingProblem />
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

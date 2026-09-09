import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { LP_VARIANT_SLUGS, getLpVariant } from "@/lib/lp";
import ClientLogoStrip from "@/components/sections/ClientLogoStrip";
import LandingHero from "@/components/lp/LandingHero";
import LandingDiscipline from "@/components/lp/LandingDiscipline";
import LandingEvidence from "@/components/lp/LandingEvidence";
import LandingSystem from "@/components/lp/LandingSystem";
import LandingPatientPulse from "@/components/lp/LandingPatientPulse";
import LandingFounder from "@/components/lp/LandingFounder";
import LandingProcess from "@/components/lp/LandingProcess";
import LandingFaq from "@/components/lp/LandingFaq";
import LandingAudit from "@/components/lp/LandingAudit";
import LandingStickyCta from "@/components/lp/LandingStickyCta";

// Only the four ad-group variants exist; anything else is a 404 rather than
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
   * The paid journey stays linear: claim, recognition, proof, origin, offer,
   * product, process, objections, form. Each section adds new information.
   *
   * LandingDiscipline was inserted third on 9 Sep 2026. It is the one section
   * that describes the reader's own clinic rather than ours, which the page had
   * gone without since LandingProblem was cut for length on 18 Aug — and it is
   * the only place any of the four variants shows a photograph of its own
   * discipline. Three questions and a photograph, against the four-row, ~400
   * word section it replaces.
   *
   * ClientLogoStrip is rendered HERE rather than inside LandingEvidence, which
   * is where it used to live. Its position directly under the hero is
   * deliberate (it is where the site's own service pages put it, and a paid
   * visitor decides whether to keep reading before they have read anything), so
   * inserting a band above the evidence section would otherwise have pushed the
   * strip a full screen down as a side effect.
   *
   * Band rhythm, which is the reason this order and not another: paper, paper,
   * INK, paper, surface, paper, INK, surface, paper, surface. The two navy
   * bands sit three sections apart, which is the same spacing LandingProblem
   * and LandingPatientPulse had. Adjacent, they would read as one long dark
   * stretch and both would lose their impact.
   */
  return (
    <>
      <LandingHero variant={variant} />
      <ClientLogoStrip label="Clinics and brands we build and grow" />
      <LandingDiscipline variant={variant} />
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

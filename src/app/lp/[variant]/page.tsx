import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { LP_VARIANT_SLUGS, getLpVariant } from "@/lib/lp";
import ClientLogoStrip from "@/components/sections/ClientLogoStrip";
import LandingHero from "@/components/lp/LandingHero";
import LandingProofStrip from "@/components/lp/LandingProofStrip";
import LandingAuditPitch from "@/components/lp/LandingAuditPitch";
import LandingDiscipline from "@/components/lp/LandingDiscipline";
import LandingEvidence from "@/components/lp/LandingEvidence";
import LandingAdsProof from "@/components/lp/LandingAdsProof";
import LandingSystem from "@/components/lp/LandingSystem";
import LandingPatientPulse from "@/components/lp/LandingPatientPulse";
import LandingFounder from "@/components/lp/LandingFounder";
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
   * TWELVE SECTIONS, down from fourteen. Measured on 9 Sep 2026 before the cut:
   * 22 phone screens, ~2,000 words, the form at 88% depth.
   *
   * WHY IT WAS TOO LONG. The evidence on page length is consistent and it is
   * about proportion, not word count: the lower the risk and the lower the
   * commitment, the fewer the objections, and the shorter the page should be.
   * This page asks for four form fields in exchange for something free. That is
   * a small ask, and 2,000 words of persuasion is not proportional to it.
   *
   * It was not long because there was too much to say. It was long because
   * three jobs were being done twice:
   *
   *   - THE PROBLEM, eight times. LandingProblem listed five and
   *     LandingDiscipline asked three, back to back. The band survives because
   *     it also carries the only per-variant photograph on the page.
   *   - THE PROCESS, three times. LandingProcess walked through four steps whose
   *     first was "you answer four questions", sitting above the four questions;
   *     the audit pitch and the FAQ each covered the same ground.
   *   - THE AUDIT, in fifteen bullets across two sections.
   *
   * Both cut components and their data are kept rather than deleted: they are
   * written, sourced and reversible, and either could come back as an A/B test.
   * LandingProblem is now dormant for the second time.
   *
   * WHY LandingSystem MOVED UP, to second heading from seventh. Nielsen Norman
   * Group's eyetracking finds readers scan headings and skip the prose beneath
   * them (the layer-cake pattern). Read as headings alone, the only line on
   * this page that said what Clinic Evo actually sells was "One system that
   * takes a patient from first search to booked appointment" — and it sat
   * seventh. A scanner who read four headings and left learned the discipline
   * and the problem but never learned the service is a website, search, ads and
   * follow-up run as one thing. The H1s stay as they are, so moving that
   * heading up was the way to fix it.
   *
   *   1  LandingHero          discipline-specific claim, one CTA, offer stated
   *   2  ClientLogoStrip      who we work with
   *   3  LandingProofStrip    four hard numbers, earliest possible
   *   4  LandingSystem        WHAT YOU GET — second heading, was seventh
   *   5  LandingAuditPitch    the offer, once proof has earned it
   *   6  LandingDiscipline    recognition, three questions, the discipline photo
   *   7  LandingEvidence      the two clinics, with the figures the strip omits
   *   8  LandingAdsProof      what the advertising costs
   *   9  LandingPatientPulse  what happens after the enquiry arrives
   *  10  LandingFounder       credibility, after the numbers rather than before
   *  11  LandingFaq           six objections
   *  12  LandingAudit         four fields and the form
   *
   * BAND RHYTHM, which is why LandingProofStrip is paper and LandingSystem is
   * surface rather than the other way round: paper, surface, paper, surface,
   * paper, INK, paper, INK, INK, surface, paper, surface. The only adjacent
   * pair is the two navy sections at 8 and 9, which are one visual unit on
   * purpose — the ad figures are the paid half of the system and Patient Pulse
   * is the follow-up half, so they read as one dark stretch about what happens
   * to an enquiry.
   */
  return (
    <>
      <LandingHero variant={variant} />
      <ClientLogoStrip label="Clinics and brands we build and grow" />
      <LandingProofStrip variant={variant} />
      <LandingSystem variant={variant} />
      <LandingAuditPitch variant={variant} />
      <LandingDiscipline variant={variant} />
      <LandingEvidence variant={variant} />
      <LandingAdsProof variant={variant} />
      <LandingPatientPulse />
      <LandingFounder />
      <LandingFaq variant={variant} />
      <LandingAudit variant={variant} />
      <LandingStickyCta />
    </>
  );
}

import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { LP_VARIANT_SLUGS, getLpVariant } from "@/lib/lp";
import ClientLogoStrip from "@/components/sections/ClientLogoStrip";
import LandingHero from "@/components/lp/LandingHero";
import LandingProofStrip from "@/components/lp/LandingProofStrip";
import LandingAuditPitch from "@/components/lp/LandingAuditPitch";
import LandingProblem from "@/components/lp/LandingProblem";
import LandingDiscipline from "@/components/lp/LandingDiscipline";
import LandingEvidence from "@/components/lp/LandingEvidence";
import LandingAdsProof from "@/components/lp/LandingAdsProof";
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
   * §2 of the 9 Sep 2026 brief. The order below is the conversion sequence it
   * asked for, and the one change that matters is that PROOF COMES THIRD.
   *
   * What it replaced ran hero, logos, recognition, proof, origin, offer,
   * product, process, objections, form. A visitor met their first checkable
   * figure three sections down, and everything above it was assertion: built by
   * clinic owners, MSK only, no lock-in. Every competitor bidding on the same
   * keywords says those things too. The four numbers in LandingProofStrip are
   * the only content on the page that can be looked up, so they now sit
   * directly under the hero, and the offer follows immediately after them
   * rather than waiting until the form at the bottom.
   *
   *   1  LandingHero          discipline-specific claim, one CTA
   *   2  ClientLogoStrip      who we work with, above the fold on desktop
   *   3  LandingProofStrip    §5/§6 — four hard numbers, earliest possible
   *   4  LandingAuditPitch    §8 — the offer, stated once proof has earned it
   *   5  LandingProblem       §14 — five problems, two written per discipline
   *   6  LandingDiscipline    the navy photo band, recognition + three questions
   *   7  LandingEvidence      §18 — the two clinics, sourced, with a real review
   *   8  LandingSystem        §16 — the connected system
   *   9  LandingAdsProof      §7 — advertising figures, deliberately not at top
   *  10  LandingPatientPulse  §17 — what happens after the enquiry arrives
   *  11  LandingFounder       §19 — credibility, AFTER the numbers not before
   *  12  LandingProcess       what happens after you send the form
   *  13  LandingFaq           §20 — six objections
   *  14  LandingAudit         §9 — four fields and the form
   *  15  LandingStickyCta     §22 — mobile only
   *
   * FOUNDER MOVED DOWN, from fourth to eleventh, and that is deliberate
   * against the earlier reasoning in this file. The story used to answer "why
   * should this lot be able to do that" immediately after the claim. §15 is
   * right that it reads better once the reader has already seen the figures:
   * it stops being a promise and becomes the explanation for something they
   * have accepted.
   *
   * BAND RHYTHM: paper, surface, surface, paper, paper, INK, paper, paper, INK,
   * INK, surface, surface, paper, surface. The two adjacent navy sections at 9
   * and 10 are intentional and are one visual unit — the ads figures are the
   * paid half of the system and Patient Pulse is the follow-up half, so they
   * read as one dark stretch about what happens to an enquiry. LandingDiscipline
   * at 6 is far enough from both to keep its own weight.
   */
  return (
    <>
      <LandingHero variant={variant} />
      <ClientLogoStrip label="Clinics and brands we build and grow" />
      <LandingProofStrip variant={variant} />
      <LandingAuditPitch variant={variant} />
      <LandingProblem variant={variant} />
      <LandingDiscipline variant={variant} />
      <LandingEvidence variant={variant} />
      <LandingSystem variant={variant} />
      <LandingAdsProof />
      <LandingPatientPulse />
      <LandingFounder />
      <LandingProcess />
      <LandingFaq variant={variant} />
      <LandingAudit variant={variant} />
      <LandingStickyCta />
    </>
  );
}

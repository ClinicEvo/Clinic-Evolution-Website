import ClientLogoStrip from "@/components/sections/ClientLogoStrip";
import LandingStickyCta from "@/components/lp/LandingStickyCta";
import type { GrowthVariant } from "@/lib/growth-system";
import GrowthBook from "./GrowthBook";
import GrowthCtaButton from "./GrowthCtaButton";
import GrowthEngines from "./GrowthEngines";
import GrowthFaq from "./GrowthFaq";
import GrowthHero from "./GrowthHero";
import GrowthIncluded from "./GrowthIncluded";
import GrowthInvestment from "./GrowthInvestment";
import GrowthJourney from "./GrowthJourney";
import GrowthProblem from "./GrowthProblem";
import GrowthProof from "./GrowthProof";
import GrowthWhy from "./GrowthWhy";

/**
 * The Growth System landing page, rendered for one of four variants.
 *
 * The brief's ten sections, in its order [src: lp brief, p5], with the client
 * logo strip added under the hero as it is on the audit pages:
 *
 *   01  GrowthHero        audience, promise, CTA, trust line, the four engines at a glance
 *       ClientLogoStrip   who we work with
 *   02  GrowthProblem     the five core problems, on the discipline's photograph  (INK)
 *   03  GrowthEngines     four engines as one system, with CTA                   (#system)
 *   04  GrowthJourney     the eight stages from traffic to reviews
 *   05  GrowthIncluded    the seven inclusions, in full                          (#included)
 *   06  GrowthWhy         Bodyfunction as the development clinic
 *   07  GrowthProof       one figure, one verbatim review, CTA
 *   08  GrowthInvestment  the fee, the separate costs, the total, CTA            (#investment)
 *   09  GrowthFaq         objections, fit, what happens next                     (#faq)
 *   10  GrowthBook        the form                                               (#book)
 *
 * CTA placement follows the brief exactly: hero, after the engines, after the
 * proof, immediately below pricing, and the final section. The sticky mobile
 * bar carries the same action and hides whenever the form is on screen.
 *
 * Band rhythm: paper, surface(strip), INK, surface, paper, surface, paper,
 * paper(navy panel), surface, paper, surface. The two adjacent paper sections
 * at 06 and 07 are separated by the proof section's navy panel.
 */
export default function GrowthSystemPage({ variant }: { variant: GrowthVariant }) {
  return (
    <>
      <GrowthHero variant={variant} />
      <ClientLogoStrip label="Clinics and brands we build and grow" />
      <GrowthProblem variant={variant} />
      <GrowthEngines />
      <GrowthJourney />
      <GrowthIncluded />
      <GrowthWhy variant={variant} />
      <GrowthProof variant={variant} />
      <GrowthInvestment />
      <GrowthFaq variant={variant} />
      <GrowthBook variant={variant} />
      <LandingStickyCta>
        <GrowthCtaButton placement="sticky-mobile" className="w-full" />
      </LandingStickyCta>
    </>
  );
}

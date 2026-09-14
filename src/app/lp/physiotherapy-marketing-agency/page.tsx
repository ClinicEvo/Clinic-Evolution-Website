import { buildMetadata } from "@/lib/metadata";
import { getGrowthVariant } from "@/lib/growth-system";
import GrowthSystemPage from "@/components/lp/growth/GrowthSystemPage";

/**
 * The physiotherapy Growth System page, at the URL its Google Ads ad group is built
 * around: "[physiotherapy marketing agency]" is the group's head keyword, so it is the path
 * and the opening of the H1. See the header of src/lib/growth-system.ts.
 *
 * A static route rather than a segment under /lp/growth-system/ because the
 * ad group's keyword has to be the whole path. It sits beside /lp/[variant]/
 * (the audit pages) and wins over it, since Next resolves a static segment
 * before a dynamic one.
 *
 * Noindex, absent from sitemap.ts, not blocked in robots.ts. Same as every
 * other paid destination here.
 */
const variant = getGrowthVariant("physiotherapy")!;

export const metadata = buildMetadata({
  title: variant.metaTitle,
  description: variant.metaDescription,
  path: variant.path,
  noIndex: true,
  absoluteTitle: true,
});

export default function PhysiotherapyMarketingAgencyPage() {
  return <GrowthSystemPage variant={variant} />;
}

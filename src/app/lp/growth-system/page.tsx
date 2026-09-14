import { buildMetadata } from "@/lib/metadata";
import { getGrowthVariant } from "@/lib/growth-system";
import GrowthSystemPage from "@/components/lp/growth/GrowthSystemPage";

/**
 * The MSK-wide Growth System landing page: the page the brief describes.
 * The three discipline versions live at ./[discipline]/.
 *
 * Paid destination only, like the audit pages under /lp/: noindex, absent from
 * sitemap.ts, and deliberately NOT blocked in robots.ts, because Google has to
 * crawl the page to read the directive.
 */
const variant = getGrowthVariant("msk")!;

export const metadata = buildMetadata({
  title: variant.metaTitle,
  description: variant.metaDescription,
  path: variant.path,
  noIndex: true,
  absoluteTitle: true,
});

export default function GrowthSystemMskPage() {
  return <GrowthSystemPage variant={variant} />;
}

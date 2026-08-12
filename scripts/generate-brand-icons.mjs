/**
 * Generates src/components/icons/BrandIcons.tsx from the simple-icons package.
 *
 * Why generate rather than ship SVG files: the same mark is needed in brand
 * colour (the integration strip, where recognition is the whole point) and in
 * monochrome (the comparison table, where a parade of competitor colours would
 * look like a logo salad). Inline SVG with fill="currentColor" gives us both
 * from one source, with no extra network requests and no scaling artefacts.
 *
 * simple-icons is a devDependency only — the generated file has no imports, so
 * nothing ships to the browser except the paths themselves.
 *
 * Re-run with:  node scripts/generate-brand-icons.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import * as si from "simple-icons";

/**
 * slug -> the key simple-icons exports it under.
 * `hex` overrides the brand colour where the official one is unusable for us:
 * the house style bans pure black, so TikTok borrows the brand ink instead.
 */
const BRANDS = [
  { slug: "google", key: "siGoogle" },
  { slug: "facebook", key: "siFacebook" },
  { slug: "messenger", key: "siMessenger" },
  { slug: "instagram", key: "siInstagram" },
  { slug: "tiktok", key: "siTiktok", hex: "0D1B2A" },
  { slug: "whatsapp", key: "siWhatsapp" },
  { slug: "hubspot", key: "siHubspot" },
  { slug: "zoho", key: "siZoho" },
  { slug: "intercom", key: "siIntercom" },
  { slug: "zendesk", key: "siZendesk" },
  { slug: "mailchimp", key: "siMailchimp" },
  { slug: "campaignmonitor", key: "siCampaignmonitor" },
  { slug: "hootsuite", key: "siHootsuite" },
  { slug: "buffer", key: "siBuffer" },
  { slug: "trustpilot", key: "siTrustpilot" },
  { slug: "calendly", key: "siCalendly" },
  { slug: "typeform", key: "siTypeform" },
];

const pascal = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const missing = BRANDS.filter((b) => !si[b.key]);
if (missing.length) {
  console.error("Not in simple-icons:", missing.map((m) => m.slug).join(", "));
  process.exit(1);
}

const components = BRANDS.map(({ slug, key }) => {
  const icon = si[key];
  return `/** ${icon.title} */
export function ${pascal(slug)}Mark({ className, style }: MarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path d="${icon.path}" />
    </svg>
  );
}`;
}).join("\n\n");

const hexEntries = BRANDS.map(({ slug, key, hex }) => {
  const icon = si[key];
  return `  ${slug}: "#${hex ?? icon.hex}",`;
}).join("\n");

const registry = BRANDS.map(
  ({ slug }) => `  ${slug}: ${pascal(slug)}Mark,`
).join("\n");

const titles = BRANDS.map(({ slug, key }) => `  ${slug}: ${JSON.stringify(si[key].title)},`).join("\n");

const out = `// GENERATED FILE — do not edit by hand.
// Run \`node scripts/generate-brand-icons.mjs\` to regenerate.
//
// Official brand paths from simple-icons (CC0). The marks themselves remain
// trademarks of their respective owners and are used here nominatively, to
// identify the products Patient Pulse replaces or connects to.

import type { CSSProperties } from "react";

interface MarkProps {
  className?: string;
  /** Used to paint the mark in its official brand colour via currentColor. */
  style?: CSSProperties;
}

${components}

/** Official brand colour per slug, for contexts where recognition matters. */
export const brandHex: Record<BrandSlug, string> = {
${hexEntries}
};

/** Display name exactly as the brand writes it. */
export const brandTitle: Record<BrandSlug, string> = {
${titles}
};

export const brandMarks = {
${registry}
} as const;

export type BrandSlug = keyof typeof brandMarks;
`;

mkdirSync("src/components/icons", { recursive: true });
writeFileSync("src/components/icons/BrandIcons.tsx", out);
console.log(`Wrote src/components/icons/BrandIcons.tsx (${BRANDS.length} marks)`);

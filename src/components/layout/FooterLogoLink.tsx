"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { isHomeDraftPath, PREVIEW_BRAND_NAME } from "@/lib/nav";
import { siteConfig } from "@/lib/metadata";

/** Split out of Footer, like FooterCta, purely so the logo's accessible name
 *  can follow the route: the homepage draft uses the full company name. */
export default function FooterLogoLink() {
  const name = isHomeDraftPath(usePathname()) ? PREVIEW_BRAND_NAME : siteConfig.name;

  return (
    <Link href="/" aria-label={`${name} home`} className="inline-block">
      <Image
        src="/images/cevo_newlogo_dark.png"
        alt={name}
        width={190}
        height={55}
        style={{ objectFit: "contain" }}
      />
    </Link>
  );
}

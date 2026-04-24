import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/free-clinic-audit/thank-you/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

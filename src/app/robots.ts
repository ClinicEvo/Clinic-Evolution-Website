import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Do NOT add /lp/ here. Those PPC landing pages are kept out of the index
      // by a noindex meta tag, and Googlebot has to be able to crawl the page
      // to read it — blocking the crawl would risk them being indexed as bare
      // URLs anyway. They are excluded from sitemap.ts instead.
      disallow: ["/api/", "/free-clinic-audit/thank-you/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

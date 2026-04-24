import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

const base = siteConfig.url;

function url(path: string): { url: string; lastModified: string; changeFrequency: "monthly" | "weekly" | "yearly"; priority: number } {
  return {
    url: `${base}${path}`,
    lastModified: "2025-01-01",
    changeFrequency: "monthly",
    priority: 0.7,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { ...url("/"), changeFrequency: "weekly", priority: 1.0 },
    { ...url("/osteopath-marketing/"), priority: 0.9 },
    { ...url("/physiotherapy-marketing/"), priority: 0.9 },
    { ...url("/chiropractic-marketing/"), priority: 0.9 },
    { ...url("/seo-for-clinics/"), priority: 0.9 },
    { ...url("/google-ads-for-clinics/"), priority: 0.9 },
    { ...url("/website-design-for-clinics/"), priority: 0.9 },
    { ...url("/ai-patient-reactivation/"), priority: 0.9 },
    { ...url("/healthcare-marketing-consultant/"), priority: 0.9 },
    { ...url("/case-studies/"), priority: 0.8 },
    { ...url("/case-studies/bodyfunction-clinic/"), priority: 0.8 },
    { ...url("/free-clinic-audit/"), priority: 0.95 },
    { ...url("/about/"), priority: 0.7 },
    { ...url("/contact/"), priority: 0.8 },
    { ...url("/resources/"), priority: 0.8 },
    { ...url("/resources/clinic-seo-guide/"), priority: 0.7 },
    { ...url("/resources/google-ads-for-clinics-guide/") },
    { ...url("/resources/clinic-website-conversion-guide/") },
    { ...url("/resources/patient-reactivation-guide/") },
    { ...url("/resources/local-seo-for-osteopaths/") },
    { ...url("/resources/local-seo-for-physiotherapists/") },
    { ...url("/resources/local-seo-for-chiropractors/") },
    { ...url("/resources/how-to-get-more-patients/") },
    { ...url("/resources/healthcare-marketing-strategy/") },
    { ...url("/resources/clinic-google-business-profile/") },
    { ...url("/resources/physiotherapy-marketing-ideas/") },
    { ...url("/resources/osteopath-marketing-ideas/") },
    { ...url("/resources/chiropractic-marketing-ideas/") },
    { ...url("/privacy-policy/"), priority: 0.3 },
    { ...url("/cookie-policy/"), priority: 0.3 },
    { ...url("/terms/"), priority: 0.3 },
  ];
}

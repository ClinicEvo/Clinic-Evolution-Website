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

// Note: the /lp/ PPC landing pages are deliberately absent. They are noindex
// ad destinations — listing them here would be a contradictory signal and would
// put them in competition with the organic service pages above.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { ...url("/"), changeFrequency: "weekly", priority: 1.0 },
    { ...url("/osteopath-marketing/"), priority: 0.9 },
    { ...url("/physiotherapy-marketing/"), priority: 0.9 },
    { ...url("/chiropractic-marketing/"), priority: 0.9 },
    { ...url("/seo-for-clinics/"), priority: 0.9 },
    { ...url("/google-ads-for-clinics/"), priority: 0.9 },
    { ...url("/website-design-for-clinics/"), priority: 0.9 },
    { ...url("/ai-integration/"), priority: 0.9 },
    { ...url("/digital-marketing/"), priority: 0.9 },
    { ...url("/healthcare-marketing-consultant/"), priority: 0.9 },
    { ...url("/patient-pulse/"), priority: 0.9 },
    { ...url("/call-centre/"), priority: 0.9 },
    { ...url("/case-studies/"), priority: 0.8 },
    { ...url("/case-studies/bodyfunction-clinic/"), priority: 0.8 },
    { ...url("/case-studies/lind-street-osteopathy/"), priority: 0.8 },
    { ...url("/free-clinic-audit/"), priority: 0.95 },
    // Indexed because it cannibalises nothing and people search the brand, but
    // deliberately low priority: the graduate research found no measurable GB
    // search demand for this audience, so it converts warm traffic rather than
    // competing for queries. /graduate/thank-you/ is absent — it carries a
    // noindex, same as the other confirmation pages.
    { ...url("/graduate/"), priority: 0.6 },
    { ...url("/about/"), priority: 0.7 },
    { ...url("/team/"), priority: 0.6 },
    { ...url("/contact/"), priority: 0.8 },
    { ...url("/learning-hub/"), priority: 0.8 },
    { ...url("/learning-hub/how-much-should-a-clinic-spend-on-marketing/") },
    { ...url("/learning-hub/how-to-get-more-patients-to-your-clinic/") },
    { ...url("/learning-hub/patient-recall-system/") },
    { ...url("/learning-hub/how-to-market-your-clinic/") },
    { ...url("/learning-hub/how-to-market-a-private-practice-online/") },
    { ...url("/learning-hub/how-to-market-your-chiropractic-practice/") },
    { ...url("/learning-hub/physio-business-growth/") },
    { ...url("/learning-hub/local-seo-for-physio-clinics/") },
    { ...url("/learning-hub/local-seo-for-healthcare-clinics/") },
    { ...url("/learning-hub/google-ads-for-physios/") },
    { ...url("/learning-hub/google-ads-for-chiropractors/") },
    { ...url("/learning-hub/chiropractic-marketing-case-study/") },
    { ...url("/privacy-policy/"), priority: 0.3 },
    { ...url("/cookie-policy/"), priority: 0.3 },
    // /terms/ is deliberately absent: the page carries a noindex meta tag, so
    // listing it here asked Google to index a page the page itself forbids.
  ];
}

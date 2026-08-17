import { siteConfig } from "@/lib/metadata";

export default function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    // No potentialAction/SearchAction here on purpose. It previously declared a
    // sitelinks searchbox at /learning-hub/?q= — but that page has no search
    // input and ignores the parameter, so the markup described a feature the
    // site does not have. Google also retired the sitelinks searchbox in
    // November 2024. Only reinstate this if real hub search is built.
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

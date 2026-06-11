import { siteConfig } from "@/lib/metadata";

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description?: string;
  url?: string;
  image?: string;
  knowsAbout?: string[];
  sameAs?: string[];
}

export default function PersonSchema({
  name,
  jobTitle,
  description,
  url,
  image,
  knowsAbout,
  sameAs,
}: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    ...(description && { description }),
    url: url ?? `${siteConfig.url}/about/`,
    ...(image && { image: `${siteConfig.url}${image}` }),
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    knowsAbout: knowsAbout ?? [
      "Osteopathy",
      "Clinic Marketing",
      "Healthcare SEO",
      "Private Clinic Growth",
    ],
    ...(sameAs && sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

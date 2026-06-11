import { siteConfig } from "@/lib/metadata";

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  ogImage?: string;
  authorName?: string;
  authorJobTitle?: string;
  authorUrl?: string;
}

export default function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  ogImage,
  authorName = "Danny Morgan",
  authorJobTitle = "Co-founder & Osteopath",
  authorUrl = `${siteConfig.url}/about/`,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${siteConfig.url}${url}`,
    ...(datePublished && {
      datePublished,
      dateModified: dateModified ?? datePublished,
    }),
    image: ogImage
      ? `${siteConfig.url}${ogImage}`
      : `${siteConfig.url}/og-default.jpg`,
    author: {
      "@type": "Person",
      name: authorName,
      jobTitle: authorJobTitle,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/cevo_newlogo.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

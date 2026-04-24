import { siteConfig } from "@/lib/metadata";

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  ogImage?: string;
}

export default function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  ogImage,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${siteConfig.url}${url}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    image: ogImage
      ? `${siteConfig.url}${ogImage}`
      : `${siteConfig.url}/og-default.jpg`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

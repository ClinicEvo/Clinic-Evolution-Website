import { Metadata } from "next";

export const siteConfig = {
  name: "Clinic Evo",
  legalName: "Clinic Evolution Ltd",
  tagline: "Clinic Marketing Agency UK",
  url: "https://www.clinicevolution.com",
  email: "hello@clinicevolution.com",
  // TODO: Add phone number when confirmed
  phone: "",
  // TODO: Add WhatsApp number in 44XXXXXXXXXX format when confirmed
  whatsapp: "",
  social: {
    // TODO: Add LinkedIn URL when confirmed
    linkedin: "",
  },
  address: {
    // TODO: Add registered address when confirmed
    streetAddress: "",
    addressLocality: "",
    postalCode: "",
    addressCountry: "GB",
  },
  areaServed: "United Kingdom",
  description:
    "Clinic Evo helps UK osteopaths, physiotherapists and chiropractors attract more patients with SEO, Google Ads, websites and AI patient reactivation.",
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  type = "website",
  noIndex = false,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  /** Suppress the "| Clinic Evo" template from the root layout.
   *  The template costs 13 characters, which is the difference between a
   *  keyword-led title fitting the SERP and being truncated. Use it on pages
   *  whose title has to carry a target keyword phrase; leave it off elsewhere
   *  so the brand still appears. */
  absoluteTitle?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage ?? "/og-default.jpg";

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages: { "en-GB": url },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_GB",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

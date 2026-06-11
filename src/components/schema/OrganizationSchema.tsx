import { siteConfig } from "@/lib/metadata";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    ...(siteConfig.phone && { telephone: siteConfig.phone }),
    ...(siteConfig.social.linkedin && {
      sameAs: [siteConfig.social.linkedin],
    }),
    description: siteConfig.description,
    areaServed: siteConfig.areaServed,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/cevo_newlogo.png`,
      width: 190,
      height: 55,
    },
    address: siteConfig.address.streetAddress
      ? {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        }
      : undefined,
    knowsAbout: [
      "Healthcare Marketing",
      "Clinic SEO",
      "Google Ads for Clinics",
      "Osteopath Marketing",
      "Physiotherapy Marketing",
      "Chiropractic Marketing",
      "Clinic Website Design",
      "AI Patient Reactivation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/ai-patient-reactivation/",
        destination: "/ai-integration/",
        permanent: true,
      },
      {
        source: "/ai-patient-reactivation",
        destination: "/ai-integration/",
        permanent: true,
      },
      {
        source: "/resources/",
        destination: "/learning-hub/",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/learning-hub/",
        permanent: true,
      },
      {
        source: "/resources/how-much-should-a-clinic-spend-on-marketing/",
        destination: "/learning-hub/how-much-should-a-clinic-spend-on-marketing/",
        permanent: true,
      },
      {
        source: "/resources/how-to-get-more-patients-to-your-clinic/",
        destination: "/learning-hub/how-to-get-more-patients-to-your-clinic/",
        permanent: true,
      },
      {
        source: "/resources/patient-recall-system/",
        destination: "/learning-hub/patient-recall-system/",
        permanent: true,
      },
      {
        source: "/resources/how-to-market-your-clinic/",
        destination: "/learning-hub/how-to-market-your-clinic/",
        permanent: true,
      },
      {
        source: "/resources/how-to-market-a-private-practice-online/",
        destination: "/learning-hub/how-to-market-a-private-practice-online/",
        permanent: true,
      },
      {
        source: "/resources/how-to-market-your-chiropractic-practice/",
        destination: "/learning-hub/how-to-market-your-chiropractic-practice/",
        permanent: true,
      },
      {
        source: "/resources/physio-business-growth/",
        destination: "/learning-hub/physio-business-growth/",
        permanent: true,
      },
      {
        source: "/resources/local-seo-for-physio-clinics/",
        destination: "/learning-hub/local-seo-for-physio-clinics/",
        permanent: true,
      },
      {
        source: "/resources/local-seo-for-healthcare-clinics/",
        destination: "/learning-hub/local-seo-for-healthcare-clinics/",
        permanent: true,
      },
      // The medical guide was merged into the healthcare one — same article with
      // one noun swapped, and the two were competing for a single query intent.
      // This legacy /resources/ source points straight at the survivor rather
      // than at the merged URL, so it stays a single hop rather than becoming a
      // redirect chain.
      {
        source: "/resources/local-seo-for-medical-clinics/",
        destination: "/learning-hub/local-seo-for-healthcare-clinics/",
        permanent: true,
      },
      {
        source: "/learning-hub/local-seo-for-medical-clinics/",
        destination: "/learning-hub/local-seo-for-healthcare-clinics/",
        permanent: true,
      },
      {
        source: "/resources/google-ads-for-physios/",
        destination: "/learning-hub/google-ads-for-physios/",
        permanent: true,
      },
      {
        source: "/resources/google-ads-for-chiropractors/",
        destination: "/learning-hub/google-ads-for-chiropractors/",
        permanent: true,
      },
      {
        source: "/resources/chiropractic-marketing-case-study/",
        destination: "/learning-hub/chiropractic-marketing-case-study/",
        permanent: true,
      },
      {
        source: "/resources/clinic-seo-guide/",
        destination: "/seo-for-clinics/",
        permanent: true,
      },
      {
        source: "/resources/google-ads-for-clinics-guide/",
        destination: "/google-ads-for-clinics/",
        permanent: true,
      },
      {
        source: "/resources/clinic-website-conversion-guide/",
        destination: "/website-design-for-clinics/",
        permanent: true,
      },
      {
        source: "/resources/patient-reactivation-guide/",
        destination: "/ai-integration/",
        permanent: true,
      },
      {
        source: "/resources/local-seo-for-osteopaths/",
        destination: "/osteopath-marketing/",
        permanent: true,
      },
      {
        source: "/resources/local-seo-for-physiotherapists/",
        destination: "/learning-hub/local-seo-for-physio-clinics/",
        permanent: true,
      },
      {
        source: "/resources/local-seo-for-chiropractors/",
        destination: "/chiropractic-marketing/",
        permanent: true,
      },
      {
        source: "/resources/how-to-get-more-patients/",
        destination: "/learning-hub/how-to-get-more-patients-to-your-clinic/",
        permanent: true,
      },
      {
        source: "/resources/healthcare-marketing-strategy/",
        destination: "/healthcare-marketing-consultant/",
        permanent: true,
      },
      {
        source: "/resources/clinic-google-business-profile/",
        destination: "/seo-for-clinics/",
        permanent: true,
      },
      {
        source: "/resources/physiotherapy-marketing-ideas/",
        destination: "/physiotherapy-marketing/",
        permanent: true,
      },
      {
        source: "/resources/osteopath-marketing-ideas/",
        destination: "/osteopath-marketing/",
        permanent: true,
      },
      {
        source: "/resources/chiropractic-marketing-ideas/",
        destination: "/chiropractic-marketing/",
        permanent: true,
      },
      {
        source: "/seo-maintenance/",
        destination: "/digital-marketing/",
        permanent: true,
      },
    ];
  },

  async headers() {
    const isProd = process.env.NODE_ENV === "production";
    const cspScriptSrc = isProd
      ? "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.ahrefs.com"
      : "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.ahrefs.com";

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Production only. Sent over plain-HTTP localhost it force-upgrades
          // dev to https for two years, which the dev server cannot serve.
          ...(isProd
            ? [
                {
                  key: "Strict-Transport-Security",
                  value: "max-age=63072000; includeSubDomains; preload",
                },
              ]
            : []),
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              cspScriptSrc,
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https://bodyfunction.co.uk https://images.unsplash.com",
              "font-src 'self'",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://analytics.ahrefs.com",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bodyfunction.co.uk",
      },
    ],
  },
};

export default nextConfig;

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
      {
        source: "/resources/local-seo-for-medical-clinics/",
        destination: "/learning-hub/local-seo-for-medical-clinics/",
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
    ];
  },

  async headers() {
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
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            // unsafe-inline required for Tailwind v4 + Framer Motion inline styles.
            // Web3Forms requests now go through /api/submit-form (server-side), so
            // api.web3forms.com is NOT needed in connect-src.
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https://bodyfunction.co.uk https://images.unsplash.com",
              "font-src 'self'",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
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

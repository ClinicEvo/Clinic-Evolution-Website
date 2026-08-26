import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CookieBanner from "@/components/layout/CookieBanner";
import SiteChromeGate from "@/components/layout/SiteChromeGate";
import OrganizationSchema from "@/components/schema/OrganizationSchema";
import WebSiteSchema from "@/components/schema/WebSiteSchema";
import { siteConfig } from "@/lib/metadata";
import { GOOGLE_TAG_IDS } from "@/lib/analytics";

const dmSans = localFont({
  src: [
    {
      path: "./fonts/DMSans_24pt-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/DMSans_24pt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/DMSans_18pt-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const plusJakartaSemiBold = localFont({
  src: "./fonts/PlusJakartaSans-SemiBold.woff2",
  variable: "--font-plus-jakarta-semibold",
  display: "swap",
  weight: "600",
});

const brume = localFont({
  src: "./fonts/Brume-Regular.woff2",
  variable: "--font-brume",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${dmSans.variable} ${brume.variable} ${plusJakartaSemiBold.variable}`} suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="LN1HzD4cMtYBXdWSGELKYw"
          async
        />
        {/* One gtag.js, configured once per Google product. The loader URL
            takes a single id but the library it returns is the same for all of
            them, so which id is in the URL does not matter — what registers each
            product is its own `config` line below. Adding a second
            <script src=".../gtag/js?id=..."> would re-run the bootstrap over the
            same dataLayer instead. See GOOGLE_TAG_IDS. */}
        {GOOGLE_TAG_IDS.length > 0 && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_IDS[0]}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  // Consent Mode v2: all four signals must be declared here,
                  // denied, before config. CookieBanner grants them together
                  // once the visitor accepts. wait_for_update holds tags briefly
                  // so a returning visitor's stored consent is applied before
                  // anything fires.
                  //
                  // ad_storage denied until acceptance is why paid conversions
                  // arrive partly modelled rather than fully counted. That is
                  // the correct UK/EEA behaviour, not something to loosen.
                  gtag('consent','default',{
                    analytics_storage:'denied',
                    ad_storage:'denied',
                    ad_user_data:'denied',
                    ad_personalization:'denied',
                    wait_for_update:500
                  });
                  gtag('js', new Date());
${GOOGLE_TAG_IDS.map((id) => `                  gtag('config', '${id}');`).join("\n")}
                `,
              }}
            />
          </>
        )}
      </head>
      <body suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:bg-[var(--color-accent)] focus:text-white focus:rounded-md focus:shadow-md"
        >
          Skip to main content
        </a>
        <SiteChromeGate>
          <Header />
        </SiteChromeGate>
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteChromeGate>
          <Footer />
          <WhatsAppButton />
        </SiteChromeGate>
        <CookieBanner />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CookieBanner from "@/components/layout/CookieBanner";
import OrganizationSchema from "@/components/schema/OrganizationSchema";
import { siteConfig } from "@/lib/metadata";

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
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied'});
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');
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
        <Header />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}

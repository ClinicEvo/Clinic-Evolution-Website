import { buildMetadata } from "@/lib/metadata";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FadeUp from "@/components/ui/FadeUp";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Terms | Clinic Evo",
  description:
    "Read the terms for using the Clinic Evo website and enquiring about our clinic marketing, SEO, website design, Google Ads and patient reactivation services.",
  path: "/terms/",
  noIndex: true,
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Terms", href: "/terms/" },
];

const sections = [
  "About these terms",
  "About Clinic Evo",
  "Using this website",
  "Website content",
  "Enquiries and service information",
  "No clinical advice",
  "Intellectual property",
  "Links to other websites",
  "Limitation of liability",
  "Changes to these terms",
  "Governing law",
  "Contact",
];

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* Hero */}
      <section className="bg-[var(--color-paper)] pt-20 pb-16 lg:pt-28 lg:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-surface)] -z-10 skew-x-[-12deg] translate-x-20 hidden lg:block" />
        <div className="cx-main">
          <FadeUp>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                {crumbs.map((crumb, i) => (
                  <li key={crumb.href} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true">/</span>}
                    {i === crumbs.length - 1 ? (
                      <span className="text-[var(--color-ink)]">{crumb.label}</span>
                    ) : (
                      <Link href={crumb.href} className="hover:text-[var(--color-accent)] transition-colors">
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </FadeUp>
          <div className="mt-2 max-w-3xl">
            <FadeUp delay={0.05}>
              <p className="text-label text-[var(--color-accent)] mb-4">Legal</p>
              <h1 className="font-display font-bold text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] tracking-[-0.025em] text-[var(--color-ink)] mb-5">
                Terms
              </h1>
              <p className="text-body text-[var(--color-muted)]">Last updated: 30 April 2026</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section bg-[var(--color-paper)] pt-12">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 lg:gap-16 items-start">

            {/* Main content */}
            <div className="max-w-prose">
              <FadeUp>
                <p className="text-body text-[var(--color-muted)] mb-12 leading-relaxed">
                  These terms explain the basis on which you may use the Clinic Evo website. By accessing or using this website, you agree to these terms. If you do not agree with these terms, you should not use this website.
                </p>
              </FadeUp>

              <FadeUp delay={0.04}>
                <article id={slugify("About these terms")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    About these terms
                  </h2>
                  <div className="article-prose">
                    <p>These terms explain the basis on which you may use the Clinic Evo website. By accessing or using this website, you agree to these terms.</p>
                    <p>If you do not agree with these terms, you should not use this website.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.05}>
                <article id={slugify("About Clinic Evo")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    About Clinic Evo
                  </h2>
                  <div className="article-prose">
                    <p>Clinic Evo provides digital growth, website, SEO, Google Ads and patient reactivation support for private clinics, with a focus on osteopaths, physiotherapists, chiropractors and other MSK healthcare businesses.</p>
                    <p>References to "Clinic Evo", "we", "us" or "our" in these terms refer to Clinic Evolution Ltd, trading as Clinic Evo.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.06}>
                <article id={slugify("Using this website")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Using this website
                  </h2>
                  <div className="article-prose">
                    <p>You may use this website for lawful purposes only. You must not use the website in a way that could damage, disable, overload or impair the site, interfere with another person's use of the site, or attempt to gain unauthorised access to any part of the website, server or connected systems.</p>
                    <p>You must not use this website to submit false, misleading, harmful, offensive or unlawful information.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.07}>
                <article id={slugify("Website content")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Website content
                  </h2>
                  <div className="article-prose">
                    <p>The content on this website is provided for general information only. While we aim to keep the information accurate and up to date, we do not guarantee that all content will always be complete, current or free from errors.</p>
                    <p>The information on this website should not be treated as professional, legal, financial, clinical or regulatory advice. You should take appropriate advice before making decisions based on information found on this website.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.08}>
                <article id={slugify("Enquiries and service information")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Enquiries and service information
                  </h2>
                  <div className="article-prose">
                    <p>Submitting an enquiry through this website does not create a client relationship or guarantee that Clinic Evo will provide services to you.</p>
                    <p>Any proposal, quotation, scope of work, timeline, pricing or commercial arrangement will be agreed separately in writing. Where a separate agreement, proposal or contract is provided, that document will take priority over the general information on this website.</p>
                    <p>We may decline enquiries or projects at our discretion.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.09}>
                <article id={slugify("No clinical advice")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    No clinical advice
                  </h2>
                  <div className="article-prose">
                    <p>Clinic Evo works with healthcare and MSK clinic businesses, but the content on this website is not clinical advice and should not be used to diagnose, treat or manage any health condition.</p>
                    <p>If you are a patient seeking healthcare advice, you should contact a suitably qualified healthcare professional.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.1}>
                <article id={slugify("Intellectual property")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Intellectual property
                  </h2>
                  <div className="article-prose">
                    <p>Unless otherwise stated, the content on this website, including text, branding, design, layout, images and other materials, belongs to Clinic Evo or is licensed for use by Clinic Evo.</p>
                    <p>You may view and use the website for your own personal or business information. You must not copy, reproduce, modify, distribute, sell or use website content for commercial purposes without prior written permission.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.11}>
                <article id={slugify("Links to other websites")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Links to other websites
                  </h2>
                  <div className="article-prose">
                    <p>This website may include links to third-party websites. These links are provided for convenience only. We are not responsible for the content, privacy practices, accuracy or availability of any third-party website.</p>
                    <p>Following a link to another website is at your own risk.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.12}>
                <article id={slugify("Limitation of liability")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Limitation of liability
                  </h2>
                  <div className="article-prose">
                    <p>To the fullest extent permitted by law, Clinic Evo will not be liable for any loss or damage arising from your use of this website, reliance on website content, inability to access the website, or use of any third-party website linked from this site.</p>
                    <p>Nothing in these terms limits or excludes liability where it would be unlawful to do so.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.13}>
                <article id={slugify("Changes to these terms")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Changes to these terms
                  </h2>
                  <div className="article-prose">
                    <p>We may update these terms from time to time. Any changes will be posted on this page with an updated date. Your continued use of the website after changes are published means you accept the updated terms.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.14}>
                <article id={slugify("Governing law")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Governing law
                  </h2>
                  <div className="article-prose">
                    <p>These terms are governed by the laws of England and Wales. Any disputes relating to these terms or use of this website will be subject to the courts of England and Wales.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.15}>
                <article id={slugify("Contact")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Contact
                  </h2>
                  <div className="article-prose">
                    <p>If you have any questions about these terms, please contact Clinic Evo via the <Link href="/contact/">contact page</Link> or email <a href="mailto:hello@clinicevo.co.uk">hello@clinicevo.co.uk</a>.</p>
                    <p>You may also find these pages useful: <Link href="/privacy-policy/">Privacy Policy</Link> and <Link href="/cookie-policy/">Cookie Policy</Link>.</p>
                  </div>
                </article>
              </FadeUp>
            </div>

            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="card-surface p-6">
                  <p className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-4">
                    On this page
                  </p>
                  <nav>
                    <ol className="space-y-2">
                      {sections.map((s) => (
                        <li key={s}>
                          <a
                            href={`#${slugify(s)}`}
                            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors leading-snug block py-0.5"
                          >
                            {s}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}

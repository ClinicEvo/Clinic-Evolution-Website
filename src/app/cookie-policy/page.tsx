import { buildMetadata } from "@/lib/metadata";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FadeUp from "@/components/ui/FadeUp";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Cookie Policy | Clinic Evo",
  description:
    "Read the Clinic Evo Cookie Policy to understand how we use cookies and similar technologies on our website.",
  path: "/cookie-policy/",
  noIndex: false,
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Cookie Policy", href: "/cookie-policy/" },
];

const sections = [
  "What are cookies?",
  "How Clinic Evo uses cookies",
  "Types of cookies we may use",
  "Managing your cookie preferences",
  "Changes to this Cookie Policy",
  "Contact us",
];

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}

export default function CookiePolicyPage() {
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
                Cookie Policy
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
                  This Cookie Policy explains how Clinic Evo uses cookies and similar technologies on our website. By using our website, you can choose whether to allow certain types of cookies. Some cookies are essential for the website to work properly. Others help us understand how people use the site and improve performance.
                </p>
              </FadeUp>

              <FadeUp delay={0.04}>
                <article id={slugify("What are cookies?")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    What are cookies?
                  </h2>
                  <div className="article-prose">
                    <p>Cookies are small text files placed on your device when you visit a website. They help websites remember certain information, such as your preferences, whether you have accepted cookies, or how you move through the site.</p>
                    <p>Cookies can be set by the website you are visiting or by third-party services used on the website.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.06}>
                <article id={slugify("How Clinic Evo uses cookies")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    How Clinic Evo uses cookies
                  </h2>
                  <div className="article-prose">
                    <p>Clinic Evo may use cookies to:</p>
                    <ul>
                      <li>keep the website secure and functioning correctly</li>
                      <li>remember your cookie preferences</li>
                      <li>understand how visitors use the website</li>
                      <li>improve website performance and user experience</li>
                      <li>measure enquiries, conversions and campaign performance</li>
                      <li>support relevant marketing activity, where consent has been given</li>
                    </ul>
                    <p>We do not use cookies to collect sensitive personal information without your knowledge.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.08}>
                <article id={slugify("Types of cookies we may use")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Types of cookies we may use
                  </h2>
                  <div className="article-prose">
                    <h3>Essential cookies</h3>
                    <p>Essential cookies are needed for the website to function. These may include cookies that support security, page loading, form functionality and cookie preference settings. These cookies cannot usually be switched off because the website may not work properly without them.</p>

                    <h3>Analytics cookies</h3>
                    <p>Analytics cookies help us understand how visitors use the website, for example, which pages are visited, how long people spend on the site, and which pages lead to enquiries. This information helps us improve the website and make the content more useful for clinic owners. Analytics cookies are only used where the appropriate consent has been collected.</p>

                    <h3>Marketing cookies</h3>
                    <p>Marketing cookies may be used to measure the effectiveness of advertising campaigns or help show relevant advertising on other platforms. These cookies may be set by third-party platforms such as Google or Meta, depending on which services are active on the website. Marketing cookies are only used where the visitor has given consent.</p>

                    <h3>Third-party cookies</h3>
                    <p>Some cookies may be set by third-party services used on the Clinic Evo website. Examples may include:</p>
                    <ul>
                      <li>Google Analytics</li>
                      <li>Google Tag Manager</li>
                      <li>Google Ads</li>
                      <li>form and spam-protection tools</li>
                      <li>booking or scheduling tools</li>
                    </ul>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.1}>
                <article id={slugify("Managing your cookie preferences")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Managing your cookie preferences
                  </h2>
                  <div className="article-prose">
                    <p>When you first visit the Clinic Evo website, you will be shown a cookie banner that allows you to accept or decline non-essential cookies.</p>
                    <p>You can also control cookies through your browser settings. Most browsers allow you to block cookies, delete existing cookies or receive a warning before cookies are stored. Please note that blocking some cookies may affect how the website works.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.12}>
                <article id={slugify("Changes to this Cookie Policy")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Changes to this Cookie Policy
                  </h2>
                  <div className="article-prose">
                    <p>We may update this Cookie Policy from time to time to reflect changes to the website, the tools we use, or legal requirements. The latest version will always be published on this page.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.14}>
                <article id={slugify("Contact us")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Contact us
                  </h2>
                  <div className="article-prose">
                    <p>If you have any questions about this Cookie Policy or how Clinic Evo uses cookies, please contact us via the <Link href="/contact/">contact page</Link> or email <a href="mailto:hello@clinicevo.co.uk">hello@clinicevo.co.uk</a>.</p>
                    <p>You may also find the following pages useful: <Link href="/privacy-policy/">Privacy Policy</Link> and <Link href="/terms/">Terms</Link>.</p>
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

import { buildMetadata } from "@/lib/metadata";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FadeUp from "@/components/ui/FadeUp";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the Clinic Evo privacy policy to understand how we collect, use, store and protect personal data when you use our website or contact us.",
  path: "/privacy-policy/",
  noIndex: false,
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
];

const sections = [
  "Who we are",
  "What personal data we collect",
  "How we collect your information",
  "How we use your information",
  "Our lawful bases for using your information",
  "Who we share your information with",
  "How long we keep your information",
  "Cookies and analytics",
  "How we protect your information",
  "Your data protection rights",
  "How to contact us",
  "How to complain",
  "Changes to this privacy policy",
];

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* Hero */}
      <section className="bg-[var(--color-paper)] pt-10 sm:pt-12 lg:pt-14 pb-20 sm:pb-24 lg:pb-28 relative overflow-hidden">
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
                Privacy Policy
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
                  This privacy policy explains how Clinic Evo collects, uses and protects personal data when you use our website, contact us, submit an enquiry, request a free clinic audit, or work with us. We aim to be clear and transparent about the information we collect and how it is used.
                </p>
              </FadeUp>

              <FadeUp delay={0.04}>
                <article id={slugify("Who we are")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Who we are
                  </h2>
                  <div className="article-prose">
                    <p>Clinic Evo provides digital growth, website, SEO, Google Ads and patient reactivation support for private clinics, including osteopaths, physiotherapists and chiropractors.</p>
                    <p>For the purposes of this privacy policy, the data controller is Clinic Evolution Ltd, trading as Clinic Evo.</p>
                    <p>Website: <a href="https://www.clinicevolution.com">www.clinicevolution.com</a><br />Email: <a href="mailto:hello@clinicevolution.com">hello@clinicevolution.com</a></p>
                    <p>If you have any questions about this privacy policy or how we use your personal data, contact us at <a href="mailto:hello@clinicevolution.com">hello@clinicevolution.com</a>.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.05}>
                <article id={slugify("What personal data we collect")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    What personal data we collect
                  </h2>
                  <div className="article-prose">
                    <p>We may collect and use the following types of personal data:</p>
                    <ul>
                      <li>your name</li>
                      <li>your email address</li>
                      <li>your phone number</li>
                      <li>your clinic or business name</li>
                      <li>your website URL</li>
                      <li>information you provide through contact forms or audit request forms</li>
                      <li>information about your clinic, website, marketing activity or growth goals</li>
                      <li>technical information such as IP address, browser type, device information and website usage data</li>
                      <li>communication history if you email us or speak with us</li>
                      <li>payment or billing information if you become a client</li>
                    </ul>
                    <p>We do not intentionally collect special category personal data through the website. Please avoid sending medical, patient or other sensitive personal information through our forms.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.06}>
                <article id={slugify("How we collect your information")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    How we collect your information
                  </h2>
                  <div className="article-prose">
                    <p>We may collect personal data when you:</p>
                    <ul>
                      <li>complete a contact form</li>
                      <li>request a free clinic audit</li>
                      <li>book a call or consultation</li>
                      <li>email us directly</li>
                      <li>become a client</li>
                      <li>use our website and interact with analytics or tracking tools</li>
                    </ul>
                    <p>We may also receive information from third-party tools we use to manage enquiries, analytics, advertising, scheduling or client communication.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.07}>
                <article id={slugify("How we use your information")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    How we use your information
                  </h2>
                  <div className="article-prose">
                    <p>We use personal data to:</p>
                    <ul>
                      <li>respond to enquiries</li>
                      <li>provide a free clinic audit or initial advice</li>
                      <li>deliver services to clients</li>
                      <li>prepare proposals, recommendations and project documents</li>
                      <li>manage client relationships</li>
                      <li>improve our website and services</li>
                      <li>understand how people use our website</li>
                      <li>send relevant follow-up communication where appropriate</li>
                      <li>manage billing, contracts and administration</li>
                      <li>comply with legal, accounting and regulatory obligations</li>
                    </ul>
                    <p>We do not sell personal data.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.08}>
                <article id={slugify("Our lawful bases for using your information")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Our lawful bases for using your information
                  </h2>
                  <div className="article-prose">
                    <p>Depending on the situation, we may rely on one or more lawful bases under UK data protection law.</p>
                    <h3>Contract</h3>
                    <p>We use personal data where it is necessary to provide a service, respond to a service request, prepare a proposal, or manage a client relationship.</p>
                    <h3>Legitimate interests</h3>
                    <p>We may use personal data where it is necessary for our legitimate business interests, provided those interests do not override your rights and freedoms. This may include responding to business enquiries, improving our website, managing leads and following up with relevant information about services you have shown interest in.</p>
                    <h3>Consent</h3>
                    <p>We may rely on consent for some marketing communications, non-essential cookies or specific types of optional data collection. Where we rely on consent, you can withdraw it at any time.</p>
                    <h3>Legal obligation</h3>
                    <p>We may use personal data where necessary to comply with legal, tax, accounting or regulatory obligations.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.09}>
                <article id={slugify("Who we share your information with")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Who we share your information with
                  </h2>
                  <div className="article-prose">
                    <p>We may share personal data with trusted service providers who help us operate our website, manage enquiries, deliver services and run the business. These may include:</p>
                    <ul>
                      <li>website hosting providers</li>
                      <li>email and communication platforms</li>
                      <li>CRM or lead management tools</li>
                      <li>analytics providers</li>
                      <li>payment processors</li>
                      <li>accounting or bookkeeping software</li>
                      <li>professional advisers such as accountants or legal advisers</li>
                      <li>advertising platforms where tracking or remarketing is used</li>
                    </ul>
                    <p>We only share personal data where there is a legitimate reason to do so and where appropriate safeguards are in place.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.1}>
                <article id={slugify("How long we keep your information")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    How long we keep your information
                  </h2>
                  <div className="article-prose">
                    <p>We only keep personal data for as long as necessary for the purpose it was collected. As a general guide:</p>
                    <ul>
                      <li>enquiry information may be kept for up to 24 months</li>
                      <li>client project records may be kept for up to 6 years for contractual, tax and legal reasons</li>
                      <li>email marketing data may be kept until you unsubscribe or ask us to remove it</li>
                      <li>analytics data may be retained according to the settings of the relevant analytics provider</li>
                    </ul>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.11}>
                <article id={slugify("Cookies and analytics")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Cookies and analytics
                  </h2>
                  <div className="article-prose">
                    <p>Our website may use cookies and similar technologies to make the website work, improve performance, understand visitor behaviour and support marketing activity. Non-essential cookies are only used where the correct consent has been collected.</p>
                    <p>For more information, see our <Link href="/cookie-policy/">Cookie Policy</Link>.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.12}>
                <article id={slugify("How we protect your information")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    How we protect your information
                  </h2>
                  <div className="article-prose">
                    <p>We take reasonable steps to protect personal data from loss, misuse, unauthorised access, disclosure, alteration or destruction. This may include secure website hosting, access controls, password protection, two-factor authentication where available, and limiting access to personal data to people who need it.</p>
                    <p>No website or online system can be guaranteed to be completely secure, but we take data protection seriously and review our approach as the business develops.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.13}>
                <article id={slugify("Your data protection rights")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Your data protection rights
                  </h2>
                  <div className="article-prose">
                    <p>Under data protection law, you may have rights in relation to your personal data, including the right to:</p>
                    <ul>
                      <li>access the personal data we hold about you</li>
                      <li>ask us to correct inaccurate or incomplete information</li>
                      <li>ask us to delete your personal data in certain circumstances</li>
                      <li>ask us to restrict how we use your personal data</li>
                      <li>object to certain uses of your personal data</li>
                      <li>request transfer of your personal data in certain circumstances</li>
                      <li>withdraw consent where we rely on consent</li>
                    </ul>
                    <p>To exercise any of these rights, contact us at <a href="mailto:hello@clinicevolution.com">hello@clinicevolution.com</a>. We may need to verify your identity before responding.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.14}>
                <article id={slugify("How to contact us")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    How to contact us
                  </h2>
                  <div className="article-prose">
                    <p>If you have any questions about this privacy policy or how we handle your personal data, please contact us via the <Link href="/contact/">contact page</Link> or email <a href="mailto:hello@clinicevolution.com">hello@clinicevolution.com</a>.</p>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.15}>
                <article id={slugify("How to complain")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    How to complain
                  </h2>
                  <div className="article-prose">
                    <p>If you are unhappy with how we use your personal data, please contact us first so we can try to resolve the issue.</p>
                    <p>You also have the right to complain to the Information Commissioner's Office, the UK regulator for data protection.</p>
                    <ul>
                      <li>ICO website: <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer">ico.org.uk</a></li>
                      <li>ICO helpline: 0303 123 1113</li>
                    </ul>
                  </div>
                </article>
              </FadeUp>

              <FadeUp delay={0.16}>
                <article id={slugify("Changes to this privacy policy")} className="mb-12 scroll-mt-28">
                  <h2 className="font-display font-bold text-[1.5rem] leading-tight tracking-tight text-[var(--color-ink)] mb-4 pb-4 border-b border-[var(--color-border)]">
                    Changes to this privacy policy
                  </h2>
                  <div className="article-prose">
                    <p>We may update this privacy policy from time to time. The latest version will always be published on this page. If we make significant changes, we may take additional steps to bring them to your attention.</p>
                  </div>
                </article>
              </FadeUp>
            </div>

            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="card-surface p-6">
                  <p className="text-xs font-bold text-[var(--color-accent-text)] uppercase tracking-widest mb-4">
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

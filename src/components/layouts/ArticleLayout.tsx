import React from "react";
import Badge from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import Breadcrumb from "@/components/sections/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import Button from "@/components/ui/Button";

interface ArticleSection {
  title: string;
  content: React.ReactNode;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ArticleLayoutProps {
  breadcrumbs: { label: string; href: string }[];
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  sections: ArticleSection[];
  faqs?: FAQ[];
  relatedLinks?: { label: string; href: string }[];
  children?: React.ReactNode;
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function estimateReadTime(sections: ArticleSection[]): number {
  const text = sections.map((s) => s.title + " " + String(s.content)).join(" ");
  const words = text.split(/\s+/).length;
  return Math.max(3, Math.round(words / 200));
}

export default function ArticleLayout({
  breadcrumbs,
  eyebrow,
  title,
  intro,
  sections,
  faqs,
  relatedLinks,
  children,
}: ArticleLayoutProps) {
  const readTime = estimateReadTime(sections);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {faqs && faqs.length > 0 && <FAQSchema items={faqs} />}

      {/* Hero ─ light, asymmetric */}
      <section className="bg-[var(--color-paper)] pt-32 pb-16 lg:pt-44 lg:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-surface)] -z-10 skew-x-[-12deg] translate-x-20 hidden lg:block" />
        <div className="cx-main">
          <FadeUp>
            <Breadcrumb items={breadcrumbs} />
          </FadeUp>
          <div className="mt-6 max-w-3xl">
            <FadeUp delay={0.03}>
              <Badge variant="accent" className="mb-5">{eyebrow}</Badge>
            </FadeUp>
            <FadeUp delay={0.07}>
              <h1 className="font-display font-bold text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] tracking-[-0.025em] text-[var(--color-ink)] mb-6">
                {title}
              </h1>
            </FadeUp>
            <FadeUp delay={0.11}>
              <div className="text-body-lg text-[var(--color-muted)] leading-relaxed mb-6 max-w-2xl">
                {intro}
              </div>
            </FadeUp>
            <FadeUp delay={0.14}>
              <div className="flex items-center gap-4 text-sm text-[var(--color-muted)]">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7 4.5V7l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {readTime} min read
                </span>
                <span className="w-px h-3 bg-[var(--color-border)]" />
                <span>Clinic Evo</span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Body ─ content + sticky sidebar */}
      <section className="section bg-[var(--color-paper)] pt-12">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">

            {/* ── Main content ── */}
            <div>
              {sections.map((section, index) => (
                <FadeUp key={index} delay={0.04}>
                  <article
                    id={slugify(section.title)}
                    className="article-section mb-14 scroll-mt-28"
                  >
                    <h2 className="font-display font-bold text-[clamp(1.25rem,2.5vw,1.75rem)] leading-tight tracking-tight text-[var(--color-ink)] mb-5 pb-4 border-b border-[var(--color-border)]">
                      {section.title}
                    </h2>
                    <div className="article-prose">
                      {section.content}
                    </div>
                  </article>
                </FadeUp>
              ))}
              {children}
            </div>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 flex flex-col gap-6">

                {/* TOC */}
                <div className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]">
                  <p className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-4">
                    In this guide
                  </p>
                  <nav>
                    <ol className="space-y-2">
                      {sections.map((s) => (
                        <li key={s.title}>
                          <a
                            href={`#${slugify(s.title)}`}
                            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors leading-snug block py-0.5"
                          >
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>

                {/* CTA card */}
                <div className="bg-[var(--color-dark)] rounded-2xl p-6 text-white">
                  <p className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-3">
                    Free clinic audit
                  </p>
                  <p className="text-sm leading-relaxed text-white/80 mb-5">
                    See exactly where your clinic is losing patients online, and what to fix first.
                  </p>
                  <Button href="/free-clinic-audit/" size="sm" className="w-full justify-center">
                    Get your free audit
                  </Button>
                </div>

                {/* Related links */}
                {relatedLinks && relatedLinks.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)]">
                    <p className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-4">
                      Related reading
                    </p>
                    <ul className="space-y-2">
                      {relatedLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 group"
                          >
                            <svg className="flex-shrink-0 text-[var(--color-accent)] opacity-60 group-hover:opacity-100 transition-opacity" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="section bg-[var(--color-surface)] border-t border-[var(--color-border)]">
          <div className="cx-main">
            <div className="max-w-2xl mx-auto">
              <FadeUp>
                <div className="text-center mb-10">
                  <Badge className="mb-4">FAQ</Badge>
                  <h2 className="font-display font-bold text-[clamp(1.75rem,3vw,2.5rem)] tracking-tight text-[var(--color-ink)]">
                    Frequently asked questions
                  </h2>
                </div>
              </FadeUp>
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading="Get a clearer view of your clinic's marketing opportunities"
        subheading="Clinic Evo can review your website, search visibility, local SEO, patient journey and missed conversion opportunities, then show you where your budget is likely to have the strongest impact."
        primaryLabel="Get a free clinic audit"
        primaryHref="/free-clinic-audit/"
      />
    </>
  );
}

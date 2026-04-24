import React from "react";
import Badge from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import Breadcrumb from "@/components/sections/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";

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
  children?: React.ReactNode; // For any custom sections in between
}

export default function ArticleLayout({
  breadcrumbs,
  eyebrow,
  title,
  intro,
  sections,
  faqs,
  children,
}: ArticleLayoutProps) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {faqs && faqs.length > 0 && <FAQSchema items={faqs} />}

      {/* Hero */}
      <section className="bg-[var(--color-ink)] pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="cx-main">
          <FadeUp>
            <Breadcrumb items={breadcrumbs} light />
            <Badge variant="accent" className="mt-6 mb-4">{eyebrow}</Badge>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="text-h1 text-white mb-5 max-w-3xl">
              {title}
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="text-body-lg text-white/70 max-w-2xl prose-invert">
              {intro}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="max-w-3xl mx-auto flex flex-col gap-16">
            {sections.map((section, index) => (
              <FadeUp key={index} delay={0.05}>
                <div className="article-content prose prose-lg prose-headings:text-[var(--color-ink)] prose-p:text-[var(--color-muted)] prose-a:text-[var(--color-accent)] hover:prose-a:underline max-w-none">
                  <h2 className="text-h2 mb-6">{section.title}</h2>
                  {section.content}
                </div>
              </FadeUp>
            ))}

            {children}
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
                  <h2 className="text-h2 text-[var(--color-ink)]">
                    Frequently asked questions
                  </h2>
                </div>
              </FadeUp>
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        heading="Get a clearer view of your clinic's marketing opportunities"
        subheading="ClinicEvo can review your website, search visibility, local SEO, patient journey and missed conversion opportunities, then show you where your budget is likely to have the strongest impact."
        primaryLabel="Get a free clinic audit"
        primaryHref="/free-clinic-audit/"
      />
    </>
  );
}

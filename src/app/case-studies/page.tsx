import { buildMetadata } from "@/lib/metadata";
import Badge from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import Breadcrumb from "@/components/sections/Breadcrumb";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ArrowLink from "@/components/ui/ArrowLink";

export const metadata = buildMetadata({
  title: "Clinic Marketing Case Studies | ClinicEvo",
  description:
    "See how ClinicEvo helps UK osteopaths, physiotherapists and chiropractors improve their digital presence, SEO and patient enquiries.",
  path: "/case-studies/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies/" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* Hero */}
      <section className="bg-[var(--color-ink)] pt-40 pb-28 lg:pt-48 lg:pb-36">
        <div className="cx-main">
          <FadeUp>
            <Breadcrumb items={crumbs} light />
            <Badge variant="accent" className="mt-6 mb-4">Proof</Badge>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="text-display text-white mb-8 max-w-3xl leading-tight">
              Real results for private clinics
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-body-lg text-white/70 max-w-xl">
              See how we have helped osteopaths, physiotherapists and
              chiropractors improve their SEO visibility, website conversion and
              patient enquiries.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section bg-[var(--color-surface)] min-h-[50vh]">
        <div className="cx-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeUp>
              <div className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden h-full flex flex-col hover:border-[var(--color-accent)] transition-colors">
                <div className="bg-[var(--color-paper)] border-b border-[var(--color-border)] p-8 flex items-center justify-center min-h-[240px]">
                  <div className="text-center">
                    <p className="text-display text-[var(--color-accent)] font-bold">3×</p>
                    <p className="text-body text-[var(--color-muted)]">new patient enquiries</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <Badge variant="surface" className="mb-4 self-start">Physiotherapy & MSK</Badge>
                  <h2 className="text-h3 text-[var(--color-ink)] mb-4">
                    Bodyfunction Clinic
                  </h2>
                  <p className="text-body text-[var(--color-muted)] mb-6 flex-1">
                    A multi-discipline clinic in London needed to cut through fierce
                    local competition. Through targeted SEO and a rebuilt website,
                    we built a stronger digital foundation for long-term growth.
                  </p>
                  <ArrowLink href="/case-studies/bodyfunction-clinic/">
                    Read the case study
                  </ArrowLink>
                </div>
              </div>
            </FadeUp>
            
            {/* Placeholder for future case studies */}
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-2xl border border-[var(--color-border)] border-dashed overflow-hidden h-full flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
                <div className="w-16 h-16 bg-[var(--color-surface)] rounded-full flex items-center justify-center mb-6">
                  <svg className="text-[var(--color-accent)] opacity-50" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>
                <h3 className="text-h3 text-[var(--color-ink)] mb-3">More case studies coming soon</h3>
                <p className="text-body text-[var(--color-muted)] max-w-sm">
                  We are currently documenting more of our recent clinic growth projects. 
                  Check back soon for new case studies.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <CTASection
        heading="Want to see what your clinic is missing?"
        subheading="A free clinic audit will show where your current website, SEO, patient journey and conversion points could be improved."
        primaryLabel="Get a free clinic audit"
        primaryHref="/free-clinic-audit/"
      />
    </>
  );
}

import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import Breadcrumb from "@/components/sections/Breadcrumb";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ArrowLink from "@/components/ui/ArrowLink";
import PageHero from "@/components/sections/PageHero";


export const metadata = buildMetadata({
  title: "Clinic Marketing Case Studies | Clinic Evo",
  description:
    "See how Clinic Evo helps UK osteopaths, physiotherapists and chiropractors improve their digital presence, SEO and patient enquiries.",
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

      <PageHero
        badge="Client results"
        heading={<>Real growth from <em className="not-italic text-[var(--color-accent)]">real clinic systems</em></>}
        subtext="These are not hypothetical projections. They are measured results from clinics that invested in proper digital growth systems, tracked from enquiry to booked appointment."
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        breadcrumbs={crumbs}
      />

      {/* Case Studies Grid */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)] min-h-[50vh]">
        <div className="cx-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeUp>
              <div className="card-surface overflow-hidden h-full flex flex-col group">
                <div className="relative border-b border-[var(--color-border)] p-8 flex items-center justify-center min-h-[240px] overflow-hidden">
                  <Image
                    src="https://bodyfunction.co.uk/wp-content/uploads/2026/01/bodyfunction-clinic-team-at-reception-01.png"
                    alt="Bodyfunction Clinic reception"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-white/80" />
                  <div className="relative text-center">
                    <p className="text-display text-[var(--color-accent)] font-bold">3×</p>
                    <p className="text-body text-[var(--color-muted)] font-medium">new patient enquiries</p>
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

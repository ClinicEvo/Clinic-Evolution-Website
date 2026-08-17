import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import FAQAccordion from "@/components/sections/FAQAccordion";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import ArrowLink from "@/components/ui/ArrowLink";
import PageHero from "@/components/sections/PageHero";
import HeroChecklistPanel from "@/components/sections/HeroChecklistPanel";
import AuditForm from "@/components/forms/AuditForm";


export const metadata = buildMetadata({
  title: "Free Clinic Marketing Audit",
  description:
    "A free Clinic Evo audit reviews your website, SEO, local visibility, patient journey and missed enquiries. Built for UK osteopaths, physios and chiropractors.",
  path: "/free-clinic-audit/",
});

const faqs = [
  {
    question: "Is the clinic audit really free?",
    answer:
      "Yes. The audit is free. It is designed to give suitable clinic owners a clear view of the main digital growth opportunities we can identify from their website, SEO presence and patient journey.",
  },
  {
    question: "What kind of clinics can request an audit?",
    answer:
      "Clinic Evo focuses mainly on osteopaths, physiotherapists, chiropractors and MSK clinics. Multi-disciplinary private clinics can also request an audit if they want to improve their website, SEO, Google Ads performance or patient reactivation.",
  },
  {
    question: "Do I need to be ready to work with Clinic Evo?",
    answer:
      "No. The audit is useful even if you are still deciding what your clinic needs. It can help you understand whether your biggest opportunity is SEO, website design, Google Ads, patient reactivation or something else.",
  },
  {
    question: "Will you review my whole website?",
    answer:
      "The audit focuses on the parts of your website and digital presence most likely to affect visibility, trust, enquiries and bookings. For larger websites, Clinic Evo will prioritise the most commercially important pages and patient journeys.",
  },
  {
    question: "What happens after I request the audit?",
    answer:
      "Clinic Evo will review your submission and website, then share the main opportunities and recommended next steps. If there is a good fit, we can also discuss how Clinic Evo may be able to help implement the improvements.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Free Clinic Audit", href: "/free-clinic-audit/" },
];

export default function FreeClinicAuditPage() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="Free audit for UK MSK clinics"
        heading={<>Get a free clinic <em className="not-italic text-[var(--color-accent)]">marketing audit</em></>}
        subtext="The free Clinic Evo audit gives you a clear view of what is working, what is being missed, and where your clinic has the strongest opportunity to improve enquiries, bookings and patient reactivation."
        bullets={[
          "Reviews website, SEO, local visibility and patient journey",
          "Clear recommendations, not a generic automated report",
          "For osteopaths, physiotherapists and chiropractors",
        ]}
        primaryCta={{ label: "Request your free audit", href: "#audit-form" }}
        breadcrumbs={crumbs}
        rightPanel={
          /* Deliberately the process, not the deliverables: the "What you
             receive" card further down this page already lists those, and
             repeating them here would say the same thing twice. */
          <HeroChecklistPanel
            numbered
            title="How the audit works"
            items={[
              "Send the short form with your clinic website",
              "We review the site, search visibility and booking journey by hand",
              "You get the findings and the priority actions, yours to keep",
            ]}
            footer={
              <>
                Human review, not an automated report. Back with you within{" "}
                <strong className="font-semibold text-[var(--color-ink)]">2 business days</strong>,
                with no obligation.
              </>
            }
          />
        }
      />

      {/* What the audit covers + what you receive */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
            <FadeUp>
              <div>
                <p className="eyebrow mb-4">What we look at</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-5">
                  A practical look at where your clinic is losing enquiries
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-8">
                  Most clinics do not have one single problem. They have a few small
                  gaps that compound: a website that does not explain services
                  clearly, weak rankings for the treatments patients search for,
                  hidden booking buttons, or past patients with no follow-up. The
                  audit looks at the full journey, from search result to booked
                  appointment.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-8">
                  The same review sits behind the work at Bodyfunction Clinic in
                  Angel, which went from 8 monthly organic visitors to 3,822 over
                  two years, and at Lind Street Osteopathy in Ryde, which opened
                  cold and held page one across its catchment inside twelve
                  months.
                </p>
                <div className="mb-8">
                  <ArrowLink href="/case-studies/">
                    Read both case studies in full
                  </ArrowLink>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    { title: "Website clarity", desc: "Whether your site clearly explains who you help, what you treat and why to book." },
                    { title: "SEO visibility", desc: "How visible you are for treatment, condition, practitioner and local searches." },
                    { title: "Local & Google presence", desc: "How clearly Google understands your location, services and service area." },
                    { title: "Patient journey", desc: "How easily a new patient moves from landing to choosing a service and booking." },
                    { title: "Conversion points", desc: "Calls to action, booking links, forms, phone visibility and friction points." },
                    { title: "Reactivation & Ads readiness", desc: "Opportunities to re-engage past patients, and whether you are ready for paid search." },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-1.5 text-[var(--color-accent)]" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <circle cx="6" cy="6" r="4" fill="currentColor" />
                      </svg>
                      <div>
                        <p className="text-body-sm font-semibold text-[var(--color-ink)]">{item.title}</p>
                        <p className="text-body-sm text-[var(--color-muted)]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-8">
                <p className="eyebrow mb-4">What you receive</p>
                <h3 className="text-h3 text-[var(--color-ink)] mb-5">
                  A short summary you can act on
                </h3>
                <ul className="flex flex-col gap-3 mb-6">
                  {[
                    "Website structure and messaging recommendations",
                    "SEO opportunities and missing page suggestions",
                    "Local visibility improvements",
                    "Booking journey and conversion observations",
                    "Patient reactivation opportunities",
                    "Priority actions to focus on first",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-0.5 text-[var(--color-accent)]" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-body-sm text-[var(--color-muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-body-sm text-[var(--color-muted)] pt-5 border-t border-[var(--color-border)]">
                  Built for osteopaths, physiotherapists and chiropractors. Explore
                  marketing by discipline:
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  <ArrowLink href="/osteopath-marketing/">Marketing for Osteopaths</ArrowLink>
                  <ArrowLink href="/physiotherapy-marketing/">Physiotherapy Marketing</ArrowLink>
                  <ArrowLink href="/chiropractic-marketing/">Chiropractic Marketing</ArrowLink>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="audit-form" className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          {/* items-start, not items-center: the form runs to ~1130px and this
              copy column to ~500px, so centring the short column left dead
              space above it and a full empty viewport below. Aligned to the top
              and made sticky, the reassurance points stay beside the fields
              while the visitor works down the form. */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* The stretched grid item and the sticky element are plain divs,
                with FadeUp inside them: framer-motion leaves a transform on its
                wrapper, and a transformed ancestor becomes the containing block
                for a sticky descendant, which stops it travelling. */}
            <div className="lg:self-stretch">
              <div className="lg:sticky lg:top-28">
                <FadeUp>
                <p className="eyebrow mb-4">Request</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-5">
                  Request your free clinic audit
                </h2>
                <p className="text-body-lg text-[var(--color-muted)] mb-5">
                  Complete the short form below and share your clinic website.
                  Clinic Evo will review your current digital presence and identify
                  the clearest opportunities for improvement.
                </p>
                <div className="hidden lg:flex flex-col gap-4 mt-10">
                  <div className="card-surface p-5">
                    <p className="text-body-sm text-[var(--color-ink)] font-medium mb-1">Clinic-led advice</p>
                    <p className="text-body-sm text-[var(--color-muted)]">Built around MSK patient journeys</p>
                  </div>
                  <div className="card-surface p-5">
                    <p className="text-body-sm text-[var(--color-ink)] font-medium mb-1">No automated spam</p>
                    <p className="text-body-sm text-[var(--color-muted)]">Human review of your website</p>
                  </div>
                </div>
                </FadeUp>
              </div>
            </div>
            <FadeUp delay={0.1}>
              <div className="card-surface p-8">
                <AuditForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--color-paper)] !pb-10">
        <div className="cx-main">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10">
                <p className="eyebrow mb-4">FAQ</p>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  Free clinic audit FAQs
                </h2>
              </div>
            </FadeUp>
            <div className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] px-6 sm:px-10 py-2">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

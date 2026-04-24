import { buildMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Breadcrumb from "@/components/sections/Breadcrumb";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import ArrowLink from "@/components/ui/ArrowLink";

export const metadata = buildMetadata({
  title: "Physiotherapy Website Design for Clinics",
  description:
    "ClinicEvo designs clear, fast and booking-focused websites for UK physiotherapists, osteopaths and chiropractors, built around trust, SEO and patient enquiries.",
  path: "/website-design-for-clinics/",
});

const faqs = [
  {
    question: "What makes clinic website design different from normal web design?",
    answer:
      "Clinic website design needs to account for patient trust, clinical services, location searches, booking behaviour, practitioner credibility and healthcare-related decision making. A clinic website should not just look good. It should help patients understand their options and feel confident enough to book.",
  },
  {
    question: "Do you design websites for physiotherapy clinics?",
    answer:
      "Yes. ClinicEvo designs websites for UK physiotherapy clinics, including service pages, practitioner profiles, booking journeys, local SEO structure and content designed to support patient acquisition.",
  },
  {
    question: "Can you help with website design for osteopaths?",
    answer:
      "Yes. ClinicEvo supports osteopaths with website design, SEO structure, service pages and patient-facing copy that explains osteopathic care clearly and builds trust with new patients.",
  },
  {
    question: "Do you work with chiropractic clinics?",
    answer:
      "Yes. ClinicEvo creates chiropractic clinic websites that support SEO, service clarity, practitioner credibility and patient enquiry generation.",
  },
  {
    question: "Should I redesign my clinic website or improve the current one?",
    answer:
      "It depends on the quality of the current website. Some clinics need a full redesign, while others need better service pages, improved SEO, clearer calls to action, faster performance or a stronger booking journey. The free clinic audit is designed to identify the most practical next step.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Clinic Website Design", href: "/website-design-for-clinics/" },
];

export default function WebsiteDesignForClinicsPage() {
  return (
    <>
      <ServiceSchema
        name="Clinic Website Design"
        description="Specialist clinic website design for UK osteopaths, physiotherapists, chiropractors and private MSK clinics."
        url="/website-design-for-clinics/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <section className="bg-[var(--color-ink)] pt-40 pb-28 lg:pt-48 lg:pb-36">
        <div className="cx-main">
          <FadeUp>
            <Breadcrumb items={crumbs} light />
            <Badge variant="accent" className="mt-6 mb-4">Clinic website design for MSK practices</Badge>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="text-display text-white mb-8 max-w-3xl leading-tight">
              Physiotherapy website design built around real patient bookings
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-body-lg text-white/70 mb-6 max-w-2xl leading-relaxed">
              Your clinic website should help patients understand what you do,
              trust your clinical expertise and book without confusion.
            </p>
            <p className="text-body-lg text-white/70 mb-10 max-w-2xl leading-relaxed">
              ClinicEvo creates clear, fast and SEO-ready websites for UK
              physiotherapists, osteopaths and chiropractors. Every page is built
              around the way real patients search, compare clinics and decide
              whether to book.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/free-clinic-audit/" size="lg">
                Get a free clinic website audit
              </Button>
              <Button href="#what-we-build" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                See how we help clinics grow
              </Button>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              {[
                "Built for private MSK clinics",
                "Designed around SEO, trust and bookings",
                "Created by someone who understands clinic patient journeys",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <svg className="flex-shrink-0 text-[var(--color-accent)]" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-white/60">{point}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Problem */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="max-w-3xl">
            <FadeUp>
              <Badge className="mb-5 inline-block">The problem</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                A clinic website has to do more than look professional
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                A good-looking website is not enough for a private clinic. Patients
                want to know whether you treat their problem, whether they can
                trust you, how quickly they can book, what the appointment involves
                and whether your clinic feels credible.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                For physiotherapy, osteopathy and chiropractic clinics, the website
                needs to work much harder than a brochure. It has to support SEO,
                explain services clearly, answer patient concerns and guide people
                towards booking. That is why ClinicEvo designs clinic websites
                around patient behaviour, not generic templates.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <FadeUp>
            <div className="text-center mb-12">
              <Badge className="mb-5 inline-block">Who we help</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Website design for physios, osteopaths and chiropractors
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                ClinicEvo focuses on MSK clinics where trust, education and local
                visibility directly affect patient enquiries.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Physiotherapy clinics",
                desc: "Private physiotherapy clinics need websites that clearly explain treatment pathways, conditions, practitioner expertise and booking options.",
                href: "/physiotherapy-marketing/",
                cta: "Physiotherapy marketing",
              },
              {
                title: "Osteopathy clinics",
                desc: "Osteopath websites need to explain the value of osteopathic care, build trust quickly and show how treatment can support common pain and mobility concerns.",
                href: "/osteopath-marketing/",
                cta: "Marketing for osteopaths",
              },
              {
                title: "Chiropractic clinics",
                desc: "Chiropractic websites need clear messaging, strong trust signals and careful positioning around symptoms, treatment expectations and patient confidence.",
                href: "/chiropractic-marketing/",
                cta: "Chiropractic marketing",
              },
            ].map((item, i) => (
              <FadeUp key={item.href} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] h-full flex flex-col">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">{item.title}</h3>
                  <p className="text-body text-[var(--color-muted)] mb-4 flex-1">{item.desc}</p>
                  <ArrowLink href={item.href}>{item.cta}</ArrowLink>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* What a clinic website needs */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="text-center mb-12">
              <Badge className="mb-5 inline-block">Essentials</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                What your clinic website needs to get right
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                A clinic website should make the patient journey easier from
                the first search to the first booking.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Clear service pages", desc: "Each treatment or service should have a page that explains who it is for, what it can help with, what to expect and how to book." },
              { title: "Local SEO structure", desc: "Your website should help Google understand your services, location, clinical focus and relevance to local patient searches." },
              { title: "Practitioner credibility", desc: "Patients want to know who they are booking with. Practitioner profiles, qualifications and clinical interests all matter." },
              { title: "Booking-focused user journey", desc: "Your calls to action, booking buttons, forms and contact options should be visible, simple and consistent across the site." },
              { title: "Trust signals", desc: "Reviews, case studies, professional memberships, clinic photos and clear explanations reduce uncertainty and improve conversion." },
              { title: "Fast, mobile-first performance", desc: "Many patients search on mobile. Your website needs to load quickly, read clearly and make booking easy on smaller screens." },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="bg-[var(--color-surface)] rounded-2xl p-7 border border-[var(--color-border)] h-full">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">{item.title}</h3>
                  <p className="text-body text-[var(--color-muted)]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SEO and conversion */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="max-w-3xl">
            <FadeUp>
              <Badge className="mb-5 inline-block">SEO-first design</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Built with SEO, trust and conversion in mind
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                Clinic website design should not be separated from SEO. The
                structure of your pages, headings, internal links, service
                descriptions, location signals, image optimisation and metadata
                all influence whether your clinic can rank for relevant searches.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                For clinics that already have a website, we can also support with{" "}
                <a href="/seo-for-clinics/" className="text-[var(--color-accent)] hover:underline">SEO for clinics</a>,{" "}
                <a href="/google-ads-for-clinics/" className="text-[var(--color-accent)] hover:underline">Google Ads for clinics</a> and{" "}
                <a href="/ai-patient-reactivation/" className="text-[var(--color-accent)] hover:underline">AI patient reactivation</a>{" "}
                once the website foundation is clear.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section id="what-we-build" className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="text-center mb-12">
              <Badge className="mb-5 inline-block">What we build</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                What we can improve or build for your clinic
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                Depending on your current website, ClinicEvo can either improve
                what already exists or design a new clinic website from the ground
                up.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "New clinic websites", desc: "A complete website for a new or growing clinic, including homepage, service pages, practitioner pages, contact page and booking journey." },
              { title: "Website redesigns", desc: "A clearer, stronger version of your current website, built around better structure, messaging, SEO and conversion." },
              { title: "Service and condition pages", desc: "SEO-led pages that help patients understand what you treat and help Google understand your clinical relevance." },
              { title: "Booking journey improvements", desc: "Cleaner calls to action, stronger contact flows and better integration with booking tools where appropriate." },
              { title: "Local SEO foundations", desc: "Metadata, headings, internal links, schema and location signals built into the site structure from the start." },
              { title: "Ongoing optimisation", desc: "Support after launch to improve content, track visibility and strengthen the pages most likely to generate enquiries." },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="bg-[var(--color-surface)] rounded-2xl p-7 border border-[var(--color-border)] h-full">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">{item.title}</h3>
                  <p className="text-body text-[var(--color-muted)]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why ClinicEvo */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <Badge className="mb-5 inline-block">Why ClinicEvo</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Why ClinicEvo is different
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  ClinicEvo is built specifically for private MSK clinics. That
                  means the website copy, page structure and design decisions are
                  shaped by real patient journeys rather than generic marketing
                  assumptions.
                </p>
                <p className="text-body text-[var(--color-muted)]">
                  We understand that patients often arrive with pain, uncertainty
                  and a need for reassurance. A clinic website has to respect that.
                  It should be clear, credible and commercially effective without
                  feeling pushy or over-designed.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                <p className="text-label text-[var(--color-accent)] mb-5">Case study</p>
                <h3 className="text-h3 text-[var(--color-ink)] mb-4">
                  Designed around real clinic growth work
                </h3>
                <p className="text-body text-[var(--color-muted)] mb-6">
                  ClinicEvo&apos;s approach is shaped by real work with private
                  clinics, including Bodyfunction Clinic. The focus is on
                  improving the foundations that affect patient enquiries: service
                  page clarity, search visibility, booking confidence and the
                  overall path from website visit to appointment.
                </p>
                <ArrowLink href="/case-studies/bodyfunction-clinic/">
                  Read the Bodyfunction Clinic case study
                </ArrowLink>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="max-w-2xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10">
                <Badge className="mb-5 inline-block">FAQ</Badge>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  Clinic website design FAQs
                </h2>
              </div>
            </FadeUp>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        heading="Start with a free clinic website audit"
        subheading="Your free audit will review your current website structure, SEO, service pages, user journey, trust signals and booking flow."
      />
    </>
  );
}

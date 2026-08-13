import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import PageHero from "@/components/sections/PageHero";
import ProofBand from "@/components/sections/ProofBand";
import ClinicSiteMockup from "@/components/sections/mockups/ClinicSiteMockup";

export const metadata = buildMetadata({
  title: "Clinic Website Design for MSK Practices",
  description:
    "Clinic Evo designs clear, fast, booking-focused websites for UK physiotherapists, osteopaths and chiropractors, built around trust, SEO and patient enquiries.",
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
      "Yes. Clinic Evo designs websites for UK physiotherapy clinics, including service pages, practitioner profiles, booking journeys, local SEO structure and content designed to support patient acquisition.",
  },
  {
    question: "Can you help with website design for osteopaths?",
    answer:
      "Yes. Clinic Evo supports osteopaths with website design, SEO structure, service pages and patient-facing copy that explains osteopathic care clearly and builds trust with new patients.",
  },
  {
    question: "Do you work with chiropractic clinics?",
    answer:
      "Yes. Clinic Evo creates chiropractic clinic websites that support SEO, service clarity, practitioner credibility and patient enquiry generation.",
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

      <PageHero
        badge="Clinic website design for MSK practices"
        heading={<>Websites built around <em className="not-italic text-[var(--color-accent)]">real patient bookings</em>, not just aesthetics</>}
        subtext="Clinic Evo designs clear, fast and SEO-ready websites for UK physiotherapists, osteopaths and chiropractors, every page built around the way patients search, compare and decide whether to book."
        bullets={[
          "Designed around SEO, trust and bookings",
          "Built for private MSK clinics specifically",
          "Faster load times and better conversion",
        ]}
        primaryCta={{ label: "Get a free website audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "See how we build", href: "#what-we-build" }}
        breadcrumbs={crumbs}
        rightPanel={<ClinicSiteMockup />}
      />

      {/* Problem */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="max-w-3xl">
            <FadeUp>
              <p className="eyebrow mb-5">The problem</p>
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
                towards booking. That is why Clinic Evo designs clinic websites
                around patient behaviour, not generic templates.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Who we help</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Website design for physios, osteopaths and chiropractors
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Clinic Evo focuses on MSK clinics where trust, education and local
                visibility directly affect patient enquiries.
              </p>
            </div>
          </FadeUp>
          <div className="flex flex-col gap-5">
            {[
              {
                title: "Physiotherapy clinics",
                desc: "Private physiotherapy clinics need websites that clearly explain treatment pathways, conditions, practitioner expertise and booking options.",
                href: "/physiotherapy-marketing/",
                cta: "Physiotherapy Marketing",
                watermarkImg: "/images/watermark-physio.jpg",
                accentColor: "#0F766E",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="10" width="3" height="4" rx="1" />
                    <rect x="5" y="8" width="2" height="8" rx="1" />
                    <line x1="7" y1="12" x2="17" y2="12" />
                    <rect x="17" y="8" width="2" height="8" rx="1" />
                    <rect x="19" y="10" width="3" height="4" rx="1" />
                  </svg>
                ),
              },
              {
                title: "Osteopathy clinics",
                desc: "Osteopath websites need to explain the value of osteopathic care, build trust quickly and show how treatment can support common pain and mobility concerns.",
                href: "/osteopath-marketing/",
                cta: "Marketing for Osteopaths",
                watermarkImg: "/images/watermark-osteopath.jpg",
                accentColor: "#ff5b4a",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="8" y="2" width="8" height="4" rx="1.5" />
                    <path d="M9 6 Q12 7.5 15 6" />
                    <rect x="7" y="8" width="10" height="4" rx="1.5" />
                    <path d="M8 12 Q12 13.5 16 12" />
                    <rect x="8" y="14" width="8" height="4" rx="1.5" />
                    <path d="M10 18 Q12 21 14 18" />
                  </svg>
                ),
              },
              {
                title: "Chiropractic clinics",
                desc: "Chiropractic websites need clear messaging, strong trust signals and careful positioning around symptoms, treatment expectations and patient confidence.",
                href: "/chiropractic-marketing/",
                cta: "Chiropractic Marketing",
                watermarkImg: "/images/watermark-chiro.jpg",
                accentColor: "#1E3A5F",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2 L12 7" />
                    <rect x="9" y="7" width="6" height="10" rx="1.5" />
                    <path d="M12 17 L12 22" />
                    <path d="M2 12 L7 12" />
                    <path d="M4.5 9.5 L7.5 12 L4.5 14.5" />
                    <path d="M22 12 L17 12" />
                    <path d="M19.5 9.5 L16.5 12 L19.5 14.5" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <FadeUp key={item.href} delay={i * 0.09}>
                <Link
                  href={item.href}
                  className="group flex flex-col sm:flex-row overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-[2px]"
                  style={{ background: "var(--color-paper)" }}
                >
                  <div className="relative h-52 w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-64 lg:w-72">
                    <Image
                      src={item.watermarkImg}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 288px"
                    />
                    <div className="absolute inset-0 bg-[var(--color-ink)]/10" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-7 md:p-9 lg:p-10">
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)]"
                        style={{ background: "var(--color-accent-light)", color: "var(--color-accent)" }}
                      >
                        {item.icon}
                      </div>
                      <p className="eyebrow">{item.title}</p>
                    </div>
                    <p className="text-body-sm text-[var(--color-muted)] mb-6">{item.desc}</p>
                    <span
                      className="inline-flex items-center gap-2 transition-all group-hover:gap-3 group-hover:text-[var(--color-accent)]"
                      style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-ink)", textDecoration: "underline", textUnderlineOffset: "4px" }}
                    >
                      {item.cta}
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* What a clinic website needs */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Essentials</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                What your clinic website needs to get right
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                A clinic website should make the patient journey easier from
                the first search to the first booking.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Clear service pages", desc: "Each treatment or service should have a page that explains who it is for, what it can help with, what to expect and how to book.", icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 9h10M7 13h6" /></> },
              { title: "Local SEO structure", desc: "Your website should help Google understand your services, location, clinical focus and relevance to local patient searches.", icon: <><path d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></> },
              { title: "Practitioner credibility", desc: "Patients want to know who they are booking with. Practitioner profiles, qualifications and clinical interests all matter.", icon: <><circle cx="12" cy="8" r="4" /><path d="M5 21v-1a7 7 0 0114 0v1" /></> },
              { title: "Booking-focused journey", desc: "Your calls to action, booking buttons, forms and contact options should be visible, simple and consistent across the site.", icon: <><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M8 3v4M16 3v4M4 11h16M9 16l2 2 4-4" /></> },
              { title: "Trust signals", desc: "Reviews, case studies, professional memberships, clinic photos and clear explanations reduce uncertainty and improve conversion.", icon: <><path d="M12 3l7 3v5c0 4.5-2.8 7.6-7 9-4.2-1.4-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></> },
              { title: "Fast, mobile-first performance", desc: "Many patients search on mobile. Your website needs to load quickly, read clearly and make booking easy on smaller screens.", icon: <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></> },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="card-surface group flex h-full flex-col p-7 md:p-8">
                  <div className="mb-5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{item.icon}</svg>
                  </div>
                  <h3 className="text-h4 text-[var(--color-ink)] mb-2">{item.title}</h3>
                  <p className="text-body text-[var(--color-muted)]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Proof band */}
      <ProofBand
        eyebrow="A site built from nothing"
        stat={{ value: "0 → page one", label: "Every core local search term, twelve months from launch" }}
        body="Lind Street Osteopathy launched with no logo, no website and no search history of any kind. A year on it holds position one for its own name at a 67% click-through rate, and page one across its whole catchment."
        source="Google Search Console, lindstreetosteopathy.co.uk, to Jul 2026"
        image="/images/lind-street/homepage-banner.png"
        imageAlt="The Lind Street Osteopathy website built by Clinic Evo"
        imagePosition="left"
        ctaLabel="Read the Lind Street case study"
        ctaHref="/case-studies/lind-street-osteopathy/"
      />

      {/* SEO and conversion */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-20 items-center">
            <FadeUp>
              <p className="eyebrow mb-5">SEO-first design</p>
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
                <a href="/ai-integration/" className="text-[var(--color-accent)] hover:underline">AI patient reactivation</a>{" "}
                once the website foundation is clear.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-card)]">
                <Image
                  src="/images/seo-first-design.png"
                  alt="Google Analytics chart showing organic search as the dominant source of new clinic patients"
                  width={526}
                  height={338}
                  className="w-full h-auto"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section id="what-we-build" className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">What we build</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                What we can improve or build for your clinic
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Depending on your current website, Clinic Evo can either improve
                what already exists or design a new clinic website from the ground
                up.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "New clinic websites", desc: "A complete website for a new or growing clinic, including homepage, service pages, practitioner pages, contact page and booking journey." },
              { title: "Website redesigns", desc: "A clearer, stronger version of your current website, built around better structure, messaging, SEO and conversion." },
              { title: "Service and condition pages", desc: "SEO-led pages that help patients understand what you treat and help Google understand your clinical relevance." },
              { title: "Booking journey improvements", desc: "Cleaner calls to action, stronger contact flows and better integration with booking tools where appropriate." },
              { title: "Local SEO foundations", desc: "Metadata, headings, internal links, schema and location signals built into the site structure from the start." },
              { title: "Ongoing optimisation", desc: "Support after launch to improve content, track visibility and strengthen the pages most likely to generate enquiries." },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="card-surface flex h-full flex-col p-7 md:p-8">
                  <span className="mb-4 font-display text-2xl font-light leading-none text-[var(--color-muted-light)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-h4 text-[var(--color-ink)] mb-2">{item.title}</h3>
                  <p className="text-body text-[var(--color-muted)]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clinic Evo */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">Why Clinic Evo</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Why Clinic Evo is different
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Clinic Evo is built specifically for private MSK clinics. That
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
              <Link href="/case-studies/bodyfunction-clinic/" className="card-surface group block p-8">
                <p className="text-label text-[var(--color-accent)] mb-5">Case study</p>
                <h3 className="text-h3 text-[var(--color-ink)] mb-4">
                  Designed around real clinic growth work
                </h3>
                <p className="text-body text-[var(--color-muted)] mb-6">
                  Clinic Evo&apos;s approach is shaped by real work with private
                  clinics, including Bodyfunction Clinic. The focus is on
                  improving the foundations that affect patient enquiries: service
                  page clarity, search visibility, booking confidence and the
                  overall path from website visit to appointment.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-colors duration-150 group-hover:text-[var(--color-accent-dim)]">
                  Read the Bodyfunction Clinic case study
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-150 group-hover:translate-x-0.5">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
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
                <p className="eyebrow mb-5">FAQ</p>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  Clinic website design FAQs
                </h2>
              </div>
            </FadeUp>
            <div className="bg-[var(--color-paper)] border border-[var(--color-border)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] px-6 sm:px-10 py-2">
              <FAQAccordion items={faqs} />
            </div>
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

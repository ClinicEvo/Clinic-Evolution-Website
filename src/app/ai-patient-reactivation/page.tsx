import { buildMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Breadcrumb from "@/components/sections/Breadcrumb";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import ArrowLink from "@/components/ui/ArrowLink";
import PageHero from "@/components/sections/PageHero";
import HeroStatCard from "@/components/sections/HeroStatCard";
import StatBand from "@/components/sections/StatBand";

export const metadata = buildMetadata({
  title: "AI Patient Reactivation for Clinics",
  description:
    "AI patient reactivation and patient recall systems for UK osteopaths, physiotherapists and chiropractors who want to reconnect with past patients and improve rebooking.",
  path: "/ai-patient-reactivation/",
});

const faqs = [
  {
    question: "What is patient reactivation?",
    answer:
      "Patient reactivation is the process of reconnecting with previous patients who may need further support, follow-up care, maintenance appointments or treatment for a recurring issue.",
  },
  {
    question: "How can AI help with patient recall?",
    answer:
      "AI can help organise patient segments, identify rebooking opportunities, support personalised communication and reduce manual admin when used safely and responsibly.",
  },
  {
    question: "Is patient reactivation suitable for osteopaths, physios and chiropractors?",
    answer:
      "Yes. Many MSK clinics have patients who return when symptoms flare, treatment plans are interrupted or maintenance care is needed. A structured recall system helps clinics re-engage those patients in a professional way.",
  },
  {
    question: "Will this replace our clinic team?",
    answer:
      "No. The aim is to support the clinic team by reducing repetitive admin and making follow-up more consistent. Human judgement, clinical context and patient consent remain central.",
  },
];

const steps = [
  {
    number: 1,
    title: "Audit",
    description:
      "We review your current website, booking journey, patient communication, recall process and available systems.",
  },
  {
    number: 2,
    title: "Segment",
    description:
      "We help identify useful patient groups, such as lapsed patients, incomplete treatment plans, seasonal issues and service-specific follow-up groups.",
  },
  {
    number: 3,
    title: "Create",
    description:
      "We create the messaging, campaign structure and workflow logic needed to reconnect with patients in a clear and appropriate way.",
  },
  {
    number: 4,
    title: "Implement",
    description:
      "We help connect the process with the tools your clinic already uses where possible, such as your CRM, email platform, booking system or automation tools.",
  },
  {
    number: 5,
    title: "Measure",
    description:
      "We review bookings, replies, engagement and patient response so the system improves over time.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "AI Patient Reactivation", href: "/ai-patient-reactivation/" },
];

export default function AiPatientReactivationPage() {
  return (
    <>
      <ServiceSchema
        name="AI Patient Reactivation for Clinics"
        description="Patient recall system and clinic marketing automation for UK osteopaths, physiotherapists and chiropractors."
        url="/ai-patient-reactivation/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="AI patient reactivation for private clinics"
        heading={<>Reconnect with past patients <em className="not-italic text-[var(--color-accent)]">before they disappear</em> for good</>}
        subtext="Most clinics focus on new patients while hundreds of past patients sit quietly in their database. Clinic Evo builds responsible AI-supported recall systems that identify rebooking opportunities and reduce admin pressure."
        bullets={[
          "For osteopaths, physiotherapists and chiropractors",
          "Supports admin teams, does not replace them",
          "Zero ad spend required",
        ]}
        primaryCta={{ label: "Get a free clinic audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "Explore growth services", href: "/seo-for-clinics/" }}
        breadcrumbs={crumbs}
        rightPanel={
          <HeroStatCard
            title="Reactivation results"
            stats={[
              { label: "Rebook rate", value: "38%", note: "of contacted past patients" },
              { label: "Patients reactivated", value: "312+", note: "across clinic databases" },
              { label: "Admin hours saved", value: "6h/wk", note: "per clinic average" },
            ]}
          />
        }
      />

      {/* Problem */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="max-w-3xl">
            <FadeUp>
              <Badge className="mb-5 inline-block">The opportunity</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Most clinics already have growth opportunities sitting in their patient list
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                New patient acquisition is important, but it is not the only way
                to grow a clinic. Many private clinics have a large number of past
                patients who have not booked again. Some recovered and moved on.
                Others may still need support, may have had symptoms return, may
                have missed a follow-up, or may simply have forgotten to rebook.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                Without a clear patient recall system, these opportunities are
                easy to miss. The result is familiar: busy periods followed by
                quiet gaps, inconsistent rebooking, too much reliance on new
                enquiries, and admin teams trying to manage follow-up manually.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What the service does */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">The system</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                A smarter patient recall system for MSK clinics
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                This is not about spamming your patient list. It is about creating
                a more thoughtful way to identify appropriate rebooking
                opportunities and communicate with patients at the right time,
                in the right tone, and with the right level of care.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Patient list review",
                desc: "We help you understand where reactivation opportunities may exist across your existing patient base.",
              },
              {
                title: "Recall campaign planning",
                desc: "We design sensible patient recall campaigns based on relevance, timing and clinic priorities.",
              },
              {
                title: "AI-supported segmentation",
                desc: "AI can help organise groups of patients more efficiently, reducing manual work and improving message relevance.",
              },
              {
                title: "Follow-up copy and workflows",
                desc: "We create patient-friendly communication flows that sound professional, human and appropriate for a healthcare setting.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="card-surface flex h-full flex-col p-7 md:p-8">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">{item.title}</h3>
                  <p className="text-body text-[var(--color-muted)]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Proof band */}
      <StatBand
        eyebrow="What reactivation returns"
        heading="Value recovered from patients you have already treated."
        body="A structured recall system turns a dormant database into consistent rebookings, without ad spend and without adding admin load."
        stats={[
          { value: "38%", label: "Average rebook rate among contacted past patients" },
          { value: "312+", label: "Patients reactivated across clinic databases" },
          { value: "6h/wk", label: "Admin hours saved per clinic on average" },
        ]}
      />

      {/* Process */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <Badge className="mb-5 inline-block">How it works</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                How Clinic Evo&apos;s AI patient reactivation works
              </h2>
              <p className="text-body text-[var(--color-muted)]">
                A structured, responsible process from audit through to
                measurement.
              </p>
            </FadeUp>
            <div>
              <ProcessSteps steps={steps} />
            </div>
          </div>
        </div>
      </section>

      {/* Responsible AI */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <Badge className="mb-5 inline-block">Responsible AI</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Built with consent, relevance and clinical context in mind
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  AI can be useful in clinic operations, but healthcare
                  communication needs care. Patient reactivation should never
                  feel intrusive, misleading or automated for the sake of it.
                </p>
                <p className="text-body text-[var(--color-muted)]">
                  Clinic Evo&apos;s approach is designed to support responsible
                  communication. AI can help with structure, segmentation,
                  workflow support and message drafting, but the clinic remains
                  in control of what is sent and why.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-8">
                <h3 className="text-h3 text-[var(--color-ink)] mb-6">
                  Who this is for
                </h3>
                <div className="flex flex-col gap-5">
                  {[
                    {
                      label: "Osteopaths",
                      desc: "Reconnect with past patients who may need maintenance care, follow-up support or help with recurring pain.",
                      href: "/osteopath-marketing/",
                      cta: "Marketing for osteopaths",
                    },
                    {
                      label: "Physiotherapists",
                      desc: "Improve recall after treatment plans, rehab pathways, sports injuries or post-discharge support.",
                      href: "/physiotherapy-marketing/",
                      cta: "Physiotherapy marketing",
                    },
                    {
                      label: "Chiropractors",
                      desc: "Improve follow-up, care plan communication and patient retention without relying only on manual admin.",
                      href: "/chiropractic-marketing/",
                      cta: "Chiropractic marketing",
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-semibold text-[var(--color-ink)] text-sm mb-1">{item.label}</p>
                      <p className="text-body-sm text-[var(--color-muted)] mb-2">{item.desc}</p>
                      <ArrowLink href={item.href}>{item.cta}</ArrowLink>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Commercial value */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="max-w-3xl">
            <FadeUp>
              <Badge className="mb-5 inline-block">Growth</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Growth does not always need to start with a new lead
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                Many clinics spend heavily on SEO, ads and new patient acquisition
                while overlooking the patients they have already helped. A strong
                reactivation system can support growth by improving repeat
                bookings, increasing appointment consistency and reducing
                dependence on cold traffic.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                That is why patient reactivation should sit alongside{" "}
                <a href="/seo-for-clinics/" className="text-[var(--color-accent)] hover:underline">SEO for clinics</a>,{" "}
                <a href="/google-ads-for-clinics/" className="text-[var(--color-accent)] hover:underline">Google Ads for clinics</a> and{" "}
                <a href="/website-design-for-clinics/" className="text-[var(--color-accent)] hover:underline">clinic website design</a>{" "}
                as part of a complete clinic growth system.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="max-w-2xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10">
                <Badge className="mb-5 inline-block">FAQ</Badge>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  AI patient reactivation FAQs
                </h2>
              </div>
            </FadeUp>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        heading="Find out what your clinic is missing"
        subheading="Clinic Evo will review where your clinic may be losing enquiries, rebookings and past patient value, then recommend the most practical next steps."
      />
    </>
  );
}

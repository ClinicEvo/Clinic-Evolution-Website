import { buildMetadata } from "@/lib/metadata";
import Badge from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import Breadcrumb from "@/components/sections/Breadcrumb";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ArrowLink from "@/components/ui/ArrowLink";

export const metadata = buildMetadata({
  title: "Clinic Marketing Resources for Private Clinics | ClinicEvo",
  description:
    "Practical clinic marketing resources for osteopaths, physiotherapists and chiropractors, covering SEO, Google Ads, patient acquisition and patient reactivation.",
  path: "/resources/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources/" },
];

export default function ResourcesHubPage() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* Hero */}
      <section className="bg-[var(--color-ink)] pt-40 pb-28 lg:pt-48 lg:pb-36">
        <div className="cx-main">
          <FadeUp>
            <Breadcrumb items={crumbs} light />
            <Badge variant="accent" className="mt-6 mb-4">ClinicEvo resources</Badge>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="text-h1 text-white mb-5 max-w-3xl">
              Clinic marketing resources for private practice owners
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-body-lg text-white/70 mb-6 max-w-2xl leading-relaxed">
              Growing a private clinic is not only about getting more traffic. It
              is about being visible for the right searches, helping patients
              understand why they should trust you, making the booking journey
              easier, and staying connected with people who may need care again
              in the future.
            </p>
            <p className="text-body-lg text-white/70 max-w-xl">
              These resources are written for osteopaths, physiotherapists,
              chiropractors and private clinic owners who want clearer, more
              practical guidance on digital growth.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="max-w-3xl">
            <FadeUp>
              <Badge className="mb-5 inline-block">Guidance</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Practical guidance for growing a private clinic
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                ClinicEvo&apos;s resource library is designed to support clinic owners
                who want to make better decisions about marketing, SEO, paid ads,
                websites and patient reactivation.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                The guides are intentionally practical. They are not written for
                generic businesses. They are written around the realities of MSK
                clinics, where trust, patient education, local visibility, reviews,
                practitioner credibility and rebooking behaviour all matter.
              </p>
              <p className="text-body text-[var(--color-muted)] font-semibold">
                Use these resources to understand where your clinic may be losing
                enquiries, what to improve first, and how to build a more joined-up
                digital growth system.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Patient acquisition resources */}
      <section className="section bg-[var(--color-paper)] border-t border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-10">
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Patient acquisition resources
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                These guides focus on attracting more of the right patients,
                improving enquiry flow and helping clinic owners understand what
                to prioritise when they want more bookings.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "How much should a clinic spend on marketing?",
                desc: "A practical guide to thinking about marketing spend, expected returns and what private clinics should consider before investing in SEO, ads or a new website.",
                href: "/resources/how-much-should-a-clinic-spend-on-marketing/",
              },
              {
                title: "How to get more patients to your clinic",
                desc: "A clear breakdown of the main digital levers that help clinics attract more patient enquiries, from local search to conversion-focused service pages.",
                href: "/resources/how-to-get-more-patients-to-your-clinic/",
              },
              {
                title: "Patient recall system: what it is and why clinics need one",
                desc: "A guide to patient recall, follow-up and reactivation systems for clinics that want to reconnect with past patients more effectively.",
                href: "/resources/patient-recall-system/",
              },
            ].map((card, i) => (
              <FadeUp key={card.href} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] h-full flex flex-col hover:border-[var(--color-accent)] transition-colors group">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">{card.title}</h3>
                  <p className="text-body-sm text-[var(--color-muted)] mb-5 flex-1">{card.desc}</p>
                  <ArrowLink href={card.href}>Read the guide</ArrowLink>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic growth strategy resources */}
      <section className="section bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-10">
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Clinic growth strategy resources
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                These resources look at broader growth strategy for private
                clinics, including how to position your services, improve
                visibility and build a more sustainable enquiry system.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "How to market your clinic",
                desc: "A practical overview of how private clinics can approach digital marketing without wasting time on disconnected tactics.",
                href: "/resources/how-to-market-your-clinic/",
              },
              {
                title: "How to market a private practice online",
                desc: "A guide for clinic owners who want to understand the foundations of online marketing for private healthcare services.",
                href: "/resources/how-to-market-a-private-practice-online/",
              },
              {
                title: "How to market your chiropractic practice",
                desc: "A chiropractic-specific guide covering visibility, trust, patient education and ways to reduce reliance on referral-only growth.",
                href: "/resources/how-to-market-your-chiropractic-practice/",
              },
              {
                title: "Physio business growth: the complete guide",
                desc: "A longer-form guide for physiotherapy clinic owners who want to improve patient acquisition, local visibility and diary flow.",
                href: "/resources/physio-business-growth/",
              },
            ].map((card, i) => (
              <FadeUp key={card.href} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] h-full flex flex-col hover:border-[var(--color-accent)] transition-colors group">
                  <h3 className="text-body-lg font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">{card.title}</h3>
                  <p className="text-body-sm text-[var(--color-muted)] mb-5 flex-1">{card.desc}</p>
                  <ArrowLink href={card.href}>Read the guide</ArrowLink>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SEO for clinics resources */}
      <section className="section bg-[var(--color-paper)] border-t border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-10">
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                SEO for clinics resources
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                These guides support the main <a href="/seo-for-clinics/" className="text-[var(--color-accent)] hover:underline">SEO for Clinics</a> service
                page and help clinic owners understand how local SEO, service
                pages and search visibility work in practice.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Local SEO for physio clinics",
                desc: "A practical guide to improving local visibility for physiotherapy clinics, including service pages, Google Business Profile, reviews and location signals.",
                href: "/resources/local-seo-for-physio-clinics/",
              },
              {
                title: "Local SEO for healthcare clinics",
                desc: "A broader guide to local SEO for healthcare clinics that want to appear more consistently for relevant local searches.",
                href: "/resources/local-seo-for-healthcare-clinics/",
              },
              {
                title: "Local SEO for medical clinics",
                desc: "A guide to the core SEO foundations medical and private healthcare clinics need to strengthen local discovery.",
                href: "/resources/local-seo-for-medical-clinics/",
              },
            ].map((card, i) => (
              <FadeUp key={card.href} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] h-full flex flex-col hover:border-[var(--color-accent)] transition-colors group">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">{card.title}</h3>
                  <p className="text-body-sm text-[var(--color-muted)] mb-5 flex-1">{card.desc}</p>
                  <ArrowLink href={card.href}>Read the guide</ArrowLink>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Google Ads for clinics resources */}
      <section className="section bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-10">
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Google Ads for clinics resources
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl">
                These resources explain how private clinics can use paid search
                to reach people who are actively looking for treatment, while
                avoiding wasteful campaigns and weak landing pages.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              {
                title: "Google Ads for physios",
                desc: "A guide to how physiotherapy clinics can use Google Ads to generate relevant patient enquiries and avoid common campaign mistakes.",
                href: "/resources/google-ads-for-physios/",
              },
              {
                title: "Google Ads for chiropractors",
                desc: "A chiropractic-specific guide to using Google Ads for high-intent searches, patient acquisition and campaign testing.",
                href: "/resources/google-ads-for-chiropractors/",
              },
            ].map((card, i) => (
              <FadeUp key={card.href} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] h-full flex flex-col hover:border-[var(--color-accent)] transition-colors group">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">{card.title}</h3>
                  <p className="text-body-sm text-[var(--color-muted)] mb-5 flex-1">{card.desc}</p>
                  <ArrowLink href={card.href}>Read the guide</ArrowLink>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Proof and case studies */}
      <section className="section bg-[var(--color-paper)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <Badge className="mb-5 inline-block">Proof</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Proof and case studies
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Clinic marketing should be judged by real-world outcomes, not
                  surface-level activity. These resources are designed to show how
                  strategy, websites, SEO and patient journeys come together in
                  practice.
                </p>
              </div>
            </FadeUp>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Bodyfunction Clinic case study",
                  desc: "A core ClinicEvo proof asset showing how clinic website, SEO and patient journey work can support a stronger digital growth system.",
                  href: "/case-studies/bodyfunction-clinic/",
                  action: "Read the case study",
                },
                {
                  title: "Chiropractic marketing case study",
                  desc: "A future case study page for chiropractic marketing results once enough client data is available.",
                  href: "/resources/chiropractic-marketing-case-study/",
                  action: "View resource",
                },
              ].map((item, i) => (
                <FadeUp key={item.href} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group">
                    <h3 className="text-body-lg font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-body-sm text-[var(--color-muted)] mb-4">{item.desc}</p>
                    <ArrowLink href={item.href}>{item.action}</ArrowLink>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Need a clearer plan for your clinic?"
        subheading="Reading about clinic marketing can help you understand the options. The more useful next step is to look at your own website, search visibility, booking journey and patient follow-up system. ClinicEvo's free clinic audit gives you a practical view of what is working, what is missing and where the strongest opportunities are likely to be."
        primaryLabel="Get a free clinic audit"
        primaryHref="/free-clinic-audit/"
      />
    </>
  );
}

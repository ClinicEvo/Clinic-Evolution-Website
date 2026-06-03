import { buildMetadata } from "@/lib/metadata";
import Badge from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import FAQAccordion from "@/components/sections/FAQAccordion";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import ArrowLink from "@/components/ui/ArrowLink";
import PageHero from "@/components/sections/PageHero";


export const metadata = buildMetadata({
  title: "Free Clinic Marketing Audit | Clinic Evo",
  description:
    "Request a free Clinic Evo audit for your clinic website, SEO, local visibility, patient journey and missed enquiry opportunities. Built for UK osteopaths, physios and chiropractors.",
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
      />

      {/* Problem */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="max-w-3xl">
            <FadeUp>
              <Badge className="mb-4">The challenge</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-5">
                See what is holding your clinic back online
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                Most private clinics do not have one single marketing problem. They
                usually have several small issues that compound over time.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                Your website may look fine but fail to explain your services clearly.
                Your Google rankings may be weak for the treatments patients
                actually search for. Your booking buttons may be too hidden. Your
                service pages may not answer the questions people ask before booking.
                Your past patients may be sitting in your database with no
                structured follow-up process.
              </p>
              <p className="text-body text-[var(--color-muted)] font-semibold">
                A clinic marketing audit helps identify those gaps before you spend
                money on redesigns, SEO retainers or paid ads. The aim is simple:
                understand where your clinic is losing visibility, trust, enquiries
                or rebookings, then decide what to fix first.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What it includes */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <FadeUp>
            <div className="text-center mb-12">
              <Badge className="mb-4">Included</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                What your free clinic audit includes
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                The audit is designed to give you a practical view of your current
                digital growth foundations.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Website clarity", desc: "We review whether your website clearly explains who you help, what you treat, where you are based, and why a patient should book with your clinic." },
              { title: "SEO visibility", desc: "We look at whether your clinic is visible for relevant search terms, including treatment, condition, practitioner and local search opportunities." },
              { title: "Local SEO and Google visibility", desc: "We review your local search presence, including how clearly Google can understand your location, services, service area and clinic relevance." },
              { title: "Patient journey", desc: "We check how easy it is for a new patient to move from landing on your site to choosing a service, trusting the clinic and making a booking." },
              { title: "Conversion points", desc: "We look at calls to action, booking links, forms, phone visibility, service page structure and common friction points." },
              { title: "Patient reactivation opportunities", desc: "We identify whether there are opportunities to reconnect with past patients through recall, follow-up or reactivation systems." },
              { title: "Paid search readiness", desc: "We assess whether your website is ready to convert traffic from Google Ads, or whether the foundation needs improving first." },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] h-full">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">{item.title}</h3>
                  <p className="text-body text-[var(--color-muted)]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <Badge className="mb-4">Audience</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-5">
                  Who the audit is for
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  This free clinic audit is suitable for private MSK clinic owners
                  who want clearer answers before making decisions about their
                  website, SEO, Google Ads or patient reactivation.
                </p>
                <p className="text-body text-[var(--color-muted)] font-semibold mb-3">
                  It is especially useful if you are:
                </p>
                <ul className="flex flex-col gap-2 mb-6">
                  {[
                    "An osteopath who wants more local visibility and better service pages",
                    "A physiotherapy clinic trying to generate more private patient enquiries",
                    "A chiropractor who wants to rely less on referrals and more on search visibility",
                    "A clinic owner with a website that looks acceptable but does not generate enough enquiries",
                    "A private practice considering SEO, Google Ads or a new website",
                    "A clinic with past patients who could be re-engaged more effectively",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-1.5 text-[var(--color-accent)]" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <circle cx="6" cy="6" r="4" fill="currentColor" />
                      </svg>
                      <span className="text-body text-[var(--color-muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)]">
                <h3 className="text-h3 text-[var(--color-ink)] mb-4">
                  Core disciplines
                </h3>
                <div className="flex flex-col gap-4">
                  <ArrowLink href="/osteopath-marketing/">Marketing for osteopaths</ArrowLink>
                  <ArrowLink href="/physiotherapy-marketing/">Physiotherapy marketing</ArrowLink>
                  <ArrowLink href="/chiropractic-marketing/">Chiropractic marketing</ArrowLink>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What you receive & Beyond traffic */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <Badge className="mb-4">Deliverables</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-5">
                What you will receive
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                After reviewing your clinic&apos;s digital presence, Clinic Evo
                will share a practical summary of the main opportunities we can
                identify.
              </p>
              <ul className="flex flex-col gap-2 mb-6">
                {[
                  "Website structure and messaging recommendations",
                  "SEO opportunities and missing page suggestions",
                  "Local visibility improvements",
                  "Booking journey and conversion observations",
                  "Google Ads readiness notes",
                  "Patient reactivation opportunities",
                  "Priority actions to focus on first",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="flex-shrink-0 mt-1 text-[var(--color-accent)]" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-body-sm text-[var(--color-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-body text-[var(--color-muted)]">
                This is not intended to be a long technical report. It is
                designed to help you understand the biggest opportunities clearly
                and decide the right next step.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Badge className="mb-4">Philosophy</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-5">
                Good clinic marketing is not only about getting more traffic
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                Traffic matters, but traffic alone does not grow a clinic. A patient
                still needs to understand your services, trust your clinical
                approach, find the right practitioner, see convenient booking
                options, and feel confident enough to take the next step.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                That is why the Clinic Evo audit looks at the full journey, not just
                rankings. The goal is to identify where your digital presence can
                better support enquiries, bookings, follow-ups and long-term
                patient value.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                For many clinics, the best first move is not always more advertising.
                It might be a clearer website, better service pages, improved local
                SEO, stronger calls to action, or a smarter patient recall system.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="audit-form" className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <Badge variant="accent" className="mb-4">Request</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-5">
                  Request your free clinic audit
                </h2>
                <p className="text-body-lg text-[var(--color-muted)] mb-5">
                  Complete the short form below and share your clinic website.
                  Clinic Evo will review your current digital presence and identify
                  the clearest opportunities for improvement.
                </p>
                <div className="hidden lg:flex flex-col gap-4 mt-10">
                  <div className="bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-border)]">
                    <p className="text-body-sm text-[var(--color-ink)] font-medium mb-1">Clinic-led advice</p>
                    <p className="text-sm text-[var(--color-muted)]">Built around MSK patient journeys</p>
                  </div>
                  <div className="bg-[var(--color-surface)] rounded-xl p-5 border border-[var(--color-border)]">
                    <p className="text-body-sm text-[var(--color-ink)] font-medium mb-1">No automated spam</p>
                    <p className="text-sm text-[var(--color-muted)]">Human review of your website</p>
                  </div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                <form 
                  action="https://formspree.io/f/xbjnqpyz" // Place real endpoint here
                  method="POST" 
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Name</label>
                      <input required type="text" id="name" name="name" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)]" />
                    </div>
                    <div>
                      <label htmlFor="clinic_name" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Clinic Name</label>
                      <input required type="text" id="clinic_name" name="clinic_name" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)]" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Email Address</label>
                      <input required type="email" id="email" name="email" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)]" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Phone Number</label>
                      <input type="tel" id="phone" name="phone" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)]" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Website URL</label>
                    <input required type="url" id="website" name="website" placeholder="https://" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)]" />
                  </div>

                  <div>
                    <label htmlFor="discipline" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Clinic Discipline</label>
                    <select required id="discipline" name="discipline" defaultValue="" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg bg-white focus:outline-none focus:border-[var(--color-accent)]">
                      <option value="" disabled>Select your discipline</option>
                      <option value="osteopathy">Osteopathy</option>
                      <option value="physiotherapy">Physiotherapy</option>
                      <option value="chiropractic">Chiropractic</option>
                      <option value="multi-disciplinary">Multi-disciplinary clinic</option>
                      <option value="other">Other private healthcare clinic</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="goal" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Main Goal</label>
                    <select required id="goal" name="goal" defaultValue="" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg bg-white focus:outline-none focus:border-[var(--color-accent)]">
                      <option value="" disabled>What is your main focus?</option>
                      <option value="enquiries">More enquiries</option>
                      <option value="seo">Better SEO visibility</option>
                      <option value="website">Improved website</option>
                      <option value="google_ads">Google Ads</option>
                      <option value="reactivation">Patient reactivation</option>
                      <option value="not_sure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Short Message (Optional)</label>
                    <textarea id="message" name="message" rows={3} className="w-full p-4 border border-[var(--color-border)] rounded-lg resize-none focus:outline-none focus:border-[var(--color-accent)]"></textarea>
                  </div>

                  <button type="submit" className="w-full h-12 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dim)] text-white font-semibold rounded-lg transition-colors mt-2">
                    Request my free audit
                  </button>
                  <p className="text-xs text-[var(--color-muted)] text-center mt-2">
                    We will only use your details to respond to your audit request. No spam or automated sales sequence.
                  </p>
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="max-w-2xl mx-auto">
            <FadeUp>
              <div className="text-center mb-10">
                <Badge className="mb-4">FAQ</Badge>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  Free clinic audit FAQs
                </h2>
              </div>
            </FadeUp>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}

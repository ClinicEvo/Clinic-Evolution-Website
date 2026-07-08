import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import FAQAccordion from "@/components/sections/FAQAccordion";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import ArrowLink from "@/components/ui/ArrowLink";
import PageHero from "@/components/sections/PageHero";


export const metadata = buildMetadata({
  title: "Free Clinic Marketing Audit",
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
                  audit looks at the full journey, not just rankings.
                </p>
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
                  A clear summary, not a 40-page report
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
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
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-8">
                <form
                  action="https://formspree.io/f/xbjnqpyz" // Place real endpoint here
                  method="POST"
                  className="flex flex-col gap-5"
                >
                  <input type="hidden" name="form_type" value="audit_request" />
                  <input type="hidden" name="_subject" value="New free audit request — Clinic Evo" />
                  <input type="hidden" name="_next" value="/free-clinic-audit/thank-you/" />

                  {/* Contact */}
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
                      <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Phone <span className="font-normal text-[var(--color-muted)]">(optional)</span></label>
                      <input type="tel" id="phone" name="phone" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)]" />
                    </div>
                  </div>

                  {/* Clinic details we need to run the audit */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="website" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Website URL</label>
                      <input required type="url" id="website" name="website" placeholder="https://" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)]" />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Town / City</label>
                      <input required type="text" id="location" name="location" placeholder="e.g. Bristol" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="discipline" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Clinic Discipline</label>
                      <select required id="discipline" name="discipline" defaultValue="" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg bg-white focus:outline-none focus:border-[var(--color-accent)]">
                        <option value="" disabled>Select discipline</option>
                        <option value="osteopathy">Osteopathy</option>
                        <option value="physiotherapy">Physiotherapy</option>
                        <option value="chiropractic">Chiropractic</option>
                        <option value="multi-disciplinary">Multi-disciplinary clinic</option>
                        <option value="other">Other private healthcare clinic</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="booking_system" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Booking System</label>
                      <select required id="booking_system" name="booking_system" defaultValue="" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg bg-white focus:outline-none focus:border-[var(--color-accent)]">
                        <option value="" disabled>How do patients book?</option>
                        <option value="cliniko">Cliniko</option>
                        <option value="pabau">Pabau</option>
                        <option value="jane">Jane</option>
                        <option value="other_online">Other online booking</option>
                        <option value="phone_only">Phone / email only</option>
                        <option value="not_sure">Not sure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lead_sources" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Where do most new patients come from now?</label>
                    <select required id="lead_sources" name="lead_sources" defaultValue="" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg bg-white focus:outline-none focus:border-[var(--color-accent)]">
                      <option value="" disabled>Select the main source</option>
                      <option value="google_search">Google search</option>
                      <option value="google_ads">Google Ads</option>
                      <option value="referrals">Word of mouth / referrals</option>
                      <option value="social">Social media</option>
                      <option value="directories">Directories / health platforms</option>
                      <option value="mixed">A real mix</option>
                      <option value="not_sure">Not sure</option>
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
                    <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Anything else? <span className="font-normal text-[var(--color-muted)]">(optional)</span></label>
                    <textarea id="message" name="message" rows={3} placeholder="Biggest frustration, a target you're chasing, anything we should know..." className="w-full p-4 border border-[var(--color-border)] rounded-lg resize-none focus:outline-none focus:border-[var(--color-accent)]"></textarea>
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

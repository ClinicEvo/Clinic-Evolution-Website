import { buildMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";
import Breadcrumb from "@/components/sections/Breadcrumb";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ArrowLink from "@/components/ui/ArrowLink";

export const metadata = buildMetadata({
  title: "Contact ClinicEvo | Clinic Marketing Support",
  description:
    "Contact ClinicEvo to discuss SEO, website design, Google Ads, patient reactivation or digital growth support for your osteopathy, physiotherapy or chiropractic clinic.",
  path: "/contact/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact/" },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* Hero */}
      <section className="bg-[var(--color-ink)] pt-40 pb-28 lg:pt-48 lg:pb-36">
        <div className="cx-main">
          <FadeUp>
            <Breadcrumb items={crumbs} light />
            <Badge variant="accent" className="mt-8 mb-6">Contact ClinicEvo</Badge>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="text-display text-white mb-8 max-w-3xl leading-tight">
              Speak to us about growing your clinic online
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-body-lg text-white/70 mb-6 max-w-2xl leading-relaxed">
              If you run an osteopathy, physiotherapy or chiropractic clinic and
              want clearer digital growth support, we would be happy to hear from you.
            </p>
            <p className="text-body-lg text-white/70 mb-10 max-w-2xl leading-relaxed">
              Use this page to ask about SEO, website design, Google Ads, patient
              reactivation, clinic marketing strategy or a full digital growth review.
              If you are not sure where to start, the simplest next step is a free
              clinic audit.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button href="/free-clinic-audit/" size="lg">
                Get a free clinic audit
              </Button>
              <Button href="#contact-form" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Send an enquiry
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* What you can ask us about */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="text-center mb-12">
              <Badge className="mb-4">Topics</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                What you can ask us about
              </h2>
              <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                ClinicEvo works with private MSK clinics that want a more
                joined-up approach to digital growth. You can get in touch if you
                need help with a specific area, or if you want a clearer plan for
                improving your clinic&apos;s online visibility and patient enquiries.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "SEO for clinics",
                desc: "Improve your visibility in Google for the treatments, conditions, locations and patient searches that matter to your clinic.",
                href: "/seo-for-clinics/",
              },
              {
                title: "Clinic website design",
                desc: "Create a clearer, faster and more trustworthy website that helps patients understand your services and book with confidence.",
                href: "/website-design-for-clinics/",
              },
              {
                title: "Google Ads for clinics",
                desc: "Build paid search campaigns around high-intent patient searches, with landing pages and tracking focused on real enquiries.",
                href: "/google-ads-for-clinics/",
              },
              {
                title: "AI patient reactivation",
                desc: "Reconnect with suitable past patients using smarter recall and rebooking systems that reduce manual admin.",
                href: "/ai-patient-reactivation/",
              },
              {
                title: "Marketing consultancy",
                desc: "Get strategic support from someone who understands both clinical practice and digital growth.",
                href: "/healthcare-marketing-consultant/",
              },
            ].map((topic, i) => (
              <FadeUp key={topic.href} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] h-full flex flex-col hover:border-[var(--color-accent)] transition-colors group">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">{topic.title}</h3>
                  <p className="text-body text-[var(--color-muted)] mb-4 flex-1">{topic.desc}</p>
                  <ArrowLink href={topic.href}>Learn more</ArrowLink>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="max-w-3xl mb-12">
            <FadeUp>
              <Badge className="mb-4">Audience</Badge>
              <h2 className="text-h2 text-[var(--color-ink)] mb-5">
                Specialist support for private MSK clinics
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                ClinicEvo is built for clinics where trust, clinical credibility
                and patient education matter. The main focus is on osteopaths,
                physiotherapists and chiropractors, although we can also support
                selected private clinics with similar patient journeys.
              </p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Osteopaths",
                desc: "Marketing, SEO and website support for osteopaths who want stronger local visibility and clearer patient communication.",
                href: "/osteopath-marketing/",
              },
              {
                title: "Physiotherapists",
                desc: "Digital growth support for private physio clinics that want more enquiries, stronger service pages and better patient acquisition systems.",
                href: "/physiotherapy-marketing/",
              },
              {
                title: "Chiropractors",
                desc: "SEO, websites, Google Ads and digital strategy for chiropractors who want to reduce reliance on referrals and improve online visibility.",
                href: "/chiropractic-marketing/",
              },
            ].map((card, i) => (
              <FadeUp key={card.href} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] h-full flex flex-col hover:border-[var(--color-accent)] transition-colors group">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">{card.title}</h3>
                  <p className="text-body text-[var(--color-muted)] mb-4 flex-1">{card.desc}</p>
                  <ArrowLink href={card.href}>View marketing approach</ArrowLink>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact-form" className="section bg-[var(--color-paper)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <Badge className="mb-4">Contact</Badge>
                <h2 className="text-h2 text-[var(--color-ink)] mb-5">
                  Send an enquiry
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-10">
                  Tell us a little about your clinic and what you need help with. We
                  will review your message and come back with the most useful next step.
                </p>
                <div className="bg-[var(--color-surface)] rounded-2xl p-7 border border-[var(--color-border)]">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-4">
                    Contact details
                  </h3>
                  <p className="text-body-sm text-[var(--color-muted)] mb-4">
                    Use the form for the fastest response. If you would prefer to
                    email directly, use the contact email below.
                  </p>
                  <a href="mailto:hello@clinicevo.co.uk" className="text-body font-semibold text-[var(--color-accent)] hover:underline">
                    hello@clinicevo.co.uk
                  </a>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm">
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
                    <label htmlFor="website" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Clinic Website URL</label>
                    <input required type="url" id="website" name="website" placeholder="https://" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)]" />
                  </div>

                  <div>
                    <label htmlFor="clinic_type" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Clinic Type</label>
                    <select required id="clinic_type" name="clinic_type" defaultValue="" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg bg-white focus:outline-none focus:border-[var(--color-accent)]">
                      <option value="" disabled>Select your clinic type</option>
                      <option value="osteopathy">Osteopathy clinic</option>
                      <option value="physiotherapy">Physiotherapy clinic</option>
                      <option value="chiropractic">Chiropractic clinic</option>
                      <option value="multi-disciplinary">Multi-disciplinary MSK clinic</option>
                      <option value="other">Other private clinic</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="help_with" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">What do you need help with?</label>
                    <select required id="help_with" name="help_with" defaultValue="" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg bg-white focus:outline-none focus:border-[var(--color-accent)]">
                      <option value="" disabled>Select an option</option>
                      <option value="seo">SEO</option>
                      <option value="website">Website design</option>
                      <option value="google_ads">Google Ads</option>
                      <option value="reactivation">Patient reactivation</option>
                      <option value="consultancy">Marketing consultancy</option>
                      <option value="strategy">Full clinic growth strategy</option>
                      <option value="not_sure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Message</label>
                    <textarea required id="message" name="message" rows={4} className="w-full p-4 border border-[var(--color-border)] rounded-lg resize-none focus:outline-none focus:border-[var(--color-accent)]"></textarea>
                  </div>

                  <div className="flex items-start gap-3 mt-2">
                    <input required type="checkbox" id="consent" name="consent" className="mt-1 flex-shrink-0" />
                    <label htmlFor="consent" className="text-xs text-[var(--color-muted)] cursor-pointer">
                      I consent to ClinicEvo contacting me about my enquiry. I understand my details will be handled in line with the <a href="/privacy-policy/" className="underline hover:text-[var(--color-accent)]">privacy policy</a>.
                    </label>
                  </div>

                  <button type="submit" className="w-full h-12 bg-[var(--color-accent)] hover:bg-[#085a5a] text-white font-semibold rounded-lg transition-colors mt-2">
                    Send enquiry
                  </button>
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Audit alternative */}
      <section className="section bg-[var(--color-surface)]">
        <div className="cx-main">
          <div className="bg-[var(--color-ink)] rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-h2 text-white mb-5">
              Not sure what your clinic needs yet?
            </h2>
            <p className="text-body-lg text-white/70 mb-8 max-w-2xl mx-auto">
              If you are unsure whether your clinic needs SEO, a new website,
              Google Ads or a better patient follow-up system, start with a free
              clinic audit. We will look at your current website, search visibility,
              local presence, patient journey and conversion opportunities so you
              can see where the strongest improvements are.
            </p>
            <Button href="/free-clinic-audit/" size="lg">
              Get a free clinic audit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

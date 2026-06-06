import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import PageHero from "@/components/sections/PageHero";


export const metadata = buildMetadata({
  title: "Contact Clinic Evo | Clinic Marketing Support",
  description:
    "Contact Clinic Evo to discuss SEO, website design, Google Ads, patient reactivation or digital growth support for your osteopathy, physiotherapy or chiropractic clinic.",
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

      <PageHero
        badge="Contact Clinic Evo"
        heading={<>Speak to us about <em className="not-italic text-[var(--color-accent)]">growing your clinic online</em></>}
        subtext="Have a question about your clinic's marketing? Send us a quick message and we will come back with the most useful next step. Want a full review of your website and visibility? The free audit is the better starting point."
        primaryCta={{ label: "Send a message", href: "#contact-form" }}
        secondaryCta={{ label: "Get a free clinic audit", href: "/free-clinic-audit/" }}
        breadcrumbs={crumbs}
      />

      {/* Form Section */}
      <section id="contact-form" className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <div>
                <p className="eyebrow mb-4">Contact</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-5">
                  Ask us a question
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-8">
                  No long form. Just tell us what is on your mind and we will reply
                  personally. If you are after a full review of your website, SEO and
                  patient journey, the <a href="/free-clinic-audit/" className="text-[var(--color-accent)] hover:underline">free clinic audit</a> is
                  the quickest way to get that.
                </p>
                <div className="card-surface p-7 md:p-8">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">
                    Prefer email?
                  </h3>
                  <p className="text-body-sm text-[var(--color-muted)] mb-4">
                    You can reach us directly and we will respond as soon as we can.
                  </p>
                  <a href="mailto:hello@clinicevo.co.uk" className="text-body font-semibold text-[var(--color-accent)] hover:underline">
                    hello@clinicevo.co.uk
                  </a>
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
                  <input type="hidden" name="form_type" value="contact_enquiry" />
                  <input type="hidden" name="_subject" value="New contact enquiry — Clinic Evo" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Name</label>
                    <input required type="text" id="name" name="name" className="w-full h-11 px-4 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-accent)]" />
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

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-ink)] mb-1">Message</label>
                    <textarea required id="message" name="message" rows={5} placeholder="What would you like to ask us?" className="w-full p-4 border border-[var(--color-border)] rounded-lg resize-none focus:outline-none focus:border-[var(--color-accent)]"></textarea>
                  </div>

                  <button type="submit" className="w-full h-12 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dim)] text-white font-semibold rounded-lg transition-colors mt-2">
                    Send message
                  </button>
                  <p className="text-xs text-[var(--color-muted)] text-center">
                    By sending this you agree to us replying to your enquiry, handled in line with our <a href="/privacy-policy/" className="underline hover:text-[var(--color-accent)]">privacy policy</a>.
                  </p>
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}

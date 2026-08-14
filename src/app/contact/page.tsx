import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import PageHero from "@/components/sections/PageHero";
import HeroChecklistPanel from "@/components/sections/HeroChecklistPanel";
import ContactForm from "@/components/forms/ContactForm";


export const metadata = buildMetadata({
  title: "Contact Us | Clinic Marketing Support",
  description:
    "Contact Clinic Evo to discuss SEO, website design, Google Ads or patient reactivation for your osteopathy, physiotherapy or chiropractic clinic.",
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
        rightPanel={
          <HeroChecklistPanel
            title="What happens after you send it"
            items={[
              "A person reads it \u2014 no ticket queue and no chatbot",
              "You get a straight answer, or the name of the thing to fix first",
              "If a full review would help more, we say so rather than sell",
              "No mailing list, and no follow-up sequence you did not ask for",
            ]}
            footer={
              <>
                Prefer email? Write to{" "}
                <a
                  href="mailto:hello@clinicevolution.com"
                  className="font-semibold text-[var(--color-accent-text)] underline underline-offset-2"
                >
                  hello@clinicevolution.com
                </a>
                .
              </>
            }
          />
        }
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
                  patient journey, the <a href="/free-clinic-audit/" className="text-[var(--color-accent-text)] hover:underline">free clinic audit</a> is
                  the quickest way to get that.
                </p>
                <div className="card-surface p-7 md:p-8">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2">
                    Prefer email?
                  </h3>
                  <p className="text-body-sm text-[var(--color-muted)] mb-4">
                    You can reach us directly and we will respond as soon as we can.
                  </p>
                  <a href="mailto:hello@clinicevolution.com" className="text-body font-semibold text-[var(--color-accent-text)] hover:underline">
                    hello@clinicevolution.com
                  </a>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-8">
                <ContactForm />
                <p className="text-xs text-[var(--color-muted)] text-center mt-5">
                  By sending this you agree to us replying to your enquiry, handled in line with our <a href="/privacy-policy/" className="underline hover:text-[var(--color-accent)]">privacy policy</a>.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}

import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import PageHero from "@/components/sections/PageHero";
import ArrowLink from "@/components/ui/ArrowLink";
import StatBand from "@/components/sections/StatBand";
import FAQAccordion from "@/components/sections/FAQAccordion";
import PulsePipelineBoard from "@/components/sections/PulsePipelineBoard";
import LaptopFrame from "@/components/sections/mockups/LaptopFrame";
import ConnectedJourney from "@/components/sections/ConnectedJourney";
import StackReplacementTable from "@/components/sections/StackReplacementTable";
import PulseCapabilityTabs from "@/components/sections/PulseCapabilityTabs";
import IntegrationStrip from "@/components/sections/IntegrationStrip";
import StickyMobileCta from "@/components/ui/StickyMobileCta";

export const metadata = buildMetadata({
  title: "Patient Pulse: Clinic CRM, Messaging & Follow-Up",
  description:
    "Clinic Evo's managed CRM for UK osteopaths, physios and chiropractors. One system for enquiries, patient messaging, lead pipelines, reviews, newsletters and automatic follow-up.",
  path: "/patient-pulse/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Patient Pulse", href: "/patient-pulse/" },
];

const faqs = [
  {
    question: "What is Patient Pulse?",
    answer:
      "Patient Pulse is Clinic Evo's managed clinic CRM and patient communication system. It holds your patient database, brings every enquiry from your website, Google Business Profile, Facebook, Instagram, TikTok, WhatsApp and missed calls into one team inbox, replies automatically within minutes, tracks each enquiry on a pipeline until it is booked, and then handles review requests, newsletters, social scheduling and lapsed-patient recall from the same place.",
  },
  {
    question: "Does Patient Pulse replace tools like Mailchimp or a separate scheduler?",
    answer:
      "For most clinics, yes. Patient Pulse covers CRM and contact management, centralised conversations, email newsletters, social media scheduling, review and reputation requests, offer landing pages, website live chat and document signing. Clinics moving to Patient Pulse commonly retire a mailing-list tool, a social scheduler, a review tool and an e-signature subscription, and replace them with one login.",
  },
  {
    question: "How fast does Patient Pulse respond to a new enquiry?",
    answer:
      "Automatically, within minutes, day or night. Every enquiry from Google, Facebook, your website or any other source triggers a response without anyone at the clinic needing to act, so the first impression is instant even when every practitioner is in a treatment room.",
  },
  {
    question: "Does Patient Pulse integrate with my clinic booking software?",
    answer:
      "Yes. Patient Pulse integrates with Cliniko, and we can connect other practice management and booking systems as part of your setup. Patients can book straight from the conversation they are already having with your clinic, so a reply becomes an appointment without a game of phone tag. As part of your free clinic audit we confirm exactly how it connects to your current setup.",
  },
  {
    question: "Can my reception team use Patient Pulse?",
    answer:
      "Yes. Your reception or admin staff get their own logins and work the same inbox and pipeline you do, so they can answer enquiries, move leads between stages and book patients in. Nothing depends on one person's mobile phone.",
  },
  {
    question: "Do I keep my patient data and pipelines if I stop working with Clinic Evo?",
    answer:
      "Yes. Your lead pipelines, nurture sequences and patient database belong to your clinic, not to us. If you ever stop working with Clinic Evo, Patient Pulse and everything in it stays with you.",
  },
  {
    question: "Is Patient Pulse compliant for UK healthcare clinics?",
    answer:
      "Patient Pulse is built specifically for UK osteopaths, physiotherapists and chiropractors, with the consent, messaging and data handling expectations of regulated MSK practice in mind, rather than a generic sales CRM.",
  },
  {
    question: "Can Patient Pulse reactivate patients who haven't been seen in months?",
    answer:
      "Yes. Lapsed patients are contacted automatically at 3, 6 and 12 months with messaging designed to bring them back before they choose a different clinic. This is one of the fastest ways most clinics recover revenue from people already in their database.",
  },
];

export default function PatientPulsePage() {
  return (
    <>
      <ServiceSchema
        name="Patient Pulse"
        description="Managed clinic CRM and patient communication system for UK MSK clinics. Centralised enquiries and conversations, lead pipelines, automatic follow-up, reviews, newsletters, social scheduling and lapsed-patient reactivation in one platform."
        url="/patient-pulse/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="The system underneath everything"
        heading={
          <>
            Patient Pulse: clinic CRM, patient messaging and{" "}
            <em className="not-italic text-[var(--color-accent)]">
              {/* nowrap so the line never breaks at the hyphen in "follow-up" */}
              <span className="whitespace-nowrap">follow-up</span> in one system
            </em>
          </>
        }
        subtext="One place to manage everything that happens between your marketing and a booked patient. Every enquiry, conversation, review request and lapsed patient, in one system built for MSK clinics."
        bullets={[
          "Every channel in one team inbox",
          "Replies automatically within minutes",
          "Replaces most of your current tool stack",
        ]}
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "See what it does", href: "#features" }}
        breadcrumbs={crumbs}
        rightPanelWidth="0.8fr"
        bulletsBelow
        rightPanel={
          <LaptopFrame label="Illustrative view of the Patient Pulse lead pipeline. Patient details are never shown.">
            <PulsePipelineBoard bare />
          </LaptopFrame>
        }
      />

      {/* Where it sits: four channels in, two outcomes out. No product link —
          this is the product page. */}
      <ConnectedJourney showPulseLink={false} />

      {/* The stack it replaces — the single most persuasive argument on the page. */}
      <StackReplacementTable />

      {/* The full capability architecture, in four stages of the patient journey. */}
      <PulseCapabilityTabs />

      {/* Channel and tool recognition. */}
      <IntegrationStrip />

      {/* Why speed is one of the reasons it works — no longer the whole page. */}
      <section className="py-20 lg:py-24 bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="max-w-3xl">
              <p className="eyebrow mb-5">Why speed decides it</p>
              <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
                Most clinics don&apos;t have a lead problem. They have a follow-up problem.
              </h2>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                Every new enquiry, whether it arrives through Google at 2pm or a Facebook
                ad at 11pm, needs a response within minutes. The first clinic to respond
                wins the appointment, regardless of which clinic is better. That is the
                single least fair rule in private healthcare marketing, and it is the one
                a busy clinic loses by default.
              </p>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                Replies happen manually, during business hours, when somebody remembers.
                Patient Pulse removes that dependency entirely. The system responds
                automatically, immediately, every time, whether you are in a treatment
                room, at lunch, or completely offline.
              </p>
              <p className="text-body mb-5 text-[var(--color-muted)]">
                What you get out of it is a consistent first impression ahead of every
                competitor who replies hours later, and a database that keeps working
                long after the ad spend stops.
              </p>
              <p className="text-body mb-6 text-[var(--color-muted)]">
                Danny Morgan, who co-founded Clinic Evo, is a practising osteopath and
                founded Bodyfunction Clinic in Angel. That is the practice Clinic
                Evo&apos;s method was built and tested in before it was offered to
                anyone else.
              </p>
              <ArrowLink href="/case-studies/bodyfunction-clinic/">
                See what the clinic&apos;s numbers did
              </ArrowLink>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 lg:py-24 grain bg-[var(--color-paper)]">
        <div className="cx-main">
          <StatBand
            bare
            eyebrow="What the system does on its own"
            heading="The clinic that replies first books the patient."
            body="Patient Pulse closes the gap between enquiry and response, then keeps every lead and lapsed patient in contact automatically."
            stats={[
              { value: "Minutes", label: "Automatic first response to every new enquiry, day or night" },
              { value: "12 mo", label: "Nurture sequences that keep not-yet-ready leads warm" },
              { value: "3, 6, 12", label: "Month intervals at which lapsed patients are reactivated" },
            ]}
          />
        </div>
      </section>

      {/* A proof band sat here carrying a quote about recovering 34 lapsed
          patients in the first month. It was not a real client quote and the
          figure is not evidenced in Search Console, Ahrefs or anywhere else —
          neither tool can see bookings or reactivations. Removed rather than
          swapped for an unrelated SEO number, which would be the same problem
          wearing a different hat. Restore a band here once Patient Pulse has
          reactivation figures from a live clinic that will let us publish them.
      */}

      {/* Why it's different — kept, but tightened from five paragraphs to three. */}
      <section className="py-20 lg:py-24 bg-[var(--color-paper)]">
        <div className="cx-main max-w-3xl">
          <FadeUp>
            <p className="eyebrow mb-5">Who it is for</p>
            <h2 className="text-h2 mb-6 leading-tight text-[var(--color-ink)]">
              Why it works the way a clinic works
            </h2>
            <p className="text-body mb-5 text-[var(--color-muted)]">
              Most CRM platforms are built for sales teams. Patient Pulse is built for
              MSK clinics, by practitioners who understand the treatment arc, the patient
              relationship, and the specific compliance requirements of UK osteopaths,
              physiotherapists and chiropractors. It only carries the parts a clinic
              actually needs, configured the way clinics actually work.
            </p>
            <p className="text-body mb-8 text-[var(--color-muted)]">
              And it is yours. When you stop working with Clinic Evo, Patient Pulse
              stays: your lead pipelines, your nurture sequences, your patient database.
              They belong to your clinic, not to us.
            </p>
            <div className="flex flex-col gap-5 sm:flex-row">
              <ArrowLink href="/osteopath-marketing/">Marketing for Osteopaths</ArrowLink>
              <ArrowLink href="/physiotherapy-marketing/">Physiotherapy Marketing</ArrowLink>
              <ArrowLink href="/chiropractic-marketing/">Chiropractic Marketing</ArrowLink>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-[var(--color-paper)] !pb-10">
        <div className="cx-main">
          <div className="mx-auto max-w-3xl">
            <FadeUp>
              <div className="mb-10 text-center">
                <p className="eyebrow mb-5">FAQ</p>
                <h2 className="text-h2 text-[var(--color-ink)]">Patient Pulse FAQs</h2>
              </div>
            </FadeUp>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] px-6 py-2 shadow-[var(--shadow-card)] sm:px-10">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        id="closing-cta"
        heading="See Patient Pulse working for your clinic"
        subheading="Book a free clinic audit. We'll walk you through Patient Pulse live on the call and show you exactly where your current follow-up system is losing bookings."
      />

      <StickyMobileCta hideNearId="closing-cta" />
    </>
  );
}

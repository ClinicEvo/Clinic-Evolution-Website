import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Breadcrumb from "@/components/sections/Breadcrumb";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import ArrowLink from "@/components/ui/ArrowLink";
import PageHero from "@/components/sections/PageHero";
import StatBand from "@/components/sections/StatBand";


export const metadata = buildMetadata({
  title: "About Clinic Evo | Clinic Marketing Agency for MSK Clinics",
  description:
    "Learn why Clinic Evo helps UK osteopaths, physiotherapists and chiropractors grow with specialist clinic marketing, SEO, websites, Google Ads and patient reactivation.",
  path: "/about/",
});

const faqs = [
  {
    question: "Is Clinic Evo only for MSK clinics?",
    answer:
      "Clinic Evo is focused on MSK and private healthcare clinics, especially osteopaths, physiotherapists and chiropractors. This focus allows the strategy, copy, SEO and website work to be more specific than a general marketing agency.",
  },
  {
    question: "Why does clinical understanding matter in clinic marketing?",
    answer:
      "Clinical understanding helps the marketing reflect how patients actually search, compare and book care. It also makes service pages, condition content, booking journeys and follow-up systems more relevant to real clinic behaviour.",
  },
  {
    question: "Does Clinic Evo build websites as well as marketing strategy?",
    answer:
      "Yes. Clinic Evo can support clinic website design, SEO, Google Ads and patient reactivation. The aim is to connect the website, visibility, enquiry journey and follow-up process into one clearer growth system.",
  },
  {
    question: "Can Clinic Evo help if my clinic already has a website?",
    answer:
      "Yes. Many clinics already have a website but need clearer messaging, stronger SEO, better service pages, improved booking journeys or more effective follow-up systems. The audit will identify whether your current website can be improved or whether a rebuild would be more effective.",
  },
];

const crumbs = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="About Clinic Evo"
        heading={<>A clinic growth partner built around <em className="not-italic text-[var(--color-accent)]">how patients actually choose care</em></>}
        subtext="Clinic Evo helps UK osteopaths, physiotherapists and chiropractors grow with clearer websites, stronger SEO, better patient journeys, targeted Google Ads and smarter patient reactivation, built around the realities of private clinic growth, not generic marketing theory."
        bullets={[
          "MSK and private healthcare clinics only",
          "Strategy and delivery, not just advice",
          "Grounded in real clinic patient journey experience",
        ]}
        primaryCta={{ label: "Get a free clinic audit", href: "/free-clinic-audit/" }}
        secondaryCta={{ label: "Explore our services", href: "/#services" }}
        breadcrumbs={crumbs}
      />

      {/* Why Clinic Evo exists */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="max-w-3xl">
            <FadeUp>
              <p className="eyebrow mb-5">Purpose</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Why Clinic Evo exists
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                Most private clinics do not have a traffic problem alone.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                They often have a clarity problem, a trust problem, a local
                visibility problem, a follow-up problem, or a website that does
                not explain their value properly.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                A patient may search for help with back pain, shoulder pain,
                sciatica, sports injury, rehabilitation, posture, headaches or
                ongoing discomfort. Before they book, they need to feel that the
                clinic understands their problem, offers the right kind of care,
                looks trustworthy, and makes the next step easy.
              </p>
              <p className="text-body text-[var(--color-muted)] font-semibold">
                Clinic Evo exists to help clinics build that full digital journey properly.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <FadeUp>
              <div className="lg:col-span-5">
                <p className="eyebrow mb-5">Founders</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Founded by clinicians who understand both sides of clinic growth
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Clinic Evo was founded by Danny and Simon, two osteopaths who
                  met while studying for their integrated Master&apos;s in
                  Osteopathy.
                </p>
                <p className="text-body text-[var(--color-muted)]">
                  They lived together during university and built their first
                  business, Worldly Aromas, while completing the demands of a
                  four-year clinical degree. That experience shaped the way they
                  think about business: practical, resilient and built around
                  real-world pressure.
                </p>
              </div>
            </FadeUp>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <FadeUp delay={0.1}>
                <div className="card-surface p-8">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[var(--color-border)] flex-shrink-0">
                      <Image
                        src="/images/danny-morgan-angel-clinic.png"
                        alt="Danny Morgan, co-founder of Clinic Evo and founder of Bodyfunction Clinic"
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h3 className="text-h3 text-[var(--color-ink)] leading-tight">
                        Danny Morgan
                      </h3>
                      <p className="text-label text-[var(--color-accent)] mt-1">
                        Co-founder · Osteopath · Founder of Bodyfunction Clinic
                      </p>
                    </div>
                  </div>
                  <p className="text-body text-[var(--color-muted)]">
                    Danny went on to found Bodyfunction Clinic, where he still
                    practises today. Through building and running a successful MSK
                    clinic, he learned what actually affects growth in private
                    healthcare: local visibility, patient trust, enquiry handling,
                    follow-up, diary management and the systems behind the patient
                    journey.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="card-surface p-8">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[var(--color-border)] flex-shrink-0">
                      <Image
                        src="/images/Simon-Smith.png"
                        alt="Simon Smith, co-founder of Clinic Evo and founder of Neometa"
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h3 className="text-h3 text-[var(--color-ink)] leading-tight">
                        Simon Smith
                      </h3>
                      <p className="text-label text-[var(--color-accent)] mt-1">
                        Co-founder · Osteopath · Founder of Neometa
                      </p>
                    </div>
                  </div>
                  <p className="text-body text-[var(--color-muted)]">
                    Simon went on to found Neometa, a web design, SEO and digital
                    marketing agency. He has worked with start-ups and established
                    companies, supporting them with website strategy, search
                    visibility, business coaching, AI automation and digital
                    growth systems.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="border-l-2 border-[var(--color-accent)] pl-6 py-1">
                  <p className="text-body-lg text-[var(--color-charcoal)]">
                    Together, they built Clinic Evo to combine clinical
                    understanding with the digital systems clinics need to get
                    found, convert enquiries, retain patients and grow with more
                    structure.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Built for MSK clinics */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">Focus</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Built for osteopaths, physiotherapists and chiropractors
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Clinic Evo focuses on MSK and private healthcare clinics,
                  especially osteopaths, physiotherapists and chiropractors.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  That focus matters. A clinic website is not the same as a
                  trades website, an eCommerce store or a general professional
                  services site. Patients are often in pain, uncertain about what
                  treatment they need, and comparing several options before they
                  make contact.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Your marketing needs to reflect that.
                </p>
                <p className="text-body text-[var(--color-muted)]">
                  Clinic Evo helps clinics communicate clearly, appear for the
                  right searches, and turn more of the right visitors into
                  enquiries and bookings.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-8">
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

      {/* Clinical understanding */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <p className="eyebrow mb-5">The difference</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                The difference is clinical understanding
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                Clinic growth depends on more than ranking a page or running an advert.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                It depends on understanding how patients move from symptoms to
                trust, from trust to enquiry, and from enquiry to booking.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                That includes the way patients compare clinics, the importance of
                practitioner credibility, the role of reviews, the wording of
                service pages, the structure of condition content, the booking
                journey, and the follow-up process after treatment.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                Because Clinic Evo is built with direct understanding of osteopathy,
                clinic websites and patient behaviour, the work is more specific
                from the start.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-6">
                {[
                  {
                    title: "Patient journey understanding",
                    desc: "Messaging shaped around how people search, compare and book private treatment.",
                  },
                  {
                    title: "Clinic-specific SEO",
                    desc: "Search strategies built around services, symptoms, local visibility and practitioner trust.",
                  },
                  {
                    title: "Conversion-aware websites",
                    desc: "Website design focused on clarity, confidence and bookings.",
                  },
                  {
                    title: "Smarter follow-up systems",
                    desc: "Patient reactivation and recall processes designed to support retention without increasing admin pressure.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="text-body-lg font-semibold text-[var(--color-ink)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-body text-[var(--color-muted)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What Clinic Evo improves */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-4">Services</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                What Clinic Evo helps clinics improve
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Clinic Evo brings together the main digital growth levers a
                private clinic needs, then connects them into a simple, practical
                system.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "SEO for clinics",
                desc: "Improve visibility for the searches your ideal patients are already making.",
                href: "/seo-for-clinics/",
              },
              {
                title: "Clinic website design",
                desc: "Create a clearer, faster and more trustworthy website that helps patients take action.",
                href: "/website-design-for-clinics/",
              },
              {
                title: "Google Ads for clinics",
                desc: "Reach people who are actively searching for private treatment and ready to enquire.",
                href: "/google-ads-for-clinics/",
              },
              {
                title: "AI patient reactivation",
                desc: "Reconnect with past patients and support rebooking with smarter recall systems.",
                href: "/ai-integration/",
              },
            ].map((s, i) => (
              <FadeUp key={s.href} delay={i * 0.05}>
                <div className="card-surface p-6 h-full flex flex-col group">
                  <h3 className="text-h3 text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">{s.title}</h3>
                  <p className="text-body text-[var(--color-muted)] mb-4 flex-1">{s.desc}</p>
                  <ArrowLink href={s.href}>Learn more</ArrowLink>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Proof band */}
      <StatBand
        eyebrow="One connected system"
        heading="Not scattered tactics. A single system built for clinic growth."
        body="Visibility, website, enquiries, calls and follow-up are designed to work as one, so each stage strengthens the next instead of competing for attention."
        stats={[
          { value: "5", label: "Connected growth stages, from first search to rebooking" },
          { value: "3", label: "MSK disciplines we specialise in: osteo, physio, chiro" },
          { value: "1", label: "Single system in place of disconnected tools and agencies" },
        ]}
      />

      {/* Proof */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">Evidence</p>
                <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                  Proof matters more than promises
                </h2>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  Clinic Evo&apos;s approach is shaped by real clinic growth work,
                  including the digital strategy and patient journey work behind
                  Bodyfunction Clinic.
                </p>
                <p className="text-body text-[var(--color-muted)] mb-5">
                  That means the advice is grounded in practical clinic realities:
                  what patients need to see, what Google needs to understand, what
                  clinic owners can realistically maintain, and what makes someone
                  more likely to enquire.
                </p>
                <p className="text-body text-[var(--color-muted)]">
                  The goal is not to make a clinic look busy online. The goal is
                  to build a digital presence that supports real enquiries,
                  bookings and patient relationships.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-8">
                <p className="text-label text-[var(--color-accent)] mb-5">Case study</p>
                <h3 className="text-h3 text-[var(--color-ink)] mb-4">
                  Bodyfunction Clinic
                </h3>
                <p className="text-body text-[var(--color-muted)] mb-6">
                  See how clear website structure, SEO-led service pages, and
                  stronger patient journeys improved enquiries for a multi-discipline
                  clinic in London.
                </p>
                <ArrowLink href="/case-studies/bodyfunction-clinic/">
                  Read the Bodyfunction Clinic case study
                </ArrowLink>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Working style */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <p className="eyebrow mb-5">Approach</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                Clear strategy, practical delivery, no generic playbook
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                Clinic Evo is designed for clinic owners who want a practical
                growth partner rather than vague marketing advice. Or if you need
                strategic oversight before committing to a larger build, the{" "}
                <a href="/healthcare-marketing-consultant/" className="text-[var(--color-accent)] hover:underline">healthcare marketing consultant</a>{" "}
                route offers direct guidance.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                The process starts with understanding the clinic, the services,
                the local market, the current website, the patient journey and the
                strongest opportunities. From there, recommendations are prioritised
                around what is most likely to improve visibility, enquiries and
                retention.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                That might mean rewriting service pages, improving local SEO,
                building a clearer website, setting up Google Ads, creating a
                patient reactivation workflow, or strengthening the whole digital
                foundation.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-surface p-8">
                <p className="text-label text-[var(--color-accent)] mb-6">Core principles</p>
                <div className="flex flex-col gap-6">
                  {[
                    {
                      title: "Specific before broad",
                      desc: "Every recommendation should connect to the clinic, the patient journey or the growth goal.",
                    },
                    {
                      title: "Clarity before cleverness",
                      desc: "Patients should understand what you do, who you help and how to book.",
                    },
                    {
                      title: "Evidence before guesswork",
                      desc: "SEO, ads and conversion decisions should be based on search behaviour, competitor gaps and real enquiry data.",
                    },
                    {
                      title: "Retention as well as acquisition",
                      desc: "Growth is not only about new patients. It is also about rebooking, recall and long-term patient relationships.",
                    },
                  ].map((p, i) => (
                    <div key={p.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent)] font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-body-lg font-semibold text-[var(--color-ink)] mb-1">
                          {p.title}
                        </h3>
                        <p className="text-body-sm text-[var(--color-muted)]">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
                <p className="eyebrow mb-5">FAQ</p>
                <h2 className="text-h2 text-[var(--color-ink)]">
                  About Clinic Evo FAQs
                </h2>
              </div>
            </FadeUp>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        heading="Start with a free clinic audit"
        subheading="The easiest way to see where Clinic Evo can help is to start with a free clinic marketing audit. We will review your website, SEO, local visibility, patient journey and conversion points, then highlight the opportunities most likely to improve enquiries and bookings."
        primaryLabel="Get a free clinic audit"
        primaryHref="/free-clinic-audit/"
      />
    </>
  );
}

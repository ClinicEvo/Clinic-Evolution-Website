import { buildMetadata } from "@/lib/metadata";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import PageHero from "@/components/sections/PageHero";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CallCostCalculator from "@/components/sections/CallCostCalculator";
import ScenarioCards from "@/components/sections/ScenarioCards";
import CallHandlingChain from "@/components/sections/CallHandlingChain";
import CallDeskPanel from "@/components/sections/mockups/CallDeskPanel";
import LaptopFrame from "@/components/sections/mockups/LaptopFrame";
import ProofBand from "@/components/sections/ProofBand";
import Image from "next/image";
import StickyMobileCta from "@/components/ui/StickyMobileCta";

export const metadata = buildMetadata({
  title: "Call Handling & Booking for MSK Clinics",
  description:
    "Clinic Evo answers every patient call, calls back your marketing leads, and books patients straight into your diary. No voicemail. No lead left waiting.",
  path: "/call-centre/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Call Handling & Booking", href: "/call-centre/" },
];

const steps = [
  {
    number: 1,
    title: "A patient calls, or a lead comes in",
    description:
      "Inbound calls land on whichever lines you choose to divert, including the ones that ring out while you are with a patient. New enquiries from your ads and website forms arrive at the same time.",
  },
  {
    number: 2,
    title: "A trained handler answers, or calls them back",
    description:
      "Every inbound call is answered by a handler briefed on your services, practitioners and availability, never left to voicemail. Leads from your marketing get a fast outbound call back, while their intent is still high.",
  },
  {
    number: 3,
    title: "The patient is booked into your diary",
    description:
      "Because handlers know your live availability and booking process, they book the patient straight into your diary, synced to avoid double-bookings, rather than simply taking a message.",
  },
  {
    number: 4,
    title: "Everything is logged into Patient Pulse",
    description:
      "Every call, callback and new lead is captured in one place. Bookings are confirmed, and anyone not yet booked enters the same fast follow-up as your online enquiries, including out-of-hours.",
  },
];

// What a clinic gets here that a switchboard cannot give them. Each row is a
// thing the service does, set against what happens without it — the
// differentiation the 10 Aug review asked for on every service page.
const comparisons = [
  {
    theirs: "Reads a script that could belong to any business",
    ours: "Briefed on your services, your practitioners and your prices",
  },
  {
    theirs: "Takes a message for someone at the clinic to action later",
    ours: "Books the patient into your live diary while they are on the phone",
  },
  {
    theirs: "Leaves the leads your ads generated for you to chase",
    ours: "Rings those leads back the same day, while their intent is high",
  },
  {
    theirs: "Emails you a note that joins the pile",
    ours: "Logs every call in Patient Pulse alongside your online enquiries",
  },
];

const faqs = [
  {
    question: "Who answers the calls?",
    answer:
      "Trained handlers who have been briefed specifically on your clinic, its services, practitioners, availability and booking process. It is not a generic answering service reading from a script that could belong to any business.",
  },
  {
    question: "Does call handling cover out-of-hours calls?",
    answer:
      "Yes. Patients often call at inconvenient times, evenings, weekends and during busy clinic hours. Out-of-hours coverage means enquiries that arrive outside your core hours are captured and followed up rather than lost to voicemail.",
  },
  {
    question: "How does call handling connect to the rest of my system?",
    answer:
      "Every call is logged directly into Patient Pulse, our lead management system. Missed calls, enquiries and new leads are tracked and entered into the same automatic follow-up as your online enquiries, so phone and digital enquiries are handled the same way.",
  },
  {
    question: "Do you call back the leads my marketing generates?",
    answer:
      "Yes. As well as answering inbound calls, handlers make outbound calls to the new enquiries your ads and website forms generate, reaching them quickly while their intent is high, rather than leaving them waiting for someone at the clinic to find a spare moment.",
  },
  {
    question: "Will handlers be able to book patients in?",
    answer:
      "Yes. Handlers are briefed on your booking process and work from your live availability, so they book patients straight into your diary, synced to avoid double-bookings, rather than simply taking a message for someone else to action later.",
  },
  {
    question: "What does a missed call actually cost my clinic?",
    answer:
      "A single missed patient is often £300–500 in immediate treatment revenue and £1,500+ across a full course and future visits. Most callers who reach voicemail simply call the next clinic, so across a year the lost revenue is significant and largely preventable.",
  },
];

export default function CallCentrePage() {
  return (
    <>
      <ServiceSchema
        name="Call Handling & Booking for MSK Clinics"
        description="Inbound and outbound call handling for UK osteopaths, physiotherapists and chiropractors. Every patient call answered, every marketing lead called back, and patients booked straight into your diary."
        url="/call-centre/"
      />
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema items={faqs} />

      <PageHero
        badge="Inbound & outbound"
        heading={
          <>
            Call handling for clinics.{" "}
            <em className="not-italic text-[var(--color-accent)]">
              Booked, not just answered.
            </em>
          </>
        }
        subtext="A patient who rings while you are mid-treatment and hears a voicemail is a £300–500 opportunity, gone. So is a lead from your ads that nobody calls back. Clinic Evo answers your calls, rings those leads back, and books patients straight into your diary."
        bullets={[
          "Every inbound call answered by a trained handler",
          "Leads from your ads and forms called back while intent is high",
          "Patients booked straight into your diary, not left as a message",
        ]}
        primaryCta={{ label: "Book a free clinic audit", href: "/free-clinic-audit/" }}
        breadcrumbs={crumbs}
        rightPanelWidth="0.85fr"
        bulletsBelow
        rightPanel={
          <LaptopFrame label="Illustrative view of a clinic's call desk. Patient details are never shown.">
            <CallDeskPanel bare />
          </LaptopFrame>
        }
      />

      {/* The cost of a missed call */}
      <section className="section bg-[var(--color-paper)]">
        <div className="cx-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <p className="eyebrow mb-5">The cost of a missed call</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-6 leading-tight">
                A missed call is not an inconvenience. It is lost revenue.
              </h2>
              <p className="text-body text-[var(--color-muted)] mb-5">
                A typical MSK patient who calls a clinic is usually ready to book. They
                have already decided they need treatment. They are not researching,
                they are choosing which clinic to attend. When your phone rings out,
                they call the next clinic on the list.
              </p>
              <p className="text-body text-[var(--color-muted)] mb-5">
                A single missed patient represents £300–500 in immediate treatment
                revenue, and potentially £1,500+ across a full treatment course and
                future return visits. Across a year of missed calls, the total is
                significant, and entirely preventable.
              </p>
              <p className="text-body text-[var(--color-muted)]">
                The same is true of a lead your ads worked hard to generate: if
                nobody rings it back quickly, it goes cold. Clinic Evo's call
                handling sits alongside{" "}
                <a href="/patient-pulse/" className="text-[var(--color-accent-text)] hover:underline">Patient Pulse</a>{" "}
                to ensure nothing falls through the gap, whether the enquiry comes by
                phone, form, or ad, inbound or called back.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <CallCostCalculator />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Where patients leak away — moved here from the homepage, per the
          10 Aug review: the homepage should lead with how we bring patients in,
          and this detail belongs with call handling and booking. */}
      <section id="where-patients-leak" className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <p className="eyebrow mb-4">Where patients leak away</p>
            <h2 className="text-h2 text-balance text-[var(--color-ink)] max-w-[680px] mb-6">
              Most MSK clinics are leaking patients long before treatment begins.
            </h2>
            <p className="text-body-lg text-[var(--color-charcoal)] max-w-[620px] mb-14">
              Four quiet leaks. None of them show up in the accounts, so most clinics
              never see them, they just feel the empty diary.
            </p>
          </FadeUp>

          <ScenarioCards />

          <FadeUp>
            <p className="text-h3 mt-16 max-w-3xl text-balance font-medium text-[var(--color-ink)]">
              Every one of these is an enquiry you already paid to create.{" "}
              <span className="text-[var(--color-accent)]">
                Answering the phone and calling leads back closes all four.
              </span>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Proof, high on the page — Danny asked for an element of social proof
          near the top of every service page, not buried at the bottom.
          There is no client quote to use: nobody is live on call handling yet.
          What is genuine is the founder's own words, so this is Danny from the
          10 Aug call, tidied for punctuation only, and framed as why the service
          exists rather than as an endorsement of it. Replace it the moment he
          gives us a line about the phone specifically. */}
      <ProofBand
        eyebrow="Why we built this"
        quote="Ads are one part of the process. It has to be an integrated system: what happens after that person provides their details, the follow-up process, and going into your marketing ecosystem. That is just as important."
        authorName="Danny Morgan"
        authorRole="Co-founder, Clinic Evo — and a practising osteopath"
        image="/images/danny-morgan-angel-clinic.png"
        imageAlt="Danny Morgan, co-founder of Clinic Evo"
        ctaLabel="Get a free clinic audit"
        ctaHref="/free-clinic-audit/"
      />

      {/* How it works.
          The left column used to hold a heading and one paragraph restating the
          steps beside it — the content-left/content-right shape Danny objected
          to on the 10 Aug call ("that's not making me want to read any of it").
          The heading now runs full width and the column holds the photograph
          instead, so the section shows the person taking the call rather than
          describing them twice. */}
      <section id="how-it-works" className="section grain bg-[var(--color-paper)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-14 max-w-2xl">
              <p className="eyebrow mb-4">How it works</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-5 leading-tight">
                A handler who knows your clinic
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Every call follows the same path, from the moment a patient dials to
                the moment they are booked and followed up.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <FadeUp>
              {/* Sticky so the face stays with the steps on a long scroll. */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] lg:sticky lg:top-28 lg:aspect-[2/3]">
                <Image
                  src="/images/call-handler-headset.jpg"
                  alt="A call handler taking a patient call on a headset"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </FadeUp>
            <div>
              <ProcessSteps steps={steps} />
            </div>
          </div>
        </div>
      </section>

      {/* What separates this from an answering service.
          A StatBand sat here restating the £300–500 and £1,500+ figures that the
          hero, the section above and the FAQ all already carry. The 10 Aug review
          asked for the differentiation instead of another wall of numbers, so the
          dark band now does the job the page actually needs: what a clinic gets
          here that a switchboard cannot give them. */}
      <section className="section grain bg-[var(--color-paper)]">
        <div className="cx-main">
          <FadeUp>
            <div
              className="overflow-hidden bg-[var(--color-ink)] text-white"
              style={{ borderRadius: "var(--radius-panel)" }}
            >
              <div className="p-9 md:p-12 lg:p-14">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  Not an answering service
                </p>
                <h2 className="text-h2 mt-4 max-w-2xl text-white">
                  Your handler books the appointment
                </h2>

                {/* Column labels earn their place at md+, where the two halves
                    sit side by side. On a phone the rows stack and the struck
                    grey line against the ticked white one says it on its own. */}
                <div className="mt-11 hidden gap-10 md:grid md:grid-cols-2">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/35">
                    A generic answering service
                  </p>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    A Clinic Evo handler
                  </p>
                </div>

                <ul className="mt-5 divide-y divide-white/10 border-t border-white/10 max-md:mt-11">
                  {comparisons.map((row) => (
                    <li
                      key={row.ours}
                      className="grid gap-2 py-5 md:grid-cols-2 md:gap-10"
                    >
                      {/* white/55 is the floor here: below it the struck line
                          drops under 4.5:1 on the ink ground. */}
                      <span className="text-[0.95rem] leading-snug text-white/55 line-through decoration-white/30">
                        {row.theirs}
                      </span>
                      <span className="flex items-start gap-3 text-[0.95rem] leading-snug text-white">
                        <svg
                          className="mt-[3px] flex-shrink-0 text-[var(--color-accent)]"
                          width="15"
                          height="15"
                          viewBox="0 0 14 14"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2.5 7.5l3 3 6-6.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{row.ours}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* A testimonial sat here praising the results of call handling. It was
          not a real client quote, and on the 10 Aug call Danny confirmed this
          service is not one we offer yet — so there is nobody who could have
          given it. Removed outright. Nothing goes back here until the service
          is live and a clinic using it will go on record.
      */}

      {/* Part of the system.
          This was three sentences in a narrow column ending in one text link.
          The 10 Aug review asked repeatedly for the services to be shown working
          as one thing rather than described one at a time, so the chain is drawn
          with the step this page sells marked as one link in it. */}
      <section className="section grain bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <p className="eyebrow mb-5">Part of the whole chain</p>
            <h2 className="text-h2 text-balance text-[var(--color-ink)] max-w-[640px] mb-6 leading-tight">
              We handle what happens after the call too
            </h2>
            <p className="text-body-lg text-[var(--color-charcoal)] max-w-[620px] mb-14">
              A call is only worth answering if something brought the patient to
              your number, and only worth taking if the booking sticks and the
              follow-up happens. Every step below is something Clinic Evo runs.
            </p>
          </FadeUp>

          <CallHandlingChain />
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
                  Call handling FAQs
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
        id="closing-cta"
        heading="Stop losing patients to unanswered calls"
        subheading="Book a free clinic audit. We'll identify exactly how many enquiries your clinic is likely losing to unanswered calls, and what a full system would do about it."
      />

      <StickyMobileCta hideNearId="closing-cta" />
    </>
  );
}

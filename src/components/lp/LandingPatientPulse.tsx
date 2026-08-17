import Image from "next/image";
import AppWindow from "@/components/sections/mockups/AppWindow";
import FadeUp from "@/components/ui/FadeUp";
import { brandHex, brandMarks, type BrandSlug } from "@/components/icons/BrandIcons";
import LpCtaButton from "./LpCtaButton";

/**
 * Framed to match /patient-pulse/, which was rebuilt around four stages of the
 * patient journey. The old six-card icon grid is gone for the reason the 10 Aug
 * review gave: a box with a generic glyph "just screams preset website".
 *
 * The only marks here are real brand logos in their official colours, which is
 * the entire point of the channel row — recognition. They sit on white pills
 * rather than directly on the navy, because two of the official colours (TikTok,
 * Google's blue) disappear against a dark background.
 *
 * Every capability listed was confirmed live in a Patient Pulse sub-account.
 * Nothing aspirational belongs in this file.
 */

interface Channel {
  brand?: BrandSlug;
  label: string;
  /** Bitmap mark for brands simple-icons does not carry. Its opaque white
   *  background is seamless on the --color-paper pill, not on the navy behind. */
  imageSrc?: string;
}

const CHANNELS: Channel[] = [
  { brand: "google", label: "Google Business Profile" },
  { brand: "facebook", label: "Facebook" },
  { brand: "messenger", label: "Messenger" },
  { brand: "instagram", label: "Instagram" },
  { brand: "tiktok", label: "TikTok" },
  { brand: "whatsapp", label: "WhatsApp" },
  { label: "Cliniko", imageSrc: "/images/cliniko.png" },
];

const STAGES = [
  {
    stage: "Capture",
    heading: "Every enquiry lands in one place",
    points: [
      "Website forms, social messages, WhatsApp and SMS in a single inbox",
      "Missed-call text-back, so an unanswered phone does not lose the patient",
      "Every conversation attached to a patient record, not a personal phone",
    ],
    span: "lg:col-span-4",
  },
  {
    stage: "Convert",
    heading: "Nothing waits for someone to remember",
    points: [
      "Automatic first reply within minutes, day or night",
      "Pipelines that show what needs a call today",
      "Patients book straight into Cliniko from the conversation",
    ],
    span: "lg:col-span-2",
  },
  {
    stage: "Retain",
    heading: "Stay in front of the patients you have",
    points: [
      "Google review requests the same day treatment happens",
      "12-month nurture for leads who are not ready yet",
      "Reporting on which source produced booked patients",
    ],
    span: "lg:col-span-3",
  },
  {
    stage: "Reactivate",
    heading: "Bring back the patients who drifted",
    points: [
      "Recall at 3, 6 and 12 months, before they choose someone else",
      "Offers written for people who already trust your clinic",
      "Replies land back in the same team inbox",
    ],
    span: "lg:col-span-3",
  },
];

function ChannelPill({ item }: { item: Channel }) {
  const Mark = item.brand ? brandMarks[item.brand] : null;

  return (
    <li className="flex flex-shrink-0 items-center gap-2.5 rounded-[var(--radius-btn)] bg-[var(--color-paper)] px-4 py-2.5 shadow-[var(--shadow-sm)]">
      {Mark && item.brand ? (
        <Mark
          className="h-4 w-4 flex-shrink-0"
          // The brand's own hex, not a design-system token, so inline.
          style={{ color: brandHex[item.brand] }}
        />
      ) : null}
      {item.imageSrc ? (
        <Image
          src={item.imageSrc}
          // Decorative: the label beside it already names the brand.
          alt=""
          width={243}
          height={208}
          sizes="20px"
          // Height matched to the SVG marks, width left to its own aspect ratio.
          className="h-4 w-auto flex-shrink-0"
        />
      ) : null}
      <span className="whitespace-nowrap font-display text-[0.8rem] font-semibold text-[var(--color-charcoal)]">
        {item.label}
      </span>
    </li>
  );
}

export default function LandingPatientPulse() {
  return (
    <section className="grain bg-[var(--color-ink)] py-24 sm:py-28 lg:py-32">
      <div className="cx-main">
        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
          <FadeUp>
            <div>
              {/* The eyebrow names this as a layer of the system rather than a
                  product with its own section, and reuses the stage name from
                  LandingSystem so a skimmer can place it. Without it, the logo
                  at the top of a new navy section reads as "and now, a second
                  thing to buy". */}
              <p className="eyebrow mb-5">Inside the system — answer and book</p>
              <Image
                src="/images/patientpulse_darklogo.png"
                alt="Patient Pulse"
                width={3116}
                height={440}
                sizes="200px"
                className="mb-7 h-auto w-[190px]"
              />
              {/* The page's one deliberate "not X, Y" construction. It earns its
                  place here because the contrast is the actual argument. */}
              <h2 className="text-h2 text-white">
                Most clinics do not have a lead problem. They have a{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  follow-up problem
                </em>
                .
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="text-body-lg max-w-[52ch] text-white/70">
              Marketing brings people to your door. Patient Pulse is what happens
              next, from the first message to the patient who comes back a year
              later. It is included in the system and run for you, rather than
              handed over as one more subscription to manage.
            </p>
          </FadeUp>
        </div>

        {/* Channel recognition. Real marks, official colours. */}
        <FadeUp delay={0.1}>
          <div className="mb-14 rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-6 sm:p-7">
            <p className="text-label mb-5 text-white/45">
              The channels your patients already use, in one inbox
            </p>
            <ul role="list" className="flex flex-wrap gap-2.5">
              {CHANNELS.map((item) => (
                <ChannelPill key={item.label} item={item} />
              ))}
            </ul>
          </div>
        </FadeUp>

        {/* Real product, not an illustration. */}
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <FadeUp delay={0.06}>
            <AppWindow
              view="Conversations"
              src="/images/patient-pulse/pp-conversations.png"
              alt="The Patient Pulse team inbox, showing enquiries from website forms and social channels alongside an automated SMS reply and a Cliniko booking link"
              ratio="1917/918"
              footnote="A real Patient Pulse account. Patient names have been replaced and contact details removed."
            />
          </FadeUp>

          <FadeUp delay={0.12}>
            <div>
              <h3 className="text-h3 mb-4 text-white">
                One screen your reception team actually works from
              </h3>
              <p className="text-body text-white/60">
                Every enquiry, missed call and conversation flows into the same
                inbox, so nothing sits unanswered in a personal phone and nothing
                falls through the gap between appointments. Your pipelines,
                sequences and patient data belong to your clinic — not to us — and
                it is built specifically for MSK clinics rather than adapted from a
                generic sales CRM.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Four stages of the patient journey, as on the product page. */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {STAGES.map((item, index) => (
            <FadeUp
              key={item.stage}
              delay={index * 0.05}
              className={`${item.span} flex`}
            >
              <div className="flex w-full flex-col rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-white/20">
                <p className="text-label mb-3 text-[var(--color-accent)]">
                  {item.stage}
                </p>
                <h3 className="text-h4 mb-4 text-white">{item.heading}</h3>
                <ul role="list" className="flex flex-col gap-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-accent)]"
                      />
                      <span className="text-body-sm text-white/60">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <FadeUp delay={0.1}>
            <blockquote className="border-l-2 border-[var(--color-accent)] pl-6 sm:pl-8">
              <p className="text-h3 mb-4 text-white">
                &ldquo;Before Patient Pulse, enquiries sat in my personal phone until
                I had a spare minute between patients. I knew I was losing bookings
                to whichever clinic replied first, not whichever clinic was better.
                I built it because no CRM I looked at understood that a clinic
                cannot just get back to leads at the end of the day.&rdquo;
              </p>
              <footer className="text-body-sm font-semibold text-white/50">
                Danny Morgan, founder of Clinic Evo
              </footer>
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.14}>
            <div className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-body mb-6 text-white/70">
                See where enquiries are currently going cold in your clinic, and
                what it would take to fix it.
              </p>
              <LpCtaButton placement="mid-patient-pulse" className="w-full sm:w-auto" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

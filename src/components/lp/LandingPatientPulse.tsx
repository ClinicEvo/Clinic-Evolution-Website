import Image from "next/image";
import AppWindow from "@/components/sections/mockups/AppWindow";
import FadeUp from "@/components/ui/FadeUp";
import { brandHex, brandMarks, type BrandSlug } from "@/components/icons/BrandIcons";
import { STACK_SUMMARY } from "@/components/sections/StackReplacementTable";
import LpCtaButton from "./LpCtaButton";

/**
 * Two sections, not one, and a different argument.
 *
 * WHAT WAS WRONG WITH THE ARGUMENT. The heading ladder here used to contain six
 * headings and five of them described a message being answered. Read back as
 * prose — which is what `npm run scan` does — it decoded as an auto-responder
 * with a shared inbox. Nothing in it said patient database, CRM, one login, or
 * "replaces what you already pay for", and nothing said the rest of the system
 * lands here. The eyebrow made it worse by filing Patient Pulse as layer four of
 * five ("answer and book") while the section's own last two cards — same-day
 * review requests, 12-month nurture, recall at 3/6/12 months — are layer five,
 * "Bring back", in LP_SYSTEM_LAYERS. The page contradicted itself two screens
 * apart, and it ran the wrong way: it made the product smaller than the section
 * describing it.
 *
 * Note the claim this file deliberately does NOT make: that all five layers
 * "report into" Patient Pulse. Layers four and five ARE Patient Pulse — lp.ts
 * says so — so they do not report into it, they run on it. What is true, and
 * what the h2 says, is that the output of the layers above becomes a booked
 * patient in here.
 *
 * WHAT WAS WRONG WITH THE BAND. Measured at 390px, this section was 4,464px —
 * 5.3 phone screens, 23% of the whole page, and 4.6x LandingProblem. The two
 * navy sections are not adjacent (5,401px of Founder and System sit between
 * them), so the fatigue was never a sequencing problem: it was six full-width
 * blocks stacked on one ground with nothing marking progress. It is split here.
 * Navy keeps the identity beat — logo, headline, channels, the real product
 * screenshot — and everything that asks the reader to compare or evaluate moves
 * to --color-surface, where a price argument is legible and the eye gets a rest.
 *
 * The channel pills stay on the navy half deliberately. They are white pills
 * because two of the official brand colours (TikTok's black, Google's blue)
 * disappear against a dark ground; on a light ground they would need rebuilding,
 * and the recognition beat belongs with the identity beat anyway.
 *
 * Every capability named here was confirmed live in a Patient Pulse sub-account.
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

/**
 * The four stages, with the stage name folded into the heading.
 *
 * The stage name used to be a `<p className="text-label">` above an `<h3>`, so
 * the four words that give the section its skeleton were not headings — and a
 * screen reader's heading navigation skipped them. One heading each now.
 *
 * The old 4/2/3/3 six-column grid is gone. The spans tiled correctly, but all
 * four cards carry the same content volume, so giving Convert two columns beside
 * Capture's four made it half the width and markedly taller for no reason a
 * reader could infer — and the narrowest column landed on Convert, the booking
 * beat nearest the conversion goal. It was also only asymmetric at lg: at sm it
 * was an even 2x2, so a tablet reader saw the intended equality and a laptop
 * reader saw an apparently random one.
 */
const STAGES = [
  {
    stage: "Capture",
    heading: "every enquiry lands in one place",
    points: [
      "Website forms, social messages, WhatsApp and SMS in a single inbox",
      "Missed-call text-back, so an unanswered phone does not lose the patient",
      "Every conversation attached to a patient record, not a personal phone",
    ],
  },
  {
    stage: "Convert",
    heading: "nothing waits for someone to remember",
    points: [
      "Automatic first reply within minutes, day or night",
      "Pipelines that show what needs a call today",
      "Patients book straight into Cliniko from the conversation",
    ],
  },
  {
    stage: "Retain",
    heading: "stay in front of the patients you already have",
    points: [
      "Google review requests the same day treatment happens",
      "12-month nurture for leads who are not ready yet",
      "Reporting on which source produced booked patients",
    ],
  },
  {
    stage: "Reactivate",
    heading: "bring back the patients who drifted",
    points: [
      "Recall at 3, 6 and 12 months, before they choose someone else",
      "Offers written for people who already trust your clinic",
      "Replies land back in the same team inbox",
    ],
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
    <>
      {/* ── The identity beat. Navy, and now the only navy here. ───────────── */}
      <section className="grain bg-[var(--color-ink)] py-24 sm:py-28 lg:py-32">
        <div className="cx-main">
          <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
            <FadeUp>
              <div>
                {/* Was "Inside the system — answer and book", which filed the
                    product as one of five layers while the section went on to
                    describe two of them. This is the product page's own framing
                    [src: patient-pulse PageHero badge, "The system underneath
                    everything"].

                    .eyebrow-invert because .eyebrow hard-codes
                    --color-accent-text, 3.32:1 on navy, an AA failure. */}
                <p className="eyebrow eyebrow-invert mb-5">
                  The system underneath all of it
                </p>
                <Image
                  src="/images/patientpulse_darklogo.png"
                  alt="Patient Pulse"
                  width={3116}
                  height={440}
                  sizes="200px"
                  className="mb-7 h-auto w-[190px]"
                />
                {/* Was "Every enquiry answered in minutes, whatever time it
                    arrives" — true, and one capability out of many, presented as
                    the whole product. Speed is now a clause in the lede. This
                    says what the thing IS: the place the rest of the system
                    turns into a booking. */}
                <h2 className="text-h2 text-white">
                  Where your website, your ads and your phone calls{" "}
                  <em className="not-italic text-[var(--color-accent)]">
                    become booked patients
                  </em>
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <p className="text-body-lg max-w-[52ch] text-white/70">
                Patient Pulse is our own software, and it is where the rest of the
                system lands: your patient database, one team inbox for every
                channel, the pipeline your reception team works, the appointment
                reminders, the review requests and the recall. Replying within
                minutes is one thing it does, not the whole of it. It is included
                and we run it for you — one less subscription on your desk.
              </p>
            </FadeUp>
          </div>

          {/* Channel recognition. Real marks, official colours. */}
          <FadeUp delay={0.1}>
            <div className="mb-14 rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-6 sm:p-7">
              <p className="text-label mb-5 text-white/60">
                What arrives — every channel, in one inbox
              </p>
              <ul role="list" className="flex flex-wrap gap-2.5">
                {CHANNELS.map((item) => (
                  <ChannelPill key={item.label} item={item} />
                ))}
              </ul>
              <p className="text-body-sm mt-5 text-white/60">
                Plus your website forms, live chat, SMS, email and missed calls,
                all landing in the same place.
              </p>
            </div>
          </FadeUp>

          {/* Real product, not an illustration. */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
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
                <p className="text-body text-white/70">
                  Your pipelines, sequences and patient data belong to your
                  clinic, not to us, and it was built for MSK clinics from the
                  ground up, not adapted from a sales CRM.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Everything that asks the reader to evaluate. Light ground. ─────── */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-paper)] py-24 sm:py-28 lg:py-32">
        <div className="cx-main">
          {/* Two columns. As a lone max-w-[46ch] block this heading wrapped to
              five lines, four of them coral — the accent carrying most of the
              section's largest text, which is exactly the "everything is coral
              so nothing reads as the action" failure the art direction warns
              about — and it left the right half of the row empty. */}
          <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
            <FadeUp>
              <div>
                <p className="eyebrow mb-5">What it does</p>
                <h3 className="text-h2 text-[var(--color-ink)]">
                  Four jobs it runs for you, from{" "}
                  <em className="not-italic text-[var(--color-accent)]">
                    first message to rebooked patient
                  </em>
                </h3>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <p className="text-body-lg max-w-[46ch] text-[var(--color-muted)]">
                You are not buying four tools. It is one system, and your
                reception team works all four of these from the same screen, with
                their own login.
              </p>
            </FadeUp>
          </div>

          {/* Even 2x2. See the STAGES note above for why the old 4/2/3/3 went. */}
          <ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {STAGES.map((item, index) => (
              <FadeUp key={item.stage} delay={index * 0.05} className="flex">
                <li className="flex w-full flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7">
                  {/* Stage name inside the heading, so the four words that give
                      this section its skeleton are actually headings. */}
                  <h4 className="text-h4 mb-4 text-[var(--color-ink)]">
                    <span className="text-[var(--color-accent-text)]">
                      {item.stage}
                    </span>
                    {" — "}
                    {item.heading}
                  </h4>
                  <ul role="list" className="flex flex-col gap-2.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-accent)]"
                        />
                        <span className="text-body-sm text-[var(--color-muted)]">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              </FadeUp>
            ))}
          </ul>

          {/*
            The stack argument, compressed.

            StackReplacementTable's own header calls this the most persuasive
            argument on the product page, and the landing pages carried none of
            it — on the page where a cold, price-sceptical visitor decides in
            seconds. Figures are imported from that table rather than restated,
            so they cannot drift, and the basis travels with them: the quote-only
            categories are excluded from the total, which means a real separate
            stack costs MORE than the figure shown, not less. That sentence is
            what makes a comparative price claim honest, so it is not trimmable.
          */}
          <FadeUp delay={0.24}>
            <div className="mt-14 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-9">
              <div className="grid grid-cols-1 gap-9 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
                <div>
                  <p className="eyebrow mb-5">What it replaces</p>
                  <h4 className="text-h3 mb-4 text-[var(--color-ink)]">
                    You are probably already paying for most of this
                  </h4>
                  <p className="text-body max-w-[46ch] text-[var(--color-muted)]">
                    A mailing list here, a booking link there, a review tool
                    someone set up two years ago, and four apps open just to
                    answer messages. Patient Pulse covers the same ground in one
                    place, with your patient database underneath all of it.
                  </p>
                </div>

                <dl className="m-0 flex flex-col justify-center gap-5">
                  <div className="flex items-baseline gap-4 border-b border-[var(--color-border)] pb-5">
                    <dt className="order-2 text-body-sm m-0 max-w-[22ch] text-[var(--color-muted)]">
                      jobs a clinic usually buys as separate subscriptions
                    </dt>
                    <dd className="order-1 m-0 font-display text-4xl font-semibold leading-none tracking-tight tabular-nums text-[var(--color-accent-text)]">
                      {STACK_SUMMARY.jobs}
                    </dd>
                  </div>
                  <div className="flex items-baseline gap-4 border-b border-[var(--color-border)] pb-5">
                    <dt className="order-2 text-body-sm m-0 max-w-[22ch] text-[var(--color-muted)]">
                      a month to buy them one by one, before VAT
                    </dt>
                    <dd className="order-1 m-0 font-display text-4xl font-semibold leading-none tracking-tight tabular-nums text-[var(--color-accent-text)]">
                      £{STACK_SUMMARY.total}+
                    </dd>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <dt className="order-2 text-body-sm m-0 max-w-[22ch] text-[var(--color-muted)]">
                      login, included in the system we run for you
                    </dt>
                    <dd className="order-1 m-0 font-display text-4xl font-semibold leading-none tracking-tight tabular-nums text-[var(--color-accent-text)]">
                      1
                    </dd>
                  </div>
                </dl>
              </div>

              <p className="mt-8 max-w-[70ch] border-t border-[var(--color-border)] pt-6 text-[13px] leading-relaxed text-[var(--color-muted)]">
                Three staff logins, checked August 2026, excluding VAT.{" "}
                {STACK_SUMMARY.quoteOnly} of the {STACK_SUMMARY.jobs} categories
                are quote-only and left out, so a separate stack costs more than
                this, not less.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <FadeUp delay={0.1}>
              <blockquote className="border-l-2 border-[var(--color-accent)] pl-6 sm:pl-8">
                <p className="text-h4 mb-4 max-w-[52ch] font-normal text-[var(--color-ink)]">
                  &ldquo;Before Patient Pulse, enquiries sat in my personal phone
                  until I had a spare minute between patients. I knew I was losing
                  bookings to whichever clinic replied first, not whichever clinic
                  was better. I built it because no CRM I looked at understood that
                  a clinic cannot just get back to leads at the end of the
                  day.&rdquo;
                </p>
                <footer className="text-body-sm font-semibold text-[var(--color-muted)]">
                  Danny Morgan, founder of Clinic Evo
                </footer>
              </blockquote>
            </FadeUp>

            <FadeUp delay={0.14}>
              <div className="card-surface p-7">
                <p className="text-body mb-6 text-[var(--color-charcoal)]">
                  The free audit shows you where enquiries are going cold in your
                  clinic now, and what it would take to fix it.
                </p>
                <LpCtaButton
                  placement="mid-patient-pulse"
                  className="w-full sm:w-auto"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}

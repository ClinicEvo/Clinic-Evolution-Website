import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import FadeUp from "@/components/ui/FadeUp";
import { GoogleColorMark } from "@/components/icons/GoogleColorMark";

/*
 * The chain a paid click has to survive to become a booked patient.
 *
 * "Clicks are only useful if the booking journey works" was three paragraphs of
 * prose in a max-w-3xl column with the right half of the section empty. The
 * argument is a sequence, and a sequence draws. It also does the job the 10 Aug
 * brief asked for twice — connect Ads to the website and to Patient Pulse
 * without turning this page into a description of every other service — and it
 * puts the platform marks on the page that Danny kept asking for.
 *
 * The drop-out notes are the point. Each one is a place a clinic pays for the click
 * and loses the patient anyway, which is why the section exists at all.
 *
 * Built from layout rather than an SVG so it reflows to a phone, and so the
 * Patient Pulse and Cliniko marks are real files rather than traced shapes.
 */

interface Step {
  title: ReactNode;
  detail: string;
  /** Where a clinic typically loses the patient at this step. */
  dropOut?: string;
  /** Marker content: a platform mark where one applies, a numeral otherwise. */
  mark?: ReactNode;
  href?: string;
}

const steps: Step[] = [
  {
    title: "Someone searches, in pain, at 9pm",
    detail:
      "“osteopath near me”, “back pain clinic”, “sciatica treatment”. High intent, and a decision made in minutes.",
    mark: <GoogleColorMark className="h-[1.15rem] w-[1.15rem]" />,
  },
  {
    title: "Your ad answers that exact search",
    detail:
      "The service, the area and the next step, matched to what they typed. Not a general clinic message.",
    dropOut: "Broad keywords answer searches you never wanted to pay for.",
  },
  {
    title: "They land on a page built to convert",
    detail:
      "Relevant to the ad they clicked, quick to load, clear on price, location and how to book.",
    dropOut: "A homepage or a thin service page is where most of the budget goes.",
    href: "/website-design-for-clinics/",
  },
  {
    title: "The enquiry arrives",
    detail: "A call, a form or a chat message, tracked back to the campaign that produced it.",
    dropOut: "Untracked enquiries make the whole campaign impossible to judge.",
  },
  {
    title: (
      <Image
        src="/images/patientpulse_logo.png"
        alt="Patient Pulse"
        width={3116}
        height={440}
        sizes="180px"
        className="h-[1.05rem] w-auto"
      />
    ),
    detail:
      "Replies within minutes, day or night, and keeps the enquiry on a board until it is booked or closed.",
    dropOut: "An enquiry answered tomorrow morning has usually booked somewhere else.",
    href: "/patient-pulse/",
  },
  {
    title: "Booked into the diary",
    detail:
      "Straight into the practice management system, then followed up for the review and the recall.",
    mark: (
      <Image
        src="/images/cliniko.png"
        alt=""
        width={243}
        height={208}
        sizes="24px"
        className="h-[1.15rem] w-auto"
      />
    ),
  },
];

export default function AdsToBookingChain() {
  return (
    <div className="rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)] sm:p-8">
      <ol className="relative">
        {steps.map((step, i) => {
          const last = i === steps.length - 1;
          const body = (
            <>
              <div className="font-display text-[0.95rem] font-semibold leading-snug text-[var(--color-ink)]">
                {step.title}
              </div>
              <p className="mt-1.5 text-[0.82rem] leading-relaxed text-[var(--color-muted)]">
                {step.detail}
              </p>
              {step.dropOut && (
                <p className="mt-2.5 flex items-start gap-2 text-[0.78rem] leading-snug text-[var(--color-charcoal)]">
                  <svg
                    className="mt-[3px] flex-shrink-0 text-[var(--color-accent)]"
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 2v8.5M8 13.5v.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>{step.dropOut}</span>
                </p>
              )}
            </>
          );

          return (
            <li key={i} className={`relative flex gap-4 ${last ? "" : "pb-7"}`}>
              {/* Rail. Runs from under this marker to the next one. */}
              {!last && (
                <span
                  className="absolute left-[17px] top-[38px] bottom-0 w-px bg-[var(--color-border)]"
                  aria-hidden="true"
                />
              )}

              <span className="relative z-10 flex h-[35px] w-[35px] flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-paper)]">
                {step.mark ?? (
                  <span className="font-display text-[0.7rem] font-semibold tabular-nums text-[var(--color-muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
              </span>

              <FadeUp delay={i * 0.05} className="min-w-0 flex-1 pt-1">
                {step.href ? (
                  <Link
                    href={step.href}
                    className="group block rounded-[var(--radius-sm)] transition-opacity hover:opacity-80"
                  >
                    {body}
                    <span className="mt-2 inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[var(--color-accent-text)]">
                      More on this
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path
                          d="M3 7h8M7 3l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-150 group-hover:translate-x-0.5"
                        />
                      </svg>
                    </span>
                  </Link>
                ) : (
                  body
                )}
              </FadeUp>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

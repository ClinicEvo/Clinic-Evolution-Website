"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { FacebookLogo, InstagramLogo, TiktokLogo } from "@/components/brand/PlatformLogos";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Advert → Lead → Patient Pulse → Follow-up → Booking.
 *
 * This replaces PatientFunnel, which showed the same five-stage shape carrying
 * numbers nobody could source: 12,540 visitors, 1,248 enquiries, 214 bookings,
 * and four rows of "industry average vs ours" (18% enquiry rate, 34% booking
 * rate, 82% show-up, 91% retention). They were invented, they were presented as
 * our results under a heading reading "the chain in numbers", and the 10 Aug
 * review named exactly that habit — "generic keystones that the AI has invented
 * and random figures and numbers".
 *
 * The stages survive because the argument is the sequence, not the arithmetic.
 * This is also the journey the revision brief asks this page to show: the reason
 * buying ads from Clinic Evo differs from buying ads in isolation.
 *
 * Patient Pulse is the ink panel because it is the stage a clinic does not get
 * anywhere else, not because it is the middle one.
 */

const stages: Array<{
  label: string;
  detail: string;
  platforms?: boolean;
  pulse?: boolean;
}> = [
  {
    label: "The advert",
    detail:
      "One condition, one audience, one offer, cut native to the platform it runs on.",
    platforms: true,
  },
  {
    label: "The lead",
    detail: "A form or a message from someone who has just put their hand up.",
  },
  {
    label: "Patient Pulse",
    detail:
      "Replies within minutes, day or night, and holds the enquiry on a board until it is booked or closed.",
    pulse: true,
  },
  {
    label: "The follow-up",
    detail:
      "Chased until they book or say no. Most enquiries take more than one contact.",
  },
  {
    label: "The booking",
    detail: "Into the diary, tracked back to the campaign that paid for it.",
  },
];

function Arrow({ vertical = false }: { vertical?: boolean }) {
  return vertical ? (
    <svg
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      className="mx-auto my-1.5 flex-shrink-0 text-[var(--color-muted-light)]"
      aria-hidden="true"
    >
      <path
        d="M6 0v16M2 12l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="22"
      height="12"
      viewBox="0 0 22 12"
      fill="none"
      className="mx-2 flex-shrink-0 self-center text-[var(--color-muted-light)]"
      aria-hidden="true"
    >
      <path
        d="M0 6h18M14 2l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CampaignJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reduce = useReducedMotion();

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row lg:items-stretch"
    >
      {stages.map((stage, i) => (
        <div key={stage.label} className="contents">
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 12 }}
            animate={inView || reduce ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.09, ease }}
            className={`flex min-w-0 flex-1 flex-col rounded-[var(--radius-card)] border px-5 py-5 ${
              stage.pulse
                ? "border-transparent bg-[var(--color-ink)]"
                : "border-[var(--color-border)] bg-[var(--color-paper)]"
            }`}
          >
            {/* Platform lockup on the advert, the product mark on Patient Pulse.
                Both are real logos rather than a drawn stand-in, which is what
                Danny asked for twice: something recognisable on the page. */}
            {stage.platforms && (
              <span className="mb-3 flex items-center gap-1.5">
                <FacebookLogo size={19} />
                <InstagramLogo size={19} />
                <TiktokLogo size={19} />
              </span>
            )}
            {/* The product mark stands in for the stage name rather than sitting
                above a repeat of it, the same way AdsToBookingChain uses it. */}
            {stage.pulse ? (
              <Image
                src="/images/patientpulse_darklogo.png"
                alt="Patient Pulse"
                width={3116}
                height={440}
                sizes="150px"
                className="h-[1.05rem] w-auto"
              />
            ) : (
              <p className="font-display text-[0.95rem] font-semibold leading-snug text-[var(--color-ink)]">
                {stage.label}
              </p>
            )}
            <p
              className={`mt-2 text-[0.82rem] leading-relaxed ${
                stage.pulse ? "text-white/70" : "text-[var(--color-muted)]"
              }`}
            >
              {stage.detail}
            </p>
          </motion.div>

          {i < stages.length - 1 && (
            <>
              <span className="hidden lg:block">
                <Arrow />
              </span>
              <span className="lg:hidden">
                <Arrow vertical />
              </span>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

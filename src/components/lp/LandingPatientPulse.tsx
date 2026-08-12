import Image from "next/image";
import { ChatCircleDotsIcon } from "@phosphor-icons/react/dist/ssr/ChatCircleDots";
import { KanbanIcon } from "@phosphor-icons/react/dist/ssr/Kanban";
import { TrayIcon } from "@phosphor-icons/react/dist/ssr/Tray";
import { ClockCountdownIcon } from "@phosphor-icons/react/dist/ssr/ClockCountdown";
import { StarIcon } from "@phosphor-icons/react/dist/ssr/Star";
import { ArrowsClockwiseIcon } from "@phosphor-icons/react/dist/ssr/ArrowsClockwise";
import FadeUp from "@/components/ui/FadeUp";
import LpCtaButton from "./LpCtaButton";

const CAPABILITIES = [
  {
    icon: ChatCircleDotsIcon,
    title: "Automatic SMS within minutes",
    body: "Every enquiry gets a reply within minutes, day or night — from Google, Facebook, your website or any other source.",
    span: "lg:col-span-4",
  },
  {
    icon: KanbanIcon,
    title: "Structured lead pipelines",
    body: "Every enquiry tracked from first contact through to booked appointment.",
    span: "lg:col-span-2",
  },
  {
    icon: TrayIcon,
    title: "One inbox",
    body: "WhatsApp, SMS, email, Instagram and Facebook in a single place. No more switching between apps.",
    span: "lg:col-span-2",
  },
  {
    icon: ClockCountdownIcon,
    title: "12-month nurture sequences",
    body: "Automated follow-up for the leads who are not ready to book yet, so they hear from you when they are.",
    span: "lg:col-span-4",
  },
  {
    icon: StarIcon,
    title: "Same-day review requests",
    body: "Timed for the moment patients are most likely to actually respond.",
    span: "lg:col-span-3",
  },
  {
    icon: ArrowsClockwiseIcon,
    title: "Lapsed patient reactivation",
    body: "At 3, 6 and 12 months — so past patients hear from you before they choose someone else.",
    span: "lg:col-span-3",
  },
];

export default function LandingPatientPulse() {
  return (
    <section className="grain bg-[var(--color-ink)] py-24 sm:py-28 lg:py-32">
      <div className="cx-main">
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
          <FadeUp>
            <div>
              <Image
                src="/images/patientpulse_darklogo.png"
                alt="Patient Pulse"
                width={3116}
                height={440}
                sizes="200px"
                className="mb-7 h-auto w-[190px]"
              />
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
              Every enquiry, missed call and conversation flows into Patient Pulse,
              Clinic Evo&apos;s built-in lead management system — so nothing sits
              unanswered in a personal phone, and nothing falls through the gap
              between appointments.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {CAPABILITIES.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeUp
                key={item.title}
                delay={index * 0.05}
                className={`${item.span} flex`}
              >
                <div className="flex w-full flex-col rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-white/20">
                  <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-h4 mb-2 text-white">{item.title}</h3>
                  <p className="text-body-sm text-white/60">{item.body}</p>
                </div>
              </FadeUp>
            );
          })}
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
                Your pipelines, sequences and patient data belong to your clinic —
                not to us. Built specifically for MSK clinics, not adapted from a
                generic sales CRM.
              </p>
              <LpCtaButton placement="mid-patient-pulse" className="w-full sm:w-auto" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

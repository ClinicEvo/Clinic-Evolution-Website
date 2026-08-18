import Image from "next/image";
import AppWindow from "@/components/sections/mockups/AppWindow";
import FadeUp from "@/components/ui/FadeUp";
import LpCtaButton from "./LpCtaButton";

const JOBS = [
  {
    title: "Capture",
    body: "Website forms, social messages, WhatsApp, SMS and missed calls in one inbox.",
  },
  {
    title: "Convert",
    body: "Fast first replies, clear follow-up and a direct route into Cliniko.",
  },
  {
    title: "Retain",
    body: "Review requests and follow-up run without another tool to remember.",
  },
  {
    title: "Reactivate",
    body: "Recall at 3, 6 and 12 months brings past patients back into view.",
  },
];

/**
 * Patient Pulse is one part of the clinic-growth system, not a second product
 * page inside the landing page. Keep the explanation to one real screen and
 * four jobs so a paid visitor can understand its role without losing the main
 * audit journey.
 */
export default function LandingPatientPulse() {
  return (
    <section className="grain border-b border-white/10 bg-[var(--color-ink)] py-24 sm:py-28 lg:py-32">
      <div className="cx-main">
        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
          <FadeUp>
            <div>
              <p className="eyebrow eyebrow-invert mb-5">Patient Pulse</p>
              <Image
                src="/images/patientpulse_darklogo.png"
                alt="Patient Pulse"
                width={3116}
                height={440}
                sizes="190px"
                className="mb-7 h-auto w-[190px]"
              />
              <h2 className="text-h2 text-white">
                Where enquiries become{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  booked patients
                </em>
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="text-body-lg max-w-[50ch] text-white/70">
              Patient Pulse brings every enquiry, reply and follow-up into one
              place. It is included in the system and run for you.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <FadeUp delay={0.08}>
            <AppWindow
              view="Conversations"
              src="/images/patient-pulse/pp-conversations.png"
              alt="The Patient Pulse team inbox showing website and social enquiries, an automated SMS reply and a Cliniko booking link"
              ratio="1917/918"
              footnote="A real Patient Pulse account. Patient names and contact details have been replaced."
            />
          </FadeUp>

          <div>
            <ol role="list" className="flex flex-col border-t border-white/10">
              {JOBS.map((job, index) => (
                <FadeUp key={job.title} delay={0.1 + index * 0.05}>
                  <li className="grid grid-cols-[2rem_1fr] gap-4 border-b border-white/10 py-5">
                    <span
                      aria-hidden="true"
                      className="pt-1 text-xs font-semibold tabular-nums text-[var(--color-accent)]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-h4 mb-1 text-white">{job.title}</h3>
                      <p className="text-body-sm text-white/65">{job.body}</p>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ol>

            <FadeUp delay={0.32}>
              <div className="mt-8">
                <LpCtaButton placement="mid-patient-pulse" size="md" />
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

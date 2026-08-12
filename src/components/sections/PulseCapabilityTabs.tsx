"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import PatientPulseMockup from "@/components/sections/PatientPulseMockup";
import AppWindow from "@/components/sections/mockups/AppWindow";

/**
 * The capability architecture for Patient Pulse.
 *
 * Replaces the six-icon card grid this page used to carry. The 10 Aug review
 * was blunt about those: a box with a generic icon "just screams preset
 * website". Grouping the same substance into four stages of the patient journey
 * does three things the grid could not — it gets every real capability onto the
 * page, it attaches each one to a consequence a clinic owner recognises, and it
 * mirrors the site's own story (get found, convert, follow up, grow).
 *
 * Every capability listed here was confirmed as live in a Patient Pulse
 * sub-account. Nothing aspirational belongs in this file.
 *
 * All four panels stay in the DOM rather than mounting on click: this page earns
 * its traffic organically and the copy needs to be crawlable.
 */

interface Capability {
  label: string;
  detail: string;
}

interface Tab {
  id: string;
  nav: string;
  heading: string;
  lede: string;
  capabilities: Capability[];
  /** A real product screenshot framed as an app window, or the designed
   *  event-feed panel. */
  media:
    | { kind: "image"; view: string; src: string; alt: string; ratio: string }
    | { kind: "mockup" };
  footnote?: { text: string; linkLabel: string; href: string };
}

const tabs: Tab[] = [
  {
    id: "capture",
    nav: "Capture",
    heading: "Every enquiry lands in one place",
    lede: "A patient who messages your Instagram at 9pm, fills in a form on your website, or rings while you are treating someone: all of it arrives in the same inbox, attached to the same patient record.",
    capabilities: [
      { label: "Website forms and live chat", detail: "A question asked at 10pm becomes a tracked enquiry, not a lost visitor" },
      { label: "Facebook and Instagram messages", detail: "Both inboxes flow in without opening either app" },
      { label: "TikTok messages", detail: "The channel most clinics advertise on and then never check" },
      { label: "WhatsApp and SMS", detail: "The two channels patients actually reply on" },
      { label: "Google Business Profile messages", detail: "Enquiries from the map pack, where most local searches end" },
      { label: "Missed-call text-back", detail: "An unanswered phone sends an automatic text instead of losing the patient" },
      { label: "Offer and campaign landing pages", detail: "Built to match the ad the patient just clicked" },
      { label: "Full patient database underneath", detail: "Every conversation attached to a contact record, not a phone" },
    ],
    media: {
      kind: "image",
      view: "Conversations",
      src: "/images/patient-pulse/pp-conversations.png",
      alt: "The Patient Pulse team inbox, showing enquiries from website forms and social channels alongside an automated SMS reply and a Cliniko booking link",
      ratio: "1917/918",
    },
    footnote: {
      text: "Phone enquiries flow in too when Patient Pulse is paired with our",
      linkLabel: "call handling service",
      href: "/call-centre/",
    },
  },
  {
    id: "convert",
    nav: "Convert",
    heading: "Nothing waits for someone to remember",
    lede: "The clinic that replies first books the patient. Patient Pulse answers within minutes automatically, then keeps every enquiry visible on a board until it is either booked or closed.",
    capabilities: [
      { label: "Automatic first reply within minutes", detail: "Day or night, whether or not anyone is at reception" },
      { label: "Two-way inbox across every channel", detail: "Reply by SMS, WhatsApp, email or social from one screen" },
      { label: "Lead pipelines with visible stages", detail: "You can see what needs a call today and what has gone quiet" },
      { label: "AI-assisted replies", detail: "Drafts or sends the first response and moves enquiries along" },
      { label: "Cliniko booking integration", detail: "Patients book straight into the diary from the conversation" },
      { label: "Reception and team access", detail: "Your staff work the same board you do, with their own login" },
      { label: "Document signing", detail: "Consent and intake forms signed before the patient arrives" },
      { label: "Appointment reminders", detail: "Fewer no-shows without anyone chasing" },
    ],
    media: {
      kind: "image",
      view: "Opportunities",
      src: "/images/patient-pulse/pp-opportunities.png",
      alt: "The Patient Pulse opportunities board, showing enquiries moving through call stages to booked appointments with source attribution and values",
      ratio: "1826/876",
    },
  },
  {
    id: "retain",
    nav: "Retain",
    heading: "Stay in front of the patients you already have",
    lede: "Most clinics spend everything on acquisition and nothing on the database they already own. This is the cheapest growth available to you, and it runs on its own.",
    capabilities: [
      { label: "Automatic Google review requests", detail: "Sent the same day treatment happens, when patients actually reply" },
      { label: "Social media planner", detail: "A month of clinic content planned and queued in one sitting" },
      { label: "Email newsletters and campaigns", detail: "Sent to the same database that holds your enquiries" },
      { label: "Segmented patient lists", detail: "Message the right group instead of emailing everyone the same thing" },
      { label: "12-month nurture sequences", detail: "Leads not ready today keep hearing from you, with no manual effort" },
      { label: "Reporting across every channel", detail: "Which source produced booked patients, not just clicks" },
    ],
    media: {
      kind: "image",
      view: "Automations",
      src: "/images/patient-pulse/pp-workflow.png",
      alt: "The Patient Pulse automation builder showing a 52-week nurture workflow with tag triggers, wait steps and scheduled emails",
      ratio: "1913/903",
    },
  },
  {
    id: "reactivate",
    nav: "Reactivate",
    heading: "Bring back the patients who drifted",
    lede: "Every clinic has hundreds of people who came once, got better, and were never contacted again. Reactivation is the fastest revenue most clinics can recover, and almost nobody does it.",
    capabilities: [
      { label: "Recall at 3, 6 and 12 months", detail: "Lapsed patients contacted before they choose somewhere else" },
      { label: "Reactivation campaigns", detail: "Written for people who already know and trust your clinic" },
      { label: "Offer pages for returning patients", detail: "A reason to rebook, not just a reminder that you exist" },
      { label: "Replies land back in the team inbox", detail: "A yes becomes a booking in the same conversation" },
    ],
    media: { kind: "mockup" },
  },
];

export default function PulseCapabilityTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (i: number) => {
    setActive(i);
    tabRefs.current[i]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusTab((active + 1) % tabs.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusTab((active - 1 + tabs.length) % tabs.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(tabs.length - 1);
    }
  };

  return (
    <section
      id="features"
      className="py-20 lg:py-24 grain border-y border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <div className="cx-main">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-4">What Patient Pulse actually does</p>
          <h2 className="text-h2 mb-5 leading-tight text-[var(--color-ink)]">
            Four stages of the patient journey, in one system
          </h2>
          <p className="text-body-lg text-[var(--color-charcoal)]">
            Marketing brings people to your door. Patient Pulse is what happens next,
            from the first message to the patient who comes back a year later.
          </p>
        </div>

        {/* Tab bar — scrolls rather than wrapping on narrow screens. */}
        <div className="-mx-6 mb-10 overflow-x-auto px-6">
          <div
            role="tablist"
            aria-label="Patient Pulse capabilities"
            onKeyDown={onKeyDown}
            className="inline-flex min-w-full gap-1 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-[var(--color-paper)] p-1.5"
          >
            {tabs.map((tab, i) => {
              const selected = i === active;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`pulse-tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`pulse-panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`flex-1 whitespace-nowrap rounded-[var(--radius-sm)] px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
                    selected
                      ? "bg-[var(--color-ink)] text-white"
                      : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {tab.nav}
                </button>
              );
            })}
          </div>
        </div>

        {tabs.map((tab, i) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`pulse-panel-${tab.id}`}
            aria-labelledby={`pulse-tab-${tab.id}`}
            hidden={i !== active}
          >
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
              {/* Copy */}
              <div>
                <h3 className="text-h3 mb-4 leading-tight text-[var(--color-ink)]">
                  {tab.heading}
                </h3>
                <p className="text-body mb-8 leading-relaxed text-[var(--color-muted)]">
                  {tab.lede}
                </p>

                <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {tab.capabilities.map((cap) => (
                    <li key={cap.label} className="flex gap-3">
                      <svg
                        className="mt-1 flex-shrink-0 text-[var(--color-accent)]"
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
                      <span>
                        <span className="block text-[0.9rem] font-semibold leading-snug text-[var(--color-ink)]">
                          {cap.label}
                        </span>
                        <span className="mt-0.5 block text-[0.82rem] leading-relaxed text-[var(--color-muted)]">
                          {cap.detail}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>

                {tab.footnote && (
                  <p className="mt-8 text-[0.85rem] text-[var(--color-muted)]">
                    {tab.footnote.text}{" "}
                    <Link
                      href={tab.footnote.href}
                      className="font-semibold text-[var(--color-accent)] hover:underline"
                    >
                      {tab.footnote.linkLabel}
                    </Link>
                    .
                  </p>
                )}
              </div>

              {/* Media */}
              <div>
                {tab.media.kind === "mockup" ? (
                  <PatientPulseMockup />
                ) : (
                  <AppWindow
                    view={tab.media.view}
                    src={tab.media.src}
                    alt={tab.media.alt}
                    ratio={tab.media.ratio}
                    footnote="A real Patient Pulse account. Patient names have been replaced and contact details removed."
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

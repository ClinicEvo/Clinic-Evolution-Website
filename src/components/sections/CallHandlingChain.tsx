import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

/*
 * Where answering the phone sits in the whole chain.
 *
 * This replaced three sentences of prose in a max-w-3xl column ending in a
 * single text link — the weakest possible treatment for the argument the 10 Aug
 * review kept returning to, that the services are only ever described one at a
 * time and never shown working as one thing.
 *
 * Distinct from ConnectedJourney (four channels converging on Patient Pulse) and
 * from AdsToBookingChain (what a paid click has to survive): this is the linear
 * life of one phone call, with the step this page sells marked as the link in
 * the chain rather than as the whole chain.
 *
 * Built from layout so it runs across on a laptop and down the left on a phone.
 */

interface Node {
  label: string;
  detail: string;
  href?: string;
  /** The step this page is about. Carries the accent; everything else is quiet. */
  current?: boolean;
}

const nodes: Node[] = [
  {
    label: "Marketing makes the phone ring",
    detail: "Search, ads and paid social put your clinic in front of someone in pain.",
    href: "/google-ads-for-clinics/",
  },
  {
    label: "The call is answered",
    detail: "By a handler who knows your services, practitioners and availability. Never voicemail.",
    current: true,
  },
  {
    label: "The patient is booked",
    detail: "Straight into your diary from the call, not left as a message for later.",
  },
  {
    label: "It lands in Patient Pulse",
    detail: "Every call, callback and enquiry in one place, whoever needs to see it.",
    href: "/patient-pulse/",
  },
  {
    label: "They are followed up",
    detail: "Review requested, and a recall when the pain is likely to return.",
    href: "/ai-integration/",
  },
];

export default function CallHandlingChain() {
  return (
    <ol className="flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-5">
      {nodes.map((node, i) => {
        const body = (
          <>
            <span
              className="block font-display text-[0.95rem] font-semibold leading-snug"
              style={{
                color: node.current ? "var(--color-accent-text)" : "var(--color-ink)",
              }}
            >
              {node.label}
            </span>
            <span className="mt-2 block text-[0.82rem] leading-relaxed text-[var(--color-muted)]">
              {node.detail}
            </span>
            {node.href && (
              <span className="mt-2.5 inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[var(--color-accent-text)]">
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
            )}
          </>
        );

        return (
          /* The rail: down the left on a phone, across the top on a laptop.
             One marker sits on the corner where the two meet, so a single
             absolute element serves both directions. */
          <li
            key={node.label}
            className="relative border-l pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-5"
            style={{
              borderColor: node.current
                ? "var(--color-accent)"
                : "var(--color-border)",
            }}
          >
            <span
              className="absolute -left-[4.5px] -top-[4.5px] h-[9px] w-[9px] rounded-full md:-top-[5px]"
              style={{
                background: node.current
                  ? "var(--color-accent)"
                  : "var(--color-muted-light)",
              }}
              aria-hidden="true"
            />
            <FadeUp delay={i * 0.06}>
              <span className="mb-2 block font-display text-[0.7rem] font-semibold tabular-nums text-[var(--color-muted)]/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              {node.href ? (
                <Link
                  href={node.href}
                  className="group block transition-opacity hover:opacity-80"
                >
                  {body}
                </Link>
              ) : (
                body
              )}
            </FadeUp>
          </li>
        );
      })}
    </ol>
  );
}

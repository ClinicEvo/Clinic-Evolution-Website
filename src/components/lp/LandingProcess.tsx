import FadeUp from "@/components/ui/FadeUp";

/**
 * Step one deliberately no longer lists what the audit covers. LandingAudit
 * further down the page lists all five items in full, and a paid visitor reading
 * the same inventory twice within two screens learns nothing the second time —
 * it just reads as a longer page. This section's job is the shape of the
 * engagement; the audit section's job is the audit's contents.
 *
 * The old wording ("where patients are dropping out and what is costing you
 * bookings") also framed the problem as the clinic leaking patients. The
 * argument this site makes is that the parts are not joined up.
 */
const STEPS = [
  {
    label: "Free clinic audit",
    body: "A person goes through your website, your local search presence and any ad account you are running, and comes back with what they found.",
  },
  {
    label: "Scope and plan",
    body: "A written plan in plain English: which layers of the system your clinic needs first, what each one is meant to change, and what it will cost you to run.",
  },
  {
    label: "Build and launch",
    body: "Website, search foundations and campaigns go live together, wired into Patient Pulse and call handling from day one so nothing arrives with no one to answer it.",
  },
  {
    label: "Run and report",
    body: "One team runs all of it and reports monthly on enquiries and bookings, with the ad spend and the cost per enquiry shown next to them.",
  },
];

export default function LandingProcess() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)] py-24 sm:py-28 lg:py-32">
      <div className="cx-main">
        <FadeUp>
          <div className="mb-14 max-w-[42ch]">
            <p className="eyebrow mb-5">How we start</p>
            {/* Was "...and it is free either way". Scanned cold, "either way"
                has no antecedent — the reader has not yet been offered a choice
                to be free of. This says what the four steps below actually are:
                the audit sets the scope, the system is built to it. */}
            <h2 className="text-h2 text-[var(--color-ink)]">
              The audit comes first, then the system is{" "}
              <em className="not-italic text-[var(--color-accent)]">
                scoped to your clinic
              </em>
            </h2>
          </div>
        </FadeUp>

        <ol
          role="list"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {STEPS.map((step, index) => (
            <FadeUp key={step.label} delay={index * 0.07}>
              {/* Stagger the columns so this does not read as an even card row */}
              <li className={index % 2 === 1 ? "lg:mt-12" : ""}>
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] text-[13px] font-bold tabular-nums text-white">
                    {index + 1}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-[var(--color-border)]"
                  />
                </div>
                <h3 className="text-h4 mb-2 text-[var(--color-ink)]">
                  {step.label}
                </h3>
                <p className="text-body-sm text-[var(--color-muted)]">{step.body}</p>
              </li>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}

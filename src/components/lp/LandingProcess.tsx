import FadeUp from "@/components/ui/FadeUp";

const STEPS = [
  {
    label: "Free clinic audit",
    body: "We review your website, Google Business Profile, local rankings and current ad performance to find exactly where you are losing patients.",
  },
  {
    label: "Tailored growth plan",
    body: "A clear, jargon-free plan covering the right channels for your clinic and how we will turn more visitors into booked patients.",
  },
  {
    label: "Campaign launch",
    body: "We build and launch your website, SEO foundations and ad campaigns, connected to Patient Pulse from day one.",
  },
  {
    label: "Ongoing management",
    body: "Plain-English monthly reporting tied to bookings, not vanity metrics — with continuous optimisation.",
  },
];

export default function LandingProcess() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)] py-24 sm:py-28 lg:py-32">
      <div className="cx-main">
        <FadeUp>
          <div className="mb-14 max-w-[42ch]">
            <p className="eyebrow mb-5">How it works</p>
            <h2 className="text-h2 text-[var(--color-ink)]">
              Four steps, starting with a{" "}
              <em className="not-italic text-[var(--color-accent)]">
                free clinic audit
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

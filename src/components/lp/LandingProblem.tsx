import FadeUp from "@/components/ui/FadeUp";

const FAMILIAR_STORY = [
  {
    title: "A retainer, and a report",
    body: "You paid an agency every month and got clicks and impressions back — not booked patients.",
  },
  {
    title: "Leads that went cold",
    body: "Enquiries came in through the website or Facebook, and by the time anyone followed up, they had booked elsewhere.",
  },
  {
    title: "Messaging that never landed",
    body: "The agency did not understand the difference between a patient searching in pain and someone browsing a product.",
  },
  {
    title: "No idea what a patient cost",
    body: "Nobody could tell you what it actually cost to fill one more slot in the diary.",
  },
];

export default function LandingProblem() {
  return (
    <section className="grain bg-[var(--color-ink)] py-24 sm:py-28 lg:py-32">
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <FadeUp>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-5">The real problem</p>
              <h2 className="text-h2 mb-6 text-white">
                You know the feeling of an empty diary
              </h2>
              <p className="text-body-lg mb-5 text-white/70">
                Another quiet afternoon. Slots that should be full sit empty, and
                you are refreshing the booking system hoping something changes.
              </p>
              <p className="text-body-lg text-white/70">
                It is not that patients do not need you. It is that they cannot
                find you — or they enquire, and nobody gets back to them fast
                enough to book.
              </p>
            </div>
          </FadeUp>

          <div>
            <FadeUp delay={0.06}>
              <p className="text-label mb-6 text-white/45">
                If you have tried marketing before, this will sound familiar
              </p>
            </FadeUp>

            <ul role="list" className="flex flex-col gap-px">
              {FAMILIAR_STORY.map((item, index) => (
                <FadeUp key={item.title} delay={0.08 + index * 0.05}>
                  <li className="flex gap-5 border-t border-white/10 py-6 last:border-b">
                    <span className="mt-1 text-body-sm font-semibold tabular-nums text-[var(--color-accent)]">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-h4 mb-1.5 text-white">{item.title}</p>
                      <p className="text-body text-white/60">{item.body}</p>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ul>

            <FadeUp delay={0.3}>
              <p className="text-body-lg mt-10 max-w-[46ch] font-medium text-white">
                That is not a marketing problem you caused. It is a marketing
                industry that was never built for clinics.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

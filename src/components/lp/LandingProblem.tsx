import FadeUp from "@/components/ui/FadeUp";

/**
 * Two fixes here beyond the copy.
 *
 * The four item titles were `<p className="text-h4">` — styled as headings but
 * invisible to the heading ladder and to a screen reader. They are `<h3>` now.
 *
 * And they were marked only with 01–04. A bare ordinal tells a skimmer nothing
 * about what they are counting, which is a documented scan failure, so each row
 * now carries the thing that went wrong as its own short label.
 *
 * On the copy: this section previously ran three "it is not X, it is Y"
 * constructions in a row, and the page ran seven of them altogether. The device
 * is fine once. Used repeatedly it becomes the page's most obvious tic, so the
 * ones here are plain assertions now and the page keeps its one instance for the
 * Patient Pulse heading, where the contrast is the actual point.
 */
const FAMILIAR_STORY = [
  {
    label: "The retainer",
    title: "You paid every month and got a report back",
    body: "Clicks, impressions and sessions went up. The number of people on the treatment table did not, and nobody could explain the gap.",
  },
  {
    label: "The cold lead",
    title: "Enquiries arrived and sat there",
    body: "A form came in on Tuesday evening. Someone saw it Thursday. By then they had booked with whichever clinic replied first.",
  },
  {
    label: "The messaging",
    title: "The agency wrote for browsers, not patients",
    body: "Someone searching at 11pm with acute back pain behaves nothing like someone shopping for a product, and the copy was written for the second one.",
  },
  {
    label: "The maths",
    title: "Nobody could tell you what a patient cost",
    body: "Ask what it costs to fill one more slot in the diary and you got a dashboard instead of a figure.",
  },
];

export default function LandingProblem() {
  return (
    <section className="grain bg-[var(--color-ink)] py-24 sm:py-28 lg:py-32">
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <FadeUp>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-5">Why clinics come to us</p>
              <h2 className="text-h2 mb-6 text-white">
                Marketing that never reached the diary
              </h2>
              <p className="text-body-lg mb-5 text-white/70">
                Patients need what you do. They either cannot find you, or they
                get in touch and wait too long for an answer.
              </p>
              <p className="text-body-lg text-white/70">
                Both are fixable, and neither gets fixed by another traffic
                report. They get fixed by connecting the visibility to the
                follow-up, which is the part almost nobody sells you.
              </p>
            </div>
          </FadeUp>

          <div>
            <FadeUp delay={0.06}>
              <p className="text-label mb-6 text-white/45">
                If you have hired an agency before, some of this will be familiar
              </p>
            </FadeUp>

            <ul role="list" className="flex flex-col gap-px">
              {FAMILIAR_STORY.map((item, index) => (
                <FadeUp key={item.label} delay={0.08 + index * 0.05}>
                  <li className="border-t border-white/10 py-6 last:border-b">
                    <p className="text-label mb-2.5 text-[var(--color-accent)]">
                      {item.label}
                    </p>
                    <h3 className="text-h4 mb-1.5 text-white">{item.title}</h3>
                    <p className="text-body max-w-[54ch] text-white/60">
                      {item.body}
                    </p>
                  </li>
                </FadeUp>
              ))}
            </ul>

            <FadeUp delay={0.3}>
              <p className="text-body-lg mt-10 max-w-[46ch] font-medium text-white">
                None of that is a failure on your part. It is what happens when
                marketing is bought from an industry that has never run a diary.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

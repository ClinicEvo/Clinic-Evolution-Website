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
    label: "The slow reply",
    title: "Enquiries arrived and sat there",
    body: "A form came in on Tuesday evening. Someone saw it Thursday. By then they had booked with whichever clinic replied first.",
  },
  {
    label: "The wording",
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
              {/* Was "Why clinics come to us" — it pointed at us at the exact
                  moment the content is about them. This is the line that was
                  previously demoted to an 11px label in the right column, where
                  it was doing the h2's recognition work at a twentieth of its
                  prominence.

                  .eyebrow-invert because .eyebrow hard-codes
                  --color-accent-text, which is 3.32:1 on navy and fails AA. */}
              <p className="eyebrow eyebrow-invert mb-5">
                If you have hired an agency before
              </p>
              {/* Was "Marketing that never reached the diary" — an abstract noun
                  phrase with no subject and no verb, so nobody was in it: the
                  reader could not tell whether it described them, us or the
                  industry. Every one of the four h3s below it has a subject and
                  a verb, which is why they land and it did not — the section's
                  weakest line was set at 52px and its strongest at 18px.

                  "The diary" is also house vocabulary here: it appears 17 times
                  across these components and is the coral half of the H1 on two
                  of three variants, so a visitor met it in the hero and again
                  two screens later. A word used that often stops being an image,
                  which is most of what reads as agency speak from outside. */}
              <h2 className="text-h2 mb-6 text-white">
                You have paid for marketing that{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  never turned into patients
                </em>
              </h2>
              <p className="text-body-lg mb-5 text-white/70">
                Patients need what you do. They either cannot find you, or they
                get in touch and wait too long for an answer.
              </p>
              {/* Was: "Both are fixable, and neither gets fixed by another
                  traffic report. They get fixed by connecting the visibility to
                  the follow-up, which is the part almost nobody sells you." One
                  abstract verb three times, three nominalisations, and a closing
                  claim about what competitors do or do not sell that no source
                  in this repo supports. */}
              <p className="text-body-lg text-white/70">
                Both are fixable, and a traffic report fixes neither. Being found
                and being answered have to be built as one job, by a team that
                can see both ends of it.
              </p>
            </div>
          </FadeUp>

          <div>
            <ul role="list" className="flex flex-col gap-px">
              {FAMILIAR_STORY.map((item, index) => (
                <FadeUp key={item.label} delay={0.08 + index * 0.05}>
                  <li className="border-t border-white/10 py-6 last:border-b">
                    <p className="text-label mb-2.5 text-[var(--color-accent)]">
                      {item.label}
                    </p>
                    <h3 className="text-h4 mb-1.5 text-white">{item.title}</h3>
                    <p className="text-body max-w-[54ch] text-white/70">
                      {item.body}
                    </p>
                  </li>
                </FadeUp>
              ))}
            </ul>

            {/* Was "...marketing is bought from an industry that has never run
                a diary" — a claim about a whole industry, unsourced, and the
                third use of "diary" inside one section. The replacement is
                sourced to the founder story in the very next section, which is
                what the handoff was always resting on. */}
            <FadeUp delay={0.3}>
              <p className="text-body-lg mt-10 max-w-[48ch] font-medium text-white">
                None of that is a failure on your part. Our founder paid two
                agencies to fix it before he built this one.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

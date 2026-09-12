import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import { type LpVariant } from "@/lib/lp";
import LpCtaButton from "./LpCtaButton";

/**
 * The per-discipline navy photograph band. See LpBand in src/lib/lp.ts for what
 * each variant puts in it and why the three points are questions.
 *
 * The composition is the /graduate/ offer band's, deliberately: same navy
 * ground, same full-bleed photograph, same two-layer scrim, same asymmetric
 * left column. Three things about it are load-bearing and easy to undo by
 * accident.
 *
 * 1. THE RIGHT-HAND COLUMN IS EMPTY AND HAS TO STAY EMPTY. It is the window the
 *    photograph shows through, and it is what fills the other half of an
 *    asymmetric band rather than leaving a hole. Putting a panel there covers
 *    the only reason the section is built this way.
 *
 * 2. THE PHOTOGRAPH IS A BACKGROUND AT lg AND A BAND BELOW IT, and that is the
 *    one place this diverges from /graduate/'s composition. At lg it fills the
 *    section, the flat scrim sits at a quarter and the gradient runs left to
 *    right: solid navy under the text, thinning to 20% over the photograph.
 *    Take that flat layer much above 25% and the result is a navy rectangle
 *    with an expensive JPEG behind it.
 *
 *    Below lg it is a 62vw band across the top of the section instead, and the
 *    copy starts underneath it. That is not the graduate band's behaviour and
 *    the difference is deliberate. Graduate keeps the photograph as a
 *    background at every width, under a flat 80% and a gradient whose lightest
 *    stop is 60% — which multiplies out to ~92% navy at the top and 100% at
 *    the bottom, so on a phone that section is a flat navy rectangle and its
 *    photograph is not visible at all. Graduate can afford that: its
 *    photograph is a treatment room and its argument is a number. Here the
 *    photograph IS the per-variant tailoring, it is the only image on the page
 *    that differs between the four ad groups, and most paid traffic arrives on
 *    a phone. Keeping it as a background there would have meant either an
 *    invisible photograph or white body copy on a 45% scrim, and the second of
 *    those fails AA over the lighter frames. A band clears both: full-strength
 *    photograph, full-strength contrast, no compromise between them.
 *
 *    The band's own gradient fades transparent to solid navy downward, so it
 *    joins the section's navy ground with no seam. Nothing overlaps it, which
 *    is why it can stay that light.
 *
 * 3. THE PHOTOGRAPH IS DECORATIVE. alt="" and aria-hidden, because the copy
 *    beside it says everything the image says and a screen reader announcing
 *    "an osteopath treating a patient" mid-argument adds nothing. It is also
 *    what makes a hard crop acceptable: nothing in it has to be legible.
 *
 * `priority` is deliberately absent. On a 390px phone this band starts roughly
 * two screens down, so preloading it would compete with the hero portrait,
 * which is the LCP candidate on every one of these pages.
 */
export default function LandingDiscipline({ variant }: { variant: LpVariant }) {
  const { band } = variant;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-ink)]">
      {/* One Image, two shapes. `inset-x-0 top-0` plus a vw height makes the
          band; `lg:inset-0` plus `lg:h-auto` hands the same element the whole
          section. Two elements would double the fetch, because a `hidden`
          next/image still loads. */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[62vw] sm:h-[46vw] lg:inset-0 lg:h-auto">
        <Image
          src={band.image}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: band.objectPosition }}
        />
        <div className="absolute inset-0 bg-[var(--color-ink)]/22 lg:bg-[var(--color-ink)]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-ink)]/45 to-[var(--color-ink)] lg:bg-gradient-to-r lg:from-[var(--color-ink)] lg:via-[var(--color-ink)]/85 lg:to-[var(--color-ink)]/20" />
      </div>

      {/* Top padding clears the photograph band rather than sitting over it.
          The +2rem is the gap between the two, and lg drops back to the normal
          section rhythm because there is no band to clear there. */}
      <div className="cx-main pt-[calc(62vw+2rem)] pb-14 sm:pt-[calc(46vw+2.5rem)] sm:pb-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,58%)_1fr]">
          <FadeUp>
            <div>
              {/* .eyebrow-invert because .eyebrow hard-codes
                  --color-accent-text, which is 3.32:1 on navy and fails AA. */}
              <p className="eyebrow eyebrow-invert mb-6">{band.eyebrow}</p>

              <h2 className="text-h2 mb-6 text-white">
                {band.headline.start}
                <em className="not-italic text-[var(--color-accent)]">
                  {band.headline.accent}
                </em>
                {band.headline.end}
              </h2>

              <p className="text-body-lg max-w-[44ch] text-white/75">
                {band.lead}
              </p>

              {/* THE QUESTION IS THE HEADING, AND THE LABEL IS NOT.
                  This was built the other way round first: label as the only
                  heading, question as a <p>. `npm run scan` showed why that is
                  wrong. It reads the heading layer, so the cold read came back
                  as three orphan labels — "LOCAL SEARCH / FIRST REPLY / COST
                  PER PATIENT" — with none of the content they label, which is
                  the same defect as an ordinal eyebrow: a category with nothing
                  in it. The questions are the opposite of generic, so they are
                  the h3s, and the label stays as a plain sub-label above each.

                  The h3 keeps body styling on purpose. It carries a spoken
                  question, and the display face at h4 makes it announce rather
                  than ask. The fault this project has hit before is the reverse
                  — headings styled as <p className="text-h4"> and therefore
                  invisible to both the scan and screen-reader navigation — so
                  an h3 wearing body classes is the safe direction to err. */}
              <ol
                role="list"
                className="mt-10 flex flex-col border-t border-white/15"
              >
                {band.points.map((point, index) => (
                  <li
                    key={point.label}
                    className="grid grid-cols-[1.75rem_1fr] gap-4 border-b border-white/15 py-5 sm:grid-cols-[2.25rem_1fr]"
                  >
                    <span
                      aria-hidden="true"
                      className="pt-1.5 text-xs font-semibold tabular-nums text-[var(--color-accent)]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-label mb-1.5 text-white/55">
                        {point.label}
                      </p>
                      <h3 className="text-body-lg max-w-[46ch] font-medium text-white">
                        {point.body}
                      </h3>
                    </div>
                  </li>
                ))}
              </ol>

              {/* The turn. Three questions the reader could not answer is only
                  useful if the next line says where the answers come from, and
                  it happens to be the offer this page exists to sell. */}
              <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
                <LpCtaButton
                  placement="mid-discipline"
                  size="md"
                  className="w-full sm:w-auto sm:flex-shrink-0"
                />
                <p className="text-body-sm max-w-[36ch] text-white/60">
                  The free audit answers all three for your{" "}
                  {variant.practiceNoun}.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

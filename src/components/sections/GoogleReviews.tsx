import { ReactNode } from "react";
import FadeUp from "@/components/ui/FadeUp";
import { GoogleColorMark } from "@/components/icons/GoogleColorMark";
import {
  GOOGLE_PROFILE_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEWS,
  type GoogleReview,
} from "@/lib/reviews";

/*
 * Google reviews, as social proof.
 *
 * The reviews themselves live in src/lib/reviews.ts, verbatim, with the reasons
 * they are hardcoded and unmarked-up. This file is only how they look.
 *
 * THE ONE COLOUR EXCEPTION ON THIS SITE. The stars are painted #FBBC05, which
 * is Google's yellow — the same value already in GoogleColorMark's four-colour
 * G. That is not a second brand accent: it is part of a third party's mark,
 * reproduced inside an attributed quotation of that third party, exactly as the
 * G itself already is. Coral stars would read as our rating rather than
 * Google's, which is the opposite of what this section is for. Do not reach for
 * this value anywhere else.
 *
 * The stars are `aria-hidden` and the rating is stated in text beside them.
 * Google's yellow lands at about 1.9:1 on white, well under the 3:1 that a
 * meaningful non-text element needs — so it carries no information. Anyone not
 * seeing it reads "5.0 out of 5" instead, which is better anyway.
 *
 * LAYOUT. One long review and one short one, which rules out a two-up of equal
 * cards. Serena's runs four paragraphs and takes the wide column; the narrow
 * column stacks the rating summary, Elliot's line, and the link out. Three
 * short blocks against one tall one balances; two cards would not.
 */

/** Google's yellow, from their own mark. See the note above before reusing. */
const GOOGLE_STAR = "#FBBC05";

function Stars({ count = 5, size = 15 }: { count?: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={GOOGLE_STAR}>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({
  review,
  featured,
  cardBg,
}: {
  review: GoogleReview;
  featured?: boolean;
  /** Inverted against the section ground — white cards on mist, mist cards on
   *  white. A white card on a white section is a hairline border doing all the
   *  work, which is not enough separation at this shadow scale. */
  cardBg: string;
}) {
  return (
    <figure
      className={`m-0 flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] ${cardBg} shadow-[var(--shadow-card)] ${
        featured ? "p-8 lg:p-10" : "p-7"
      }`}
    >
      <figcaption className="mb-5 flex items-center gap-3.5">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] font-display text-base font-bold text-white"
        >
          {review.initial}
        </span>
        <span className="min-w-0">
          <span className="block text-h4 leading-tight text-[var(--color-ink)]">
            {review.name}
          </span>
          <span className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <Stars />
            <span className="sr-only">{review.rating} out of 5</span>
            <span className="text-body-sm text-[var(--color-muted)]">
              {review.date}
            </span>
          </span>
        </span>
      </figcaption>

      <blockquote className="m-0 flex flex-col gap-4">
        {review.body.map((para) => (
          <p
            key={para.slice(0, 40)}
            className={`${featured ? "text-body" : "text-body"} leading-relaxed text-[var(--color-charcoal)]`}
          >
            {para}
          </p>
        ))}
      </blockquote>

      <p className="mt-6 flex items-center gap-2 border-t border-[var(--color-border)] pt-5 text-body-sm text-[var(--color-muted)]">
        <GoogleColorMark className="h-3.5 w-3.5 flex-shrink-0" />
        Review from Google
      </p>
    </figure>
  );
}

interface GoogleReviewsProps {
  eyebrow?: string;
  heading?: ReactNode;
  intro?: string;
  /** Sits on the mist surface by default; pass "paper" where the neighbouring
   *  section is already mist and two greys would run together. */
  surface?: "surface" | "paper";
}

export default function GoogleReviews({
  eyebrow = "Google reviews",
  heading = (
    <>
      What clinic owners say{" "}
      <em className="not-italic text-[var(--color-accent)]">on Google</em>
    </>
  ),
  intro,
  surface = "surface",
}: GoogleReviewsProps) {
  const [featured, ...rest] = GOOGLE_REVIEWS;
  const onMist = surface === "surface";
  const cardBg = onMist ? "bg-[var(--color-paper)]" : "bg-[var(--color-surface)]";

  return (
    <section
      className={`section grain border-y border-[var(--color-border)] ${
        onMist ? "bg-[var(--color-surface)]" : "bg-[var(--color-paper)]"
      }`}
    >
      <div className="cx-main">
        <FadeUp>
          <div className="mb-10 max-w-[44rem]">
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2 className="text-h2 text-[var(--color-ink)]">{heading}</h2>
            {intro && (
              <p className="text-body-lg mt-5 text-[var(--color-charcoal)]">
                {intro}
              </p>
            )}
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <FadeUp delay={0.06}>
            <ReviewCard review={featured} featured cardBg={cardBg} />
          </FadeUp>

          <div className="flex flex-col gap-6">
            {/* Rating summary. The count is shown, not hidden — see reviews.ts. */}
            <FadeUp delay={0.12}>
              <div className={`rounded-[var(--radius-card)] border border-[var(--color-border)] ${cardBg} p-7 shadow-[var(--shadow-card)]`}>
                <div className="flex items-center gap-3">
                  <GoogleColorMark className="h-6 w-6 flex-shrink-0" />
                  <span className="font-display text-[2.5rem] font-bold leading-none text-[var(--color-ink)]">
                    {GOOGLE_RATING.average}
                  </span>
                  <span className="sr-only">out of 5</span>
                </div>
                <div className="mt-4">
                  <Stars size={18} />
                </div>
                <p className="text-body-sm mt-3 text-[var(--color-muted)]">
                  {GOOGLE_RATING.count} Google reviews, every one of them five
                  stars.
                </p>
              </div>
            </FadeUp>

            {rest.map((review, i) => (
              <FadeUp key={review.name} delay={0.18 + i * 0.06}>
                <ReviewCard review={review} cardBg={cardBg} />
              </FadeUp>
            ))}

            <FadeUp delay={0.24}>
              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent-text)] transition-colors hover:text-[var(--color-accent-dim)]"
              >
                Read them on Google
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-quart)] group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 7h8M7 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

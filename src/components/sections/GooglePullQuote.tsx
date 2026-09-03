import Image from "next/image";
import { GoogleColorMark } from "@/components/icons/GoogleColorMark";
import { GOOGLE_PROFILE_URL, GOOGLE_PULL_QUOTE } from "@/lib/reviews";

/*
 * One review, at display size, for pages with no room for the full section.
 *
 * Visually this is the treatment that was already on the /lp/ pages — accent
 * rule, display-size quote, portrait and name. What changed is the source: it
 * used to render LP_TESTIMONIAL, a quote drafted for Serena and approved
 * verbally through Simon. It now renders her actual public Google review, which
 * is her own words, published by her, and needs nobody's permission to quote.
 *
 * LP_TESTIMONIAL is deliberately left in src/lib/lp.ts rather than deleted. It
 * is the record of what was approved on 17 Aug 2026, and that record is worth
 * keeping even though nothing renders it now.
 *
 * The stars are decorative here — the Google attribution line underneath states
 * the source in text, and a five-star review that says "I couldn't recommend
 * them highly enough" is not relying on the glyphs.
 */

/** Google's yellow. See the note in GoogleReviews.tsx before reusing it. */
const GOOGLE_STAR = "#FBBC05";

export default function GooglePullQuote({ className = "" }: { className?: string }) {
  return (
    <blockquote
      className={`border-l-2 border-[var(--color-accent)] pl-6 sm:pl-8 ${className}`}
    >
      <p className="text-h3 max-w-[46ch] text-[var(--color-ink)]">
        &ldquo;{GOOGLE_PULL_QUOTE.text}&rdquo;
      </p>
      <footer className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
        <Image
          src={GOOGLE_PULL_QUOTE.portrait}
          alt={`${GOOGLE_PULL_QUOTE.name}, ${GOOGLE_PULL_QUOTE.role}`}
          width={80}
          height={80}
          sizes="48px"
          className="h-12 w-12 flex-shrink-0 rounded-full border border-[var(--color-border)] bg-white object-cover object-top"
        />
        <span className="text-body-sm">
          <strong className="font-semibold text-[var(--color-ink)]">
            {GOOGLE_PULL_QUOTE.name}
          </strong>
          <span className="block text-[var(--color-muted)]">
            {GOOGLE_PULL_QUOTE.role}
          </span>
        </span>

        <a
          href={GOOGLE_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-body-sm inline-flex items-center gap-2 text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)] sm:ml-auto"
        >
          <span className="inline-flex items-center gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={GOOGLE_STAR}>
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </span>
          <GoogleColorMark className="h-3.5 w-3.5 flex-shrink-0" />
          <span>5-star review on Google</span>
        </a>
      </footer>
    </blockquote>
  );
}

/*
 * Google's four-colour G, and the Google Ads lockup built from it.
 *
 * Separate from BrandIcons.tsx on purpose. That file is generated from
 * simple-icons, whose marks are single-path and monochrome — its Google G is
 * painted #4285F4, which is Google's blue but not Google's logo. On a page whose
 * entire subject is Google Ads, the flat blue G reads as a generic icon, and
 * "generic icons make it look like a preset website" was the 10 Aug complaint.
 * The real mark is four colours, so this one is four paths.
 *
 * Do not regenerate this file with scripts/generate-brand-icons.mjs — it will be
 * overwritten with the monochrome version.
 *
 * Trademark note: the mark and the name are Google's, used nominatively to
 * identify the advertising platform the service runs on. There is no Google
 * Partner badge here and no implied endorsement; do not add one.
 *
 * The Google Ads product has its own icon (the yellow-and-blue bars). It is not
 * reproduced here because we have no accurate source for its geometry, and a
 * hand-approximated corporate logo is worse than none. The corporate G plus the
 * product name in our own type is honest and reads correctly at any size.
 */

/** Google's four-colour G. Sized by the caller, e.g. `className="h-5 w-5"`. */
export function GoogleColorMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

/**
 * "Google Ads", the mark plus the product name.
 *
 * Used to attach a screenshot or a diagram step to the platform it came from.
 * The name is set in the site's own display face rather than Google's, which is
 * the correct way round: we are naming a product, not reproducing its wordmark.
 */
export function GoogleAdsLockup({
  className = "",
  markClass = "h-[1.05rem] w-[1.05rem]",
  label = "Google Ads",
}: {
  className?: string;
  markClass?: string;
  /** Which Google surface this refers to, e.g. "Google Ads", "Google Search". */
  label?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <GoogleColorMark className={`flex-shrink-0 ${markClass}`} />
      <span className="font-display text-[0.78rem] font-semibold tracking-[-0.01em] text-[var(--color-charcoal)]">
        {label}
      </span>
    </span>
  );
}

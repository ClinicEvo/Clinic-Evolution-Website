/**
 * Clinic Evolution's Google reviews.
 *
 * VERBATIM. These are public reviews written and published by the reviewers
 * themselves on Clinic Evolution's Google Business Profile, transcribed from
 * the profile on 3 Sep 2026 [src: Google Business Profile]. Do not edit a word
 * of them — not for length, not for rhythm, not to remove a phrase that would
 * be banned in our own copy. They are somebody else's writing, quoted.
 *
 * If a review needs shortening for a layout, shorten the layout.
 *
 * WHY THESE ARE HARDCODED RATHER THAN PULLED LIVE. Featurable (and every other
 * Google reviews widget) reads the Google Places API, and this profile is not
 * in that index yet — the Place ID Finder returns nothing for it, confirmed
 * 3 Sep 2026. A live widget also costs three CSP directives in next.config.mjs
 * (script-src, img-src for googleusercontent avatars, connect-src) and puts a
 * third-party script on every page that renders it. At two reviews there is
 * nothing to keep in sync. Revisit when the profile is indexed and the review
 * count makes a live feed worth the exchange.
 *
 * NO REVIEW SCHEMA, DELIBERATELY. Google's structured-data guidelines treat
 * reviews about a business, collected and marked up on that business's own
 * site, as self-serving: they are not eligible for rich results and marking
 * them up invites a manual action. The reviews earn their place by being read,
 * not by being marked up.
 *
 * DATES are stated as the month rather than the day. Google displayed both as
 * "a day ago" on 3 Sep 2026; a relative timestamp rots, and the exact day is an
 * inference from a rounded label.
 */

export interface GoogleReview {
  name: string;
  /** Initial for the avatar. Google's own avatars are not reproduced — the CSP
   *  blocks googleusercontent, and hotlinking someone's profile photo to dress
   *  a marketing page is not ours to do. */
  initial: string;
  rating: 5;
  date: string;
  /** Paragraphs, exactly as the reviewer broke them. */
  body: string[];
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Serena Gower-Johnson",
    initial: "S",
    rating: 5,
    date: "September 2026",
    body: [
      "I couldn’t recommend Clinic Evolution highly enough. They created my website, helped with SEO, and have also given me so much useful advice and guidance when it comes to growing and developing my business.",
      "The website turned out exactly how I wanted it to and feels really professional and reflective of my clinic. The SEO support has also been incredibly helpful, and everything has always been explained clearly so I actually understand what’s being done and why.",
      "What I’ve appreciated most is the level of support beyond just building the website. The business advice and guidance has been genuinely invaluable, especially as a relatively new clinic owner, and I’ve always felt that Clinic Evolution genuinely cares about helping my business do well.",
      "They’re knowledgeable, approachable, reliable and always happy to help. I’m really grateful for all of the support I’ve received and would absolutely recommend Clinic Evolution to anyone looking for help with their website, SEO or growing their clinic.",
    ],
  },
  {
    name: "Elliot Nation",
    initial: "E",
    rating: 5,
    date: "September 2026",
    body: [
      "Brilliant team with fantastic knowledge, have massively helped my clinic to grow!",
    ],
  },
];

/**
 * The aggregate, stated honestly.
 *
 * Two reviews is two reviews. Showing the average without the count would be
 * the sort of thing this site removes rather than adds, and the count climbing
 * is the point — a rounded or omitted denominator here would have to be
 * corrected later anyway.
 */
export const GOOGLE_RATING = {
  average: "5.0",
  count: GOOGLE_REVIEWS.length,
};

/**
 * Link to the profile.
 *
 * The CID form, because the profile has no Place ID we can resolve yet. Decoded
 * from the Maps URL for the profile: FID 0x6b4ac23270db55d5:0xd29283fbe72ff926.
 * Swap for the search.google.com/local/reviews?placeid= form once the profile
 * is indexed and a ChIJ ID exists.
 */
export const GOOGLE_PROFILE_URL =
  "https://maps.google.com/?cid=15173335212503333158";

/**
 * The compact pull quote, for places with no room for a four-paragraph review.
 *
 * This is Serena's FIRST PARAGRAPH, COMPLETE AND UNEDITED — not a sentence
 * lifted from the middle, not a stitched-together excerpt, no ellipsis doing
 * quiet work. It happens to be the paragraph that names all three things the
 * paid pages sell, so no editing was needed or is permitted.
 *
 * If a layout ever needs this shorter, take a different complete paragraph or
 * change the layout. Do not trim inside a sentence: cutting a public review to
 * fit is how an accurate quote becomes a misleading one.
 *
 * The portrait is the copy already in this repo at /images/lind-street/, not
 * her Google avatar — the CSP blocks googleusercontent, and her review photo is
 * not ours to hotlink.
 */
export const GOOGLE_PULL_QUOTE = {
  text: GOOGLE_REVIEWS[0].body[0],
  name: GOOGLE_REVIEWS[0].name,
  /** Her role, from the case study — our own annotation alongside the quote,
   *  never inside it. Google shows a name only. */
  role: "M.Ost, Founder of Lind Street Osteopathy, Ryde",
  date: GOOGLE_REVIEWS[0].date,
  portrait: "/images/lind-street/serena-portrait.png",
};

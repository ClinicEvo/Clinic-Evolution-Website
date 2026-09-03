/**
 * Graduate Clinic Launch Programme — the offer's facts in one place.
 *
 * Everything here is either something Simon confirmed on 3 Sep 2026
 * [src: client] or something already published on this site and sourced there.
 * Nothing in this file is inferred. If a value is not here, the page does not
 * claim it — see the FAQ note about premises for how an unknown is handled.
 *
 * THE THREE FIGURES THAT ARE NOT HERE. The programme deck carries "572 new
 * patient enquiries in 30 days", "page 4 to position 1 in 11 weeks" and "34
 * lapsed patients recovered in month one". All three were deliberately removed
 * from this site as unverifiable, and Danny asked for the ranking claim to go
 * on the 10 Aug call. See the comments at src/components/sections/ProofBand.tsx,
 * src/app/page.tsx, src/app/patient-pulse/page.tsx and
 * src/app/ai-integration/page.tsx. Do not reintroduce them here because a deck
 * still shows them.
 */

/** Next intake. [src: client — Simon, 3 Sep 2026] */
export const GRADUATE_INTAKE = {
  /** Display form, used in copy. */
  label: "15 October",
  /** With the year, for the schema block and the form's CRM note. */
  labelLong: "15 October 2026",
  /** ISO, for structured data. */
  iso: "2026-10-15",
  /**
   * The instant the countdown on the offer band runs to.
   *
   * Explicit offset, not a bare date: a bare date is parsed as UTC and the
   * clock then runs an hour out for every UK reader through British Summer
   * Time. BST ends on 25 October 2026, so 15 October is +01:00. IF THE INTAKE
   * DATE MOVES, re-check the offset — a date after the last Sunday in October
   * is +00:00.
   *
   * It points at the intake, which is a date this page states in words and the
   * reader can check. It is not an offer deadline. There is no published
   * applications-close date, so do not invent one to make the clock shorter.
   */
  startsAt: "2026-10-15T09:00:00+01:00",
  /** Places per intake. [src: programme deck] */
  places: 10,
};

/**
 * The commercial terms.
 *
 * `discountMonths` is 6 and month 7 is when the standard rate starts. Mentoring
 * is NOT a month-7 addition — Simon was explicit that it runs throughout and
 * that month 7 is only the price change. The page has to say this, because a
 * reader who sees "50% off six months" and nothing else prices it as a cliff.
 *
 * No fee is published anywhere on this site, so the page states the halving and
 * never a number. And no check-in cadence is stated anywhere, by instruction
 * [src: client — Simon, 3 Sep 2026]: sessions can be named, their rhythm cannot.
 */
export const GRADUATE_TERMS = {
  discountMonths: 6,
  /**
   * The headline figure. "50%" and "half" are the same fact, and both are
   * permitted — what is not permitted is a fee in either direction, so the
   * page can shout the percentage as loudly as it likes and still never says
   * what is being halved. The offer band uses the numeral because "50" set at
   * display size is a number a skimmer reads and "half" is a word they parse.
   */
  discountPercent: 50,
  standardRateFromMonth: 7,
  /** Spelled out, because the roadmap directly above writes "Month one" and
   *  "Months two and three". A numeral among words reads as carelessness. */
  standardRateFromMonthWord: "seven",
};

/**
 * Who it is for.
 *
 * Aimed at the three MSK professions, open to healthcare more widely on a
 * case-by-case basis [src: client — Simon, 3 Sep 2026].
 *
 * That split is deliberate and it is not a fudge. The page argues to MSK
 * because that is where every proof asset is — the case studies, the founder's
 * own clinic, the rest of the site's positioning — and a healthcare-wide
 * promise backed by MSK-only evidence is a seam a reader finds before we do.
 * But turning away a healthcare professional opening their first practice on a
 * category, when the work of getting found and booked is largely the same, is
 * a worse mistake than a slightly fuzzy edge. So: MSK in the copy, "ask us" in
 * the FAQ, and a real option on the form.
 */
export const GRADUATE_ELIGIBILITY = [
  "A final-year student, or qualified within the last twelve months",
  "Starting or building your first private practice",
  "Osteopathy, physiotherapy or chiropractic",
];

/** Sits under the eligibility list. The list stays scannable and this carries
 *  the exception, so nobody eligible-but-adjacent bounces off a category. */
export const GRADUATE_ELIGIBILITY_NOTE =
  "Another healthcare discipline? Tell us on the form. We consider those case by case.";

/** What you were examined on, against what you were not. Deck slides 2 and 3,
 *  merged — on a page they are one argument, not two. */
export const TRAINED_IN = [
  "Assessment",
  "Clinical reasoning",
  "Treatment",
  "Patient management",
  "Professional standards",
];

export const NOT_TRAINED_IN = [
  "How patients find you",
  "Websites",
  "Google",
  "Local SEO",
  "Reviews",
  "Pricing",
  "Marketing",
  "Enquiry handling",
  "Rebooking",
  "Follow-up",
  "Building a reputation",
  "Knowing whether any of it works",
];

/** Deck slide 4. Seven items, deliberately not rounded to six or eight. */
export const STRONG_FIRST_YEAR = [
  "People in your area can find you",
  "Your website gives them the confidence to book",
  "Your Google reviews start building",
  "Enquiries turn into patients",
  "Patients come back, and recommend you",
  "You know where your growth is coming from",
  "The income starts to look predictable",
];

/**
 * The five parts of the build. Rendered as rows, not as a card grid: five equal
 * cards would fail the house rule against equal-column card rows, and rows put
 * each pillar's name in a real heading, which is what `npm run scan` reads.
 */
export const GRADUATE_SYSTEM = [
  {
    title: "Build your foundation",
    points: [
      "A website that makes you look established from day one",
      "A Google presence that puts you in front of people nearby",
      "Tracking from the start, so month one is measurable",
    ],
  },
  {
    title: "Get found",
    points: [
      "Appearing when people search for treatment near them",
      "Pages and content that build authority in your area",
      "Organic visibility that keeps growing after the build",
    ],
  },
  {
    title: "Turn interest into patients",
    points: [
      "A short path from searching to booked",
      "More of your enquiries becoming appointments",
      "Enquiries answered quickly and professionally",
    ],
  },
  {
    title: "Build relationships",
    points: [
      "Patient Pulse, so patients do not quietly disappear",
      "More reviews, without the awkward ask",
      "Follow-up that brings people back",
    ],
  },
  {
    title: "Track your growth",
    points: [
      "Knowing what is bringing patients through the door",
      "Advice grounded in your own numbers, not general advice",
      "A growth plan you can actually act on",
    ],
  },
];

/** Deck slide 7 — the mentoring curriculum. Promoted up the page from seventh
 *  position: it is the part a standard agency retainer does not include. */
export const MENTORING_TOPICS = [
  "Where patients actually come from",
  "The numbers that matter in a clinic",
  "How an enquiry becomes a booking",
  "Reviews, referrals and reputation",
  "Patient retention and recall",
  "What your marketing is actually returning",
  "How to make sensible decisions as the clinic grows",
];

/**
 * Deck slide 10, with the eyebrows rewritten.
 *
 * The deck labels these "MONTH 1", "MONTHS 2-3" and so on. `npm run scan` fails
 * ordinal-only eyebrows, and it is right to: "Month 4" means nothing to someone
 * who did not read the three cards before it. Each period now carries its own
 * claim in the heading.
 */
export const GRADUATE_ROADMAP = [
  {
    period: "Month one",
    title: "Look established from day one",
    body: "Your brand, website, Google presence and booking path are live.",
  },
  {
    period: "Months two and three",
    title: "Start getting discovered",
    body: "Search visibility, content, and your first reviews.",
  },
  {
    period: "Month four",
    title: "Turn activity into momentum",
    body: "See where enquiries come from, and improve what converts.",
  },
  {
    period: "Months five and six",
    title: "Build a patient engine",
    body: "Reviews, follow-up, retention and growth you can repeat.",
  },
];

/**
 * Professions offered on the application form.
 *
 * The three the programme is built around, plus a real catch-all — not a
 * politeness. Someone who picks it gets a free-text field and a genuine read,
 * per the FAQ. If that option is ever removed again, remove the FAQ answer
 * promising a look with it.
 */
export const OTHER_PROFESSION = "Another healthcare discipline";

export const GRADUATE_PROFESSIONS = [
  "Osteopathy",
  "Physiotherapy",
  "Chiropractic",
  OTHER_PROFESSION,
];

export const GRADUATE_STAGES = [
  "Final-year student",
  "Qualified within the last twelve months",
  "Qualified longer ago than that",
];

export const GRADUATE_STARTING_POINTS = [
  "Nothing yet — this is all ahead of me",
  "I have a name, maybe a logo",
  "I have a website already",
  "I am seeing patients already",
];

/**
 * Deck slide 3 — the standing-start constraints, and the pressure on top.
 *
 * Restored after a first pass compressed both into a single sentence. The point
 * of this slide is not the list, it is the SIMULTANEITY: five things you do not
 * have, while six other things are expected of you at once. A subordinate
 * clause cannot carry that; two stacked rows can.
 */
export const GRADUATE_CONSTRAINTS = [
  "No established patient base",
  "Few or no reviews",
  "Little online visibility",
  "Limited cash flow",
  "A small marketing budget",
];

export const GRADUATE_PRESSURES = [
  "Treat patients",
  "Build confidence",
  "Find patients",
  "Manage finances",
  "Handle enquiries",
  "Build your reputation",
];

/**
 * Deck slide 5 — the philosophy chain.
 *
 * The most repeatable idea in the deck and the one a graduate could explain to
 * someone else, so it gets to be a diagram rather than a clause in a paragraph.
 * The last step carries the coral fill: it is the outcome, and the six boxes
 * are otherwise identical enough that nothing would mark the end of the chain.
 */
export const GRADUATE_PHILOSOPHY = [
  "Get found",
  "Build trust",
  "Get booked",
  "Follow up",
  "Build your reputation",
  "Grow",
];

/** The equation under the chain. Split so the operators can carry the accent
 *  without colouring the nouns, which is how the deck sets it. */
export const GRADUATE_EQUATION = [
  { term: "Visibility", op: "+" },
  { term: "Trust", op: "+" },
  { term: "Conversion", op: "+" },
  { term: "Retention", op: "=" },
  { term: "Clinic growth", op: null },
];

/**
 * Deck slide 8 — who built this.
 *
 * Names, roles and biography lines all come from /team/ rather than the deck.
 * Two reasons. The deck bills Simon as "MOst"; he has resigned from the GOsC
 * register, and src/app/team/page.tsx carries a standing instruction to call
 * him a FORMER registered osteopath and never "osteopath", "registered" or
 * "practising". And for this audience the accurate version is the stronger one
 * anyway: both founders trained clinically, which is the whole claim.
 */
export const GRADUATE_FOUNDERS = [
  {
    name: "Danny Morgan",
    role: "Co-founder & Osteopath",
    line: "Founded Bodyfunction Clinic in London, where he still practises. Clinic Evo was built and tested inside it before it was offered to anyone else.",
    image: "/images/danny-morgan-angel-clinic.png",
  },
  {
    name: "Simon Smith",
    role: "Co-founder & Digital Marketing Specialist",
    line: "A former registered osteopath who went on to found Neometa, a web design and SEO agency. He has been on both sides of the gap this programme exists to close.",
    image: "/images/simon-smith.jpg",
  },
];

/** From the programme deck [src: deck, p8], where it is attributed to the
 *  founders jointly rather than to either one. Kept that way. */
export const GRADUATE_FOUNDER_QUOTE =
  "We've experienced the gap between clinical training and running a business ourselves.";

export const GRADUATE_THANK_YOU_PATH = "/graduate/thank-you/";

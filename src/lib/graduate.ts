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

/**
 * THE OVERWHELM. Simon's own list, 3 Sep 2026 [src: client], barely reworded.
 *
 * His brief was that the page was "trying to be too clever" and that the one
 * thing it had to land was: when you start out you do not know what you do not
 * know, and it all seems overwhelming. He then listed it — social media, paid
 * ads, SEO, building a business, what works, what does not, what tools, how
 * they connect, who to register with.
 *
 * WHY THESE ARE QUESTIONS AND NOT NOUNS. NOT_TRAINED_IN below is the same
 * territory as a tidy list of nouns ("Websites", "Local SEO", "Pricing") and it
 * reads as a syllabus — which is the opposite of overwhelmed. A syllabus is
 * calm and someone else's; a question in the reader's own voice is the feeling
 * the section is for. Keep them as questions, and keep them in the first
 * person: the moment one turns into "You need to know whether SEO is worth it"
 * it goes back to being a curriculum.
 *
 * Nothing here is a claim about anybody, so nothing here needs a source beyond
 * Simon. They are propositions addressed to the reader — see the claim-vs-
 * proposition rule in ~/.claude/CLAUDE.md.
 */
export const GRADUATE_UNKNOWNS = [
  "Should I be doing SEO? What even is it?",
  "Are paid ads worth it, or a fast way to lose money?",
  "Do I have to post on social media every day?",
  "Which booking system? Which of these tools do I actually need?",
  "How is any of this meant to connect together?",
  "Who do I actually need to register with?",
  "How would I know if any of it is working?",
];

/**
 * The marks in the overwhelm section's logo cluster.
 *
 * They are there to BE the noise, not to decorate a list — a grid of platforms
 * a graduate has been told they need is the argument, made without a sentence.
 * Slugs resolve through src/components/icons/BrandIcons.tsx, with the
 * four-colour Google and Instagram marks coming from BrandColorMarks.
 *
 * TRADEMARK. Every mark is used nominatively, to name the platform it belongs
 * to. There is no partner badge, no implied endorsement, and none is to be
 * added — the same standing note as GoogleColorMark.tsx. And do NOT add the
 * professional registers here (GOsC, HCPC, GCC): a regulator's logo on a
 * marketing page reads as accreditation, which we do not have. "Who do I
 * actually need to register with?" stays a question in words.
 *
 * WHAT IS NOT IN THIS LIST, having been tried and pulled at 32px on white:
 *
 *   typeform  — simple-icons' Typeform mark is a WORDMARK; its path draws the
 *               letters, so at icon size it renders as unreadable grey text.
 *   mailchimp — brand yellow #FFE01B on the white card is about 1.3:1. The
 *               monkey was there and invisible. It would work on the navy
 *               sections, so if this cluster ever moves onto ink, bring it back.
 *   hootsuite — #FF4C46 is within a couple of points of our own coral
 *               (#FF5B4A). A competitor's mark that reads as our accent is
 *               worse than a missing logo.
 *   hubspot   — #FF7A59 clashes with the accent the same way, and a graduate
 *               opening their first treatment room has not been pitched a CRM.
 *
 * The bar is: would a final-year student recognise it, and does it read at
 * 32px on paper. Seven that pass beat ten where four are mush.
 */
export const GRADUATE_NOISE_MARKS = [
  "google",
  "instagram",
  "facebook",
  "tiktok",
  "whatsapp",
  "trustpilot",
  "calendly",
] as const;

/** Closes the mark row. The list is deliberately not exhaustive and saying so
 *  is the point — the overwhelm is that it never ends, not that it is long. */
export const GRADUATE_NOISE_TAIL = "\u2026 and whatever is next";

/**
 * The five parts of the build, ONE LINE EACH.
 *
 * This was five pillars of three bullets — fifteen list items under a heading,
 * which is precisely the "massive double wall of text" Simon objected to on
 * 3 Sep 2026. The detail was accurate and nobody was reading it. A graduate
 * deciding whether to apply needs to know the five things exist and that they
 * happen in an order; the specifics are what the call is for.
 *
 * DO NOT PUT THE BULLETS BACK. If a pillar genuinely needs three facts, it
 * needs its own page, not three more lines here.
 */
export const GRADUATE_SYSTEM = [
  {
    title: "Build your foundation",
    line: "A website and a Google presence that make you look established from day one, with tracking from the start.",
  },
  {
    title: "Get found",
    line: "The search work that puts you in front of people looking for treatment near them.",
  },
  {
    title: "Turn interest into patients",
    line: "A short path from searching to booked, and enquiries answered before they go cold.",
  },
  {
    title: "Build relationships",
    line: "Reviews without the awkward ask, and follow-up that brings people back.",
  },
  {
    title: "Track your growth",
    line: "You see what is bringing patients through the door, and get advice grounded in your own numbers.",
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
 * WHAT USED TO BE HERE, and why it is not.
 *
 * Removed 3 Sep 2026 on Simon's brief that the page was "trying to be too
 * clever" and carried "massive double walls of text":
 *
 *   TRAINED_IN / NOT_TRAINED_IN — five nouns against twelve nouns. Superseded
 *     by GRADUATE_UNKNOWNS above. The twelve were the right subject matter in
 *     the wrong voice: a syllabus reads as calm and somebody else's, and the
 *     section exists to convey being overwhelmed. TRAINED_IN survives as half a
 *     sentence of the section's intro rather than as a card.
 *   STRONG_FIRST_YEAR — seven outcomes that mapped one-to-one onto the five in
 *     the month-six strip. It was the same promise a third time, in its own
 *     full-height section.
 *   GRADUATE_CONSTRAINTS / GRADUATE_PRESSURES — already orphaned by the
 *     previous restructure; never re-imported.
 *   GRADUATE_EQUATION — "Visibility + Trust + Conversion + Retention = Clinic
 *     growth". The most abstract thing on the page, and it sat immediately
 *     above GRADUATE_PHILOSOPHY, which makes the same argument in verbs and in
 *     order. Two abstractions for one idea is the "too clever" complaint in
 *     miniature. The chain stayed; the equation went.
 *
 * All of it is in git history if a future page wants it. Do not restore any of
 * it to /graduate/ without re-reading that brief.
 */

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

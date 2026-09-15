/**
 * Config for the Growth System landing pages under /lp/growth-system/.
 *
 * Four pages from one template: the MSK-wide page the brief describes, plus
 * osteopathy, physiotherapy and chiropractic versions that swap the headline,
 * photograph, lead copy and one FAQ. Price, engines, inclusions and proof are
 * identical on all four, on purpose: a visitor who sees two of these pages
 * must see one offer.
 *
 * URLS CARRY THE AD GROUP'S HEAD KEYWORD (Simon, 14 Sep 2026). The Google Ads
 * campaign has three exact-match ad groups, Osteopaths, Chiropractors and
 * Physiotherapists, each led by "[<profession> marketing agency]" and filled
 * out with digital marketing, SEO, Google Ads and lead generation variants
 * [src: campaign structure, Simon's screenshots]. So the three discipline
 * pages live at /lp/osteopath-marketing-agency/,
 * /lp/chiropractor-marketing-agency/ and /lp/physiotherapy-marketing-agency/.
 * The MSK page keeps /lp/growth-system/: "[msk marketing agency]" is on the
 * campaign's test-later list, not live. The internal variant slugs
 * ("osteopathy" etc.) are unchanged; they travel to the CRM as tags and are
 * not URLs.
 *
 * THE H1S NO LONGER DO (Simon, 15 Sep 2026). They opened on "<profession>
 * marketing agency" until Simon replaced the hero copy with an
 * outcome-led headline: "Grow your <discipline> clinic with a complete patient
 * growth system". The head keyword now survives on the page only in the URL,
 * the meta title and the meta description, not in any visible text.
 *
 * That is a deliberate trade and worth knowing before anyone "fixes" it back:
 * an exact-match ad group whose landing page does not contain its keyword can
 * score lower on ad relevance and landing page experience, which shows up as a
 * higher cost per click rather than as an error. If CPCs climb after this goes
 * live, this is the first thing to look at. The counter-argument, and the
 * reason for the change, is that "marketing agency" is what the advertiser
 * calls itself, and the clinic owner reading the page wants to know what they
 * get.
 *
 * FIVE SITELINK ANCHORS PER PAGE, in each variant's `sitelinks`, one per keyword theme
 * the ad group carries: SEO, Google Ads, lead generation, pricing and the
 * booking form. The ids are on the inclusion items and sections and are LIVE
 * AD DESTINATIONS once the campaign runs, so the rule from LP_SECTION_ANCHORS
 * applies: do not rename one without changing it in Google Ads.
 *
 * SOURCES. Two client documents, both dated 2026 and both supplied by Simon on
 * 14 Sep 2026:
 *
 *   [src: growth-system doc]  "The 2-to-20 Growth System" — what the product
 *                             is, what each component does, what it costs.
 *   [src: lp brief]           "Landing Page Creation Guide" — page structure,
 *                             hero copy, the four engines, the form fields,
 *                             the claims policy.
 *
 * Every statement about what Clinic Evolution delivers, and every price, is
 * copied from one of those two. Anything about a clinic or a result comes from
 * the same evidence files the audit pages use (src/lib/lp.ts, src/lib/reviews.ts,
 * src/lib/clinic-capacity.ts) and is sourced where it is used.
 *
 * THIS IS THE FIRST PAGE ON THE SITE TO PUBLISH A FEE. Two files recorded the
 * previous position: src/components/lp/LandingFaq.tsx ("no number is published
 * anywhere on this site") and src/lib/graduate.ts ("No fee is published
 * anywhere on this site"). Both have been annotated. The brief's reasoning for
 * reversing it is on its page 9: "Transparency will improve lead quality."
 *
 * THE CONVERSION IS A BOOKED CALL, NOT AN AUDIT. The audit pages ask for four
 * fields in exchange for something free; this page asks ten questions from a
 * clinic owner considering a monthly commitment, then a person arranges the
 * call. The longer form is proportionate to the larger ask, which is the same
 * argument the audit pages used to make theirs shorter.
 *
 * No em dashes in any visible string. The global copy rule bans them in
 * anything public, and the brief's own hero subline carried a spaced hyphen
 * that has been replaced with a comma.
 */

import type { BrandSlug } from "@/components/icons/BrandIcons";

// ─── Paths, anchors and labels ──────────────────────────────────────────────

export const GROWTH_PATH = "/lp/growth-system/";
export const GROWTH_THANK_YOU_PATH = "/lp/growth-system/thank-you/";

/**
 * Sentence case, like every other button on this site. The brief gives the
 * label in title case ("Book Your Clinic Growth Call"); title case in one
 * place would read as a different system. [src: lp brief, p4]
 */
export const GROWTH_CTA_LABEL = "Book your growth strategy call";
/** For the sticky header, where the full label overflows below ~375px. */
export const GROWTH_CTA_LABEL_SHORT = "Book a strategy call";
/** The pricing section's own CTA. [src: lp brief, p9] */
export const GROWTH_PRICING_CTA_LABEL = "Discuss the right growth plan for your clinic";

/** Where every CTA on the page points: the form in the final section. */
export const GROWTH_FORM_ANCHOR = "#book";

/**
 * Section ids, for Google Ads sitelinks once the campaign exists. Same rule as
 * LP_SECTION_ANCHORS in src/lib/lp.ts: renaming one silently breaks a live
 * sitelink, so do not.
 */
export const GROWTH_SECTION_ANCHORS = {
  system: "#system",
  included: "#included",
  results: "#results",
  investment: "#investment",
  faq: "#faq",
} as const;

/**
 * The five sitelinks, per page. `text` is capped at Google Ads' 25 characters
 * and each description line at 35; scripts check nothing, so count before
 * editing. The `id`s are the anchors in GROWTH_INCLUDED, GrowthInvestment and
 * GrowthBook. Final URL = variant.path + "#" + id.
 */
export interface GrowthSitelink {
  id: string;
  text: string;
  description: [string, string];
}

/*
 * THERE IS NO BOOKING CALENDAR. The thank-you page embedded a GoHighLevel
 * booking widget (calendar 1ClOusw55fSa9a1U84t0 in the Clinic Evolution
 * sub-account) from 14 Sep 2026 until 15 Sep 2026, when Simon asked for a
 * plain confirmation page instead. A person arranges the time.
 *
 * Worth knowing if it is ever reinstated: that calendar had no team member
 * assigned, so a slot picked by a prospect landed in the calendar but on
 * nobody's diary [src: GoHighLevel calendars API, 14 Sep 2026].
 *
 * Removed with it: the GROWTH_CALL_CALENDAR_URL constant, its
 * NEXT_PUBLIC_GROWTH_CALL_CALENDAR_URL override, and the frame-src allowance
 * for https://api.leadconnectorhq.com in next.config.mjs. If a calendar ever
 * comes back, all three have to come back together, and the page copy here and
 * in GrowthBook.tsx has to promise it again.
 */

/** The one line under the hero CTA. [src: lp brief, p4] */
export const GROWTH_TRUST_LINE = "Built by clinic owners. Developed inside a working MSK clinic.";

// ─── Investment ─────────────────────────────────────────────────────────────

/** [src: growth-system doc, p12] */
export const GROWTH_FEE = "£1,350";

/**
 * The cost table, in the brief's order, with the total as its last row.
 * [src: growth-system doc, p13–14; lp brief, p9]
 *
 * Plain hyphens in the ranges, as the source writes them. The copy rule bans
 * em dashes, en dashes and spaced hyphens; a closed hyphen between two figures
 * is none of those.
 */
export const GROWTH_COSTS = [
  { item: "Clinic Evolution Growth System", amount: GROWTH_FEE, included: true },
  { item: "Patient Pulse email and messaging usage", amount: "£50-£100" },
  { item: "AI patient reactivation subscription and usage", amount: "£50-£100" },
  { item: "Google and Meta advertising budget", amount: "From £750" },
] as const;

export const GROWTH_TOTAL = {
  label: "Typical total for a one- to two-room clinic",
  amount: "£2,200-£2,300",
};

/** What the monthly fee covers. [src: growth-system doc, p12] */
export const GROWTH_FEE_COVERS = [
  "The clinic's website",
  "SEO and Google Business Profile optimisation",
  "Google and Meta advertising campaigns",
  "Campaign landing pages",
  "Patient Pulse CRM",
  "Automated lead follow-up and email nurture",
  "Patient reactivation and referral systems",
  "Business mentoring and support",
];

/** [src: lp brief, p9, "Clarifying copy"] */
export const GROWTH_COST_NOTE =
  "Communication usage, AI usage and advertising spend are paid separately. The exact total depends on database size, message volume, clinic location, competition and growth targets.";

/** [src: growth-system doc, p13] */
export const GROWTH_AD_BUDGET_NOTE =
  "As a guide, a one-room clinic needs approximately £750 a month in advertising budget. Larger or multi-location clinics need more. We recommend a figure before any campaign launches.";

// ─── The four growth engines ────────────────────────────────────────────────

export interface GrowthEngine {
  name: string;
  /** One line for the hero panel, where there is no room for the full delivery list. */
  short: string;
  delivers: string;
  outcome: string;
  platforms: readonly BrandSlug[];
}

/** [src: lp brief, p6, "The four growth engines"] */
export const GROWTH_ENGINES: GrowthEngine[] = [
  {
    name: "Get found",
    short: "Website, SEO and Google Business Profile",
    delivers:
      "Website, branding, copywriting, technical SEO, ongoing SEO, local SEO and Google Business Profile optimisation.",
    outcome: "More local patients discover the clinic.",
    platforms: ["google"],
  },
  {
    name: "Get patients",
    short: "Google Ads, Meta advertising and landing pages",
    delivers:
      "Google Ads, Meta advertising, dedicated landing pages, conversion tracking and ongoing optimisation.",
    outcome: "A more predictable flow of enquiries.",
    platforms: ["google", "facebook", "instagram"],
  },
  {
    name: "Convert and retain",
    short: "Patient Pulse, follow-up and 52-week nurture",
    delivers:
      "Patient Pulse, unified inbox, lead pipeline, automated follow-up, 52-week nurture and review systems.",
    outcome: "More enquiries become patients and remain engaged.",
    platforms: ["whatsapp", "messenger"],
  },
  {
    name: "Grow the clinic",
    short: "Reactivation, referrals and business mentoring",
    delivers:
      "Reactivation, referrals, rebooking support and business mentoring.",
    outcome: "More value from the existing database and stronger clinic performance.",
    platforms: [],
  },
];

/** [src: lp brief, p6, "Supporting line"] */
export const GROWTH_SUPPORTING_LINE =
  "We build it, install it, automate it and manage it for you.";

// ─── How it works ───────────────────────────────────────────────────────────

/**
 * The brief's "How it works" row: traffic, enquiry, conversion, patient,
 * retention, reactivation, referrals and reviews. [src: lp brief, p5] Each
 * line describes the stage with the doc's own words for what happens there.
 * [src: growth-system doc, p4–9]
 */
export const GROWTH_JOURNEY = [
  {
    stage: "Traffic",
    body: "Local searches, Google Ads and Meta campaigns bring people to a site or landing page built to convert.",
  },
  {
    stage: "Enquiry",
    body: "Every form, message and chat lands in one Patient Pulse pipeline, showing where it came from and whether anyone has replied.",
  },
  {
    stage: "Conversion",
    body: "Automated SMS, WhatsApp and email follow-up keeps going while you are treating, until the person books.",
  },
  {
    stage: "Patient",
    body: "The booking lands in your own diary. Patient Pulse connects to your booking system. It does not replace it.",
  },
  {
    stage: "Retention",
    body: "A 52-week educational email campaign, written in your clinic's voice, keeps you front of mind all year.",
  },
  {
    stage: "Reactivation",
    body: "Previous patients who have not returned are contacted, and an AI-assisted SMS conversation guides them back to the calendar.",
  },
  {
    stage: "Referrals",
    body: "A structured refer-a-friend programme invites, tracks and rewards the recommendations most clinics leave to chance.",
  },
  {
    stage: "Reviews",
    body: "Review requests, monitoring and responses build the Google reputation the next searcher checks before calling.",
  },
];

// ─── What is included ───────────────────────────────────────────────────────

export interface GrowthInclusion {
  /** Anchor id. Three of these are sitelink destinations; see GrowthVariant.sitelinks. */
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  /** Only the Patient Pulse item carries a screenshot; the rest are text. */
  screenshot?: boolean;
}

/** Sections 1 to 7 of the doc, in its order. [src: growth-system doc, p3–10] */
export const GROWTH_INCLUDED: GrowthInclusion[] = [
  {
    id: "website",
    title: "A website built to be found and to book",
    summary:
      "Fully branded, professionally written and search-engine-optimised. More than an attractive site: one that gets found, generates enquiries and produces bookings.",
    bullets: [
      "Designed specifically for your clinic",
      "Written to encourage patients to take action",
      "Technically optimised for Google",
      "Secured, hosted and maintained",
      "Integrated with your booking system",
      "Structured to convert visitors into patients",
    ],
  },
  {
    id: "seo",
    title: "Ongoing SEO and Google visibility",
    summary:
      "A new website alone does not guarantee strong rankings, so the work on your visibility carries on after launch. The aim is to appear when local patients search for treatment.",
    bullets: [
      "Ongoing technical and on-page SEO",
      "Local keyword and competitor research",
      "Regular website improvements",
      "Local SEO for your clinic's target area",
      "Google Business Profile optimisation",
      "Updates to services, photographs and clinic information",
      "Support with visibility in Google's local map results",
    ],
  },
  {
    id: "google-ads",
    title: "Google and Meta advertising, with dedicated landing pages",
    summary:
      "Google Search campaigns for people looking for treatment today, Facebook and Instagram campaigns for a steady flow of new leads, and a landing page for each service or patient problem, connected to your booking system.",
    bullets: [
      "Google Search campaigns built, launched and managed",
      "Facebook and Instagram campaigns, targeting, copy and creative direction",
      "One landing page per service or patient problem",
      "Conversion tracking from the advert to the appointment calendar",
      "Continual monitoring to improve lead quality and control acquisition cost",
      "Ongoing testing and optimisation",
    ],
  },
  {
    id: "lead-generation",
    title: "Patient Pulse CRM",
    summary:
      "Cliniko and Jane manage the people who have already become patients. Patient Pulse manages the people who are interested but have not booked yet, in one pipeline, one inbox and one set of automations.",
    bullets: [
      "Enquiries from Google, Facebook, Instagram and your website in one pipeline",
      "Automated follow-up by SMS, WhatsApp and email",
      "One inbox for website, live chat, social, email, SMS and WhatsApp",
      "A complete 52-week educational email campaign, written in your brand voice",
      "Google reputation management: request, monitor and respond to reviews",
    ],
    screenshot: true,
  },
  {
    id: "reactivation",
    title: "Patient reactivation",
    summary:
      "An automated system that contacts appropriate previous patients and encourages them to return, so the clinic generates appointments from the database it already has.",
    bullets: [
      "Personalised reactivation messages",
      "AI-assisted SMS conversation with the patient",
      "Identifies a suitable appointment time",
      "Directs the patient back into your calendar",
    ],
  },
  {
    id: "referrals",
    title: "Refer-a-friend programme",
    summary:
      "A structured programme that actively encourages referrals, so referrals stop depending on a patient remembering to make one.",
    bullets: [
      "A clearly defined referral offer",
      "Automated patient invitations",
      "A dedicated referral webpage",
      "Referral tracking and follow-up communication",
      "A process for rewarding the existing patient",
    ],
  },
  {
    id: "mentoring",
    title: "Business mentoring and support",
    summary:
      "Generating enquiries is the first part. Once new patients begin booking, the clinic has to convert, retain and serve them profitably, and that is what the mentoring covers.",
    bullets: [
      "Patient conversion and retention: the new-patient experience, treatment recommendations, appropriate rebooking and ethical prepaid plans",
      "Team management: practitioner expectations, performance, underperformance and accountability",
      "Financial understanding: profit and loss, margins, cost per acquisition, patient lifetime value, practitioner profitability and capacity",
      "Additional revenue: assessing shockwave, orthotics, rehabilitation services and treatment packages for your clinic",
    ],
  },
];

// ─── The problem ────────────────────────────────────────────────────────────

/**
 * The brief's five core problems, framed as a checklist the reader
 * self-selects from. [src: lp brief, p3] The section eyebrow ("If any of this
 * is your clinic") is what makes the second person safe: as bare statements
 * these would be unsourced claims about the reader's business.
 */
export const GROWTH_PROBLEMS = [
  {
    title: "The website exists but produces few enquiries",
    body: "It looks fine. It is just not asked to do anything, so it does not.",
  },
  {
    title: "Google visibility comes and goes",
    body: "Some months you are on the map, some months a clinic two streets away is, and nobody can tell you why.",
  },
  {
    title: "Enquiries are missed while you are treating",
    body: "A form comes in at four o'clock. You are hands-on until seven. Whoever replied first has already booked them.",
  },
  {
    title: "Your marketing sits in separate systems",
    body: "The website, the ads, the emails and the messages each live somewhere different, and the gaps between them belong to nobody.",
  },
  {
    title: "Previous patients and referrals are left to chance",
    body: "Nothing goes out to a patient who has not been back, and a referral happens only if somebody remembers to make it.",
  },
];

// ─── Why Clinic Evolution ───────────────────────────────────────────────────

/**
 * Founder facts, all already live on the site.
 *   - Danny owns Bodyfunction Clinic in London and still treats there
 *     [src: site, LandingFounder and /about/].
 *   - The system was developed and tested inside Bodyfunction before being
 *     offered to other clinics [src: lp brief, p8; src: site, graduate.ts].
 *   - Simon is a FORMER registered osteopath who founded a web design and SEO
 *     agency. The /team/ page carries a standing instruction never to call him
 *     an osteopath, registered or practising [src: site, src/lib/graduate.ts].
 *   - Clinic Evolution works exclusively with the three disciplines
 *     [src: growth-system doc, p2].
 */
export const GROWTH_WHY = {
  heading: { start: "Built by MSK clinic owners, ", accent: "for MSK clinic owners" },
  paragraphs: [
    "Danny Morgan owns Bodyfunction Clinic in London and still treats patients there. Every part of this system was developed and tested inside Bodyfunction before it was packaged for other clinics.",
    "He built Clinic Evolution with Simon Smith, a former registered osteopath who went on to found a web design and SEO agency. Between them they have been on both sides of the gap between treating patients and running the business that treats them.",
    "Clinic Evolution works only with osteopathy, chiropractic and physiotherapy clinics. That is narrower than a general marketing agency, and it is deliberate.",
  ],
  portrait: {
    src: "/images/danny-morgan-angel-clinic.png",
    alt: "Danny Morgan, osteopath and founder of Clinic Evolution",
    name: "Danny Morgan, M.Ost",
    role: "Founder of Clinic Evolution. Owner and practising osteopath at Bodyfunction Clinic, London.",
  },
};

// ─── Proof ──────────────────────────────────────────────────────────────────

/**
 * ONE figure on this page, per Simon's rule of 3 Sep 2026 (see the memory note
 * one-number-per-page and src/lib/clinic-capacity.ts). The two diary figures,
 * 212 and 572, are already placed on the home page and the Bodyfunction case
 * study and must not be copied to a third page. This is the search figure both
 * audit-page proof strips carry, with the same source. [src: Ahrefs estimate,
 * via src/lib/lp.ts ROW_TRAFFIC]
 */
export const GROWTH_PROOF_STAT = {
  eyebrow: "Bodyfunction Clinic, London",
  value: "8 → 3,822",
  label: "estimated monthly organic visitors at Bodyfunction Clinic, over two years",
  body: "Bodyfunction is our founder's own clinic and the first one this system had to work for. The search work, the website, the advertising and Patient Pulse were all built there before anywhere else.",
  source: "Ahrefs estimate, Aug 2024 to Aug 2026",
};

// ─── FAQ ────────────────────────────────────────────────────────────────────

/**
 * Objections, responsibilities, timelines and suitability. [src: lp brief, p5]
 *
 * The contract answer is Simon's own wording from 9 Sep 2026, reused verbatim
 * from LandingFaq. It deliberately neither promises nor denies a term. Do not
 * "improve" it into a promise.
 *
 * No timeline figure appears here because no source gives one. The timeline
 * answer describes the order of work and where the dates get set, which is
 * the truthful version.
 */
export const GROWTH_SHARED_FAQS = [
  {
    question: "Is this a fixed package, or is it built around my clinic?",
    answer:
      "It is one system at one monthly fee, and everything on this page is included in it. What changes from clinic to clinic is the advertising budget, the size of the patient database and the volume of messages sent, which is why those three sit outside the fee. The growth call is where we work out what those look like for you.",
  },
  {
    question: "What is not included in the £1,350?",
    answer:
      "Three things, all paid by the clinic directly. Patient Pulse messaging usage, typically £50 to £100 a month depending on database size and volume. The AI reactivation subscription and usage, also typically £50 to £100 a month. And the advertising budget itself, which goes straight to Google, Facebook and Instagram to show your adverts.",
  },
  {
    question: "How much should I budget for advertising?",
    answer:
      "As a guide, a one-room clinic needs around £750 a month. Larger or multi-location clinics need more, because the budget depends on your size, location, competition and growth targets. We recommend a specific figure before any campaign launches, and nothing goes live until you have agreed it.",
  },
  {
    question: "Do you guarantee rankings, leads or patient numbers?",
    answer:
      "No. Nobody honest can, and we would rather lose the enquiry than make the promise. What we can show you is what the system has done for the clinics it was built in, and what we would do first for yours. If you need a guaranteed result before you start, this is not the right fit.",
  },
  {
    question: "Who is this for, and who is it not for?",
    answer:
      "It is for independent osteopathy, chiropractic and physiotherapy clinics with one or two locations, typically taking under £20,000 a month, with the capacity to see more patients and the willingness to invest in marketing, software and the work of implementing it. It is not for a clinic that only wants a cheap website or a one-off task, has no budget for advertising, or has no room in the diary for the patients it would bring.",
  },
  {
    question: "Does Patient Pulse replace Cliniko or Jane?",
    answer:
      "No. Cliniko and Jane manage the people who have already become patients. Patient Pulse manages the people who are interested but have not booked yet, and then connects to your booking system so the appointment lands in your own diary. You keep the system you have.",
  },
  {
    question: "Do I need to sign a long contract?",
    answer:
      "We’ll explain the recommended package, pricing and commitment clearly before you agree to anything. The right setup depends on what your clinic needs and what we’re taking responsibility for.",
  },
  {
    question: "What do I have to do?",
    answer:
      "We build it, install it, automate it and manage it. Your side is to approve the copy and design, give us access to the accounts the system connects to, and have your team reply and book from Patient Pulse as enquiries come in. The mentoring is where we go through the numbers and the decisions with you.",
  },
  {
    question: "How long until it is running?",
    answer:
      "The order of work and the dates are set on the growth call, because they depend on what your clinic already has. Advertising is the last thing to switch on: no paid traffic runs until the landing page, the booking journey and the tracking behind them have passed a live test.",
  },
  {
    question: "What happens on the growth call?",
    answer:
      "Before we speak, we review your clinic, your current marketing and your growth goals. On the call we go through your numbers, your capacity and where the system would start for you. If it fits, you leave with the plan and the exact monthly figure. If it does not, we will say so.",
  },
];

// ─── The form ───────────────────────────────────────────────────────────────

/**
 * The lead form's options. Exported so src/app/api/submit-form/route.ts can
 * allowlist them: a forged value must never reach the CRM. [src: lp brief, p10]
 *
 * Three professions and no "Other". The doc is explicit that Clinic Evolution
 * works exclusively with these three [src: growth-system doc, p2], and the
 * brief's disqualifiers mean this page should qualify rather than widen.
 */
export const GROWTH_PROFESSIONS = ["Osteopathy", "Chiropractic", "Physiotherapy"] as const;
export type GrowthProfession = (typeof GROWTH_PROFESSIONS)[number];

/** Maps the form's profession onto the four values the GHL discipline field accepts. */
export const GROWTH_DISCIPLINE_MAP: Record<GrowthProfession, string> = {
  Osteopathy: "Osteopath",
  Chiropractic: "Chiropractor",
  Physiotherapy: "Physiotherapist",
};

export const GROWTH_LOCATION_COUNTS = ["One location", "Two locations", "Three or more"] as const;

/** [src: lp brief, p10, "Recommended revenue options"] */
export const GROWTH_REVENUE_BANDS = [
  "Under £5,000",
  "£5,000-£10,000",
  "£10,000-£20,000",
  "£20,000-£40,000",
  "Above £40,000",
] as const;

/**
 * Not in the brief, which asks for the field but gives no bands. Set around
 * the published total so the answer is immediately readable against it.
 */
export const GROWTH_BUDGET_BANDS = [
  "Under £1,000",
  "£1,000-£2,000",
  "£2,000-£3,000",
  "Above £3,000",
  "Not decided yet",
] as const;

/** The brief's core problems, as the reader would pick one. [src: lp brief, p3] */
export const GROWTH_CHALLENGES = [
  "My website produces few enquiries",
  "Google visibility is inconsistent",
  "Enquiries are missed while we treat patients",
  "Our marketing sits in separate systems",
  "Previous patients and referrals are not followed up",
  "Something else",
] as const;

export const GROWTH_BOOKING_SYSTEMS = [
  "Cliniko",
  "Pabau",
  "Jane",
  "Other online booking",
  "Phone / email only",
  "Not sure",
] as const;

/** Consent wording. Names all three channels, as the brief requires. [src: lp brief, p13] */
export const GROWTH_CONSENT_LABEL =
  "I am happy for Clinic Evolution to contact me about my enquiry by email, SMS and WhatsApp.";

// ─── Variants ───────────────────────────────────────────────────────────────

export const GROWTH_DISCIPLINE_SLUGS = ["osteopathy", "physiotherapy", "chiropractic"] as const;
export type GrowthDisciplineSlug = (typeof GROWTH_DISCIPLINE_SLUGS)[number];
export type GrowthVariantSlug = "msk" | GrowthDisciplineSlug;

export interface GrowthVariant {
  slug: GrowthVariantSlug;
  path: string;
  metaTitle: string;
  metaDescription: string;
  /** Eyebrow above the H1: who it is for, which the brief puts first. */
  eyebrow: string;
  headline: { start: string; accent: string; end: string };
  subhead: string;
  /** How the page refers to the reader's practice, e.g. "osteopathy clinic". */
  practiceNoun: string;
  /** Pre-selects the profession field. Undefined on the MSK page. */
  defaultProfession?: GrowthProfession;
  /** The navy photograph band behind the problem section. */
  band: { image: string; objectPosition: string; alt: string };
  /** One sentence that opens the problem section in the discipline's terms. */
  problemLead: string;
  /** The searches the Google Ads engine names for this discipline. [src: growth-system doc, p5] */
  adSearches: string;
  variantFaq: { question: string; answer: string };
  /**
   * A closing paragraph for the Why section, on the three discipline pages
   * only. See disciplinePositioning for what it is for.
   */
  whyPositioning?: string;
  /** The five ad sitelinks for this page. See GrowthSitelink. */
  sitelinks: GrowthSitelink[];
}

/** Builds the five sitelinks with the discipline's own nouns in the text. */
function sitelinks(seoText: string, adsText: string): GrowthSitelink[] {
  return [
    { id: "seo", text: seoText, description: ["Ongoing local SEO and GBP work", "Included in the monthly fee"] },
    { id: "google-ads", text: adsText, description: ["Search and Meta campaigns, managed", "Landing pages and tracking built"] },
    { id: "lead-generation", text: "Lead generation system", description: ["Patient Pulse CRM and follow-up", "SMS, WhatsApp and email automation"] },
    { id: "investment", text: "Pricing: £1,350 a month", description: ["One fee, all costs set out", "Ad budget and usage paid separately"] },
    { id: "book", text: "Book a strategy call", description: ["Ten questions, then we call you back", "We review your clinic first"] },
  ];
}

/**
 * The brief's hero opening and subhead. [src: lp brief, p4, "Recommended hero
 * copy"] Only the MSK page uses either now; the three discipline pages carry
 * Simon's outcome-led copy instead, per the header note.
 */
const HERO_START = "The complete growth system for ";
const SUBHEAD =
  "Website, SEO, Google Ads, Meta advertising, Patient Pulse and clinic mentoring, installed and managed for you.";

/**
 * The three discipline pages' hero subhead. [src: Simon, 15 Sep 2026] One
 * sentence of outcome, one of scope, with the discipline named in the second
 * so the page reads as built for that reader rather than adapted to them.
 *
 * Simon's copy ran the two together across an em dash. The global rule bans
 * them in anything public, and swapping in an en dash or a spaced hyphen is
 * ruled out with it, so it is two sentences. In a hero subhead that reads
 * better anyway: the outcome lands before the list of parts begins.
 */
/**
 * The last paragraph of the Why section on the three discipline pages.
 *
 * It exists for the ad groups. Simon's keyword list (15 Sep 2026, his
 * screenshot) bids on thirteen exact-match phrases per discipline: the
 * "marketing agency" pair, "marketing for <profession>", "seo for
 * <profession>" and the seo pair, "<profession> google ads", the "website
 * design" pair, "<profession> business growth" and "<profession> business
 * coach", plus the "physio" short forms on the physiotherapy page. When the
 * H1s stopped opening on "<profession> marketing agency" (see the header
 * note), a check of the rendered pages found "website design", "business
 * growth", "business coach" and "physio" appearing nowhere in the visible
 * text, and "marketing agency" only in the generic line above this one. A
 * page that never says "coach" is a weak landing for "[osteopath business
 * coach]", and that gap predates the H1 change.
 *
 * So this paragraph says those things, once each, in a sentence that is
 * true: the components it lists are the inclusions [src: growth-system doc],
 * and the mentoring inclusion covers conversion, team management, P&L and
 * revenue, which is business coaching by any other name. It is written to the
 * reader, so nothing in it is a claim about a client. Google reads stems, so
 * "coaching" serves "[... business coach]".
 *
 * Two constraints on editing it: keep every phrase in the list above, and do
 * not add "rather than" or a "not X, but Y" pair; the page has spent both
 * budgets from ~/.claude/docs/COPY.md already.
 */
const disciplinePositioning = (agency: string, seoFor: string, marketing: string) =>
  `If you searched for ${agency}, the pieces you expected are all here: website ` +
  `design, ${seoFor}, Google Ads, and business coaching and mentoring for you as the ` +
  `clinic owner. They come as one system because ${marketing} on its own only fills ` +
  "the enquiry inbox. The business growth of your clinic depends on what happens after that.";

const disciplineSubhead = (clinics: string) =>
  "Attract more new patients, reactivate your existing database and generate " +
  "more referrals. Your website, SEO, paid ads, CRM and growth strategy, all " +
  `managed in one system built specifically for ${clinics}.`;

const VARIANTS: Record<GrowthVariantSlug, GrowthVariant> = {
  msk: {
    slug: "msk",
    path: GROWTH_PATH,
    metaTitle: "The Complete Growth System For Independent MSK Clinics",
    metaDescription:
      "Website, SEO, Google Ads, Meta advertising, Patient Pulse CRM and clinic mentoring, installed and managed for £1,350 a month. For UK osteopathy, chiropractic and physiotherapy clinics. Book a growth call.",
    eyebrow: "For independent osteopathy, chiropractic and physiotherapy clinics",
    headline: { start: HERO_START, accent: "independent MSK clinics", end: "" },
    subhead: SUBHEAD,
    practiceNoun: "clinic",
    band: {
      image: "/images/hero_clinic_spine_consult.jpg",
      objectPosition: "50% 40%",
      alt: "",
    },
    problemLead:
      "Low visibility, missed follow-up, previous patients nobody contacts and referrals left to chance each cost a clinic patients. Fixing them one at a time leaves the rest where they were.",
    adSearches: "osteopathy, chiropractic care, physiotherapy, back pain, neck pain and sports injury treatment",
    variantFaq: {
      question: "We are a multi-disciplinary clinic. Does this apply?",
      answer:
        "If osteopathy, chiropractic or physiotherapy is the core of what you do, yes. The system was built in an osteopathy and physiotherapy clinic and is offered only to those three disciplines. If your clinic is mainly something else, say so on the form and we will tell you honestly whether it fits.",
    },
    sitelinks: sitelinks("SEO for MSK clinics", "Google Ads for clinics"),
  },
  osteopathy: {
    slug: "osteopathy",
    path: "/lp/osteopath-marketing-agency/",
    metaTitle: "Osteopath Marketing Agency | The Complete Clinic Growth System",
    metaDescription:
      "The osteopath marketing agency behind the complete growth system: website, SEO, Google Ads, Meta advertising, Patient Pulse CRM and mentoring for £1,350 a month. Built inside a working osteopathy clinic. Book a growth call.",
    eyebrow: "Built exclusively for osteopathy clinic owners",
    headline: { start: "Grow your osteopathy clinic with ", accent: "a complete patient growth system", end: "" },
    subhead: disciplineSubhead("osteopathy clinics"),
    practiceNoun: "osteopathy clinic",
    defaultProfession: "Osteopathy",
    band: {
      image: "/images/bodyfunction-clinic-neck-treatment-session-close.jpg",
      objectPosition: "50% 62%",
      alt: "",
    },
    problemLead:
      "Somebody searches for an osteopath from a mile away and meets three other practices before yours. Ranking for that search is one job. What happens in the minutes after they enquire is another, and it is where the appointment is made or lost.",
    adSearches: "osteopathy, back pain, neck pain and sports injury treatment",
    variantFaq: {
      question: "Do you work with osteopaths, or is this transferred from somewhere else?",
      answer:
        "Clinic Evolution was founded by a practising osteopath, and the system was built inside his own osteopathy clinic. Both of the clinics whose results are on this site are osteopathy practices: Bodyfunction Clinic in London and Lind Street Osteopathy in Ryde, which opened with no website and no search presence.",
    },
    whyPositioning: disciplinePositioning("an osteopath marketing agency", "SEO for osteopaths", "osteopathy marketing"),
    sitelinks: sitelinks("SEO for osteopaths", "Google Ads for osteopaths"),
  },
  physiotherapy: {
    slug: "physiotherapy",
    path: "/lp/physiotherapy-marketing-agency/",
    metaTitle: "Physiotherapy Marketing Agency | The Complete Clinic Growth System",
    metaDescription:
      "The physiotherapy marketing agency behind the complete growth system: website, SEO, Google Ads, Meta advertising, Patient Pulse CRM and mentoring for £1,350 a month. Built inside a working osteopathy and physiotherapy clinic. Book a growth call.",
    eyebrow: "Built exclusively for physiotherapy clinic owners",
    headline: { start: "Grow your physiotherapy clinic with ", accent: "a complete patient growth system", end: "" },
    subhead: disciplineSubhead("physiotherapy clinics"),
    practiceNoun: "physiotherapy clinic",
    defaultProfession: "Physiotherapy",
    band: {
      image: "/images/hero/physiotherapist-knee-taping.jpg",
      objectPosition: "50% 70%",
      alt: "",
    },
    problemLead:
      "A runner with a knee and a patient six weeks after surgery are not looking for the same page, the same advert or the same follow-up. Private physiotherapy is several services sold to several audiences, and one system has to divide the way your caseload already does.",
    adSearches: "physiotherapy, back pain, neck pain, sports injury and post-operative rehabilitation",
    variantFaq: {
      question: "Will this work for a physiotherapy clinic?",
      answer:
        "It was built in one. Bodyfunction Clinic in London is an osteopathy and physiotherapy practice, and the website, the search work, the advertising and Patient Pulse do the same job whichever of the two a patient books. The growth call looks at your specialisms, your local market and your follow-up before anybody suggests what to do about them.",
    },
    whyPositioning: disciplinePositioning("a physiotherapy marketing agency", "SEO for physiotherapists", "physio marketing"),
    sitelinks: sitelinks("SEO for physiotherapists", "Google Ads for physios"),
  },
  chiropractic: {
    slug: "chiropractic",
    path: "/lp/chiropractor-marketing-agency/",
    metaTitle: "Chiropractor Marketing Agency | The Complete Clinic Growth System",
    metaDescription:
      "The chiropractor marketing agency behind the complete growth system: website, SEO, Google Ads, Meta advertising, Patient Pulse CRM and mentoring for £1,350 a month. Built inside a working MSK clinic. Book a growth call.",
    eyebrow: "Built exclusively for chiropractic clinic owners",
    headline: { start: "Grow your chiropractic clinic with ", accent: "a complete patient growth system", end: "" },
    subhead: disciplineSubhead("chiropractic clinics"),
    practiceNoun: "chiropractic clinic",
    defaultProfession: "Chiropractic",
    band: {
      image: "/images/chiro-treatment.jpg",
      objectPosition: "50% 48%",
      alt: "",
    },
    problemLead:
      "Nobody books a chiropractor on a good day. They book on the day the pain wins, which means the search has to be in front of them at that moment, the site has to answer what a first visit involves, and somebody has to reply before the pain sends them elsewhere.",
    adSearches: "chiropractic care, back pain, neck pain and sports injury treatment",
    variantFaq: {
      question: "Will this work for a chiropractic clinic?",
      answer:
        "The work is the same shape: local search, a site that answers what a first visit involves, adverts pointed at high-intent searches, and follow-up that runs after hours. What we can evidence is musculoskeletal, in clinics our founder either owns or took from nothing to page one. The growth call looks at your local market, your website, your booking path and your follow-up, then shows where the system fits your clinic.",
    },
    whyPositioning: disciplinePositioning("a chiropractor marketing agency", "SEO for chiropractors", "chiropractic marketing"),
    sitelinks: sitelinks("SEO for chiropractors", "Chiropractor Google Ads"),
  },
};

export function isGrowthDisciplineSlug(value: string): value is GrowthDisciplineSlug {
  return (GROWTH_DISCIPLINE_SLUGS as readonly string[]).includes(value);
}

export function isGrowthVariantSlug(value: string): value is GrowthVariantSlug {
  return value === "msk" || isGrowthDisciplineSlug(value);
}

export function getGrowthVariant(slug: string): GrowthVariant | null {
  return isGrowthVariantSlug(slug) ? VARIANTS[slug] : null;
}

/** Every page path, for the screenshot and scan route lists and for tests. */
export const GROWTH_PAGE_PATHS = Object.values(VARIANTS).map((v) => v.path);

/**
 * Is this pathname one of the Growth System pages or their thank-you page?
 * The shared /lp/ header uses it to pick the booking CTA over the audit one.
 * Tolerates a missing trailing slash, since usePathname can return either.
 */
export function isGrowthPagePath(pathname: string): boolean {
  const normalised = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return normalised === GROWTH_THANK_YOU_PATH || GROWTH_PAGE_PATHS.includes(normalised);
}

/** The sitelink final URLs for one page, ready to paste into Google Ads. */
export function growthSitelinkUrls(variant: GrowthVariant): { url: string; text: string }[] {
  return variant.sitelinks.map((link) => ({ url: `${variant.path}#${link.id}`, text: link.text }));
}

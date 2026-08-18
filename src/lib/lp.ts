/**
 * Config for the PPC landing pages under /lp/.
 *
 * These are ad destinations, not site pages: no site nav, no footer sitemap,
 * noindex, and one conversion goal (the audit form at #audit) with click-to-call
 * as the co-equal second action. One structure serves three ad groups so message
 * match stays tight per ad group without three separate builds.
 *
 * Two rules govern the copy in this file.
 *
 * 1. Nothing here is a factual claim about a clinic, a result or a market unless
 *    it is sourced. Every figure the landing pages quote lives in
 *    `LP_EVIDENCE` below, with its source named, and is copied from the case
 *    studies or `google-ads-evidence.ts` rather than restated from memory.
 *
 * 2. The offer is one system, scoped per clinic — not a menu of products and not
 *    a fixed package. The homepage settled that framing and `LandingSystem`
 *    renders it; the wording here has to agree with it.
 */

/**
 * Phone number shown in the landing page header, the hero and the mobile sticky
 * bar, in two forms. Leave both blank to hide the phone from the landing pages
 * entirely — every call site checks.
 *
 * TODO: swap `display` and `href` for a Google Ads call-forwarding number.
 *
 * This is the direct number, so no call from the campaign is attributable to it.
 * That was tolerable when the number was one link in the header. It is now
 * offered in four places — header, hero, audit section and the mobile sticky bar
 * — so calls are expected to be a material share of conversions, and every one
 * of them currently lands in the same untracked pool as organic and referral
 * calls.
 *
 * Changing the two strings below is the entire fix. Every call site reads from
 * this object and reports its own placement via events.phoneClick(), so the
 * per-position breakdown starts working the moment the number is swapped.
 */
export const LP_PHONE = {
  display: "07460 082 683",
  href: "tel:+447460082683",
};

export const LP_CTA_LABEL = "Book a free clinic audit";
export const LP_FORM_ANCHOR = "#audit";
export const LP_THANK_YOU_PATH = "/lp/thank-you/";

/** Turnaround promise. Stated above the fold as well as at the form, because a
 *  paid visitor decides before they reach the form. */
export const LP_TURNAROUND = "within 2 working days";

export const LP_VARIANT_SLUGS = [
  "healthcare-marketing",
  "physiotherapy-marketing",
  "chiropractic-marketing",
] as const;

export type LpVariantSlug = (typeof LP_VARIANT_SLUGS)[number];

/**
 * The five layers of the system, in the order a patient moves through them.
 *
 * This is the homepage's `journeyStages` list, extended to name call handling
 * and AI reactivation — both of which the landing pages previously left out
 * altogether, and both of which are part of what a clinic gets.
 *
 * Stage names, not ordinals: "Step 05" means nothing to a skimmer who did not
 * count the cards above it.
 */
export const LP_SYSTEM_LAYERS = [
  {
    stage: "Get found",
    summary: "A website built to be found, and local search visibility that holds",
    detail:
      "The search and competitor research comes first, the site gets built around what it finds, then it is ranked for the local and condition searches your patients actually type.",
    platforms: ["google"] as const,
  },
  {
    stage: "Create demand",
    summary: "Paid search and paid social, reaching patients before they search",
    detail:
      "Google Ads for people looking for treatment today; Facebook, Instagram and TikTok for the ones who have not started looking yet. Each platform gets its own creative and offer.",
    platforms: ["google", "facebook", "instagram", "tiktok"] as const,
  },
  {
    stage: "Get chosen",
    summary: "Enough proof on the page to make booking the obvious next step",
    detail:
      "Practitioner profiles, reviews, condition pages and a booking route that works on a phone. This is where visibility turns into an enquiry.",
    platforms: [] as const,
  },
  {
    stage: "Answer and book",
    summary: "Every enquiry and every call picked up, then booked in",
    // Deliberately does not enumerate the channels or the automations. The
    // Patient Pulse section immediately below this one lists both in full, and
    // its "Capture" card repeats the old wording here almost verbatim. This
    // names the layer and hands off; the section that follows does the detail.
    // "whatever channel it arrives on" was too close to the Patient Pulse
    // heading's "whatever time it arrives", two screens apart. Near-identical
    // constructions at short range are the tell, not the construction.
    detail:
      "Patient Pulse replies to every enquiry automatically, on any channel it comes in on, and our call handling answers the phone and books people into your diary.",
    platforms: ["whatsapp", "messenger"] as const,
  },
  {
    stage: "Bring back",
    summary: "Reviews chased and lapsed patients contacted before a competitor",
    detail:
      "Review requests go out the day treatment happens. Recall and AI reactivation reach patients at 3, 6 and 12 months, and replies land back in the same inbox.",
    platforms: [] as const,
  },
];

/**
 * Sourced proof for the landing pages: one row per figure, each with the clinic
 * it belongs to attached to it.
 *
 * This replaces the old split between `LP_EVIDENCE` (three anonymous figures)
 * and `LP_CASE_STUDIES` (two panels that re-stated two of the same figures).
 * That split was the section's central fault and it produced three separate
 * failures a skimmer hit at once:
 *
 *  - Five numbers for three facts. Bodyfunction's "8 → 3,822" appeared in both
 *    lists verbatim, and Lind Street arrived as "0 → page one" in one and
 *    "+570%" in the other — the same achievement in two units, which
 *    google-ads-evidence.ts names in its own header as the way a page stops
 *    being evidence.
 *  - No owner at the figure. The clinic names sat ~20 rows below the numbers
 *    under the label "The clinics those figures come from", which asked the
 *    reader to hold three unattributed quantities in memory and reconcile them
 *    later. On a cold scan nobody does that.
 *  - A false label. That heading was untrue for the £42.50 figure, whose
 *    account was deliberately unnamed at the time.
 *
 * `headline` is the load-bearing field and the reason this shape exists. It
 * renders as a real `<h3>` with the figure inside it, so the number reaches the
 * heading ladder carrying its own unit and its own owner: "8 → 3,822 people a
 * month finding Bodyfunction Clinic on Google" decodes cold, where a 48px
 * "3,822" above a separate label does not. `scripts/scan.mjs` reads headings,
 * so a figure outside one is invisible to the project's own scan test — which
 * is exactly what the clinic names were, as `<p className="text-h4">`.
 *
 * Every string is copied from the page that already publishes it with its
 * source. Nothing is rounded, reframed or re-described.
 */
export interface LpProofRow {
  /** What is being measured. Sits ABOVE the figure so the unit arrives first. */
  metric: string;
  /** The figure, coral, at display size. Rendered inside `headline`'s h3. */
  figure: string;
  /** The rest of the h3: what the figure counts, and whose clinic it is. */
  headline: string;
  /** Where it can be checked. */
  source: string;
  /** What was built, from the case study's own scope list. */
  work?: string;
  clinic: {
    name: string;
    where: string;
    logo: string;
    /** Intrinsic dimensions, for next/image. */
    logoW: number;
    logoH: number;
    /** Rendered height in px. Tuned per mark: the aspect ratios differ wildly. */
    logoHeight: number;
  };
  /** Disclosure, where the relationship is not arm's-length. Never optional on
   *  Bodyfunction — see below. */
  note?: string;
  href?: string;
}

const BODYFUNCTION = {
  name: "Bodyfunction Clinic",
  where: "Osteopathy and MSK clinic, Angel, London",
  logo: "/images/clients/bodyfunction.png",
  logoW: 1850,
  logoH: 304,
  logoHeight: 22,
};

const LIND_STREET = {
  name: "Lind Street Osteopathy",
  where: "Osteopathy clinic, Ryde, Isle of Wight",
  logo: "/images/clients/lind-street.png",
  logoW: 1500,
  logoH: 500,
  logoHeight: 38,
};

export const LP_PROOF: LpProofRow[] = [
  {
    metric: "People finding the clinic on Google",
    figure: "8 → 3,822",
    headline: "people a month finding Bodyfunction Clinic on Google",
    source: "Ahrefs, bodyfunction.co.uk — Aug 2024 against Aug 2026",
    work:
      "Website structure, local visibility, condition content and patient follow-up, rebuilt as one system over two years.",
    clinic: BODYFUNCTION,
    // Not optional and not droppable for symmetry. A paid page quoting its own
    // clinic's numbers without saying they are its own clinic's numbers is the
    // kind of omission a clinic owner is right to distrust.
    note: "Clinic Evo's founding clinic, not an outside client.",
    href: "/case-studies/bodyfunction-clinic/",
  },
  {
    metric: "Local search visibility, from nothing",
    figure: "0 → page one",
    // Both halves sourced: case study line 54, "on page one for its core local
    // searches inside twelve months of opening".
    headline:
      "for every core local search at Lind Street Osteopathy, inside twelve months of opening",
    // The +570% figure the old case-study panel carried is the same achievement
    // in a second unit, so it is stated here as the click counts that produced
    // it rather than as a separate headline number.
    source:
      "Google Search Console — 86 clicks rising to 576, from no search presence at all",
    work:
      "Brand and logo from scratch. The Isle of Wight market was researched first, then the site was built around the conditions people there actually search for.",
    clinic: LIND_STREET,
    href: "/case-studies/lind-street-osteopathy/",
  },
  {
    // Simon confirmed 18 Aug 2026 that this is a cost per converted patient
    // rather than a cost per tracked enquiry, and that all three Google Ads
    // shots come from the Bodyfunction account [src: client confirmation].
    // `source` still quotes the overview in the tool's own words, because that
    // is what the screen says; the headline says what those conversions are.
    metric: "What one new patient costs",
    figure: "£42.50",
    headline: "to bring in one new patient through Google Ads at Bodyfunction Clinic",
    source:
      "Google Ads overview, 29 Dec 2025 – 22 Jun 2026. 89 conversions from £3.78k of spend.",
    clinic: BODYFUNCTION,
  },
];

/**
 * One line, not a paragraph. The only thing that genuinely has to be said is
 * that both clinics are osteopathy practices — a physio or chiropractor who
 * arrived on matched ad copy should not have to assume the proof is
 * discipline-matched when it is not. The rest of what was in this string was
 * justification nobody asked for.
 */
export const LP_PROOF_CAVEAT =
  "Both clinics are osteopathy practices, and two clinics over one period is evidence rather than a forecast for yours.";

/**
 * The one approved practitioner testimonial.
 *
 * Drafted for Serena and confirmed verbally via Simon on 17 Aug 2026
 * [src: client approval, relayed]. VERBATIM AS APPROVED: the approval covers
 * these words, so an edit for rhythm or length voids it and needs re-approving.
 * Same rule if it moves to another page.
 *
 * Bodyfunction has none and must not be given one. It is the founding clinic,
 * so a quote from it would be Clinic Evo endorsing itself.
 */
export const LP_TESTIMONIAL = {
  text: "I started with no website and no presence on Google at all. Within a year I was on page one for the searches people on the Island actually use, and patients were finding me without me chasing them.",
  name: "Serena Gower-Johnson",
  role: "M.Ost, Founder of Lind Street Osteopathy, Ryde",
  portrait: "/images/lind-street/serena-portrait.png",
};

export interface LpVariant {
  slug: LpVariantSlug;
  /** Which Google Ads ad group this URL is the destination for. */
  adGroup: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  /** Split so the closing phrase can carry the accent colour. */
  headline: { start: string; accent: string; end: string };
  subhead: string;
  /**
   * Pre-fills the hidden discipline field so the CRM record is right without
   * asking the visitor a question the ad group has already answered. Undefined
   * on the broad healthcare ad group, where the discipline genuinely is unknown.
   */
  defaultDiscipline?: "Physiotherapist" | "Chiropractor";
  /** How the page refers to the reader's practice, e.g. "physiotherapy clinic". */
  practiceNoun: string;
  /** Conditions named in the search layer — kept discipline-specific. */
  seoConditions: string;
  /**
   * One extra FAQ, specific to this ad group, appended to the shared set. This
   * is most of what makes a variant more than a headline swap.
   */
  variantFaq: { question: string; answer: string };
}

const VARIANTS: Record<LpVariantSlug, LpVariant> = {
  "healthcare-marketing": {
    slug: "healthcare-marketing",
    adGroup: "Healthcare marketing / healthcare SEO",
    metaTitle: "Healthcare Marketing For UK Clinics, Run By A Clinic Owner",
    metaDescription:
      "One system for UK healthcare clinics: website, SEO, ads, call handling and follow-up, run by one team. Built inside a working MSK clinic. Book a free clinic audit.",
    badge: "Built inside a working MSK clinic",
    headline: {
      start: "Healthcare marketing for UK clinics, ",
      accent: "run by a clinic owner",
      end: "",
    },
    subhead:
      "One team builds the website, wins the local searches, runs the ads, and picks up every enquiry they produce. It is one system built around your clinic, rather than five suppliers you have to manage.",
    practiceNoun: "clinic",
    seoConditions: "back pain, sciatica, sports injury and postural problems",
    variantFaq: {
      question: "We are not an MSK clinic. Does any of this still apply?",
      answer:
        "Some of it. The search work, the website and the ads transfer to most treatment-led healthcare businesses. What we can evidence, and what the system was tested on, is musculoskeletal: osteopathy, physiotherapy and chiropractic. If you are outside that, say so in the audit request and we will tell you honestly which parts we would stand behind and which we would not.",
    },
  },
  "physiotherapy-marketing": {
    slug: "physiotherapy-marketing",
    adGroup: "Marketing for physiotherapist",
    metaTitle: "Marketing For Physiotherapy Clinics, Built To Fill The Diary",
    metaDescription:
      "One system for UK physiotherapy clinics: website, SEO, ads, call handling and follow-up, run by one team. Built inside a working MSK clinic. Book a free clinic audit.",
    badge: "Built inside a working MSK clinic",
    // "clinics that fills" was a genuine agreement fault: the relative clause
    // sat against the plural noun, so the eye parsed it wrong before recovering.
    // The head term still leads, so search message match is unchanged.
    headline: {
      start: "Marketing for physiotherapy clinics, ",
      accent: "built to fill the diary",
      end: "",
    },
    subhead:
      "One team builds the website, wins the local physio searches, runs the ads, and picks up every enquiry they produce. It was built inside a working MSK clinic and tested on that clinic's own diary first.",
    defaultDiscipline: "Physiotherapist",
    practiceNoun: "physiotherapy clinic",
    seoConditions:
      "back pain, sciatica, sports injury and post-operative rehab",
    variantFaq: {
      question:
        "Physiotherapy is the most competitive discipline in local search. How do you handle that?",
      answer:
        "By not competing only on the head term. \"Physiotherapist near me\" is crowded and expensive; the specific searches — a named condition, a sport, a post-operative stage, a neighbourhood — are cheaper, convert better and are what your site can realistically own. Google Ads covers the expensive head terms where the intent justifies it, and we track what each one costs you.",
    },
  },
  "chiropractic-marketing": {
    slug: "chiropractic-marketing",
    adGroup: "Marketing for chiropractic",
    metaTitle: "Marketing For Chiropractic Clinics, Built To Fill The Diary",
    metaDescription:
      "One system for UK chiropractic clinics: website, SEO, ads, call handling and follow-up, run by one team. Built inside a working MSK clinic. Book a free clinic audit.",
    badge: "Built inside a working MSK clinic",
    headline: {
      start: "Marketing for chiropractic clinics, ",
      accent: "built to fill the diary",
      end: "",
    },
    subhead:
      "One team builds the website, wins the local chiropractic searches, runs the ads, and picks up every enquiry they produce. It was built inside a working MSK clinic and tested on that clinic's own diary first.",
    defaultDiscipline: "Chiropractor",
    practiceNoun: "chiropractic clinic",
    seoConditions: "back pain, sciatica, neck pain and postural problems",
    variantFaq: {
      question:
        "Chiropractic patients take longer to decide. Does that change the approach?",
      answer:
        "It changes where the effort goes. A first-time chiropractic patient usually has a safety question and a cost question before a clinical one, so the site has to answer both in plain language, and the follow-up has to survive a two-week gap between the enquiry and the decision. That is what the recall sequences are for: a lead who goes quiet has not said no.",
    },
  },
};

export function isLpVariantSlug(value: string): value is LpVariantSlug {
  return (LP_VARIANT_SLUGS as readonly string[]).includes(value);
}

export function getLpVariant(slug: string): LpVariant | null {
  return isLpVariantSlug(slug) ? VARIANTS[slug] : null;
}

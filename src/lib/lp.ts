/**
 * Config for the PPC landing pages under /lp/.
 *
 * These are ad destinations, not site pages: no site nav, no footer sitemap,
 * noindex, and exactly one conversion goal — the audit form at #audit. One
 * structure serves three ad groups so message match stays tight per ad group
 * without three separate builds.
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
 * Phone number, used ONLY on the post-conversion confirmation page.
 *
 * Calling is deliberately not offered anywhere on the three ad landing pages
 * (Simon, 26 Aug 2026). The paid pages have one conversion goal and it is the
 * form; a phone number beside every CTA competed with it for the same click.
 * So the header link, the hero's second action, the mid-evidence button and the
 * mobile sticky bar's call half are all gone, and `LandingFaq` no longer points
 * at a number.
 *
 * `/lp/thank-you/` keeps it. The form is already submitted by the time anyone
 * reads that page, so a number there diverts nobody from it.
 *
 * If calling is ever offered on the landing pages again, the reason it was
 * untracked still applies and has to be fixed first: this is the direct number,
 * so no call from a campaign is attributable to it. Swap these two strings for
 * a Google Ads call-forwarding number, and note that every former call site
 * already reported its own placement via events.phoneClick() — see the git
 * history of LpCtaButton for the button that did it.
 */
export const LP_PHONE = {
  display: "07460 082 683",
  href: "tel:+447460082683",
};

export const LP_CTA_LABEL = "Request a free clinic audit";
export const LP_FORM_ANCHOR = "#audit";

/**
 * Section anchors on the landing pages, for Google Ads sitelink extensions.
 *
 * A sitelink needs its own final URL, so four of these point at sections of the
 * same page rather than at four thin pages — the ad occupies more of the results
 * page without splitting the paid traffic or the message match.
 *
 * DO NOT RENAME AN ID HERE WITHOUT CHANGING IT IN GOOGLE ADS. These strings are
 * live ad destinations. A renamed section id does not 404 — the fragment is
 * simply ignored and the visitor lands at the top of the page, so the sitelink
 * keeps working well enough that nobody notices it stopped doing its job.
 *
 * Each id is on a <section> carrying `tabIndex={-1}` and `scroll-mt-20`: the
 * scroll margin clears the sticky header, which would otherwise cover the
 * heading the visitor clicked for, and tabIndex moves keyboard focus to the
 * section rather than leaving it at the top of the document.
 */
export const LP_SECTION_ANCHORS = {
  /** LandingEvidence — the two clinics and their figures. */
  results: "#results",
  /** LandingFounder — a practising osteopath built this. */
  founder: "#founder",
  /** LandingProcess — audit, then plan, then you decide. */
  howItWorks: "#how-it-works",
  /** LandingFaq — contracts, cost, what happens next. */
  faq: "#faq",
} as const;
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
 *    lists verbatim, while Lind Street's search growth was stated twice in two
 *    different units.
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
  /** The platform where the result happened. Kept separate from the metric so
   *  a skimmer can identify the channel from its full-colour mark first. */
  platform: "Google Search" | "Google Ads";
  /** What is being measured. Sits ABOVE the figure so the unit arrives first. */
  metric: string;
  /** The figure, coral, at display size. Rendered inside `headline`'s h3. */
  figure: string;
  /** The rest of the h3: what the figure counts, and whose clinic it is. */
  headline: string;
  /** Where it can be checked. Optional: the ads figure is a client-stated
   *  number, so it carries the window and nothing else. */
  source?: string;
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
    platform: "Google Search",
    metric: "Estimated monthly organic traffic",
    figure: "8 → 3,822",
    headline: "at Bodyfunction Clinic",
    source: "Ahrefs estimate · Aug 2024–Aug 2026",
    clinic: BODYFUNCTION,
    href: "/case-studies/bodyfunction-clinic/",
  },
  {
    platform: "Google Search",
    metric: "Local search rankings",
    figure: "No. 1",
    headline:
      "for six local osteopathy searches, including “osteopath Ryde”, within twelve months of opening",
    source: "Ahrefs — all ten tracked local searches ranked in the top four",
    clinic: LIND_STREET,
    href: "/case-studies/lind-street-osteopathy/",
  },
  {
    // £30 per patient, confirmed by Simon on 18 Aug 2026 [src: client
    // confirmation]. This is a cost per booked patient, not the account's cost
    // per tracked conversion — the two are different measures and the £42.50
    // conversion figure on /google-ads-for-clinics/ is still correct for what it
    // describes there.
    //
    // Deliberately no "89 conversions from £3.78k" line here. That arithmetic
    // yields £42.50, so quoting it under £30 would have the row contradict
    // itself; and the patient count behind £30 is not recorded anywhere. The
    // window is attribution, not justification.
    platform: "Google Ads",
    metric: "Cost per booked new patient",
    figure: "£30",
    headline: "per booked new patient through Google Ads at Bodyfunction Clinic",
    source: "Google Ads, 29 Dec 2025 – 22 Jun 2026",
    clinic: BODYFUNCTION,
  },
];

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
      "One system for UK healthcare clinics: website, SEO, ads, call handling and follow-up, run by one team. Built inside a working MSK clinic. Request a free clinic audit.",
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
      "One system for UK physiotherapy clinics: website, SEO, ads, call handling and follow-up, run by one team. Built inside a working MSK clinic. Request a free clinic audit.",
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
        "Will this work for a physiotherapy clinic?",
      answer:
        "We do not have a published physiotherapy case study yet. The audit looks at your local search market, website, booking path and follow-up, then shows where the system fits your clinic.",
    },
  },
  "chiropractic-marketing": {
    slug: "chiropractic-marketing",
    adGroup: "Marketing for chiropractic",
    metaTitle: "Marketing For Chiropractic Clinics, Built To Fill The Diary",
    metaDescription:
      "One system for UK chiropractic clinics: website, SEO, ads, call handling and follow-up, run by one team. Built inside a working MSK clinic. Request a free clinic audit.",
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
        "Will this work for a chiropractic clinic?",
      answer:
        "We do not have a published chiropractic case study yet. The audit looks at your local search market, website, booking path and follow-up, then shows where the system fits your clinic.",
    },
  },
};

export function isLpVariantSlug(value: string): value is LpVariantSlug {
  return (LP_VARIANT_SLUGS as readonly string[]).includes(value);
}

export function getLpVariant(slug: string): LpVariant | null {
  return isLpVariantSlug(slug) ? VARIANTS[slug] : null;
}

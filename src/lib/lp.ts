/**
 * Config for the PPC landing pages under /lp/.
 *
 * These are ad destinations, not site pages: no site nav, no footer sitemap,
 * noindex, and exactly one conversion goal — the audit form at #audit. One
 * structure serves four ad groups so message match stays tight per ad group
 * without four separate builds.
 *
 * Two rules govern the copy in this file.
 *
 * 1. Nothing here is a factual claim about a clinic, a result or a market unless
 *    it is sourced. Every figure the landing pages quote lives in
 *    `LP_EVIDENCE` below, with its source named, and is copied from the case
 *    studies or `google-ads-evidence.ts` rather than restated from memory.
 *
 * 2. The offer is one connected system, scoped per clinic. `LandingSystem`
 *    renders that argument and the wording here has to agree with it.
 *
 *    WHAT CHANGED ON 9 SEP 2026: this rule used to read "not a menu of products
 *    and not a fixed package", and LandingSystem enforced it with "You do not
 *    pick items off this list." Simon's correction is that the proposition is
 *    that the connected system works BEST, not that a clinic cannot buy one
 *    part of it. So the copy now argues for the system rather than forbidding
 *    the alternative. Keep the positioning strong; do not turn it back into a
 *    rule about what a clinic is not allowed to purchase.
 */

/**
 * Phone number, used ONLY on the post-conversion confirmation page.
 *
 * Calling is deliberately not offered anywhere on the ad landing pages
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

/**
 * §3 of the 9 Sep 2026 brief: "Book" was wrong because it implies picking a
 * calendar slot, and the action is submitting a clinic for review. The brief
 * asked for "Get My Free Clinic Audit"; this is the same words in sentence
 * case, because every other button on this site is sentence case and title
 * case in one place would read as a different system. One constant, so
 * changing it back is one edit.
 */
export const LP_CTA_LABEL = "Get my free clinic audit";

/** Short form for the sticky header, where the full label overflows below ~375px. */
export const LP_CTA_LABEL_SHORT = "Get my free audit";
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

/**
 * One slug per Google Ads ad group.
 *
 * `osteopathy-marketing` was added on 9 Sep 2026 and is the strongest of the
 * four, because it is the only one whose proof, founder and photography all
 * belong to the same discipline: both clinics in the proof rows are osteopathy
 * clinics and Danny Morgan is a practising osteopath. The research at
 * ~/claude/clinic-evo-ads-seo-research.md puts "osteopathy marketing agency" at
 * 70/mo — the smallest of the three disciplines and, per that file, "osteopathy
 * has almost none" of the demand — so this page is not here for volume. It is
 * here because it is the one ad group we can answer without hedging.
 *
 * NOTE ON THE SLUG. It is deliberately `osteopathy-marketing`, not
 * `osteopath-marketing`: the latter is the live organic page at
 * /osteopath-marketing/, and two routes one hyphen apart is how the wrong URL
 * ends up in an ad.
 */
export const LP_VARIANT_SLUGS = [
  "healthcare-marketing",
  "osteopathy-marketing",
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

/*
 * The rows LandingEvidence renders, and the rule that decides which page gets
 * which.
 *
 * EVERY FIGURE HERE IS ABSENT FROM THAT PAGE'S PROOF STRIP. That is the whole
 * point of the split, added 9 Sep 2026 after a count found one figure repeated
 * on every page: the osteopathy strip and this section both led with "No. 1",
 * and the three MSK pages both led with "8 → 3,822". A number stated twice at
 * display size on one page does not read as emphasis, it reads as though we
 * only have one.
 *
 * So the strip carries the headlines and this section carries FURTHER verified
 * figures, with the clinic logo, the source and the case-study link. It adds
 * evidence instead of restating it, which is also what its heading promises.
 *
 * Each set keeps one Bodyfunction row and one Lind Street row, so both clinics
 * appear on every page with their marks.
 *
 * Provenance, all checked 9 Sep 2026 against the case studies that publish it:
 *   8 → 3,822  Ahrefs, Aug 2024 v Aug 2026        [bodyfunction case study]
 *   5×         GSC, combined branded search clicks [bodyfunction case study]
 *   No. 1 × 6  Ahrefs, ten terms in the top four   [lind street case study]
 *   67%        GSC, 113 clicks at position 1.0     [lind street case study]
 */
const ROW_TRAFFIC: LpProofRow = {
  platform: "Google Search",
  metric: "Estimated monthly organic traffic",
  figure: "8 → 3,822",
  headline: "at Bodyfunction Clinic",
  source: "Ahrefs estimate · Aug 2024–Aug 2026",
  clinic: BODYFUNCTION,
  href: "/case-studies/bodyfunction-clinic/",
};

const ROW_BRANDED: LpProofRow = {
  platform: "Google Search",
  metric: "Branded search demand",
  figure: "5×",
  headline: "more people searching for Bodyfunction Clinic by name",
  source: "Google Search Console · combined branded search clicks",
  clinic: BODYFUNCTION,
  href: "/case-studies/bodyfunction-clinic/",
};

const ROW_NO1: LpProofRow = {
  platform: "Google Search",
  metric: "Local search rankings",
  figure: "No. 1",
  headline:
    "for six local osteopathy searches, including “osteopath Ryde”, within twelve months of opening",
  source: "Ahrefs: all ten tracked local searches ranked in the top four",
  clinic: LIND_STREET,
  href: "/case-studies/lind-street-osteopathy/",
};

const ROW_CTR: LpProofRow = {
  platform: "Google Search",
  metric: "Click-through rate on her own name",
  figure: "67%",
  headline:
    "of the people who see Lind Street Osteopathy in Google go on to click it",
  source: "Google Search Console · 113 clicks at position 1.0",
  clinic: LIND_STREET,
  href: "/case-studies/lind-street-osteopathy/",
};

/** Osteopathy: its strip already headlines No. 1 × 6 and 86 → 576. */
const ROWS_OSTEOPATHY: LpProofRow[] = [ROW_TRAFFIC, ROW_CTR];

/** The MSK pages: their strip already headlines 8 → 3,822. */
const ROWS_MSK: LpProofRow[] = [ROW_NO1, ROW_BRANDED];


/**
 * §5 and §6 — the hard-number proof strip that now sits directly under the hero.
 *
 * WHY IT MOVED. The paid pages used to spend three sections on argument before
 * showing a figure. Every claim in those sections is an assertion a competitor
 * in the same auction also makes; these are the only things on the page that
 * can be checked. So they come first now.
 *
 * WHY THE SAME FOUR TILES ON ALL FOUR VARIANTS. Because the evidence base is
 * the same, and inventing discipline-specific proof is the one thing this
 * project's rules forbid outright. What changes per variant is the HEADING
 * above the strip and how the clinics are framed underneath it: the osteopathy
 * page can call both clinics osteopathy clinics because both are, and the other
 * three call them the MSK clinics the system was developed and tested in, which
 * is what §11 and §12 asked for. Differentiation lives in the hero, the problem
 * list, the case-study framing and the FAQ, not in the numbers.
 *
 * TRANSPARENCY IS DELIBERATE, per §5. Bodyfunction is named as Danny's own
 * clinic on the strip itself rather than in a footnote. It reads as a stronger
 * fact than a client logo would: the system was built by someone who had to
 * live with the result.
 *
 * NO ANIMATED COUNTERS HERE. `StatTiles` on the case studies animates from
 * zero, which put "+0%" and "0×" into the server-rendered HTML — see the fix in
 * src/components/case-studies/CaseStudyCharts.tsx. These are static strings and
 * must stay static strings.
 *
 * EVERY FIGURE'S PROVENANCE, checked 9 Sep 2026:
 *   212  src/lib/clinic-capacity.ts NEW_PATIENTS  [src: WhatsApp, Danny, 3 Sep 2026]
 *   572  src/lib/clinic-capacity.ts APPOINTMENTS  [src: WhatsApp, Danny, 3 Sep 2026]
 *   8 → 3,822  bodyfunction case study headlineStats  [src: ahrefs, Aug 24 v Aug 26]
 *   No. 1 × 6  lind-street case study headlineStats   [src: ahrefs]
 *
 * 212 AND 572 ARE NOT THE SAME MONTH and the labels below must keep saying so.
 * Danny gave them as two separate personal bests; written as one month it is an
 * unconfirmed claim. See the trap list in src/lib/clinic-capacity.ts, which also
 * bans multiplying 212 by any cost-per-enquiry figure.
 */
export interface LpStat {
  figure: string;
  label: string;
  context: string;
}

/*
 * One constant per verified figure, composed into per-page sets below.
 *
 * Written this way rather than as four hand-typed arrays so a figure's wording
 * and its provenance live in exactly one place. Every one of these was checked
 * against its source on 9 Sep 2026; the source is named on each.
 */
const STAT_NEW_PATIENTS: LpStat = {
  figure: "212",
  label: "New patients",
  context: "Bodyfunction's best month",
};
const STAT_APPOINTMENTS: LpStat = {
  figure: "572",
  label: "Appointments",
  // APPOINTMENTS, NOT NEW PATIENTS. The sales deck says "572 new patient
  // enquiries in 30 days", which is wrong by roughly 2.5x — the new-patient
  // figure is 212. Never relabel this one. See src/lib/clinic-capacity.ts.
  context: "Bodyfunction's busiest month, and a different month to the one beside it",
};
const STAT_TRAFFIC: LpStat = {
  figure: "8 → 3,822",
  label: "Monthly organic traffic",
  context: "Bodyfunction, Ahrefs estimate over two years",
};
const STAT_NO1: LpStat = {
  figure: "No. 1 × 6",
  label: "Local searches",
  context: "Lind Street Osteopathy, all ten tracked terms in the top four",
};
const STAT_CLICKS: LpStat = {
  figure: "86 → 576",
  label: "Google clicks",
  // The +570% the brief also asked for is here rather than as the figure. A
  // percentage off a base of 86 overstates what happened; showing the base
  // makes the same point and cannot be accused of inflating it.
  context: "Lind Street Osteopathy, up 570% half on half",
};
/*
 * £30, ON SIMON'S INSTRUCTION, 9 Sep 2026. This reverses his own decision from
 * earlier the same day to hold £42.50 until a measurement period existed. It is
 * his figure and his client relationship; the concern was raised twice and
 * answered.
 *
 * The figure is sourced: Danny gave "cost per patient £30" in WhatsApp on
 * 3 Sep 2026 and Simon confirmed the same day that it means per conversion
 * [src: WhatsApp, Danny + client confirmation, 3 Sep 2026]. What it does not
 * have is a window, which is why the context line says whose current figure it
 * is rather than implying a period it was measured over. DO NOT attach the
 * 29 Dec 2025 – 22 Jun 2026 window to it: that window belongs to £42.50 and its
 * own arithmetic yields £42.50, not £30.
 *
 * WHAT HAD TO GO WITH THE SWAP, and this is the part that was not a one-word
 * change. STAT_ENQUIRIES said "89 tracked enquiries, from £3.78k of Google Ads
 * spend over the same period". £3.78k over 89 is £42.47. Printed anywhere near
 * £30 that invites a reader to divide two published figures and get a third
 * that contradicts the headline, which is exactly what a clinician checking the
 * numbers would do. Both tiles are therefore gone from the paid pages and the
 * advertising block uses the two auction figures instead, which share no
 * arithmetic with any cost.
 *
 * £42.50 still lives on /google-ads-for-clinics/, beside the screenshot it is
 * read off, and the two must never share a page. That is the arrangement
 * src/lib/google-ads-evidence.ts already describes as correct, so nothing in
 * that file needed changing.
 */
const STAT_COST_PER_ENQUIRY: LpStat = {
  figure: "£30",
  label: "Cost per tracked enquiry",
  context: "Bodyfunction Clinic's own current Google Ads figure",
};
const STAT_AUCTION_SHARE: LpStat = {
  figure: "70%",
  label: "Share of the local ad auction",
  // Auction insights, google-ppc.png. The three competing advertisers sat
  // under 10%. See FIGURES in src/lib/google-ads-evidence.ts.
  context: "Bodyfunction's account, against three competing advertisers",
};
const STAT_AD_CTR: LpStat = {
  figure: "7.79%",
  label: "Click-through rate",
  // google-ad.png: 2,646 impressions, 206 clicks, and the display URL in the
  // shot names Bodyfunction, which is what makes it attributable.
  context: "On Bodyfunction's live search ad, 2,646 impressions",
};
const STAT_AD_EXPERIENCE: LpStat = {
  figure: "£70k+",
  label: "Spent on healthcare paid ads",
  // Danny's own statement about Clinic Evo's track record, made on the 10 Aug
  // call and confirmed by Simon on 13 Aug 2026. A first-party claim about us,
  // not about a client, which is why it can be a figure. Also published as a
  // quote on /google-ads-for-clinics/.
  context: "Clinic Evo's own spend, across healthcare accounts",
};

/**
 * §5, §6 and the 9 Sep amendment — the hard-number strip under the hero.
 *
 * WHY IT IS THERE. The paid journey used to spend three sections on argument
 * before showing a figure, and every claim in those sections is one a
 * competitor in the same auction also makes. These four can be looked up.
 *
 * TWO SETS, NOT ONE. The first pass used identical tiles on all four pages, on
 * the reasoning that the evidence base is identical and manufacturing
 * discipline-specific proof is the one thing this project forbids. Simon's
 * amendment is that the SELECTION can differ even when the evidence cannot:
 *
 *   OSTEOPATHY  leans into the directly relevant osteopathy evidence, so it
 *               takes both Lind Street figures (No. 1 × 6 and 86 → 576) and
 *               drops the traffic estimate and the ad cost. Every tile on that
 *               page is then an osteopathy clinic's own result.
 *
 *   THE OTHER   take a broader MSK mix: the two diary figures, the traffic
 *   THREE       growth and the cost per tracked enquiry. Their heading says
 *               these came from the MSK clinics where the system was developed
 *               and tested, which is what §11 and §12 required.
 *
 * NOTHING IS INVENTED BY THE SPLIT. Both sets draw on the same four verified
 * sources; only which four are shown changes, and the framing above them says
 * whose results they are on every page.
 *
 * 212 AND 572 ARE DIFFERENT MONTHS and STAT_APPOINTMENTS says so in its own
 * context line. Danny gave them as two separate personal bests; as one month it
 * is an unconfirmed claim.
 *
 * NO ANIMATED COUNTERS. StatTiles on the case studies animated from zero and
 * that zero reached the server-rendered HTML, so crawlers were served "+0%" and
 * "0×". These are plain strings and must stay plain strings.
 */
const STRIP_OSTEOPATHY: LpStat[] = [
  STAT_NEW_PATIENTS,
  STAT_APPOINTMENTS,
  STAT_NO1,
  STAT_CLICKS,
];

const STRIP_MSK: LpStat[] = [
  STAT_NEW_PATIENTS,
  STAT_APPOINTMENTS,
  STAT_TRAFFIC,
  STAT_COST_PER_ENQUIRY,
];

/**
 * §27. Required, not optional, and it stays with the figures rather than in a
 * footer. Past results are evidence; they are not a forecast, and this audience
 * is qualified to notice if we blur the two.
 */
export const LP_RESULTS_CAVEAT =
  "Results shown are from specific Clinic Evo clinic accounts and periods. Individual results will vary.";

/**
 * §7 — the advertising figures, low on the page beside the paid layer.
 *
 * Business outcomes lead and channel metrics support, so the strip at the top
 * carries patients and appointments while the working sits down here.
 *
 * TWO SETS, FOR ONE REASON: no figure should be a headline twice on the same
 * page. The three MSK pages already show £42.50 in their strip, so their ads
 * block shows what produced it (89 enquiries, and the total spend behind them)
 * rather than restating the number six sections later. The osteopathy strip has
 * no ad figure at all, so its ads block is where £42.50 is introduced.
 *
 * £30 AND NOT £42.50, on Simon's instruction of 9 Sep 2026. See the long note
 * on STAT_COST_PER_ENQUIRY: the figure is sourced but undated, so it never
 * carries a window, and the two spend figures that used to sit beside it were
 * removed because their ratio is £42.50. The two cost figures must never share
 * a page.
 *
 * "TRACKED ENQUIRY" IS THE ONLY PERMITTED WORDING. Google counts a conversion
 * as a call, a form or a chat. Nothing here connects that to a booked patient,
 * so "per new patient" is a claim we cannot make.
 *
 * The 7.79% CTR and ~70% auction share are both verified and both deliberately
 * absent: they are exactly the channel metric §7 says must not lead. They stay
 * on /google-ads-for-clinics/ beside the screenshots they are read off.
 */
const ADS_PROOF_LEAD: LpStat[] = [
  STAT_COST_PER_ENQUIRY,
  STAT_AUCTION_SHARE,
  STAT_AD_EXPERIENCE,
];

/*
 * The MSK pages headline £30 in their own strip, so this block does not repeat
 * it. Both figures here are channel metrics, which is deliberate: §7 said
 * business outcomes lead and technical metrics support, and this is the
 * supporting block. They are also the only two ad figures on the site that
 * share no arithmetic with a cost per conversion, which is what makes them
 * safe to print on a page carrying £30.
 */
const ADS_PROOF_WORKING: LpStat[] = [
  STAT_AUCTION_SHARE,
  STAT_AD_CTR,
  STAT_AD_EXPERIENCE,
];

/**
 * The one approved practitioner testimonial. NO LONGER RENDERED ANYWHERE.
 *
 * Superseded on 3 Sep 2026 by Serena's public Google review, which is her own
 * words rather than words drafted for her — see src/lib/reviews.ts and
 * GooglePullQuote. Kept here rather than deleted because it is the record of
 * what she approved on 17 Aug 2026, and deleting an approval record to tidy up
 * is how the next person concludes no approval ever existed.
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

/**
 * The navy photograph band, one per ad group — LandingDiscipline.
 *
 * This is the device from the /graduate/ offer band brought over on 9 Sep 2026:
 * a full-bleed photograph under a two-layer navy scrim that thins to the right
 * at lg, so the copy sits in the left ~58% and the photograph fills the other
 * half rather than leaving a hole there.
 *
 * IT EXISTS FOR TWO REASONS, and the second is the load-bearing one.
 *
 * 1. It is the only per-variant PHOTOGRAPH on these pages. Everything else the
 *    four variants share: the hero portrait is Danny and his team, the proof
 *    rows are two osteopathy clinics, the product screenshot is Patient Pulse.
 *    A physiotherapist who clicked a physiotherapy ad previously saw four
 *    images and not one of them showed physiotherapy.
 *
 * 2. It restores the recognition beat the page lost when LandingProblem was cut
 *    on 18 Aug 2026 for length, at roughly a quarter of the word count. The
 *    paid journey ran claim → proof → origin → offer with nothing in it that
 *    described the reader's own situation.
 *
 * `points` ARE QUESTIONS, AND MUST STAY QUESTIONS. Every assertion about what a
 * clinic ranks for, how fast it replies or what an enquiry costs it would be an
 * unsourced factual claim about the reader's business, which this project does
 * not write (see ~/.claude/CLAUDE.md). Asked instead, the same three lines
 * commit to nothing, cannot be wrong, and are answered one by one by the audit
 * deliverables in LandingAudit. The /graduate/ page's "you don't know what you
 * don't know" section works the same way and for the same reason.
 *
 * EACH QUESTION IS AN <h3> AND EACH LABEL IS NOT. That is the opposite of how
 * this was first built and `npm run scan` is the reason: it reads the heading
 * layer, and with the labels as the headings the cold read came back as three
 * categories with none of their content. `label` is a sub-label; `body` is the
 * heading. See the comment in LandingDiscipline.tsx.
 */
export interface LpBand {
  /**
   * Cropped hard by object-fit, so a centre-weighted subject survives and an
   * edge-weighted one does not. Decorative: rendered alt="" behind a scrim,
   * which is also why a portrait source is usable here at all.
   */
  image: string;
  /**
   * CSS object-position, tuned per photograph against the actual crop. Passed
   * as an inline style rather than a Tailwind class: an arbitrary class built
   * in a data file is one refactor away from being invisible to the scanner,
   * and it fails silently when it is.
   */
  objectPosition: string;
  eyebrow: string;
  headline: { start: string; accent: string; end: string };
  lead: string;
  points: { label: string; body: string }[];
}

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
   *
   * Every value here has to be in VALID_DISCIPLINES in
   * src/app/api/submit-form/route.ts or the submission is rejected server-side.
   * "Osteopath" was already in that list, so the osteopathy variant needed no
   * API change.
   */
  defaultDiscipline?: "Osteopath" | "Physiotherapist" | "Chiropractor";
  /** How the page refers to the reader's practice, e.g. "physiotherapy clinic". */
  practiceNoun: string;
  /** Conditions named in the search layer — kept discipline-specific. */
  seoConditions: string;
  /** The per-variant navy photograph band. See LpBand. */
  band: LpBand;
  /**
   * §6/§11/§12 — the heading over LP_PROOF_STRIP, and the only per-variant part
   * of it. The osteopathy page may call both clinics osteopathy clinics because
   * both are; the other three must not imply the evidence is theirs, so they
   * name it as the MSK clinics the system was developed and tested in.
   */
  proofHeading: { start: string; accent: string };
  /**
   * §6 as amended 9 Sep 2026 — which four verified figures this page leads
   * with. Osteopathy takes STRIP_OSTEOPATHY (both Lind Street figures, so every
   * tile is an osteopathy clinic's own result); the rest take STRIP_MSK. See
   * the note on those constants: the SELECTION differs per page, the evidence
   * base does not.
   */
  proofStrip: LpStat[];
  /**
   * §7 — the advertising block's three figures. Whichever set this page's strip
   * does not already headline, so the cost figure is never a headline twice on
   * one page.
   */
  adsProof: LpStat[];
  /**
   * The rows LandingEvidence renders. Chosen so no figure appears at display
   * size twice on one page: these are the verified figures this page's strip
   * does NOT carry. See the note on ROWS_OSTEOPATHY / ROWS_MSK.
   */
  proofRows: LpProofRow[];
  /**
   * §14 — the problem list, and the section that carries most of the
   * discipline-specific weight on the page.
   *
   * THE SECTION EYEBROW FRAMES THESE AS A CHECKLIST ("If any of this is your
   * clinic"), which is what makes the second person safe here. "Your website
   * gets traffic but too few visitors enquire" as a bare assertion is an
   * unsourced claim about the reader's business; offered as one item on a list
   * they self-select from, it claims nothing. Do not remove that eyebrow and
   * leave these as statements.
   *
   * Each list is three problems every clinic recognises plus two written for
   * this discipline, per §11 and §12's focus lists.
   */
  problems: { title: string; body: string }[];
  /**
   * §18 — how the case-study section introduces evidence that is entirely
   * osteopathy. On the osteopathy page that is an asset; elsewhere it has to be
   * framed honestly as the MSK system's evidence rather than as the reader's
   * own discipline.
   */
  evidenceNote: string;
  /**
   * ONE question per ad group, filling §20's "Does Clinic Evo only work with
   * MSK clinics?" slot in the words the reader would actually use. Five shared
   * objections in LandingFaq plus this one makes the six the brief asked for.
   *
   * There were two per variant until 9 Sep 2026. The second ones were good and
   * discipline-specific (a solo osteopathy practice, physiotherapy referral
   * pipelines, an existing chiropractic ad account) but §20 asked for the FAQ
   * to be reduced to high-conversion objections, and depth of that kind belongs
   * on the organic service pages where it can rank. They are in git history.
   *
   * THE PHYSIO AND CHIRO ANSWERS WERE REWRITTEN ON 9 SEP 2026. Both used to
   * open "We do not have a published physiotherapy/chiropractic case study
   * yet." That sentence was the first thing in the objection section of a paid
   * page, under a question the visitor had not asked in those terms, and it
   * conceded the sale before answering it. Nothing in it was untrue; it was
   * simply the worst available true thing to lead with, and there were better
   * true things to lead with in both cases. Neither replacement claims a case
   * study that does not exist.
   */
  variantFaqs: { question: string; answer: string }[];
}

/**
 * The three band questions, and the one rule for editing them.
 *
 * Each variant's set asks the same three things in its own discipline's terms:
 * do you know where you stand in local search, how fast an enquiry gets
 * answered, and what an enquiry costs you. That is deliberate rather than lazy,
 * because those are precisely the three findings LandingAudit promises back in
 * writing — the band asks, the audit answers, and a reader who cannot answer
 * one of them has just been given a reason to fill the form in.
 *
 * So if a question changes here, check it still has an answer in
 * AUDIT_CONTENTS. A fourth question with nothing behind it is worse than three.
 */
const VARIANTS: Record<LpVariantSlug, LpVariant> = {
  "healthcare-marketing": {
    slug: "healthcare-marketing",
    adGroup: "Healthcare marketing / healthcare SEO",
    metaTitle: "Healthcare Marketing For UK Clinics, Run By A Clinic Owner",
    metaDescription:
      "One system for UK healthcare clinics: website, SEO, ads, call handling and follow-up, run by one team. Built inside a working MSK clinic. Request a free clinic audit.",
    badge: "Built inside a working MSK clinic",
    // §13. This ad group is the broadest and therefore the weakest: "healthcare
    // marketing" attracts dentists, aesthetics, vets, private GPs and medtech,
    // none of which we can evidence. So the H1 names MSK in the headline itself
    // rather than leaving the qualifying to the trust strip six inches below,
    // where it was contradicting the old inclusive H1. Losing an irrelevant
    // click on the H1 is cheaper than paying for the lead behind it.
    headline: {
      start: "Healthcare marketing for MSK clinics that want ",
      accent: "more booked patients",
      end: "",
    },
    subhead:
      "Websites, SEO, Google Ads and patient follow-up built specifically for UK osteopaths, physiotherapists and chiropractors, and run as one connected system rather than four suppliers you have to manage.",
    practiceNoun: "clinic",
    seoConditions: "back pain, sciatica, sports injury and postural problems",
    proofHeading: {
      start: "Results from the MSK clinics where we ",
      accent: "built and tested this",
    },
    proofStrip: STRIP_MSK,
    adsProof: ADS_PROOF_WORKING,
    proofRows: ROWS_MSK,
    problems: [
      {
        title: "Local patients cannot find you",
        body: "Somebody two streets away searches for treatment and gets three other clinics before yours, or gets yours on page two.",
      },
      {
        title: "Clicks arrive, enquiries do not",
        body: "The site gets visitors and the ads get clicks, and nobody can show you which of either turned into somebody asking for an appointment.",
      },
      {
        title: "Enquiries land while you are treating",
        body: "A form comes in at four o'clock. You are hands-on until seven. Whoever replied first has already booked them.",
      },
      {
        title: "Four suppliers, one diary",
        body: "A web designer, an SEO freelancer, an ads agency and you. None of them can see the whole journey, so the gaps between them belong to nobody.",
      },
      {
        title: "Discharged patients simply vanish",
        body: "A course of treatment ends and nothing goes out at three, six or twelve months, so the next flare-up goes to whoever advertises.",
      },
    ],
    evidenceNote:
      "Both clinics below are musculoskeletal practices, and both are where this system was built and tested before it was sold to anybody.",
    band: {
      // Discipline-neutral on purpose: this ad group covers treatment-led
      // healthcare generally, so the one photograph that must not name a
      // discipline is this one. A consulting room and a spine model reads as
      // clinical without reading as osteopathy, physiotherapy or chiropractic.
      image: "/images/hero_clinic_spine_consult.jpg",
      objectPosition: "50% 40%",
      eyebrow: "First, three questions",
      headline: {
        start: "Being found and being answered are ",
        accent: "the same job",
        end: "",
      },
      lead: "A clinic can buy the first half from a supplier and still be doing the second half itself, in the gaps between patients. Closing that gap is what this system was built to do.",
      points: [
        {
          label: "Being found",
          body: "Do you know what your clinic ranks for today, and which clinics sit above you?",
        },
        {
          label: "Being answered",
          body: "When an enquiry arrives at 9pm on a Sunday, how long before somebody replies to it?",
        },
        {
          label: "Being counted",
          body: "Could you say what one new patient enquiry currently costs you?",
        },
      ],
    },
    variantFaqs: [
      {
        question: "We are not an MSK clinic. Does any of this still apply?",
        answer:
          "Some of it. The search work, the website and the ads transfer to most treatment-led healthcare businesses. What we can evidence, and what the system was tested on, is musculoskeletal: osteopathy, physiotherapy and chiropractic. If you are outside that, say so in the audit request and we will tell you honestly which parts we would stand behind and which we would not.",
      },
    ],
  },

  /*
   * The osteopathy ad group.
   *
   * THE ONLY VARIANT WHOSE PROOF, FOUNDER AND PHOTOGRAPHY ARE ALL THE SAME
   * DISCIPLINE, and the copy leans on that as hard as the sources allow:
   *
   *   - Danny Morgan is M.Ost and still treats patients [src: site, /about/,
   *     LandingFounder]. "Run by an osteopath" is therefore literal.
   *   - Bodyfunction Clinic is described as an osteopathy and MSK clinic and
   *     Lind Street Osteopathy as an osteopathy clinic, both in the proof rows above,
   *     both copied from their published case studies.
   *   - Those are the only two case studies on the site, so "every case study
   *     we publish is an osteopathy clinic" is checkable in one click. If a
   *     third case study is ever published in another discipline, that sentence
   *     stops being true and has to go.
   */
  "osteopathy-marketing": {
    slug: "osteopathy-marketing",
    adGroup: "Marketing for osteopaths / osteopathy marketing agency",
    metaTitle: "Marketing For Osteopathy Clinics, Run By An Osteopath",
    metaDescription:
      "One system for UK osteopathy clinics: website, SEO, ads, call handling and follow-up, run by one team. Founded by a practising osteopath, and both our published case studies are osteopathy clinics. Request a free clinic audit.",
    badge: "Built by a practising osteopath, in his own clinic",
    // §10's suggested H1, taken almost verbatim because it is better than what
    // was here: "built inside a real osteopathy clinic" is a verifiable fact
    // about where the system comes from, where "run by an osteopath" was a fact
    // about a person. The clinic is the thing another clinic owner recognises.
    headline: {
      start: "Osteopathy marketing built inside ",
      accent: "a real osteopathy clinic",
      end: "",
    },
    // §4: no long paragraphs, CTA above the fold. This is §10's suggested copy
    // and nothing else. A third sentence ("both of the clinics whose figures
    // are on this page are osteopathy clinics") was here and is gone: the
    // proof strip directly below now opens with "What happened at two
    // osteopathy clinics", so the hero was spending a line of a five-line
    // mobile paragraph saying what the next screen says in its heading.
    subhead:
      "Get your clinic found, turn more searches into enquiries and stop good leads going cold. Website, SEO, Google Ads and patient follow-up managed as one connected system.",
    defaultDiscipline: "Osteopath",
    practiceNoun: "osteopathy clinic",
    seoConditions: "back pain, sciatica, sports injury and postural problems",
    // The only variant whose proof heading can claim the discipline outright,
    // because both clinics in the proof rows are osteopathy clinics and both case
    // studies on the site are osteopathy case studies.
    proofHeading: {
      // "What happened at" front-loaded a question word and teased instead of
      // telling. The other three variants already open on "Results from"; this
      // one was the odd one out.
      start: "Results from ",
      accent: "two osteopathy clinics",
    },
    proofStrip: STRIP_OSTEOPATHY,
    adsProof: ADS_PROOF_LEAD,
    proofRows: ROWS_OSTEOPATHY,
    problems: [
      {
        title: "You are not the first osteopath they find",
        body: "Somebody searches “osteopath near me” from a mile away and meets three other practices before yours.",
      },
      {
        title: "Clicks arrive, enquiries do not",
        body: "The site gets visitors and the ads get clicks, and nobody can show you which of either turned into somebody asking for an appointment.",
      },
      {
        title: "Enquiries land while you are treating",
        body: "A form comes in at four o'clock. You are hands-on until seven. Whoever replied first has already booked them.",
      },
      {
        title: "Four suppliers, one diary",
        body: "A web designer, an SEO freelancer, an ads agency and you. None of them can see the whole journey, so the gaps between them belong to nobody.",
      },
      {
        title: "Maintenance patients drift off quietly",
        body: "Nobody announces they have stopped coming. Without something reaching them at three, six and twelve months, the next episode goes elsewhere.",
      },
    ],
    evidenceNote:
      "Both clinics below are osteopathy practices. Bodyfunction is our founder's own; Lind Street is a client who opened cold with nothing.",
    band: {
      // Centre-weighted and cool-toned, which is what a hard crop at two very
      // different aspect ratios needs. It is a high-key frame and reads pale at
      // the top of the mobile band; that was checked and kept, because it still
      // reads as osteopathic manual therapy and the alternatives were worse.
      //
      // WORTH RAISING WITH SIMON, and the reason it was not just swapped in:
      // /images/bodyfunction-clinic-neck-treatment-session-close.jpg is a real
      // photograph of an osteopath at the founding clinic, badge legible, in
      // navy scrubs that happen to match --color-ink exactly. Better
      // provenance than this frame by a mile, and this project rates real
      // photography over stock. It loses on composition alone: its subject
      // sits in the left third, the image has no horizontal overflow at lg so
      // objectPosition cannot move her, and the left third is precisely where
      // the copy column puts solid navy. The desktop band would show her under
      // the text and a white wall in the window. A re-crop of that photograph
      // with the practitioner moved right would win outright.
      image: "/images/osteopath-treatment.jpg",
      objectPosition: "50% 50%",
      eyebrow: "First, three questions",
      headline: {
        // Names the exact split the whole page argues: visibility and
        // conversion are two jobs, and winning the first one is not winning.
        // "Can" rather than "do" on purpose — a modal describes a possibility,
        // where the indicative would be an unsourced assertion about the
        // reader's clinic.
        start: "You can win ",
        accent: "“osteopath near me”",
        end: " and still lose the patient it sends you",
      },
      lead: "Ranking for it is one job. What happens in the minutes after somebody taps your number is another, and it is where the appointment is either made or lost.",
      points: [
        {
          label: "Local search",
          body: "Do you know which osteopathy clinics rank above you in your own town, and why they do?",
        },
        {
          label: "First reply",
          body: "An enquiry lands while you are mid-treatment. How long before somebody answers it?",
        },
        {
          label: "Cost per patient",
          body: "Could you say what one new osteopathy enquiry currently costs you?",
        },
      ],
    },
    variantFaqs: [
      {
        question:
          "Do you actually work with osteopaths, or is this transferred from somewhere else?",
        answer:
          "Both of the clinics whose figures are on this page are osteopathy clinics. Bodyfunction Clinic in Angel is our founder's own osteopathy and MSK practice, and Lind Street Osteopathy opened cold in Ryde with no logo, no website and no search presence. Clinic Evo was founded by a practising osteopath, and every case study we publish is an osteopathy clinic.",
      },
    ],
  },

  "physiotherapy-marketing": {
    slug: "physiotherapy-marketing",
    adGroup: "Marketing for physiotherapist",
    metaTitle: "Marketing For Physiotherapy Clinics, Built For Self-Referrals",
    metaDescription:
      "One system for UK physiotherapy clinics: website, SEO, ads, call handling and follow-up, run by one team. Built inside a working osteopathy and physiotherapy clinic. Request a free clinic audit.",
    // Sourced, and worth knowing where from. bodyfunction.co.uk's own title tag
    // reads "Osteopathy & Physiotherapy Clinic | Islington", checked live on
    // 17 Aug 2026 [src: site — see the comment on CLIENT_SITES in
    // src/lib/clients.ts], and the repo carries a photograph of physiotherapy
    // being delivered there. So the founding clinic is a physiotherapy clinic
    // as well as an osteopathy one, and this variant is allowed to say so.
    // That single sourced fact is what replaced "we have no physiotherapy case
    // study" as the answer to the first FAQ below.
    badge: "Built inside a working osteopathy and physiotherapy clinic",
    // "clinics that fills" was a genuine agreement fault: the relative clause
    // sat against the plural noun, so the eye parsed it wrong before recovering.
    // The head term still leads, so search message match is unchanged.
    //
    // The accent then changed again on 9 Sep 2026. It read "built to fill the
    // diary", which was word-for-word the chiropractic variant's accent, so the
    // two pages a physiotherapist and a chiropractor each landed on differed by
    // one noun. Self-referral is the physiotherapy-specific commercial fact and
    // it pairs with the second FAQ below.
    // §11's suggested H1. "Turns local searches into booked patients" names the
    // outcome rather than the audience, which is what a paid headline should do;
    // the self-referral angle it replaces has moved down into the problem list
    // and the second FAQ, where it has room to mean something.
    headline: {
      start: "Physiotherapy marketing that turns local searches into ",
      accent: "booked patients",
      end: "",
    },
    subhead:
      "SEO, Google Ads, websites and patient follow-up built around how private MSK clinics actually acquire and retain patients. It was developed inside a clinic that treats physiotherapy patients alongside osteopathy, and tested on that clinic's own diary first.",
    defaultDiscipline: "Physiotherapist",
    practiceNoun: "physiotherapy clinic",
    seoConditions:
      "back pain, sciatica, sports injury and post-operative rehab",
    // §11: must not imply a Bodyfunction result came from a physiotherapy
    // client. The brief's own suggested wording, and it is accurate: both
    // clinics are MSK, and bodyfunction.co.uk's title tag reads "Osteopathy &
    // Physiotherapy Clinic | Islington" [src: site, checked 17 Aug 2026].
    proofHeading: {
      start: "Results from the MSK clinics where we ",
      accent: "developed and tested the system",
    },
    proofStrip: STRIP_MSK,
    adsProof: ADS_PROOF_WORKING,
    proofRows: ROWS_MSK,
    problems: [
      {
        title: "One practitioner is flat out, another has gaps",
        body: "Clinic-level enquiry numbers look fine while an individual diary has holes in it, because nothing routes demand to the person with capacity.",
      },
      {
        title: "Clicks arrive, enquiries do not",
        body: "The site gets visitors and the ads get clicks, and nobody can show you which of either turned into somebody asking for an appointment.",
      },
      {
        title: "Enquiries land while you are treating",
        body: "A form comes in at four o'clock. You are hands-on until seven. Whoever replied first has already booked them.",
      },
      {
        title: "Four suppliers, one diary",
        body: "A web designer, an SEO freelancer, an ads agency and you. None of them can see the whole journey, so the gaps between them belong to nobody.",
      },
      {
        title: "Everything sits behind one “what we treat” list",
        body: "A runner with a knee and a patient six weeks post-op need different pages, different ads and different words. One list serves neither.",
      },
    ],
    // §11 wants it clear that these are not physiotherapy-specific results, and
    // §27 wants no implied repeatability. Both are satisfied by saying what the
    // clinics are. The sentence that first sat here added "we do not have a
    // physiotherapy case study published yet", which is the concession this
    // page was rewritten to stop making: honesty about what the evidence IS
    // does not require announcing what it is not.
    evidenceNote:
      "Both clinics below are musculoskeletal practices where this system was built and tested. Bodyfunction treats physiotherapy patients alongside osteopathy.",
    band: {
      // Kinesiology taping: the one image in the repo that could not be
      // mistaken for any other discipline, and its blue-grey ground sits under
      // the navy scrim instead of fighting it.
      //
      // NOT the real Bodyfunction physiotherapy photograph at
      // /images/bodyfunction-physiotherapy-strength-conditioning-floor-exercise-02.jpg,
      // which was the first choice and was tried here on 9 Sep 2026. A real
      // clinic should beat a stock frame, but that room has a full-height
      // orange wall down the right-hand third — exactly where this band's
      // gradient thins to 20% — and under navy it goes muddy amber and then
      // argues with coral two inches away. Coral is the only accent on this
      // site and it is load-bearing; a photograph that competes with it costs
      // more than the provenance is worth. If a landscape, cool-toned
      // photograph of physiotherapy at Bodyfunction ever exists, it wins.
      image: "/images/hero/physiotherapist-knee-taping.jpg",
      // 70%, and this was measured rather than guessed: 45, 55, 62 and 70 were
      // each rendered at 390px and 1440px before picking. The band shows only
      // ~41% of this frame's height on a phone, and the taping is the one
      // detail in it that says physiotherapy rather than manual therapy, so
      // anything below ~65% crops it out on a phone while leaving it visible on
      // a desktop. At 70% it is in shot at both widths, and far enough right at
      // 1440px that its pink and teal stay clear of the coral CTA. Re-render
      // both widths if this moves.
      objectPosition: "50% 70%",
      eyebrow: "First, three questions",
      headline: {
        // Lifted from /physiotherapy-marketing/, where it is already published.
        // A proposition about two hypothetical patients, so it asserts nothing
        // about any real market, and it could not be mistaken for another
        // discipline's headline.
        start: "A runner with a knee and a patient six weeks post\u2011op are not looking for ",
        accent: "the same page",
        end: "",
      },
      lead: "Private physiotherapy is several services sold to several audiences, and a single “what we treat” list serves none of them properly. The search work, the site and the ads have to divide the way your caseload already does.",
      points: [
        {
          label: "Local search",
          body: "Do you know which private clinics rank above you for your specialisms, not just for your town?",
        },
        {
          label: "First reply",
          body: "Enquiries arrive in the evening. Who answers them, and how long do they wait?",
        },
        {
          label: "Cost per patient",
          body: "Could you say what one new self-referred patient currently costs you?",
        },
      ],
    },
    variantFaqs: [
      {
        question: "Will this work for a physiotherapy clinic?",
        answer:
          "It was built in one. Bodyfunction Clinic in Angel, where the system was tested before it was offered to anybody else, is an osteopathy and physiotherapy practice. The search work, the website, the ads and the follow-up are the same job whichever of the two a patient books, and the audit looks at your local search market, your website, your booking path and your follow-up before anybody suggests what to do about them.",
      },
    ],
  },

  "chiropractic-marketing": {
    slug: "chiropractic-marketing",
    adGroup: "Marketing for chiropractic",
    metaTitle: "Marketing For Chiropractic Clinics, Built To Fill The Diary",
    metaDescription:
      "One system for UK chiropractic clinics: website, SEO, ads, call handling and follow-up, run by one team. Built inside a working MSK clinic. Request a free clinic audit.",
    badge: "Built inside a working MSK clinic",
    // §12's suggested H1. Trust before booking is the chiropractic-specific
    // problem and it is not the same problem as visibility, which is what the
    // old "built to fill the diary" accent flattened it into.
    headline: {
      start: "Chiropractic marketing that builds trust ",
      accent: "before the first appointment",
      end: "",
    },
    subhead:
      "Get found when local patients are looking for help, give them a reason to choose your clinic, and follow up every enquiry before it goes cold. Website, SEO, Google Ads and patient follow-up run as one system.",
    defaultDiscipline: "Chiropractor",
    practiceNoun: "chiropractic clinic",
    seoConditions: "back pain, sciatica, neck pain and postural problems",
    // §12: must not imply the evidence is chiropractic-specific. It is not, and
    // there is no chiropractic client to draw on, so the heading frames it as
    // the wider MSK system exactly as the brief asked.
    proofHeading: {
      start: "Results from the MSK clinics where we ",
      accent: "developed and tested the system",
    },
    proofStrip: STRIP_MSK,
    adsProof: ADS_PROOF_WORKING,
    proofRows: ROWS_MSK,
    problems: [
      {
        title: "They want to know what the first visit involves",
        body: "Safety, technique, cost, how many sessions. Four questions a nervous first-timer will not ring up to ask, so the site has to answer them.",
      },
      {
        title: "Clicks arrive, enquiries do not",
        body: "The site gets visitors and the ads get clicks, and nobody can show you which of either turned into somebody asking for an appointment.",
      },
      {
        title: "Enquiries land while you are treating",
        body: "A form comes in at four o'clock. You are hands-on until seven. Whoever replied first has already booked them.",
      },
      {
        title: "Four suppliers, one diary",
        body: "A web designer, an SEO freelancer, an ads agency and you. None of them can see the whole journey, so the gaps between them belong to nobody.",
      },
      {
        title: "Reviews are thin, or three years old",
        body: "Nothing asks a patient for one on the day treatment happened, so the profile a first-timer checks before calling has gone quiet.",
      },
    ],
    // Deliberately does not name the GCC. §12 asked for accuracy if a
    // professional body is mentioned, and the accurate thing is that no source
    // in this repo documents what the GCC's advertising guidance says or how we
    // work within it. So the copy stays with what is true of all regulated
    // healthcare advertising and claims nothing specific. See the FAQ note too.
    // Says what the clinics ARE and stops. Each row already carries its own
    // descriptor ("Osteopathy and MSK clinic, Angel, London"), so a reader can
    // see the discipline without the copy announcing that it is not theirs.
    // A first draft here ended "neither is a chiropractic clinic", which
    // volunteers the gap rather than framing the evidence.
    evidenceNote:
      "Both clinics below are musculoskeletal practices, and both are where this patient-acquisition system was built and tested before it was sold to anybody.",
    band: {
      // Portrait source, cropped to a horizontal slice through the hands. The
      // three chiropractic images in the repo are all portrait, so this is a
      // tuned crop rather than a choice between orientations; objectPosition is
      // set against where the treatment actually sits in the frame.
      image: "/images/chiro-treatment.jpg",
      objectPosition: "50% 48%",
      eyebrow: "First, three questions",
      headline: {
        // Also already published, on /chiropractic-marketing/. An aphorism
        // rather than a statistic, which is what makes it safe as well as good.
        // The accent is the last four words only. Set on the whole second
        // sentence it was seven coral words at 52px, which is a coral block
        // rather than an accent and it out-shouted the CTA a few inches below
        // it. Coral marks the turn in the sentence, not the sentence.
        start: "Nobody books a chiropractor on a good day. They book on ",
        accent: "the day the pain wins",
        end: "",
      },
      lead: "So the search has to be in front of them at that moment, and the site has to answer what a first visit involves (safety, technique, cost, how many sessions) rather than leave all four to the phone call.",
      points: [
        {
          label: "Local search",
          body: "Do you know which chiropractic clinics rank above you in your own town, and why they do?",
        },
        {
          label: "First reply",
          body: "Somebody enquires at 10pm with acute back pain. Who replies to them, and when?",
        },
        {
          label: "Cost per patient",
          body: "Could you say what a new patient enquiry costs you, and whether the tracking behind that figure is right?",
        },
      ],
    },
    variantFaqs: [
      {
        question: "Will this work for a chiropractic clinic?",
        answer:
          "The work is the same shape: local search, a site that answers what a first visit involves, ads pointed at high-intent searches, and follow-up that runs after hours. What we can evidence is musculoskeletal, in clinics our founder either owns or took from nothing to page one. The audit looks at your local search market, your website, your booking path and your follow-up, then shows where the system fits your clinic.",
      },
    ],
  },
};

export function isLpVariantSlug(value: string): value is LpVariantSlug {
  return (LP_VARIANT_SLUGS as readonly string[]).includes(value);
}

export function getLpVariant(slug: string): LpVariant | null {
  return isLpVariantSlug(slug) ? VARIANTS[slug] : null;
}

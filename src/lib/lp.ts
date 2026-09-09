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
 * 2. The offer is one system, scoped per clinic — not a menu of products and not
 *    a fixed package. The homepage settled that framing and `LandingSystem`
 *    renders it; the wording here has to agree with it.
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

/**
 * One slug per Google Ads ad group.
 *
 * `osteopathy-marketing` was added on 9 Sep 2026 and is the strongest of the
 * four, because it is the only one whose proof, founder and photography all
 * belong to the same discipline: both clinics in LP_PROOF are osteopathy
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
    source: "Ahrefs: all ten tracked local searches ranked in the top four",
    clinic: LIND_STREET,
    href: "/case-studies/lind-street-osteopathy/",
  },
  {
    // £30 IS A COST PER CONVERSION, NOT PER BOOKED PATIENT. This row said
    // "booked new patient" until 3 Sep 2026, which was wrong: Danny gave the
    // figure as "cost per patient £30" in WhatsApp that morning [src: WhatsApp,
    // Danny, 3 Sep 2026] and Simon confirmed the same day that it means per
    // conversion [src: client]. Google counts a conversion as a tracked enquiry
    // — a call, a form, a chat — so the metric and headline now say enquiry.
    // Do not put the word "booked" back; see CONVERSION_CAVEAT in
    // src/lib/google-ads-evidence.ts.
    //
    // THE WINDOW WAS REMOVED ON PURPOSE. This row used to carry "Google Ads,
    // 29 Dec 2025 – 22 Jun 2026", which is the window on the overview
    // screenshot behind /google-ads-for-clinics/. That window's own arithmetic
    // is £3.78k over 89 conversions = £42.50, so attaching it to £30 implied
    // £30 came from data that yields a different number. £30 is Danny's own
    // current figure and no window has been given for it; the source line now
    // says whose figure it is instead of implying a period it was measured over.
    //
    // £42.50 therefore stays on /google-ads-for-clinics/, where the screenshot
    // it is read off is on the page, and £30 stays here. Same measure, two
    // periods — so they must never appear on the same page.
    platform: "Google Ads",
    metric: "Cost per patient enquiry",
    figure: "£30",
    headline: "per patient enquiry from Google Ads at Bodyfunction Clinic",
    source: "Bodyfunction Clinic's own Google Ads figure",
    clinic: BODYFUNCTION,
  },
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
   * Two extra FAQs, specific to this ad group, prepended to the shared set.
   * This and `band` are most of what makes a variant more than a headline swap.
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
    headline: {
      start: "Healthcare marketing for UK clinics, ",
      accent: "run by a clinic owner",
      end: "",
    },
    subhead:
      "One team builds the website, wins the local searches, runs the ads, and picks up every enquiry they produce. It is one system built around your clinic, rather than five suppliers you have to manage.",
    practiceNoun: "clinic",
    seoConditions: "back pain, sciatica, sports injury and postural problems",
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
      {
        question:
          "We already have an agency. What would the audit tell us that they have not?",
        answer:
          "What your clinic ranks for right now, which clinics sit above you, and what an enquiry is costing you, with those three things next to each other. If your current reporting already puts them side by side then the audit will largely confirm it, and it cost you nothing to check. If it gives you sessions and impressions instead, that is the gap.",
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
   *     Lind Street Osteopathy as an osteopathy clinic, both in LP_PROOF above,
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
    headline: {
      start: "Marketing for osteopathy clinics, ",
      accent: "run by an osteopath",
      end: "",
    },
    subhead:
      "One team builds the website, wins the local osteopathy searches, runs the ads, and picks up every enquiry they produce. Both of the clinics whose figures appear on this page are osteopathy clinics.",
    defaultDiscipline: "Osteopath",
    practiceNoun: "osteopathy clinic",
    seoConditions: "back pain, sciatica, sports injury and postural problems",
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
      {
        question: "We are one practitioner, not a multi-room clinic. Is this too much for us?",
        answer:
          "No. Lind Street Osteopathy came to us as a brand new single-practitioner clinic and was on page one across its catchment twelve months after opening. The audit sets the scope, and for a solo practice it is more likely to mean two or three layers running properly than all five at once.",
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
    headline: {
      start: "Marketing for physiotherapy clinics, ",
      accent: "built for the patients who self-refer",
      end: "",
    },
    subhead:
      "One team builds the website, wins the local physio searches, runs the ads, and picks up every enquiry they produce. It was built inside a clinic that treats physiotherapy patients alongside osteopathy, and tested on that clinic's own diary first.",
    defaultDiscipline: "Physiotherapist",
    practiceNoun: "physiotherapy clinic",
    seoConditions:
      "back pain, sciatica, sports injury and post-operative rehab",
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
      {
        question:
          "Most of our new patients come from GP and consultant referrals. Why would we need this?",
        answer:
          "Because it is aimed at a different route in. Referrals and self-referral are two separate pipelines into the same diary, and a clinic filling one of them still has the other to open. The audit measures how much self-referral demand your catchment actually has, and what reaching it would cost, before you spend anything on it.",
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
      {
        // On the chiropractic variant rather than the other three because the
        // keyword research puts chiropractic marketing demand at roughly twice
        // physiotherapy's and calls chiropractors the most marketing-aware of
        // the three professions [src: ~/claude/clinic-evo-ads-seo-research.md],
        // so an account already running is the likeliest thing behind a
        // chiropractic click.
        question: "We already run Google Ads. Would you take the account over or start again?",
        answer:
          "The audit tells you which. It looks at what the account is paying per enquiry, and at whether the conversion tracking behind that figure can be trusted, because a cost per enquiry is only as reliable as what is being counted. You get that finding in writing either way, and it is yours whether or not we ever touch the account.",
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

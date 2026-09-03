/**
 * Bodyfunction Clinic's own diary figures — the only appointment and
 * new-patient numbers this site is allowed to publish.
 *
 * WHY THIS FILE EXISTS. Every other figure on the site measures search: Ahrefs
 * and Search Console see impressions, clicks and positions, never a booking.
 * Three pages therefore carried a standing apology — "both tools measure
 * search, not appointments, so we do not publish a booking figure" — and the
 * audience for this site does not buy rankings, it buys a full diary. These two
 * numbers are the first diary numbers with a source behind them.
 *
 * SOURCE. Danny Morgan, in WhatsApp to Simon on 3 Sep 2026 [src: WhatsApp,
 * Danny, 3 Sep 2026], answering "what's your best week ever for new patients".
 * His figures, his qualification, quoted below in the fields that use them.
 *
 * ONE FIGURE PER PAGE. Simon's instruction on 3 Sep 2026: "as soon as a few
 * numbers are seen together they lose their meaning." So these do not go in a
 * StatBand — that component renders three figures side by side, which is the
 * format that flattens them. Each of these gets its own ProofBand, on its own
 * page, and `SITE` is never a figure in its own right: it is the subordinate
 * clause attached to whichever number the page is carrying. NEW_PATIENTS is on
 * the home page. APPOINTMENTS is on the Bodyfunction case study. Do not add a
 * third placement for either without moving it rather than copying it.
 */

/**
 * The qualification Danny volunteered without being asked, and the reason these
 * numbers can be published at all.
 *
 * His words: "It should be qualified that this is for 1 small clinic" — then,
 * unprompted, "572 patients a month is [terrible] if you have 7 locations. It's
 * amazing if you have 1."
 *
 * NOT APPROVED AS A QUOTE. It is the best line in the exchange, because it is a
 * client marking his own ceiling in his own blunt phrasing, and that is worth
 * more to a sceptical clinician than the figure it qualifies. But nobody has
 * cleared it for publication and the site has no approved Bodyfunction quote by
 * design — Bodyfunction is the founding clinic, so a testimonial from it would
 * be Clinic Evo endorsing itself. The SUBSTANCE (one site, five rooms) is what
 * the pages use, and it is unattributed fact rather than quotation. If Danny
 * ever clears the line itself, it belongs beside APPOINTMENTS.
 */
export const SITE = {
  /** For copy: what produced these numbers. */
  description: "one site with five treatment rooms",
  rooms: 5,
  locations: 1,
};

/** Best month for new patients. [src: WhatsApp, Danny, 3 Sep 2026] */
export const NEW_PATIENTS = {
  figure: "212",
  metric: "New patients in the clinic's best month",
  source: "Bodyfunction Clinic's own practice figures",
};

/** Most appointments in a month. [src: WhatsApp, Danny, 3 Sep 2026] */
export const APPOINTMENTS = {
  figure: "572",
  metric: "Appointments in the clinic's busiest month",
  source: "Bodyfunction Clinic's own practice figures",
};

/**
 * WHAT DANNY DID NOT SAY. Read this before writing either figure into a page.
 *
 * 1. THEY ARE NOT THE SAME MONTH. He gave them as two separate personal bests —
 *    "best month was 212", then "most appointment 572 in a month". Simon
 *    summarised them back as one month ("1 location 5 rooms 572 appointments
 *    212 new patients") and Danny did not reply to that. Written as one month it
 *    is an unconfirmed claim; written as two bests it is exactly what he said.
 *    That is why they live on two different pages and never in one sentence.
 *
 * 2. NEVER MULTIPLY 212 BY £30. The £30 cost per enquiry in src/lib/lp.ts is a
 *    Google Ads figure; 212 is clinic-wide new patients from every source. The
 *    product, £6,360, is 1.7x the entire six-month ad spend visible on the
 *    screenshot behind /google-ads-for-clinics/ (£3.78k). At £30 an enquiry that
 *    account buys roughly 22 a month, so ads account for about a tenth of 212.
 *    Putting the two numbers in one sentence would have the site contradict its
 *    own published screenshot.
 *
 * 3. NO DATES. Neither month is dated, so neither can be plotted against the
 *    Aug 2024 – Aug 2026 search series in the case study. They are a capacity
 *    fact, not a point on that curve, and they need their own block.
 *
 * 4. THE 572 FRAMING FROM THE DECK IS STILL BANNED. The programme deck says
 *    "572 new patient enquiries in 30 days". It is appointments, not enquiries,
 *    and the deck's number is roughly two and a half times the actual new-patient
 *    figure. That misframing is most of why it read as unverifiable and was cut
 *    from the home page. Publishing 572 as ENQUIRIES is still a fabrication; see
 *    the note in src/lib/graduate.ts.
 *
 * 5. NOT FOR /graduate/. 212 new patients from five rooms is the wrong proof for
 *    someone opening solo from a standing start, where Lind Street is the
 *    on-message evidence.
 */

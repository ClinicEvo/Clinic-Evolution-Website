import FAQAccordion from "@/components/sections/FAQAccordion";
import FadeUp from "@/components/ui/FadeUp";
import { LP_SECTION_ANCHORS, type LpVariant } from "@/lib/lp";

/**
 * Shared objections, plus two questions written for this ad group specifically.
 *
 * The variant questions are much of what makes a variant more than a headline
 * swap: a physiotherapist who clicked a physiotherapy ad previously found
 * nothing below the H1 written for physiotherapists. There was one per variant
 * until 9 Sep 2026; see `variantFaqs` in src/lib/lp.ts for what the second one
 * is doing on each page, and for why the physiotherapy and chiropractic
 * answers no longer open by conceding that no case study exists.
 *
 * No FAQSchema on this page, deliberately — it is noindex, and marking up
 * questions Google is told not to index is pointless. The organic service pages
 * carry the schema.
 *
 * Pricing is deliberately absent. These pages need to earn the enquiry before
 * opening a commercial conversation, and a generic "it depends" answer gives a
 * skimmer neither a useful number nor a reason to get in touch.
 */
/**
 * §20 — five shared objections plus one written for the ad group, six in total.
 *
 * The set is the brief's list, in its order, with one substitution. It asked
 * for "Does Clinic Evo only work with MSK clinics?"; that slot is the variant's
 * own question instead (see `variantFaqs` in src/lib/lp.ts), because on the
 * osteopathy page the useful version is "do you actually work with osteopaths"
 * and on the broad page it is "we are not an MSK clinic, does this apply". Same
 * objection, asked in the reader's words.
 *
 * COST IS NOW ANSWERED, which reverses a documented decision. This file used to
 * say pricing was "deliberately absent... a generic 'it depends' gives a
 * skimmer neither a useful number nor a reason to get in touch."
 *
 * A NUMBER IS NOW PUBLISHED, since 14 Sep 2026: the Growth System pages under
 * /lp/growth-system/ carry £1,350 a month for the complete system, on Simon's
 * decision and per the landing page brief. So the answer below names that
 * figure too. A visitor who sees an audit page and a Growth System page must
 * not find one saying "it depends" and the other saying £1,350. What still
 * depends is which parts a clinic needs, and that is what the audit settles.
 *
 * WHAT IS NOT HERE. "Is this a fixed package, or is it built around my clinic?"
 * was removed: its answer offered to "deliver it as a standalone service",
 * which directly contradicted LandingSystem's "You do not pick items off this
 * list" two screens above. That contradiction is flagged to Simon and unresolved
 * — so rather than pick a side, the question is gone and "What does Clinic Evo
 * actually manage?" covers the scope honestly without making a claim about
 * whether parts can be bought separately.
 */
const SHARED_FAQS = [
  {
    question: "How is Clinic Evo different from a normal marketing agency?",
    // "We were a clinic before we were an agency" opened this until 9 Sep 2026
    // and is now the hero eyebrow on the chiropractic and healthcare pages. The
    // answer starts on the fact instead of the slogan.
    answer:
      "Clinic Evo was built inside Bodyfunction Clinic in London by its owner, and only then offered to anyone else. The practical difference is that we take responsibility past the enquiry: the call handling, the follow-up and the recall are ours to run, so there is no gap to argue about.",
  },
  {
    // The section heading above carries the page's one "actually"; the
    // question does not need a second.
    question: "What does Clinic Evo manage day to day?",
    answer:
      "The website, the local search work, the paid campaigns, the phone, and the follow-up after an enquiry arrives. One team runs all of it and reports on it together, so enquiries and bookings sit next to the spend that produced them rather than in four separate dashboards.",
  },
  {
    // Trimmed on 9 Sep 2026 so it does not restate the contract answer below
    // it. That one owns "we explain it before you agree"; this one owns what
    // the figure depends on. No number appears, because none is published
    // anywhere on this site.
    question: "What does it cost?",
    answer:
      "The complete Growth System, which is the website, SEO, Google and Meta advertising management, Patient Pulse, reactivation, referrals and mentoring run together, is £1,350 a month, with advertising budget and messaging usage paid separately. If your clinic needs only part of it, the audit establishes which part, and you get the plan and a realistic figure for running it before anything is agreed.",
  },
  {
    // ANSWER SUPPLIED BY SIMON, 9 Sep 2026, and used verbatim. It replaced
    // "No. Rolling monthly, no long-term lock-in", which asserted a commercial
    // model that is not universally true and had no source behind it.
    //
    // Note what this answer deliberately does NOT do: it does not say no, and
    // it does not say yes. That is the point. It commits to explaining the
    // commitment before anybody signs, which is the reassurance a paid visitor
    // actually needs, without inventing terms. Do not "improve" it back into a
    // promise.
    question: "Do I need to sign a long contract?",
    answer:
      "We\u2019ll explain the recommended package, pricing and commitment clearly before you agree to anything. The right setup depends on what your clinic needs and what we\u2019re taking responsibility for.",
  },
  {
    question: "What happens during the free clinic audit?",
    // Answers the question asked (what happens, and what the reader has to do)
    // rather than re-listing the seven things LandingAuditPitch already lists.
    // The turnaround is stated three times on the page already, and "a person,
    // not a tool" and "yours to keep" each have their one place.
    answer:
      "Nothing on your side. Send the four details and we do the rest: rankings, the site, your Google Business Profile, your ads if you run any, and what happens to an enquiry once it arrives. We come back to you with what we would fix first.",
  },
];

export default function LandingFaq({ variant }: { variant: LpVariant }) {
  const faqs = [...variant.variantFaqs, ...SHARED_FAQS];

  return (
    // Ad sitelink target — see LP_SECTION_ANCHORS before renaming.
    <section
      id={LP_SECTION_ANCHORS.faq.slice(1)}
      tabIndex={-1}
      className="scroll-mt-20 focus-visible:outline-none border-b border-[var(--color-border)] bg-[var(--color-paper)] py-24 sm:py-28 lg:py-32"
    >
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <FadeUp>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-5">Questions</p>
              {/* Was "How it works, what happens next, and where we would
                  start" — three clauses, opening on "How it", and generic
                  enough to sit on any page on the internet. The new one names
                  the three objections the questions below actually answer, so
                  a scanner learns what is in the section from its first two
                  words. */}
              <h2 className="text-h2 text-[var(--color-ink)]">
                Cost, contracts, and{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  what we actually manage
                </em>
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] px-6 py-2 shadow-[var(--shadow-card)] sm:px-9">
              <FAQAccordion items={faqs} />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

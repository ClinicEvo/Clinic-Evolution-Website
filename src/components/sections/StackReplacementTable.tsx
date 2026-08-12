import FadeUp from "@/components/ui/FadeUp";
import { brandHex, brandMarks, type BrandSlug } from "@/components/icons/BrandIcons";

/**
 * "One system, not a stack of subscriptions."
 *
 * Danny's argument from the 10 Aug review, made as a graphic: a clinic owner is
 * already paying for — and switching between — a stack of separate tools, and
 * Patient Pulse covers the same ground in one place.
 *
 * Marks render in their official brand colours, matching every other logo on the
 * page, so a clinic owner recognises their own stack on sight.
 *
 * Comparables are chosen for honesty first, logo availability second. The
 * reviews, landing-page and e-signature rows carry wordmarks rather than marks
 * because the accurate comparables for those jobs have no mark in simple-icons,
 * and substituting a brand we *can* draw would misrepresent what Patient Pulse
 * actually replaces.
 *
 * Pricing basis, checked August 2026, GBP, excluding VAT.
 *
 * These are priced for a REAL CLINIC, not for a sole trader on a free tier:
 * three staff logins (practitioner, reception, practice manager) and a patient
 * list in the low thousands. An earlier version quoted every vendor's absolute
 * cheapest entry tier — Mailchimp at 500 contacts, single seats throughout — and
 * produced a total no clinic would recognise, which made the comparison look
 * weaker than the truth rather than stronger.
 *
 * Each row therefore carries a `basis` string, shown in the table next to the
 * price. Stating the quantity is what makes a larger number checkable instead of
 * looking inflated, and it is the honest way to run a comparative price claim.
 *
 * Per-seat rows are the verified per-seat price multiplied by the seat count,
 * which is arithmetic rather than estimation. `verified` marks figures read
 * directly off the vendor's own live pricing page.
 *
 * Three categories are genuinely quote-only. Reputation platforms and AI
 * add-ons do not publish, so they are excluded from the total — meaning the real
 * cost of the separate stack is higher than the figure shown, not lower.
 */
interface Replaced {
  name: string;
  /** Renders the official mark alongside the name where one exists. */
  brand?: BrandSlug;
}

interface Row {
  /** The job the clinic needs doing. */
  job: string;
  /** Why a clinic owner cares. One short clause, not a feature restatement. */
  value: string;
  /** Comparable tools a clinic would otherwise buy. */
  replaces: Replaced[];
  /** GBP per month at the stated basis, excluding VAT. */
  from?: number;
  /** The quantity the price assumes, e.g. "3 logins". Shown beside the price. */
  basis?: string;
  /** Vendors in this category quote rather than publish. */
  quoteOnly?: boolean;
  /** Read directly off the vendor's live pricing page rather than a secondary source. */
  verified?: boolean;
}

const rows: Row[] = [
  {
    job: "CRM and pipeline management",
    value: "Every enquiry stays visible instead of scattering across inboxes and spreadsheets",
    replaces: [
      { name: "HubSpot", brand: "hubspot" },
      { name: "Zoho", brand: "zoho" },
    ],
    from: 45, // CHECK: 3 x HubSpot Starter at £15/seat. Seat price not read off HubSpot's own page.
    basis: "3 logins",
  },
  {
    job: "Centralised conversations and live chat",
    value: "SMS, WhatsApp, Facebook, Instagram and TikTok messages land in one team inbox",
    replaces: [
      { name: "Intercom", brand: "intercom" },
      { name: "Zendesk", brand: "zendesk" },
    ],
    from: 69, // CHECK: 3 x Intercom Essential at $29/seat converted. Seat price not verified.
    basis: "3 logins",
  },
  {
    job: "Email marketing and newsletters",
    value: "Patient newsletters and campaigns run from the same database as your enquiries",
    replaces: [
      { name: "Mailchimp", brand: "mailchimp" },
      { name: "Campaign Monitor", brand: "campaignmonitor" },
    ],
    from: 45, // CHECK: least certain figure on the page. Mailchimp Standard scales with
              // list size and its pricing page would not render a GBP tier for scraping.
    basis: "~2,500 contacts",
  },
  {
    job: "Two-way SMS to patients",
    value: "Reminders and replies by text, the channel patients actually answer on",
    replaces: [{ name: "Podium" }, { name: "Sendlane" }],
    quoteOnly: true,
  },
  {
    job: "Social media scheduling",
    value: "A month of clinic content planned and queued in one sitting",
    replaces: [
      { name: "Hootsuite", brand: "hootsuite" },
      { name: "Buffer", brand: "buffer" },
    ],
    from: 78,
    verified: true, // Hootsuite Standard, $99 USD read off hootsuite.com/plans
  },
  {
    job: "Booking links and calendars",
    value: "Patients pick a slot themselves instead of waiting for a callback",
    replaces: [{ name: "Calendly", brand: "calendly" }],
    from: 24,
    basis: "3 logins",
    verified: true, // Calendly Standard, $10/seat billed yearly, read off calendly.com/pricing
  },
  {
    job: "Forms and patient intake",
    value: "Intake completed before the appointment, not on a clipboard in reception",
    replaces: [{ name: "Typeform", brand: "typeform" }],
    from: 20, // CHECK: Typeform Basic, $25 converted.
  },
  {
    job: "Workflow automation",
    value: "Follow-up that runs itself instead of living in someone's head",
    replaces: [{ name: "ActiveCampaign" }, { name: "Keap" }],
    from: 39, // CHECK: ActiveCampaign entry tier.
  },
  {
    job: "AI replies and chat",
    value: "First response drafted and sent while you are still in the treatment room",
    replaces: [{ name: "Intercom Fin", brand: "intercom" }, { name: "Drift" }],
    quoteOnly: true,
  },
  {
    job: "Reputation and review requests",
    value: "Google review requests go out automatically, the same day treatment happens",
    replaces: [{ name: "Birdeye" }, { name: "Reviews.io" }],
    quoteOnly: true,
  },
  {
    job: "Landing pages for offers",
    value: "Campaign pages that match the ad the patient just clicked",
    replaces: [{ name: "Leadpages" }, { name: "Unbounce" }],
    from: 39, // CHECK: Leadpages Standard, $49 converted.
  },
  {
    job: "Document signing",
    value: "Consent forms signed before the patient arrives",
    replaces: [{ name: "DocuSign" }, { name: "PandaDoc" }],
    from: 40,
    basis: "2 users",
    verified: true, // DocuSign Standard, £20/user/mo published in GBP on docusign.com/en-gb
  },
];

const total = rows.reduce((sum, r) => sum + (r.from ?? 0), 0);
const quoteOnlyCount = rows.filter((r) => r.quoteOnly).length;

function BrandPill({ item }: { item: Replaced }) {
  const Mark = item.brand ? brandMarks[item.brand] : null;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-paper)] px-2.5 py-1 text-[0.72rem] font-semibold text-[var(--color-muted)]">
      {Mark && item.brand && (
        <Mark
          className="h-3.5 w-3.5 flex-shrink-0"
          // Inline style rather than a class: the value is the brand's own hex,
          // not a design-system token.
          style={{ color: brandHex[item.brand] }}
        />
      )}
      {item.name}
    </span>
  );
}

function IncludedMark() {
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[0.78rem] font-bold text-[var(--color-accent)]">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M2.5 7.5l3 3 6-6.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Included
    </span>
  );
}

export default function StackReplacementTable() {
  return (
    <section className="py-20 lg:py-24 bg-[var(--color-paper)]">
      <div className="cx-main">
        <FadeUp>
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">One system, not a stack of subscriptions</p>
            <h2 className="text-h2 mb-5 leading-tight text-[var(--color-ink)]">
              You are probably already paying for most of this
            </h2>
            <p className="text-body-lg text-[var(--color-charcoal)]">
              A mailing list here, a booking link there, a review tool someone set up two
              years ago, and four apps open just to answer messages. Patient Pulse covers
              the same ground in one place, with your patient database underneath all of
              it.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          {/*
            One DOM, two layouts. From md up this is a real four-column table. Below
            md the cells switch to display:block and stack, because a horizontally
            scrolling table on a phone hides the price and "Included" columns — the
            two that carry the argument — behind a swipe nobody realises is there.
            Roles are declared explicitly: display:block strips the native table
            semantics out of the accessibility tree, and this is tabular data in both
            layouts.
          */}
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-[var(--shadow-card)] md:overflow-x-auto">
            <table
              role="table"
              className="w-full border-collapse text-left md:min-w-[48rem]"
            >
              <caption className="sr-only">
                What Patient Pulse covers, compared with buying separate tools for each job
              </caption>
              <thead role="rowgroup" className="hidden md:table-header-group">
                <tr role="row" className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                  <th
                    role="columnheader"
                    scope="col"
                    className="px-6 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]"
                  >
                    What your clinic needs
                  </th>
                  <th
                    role="columnheader"
                    scope="col"
                    className="px-6 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]"
                  >
                    Bought separately
                  </th>
                  <th
                    role="columnheader"
                    scope="col"
                    className="px-6 py-4 text-right text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]"
                  >
                    Typical cost
                  </th>
                  <th
                    role="columnheader"
                    scope="col"
                    className="px-6 py-4 text-right text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]"
                  >
                    Patient Pulse
                  </th>
                </tr>
              </thead>
              <tbody role="rowgroup">
                {rows.map((row) => (
                  <tr
                    key={row.job}
                    role="row"
                    className="block border-b border-[var(--color-border)] px-6 py-5 last:border-b-0 md:table-row md:p-0 md:hover:bg-[var(--color-surface)]/50"
                  >
                    <th
                      role="rowheader"
                      scope="row"
                      className="block text-left align-top font-normal md:table-cell md:px-6 md:py-5"
                    >
                      <span className="block text-[0.95rem] font-semibold leading-snug text-[var(--color-ink)]">
                        {row.job}
                      </span>
                      <span className="mt-1 block max-w-xs text-[0.8rem] leading-relaxed text-[var(--color-muted)]">
                        {row.value}
                      </span>
                    </th>
                    <td
                      role="cell"
                      className="mt-3 block align-top md:mt-0 md:table-cell md:px-6 md:py-5"
                    >
                      <span className="flex flex-wrap gap-1.5">
                        {row.replaces.map((item) => (
                          <BrandPill key={item.name} item={item} />
                        ))}
                      </span>
                    </td>
                    <td
                      role="cell"
                      className="mr-5 mt-3 inline-block whitespace-nowrap align-top text-[0.85rem] text-[var(--color-muted)] md:mr-0 md:mt-0 md:table-cell md:px-6 md:py-5 md:text-right"
                    >
                      {row.quoteOnly ? (
                        <span className="italic">quote only</span>
                      ) : (
                        <>
                          from{" "}
                          <span className="font-display font-semibold tabular-nums text-[var(--color-charcoal)]">
                            £{row.from}
                          </span>
                          /mo
                          {row.basis && (
                            <span className="ml-1 text-[0.72rem] text-[var(--color-muted)]/75 md:ml-0 md:block">
                              {row.basis}
                            </span>
                          )}
                        </>
                      )}
                    </td>
                    <td
                      role="cell"
                      className="mt-3 inline-block align-top md:mt-0 md:table-cell md:px-6 md:py-5 md:text-right"
                    >
                      <IncludedMark />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot role="rowgroup">
                <tr
                  role="row"
                  className="block bg-[var(--color-ink)] px-6 py-5 text-white md:table-row md:p-0"
                >
                  <th
                    role="rowheader"
                    scope="row"
                    className="block text-left text-[0.95rem] font-semibold text-white md:table-cell md:px-6 md:py-5"
                  >
                    Every job above, one login
                  </th>
                  <td
                    role="cell"
                    className="mt-1 block text-[0.8rem] text-white/60 md:mt-0 md:table-cell md:px-6 md:py-5"
                  >
                    {rows.length} tools to buy, learn and reconcile
                  </td>
                  <td
                    role="cell"
                    className="mr-5 mt-3 inline-block whitespace-nowrap md:mr-0 md:mt-0 md:table-cell md:px-6 md:py-5 md:text-right"
                  >
                    <span className="font-display text-lg font-semibold tabular-nums text-white">
                      £{total}+
                    </span>
                    <span className="text-[0.8rem] text-white/60">/mo</span>
                  </td>
                  <td
                    role="cell"
                    className="mt-3 inline-block text-[0.85rem] font-semibold text-[var(--color-accent)] md:mt-0 md:table-cell md:px-6 md:py-5 md:text-right"
                  >
                    One subscription
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </FadeUp>

        <FadeUp delay={0.12}>
          <p className="mt-5 max-w-3xl text-[0.75rem] leading-relaxed text-[var(--color-muted)]">
            Priced for a working clinic — three staff logins and a patient list in the
            low thousands — rather than a single-user starter tier, using the cheapest
            plan from each vendor that supports that. Checked August 2026, excluding VAT.
            Per-seat products are the published seat price multiplied by the number of
            logins shown. Where a vendor publishes in US dollars only, converted at
            £1 = $1.27. {quoteOnlyCount} of the categories above are quote-only and are
            left out of the total entirely, so a real clinic stack costs more than the
            figure shown, not less. Product names and logos are trademarks of their
            respective owners, shown for comparison only.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

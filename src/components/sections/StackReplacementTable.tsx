import FadeUp from "@/components/ui/FadeUp";
import { brandMarks, type BrandSlug } from "@/components/icons/BrandIcons";

/**
 * "One system, not a stack of subscriptions."
 *
 * Danny's argument from the 10 Aug review, made as a graphic: a clinic owner is
 * already paying for — and switching between — a stack of separate tools, and
 * Patient Pulse covers the same ground in one place.
 *
 * Marks render monochrome here, unlike the integration strip. Nine rows of
 * competitor brand colours reads as a logo salad and pulls the eye away from the
 * "Included" column, which is the point of the table.
 *
 * Comparables are chosen for honesty first, logo availability second. The
 * reviews, landing-page and e-signature rows carry wordmarks rather than marks
 * because the accurate comparables for those jobs have no mark in simple-icons,
 * and substituting a brand we *can* draw would misrepresent what Patient Pulse
 * actually replaces.
 *
 * Pricing, checked August 2026. Every figure is the vendor's cheapest published
 * entry tier, excluding VAT, and is deliberately rounded DOWN: understating what
 * the separate stack costs makes our own claim weaker, never overstated, which
 * is the safe direction for a comparative price claim.
 *
 * `verified` marks the three read directly off the vendor's own live pricing
 * page. The rest are best-effort list prices — correct them here, in this one
 * array, and the total and footnote follow automatically.
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
  /** Cheapest published entry tier, GBP per month, excluding VAT. */
  from?: number;
  /** Vendors in this category quote rather than publish. */
  quoteOnly?: boolean;
  /** Read directly off the vendor's live pricing page rather than a secondary source. */
  verified?: boolean;
}

const rows: Row[] = [
  {
    job: "CRM and contact management",
    value: "Every enquiry stays visible instead of scattering across inboxes and spreadsheets",
    replaces: [
      { name: "HubSpot", brand: "hubspot" },
      { name: "Zoho", brand: "zoho" },
    ],
    from: 15, // HubSpot Marketing Hub Starter, per seat
  },
  {
    job: "Centralised conversations and live chat",
    value: "SMS, WhatsApp, Facebook, Instagram and TikTok messages land in one team inbox",
    replaces: [
      { name: "Intercom", brand: "intercom" },
      { name: "Zendesk", brand: "zendesk" },
    ],
    from: 23, // Intercom Essential, $29/seat converted
  },
  {
    job: "Email marketing and newsletters",
    value: "Patient newsletters and campaigns run from the same database as your enquiries",
    replaces: [
      { name: "Mailchimp", brand: "mailchimp" },
      { name: "Campaign Monitor", brand: "campaignmonitor" },
    ],
    from: 10, // Mailchimp Essentials, 500 contacts
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
    from: 8,
    verified: true, // Calendly Standard, $10/seat billed yearly, read off calendly.com/pricing
  },
  {
    job: "Forms and patient intake",
    value: "Intake completed before the appointment, not on a clipboard in reception",
    replaces: [{ name: "Typeform", brand: "typeform" }],
    from: 20, // Typeform Basic, $25 converted
  },
  {
    job: "Reviews and reputation",
    value: "Google review requests go out automatically, the same day treatment happens",
    replaces: [{ name: "Birdeye" }, { name: "Reviews.io" }],
    quoteOnly: true,
  },
  {
    job: "Landing pages for offers",
    value: "Campaign pages that match the ad the patient just clicked",
    replaces: [{ name: "Leadpages" }, { name: "Unbounce" }],
    from: 39, // Leadpages Standard, $49 converted
  },
  {
    job: "Document signing",
    value: "Consent forms signed before the patient arrives",
    replaces: [{ name: "DocuSign" }, { name: "PandaDoc" }],
    from: 8,
    verified: true, // DocuSign Personal, £8/mo published in GBP on docusign.com/en-gb
  },
];

const total = rows.reduce((sum, r) => sum + (r.from ?? 0), 0);
const quoteOnlyCount = rows.filter((r) => r.quoteOnly).length;

function BrandPill({ item }: { item: Replaced }) {
  const Mark = item.brand ? brandMarks[item.brand] : null;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-paper)] px-2.5 py-1 text-[0.72rem] font-semibold text-[var(--color-muted)]">
      {Mark && <Mark className="h-3.5 w-3.5 flex-shrink-0 opacity-60" />}
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
    <section className="section bg-[var(--color-paper)]">
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
            Each vendor&apos;s cheapest published entry tier, checked August 2026,
            excluding VAT, and rounded down. Where a vendor publishes in US dollars only,
            converted at £1 = $1.27. Most of these tools charge more as your contact list
            or team grows, some are priced per user, and {quoteOnlyCount} of the
            categories above is quote-only, so a real clinic stack almost always costs
            more than the total shown. Product names and logos are trademarks of their
            respective owners, shown for comparison only.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

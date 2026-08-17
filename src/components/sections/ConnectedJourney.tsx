import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import ArrowLink from "@/components/ui/ArrowLink";
import { brandHex, brandMarks, type BrandSlug } from "@/components/icons/BrandIcons";
import { colorMarks, type ColorMarkSlug } from "@/components/icons/BrandColorMarks";

/**
 * Where Patient Pulse sits: after the acquisition channels, before the booking.
 *
 * The 10 Aug review kept returning to this point — that the site explains the
 * individual services but never shows them working as one thing, and that
 * Patient Pulse is "the glue that brings all that together". This is that
 * diagram: four channels converge into one system, and the system produces two
 * outcomes.
 *
 * Built from layout rather than a single fixed SVG so it reflows to a vertical
 * stack on a phone. Only the converging connector is drawn, and it is hidden
 * below md where the stack reads top-to-bottom anyway.
 */

/** Marks in brand colour, so the acquisition channels are recognisable at a
 *  glance rather than four identical text cards. The website card carries no
 *  mark: it is the clinic's own site, not a third-party platform. */
const channels: Array<{
  label: string;
  detail: string;
  href: string;
  brands?: BrandSlug[];
}> = [
  {
    label: "Your website",
    detail: "Forms and live chat",
    href: "/website-design-for-clinics/",
  },
  {
    label: "Search and SEO",
    detail: "Map pack and organic",
    href: "/seo-for-clinics/",
    brands: ["google"],
  },
  {
    label: "Google Ads",
    detail: "High-intent paid search",
    href: "/google-ads-for-clinics/",
    brands: ["google"],
  },
  {
    label: "Paid social",
    detail: "Facebook, Instagram, TikTok",
    href: "/digital-marketing/",
    brands: ["facebook", "instagram", "tiktok"],
  },
];

const pulseDoes = [
  "Captures the enquiry, whichever channel it came from",
  "Replies automatically within minutes, day or night",
  "Keeps it on a board until it is booked or closed",
];

const outcomes = [
  {
    label: "A booked patient",
    detail:
      "Straight into the Cliniko diary from the conversation, without a game of phone tag.",
  },
  {
    label: "A patient who comes back",
    detail:
      "Review requested, nurture running, recall at 3, 6 and 12 months. All automatic.",
  },
];

/**
 * On the three service pages this section is the first mention of Patient Pulse,
 * and the eyebrow names it before anything has shown what it is. The mark plus a
 * one-line identity fixes that, and gives those pages the route to the product
 * page they were missing entirely.
 *
 * `showPulseLink` exists for /patient-pulse/, where the link would point at the
 * page the reader is already on.
 */
export default function ConnectedJourney({
  showPulseLink = true,
}: {
  showPulseLink?: boolean;
}) {
  return (
    <section className="py-20 lg:py-24 bg-[var(--color-paper)]">
      <div className="cx-main">
        <FadeUp>
          <div className="mb-14 grid gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">Where Patient Pulse sits</p>
              <h2 className="text-h2 mb-5 leading-tight text-[var(--color-ink)]">
                Every enquiry your marketing creates ends up here
              </h2>
              <p className="text-body-lg text-[var(--color-charcoal)]">
                Websites, SEO and ads all do the same job: they get someone to make contact.
                What happens in the twenty minutes after that decides whether they become
                your patient or someone else&apos;s.
              </p>
            </div>

            {/* A rule rather than a card: a bordered box here would compete with
                the four channel cards immediately below it. Border flips from top
                on a phone, where the lockup sits under the prose, to left on
                desktop, where it sits beside it.

                The grid item is left to stretch so the rule runs the full height
                of the headline block — a rule that stopped at the lockup would
                leave the space beside the headline unstructured — and the lockup
                is centred against it. */}
            <div className="flex flex-col justify-center border-t border-[var(--color-border)] pt-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <Image
                src="/images/patientpulse_logo.png"
                alt="Patient Pulse"
                width={3116}
                height={440}
                sizes="240px"
                className="h-auto w-[190px] lg:w-[225px]"
              />
              <p className="mt-5 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
                Our own clinic CRM, patient messaging and follow-up system, built for UK
                osteopaths, physiotherapists and chiropractors.
              </p>
              {showPulseLink && (
                <ArrowLink href="/patient-pulse/" className="mt-5">
                  See what Patient Pulse does
                </ArrowLink>
              )}
            </div>
          </div>
        </FadeUp>

        {/* Channels */}
        <FadeUp delay={0.06}>
          <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {channels.map((c) => (
              <li key={c.label}>
                <Link
                  href={c.href}
                  className="group flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] px-5 py-5 transition-colors duration-200 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface)]/60"
                >
                  {/* Height is reserved even when a card carries no mark, so all
                      four labels sit on the same baseline. */}
                  <span className="mb-3 flex h-[1.15rem] items-center gap-1.5">
                    {c.brands?.map((slug) => {
                      // Full-colour mark where the brand's real logo needs more
                      // than one colour (Google's four-colour G, Instagram's
                      // gradient, TikTok's offset note); otherwise the
                      // monochrome path in the brand's own hex, which for
                      // Facebook is already the real logo.
                      const ColorMark = colorMarks[slug as ColorMarkSlug];
                      if (ColorMark) {
                        return (
                          <ColorMark
                            key={slug}
                            className="h-[1.15rem] w-[1.15rem] flex-shrink-0"
                          />
                        );
                      }
                      const Mark = brandMarks[slug];
                      return (
                        <Mark
                          key={slug}
                          className="h-[1.15rem] w-[1.15rem] flex-shrink-0"
                          // Inline style rather than a class: the value is the
                          // brand's own hex, not a design-system token.
                          style={{ color: brandHex[slug] }}
                        />
                      );
                    })}
                  </span>
                  <span className="text-[0.92rem] font-semibold leading-snug text-[var(--color-ink)] group-hover:text-[var(--color-accent)]">
                    {c.label}
                  </span>
                  <span className="mt-1 text-[0.78rem] leading-snug text-[var(--color-muted)]">
                    {c.detail}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </FadeUp>

        {/* Converging connector — decorative, and only where the row is horizontal. */}
        <div className="hidden md:block" aria-hidden="true">
          <svg
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            className="h-14 w-full text-[var(--color-border)]"
            fill="none"
          >
            {/* Straight diagonals converging on a single point, then one stub
                down into the Patient Pulse panel. Curved variants read as four
                rounded boxes once preserveAspectRatio stretches them. */}
            <path
              d="M12.5 0 L50 7 M37.5 0 L50 7 M62.5 0 L50 7 M87.5 0 L50 7 M50 7 V10"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Mobile connector */}
        <div className="flex justify-center py-6 md:hidden" aria-hidden="true">
          <svg width="16" height="28" viewBox="0 0 16 28" fill="none" className="text-[var(--color-muted-light)]">
            <path
              d="M8 0v22m0 0l-5-5m5 5l5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Patient Pulse — the layer everything lands in. */}
        <FadeUp delay={0.1}>
          <div className="overflow-hidden rounded-[var(--radius-panel)] bg-[var(--color-ink)] text-white">
            <div className="grid gap-8 p-8 md:p-11 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  Everything lands here
                </p>
                <h3 className="text-h3 mt-4 text-white">Patient Pulse</h3>
                <p className="text-body mt-4 leading-relaxed text-white/65">
                  One inbox, one patient database, one board. The layer that turns four
                  separate marketing channels into one predictable flow of booked
                  appointments.
                </p>
              </div>
              <ul className="flex flex-col justify-center divide-y divide-white/10 border-t border-white/10 lg:border-t-0">
                {pulseDoes.map((item) => (
                  <li key={item} className="flex items-start gap-4 py-4 first:pt-0 lg:first:pt-4">
                    <svg
                      className="mt-1 flex-shrink-0 text-[var(--color-accent)]"
                      width="15"
                      height="15"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 7.5l3 3 6-6.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[0.92rem] leading-snug text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>

        {/* Connector into outcomes */}
        <div className="flex justify-center py-6" aria-hidden="true">
          <svg width="16" height="28" viewBox="0 0 16 28" fill="none" className="text-[var(--color-muted-light)]">
            <path
              d="M8 0v22m0 0l-5-5m5 5l5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Outcomes */}
        <FadeUp delay={0.14}>
          <ul className="grid gap-4 md:grid-cols-2">
            {outcomes.map((o) => (
              <li
                key={o.label}
                className="rounded-[var(--radius-card)] border-t-2 border-[var(--color-accent)] bg-[var(--color-surface)]/70 px-7 py-7"
              >
                <p className="text-h4 font-semibold text-[var(--color-ink)]">{o.label}</p>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-[var(--color-muted)]">
                  {o.detail}
                </p>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}

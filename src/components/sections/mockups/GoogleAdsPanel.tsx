import Image from "next/image";
import LaptopFrame from "./LaptopFrame";
import BrowserFrame from "./BrowserFrame";
import { GoogleAdsLockup } from "@/components/icons/GoogleColorMark";
import { ACCOUNT, WINDOW } from "@/lib/google-ads-evidence";

/*
 * Hero panel for /google-ads-for-clinics/.
 *
 * Same treatment /seo-for-clinics/ already gets from SearchConsolePanel, and for
 * the same reason: the page used to open with the Google Ads overview chart
 * floating in a rounded rectangle, which is a picture of a graph rather than a
 * report somebody pulled. Chrome, the tool's own address, the platform mark and
 * the date range turn it into evidence.
 *
 * The overhanging card carries the number. It is the only figure on the panel
 * that stays legible on a phone — the chart's own axis labels are around 5px
 * once the screenshot is scaled into a 342px column, so the panel cannot rely on
 * them being read. Anything a reader must actually take away is set as type.
 *
 * "Cost per tracked conversion", never "cost per patient". See the note in
 * lib/google-ads-evidence.ts.
 */
export default function GoogleAdsPanel() {
  return (
    <div className="relative">
      {/* The card is anchored to this wrapper, not the outer one — anchor it
          outside and the attribution's height pushes it down the page. */}
      <div className="relative">
        <LaptopFrame>
          <BrowserFrame
            flush
            label="ads.google.com"
            caption={<GoogleAdsLockup />}
          >
            <div className="px-3 pt-3 pb-1">
              <Image
                src="/images/google-ads/ads-graph.png"
                alt="Google Ads overview report showing 929 clicks, £3.78k cost, 89 conversions and £42.50 cost per conversion"
                width={997}
                height={340}
                className="h-auto w-full"
                priority
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </div>
          </BrowserFrame>
        </LaptopFrame>

        {/* Overhanging figure, read off the chart above it.
            Bottom right, with the attribution bottom left, because the two
            cannot share a side: at bottom left this card covered the caption bar
            and the Google mark in it. */}
        <div className="absolute -bottom-14 right-2 w-[62%] max-w-[260px] rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-paper)] p-4 shadow-[var(--shadow-card-hover)] sm:-bottom-16 sm:right-0">
          <p className="font-display text-3xl font-bold leading-none text-[var(--color-ink)] sm:text-4xl">
            £42.50
          </p>
          <p className="mt-2 text-[0.72rem] font-medium leading-snug text-[var(--color-charcoal)]">
            Cost per tracked conversion
          </p>
          <p className="mt-1.5 text-[0.65rem] leading-snug text-[var(--color-muted)]">
            89 conversions, £3.78k spend
          </p>
        </div>
      </div>

      {/* Attribution. Unnamed advertiser on purpose — see the note in
          lib/google-ads-evidence.ts before naming one. */}
      <p className="mr-auto mt-20 max-w-[56%] text-[0.7rem] leading-relaxed text-[var(--color-muted)] sm:mt-24">
        A live campaign in {ACCOUNT}, {WINDOW}. A conversion is a tracked
        enquiry, not a booked patient.
      </p>

      <div className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-2xl bg-[var(--color-accent)]/10 blur-2xl" />
    </div>
  );
}

import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import { brandHex, brandMarks, type BrandSlug } from "@/components/icons/BrandIcons";
import { colorMarks, type ColorMarkSlug } from "@/components/icons/BrandColorMarks";

/**
 * "The tools your clinic already uses, connected in one place."
 *
 * The 10 Aug review asked for this three separate times: platform recognition,
 * so a clinic owner can see at a glance that the channels they already worry
 * about all feed the same system.
 *
 * Deliberately logos only. Generic entries ("SMS", "Email") were tried here and
 * diluted the row — a marquee of words is not recognition. Those channels are
 * named in the supporting line below the heading instead, and listed in full in
 * the Capture tab.
 *
 * Marks render in their official brand colour, which is the entire point of the
 * section. Only confirmed integrations belong in this list.
 */
interface Channel {
  /** Renders the official mark in the official colour. */
  brand?: BrandSlug;
  /** Label shown beside the mark. Overrides the brand's own title where the
   *  product name differs from the mark (the Google G stands in for GBP). */
  label: string;
  /** Bitmap mark for brands simple-icons does not carry. The file has an opaque
   *  white background, which is seamless because the pill it sits on is always
   *  --color-paper (#FFFFFF). Check that still holds before reusing it on a
   *  darker surface. */
  imageSrc?: string;
}

const channels: Channel[] = [
  { brand: "google", label: "Google Business Profile" },
  { brand: "facebook", label: "Facebook" },
  { brand: "messenger", label: "Messenger" },
  { brand: "instagram", label: "Instagram" },
  { brand: "tiktok", label: "TikTok" },
  { brand: "whatsapp", label: "WhatsApp" },
  { label: "Cliniko", imageSrc: "/images/cliniko.png" },
];

function Pill({ item, duplicate }: { item: Channel; duplicate?: boolean }) {
  // Full-colour mark where the brand's real logo needs more than one colour
  // (Google's four-colour G, Instagram's gradient, TikTok's offset note).
  // Everything else is correct as its monochrome path in the brand's own hex —
  // Facebook, Messenger and WhatsApp marks are already the real logos.
  const ColorMark = item.brand ? colorMarks[item.brand as ColorMarkSlug] : null;
  const Mark = item.brand ? brandMarks[item.brand] : null;

  return (
    <li
      aria-hidden={duplicate || undefined}
      className="flex flex-shrink-0 items-center gap-3 rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-[var(--color-paper)] px-6 py-3.5 shadow-[var(--shadow-sm)]"
    >
      {ColorMark ? (
        <ColorMark className="h-5 w-5 flex-shrink-0" />
      ) : (
        Mark &&
        item.brand && (
          <Mark
            className="h-5 w-5 flex-shrink-0"
            // Inline style rather than a class: the value is the brand's own hex,
            // not a design-system token.
            style={{ color: brandHex[item.brand] }}
          />
        )
      )}
      {item.imageSrc && (
        <Image
          src={item.imageSrc}
          // Decorative: the label beside it already names the brand, exactly as
          // the SVG marks are aria-hidden.
          alt=""
          width={243}
          height={208}
          sizes="24px"
          // Height matched to the SVG marks, width left to the mark's own
          // aspect ratio so it is never squashed into a square.
          className="h-5 w-auto flex-shrink-0"
        />
      )}
      <span className="whitespace-nowrap font-display text-[0.9rem] font-semibold text-[var(--color-charcoal)]">
        {item.label}
      </span>
    </li>
  );
}

export default function IntegrationStrip() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
      <div className="cx-main">
        <FadeUp>
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow mb-4">Works with what you already use</p>
            <h2 className="text-h3 mb-4 leading-tight text-[var(--color-ink)]">
              The channels your patients already use, feeding one system
            </h2>
            <p className="text-body text-[var(--color-muted)]">
              Plus SMS, email, website live chat and missed calls, all landing in the
              same team inbox as everything above.
            </p>
          </div>
        </FadeUp>
      </div>

      {/* Animation is scoped here rather than added to globals.css: it is only
          ever used by this component. Transform-only, so it never triggers
          layout. */}
      <style>{`
        @keyframes pp-marquee-x {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        .pp-marquee-track {
          animation: pp-marquee-x 48s linear infinite;
          will-change: transform;
        }
        .pp-marquee-viewport:hover .pp-marquee-track,
        .pp-marquee-track:focus-within {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          /* globals.css collapses every animation to 0.01ms with !important,
             which would otherwise snap this track straight to its -50% end
             state and clip the first item. Pin the transform back to the
             start so a reduced-motion visitor sees a clean static strip. */
          .pp-marquee-track {
            animation: none !important;
            transform: translate3d(0, 0, 0) !important;
          }
        }
      `}</style>

      {/* Full-bleed marquee. Track holds the list twice so the -50% loop is seamless. */}
      <div
        className="pp-marquee-viewport relative overflow-hidden"
        // Edges fade out so the loop seam is never the thing you notice.
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <ul
          className="pp-marquee-track flex w-max items-center gap-3"
          aria-label="Channels and tools that connect to Patient Pulse"
        >
          {channels.map((item) => (
            <Pill key={item.label} item={item} />
          ))}
          {/* Visual duplicate for the seamless loop — hidden from assistive tech. */}
          {channels.map((item) => (
            <Pill key={`dup-${item.label}`} item={item} duplicate />
          ))}
        </ul>
      </div>
    </section>
  );
}

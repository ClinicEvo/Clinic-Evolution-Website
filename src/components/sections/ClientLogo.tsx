import Image from "next/image";
import type { CSSProperties } from "react";
import { clientSite } from "@/lib/clients";

/**
 * One client mark, linked to their site where we have a verified URL for it.
 *
 * The three logo strips each render their own layout and their own per-mark
 * heights, but the link behaviour belongs in one place: the point of these
 * links is to pass authority to the client's domain, and a `rel` attribute
 * added in two strips out of three would quietly waste it on the third.
 *
 * What matters for that, and is easy to break later:
 *
 *   - No `rel="nofollow"` or `sponsored`. Either one tells Google not to pass
 *     anything, which defeats the entire reason these are links.
 *   - `noopener` only, not `noreferrer`. Neither affects authority, but
 *     `noreferrer` strips the Referer header, so the visit lands in the
 *     client's analytics as direct traffic and the referral disappears.
 *   - The alt text is the anchor text Google reads for an image link, so it
 *     stays the plain business name. Stuffing a keyword in here would be both
 *     manipulative and an unsourced claim about the client.
 *
 * A mark with no verified URL renders as a plain image rather than a dead or
 * guessed link.
 */
export default function ClientLogo({
  name,
  src,
  width,
  height,
  logoHeight,
  dim = false,
}: {
  name: string;
  src: string;
  width: number;
  height: number;
  /** Cap on the rendered height, tuned per mark by the calling strip. */
  logoHeight: number;
  dim?: boolean;
}) {
  const href = clientSite(name);

  /* Hover has to be driven from the anchor via `group`, because the dim wash
     lives on the image itself and a parent's opacity cannot lift a child's.
     Direction depends on where the mark starts: a dimmed one comes up to full
     strength, the usual logo-strip affordance, while one already at full
     strength has nowhere to go but down. */
  const hover = href
    ? dim
      ? "group-hover:opacity-100"
      : "group-hover:opacity-70"
    : "";

  const image = (
    <Image
      src={src}
      alt={name}
      width={width}
      height={height}
      style={{ "--logo-h": `${logoHeight}px` } as CSSProperties}
      className={`cx-logo transition-opacity duration-200 ${
        dim ? "opacity-[0.85]" : ""
      } ${hover}`}
    />
  );

  if (!href) return image;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      /* The mark is already the label, so the accessible name comes from the
         alt text; this only tells a screen-reader user where it goes. */
      aria-label={`${name} — visit their website`}
      /* An outline rather than a ring with an offset: a ring offset has to be
         painted in the strip's own background colour, and these strips sit on
         --color-surface in two places and --color-paper in a third. An outline
         offset is transparent, so it is correct on both. */
      className="group inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
    >
      {image}
    </a>
  );
}

import Image from "next/image";
import { ReactNode } from "react";

/**
 * Frames a Patient Pulse screenshot as the application window it came from.
 *
 * A bare screenshot floating in a rounded rectangle reads as a stock image. The
 * chrome here — wordmark, the name of the view you are looking at, a live dot —
 * deliberately mirrors PulsePipelineBoard, so the designed panels and the real
 * screenshots on this page look like the same product rather than two unrelated
 * graphics.
 *
 * It frames as an *app* window rather than a browser window on purpose: a URL bar
 * would mean inventing a domain, and this is the app.
 */
interface AppWindowProps {
  /** The view being shown, e.g. "Conversations". Sits in the chrome as a pill. */
  view: string;
  /** Screenshot path under /public. */
  src: string;
  alt: string;
  /** Intrinsic aspect ratio, "width/height", so the frame reserves the space. */
  ratio: string;
  /** Note shown in the window footer. Keeps the redaction disclosure attached
   *  to the image rather than floating underneath it. */
  footnote?: ReactNode;
}

export default function AppWindow({
  view,
  src,
  alt,
  ratio,
  footnote,
}: AppWindowProps) {
  return (
    <figure className="overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
      {/* Chrome */}
      <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] px-5 py-3.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <Image
            src="/images/patientpulse_logo.png"
            alt="Patient Pulse"
            width={100}
            height={20}
            className="h-4 w-auto flex-shrink-0"
          />
          <span className="truncate rounded-full bg-[var(--color-surface)] px-2 py-0.5 text-[0.6rem] font-semibold text-[var(--color-muted)]">
            {view}
          </span>
        </div>
        <span className="flex flex-shrink-0 items-center gap-1.5">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--color-accent)" }}
          />
          <span className="text-[0.6rem] font-semibold uppercase tracking-widest text-[var(--color-muted)]">
            Live
          </span>
        </span>
      </div>

      {/* Screenshot. object-left-top so the app's own left rail stays anchored
          as the frame narrows. */}
      <div
        className="relative w-full bg-white"
        style={{ aspectRatio: ratio.replace("/", " / ") }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-left-top"
          sizes="(max-width: 1024px) 100vw, 620px"
        />
      </div>

      {footnote && (
        <figcaption className="border-t border-[var(--color-border)] px-5 py-2.5 text-[0.6rem] leading-snug text-[var(--color-muted)]">
          {footnote}
        </figcaption>
      )}
    </figure>
  );
}

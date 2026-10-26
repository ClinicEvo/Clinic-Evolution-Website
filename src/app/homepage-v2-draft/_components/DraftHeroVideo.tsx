"use client";

import Image from "next/image";
import { useRef, useState } from "react";

/* The founder, on camera, replacing the stock clinical photograph. The site's
   core credibility claim is "the founder runs a real clinic", and a stock
   photo of a clinician could never make that claim; Danny saying it to camera
   in his own clinic can.

   Page weight: nothing from the video is fetched on load. The element renders
   with `preload="none"` and no poster attribute, so the browser requests zero
   bytes until someone acts. The cover is a `next/image` with `priority`, so it
   is the LCP candidate and is served as a responsive WebP rather than the 1080px
   source. Hover or focus on the panel warms the file (`preload="auto"`), which
   turns an intent signal into a head start, and the click itself calls
   `play()` inside the gesture, which is the one path iOS treats as reliable.

   The file is the 1080px master (~18MB for 108s), chosen over a 720px re-encode
   for quality. Its moov atom sits at the front, so playback starts on the first
   bytes rather than after the full download. */

const VIDEO_SRC = "/videos/danny-morgan-clinic-evo-intro.mp4";
const POSTER_SRC = "/images/hero-video-cover.jpg";
const DURATION_LABEL = "1:48";

/** Homepage-draft copy of src/components/hero/HeroVideo.tsx, which the live
 *  homepage still uses. It differs in the line set over the light cover (a
 *  "Patient Pulse: What it is and how it works" caption, in place of
 *  "Tired of paying agencies…") and in having no "Watch the story" label.
 *  `posterSrc` swaps the cover. The default carries the "Tired of paying
 *  agencies…" headline baked into the image; the draft passes the
 *  video's own frame at 0:50, the system diagram, instead.
 *  `lightPoster` sets the "Watch the story" label in brand navy rather than
 *  white, for a light cover like that frame, where white text disappears.
 *  On a light cover the headline is set as live text over it;
 *  `coverHeadline={false}` leaves it off. */
export default function DraftHeroVideo({
  posterSrc = POSTER_SRC,
  lightPoster = false,
  coverHeadline = lightPoster,
}: { posterSrc?: string; lightPoster?: boolean; coverHeadline?: boolean } = {}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const warm = () => {
    const v = videoRef.current;
    if (v && v.preload !== "auto") v.preload = "auto";
  };

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    setPlaying(true);
    void v.play();
  };

  return (
    <div
      className={`relative aspect-square w-full overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-ink)] shadow-[var(--shadow-card-hover)]${lightPoster ? " [container-type:inline-size]" : ""}`}
      onPointerEnter={warm}
    >
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        preload="none"
        playsInline
        controls={playing}
        aria-label="Danny Morgan, osteopath and clinic owner, on the system he built instead of paying agencies for poor-quality leads"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Cover and play control. Sits above the video until play, then fades
          out on opacity alone and stops catching pointer events so the native
          controls underneath become usable. */}
      <div
        className={`absolute inset-0 transition-opacity duration-[var(--duration-slow)] ease-[var(--ease-out-quart)] ${
          playing ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        aria-hidden={playing}
      >
        <Image
          src={posterSrc}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) calc(100vw - 3rem), 560px"
          className="object-cover"
        />

        {/* The light cover carries no headline of its own, so the caption is
            set as live text in the brand navy. A discreet paper fade
            behind it keeps it legible and softens the subtitle burned into
            that frame. Right padding keeps both lines clear of the play control. */}
        {coverHeadline && (
          <>
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-[44%] bg-gradient-to-t from-[var(--color-paper)] from-22% via-[var(--color-paper)]/65 via-55% to-transparent"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <p
                className="font-display font-semibold leading-[1.1] text-[var(--color-ink)] pr-20 sm:pr-24"
                style={{ fontSize: "clamp(0.95rem, 4cqw, 1.6rem)", letterSpacing: "-0.01em" }}
              >
                <span className="whitespace-nowrap">Patient Pulse: What it is and how</span>
                <br />
                it works
              </p>
              <p className="mt-1.5 pr-20 text-[12px] leading-snug text-[var(--color-muted)] sm:pr-24 sm:text-[13px]">
                Danny Morgan, osteopath and clinic owner, on the system he built.
              </p>
            </div>
          </>
        )}

        <button
          type="button"
          onClick={play}
          onFocus={warm}
          aria-label={`Play video, ${DURATION_LABEL}`}
          className="group absolute inset-0 flex cursor-pointer items-end justify-end p-5 text-left sm:p-7 focus-visible:outline-none"
        >
          <span className="flex items-center gap-4">
            {/* No "Watch the story" label beside the button on the draft: with
                the caption on the cover it read as a second, competing line.
                The duration stays in the button's accessible name. */}
            {/* The pulse. Two rings on a stagger, transform and opacity only,
                reusing the keyframe the Patient Pulse live dot already owns. */}
            <span className="relative flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center sm:h-14 sm:w-14">
              {/* Toned down on the draft: one ring instead of two, slower, at
                  half strength, and starting at half the button's size so its
                  3× scale ends just past the button's edge (about 1.6×) rather
                  than at three times its width. The shared keyframe drives
                  opacity itself, so the strength is set on a wrapper. */}
              <span aria-hidden className="absolute inset-0 opacity-50 motion-reduce:hidden">
                <span
                  className="absolute inset-[23%] rounded-full bg-[var(--color-accent)]"
                  style={{ animation: "pulse-ring 3.2s ease-out infinite" }}
                />
              </span>
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-[var(--shadow-card)] transition-transform duration-[var(--duration-base)] ease-[var(--ease-spring)] group-hover:scale-105 group-focus-visible:scale-105 group-focus-visible:ring-2 group-focus-visible:ring-white group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[var(--color-ink)] group-active:scale-95">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="translate-x-[1.5px]">
                  <path d="M7 4.6v14.8c0 .8.9 1.3 1.6.9l11.6-7.4c.6-.4.6-1.4 0-1.8L8.6 3.7C7.9 3.3 7 3.8 7 4.6z" />
                </svg>
              </span>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}

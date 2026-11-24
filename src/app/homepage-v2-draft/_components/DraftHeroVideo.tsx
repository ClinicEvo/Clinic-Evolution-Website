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

/* Playback starts at 2.4s, skipping the "CLINIC EVO" logo card but keeping
   the wipe into Danny, which he starts speaking over. A media fragment rather
   than a re-encode: the live homepage shares this file and keeps its full
   intro, and the logo card is still there for anyone who scrubs back. */
const VIDEO_SRC = "/videos/danny-morgan-clinic-evo-intro.mp4#t=2.4";
const POSTER_SRC = "/images/hero-video-cover.jpg";
const DURATION_LABEL = "1:46";

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
      className={`relative aspect-video w-full overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-ink)] shadow-[var(--shadow-card-hover)]${lightPoster ? " [container-type:inline-size]" : ""}`}
      onPointerEnter={warm}
    >
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        preload="none"
        playsInline
        controls={playing}
        aria-label="Danny Morgan, osteopath and clinic owner, on the system he built instead of paying agencies for poor-quality leads"
        className="absolute inset-0 h-full w-full object-contain"
      />
      {/* 16:9 frame, square file: the video is fitted, not cropped, so its
          burned-in subtitles and full-frame diagrams stay whole, with the
          frame's navy showing as bars at the sides. */}

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

        {/* The cover carries no headline of its own, so the caption is set as
            live text in white over a navy fade. The fade is solid at the very
            bottom, which hides the subtitle burned into the frame. */}
        {coverHeadline && (
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[var(--color-ink)] from-14% via-[var(--color-ink)]/70 via-50% to-transparent"
          />
        )}

        {/* The whole frame is the button; its visible cue is a coral disc set
            in the caption, left of the title, so nothing covers Danny's face
            and the control sits bottom-left, nearest the hero's own CTA. Disc
            and title read as one row: press this to watch this. The title
            stays one line, sized to the width left beside the disc
            (19.5em covers the text, 5.75rem the disc, gap and padding). */}
        <button
          type="button"
          onClick={play}
          onFocus={warm}
          aria-label={`Play video, ${DURATION_LABEL}`}
          className="group absolute inset-0 flex cursor-pointer items-end justify-start pb-3.5 pl-3.5 pr-5 text-left sm:pb-4 sm:pl-4 sm:pr-7 focus-visible:outline-none"
        >
          <span className="flex items-center gap-4 sm:gap-5">
            {/* The pulse, reusing the keyframe the Patient Pulse live dot
                already owns (scale 1→3, opacity 0.7→0). Small in the caption,
                so it runs at full strength: two rings on a stagger, each
                starting at 60% of the button so it ends about 1.8× its width. */}
            <span className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center sm:h-9 sm:w-9">
              <span aria-hidden className="absolute inset-0 motion-reduce:hidden">
                <span
                  className="absolute inset-[20%] rounded-full bg-[var(--color-accent)]"
                  style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
                />
                <span
                  className="absolute inset-[20%] rounded-full bg-[var(--color-accent)]"
                  style={{ animation: "pulse-ring 2.4s ease-out 1.2s infinite" }}
                />
              </span>
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-[var(--shadow-card)] transition-transform duration-[var(--duration-base)] ease-[var(--ease-spring)] group-hover:scale-105 group-focus-visible:scale-105 group-focus-visible:ring-2 group-focus-visible:ring-white group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[var(--color-ink)] group-active:scale-95">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="translate-x-[1px]">
                  <path d="M7 4.6v14.8c0 .8.9 1.3 1.6.9l11.6-7.4c.6-.4.6-1.4 0-1.8L8.6 3.7C7.9 3.3 7 3.8 7 4.6z" />
                </svg>
              </span>
            </span>
            {coverHeadline && (
              <span className="block min-w-0">
                <span
                  className="block whitespace-nowrap font-display font-semibold leading-[1.1] text-white"
                  style={{
                    fontSize: "min(1.125rem, calc((100cqw - 5.75rem) / 19.5))",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Patient Pulse: What it is and how it works
                </span>
                <span className="mt-1 block text-[11px] leading-snug text-white/80 sm:text-xs">
                  Danny Morgan, osteopath and clinic owner, on the system he built.
                </span>
              </span>
            )}
          </span>
        </button>
      </div>
    </div>
  );
}

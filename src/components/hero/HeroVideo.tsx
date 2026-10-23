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

/** `posterSrc` swaps the cover. The default carries the "Tired of paying
 *  agencies…" headline baked into the image; the homepage passes the
 *  video's own frame at 0:50, the system diagram, instead.
 *  `lightPoster` sets the "Watch the story" label in brand navy rather than
 *  white, for a light cover like that frame, where white text disappears. */
export default function HeroVideo({
  posterSrc = POSTER_SRC,
  lightPoster = false,
}: { posterSrc?: string; lightPoster?: boolean } = {}) {
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

        {/* The light cover carries no headline of its own, so the old cover's
            line is set as live text in the brand navy. A discreet paper fade
            behind it keeps it legible and softens the subtitle burned into
            that frame. Right padding keeps both lines clear of the play control. */}
        {lightPoster && (
          <>
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-[44%] bg-gradient-to-t from-[var(--color-paper)] from-22% via-[var(--color-paper)]/65 via-55% to-transparent"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <p
                className="font-display font-semibold leading-[1.1] text-[var(--color-ink)] pr-24 sm:pr-28"
                style={{ fontSize: "clamp(0.95rem, 4cqw, 1.6rem)", letterSpacing: "-0.01em" }}
              >
                Tired of paying agencies for <span className="whitespace-nowrap">poor-quality</span> leads?
              </p>
              <p className="mt-2 max-w-[calc(100%-5.5rem)] text-[12px] leading-snug text-[var(--color-muted)] sm:max-w-[calc(100%-13rem)] sm:text-[13px]">
                Danny Morgan, osteopath and clinic owner, on the system he built instead.
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
            {/* Hidden below xl on the default cover, where it would collide with the
                headline baked into the image. On the light cover it shows from
                sm up; on phones the play button stands alone so Danny's line
                beside it has room. */}
            <span className={`flex-col items-end ${lightPoster ? "hidden sm:flex" : "hidden xl:flex"}`}>
              <span className={`font-display text-[14px] font-semibold leading-tight ${lightPoster ? "text-[var(--color-ink)]" : "text-white"}`}>
                Watch the story
              </span>
              <span className={`mt-0.5 text-[12px] tabular-nums leading-tight ${lightPoster ? "text-[var(--color-muted)]" : "text-white/60"}`}>
                {DURATION_LABEL}
              </span>
            </span>

            {/* The pulse. Two rings on a stagger, transform and opacity only,
                reusing the keyframe the Patient Pulse live dot already owns. */}
            <span className="relative flex h-[68px] w-[68px] flex-shrink-0 items-center justify-center sm:h-[76px] sm:w-[76px]">
              <span
                className="absolute inset-0 rounded-full bg-[var(--color-accent)]"
                style={{ opacity: 0.35, animation: "pulse-ring 2.6s ease-out infinite" }}
              />
              <span
                className="absolute inset-0 rounded-full bg-[var(--color-accent)]"
                style={{ opacity: 0.35, animation: "pulse-ring 2.6s ease-out 1.3s infinite" }}
              />
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[var(--color-accent)] text-white shadow-[var(--shadow-card)] transition-transform duration-[var(--duration-base)] ease-[var(--ease-spring)] group-hover:scale-105 group-focus-visible:scale-105 group-focus-visible:ring-2 group-focus-visible:ring-white group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[var(--color-ink)] group-active:scale-95">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="translate-x-[2px]">
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

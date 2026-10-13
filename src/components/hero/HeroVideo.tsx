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

   The file is the 1080px master re-encoded to 720px at a capped bitrate: a
   talking head and flat graphic slides compress to ~3.6MB for 108s. */

const VIDEO_SRC = "/videos/danny-morgan-clinic-evo-intro.mp4";
const POSTER_SRC = "/images/hero-video-cover.jpg";
const DURATION_LABEL = "1:48";

export default function HeroVideo() {
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
      className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-ink)] shadow-[var(--shadow-card-hover)]"
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
          src={POSTER_SRC}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) calc(100vw - 3rem), 560px"
          className="object-cover"
        />

        <button
          type="button"
          onClick={play}
          onFocus={warm}
          aria-label={`Play video, ${DURATION_LABEL}`}
          className="group absolute inset-0 flex cursor-pointer items-end justify-end p-5 text-left sm:p-7 focus-visible:outline-none"
        >
          <span className="flex items-center gap-4">
            <span className="hidden flex-col items-end sm:flex">
              <span className="font-display text-[14px] font-semibold leading-tight text-white">
                Watch the story
              </span>
              <span className="mt-0.5 text-[12px] tabular-nums leading-tight text-white/60">
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

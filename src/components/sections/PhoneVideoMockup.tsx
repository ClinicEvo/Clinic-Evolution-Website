interface PhoneVideoMockupProps {
  src: string;
  poster?: string;
}

export default function PhoneVideoMockup({ src, poster }: PhoneVideoMockupProps) {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="relative rounded-[3rem] bg-[var(--color-ink)] p-3 shadow-[var(--shadow-card-hover)]">
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-[104px] h-8 w-[3px] rounded-l-full bg-[var(--color-ink)]" />
        <div className="absolute -left-[3px] top-[148px] h-14 w-[3px] rounded-l-full bg-[var(--color-ink)]" />
        <div className="absolute -left-[3px] top-[212px] h-14 w-[3px] rounded-l-full bg-[var(--color-ink)]" />
        <div className="absolute -right-[3px] top-[132px] h-20 w-[3px] rounded-r-full bg-[var(--color-ink)]" />

        {/* Screen */}
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.25rem] bg-black">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-2.5 z-10 h-[22px] w-[100px] -translate-x-1/2 rounded-full bg-black" />
          {/* Plays the way it does in a feed: muted, looping, no chrome.
              With `controls` the phone rendered a play button, a 00:00 counter,
              a mute icon and an overflow menu across the bottom of the screen,
              so an ad captioned "exactly as it appears in the feed" arrived
              looking like a video player, and its first frame — the clinic sign
              at an angle — read as a broken image rather than a held moment. */}
          <video
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Clinic Evo social campaign for Bodyfunction Clinic, playing on loop"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

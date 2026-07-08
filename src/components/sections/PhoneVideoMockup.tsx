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
          <video
            src={src}
            poster={poster}
            controls
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

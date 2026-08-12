import { ReactNode } from "react";

/**
 * Puts a hero visual inside a laptop.
 *
 * The pipeline board on its own read as a floating panel rather than software.
 * A device shell says "this is a screen in a clinic" before anyone reads a word,
 * and it gives the hero a solid object to balance the headline against.
 *
 * Built from layout rather than an image so it stays crisp at any size, costs
 * nothing to load, and inherits the brand ink for the bezel instead of the pure
 * black the house style bans.
 */
export default function LaptopFrame({
  children,
  label,
}: {
  children: ReactNode;
  /** Optional caption under the base, e.g. what the screen is showing. */
  label?: string;
}) {
  return (
    <div className="w-full">
      {/* Lid */}
      <div
        className="rounded-[16px] p-[10px] pt-[7px] shadow-[var(--shadow-card)]"
        style={{ background: "var(--color-ink)" }}
      >
        {/* Camera */}
        <div className="flex justify-center pb-[6px]" aria-hidden="true">
          <span className="h-[3px] w-[3px] rounded-full bg-white/30" />
        </div>

        {/* Screen */}
        <div className="overflow-hidden rounded-[7px] bg-white">{children}</div>
      </div>

      {/* Hinge and base. Slightly wider than the lid, the way a real one is. */}
      <div
        className="-mx-[3.5%] h-[13px] rounded-b-[11px] rounded-t-[2px]"
        style={{
          background:
            "linear-gradient(to bottom, #D9DDE4 0%, #C4CAD3 55%, #A8B0BC 100%)",
        }}
        aria-hidden="true"
      >
        {/* Notch you push the lid open from */}
        <span className="mx-auto block h-[4px] w-[68px] rounded-b-[4px] bg-[#94A3B8]/45" />
      </div>

      {label && (
        <p className="mt-4 text-center text-[0.7rem] leading-snug text-[var(--color-muted)]">
          {label}
        </p>
      )}
    </div>
  );
}

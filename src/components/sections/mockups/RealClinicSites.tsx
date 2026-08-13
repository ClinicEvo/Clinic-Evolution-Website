import Image from "next/image";
import LaptopFrame from "./LaptopFrame";

/*
 * Hero panel for the clinic website design page: two sites we actually built,
 * not a stylised mock-up of an imaginary one.
 *
 * This replaced ClinicSiteMockup, which invented a "yourclinic.co.uk" complete
 * with invented trust chips. The page brief is explicit that a mock-up adding no
 * proof is worse than nothing, and Danny's objection on the 10 Aug call was that
 * the pages read as preset and generic. A real screenshot answers that before
 * anyone reads a word — the same reason both case study heroes carry one.
 *
 * The pair is the point. Lind Street is watercolour and sage, Bodyfunction is
 * navy and photographic. Nothing about them looks like the same template, which
 * is the claim this panel exists to make.
 *
 * Bodyfunction is captioned as the origin clinic rather than a client. Danny
 * founded it and co-founded Clinic Evo, and blurring that is the exact thing the
 * brief asked us to stop doing.
 */
export default function RealClinicSites() {
  return (
    <div className="relative">
      {/* The window below is anchored to this wrapper, not the outer div — anchor
          it to the outer one and the caption's height pushes it down the page. */}
      <div className="relative">
        <LaptopFrame>
          <Image
            src="/images/lind-street/homepage-banner.png"
            alt="The Lind Street Osteopathy website, brand and site built by Clinic Evo"
            width={1440}
            height={810}
            className="w-full"
            priority
          />
        </LaptopFrame>

        {/* Second site overhanging the laptop base. Browser chrome rather than a
            second laptop: two devices at different scales reads as a stock "our
            work" collage, a window reads as another real site. */}
        <div className="absolute -bottom-[4.5rem] left-0 w-[50%] max-w-[230px] sm:-bottom-[5.5rem]">
          <div className="overflow-hidden rounded-[10px] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card-hover)]">
            <div className="flex items-center gap-1.5 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-muted-light)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-muted-light)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-muted-light)]" />
            </div>
            <Image
              src="/images/website-design/bodyfunction-homepage.png"
              alt="The Bodyfunction Clinic website, the London osteopathy practice Clinic Evo grew out of"
              width={1800}
              height={1012}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Both named, so neither is passed off as something it is not. The margin
          clears the overhanging window; the width keeps it clear of it too. */}
      <p className="ml-auto mt-24 max-w-[68%] text-right text-[0.7rem] leading-relaxed text-[var(--color-muted)] sm:mt-28">
        <span className="font-semibold text-[var(--color-charcoal)]">Lind Street Osteopathy</span>,
        brand and site built from nothing.{" "}
        <span className="font-semibold text-[var(--color-charcoal)]">Bodyfunction Clinic</span>, the
        London practice we grew out of.
      </p>

      <div className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-2xl bg-[var(--color-accent)]/10 blur-2xl" />
    </div>
  );
}

import ClientLogo from "@/components/sections/ClientLogo";

/*
 * Social proof, immediately under the hero.
 *
 * The 10 Aug review asked for this twice: "a bit of social proof I think needs
 * to be on each page", and "right at the top we should be having an element of
 * social proof". A logo row is what we can actually evidence — we do not hold a
 * signed-off client quote, and inventing one is the single thing the project
 * rules forbid outright.
 *
 * Bodyfunction is in the row as well as in the origin story further down each
 * page: the strip is the fastest read on the page and the origin nuance is not
 * worth omitting our strongest name from it. Neometa is Simon's agency rather
 * than a clinic, which is why the default label says "brands".
 *
 * Heights are tuned per mark because the aspect ratios differ wildly; a single
 * height makes the wide wordmarks tiny and the square marks enormous.
 *
 * Each mark links to the client's own site where we hold a verified URL — see
 * ClientLogo and src/lib/clients.ts. The link is the point rather than a
 * courtesy: it passes authority to their domain.
 */
const clientLogos = [
  { name: "Body Restore Clinic", src: "/images/clients/body-restore.png", w: 1714, h: 564, height: 34, dim: true },
  { name: "1 Percent Club", src: "/images/clients/one-percent-club.png", w: 500, h: 461, height: 48, dim: true },
  { name: "Lind Street Osteopathy", src: "/images/clients/lind-street.png", w: 1500, h: 500, height: 42 },
  { name: "Bodyfunction Clinic", src: "/images/clients/bodyfunction.png", w: 1850, h: 304, height: 24 },
  { name: "Neometa", src: "/images/clients/neometa.png", w: 1403, h: 238, height: 20 },
];

export default function ClientLogoStrip({
  label = "Brands we build and grow",
}: {
  label?: string;
}) {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-9">
      <div className="cx-main">
        <div className="flex flex-col items-center gap-7 sm:flex-row sm:justify-between sm:gap-10">
          <p className="text-label flex-shrink-0 text-[var(--color-muted)]">{label}</p>
          {/* Grid below sm, free-wrapping row above. Five marks left to wrap on
              a phone give ragged rows and a lone logo on the last one; the odd
              mark out spans both columns so it centres. */}
          <div className="grid w-full grid-cols-2 place-items-center gap-x-8 gap-y-7 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-12 sm:gap-y-6">
            {clientLogos.map((logo, i) => (
              <div
                key={logo.name}
                className={`flex items-center ${
                  i === clientLogos.length - 1 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <ClientLogo
                  name={logo.name}
                  src={logo.src}
                  width={logo.w}
                  height={logo.h}
                  logoHeight={logo.height}
                  dim={logo.dim}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

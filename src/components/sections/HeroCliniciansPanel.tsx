import Image from "next/image";

/*
 * Hero panel for the case studies index.
 *
 * It used to be a HeroStatCard listing "8 → 3,822" and "0 → page one" — the
 * same two figures the cards immediately below shout at 72px. A panel that
 * repeats what is already on screen is 480px spent on nothing, so this one
 * carries what the cards cannot: the two named clinicians whose practices the
 * numbers belong to, and where the numbers were read from.
 *
 * Same header / divided-rows / footer construction as HeroStatCard so the two
 * hero panels stay one family.
 */

interface Clinician {
  name: string;
  credential: string;
  context: string;
  image: string;
  alt: string;
}

const clinicians: Clinician[] = [
  {
    name: "Danny Morgan",
    credential: "M.Ost, Registered Osteopath",
    context: "Founder, Bodyfunction Clinic, Angel · Co-founder, Clinic Evo",
    image: "/images/danny-morgan-angel-clinic.png",
    alt: "Danny Morgan, founder of Bodyfunction Clinic in Angel, London",
  },
  {
    name: "Serena Gower-Johnson",
    credential: "M.Ost, Registered Osteopath",
    context: "Founder, Lind Street Osteopathy, Ryde",
    image: "/images/lind-street/serena-portrait.png",
    alt: "Serena Gower-Johnson, founder of Lind Street Osteopathy in Ryde",
  },
];

export default function HeroCliniciansPanel() {
  return (
    <div className="overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
      <div className="border-b border-[var(--color-border)] px-5 py-3.5">
        <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-muted)]">
          Whose clinics these are
        </p>
      </div>

      <ul className="m-0 list-none divide-y divide-[var(--color-border)] p-0">
        {clinicians.map((c) => (
          <li key={c.name} className="flex items-center gap-4 px-5 py-4">
            <span className="relative block h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]">
              <Image
                src={c.image}
                alt={c.alt}
                fill
                className="object-cover object-top"
                sizes="56px"
              />
            </span>
            <span className="block min-w-0">
              <span className="block font-display text-[0.9rem] font-semibold leading-snug text-[var(--color-ink)]">
                {c.name}
              </span>
              <span className="block text-[0.75rem] leading-snug text-[var(--color-muted)]">
                {c.credential}
              </span>
              <span className="mt-0.5 block text-[0.75rem] leading-snug text-[var(--color-muted)]">
                {c.context}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3.5">
        <p className="text-[0.7rem] leading-snug text-[var(--color-muted)]">
          Every figure in both studies is shown as a screenshot from Google
          Search Console or Ahrefs, read from the clinic&rsquo;s own property.
        </p>
      </div>
    </div>
  );
}

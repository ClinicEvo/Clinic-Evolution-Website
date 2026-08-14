import Image from "next/image";

/** The founder-credibility panel, for heroes on pages whose argument is "we run
 *  a real clinic" — about and team. Deliberately the same figure/figcaption
 *  treatment as the Social Proof block on the home page rather than a new one. */
export default function HeroFounderPanel() {
  return (
    <figure className="m-0">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
        <Image
          src="/images/danny_and_co.jpg"
          alt="The Bodyfunction Clinic team in London, Danny Morgan and colleagues"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 480px"
          priority
        />
      </div>
      <figcaption className="mt-5 flex items-center gap-3.5">
        <span className="relative block h-11 w-11 flex-shrink-0 overflow-hidden rounded-full border border-[var(--color-border)]">
          <Image
            src="/images/danny-morgan-angel-clinic.png"
            alt=""
            fill
            className="object-cover"
            sizes="44px"
          />
        </span>
        <span className="block">
          <span className="block font-display text-[13px] font-semibold text-[var(--color-ink)]">
            Danny Morgan
          </span>
          <span className="block text-[12px] text-[var(--color-muted)]">
            Founder, Bodyfunction Clinic &middot; Co-founder, Clinic Evo
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

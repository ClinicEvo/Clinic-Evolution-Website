import ArrowLink from "@/components/ui/ArrowLink";

interface DisciplineCardProps {
  title: string;
  description: string;
  href: string;
  features: string[];
}

export default function DisciplineCard({
  title,
  description,
  href,
  features,
}: DisciplineCardProps) {
  return (
    <div className="flex flex-col bg-[var(--color-surface)]/50 rounded-lg p-8 border border-[var(--color-surface)] hover:border-[var(--color-accent)]/30 transition-all duration-300">
      <h3 className="text-h3 text-[var(--color-ink)] mb-3">{title}</h3>
      <p className="text-body text-[var(--color-muted)] mb-6 leading-relaxed">{description}</p>
      <ul className="flex flex-col gap-3 mb-8 flex-1" role="list">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm font-semibold text-[var(--color-ink)]/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <ArrowLink href={href} className="text-sm font-bold text-[var(--color-accent)]">
        {title} marketing systems
      </ArrowLink>
    </div>
  );
}

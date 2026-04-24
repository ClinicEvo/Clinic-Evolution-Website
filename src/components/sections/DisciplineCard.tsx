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
    <div className="flex flex-col bg-white rounded-xl p-7 border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors duration-150">
      <h3 className="text-h3 text-[var(--color-ink)] mb-2">{title}</h3>
      <p className="text-body text-[var(--color-muted)] mb-5">{description}</p>
      <ul className="flex flex-col gap-2.5 mb-6 flex-1" role="list">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="flex-shrink-0 mt-0.5 text-[var(--color-accent)]"
            >
              <path d="M2.5 7l3 3L11.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <ArrowLink href={href}>{title} marketing</ArrowLink>
    </div>
  );
}

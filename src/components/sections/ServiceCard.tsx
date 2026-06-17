import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-transparent pt-8 border-t border-[var(--color-border)] transition-all"
    >
      <div className="w-10 h-10 rounded-[4px] bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-ink)] mb-5 flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-h3 text-[var(--color-ink)] mb-2 font-semibold">{title}</h3>
      <p className="text-body text-[var(--color-muted)] flex-1 mb-5 leading-relaxed font-light">{description}</p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-colors duration-150 group-hover:text-[var(--color-accent-dim)]">
        Learn more
        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-150 group-hover:translate-x-0.5"
        >
          <path
            d="M3 7h8M7 3l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}

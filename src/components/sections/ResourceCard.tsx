import Link from "next/link";
import Badge from "@/components/ui/Badge";

interface ResourceCardProps {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  readTime?: string;
}

export default function ResourceCard({
  title,
  excerpt,
  href,
  category,
  readTime,
}: ResourceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-white rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="accent">{category}</Badge>
          {readTime && (
            <span className="text-xs text-[var(--color-muted)]">{readTime}</span>
          )}
        </div>
        <h3 className="text-h3 text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>
        <p className="text-body-sm text-[var(--color-muted)] flex-1 mb-5">{excerpt}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] group-hover:text-[var(--color-accent-dim)] transition-colors">
          Read guide
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
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

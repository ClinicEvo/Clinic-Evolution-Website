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
      className="group flex flex-col bg-white rounded-lg border border-[var(--color-surface)] hover:border-[var(--color-accent)]/30 hover:shadow-sm transition-all duration-300 overflow-hidden"
    >
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 mb-6">
          <Badge variant="accent" className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] border-none px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
            {category}
          </Badge>
          {readTime && (
            <span className="text-xs font-semibold text-[var(--color-muted)]">{readTime}</span>
          )}
        </div>
        <h3 className="text-h3 text-[var(--color-ink)] mb-4 group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>
        <p className="text-body-sm text-[var(--color-ink)]/60 flex-1 mb-8 leading-relaxed">{excerpt}</p>
        <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)] group-hover:gap-3 transition-all">
          Read guide
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

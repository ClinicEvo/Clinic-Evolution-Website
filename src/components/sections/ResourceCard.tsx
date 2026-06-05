import Link from "next/link";

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
      className="group flex flex-col bg-transparent pt-6 border-t-2 border-[var(--color-border)] transition-colors duration-300 hover:border-[var(--color-accent)]"
    >
      <div className="flex flex-col flex-1 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-bold tracking-wider uppercase text-[var(--color-accent)]">
            {category}
          </span>
          {readTime && (
            <>
              <span className="text-[var(--color-border)] text-xs">•</span>
              <span className="text-[10px] font-bold tracking-wider uppercase text-[var(--color-muted)]">{readTime}</span>
            </>
          )}
        </div>
        <h3 className="font-display font-semibold text-lg text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-charcoal)] flex-1 mb-6 leading-relaxed">{excerpt}</p>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-ink)] group-hover:gap-2.5 transition-all underline underline-offset-4">
          Read guide
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

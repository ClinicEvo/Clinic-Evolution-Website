import Link from "next/link";
import Image from "next/image";

interface ResourceCardProps {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  readTime?: string;
  image?: string;
}

export default function ResourceCard({
  title,
  excerpt,
  href,
  category,
  readTime,
  image,
}: ResourceCardProps) {
  return (
    <Link
      href={href}
      className="card-surface group flex h-full flex-col overflow-hidden transition-colors duration-300"
    >
      {/* Featured image / placeholder */}
      <div className="aspect-[16/9] relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface)] flex-shrink-0">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, var(--color-surface) 0%, var(--color-accent-light) 100%)",
            }}
          />
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-6">
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
        <h3 className="font-display font-semibold text-lg text-[var(--color-ink)] mb-3 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-charcoal)] flex-1 mb-6 leading-relaxed">{excerpt}</p>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-ink)] mt-auto group-hover:gap-2.5 transition-all underline underline-offset-4">
          Read guide
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

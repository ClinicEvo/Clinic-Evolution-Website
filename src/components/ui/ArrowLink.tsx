import Link from "next/link";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function ArrowLink({
  href,
  children,
  className = "",
  light = false,
}: ArrowLinkProps) {
  const color = light
    ? "text-white/80 hover:text-white"
    : "text-[var(--color-accent)] hover:text-[var(--color-accent-dim)]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-150 group ${color} ${className}`}
    >
      {children}
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
    </Link>
  );
}

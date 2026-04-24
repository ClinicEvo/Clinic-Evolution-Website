import Link from "next/link";

interface Crumb {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: Crumb[];
  light?: boolean;
}

export default function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  const textColor = light
    ? "text-white/60"
    : "text-[var(--color-muted)]";
  const linkColor = light
    ? "hover:text-white"
    : "hover:text-[var(--color-accent)]";

  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm ${textColor}`}
        role="list"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="font-medium">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className={`transition-colors duration-150 ${linkColor}`}
                  >
                    {item.label}
                  </Link>
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M4 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "surface" | "ink";
  className?: string;
}

export default function Badge({
  children,
  variant = "accent",
  className = "",
}: BadgeProps) {
  const variants = {
    accent:
      "bg-[var(--color-accent-light)] text-[var(--color-accent)] border border-[var(--color-accent)]/15",
    surface:
      "bg-[var(--color-surface)] text-[var(--color-muted)] border border-[var(--color-border)]",
    ink: "bg-[var(--color-ink)] text-white",
  };

  return (
    <span
      className={`inline-flex items-center text-label px-3 py-1 rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

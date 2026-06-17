// Temporary stand-in for a hero photo that hasn't been sourced yet.
// Swap the call site for a real <Image> once a final photo is chosen.
export default function HeroImagePlaceholder() {
  return (
    <div
      className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] shadow-[var(--shadow-card)] flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, var(--color-surface) 0%, var(--color-accent-light) 100%)",
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[var(--color-accent)] opacity-40"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    </div>
  );
}

interface TrustPoint {
  value: string;
  label: string;
}

interface TrustPointsProps {
  points: TrustPoint[];
  light?: boolean;
}

export default function TrustPoints({ points, light = false }: TrustPointsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)]">
      {points.map((point) => (
        <div
          key={point.label}
          className={`px-8 py-10 text-center ${light ? "bg-[var(--color-ink-light)]" : "bg-[var(--color-paper)]"}`}
        >
          <p
            className={`text-h1 font-bold mb-2 tabular-nums tracking-tight ${
              light ? "text-white" : "text-[var(--color-accent)]"
            }`}
          >
            {point.value}
          </p>
          <p
            className={`text-sm leading-snug ${
              light ? "text-white/50" : "text-[var(--color-muted)]"
            }`}
          >
            {point.label}
          </p>
        </div>
      ))}
    </div>
  );
}

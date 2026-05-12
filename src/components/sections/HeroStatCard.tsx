interface Stat {
  label: string;
  value: string;
  note: string;
}

interface HeroStatCardProps {
  title: string;
  stats: Stat[];
}

export default function HeroStatCard({ title, stats }: HeroStatCardProps) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white overflow-hidden">
      <div className="px-5 py-3.5 border-b border-[var(--color-border)]">
        <p className="text-[0.65rem] font-bold tracking-widest uppercase text-[var(--color-muted)]">{title}</p>
      </div>
      <div className="divide-y divide-[var(--color-border)]">
        {stats.map((s) => (
          <div key={s.label} className="px-5 py-4">
            <p className="text-[0.65rem] font-bold tracking-wider uppercase text-[var(--color-muted)] mb-2">{s.label}</p>
            <p className="font-display font-bold text-[1.75rem] leading-none text-[var(--color-ink)] mb-1">{s.value}</p>
            <p className="text-[0.7rem] text-[var(--color-muted)]">{s.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

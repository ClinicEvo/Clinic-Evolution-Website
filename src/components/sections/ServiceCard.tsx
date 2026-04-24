import ArrowLink from "@/components/ui/ArrowLink";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <div className="group flex flex-col bg-[var(--color-paper)] rounded-xl p-7 border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 hover:bg-white transition-colors duration-150">
      <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)] mb-5 flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-h3 text-[var(--color-ink)] mb-2">{title}</h3>
      <p className="text-body text-[var(--color-muted)] flex-1 mb-5">{description}</p>
      <ArrowLink href={href}>Learn more</ArrowLink>
    </div>
  );
}

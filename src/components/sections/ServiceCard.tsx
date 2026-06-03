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
    <div className="group flex flex-col bg-transparent pt-8 border-t border-[var(--color-border)] transition-all">
      <div className="w-10 h-10 rounded-[4px] bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-ink)] mb-5 flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-h3 text-[var(--color-ink)] mb-2 font-semibold">{title}</h3>
      <p className="text-body text-[var(--color-muted)] flex-1 mb-5 leading-relaxed font-light">{description}</p>
      <ArrowLink href={href}>Learn more</ArrowLink>
    </div>
  );
}

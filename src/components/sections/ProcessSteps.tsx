import FadeUp from "@/components/ui/FadeUp";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="relative flex flex-col gap-0" role="list">
      {steps.map((step, index) => (
        <FadeUp key={step.number} delay={index * 0.1}>
          <li className="flex gap-6 pb-10 last:pb-0">
            {/* Line + number */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="w-px flex-1 mt-2 bg-[var(--color-border)]" />
              )}
            </div>
            {/* Content */}
            <div className="pt-2 pb-2">
              <h3 className="text-h3 text-[var(--color-ink)] mb-1.5">{step.title}</h3>
              <p className="text-body text-[var(--color-muted)]">{step.description}</p>
            </div>
          </li>
        </FadeUp>
      ))}
    </ol>
  );
}

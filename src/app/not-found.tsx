import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Page Not Found",
  description: "The page you were looking for doesn't exist.",
  path: "/404/",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-[var(--color-paper)]">
      <div className="cx-tight text-center py-24">
        <p className="text-label text-[var(--color-accent)] mb-4">404</p>
        <h1 className="text-h1 text-[var(--color-ink)] mb-4">Page not found</h1>
        <p className="text-body-lg text-[var(--color-muted)] mb-8">
          The page you were looking for doesn&apos;t exist. It may have moved or
          been removed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" size="lg">
            Go to homepage
          </Button>
          <Button href="/contact/" variant="outline" size="lg">
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import { clientSite } from "@/lib/clients";

/**
 * A client's name in body copy, linked to their own site.
 *
 * Worth more to the client's domain than the logo strips are: those repeat the
 * same link on every page, which search engines discount, while this is a single
 * contextual link inside copy about that client, with their business name as the
 * anchor text.
 *
 * Same rel policy as ClientLogo, and for the same reasons — no `nofollow`, and
 * `noopener` without `noreferrer` so the referral still shows up in the client's
 * analytics. Styling matches the inline prose links already used across the site.
 *
 * Renders as plain text when we hold no verified URL, so a name is never a dead
 * link.
 */
export default function ClientLink({
  name,
  children,
}: {
  /** Key into CLIENT_SITES. Also the anchor text unless `children` overrides. */
  name: string;
  children?: ReactNode;
}) {
  const href = clientSite(name);
  const label = children ?? name;

  if (!href) return <>{label}</>;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="text-[var(--color-accent-text)] hover:underline"
    >
      {label}
    </a>
  );
}

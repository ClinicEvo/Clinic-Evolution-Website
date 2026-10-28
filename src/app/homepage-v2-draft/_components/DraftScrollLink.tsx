"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

/** An in-page link that glides to its target rather than jumping, so the
 *  hero's "See how it works" visibly takes the visitor down to the services.
 *  A plain anchor jump lands instantly and reads as the page changing, not as
 *  the button doing something. Only this click is animated: page scrolling
 *  stays the browser's own (see CLAUDE.md, Motion), and reduced-motion users
 *  still get the instant jump. The href keeps it working without JS. */
export default function DraftScrollLink({
  href,
  className,
  style,
  children,
}: {
  href: `#${string}`;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", href);
  };

  return (
    <a href={href} onClick={onClick} className={className} style={style}>
      {children}
    </a>
  );
}

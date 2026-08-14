"use client";

import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans rounded-[4px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap active:scale-[0.99]";

const baseStyle = {
  fontWeight: "var(--font-weight-semibold)",
  letterSpacing: "0.03rem",
} as React.CSSProperties;

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary:   { color: "#fff" },
  secondary: { color: "#fff" },
  ghost:     {},
  outline:   {},
};

/* Every size below is under AA's large-text threshold (18.66px bold / 24px), so
   button labels are judged as normal text at 4.5:1. White on the brand coral is
   3.07:1 and fails, hence --color-accent-strong for the fill (4.65:1 with white)
   and --color-accent-text for coral labels on light ground, which has to clear
   the tinted surfaces too. The outline border keeps the brand coral: a 2px
   border is a non-text element and only needs 3:1. */
const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent-strong)] !text-white hover:bg-[var(--color-accent-dim)]",
  secondary:
    "bg-[var(--color-ink)] !text-white hover:bg-[#222222]",
  ghost:
    "text-[var(--color-accent-text)] hover:bg-[var(--color-accent)]/5",
  outline:
    "border-2 border-[var(--color-accent)] text-[var(--color-accent-text)] hover:bg-[var(--color-accent-strong)] hover:!text-white",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-xs tracking-widest uppercase",
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  style,
  ...props
}: ButtonProps) {
  const combinedClasses = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const combinedStyle = { ...baseStyle, ...variantStyles[variant], ...style };

  if (href) {
    return (
      <Link href={href} className={combinedClasses} style={combinedStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} style={combinedStyle} {...props}>
      {children}
    </button>
  );
}

import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  type?: "button" | "submit";
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-label uppercase tracking-widest2 text-[13px] font-medium transition-all duration-300 ease-academy clip-cut-sm whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-bone text-ink hover:bg-transparent hover:text-bone border border-bone",
  secondary:
    "bg-transparent text-bone border border-bone/40 hover:border-bone hover:bg-bone hover:text-ink",
  ghost:
    "bg-transparent text-bone border border-transparent hover:border-bone/40",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4 text-sm",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  forceReload = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const isExternal = href?.startsWith("http");

  if (href && isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (href && forceReload) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  if (href) {

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

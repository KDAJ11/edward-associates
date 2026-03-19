"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
}

type ButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: string;
    external?: boolean;
  };

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-gold-600 text-white hover:bg-brand-gold-500 shadow-sm",
  secondary:
    "bg-brand-green-800 text-white hover:bg-brand-green-700",
  outline:
    "bg-transparent border-2 border-brand-green-800 text-brand-green-800 hover:bg-brand-green-50",
  ghost:
    "bg-transparent text-brand-green-800 hover:underline",
};

const outlineWhiteClasses =
  "bg-transparent border-2 border-white text-white hover:bg-white/10";

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      className = "",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:ring-offset-2 hover:scale-[1.02]";
    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
    const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClass} ${className}`;

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, outlineWhiteClasses };
export type { ButtonProps };

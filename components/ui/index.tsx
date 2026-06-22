import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

// ---------------------------------------------------------------------------
// Aurevia reusable UI kit. Shared primitives used across the homepage and all
// brand pages to keep spacing, typography, and color usage consistent.
// ---------------------------------------------------------------------------

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-7xl px-6 lg:px-10", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  tone = "ivory",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "ivory" | "forest" | "sand" | "white";
  id?: string;
}) {
  const tones: Record<string, string> = {
    ivory: "bg-white text-ink",
    white: "bg-white text-ink",
    sand: "bg-ivory-dim text-ink",
    forest: "bg-sand text-ink",
  };
  return (
    <section
      id={id}
      className={clsx("py-20 md:py-28 lg:py-32", tones[tone], className)}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-block text-xs font-medium uppercase tracking-[0.28em] text-ink-soft",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-4 font-serif text-3xl leading-[1.08] tracking-tight text-ink md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
          {lede}
        </p>
      ) : null}
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "gold" | "ghost" | "outline" | "outlineLight";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const buttonVariants: Record<string, string> = {
  primary: "bg-ink text-white hover:bg-forest-soft",
  gold: "bg-ink text-white hover:bg-forest-soft",
  ghost: "text-ink hover:text-ink-soft",
  outline:
    "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-white",
  outlineLight:
    "border border-white/50 text-white hover:border-white hover:bg-white hover:text-ink",
};

const buttonSizes: Record<string, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm md:text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = clsx(
    buttonBase,
    buttonVariants[variant],
    buttonSizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} prefetch={true}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function Stat({
  value,
  label,
  invert = false,
}: {
  value: string;
  label: string;
  invert?: boolean;
}) {
  return (
    <div>
      <div className="text-3xl font-medium tracking-tight text-ink md:text-4xl">
        {value}
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.16em] text-ink-soft">
        {label}
      </div>
    </div>
  );
}

export function Divider({ className }: { className?: string }) {
  return <div className={clsx("h-px w-full bg-line", className)} />;
}

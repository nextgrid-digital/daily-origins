import { FadeIn } from "components/motion";
import { ReactNode } from "react";

// Backwards-compatible wrapper now powered by Framer Motion.
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  return (
    <FadeIn className={className} delay={delay} as={as}>
      {children}
    </FadeIn>
  );
}

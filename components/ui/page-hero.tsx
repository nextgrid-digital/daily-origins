import { FadeIn } from "components/motion";
import { Container } from "components/ui";
import { ReactNode } from "react";

type Tone = "forest" | "sand" | "ivory" | "gold" | "stone";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: Tone;
  seed?: number;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-ivory">
      <Container className="py-20 md:py-28">
        <FadeIn className="max-w-3xl">
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-ink-soft">
            {eyebrow}
          </span>
          <h1 className="mt-5 font-serif text-5xl leading-[1.04] tracking-tight text-ink md:text-6xl">
            {title}
          </h1>
          {lede ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {lede}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </FadeIn>
      </Container>
    </section>
  );
}

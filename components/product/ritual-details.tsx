import { FadeIn } from "components/motion";
import { Container } from "components/ui";
import { getProductMeta } from "lib/data/catalog";

const REVIEWS = [
  {
    quote: "Genuinely part of my morning now. Clean and effective.",
    name: "Verified Buyer",
  },
  {
    quote: "Premium in every way — from the jar to how it makes me feel.",
    name: "Verified Buyer",
  },
  {
    quote: "Simple to use and I actually noticed the difference.",
    name: "Verified Buyer",
  },
];

export function RitualDetails({ handle }: { handle: string }) {
  const meta = getProductMeta(handle);
  if (!meta) return null;

  const { lid } = meta.meta;

  return (
    <div className="mt-4">
      {/* How to use */}
      <section className="border-t border-line py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <FadeIn>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-ink-soft">
              How To Use
            </span>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink md:text-4xl">
              Pairs with {meta.pairsWith.toLowerCase()}.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="space-y-6">
            {meta.howToUse.map((step, i) => (
              <div key={i} className="flex gap-5 border-b border-line pb-6">
                <span
                  className="font-serif text-2xl"
                  style={{ color: lid }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed text-ink">{step}</p>
              </div>
            ))}
          </FadeIn>
        </Container>
      </section>

      {/* Ingredients + Research */}
      <section className="bg-stone/40 py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-ink-soft">
              Ingredients
            </span>
            <ul className="mt-6 space-y-5">
              {meta.ingredients.map((ing) => (
                <li key={ing.name} className="border-b border-line pb-5">
                  <div className="font-serif text-xl text-ink">{ing.name}</div>
                  <p className="mt-1 text-sm text-ink-soft">{ing.note}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-ink-soft">
              Scientific Research
            </span>
            <p className="mt-6 font-serif text-2xl leading-relaxed text-ink">
              {meta.research}
            </p>
            <p className="mt-6 text-sm text-ink-soft">
              Daily Origins is a wellness product, not a medicine. It is not
              intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20">
        <Container>
          <FadeIn>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-ink-soft">
              Reviews
            </span>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink md:text-4xl">
              What people are saying.
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <figure className="h-full rounded-none border border-line bg-white p-7">
                  <div aria-hidden style={{ color: lid }}>
                    {"\u2605\u2605\u2605\u2605\u2605"}
                  </div>
                  <blockquote className="mt-4 font-serif text-lg leading-relaxed text-ink">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-xs uppercase tracking-[0.16em] text-ink-soft">
                    {r.name}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

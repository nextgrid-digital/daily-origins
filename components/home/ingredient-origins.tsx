import { FadeIn, Parallax } from "components/motion";
import { Button, Container } from "components/ui";
import { ph } from "lib/placeholder";
import Image from "next/image";

export function IngredientOrigins() {
  const image = ph({
    title: "Origins",
    eyebrow: "Sourced With Intent",
    tone: "immunity",
    shape: "scene",
    seed: 12,
    w: 1200,
    h: 1400,
  });

  return (
    <section className="bg-stone/40 py-20 md:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <Parallax distance={36} className="order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line">
            <Image
              src={image}
              alt="Ingredient origins"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </Parallax>

        <FadeIn className="order-1 lg:order-2">
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-ink-soft">
            Ingredient Origins
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-[1.08] tracking-tight text-ink md:text-4xl lg:text-5xl">
            Powerful ingredients, honestly sourced.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            We start with the plant. Black ginger from the highlands of South
            East Asia, brahmi from the wetlands of India, turmeric, ashwagandha,
            amla, and moringa — each selected for potency and standardised for
            its active compounds.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            No fillers. No ingredient theatre. Just what works, in a form you'll
            actually use every day.
          </p>
          <div className="mt-8">
            <Button href="/ingredients" variant="outline" size="lg">
              Explore Ingredients
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

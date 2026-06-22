import { FadeIn } from "components/motion";
import { Container } from "components/ui";
import { NewsletterForm } from "components/ui/newsletter-form";

export function Hero() {
  return (
    <section className="bg-white">
      <Container className="py-20 text-center md:py-28">
        <FadeIn className="mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-stone/60 px-3.5 py-1.5 text-xs font-medium text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-energy" />
            Updated weekly
          </span>
          <h1 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
            Powerful ingredients, all in one place.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            A curated range of daily rituals — energy, focus, recovery, sleep,
            and immunity — designed to fit effortlessly into your routine.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <NewsletterForm />
            <p className="mt-3 text-xs text-ink-soft">
              Free. No spam. Unsubscribe anytime.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

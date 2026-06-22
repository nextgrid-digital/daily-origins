import { FadeIn } from "components/motion";
import { Container } from "components/ui";
import { NewsletterForm } from "components/ui/newsletter-form";

export function Newsletter() {
  return (
    <section className="border-t border-line bg-ivory-dim py-16 md:py-20">
      <Container>
        <FadeIn className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-md">
            <h2 className="font-serif text-2xl tracking-tight text-ink md:text-3xl">
              Join the ritual.
            </h2>
            <p className="mt-3 text-base text-ink-soft">
              Considered guidance, new rituals, and member offers. No noise.
            </p>
          </div>
          <div className="w-full max-w-md">
            <NewsletterForm />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

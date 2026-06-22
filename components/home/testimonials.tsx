import { FadeIn, Stagger, StaggerItem } from "components/motion";
import { Container, SectionHeading } from "components/ui";

const TESTIMONIALS = [
  {
    quote:
      "Daily Energy replaced my second coffee. I get the lift without the 3pm crash — it's the first thing I make every morning.",
    name: "Omar A.",
    role: "Founder, Dubai",
  },
  {
    quote:
      "Daily Focus is part of my deep-work ritual now. Calm, clear, and genuinely noticeable on long days.",
    name: "Sara K.",
    role: "Product Lead, Singapore",
  },
  {
    quote:
      "Daily Sleep in warm milk has become non-negotiable. I wind down faster and wake up clearer.",
    name: "Rohan M.",
    role: "Consultant, Bengaluru",
  },
];

export function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            align="center"
            eyebrow="Testimonials"
            title="Loved as part of the everyday."
            className="mx-auto"
          />
        </FadeIn>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col rounded-none border border-line bg-white p-8">
                <blockquote className="grow font-serif text-xl leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <div className="text-sm font-medium text-ink">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.16em] text-ink-soft">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

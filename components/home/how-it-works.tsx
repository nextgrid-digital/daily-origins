import { FadeIn, Stagger, StaggerItem } from "components/motion";
import { Container, SectionHeading } from "components/ui";

const STEPS = [
  {
    n: "01",
    title: "Choose your ritual",
    body: "Pick the ritual that fits your day — energy, focus, recovery, sleep, or immunity.",
  },
  {
    n: "02",
    title: "Add to your daily routine",
    body: "Stir one scoop into your coffee, tea, smoothie, or warm milk. No new habits to build.",
  },
  {
    n: "03",
    title: "Feel the difference",
    body: "Consistency is where it works. Show up daily and let the ingredients do the rest.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="How It Works"
            title="Wellness without the friction."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <Stagger className="mt-14 grid gap-10 md:grid-cols-3">
          {STEPS.map((step) => (
            <StaggerItem key={step.n}>
              <div className="border-t border-line pt-6">
                <span className="font-serif text-4xl text-ink-soft/50">
                  {step.n}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

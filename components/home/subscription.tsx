import { FadeIn, Stagger, StaggerItem } from "components/motion";
import { Button, Container } from "components/ui";

const PERKS = [
  {
    title: "Save 15% on every order",
    body: "Member pricing on every ritual, automatically applied to each delivery.",
  },
  {
    title: "Delivered on your schedule",
    body: "Choose your cadence. Skip, swap, or reschedule a delivery whenever you need.",
  },
  {
    title: "Cancel anytime",
    body: "No lock-in and no fine print. Pause or cancel from your account in seconds.",
  },
];

export function Subscription() {
  return (
    <section className="bg-recovery py-20 text-ivory md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <FadeIn>
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-ivory/60">
              Subscription
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-[1.08] tracking-tight md:text-4xl lg:text-5xl">
              A ritual works when it&rsquo;s daily.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/75">
              Subscribe & Save keeps your shelf stocked and your routine
              consistent — at a lower price, fully on your terms.
            </p>
            <div className="mt-9">
              <Button href="/search" variant="outlineLight" size="lg">
                Build Your Ritual
              </Button>
            </div>
          </FadeIn>

          <Stagger className="space-y-5">
            {PERKS.map((perk) => (
              <StaggerItem key={perk.title}>
                <div className="rounded-none border border-ivory/15 bg-ivory/5 p-6">
                  <h3 className="font-serif text-xl">{perk.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/70">
                    {perk.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}

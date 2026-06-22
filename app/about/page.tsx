import Footer from "components/layout/footer";
import { FadeIn, Parallax, Stagger, StaggerItem } from "components/motion";
import { Container, SectionHeading, Stat } from "components/ui";
import { PageHero } from "components/ui/page-hero";
import { ph } from "lib/placeholder";
import Image from "next/image";

export const metadata = {
  title: "About",
  description:
    "Daily Origins turns powerful natural ingredients into simple daily rituals — modern wellness designed for daily life.",
};

const VALUES = [
  {
    title: "Ingredients first",
    body: "We start with the plant and standardise for active compounds. Potency over marketing, always.",
  },
  {
    title: "Built for daily life",
    body: "A ritual only works if you'll actually use it. Ours fit into the coffee, tea, and meals you already have.",
  },
  {
    title: "Modern, not medicinal",
    body: "This is modern wellness — calm, minimal, and considered. No clutter, no clinical theatre.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Modern wellness, designed for daily life."
        lede="Daily Origins was born from a simple idea: the most powerful natural ingredients should be effortless to use every single day."
      />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Parallax distance={36}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line">
                <Image
                  src={ph({
                    title: "Our Philosophy",
                    eyebrow: "Daily Ritual",
                    tone: "focus",
                    shape: "scene",
                    seed: 14,
                    w: 1200,
                    h: 1500,
                  })}
                  alt="Daily Origins philosophy"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Parallax>
            <div>
              <SectionHeading
                eyebrow="The Mission"
                title="Powerful ingredients, purposeful rituals."
                lede="We take ingredients with real heritage — black ginger, brahmi, turmeric, ashwagandha, amla, moringa — and turn them into rituals you can build a better day around."
              />
              <p className="mt-6 text-base leading-relaxed text-ink-soft">
                This is not medicine and it is not Ayurveda. It is modern
                wellness: standardised actives, clean formulations, and
                packaging designed to live on your counter, not hide in a
                cabinet.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
                <Stat value="5" label="Rituals" />
                <Stat value="6" label="Hero Ingredients" />
                <Stat value="100%" label="Daily" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-stone/40 py-20 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Sourcing"
              title="From the plant, with intent."
              lede="We source directly and standardise for the compounds that matter — so what's on the label is what's in the jar."
            />
          </FadeIn>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="What We Stand For"
              title="Principles behind every ritual."
              className="mx-auto"
            />
          </FadeIn>
          <Stagger className="mt-14 grid gap-8 md:grid-cols-3">
            {VALUES.map((value, i) => (
              <StaggerItem key={value.title}>
                <div className="h-full rounded-3xl border border-line bg-ivory-dim p-8">
                  <span className="font-serif text-3xl text-ink-soft/50">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {value.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <Footer />
    </>
  );
}

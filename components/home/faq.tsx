import { FadeIn } from "components/motion";
import { Container, SectionHeading } from "components/ui";
import { Accordion, AccordionItem } from "components/ui/accordion";

const FAQ_ITEMS: AccordionItem[] = [
  {
    question: "How do I take Daily Origins?",
    answer:
      "Each ritual is a simple scoop you stir into something you already drink — coffee, tea, a smoothie, or warm milk. No pills, no routine to rebuild.",
  },
  {
    question: "Is this medicine or Ayurveda?",
    answer:
      "No. Daily Origins is modern wellness. We use powerful natural ingredients, standardised for their active compounds, designed to fit into everyday life — not to treat or cure any condition.",
  },
  {
    question: "How does Subscribe & Save work?",
    answer:
      "Choose Subscribe & Save on any product to receive it on a recurring schedule at a lower price. You stay in control — adjust, pause, or cancel anytime.",
  },
  {
    question: "When will I feel the difference?",
    answer:
      "Some rituals (like Energy and Focus) can be felt the same day. Others, like Recovery, Sleep, and Immunity, build with consistency. Daily use is where they work best.",
  },
  {
    question: "Where do you ship?",
    answer:
      "We ship across the UAE and GCC, with growing coverage in India, Singapore, Australia, and the United Kingdom. See our Global Shipping page for details.",
  },
];

export function Faq() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <FadeIn>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions, answered."
              lede="Everything you need to know about your daily ritual."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <Accordion items={FAQ_ITEMS} />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

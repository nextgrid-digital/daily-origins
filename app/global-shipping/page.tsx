import Footer from "components/layout/footer";
import { Container, Section, SectionHeading } from "components/ui";
import { Accordion } from "components/ui/accordion";
import { PageHero } from "components/ui/page-hero";
import { Reveal } from "components/ui/reveal";

export const metadata = {
  title: "Global Shipping",
  description:
    "Daily Origins delivers our daily ritual range across the UAE, GCC, India, Singapore, Australia, and the UK with customs expertise and reliable lead times.",
};

const REGIONS = [
  { region: "United Arab Emirates", time: "1–3 business days", note: "Free express over $150" },
  { region: "GCC", time: "2–5 business days", note: "Duties calculated at checkout" },
  { region: "India", time: "4–7 business days", note: "Import compliance handled" },
  { region: "South East Asia", time: "5–9 business days", note: "Regional courier network" },
];

const FAQ = [
  {
    question: "How are duties and taxes handled?",
    answer:
      "For most destinations, duties and taxes are calculated transparently at checkout so there are no surprises on delivery. Wholesale shipments are quoted with full landed-cost clarity.",
  },
  {
    question: "Do you offer tracking?",
    answer:
      "Yes — every order ships with end-to-end tracking, and your account manager can provide proactive status updates on larger or trade shipments.",
  },
  {
    question: "Can you ship to addresses outside these regions?",
    answer:
      "Our core network covers the UAE, GCC, India, and South East Asia. For other destinations, contact our team and we'll arrange a tailored freight solution where possible.",
  },
];

export default function GlobalShippingPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Shipping"
        title="Delivered with care, everywhere we serve"
        lede="Customs expertise across our regions means your ritual arrives quickly, compliantly, and beautifully packaged."
        tone="forest"
        seed={23}
      />

      <Section tone="ivory">
        <Container>
          <SectionHeading
            eyebrow="Delivery Estimates"
            title="Lead times by region"
            lede="Typical retail delivery windows. Wholesale and bulk timelines are confirmed per order."
          />
          <div className="mt-12 overflow-hidden rounded-3xl border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-ink text-ivory">
                <tr>
                  <th className="px-6 py-4 font-medium">Region</th>
                  <th className="px-6 py-4 font-medium">Estimated time</th>
                  <th className="px-6 py-4 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-white">
                {REGIONS.map((r) => (
                  <tr key={r.region}>
                    <td className="px-6 py-5 font-serif text-base text-ink">
                      {r.region}
                    </td>
                    <td className="px-6 py-5 text-ink-soft">{r.time}</td>
                    <td className="px-6 py-5 text-ink-soft">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <SectionHeading
              eyebrow="Shipping FAQ"
              title="Logistics, answered"
            />
            <Reveal>
              <Accordion items={FAQ} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}

import {
    BanknotesIcon,
    CubeIcon,
    MapIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";
import Footer from "components/layout/footer";
import { Container, Section, SectionHeading } from "components/ui";
import { LeadForm } from "components/ui/lead-form";
import { PageHero } from "components/ui/page-hero";
import { Reveal } from "components/ui/reveal";

export const metadata = {
  title: "Wholesale",
  description:
    "Partner with Daily Origins for trade pricing, regional exclusivity, and dependable fulfilment of our daily ritual range across the UAE, GCC, India, and South East Asia.",
};

const BENEFITS = [
  {
    icon: BanknotesIcon,
    title: "Competitive trade pricing",
    body: "Tiered margins that scale with volume, with transparent terms.",
  },
  {
    icon: MapIcon,
    title: "Regional exclusivity",
    body: "Protected territories for committed partners in key markets.",
  },
  {
    icon: CubeIcon,
    title: "Bonded fulfilment",
    body: "Warehousing and customs handled across all our regions.",
  },
  {
    icon: SparklesIcon,
    title: "Marketing support",
    body: "Premium imagery, copy, and merchandising assets included.",
  },
];

export default function WholesalePage() {
  return (
    <>
      <PageHero
        eyebrow="Wholesale"
        title="Stock the rituals customers ask for"
        lede="Join cafés, gyms, studios, hotels, and retailers across the region carrying Daily Origins. Premium rituals, dependable supply, and a partner invested in your growth."
        tone="forest"
        seed={9}
      />

      <Section tone="ivory">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Partner Benefits"
            title="A trade program built for premium retail"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="h-full rounded-3xl border border-line bg-white p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/5 text-ink">
                    <b.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <SectionHeading
              eyebrow="Request Access"
              title="Apply for a wholesale account"
              lede="Tell us about your business and the markets you serve. Our trade team will respond within one business day with pricing and terms."
            />
            <LeadForm
              submitLabel="Request trade pricing"
              successTitle="Your wholesale enquiry is in."
              successBody="Our trade team will email your pricing and onboarding details within one business day."
              fields={[
                { name: "company", label: "Company name", required: true },
                { name: "contact", label: "Contact name", required: true },
                { name: "email", label: "Work email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                {
                  name: "market",
                  label: "Primary market",
                  type: "select",
                  options: ["UAE", "GCC", "India", "South East Asia", "Other"],
                  required: true,
                },
                {
                  name: "type",
                  label: "Business type",
                  type: "select",
                  options: ["Spa / Clinic", "Retailer", "Hotel / Hospitality", "Gym / Studio", "Distributor", "Other"],
                },
                {
                  name: "message",
                  label: "Tell us about your business",
                  type: "textarea",
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}

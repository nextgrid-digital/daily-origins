import {
    BuildingOffice2Icon,
    ChatBubbleLeftRightIcon,
    EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Footer from "components/layout/footer";
import { Container, Section, SectionHeading } from "components/ui";
import { LeadForm } from "components/ui/lead-form";
import { PageHero } from "components/ui/page-hero";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Daily Origins for customer support, wholesale enquiries, or distribution partnerships across the UAE, GCC, India, and beyond.",
};

const CHANNELS = [
  {
    icon: EnvelopeIcon,
    title: "General & support",
    detail: "care@dailyorigins.com",
    sub: "Replies within one business day",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Wholesale & trade",
    detail: "trade@dailyorigins.com",
    sub: "Pricing, terms & onboarding",
  },
  {
    icon: BuildingOffice2Icon,
    title: "Head office",
    detail: "Dubai, United Arab Emirates",
    sub: "Bonded hubs across the region",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk wellness"
        lede="Whether you're a customer, a café, or a distributor, our team is ready to help. Reach out and we'll respond promptly."
        tone="forest"
        seed={35}
      />

      <Section tone="ivory">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {CHANNELS.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-line bg-white p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/5 text-ink">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-base text-ink">{c.detail}</p>
                <p className="mt-1 text-sm text-ink-soft">{c.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <SectionHeading
              eyebrow="Send a Message"
              title="We'd love to hear from you"
              lede="Fill in the form and the right team will get back to you. For trade enquiries, the wholesale page routes you faster."
            />
            <LeadForm
              submitLabel="Send message"
              successTitle="Message sent."
              successBody="Thank you for reaching out — we'll be in touch shortly."
              fields={[
                { name: "name", label: "Your name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                {
                  name: "topic",
                  label: "Topic",
                  type: "select",
                  options: ["Retail order", "Wholesale", "Distribution", "Press", "Other"],
                  required: true,
                },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "message", label: "How can we help?", type: "textarea", required: true },
              ]}
            />
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}

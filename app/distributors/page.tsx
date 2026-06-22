import Footer from "components/layout/footer";
import { Container, Section, SectionHeading, Stat } from "components/ui";
import { LeadForm } from "components/ui/lead-form";
import { PageHero } from "components/ui/page-hero";
import { Reveal } from "components/ui/reveal";

export const metadata = {
  title: "Distributors",
  description:
    "Become a Daily Origins distribution partner across the UAE, GCC, India, and South East Asia. Regional exclusivity, full compliance support, and dependable logistics.",
};

const REGIONS = [
  {
    name: "United Arab Emirates",
    detail: "Bonded hub in Dubai with same-week regional dispatch.",
    status: "Partners welcome",
  },
  {
    name: "GCC",
    detail: "Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman coverage.",
    status: "Selective",
  },
  {
    name: "India",
    detail: "Metro-first rollout with compliance and import support.",
    status: "Partners welcome",
  },
  {
    name: "South East Asia",
    detail: "Singapore, Malaysia, Thailand, Indonesia, and Vietnam.",
    status: "Selective",
  },
];

export default function DistributorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Distribution"
        title="Bring Daily Origins to your territory"
        lede="We appoint a limited number of distribution partners per region and invest deeply in their success — from compliance and logistics to brand support."
        tone="forest"
        seed={17}
      />

      <Section tone="sand">
        <Container>
          <SectionHeading
            eyebrow="Active Regions"
            title="Where we're expanding"
            lede="Territories below are at various stages of partnership. Exclusivity is available for committed, well-positioned distributors."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {REGIONS.map((region, i) => (
              <Reveal key={region.name} delay={i * 80}>
                <div className="flex h-full flex-col rounded-none border border-line bg-white p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl text-ink">
                      {region.name}
                    </h3>
                    <span className="rounded-full bg-ink/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-ink">
                      {region.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {region.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="forest">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <Stat value="6+" label="Markets" />
            <Stat value="5" label="Rituals" />
            <Stat value="99.2%" label="On-time" />
            <Stat value="24h" label="Reply" />
          </div>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <SectionHeading
              eyebrow="Apply"
              title="Start a distribution conversation"
              lede="Share your market position and capabilities. Qualified applicants receive a full partnership pack and a call with our regional director."
            />
            <LeadForm
              submitLabel="Apply to distribute"
              successTitle="Application received."
              successBody="Our regional director will review your details and reach out to schedule a conversation."
              fields={[
                { name: "company", label: "Company name", required: true },
                { name: "contact", label: "Contact name", required: true },
                { name: "email", label: "Work email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                {
                  name: "region",
                  label: "Target region",
                  type: "select",
                  options: ["UAE", "GCC", "India", "South East Asia"],
                  required: true,
                },
                { name: "experience", label: "Years in distribution", type: "text" },
                {
                  name: "message",
                  label: "Your market & capabilities",
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

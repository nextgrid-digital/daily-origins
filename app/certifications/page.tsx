import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import Footer from "components/layout/footer";
import { Container, Section, SectionHeading } from "components/ui";
import { PageHero } from "components/ui/page-hero";
import { Reveal } from "components/ui/reveal";

export const metadata = {
  title: "Certifications",
  description:
    "Daily Origins is produced in GMP-certified facilities with third-party testing, standardised actives, and full traceability on every batch.",
};

const CERTS = [
  { name: "GMP Certified", body: "Produced in Good Manufacturing Practice facilities for food supplements." },
  { name: "ISO 22000", body: "Food safety management across our production partners." },
  { name: "Third-Party Tested", body: "Independent lab testing for purity, potency, and heavy metals." },
  { name: "Non-GMO", body: "Ingredients sourced from non-genetically-modified crops." },
  { name: "Vegan & Plant-Based", body: "No animal-derived ingredients across the ritual range." },
  { name: "Halal", body: "Halal-compliant formulations for our UAE and GCC markets." },
];

const STANDARDS = [
  "Standardised for active compounds, batch by batch",
  "Independent lab testing for purity and potency",
  "Full traceability from plant to jar",
  "Certificates of analysis available on request",
];

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title="Proof, not promises"
        lede="We hold our supply chain to high standards. Every ritual is backed by certification and test data you can verify."
        tone="forest"
        seed={29}
      />

      <Section tone="ivory">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Standards We Require"
            title="Certifications across our catalogue"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CERTS.map((cert, i) => (
              <Reveal key={cert.name} delay={i * 70}>
                <div className="flex h-full gap-4 rounded-3xl border border-line bg-white p-7">
                  <CheckBadgeIcon className="h-8 w-8 flex-none text-ink" />
                  <div>
                    <h3 className="font-serif text-xl text-ink">
                      {cert.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {cert.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-recovery py-20 text-ivory md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-xl">
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-ivory/60">
                Our Commitment
              </span>
              <h2 className="mt-4 font-serif text-3xl leading-[1.08] tracking-tight md:text-4xl">
                Quality assurance, built in.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ivory/75">
                Certification is the baseline. Our quality process goes further
                to protect customers and partners alike.
              </p>
            </div>
            <ul className="space-y-5">
              {STANDARDS.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-ivory text-xs text-recovery">
                    ✓
                  </span>
                  <span className="text-ivory/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}

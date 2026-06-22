import clsx from "clsx";
import { FadeIn, Stagger, StaggerItem } from "components/motion";
import { Container, SectionHeading } from "components/ui";
import { FAMILY_META, FAMILY_ORDER, getProductByFamily } from "lib/data/catalog";
import { ph } from "lib/placeholder";
import Image from "next/image";
import Link from "next/link";

const PANEL: Record<string, string> = {
  energy: "bg-energy/5",
  focus: "bg-focus/5",
  recovery: "bg-recovery/5",
  sleep: "bg-sleep/10",
  immunity: "bg-immunity/5",
};

export function ChooseYourRitual() {
  return (
    <section id="rituals" className="bg-white py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Choose Your Ritual"
            title="Five rituals. One daily routine."
            lede="Each ritual pairs a powerful natural ingredient with the part of your day it's made for. Recognise them by their lid."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {FAMILY_ORDER.map((family) => {
            const meta = FAMILY_META[family];
            const product = getProductByFamily(family);
            const image = ph({
              title: meta.label,
              eyebrow: meta.ingredient,
              tone: family,
              shape: "jar",
              seed: family.length + 2,
              w: 600,
              h: 760,
            });

            return (
              <StaggerItem key={family}>
                <Link
                  href={product ? `/product/${product.handle}` : `/search/${family}`}
                  prefetch={true}
                  className="group block"
                >
                  <div
                    className={clsx(
                      "relative aspect-[3/4] overflow-hidden rounded-none border border-line",
                      PANEL[family]
                    )}
                  >
                    <Image
                      src={image}
                      alt={meta.label}
                      fill
                      sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:-translate-y-2"
                    />
                  </div>
                  <div className="mt-4">
                    <span
                      className="text-[11px] font-medium uppercase tracking-[0.18em]"
                      style={{ color: meta.lid }}
                    >
                      {meta.ingredient}
                    </span>
                    <h3 className="mt-1 font-serif text-2xl text-ink">
                      {meta.label}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">
                      {meta.benefits.join(" · ")}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}

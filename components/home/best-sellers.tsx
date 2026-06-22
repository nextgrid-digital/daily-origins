import { FadeIn, Stagger, StaggerItem } from "components/motion";
import { ProductCard } from "components/product-card";
import { Container, SectionHeading } from "components/ui";
import { getCollectionProducts } from "lib/shopify";

export async function BestSellers() {
  const products = await getCollectionProducts({
    collection: "hidden-homepage-featured-items",
    sortKey: "BEST_SELLING",
  });

  if (!products.length) return null;

  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Best Sellers"
            title="The rituals people return to."
            lede="The blends our community reaches for every morning and every night."
          />
        </FadeIn>

        <Stagger className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <StaggerItem key={product.handle}>
              <ProductCard product={product} priority={i < 3} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

import { Hero } from "components/home/hero";
import { ProductDirectory } from "components/home/product-directory";
import Footer from "components/layout/footer";
import { getProducts } from "lib/shopify";

export const metadata = {
  description:
    "Daily Origins — a curated range of daily wellness rituals. Powerful natural ingredients, designed to fit into your everyday routine.",
  openGraph: { type: "website" },
};

export default async function HomePage() {
  const products = await getProducts({});

  return (
    <>
      <Hero />
      <ProductDirectory products={products} />
      <Footer />
    </>
  );
}

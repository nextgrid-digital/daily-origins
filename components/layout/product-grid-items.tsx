import Grid from "components/grid";
import { SearchGridCard } from "components/product/search-grid-card";
import { Product } from "lib/shopify/types";

export default function ProductGridItems({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.map((product, i) => (
        <Grid.Item key={product.handle} className="aspect-auto h-full animate-fadeIn">
          <SearchGridCard product={product} priority={i < 3} />
        </Grid.Item>
      ))}
    </>
  );
}

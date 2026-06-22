import { QuickAddToCart } from "components/cart/quick-add-to-cart";
import Price from "components/price";
import { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

function oneTimePrice(product: Product) {
  const variant =
    product.variants.find((v) => v.title === "One-time") ?? product.variants[0];
  return variant?.price ?? product.priceRange.maxVariantPrice;
}

export function SearchGridCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const price = oneTimePrice(product);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden bg-white">
      <Link
        href={`/product/${product.handle}`}
        prefetch={true}
        className="relative block aspect-[4/5] w-full overflow-hidden"
      >
        <Image
          src={product.featuredImage?.url}
          alt={product.featuredImage?.altText || product.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </Link>

      <div className="flex flex-col gap-2 border-t border-line px-0 py-2">
        <div className="flex items-start justify-between gap-2 px-2">
          <Link
            href={`/product/${product.handle}`}
            prefetch={true}
            className="font-semibold leading-snug text-ink hover:underline"
          >
            {product.title}
          </Link>
          <Price
            className="shrink-0 text-sm font-medium text-ink-soft"
            amount={price.amount}
            currencyCode={price.currencyCode}
            currencyCodeClassName="hidden"
          />
        </div>
        <QuickAddToCart product={product} className="px-2" />
      </div>
    </article>
  );
}

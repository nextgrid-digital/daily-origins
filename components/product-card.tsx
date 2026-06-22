import clsx from "clsx";
import Price from "components/price";
import { FAMILY_META, type Family } from "lib/data/catalog";
import type { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

const DOT: Record<Family, string> = {
  energy: "bg-energy",
  focus: "bg-focus",
  recovery: "bg-recovery",
  sleep: "bg-sleep",
  immunity: "bg-immunity",
};

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const family = (product.tags[0] as Family) ?? "energy";
  const meta = FAMILY_META[family];
  const isBestSeller = product.tags.includes("best-seller");

  return (
    <Link
      href={`/product/${product.handle}`}
      prefetch={true}
      className="group flex items-center gap-5 rounded-none border border-line bg-white p-4 transition-all duration-200 hover:border-stone-dark hover:shadow-sm md:p-5"
    >
      <div className="relative h-20 w-20 flex-none overflow-hidden rounded-none border border-line bg-stone md:h-24 md:w-24">
        <Image
          src={product.featuredImage.url}
          alt={product.featuredImage.altText || product.title}
          fill
          priority={priority}
          sizes="(min-width: 768px) 96px, 80px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          {isBestSeller ? (
            <span className="rounded-none bg-ink px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
              Popular
            </span>
          ) : null}
          <h3 className="truncate text-base font-semibold text-ink md:text-lg">
            {product.title}
          </h3>
        </div>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft">
          <span className={clsx("h-1.5 w-1.5 rounded-full", DOT[family])} />
          {meta.label}
        </p>
        <p className="mt-1 truncate text-sm text-ink-soft">{meta.tagline}</p>
      </div>

      <Price
        className="flex-none self-start text-sm font-medium text-ink-soft"
        amount={product.priceRange.maxVariantPrice.amount}
        currencyCode={product.priceRange.maxVariantPrice.currencyCode}
        currencyCodeClassName="hidden"
      />
    </Link>
  );
}

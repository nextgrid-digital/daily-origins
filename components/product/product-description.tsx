import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import Prose from "components/prose";
import { FAMILY_META, getProductMeta, type Family } from "lib/data/catalog";
import { Product } from "lib/shopify/types";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  const family = (product.tags[0] as Family) ?? "energy";
  const meta = FAMILY_META[family];
  const productMeta = getProductMeta(product.handle);

  return (
    <>
      <div className="mb-6 flex flex-col border-b border-line pb-6">
        <span
          className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em]"
          style={{ color: meta.lid }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: meta.lid }}
          />
          {meta.label} · {meta.ingredient}
        </span>
        <h1 className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl">
          {product.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          {meta.blurb}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {meta.benefits.map((b) => (
            <span
              key={b}
              className="rounded-full border px-3 py-1 text-xs font-medium"
              style={{ color: meta.lid, borderColor: `${meta.lid}40` }}
            >
              {b}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-baseline gap-3">
          <span className="text-2xl font-medium text-ink">
            <Price
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
              currencyCodeClassName="hidden"
            />
          </span>
          {productMeta ? (
            <span className="text-sm text-ink-soft">
              or subscribe from ${productMeta.subscribePrice}
            </span>
          ) : null}
        </div>
      </div>

      <VariantSelector options={product.options} variants={product.variants} />
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-relaxed text-ink-soft"
          html={product.descriptionHtml}
        />
      ) : null}
      <AddToCart product={product} />
      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-6 text-center text-[11px] uppercase tracking-[0.12em] text-ink-soft">
        <span>30 Servings</span>
        <span>Free GCC Shipping</span>
        <span>Cancel Anytime</span>
      </div>
    </>
  );
}

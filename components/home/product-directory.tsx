"use client";

import clsx from "clsx";
import { ProductCard } from "components/product-card";
import { Container } from "components/ui";
import { FAMILY_META, FAMILY_ORDER, type Family } from "lib/data/catalog";
import type { Product } from "lib/shopify/types";
import { useState } from "react";

const TABS: { id: Family | "all"; label: string }[] = [
  { id: "all", label: "All" },
  ...FAMILY_ORDER.map((f) => ({ id: f, label: FAMILY_META[f].label })),
];

export function ProductDirectory({ products }: { products: Product[] }) {
  const [active, setActive] = useState<Family | "all">("all");

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.tags[0] === active);

  return (
    <section className="bg-white pb-24">
      <Container>
        <div className="sticky top-[73px] z-20 -mx-6 mb-8 border-b border-line bg-white/85 px-6 py-4 backdrop-blur-md lg:-mx-10 lg:px-10">
          <div className="flex flex-wrap items-center gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={clsx(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  active === tab.id
                    ? "bg-ink text-white"
                    : "border border-line bg-white text-ink-soft hover:border-stone-dark hover:text-ink"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <ProductCard key={product.handle} product={product} priority={i < 6} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-sm text-ink-soft">
            No rituals in this category yet.
          </p>
        ) : null}
      </Container>
    </section>
  );
}

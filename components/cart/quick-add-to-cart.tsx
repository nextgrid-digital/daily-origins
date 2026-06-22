"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { addItem } from "components/cart/actions";
import { useCart } from "components/cart/cart-context";
import { Product } from "lib/shopify/types";
import { useActionState } from "react";

function defaultVariantId(product: Product): string | undefined {
  const oneTime = product.variants.find((v) => v.title === "One-time");
  return oneTime?.id ?? product.variants[0]?.id;
}

export function QuickAddToCart({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { addCartItem } = useCart();
  const variantId = defaultVariantId(product);
  const variant = product.variants.find((v) => v.id === variantId);
  const [message, formAction, isPending] = useActionState(addItem, null);

  if (!variant || !variantId) return null;

  const disabled = !product.availableForSale || !variant.availableForSale;

  return (
    <form
      className={className}
      action={async () => {
        if (disabled) return;
        addCartItem(variant, product);
        await formAction(variantId);
      }}
    >
      <button
        type="submit"
        disabled={disabled || isPending}
        aria-label={`Add ${product.title} to cart`}
        className={clsx(
          "flex w-full items-center justify-center gap-2 rounded-none bg-ink px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-forest-soft disabled:cursor-not-allowed disabled:opacity-60",
          isPending && "opacity-80"
        )}
      >
        <PlusIcon className="h-4 w-4" />
        {isPending ? "Adding…" : disabled ? "Out of stock" : "Add to cart"}
      </button>
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}

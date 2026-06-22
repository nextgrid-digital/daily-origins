import type { Cart, CartItem } from "lib/shopify/types";
import { PRODUCTS } from "./catalog";

// In-memory cart store keyed by cartId cookie. Persists for the lifetime of the
// dev server process — sufficient for a local, offline commerce experience.

const CURRENCY = "USD";
const CHECKOUT_URL = "/checkout";

const store = new Map<string, Cart>();

function emptyCart(id: string): Cart {
  return {
    id,
    checkoutUrl: CHECKOUT_URL,
    totalQuantity: 0,
    lines: [],
    cost: {
      subtotalAmount: { amount: "0.0", currencyCode: CURRENCY },
      totalAmount: { amount: "0.0", currencyCode: CURRENCY },
      totalTaxAmount: { amount: "0.0", currencyCode: CURRENCY },
    },
  };
}

function findVariant(merchandiseId: string) {
  for (const product of PRODUCTS) {
    const variant = product.variants.find((v) => v.id === merchandiseId);
    if (variant) return { product, variant };
  }
  return undefined;
}

function recalculate(cart: Cart): Cart {
  const totalQuantity = cart.lines.reduce((sum, l) => sum + l.quantity, 0);
  const totalAmount = cart.lines.reduce(
    (sum, l) => sum + Number(l.cost.totalAmount.amount),
    0
  );

  cart.totalQuantity = totalQuantity;
  cart.cost = {
    subtotalAmount: { amount: totalAmount.toFixed(2), currencyCode: CURRENCY },
    totalAmount: { amount: totalAmount.toFixed(2), currencyCode: CURRENCY },
    totalTaxAmount: { amount: "0.0", currencyCode: CURRENCY },
  };
  return cart;
}

export function createLocalCart(): Cart {
  const id = `cart_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  const cart = emptyCart(id);
  store.set(id, cart);
  return cart;
}

export function getLocalCart(cartId: string): Cart | undefined {
  return store.get(cartId);
}

function ensureCart(cartId: string): Cart {
  const existing = store.get(cartId);
  if (existing) return existing;
  const cart = emptyCart(cartId);
  store.set(cartId, cart);
  return cart;
}

export function addLines(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Cart {
  const cart = ensureCart(cartId);

  for (const { merchandiseId, quantity } of lines) {
    const match = findVariant(merchandiseId);
    if (!match) continue;
    const { product, variant } = match;

    const existing = cart.lines.find((l) => l.merchandise.id === merchandiseId);
    if (existing) {
      existing.quantity += quantity;
      existing.cost.totalAmount.amount = (
        Number(variant.price.amount) * existing.quantity
      ).toFixed(2);
    } else {
      const line: CartItem = {
        id: `line_${merchandiseId}_${Math.random().toString(36).slice(2)}`,
        quantity,
        cost: {
          totalAmount: {
            amount: (Number(variant.price.amount) * quantity).toFixed(2),
            currencyCode: CURRENCY,
          },
        },
        merchandise: {
          id: variant.id,
          title: variant.title,
          selectedOptions: variant.selectedOptions,
          product: {
            id: product.id,
            handle: product.handle,
            title: product.title,
            featuredImage: product.featuredImage,
          },
        },
      };
      cart.lines.push(line);
    }
  }

  return recalculate(cart);
}

export function removeLines(cartId: string, lineIds: string[]): Cart {
  const cart = ensureCart(cartId);
  cart.lines = cart.lines.filter((l) => !l.id || !lineIds.includes(l.id));
  return recalculate(cart);
}

export function updateLines(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Cart {
  const cart = ensureCart(cartId);

  for (const update of lines) {
    const line = cart.lines.find((l) => l.id === update.id);
    if (!line) continue;
    if (update.quantity <= 0) {
      cart.lines = cart.lines.filter((l) => l.id !== update.id);
      continue;
    }
    const match = findVariant(update.merchandiseId);
    const unit = match ? Number(match.variant.price.amount) : 0;
    line.quantity = update.quantity;
    line.cost.totalAmount.amount = (unit * update.quantity).toFixed(2);
  }

  return recalculate(cart);
}

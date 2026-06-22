import {
  COLLECTIONS,
  MENUS,
  PAGES,
  PRODUCTS,
} from "lib/data/catalog";
import {
  addLines,
  createLocalCart,
  getLocalCart,
  removeLines,
  updateLines,
} from "lib/data/cart-store";
import { TAGS } from "lib/constants";
import {
  unstable_cacheLife as cacheLife,
  unstable_cacheTag as cacheTag,
} from "next/cache";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import {
  Cart,
  Collection,
  Menu,
  Page,
  Product,
} from "./types";

// ---------------------------------------------------------------------------
// Local commerce backend. Preserves the public API previously backed by
// Shopify so the rest of the application is unchanged, while serving curated
// wellness data and an in-memory cart with zero external dependencies.
// ---------------------------------------------------------------------------

function sortProducts(
  products: Product[],
  sortKey?: string,
  reverse?: boolean
): Product[] {
  const sorted = [...products];

  switch (sortKey) {
    case "PRICE":
      sorted.sort(
        (a, b) =>
          Number(a.priceRange.maxVariantPrice.amount) -
          Number(b.priceRange.maxVariantPrice.amount)
      );
      break;
    case "BEST_SELLING":
      sorted.sort(
        (a, b) =>
          Number(b.tags.includes("best-seller")) -
          Number(a.tags.includes("best-seller"))
      );
      break;
    case "CREATED_AT":
    case "CREATED":
      sorted.reverse();
      break;
    default:
      break;
  }

  return reverse ? sorted.reverse() : sorted;
}

export async function createCart(): Promise<Cart> {
  return createLocalCart();
}

export async function addToCart(
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const cartId = (await cookies()).get("cartId")?.value;
  if (!cartId) return createLocalCart();
  return addLines(cartId, lines);
}

export async function removeFromCart(lineIds: string[]): Promise<Cart> {
  const cartId = (await cookies()).get("cartId")?.value;
  if (!cartId) return createLocalCart();
  return removeLines(cartId, lineIds);
}

export async function updateCart(
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const cartId = (await cookies()).get("cartId")?.value;
  if (!cartId) return createLocalCart();
  return updateLines(cartId, lines);
}

export async function getCart(): Promise<Cart | undefined> {
  const cartId = (await cookies()).get("cartId")?.value;
  if (!cartId) return undefined;
  return getLocalCart(cartId);
}

export async function getCollection(
  handle: string
): Promise<Collection | undefined> {
  "use cache";
  cacheTag(TAGS.collections);
  cacheLife("days");
  return COLLECTIONS.find((c) => c.handle === handle);
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey,
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  "use cache";
  cacheTag(TAGS.collections, TAGS.products);
  cacheLife("days");

  let products: Product[];

  if (collection === "hidden-homepage-featured-items") {
    products = PRODUCTS.filter((p) => p.tags.includes("best-seller")).slice(0, 3);
  } else if (collection === "hidden-homepage-carousel") {
    products = PRODUCTS.slice(0, 8);
  } else if (!collection) {
    products = PRODUCTS;
  } else {
    products = PRODUCTS.filter((p) => p.tags.includes(collection));
  }

  return sortProducts(products, sortKey, reverse);
}

export async function getCollections(): Promise<Collection[]> {
  "use cache";
  cacheTag(TAGS.collections);
  cacheLife("days");

  return [
    {
      handle: "",
      title: "All",
      description: "All products",
      seo: { title: "All", description: "All products" },
      path: "/search",
      updatedAt: new Date().toISOString(),
    },
    ...COLLECTIONS,
  ];
}

export async function getMenu(handle: string): Promise<Menu[]> {
  "use cache";
  cacheTag(TAGS.collections);
  cacheLife("days");
  return MENUS[handle] ?? [];
}

export async function getPage(handle: string): Promise<Page> {
  return PAGES.find((p) => p.handle === handle) as Page;
}

export async function getPages(): Promise<Page[]> {
  return PAGES;
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  "use cache";
  cacheTag(TAGS.products);
  cacheLife("days");
  return PRODUCTS.find((p) => p.handle === handle);
}

export async function getProductRecommendations(
  productId: string
): Promise<Product[]> {
  "use cache";
  cacheTag(TAGS.products);
  cacheLife("days");

  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return PRODUCTS.slice(0, 4);

  const category = product.tags[0] ?? "";
  const related = PRODUCTS.filter(
    (p) => p.id !== productId && p.tags.includes(category)
  );
  const others = PRODUCTS.filter(
    (p) => p.id !== productId && !p.tags.includes(category)
  );
  return [...related, ...others].slice(0, 4);
}

export async function getProducts({
  query,
  reverse,
  sortKey,
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  "use cache";
  cacheTag(TAGS.products);
  cacheLife("days");

  let products = PRODUCTS;

  if (query) {
    const q = query.toLowerCase();
    products = products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  return sortProducts(products, sortKey, reverse);
}

// Kept for API compatibility with the revalidation webhook route.
export async function revalidate(_req: NextRequest): Promise<NextResponse> {
  return NextResponse.json({ status: 200 });
}

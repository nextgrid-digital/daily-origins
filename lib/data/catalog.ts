import { ph, type PlaceholderShape, type PlaceholderTone } from "lib/placeholder";
import type {
    Collection,
    Image,
    Menu,
    Page,
    Product,
    ProductOption,
    ProductVariant,
} from "lib/shopify/types";

// ---------------------------------------------------------------------------
// DAILY ORIGINS — a modern wellness brand built around five daily rituals.
// Powerful natural ingredients, transformed into simple routines. This local
// catalog preserves the exact domain types used across the app while serving
// a focused, premium five-SKU range with one-time and subscription pricing.
// ---------------------------------------------------------------------------

const CURRENCY = "USD";
const now = new Date().toISOString();

export type Family = "energy" | "focus" | "recovery" | "sleep" | "immunity";

function img(
  title: string,
  eyebrow: string,
  tone: PlaceholderTone,
  shape: PlaceholderShape,
  seed: number
): Image {
  const url = ph({ title, eyebrow, tone, shape, seed, w: 1200, h: 1500 });
  return { url, altText: `${title} — ${eyebrow}`, width: 1200, height: 1500 };
}

function money(amount: number) {
  return { amount: amount.toFixed(2), currencyCode: CURRENCY };
}

export type RitualMeta = {
  family: Family;
  label: string;
  ingredient: string;
  accent: string; // theme color token name
  lid: string; // hex used for inline accent styling
  tagline: string;
  benefits: string[];
  blurb: string;
};

export const FAMILY_META: Record<Family, RitualMeta> = {
  energy: {
    family: "energy",
    label: "Energy",
    ingredient: "Black Ginger",
    accent: "energy",
    lid: "#c0531f",
    tagline: "Energy, stamina, and performance.",
    benefits: ["Energy", "Stamina", "Performance"],
    blurb:
      "Black ginger for clean, sustained energy — no crash, no jitters. Built for the demands of a full day.",
  },
  focus: {
    family: "focus",
    label: "Focus",
    ingredient: "Brahmi",
    accent: "focus",
    lid: "#1e3a5f",
    tagline: "Focus, clarity, and mental performance.",
    benefits: ["Focus", "Clarity", "Mental Performance"],
    blurb:
      "Brahmi to sharpen attention and quiet the noise. For deep work and clear decisions.",
  },
  recovery: {
    family: "recovery",
    label: "Recovery",
    ingredient: "Turmeric + Ginger",
    accent: "recovery",
    lid: "#1a1a1a",
    tagline: "Recovery, joint support, and movement.",
    benefits: ["Recovery", "Joint Support", "Movement"],
    blurb:
      "Turmeric and ginger to support recovery and keep you moving. For training days and long weeks.",
  },
  sleep: {
    family: "sleep",
    label: "Sleep",
    ingredient: "Ashwagandha",
    accent: "sleep",
    lid: "#9385b8",
    tagline: "Sleep, relaxation, and calm.",
    benefits: ["Sleep", "Relaxation", "Calm"],
    blurb:
      "Ashwagandha to wind down and rest deeply. A calmer evening, a clearer morning.",
  },
  immunity: {
    family: "immunity",
    label: "Immunity",
    ingredient: "Amla + Moringa",
    accent: "immunity",
    lid: "#2f5d3a",
    tagline: "Immunity, nutrition, and wellbeing.",
    benefits: ["Immunity", "Nutrition", "Wellbeing"],
    blurb:
      "Amla and moringa for everyday resilience and dense plant nutrition. Your daily foundation.",
  },
};

export const FAMILY_ORDER: Family[] = [
  "energy",
  "focus",
  "recovery",
  "sleep",
  "immunity",
];

type Seed = {
  handle: string;
  family: Family;
  title: string;
  shape: PlaceholderShape;
  price: number;
  bestSeller?: boolean;
  description: string;
  highlights: string[];
  howToUse: string[];
  ingredients: { name: string; note: string }[];
  research: string;
  pairsWith: string;
};

const SUBSCRIBE_RATE = 0.85;

const SEEDS: Seed[] = [
  {
    handle: "daily-energy",
    family: "energy",
    title: "Daily Energy",
    shape: "jar",
    price: 48,
    bestSeller: true,
    description:
      "A clean daily blend built on black ginger for sustained energy, stamina, and performance — without the crash of caffeine alone.",
    highlights: [
      "Sustained energy, no jitters",
      "Supports stamina & output",
      "Black ginger (Kaempferia parviflora)",
      "30 daily servings",
    ],
    howToUse: [
      "Add one scoop to your morning coffee, tea, or smoothie.",
      "Best taken earlier in the day for lasting energy.",
      "Make it a daily ritual — consistency is where it works.",
    ],
    ingredients: [
      { name: "Black Ginger", note: "Standardised for active methoxyflavones" },
      { name: "Cordyceps", note: "Stamina and oxygen utilisation support" },
      { name: "Sea Salt Trace Minerals", note: "Electrolyte balance" },
    ],
    research:
      "Black ginger (Kaempferia parviflora) has been studied for its role in physical performance and energy metabolism, traditionally used across South East Asia for vitality.",
    pairsWith: "Coffee",
  },
  {
    handle: "daily-focus",
    family: "focus",
    title: "Daily Focus",
    shape: "jar",
    price: 48,
    bestSeller: true,
    description:
      "Brahmi-led blend for focus, clarity, and mental performance. For deep work, long meetings, and clear thinking.",
    highlights: [
      "Sharper attention & clarity",
      "Calm, not wired",
      "Brahmi (Bacopa monnieri)",
      "30 daily servings",
    ],
    howToUse: [
      "Stir one scoop into tea, water, or a smoothie.",
      "Take before focused work or study blocks.",
      "Use daily for compounding clarity.",
    ],
    ingredients: [
      { name: "Brahmi", note: "Standardised bacosides for cognition" },
      { name: "L-Theanine", note: "Calm, focused attention" },
      { name: "Lion's Mane", note: "Cognitive and nerve support" },
    ],
    research:
      "Bacopa monnieri (Brahmi) has been investigated for memory and cognitive performance, with a long history of traditional use for mental clarity.",
    pairsWith: "Tea",
  },
  {
    handle: "daily-recovery",
    family: "recovery",
    title: "Daily Recovery",
    shape: "jar",
    price: 52,
    bestSeller: true,
    description:
      "Turmeric and ginger blend to support recovery, joints, and movement — for training days and demanding weeks.",
    highlights: [
      "Supports recovery & mobility",
      "Joint comfort",
      "Turmeric + ginger",
      "30 daily servings",
    ],
    howToUse: [
      "Blend one scoop into warm milk or a smoothie.",
      "Take after training or in the evening.",
      "Pair with sleep for full recovery.",
    ],
    ingredients: [
      { name: "Turmeric", note: "Curcumin with black pepper for absorption" },
      { name: "Ginger", note: "Traditional support for comfort" },
      { name: "Tart Cherry", note: "Post-exercise recovery" },
    ],
    research:
      "Curcumin from turmeric, paired with piperine for bioavailability, is widely studied for its role in recovery and joint comfort.",
    pairsWith: "Warm Milk",
  },
  {
    handle: "daily-sleep",
    family: "sleep",
    title: "Daily Sleep",
    shape: "bottle",
    price: 46,
    description:
      "Ashwagandha blend to help you wind down, relax, and sleep deeply. A calmer evening, a clearer morning.",
    highlights: [
      "Deeper, calmer sleep",
      "Eases the wind-down",
      "KSM-66 Ashwagandha",
      "30 daily servings",
    ],
    howToUse: [
      "Mix one scoop into warm milk 30–60 minutes before bed.",
      "Dim the lights and make it part of your evening ritual.",
      "Use nightly for best results.",
    ],
    ingredients: [
      { name: "Ashwagandha", note: "KSM-66 root extract" },
      { name: "Magnesium Glycinate", note: "Relaxation and rest" },
      { name: "Tart Cherry", note: "Natural source of melatonin" },
    ],
    research:
      "Ashwagandha (Withania somnifera) has been studied for stress, relaxation, and sleep quality, with a long tradition of use for calm.",
    pairsWith: "Warm Milk",
  },
  {
    handle: "daily-immunity",
    family: "immunity",
    title: "Daily Immunity",
    shape: "jar",
    price: 44,
    description:
      "Amla and moringa for everyday immunity, dense plant nutrition, and overall wellbeing. Your daily foundation.",
    highlights: [
      "Everyday immune support",
      "Whole-food nutrition",
      "Amla + moringa",
      "30 daily servings",
    ],
    howToUse: [
      "Add one scoop to water, juice, or a smoothie.",
      "Take any time of day, every day.",
      "A simple base layer for your routine.",
    ],
    ingredients: [
      { name: "Amla", note: "Vitamin C-rich Indian gooseberry" },
      { name: "Moringa", note: "Dense plant micronutrients" },
      { name: "Zinc", note: "Immune function support" },
    ],
    research:
      "Amla (Indian gooseberry) and moringa are nutrient-dense plants traditionally valued for vitamin C and broad micronutrient support.",
    pairsWith: "Smoothies",
  },
];

function buildVariants(seed: Seed): {
  options: ProductOption[];
  variants: ProductVariant[];
} {
  const subscribe = Math.round(seed.price * SUBSCRIBE_RATE);
  const values = ["One-time", "Subscribe & Save"];

  const options: ProductOption[] = [
    { id: `${seed.handle}-plan`, name: "Plan", values },
  ];

  const variants: ProductVariant[] = [
    {
      id: `${seed.handle}-one-time`,
      title: "One-time",
      availableForSale: true,
      selectedOptions: [{ name: "Plan", value: "One-time" }],
      price: money(seed.price),
    },
    {
      id: `${seed.handle}-subscribe`,
      title: "Subscribe & Save",
      availableForSale: true,
      selectedOptions: [{ name: "Plan", value: "Subscribe & Save" }],
      price: money(subscribe),
    },
  ];

  return { options, variants };
}

function buildProduct(seed: Seed, index: number): Product {
  const meta = FAMILY_META[seed.family];
  const { options, variants } = buildVariants(seed);
  const featuredImage = img(
    seed.title,
    meta.ingredient,
    seed.family,
    seed.shape,
    index + 1
  );
  const altShape: PlaceholderShape = seed.shape === "bottle" ? "jar" : "bottle";
  const images: Image[] = [
    featuredImage,
    img(seed.title, meta.label, seed.family, altShape, index + 30),
    img(meta.ingredient, "Origin", seed.family, "scene", index + 60),
  ];

  const descriptionHtml = `<p>${seed.description}</p><ul>${seed.highlights
    .map((h) => `<li>${h}</li>`)
    .join("")}</ul>`;

  const tags = [seed.family, "ritual"];
  if (seed.bestSeller) tags.push("best-seller");

  return {
    id: `gid://daily-origins/Product/${index + 1}`,
    handle: seed.handle,
    availableForSale: true,
    title: seed.title,
    description: seed.description,
    descriptionHtml,
    options,
    priceRange: {
      maxVariantPrice: money(seed.price),
      minVariantPrice: money(Math.round(seed.price * SUBSCRIBE_RATE)),
    },
    variants,
    featuredImage,
    images,
    seo: {
      title: `${seed.title} | Daily Origins`,
      description: seed.description,
    },
    tags,
    updatedAt: now,
  };
}

export const PRODUCTS: Product[] = SEEDS.map(buildProduct);

export type ProductMeta = {
  family: Family;
  meta: RitualMeta;
  howToUse: string[];
  ingredients: { name: string; note: string }[];
  research: string;
  pairsWith: string;
  subscribePrice: number;
  price: number;
};

export function getProductMeta(handle: string): ProductMeta | undefined {
  const seed = SEEDS.find((s) => s.handle === handle);
  if (!seed) return undefined;
  return {
    family: seed.family,
    meta: FAMILY_META[seed.family],
    howToUse: seed.howToUse,
    ingredients: seed.ingredients,
    research: seed.research,
    pairsWith: seed.pairsWith,
    price: seed.price,
    subscribePrice: Math.round(seed.price * SUBSCRIBE_RATE),
  };
}

export function getFamily(handle: string): Family | undefined {
  return SEEDS.find((s) => s.handle === handle)?.family;
}

export function getProductByFamily(family: Family): Product | undefined {
  return PRODUCTS.find((p) => p.tags[0] === family);
}

// ---------------------------------------------------------------------------
// Collections — one per ritual family.
// ---------------------------------------------------------------------------

export const COLLECTIONS: Collection[] = FAMILY_ORDER.map((family) => {
  const meta = FAMILY_META[family];
  return {
    handle: family,
    title: meta.label,
    description: meta.blurb,
    seo: { title: `${meta.label} | Daily Origins`, description: meta.blurb },
    updatedAt: now,
    path: `/search/${family}`,
  };
});

export function getCollectionImage(handle: string): Image {
  const meta = FAMILY_META[handle as Family];
  return img(
    meta?.label ?? "Daily Origins",
    meta?.ingredient ?? "Ritual",
    (meta?.family as PlaceholderTone) ?? "ivory",
    "jar",
    handle.length + 5
  );
}

// ---------------------------------------------------------------------------
// Menus
// ---------------------------------------------------------------------------

export const HEADER_MENU: Menu[] = [
  { title: "Shop", path: "/search" },
  { title: "Energy", path: "/search/energy" },
  { title: "Focus", path: "/search/focus" },
  { title: "Recovery", path: "/search/recovery" },
  { title: "Sleep", path: "/search/sleep" },
  { title: "Immunity", path: "/search/immunity" },
  { title: "Ingredients", path: "/ingredients" },
  { title: "About", path: "/about" },
];

export const FOOTER_MENU: Menu[] = [
  { title: "Shop", path: "/search" },
  { title: "Ingredients", path: "/ingredients" },
  { title: "About", path: "/about" },
  { title: "Wholesale", path: "/wholesale" },
  { title: "Distributors", path: "/distributors" },
  { title: "Global Shipping", path: "/global-shipping" },
  { title: "Certifications", path: "/certifications" },
  { title: "Contact", path: "/contact" },
];

export const MENUS: Record<string, Menu[]> = {
  "next-js-frontend-header-menu": HEADER_MENU,
  "next-js-frontend-footer-menu": FOOTER_MENU,
};

export const PAGES: Page[] = [];

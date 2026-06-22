import type { Family } from "lib/data/catalog";

export type Ingredient = {
  slug: string;
  name: string;
  botanical: string;
  family: Family;
  origin: string;
  blurb: string;
  benefits: string[];
};

export const INGREDIENTS: Ingredient[] = [
  {
    slug: "black-ginger",
    name: "Black Ginger",
    botanical: "Kaempferia parviflora",
    family: "energy",
    origin: "Northern Thailand & South East Asia",
    blurb:
      "A rare highland ginger traditionally used for vitality and stamina. We standardise it for its active methoxyflavones to deliver clean, sustained energy.",
    benefits: ["Energy", "Stamina", "Performance"],
  },
  {
    slug: "brahmi",
    name: "Brahmi",
    botanical: "Bacopa monnieri",
    family: "focus",
    origin: "Wetlands of India & South Asia",
    blurb:
      "A revered herb for the mind, studied for memory and cognition. Standardised for bacosides to support clear, calm focus.",
    benefits: ["Focus", "Clarity", "Memory"],
  },
  {
    slug: "turmeric",
    name: "Turmeric",
    botanical: "Curcuma longa",
    family: "recovery",
    origin: "India & Indonesia",
    blurb:
      "The golden root, paired with black pepper for absorption. Long valued for recovery and joint comfort after effort.",
    benefits: ["Recovery", "Joint Support", "Comfort"],
  },
  {
    slug: "ashwagandha",
    name: "Ashwagandha",
    botanical: "Withania somnifera",
    family: "sleep",
    origin: "Arid regions of India",
    blurb:
      "A classic adaptogen for calm and rest. We use KSM-66 root extract to ease the wind-down and support deeper sleep.",
    benefits: ["Calm", "Relaxation", "Sleep"],
  },
  {
    slug: "amla",
    name: "Amla",
    botanical: "Phyllanthus emblica",
    family: "immunity",
    origin: "India",
    blurb:
      "Indian gooseberry — one of nature's richest sources of vitamin C — for everyday immune support and resilience.",
    benefits: ["Immunity", "Vitamin C", "Antioxidants"],
  },
  {
    slug: "moringa",
    name: "Moringa",
    botanical: "Moringa oleifera",
    family: "immunity",
    origin: "Foothills of the Himalayas",
    blurb:
      "The 'miracle tree' — a dense source of plant micronutrients that forms the nutritional base of our immunity ritual.",
    benefits: ["Nutrition", "Wellbeing", "Vitality"],
  },
];

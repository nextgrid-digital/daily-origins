import {
    IngredientLibrary,
    type LibraryItem,
} from "components/ingredients/ingredient-library";
import Footer from "components/layout/footer";
import { PageHero } from "components/ui/page-hero";
import { FAMILY_META } from "lib/data/catalog";
import { INGREDIENTS } from "lib/data/ingredients";

export const metadata = {
  title: "Ingredients",
  description:
    "The Daily Origins ingredient library — black ginger, brahmi, turmeric, ashwagandha, amla, and moringa. Powerful natural ingredients, honestly sourced.",
};

export default function IngredientsPage() {
  const items: LibraryItem[] = INGREDIENTS.map((ing) => {
    const meta = FAMILY_META[ing.family];
    return {
      slug: ing.slug,
      name: ing.name,
      botanical: ing.botanical,
      family: ing.family,
      ritualLabel: meta.label,
      lid: meta.lid,
      origin: ing.origin,
      blurb: ing.blurb,
      benefits: ing.benefits,
    };
  });

  return (
    <>
      <PageHero
        eyebrow="Ingredients"
        title="Powerful ingredients, honestly sourced."
        lede="Explore the plants behind every ritual — where they come from, what they do, and the daily ritual each one powers."
      />
      <IngredientLibrary items={items} />
      <Footer />
    </>
  );
}

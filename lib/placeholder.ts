// Ritual families double as placeholder "tones" so a single image URL carries
// the correct lid color. Neutral tones cover non-product imagery.
export type PlaceholderTone =
  | "energy"
  | "focus"
  | "recovery"
  | "sleep"
  | "immunity"
  | "ivory"
  | "stone"
  | "ink";

export type PlaceholderShape = "jar" | "bottle" | "scene";

export type PlaceholderParams = {
  title: string;
  eyebrow?: string;
  tone?: PlaceholderTone;
  shape?: PlaceholderShape;
  seed?: number;
  w?: number;
  h?: number;
};

// Builds a local placeholder image URL using path segments (no query string)
// so it satisfies Next.js Image local-pattern rules and stays fully offline.
//   /api/ph/<tone>/<shape>/<seed>/<w>/<h>/<eyebrow>/<title>
export function ph({
  title,
  eyebrow = "Daily Origins",
  tone = "ivory",
  shape = "jar",
  seed = 1,
  w = 1200,
  h = 1500,
}: PlaceholderParams): string {
  return `/api/ph/${tone}/${shape}/${seed}/${w}/${h}/${encodeURIComponent(
    eyebrow
  )}/${encodeURIComponent(title)}`;
}

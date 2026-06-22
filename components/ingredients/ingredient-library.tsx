"use client";

import clsx from "clsx";
import { Container } from "components/ui";
import { AnimatePresence, motion } from "framer-motion";
import type { PlaceholderTone } from "lib/placeholder";
import { ph } from "lib/placeholder";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type LibraryItem = {
  slug: string;
  name: string;
  botanical: string;
  family: PlaceholderTone;
  ritualLabel: string;
  lid: string;
  origin: string;
  blurb: string;
  benefits: string[];
};

export function IngredientLibrary({ items }: { items: LibraryItem[] }) {
  const [active, setActive] = useState(0);
  const current = items[active] ?? items[0]!;

  const image = ph({
    title: current.name,
    eyebrow: current.ritualLabel,
    tone: current.family,
    shape: "scene",
    seed: current.name.length + 3,
    w: 1100,
    h: 1300,
  });

  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-ink-soft">
            The Library
          </span>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <li key={item.slug}>
                  <button
                    onClick={() => setActive(i)}
                    className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: item.lid }}
                      />
                      <span
                        className={clsx(
                          "font-serif text-2xl transition-colors md:text-3xl",
                          isActive ? "text-ink" : "text-ink-soft group-hover:text-ink"
                        )}
                      >
                        {item.name}
                      </span>
                    </span>
                    <span className="text-xs uppercase tracking-[0.16em] text-ink-soft">
                      {item.ritualLabel}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2rem] border border-line">
                <Image
                  src={image}
                  alt={current.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-7">
                <span
                  className="text-xs font-medium uppercase tracking-[0.2em]"
                  style={{ color: current.lid }}
                >
                  Powers {current.ritualLabel}
                </span>
                <h2 className="mt-2 font-serif text-3xl tracking-tight text-ink md:text-4xl">
                  {current.name}
                </h2>
                <p className="mt-1 text-sm italic text-ink-soft">
                  {current.botanical} · {current.origin}
                </p>
                <p className="mt-5 text-lg leading-relaxed text-ink">
                  {current.blurb}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {current.benefits.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border px-3 py-1 text-xs font-medium"
                      style={{ color: current.lid, borderColor: `${current.lid}40` }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/search/${current.family}`}
                  prefetch={true}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink underline underline-offset-4"
                >
                  Shop the {current.ritualLabel} ritual
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

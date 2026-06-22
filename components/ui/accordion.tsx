"use client";

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <Disclosure key={item.question}>
          {({ open }) => (
            <div>
              <DisclosureButton className="flex w-full items-center justify-between py-6 text-left">
                <span className="font-serif text-lg text-ink md:text-xl">
                  {item.question}
                </span>
                <PlusIcon
                  className={clsx(
                    "h-5 w-5 flex-none text-ink-soft transition-transform duration-300",
                    open && "rotate-45"
                  )}
                />
              </DisclosureButton>
              <DisclosurePanel className="pb-6 pr-8 text-base leading-relaxed text-ink-soft">
                {item.answer}
              </DisclosurePanel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}

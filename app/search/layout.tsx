import clsx from "clsx";
import Footer from "components/layout/footer";
import Collections from "components/layout/search/collections";
import FilterList from "components/layout/search/filter";
import { pagePadding } from "components/ui";
import { sorting } from "lib/constants";
import { Suspense } from "react";
import ChildrenWrapper from "./children-wrapper";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="w-full border-b border-line bg-ivory">
        <div className={clsx("w-full py-16", pagePadding)}>
          <span className="text-xs uppercase tracking-[0.28em] text-ink-soft">
            The Collection
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Shop rituals
          </h1>
          <p className="mt-4 text-base text-ink-soft md:text-lg">
            Powerful ingredients transformed into simple daily rituals — energy,
            focus, recovery, sleep, and immunity.
          </p>
        </div>
      </section>

      <div
        className={clsx(
          "flex w-full flex-col gap-10 pt-12 pb-16 text-ink md:flex-row md:pb-20",
          pagePadding
        )}
      >
        <div className="order-first w-full flex-none md:max-w-[180px]">
          <div className="sticky top-20 self-start">
            <Collections />
          </div>
        </div>
        <div className="order-last w-full min-w-0 md:order-none">
          <Suspense fallback={null}>
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </Suspense>
        </div>
        <div className="order-none flex-none md:order-last md:w-[160px]">
          <div className="sticky top-20 self-start">
            <FilterList list={sorting} title="Sort by" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

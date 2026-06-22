import Footer from "components/layout/footer";
import Collections from "components/layout/search/collections";
import FilterList from "components/layout/search/filter";
import { sorting } from "lib/constants";
import ChildrenWrapper from "./children-wrapper";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="border-b border-sand-dark/50 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <span className="text-xs uppercase tracking-[0.28em] text-gold">
            The Collection
          </span>
          <h1 className="mt-4 font-serif text-4xl tracking-tight text-forest md:text-5xl">
            Shop wellness
          </h1>
          <p className="mt-4 max-w-xl text-base text-ink-soft">
            Considered tools for recovery, massage, sleep, and self-care —
            sourced and certified for life's daily restoration.
          </p>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 text-ink md:flex-row lg:px-10">
        <div className="order-first w-full flex-none md:max-w-[180px]">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">
          <Suspense fallback={null}>
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </Suspense>
        </div>
        <div className="order-none flex-none md:order-last md:w-[160px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
      <Footer />
    </>
  );
}

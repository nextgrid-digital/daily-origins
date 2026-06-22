import clsx from "clsx";
import CartModal from "components/cart/modal";
import { pagePadding } from "components/ui";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/85 backdrop-blur-md">
      <nav className={clsx("flex w-full items-center justify-between gap-4 py-4", pagePadding)}>
        <div className="flex items-center gap-3 md:w-auto">
          <div className="block md:hidden">
            <Suspense fallback={null}>
              <MobileMenu menu={menu} />
            </Suspense>
          </div>
          <Link href="/" prefetch={true} className="flex items-center">
            <span className="text-lg font-semibold tracking-tight text-ink">
              {SITE_NAME || "Daily Origins"}
            </span>
          </Link>
        </div>

        {menu.length ? (
          <ul className="hidden items-center gap-7 lg:flex">
            {menu.map((item: Menu) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  prefetch={true}
                  className="text-sm text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="flex items-center gap-3">
          <div className="hidden md:block md:w-44 lg:w-56">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          <CartModal />
        </div>
      </nav>
    </header>
  );
}

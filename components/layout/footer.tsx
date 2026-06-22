import Link from "next/link";

import clsx from "clsx";
import { pagePadding } from "components/ui";
import { NewsletterForm } from "components/ui/newsletter-form";

const { SITE_NAME } = process.env;

const RITUAL_LINKS = [
  { title: "Energy", path: "/search/energy" },
  { title: "Focus", path: "/search/focus" },
  { title: "Recovery", path: "/search/recovery" },
  { title: "Sleep", path: "/search/sleep" },
  { title: "Immunity", path: "/search/immunity" },
];

const COMPANY_LINKS = [
  { title: "About", path: "/about" },
  { title: "Ingredients", path: "/ingredients" },
  { title: "Certifications", path: "/certifications" },
  { title: "Contact", path: "/contact" },
];

const TRADE_LINKS = [
  { title: "Wholesale", path: "/wholesale" },
  { title: "Distributors", path: "/distributors" },
  { title: "Global Shipping", path: "/global-shipping" },
];

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const name = SITE_NAME || "Daily Origins";

  return (
    <footer className="border-t border-line bg-ivory-dim text-ink">
      <div className={clsx("w-full py-16", pagePadding)}>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-ink"
            >
              {name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              Powerful ingredients. Purposeful daily rituals. Modern wellness,
              designed for daily life.
            </p>
            <div className="mt-6 max-w-sm">
              <NewsletterForm />
            </div>
            <p className="mt-3 text-xs text-ink-soft">
              Join the ritual. No spam, ever.
            </p>
          </div>

          <FooterColumn title="Rituals" links={RITUAL_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
          <FooterColumn title="Trade" links={TRADE_LINKS} />
        </div>
      </div>

      <div className="border-t border-line">
        <div
          className={clsx(
            "flex w-full flex-col items-center gap-2 py-6 text-xs text-ink-soft md:flex-row md:justify-between",
            pagePadding
          )}
        >
          <p>
            &copy; {currentYear} {name}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.18em]">
            Powerful Ingredients · Purposeful Rituals
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { title: string; path: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-[0.16em] text-ink-soft">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.path}
              prefetch={true}
              className="text-ink transition-colors hover:text-ink-soft"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { CartProvider } from "components/cart/cart-context";
import { Navbar } from "components/layout/navbar";
import { getCart } from "lib/shopify";
import { baseUrl } from "lib/utils";
import { Fraunces, Inter } from "next/font/google";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const { SITE_NAME } = process.env;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME || "Daily Origins — Modern Wellness",
    template: `%s | ${SITE_NAME || "Daily Origins"}`,
  },
  description:
    "Daily Origins transforms powerful natural ingredients into simple daily rituals — energy, focus, recovery, sleep, and immunity for modern life.",
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-ivory font-sans text-ink antialiased">
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>
            {children}
            <Toaster closeButton richColors />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}

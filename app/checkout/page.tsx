"use client";

import { placeOrder } from "components/cart/actions";
import { useCart } from "components/cart/cart-context";
import Footer from "components/layout/footer";
import Price from "components/price";
import { Container } from "components/ui";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SHIPPING_FLAT = 0;

export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();
  const [placing, setPlacing] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const lines = cart?.lines ?? [];
  const isEmpty = lines.length === 0;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPlacing(true);
    const id = `AUR-${Math.floor(100000 + Math.random() * 900000)}`;
    await placeOrder();
    setOrderId(id);
    setPlacing(false);
    router.refresh();
  }

  if (orderId) {
    return (
      <>
        <section className="bg-ivory">
          <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-2xl text-white">
              ✓
            </div>
            <h1 className="mt-8 text-3xl font-medium tracking-tight text-ink md:text-4xl">
              Thank you for your order
            </h1>
            <p className="mt-4 max-w-md text-ink-soft">
              Your order{" "}
              <span className="font-medium text-forest">{orderId}</span> has been
              confirmed. A confirmation has been sent to your email and our team
              will prepare your dispatch shortly.
            </p>
            <Link
              href="/search"
              prefetch={true}
              className="mt-10 rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-forest-soft"
            >
              Continue shopping
            </Link>
          </Container>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <section className="border-b border-sand-dark bg-white">
        <Container className="py-14">
          <span className="text-[11px] uppercase tracking-[0.24em] text-ink-soft">
            Secure Checkout
          </span>
          <h1 className="mt-4 text-3xl font-medium tracking-tight text-ink md:text-4xl">
            Complete your order
          </h1>
        </Container>
      </section>

      <section className="bg-white py-14">
        <Container>
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <h2 className="text-2xl font-medium tracking-tight text-ink">
                Your cart is empty
              </h2>
              <p className="mt-3 text-ink-soft">
                Add a few products before checking out.
              </p>
              <Link
                href="/search"
                prefetch={true}
                className="mt-8 rounded-full bg-ink px-8 py-4 text-sm font-medium text-white hover:bg-forest-soft"
              >
                Browse the collection
              </Link>
            </div>
          ) : (
            <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
              <form onSubmit={onSubmit} className="order-2 lg:order-1">
                <FormSection title="Contact">
                  <Field name="email" label="Email" type="email" required full />
                  <Field name="phone" label="Phone" type="tel" required full />
                </FormSection>

                <FormSection title="Shipping address">
                  <Field name="first" label="First name" required />
                  <Field name="last" label="Last name" required />
                  <Field name="address" label="Address" required full />
                  <Field name="city" label="City" required />
                  <SelectField
                    name="country"
                    label="Country / Region"
                    options={[
                      "United Arab Emirates",
                      "Saudi Arabia",
                      "Qatar",
                      "Kuwait",
                      "Bahrain",
                      "Oman",
                      "India",
                      "Singapore",
                      "Malaysia",
                      "Thailand",
                      "Indonesia",
                    ]}
                    required
                  />
                </FormSection>

                <button
                  type="submit"
                  disabled={placing}
                  className="mt-8 w-full rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-forest-soft disabled:opacity-60"
                >
                  {placing ? "Placing order…" : "Place order"}
                </button>
                <p className="mt-4 text-center text-xs text-ink-soft">
                  This is a demonstration checkout. No payment is processed.
                </p>
              </form>

              <aside className="order-1 lg:order-2">
                <div className="rounded-none border border-sand-dark bg-white p-7">
                  <h2 className="text-lg font-medium tracking-tight text-ink">
                    Order summary
                  </h2>
                  <ul className="mt-6 space-y-5">
                    {lines.map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="relative h-16 w-16 flex-none overflow-hidden rounded-none border border-sand-dark bg-sand">
                          <Image
                            src={item.merchandise.product.featuredImage.url}
                            alt={item.merchandise.product.title}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex grow flex-col">
                          <span className="text-sm font-medium text-ink">
                            {item.merchandise.product.title}
                          </span>
                          <span className="text-xs text-ink-soft">
                            {item.merchandise.title} · Qty {item.quantity}
                          </span>
                        </div>
                        <Price
                          className="text-sm text-ink"
                          amount={item.cost.totalAmount.amount}
                          currencyCode={item.cost.totalAmount.currencyCode}
                          currencyCodeClassName="hidden"
                        />
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 space-y-3 border-t border-sand-dark pt-6 text-sm text-ink-soft">
                    <Row label="Subtotal">
                      <Price
                        amount={cart!.cost.subtotalAmount.amount}
                        currencyCode={cart!.cost.subtotalAmount.currencyCode}
                        currencyCodeClassName="hidden"
                      />
                    </Row>
                    <Row label="Shipping">
                      <span>{SHIPPING_FLAT === 0 ? "Complimentary" : "$"}</span>
                    </Row>
                    <div className="flex items-center justify-between border-t border-sand-dark pt-4 text-base font-medium text-ink">
                      <span>Total</span>
                      <Price
                        amount={cart!.cost.totalAmount.amount}
                        currencyCode={cart!.cost.totalAmount.currencyCode}
                        currencyCodeClassName="hidden"
                      />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </Container>
      </section>
      <Footer />
    </>
  );
}

function FormSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h2 className="mb-5 text-lg font-medium tracking-tight text-ink">
        {title}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  full,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
        {label}
        {required ? <span className="text-ink-soft"> *</span> : null}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-sand-dark bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
      />
    </div>
  );
}

function SelectField({
  name,
  label,
  options,
  required,
}: {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
        {label}
        {required ? <span className="text-ink-soft"> *</span> : null}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-xl border border-sand-dark bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <span className="text-ink">{children}</span>
    </div>
  );
}

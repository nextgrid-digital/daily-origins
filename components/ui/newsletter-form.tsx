"use client";

import clsx from "clsx";
import { useState } from "react";

export function NewsletterForm({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const dark = variant === "dark";

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  }

  if (done) {
    return (
      <p className={clsx("text-sm", dark ? "text-ivory/80" : "text-ink-soft")}>
        Thanks — you&rsquo;re on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={clsx(
        "flex w-full items-center gap-1.5 rounded-full border p-1.5 transition",
        dark
          ? "border-ivory/25 bg-transparent focus-within:border-ivory/60"
          : "border-line bg-white focus-within:border-ink"
      )}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className={clsx(
          "w-full bg-transparent px-4 py-2 text-sm outline-none",
          dark
            ? "text-ivory placeholder:text-ivory/40"
            : "text-ink placeholder:text-ink-soft/60"
        )}
      />
      <button
        type="submit"
        className={clsx(
          "flex-none rounded-full px-5 py-2 text-sm font-medium transition-colors",
          dark
            ? "bg-white text-ink hover:bg-ivory-dim"
            : "bg-ink text-white hover:bg-forest-soft"
        )}
      >
        Subscribe
      </button>
    </form>
  );
}

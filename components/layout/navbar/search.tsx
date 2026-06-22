"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Form from "next/form";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();

  return (
    <Form action="/search" className="relative w-full">
      <input
        key={searchParams?.get("q")}
        type="text"
        name="q"
        placeholder="Search rituals..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className="w-full rounded-full border border-line bg-stone/60 px-4 py-2 text-sm text-ink placeholder:text-ink-soft/60 focus:border-ink focus:bg-white"
      />
      <div className="absolute right-0 top-0 mr-4 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4 text-ink-soft" />
      </div>
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <form className="relative w-full">
      <input
        placeholder="Search rituals..."
        className="w-full rounded-full border border-line bg-stone/60 px-4 py-2 text-sm text-ink placeholder:text-ink-soft/60"
      />
      <div className="absolute right-0 top-0 mr-4 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4 text-ink-soft" />
      </div>
    </form>
  );
}

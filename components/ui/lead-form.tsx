"use client";

import { useState } from "react";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  options?: string[];
  required?: boolean;
  full?: boolean;
};

export function LeadForm({
  fields,
  submitLabel = "Submit enquiry",
  successTitle = "Thank you — we've received your enquiry.",
  successBody = "A member of our team will be in touch within one business day.",
}: {
  fields: Field[];
  submitLabel?: string;
  successTitle?: string;
  successBody?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-none border border-line bg-stone/40 p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white">
          ✓
        </div>
        <h3 className="mt-5 font-serif text-2xl tracking-tight text-ink">
          {successTitle}
        </h3>
        <p className="mt-3 text-ink-soft">{successBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      {fields.map((field) => (
        <div
          key={field.name}
          className={field.full || field.type === "textarea" ? "sm:col-span-2" : ""}
        >
          <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
            {field.label}
            {field.required ? <span className="text-ink-soft"> *</span> : null}
          </label>
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              required={field.required}
              rows={4}
              className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
            />
          ) : field.type === "select" ? (
            <select
              name={field.name}
              required={field.required}
              defaultValue=""
              className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
            >
              <option value="" disabled>
                Select…
              </option>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type || "text"}
              name={field.name}
              required={field.required}
              className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
            />
          )}
        </div>
      ))}
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-forest-soft"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

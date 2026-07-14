"use client";

import { useState } from "react";

// PLACEHOLDER INTEGRATION: swap the form action for your real beehiiv
// (or ConvertKit) embed endpoint before launch.
export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className={`flex ${compact ? "flex-col gap-2" : "flex-col gap-3 sm:flex-row"}`}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="you@company.com"
        className="w-full rounded border border-[#cfcdbe] bg-white/60 px-4 py-2.5 text-sm text-ink placeholder:text-sub/70 focus:border-red-pen focus:outline-none"
      />
      <button
        type="submit"
        className="rounded bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink/85 active:scale-[0.98]"
      >
        {submitted ? "Subscribed!" : "Subscribe"}
      </button>
    </form>
  );
}

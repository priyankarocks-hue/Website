"use client";

import { useState } from "react";

// PLACEHOLDER INTEGRATION — swap the form action for your real beehiiv
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
        className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-gradient-to-r from-neon-violet to-neon-cyan px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:brightness-110"
      >
        {submitted ? "Subscribed!" : "Subscribe"}
      </button>
    </form>
  );
}

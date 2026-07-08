"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-card p-8 text-center">
        <p className="font-display text-lg font-semibold text-white">Message sent</p>
        <p className="mt-2 text-sm text-slate-300">
          Thanks for reaching out — I&apos;ll get back to you within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card space-y-5 p-8">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-slate-200">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-neon-blue focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-slate-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-neon-blue focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="reason" className="text-sm font-medium text-slate-200">
          What&apos;s this about?
        </label>
        <select
          id="reason"
          name="reason"
          className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-neon-blue focus:outline-none"
        >
          <option value="Advisory inquiry">Advisory inquiry</option>
          <option value="Speaking inquiry">Speaking inquiry</option>
          <option value="Course question">Course question</option>
          <option value="Something else">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-neon-blue focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-gradient-to-r from-neon-lime to-neon-blue px-6 py-3 text-sm font-semibold text-ink-950 transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      {status === "error" ? (
        <p className="text-sm text-red-400">
          Something went wrong sending your message — please try again.
        </p>
      ) : null}
    </form>
  );
}

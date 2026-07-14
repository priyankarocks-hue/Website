"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "mt-2 w-full rounded border border-[#cfcdbe] bg-white/60 px-4 py-2.5 text-sm text-ink placeholder:text-sub/70 focus:border-red-pen focus:outline-none";

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
      <div className="rounded border border-hair bg-white/40 p-8 text-center">
        <p className="font-display text-lg font-bold text-ink">Message sent</p>
        <p className="mt-2 text-sm text-body">
          Thanks for reaching out. I&apos;ll get back to you within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded border border-hair bg-white/40 p-8">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          Name
        </label>
        <input id="name" name="name" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="reason" className="text-sm font-medium text-ink">
          What&apos;s this about?
        </label>
        <select id="reason" name="reason" className={inputClasses}>
          <option value="Advisory inquiry">Advisory inquiry</option>
          <option value="Speaking inquiry">Speaking inquiry</option>
          <option value="Course question">Course question</option>
          <option value="Something else">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} className={inputClasses} />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded bg-red-pen px-6 py-3 text-sm font-semibold text-paper transition hover:bg-red-pen-dark active:scale-[0.98] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      {status === "error" ? (
        <p className="text-sm text-red-pen">
          Something went wrong sending your message. Please try again.
        </p>
      ) : null}
    </form>
  );
}

"use client";

import Script from "next/script";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/site";

// Calendly inline widget, reading the event URL from lib/site.ts.
// Until CALENDLY_URL is set, renders a clean contact fallback instead
// of a broken booking iframe.
export default function CalendlyEmbed({ showContactFallbackLink = true }: { showContactFallbackLink?: boolean }) {
  if (!CALENDLY_URL) {
    return (
      <div className="rounded border border-hair bg-white/40 p-10 text-center">
        <p className="font-display text-lg font-bold text-ink">
          The calendar is warming up.
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-body">
          Online booking opens shortly. Until then, send a message and
          I&apos;ll reply with times within 2 business days.
        </p>
        {showContactFallbackLink ? (
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded bg-red-pen px-6 py-3 text-sm font-semibold text-paper transition hover:bg-red-pen-dark active:scale-[0.98]"
          >
            Send a message
          </Link>
        ) : null}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded border border-hair bg-white/40 p-2">
      <div
        className="calendly-inline-widget"
        data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=c8321c`}
        style={{ minWidth: "320px", height: "660px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}

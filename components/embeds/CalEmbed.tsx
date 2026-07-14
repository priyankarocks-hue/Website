"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

// PLACEHOLDER INTEGRATION — replace "your-username/intro-call" with your real
// Cal.com event slug (or swap this component for a Calendly embed).
const DEFAULT_CAL_LINK = "your-username/intro-call";

export default function CalEmbed({ calLink = DEFAULT_CAL_LINK }: { calLink?: string }) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#c8321c" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <div className="overflow-hidden rounded border border-hair bg-white/40 p-2">
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "600px", overflow: "scroll" }}
        config={{ theme: "light" }}
      />
    </div>
  );
}

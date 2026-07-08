"use client";

import { motion } from "framer-motion";

type IconVariant = "signal" | "voice" | "target" | "flow";

const lime = "var(--color-neon-lime)";
const blue = "var(--color-neon-blue)";

export default function FrameworkIcon({ variant }: { variant: IconVariant }) {
  switch (variant) {
    case "signal":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <circle cx="20" cy="20" r="3.5" fill={lime} />
          {[9, 14, 19].map((r, i) => (
            <motion.circle
              key={r}
              cx="20"
              cy="20"
              r={r}
              stroke={i % 2 === 0 ? lime : blue}
              strokeWidth="1.5"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0, 0.6, 0], scale: [0.6, 1, 1.15] }}
              transition={{ duration: 2.4, delay: i * 0.4, repeat: Infinity, ease: "easeOut" }}
              style={{ transformOrigin: "20px 20px" }}
            />
          ))}
        </svg>
      );

    case "voice":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <circle cx="20" cy="20" r="14" stroke={lime} strokeWidth="1.5" />
          <line x1="6" y1="20" x2="34" y2="20" stroke={blue} strokeWidth="1.2" opacity="0.6" />
          <motion.ellipse
            cx="20"
            cy="20"
            rx="6"
            ry="14"
            stroke={blue}
            strokeWidth="1.5"
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "20px 20px" }}
          />
        </svg>
      );

    case "target":
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <circle cx="20" cy="20" r="3" fill={lime} />
          <circle cx="20" cy="20" r="9" stroke={lime} strokeWidth="1.5" opacity="0.7" />
          <motion.circle
            cx="20"
            cy="20"
            r="14"
            stroke={blue}
            strokeWidth="1.5"
            initial={{ opacity: 0.7, scale: 0.85 }}
            animate={{ opacity: [0.7, 0], scale: [0.85, 1.25] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            style={{ transformOrigin: "20px 20px" }}
          />
        </svg>
      );

    case "flow":
    default:
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <line x1="5" y1="12" x2="35" y2="12" stroke={lime} strokeWidth="1.5" opacity="0.5" />
          <line x1="5" y1="20" x2="35" y2="20" stroke={lime} strokeWidth="1.5" opacity="0.8" />
          <line x1="5" y1="28" x2="35" y2="28" stroke={lime} strokeWidth="1.5" opacity="0.5" />
          <motion.circle
            cy="20"
            r="3"
            fill={blue}
            animate={{ cx: [7, 33, 7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      );
  }
}

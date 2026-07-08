"use client";

import { motion } from "framer-motion";

type IconVariant = "call" | "mic" | "pen" | "play";

const lime = "var(--color-neon-lime)";
const blue = "var(--color-neon-blue)";

export default function GoalIcon({ variant }: { variant: IconVariant }) {
  switch (variant) {
    case "call":
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect x="6" y="4" width="20" height="24" rx="4" stroke={lime} strokeWidth="1.5" />
          <motion.circle
            cx="16"
            cy="24"
            r="1.6"
            fill={blue}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </svg>
      );

    case "mic":
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect x="13" y="5" width="6" height="14" rx="3" stroke={lime} strokeWidth="1.5" />
          <path d="M9 15a7 7 0 0 0 14 0" stroke={blue} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="16" y1="22" x2="16" y2="27" stroke={blue} strokeWidth="1.5" />
          {[0, 1].map((i) => (
            <motion.circle
              key={i}
              cx="16"
              cy="12"
              r={9 + i * 4}
              stroke={lime}
              strokeWidth="1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1, 1.1] }}
              transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
              style={{ transformOrigin: "16px 12px" }}
            />
          ))}
        </svg>
      );

    case "pen":
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <motion.path
            d="M7 24 L20 11 L25 16 L12 29 L6 29 Z"
            stroke={lime}
            strokeWidth="1.5"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
          <line x1="17" y1="14" x2="22" y2="19" stroke={blue} strokeWidth="1.5" />
        </svg>
      );

    case "play":
    default:
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="10" stroke={lime} strokeWidth="1.5" />
          <path d="M13 11 L22 16 L13 21 Z" fill={blue} />
          <motion.circle
            cx="16"
            cy="16"
            r="10"
            stroke={blue}
            strokeWidth="1.5"
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: [0.6, 0], scale: [1, 1.3] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            style={{ transformOrigin: "16px 16px" }}
          />
        </svg>
      );
  }
}

"use client";

import { motion, useScroll, useReducedMotion } from "framer-motion";

// The red pen moves through the piece as you read: a thin progress line
// fixed under the header on essay pages. Static (hidden) under reduced motion.
export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-[72px] z-40 h-[3px] origin-left bg-red-pen"
    />
  );
}

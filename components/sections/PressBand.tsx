"use client";

import { motion } from "framer-motion";

// Full-width editorial photograph between sections: the newsroom chapter,
// shown rather than told. Slow settle-in on reveal; static under reduced motion.
export default function PressBand() {
  return (
    <section className="overflow-hidden border-y border-hair" aria-hidden="true">
      <motion.div
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/newsroom-print.jpg"
          alt=""
          className="h-[300px] w-full object-cover [filter:grayscale(0.35)_sepia(0.12)] sm:h-[360px]"
        />
      </motion.div>
    </section>
  );
}

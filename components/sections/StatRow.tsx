"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { stats } from "@/content/stats";

// Bare stat tiles, no chart — the numbers are the whole point, so nothing
// else competes with them. Sentence-case labels, no trailing colons.
export default function StatRow() {
  return (
    <section className="relative py-16">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="text-center md:text-left"
            >
              <p className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const stats = [
  { value: "150+", label: "markets served" },
  { value: "4M+", label: "acquisitions a year" },
  { value: "$1M+", label: "monthly budget run" },
];

export default function ProofStrip() {
  return (
    <section className="border-y border-hair">
      <Container className="flex flex-wrap gap-x-16 gap-y-4 py-7">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.value}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <p className="font-display text-2xl font-bold text-ink sm:text-3xl">
              {stat.value}
            </p>
            <p className="text-xs text-sub">{stat.label}</p>
          </motion.div>
        ))}
      </Container>
    </section>
  );
}

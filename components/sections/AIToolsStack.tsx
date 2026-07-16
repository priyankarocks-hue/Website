"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import GrowthEngine from "@/components/sections/GrowthEngine";
import { systems } from "@/content/aiStack";

export default function AIToolsStack() {
  return (
    <section className="relative py-24">
      <Container>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          The counterweight: four systems, one growth engine.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-body">
          These are my methods: proven at scale, designed fresh for every team. I set the
          direction and the editorial standard, your AI engineers handle the technical
          build, and what ships is worth reading and provably converts.
        </p>

        <GrowthEngine />

        <div className="mt-16">
          {systems.map((system, index) => (
            <motion.div
              key={system.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onViewportEnter={(entry) => entry?.target.classList.add("in-view")}
              className="grid gap-4 border-t border-dashed border-[#cfcdbe] py-9 md:grid-cols-[280px_1fr] md:gap-11"
            >
              <h3 className="font-display text-xl font-bold text-ink">
                <span className="red-underline">{system.name}</span>
              </h3>
              <div>
                <p className="leading-relaxed text-body">{system.what}</p>
                <p className="mt-3 text-sm leading-relaxed text-sub">{system.practice}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

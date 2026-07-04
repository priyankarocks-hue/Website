"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { aiStack } from "@/content/aiStack";

export default function AIToolsStack() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="The AI stack, run end to end"
          title="Not just prompts — a full content operating system"
          description="Every stage of the content lifecycle, backed by tools I run hands-on, not buzzwords I've read about."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {aiStack.map((group, index) => (
            <motion.div
              key={group.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="h-full">
                <p className="text-xs font-semibold uppercase tracking-widest text-neon-blue">
                  {String(index + 1).padStart(2, "0")} &mdash; {group.stage}
                </p>
                <p className="mt-2 text-sm text-slate-400">{group.description}</p>
                <ul className="mt-6 space-y-4">
                  {group.tools.map((tool) => (
                    <li key={tool.name}>
                      <p className="text-sm font-semibold text-white">{tool.name}</p>
                      <p className="text-sm text-slate-400">{tool.use}</p>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

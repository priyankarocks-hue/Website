"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import FrameworkIcon from "@/components/ui/FrameworkIcon";
import { frameworks } from "@/content/frameworks";

export default function Frameworks() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="How I actually work"
          title="Four judgment calls, not a tool list"
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="flex h-full items-start gap-4">
                <FrameworkIcon variant={framework.icon as "signal" | "voice" | "target" | "flow"} />
                <div>
                  <p className="font-display text-lg font-semibold text-white">{framework.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{framework.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

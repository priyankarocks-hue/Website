"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const goals = [
  {
    title: "Book an Advisory Call",
    description: "Get a straight answer on where AI helps your marketing funnel and where it doesn't.",
    href: "/advisory",
    cta: "Explore advisory services",
  },
  {
    title: "Book Me to Speak",
    description: "A keynote or workshop that leaves your audience with an actual plan, not just hype.",
    href: "/speaking",
    cta: "See speaking topics",
  },
  {
    title: "Join the List",
    description: "One idea a week on AI marketing strategy — no fluff, no spam.",
    href: "/insights",
    cta: "Read the latest",
  },
  {
    title: "Take the Course",
    description: "A self-paced system for building an AI-augmented marketing function.",
    href: "/products",
    cta: "See the curriculum",
  },
];

export default function GoalCTAGrid() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Ways to work together"
          title="Whatever brought you here, there's a next step"
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {goal.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">{goal.description}</p>
                </div>
                <Link
                  href={goal.href}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-neon-cyan hover:text-neon-violet"
                >
                  {goal.cta} &rarr;
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

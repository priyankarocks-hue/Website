"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import GoalIcon from "@/components/ui/GoalIcon";

const goals = [
  {
    title: "Book an Advisory Call",
    description: "Where AI helps your funnel — and where it doesn't.",
    href: "/advisory",
    cta: "Explore advisory",
    icon: "call",
  },
  {
    title: "Book Me to Speak",
    description: "A talk that leaves a plan, not just hype.",
    href: "/speaking",
    cta: "See topics",
    icon: "mic",
  },
  {
    title: "Join the List",
    description: "One idea a week. No fluff.",
    href: "/insights",
    cta: "Read the latest",
    icon: "pen",
  },
  {
    title: "Take a Course",
    description: "Self-paced. Foundations or the full system.",
    href: "/products",
    cta: "Compare courses",
    icon: "play",
  },
] as const;

export default function GoalCTAGrid() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeading eyebrow="Ways to work together" title="Pick your next step" align="center" />

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
                  <GoalIcon variant={goal.icon} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    {goal.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{goal.description}</p>
                </div>
                <Link
                  href={goal.href}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-neon-blue hover:text-neon-lime"
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

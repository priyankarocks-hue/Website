"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";

const goals = [
  {
    title: "Hire me fractionally",
    description:
      "A straight answer on where AI helps your funnel and where it doesn't, then a system designed for your team.",
    href: "/advisory",
    cta: "See advisory services",
  },
  {
    title: "Put me on your stage",
    description:
      "A keynote or workshop your audience can act on the next morning. No hype, no fear-mongering.",
    href: "/speaking",
    cta: "See speaking topics",
  },
  {
    title: "Read the column",
    description: "One idea a week on AI marketing strategy. No fluff, no spam.",
    href: "/insights",
    cta: "Read the latest",
  },
  {
    title: "Learn the system",
    description: "A self-paced course for building an AI-augmented marketing function.",
    href: "/products",
    cta: "See the curriculum",
  },
];

export default function GoalCTAGrid() {
  return (
    <section className="relative py-24">
      <Container>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Four ways in.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Link
                href={goal.href}
                className="group flex h-full flex-col justify-between rounded border border-hair p-7 transition-colors hover:border-red-pen/60"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{goal.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-body">
                    {goal.description}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red-pen">
                  {goal.cta}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

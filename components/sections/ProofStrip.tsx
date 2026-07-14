"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useReducedMotion, useTransform, animate } from "framer-motion";
import Container from "@/components/ui/Container";

const stats = [
  { prefix: "", target: 150, suffix: "+", label: "markets served" },
  { prefix: "", target: 4, suffix: "M+", label: "acquisitions a year" },
  { prefix: "$", target: 1, suffix: "M+", label: "monthly budget run" },
  { prefix: "$", target: 80, suffix: "M+", label: "first-year revenue, deep-tech launch" },
];

function CountUp({ prefix, target, suffix }: { prefix: string; target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      value.set(target);
      return;
    }
    const controls = animate(value, target, { duration: 1.1, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, reduce, target, value]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function ProofStrip() {
  return (
    <section className="border-y border-hair">
      <Container className="flex flex-wrap gap-x-14 gap-y-4 py-7">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <p className="font-display text-2xl font-bold text-ink sm:text-3xl">
              <CountUp prefix={stat.prefix} target={stat.target} suffix={stat.suffix} />
            </p>
            <p className="text-xs text-sub">{stat.label}</p>
          </motion.div>
        ))}
      </Container>
    </section>
  );
}

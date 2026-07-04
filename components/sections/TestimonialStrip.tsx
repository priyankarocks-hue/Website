"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/testimonials";

export default function TestimonialStrip() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeading eyebrow="Social proof" title="What clients and organizers say" align="center" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="flex h-full flex-col justify-between">
                <p className="text-slate-200">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

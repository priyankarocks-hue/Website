"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { testimonials } from "@/content/testimonials";

const [featured, ...rest] = testimonials;

export default function TestimonialStrip() {
  return (
    <section className="border-t border-hair py-24">
      <Container className="grid gap-14 md:grid-cols-12 md:gap-10">
        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="border-l-[3px] border-red-pen pl-6 md:col-span-7"
        >
          <blockquote className="font-display text-xl font-bold leading-normal text-ink sm:text-2xl">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-5">
            <p className="text-sm font-semibold text-ink">{featured.name}</p>
            <p className="text-sm text-sub">{featured.role}</p>
          </figcaption>
        </motion.figure>

        <div className="md:col-span-4 md:col-start-9">
          {rest.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={index > 0 ? "mt-10 border-t border-hair pt-10" : ""}
            >
              <blockquote className="text-sm leading-relaxed text-body">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4">
                <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                <p className="text-xs text-sub">{testimonial.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

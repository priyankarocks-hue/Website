"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { bio } from "@/content/bio";

export default function PageTeasers() {
  return (
    <section className="relative border-t border-hair py-24">
      <Container className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl font-bold leading-normal text-ink">
            {bio.shortBlurb}
          </h2>
          <p className="mt-5 leading-relaxed text-body">{bio.paragraphs[0]}</p>
          <div className="mt-7">
            <Button href="/about" variant="secondary">
              Read the full story
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded border border-hair p-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bio.headshot} alt="Priyanka Joshi" className="w-full rounded" />
        </motion.div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { bio } from "@/content/bio";

export default function PageTeasers() {
  return (
    <section className="relative py-24">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-neon-blue">About</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white">
            {bio.shortBlurb}
          </h2>
          <p className="mt-4 text-slate-300">{bio.paragraphs[0]}</p>
          <div className="mt-6">
            <Button href="/about" variant="secondary">
              Read the full story
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="glass-card p-2"
        >
          <Image
            src={bio.headshot}
            alt={`${bio.name}, Fractional CMO and AI marketing advisor`}
            width={880}
            height={1168}
            className="w-full rounded-2xl object-cover"
          />
        </motion.div>
      </Container>
    </section>
  );
}

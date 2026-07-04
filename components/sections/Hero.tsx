"use client";

import { motion } from "framer-motion";
import BackgroundLayer from "@/components/three/BackgroundLayer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { mediaFeatures } from "@/content/speakingTopics";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-28 sm:pt-36">
      <BackgroundLayer variant="hero" eager />

      <Container className="relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-widest text-neon-blue"
        >
          Fractional CMO for SaaS &amp; Startups
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-6xl"
        >
          AI wrote your content. Nobody read it.{" "}
          <span className="text-gradient">Let&apos;s fix that.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-slate-300"
        >
          I&apos;ve gotten AI-skeptical brands into Bloomberg and CNBC, pushed content
          programs up 40%, and built comms teams from a headcount of one — now I build the
          AI systems that make your content sound like a person wrote it, because one did.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="/contact">Book a Call</Button>
          <Button href="/speaking" variant="secondary">
            Book Me to Speak
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 opacity-70"
        >
          <span className="text-xs uppercase tracking-widest text-slate-500">
            As featured in
          </span>
          {mediaFeatures.map((feature) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={feature}
              src={`/images/logos/${feature.toLowerCase()}.svg`}
              alt=""
              aria-hidden="true"
              className="h-6 w-auto grayscale"
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

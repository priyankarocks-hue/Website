"use client";

import { motion } from "framer-motion";
import BackgroundLayer from "@/components/three/BackgroundLayer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MediaMarquee from "@/components/ui/MediaMarquee";

function StaggerWords({
  text,
  className = "",
  startDelay = 0,
}: {
  text: string;
  className?: string;
  startDelay?: number;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${className}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.6,
              delay: startDelay + index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </>
  );
}

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
          Fractional CMO &amp; AI Marketing Advisor
        </motion.p>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">
          <StaggerWords text="AI wrote your content. Nobody read it." />
          <StaggerWords text="Let's fix that." className="text-gradient" startDelay={0.45} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 max-w-2xl text-lg text-slate-300"
        >
          I built the AI-powered growth engine behind a regulated FX platform. Now I build
          that system for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
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
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16"
        >
          <MediaMarquee />
        </motion.div>
      </Container>
    </section>
  );
}

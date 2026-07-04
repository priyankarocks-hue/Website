"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundLayer from "@/components/three/BackgroundLayer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-28 sm:pt-36">
      <BackgroundLayer variant="hero" eager />

      <Container className="relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-widest text-neon-cyan"
        >
          AI Marketing Advisor &amp; Speaker
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-6xl"
        >
          Turning AI hype into <span className="text-gradient">marketing systems</span> that
          actually convert.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-slate-300"
        >
          I advise marketing teams and speak at events on where AI genuinely earns its keep
          in the funnel &mdash; and where it quietly wastes budget.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="/contact">Book an Advisory Call</Button>
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
            Trusted by marketing teams at
          </span>
          {["acme", "initech", "globex", "umbrella"].map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={logo}
              src={`/images/logos/${logo}.svg`}
              alt=""
              aria-hidden="true"
              className="h-6 w-auto grayscale"
            />
          ))}
        </motion.div>

        <p className="mt-2 text-xs text-slate-600">
          <Link href="/about" className="underline decoration-dotted">
            Placeholder client logos — replace before launch.
          </Link>
        </p>
      </Container>
    </section>
  );
}

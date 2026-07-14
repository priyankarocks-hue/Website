"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative pb-20 pt-20 sm:pt-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.12em] text-sub"
          >
            Subject: your marketing. From: your next fractional CMO.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-9 max-w-3xl font-display text-[26px] font-bold leading-snug text-ink sm:text-3xl lg:text-4xl"
          >
            <span className="strike mb-4 block">
              Leveraging cutting-edge AI to unlock growth at scale.
            </span>
            AI wrote your content. Nobody read it. Let&apos;s fix that.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-8 max-w-xl leading-relaxed text-body"
          >
            Twenty years of deciding what&apos;s worth publishing: newspaper desks, an
            $80M+ deep-tech brand build, then a trading platform&apos;s growth engine
            across 150+ markets. I bring the red pen, and the attribution to prove what
            converted.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.65 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button href="/contact">Book a Call</Button>
            <Button href="/speaking" variant="secondary">
              Book Me to Speak
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="hidden rounded border border-hair bg-white/40 p-2 lg:block"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/editorial-pen.jpg"
            alt="A fountain pen marking up a handwritten draft"
            className="w-full rounded [filter:saturate(0.85)]"
          />
        </motion.div>
      </Container>
    </section>
  );
}

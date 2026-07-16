"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

// The engine, drawn as a newsroom copy-flow diagram: one customer
// sentence travels desk to desk, and the budget loops back. The red
// connector line draws itself station to station on scroll, in the
// same voice as the hero strike and the reading line.

type Station = {
  title?: string;
  label: string;
  body: React.ReactNode;
  sub: string;
};

const stations: Station[] = [
  {
    label: "What customers say",
    body: <>&ldquo;Honestly, I still don&apos;t get the pricing.&rdquo;</>,
    sub: "a review, a ticket, a chat log",
  },
  {
    title: "The Signal Desk",
    label: "becomes the brief",
    body: <>Brief: answer the pricing question, plainly.</>,
    sub: "customer language decides what gets made",
  },
  {
    title: "The Voice Standard",
    label: "gets the red pen",
    body: (
      <>
        <span className="text-[#8a887c] line-through decoration-red-pen decoration-2">
          Unlock transparent pricing.
        </span>{" "}
        What you pay, in one table.
      </>
    ),
    sub: "every draft passes the same bar",
  },
  {
    title: "The Second Reader",
    label: "gets found",
    body: <>&ldquo;According to one broker&apos;s guide: one table, no hidden fees.&rdquo;</>,
    sub: "cited by AI answers, remembered by people",
  },
  {
    title: "The Receipts",
    label: "gets counted",
    body: <>Tracked: this piece started trials.</>,
    sub: "numbers a CFO signs off on",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

function Connector({ delay, reduce }: { delay: number; reduce: boolean }) {
  return (
    <div className="flex items-center justify-center py-2 lg:py-0" aria-hidden="true">
      {/* vertical on mobile, horizontal on lg */}
      <motion.svg
        viewBox="0 0 40 24"
        className="hidden h-6 w-10 lg:block"
        initial={reduce ? undefined : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.01, delay }}
      >
        <motion.path
          d="M2 12 H32"
          stroke="#c8321c"
          strokeWidth="2"
          fill="none"
          initial={reduce ? undefined : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, delay, ease: "easeOut" }}
        />
        <motion.path
          d="M30 6 L38 12 L30 18"
          stroke="#c8321c"
          strokeWidth="2"
          fill="none"
          initial={reduce ? undefined : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.15, delay: delay + 0.3 }}
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 24 40"
        className="h-10 w-6 lg:hidden"
        initial={reduce ? undefined : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.01, delay: 0 }}
      >
        <motion.path
          d="M12 2 V32"
          stroke="#c8321c"
          strokeWidth="2"
          fill="none"
          initial={reduce ? undefined : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <path d="M6 30 L12 38 L18 30" stroke="#c8321c" strokeWidth="2" fill="none" />
      </motion.svg>
    </div>
  );
}

export default function GrowthEngine() {
  const reduce = !!useReducedMotion();

  return (
    <div className="mt-10">
      <p className="sr-only">
        How the engine runs: a customer sentence arrives at the Signal Desk and becomes a
        brief, passes the Voice Standard where drafts are edited to one bar, is structured
        by the Second Reader so AI answers cite it, and is measured by the Receipts. The
        budget then moves, and the next brief starts.
      </p>

      <div className="grid items-stretch gap-0 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
        {stations.map((station, index) => (
          <Fragment key={station.label}>
            {index > 0 ? (
              <Connector delay={index * 0.5 - 0.15} reduce={reduce} />
            ) : null}
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.5, ease }}
              className="flex flex-col rounded border border-hair bg-white/40 p-4"
            >
              {station.title ? (
                <p className="font-display text-[13px] font-bold text-ink">
                  {station.title}
                </p>
              ) : null}
              <p className="text-[11px] uppercase tracking-[0.1em] text-sub">
                {station.label}
              </p>
              <p className="mt-2.5 flex-1 font-display text-sm font-bold leading-snug text-ink">
                {station.body}
              </p>
              <p className="mt-2.5 text-xs leading-relaxed text-sub">{station.sub}</p>
            </motion.div>
          </Fragment>
        ))}
      </div>

      {/* The return loop: what makes it an engine, not a pipeline. */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: reduce ? 0 : 2.6 }}
        aria-hidden="true"
        className="mt-1"
      >
        <svg viewBox="0 0 1000 56" className="hidden w-full lg:block" preserveAspectRatio="none">
          <path
            d="M955 0 V28 Q955 44 939 44 H61 Q45 44 45 28 V10"
            stroke="#c8321c"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            fill="none"
          />
          <path d="M39 16 L45 6 L51 16" stroke="#c8321c" strokeWidth="1.5" fill="none" />
        </svg>
        <p className="pen-note mt-1 text-center text-lg lg:-mt-8">
          budget moves. the next brief starts.
        </p>
      </motion.div>
    </div>
  );
}

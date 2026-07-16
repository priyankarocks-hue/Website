"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { caseFiles } from "@/content/caseFiles";

// The evidence layer on the homepage: two case files from the record,
// led by their headline receipts. Replaces placeholder testimonials.
export default function CaseworkTeaser() {
  return (
    <section className="border-t border-hair py-24">
      <Container>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          The record
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-body">
          No borrowed logos, no invented praise. Two engagements from my own record,
          with the numbers I stand behind on a call.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {caseFiles.map((caseFile, index) => (
            <motion.div
              key={caseFile.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/casework"
                className="group flex h-full flex-col rounded border border-hair bg-white/30 p-7 transition-colors hover:border-red-pen/60"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-sub">
                  {caseFile.label}
                </p>
                <p className="mt-3 font-display text-3xl font-bold text-ink">
                  {caseFile.receipts[0].value}
                  <span className="mt-1 block text-sm font-normal text-sub">
                    {caseFile.receipts[0].detail}
                  </span>
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-body">
                  {caseFile.title}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-pen">
                  Read the case file
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

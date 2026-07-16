"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

// The thinking, front and centre: three named models, each defined in
// one ownable sentence, each linking to the essay that coined it.
// Flagship gets the feature slot; the other two share the row below.

const flagship = {
  name: "Regression to the Template",
  definition:
    "AI-assisted content drifts toward the statistical average of everything ever published, unless an editorial force pulls it back.",
  href: "/insights/regression-to-the-template",
  issue: "Issue 2",
};

const models = [
  {
    name: "The Attention Ledger",
    definition:
      "Every piece you publish is a deposit or a withdrawal on your audience's willingness to hear from you again.",
    href: "/insights/the-attention-ledger",
    issue: "Issue 3",
  },
  {
    name: "The Two Readers",
    definition:
      "Every piece now has two readers: a human deciding whether to trust you, and a machine deciding whether to cite you.",
    href: "/insights/the-two-readers",
    issue: "Issue 4",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ModelsIndex() {
  return (
    <section id="models" className="scroll-mt-24 border-t border-hair py-24">
      <Container>
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          The models
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-body">
          Named ways of seeing marketing in the AI era. Written here first, used on real
          budgets, yours to steal with attribution.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="mt-10"
        >
          <Link
            href={flagship.href}
            className="group block rounded border-[1.5px] border-ink bg-white/40 p-8 transition-colors hover:border-red-pen sm:p-10"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-sub">
              The flagship &middot; {flagship.issue}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-ink group-hover:underline group-hover:decoration-red-pen group-hover:decoration-[3px] group-hover:underline-offset-8 sm:text-3xl">
              {flagship.name}
            </h3>
            <p className="mt-4 max-w-2xl font-display text-base leading-relaxed text-body sm:text-lg">
              &ldquo;{flagship.definition}&rdquo;
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red-pen">
              Read the essay
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </span>
          </Link>
        </motion.div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {models.map((model, index) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease }}
            >
              <Link
                href={model.href}
                className="group flex h-full flex-col rounded border border-hair bg-white/30 p-7 transition-colors hover:border-red-pen/60"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-sub">{model.issue}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink group-hover:underline group-hover:decoration-red-pen group-hover:decoration-2 group-hover:underline-offset-4">
                  {model.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
                  &ldquo;{model.definition}&rdquo;
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-pen">
                  Read the essay
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

import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { caseFiles } from "@/content/caseFiles";
import { mediaFeatures } from "@/content/speakingTopics";

export const metadata: Metadata = {
  title: "Casework: what the growth engine did in production",
  description:
    "Two engagements from Priyanka Joshi's record: an AI growth engine under financial regulation across 150+ markets, and a communications function built from zero to $80M+ first-year revenue.",
};

export default function CaseworkPage() {
  return (
    <div className="relative">
      <section className="pt-8">
        <Container>
          <Breadcrumbs items={[{ label: "Casework" }]} />
        </Container>
      </section>

      <section className="pb-20 pt-10">
        <Container>
          <SectionHeading
            eyebrow="Subject: the record."
            title="Casework"
            description="Two engagements from my own record. The first is anonymised; the numbers in both are mine to stand behind, in detail, on a call."
          />
        </Container>
      </section>

      {caseFiles.map((caseFile) => (
        <section key={caseFile.label} className="border-t border-hair py-16">
          <Container>
            <p className="text-xs uppercase tracking-[0.12em] text-sub">
              {caseFile.label}
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl font-bold text-ink sm:text-3xl">
              {caseFile.title}
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
              <div>
                <h3 className="font-display text-base font-bold text-ink">
                  The situation
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-body">
                  {caseFile.situation}
                </p>

                <h3 className="mt-8 font-display text-base font-bold text-ink">
                  The direction
                </h3>
                <ul className="mt-3 max-w-2xl space-y-3">
                  {caseFile.direction.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-body">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-pen" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-fit rounded border-[1.5px] border-red-pen bg-white/50 p-7">
                <h3 className="font-display text-base font-bold text-ink">
                  The receipts
                </h3>
                <dl className="mt-4 space-y-5">
                  {caseFile.receipts.map((receipt) => (
                    <div key={receipt.detail}>
                      <dt className="font-display text-3xl font-bold text-ink">
                        {receipt.value}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-sub">
                        {receipt.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="border-t border-hair py-12">
        <Container className="flex flex-wrap items-center gap-x-10 gap-y-4">
          <span className="text-xs uppercase tracking-[0.12em] text-sub">
            Coverage landed in
          </span>
          {mediaFeatures.map((feature) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={feature}
              src={`/images/logos/${feature.toLowerCase()}.svg`}
              alt={feature}
              className="h-5 w-auto opacity-50"
            />
          ))}
          <span className="text-sm text-body">
            Speaker, The MarTech Summit Asia 2025, Marina Bay Sands, Singapore.
          </span>
        </Container>
      </section>

      <section className="py-16">
        <Container className="text-center">
          <p className="mx-auto max-w-xl font-display text-xl font-bold text-ink">
            Want the detail behind any number here? Ask me on a call. I brought the
            receipts.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">Book a Call</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

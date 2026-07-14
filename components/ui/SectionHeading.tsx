export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="mb-4 text-xs uppercase tracking-[0.12em] text-sub">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl leading-relaxed text-body ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

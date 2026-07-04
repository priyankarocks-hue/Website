export default function StaticFallbackBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.25), transparent 55%), radial-gradient(circle at 80% 30%, rgba(34,211,238,0.2), transparent 50%), linear-gradient(180deg, #05060a 0%, #0b0d14 100%)",
      }}
    />
  );
}

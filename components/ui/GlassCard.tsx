// Paper card: a plain bordered sheet. The old dark-theme tilt effect is gone;
// on paper, content earns attention with type, not physics.
export default function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded border border-hair bg-white/40 p-8 ${className}`}>
      {children}
    </div>
  );
}

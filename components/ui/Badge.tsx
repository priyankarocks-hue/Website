export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neon-blue/30 bg-neon-blue/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neon-blue">
      {children}
    </span>
  );
}

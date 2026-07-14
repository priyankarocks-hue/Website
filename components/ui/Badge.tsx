export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border-[1.5px] border-red-pen px-2.5 py-1 font-display text-xs font-bold uppercase tracking-wide text-red-pen">
      {children}
    </span>
  );
}

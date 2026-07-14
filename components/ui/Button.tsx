import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-red-pen text-paper font-semibold hover:bg-red-pen-dark active:scale-[0.98]",
  secondary:
    "border-[1.5px] border-ink text-ink hover:bg-ink/5 active:scale-[0.98]",
  ghost: "text-ink/80 hover:text-ink",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded px-6 py-3 text-sm transition-all duration-150 ease-out ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

import { cn } from "@/lib/utils";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  external?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:shadow-ring active:scale-[0.99]";

  const styles =
    variant === "primary"
      ? "bg-brand-600 text-white shadow-softer hover:bg-brand-700"
      : variant === "dark"
        ? "bg-zinc-900 text-white shadow-softer hover:bg-zinc-800"
        : "border border-zinc-200 bg-white text-zinc-900 shadow-softer hover:bg-zinc-50";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(base, styles, className)}
    >
      {children}
    </a>
  );
}
import Container from "./Container";
import { cn } from "@/lib/utils";

export default function Section({
  id,
  eyebrow,
  title,
  children,
  align = "left"
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";

  return (
    <section id={id} className="py-14 md:py-20">
      <Container>
        <div className={cn(isCenter && "text-center")}>
          <p className="text-xs font-semibold tracking-wide text-emerald-700">
            {eyebrow.toUpperCase()}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            {title}
          </h2>
        </div>
      </Container>

      <div className="mt-8">{children}</div>
    </section>
  );
}
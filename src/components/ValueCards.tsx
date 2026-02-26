import Container from "./Container";
import { site } from "@/lib/site";

export default function ValueCards() {
  return (
    <Container>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {site.highlights.map((h) => (
          <div
            key={h.title}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-softer transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-200 text-emerald-700">
              ✦
            </div>
            <p className="mt-4 text-sm font-semibold text-zinc-900">{h.title}</p>
            <p className="mt-2 text-sm text-zinc-600">{h.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
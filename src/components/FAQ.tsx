import Container from "./Container";
import { site } from "@/lib/site";

export default function FAQ() {
  return (
    <Container>
      <div className="flex justify-center py-8 md:py-12">
        <div className="w-full max-w-3xl space-y-5">
          {site.faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-softer"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-900">
                <div className="flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-zinc-500 transition group-open:rotate-45">
                    +
                  </span>
                </div>
              </summary>
              <p className="mt-3 text-sm text-zinc-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Container>
  );
}
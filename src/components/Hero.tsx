import Container from "./Container";
import ButtonLink from "./ButtonLink";
import ProductSlider from "./ProductSlider";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute right-[-120px] top-[140px] h-[360px] w-[360px] rounded-full bg-zinc-200/50 blur-3xl" />
      </div>

      <Container>
        <div className="py-14 md:py-16 w-full">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
            {/* LEFT: text */}
            <div className="text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-6 py-2.5 text-base font-semibold text-emerald-700 shadow-sm">
                Ramadan Edition • With Camaradery
              </p>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl">
                {site.brand}
              </h1>

              <p className="mt-5 text-base leading-relaxed text-zinc-700 md:text-lg">
                {site.tagline}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={site.lynkUrl} external variant="primary">
                  {site.ctaPrimary}
                </ButtonLink>
              </div>
            </div>

            {/* RIGHT: slider */}
            <div className="md:justify-self-end">
              <ProductSlider />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
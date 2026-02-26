"use client";

import { useEffect, useMemo, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

export default function ProductSlider() {
  const slides: Slide[] = useMemo(
    () => [
      {
        src: "/Ramadhan_1.svg",
        alt: "Ramadan Tracker preview 1",
        title: "Ramadan Tracker",
        subtitle: "Preview halaman utama",
      },
      {
        src: "/Ramadhan_Tracker2.svg",
        alt: "Ramadan Tracker preview 2",
        title: "Checklist Ibadah",
        subtitle: "Biar konsisten tiap hari",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <div className="w-full max-w-lg">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/70 shadow-soft">
        {/* track */}
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s) => (
            <div key={s.title} className="w-full shrink-0">
              {/* image */}
              <div className="relative aspect-[4/5] w-full bg-zinc-50">
                <img
                  src={s.src}
                  alt={s.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {/* subtle top highlight */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
              </div>

              {/* caption */}
              <div className="p-5">
                <p className="text-sm font-semibold text-zinc-900">{s.title}</p>
                <p className="mt-1 text-sm text-zinc-600">{s.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-2 backdrop-blur">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={[
                  "h-2.5 w-2.5 rounded-full transition",
                  i === index ? "bg-emerald-600" : "bg-zinc-300 hover:bg-zinc-400",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
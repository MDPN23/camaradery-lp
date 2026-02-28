"use client";

import { useState, useEffect, useRef } from "react";
import Container from "@/components/Container";
import Link from "next/link";

/* ─── Product catalog ─── */
const products = [
  {
    title: "Template Keuangan Bisnis Digital",
    desc: "Dashboard otomatis, pencatatan pemasukan & pengeluaran, pajak, invoice — semua dalam satu spreadsheet.",
    price: "Rp79.000",
    originalPrice: "Rp150.000",
    badge: "Best Seller",
    icon: "📊",
    href: "/templateKeuanganBisnis",
    tag: "BISNIS",
  },
  {
    title: "20+ Template CV ATS-Friendly",
    desc: "CV yang lolos screening robot ATS. Berbagai desain profesional siap edit, langsung kirim ke HRD.",
    price: "Rp49.000",
    originalPrice: "Rp99.000",
    badge: "Populer",
    icon: "📄",
    href: "/templateCVATS",
    tag: "KARIR",
  },
  {
    title: "Digital Ramadhan Tracker",
    desc: "Checklist ibadah, jadwal puasa, dan tracker harian Ramadan yang rapi dan siap pakai.",
    price: "Lihat Produk",
    originalPrice: "",
    badge: "Seasonal",
    icon: "🌙",
    href: "/ramadhanTracker",
    tag: "IBADAH",
  },
  {
    title: "30 Hari Menu Sahur",
    desc: "Panduan menu sahur selama sebulan penuh — praktis, bergizi, dan anti bingung tiap pagi.",
    price: "Lihat Produk",
    originalPrice: "",
    badge: "Seasonal",
    icon: "🍽️",
    href: "/menuSahur",
    tag: "LIFESTYLE",
  },
];

const values = [
  {
    num: "01",
    title: "Instan & Siap Pakai",
    desc: "Semua produk langsung bisa diakses setelah pembelian. Tanpa ribet, tanpa nunggu.",
  },
  {
    num: "02",
    title: "Kualitas Premium",
    desc: "Dirancang profesional dengan desain modern dan fitur lengkap untuk kebutuhan Anda.",
  },
  {
    num: "03",
    title: "Sekali Bayar, Selamanya",
    desc: "Tidak ada biaya langganan. Bayar sekali, file jadi milik Anda seumur hidup.",
  },
  {
    num: "04",
    title: "Mudah Digunakan",
    desc: "Panduan lengkap di setiap produk. Cocok untuk pemula sekalipun.",
  },
];

/* ─── Intersection Observer hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ════════════════════════════════
   MAIN PAGE — Monochrome Premium
   ════════════════════════════════ */
export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const productsSection = useInView(0.1);
  const valuesSection = useInView(0.1);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* ═══ NAVBAR ═══ */}
      <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur-xl">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Camaradery" className="h-40 w-32" />
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              <a href="#produk" className="text-[13px] font-medium tracking-wide text-zinc-400 uppercase hover:text-zinc-900 transition-colors duration-300">
                Produk
              </a>
              <a href="#tentang" className="text-[13px] font-medium tracking-wide text-zinc-400 uppercase hover:text-zinc-900 transition-colors duration-300">
                Tentang
              </a>
            </nav>

            <a
              href="#produk"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-[13px] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-zinc-700 active:scale-[0.97]"
            >
              Lihat Produk
            </a>
          </div>
        </Container>
      </header>

      <main>
        {/* ═══ HERO SECTION ═══ */}
        <section className="relative overflow-hidden">
          {/* Subtle grain texture overlay */}
          <div className="absolute inset-0 -z-10 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

          {/* Subtle radial glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-300px] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-zinc-200/30 blur-[120px]" />
          </div>

          <Container>
            <div className="pt-24 pb-28 md:pt-36 md:pb-40">
              <div className="max-w-4xl mx-auto text-center">
                {/* Eyebrow */}
                <div
                  className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                  <span className="inline-block text-[11px] font-semibold tracking-[0.25em] text-zinc-400 uppercase">
                    Digital Product Studio
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className={`mt-8 text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-zinc-900 transition-all duration-1000 delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                  Partner Kebutuhan
                  <br />
                  <span className="text-zinc-300">Digital Anda</span>
                </h1>

                {/* Subheading */}
                <p
                  className={`mt-8 text-lg leading-relaxed text-zinc-500 max-w-xl mx-auto md:text-xl transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                  Template, tools, dan resource digital premium —
                  siap pakai untuk bisnis, karir, dan produktivitas.
                </p>

                {/* CTAs */}
                <div
                  className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-[450ms] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                  <a
                    href="#produk"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-zinc-900 px-10 py-4 text-[15px] font-semibold text-white shadow-2xl shadow-zinc-900/20 transition-all duration-300 hover:bg-zinc-700 hover:shadow-xl active:scale-[0.97]"
                  >
                    Explore Produk
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="https://lynk.id/camaradery"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-10 py-4 text-[15px] font-semibold text-zinc-600 transition-all duration-300 hover:border-zinc-400 hover:text-zinc-900 active:scale-[0.97]"
                  >
                    Lynk.id
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Minimal scroll indicator */}
                <div className={`mt-20 transition-all duration-1000 delay-[600ms] ${mounted ? "opacity-100" : "opacity-0"}`}>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] tracking-[0.2em] text-zinc-300 uppercase">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-zinc-300 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ═══ DIVIDER LINE ═══ */}
        <div className="border-t border-zinc-100" />

        {/* ═══ PRODUCTS SECTION ═══ */}
        <section id="produk" className="py-24 md:py-32" ref={productsSection.ref}>
          <Container>
            <div className="max-w-xl mb-20">
              <span className={`inline-block text-[11px] font-semibold tracking-[0.25em] text-zinc-400 uppercase mb-4 transition-all duration-700 ${productsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                Katalog
              </span>
              <h2 className={`text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl transition-all duration-700 delay-100 ${productsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                Produk Digital
                <br />
                <span className="text-zinc-300">Pilihan Kami</span>
              </h2>
            </div>

            <div className="grid gap-px bg-zinc-100 rounded-3xl overflow-hidden md:grid-cols-2">
              {products.map((product, i) => (
                <Link
                  key={product.title}
                  href={product.href}
                  className={`group relative bg-white p-8 md:p-10 transition-all duration-700 hover:bg-zinc-50 ${productsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: productsSection.inView ? `${150 + i * 100}ms` : "0ms" }}
                >
                  {/* Top row: tag + arrow */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-semibold tracking-[0.3em] text-zinc-400 uppercase">
                      {product.tag}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center transition-all duration-300 group-hover:bg-zinc-900 group-hover:border-zinc-900">
                      <svg className="w-4 h-4 text-zinc-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Icon */}
                  <span className="text-4xl block mb-5">{product.icon}</span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-zinc-700 transition-colors duration-300">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-zinc-500 leading-relaxed mb-8">
                    {product.desc}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-zinc-900">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-zinc-300 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* ═══ MARQUEE DIVIDER ═══ */}
        <div className="border-t border-zinc-100 overflow-hidden py-5">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="mx-8 text-[11px] font-semibold tracking-[0.3em] text-zinc-200 uppercase">
                Bisnis · Karir · Produktivitas · Ibadah · Lifestyle
              </span>
            ))}
          </div>
        </div>

        {/* ═══ WHY US ═══ */}
        <section id="tentang" className="py-24 md:py-32 bg-zinc-950 text-white" ref={valuesSection.ref}>
          <Container>
            <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24 items-start">
              {/* Left: heading */}
              <div className={`lg:sticky lg:top-32 transition-all duration-700 ${valuesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                <span className="inline-block text-[11px] font-semibold tracking-[0.25em] text-zinc-500 uppercase mb-4">
                  Kenapa Kami
                </span>
                <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                  Produk yang bisa
                  <br />
                  <span className="text-zinc-600">Anda andalkan.</span>
                </h2>
                <p className="mt-6 text-zinc-400 leading-relaxed max-w-md">
                  Setiap produk Camaradery dirancang dengan standar tertinggi — agar Anda bisa fokus pada hal yang penting.
                </p>
              </div>

              {/* Right: value items */}
              <div className="space-y-0">
                {values.map((v, i) => (
                  <div
                    key={v.num}
                    className={`group border-t border-zinc-800 py-10 transition-all duration-700 ${valuesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: valuesSection.inView ? `${200 + i * 100}ms` : "0ms" }}
                  >
                    <div className="flex items-start gap-6">
                      <span className="text-[13px] font-mono text-zinc-600 mt-1 shrink-0">
                        {v.num}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors duration-300">
                          {v.title}
                        </h3>
                        <p className="text-[15px] text-zinc-500 leading-relaxed max-w-md">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="py-28 md:py-40 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-zinc-100/80 blur-[120px]" />
          </div>

          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block text-[11px] font-semibold tracking-[0.25em] text-zinc-400 uppercase mb-6">
                Mulai Sekarang
              </span>

              <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-6xl">
                Siap meningkatkan
                <br />
                <span className="text-zinc-300">produktivitas?</span>
              </h2>

              <p className="mt-6 text-lg text-zinc-500 leading-relaxed">
                Jelajahi produk digital dari Camaradery —
                bekerja lebih cerdas, bukan lebih keras.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#produk"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-zinc-900 px-10 py-4 text-[15px] font-semibold text-white shadow-2xl shadow-zinc-900/20 transition-all duration-300 hover:bg-zinc-700 active:scale-[0.97]"
                >
                  Lihat Produk
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </a>
                <a
                  href="https://lynk.id/camaradery"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-10 py-4 text-[15px] font-semibold text-zinc-600 transition-all duration-300 hover:border-zinc-400 hover:text-zinc-900 active:scale-[0.97]"
                >
                  Lynk.id
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-zinc-100 py-10">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-tight text-zinc-900">Camaradery</p>
              <p className="mt-1 text-[12px] text-zinc-400">Partner Kebutuhan Digital Anda</p>
            </div>
            <p className="text-[12px] text-zinc-300">
              © {new Date().getFullYear()} Camaradery. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>

      {/* ═══ INLINE STYLES for marquee ═══ */}
      <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
    </div>
  );
}

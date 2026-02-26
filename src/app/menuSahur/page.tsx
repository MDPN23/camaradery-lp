"use client";

import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import LynkAppFloat from "@/components/LynkAppFloat";
import Container from "@/components/Container";

const LYNK_URL = "https://lynk.id/camaradery/x60ov8q81ndr";

export default function MenuSahurPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                {/* Custom Hero */}
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
                                        Spesial Ramadhan • Camaradery
                                    </p>

                                    <h1 className="mt-5 text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
                                        Ramadhan Gak Pakai Bingung! Cheat Sheet Sahur Camaradery: Masak Cepat, Nutrisi Akurat
                                    </h1>

                                    <p className="mt-5 text-base leading-relaxed text-zinc-700 md:text-lg">
                                        Sahur Sehat, Puasa Kuat Bersama Camaradery! 🌙 Masih sering bingung mau masak apa pas jam sahur yang terbatas? Atau sering merasa lemas dan cepat lapar saat puasa? Kuncinya ada di nutrisi sahurmu!
                                    </p>

                                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                                        <a href={LYNK_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-soft transition hover:bg-emerald-700 w-full sm:w-auto">
                                            Beli Sekarang - Rp34.500
                                        </a>
                                        <span className="text-zinc-500 line-through text-sm px-2 text-center sm:text-left">Rp50.000</span>
                                    </div>
                                </div>

                                {/* RIGHT: image or generic cover */}
                                <div className="md:justify-self-end w-full max-w-sm rounded-3xl border border-zinc-200 bg-white p-8 shadow-softer flex flex-col items-center text-center">
                                    <div className="h-48 w-full bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 text-6xl mb-6">
                                        🍳
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-900 mb-2">eBook Menu Sahur Ramadhan</h3>
                                    <p className="text-zinc-600 text-sm mb-4">Panduan lengkap berisi ragam resep praktis dan variasi makanan sehat agar tubuhmu tetap bugar selama 13 jam berpuasa.</p>
                                    <div className="flex gap-2 items-center">
                                        <span className="font-bold text-2xl text-emerald-700">Rp34.500</span>
                                        <span className="text-zinc-400 line-through text-sm">Rp50.000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <Section id="keunggulan" eyebrow="Apa Keunggulan eBook Ini?" title="30 Hari Menu, Gizi Terukur & Praktis." align="center">
                    <Container>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-zinc-200 p-6 shadow-softer">
                                <p className="text-base font-semibold text-zinc-900 mb-2">30 Variasi Menu Sehat</p>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    Daftar menu lengkap dari hari ke-1 sampai hari ke-30, mulai dari berbagai jenis Sup, Tumisan, hingga Seafood.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-zinc-200 p-6 shadow-softer">
                                <p className="text-base font-semibold text-zinc-900 mb-2">Kandungan Gizi Terukur</p>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    Setiap resep dilengkapi detail Protein, Lemak, dan Karbohidrat per porsi. Sangat cocok untuk kamu yang peduli kesehatan!
                                </p>
                            </div>
                            <div className="rounded-2xl border border-zinc-200 p-6 shadow-softer">
                                <p className="text-base font-semibold text-zinc-900 mb-2">Panduan Pola Makan & Hidrasi</p>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    Tips mengatur porsi piring makan (karbohidrat kompleks, protein, sayuran) dan jadwal minum air putih 2-4-2 agar tetap terhidrasi.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-zinc-200 p-6 shadow-softer">
                                <p className="text-base font-semibold text-zinc-900 mb-2">Langkah Memasak Praktis</p>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    Instruksi yang jelas dan cepat, pas untuk disiapkan di waktu subuh.
                                </p>
                            </div>
                        </div>
                    </Container>
                </Section>

                <Section id="mengapa" eyebrow="Buat Ramadhanmu Maksimal" title="Mengapa Harus Punya?" align="center">
                    <Container>
                        <div className="max-w-3xl mx-auto rounded-3xl border border-zinc-200 bg-white p-8 shadow-softer text-center">
                            <p className="text-base text-zinc-700 leading-relaxed">
                                Menu sahur yang tepat membantu memperbaiki metabolisme tubuh, mendukung detoksifikasi, serta menjaga kestabilan tekanan darah, gula darah, dan kolesterol. <b>Jangan lewatkan sahurmu hanya dengan makanan seadanya!</b>
                            </p>
                            <div className="mt-8 bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                                <p className="text-emerald-800 font-semibold mb-2">Investasi Sehat untuk Ramadhanmu hanya:</p>
                                <p className="text-4xl font-bold text-emerald-700">Rp34.500</p>
                                <p className="text-sm text-emerald-600 mt-2 font-medium">(Terbatas di Bulan Februari)</p>
                            </div>
                        </div>
                    </Container>
                </Section>

                <Section
                    id="cta"
                    eyebrow="Siap mulai?"
                    title="Jadikan Ramadhan tahun ini lebih sehat dan produktif bersama Camaradery!"
                >
                    <Container>
                        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-b from-white to-emerald-50 p-8 shadow-soft md:p-10">
                            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-center md:text-left">
                                <div>
                                    <p className="text-sm font-semibold text-emerald-700">Promo Terbatas Februari</p>
                                    <p className="mt-2 text-zinc-700">
                                        Jangan sampai kehabisan harga promo. Beli sekarang dan mulai siapkan menu sahurmu!
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 sm:flex-row shrink-0">
                                    <a
                                        href={LYNK_URL}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-soft transition hover:bg-emerald-700 w-full sm:w-auto"
                                    >
                                        Beli Sekarang
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>
            </main>

            <Footer />
            <LynkAppFloat />
        </div>
    );
}

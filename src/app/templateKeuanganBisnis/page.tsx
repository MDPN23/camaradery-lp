"use client";

import { useState, useEffect } from "react";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

const LYNK_URL = "https://lynk.id/camaradery/mo54d9lyqm4q"; // ganti ke URL produk yang benar
const ORIGINAL_PRICE = 150_000;
const SALE_PRICE = 79_000;
const DISCOUNT_PERCENT = Math.round(
    ((ORIGINAL_PRICE - SALE_PRICE) / ORIGINAL_PRICE) * 100
);

/* ─── Countdown Timer Hook ─── */
function useCountdown() {
    const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });

    useEffect(() => {
        function getEndOfDay() {
            const now = new Date();
            const end = new Date(now);
            end.setHours(23, 59, 59, 999);
            return end;
        }

        function calc() {
            const diff = getEndOfDay().getTime() - Date.now();
            if (diff <= 0) return { h: 0, m: 0, s: 0 };
            return {
                h: Math.floor(diff / 3_600_000),
                m: Math.floor((diff % 3_600_000) / 60_000),
                s: Math.floor((diff % 60_000) / 1_000),
            };
        }

        setTimeLeft(calc());
        const id = setInterval(() => setTimeLeft(calc()), 1_000);
        return () => clearInterval(id);
    }, []);

    return timeLeft;
}

/* ─── Rupiah formatter ─── */
const rp = (n: number) =>
    "Rp" + n.toLocaleString("id-ID");

/* ─── Data ─── */
const features = [
    {
        icon: "📊",
        title: "Dashboard Visual Premium",
        desc: "Lihat Total Profit, Net Income, Profit Goal & grafik tren—semuanya otomatis terhitung. Gak perlu rumus manual.",
    },
    {
        icon: "⚡",
        title: 'Sistem "Sekali Setting, Jalan Otomatis"',
        desc: "Isi data dasar bisnis Anda sekali di halaman Inisiasi. Semua sheet lain otomatis menyesuaikan!",
    },
    {
        icon: "📝",
        title: "Pencatatan Rapi & Praktis",
        desc: "Tanggal, Kategori, Deskripsi, Pajak Otomatis, Status Invoice—semua tersedia. Tinggal isi lalu beres!",
    },
    {
        icon: "🔒",
        title: "Sekali Bayar, Seumur Hidup",
        desc: "Tidak ada langganan bulanan. Bayar sekali Rp79.000, file milik Anda selamanya dan bisa dipakai bertahun-tahun.",
    },
];

const benefits = [
    {
        emoji: "🚀",
        title: "Siap Hadapi 2026 Lebih Matang",
        desc: "Data rapi dari sekarang = strategi tahun depan lebih terarah.",
    },
    {
        emoji: "💰",
        title: "Kelola Arus Kas Lebih Efisien",
        desc: "Tahu pos pengeluaran mana yang boros dan harus ditekan.",
    },
    {
        emoji: "⏱️",
        title: "Hemat Waktu & Anti Stress",
        desc: "Gak perlu lembur di akhir bulan cuma buat rekap nota.",
    },
    {
        emoji: "📈",
        title: "Keputusan Berdasarkan Data",
        desc: "Ambil keputusan bisnis berdasarkan data, bukan cuma perasaan.",
    },
];

const faqs = [
    {
        q: "Produk ini berupa apa?",
        a: "File digital berupa Spreadsheet/Excel yang akan dikirim instan setelah pembelian. Bisa langsung dipakai di Google Sheets atau Microsoft Excel.",
    },
    {
        q: "Saya nol besar soal akuntansi, bisa pakai?",
        a: "Bisa banget! Template ini dirancang untuk pemula. Ada halaman Inisiasi yang memandu Anda step-by-step.",
    },
    {
        q: "Apakah ada biaya tambahan atau langganan?",
        a: "Tidak ada! Sekali bayar Rp79.000, file jadi milik Anda selamanya. Bisa dipakai bertahun-tahun tanpa biaya tambahan.",
    },
    {
        q: "Bisa dipakai untuk jenis bisnis apa saja?",
        a: "Cocok untuk semua jenis UMKM: jualan online, jasa freelance, toko fisik, F&B, dan lainnya.",
    },
    {
        q: "Bagaimana cara aksesnya setelah beli?",
        a: "Setelah pembayaran berhasil, file akan langsung dikirim. Tinggal download dan mulai pakai!",
    },
];

const testimonials = [
    {
        name: "Rina S.",
        role: "Owner Toko Online",
        text: "Dulu saya catat keuangan asal-asalan. Sekarang pakai template ini, langsung keliatan mana bisnis yang untung dan rugi. Recommended!",
    },
    {
        name: "Budi P.",
        role: "Freelance Designer",
        text: "Sebagai freelancer, ngurusin invoice dan pajak itu pusing. Template ini bikin semuanya otomatis. Worth it banget!",
    },
    {
        name: "Dian M.",
        role: "Pemilik Warung Kopi",
        text: "Rp79.000 aja dapet sistem keuangan lengkap. Biasanya harus sewa akuntan jutaan per bulan. Game changer!",
    },
];

/* ─── CTA Button Component ─── */
function CTAButton({
    size = "lg",
    className = "",
    children,
}: {
    size?: "lg" | "md";
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <a
            href={LYNK_URL}
            target="_blank"
            rel="noreferrer"
            id="cta-primary"
            className={`
        group relative inline-flex items-center justify-center overflow-hidden
        rounded-2xl font-bold text-white shadow-lg transition-all duration-300
        bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500
        hover:from-blue-700 hover:via-blue-600 hover:to-sky-600
        hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02]
        active:scale-[0.98]
        ${size === "lg" ? "px-10 py-5 text-lg" : "px-8 py-4 text-base"}
        ${className}
      `}
        >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
                {children ?? (
                    <>
                        🔥 BELI SEKARANG — {rp(SALE_PRICE)}
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </>
                )}
            </span>
        </a>
    );
}

/* ─── Floating CTA Bar ─── */
function FloatingCTA() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 600);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${show
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0 pointer-events-none"
                }`}
        >
            <div className="bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-700/50 py-3 px-4">
                <div className="mx-auto max-w-6xl flex items-center justify-between gap-4">
                    <div className="hidden sm:block">
                        <p className="text-white font-semibold text-sm">Template Keuangan Bisnis Digital</p>
                        <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-blue-400 font-bold">{rp(SALE_PRICE)}</span>
                            <span className="text-zinc-500 line-through text-xs">{rp(ORIGINAL_PRICE)}</span>
                            <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full font-semibold">
                                -{DISCOUNT_PERCENT}%
                            </span>
                        </div>
                    </div>
                    <a
                        href={LYNK_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-sky-500 px-6 py-3 text-sm font-bold text-white shadow-lg hover:from-blue-600 hover:to-sky-600 transition-all active:scale-[0.98]"
                    >
                        🔥 Beli Sekarang
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

/* ─── FAQ Accordion Item ─── */
function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-zinc-200 rounded-2xl overflow-hidden transition-all hover:border-blue-300">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-zinc-50 transition-colors"
            >
                <span className="font-semibold text-zinc-900 pr-4">{q}</span>
                <svg
                    className={`w-5 h-5 shrink-0 text-blue-600 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="px-6 pb-5 text-sm text-zinc-600 leading-relaxed">{a}</p>
            </div>
        </div>
    );
}

/* ════════════════════════════════
   MAIN PAGE
   ════════════════════════════════ */
export default function TemplateKeuanganBisnisPage() {
    const countdown = useCountdown();
    const pad = (n: number) => String(n).padStart(2, "0");

    return (
        <div className="min-h-screen bg-[#fafafa]">
            {/* ═══ STICKY URGENCY BAR ═══ */}
            <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white py-2.5 px-4 text-center sticky top-0 z-50">
                <p className="text-sm font-medium flex flex-wrap items-center justify-center gap-2">
                    <span className="animate-pulse">🔥</span>
                    <span>Harga Spesial TERBATAS</span>
                    <span className="font-bold text-blue-400">{rp(SALE_PRICE)}</span>
                    <span className="text-zinc-400">•</span>
                    <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-xs">
                        {pad(countdown.h)}:{pad(countdown.m)}:{pad(countdown.s)}
                    </span>
                </p>
            </div>

            <main>
                {/* ═══ HERO SECTION ═══ */}
                <section className="relative overflow-hidden">
                    {/* Background effects */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-[100px]" />
                        <div className="absolute right-[-100px] top-[100px] h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-[80px]" />
                        <div className="absolute left-[-80px] bottom-[-100px] h-[300px] w-[300px] rounded-full bg-blue-100/30 blur-[60px]" />
                    </div>

                    <Container>
                        <div className="pt-12 pb-16 md:pt-20 md:pb-24">
                            <div className="grid items-center gap-12 lg:grid-cols-2">
                                {/* LEFT: Copy */}
                                <div>
                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 mb-6">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
                                        </span>
                                        DISKON {DISCOUNT_PERCENT}% — Harga Naik Kapan Saja!
                                    </div>

                                    <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                                        Siap Meroket dengan{" "}
                                        <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                                            Keuangan Bisnis Digital
                                        </span>{" "}
                                        Profesional di 2026
                                    </h1>

                                    <p className="mt-6 text-lg leading-relaxed text-zinc-600 md:text-xl">
                                        Stop catat keuangan di buku tulis.
                                        Ubah kekacauan nota menjadi{" "}
                                        <strong className="text-zinc-900">data strategis</strong> untuk
                                        bisnis Anda — bahkan kalau Anda{" "}
                                        <strong className="text-zinc-900">nol besar soal akuntansi</strong>.
                                    </p>

                                    {/* Price block */}
                                    <div className="mt-8 flex flex-wrap items-end gap-4">
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-4xl font-extrabold text-blue-700 md:text-5xl">
                                                {rp(SALE_PRICE)}
                                            </span>
                                            <span className="text-xl text-zinc-400 line-through">
                                                {rp(ORIGINAL_PRICE)}
                                            </span>
                                        </div>
                                        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">
                                            Hemat {rp(ORIGINAL_PRICE - SALE_PRICE)}
                                        </span>
                                    </div>

                                    <p className="mt-2 text-sm text-zinc-500">
                                        ☝️ Sekali bayar, milik Anda selamanya. Tanpa langganan bulanan.
                                    </p>

                                    {/* CTA */}
                                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                                        <CTAButton size="lg" />
                                    </div>

                                    {/* Trust signals */}
                                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            Instan delivery
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            Spreadsheet / Excel
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            Pemula friendly
                                        </span>
                                    </div>
                                </div>

                                {/* RIGHT: Product Preview */}
                                <div className="relative">
                                    <div className="relative rounded-3xl border border-zinc-200/80 bg-white shadow-xl overflow-hidden">
                                        <div className="bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 flex items-center gap-2">
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-white/30" />
                                                <div className="w-3 h-3 rounded-full bg-white/30" />
                                                <div className="w-3 h-3 rounded-full bg-white/30" />
                                            </div>
                                            <span className="text-sm text-white/80 font-medium ml-2">Dashboard Keuangan Bisnis</span>
                                        </div>
                                        <img
                                            src="/templateKeuanganBisnis/dashboardKeuangan.png"
                                            alt="Dashboard Keuangan Bisnis Digital - Preview"
                                            className="w-full"
                                        />
                                    </div>
                                    {/* Floating badge */}
                                    <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg border border-zinc-200 px-5 py-3 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-xl">📈</div>
                                        <div>
                                            <p className="text-sm font-bold text-zinc-900">Profit Goal</p>
                                            <p className="text-xs text-blue-600 font-semibold">67% tercapai</p>
                                        </div>
                                    </div>
                                    {/* Floating badge 2 */}
                                    <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg border border-zinc-200 px-5 py-3 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-xl">💰</div>
                                        <div>
                                            <p className="text-sm font-bold text-zinc-900">Net Income</p>
                                            <p className="text-xs text-sky-600 font-semibold">Auto-calculate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ═══ PAIN POINT SECTION ═══ */}
                <section className="py-16 md:py-24 bg-zinc-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 -z-0 opacity-20">
                        <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-blue-500 blur-[120px]" />
                        <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-sky-500 blur-[120px]" />
                    </div>
                    <Container>
                        <div className="relative z-10 max-w-3xl mx-auto text-center">
                            <p className="text-sm font-semibold tracking-wider text-blue-400 uppercase mb-4">
                                Apakah ini kamu?
                            </p>
                            <h2 className="text-3xl font-extrabold md:text-4xl">
                                Masih catat keuangan bisnis pakai cara lama?
                            </h2>
                            <div className="mt-10 grid gap-4 md:grid-cols-2 text-left">
                                {[
                                    "Catat keuangan di buku tulis / notes HP",
                                    "Bingung duit usaha lari kemana setiap bulan",
                                    "Lembur akhir bulan cuma buat rekap nota",
                                    "Takut salah hitung pajak & rugi diam-diam",
                                    "Pengen sewa akuntan tapi belum sanggup biayanya",
                                    "Ambil keputusan bisnis berdasarkan perasaan",
                                ].map((pain) => (
                                    <div
                                        key={pain}
                                        className="flex items-start gap-3 bg-white/5 rounded-xl border border-white/10 px-5 py-4"
                                    >
                                        <span className="mt-0.5 text-red-400 text-lg">✗</span>
                                        <p className="text-zinc-300 text-sm">{pain}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10">
                                <p className="text-xl font-bold text-blue-400 mb-2">
                                    Kalau iya, maka Anda butuh ini. 👇
                                </p>
                                <p className="text-zinc-400 text-sm">
                                    Template yang mengubah Anda dari &quot;asal catat&quot; menjadi pebisnis yang data-driven.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ═══ FEATURES SECTION ═══ */}
                <section id="fitur" className="py-16 md:py-24">
                    <Container>
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <p className="text-sm font-semibold tracking-wider text-blue-700 uppercase mb-3">
                                Fitur Unggulan
                            </p>
                            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
                                Kenapa Template Ini <span className="text-blue-600">Wajib</span> Dimiliki Pebisnis?
                            </h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {features.map((f) => (
                                <div
                                    key={f.title}
                                    className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-300 hover:-translate-y-1"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
                                        {f.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{f.title}</h3>
                                    <p className="text-zinc-600 leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* ═══ PRODUCT SCREENSHOTS ═══ */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white">
                    <Container>
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <p className="text-sm font-semibold tracking-wider text-blue-700 uppercase mb-3">
                                Preview Template
                            </p>
                            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
                                Intip Isi Templatenya
                            </h2>
                            <p className="mt-4 text-zinc-600">
                                Bukan sekadar spreadsheet biasa — ini adalah &quot;asisten keuangan&quot; pribadi Anda.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-soft transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                                <div className="bg-zinc-100 px-5 py-3 flex items-center gap-2 border-b border-zinc-200">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                                    </div>
                                    <span className="text-xs text-zinc-500 ml-2">Dashboard</span>
                                </div>
                                <img
                                    src="/templateKeuanganBisnis/dashboardKeuangan.png"
                                    alt="Dashboard Keuangan Bisnis"
                                    className="w-full"
                                />
                                <div className="p-5">
                                    <h3 className="font-bold text-zinc-900">Dashboard Visual</h3>
                                    <p className="text-sm text-zinc-600 mt-1">
                                        Profit, income, goal tracker & grafik analisis dalam satu tampilan.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-soft transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                                <div className="bg-zinc-100 px-5 py-3 flex items-center gap-2 border-b border-zinc-200">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                                    </div>
                                    <span className="text-xs text-zinc-500 ml-2">Buku Kas</span>
                                </div>
                                <img
                                    src="/templateKeuanganBisnis/pemasukan.png"
                                    alt="Pencatatan Pemasukan & Pengeluaran"
                                    className="w-full"
                                />
                                <div className="p-5">
                                    <h3 className="font-bold text-zinc-900">Pencatatan Otomatis</h3>
                                    <p className="text-sm text-zinc-600 mt-1">
                                        Catat pemasukan & pengeluaran dengan pajak otomatis dan status invoice.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ═══ BENEFITS ═══ */}
                <section className="py-16 md:py-24">
                    <Container>
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <p className="text-sm font-semibold tracking-wider text-blue-700 uppercase mb-3">
                                Manfaat Nyata
                            </p>
                            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
                                Apa yang Akan Anda Rasakan?
                            </h2>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {benefits.map((b) => (
                                <div
                                    key={b.title}
                                    className="text-center rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="text-4xl mb-4">{b.emoji}</div>
                                    <h3 className="font-bold text-zinc-900 mb-2">{b.title}</h3>
                                    <p className="text-sm text-zinc-600 leading-relaxed">{b.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Mid CTA */}
                        <div className="mt-14 text-center">
                            <CTAButton size="lg" />
                            <p className="mt-3 text-sm text-zinc-500">⚡ Akses instan setelah pembelian</p>
                        </div>
                    </Container>
                </section>

                {/* ═══ SOCIAL PROOF ═══ */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-zinc-50 to-white">
                    <Container>
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <p className="text-sm font-semibold tracking-wider text-blue-700 uppercase mb-3">
                                Testimoni
                            </p>
                            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
                                Mereka Sudah Merasakan Manfaatnya
                            </h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {testimonials.map((t) => (
                                <div
                                    key={t.name}
                                    className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex gap-1 text-amber-400 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-zinc-700 text-sm leading-relaxed mb-5">
                                        &quot;{t.text}&quot;
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-sky-500 flex items-center justify-center text-white font-bold text-sm">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-zinc-900 text-sm">{t.name}</p>
                                            <p className="text-xs text-zinc-500">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* ═══ COMPARISON SECTION ═══ */}
                <section className="py-16 md:py-24">
                    <Container>
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <p className="text-sm font-semibold tracking-wider text-blue-700 uppercase mb-3">
                                Perbandingan
                            </p>
                            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
                                Investasi Receh, Dampak Besar
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
                            {/* Tanpa */}
                            <div className="rounded-3xl border border-red-200 bg-red-50/50 p-7">
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600 font-bold">✗</div>
                                    <h3 className="font-bold text-red-800">Tanpa Template</h3>
                                </div>
                                <ul className="space-y-3 text-sm text-red-700">
                                    {[
                                        "Sewa akuntan: Rp1-3 juta/bulan",
                                        "Catat manual: Rawan salah & lupa",
                                        "Gak tahu bisnis untung atau rugi",
                                        "Keputusan bisnis asal-asalan",
                                        "Stress akhir bulan rekap nota",
                                    ].map((item) => (
                                        <li key={item} className="flex gap-2 items-start">
                                            <span className="mt-0.5">❌</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Dengan */}
                            <div className="rounded-3xl border-2 border-blue-400 bg-blue-50/50 p-7 relative">
                                <div className="absolute -top-3 right-5 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    RECOMMENDED
                                </div>
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold">✓</div>
                                    <h3 className="font-bold text-blue-800">Dengan Template Ini</h3>
                                </div>
                                <ul className="space-y-3 text-sm text-blue-700">
                                    {[
                                        "Sekali bayar Rp79.000, seumur hidup",
                                        "Dashboard otomatis, data real-time",
                                        "Tahu persis profit & arus kas",
                                        "Keputusan bisnis berbasis data",
                                        "Hemat waktu, fokus kembangkan bisnis",
                                    ].map((item) => (
                                        <li key={item} className="flex gap-2 items-start">
                                            <span className="mt-0.5">✅</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ═══ FAQ ═══ */}
                <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-zinc-50 to-white">
                    <Container>
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <p className="text-sm font-semibold tracking-wider text-blue-700 uppercase mb-3">
                                FAQ
                            </p>
                            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
                                Pertanyaan yang Sering Ditanyakan
                            </h2>
                        </div>

                        <div className="max-w-2xl mx-auto space-y-3">
                            {faqs.map((f) => (
                                <FAQItem key={f.q} q={f.q} a={f.a} />
                            ))}
                        </div>
                    </Container>
                </section>

                {/* ═══ FINAL CTA ═══ */}
                <section className="py-20 md:py-28 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-blue-950 to-zinc-900" />
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-blue-500 blur-[150px]" />
                        <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-sky-500 blur-[120px]" />
                    </div>

                    <Container>
                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-semibold text-blue-400 mb-6 backdrop-blur-sm">
                                <span className="animate-pulse">⚡</span>
                                Promo Terbatas — Harga Bisa Naik Kapan Saja!
                            </div>

                            <h2 className="text-3xl font-extrabold text-white md:text-5xl">
                                Jangan Biarkan Bisnis Impian Anda{" "}
                                <span className="text-blue-400">Terhambat</span> oleh Pembukuan Berantakan
                            </h2>

                            <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
                                Mulai rapikan keuangan bisnis Anda sekarang juga. Dengan{" "}
                                <strong className="text-white">{rp(SALE_PRICE)}</strong>, Anda mendapatkan sistem
                                keuangan yang biasanya harganya jutaan per bulan.
                            </p>

                            {/* Big price */}
                            <div className="mt-10 inline-flex flex-col items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl px-10 py-8">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-5xl font-extrabold text-white md:text-6xl">{rp(SALE_PRICE)}</span>
                                    <span className="text-2xl text-zinc-500 line-through">{rp(ORIGINAL_PRICE)}</span>
                                </div>
                                <p className="text-blue-400 font-semibold mt-2">Sekali bayar • Seumur hidup</p>
                                <div className="mt-6">
                                    <CTAButton size="lg" className="!px-14 !py-5 !text-xl">
                                        <>
                                            🔥 BELI SEKARANG
                                            <svg className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </>
                                    </CTAButton>
                                </div>
                                <p className="mt-4 text-sm text-zinc-400">
                                    ⚡ File dikirim instan setelah pembelian
                                </p>
                            </div>

                            {/* Countdown */}
                            <div className="mt-10">
                                <p className="text-sm text-zinc-400 mb-3">Harga spesial berakhir dalam:</p>
                                <div className="inline-flex gap-3">
                                    {[
                                        { label: "Jam", value: pad(countdown.h) },
                                        { label: "Menit", value: pad(countdown.m) },
                                        { label: "Detik", value: pad(countdown.s) },
                                    ].map((t) => (
                                        <div key={t.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3 min-w-[70px]">
                                            <p className="text-2xl font-mono font-bold text-white">{t.value}</p>
                                            <p className="text-xs text-zinc-400 mt-0.5">{t.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
            <FloatingCTA />
        </div>
    );
}

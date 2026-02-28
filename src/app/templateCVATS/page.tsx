"use client";

import { useState, useEffect } from "react";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

const LYNK_URL = "https://lynk.id/camaradery/7lzj6qgvnqrg";
const ORIGINAL_PRICE = 99_000;
const SALE_PRICE = 49_000;
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
const rp = (n: number) => "Rp" + n.toLocaleString("id-ID");

/* ─── Data ─── */
const templateCategories = [
    { name: "Minimalis", count: 5, icon: "✨" },
    { name: "Modern", count: 5, icon: "🎨" },
    { name: "Profesional", count: 4, icon: "💼" },
    { name: "Kreatif", count: 3, icon: "🖌️" },
    { name: "Corporate", count: 3, icon: "🏢" },
    { name: "Fresh Graduate", count: 2, icon: "🎓" },
];

const features = [
    {
        icon: "🤖",
        title: "100% ATS-Friendly",
        desc: "Setiap template dirancang khusus agar lolos screening Applicant Tracking System. Format, font, dan struktur sudah dioptimasi.",
    },
    {
        icon: "📝",
        title: "20+ Variasi Desain",
        desc: "Dari minimalis hingga kreatif—pilih yang paling cocok dengan industri dan kepribadian Anda.",
    },
    {
        icon: "⚡",
        title: "Tinggal Edit & Kirim",
        desc: "Format Word/Docs siap edit. Ganti nama, pengalaman, skill—done! Langsung kirim ke HRD.",
    },
    {
        icon: "🎯",
        title: "Panduan Pengisian Lengkap",
        desc: "Setiap template dilengkapi tips menulis CV yang menarik. Jadi tahu apa yang harus ditulis di setiap bagian.",
    },
];

const painPoints = [
    "CV ditolak terus padahal pengalaman sudah oke",
    "Gak pernah dapat panggilan interview",
    "Bingung desain CV yang benar tuh kayak gimana",
    "CV dibikin asal-asalan pakai Canva gratisan",
    "Gak tau kalau CV bisa ditolak oleh robot (ATS)",
    "Udah apply ratusan lowongan tapi gak ada yang nyangkut",
];

const benefits = [
    {
        emoji: "📈",
        title: "Tingkatkan Peluang Interview 3x Lipat",
        desc: "CV ATS-Friendly langsung lolos filter otomatis dan sampai ke tangan HRD.",
    },
    {
        emoji: "⏱️",
        title: "Hemat Waktu Berjam-jam",
        desc: "Gak perlu desain dari nol. Tinggal isi data, 15 menit CV profesional jadi.",
    },
    {
        emoji: "💼",
        title: "Kesan Pertama yang Profesional",
        desc: "Desain yang rapi dan terstruktur bikin HRD langsung tertarik saat melihat CV Anda.",
    },
    {
        emoji: "🔄",
        title: "Versatile untuk Semua Industri",
        desc: "Dari tech, finance, marketing, hingga fresh grad—ada template yang pas untuk Anda.",
    },
];

const faqs = [
    {
        q: "Apa itu CV ATS-Friendly?",
        a: "ATS (Applicant Tracking System) adalah robot yang dipakai perusahaan untuk screening CV. CV ATS-Friendly artinya CV yang formatnya bisa dibaca dengan baik oleh robot tersebut, sehingga lamaran Anda tidak langsung ditolak otomatis.",
    },
    {
        q: "Produk ini berupa apa?",
        a: "Bundle 20+ file template CV dalam format Word/Google Docs yang bisa langsung Anda edit. Dikirim instan setelah pembelian.",
    },
    {
        q: "Apakah cocok untuk fresh graduate?",
        a: "Sangat cocok! Ada template khusus fresh graduate yang menonjolkan pendidikan, organisasi, dan skill meski belum punya banyak pengalaman kerja.",
    },
    {
        q: "Bisa diedit pakai apa?",
        a: "Bisa diedit pakai Microsoft Word atau Google Docs (gratis). Tinggal buka, edit isi, dan simpan sebagai PDF.",
    },
    {
        q: "Apakah ada panduan cara mengisinya?",
        a: "Ya! Setiap template dilengkapi panduan pengisian dan tips menulis CV yang menarik untuk HRD.",
    },
    {
        q: "Apakah ada biaya tambahan?",
        a: "Tidak ada! Sekali bayar, semua 20+ template jadi milik Anda selamanya. Update gratis jika ada template baru.",
    },
];

const testimonials = [
    {
        name: "Andi W.",
        role: "Software Engineer",
        text: "Sebelumnya saya apply 50+ lowongan gak ada panggilan. Setelah ganti pakai template ini, dalam 2 minggu dapat 4 panggilan interview!",
    },
    {
        name: "Sarah K.",
        role: "Fresh Graduate",
        text: "Sebagai fresh grad yang belum punya pengalaman, bingung banget bikin CV. Template ini bikin CV saya terlihat profesional dan langsung dapat kerja pertama!",
    },
    {
        name: "Rizal F.",
        role: "Marketing Manager",
        text: "Template-nya banyak pilihan dan semuanya keren. Yang paling penting, ATS-Friendly! Sekarang saya rekomendasiin ke semua teman yang lagi cari kerja.",
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
            id="cta-cv-primary"
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
                        🚀 DAPATKAN SEKARANG — {rp(SALE_PRICE)}
                        <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
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
                        <p className="text-white font-semibold text-sm">
                            20+ Template CV ATS-Friendly
                        </p>
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
                        🚀 Dapatkan Sekarang
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
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="px-6 pb-5 text-sm text-zinc-600 leading-relaxed">{a}</p>
            </div>
        </div>
    );
}

/* ─── Stats Counter ─── */
function StatNumber({ value, label }: { value: string; label: string }) {
    return (
        <div className="text-center">
            <p className="text-3xl font-extrabold text-white md:text-4xl">{value}</p>
            <p className="text-sm text-blue-200 mt-1">{label}</p>
        </div>
    );
}

/* ════════════════════════════════
   MAIN PAGE
   ════════════════════════════════ */
export default function TemplateCVATSPage() {
    const countdown = useCountdown();
    const pad = (n: number) => String(n).padStart(2, "0");

    return (
        <div className="min-h-screen bg-[#fafafa]">
            {/* ═══ STICKY URGENCY BAR ═══ */}
            <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white py-2.5 px-4 text-center sticky top-0 z-50">
                <p className="text-sm font-medium flex flex-wrap items-center justify-center gap-2">
                    <span className="animate-pulse">🚀</span>
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
                                    <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 mb-6">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
                                        </span>
                                        DISKON {DISCOUNT_PERCENT}% — Stok Terbatas!
                                    </div>

                                    <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                                        Masih Ditolak{" "}
                                        <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                                            Sebelum Interview?
                                        </span>{" "}
                                        CV Anda Mungkin Tidak Lolos ATS.
                                    </h1>

                                    <p className="mt-6 text-lg leading-relaxed text-zinc-600 md:text-xl">
                                        <strong className="text-zinc-900">75% perusahaan</strong> pakai robot ATS untuk filter CV.
                                        CV yang bagus tapi formatnya salah?{" "}
                                        <strong className="text-red-600">Auto-ditolak.</strong>{" "}
                                        Dapatkan <strong className="text-zinc-900">20+ template CV ATS-Friendly</strong> yang
                                        sudah terbukti lolos screening.
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
                                        ☝️ 20+ template — kurang dari Rp2.500 per template!
                                    </p>

                                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                                        <CTAButton size="lg" />
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
                                        {["Instan delivery", "Word & Docs", "Panduan lengkap"].map((t) => (
                                            <span key={t} className="flex items-center gap-1.5">
                                                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                {t}
                                            </span>
                                        ))}
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
                                            <span className="text-sm text-white/80 font-medium ml-2">
                                                20+ Template CV ATS-Friendly
                                            </span>
                                        </div>
                                        <img
                                            src="/templateCVATS/cv-grid.png"
                                            alt="20+ Template CV ATS-Friendly"
                                            className="w-full"
                                        />
                                    </div>
                                    {/* Floating badges */}
                                    <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg border border-zinc-200 px-5 py-3 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-xl">
                                            📄
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-zinc-900">20+ Template</p>
                                            <p className="text-xs text-blue-600 font-semibold">Siap Pakai</p>
                                        </div>
                                    </div>
                                    <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg border border-zinc-200 px-5 py-3 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-xl">
                                            🤖
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-zinc-900">ATS-Friendly</p>
                                            <p className="text-xs text-sky-600 font-semibold">Lolos Robot HR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ═══ STATS BAR ═══ */}
                <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 py-10">
                    <Container>
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            <StatNumber value="20+" label="Template Siap Pakai" />
                            <StatNumber value="6" label="Kategori Desain" />
                            <StatNumber value="100%" label="ATS-Compatible" />
                            <StatNumber value="∞" label="Akses Seumur Hidup" />
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
                                Cek dulu, apakah ini kamu?
                            </p>
                            <h2 className="text-3xl font-extrabold md:text-4xl">
                                Sudah Apply Puluhan Lowongan tapi Gak Ada Panggilan?
                            </h2>
                            <p className="mt-4 text-zinc-400 text-base">
                                Mungkin bukan skill kamu yang kurang — tapi CV kamu yang gak lolos filter robot.
                            </p>
                            <div className="mt-10 grid gap-4 md:grid-cols-2 text-left">
                                {painPoints.map((pain) => (
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
                                    Masalahnya bukan di skill Anda. Masalahnya di FORMAT CV Anda. 👇
                                </p>
                                <p className="text-zinc-400 text-sm">
                                    75% perusahaan pakai robot ATS. CV yang tidak ATS-Friendly = langsung masuk tong sampah digital.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ═══ WHAT IS ATS ═══ */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-14">
                                <p className="text-sm font-semibold tracking-wider text-blue-700 uppercase mb-3">
                                    Penting untuk dipahami
                                </p>
                                <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
                                    Apa Itu ATS & Kenapa CV Anda Ditolak?
                                </h2>
                            </div>

                            <div className="grid gap-8 md:grid-cols-2 items-center">
                                <div>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 shrink-0 rounded-xl bg-red-100 flex items-center justify-center text-red-600 font-bold text-lg">
                                                1
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-zinc-900">Anda kirim CV lewat job portal</h3>
                                                <p className="text-sm text-zinc-600 mt-1">
                                                    Jobstreet, LinkedIn, Glints, Kalibrr, dll.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 shrink-0 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-lg">
                                                2
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-zinc-900">Robot ATS scan CV Anda</h3>
                                                <p className="text-sm text-zinc-600 mt-1">
                                                    ATS membaca format, keyword, dan struktur CV secara otomatis.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 shrink-0 rounded-xl bg-red-100 flex items-center justify-center text-red-600 font-bold text-lg">
                                                ✗
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-red-700">Format salah? Auto-ditolak!</h3>
                                                <p className="text-sm text-zinc-600 mt-1">
                                                    CV dengan tabel, header/footer, gambar berlebihan, atau font aneh akan gagal di-scan ATS.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                                                ✓
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-blue-700">Format benar? Langsung ke HRD!</h3>
                                                <p className="text-sm text-zinc-600 mt-1">
                                                    CV ATS-Friendly lolos filter dan langsung dibaca oleh recruiter manusia.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-3xl border border-zinc-200 bg-white shadow-lg overflow-hidden">
                                    <img
                                        src="/templateCVATS/cv-single.png"
                                        alt="Contoh CV ATS-Friendly"
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ═══ FEATURES SECTION ═══ */}
                <section id="fitur" className="py-16 md:py-24">
                    <Container>
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <p className="text-sm font-semibold tracking-wider text-blue-700 uppercase mb-3">
                                Yang Anda Dapatkan
                            </p>
                            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
                                Kenapa Bundle Ini <span className="text-blue-600">Wajib</span> Dimiliki?
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

                {/* ═══ TEMPLATE CATEGORIES ═══ */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-zinc-50 to-white">
                    <Container>
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <p className="text-sm font-semibold tracking-wider text-blue-700 uppercase mb-3">
                                Kategori Template
                            </p>
                            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
                                20+ Template untuk Berbagai Kebutuhan
                            </h2>
                            <p className="mt-4 text-zinc-600">
                                Dari fresh graduate hingga level manajerial — ada template yang pas untuk Anda.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {templateCategories.map((cat) => (
                                <div
                                    key={cat.name}
                                    className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl shrink-0">
                                        {cat.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-zinc-900">{cat.name}</h3>
                                        <p className="text-sm text-zinc-500">{cat.count} template</p>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                                            ATS ✓
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mid CTA */}
                        <div className="mt-14 text-center">
                            <CTAButton size="lg" />
                            <p className="mt-3 text-sm text-zinc-500">⚡ Akses instan — langsung download semua template</p>
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
                                Apa yang Akan Berubah Setelah Pakai Template Ini?
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
                                Mereka Sudah Dapat Panggilan Interview
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
                                CV Biasa vs CV ATS-Friendly
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
                            <div className="rounded-3xl border border-red-200 bg-red-50/50 p-7">
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600 font-bold">
                                        ✗
                                    </div>
                                    <h3 className="font-bold text-red-800">CV Biasa</h3>
                                </div>
                                <ul className="space-y-3 text-sm text-red-700">
                                    {[
                                        "Desain dari Canva: cantik tapi ditolak ATS",
                                        "Pakai tabel & kolom: gagal di-scan robot",
                                        "Font dekoratif: tidak terbaca sistem",
                                        "Tidak ada keyword optimization",
                                        "Apply 100 lowongan, 0 panggilan",
                                    ].map((item) => (
                                        <li key={item} className="flex gap-2 items-start">
                                            <span className="mt-0.5">❌</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-3xl border-2 border-blue-400 bg-blue-50/50 p-7 relative">
                                <div className="absolute -top-3 right-5 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    RECOMMENDED
                                </div>
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                        ✓
                                    </div>
                                    <h3 className="font-bold text-blue-800">CV ATS-Friendly (Template Ini)</h3>
                                </div>
                                <ul className="space-y-3 text-sm text-blue-700">
                                    {[
                                        "Format clean & lolos screening ATS",
                                        "Struktur yang dioptimasi untuk robot HR",
                                        "Font profesional yang ATS-compatible",
                                        "Tips keyword untuk setiap industri",
                                        "Apply & langsung dapat panggilan interview",
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
                                Jangan Biarkan CV yang Salah Format{" "}
                                <span className="text-blue-400">Menghancurkan</span> Karir Impian Anda
                            </h2>

                            <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
                                Ribuan orang kehilangan kesempatan kerja impian hanya karena CV mereka ditolak robot.
                                Dengan{" "}
                                <strong className="text-white">{rp(SALE_PRICE)}</strong>, pastikan CV Anda selalu lolos filter.
                            </p>

                            {/* Big price */}
                            <div className="mt-10 inline-flex flex-col items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl px-10 py-8">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-5xl font-extrabold text-white md:text-6xl">
                                        {rp(SALE_PRICE)}
                                    </span>
                                    <span className="text-2xl text-zinc-500 line-through">{rp(ORIGINAL_PRICE)}</span>
                                </div>
                                <p className="text-blue-400 font-semibold mt-2">
                                    20+ template • Sekali bayar • Seumur hidup
                                </p>
                                <p className="text-sm text-zinc-400 mt-1">
                                    Kurang dari Rp2.500 per template!
                                </p>
                                <div className="mt-6">
                                    <CTAButton size="lg" className="!px-14 !py-5 !text-xl">
                                        <>
                                            🚀 DAPATKAN SEKARANG
                                            <svg
                                                className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2.5}
                                            >
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
                                        <div
                                            key={t.label}
                                            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3 min-w-[70px]"
                                        >
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

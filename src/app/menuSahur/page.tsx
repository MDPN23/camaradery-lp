"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import LynkAppFloat from "@/components/LynkAppFloat";
import Container from "@/components/Container";
import { site } from "@/lib/site";

export default function Page() {
    return (
        <div className="min-h-screen">
            <Header />
            <main >
                <Hero />

                <Section id="contents" eyebrow="Yang kamu dapat" title="Isi paket yang jelas, nggak abu-abu." align="center">
                    <Container>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-zinc-200 p-6 shadow-softer">
                                <p className="text-sm text-zinc-600">
                                    Ringkas tapi lengkap. Cocok buat yang butuh sistem, bukan sekadar file.
                                </p>
                                <ul className="mt-5 space-y-3 text-sm">
                                    {site.contents.map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                                            <span className="text-zinc-800">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-zinc-200 p-6 shadow-softer">
                                <p className="text-sm text-zinc-600">
                                    Cara pakai yang sat set. Nggak bikin kamu mikir keras.
                                </p>
                                <ol className="mt-5 space-y-4">
                                    {site.steps.map((s, idx) => (
                                        <li key={s.title} className="flex gap-4">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-semibold text-emerald-700">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-zinc-900">{s.title}</p>
                                                <p className="text-sm text-zinc-600">{s.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </Container>
                </Section>

                <Section id="faq" eyebrow="Pertanyaan yang sering muncul" title="Biar Sebelum Nanya, Udah Kebayang Nih." align="center">
                    <FAQ />
                </Section>

                <Section
                    id="cta"
                    eyebrow="Siap mulai?"
                    title="Buka Camaradery pada lynk.id dan pilih paket yang paling cocok."
                >
                    <Container>
                        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-b from-white to-emerald-50 p-8 shadow-soft md:p-10">
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-emerald-700">Ramadan mode: on</p>
                                    <p className="mt-2 text-sm text-zinc-700">
                                        Minimalis, rapi, dan gampang dipakai. Biar kamu konsisten.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <a
                                        href={site.lynkUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-700"
                                    >
                                        {site.ctaPrimary}
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

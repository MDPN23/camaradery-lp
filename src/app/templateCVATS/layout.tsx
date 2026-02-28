import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "20+ Template CV ATS-Friendly Profesional 2026 | Camaradery",
    description:
        "Dapatkan 20+ template CV ATS-Friendly siap pakai! Desain profesional, lolos screening ATS, mudah diedit. Tingkatkan peluang diterima kerja impianmu sekarang!",
    openGraph: {
        title: "20+ Template CV ATS-Friendly Profesional 2026",
        description:
            "Template CV yang lolos screening ATS. 20+ desain profesional, siap pakai, mudah diedit. Investasi karir terbaik Anda!",
        images: [{ url: "/templateCVATS/cv-grid.png", width: 1200, height: 630 }],
        locale: "id_ID",
        type: "website",
    },
};

export default function TemplateCVATSLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <>{children}</>;
}

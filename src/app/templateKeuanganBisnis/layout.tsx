import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Template Keuangan Bisnis Digital Profesional 2026 | Camaradery",
    description:
        "Kelola keuangan bisnis UMKM-mu secara profesional dengan template spreadsheet siap pakai. Dashboard visual, pencatatan otomatis, hitung pajak auto. Hanya Rp79.000 sekali bayar seumur hidup!",
    openGraph: {
        title: "Template Keuangan Bisnis Digital Profesional 2026",
        description:
            "Asisten keuangan digital UMKM. Dashboard visual, pencatatan otomatis, hitung pajak auto. Sekali bayar, seumur hidup!",
        images: [{ url: "/dashboard-preview.png", width: 1200, height: 630 }],
        locale: "id_ID",
        type: "website",
    },
};

export default function TemplateKeuanganLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <>{children}</>;
}

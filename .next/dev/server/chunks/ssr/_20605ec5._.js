module.exports = [
"[project]/src/lib/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "site",
    ()=>site
]);
const site = {
    brand: "Camaradery",
    tagline: "Partner Kebutuhan Digital Anda",
    description: "Camaradery menyediakan berbagai produk digital berkualitas — template, tools, dan resource siap pakai untuk kebutuhan bisnis, karir, dan produktivitas Anda.",
    domain: "https://camaradery.vercel.app",
    // Link lynk.id utama
    lynkUrl: "https://lynk.id/camaradery",
    // CTA label
    ctaPrimary: "Lihat Semua Produk",
    // Highlights (used by ValueCards component)
    highlights: [
        {
            title: "Siap pakai",
            desc: "Format rapi dan tinggal isi. Cocok buat yang pengin sat set tanpa ribet."
        },
        {
            title: "Hemat waktu",
            desc: "Biar waktumu kepake buat ibadah, kerja, dan keluarga—bukan beresin file."
        },
        {
            title: "Bonus template",
            desc: "Dapat tambahan template yang bikin workflow Ramadan kamu makin teratur."
        },
        {
            title: "Mobile-friendly",
            desc: "Nyaman dipakai di HP maupun laptop. Akses kapan pun."
        }
    ],
    // Konten Ramadhan Tracker (dipakai di halaman /ramadhanTracker)
    contents: [
        "Template pengisian sudah melakukan puasa",
        "Template checklist sholat lima waktu",
        "Template sudah membaca al-quran",
        "Template jika sudah melakukan shodaqoh",
        "Template jika sudah melakukan sholat tarawih"
    ],
    steps: [
        {
            title: "Klik lynk.id",
            desc: "Buka halaman produk lewat tombol utama."
        },
        {
            title: "Pilih produk",
            desc: "Pilih paket yang kamu butuhin, lalu ikuti instruksinya."
        },
        {
            title: "Akses & pakai",
            desc: "File langsung bisa dipakai berbentuk pdf."
        }
    ],
    faqs: [
        {
            q: "Produk ini dapat apa saja?",
            a: "Kamu akan mendapatkan paket file digital sesuai deskripsi produk di lynk.id."
        },
        {
            q: "Cara akses setelah beli gimana?",
            a: "Ikuti instruksi di lynk.id."
        },
        {
            q: "Ada Paket bisa bundle dengan paket yang lain?",
            a: "Tergantung paket. ada beberapa paket yang bundle dengan paket ramadhan lainnya."
        }
    ]
};
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    metadataBase: new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].domain),
    title: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].brand,
        template: `%s | ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].brand}`
    },
    description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].description,
    openGraph: {
        title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].brand,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].description,
        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].domain,
        siteName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].brand,
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630
            }
        ],
        locale: "id_ID",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].brand,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].description,
        images: [
            "/og.png"
        ]
    },
    icons: {
        icon: "/favicon.ico"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "id",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_20605ec5._.js.map
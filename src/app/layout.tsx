import type { Metadata } from "next";

import "@/app/globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: site.brand,
    template: `%s | ${site.brand}`
  },
  description: site.description,
  openGraph: {
    title: site.brand,
    description: site.description,
    url: site.domain,
    siteName: site.brand,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "id_ID",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.brand,
    description: site.description,
    images: ["/og.png"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}


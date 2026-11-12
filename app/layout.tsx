import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NID Help Nepal | राष्ट्रिय परिचयपत्र मार्गदर्शन",
    template: "%s | NID Help Nepal"
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "government services information",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  alternates: {
    languages: { ne: "/ne", en: "/en", "x-default": "/ne" }
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "NID Help Nepal — राष्ट्रिय परिचयपत्र बुझ्न सजिलो",
    description: SITE_DESCRIPTION,
    locale: "ne_NP",
    alternateLocale: ["en_US"]
  },
  twitter: {
    card: "summary_large_image",
    title: "NID Help Nepal",
    description: SITE_DESCRIPTION
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#123d3a"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ne">
      <body>{children}</body>
    </html>
  );
}
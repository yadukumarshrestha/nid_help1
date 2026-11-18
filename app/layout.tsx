import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const nepali = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-nepali", display: "swap" });

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
    languages: { ne: "/ne", en: "/en", "x-default": "/en" }
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "NID Help Nepal — राष्ट्रिय परिचयपत्र बुझ्न सजिलो",
    description: SITE_DESCRIPTION,
    locale: "en_US",
    alternateLocale: ["ne_NP"]
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
    <html lang="en">
      <body className={`${manrope.variable} ${nepali.variable}`}>{children}</body>
    </html>
  );
}
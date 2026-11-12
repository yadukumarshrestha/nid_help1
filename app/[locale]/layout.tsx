import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { isLocale } from "@/lib/site";

export function generateStaticParams() {
  return [{ locale: "ne" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <div data-locale={locale} lang={locale}>{children}</div>;
}
import Link from "next/link";
import { ArrowUpRight, Menu, ShieldCheck } from "lucide-react";
import type { Locale } from "@/content/data";
import { navLabels } from "@/content/data";

type HeaderProps = { locale: Locale; currentPath?: string };

export default function Header({ locale, currentPath = "" }: HeaderProps) {
  const otherLocale = locale === "ne" ? "en" : "ne";
  const languageLabel = locale === "ne" ? "EN" : "नेपाली";
  const prefix = "/" + locale;
  const alternateHref = "/" + otherLocale + (currentPath ? "/" + currentPath : "");

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href={prefix} aria-label="NID Help Nepal home">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span className="brand-copy"><strong>NID Help</strong><small>NEPAL · नागरिक साथी</small></span>
        </Link>

        <nav className="desktop-nav" aria-label={locale === "ne" ? "मुख्य नेभिगेसन" : "Main navigation"}>
          {navLabels[locale].map((item) => (
            <Link key={item.slug} href={prefix + "/" + item.slug} className={currentPath === item.slug ? "nav-link active" : "nav-link"}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="header-language" href={alternateHref} aria-label={locale === "ne" ? "Switch to English" : "नेपालीमा बदल्नुहोस्"}>{languageLabel}</Link>
          <Link className="header-cta" href={prefix + "/status"}>
            {locale === "ne" ? "Status जाँच" : "Check status"}<ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <details className="mobile-nav">
          <summary aria-label={locale === "ne" ? "मेनु खोल्नुहोस्" : "Open menu"}><Menu size={22} /></summary>
          <div className="mobile-nav-panel">
            {navLabels[locale].map((item) => <Link key={item.slug} href={prefix + "/" + item.slug}>{item.label}</Link>)}
            <Link href={prefix + "/contact"}>{locale === "ne" ? "सम्पर्क" : "Contact"}</Link>
            <Link href={alternateHref}>{locale === "ne" ? "English" : "नेपाली"}</Link>
            <Link className="mobile-status" href={prefix + "/status"}>{locale === "ne" ? "Status जाँच" : "Check status"}</Link>
          </div>
        </details>
      </div>
      <div className="trust-strip">
        <div className="shell trust-strip-inner">
          <ShieldCheck size={14} aria-hidden="true" />
          <span>{locale === "ne" ? "स्वतन्त्र मार्गदर्शन · सरकारी सेवा होइन · आधिकारिक लिंक मात्र" : "Independent guide · Not a government service · Official links only"}</span>
        </div>
      </div>
    </header>
  );
}
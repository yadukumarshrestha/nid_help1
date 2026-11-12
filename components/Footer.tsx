import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import type { Locale } from "@/content/data";
import { OFFICIAL } from "@/lib/site";

export default function Footer({ locale }: { locale: Locale }) {
  const ne = locale === "ne";
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <div className="brand brand-in-footer"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span className="brand-copy"><strong>NID Help</strong><small>NEPAL · नागरिक साथी</small></span></div>
          <p>{ne ? "राष्ट्रिय परिचयपत्रसम्बन्धी प्रक्रिया बुझ्न नागरिकलाई सहयोग गर्ने स्वतन्त्र मार्गदर्शन।" : "An independent guide helping citizens understand Nepal's National Identity Card process."}</p>
          <div className="footer-disclaimer"><ShieldCheck size={16} /><span>{ne ? "सरकारी वेबसाइट होइन। कुनै व्यक्तिगत विवरण संकलन गरिँदैन।" : "Not a government website. No personal data is collected."}</span></div>
        </div>
        <div className="footer-column">
          <h3>{ne ? "मार्गदर्शन" : "Guides"}</h3>
          <Link href={"/" + locale + "/documents"}>{ne ? "आवश्यक कागजात" : "Required documents"}</Link>
          <Link href={"/" + locale + "/how-to-apply"}>{ne ? "आवेदन प्रक्रिया" : "How to apply"}</Link>
          <Link href={"/" + locale + "/status"}>{ne ? "आवेदन अवस्था" : "Application status"}</Link>
          <Link href={"/" + locale + "/faq"}>FAQ</Link>
        </div>
        <div className="footer-column">
          <h3>{ne ? "हामीबारे" : "About"}</h3>
          <Link href={"/" + locale + "/about"}>{ne ? "NID Help के हो?" : "About NID Help"}</Link>
          <Link href={"/" + locale + "/contact"}>{ne ? "आधिकारिक सहायता" : "Official support"}</Link>
          <a href={OFFICIAL.department} target="_blank" rel="noopener noreferrer">{ne ? "DoNIDCR वेबसाइट" : "DoNIDCR website"} <ArrowUpRight size={13} /></a>
        </div>
        <div className="footer-column footer-source">
          <h3>{ne ? "सरकारी सेवा" : "Government services"}</h3>
          <a href={ne ? OFFICIAL.citizenNe : OFFICIAL.citizenEn} target="_blank" rel="noopener noreferrer">Citizen Portal <ArrowUpRight size={13} /></a>
          <a href={OFFICIAL.enrolment} target="_blank" rel="noopener noreferrer">{ne ? "अनलाइन आवेदन" : "Online enrolment"} <ArrowUpRight size={13} /></a>
          <a href={OFFICIAL.faq} target="_blank" rel="noopener noreferrer">{ne ? "आधिकारिक FAQ" : "Official FAQ"} <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} NID Help Nepal</span>
        <span>{ne ? "स्रोत जाँच: १२ नोभेम्बर २०२६" : "Sources reviewed: 12 November 2026"}</span>
        <span>{ne ? "जानकारी परिवर्तन हुन सक्छ; सरकारी स्रोत नै अन्तिम आधार हो।" : "Information can change; government sources are authoritative."}</span>
      </div>
    </footer>
  );
}
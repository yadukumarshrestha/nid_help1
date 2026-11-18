import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/content/data";
import { OFFICIAL } from "@/lib/site";

export default function Footer({ locale }: { locale: Locale }) {
  const ne = locale === "ne";
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <div className="brand brand-in-footer"><span className="brand-mark" aria-hidden="true"><span>N</span></span><span className="brand-copy"><strong>NID Help</strong><small>NEPAL</small></span></div>
          <p>{ne ? "राष्ट्रिय परिचयपत्रसम्बन्धी प्रक्रिया बुझ्न तयार पारिएको स्वतन्त्र जानकारीमूलक वेबसाइट।" : "An independent website explaining Nepal's National Identity Card process."}</p>
          <p className="footer-disclaimer">{ne ? "यो सरकारी वेबसाइट होइन। आवेदन, भुक्तानी वा अभिलेख जाँच यहाँ हुँदैन।" : "Not a government website. Applications, payments and record checks are handled by the department."}</p>
        </div>
        <div className="footer-column">
          <h3>{ne ? "मार्गदर्शन" : "Guides"}</h3>
          <Link href={"/" + locale + "/pre-enrolment"}>{ne ? "पहिलो पटक दर्ता" : "First-time enrolment"}</Link>
          <Link href={"/" + locale + "/documents"}>{ne ? "आवश्यक कागजात" : "Required documents"}</Link>
          <Link href={"/" + locale + "/status"}>{ne ? "आवेदन जाँच" : "Check application"}</Link>
          <Link href={"/" + locale + "/faq"}>FAQ</Link>
        </div>
        <div className="footer-column">
          <h3>{ne ? "आधिकारिक स्रोत" : "Official sources"}</h3>
          <a href={OFFICIAL.department} target="_blank" rel="noopener noreferrer">DoNIDCR <ArrowUpRight size={13} /></a>
          <a href={ne ? OFFICIAL.citizenNe : OFFICIAL.citizenEn} target="_blank" rel="noopener noreferrer">Citizen Portal <ArrowUpRight size={13} /></a>
          <a href={OFFICIAL.faq} target="_blank" rel="noopener noreferrer">{ne ? "विभागको FAQ" : "Department FAQ"} <ArrowUpRight size={13} /></a>
          <Link href={"/" + locale + "/about"}>{ne ? "हाम्रोबारे" : "About this site"}</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} NID Help Nepal</span>
        <span>{ne ? "सरकारी जानकारी परिवर्तन हुन सक्छ। पछिल्लो निर्देशन विभागबाट पुष्टि गर्नुहोस्।" : "Government procedures can change. Confirm current instructions with the department."}</span>
      </div>
    </footer>
  );
}

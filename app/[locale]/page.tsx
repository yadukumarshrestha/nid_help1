import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TaskFinder from "@/components/TaskFinder";
import { homeCopy, faqs, type Locale } from "@/content/data";
import { OFFICIAL, isLocale, SITE_URL } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const ne = locale === "ne";
  return {
    title: ne ? "राष्ट्रिय परिचयपत्रसम्बन्धी जानकारी | NID Help Nepal" : "Nepal National ID Guide | NID Help Nepal",
    description: ne
      ? "राष्ट्रिय परिचयपत्रको आवेदन, कागजात, अवस्था जाँच र eNID सम्बन्धी सरल जानकारी।"
      : "Practical information about Nepal's National ID application, documents, status checks and eNID.",
    alternates: {
      canonical: SITE_URL + "/" + locale,
      languages: { ne: SITE_URL + "/ne", en: SITE_URL + "/en", "x-default": SITE_URL + "/en" }
    }
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const ne = locale === "ne";
  const copy = homeCopy[locale];
  const faqPreview = faqs[locale].slice(0, 3);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NID Help Nepal",
    url: SITE_URL,
    description: ne ? "राष्ट्रिय परिचयपत्रबारे स्वतन्त्र नागरिक जानकारी।" : "Independent information about Nepal's National Identity Card."
  };

  return (
    <>
      <Header locale={locale} />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <section className="shell hero">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">{copy.eyebrow}</div>
            <h1>{copy.title}<span>{copy.titleAccent}</span></h1>
            <p className="hero-description">{copy.description}</p>
            <div className="hero-buttons">
              <a className="button button-primary" href="#task-finder">{copy.primaryCta}<ArrowRight size={17} /></a>
              <a className="button button-outline" href={ne ? OFFICIAL.citizenNe : OFFICIAL.citizenEn} target="_blank" rel="noopener noreferrer">{copy.secondaryCta}<ArrowUpRight size={16} /></a>
            </div>
            <p className="hero-privacy"><ShieldCheck size={15} />{copy.privacy}</p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="nid-visual">
              <div className="nid-visual-top"><span>NATIONAL IDENTITY</span><span className="nid-visual-mark">NEPAL</span></div>
              <div className="nid-visual-body">
                <div className="nid-visual-photo"><span /></div>
                <div className="nid-visual-lines"><i /><i /><i /><i /></div>
              </div>
              <div className="nid-visual-bottom"><span>राष्ट्रिय परिचयपत्र</span><span>•••• •••• ••••</span></div>
            </div>
            <div className="hero-art-caption">{ne ? "कागजात • प्रक्रिया • आधिकारिक लिंक" : "Documents · Steps · Official links"}</div>
          </div>
        </section>

        <section className="shell section finder-section" id="task-finder">
          <div className="section-heading">
            <div><span className="section-kicker">{ne ? "आफ्नो काम छान्नुहोस्" : "START HERE"}</span><h2>{copy.finderTitle}</h2></div>
            <p>{copy.finderText}</p>
          </div>
          <TaskFinder locale={locale} />
        </section>

        <section className="shell home-faq-row">
          <div className="home-faq-heading">
            <span className="section-kicker">{ne ? "सामान्य जिज्ञासा" : "COMMON QUESTIONS"}</span>
            <h2>{copy.faqTitle}</h2>
          </div>
          <div className="home-faq-links">
            {faqPreview.map((item) => (
              <Link href={"/" + locale + "/faq"} key={item.question}>{item.question}<ArrowUpRight size={15} /></Link>
            ))}
            <Link className="all-faq-link" href={"/" + locale + "/faq"}>{copy.faqButton}<ArrowRight size={15} /></Link>
          </div>
        </section>
        <div className="shell home-disclaimer"><ShieldCheck size={17} /><p>{copy.noteText}</p></div>
      </main>
      <Footer locale={locale} />
    </>
  );
}

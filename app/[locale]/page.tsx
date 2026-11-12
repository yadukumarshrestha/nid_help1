import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpenCheck, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TaskFinder from "@/components/TaskFinder";
import { homeCopy, taskCards, faqs, type Locale } from "@/content/data";
import { OFFICIAL, isLocale, SITE_URL } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const ne = locale === "ne";
  return {
    title: ne ? "राष्ट्रिय परिचयपत्र कसरी बनाउने? | NID Help Nepal" : "Nepal National ID Guide: Apply, Check Status & eNID",
    description: ne
      ? "राष्ट्रिय परिचयपत्रको आवेदन, आवश्यक कागजात, status, eNID र प्रतिलिपिबारे सजिलो नेपाली मार्गदर्शन।"
      : "A clear guide to Nepal's National ID process, required documents, application status, eNID and card replacement.",
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
  const cards = taskCards[locale];
  const faqPreview = faqs[locale].slice(0, 3);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NID Help Nepal",
    url: SITE_URL,
    description: ne ? "राष्ट्रिय परिचयपत्रबारे स्वतन्त्र नागरिक मार्गदर्शन।" : "Independent citizen guidance for Nepal's National Identity Card."
  };

  return (
    <>
      <Header locale={locale} />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <section className="shell hero">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow"><span className="eyebrow-dot" />{copy.eyebrow}</div>
            <h1>{copy.title}<span>{copy.titleAccent}</span></h1>
            <p className="hero-description">{copy.description}</p>
            <div className="hero-buttons">
              <a className="button button-primary" href="#task-finder">{copy.primaryCta}<ArrowRight size={17} /></a>
              <a className="button button-outline" href={ne ? OFFICIAL.citizenNe : OFFICIAL.citizenEn} target="_blank" rel="noopener noreferrer">{copy.secondaryCta}<ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-privacy"><ShieldCheck size={15} />{copy.privacy}</div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit" /><span className="art-spark spark-one" /><span className="art-spark spark-two" />
            <div className="art-card">
              <div className="art-card-top"><span>NID HELP / {ne ? "मार्गदर्शन" : "GUIDE"}</span><span className="art-card-seal"><BookOpenCheck size={17} /></span></div>
              <div className="art-card-title">{ne ? "सही जानकारी।" : "The right info."}<br />{ne ? "सही अर्को कदम।" : "Your next step."}</div>
              <div className="art-card-subtitle">{ne ? "तपाईंको NID यात्रा स्पष्ट बनाऔँ।" : "Make your NID journey easier."}</div>
              <div className="art-card-rule" />
              <div className="art-card-steps">
                <div className="art-step"><span className="art-step-num">01</span>{ne ? "आफ्नो काम छान्नुहोस्" : "Choose your task"}</div>
                <div className="art-step"><span className="art-step-num">02</span>{ne ? "कागजात तयार गर्नुहोस्" : "Prepare documents"}</div>
                <div className="art-step"><span className="art-step-num">03</span>{ne ? "सरकारी पोर्टलमा जानुहोस्" : "Continue officially"}</div>
              </div>
              <div className="art-card-bottom"><span><i className="art-status" />{ne ? "स्वतन्त्र मार्गदर्शन" : "Independent guide"}</span><span>NE / EN</span></div>
            </div>
          </div>
        </section>

        <section className="shell section" id="task-finder">
          <div className="section-heading"><div><span className="section-kicker">{copy.finderEyebrow}</span><h2>{copy.finderTitle}</h2></div><p>{copy.finderText}</p></div>
          <TaskFinder locale={locale} />
        </section>

        <section className="shell section">
          <div className="section-heading"><div><span className="section-kicker">{ne ? "सेवा मार्गदर्शन" : "TASK GUIDES"}</span><h2>{copy.taskTitle}</h2></div><p>{copy.taskText}</p></div>
          <div className="quick-grid">
            {cards.map((card) => (
              <Link className="quick-card" href={"/" + locale + "/" + card.slug} key={card.slug}>
                <div className="quick-card-top"><span className="quick-tag">{card.tag}</span><ArrowUpRight size={19} className="quick-arrow" /></div>
                <h3>{card.title}</h3><p>{card.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="shell section">
          <div className="process-panel">
            <div className="process-intro"><span className="section-kicker">{copy.processEyebrow}</span><h2>{copy.processTitle}</h2><p>{copy.processText}</p></div>
            <div className="process-steps">
              {copy.process.map((step) => <div className="process-step" key={step[0]}><span className="process-num">{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></div>)}
            </div>
          </div>
        </section>

        <section className="shell official-band">
          <div className="official-band-copy"><h2>{copy.officialTitle}</h2><p>{copy.officialText}</p></div>
          <a className="button button-primary" href={ne ? OFFICIAL.citizenNe : OFFICIAL.citizenEn} target="_blank" rel="noopener noreferrer">{copy.officialButton}<ArrowUpRight size={16} /></a>
        </section>

        <section className="shell home-faq-row">
          <div><h2>{copy.faqTitle}</h2><p>{faqPreview.map((item) => item.question).join(" · ")}</p></div>
          <Link className="button button-dark" href={"/" + locale + "/faq"}>{copy.faqButton}<ArrowRight size={16} /></Link>
        </section>
        <div className="shell source-note"><ShieldCheck size={16} /><span>{copy.noteTitle}: {copy.noteText} {ne ? "जानकारीको स्रोत: DoNIDCR को आधिकारिक FAQ र Citizen Portal।" : "Sources: official DoNIDCR FAQ and Citizen Portal."}</span></div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink, FileCheck2, LifeBuoy, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSearch from "@/components/FAQSearch";
import DocumentChecklist from "@/components/DocumentChecklist";
import JourneyChecklist from "@/components/JourneyChecklist";
import OfficialServiceCard from "@/components/OfficialServiceCard";
import { faqs, guides, navLabels, type GuideSlug, type Locale } from "@/content/data";
import { CONTENT_REVIEWED, isLocale, OFFICIAL, SITE_URL } from "@/lib/site";

const slugs: GuideSlug[] = [
  "documents",
  "pre-enrolment",
  "how-to-apply",
  "status",
  "enid",
  "duplicate",
  "correction",
  "faq",
  "contact",
  "about"
];

export function generateStaticParams() {
  return (["ne", "en"] as Locale[]).flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale) || !slugs.includes(slug as GuideSlug)) return {};

  const locale = rawLocale;
  const guide = guides[locale][slug as GuideSlug];
  const canonical = SITE_URL + "/" + locale + "/" + slug;

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical,
      languages: {
        ne: SITE_URL + "/ne/" + slug,
        en: SITE_URL + "/en/" + slug,
        "x-default": SITE_URL + "/en/" + slug
      }
    },
    openGraph: {
      title: guide.title + " | NID Help Nepal",
      description: guide.description,
      url: canonical,
      siteName: "NID Help Nepal",
      locale: locale === "ne" ? "ne_NP" : "en_US",
      type: "article"
    }
  };
}

export default async function GuidePage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug: rawSlug } = await params;
  if (!isLocale(rawLocale) || !slugs.includes(rawSlug as GuideSlug)) notFound();

  const locale: Locale = rawLocale;
  const slug = rawSlug as GuideSlug;
  const ne = locale === "ne";
  const guide = guides[locale][slug];
  const faqItems = faqs[locale];
  const related = navLabels[locale];

  const schema = slug === "faq"
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer }
        }))
      }
    : null;

  return (
    <>
      <Header locale={locale} currentPath={slug} />
      <main>
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, "\\u003c")
            }}
          />
        )}

        <section className="shell page-hero">
          <div className="breadcrumb">
            <Link href={"/" + locale}>{ne ? "गृहपृष्ठ" : "Home"}</Link>
            <span>/</span>
            <span>{guide.eyebrow}</span>
          </div>
          <span className="section-kicker">{guide.eyebrow}</span>
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
        </section>

        <div className="shell guide-layout">
          <article className="guide-content">
            <section className="answer-card">
              <span className="answer-label">
                {ne ? "छोटोमा" : "IN SHORT"}
              </span>
              <h2>{guide.answerTitle}</h2>
              <p>{guide.answer}</p>
            </section>

            <OfficialServiceCard
              locale={locale}
              slug={slug}
              href={guide.officialUrl}
            />

            {slug === "documents" && <DocumentChecklist locale={locale} />}

            {slug !== "documents" &&
              slug !== "faq" &&
              slug !== "contact" &&
              slug !== "about" && (
                <JourneyChecklist locale={locale} slug={slug} />
              )}

            {slug === "faq" && (
              <FAQSearch items={faqItems} locale={locale} />
            )}

            {guide.sections.map((section) => (
              <section className="guide-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.body && <p>{section.body}</p>}
                {section.items && (
                  <ul>
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}

            {guide.reminder && (
              <div className="guide-note">
                <strong>{ne ? "ध्यान दिनुहोस्: " : "Please note: "}</strong>
                {guide.reminder}
              </div>
            )}

            <div className="source-note">
              <ShieldCheck size={17} />
              <span>
                {ne
                  ? "यो पृष्ठ DoNIDCR को सार्वजनिक जानकारीका आधारमा तयार गरिएको हो। अन्तिम निर्देशनका लागि सरकारी स्रोत नै हेर्नुहोस्।"
                  : "This page is based on public DoNIDCR information. Always rely on the government source for final instructions."}
              </span>
            </div>
          </article>

          <aside className="guide-sidebar">
            <div className="sidebar-card">
              <h3>{ne ? "सम्बन्धित पेज" : "Related pages"}</h3>
              <div className="sidebar-links">
                {related.filter((item) => item.slug !== slug).slice(0, 4).map((item) => (
                  <Link key={item.slug} href={"/" + locale + "/" + item.slug}>{item.label}<ArrowRight size={14} /></Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}

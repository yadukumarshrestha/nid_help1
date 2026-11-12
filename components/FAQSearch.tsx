"use client";

import { useMemo, useState } from "react";
import { Search, ChevronDown } from "lucide-react";

type FAQItem = { question: string; answer: string };

export default function FAQSearch({ items, locale }: { items: FAQItem[]; locale: "ne" | "en" }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    if (!term) return items;
    return items.filter((item) => (item.question + " " + item.answer).toLocaleLowerCase().includes(term));
  }, [items, query]);

  return (
    <div className="faq-search-wrap">
      <label className="search-field">
        <Search size={19} aria-hidden="true" />
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={locale === "ne" ? "प्रश्न वा शब्द खोज्नुहोस्..." : "Search a question or keyword..."} aria-label={locale === "ne" ? "FAQ खोज्नुहोस्" : "Search FAQs"} />
        {query && <button type="button" onClick={() => setQuery("")}>{locale === "ne" ? "हटाउनुहोस्" : "Clear"}</button>}
      </label>
      <p className="search-count" aria-live="polite">{locale === "ne" ? filtered.length + " प्रश्न भेटिए" : filtered.length + " questions found"}</p>
      <div className="faq-list">
        {filtered.map((item, index) => (
          <details className="faq-item" key={item.question}>
            <summary><span className="faq-index">{String(index + 1).padStart(2, "0")}</span><strong>{item.question}</strong><ChevronDown size={18} className="faq-chevron" aria-hidden="true" /></summary>
            <div className="faq-answer"><p>{item.answer}</p></div>
          </details>
        ))}
        {filtered.length === 0 && <div className="empty-state"><strong>{locale === "ne" ? "प्रश्न भेटिएन" : "No matching question"}</strong><p>{locale === "ne" ? "अर्को शब्द प्रयोग गर्नुहोस् वा आधिकारिक FAQ खोल्नुहोस्।" : "Try another keyword or open the official FAQ."}</p></div>}
      </div>
    </div>
  );
}
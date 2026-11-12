"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import type { Locale } from "@/content/data";
import { finderOptions } from "@/content/data";

export default function TaskFinder({ locale }: { locale: Locale }) {
  const options = finderOptions[locale];
  const [selected, setSelected] = useState("");
  const active = options.find((option) => option.id === selected);

  return (
    <div className="task-finder">
      <div className="finder-options">
        {options.map((option, index) => (
          <button className={selected === option.id ? "finder-option selected" : "finder-option"} type="button" key={option.id} onClick={() => setSelected(option.id)} aria-pressed={selected === option.id}>
            <span className="finder-number">0{index + 1}</span>
            <span className="finder-option-copy"><strong>{option.label}</strong><small>{option.description}</small></span>
            <ChevronRight className="finder-chevron" size={19} />
          </button>
        ))}
      </div>
      {active ? (
        <div className="finder-result" role="status">
          <div className="finder-result-icon"><CheckCircle2 size={20} /></div>
          <div className="finder-result-copy"><strong>{locale === "ne" ? "तपाईंको अर्को कदम" : "Your next step"}</strong><p>{active.result}</p></div>
          <Link href={active.href} className="button button-dark button-small">{active.action}<ArrowRight size={16} /></Link>
        </div>
      ) : <p className="finder-hint">{locale === "ne" ? "एउटा विकल्प छान्दा तपाईंका लागि सही निर्देशन देखिन्छ।" : "Choose an option to see the right guidance for your situation."}</p>}
    </div>
  );
}
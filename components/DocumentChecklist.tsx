"use client";

import { useMemo, useState } from "react";
import { Check, Printer, RotateCcw } from "lucide-react";
import type { Locale } from "@/content/data";
import { documentChecklist } from "@/content/data";

export default function DocumentChecklist({ locale }: { locale: Locale }) {
  const items = documentChecklist[locale];
  const [checked, setChecked] = useState<string[]>([]);
  const count = checked.length;
  const progress = useMemo(() => Math.round((count / items.length) * 100), [count, items.length]);
  const ne = locale === "ne";

  function toggle(id: string) {
    setChecked((current) => current.includes(id) ? current.filter((value) => value !== id) : [...current, id]);
  }

  return (
    <section className="checklist-card" aria-labelledby="checklist-title">
      <div className="checklist-top">
        <div><span className="mini-label">{ne ? "आफ्नो तयारी" : "YOUR PREPARATION"}</span><h3 id="checklist-title">{ne ? "कागजात checklist" : "Document checklist"}</h3><p>{ne ? "तयार भएको कागजातमा टिक लगाउनुहोस्। यो सूची तपाईंको उपकरणमा सेभ हुँदैन।" : "Tick the documents you have prepared. This checklist is not saved on a server or device."}</p></div>
        <div className="checklist-counter"><strong>{count}/{items.length}</strong><span>{ne ? "तयार" : "ready"}</span></div>
      </div>
      <div className="progress-track" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label={ne ? "तयारीको प्रगति" : "Preparation progress"}><span style={{ width: progress + "%" }} /></div>
      <div className="checklist-items">
        {items.map((item) => {
          const isChecked = checked.includes(item.id);
          return (
            <label className={isChecked ? "checklist-item checked" : "checklist-item"} key={item.id}>
              <input type="checkbox" checked={isChecked} onChange={() => toggle(item.id)} />
              <span className="custom-check"><Check size={14} /></span>
              <span className="checklist-item-text"><strong>{item.label}</strong><small>{item.detail}</small></span>
            </label>
          );
        })}
      </div>
      <div className="checklist-actions">
        <button className="text-action" type="button" onClick={() => setChecked([])}><RotateCcw size={15} />{ne ? "फेरि सुरु" : "Reset"}</button>
        <button className="button button-dark button-small" type="button" onClick={() => window.print()}><Printer size={15} />{ne ? "प्रिन्ट गर्नुहोस्" : "Print checklist"}</button>
      </div>
    </section>
  );
}
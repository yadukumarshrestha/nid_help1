import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/content/data";
import { finderOptions } from "@/content/data";

export default function TaskFinder({ locale }: { locale: Locale }) {
  const options = finderOptions[locale];

  return (
    <div className="task-finder">
      <div className="finder-options">
        {options.map((option, index) => (
          <Link className="finder-option" href={option.href} key={option.id}>
            <span className="finder-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="finder-option-copy">
              <strong>{option.label}</strong>
              <small>{option.description}</small>
            </span>
            <ArrowUpRight className="finder-chevron" size={19} aria-hidden="true" />
          </Link>
        ))}
      </div>
      <p className="finder-hint">
        {locale === "ne"
          ? "कुनै विकल्प छान्नुहोस्—त्यस कामको आफ्नै पेज, तयारी सूची र आधिकारिक लिंक खुल्नेछ।"
          : "Choose a task to open its own guide, preparation checklist and official service link."}
      </p>
    </div>
  );
}
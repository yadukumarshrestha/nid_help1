import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/content/data";
import { finderOptions } from "@/content/data";

export default function TaskFinder({ locale }: { locale: Locale }) {
  const options = finderOptions[locale];
  return (
    <div className="task-finder">
      <div className="finder-options">
        {options.map((option) => (
          <Link className="finder-option" href={option.href} key={option.id}>
            <span className="finder-option-copy"><strong>{option.label}</strong><small>{option.description}</small></span>
            <ArrowUpRight className="finder-chevron" size={18} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  );
}

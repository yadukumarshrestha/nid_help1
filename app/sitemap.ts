import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const pages = ["", "documents", "pre-enrolment", "how-to-apply", "status", "enid", "duplicate", "correction", "faq", "contact", "about"];

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ["ne", "en"];
  return languages.flatMap((locale) =>
    pages.map((page) => ({
      url: SITE_URL + "/" + locale + (page ? "/" + page : ""),
      lastModified: new Date("2026-11-12T00:00:00+05:45"),
      changeFrequency: page === "" ? "weekly" as const : "monthly" as const,
      priority: page === "" ? 1 : page === "status" || page === "how-to-apply" ? 0.9 : 0.7
    }))
  );
}
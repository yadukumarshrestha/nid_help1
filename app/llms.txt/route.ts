import { SITE_URL, OFFICIAL, CONTENT_REVIEWED } from "@/lib/site";

export function GET() {
  const content = [
    "# NID Help Nepal",
    "",
    "> An independent, bilingual citizen guide to Nepal's National Identity Card (राष्ट्रिय परिचयपत्र). This is not a government website.",
    "",
    "## Scope",
    "- First-time application and enrolment guidance",
    "- Document preparation checklist",
    "- Official status-check and eNID portal directions",
    "- Lost or damaged card replacement guidance",
    "- Personal-detail correction guidance",
    "- Common questions and official support routes",
    "",
    "## Privacy and limitations",
    "- NID Help does not collect or store citizenship numbers, NID numbers, application IDs, QR receipts, photos, biometrics, signatures, passwords or payment details.",
    "- NID Help does not access government records or perform application status checks.",
    "- Applications, status checks, downloads and payments must be completed on official government domains.",
    "- NID Help is independent and is not affiliated with or endorsed by the Government of Nepal.",
    "",
    "## Official sources",
    "- DoNIDCR: " + OFFICIAL.department,
    "- Official FAQ: " + OFFICIAL.faq,
    "- Data collection methods: " + OFFICIAL.dataCollection,
    "- Citizen Portal: " + OFFICIAL.citizenNe,
    "- Online enrolment: " + OFFICIAL.enrolment,
    "",
    "## Main guide routes",
    "- Nepali home: " + SITE_URL + "/ne",
    "- English home: " + SITE_URL + "/en",
    "- Documents: " + SITE_URL + "/ne/documents",
    "- Apply: " + SITE_URL + "/ne/how-to-apply",
    "- Status: " + SITE_URL + "/ne/status",
    "- eNID: " + SITE_URL + "/ne/enid",
    "- Replacement: " + SITE_URL + "/ne/duplicate",
    "- Correction: " + SITE_URL + "/ne/correction",
    "- FAQ: " + SITE_URL + "/ne/faq",
    "",
    "Content review date: " + CONTENT_REVIEWED,
    "Government rules, fees and phone numbers can change. Always verify with the official sources above."
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
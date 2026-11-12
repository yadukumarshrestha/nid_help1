export const SITE_NAME = "NID Help Nepal";
export const SITE_DESCRIPTION =
  "नेपालको राष्ट्रिय परिचयपत्रबारे सजिलो, भरपर्दो र द्विभाषिक नागरिक मार्गदर्शन। An independent guide to Nepal's National Identity Card process.";

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (deploymentHost ? "https://" + deploymentHost : "https://nidinfo.yadukumarshrestha.com.np")
).replace(/\/$/, "");

export const OFFICIAL = {
  department: "https://donidcr.gov.np/",
  faq: "https://donidcr.gov.np/pages/abboyed-asked-questions--rational-identity-10/",
  dataCollection: "https://donidcr.gov.np/pages/data-collection-methods-9/",
  enrolment: "https://enrollment.donidcr.gov.np/",
  preEnrolment: "https://enrollment.donidcr.gov.np/PreEnrollment/",
  citizenNe: "https://citizenportal.donidcr.gov.np/ne",
  citizenEn: "https://citizenportal.donidcr.gov.np/en",
  eNidNe: "https://citizenportal.donidcr.gov.np/ne/check-national-id-number",
  eNidEn: "https://citizenportal.donidcr.gov.np/en/check-national-id-number",
  statusNe: "https://citizenportal.donidcr.gov.np/ne/check-nid-card-status",
  statusEn: "https://citizenportal.donidcr.gov.np/en/check-nid-card-status",
  replacementNe: "https://citizenportal.donidcr.gov.np/ne/nid-card-reprint",
  replacementEn: "https://citizenportal.donidcr.gov.np/en/nid-card-reprint"
} as const;

export const CONTENT_REVIEWED = "12 November 2026";

export function isLocale(value: string): value is "ne" | "en" {
  return value === "ne" || value === "en";
}
# NID Help Nepal

A citizen-first, bilingual guide to Nepal's National Identity Card (राष्ट्रिय परिचयपत्र) journey.

## Product direction

NID Help is an independent navigation and explainability layer. It helps people choose the task they need, understand the next step, prepare documents, and continue only on official government services.

It is **not** a government website and does not issue cards, access government records, check application status on its servers, or accept payments.

## New product approach

- Task-first navigation rather than a traditional article directory.
- Guided "What do you need to do?" flow on the home page.
- Clear journey pages for first application, status, eNID, replacement, corrections, documents and help.
- Nepali-first with a complete English experience.
- Mobile-first editorial interface with short answers, source notes and visible review dates.
- Official portal hand-offs for every sensitive action.

## Privacy by design

This project must never collect or store citizenship numbers, NID numbers, application IDs, QR receipts, photos, biometrics, signatures, passwords or payment details. No login, database, analytics storage or status lookup API is included. Personal-data tasks stay on official government domains.

## Tech stack

- Next.js App Router + TypeScript
- Tailwind CSS 4
- React 19
- Lucide icons
- Static, content-led pages; no database

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Official sources

- [DoNIDCR](https://donidcr.gov.np/)
- [Official NID FAQ](https://donidcr.gov.np/pages/abboyed-asked-questions--rational-identity-10/)
- [Data collection methods](https://donidcr.gov.np/pages/data-collection-methods-9/)
- [Official Citizen Portal — Nepali](https://citizenportal.donidcr.gov.np/ne)
- [Official Citizen Portal — English](https://citizenportal.donidcr.gov.np/en)
- [Official Online Enrolment](https://enrollment.donidcr.gov.np/)

Government processes can change. Reconfirm fees, helplines and instructions before publishing updates.

## Status

Fresh implementation in progress. See `docs/PRODUCT.md` for the product and safety rules.

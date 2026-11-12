# NID Help Nepal

A citizen-first, Nepali/English guide to Nepal's National Identity Card (राष्ट्रिय परिचयपत्र) journey.

**New direction:** a task-first NID navigator. Visitors choose what they need to do and receive the relevant next steps, rather than having to browse a long directory of articles.

> NID Help is an independent guide, not a Government of Nepal or DoNIDCR website. It does not access government records, submit applications, issue cards, check status or accept payments.

## What's included

- Nepali and English routes (/ne and /en)
- Task finder on the homepage for new enrolment, status, eNID and card/detail issues
- Dedicated guides for documents, applying, status, eNID, replacement, correction, FAQs, contact and about
- Interactive document checklist with a print action
- Searchable FAQ page
- Official government portal links for sensitive tasks
- Page metadata, canonical/hreflang, sitemap, robots.txt and llms.txt
- Mobile-first responsive design, accessible controls and security response headers
- GitHub Actions CI for typecheck, lint and production build

## Privacy by design

This project must never collect or store citizenship numbers, NID numbers, application IDs, QR receipts, photos, biometrics, signatures, OTPs, passwords or payment details. There is no login, database, local storage or status lookup API. Personal-data tasks remain on official government domains.

## Tech stack

- Next.js App Router + TypeScript
- React 19
- Tailwind CSS 4
- Lucide icons
- Static content; no database

## Local development

Node.js 20.9+ is required (Node 22 is recommended).

~~~bash
npm install
npm run dev
~~~

Quality checks:

~~~bash
npm run typecheck
npm run lint
npm run build
~~~

## Vercel deployment

1. Import the repository yadukumarshrestha/nid_help1 into Vercel.
2. Select the Next.js framework preset and Node.js 22.
3. Set NEXT_PUBLIC_SITE_URL to the final HTTPS production domain.
4. Deploy and test all Nepali/English routes and government links.
5. Submit the production sitemap to Google Search Console and Bing Webmaster Tools.

No database or secret environment variables are required.

## Official sources

- [DoNIDCR](https://donidcr.gov.np/)
- [Official NID FAQ](https://donidcr.gov.np/pages/abboyed-asked-questions--rational-identity-10/)
- [Data collection methods](https://donidcr.gov.np/pages/data-collection-methods-9/)
- [Citizen Portal — Nepali](https://citizenportal.donidcr.gov.np/ne)
- [Citizen Portal — English](https://citizenportal.donidcr.gov.np/en)
- [Online enrolment](https://enrollment.donidcr.gov.np/)

Fees, phone numbers and procedures may change. Reconfirm these facts on government sources before updating content.

## Project documents

- docs/PRODUCT.md — product direction and privacy rules
- docs/DEPLOYMENT.md — deployment and launch checklist

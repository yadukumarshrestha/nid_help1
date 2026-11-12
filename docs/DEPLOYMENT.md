# Deployment and launch checklist

## Vercel

- Import the GitHub repository: yadukumarshrestha/nid_help1
- Framework preset: Next.js
- Node.js: 22
- Environment variable: NEXT_PUBLIC_SITE_URL = the exact production HTTPS URL
- Build command: npm run build
- Install command: npm install

## Before launch

- [ ] Confirm the final production domain and set NEXT_PUBLIC_SITE_URL in Vercel.
- [ ] Wait for GitHub Actions typecheck, lint and build checks to pass.
- [ ] Test /ne and /en on a real phone and desktop.
- [ ] Test every guide route and the language switcher.
- [ ] Test the guided task picker, FAQ search, document checklist and print layout.
- [ ] Open every official link and confirm it remains current.
- [ ] Confirm government fees, helpline numbers and SMS instructions again.
- [ ] Check page titles, canonical URLs, hreflang, sitemap, robots and llms.txt.
- [ ] Run Lighthouse and keyboard-accessibility checks.
- [ ] Submit the sitemap to Google Search Console and Bing Webmaster Tools.

## Launch safety

- No form may request citizenship number, NID number, application ID, QR receipt, OTP, password, biometrics or payment details.
- Do not proxy, scrape or automate government application/status workflows.
- All applications, status checks, eNID downloads and payments remain on official government websites.
- Keep the independent-site disclaimer visible.

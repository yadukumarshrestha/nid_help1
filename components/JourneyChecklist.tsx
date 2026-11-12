"use client";

import { useMemo, useState } from "react";
import { Check, Printer, RotateCcw } from "lucide-react";
import type { GuideSlug, Locale } from "@/content/data";

type ChecklistCopy = { title: string; intro: string; items: string[] };

const checklistCopy: Record<Locale, Partial<Record<GuideSlug, ChecklistCopy>>> = {
  en: {
    "pre-enrolment": {
      title: "Before you start pre-enrolment",
      intro: "Tick off each preparation step. Some documents below are conditional and are only needed when they apply to your circumstances.",
      items: [
        "I have my original Nepali citizenship certificate.",
        "I have my original migration certificate, if my permanent address differs from my citizenship certificate.",
        "I have marriage registration or relationship verification, if my spouse's name is not on my citizenship certificate.",
        "I have official date-of-birth evidence, if my citizenship certificate does not show my date of birth.",
        "I have checked that all original documents are clear, readable and not damaged.",
        "After submitting the official form, I will save and print the Application ID / QR receipt.",
        "I will confirm the assigned biometric enrolment location before travelling."
      ]
    },
    status: {
      title: "What to have ready for a status check",
      intro: "Use these only on the official Citizen Portal. Do not enter them on NID Help or share them in chat.",
      items: [
        "I have my Application Request Number (RSN), or my National Identity Number (NIN).",
        "I can complete the CAPTCHA shown on the government portal.",
        "I have checked that the web address belongs to citizenportal.donidcr.gov.np.",
        "I will follow the official result or contact the department if more help is needed."
      ]
    },
    enid: {
      title: "What to prepare before downloading eNID",
      intro: "The official portal asks for citizenship details. Keep them with you, but enter them only on the government website.",
      items: [
        "I have my citizenship certificate available for reference.",
        "I can enter my full name in Nepali and English on the official portal.",
        "I can confirm my date of birth in the Bikram Sambat (BS) calendar.",
        "I can confirm my citizenship certificate issuing date.",
        "I can complete the CAPTCHA on the official portal."
      ]
    },
    duplicate: {
      title: "What to prepare for a replacement request",
      intro: "The Citizen Portal has a dedicated replacement-payment service. Submit personal details and payments only on that government page.",
      items: [
        "I have my National Identity Number available for the official form.",
        "I have access to the mobile number required by the government portal.",
        "I can enter my full name in English and Nepali on the official page.",
        "I have checked the current replacement fee and payment instructions on the official portal.",
        "I will contact the relevant enrolment office if the card was lost, damaged or cannot be used."
      ]
    },
    correction: {
      title: "Before requesting a correction",
      intro: "Prepare official evidence that proves the correct information. The relevant office confirms the required form and documents.",
      items: [
        "I have identified the exact detail that is incorrect.",
        "I have the original official document that proves the correct detail.",
        "I know which District Administration Office or Area Administration Office enrolment station serves my record.",
        "I will submit the correction request to the relevant office, not through an unofficial form.",
        "I will review the corrected details carefully when the office provides the confirmation."
      ]
    },
    documents: {
      title: "Document readiness",
      intro: "Use the document list below as a preparation aid. The enrolment officer confirms which conditional evidence applies to you.",
      items: [
        "I have the original Nepali citizenship certificate.",
        "I have the original migration certificate if a different permanent address applies.",
        "I have marriage or relationship verification if required.",
        "I have date-of-birth evidence if the citizenship certificate does not show it.",
        "I have any other original evidence requested for my circumstances."
      ]
    },
    "how-to-apply": {
      title: "First enrolment preparation",
      intro: "Complete each step on the official system and at your assigned enrolment unit.",
      items: [
        "I meet the age and citizenship requirements listed by the department.",
        "I have prepared the original documents that apply to my situation.",
        "I will complete pre-enrolment only on the official department portal.",
        "I will print the Application ID / QR receipt after submitting the form.",
        "I will attend the assigned biometric enrolment unit in person."
      ]
    }
  },
  ne: {
    "pre-enrolment": {
      title: "Pre-enrolment सुरु गर्नुअघि",
      intro: "तयारी पूरा भएका कुरामा टिक लगाउनुहोस्। केही कागजात तपाईंको अवस्था लागू भएमा मात्र चाहिन्छन्।",
      items: [
        "नेपाली नागरिकताको सक्कल प्रमाणपत्र तयार छ।",
        "नागरिकताभन्दा फरक स्थायी ठेगाना भए बसाइँसराइको सक्कल प्रमाणपत्र तयार छ।",
        "नागरिकतामा पति/पत्नीको नाम नखुलेको भए विवाह दर्ता वा नाता प्रमाणितको सक्कल प्रमाण तयार छ।",
        "नागरिकतामा जन्ममिति नखुलेको भए जन्ममिति खुल्ने आधिकारिक प्रमाण तयार छ।",
        "सबै सक्कल कागजात स्पष्ट, पढ्न मिल्ने र नबिग्रिएको अवस्थामा छन्।",
        "आधिकारिक फाराम बुझाएपछि Application ID / QR भएको रसिद सुरक्षित राखी प्रिन्ट गर्नेछु।",
        "कार्यालय जानुअघि तोकिएको बायोमेट्रिक दर्ता स्थान पुष्टि गर्नेछु।"
      ]
    },
    status: {
      title: "Status जाँच्नुअघि तयार राख्नुहोस्",
      intro: "यी विवरण आधिकारिक Citizen Portal मा मात्र प्रयोग गर्नुहोस्। NID Help मा नलेख्नुहोस् र च्याटमा नपठाउनुहोस्।",
      items: [
        "Application Request Number (RSN) वा National Identity Number (NIN) उपलब्ध छ।",
        "सरकारी पोर्टलमा देखिने CAPTCHA पूरा गर्न सक्छु।",
        "वेबसाइटको ठेगाना citizenportal.donidcr.gov.np हो भनेर जाँचेको छु।",
        "नतिजाअनुसार सरकारी निर्देशन पालना गर्नेछु वा विभागसँग सम्पर्क गर्नेछु।"
      ]
    },
    enid: {
      title: "eNID डाउनलोड गर्नुअघि",
      intro: "सरकारी पोर्टलले नागरिकताका विवरण माग्छ। विवरण आफूसँग तयार राख्नुहोस्, तर सरकारी वेबसाइटमा मात्र प्रविष्ट गर्नुहोस्।",
      items: [
        "नागरिकताको प्रमाणपत्र हेर्नका लागि तयार छ।",
        "आधिकारिक पोर्टलमा नेपाली र अंग्रेजीमा पूरा नाम लेख्न सक्छु।",
        "विक्रम संवत् (वि.सं.) अनुसार जन्ममिति पुष्टि गर्न सक्छु।",
        "नागरिकता जारी मिति पुष्टि गर्न सक्छु।",
        "सरकारी पोर्टलमा देखिने CAPTCHA पूरा गर्न सक्छु।"
      ]
    },
    duplicate: {
      title: "प्रतिलिपि माग्नुअघि तयारी",
      intro: "Citizen Portal मा प्रतिलिपि दस्तुर तिर्ने छुट्टै सेवा छ। व्यक्तिगत विवरण र भुक्तानी सरकारी पेजमा मात्र गर्नुहोस्।",
      items: [
        "आधिकारिक फारामका लागि राष्ट्रिय परिचय नम्बर उपलब्ध छ।",
        "सरकारी पोर्टलले माग्ने मोबाइल नम्बरमा पहुँच छ।",
        "आधिकारिक पेजमा नेपाली र अंग्रेजीमा पूरा नाम लेख्न सक्छु।",
        "सरकारी पोर्टलमा देखाइएको हालको शुल्क र भुक्तानी निर्देशन जाँचेको छु।",
        "कार्ड हराएको, बिग्रिएको वा प्रयोग गर्न नमिल्ने भए सम्बन्धित दर्ता कार्यालयसँग बुझ्नेछु।"
      ]
    },
    correction: {
      title: "विवरण सच्याउनुअघि",
      intro: "सही विवरण पुष्टि गर्ने आधिकारिक प्रमाण तयार गर्नुहोस्। आवश्यक फाराम र कागजात सम्बन्धित कार्यालयले पुष्टि गर्छ।",
      items: [
        "गलत भएको विवरण ठ्याक्कै पहिचान गरेको छु।",
        "सही विवरण पुष्टि गर्ने सक्कल आधिकारिक प्रमाण तयार छ।",
        "मेरो अभिलेख हेर्ने जिल्ला प्रशासन कार्यालय वा दर्ता स्टेशन भएको इलाका प्रशासन कार्यालय पहिचान गरेको छु।",
        "अनौपचारिक फारामबाट होइन, सम्बन्धित सरकारी कार्यालयमा निवेदन दिनेछु।",
        "कार्यालयले दिएको Confirmation मा सच्याइएको विवरण पुनः जाँच्नेछु।"
      ]
    },
    documents: {
      title: "कागजात तयारी",
      intro: "तलको सूची तयारीका लागि हो। कुन थप प्रमाण तपाईंको अवस्थामा लागू हुन्छ भन्ने कुरा दर्ता अधिकारीले पुष्टि गर्छन्।",
      items: [
        "नेपाली नागरिकताको सक्कल प्रमाणपत्र तयार छ।",
        "फरक स्थायी ठेगाना भए बसाइँसराइको सक्कल प्रमाणपत्र तयार छ।",
        "आवश्यक परे विवाह वा नाता प्रमाणितको सक्कल प्रमाण तयार छ।",
        "नागरिकतामा जन्ममिति नखुलेको भए जन्ममिति खुल्ने प्रमाण तयार छ।",
        "मेरो अवस्थाअनुसार मागिएको अन्य सक्कल प्रमाण तयार छ।"
      ]
    },
    "how-to-apply": {
      title: "पहिलो दर्ताको तयारी",
      intro: "आधिकारिक प्रणाली र तोकिएको दर्ता इकाईमा आवश्यक चरण पूरा गर्नुहोस्।",
      items: [
        "विभागले उल्लेख गरेको उमेर र नागरिकताको योग्यता पूरा हुन्छ।",
        "आफ्नो अवस्थाअनुसार चाहिने सक्कल कागजात तयार छन्।",
        "Pre-enrolment आधिकारिक सरकारी पोर्टलमा मात्र गर्नेछु।",
        "फाराम बुझाएपछि Application ID / QR भएको रसिद प्रिन्ट गर्नेछु।",
        "बायोमेट्रिक दर्ताका लागि तोकिएको इकाईमा स्वयं उपस्थित हुनेछु।"
      ]
    }
  }
};

export default function JourneyChecklist({
  locale,
  slug
}: {
  locale: Locale;
  slug: GuideSlug;
}) {
  const config = checklistCopy[locale][slug];
  const [checked, setChecked] = useState<string[]>([]);
  const items = config?.items ?? [];
  const count = checked.length;
  const progress = useMemo(
    () => items.length ? Math.round((count / items.length) * 100) : 0,
    [count, items.length]
  );

  if (!config || items.length === 0) return null;

  const ne = locale === "ne";

  return (
    <section className="journey-checklist" aria-labelledby="journey-checklist-title">
      <div className="journey-checklist-top">
        <div>
          <span className="mini-label">{ne ? "तपाईंको तयारी" : "YOUR PREPARATION"}</span>
          <h2 id="journey-checklist-title">{config.title}</h2>
          <p>{config.intro}</p>
        </div>
        <div className="journey-checklist-counter">
          <strong>{count}/{items.length}</strong>
          <span>{ne ? "पूरा" : "ready"}</span>
        </div>
      </div>
      <div className="progress-track" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label={ne ? "तयारीको प्रगति" : "Preparation progress"}>
        <span style={{ width: progress + "%" }} />
      </div>
      <div className="journey-checklist-items">
        {items.map((item, index) => {
          const selected = checked.includes(item);
          return (
            <label className={selected ? "journey-check-item checked" : "journey-check-item"} key={item}>
              <input
                type="checkbox"
                checked={selected}
                onChange={() => setChecked((current) => selected ? current.filter((value) => value !== item) : [...current, item])}
              />
              <span className="journey-custom-check"><Check size={14} /></span>
              <span className="journey-check-number">{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </label>
          );
        })}
      </div>
      <div className="journey-checklist-footer">
        <span>{ne ? "यो checklist तपाईंको browser मा सेभ हुँदैन।" : "This checklist is not saved in your browser."}</span>
        <div>
          <button type="button" className="text-action" onClick={() => setChecked([])}><RotateCcw size={14} />{ne ? "Reset" : "Reset"}</button>
          <button type="button" className="button button-dark button-small" onClick={() => window.print()}><Printer size={14} />{ne ? "प्रिन्ट" : "Print"}</button>
        </div>
      </div>
    </section>
  );
}
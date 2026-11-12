import {
  ArrowUpRight,
  ClipboardList,
  Download,
  FileText,
  Fingerprint,
  PencilLine,
  RefreshCw,
  Search
} from "lucide-react";
import type { GuideSlug, Locale } from "@/content/data";

const content: Record<Locale, Partial<Record<GuideSlug, {
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  service: string;
}>>> = {
  en: {
    "pre-enrolment": {
      eyebrow: "OFFICIAL ONLINE ENROLMENT",
      title: "Start your NID pre-enrolment",
      description: "Enter your demographic details and follow the department's appointment instructions on the official Pre-Enrollment System.",
      action: "Open Pre-Enrollment",
      service: "Government of Nepal · DoNIDCR"
    },
    documents: {
      eyebrow: "OFFICIAL DOCUMENT GUIDANCE",
      title: "Check the department's document requirements",
      description: "Review the latest public requirements before visiting your enrolment office.",
      action: "Read official requirements",
      service: "Government source · DoNIDCR FAQ"
    },
    "how-to-apply": {
      eyebrow: "OFFICIAL ONLINE ENROLMENT",
      title: "Start your NID pre-enrolment",
      description: "Complete the official demographic form, then follow the assigned biometric enrolment instructions.",
      action: "Open Pre-Enrollment",
      service: "Government of Nepal · DoNIDCR"
    },
    status: {
      eyebrow: "OFFICIAL STATUS SERVICE",
      title: "Check your NID application status",
      description: "Use your Request Number (RSN) or National Identity Number (NIN) on the government portal only.",
      action: "Open Status Check",
      service: "Secure government portal · Citizen Portal"
    },
    enid: {
      eyebrow: "OFFICIAL DIGITAL ID SERVICE",
      title: "Download your eNID",
      description: "Use the official eNID service and enter the requested citizenship details on the government page.",
      action: "Open eNID Download",
      service: "Secure government portal · Citizen Portal"
    },
    duplicate: {
      eyebrow: "OFFICIAL REPLACEMENT SERVICE",
      title: "Continue to NID card replacement",
      description: "The government portal provides a dedicated replacement-payment service. Confirm the fee and instructions there before paying.",
      action: "Open Replacement Service",
      service: "Secure government portal · Citizen Portal"
    },
    correction: {
      eyebrow: "OFFICIAL RECORD CORRECTION",
      title: "Contact the relevant enrolment office",
      description: "Corrections are requested through the relevant District or Area Administration Office enrolment station with supporting evidence.",
      action: "Read official correction guidance",
      service: "Government source · DoNIDCR FAQ"
    },
    faq: {
      eyebrow: "OFFICIAL ANSWERS",
      title: "Read the department's official FAQ",
      description: "Check the department's published answers and notices for the latest instructions.",
      action: "Open official FAQ",
      service: "Government of Nepal · DoNIDCR"
    },
    contact: {
      eyebrow: "OFFICIAL SUPPORT",
      title: "Find the department's support channels",
      description: "Use the department's published contact details for personal application or record questions.",
      action: "Open DoNIDCR website",
      service: "Government of Nepal · DoNIDCR"
    },
    about: {
      eyebrow: "OFFICIAL SOURCE",
      title: "Visit the National ID department",
      description: "NID Help is an independent guide. The department remains the authoritative source for official services.",
      action: "Visit DoNIDCR",
      service: "Government of Nepal · DoNIDCR"
    }
  },
  ne: {
    "pre-enrolment": {
      eyebrow: "आधिकारिक अनलाइन दर्ता",
      title: "NID Pre-Enrollment सुरु गर्नुहोस्",
      description: "आधिकारिक Pre-Enrollment System मा जनसांख्यिक विवरण भर्नुहोस् र विभागले दिएको appointment निर्देशन पालना गर्नुहोस्।",
      action: "Pre-Enrollment खोल्नुहोस्",
      service: "नेपाल सरकार · DoNIDCR"
    },
    documents: {
      eyebrow: "आधिकारिक कागजात जानकारी",
      title: "विभागको कागजात आवश्यकता जाँच्नुहोस्",
      description: "दर्ता कार्यालय जानुअघि विभागले प्रकाशित गरेको पछिल्लो कागजात विवरण हेर्नुहोस्।",
      action: "आधिकारिक आवश्यकता हेर्नुहोस्",
      service: "सरकारी स्रोत · DoNIDCR FAQ"
    },
    "how-to-apply": {
      eyebrow: "आधिकारिक अनलाइन दर्ता",
      title: "NID Pre-Enrollment सुरु गर्नुहोस्",
      description: "आधिकारिक फाराम भर्नुहोस् र त्यसपछि तोकिएको बायोमेट्रिक दर्ताको निर्देशन पालना गर्नुहोस्।",
      action: "Pre-Enrollment खोल्नुहोस्",
      service: "नेपाल सरकार · DoNIDCR"
    },
    status: {
      eyebrow: "आधिकारिक अवस्था जाँच",
      title: "NID आवेदनको अवस्था जाँच्नुहोस्",
      description: "Request Number (RSN) वा National Identity Number (NIN) सरकारी पोर्टलमा मात्र प्रयोग गर्नुहोस्।",
      action: "Status Check खोल्नुहोस्",
      service: "सरकारी पोर्टल · Citizen Portal"
    },
    enid: {
      eyebrow: "आधिकारिक डिजिटल परिचयपत्र",
      title: "आफ्नो eNID डाउनलोड गर्नुहोस्",
      description: "सरकारी eNID सेवामा मागिएका नागरिकता विवरण त्यहीँ प्रविष्ट गर्नुहोस्।",
      action: "eNID Download खोल्नुहोस्",
      service: "सरकारी पोर्टल · Citizen Portal"
    },
    duplicate: {
      eyebrow: "आधिकारिक प्रतिलिपि सेवा",
      title: "NID प्रतिलिपि सेवामा जानुहोस्",
      description: "सरकारी पोर्टलमा प्रतिलिपि दस्तुर भुक्तानीको छुट्टै सेवा छ। भुक्तानीअघि शुल्क र निर्देशन त्यहीँ पुष्टि गर्नुहोस्।",
      action: "प्रतिलिपि सेवा खोल्नुहोस्",
      service: "सरकारी पोर्टल · Citizen Portal"
    },
    correction: {
      eyebrow: "आधिकारिक विवरण सच्याउने प्रक्रिया",
      title: "सम्बन्धित दर्ता कार्यालयमा सम्पर्क गर्नुहोस्",
      description: "सहायक सक्कल प्रमाणसहित सम्बन्धित जिल्ला प्रशासन वा इलाका प्रशासन कार्यालयको दर्ता स्टेशनमा निवेदन दिनुपर्छ।",
      action: "आधिकारिक सच्याउने प्रक्रिया हेर्नुहोस्",
      service: "सरकारी स्रोत · DoNIDCR FAQ"
    },
    faq: {
      eyebrow: "आधिकारिक उत्तर",
      title: "विभागको आधिकारिक FAQ पढ्नुहोस्",
      description: "पछिल्लो निर्देशनका लागि विभागले प्रकाशित गरेका प्रश्नोत्तर र सूचना हेर्नुहोस्।",
      action: "आधिकारिक FAQ खोल्नुहोस्",
      service: "नेपाल सरकार · DoNIDCR"
    },
    contact: {
      eyebrow: "आधिकारिक सहायता",
      title: "विभागको सहायता माध्यम हेर्नुहोस्",
      description: "आफ्नो व्यक्तिगत आवेदन वा अभिलेखसम्बन्धी प्रश्नका लागि विभागले प्रकाशित गरेको सम्पर्क विवरण प्रयोग गर्नुहोस्।",
      action: "DoNIDCR वेबसाइट खोल्नुहोस्",
      service: "नेपाल सरकार · DoNIDCR"
    },
    about: {
      eyebrow: "आधिकारिक स्रोत",
      title: "राष्ट्रिय परिचयपत्र विभागको वेबसाइट हेर्नुहोस्",
      description: "NID Help स्वतन्त्र मार्गदर्शन हो। आधिकारिक सेवाको अन्तिम स्रोत विभाग नै हो।",
      action: "DoNIDCR खोल्नुहोस्",
      service: "नेपाल सरकार · DoNIDCR"
    }
  }
};

const icons = {
  "pre-enrolment": ClipboardList,
  documents: FileText,
  "how-to-apply": ClipboardList,
  status: Search,
  enid: Download,
  duplicate: RefreshCw,
  correction: PencilLine,
  faq: FileText,
  contact: Fingerprint,
  about: FileText
};

export default function OfficialServiceCard({
  locale,
  slug,
  href
}: {
  locale: Locale;
  slug: GuideSlug;
  href?: string;
}) {
  const copy = content[locale][slug];
  if (!copy || !href) return null;
  const Icon = icons[slug];

  return (
    <section className="official-action-card" aria-label={copy.eyebrow}>
      <div className="official-action-copy">
        <span className="official-action-eyebrow">{copy.eyebrow}</span>
        <h2>{copy.title}</h2>
        <p>{copy.description}</p>
        <a className="official-action-button" href={href} target="_blank" rel="noopener noreferrer">
          {copy.action}<ArrowUpRight size={17} />
        </a>
        <span className="official-action-meta">{copy.service}</span>
      </div>
      <div className="official-action-art" aria-hidden="true">
        <span className="official-action-orbit" />
        <span className="official-action-icon"><Icon size={42} strokeWidth={1.6} /></span>
        <span className="official-action-stamp">OFFICIAL<br />SERVICE</span>
      </div>
    </section>
  );
}
import { OFFICIAL } from "@/lib/site";

export type Locale = "ne" | "en";
export type GuideSlug =
  | "documents"
  | "pre-enrolment"
  | "how-to-apply"
  | "status"
  | "enid"
  | "duplicate"
  | "correction"
  | "faq"
  | "contact"
  | "about";

export type GuideSection = {
  title: string;
  body?: string;
  items?: string[];
  note?: string;
};

export type Guide = {
  eyebrow: string;
  title: string;
  description: string;
  answerTitle: string;
  answer: string;
  sections: GuideSection[];
  officialLabel?: string;
  officialUrl?: string;
  reminder?: string;
};

export const homeCopy = {
  ne: {
    eyebrow: "राष्ट्रिय परिचयपत्र • नागरिक सहायता",
    title: "NID को काम अब",
    titleAccent: "अलमल बिना।",
    description: "तपाईंलाई के गर्नुपर्ने हो छान्नुहोस्। सही प्रक्रिया, चाहिने कागजात र आधिकारिक लिंक एउटै ठाउँमा पाउनुहोस्।",
    primaryCta: "मेरो काम छान्नुहोस्",
    secondaryCta: "आधिकारिक पोर्टल खोल्नुहोस्",
    privacy: "तपाईंको नागरिकता नम्बर वा आवेदन नम्बर हामी माग्दैनौँ।",
    finderEyebrow: "पहिले आफ्नो अवस्था छान्नुहोस्",
    finderTitle: "तपाईंलाई के गर्नुपर्ने छ?",
    finderText: "आफ्नो कामसँग मिल्ने विकल्प छान्नुहोस्; हामी सही बाटो देखाउँछौँ।",
    taskTitle: "सिधै आफ्नो काममा जानुहोस्",
    taskText: "सबै कुरा पढ्न आवश्यक छैन। आफूलाई चाहिएको सेवाबाट सुरु गर्नुहोस्।",
    processEyebrow: "सरल यात्रा",
    processTitle: "तीन चरणमा तयारी",
    processText: "जानकारी बुझ्नुहोस्, कागजात तयार गर्नुहोस्, अनि आधिकारिक सेवामा जानुहोस्।",
    process: [
      ["१", "आफ्नो काम छान्नुहोस्", "पहिलो दर्ता हो कि status, eNID वा correction—पहिले छुट्याउनुहोस्।"],
      ["२", "तयारी पूरा गर्नुहोस्", "लाग्ने कागजात र कार्यालयमा ध्यान दिनुपर्ने कुरा पढ्नुहोस्।"],
      ["३", "सरकारी साइटमा अघि बढ्नुहोस्", "आवेदन, status र भुक्तानीजस्ता काम सरकारी पोर्टलमै गर्नुहोस्।"]
    ],
    officialTitle: "आधिकारिक सेवा चाहियो?",
    officialText: "आवेदन, अवस्था जाँच, eNID डाउनलोड र भुक्तानी विभागको आफ्नै पोर्टलमा उपलब्ध छन्।",
    officialButton: "सरकारी Citizen Portal खोल्नुहोस्",
    faqTitle: "छिटो उत्तर चाहिएको छ?",
    faqButton: "सबै प्रश्न हेर्नुहोस्",
    noteTitle: "यो सरकारी वेबसाइट होइन",
    noteText: "NID Help स्वतन्त्र नागरिक मार्गदर्शन हो। सरकारी अभिलेखमा पहुँच छैन र कुनै आवेदन वा भुक्तानी यहाँ हुँदैन।"
  },
  en: {
    eyebrow: "NATIONAL IDENTITY • CITIZEN HELP",
    title: "Your NID journey,",
    titleAccent: "without the confusion.",
    description: "Choose what you need to do. Get clear steps, document guidance and direct links to official government services.",
    primaryCta: "Choose my task",
    secondaryCta: "Open official portal",
    privacy: "We never ask for your citizenship number or application number.",
    finderEyebrow: "START WITH YOUR SITUATION",
    finderTitle: "What do you need to do?",
    finderText: "Choose the option that matches your situation and we'll point you in the right direction.",
    taskTitle: "Go straight to your task",
    taskText: "You do not need to read everything. Start with the service you need.",
    processEyebrow: "A CLEAR JOURNEY",
    processTitle: "Get ready in three steps",
    processText: "Understand the process, prepare your documents, then continue on the official service.",
    process: [
      ["01", "Choose your task", "Separate first enrolment from status, eNID or correction."],
      ["02", "Get prepared", "Review the documents and what to expect at the office."],
      ["03", "Continue officially", "Applications, status checks and payments stay on government portals."]
    ],
    officialTitle: "Need an official service?",
    officialText: "Applications, status checks, eNID downloads and payments are handled on the department's own portal.",
    officialButton: "Open official Citizen Portal",
    faqTitle: "Need a quick answer?",
    faqButton: "Browse all questions",
    noteTitle: "This is not a government website",
    noteText: "NID Help is an independent citizen guide. We cannot access government records, submit applications or accept payments."
  }
} as const;

export const taskCards: Record<Locale, { slug: GuideSlug; title: string; description: string; tag: string }[]> = {
  ne: [
    { slug: "pre-enrolment", title: "पहिलो पटक NID बनाउँदै", description: "अनलाइन फारामदेखि बायोमेट्रिक दर्तासम्मको प्रक्रिया।", tag: "नयाँ दर्ता" },
    { slug: "status", title: "आवेदनको अवस्था हेर्न", description: "आवेदन नम्बर वा NID नम्बरबाट सरकारी पोर्टलमा जाँच गर्नुहोस्।", tag: "आवेदन जाँच" },
    { slug: "enid", title: "eNID डाउनलोड गर्न", description: "डिजिटल परिचयपत्र कहाँबाट र कसरी प्राप्त गर्ने।", tag: "डिजिटल कार्ड" },
    { slug: "duplicate", title: "कार्ड हरायो वा बिग्रियो", description: "प्रतिलिपि लिनुपर्ने प्रक्रिया र शुल्कबारे बुझ्नुहोस्।", tag: "प्रतिलिपि" },
    { slug: "correction", title: "विवरण सच्याउन", description: "नाम, ठेगाना वा अन्य विवरणमा त्रुटि भए के गर्ने।", tag: "सच्याउने" },
    { slug: "documents", title: "कागजात तयार गर्न", description: "मूल कागजात र अवस्था अनुसारका थप प्रमाणको सूची।", tag: "तयारी" }
  ],
  en: [
    { slug: "pre-enrolment", title: "Applying for the first time", description: "From the online form to in-person biometric enrolment.", tag: "New enrolment" },
    { slug: "status", title: "Checking application status", description: "Use the official portal to check with your request or NID number.", tag: "Status" },
    { slug: "enid", title: "Downloading eNID", description: "Where to find and download your digital identity card.", tag: "Digital card" },
    { slug: "duplicate", title: "Lost or damaged card", description: "Understand the replacement process and current fee information.", tag: "Replacement" },
    { slug: "correction", title: "Correcting your details", description: "What to do when your name, address or other details are incorrect.", tag: "Correction" },
    { slug: "documents", title: "Preparing documents", description: "Original documents and extra evidence for specific situations.", tag: "Preparation" }
  ]
};

export const finderOptions: Record<Locale, { id: string; label: string; description: string; href: string }[]> = {
  ne: [
    { id: "new", label: "अहिलेसम्म दर्ता गरेको छैन", description: "पहिलो पटक राष्ट्रिय परिचयपत्र बनाउनुपर्छ।", href: "/ne/pre-enrolment" },
    { id: "documents", label: "कुन कागजात चाहिन्छ?", description: "आफ्नो अवस्थाअनुसार आवश्यक सक्कल प्रमाणपत्रको सूची हेर्नुहोस्।", href: "/ne/documents" },
    { id: "waiting", label: "दर्ता गरिसकेको छु", description: "आवेदन वा राष्ट्रिय परिचय नम्बरको अवस्था जाँच गर्नुपर्छ।", href: "/ne/status" },
    { id: "digital", label: "eNID डाउनलोड गर्न", description: "आफ्नो डिजिटल परिचयपत्र सरकारी पोर्टलबाट प्राप्त गर्नुहोस्।", href: "/ne/enid" },
    { id: "lost", label: "कार्ड हरायो वा बिग्रियो", description: "प्रतिलिपि लिनुपर्ने प्रक्रिया र शुल्क बुझ्नुहोस्।", href: "/ne/duplicate" },
    { id: "correction", label: "विवरण सच्याउन", description: "नाम, ठेगाना वा अन्य विवरणमा त्रुटि छ।", href: "/ne/correction" }
  ],
  en: [
    { id: "new", label: "I have not enrolled yet", description: "I need to apply for my first National ID.", href: "/en/pre-enrolment" },
    { id: "documents", label: "What documents do I need?", description: "See the original documents required for your situation.", href: "/en/documents" },
    { id: "waiting", label: "I have already enrolled", description: "I need to check my request or National Identity Number status.", href: "/en/status" },
    { id: "digital", label: "I need to download eNID", description: "Get your digital identity card through the official portal.", href: "/en/enid" },
    { id: "lost", label: "My card is lost or damaged", description: "Understand the replacement process and fee.", href: "/en/duplicate" },
    { id: "correction", label: "I need to correct my details", description: "There is an error in my name, address or other details.", href: "/en/correction" }
  ]
};

export const documentChecklist: Record<Locale, { id: string; label: string; detail: string }[]> = {
  ne: [
    { id: "citizenship", label: "नेपाली नागरिकताको सक्कल प्रमाणपत्र", detail: "मुख्य अनिवार्य कागजात। फोटोकपी मात्रमा निर्भर नगर्नुहोस्।" },
    { id: "migration", label: "बसाइँसराइको सक्कल प्रमाणपत्र", detail: "नागरिकतामा भएको स्थायी ठेगानाभन्दा फरक ठेगाना कायम गर्नुपर्ने भए।" },
    { id: "marriage", label: "विवाह दर्ता वा नाता प्रमाणित", detail: "नागरिकतामा पति/पत्नीको नाम नखुलेको अवस्थामा आवश्यक पर्न सक्छ।" },
    { id: "dob", label: "जन्ममिति खुल्ने आधिकारिक प्रमाण", detail: "नागरिकतामा जन्ममिति नखुलेको अवस्थामा—जन्मदर्ता, शैक्षिक प्रमाणपत्र, राहदानी वा पेन्सन पट्टा।" },
    { id: "other", label: "विवरण पुष्टि गर्ने अन्य सक्कल प्रमाण", detail: "आफ्नो अवस्थाअनुसार थप प्रमाण चाहिन सक्छ; सम्बन्धित कार्यालयसँग बुझ्नुहोस्।" }
  ],
  en: [
    { id: "citizenship", label: "Original Nepali citizenship certificate", detail: "The main required document. Do not rely on a photocopy alone." },
    { id: "migration", label: "Original migration certificate", detail: "When establishing a permanent address different from the one on your citizenship certificate." },
    { id: "marriage", label: "Marriage registration or relationship verification", detail: "May be needed if your spouse's name is not shown on your citizenship certificate." },
    { id: "dob", label: "Official proof of date of birth", detail: "If the citizenship certificate does not show your birth date: birth registration, academic certificate, passport or pension record." },
    { id: "other", label: "Other original supporting documents", detail: "Additional proof may be required for your circumstances; confirm with the relevant office." }
  ]
};

export const faqs: Record<Locale, { question: string; answer: string }[]> = {
  ne: [
    { question: "राष्ट्रिय परिचयपत्र बनाउन को योग्य हुन्छ?", answer: "विभागको FAQ अनुसार १६ वर्ष उमेर पूरा भई नेपाली नागरिकताको प्रमाणपत्र लिएका व्यक्तिले राष्ट्रिय परिचयपत्र प्राप्त गर्न सक्छन्। नियम वा चरण परिवर्तन हुन सक्ने भएकाले आवेदनअघि विभागको सूचना हेर्नुहोस्।" },
    { question: "कुन कागजात चाहिन्छ?", answer: "नेपाली नागरिकताको सक्कल प्रमाणपत्र मुख्य कागजात हो। बसाइँसराइ, विवाह वा जन्ममितिसँग सम्बन्धित अवस्था अनुसार थप सक्कल प्रमाण चाहिन सक्छ।" },
    { question: "अनलाइन फाराम भरेपछि के गर्ने?", answer: "फाराम पूरा गरेपछि प्राप्त हुने Application ID वा QR भएको रसिद सुरक्षित/प्रिन्ट गर्नुहोस् र बायोमेट्रिक विवरणका लागि तोकिएको दर्ता इकाईमा जानुहोस्।" },
    { question: "NID नम्बर कसरी थाहा पाउने?", answer: "विभागको FAQ ले N त्यसपछि स्पेस र आवेदन नम्बर राखेर 30001 मा SMS गर्न सकिने बताउँछ। आधिकारिक Citizen Portal बाट पनि अवस्था जाँच गर्न सकिन्छ।" },
    { question: "कार्ड लिन आफैँ जानुपर्छ?", answer: "विभागको FAQ अनुसार बायोमेट्रिक विवरण प्रमाणित गर्न सम्बन्धित व्यक्ति स्वयं उपस्थित हुनुपर्छ। कार्ड लिन जानुअघि प्राप्त SMS र कार्यालयको निर्देशन हेर्नुहोस्।" },
    { question: "नाम वा ठेगाना गलत भए कसरी सच्याउने?", answer: "विवरण सच्याउन सम्बन्धित जिल्ला प्रशासन कार्यालय वा दर्ता स्टेशन भएको इलाका प्रशासन कार्यालयमा निवेदन दिनुपर्ने विभागको FAQ मा उल्लेख छ।" },
    { question: "कार्ड हराएमा प्रतिलिपि पाइन्छ?", answer: "कार्ड हराए, नासिए वा बिग्रिएमा कारणसहित सम्बन्धित जिल्ला प्रशासन कार्यालय वा दर्ता स्टेशन भएको इलाका प्रशासन कार्यालयमा निवेदन दिएर प्रतिलिपि माग्न सकिने FAQ मा उल्लेख छ।" },
    { question: "प्रतिलिपि शुल्क कति छ?", answer: "विभागको FAQ र हालको Citizen Portal मा प्रतिलिपिका लागि रु. ५०० उल्लेख छ। भुक्तानी गर्नुअघि सरकारी पोर्टलमा देखाइएको रकम र निर्देशन फेरि जाँच्नुहोस्।" },
    { question: "के NID Help ले मेरो status जाँच गर्छ?", answer: "गर्दैन। हामीसँग सरकारी अभिलेखमा पहुँच छैन र तपाईंको आवेदन नम्बर वा NID नम्बर माग्दैनौँ। Status जाँच आधिकारिक Citizen Portal मा मात्र गर्नुहोस्।" }
  ],
  en: [
    { question: "Who is eligible for a National ID?", answer: "The department FAQ says people aged 16 or above who hold a Nepali citizenship certificate can obtain a National ID. Check department notices before applying in case the rules or rollout change." },
    { question: "Which documents are required?", answer: "The original Nepali citizenship certificate is the main document. Depending on address, marital status or date of birth, additional original evidence may be needed." },
    { question: "What should I do after the online form?", answer: "Keep or print the receipt containing your Application ID or QR code, then attend the assigned enrolment unit for biometric registration." },
    { question: "How can I find my NID number?", answer: "The department FAQ says to send N, followed by a space and your application number, to 30001. You can also use the official Citizen Portal to check status." },
    { question: "Do I need to collect the card in person?", answer: "The department FAQ says the card holder must be present so biometric details can be verified. Follow the SMS and office instructions before visiting." },
    { question: "How can I correct a name or address?", answer: "The department FAQ says to submit a request at the relevant District Administration Office or an Area Administration Office with an enrolment station." },
    { question: "Can I get a replacement if my card is lost?", answer: "The FAQ says to submit an application with the reason to the relevant District Administration Office or an Area Administration Office with an enrolment station." },
    { question: "What is the replacement fee?", answer: "The department FAQ and current Citizen Portal list a replacement fee of NPR 500. Recheck the amount and instructions on the official government portal before paying." },
    { question: "Can NID Help check my application?", answer: "No. We cannot access government records and will never ask for your application number or NID number. Use the official Citizen Portal for status checks." }
  ]
};

export const guides: Record<Locale, Record<GuideSlug, Guide>> = {
  ne: {
    documents: {
      eyebrow: "पहिले तयारी",
      title: "NID बनाउन के–के कागजात चाहिन्छ?",
      description: "आफ्नो अवस्था अनुसार कागजात तयार गर्नुहोस्। सक्कल र स्पष्ट कागजात लिएर जानु महत्त्वपूर्ण छ।",
      answerTitle: "मुख्य कुरा",
      answer: "नेपाली नागरिकताको सक्कल प्रमाणपत्र मुख्य कागजात हो। ठेगाना, वैवाहिक अवस्था वा जन्ममिति अनुसार थप सक्कल प्रमाणपत्र आवश्यक पर्न सक्छ।",
      sections: [
        { title: "सबैभन्दा पहिले यो तयार गर्नुहोस्", body: "विभागको आधिकारिक FAQ ले तलका कागजातहरू उल्लेख गरेको छ। तपाईंको अवस्थासँग मिल्ने कागजात मात्र थप रूपमा आवश्यक पर्न सक्छ।" },
        { title: "कार्यालय जानुअघि ध्यान दिनुहोस्", items: ["कागजात स्पष्ट र पढ्न मिल्ने हुनुपर्छ।", "आफैँ सच्याइएको, च्यातिएको, केरमेट भएको वा अस्पष्ट कागजात स्वीकार नहुन सक्छ।", "फोटोकपी मात्रका आधारमा विवरण दर्ता नहुने FAQ मा उल्लेख छ।", "कुनै विशेष अवस्थाबारे निश्चित नभए सम्बन्धित दर्ता इकाईमा पहिले बुझ्नुहोस्।"] }
      ],
      officialLabel: "विभागको आधिकारिक कागजातसम्बन्धी FAQ",
      officialUrl: OFFICIAL.faq,
      reminder: "यो सूची सामान्य तयारीका लागि हो। अन्तिम निर्णय सम्बन्धित सरकारी दर्ता अधिकारी र हालको विभागीय निर्देशनअनुसार हुन्छ।"
    },
    "pre-enrolment": {
      eyebrow: "PRE-ENROLMENT • नयाँ दर्ता",
      title: "पहिलो पटक राष्ट्रिय परिचयपत्र बनाउँदै हुनुहुन्छ?",
      description: "अनलाइन pre-enrolment, आवश्यक सक्कल कागजात र बायोमेट्रिक दर्ताको चरणबद्ध मार्गदर्शन।",
      answerTitle: "पहिले योग्यता बुझ्नुहोस्",
      answer: "विभागको FAQ अनुसार १६ वर्ष उमेर पूरा भई नेपाली नागरिकताको प्रमाणपत्र लिएका व्यक्तिले राष्ट्रिय परिचयपत्रका लागि विवरण दर्ता गराउन सक्छन्। अनलाइन फाराम भरेपछि Application ID वा QR भएको रसिद प्रिन्ट गरी तोकिएको दर्ता इकाईमा बायोमेट्रिक विवरण दिन जानुपर्छ।",
      sections: [
        { title: "१. आवश्यक कागजात तयार गर्नुहोस्", items: ["नेपाली नागरिकताको सक्कल प्रमाणपत्र।", "नागरिकतामा भएको स्थायी ठेगानाभन्दा फरक ठेगाना कायम गर्नुपर्ने भए बसाइँसराइको सक्कल प्रमाणपत्र।", "नागरिकतामा पति/पत्नीको नाम नखुलेको भए विवाह दर्ता, विवाह प्रमाणित वा नाता प्रमाणितको सक्कल प्रमाणपत्र।", "नागरिकतामा जन्ममिति नखुलेको भए जन्मदर्ता, शैक्षिक प्रमाणपत्र, राहदानी वा पेन्सन पट्टाजस्ता आधिकारिक प्रमाण।", "आफ्नो विवरण पुष्टि गर्न आवश्यक पर्ने अन्य सक्कल कागजात।"] },
        { title: "२. आधिकारिक Pre-Enrollment फाराम भर्नुहोस्", body: "सरकारी NID Pre-Enrollment System खोल्नुहोस्। त्यहाँ देखाइएको निर्देशनअनुसार व्यक्तिगत विवरण भर्नुहोस् र उपलब्ध भए biometric appointment छान्नुहोस्। आफ्नो नागरिकता नम्बर वा अन्य व्यक्तिगत विवरण NID Help मा नलेख्नुहोस्।" },
        { title: "३. Application ID / QR रसिद सुरक्षित राख्नुहोस्", body: "फाराम पूरा भएपछि प्रणालीले दिने Application ID वा QR Code भएको रसिद डाउनलोड गरी प्रिन्ट गर्नुहोस्। दर्ता इकाईमा जाँदा रसिद र सक्कल कागजात साथमा लैजानुहोस्।" },
        { title: "४. बायोमेट्रिक दर्ता पूरा गर्नुहोस्", items: ["तोकिएको जिल्ला प्रशासन कार्यालय, दर्ता स्टेशन भएको इलाका प्रशासन कार्यालय वा सञ्चालनमा रहेको आधिकारिक घुम्ती दर्ता इकाईमा जानुहोस्।", "कर्मचारीले सक्कल कागजात जाँच गरी फोटो, औँठाछाप, आँखाको Iris लगायत आवश्यक जैविक विवरण संकलन गर्छन्।", "Confirmation Page मा नाम, जन्ममिति र ठेगाना ध्यान दिएर जाँच्नुहोस्। त्रुटि भए हस्ताक्षर गर्नुअघि सच्याउन भन्नुहोस्।", "कार्ड छापिएपछि SMS आएपछि विवरण दर्ता गराएको स्थानबाट कार्ड संकलन गर्नुहोस्।"] }
      ],
      officialLabel: "NID Pre-Enrollment खोल्नुहोस्",
      officialUrl: OFFICIAL.preEnrolment,
      reminder: "अनलाइन फाराम भर्नु मात्रले दर्ता पूरा हुँदैन। बायोमेट्रिक विवरणका लागि तोकिएको दर्ता इकाईमा स्वयं उपस्थित हुनुपर्छ।"
    },
    "how-to-apply": {
      eyebrow: "नयाँ दर्ता",
      title: "राष्ट्रिय परिचयपत्र कसरी बनाउने?",
      description: "अनलाइन फाराम वा कार्यालयमा उपलब्ध प्रक्रियाबाट सुरु गरी दर्ता इकाईमा बायोमेट्रिक विवरण दिनुपर्छ।",
      answerTitle: "प्रक्रिया एकै नजरमा",
      answer: "योग्यता र कागजात तयार गरेपछि आधिकारिक अनलाइन आवेदन भर्नुहोस्, Application ID/QR सुरक्षित राख्नुहोस् र तोकिएको कार्यालयमा स्वयं उपस्थित भई बायोमेट्रिक दर्ता पूरा गर्नुहोस्।",
      sections: [
        { title: "१. अनलाइन फाराम भर्नुहोस्", body: "विभागको आधिकारिक अनलाइन नामांकन प्रणाली खोल्नुहोस्। त्यहाँ देखाइएको निर्देशनअनुसार आफ्नो जनसांख्यिक विवरण भर्नुहोस्।" },
        { title: "२. Application ID वा QR सुरक्षित राख्नुहोस्", body: "फाराम पूरा भएपछि प्राप्त हुने रसिद सुरक्षित राख्नुहोस् र आवश्यक भए प्रिन्ट गर्नुहोस्। यो दर्ता इकाईमा देखाउनुपर्ने हुन सक्छ।" },
        { title: "३. दर्ता इकाईमा उपस्थित हुनुहोस्", body: "जिल्ला प्रशासन कार्यालय, दर्ता स्टेशन भएको इलाका प्रशासन कार्यालय वा आफ्नो वडामा सञ्चालन भइरहेको आधिकारिक अभियानबारे बुझेर तोकिएको स्थानमा जानुहोस्।" },
        { title: "४. बायोमेट्रिक विवरण र Confirmation Page जाँच", items: ["कर्मचारीले सक्कल कागजात जाँच गर्छन्।", "फोटो, औँठाछाप, Iris र आवश्यक विवरण दर्ता हुन्छ।", "Confirmation Page मा नाम, मिति र ठेगाना ध्यान दिएर जाँच्नुहोस्।", "त्रुटि भए हस्ताक्षर गर्नुअघि कर्मचारीलाई सच्याउन भन्नुहोस्।"] }
      ],
      officialLabel: "आधिकारिक अनलाइन आवेदन",
      officialUrl: OFFICIAL.enrolment,
      reminder: "अनलाइन फाराम भर्दैमा दर्ता पूरा हुँदैन। बायोमेट्रिक विवरणका लागि तोकिएको दर्ता इकाईमा जानुपर्छ।"
    },
    status: {
      eyebrow: "आवेदन जाँच",
      title: "NID आवेदनको अवस्था कसरी हेर्ने?",
      description: "आवेदन नम्बर वा NID नम्बर प्रयोग गरी आधिकारिक Citizen Portal मा अवस्था जाँच गर्न सकिन्छ।",
      answerTitle: "सुरक्षित तरिका",
      answer: "यो वेबसाइटमा आफ्नो आवेदन नम्बर नलेख्नुहोस्। तलको सरकारी लिंक खोल्नुहोस् र त्यहाँको Status Check सेवामा विवरण प्रविष्ट गर्नुहोस्।",
      sections: [
        { title: "अनलाइनबाट जाँच गर्ने", items: ["आधिकारिक Citizen Portal खोल्नुहोस्।", "राष्ट्रिय परिचयपत्र अवस्था जाँच विकल्प छान्नुहोस्।", "सरकारी पोर्टलले मागेको आवेदन नम्बर वा NID नम्बर र CAPTCHA त्यहीँ प्रविष्ट गर्नुहोस्।", "देखिएको परिणाम सरकारी पोर्टलमै पढ्नुहोस्।"] },
        { title: "SMS बाट जानकारी", body: "विभागको FAQ अनुसार N, त्यसपछि एउटा खाली ठाउँ (space), त्यसपछि आवेदन नम्बर राखेर 30001 मा SMS पठाउन सकिन्छ। SMS पठाउने सेवा र सम्भावित शुल्कबारे आफ्नो मोबाइल सेवा प्रदायकसँग बुझ्नुहोस्।" },
        { title: "समय लागेमा", body: "दर्ता स्थान र अभियानअनुसार नम्बर वा कार्डको सूचना आउन समय फरक हुन सक्छ। विभागको आधिकारिक सूचना वा हेल्पलाइनबाट थप जानकारी लिनुहोस्।" }
      ],
      officialLabel: "सरकारी Status Check खोल्नुहोस्",
      officialUrl: OFFICIAL.statusNe,
      reminder: "NID Help ले सरकारी अभिलेखमा पहुँच गर्दैन। आफ्नो आवेदन नम्बर, NID नम्बर वा QR यहाँ पठाउनु हुँदैन।"
    },
    enid: {
      eyebrow: "डिजिटल परिचयपत्र",
      title: "eNID कसरी डाउनलोड गर्ने?",
      description: "विभागको Citizen Portal मा उपलब्ध eNID डाउनलोड सेवाबाट डिजिटल परिचयपत्र प्राप्त गर्न सकिन्छ।",
      answerTitle: "कहाँ जाने?",
      answer: "आधिकारिक Citizen Portal खोल्नुहोस् र eNID डाउनलोड विकल्प छान्नुहोस्। आवश्यक विवरण सरकारी पोर्टलमै भर्नुहोस्; NID Help मा व्यक्तिगत विवरण नलेख्नुहोस्।",
      sections: [
        { title: "डाउनलोड गर्ने सामान्य चरण", items: ["आधिकारिक Citizen Portal खोल्नुहोस्।", "eNID Download विकल्प छान्नुहोस्।", "पोर्टलले मागेको नागरिकता सम्बन्धी विवरण सुरक्षित सरकारी पेजमै प्रविष्ट गर्नुहोस्।", "पोर्टलले देखाउने निर्देशनअनुसार आफ्नो डिजिटल परिचयपत्र प्राप्त गर्नुहोस्।"] },
        { title: "विकल्प नदेखिएमा", body: "पोर्टलको भाषा वा सेवा विकल्प जाँच्नुहोस्। योग्यतासम्बन्धी वा प्राविधिक समस्या भए DoNIDCR को आधिकारिक FAQ र सम्पर्क माध्यम प्रयोग गर्नुहोस्।" }
      ],
      officialLabel: "आधिकारिक Citizen Portal खोल्नुहोस्",
      officialUrl: OFFICIAL.eNidNe,
      reminder: "eNID प्राप्त गर्न नागरिकता नम्बर वा अन्य संवेदनशील विवरण यो वेबसाइटमा कहिल्यै नलेख्नुहोस्।"
    },
    duplicate: {
      eyebrow: "प्रतिलिपि",
      title: "NID कार्ड हरायो वा बिग्रियो भने के गर्ने?",
      description: "कार्ड प्रयोग गर्न नसकिने भए सम्बन्धित कार्यालयमा कारणसहित निवेदन दिएर प्रतिलिपि माग्न सकिन्छ।",
      answerTitle: "विभागको FAQ मा उल्लेखित प्रक्रिया",
      answer: "हराएको, नासिएको वा बिग्रिएको कार्डका लागि सम्बन्धित जिल्ला प्रशासन कार्यालय वा दर्ता स्टेशन भएको इलाका प्रशासन कार्यालयमा कारणसहित निवेदन दिन सकिन्छ।",
      sections: [
        { title: "प्रतिलिपि माग्ने चरण", items: ["कार्ड हराएको वा बिग्रिएको कारण स्पष्ट पार्नुहोस्।", "सम्बन्धित जिल्ला प्रशासन कार्यालय वा दर्ता स्टेशन भएको इलाका प्रशासन कार्यालयमा सम्पर्क गर्नुहोस्।", "कार्यालयले मागेको निवेदन र प्रमाण पेश गर्नुहोस्।", "अभिलेख रुजु भएपछि कार्यालयले दिने निर्देशन पालना गर्नुहोस्।"] },
        { title: "शुल्कबारे", body: "विभागको FAQ र हालको Citizen Portal मा प्रतिलिपि शुल्क रु. ५०० उल्लेख छ। रकम वा भुक्तानी विधि फेरिन सक्ने भएकाले भुक्तानीअघि सरकारी पोर्टलमा पुनः जाँच्नुहोस्।" }
      ],
      officialLabel: "आधिकारिक प्रतिलिपि भुक्तानी पेज",
      officialUrl: OFFICIAL.replacementNe,
      reminder: "कुनै पनि भुक्तानी NID Help मा हुँदैन। रकम, राजस्व शीर्षक र प्रक्रिया सरकारी पोर्टल/कार्यालयबाट पुष्टि गर्नुहोस्।"
    },
    correction: {
      eyebrow: "विवरण सच्याउने",
      title: "NID मा नाम, ठेगाना वा विवरण गलत छ?",
      description: "राष्ट्रिय परिचयपत्रमा त्रुटि भए सम्बन्धित सरकारी दर्ता स्टेशनमा निवेदन दिनुपर्ने विभागको FAQ मा उल्लेख छ।",
      answerTitle: "सच्याउने ठाउँ",
      answer: "सम्बन्धित जिल्ला प्रशासन कार्यालय वा दर्ता स्टेशन भएको इलाका प्रशासन कार्यालयमा निवेदन दिनुहोस्। कुन प्रमाण चाहिन्छ भन्ने कुरा त्रुटिको प्रकारअनुसार कार्यालयसँग पुष्टि गर्नुहोस्।",
      sections: [
        { title: "के गर्ने?", items: ["गलत भएको विवरण पहिचान गर्नुहोस्।", "त्यो विवरण पुष्टि गर्ने आधिकारिक सक्कल प्रमाण तयार गर्नुहोस्।", "सम्बन्धित जिल्ला प्रशासन कार्यालय वा इलाका प्रशासन कार्यालयको दर्ता स्टेशनमा सम्पर्क गर्नुहोस्।", "कार्यालयले तोकेको ढाँचामा निवेदन दिनुहोस् र थप निर्देशन पालना गर्नुहोस्।"] },
        { title: "NID नम्बर परिवर्तन हुन्छ?", body: "विभागको FAQ अनुसार विवरण सच्याउँदा राष्ट्रिय परिचयपत्र नम्बर परिवर्तन हुँदैन।" }
      ],
      officialLabel: "विभागको आधिकारिक FAQ हेर्नुहोस्",
      officialUrl: OFFICIAL.faq,
      reminder: "नागरिकताको मूल विवरण नै गलत भए NID विवरण सच्याउनुअघि सम्बन्धित नागरिकता जारी गर्ने निकायसँग प्रक्रिया बुझ्नुहोस्।"
    },
    faq: {
      eyebrow: "सामान्य प्रश्न",
      title: "राष्ट्रिय परिचयपत्रबारे सोधिने प्रश्न",
      description: "नागरिकले प्रायः सोध्ने प्रश्नको छोटो उत्तर। तथ्यहरू विभागको आधिकारिक FAQ मा आधारित छन्।",
      answerTitle: "स्रोत",
      answer: "तलका उत्तरहरू विभागको सार्वजनिक FAQ बाट सरल भाषामा सारांश गरिएका हुन्। अन्तिम निर्णय र पछिल्लो निर्देशनका लागि सरकारी स्रोत हेर्नुहोस्।",
      sections: [{ title: "प्रश्न खोज्नुहोस्", body: "तलको खोजी बाकसमा आफ्नो प्रश्न वा keyword लेख्नुहोस्।" }],
      officialLabel: "DoNIDCR को सबै FAQ",
      officialUrl: OFFICIAL.faq
    },
    contact: {
      eyebrow: "सहयोग",
      title: "NID सम्बन्धी समस्या परे कहाँ सम्पर्क गर्ने?",
      description: "व्यक्तिगत आवेदन वा अभिलेखसम्बन्धी समस्या विभाग वा सम्बन्धित दर्ता कार्यालयसँग राख्नुहोस्।",
      answerTitle: "आधिकारिक सहायता",
      answer: "विभागको FAQ मा राष्ट्रिय परिचयपत्रसम्बन्धी समस्या वा नम्बरबारे जानकारीका लागि ०१-५९७०४४९ कल सेन्टर उल्लेख छ। सम्पर्क नम्बर परिवर्तन हुन सक्ने भएकाले सरकारी वेबसाइटमा पुनः पुष्टि गर्नुहोस्।",
      sections: [
        { title: "सम्पर्क गर्नुअघि", items: ["समस्या छोटकरीमा टिपोट गर्नुहोस्।", "व्यक्तिगत कागजात सार्वजनिक सामाजिक सञ्जालमा नराख्नुहोस्।", "OTP, password वा QR receipt अपरिचित व्यक्तिलाई नदिनुहोस्।", "कार्यालय जानुपर्ने भए सक्कल कागजात र सम्बन्धित सूचना साथमा राख्नुहोस्।"] },
        { title: "थप आधिकारिक माध्यम", body: "DoNIDCR वेबसाइटमा प्रकाशित सूचना, FAQ र कार्यालयसम्बन्धी विवरण हेर्नुहोस्।" }
      ],
      officialLabel: "DoNIDCR आधिकारिक वेबसाइट",
      officialUrl: OFFICIAL.department
    },
    about: {
      eyebrow: "हाम्रोबारे",
      title: "NID Help के हो?",
      description: "राष्ट्रिय परिचयपत्रको प्रक्रिया बुझ्न नागरिकलाई सहयोग गर्ने स्वतन्त्र, द्विभाषिक मार्गदर्शन।",
      answerTitle: "स्पष्ट सीमाना",
      answer: "NID Help नेपाल सरकार वा राष्ट्रिय परिचयपत्र तथा पञ्जीकरण विभागको वेबसाइट होइन। यसले सूचना बुझ्न सजिलो बनाउँछ र आधिकारिक सेवातर्फ पठाउँछ।",
      sections: [
        { title: "हामी के गर्छौँ", items: ["प्रक्रियालाई सरल भाषामा बुझाउँछौँ।", "कागजात तयारीका लागि सामान्य checklist दिन्छौँ।", "आधिकारिक सरकारी पेज र सम्पर्क स्रोत लिंक गर्छौँ।", "स्रोत र समीक्षा मिति देखाउँछौँ।"] },
        { title: "हामी के गर्दैनौँ", items: ["आवेदन भर्दैनौँ वा सरकारी status जाँच्दैनौँ।", "नागरिकता नम्बर, NID नम्बर, आवेदन ID वा QR संकलन गर्दैनौँ।", "भुक्तानी लिँदैनौँ, कार्ड जारी गर्दैनौँ।", "सरकारी निकायको प्रतिनिधित्व वा सरकारी अनुमोदनको दाबी गर्दैनौँ।"] },
        { title: "गोपनीयता", body: "यो guide मा login, database वा personal-data form छैन। कुनै पनि संवेदनशील काम सरकारी डोमेनमै गर्नुहोस्।" }
      ],
      officialLabel: "आधिकारिक विभाग वेबसाइट",
      officialUrl: OFFICIAL.department
    }
  },
  en: {
    documents: {
      eyebrow: "GET PREPARED",
      title: "Which documents do you need for NID?",
      description: "Prepare documents for your situation. Bring originals that are clear and readable.",
      answerTitle: "The essentials",
      answer: "The original Nepali citizenship certificate is the main document. Depending on your address, marital status or date of birth, additional original evidence may be required.",
      sections: [
        { title: "Start with these documents", body: "The department's official FAQ lists the documents below. Extra documents may apply depending on your circumstances." },
        { title: "Before visiting the office", items: ["Make sure every document is clear and readable.", "Altered, torn, damaged or unclear documents may not be accepted.", "The FAQ says photocopies alone are not accepted for enrolment.", "Ask the relevant enrolment unit about unusual circumstances before travelling."] }
      ],
      officialLabel: "Official document requirements FAQ",
      officialUrl: OFFICIAL.faq,
      reminder: "This checklist is for general preparation. The government enrolment officer and current department instructions determine the final requirements."
    },
    "pre-enrolment": {
      eyebrow: "FIRST-TIME APPLICATION • PRE-ENROLMENT",
      title: "Applying for your first National Identity Card?",
      description: "A step-by-step guide to online pre-enrolment, original documents and in-person biometric registration.",
      answerTitle: "Check eligibility first",
      answer: "The department FAQ says a person who is at least 16 years old and holds a Nepali citizenship certificate can enrol for a National Identity Card. After completing the online form, print the receipt containing your Application ID or QR code and attend the assigned enrolment unit for biometrics.",
      sections: [
        { title: "1. Prepare the required documents", items: ["Original Nepali citizenship certificate.", "Original migration certificate if you need to establish a permanent address different from the one on your citizenship certificate.", "Original marriage registration, marriage verification or relationship verification if your spouse's name is not shown on your citizenship certificate.", "Official date-of-birth evidence if your citizenship certificate does not show it: birth registration, academic certificate, passport or pension record.", "Any other original documents needed to verify your details."] },
        { title: "2. Complete the official Pre-Enrollment form", body: "Open the government NID Pre-Enrollment System. Follow its instructions to enter your demographic details and choose a biometric appointment where the system offers one. Do not enter your citizenship number or other personal details on NID Help." },
        { title: "3. Save and print your Application ID / QR receipt", body: "After submitting the form, download and print the receipt containing your Application ID or QR code. Bring it together with your original documents to the enrolment unit." },
        { title: "4. Complete in-person biometric enrolment", items: ["Visit the assigned District Administration Office, an Area Administration Office with an enrolment station, or an official mobile enrolment unit operating in your area.", "The officer checks your original documents and captures your photograph, fingerprints, iris and other required biometric details.", "Review your name, date of birth and address on the Confirmation Page. Ask for corrections before signing if anything is wrong.", "When you receive an SMS that your card has been printed, collect it from the place where you enrolled."] }
      ],
      officialLabel: "Open NID Pre-Enrollment",
      officialUrl: OFFICIAL.preEnrolment,
      reminder: "Submitting the online form alone does not complete enrolment. You must attend the assigned enrolment unit in person for biometric capture."
    },
    "how-to-apply": {
      eyebrow: "FIRST ENROLMENT",
      title: "How do you apply for a National ID?",
      description: "Start with the online form or the process offered at an office, then attend an enrolment unit for biometrics.",
      answerTitle: "The process at a glance",
      answer: "Prepare your eligibility documents, complete the official online form, keep your Application ID/QR receipt, and attend the assigned office in person for biometric enrolment.",
      sections: [
        { title: "1. Complete the online form", body: "Open the department's official online enrolment system and enter your demographic information as instructed there." },
        { title: "2. Keep your Application ID or QR", body: "Save the receipt provided after completing the form. Print it if required so you can show it at the enrolment unit." },
        { title: "3. Attend the enrolment unit", body: "Confirm the assigned location, such as a District Administration Office, an Area Administration Office with an enrolment station, or an official ward-level campaign." },
        { title: "4. Complete biometrics and review the confirmation page", items: ["The officer checks your original documents.", "Your photograph, fingerprints, iris and required details are recorded.", "Review your name, date and address carefully on the Confirmation Page.", "Ask the officer to correct any error before signing."] }
      ],
      officialLabel: "Official online enrolment",
      officialUrl: OFFICIAL.enrolment,
      reminder: "Completing the online form does not finish enrolment. You still need to attend the assigned enrolment unit for biometrics."
    },
    status: {
      eyebrow: "APPLICATION STATUS",
      title: "How can you check your NID application status?",
      description: "Use your application number or NID number on the official Citizen Portal.",
      answerTitle: "Keep it secure",
      answer: "Do not enter your application number on this website. Open the government link below and use its Status Check service.",
      sections: [
        { title: "Check online", items: ["Open the official Citizen Portal.", "Choose the National ID Status Check service.", "Enter the application number or NID number and CAPTCHA on the government portal only.", "Read the result on the official portal."] },
        { title: "SMS information", body: "The department FAQ says you can send N, followed by a space and your application number, to 30001. Check with your mobile provider about SMS availability and possible charges." },
        { title: "If it is taking time", body: "The time to receive a number or card update can vary by enrolment location and campaign. Check official department notices or contact the helpline." }
      ],
      officialLabel: "Open official Status Check",
      officialUrl: OFFICIAL.statusEn,
      reminder: "NID Help cannot access government records. Never send your application number, NID number or QR receipt to this website."
    },
    enid: {
      eyebrow: "DIGITAL IDENTITY",
      title: "How do you download eNID?",
      description: "The department's Citizen Portal provides an eNID download service.",
      answerTitle: "Where to go",
      answer: "Open the official Citizen Portal and choose the eNID download option. Enter any required details only on the government portal, never on NID Help.",
      sections: [
        { title: "General steps", items: ["Open the official Citizen Portal.", "Choose the eNID Download option.", "Enter the citizenship details requested on the secure government page.", "Follow the portal's instructions to retrieve your digital identity card."] },
        { title: "If you cannot find the option", body: "Check the portal language and service menu. For eligibility or technical questions, use the official DoNIDCR FAQ and contact channels." }
      ],
      officialLabel: "Open official Citizen Portal",
      officialUrl: OFFICIAL.eNidEn,
      reminder: "Never enter your citizenship number or other sensitive details on this website."
    },
    duplicate: {
      eyebrow: "REPLACEMENT",
      title: "What if your NID card is lost or damaged?",
      description: "If your card cannot be used, you can request a replacement from the relevant government office.",
      answerTitle: "What the department FAQ says",
      answer: "For a lost, destroyed or damaged card, the department FAQ says to submit an application explaining the reason to the relevant District Administration Office or an Area Administration Office with an enrolment station.",
      sections: [
        { title: "Request a replacement", items: ["Explain why the card is lost or damaged.", "Contact the relevant District Administration Office or an Area Administration Office with an enrolment station.", "Submit the application and evidence requested by the office.", "Follow the office's instructions after its records have been verified."] },
        { title: "Replacement fee", body: "The department FAQ and current Citizen Portal list a replacement fee of NPR 500. Recheck the amount and payment instructions on the official portal before paying." }
      ],
      officialLabel: "Official replacement payment page",
      officialUrl: OFFICIAL.replacementEn,
      reminder: "NID Help never accepts payments. Confirm the amount, revenue heading and process with the official portal or office."
    },
    correction: {
      eyebrow: "CORRECT YOUR DETAILS",
      title: "Is your name, address or other NID detail incorrect?",
      description: "The department FAQ says that errors in an issued National ID record should be corrected through the relevant government enrolment station.",
      answerTitle: "Where to request a correction",
      answer: "Submit a request at the relevant District Administration Office or an Area Administration Office with an enrolment station. Ask the office which supporting evidence is required for your type of correction.",
      sections: [
        { title: "What to do", items: ["Identify the incorrect detail.", "Prepare original official evidence that confirms the correct information.", "Contact the relevant District or Area Administration Office enrolment station.", "Submit the request in the format required by the office and follow its instructions."] },
        { title: "Will the NID number change?", body: "The department FAQ says the National ID number does not change when details are corrected." }
      ],
      officialLabel: "Read the official department FAQ",
      officialUrl: OFFICIAL.faq,
      reminder: "If the source citizenship record itself is incorrect, ask the issuing authority about correcting it before requesting an NID update."
    },
    faq: {
      eyebrow: "COMMON QUESTIONS",
      title: "National Identity Card questions, answered",
      description: "Quick answers to common questions. The information is summarized from the department's official FAQ.",
      answerTitle: "About these answers",
      answer: "These answers simplify information in the department's public FAQ. Check government sources for the final decision and latest instructions.",
      sections: [{ title: "Search the questions", body: "Use the search box below to find a question or keyword." }],
      officialLabel: "Full DoNIDCR FAQ",
      officialUrl: OFFICIAL.faq
    },
    contact: {
      eyebrow: "GET HELP",
      title: "Where can you get help with an NID issue?",
      description: "Take personal application or record issues to the department or the relevant enrolment office.",
      answerTitle: "Official support",
      answer: "The department FAQ lists 01-5970449 as a call-centre number for National ID questions. Contact details can change, so reconfirm them on the official website.",
      sections: [
        { title: "Before contacting support", items: ["Write down the issue in a few clear sentences.", "Do not post personal documents on public social media.", "Never share an OTP, password or QR receipt with an unknown person.", "Bring original documents and relevant notices if the office asks you to visit."] },
        { title: "Other official information", body: "Check notices, FAQs and office information published on the DoNIDCR website." }
      ],
      officialLabel: "Official DoNIDCR website",
      officialUrl: OFFICIAL.department
    },
    about: {
      eyebrow: "ABOUT THIS GUIDE",
      title: "What is NID Help?",
      description: "An independent, bilingual guide that helps citizens understand Nepal's National Identity Card process.",
      answerTitle: "A clear boundary",
      answer: "NID Help is not a Government of Nepal or Department of National ID and Civil Registration website. It makes public information easier to understand and directs people to official services.",
      sections: [
        { title: "What we do", items: ["Explain processes in plain language.", "Provide a general document-preparation checklist.", "Link to official government pages and support sources.", "Show source references and a review date."] },
        { title: "What we do not do", items: ["Submit applications or check government status.", "Collect citizenship numbers, NID numbers, application IDs or QR receipts.", "Accept payments or issue identity cards.", "Claim government representation, partnership or endorsement."] },
        { title: "Privacy", body: "This guide has no login, database or personal-data form. Complete sensitive tasks only on official government domains." }
      ],
      officialLabel: "Official department website",
      officialUrl: OFFICIAL.department
    }
  }
};

export const navLabels: Record<Locale, { label: string; slug: GuideSlug }[]> = {
  ne: [
    { label: "कागजात", slug: "documents" },
    { label: "कसरी बनाउने", slug: "pre-enrolment" },
    { label: "Status", slug: "status" },
    { label: "FAQ", slug: "faq" }
  ],
  en: [
    { label: "Documents", slug: "documents" },
    { label: "Pre-enrolment", slug: "pre-enrolment" },
    { label: "Status", slug: "status" },
    { label: "FAQ", slug: "faq" }
  ]
};
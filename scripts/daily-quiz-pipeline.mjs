import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const docsDir = path.join(root, "docs");
const ngoDir = path.join(docsDir, "ngo");
const ngoQuizHubDir = path.join(ngoDir, "quizzes");
const queueDir = path.join(root, "release-queue");
const logoSource = path.join(docsDir, "quiz-01-role-field-scenarios", "PF_Logo.jpg");
const queueReadme = path.join(queueDir, "README.md");
const manifestPath = path.join(queueDir, "manifest.json");
const latestWhatsAppMessagePath = path.join(queueDir, "latest-whatsapp-message.txt");

const legacyQuizzes = [
  {
    href: "./beginner/",
    badge: "Beginner",
    count: "10 questions",
    title: "DPDP Beginner Quiz",
    description: "Scenario-based introduction for participants who are getting started with the Digital Personal Data Protection Act 2023 and key Piramal Foundation use cases.",
    audience: "General participants and new learners",
    focus: "Basics, consent, rights, breaches, and children's data",
    cta: "Open beginner quiz"
  },
  {
    href: "./mid-level/",
    badge: "Mid-level",
    count: "10 questions",
    title: "DPDP Mid-Level Quiz",
    description: "Practical scenario set for DPDP Working Group and Implementation Group members covering processors, consent design, rights handling, security safeguards, and readiness planning.",
    audience: "DPDP Working Group and Implementation Group members",
    focus: "Operational readiness and implementation judgment",
    cta: "Open mid-level quiz"
  },
  {
    href: "./mid-level-fresh/",
    badge: "Mid-level Fresh",
    count: "5 questions",
    title: "DPDP Mid-Level Fresh Quiz",
    description: "A fresh scenario set focused on vendor classification, standalone consent notices, rights contact routes, access control gaps, and early readiness actions.",
    audience: "DPDP Working Group and Implementation Group members",
    focus: "Refresher practice and readiness reinforcement",
    cta: "Open fresh quiz"
  },
  {
    href: "./mid-level-a/",
    badge: "Mid-level Quiz A",
    count: "5 questions",
    title: "DPDP Mid-Level Quiz A",
    description: "This set covers grievance timelines, photography consent, aggregate reporting, the Consent Manager milestone, and retention-linked automated erasure.",
    audience: "DPDP Working Group and Implementation Group members",
    focus: "Governance, reporting, timelines, and lifecycle controls",
    cta: "Open Quiz A"
  }
];

const ngoLegacyQuizzes = [
  {
    href: "./beginner/",
    badge: "Beginner",
    count: "10 questions",
    title: "DPDP Beginner Quiz",
    description: "Scenario-based introduction for participants who are getting started with the Digital Personal Data Protection Act 2023 and key NGO use cases in India.",
    audience: "General participants and new learners",
    focus: "Basics, consent, rights, breaches, and children's data",
    cta: "Open beginner quiz"
  },
  {
    href: "./mid-level/",
    badge: "Mid-level",
    count: "10 questions",
    title: "DPDP Mid-Level Quiz",
    description: "Practical scenario set for privacy, programme, and implementation team members covering processors, consent design, rights handling, security safeguards, and readiness planning.",
    audience: "privacy, programme, and implementation team members",
    focus: "Operational readiness and implementation judgment",
    cta: "Open mid-level quiz"
  },
  {
    href: "./mid-level-fresh/",
    badge: "Mid-level Fresh",
    count: "5 questions",
    title: "DPDP Mid-Level Fresh Quiz",
    description: "A fresh scenario set focused on vendor classification, standalone consent notices, rights contact routes, access control gaps, and early readiness actions.",
    audience: "privacy, programme, and implementation team members",
    focus: "Refresher practice and readiness reinforcement",
    cta: "Open fresh quiz"
  },
  {
    href: "./mid-level-a/",
    badge: "Mid-level Quiz A",
    count: "5 questions",
    title: "DPDP Mid-Level Quiz A",
    description: "This set covers grievance timelines, photography consent, aggregate reporting, the Consent Manager milestone, and retention-linked automated erasure.",
    audience: "privacy, programme, and implementation team members",
    focus: "Governance, reporting, timelines, and lifecycle controls",
    cta: "Open Quiz A"
  }
];

const quizCatalog = [
  {
    number: 1,
    slug: "role-field-scenarios",
    shortTitle: "Role Field Scenarios",
    pageTitle: "DPDP Quiz 01 - Role Field Scenarios",
    eyebrow: "DPDP Quiz 01 | Role Field Scenarios",
    heroTitle: "Field Scenarios: Roles, Children, Breaches, and Data Sharing",
    heroIntro: "5 fresh DPDP questions built from the Piramal Foundation DPDP learning pack. This set focuses on role-based judgment in Bihar and Jharkhand field settings, with no repeated question wording from the earlier published quizzes.",
    cardDescription: "Fresh field scenarios across Karuna Fellow, Program Officer, Developer, and BI analyst decisions, with Bihar and Jharkhand examples and no repeated wording from the earlier published quiz sets.",
    audience: "Daily refresher for DPDP learners and implementation teams",
    focus: "Children's data, breaches, consent design, access control, and sharing judgment",
    resultSummary: "This daily set reinforces decisions around children's data, breach response, access control, consent wording, and external sharing.",
    topics: [
      { label: "Role", text: "Karuna Fellow, Program Officer, Developer, and BI analyst decisions" },
      { label: "Field Setting", text: "Bihar and Jharkhand programme scenarios grounded in the training notes" },
      { label: "Focus", text: "Children's data, breach response, consent design, access control, and external sharing" }
    ],
    questions: [
      {
        module: "Children's data",
        topic: "Health camp care versus reporting",
        text: "At a nutrition camp in Bihar, a Karuna Fellow records a child's weight and MUAC for care. The team also wants to use the child's photo later in a donor deck. Which option best matches the DPDP guidance in the learning pack?",
        options: [
          "Both the health record and the donor-use photo can be taken without any further consent",
          "The care-related health recording can rely on the healthcare context, but the donor-use photo needs parental or guardian consent",
          "The photo is allowed without consent if the child's name is not written below it",
          "Neither the care record nor the photo can be collected in a health camp"
        ],
        correct: 1,
        explanation: "The references allow children's health data to be processed for health services in the relevant care context, but photography for reporting or donor use is a separate purpose and needs parental or guardian consent."
      },
      {
        module: "Breach SOP",
        topic: "Lost device response",
        text: "A field implementor in Jharkhand loses a phone carrying unsynced ODK forms with beneficiary details. According to the breach response SOP, what should happen first?",
        options: [
          "Wait until the device is definitely unrecoverable before telling anyone",
          "Delete related entries from the central system to avoid questions",
          "Report the loss to the supervisor and IT immediately so containment steps like remote wipe can begin",
          "Notify the donor first because external reporting has highest priority"
        ],
        correct: 2,
        explanation: "The breach-response SOP is clear that a lost or stolen device with personal data is treated as a breach scenario. The first move is immediate escalation so containment and documentation can start without delay."
      },
      {
        module: "Role guidance",
        topic: "Inactive accounts",
        text: "A developer reviewing a DHIS2 deployment notices old user accounts that have not logged in for over a year but still remain active. Which DPDP-oriented response is most appropriate?",
        options: [
          "Keep them active because unused accounts cannot create risk",
          "Review and deactivate or restrict inactive accounts as part of access-control hygiene",
          "Export the full user list to a public tracker so teams can comment on it",
          "Ignore the issue until the full compliance deadline arrives"
        ],
        correct: 1,
        explanation: "The role guidance and platform audit checklist treat stale access as a security concern. Access should be limited to authorised people who need it, and inactive accounts should be reviewed rather than left open."
      },
      {
        module: "Consent",
        topic: "Specific consent",
        text: "A Program Officer wants a single line in a form saying, \"I agree to all future Piramal Foundation uses of my data.\" Based on the consent guidance, how should this be treated?",
        options: [
          "It is valid because one signature covers all future uses",
          "It is valid if the beneficiary is already receiving programme benefits",
          "It is not valid because consent must be specific and understandable as a standalone notice",
          "It becomes valid if the form is translated into a local language"
        ],
        correct: 2,
        explanation: "The consent references reject blanket future-use language. Consent must be specific to defined purposes, presented clearly, and not hidden inside a broader form or agreement."
      },
      {
        module: "Cross-border sharing",
        topic: "Pseudonymisation",
        text: "A BI analyst plans to share a row-level dataset with an international partner after replacing names with ID numbers, but the IDs can still be linked back internally. What is the best interpretation from the reference notes?",
        options: [
          "This is still personal data because the individuals remain re-identifiable, so aggregation or stronger safeguards should be preferred before sharing",
          "It stops being personal data as soon as names are removed",
          "Cross-border sharing is always banned under DPDP",
          "Sharing is automatically allowed because the recipient is doing analysis"
        ],
        correct: 0,
        explanation: "The BI guidance distinguishes pseudonymisation from anonymisation. If the data can still be linked back to people, it remains personal data and should be handled with purpose, sharing, and agreement controls in mind."
      }
    ]
  },
  {
    number: 2,
    slug: "consent-notices",
    shortTitle: "Consent Notices",
    pageTitle: "DPDP Quiz 02 - Consent Notices",
    eyebrow: "DPDP Quiz 02 | Consent Notices",
    heroTitle: "Consent Notices: Itemised, Standalone, and Verifiable",
    heroIntro: "This daily quiz focuses on the structure of valid consent notices for enrolment, verbal consent, withdrawal, and deemed-consent boundaries in field programmes.",
    cardDescription: "A five-question refresher on what a DPDP-compliant notice must say, how verbal consent is documented, and what still applies when a programme relies on deemed consent.",
    audience: "Implementors, Fellows, and programme teams collecting data in the field",
    focus: "Standalone notices, itemised fields, withdrawal, verbal consent, and deemed-consent limits",
    resultSummary: "This set reinforces the mechanics of valid notice, documentation, and consent withdrawal in day-to-day enrolment workflows.",
    topics: [
      { label: "Obligation Area", text: "Rule 3 notice design and Section 6 consent practice" },
      { label: "Field Setting", text: "Beneficiary enrolment, low-literacy verbal consent, and programme forms" },
      { label: "Focus", text: "Itemised data fields, withdrawal, burden of proof, and consent scope" }
    ],
    questions: [
      {
        module: "Consent templates",
        topic: "Standalone notice",
        text: "A programme team wants to tuck the consent paragraph into page 7 of a long MOU that beneficiaries sign at enrolment. Which response fits the DPDP notice guidance?",
        options: [
          "This is fine as long as the form is signed",
          "This is fine if the MOU is translated into Hindi",
          "The notice should be understandable independently, not buried inside a longer document",
          "It is allowed only for government welfare programmes"
        ],
        correct: 2,
        explanation: "Rule 3 guidance requires the notice to stand on its own so the person can understand the data collection independently of other terms."
      },
      {
        module: "Consent templates",
        topic: "Itemised data collection",
        text: "Which notice wording is closer to the required itemised approach for enrolment?",
        options: [
          "\"We may collect anything useful for programme administration\"",
          "\"We are collecting your name, mobile number, village, and pregnancy status for ANC follow-up\"",
          "\"Your data may be used in any future Piramal Foundation activity\"",
          "\"Details will be explained later if needed\""
        ],
        correct: 1,
        explanation: "The template and Rule 3 guidance call for itemised data fields and a specific purpose, not broad catch-all language."
      },
      {
        module: "Consent",
        topic: "Withdrawing consent",
        text: "A beneficiary asks how to withdraw consent after enrolment. What should the notice already have provided?",
        options: [
          "A reminder that consent cannot be withdrawn once a form is signed",
          "A contact or mechanism for withdrawal that is as easy as giving consent",
          "Only the district office postal address, because field contacts are optional",
          "A statement that withdrawal is available only after one year"
        ],
        correct: 1,
        explanation: "The references say the notice must explain how to withdraw consent, and withdrawal should be as easy as giving consent."
      },
      {
        module: "Verbal consent",
        topic: "Low-literacy settings",
        text: "A Karuna Fellow is collecting data from a beneficiary who cannot read or sign. Which documentation approach matches the reference templates?",
        options: [
          "Record the verbal agreement with date, location, language used, and a witness",
          "Skip documentation because verbal consent is informal",
          "Take a thumb impression without explaining the fields",
          "Ask a neighbour to answer on the beneficiary's behalf"
        ],
        correct: 0,
        explanation: "The verbal-consent template requires the notice to be read out in plain language and the response to be documented with a witness."
      },
      {
        module: "Legitimate uses",
        topic: "Deemed consent limits",
        text: "If a government programme relies on a Section 7 legitimate-use basis instead of a fresh consent form, which statement remains true?",
        options: [
          "Security safeguards and rights handling still matter",
          "The team no longer needs to protect the data carefully",
          "The programme can now use the data for any unrelated purpose",
          "Breach-reporting rules stop applying"
        ],
        correct: 0,
        explanation: "The act-and-rules summary is explicit that deemed consent does not remove obligations around minimisation, security, breach response, or rights requests."
      }
    ]
  },
  {
    number: 3,
    slug: "breach-readiness",
    shortTitle: "Breach Readiness",
    pageTitle: "DPDP Quiz 03 - Breach Readiness",
    eyebrow: "DPDP Quiz 03 | Breach Readiness",
    heroTitle: "Breach Readiness: The First 72 Hours",
    heroIntro: "This set tests immediate judgment when a device is lost, a file goes to the wrong recipient, or a system account is compromised.",
    cardDescription: "Five practical questions on what counts as a breach, when the reporting clock starts, and what must be preserved and notified during the first 72 hours.",
    audience: "IT teams, programme leads, and field staff who may discover incidents first",
    focus: "Breach identification, containment, logs, DPBI notifications, and Data Principal alerts",
    resultSummary: "This quiz strengthens first-response judgment so teams escalate early, preserve evidence, and notify within the required windows.",
    topics: [
      { label: "Project Stage", text: "Incident containment, assessment, and early reporting" },
      { label: "Operational Setting", text: "Lost devices, wrong-channel sharing, and system compromise" },
      { label: "Focus", text: "72-hour clock, evidence preservation, and required notification content" }
    ],
    questions: [
      {
        module: "Breach SOP",
        topic: "What counts as a breach",
        text: "A spreadsheet containing beneficiary names and phone numbers is emailed to the wrong external address. No one knows yet whether the recipient opened it. How should this be classified?",
        options: [
          "Not a breach unless the recipient confirms they opened it",
          "A breach only if more than 100 people were affected",
          "A personal data breach that should be reported and documented",
          "A routine mistake that can be ignored if the sender apologises"
        ],
        correct: 2,
        explanation: "The breach SOP lists wrongful disclosure to an unintended recipient as a breach scenario and says actual harm does not need to be proven first."
      },
      {
        module: "Breach SOP",
        topic: "Clock start",
        text: "When does the 72-hour reporting clock begin under the Piramal Foundation breach SOP?",
        options: [
          "When the legal team finishes investigating",
          "When any person in Piramal Foundation becomes aware of the breach",
          "When the DPBI asks for a report",
          "When the IT team confirms that data left the system"
        ],
        correct: 1,
        explanation: "The SOP says the countdown runs from when any person in the organisation becomes aware, not from when the investigation ends."
      },
      {
        module: "Breach SOP",
        topic: "Technical compromise",
        text: "A developer sees signs of unauthorised access in a programme database. What is the most defensible immediate action sequence from the SOP?",
        options: [
          "Fix the database first and collect logs later if needed",
          "Preserve logs, isolate the affected system, and revoke compromised credentials",
          "Wait for the next business day before involving IT governance",
          "Delete suspicious accounts and avoid screenshots to reduce confusion"
        ],
        correct: 1,
        explanation: "For technical breaches, the SOP prioritises preserving logs before they change, isolating the system, and revoking compromised access."
      },
      {
        module: "Breach SOP",
        topic: "Data Principal notice",
        text: "Which item belongs in the notification to affected Data Principals?",
        options: [
          "Only an apology and no detail, to avoid causing concern",
          "Description of the breach, likely consequences, mitigation steps, and a contact point",
          "The names of internal staff under suspicion",
          "A promise that the incident will never happen again"
        ],
        correct: 1,
        explanation: "Rule 7 notice content includes what happened, likely consequences, mitigation, self-protection guidance, and how to contact Piramal Foundation."
      },
      {
        module: "Breach SOP",
        topic: "Initial DPBI report",
        text: "What should the first DPBI notification include?",
        options: [
          "Only the final root-cause analysis",
          "Nature of breach, approximate extent, timing, location, and likely impact",
          "A list of all future policy changes the organisation might consider",
          "Nothing until every affected beneficiary has replied"
        ],
        correct: 1,
        explanation: "The initial DPBI report is meant to go out without delay with the broad facts available at that stage, not only after a complete investigation."
      }
    ]
  },
  {
    number: 4,
    slug: "childrens-data",
    shortTitle: "Children's Data",
    pageTitle: "DPDP Quiz 04 - Children's Data",
    eyebrow: "DPDP Quiz 04 | Children's Data",
    heroTitle: "Children's Data: Care, Consent, and Prohibited Uses",
    heroIntro: "This quiz concentrates on the under-18 threshold, parental consent, care-related exemptions, and the handling limits that apply to children's data.",
    cardDescription: "A five-question set on child-specific DPDP rules, including healthcare exemptions, photography consent, and prohibited profiling or behavioural tracking.",
    audience: "Karuna Fellows, school-linked teams, and anyone working with minors' data",
    focus: "Under-18 status, parental consent, healthcare and education exemptions, and prohibited uses",
    resultSummary: "This set reinforces when children's data can be processed for care or education and when separate parental permission remains necessary.",
    topics: [
      { label: "Obligation Area", text: "Section 9, Rule 10, Rule 12, and the 4th Schedule" },
      { label: "Field Setting", text: "Nutrition camps, school settings, and donor-facing media use" },
      { label: "Focus", text: "Parental consent, care exemptions, and no profiling or targeted advertising" }
    ],
    questions: [
      {
        module: "Act summary",
        topic: "Who is a child",
        text: "Under the DPDP materials used in this repo, who is treated as a child?",
        options: [
          "Anyone under 16 years of age",
          "Anyone under 18 years of age",
          "Only school-going minors",
          "Only children below 14 years of age"
        ],
        correct: 1,
        explanation: "The act summary defines a child as any individual under 18."
      },
      {
        module: "Children's data",
        topic: "Education setting",
        text: "A school-linked programme tracks attendance and child safety during educational activities. Which statement best fits the listed exemptions?",
        options: [
          "Educational institutions may process that child data for educational activities and safety tracking",
          "All school records require donor consent before they are stored",
          "Children's data can never be processed without Aadhaar verification",
          "Education-related tracking is allowed only after May 2027"
        ],
        correct: 0,
        explanation: "The 4th Schedule includes educational activities and safety tracking as relevant exemption examples for educational institutions."
      },
      {
        module: "Role guidance",
        topic: "Photography",
        text: "A Gandhi Fellow wants to photograph a child at a village event for the Piramal Foundation website. What is the safer DPDP-aligned answer from the role guidance?",
        options: [
          "It is fine if the child smiles on camera",
          "Parental or guardian consent is required before taking or using the photo for that purpose",
          "The photo is fine without consent if no caption is used",
          "Only audio recordings need family permission, not photos"
        ],
        correct: 1,
        explanation: "The field guidance treats identifiable child photography as requiring parental consent, especially for reporting or public-facing use."
      },
      {
        module: "Act summary",
        topic: "Prohibited uses",
        text: "Which use of children's data is explicitly ruled out in the summary guidance?",
        options: [
          "Tracking a child's MUAC for nutrition care",
          "Educational safety monitoring within a school context",
          "Behavioural tracking or targeted advertising aimed at children",
          "Maintaining a clinic record for treatment"
        ],
        correct: 2,
        explanation: "The children's-data section says no behavioural tracking, targeted advertising, or profiling of children."
      },
      {
        module: "Karuna Fellow guidance",
        topic: "Care versus programme use",
        text: "A mother brings her child to a health camp. The team records the child's symptoms for treatment and also wants to upload the same child's identifiable details to a donor-facing story bank. Which option is most accurate?",
        options: [
          "Both uses fall under the same care exemption",
          "Treatment-related recording may rely on the care context, but donor-story use needs separate parental consent",
          "Neither action is allowed because children's data can never be stored",
          "Donor-story use is automatically allowed if the child received services first"
        ],
        correct: 1,
        explanation: "The care exemption is tied to providing health services. Using the child's details for donor-facing storytelling is a different purpose that needs parental consent."
      }
    ]
  },
  {
    number: 5,
    slug: "data-rights",
    shortTitle: "Data Rights",
    pageTitle: "DPDP Quiz 05 - Data Rights",
    eyebrow: "DPDP Quiz 05 | Data Rights",
    heroTitle: "Data Rights: Access, Correction, Erasure, and Grievances",
    heroIntro: "This quiz focuses on what beneficiaries can ask for, how requests are handled, and the 90-day response expectation built into the readiness materials.",
    cardDescription: "A five-question rights refresher covering access, correction, erasure, grievance handling, and the right to nominate another person.",
    audience: "Programme officers, field supervisors, and privacy focal points",
    focus: "Rights logging, escalation, response timelines, and lawful retention exceptions",
    resultSummary: "This set sharpens recognition of beneficiary rights and the steps teams should take when requests arrive through field channels.",
    topics: [
      { label: "Obligation Area", text: "Sections 11 to 14 and Rule 14 grievance handling" },
      { label: "Field Setting", text: "Requests made through Fellows, supervisors, and programme offices" },
      { label: "Focus", text: "Access, correction, erasure, grievances, and nomination" }
    ],
    questions: [
      {
        module: "Rights",
        topic: "Access",
        text: "A beneficiary asks, \"What data do you have about me, and who have you shared it with?\" Which right is being exercised?",
        options: [
          "Right to Access",
          "Right to targeted advertising opt-out",
          "Right to portability",
          "Right to algorithm explanation"
        ],
        correct: 0,
        explanation: "The rights summary defines access as the ability to ask what data is held, how it is used, and who it has been shared with."
      },
      {
        module: "Program Officer guidance",
        topic: "Correction",
        text: "An implementor learns that a beneficiary's age was entered incorrectly in the MIS. What should happen next according to the role guidance?",
        options: [
          "Leave the record unchanged unless the district office instructs otherwise",
          "Correct the data, document the change, and inform the beneficiary it has been updated",
          "Delete the entire record immediately",
          "Tell the beneficiary to come back after the full compliance deadline"
        ],
        correct: 1,
        explanation: "The rights workflow expects inaccurate data to be corrected and the action to be documented."
      },
      {
        module: "Rights",
        topic: "Erasure limits",
        text: "A person asks Piramal Foundation to erase data that may still need to be retained under a government programme record requirement. Which answer is most consistent with the references?",
        options: [
          "The request can be ignored because rights never apply to programme data",
          "The team should log and assess the request because erasure may be limited where retention is legally required",
          "The team must always erase immediately, even if law requires retention",
          "The request is invalid unless it is filed through a lawyer"
        ],
        correct: 1,
        explanation: "The materials say erasure applies unless retention is required by law, so the request must be assessed rather than dismissed or blindly granted."
      },
      {
        module: "Rule 14",
        topic: "Response timeline",
        text: "What is the maximum response timeline the readiness materials use for grievances and rights responses?",
        options: [
          "30 days",
          "45 days",
          "72 hours",
          "90 days"
        ],
        correct: 3,
        explanation: "The rights and grievance references consistently use 90 days as the maximum response timeline."
      },
      {
        module: "Rights",
        topic: "Nomination",
        text: "What does the right to nomination allow?",
        options: [
          "A donor can nominate which fields Piramal Foundation must collect",
          "A beneficiary can designate someone to exercise rights on their behalf in case of death or incapacity",
          "A supervisor can nominate which app to use for data collection",
          "A field worker can nominate a substitute to approve consent"
        ],
        correct: 1,
        explanation: "The nomination right is about appointing someone to act for the Data Principal if they die or become incapacitated."
      }
    ]
  },
  {
    number: 6,
    slug: "bihar-enrolment",
    shortTitle: "Bihar Enrolment",
    pageTitle: "DPDP Quiz 06 - Bihar Enrolment",
    eyebrow: "DPDP Quiz 06 | Bihar Enrolment",
    heroTitle: "Bihar Enrolment: Consent in Real Field Conversations",
    heroIntro: "This set moves into village-level collection practice, including partial refusals, sharing explanations, recording consent, and unsafe communication habits.",
    cardDescription: "Five field-facing questions set in Bihar-style enrolment and survey workflows, with emphasis on respecting refusal and explaining purpose clearly.",
    audience: "Gandhi Fellows, implementors, and programme officers handling household or health enrolment",
    focus: "Partial refusal, sharing explanations, audio consent, photo consent, and WhatsApp risk",
    resultSummary: "This quiz reinforces practical consent behaviour for enrolment visits, household surveys, and beneficiary communication channels.",
    topics: [
      { label: "Location", text: "Village and block-level enrolment scenarios grounded in Bihar programme workflows" },
      { label: "People Role", text: "Gandhi Fellows, implementors, and Programme Officers" },
      { label: "Focus", text: "Respecting refusal, clear explanation, and avoiding insecure sharing" }
    ],
    questions: [
      {
        module: "Learning modules",
        topic: "Partial refusal",
        text: "During a household survey, a beneficiary agrees to most questions but says, \"I do not want to share my income.\" What should the field worker do?",
        options: [
          "Stop the entire survey and leave",
          "Respect the refusal on that field and continue only with the agreed questions",
          "Record an estimated income anyway because one missing field reduces data quality",
          "Tell the beneficiary the programme requires a complete form"
        ],
        correct: 1,
        explanation: "The learning module uses this exact type of scenario to show that a person can refuse a specific data point while still participating in the other agreed collection."
      },
      {
        module: "Consent templates",
        topic: "Explaining sharing",
        text: "Before collecting data, which statement is most aligned with the standard enrolment notice?",
        options: [
          "\"We will explain who sees your data only if you ask later\"",
          "\"This information may be shared with programme staff and the named government partner for the stated programme purpose\"",
          "\"Once collected, your information may be shared with anyone supporting social impact\"",
          "\"The sharing details do not matter if the form is signed\""
        ],
        correct: 1,
        explanation: "The template expects teams to explain who will see the data and keep that sharing within the stated purpose."
      },
      {
        module: "Gandhi Fellow guidance",
        topic: "Audio recording",
        text: "A Fellow wants to record a beneficiary interview on a phone for note-taking. What is the DPDP-aligned move first?",
        options: [
          "Start recording quietly so the conversation stays natural",
          "Explain the recording purpose and ask whether the person agrees before recording",
          "Record first and ask for permission later if the clip is useful",
          "Avoid asking because voice recordings are not personal data"
        ],
        correct: 1,
        explanation: "The field guidance treats recordings as personal data processing and says the person should be told and asked before recording begins."
      },
      {
        module: "Consent templates",
        topic: "Separate media consent",
        text: "A beneficiary already signed an enrolment consent notice for health services. The team now wants to feature her photo in a donor report. Which answer fits the templates?",
        options: [
          "The old enrolment signature automatically covers the donor report photo",
          "A separate photography consent notice should be used for that purpose",
          "Photography needs no consent if the report is internal",
          "Only children's photos need a separate notice"
        ],
        correct: 1,
        explanation: "The templates separate enrolment consent from photography, video, and audio use because those are distinct purposes."
      },
      {
        module: "Breach SOP",
        topic: "Unsafe channels",
        text: "Which practice is directly flagged as a breach risk in the source material?",
        options: [
          "Sharing a named beneficiary health list in a WhatsApp group",
          "Using a witness for verbal consent",
          "Logging a correction request in a rights register",
          "Explaining withdrawal rights in plain language"
        ],
        correct: 0,
        explanation: "Both the learning modules and breach SOP warn against sending named beneficiary data through WhatsApp groups or similar uncontrolled channels."
      }
    ]
  },
  {
    number: 7,
    slug: "developer-safeguards",
    shortTitle: "Developer Safeguards",
    pageTitle: "DPDP Quiz 07 - Developer Safeguards",
    eyebrow: "DPDP Quiz 07 | Developer Safeguards",
    heroTitle: "Developer Safeguards: Logs, Access, Encryption, and Vendors",
    heroIntro: "This quiz is aimed at platform builders and reviewers who need to convert DPDP obligations into concrete technical controls.",
    cardDescription: "A five-question developer-focused set on log retention, ODK device controls, data export access, HTTPS, and vendor security clauses.",
    audience: "Developers, BIDA reviewers, and platform owners",
    focus: "Rule 6 controls, ODK safeguards, analytics access boundaries, and processor contracts",
    resultSummary: "This set reinforces the privacy-by-design controls developers are expected to implement before systems go live.",
    topics: [
      { label: "People Role", text: "Developers, platform owners, and BIDA reviewers" },
      { label: "Platform Setting", text: "DHIS2, ODK, dashboards, and vendor-managed systems" },
      { label: "Focus", text: "Encryption, log retention, role-based access, and security clauses" }
    ],
    questions: [
      {
        module: "Rule 6",
        topic: "Log retention",
        text: "What minimum retention period do the materials repeatedly call for on logs related to personal-data processing?",
        options: [
          "30 days",
          "90 days",
          "1 year",
          "5 years"
        ],
        correct: 2,
        explanation: "The act summary, audit checklist, and role guidance all point to a minimum 1-year retention period for logs."
      },
      {
        module: "ODK checklist",
        topic: "Field device safeguards",
        text: "Which pairing best matches the ODK-specific security expectations in the audit checklist?",
        options: [
          "Public Wi-Fi and longer offline storage",
          "Device encryption and remote wipe capability",
          "Shared passwords and faster exports",
          "Removing sync confirmation to keep forms hidden"
        ],
        correct: 1,
        explanation: "The ODK checklist calls out full-device encryption and remote wipe capability as key controls for lost or stolen field devices."
      },
      {
        module: "Role guidance",
        topic: "Analytics access",
        text: "How should a custom MIS or dashboard normally expose beneficiary-level data to analysts?",
        options: [
          "Show row-level data to every analyst by default",
          "Prefer aggregated or masked views unless someone is explicitly authorised for individual-level access",
          "Export all raw data nightly to avoid access delays",
          "Hide only names but leave everything else open"
        ],
        correct: 1,
        explanation: "The role guidance says analysts should usually work from aggregated or masked views, with row-level access limited to authorised cases."
      },
      {
        module: "DHIS2 checklist",
        topic: "Transport security",
        text: "Which statement is closest to the checklist expectation for DHIS2 access?",
        options: [
          "DHIS2 may be accessed over HTTP if staff are trusted",
          "DHIS2 should be accessed only over HTTPS and keep audit trails enabled",
          "TLS matters only after the full compliance deadline",
          "Audit trails are optional if a password policy exists"
        ],
        correct: 1,
        explanation: "The DHIS2 checklist explicitly asks whether access is HTTPS-only and whether the audit trail is enabled."
      },
      {
        module: "Processor controls",
        topic: "Vendor agreements",
        text: "A platform vendor processes beneficiary data on Piramal Foundation's behalf. What does the source material expect from the contract?",
        options: [
          "No written security clause is needed if the vendor is well known",
          "The contract should require equivalent security safeguards from the Data Processor",
          "Only pricing terms matter because DPDP applies to Piramal Foundation alone",
          "The vendor can decide its own notice and rights process without alignment"
        ],
        correct: 1,
        explanation: "The audit checklist and role guidance both require Data Processor agreements to include equivalent security obligations."
      }
    ]
  },
  {
    number: 8,
    slug: "retention-erasure",
    shortTitle: "Retention and Erasure",
    pageTitle: "DPDP Quiz 08 - Retention and Erasure",
    eyebrow: "DPDP Quiz 08 | Retention and Erasure",
    heroTitle: "Retention and Erasure: Purpose End, Notice, and Legal Hold",
    heroIntro: "This daily set turns to lifecycle decisions after collection: how long data should stay, when it should be erased, and what notice must come before automated deletion.",
    cardDescription: "Five scenario questions on withdrawal, purpose completion, 48-hour pre-erasure notice, legal retention exceptions, and lifecycle cleanup.",
    audience: "Programme managers, system owners, and teams designing deletion workflows",
    focus: "Purpose limitation, legal retention, pre-erasure notice, and end-of-use deletion",
    resultSummary: "This set reinforces that retention must be justified, documented, and linked to purpose, with notice before automated erasure where applicable.",
    topics: [
      { label: "Lifecycle Stage", text: "Retention, deletion, and end-of-purpose cleanup" },
      { label: "Operational Setting", text: "MIS records, recordings, and programme archives" },
      { label: "Focus", text: "Withdrawal, legal retention, and 48-hour notice" }
    ],
    questions: [
      {
        module: "Rule 8",
        topic: "When erasure is triggered",
        text: "According to the summary guidance, when should personal data normally be erased?",
        options: [
          "Only when a donor asks for it",
          "When consent is withdrawn or the specified purpose is no longer being served, unless law requires retention",
          "Exactly one year after collection in every case",
          "Only if the record contains health information"
        ],
        correct: 1,
        explanation: "Section 8(7) and Rule 8 are summarised as requiring erasure when consent is withdrawn or the purpose ends, subject to legal retention requirements."
      },
      {
        module: "Rule 8",
        topic: "Pre-erasure notice",
        text: "What notice should precede automated erasure under the readiness notes?",
        options: [
          "No notice is needed if the policy is written down somewhere",
          "At least 48 hours' notice to the Data Principal before erasure",
          "A one-year notice period",
          "A notice only to the internal audit team"
        ],
        correct: 1,
        explanation: "The retention section says at least 48 hours before erasure, the Data Principal should be notified."
      },
      {
        module: "Rule 6 and 8",
        topic: "Minimum baseline retention",
        text: "Which statement best reflects the baseline retention guidance that appears across the materials?",
        options: [
          "Logs and related personal data should be retained for a minimum of 1 year from processing",
          "All personal data must be deleted within 7 days",
          "Logs are optional if backups exist",
          "Retention is never documented because purpose varies"
        ],
        correct: 0,
        explanation: "The materials repeatedly refer to a minimum 1-year retention expectation for logs, alongside documented retention controls more broadly."
      },
      {
        module: "Program Officer guidance",
        topic: "Legal retention exception",
        text: "A beneficiary asks to delete a record tied to a programme where records may need to be retained by law. What is the most defensible response?",
        options: [
          "Erase it immediately without checking",
          "Refuse the request without logging it",
          "Log and assess it because legally required retention may limit immediate deletion",
          "Tell the beneficiary deletion rights apply only after May 2027"
        ],
        correct: 2,
        explanation: "The references emphasise that deletion requests should be logged and assessed against legal retention obligations rather than ignored or auto-approved."
      },
      {
        module: "Gandhi Fellow guidance",
        topic: "Recordings after purpose ends",
        text: "A field worker recorded an interview only for note-taking and has already used it for the intended summary. What should happen next?",
        options: [
          "Keep the recording forever because storage is cheap",
          "Delete the recording once the purpose is served",
          "Post the recording to the team group for transparency",
          "Transfer it to a personal device for safekeeping"
        ],
        correct: 1,
        explanation: "The field guidance says recordings are personal data and should be deleted after the purpose they served has ended."
      }
    ]
  },
  {
    number: 9,
    slug: "audit-readiness",
    shortTitle: "Audit Readiness",
    pageTitle: "DPDP Quiz 09 - Audit Readiness",
    eyebrow: "DPDP Quiz 09 | Audit Readiness",
    heroTitle: "Audit Readiness: Data Inventory, Backups, and Control Gaps",
    heroIntro: "This quiz covers the questions a platform or programme team should be able to answer before November 2026 readiness reviews.",
    cardDescription: "Five questions built from the platform audit checklist: data inventory, backup testing, VAPT, cross-border hosting visibility, and rights-handling ownership.",
    audience: "BIDA, IT governance, and programme teams preparing platform reviews",
    focus: "Readiness checks, remediation evidence, and ownership of controls",
    resultSummary: "This set helps teams think like auditors: what data exists, where it sits, which controls are provable, and who owns the gaps.",
    topics: [
      { label: "Project Stage", text: "Readiness reviews and pre-compliance gap assessment" },
      { label: "Platform Setting", text: "DHIS2, AMRIT, ODK, Nikshay, and custom MIS" },
      { label: "Focus", text: "Inventory, backups, VAPT, hosting, and rights operations" }
    ],
    questions: [
      {
        module: "Audit checklist",
        topic: "Data inventory",
        text: "What is one of the first audit questions every platform owner should be able to answer?",
        options: [
          "Which logo colour the dashboard uses",
          "Exactly what personal data the platform stores and where it is stored",
          "How many training certificates the team has collected",
          "Which vendor gives the fastest discount"
        ],
        correct: 1,
        explanation: "The general checklist begins with data inventory questions about what personal data exists and where it lives across tables, files, or buckets."
      },
      {
        module: "Audit checklist",
        topic: "Backup confidence",
        text: "Why does the checklist ask whether backups are tested for restorability?",
        options: [
          "Because having backups matters less than restoring them after compromise",
          "Because an untested backup may not actually support continued processing after an incident",
          "Because restore testing is only a finance requirement",
          "Because backups are needed only for public websites"
        ],
        correct: 1,
        explanation: "Rule 6 readiness is not just about having backups on paper; they should work when data is compromised and continued processing is needed."
      },
      {
        module: "Audit checklist",
        topic: "VAPT",
        text: "Which control area does the checklist connect to VAPT scheduling or recent VAPT reports?",
        options: [
          "Security safeguards",
          "Photography consent",
          "Nomination rights",
          "Language translation only"
        ],
        correct: 0,
        explanation: "VAPT is part of the security-safeguards evidence expected for platforms such as AMRIT and other systems handling personal data."
      },
      {
        module: "Audit checklist",
        topic: "Hosting visibility",
        text: "The platform audit asks whether data is transferred to servers outside India. Why is that worth documenting even when transfers may currently be allowed?",
        options: [
          "Because cross-border hosting is never relevant under DPDP",
          "Because the hosting arrangement should be known, documented, and monitored against future restrictions",
          "Because only donors care where data is hosted",
          "Because foreign servers automatically convert the platform into a government system"
        ],
        correct: 1,
        explanation: "The checklist treats hosting location as part of data mapping and cross-border awareness so the organisation can monitor restrictions and explain its setup."
      },
      {
        module: "Rights workflow",
        topic: "Operational ownership",
        text: "What does the audit checklist expect regarding Data Principal rights handling?",
        options: [
          "Rights requests should be handled informally with no owner",
          "There should be a designated person and a process capable of resolving grievances within 90 days",
          "Only the software vendor needs to understand rights requests",
          "Rights handling starts only after a breach occurs"
        ],
        correct: 1,
        explanation: "The rights section of the checklist asks for a designated handler and the ability to resolve grievances within the 90-day limit."
      }
    ]
  },
  {
    number: 10,
    slug: "intermediate-sharing",
    shortTitle: "Intermediate Sharing",
    pageTitle: "DPDP Quiz 10 - Intermediate Sharing",
    eyebrow: "DPDP Quiz 10 | Intermediate Sharing",
    heroTitle: "Intermediate Sharing Decisions: Partners, Reports, and Transfer Boundaries",
    heroIntro: "This quiz takes an intermediate look at external sharing choices, from donor reports and processors to cross-border transfers and government reporting.",
    cardDescription: "Five sharing scenarios covering aggregated reports, processor agreements, lawful government disclosure, pseudonymised files, and the current transfer model.",
    audience: "Intermediate learners, programme leads, and BI or partnership teams",
    focus: "Purpose limitation, partner agreements, aggregation, and transfer conditions",
    resultSummary: "This set sharpens judgment about when sharing is lower risk, when it needs contracts, and when a dataset still remains personal data.",
    topics: [
      { label: "Difficulty Level", text: "Intermediate applied judgment across sharing scenarios" },
      { label: "Partnership Setting", text: "Donors, vendors, government systems, and overseas partners" },
      { label: "Focus", text: "Aggregation, agreements, lawful disclosure, and transfer limits" }
    ],
    questions: [
      {
        module: "Cross-border transfers",
        topic: "Current transfer model",
        text: "As described in the allowed source material, how do cross-border transfers currently work?",
        options: [
          "All cross-border transfers are banned until a licence is granted",
          "Transfers are generally permitted unless the government restricts a specific country or entity",
          "Only health programmes may transfer data internationally",
          "Only anonymised statistics may leave India under any circumstances"
        ],
        correct: 1,
        explanation: "The act summary describes a negative-list model: transfers are allowed unless the government later restricts a particular country or entity."
      },
      {
        module: "Audit checklist",
        topic: "External processors",
        text: "A vendor will process beneficiary-level data on Piramal Foundation's behalf for a platform feature. What should exist before treating that as routine sharing?",
        options: [
          "A data processing agreement with security requirements",
          "Only a pricing schedule",
          "A donor appreciation letter",
          "Nothing written if the vendor is already trusted"
        ],
        correct: 0,
        explanation: "The audit checklist asks whether a Data Processing Agreement is in place when data is shared with external processors."
      },
      {
        module: "Learning modules",
        topic: "Lower-risk reporting",
        text: "Which reporting approach is presented as lower risk in the source material?",
        options: [
          "Sharing named case records with every donor by default",
          "Using aggregate or anonymised statistics where individuals cannot be identified",
          "Publishing row-level exports without names",
          "Using beneficiary photos whenever numbers look too small"
        ],
        correct: 1,
        explanation: "The materials repeatedly point to aggregated or anonymised reporting as lower risk, provided re-identification is avoided."
      },
      {
        module: "Legitimate uses",
        topic: "Government disclosure",
        text: "Which sharing situation is explicitly recognised in the act summary as a legal-basis example?",
        options: [
          "Sending beneficiary data to any private company that asks for it",
          "Disclosing information where law requires reporting to the State for programme purposes",
          "Reusing programme data for unrelated marketing",
          "Forwarding personal records through unofficial groups because the programme is urgent"
        ],
        correct: 1,
        explanation: "Section 7 and related examples include lawful disclosure for State functions or mandatory reporting under relevant programme laws."
      },
      {
        module: "Role guidance",
        topic: "Linked IDs",
        text: "A data file sent to a partner removes names but keeps IDs that Piramal Foundation can map back to individuals. What is the most accurate classification?",
        options: [
          "The file is fully anonymous because names are gone",
          "The file remains personal data because the individuals can still be re-identified",
          "The file becomes exempt from every security safeguard",
          "The file is automatically public information"
        ],
        correct: 1,
        explanation: "The role guidance distinguishes true anonymisation from linked pseudonyms that can still point back to people."
      }
    ]
  },
  {
    number: 11,
    slug: "bi-analyst-transfers",
    shortTitle: "BI Analyst Transfers",
    pageTitle: "DPDP Quiz 11 - BI Analyst Transfers",
    eyebrow: "DPDP Quiz 11 | BI Analyst Transfers",
    heroTitle: "BI Analyst Judgment: Small Counts, Exports, and Transfers",
    heroIntro: "This advanced daily set looks at data-analysis risks that arise after collection, especially around re-identification, exports, and hosted systems.",
    cardDescription: "Five BI-oriented questions on small-cell disclosure, export logs, compromise of cloud accounts, row-level access, and the still-unpublished restricted-country list.",
    audience: "BI analysts, reporting teams, and data governance reviewers",
    focus: "Re-identification risk, export controls, cloud incidents, access scope, and transfer monitoring",
    resultSummary: "This set reinforces that analytical convenience does not remove privacy obligations around identifiability, exports, or hosted infrastructure.",
    topics: [
      { label: "People Role", text: "BI and reporting teams working with programme datasets" },
      { label: "Difficulty Level", text: "Advanced judgment on analysis and transfer scenarios" },
      { label: "Focus", text: "Small counts, cloud compromise, export logs, and transfer monitoring" }
    ],
    questions: [
      {
        module: "Mid-level guidance",
        topic: "Small counts",
        text: "Why can a very small count in an aggregated health table still be risky?",
        options: [
          "Because small counts can make re-identification easier in rare conditions or small geographies",
          "Because counts below 10 are automatically illegal",
          "Because aggregation never reduces risk",
          "Because the DPDP materials forbid all reporting summaries"
        ],
        correct: 0,
        explanation: "The existing quiz set and learning notes warn that tiny cell sizes can still reveal individuals in rare-condition or small-area contexts."
      },
      {
        module: "Custom MIS checklist",
        topic: "Export controls",
        text: "What is the checklist trying to control when it asks whether bulk data exports are logged and restricted?",
        options: [
          "Whether analysts can change the company logo",
          "Who downloaded beneficiary-level data and when",
          "How often newsletters are sent",
          "Which browser staff prefer"
        ],
        correct: 1,
        explanation: "The audit checklist wants visibility into who exported data and whether that ability is limited to authorised roles."
      },
      {
        module: "Breach SOP",
        topic: "Compromised cloud storage",
        text: "A cloud storage account containing beneficiary files is compromised. How is that treated in the SOP?",
        options: [
          "As a breach scenario that triggers the incident workflow",
          "As a routine infrastructure issue unrelated to DPDP",
          "As a low-priority event only if files were encrypted",
          "As a problem only if the account was outside India"
        ],
        correct: 0,
        explanation: "The breach SOP explicitly lists compromised cloud storage accounts as breach scenarios."
      },
      {
        module: "Role guidance",
        topic: "Dashboard scope",
        text: "Which design choice best matches the guidance for analytical dashboards?",
        options: [
          "Expose beneficiary-level rows to all viewers to reduce friction",
          "Use aggregated views by default and limit row-level access to authorised cases",
          "Disable logging so analysts feel less monitored",
          "Let each analyst decide whether consent was broad enough"
        ],
        correct: 1,
        explanation: "The role guidance for custom MIS and dashboards prefers aggregated or masked views with restricted row-level access."
      },
      {
        module: "Cross-border transfers",
        topic: "Restricted-country list",
        text: "What do the source materials say about the government's restricted-country list as of mid-2026?",
        options: [
          "It had already banned every major cloud provider",
          "It had not yet been published",
          "It applied only to paper records",
          "It required Piramal Foundation to stop all international reporting immediately"
        ],
        correct: 1,
        explanation: "The act summary states that, as of mid-2026, the government had not yet published the restricted-country list."
      }
    ]
  },
  {
    number: 12,
    slug: "advanced-field-escalations",
    shortTitle: "Advanced Field Escalations",
    pageTitle: "DPDP Quiz 12 - Advanced Field Escalations",
    eyebrow: "DPDP Quiz 12 | Advanced Field Escalations",
    heroTitle: "Advanced Field Escalations: Distress, Sharing Pressure, and Deadline Judgment",
    heroIntro: "This final queued set focuses on harder field calls where teams are pressured to share, improvise, or postpone action beyond what the references support.",
    cardDescription: "Five advanced questions on distressed beneficiaries, third-party sharing pressure, out-of-scope data requests, Phase I obligations, and rollout-date planning.",
    audience: "Experienced field leads, programme managers, and escalation points",
    focus: "Calm escalation, out-of-scope requests, complaint readiness, and date-based planning",
    resultSummary: "This set reinforces that difficult field situations still need calm rights handling, scope checks, and immediate escalation rather than improvisation.",
    topics: [
      { label: "Difficulty Level", text: "Advanced scenario judgment under pressure" },
      { label: "People Role", text: "Field leads, programme managers, and escalation contacts" },
      { label: "Focus", text: "Distress handling, third-party pressure, complaints, and rollout dates" }
    ],
    questions: [
      {
        module: "Karuna Fellow guidance",
        topic: "Distressed beneficiary",
        text: "A family member becomes upset during data collection and says they do not want the team writing anything further. What is the safer DPDP-aligned response?",
        options: [
          "Continue quickly before they change their mind again",
          "Stop, reassure them, and escalate the concern through the programme chain",
          "Tell them the programme rules make consent optional",
          "Ask a neighbour to persuade them on the team's behalf"
        ],
        correct: 1,
        explanation: "The role guidance says distress about data collection is a stop-and-escalate moment, not something to push through."
      },
      {
        module: "Karuna Fellow guidance",
        topic: "Third-party request",
        text: "A local employer asks a Fellow to share a beneficiary's health information \"just to help coordinate support.\" What should the Fellow do?",
        options: [
          "Share it if the employer sounds trustworthy",
          "Do not share it without the beneficiary's knowledge; escalate the request",
          "Share only the diagnosis but hide the phone number",
          "Post the update in the work WhatsApp group first"
        ],
        correct: 1,
        explanation: "The health-role guidance is direct: do not share beneficiary health information with third parties without proper basis and escalation."
      },
      {
        module: "Program Officer guidance",
        topic: "Out-of-scope partner ask",
        text: "A partner requests individual-level programme data, but the existing consent notice did not clearly cover sharing with that partner. What is the best next step?",
        options: [
          "Send the file anyway because the partner works on social impact",
          "Check whether the sharing is within scope; if not, escalate before sharing",
          "Rename the columns and send the data immediately",
          "Assume implied consent because the data was collected for a good cause"
        ],
        correct: 1,
        explanation: "The programme guidance says individual-level sharing requests outside the normal scope should be checked against the notice and escalated if not clearly covered."
      },
      {
        module: "Compliance timeline",
        topic: "Current obligations",
        text: "What does the timeline say is already true from Phase I, dated 13 November 2025?",
        options: [
          "The DPBI exists and grievance complaints are already possible",
          "All core rules became fully enforceable on that date",
          "Consent Manager registration had already become mandatory for Piramal Foundation",
          "Children's-data workflows no longer needed preparation"
        ],
        correct: 0,
        explanation: "Phase I is when the DPBI was constituted and complaints became live; it is not the full compliance date."
      },
      {
        module: "Compliance timeline",
        topic: "Planning target",
        text: "Which planning stance matches the timeline note in the allowed references as of mid-2026?",
        options: [
          "Ignore November 2026 entirely and wait until 2028",
          "Assume the gazette already moved everything to November 2026",
          "Treat 13 November 2026 as the readiness target while keeping 13 May 2027 as the confirmed hard deadline",
          "Postpone every DPDP workstream until a formal DPO is appointed"
        ],
        correct: 2,
        explanation: "The timeline note says the proposed acceleration had not been confirmed, so teams should prepare for November 2026 while treating 13 May 2027 as the hard deadline."
      }
    ]
  },
  {
    number: 13,
    slug: "jharkhand-health-outreach",
    shortTitle: "Jharkhand Health Outreach",
    pageTitle: "DPDP Quiz 13 - Jharkhand Health Outreach",
    eyebrow: "DPDP Quiz 13 | Jharkhand Health Outreach",
    heroTitle: "Jharkhand Health Outreach: Care Data, Photos, and Referrals",
    heroIntro: "This queue set uses Jharkhand outreach scenarios to test when health-related processing can rely on care delivery and when teams still need separate consent or tighter sharing discipline.",
    cardDescription: "Five field-health questions on care versus reporting, referral sharing, voice notes, and how to handle data during direct outreach work.",
    audience: "Karuna Fellows, implementors, and programme leads working in field health settings",
    focus: "Health-service processing, referral sharing, media consent, and field handling judgment",
    resultSummary: "This set reinforces how health outreach teams should separate direct care activity from reporting, media, and informal sharing.",
    topics: [
      { label: "Location", text: "Jharkhand outreach and camp-based service settings" },
      { label: "People Role", text: "Karuna Fellows, implementors, and referral coordinators" },
      { label: "Focus", text: "Care context, referral scope, and extra consent for non-care uses" }
    ],
    questions: [
      {
        module: "Karuna Fellow guidance",
        topic: "Care-linked processing",
        text: "At a maternal-health outreach visit in Jharkhand, a Karuna Fellow records symptoms and referral notes so a beneficiary can be connected to care. Which legal framing best matches the source material?",
        options: [
          "This can sit within the healthcare or care context for service delivery",
          "This always needs a donor-facing photography consent form first",
          "This is banned unless a district magistrate signs the register",
          "This is allowed only after the full Phase III deadline arrives"
        ],
        correct: 0,
        explanation: "The role guidance and act summary treat care-related health processing in the healthcare context differently from separate media or reporting uses."
      },
      {
        module: "Consent templates",
        topic: "Referral sharing",
        text: "A field worker wants to pass a beneficiary's phone number and referral note to the named health partner already described in the enrolment explanation. What makes that sharing easier to justify under the templates?",
        options: [
          "The sharing was within the stated purpose and explained recipient list",
          "The worker personally knows the doctor receiving it",
          "The beneficiary data is always public after enrolment",
          "Any health-related sharing is exempt from documentation"
        ],
        correct: 0,
        explanation: "The enrolment notice template expects teams to state who will see the data and keep sharing inside that explained purpose."
      },
      {
        module: "Karuna Fellow guidance",
        topic: "Voice note summary",
        text: "A Fellow records a beneficiary's explanation as a voice note for later follow-up. Once the note has been used for the intended follow-up, what is the better practice from the role guidance?",
        options: [
          "Keep the note permanently in a personal phone archive",
          "Delete the note once the purpose has been served",
          "Forward the note to all field staff for cross-learning",
          "Upload it to social media to document field realities"
        ],
        correct: 1,
        explanation: "The field-role guidance treats recordings as personal data and says they should not be retained once the intended purpose is over."
      },
      {
        module: "Children's data",
        topic: "Camp photography",
        text: "During a child-health camp, a team member says the medical check-up already happened, so a photo for the annual impact story can now be taken without further steps. What is the more accurate answer?",
        options: [
          "The check-up automatically covers every later storytelling use",
          "The impact-story photo is a separate purpose and still needs parental or guardian consent",
          "Photos stop being personal data if the child is not named",
          "Children's images may be reused freely after any health interaction"
        ],
        correct: 1,
        explanation: "The allowed references separate care-related processing from photography and donor-storytelling uses, especially for children."
      },
      {
        module: "Breach SOP",
        topic: "Field register handling",
        text: "A paper register with names and health details is left behind after an outreach activity. Which response best matches the breach mindset in the source material?",
        options: [
          "Treat it as a potential breach event and escalate rather than quietly replacing it",
          "Ignore it because the register was not digital",
          "Wait a week in case the notebook turns up on its own",
          "Post a photo of the missing register in a public group for help"
        ],
        correct: 0,
        explanation: "The breach guidance emphasises early reporting of loss or exposure rather than waiting for confirmed harm or improvising in public channels."
      }
    ]
  },
  {
    number: 14,
    slug: "processor-contracts",
    shortTitle: "Processor Contracts",
    pageTitle: "DPDP Quiz 14 - Processor Contracts",
    eyebrow: "DPDP Quiz 14 | Processor Contracts",
    heroTitle: "Processor Contracts: Vendors, Scope, and Security Clauses",
    heroIntro: "This set focuses on what Piramal Foundation should lock down when another organisation processes personal data on its behalf.",
    cardDescription: "Five operational questions on processor agreements, role clarity, security clauses, hosted services, and vendor access boundaries.",
    audience: "Programme managers, IT governance leads, developers, and procurement reviewers",
    focus: "Data Processor role clarity, equivalent safeguards, and contract-backed control",
    resultSummary: "This set reinforces that vendor convenience is not enough; processing relationships need documented scope and equivalent security obligations.",
    topics: [
      { label: "Obligation Area", text: "Data Processor contracts and role clarity" },
      { label: "People Role", text: "IT governance, legal, BIDA, and platform teams" },
      { label: "Focus", text: "Scope, security clauses, hosted access, and review triggers" }
    ],
    questions: [
      {
        module: "Act summary",
        topic: "Processor definition",
        text: "Which description best matches a Data Processor in the DPDP materials used for this repo?",
        options: [
          "An organisation that processes data on behalf of a Data Fiduciary",
          "Any beneficiary who provides information to a programme",
          "Only a government office that mandates reporting",
          "A volunteer who explains a consent notice in the field"
        ],
        correct: 0,
        explanation: "The act summary defines a processor as an entity handling data on behalf of the organisation that decides purpose and means."
      },
      {
        module: "Audit checklist",
        topic: "Before sharing to a vendor",
        text: "A custom MIS vendor will store beneficiary-level records for Piramal Foundation. What should be in place before treating that as ordinary workflow?",
        options: [
          "A written agreement requiring equivalent security safeguards",
          "Only a verbal understanding because the vendor is familiar with the programme",
          "A promise that the vendor will decide rights responses alone",
          "Nothing further if the data is useful for service improvement"
        ],
        correct: 0,
        explanation: "Both the audit checklist and role guidance call for processor contracts to include equivalent security obligations."
      },
      {
        module: "Nikshay checklist",
        topic: "Role clarity",
        text: "Why does the Nikshay integration checklist ask teams to clarify whether Piramal Foundation is acting as a processor or in another role?",
        options: [
          "Because role clarity affects what contract and operational obligations should be documented",
          "Because the label changes the colour theme of the dashboard",
          "Because only processors need to protect personal data",
          "Because the answer decides whether data becomes public"
        ],
        correct: 0,
        explanation: "The source notes tie role clarity to the right agreement structure and to how processing obligations are framed."
      },
      {
        module: "Developer guidance",
        topic: "Vendor access",
        text: "A vendor engineer asks for broad always-on access to production beneficiary data \"just in case.\" Which response best fits the repo's DPDP references?",
        options: [
          "Grant broad access because speed matters more than scope control",
          "Limit access to what is necessary and align it with role-based controls",
          "Send weekly exports instead so access logs are unnecessary",
          "Replace all account review with a confidentiality email"
        ],
        correct: 1,
        explanation: "The guidance repeatedly pushes minimum necessary access, RBAC, and auditable control rather than broad standing visibility."
      },
      {
        module: "Audit checklist",
        topic: "Hosted location awareness",
        text: "A vendor says the platform may use cloud regions outside India. What does the checklist suggest Piramal Foundation should at least do?",
        options: [
          "Document the hosting arrangement and monitor it against transfer restrictions",
          "Assume the vendor's architecture is irrelevant to DPDP",
          "Ban the platform automatically without reviewing the setup",
          "Treat external hosting as a branding issue, not a data issue"
        ],
        correct: 0,
        explanation: "The audit checklist asks teams to know and document where data is stored or transferred so the setup can be explained and monitored."
      }
    ]
  },
  {
    number: 15,
    slug: "consent-manager-readiness",
    shortTitle: "Consent Manager Readiness",
    pageTitle: "DPDP Quiz 15 - Consent Manager Readiness",
    eyebrow: "DPDP Quiz 15 | Consent Manager Readiness",
    heroTitle: "Consent Manager Readiness: ABDM, Timeline, and Scope Checks",
    heroIntro: "This set focuses on the timeline and practical planning questions around Consent Manager readiness and ABDM-aligned workflows.",
    cardDescription: "Five timeline and design questions on the Consent Manager milestone, ABDM gaps, and how teams should plan before the formal framework becomes active.",
    audience: "ABDM teams, platform owners, developers, and implementation planners",
    focus: "Phase II timing, readiness planning, ABDM notice gaps, and withdrawal design",
    resultSummary: "This set reinforces that Consent Manager work is a planning track with concrete dates and unresolved notice-design checks, not an excuse to defer DPDP basics.",
    topics: [
      { label: "Project Stage", text: "Consent Manager readiness and pre-activation planning" },
      { label: "Platform Setting", text: "ABDM-linked systems and consent workflow design" },
      { label: "Focus", text: "Phase II date, scope questions, and withdrawal usability" }
    ],
    questions: [
      {
        module: "Compliance timeline",
        topic: "Phase II milestone",
        text: "According to the allowed reference timeline, when does the Consent Manager framework become active?",
        options: [
          "13 November 2025",
          "13 May 2027",
          "13 November 2026",
          "13 January 2026"
        ],
        correct: 2,
        explanation: "The compliance timeline marks 13 November 2026 as the Phase II milestone for the Consent Manager framework."
      },
      {
        module: "Developer guidance",
        topic: "ABDM gap check",
        text: "What is one of the explicit DPDP questions the developer guidance says teams should assess about ABDM-linked consent flows?",
        options: [
          "Whether the notice satisfies Rule 3 itemised-notice requirements",
          "Whether the app icon uses government colours",
          "Whether every user has a private printer",
          "Whether beneficiary records can be used for any later analytics"
        ],
        correct: 0,
        explanation: "The ABDM note in the role guidance specifically asks whether its consent notice covers Rule 3 style itemisation and related DPDP expectations."
      },
      {
        module: "Consent",
        topic: "Withdrawal ease",
        text: "Which design principle from the source material still applies when a platform team builds a consent-management experience?",
        options: [
          "Withdrawal should be as easy as giving consent",
          "Withdrawal may be hidden as long as a legal team can find it",
          "Withdrawal works only for children, not adults",
          "Withdrawal is optional if the platform is modern"
        ],
        correct: 0,
        explanation: "The consent guidance is explicit that withdrawal must be as easy as the original act of giving consent."
      },
      {
        module: "Compliance timeline",
        topic: "Readiness stance",
        text: "Why do the timeline notes encourage work before November 2026 even though the full compliance hard deadline remains later?",
        options: [
          "Because November 2026 is treated as a prudent readiness target",
          "Because every rule already became enforceable in 2025",
          "Because only field teams need to prepare early",
          "Because the Act stops applying after Phase II begins"
        ],
        correct: 0,
        explanation: "The timeline guidance explicitly says teams should treat November 2026 as a readiness target even while retaining May 2027 as the hard deadline."
      },
      {
        module: "Role guidance",
        topic: "Beyond ABDM",
        text: "If a platform uses ABDM-linked consent but also processes data for a use that goes beyond ABDM-consented record sharing, what does the repo guidance suggest?",
        options: [
          "Assume ABDM automatically covers every additional purpose",
          "Treat ABDM consent as complementary and assess whether an extra DPDP-specific layer is needed",
          "Ignore DPDP because ABDM predates it",
          "Convert all extra uses into public-interest research by default"
        ],
        correct: 1,
        explanation: "The developer guidance says ABDM consent may be complementary rather than sufficient for every additional processing purpose."
      }
    ]
  },
  {
    number: 16,
    slug: "donor-reporting",
    shortTitle: "Donor Reporting",
    pageTitle: "DPDP Quiz 16 - Donor Reporting",
    eyebrow: "DPDP Quiz 16 | Donor Reporting",
    heroTitle: "Donor Reporting: Aggregation, Stories, and Identifiability",
    heroIntro: "This set concentrates on how reporting teams should handle programme evidence without stretching consent or exposing identifiable people unnecessarily.",
    cardDescription: "Five reporting questions on photos, aggregate statistics, small cell risk, personal stories, and international partner sharing.",
    audience: "BI teams, communication leads, donor-reporting teams, and programme managers",
    focus: "Aggregate reporting, identifiable stories, small counts, and scope-conscious sharing",
    resultSummary: "This set reinforces how to keep donor reporting useful while avoiding casual drift into unnecessary identifiable sharing.",
    topics: [
      { label: "Lifecycle Stage", text: "Reporting and evidence-sharing after programme delivery" },
      { label: "People Role", text: "BI, communications, and donor-reporting teams" },
      { label: "Focus", text: "Aggregation, story consent, small counts, and recipient scope" }
    ],
    questions: [
      {
        module: "Consent templates",
        topic: "Media purpose specificity",
        text: "A communications team wants to reuse a beneficiary photo in a donor report, but the original explanation covered only internal programme documentation. What is the safer interpretation?",
        options: [
          "Internal documentation automatically includes donor-facing publication",
          "The donor-report use is a separate purpose that should be covered specifically",
          "The photo is free to use because it helps a good cause",
          "No consent issue arises if the beneficiary's district is omitted"
        ],
        correct: 1,
        explanation: "The photography template calls for purpose-specific use rather than assuming one media explanation covers later external publication."
      },
      {
        module: "Role guidance",
        topic: "Aggregate preference",
        text: "Which reporting approach is more aligned with the DPDP guidance when a donor only needs programme performance patterns?",
        options: [
          "Aggregate or anonymised reporting where individuals cannot be identified",
          "Row-level exports because donors prefer detail",
          "Screenshots of the full MIS with names masked by hand",
          "Health lists shared through chat for convenience"
        ],
        correct: 0,
        explanation: "The BI and reporting guidance points toward aggregated or anonymised reporting when individual-level records are not necessary."
      },
      {
        module: "Mid-level guidance",
        topic: "Rare-condition table",
        text: "A donor table shows only two cases of a rare condition in a single small block. Why might that still deserve caution even if names are absent?",
        options: [
          "Because a very small count can still make people easier to identify",
          "Because counts below five are always unlawful by rule",
          "Because donor reports cannot contain any numbers",
          "Because block-level data is automatically classified as biometric"
        ],
        correct: 0,
        explanation: "The repo's existing BI guidance warns that small-cell outputs can still create re-identification risk in narrow geographies or rare conditions."
      },
      {
        module: "Cross-border transfers",
        topic: "International funder sharing",
        text: "The source material notes that international sharing may be permissible under the current transfer model. What still continues to matter?",
        options: [
          "Purpose limitation and minimisation still apply",
          "Every cross-border share becomes public-domain data",
          "Security controls no longer matter once a donor is involved",
          "The transfer model removes the need for recipient scrutiny"
        ],
        correct: 0,
        explanation: "The transfer section says current permissibility does not remove the need for purpose discipline and data minimisation."
      },
      {
        module: "Consent templates",
        topic: "Story bank assumptions",
        text: "A programme team argues that once a beneficiary gave a positive interview, the quotes can be archived forever for any future donor pack. What is the better answer from the repo's guidance?",
        options: [
          "Future donor use is automatically covered by goodwill",
          "The use should stay tied to a clearly explained purpose rather than blanket future reuse",
          "Interview quotes are never personal data",
          "Any archive is exempt if kept on a foundation laptop"
        ],
        correct: 1,
        explanation: "The consent guidance rejects blanket future-use assumptions and expects purpose-specific explanation, especially when people can be identified."
      }
    ]
  },
  {
    number: 17,
    slug: "verbal-consent-rights",
    shortTitle: "Verbal Consent and Rights",
    pageTitle: "DPDP Quiz 17 - Verbal Consent and Rights",
    eyebrow: "DPDP Quiz 17 | Verbal Consent and Rights",
    heroTitle: "Verbal Consent and Rights: Low-Literacy Field Handling",
    heroIntro: "This set returns to low-literacy settings, where the quality of explanation, witnessing, and rights handoff matters more than formality alone.",
    cardDescription: "Five questions on reading out notices, witness records, rights escalation, correction requests, and respectful handling in low-literacy contexts.",
    audience: "Gandhi Fellows, Karuna Fellows, and programme officers in direct field collection",
    focus: "Read-aloud notices, witness records, rights logging, and respectful escalation",
    resultSummary: "This set reinforces that verbal workflows still need structure: clear explanation, documented agreement, and prompt routing of rights requests.",
    topics: [
      { label: "Field Setting", text: "Low-literacy village, camp, and household interactions" },
      { label: "People Role", text: "Fellows, implementors, and first-line supervisors" },
      { label: "Focus", text: "Read-aloud notice quality, witness records, and rights handoff" }
    ],
    questions: [
      {
        module: "Verbal consent template",
        topic: "What to capture",
        text: "When a beneficiary cannot read and gives verbal agreement, which combination best matches the template's expected record?",
        options: [
          "Date, location, language used, beneficiary response, staff name, and witness",
          "Only the staff member's memory of what was said",
          "A village nickname plus rough age estimate",
          "No record at all if the interaction felt straightforward"
        ],
        correct: 0,
        explanation: "The verbal consent record template is specific about documenting the context, the response, and the witnessing details."
      },
      {
        module: "Gandhi Fellow guidance",
        topic: "Explaining purpose",
        text: "Why does the field guidance insist on explaining what data is being collected and why before questions begin?",
        options: [
          "Because informed notice is part of valid consent, not an optional courtesy",
          "Because field staff need longer conversations to fill time",
          "Because every beneficiary must hear the Act title in English",
          "Because only the purpose explanation matters and rights do not"
        ],
        correct: 0,
        explanation: "The guidance ties valid consent to an understandable explanation of the data being collected and the purpose behind it."
      },
      {
        module: "Rights workflow",
        topic: "Correction request at the doorstep",
        text: "A beneficiary points out that her phone number was captured incorrectly during an earlier enrolment. What is the more DPDP-aligned first response?",
        options: [
          "Dismiss the point because only office staff can discuss records",
          "Note the correction request and route it through the programme workflow for update",
          "Ask her to wait until the next annual survey",
          "Delete her entire enrolment to avoid future mistakes"
        ],
        correct: 1,
        explanation: "The rights workflow expects correction requests to be received respectfully, logged, and pushed through the update process."
      },
      {
        module: "Rights",
        topic: "Field escalation",
        text: "A person says, \"I want you to remove my name from your list.\" What should a field worker avoid doing according to the source guidance?",
        options: [
          "Logging the request and informing a supervisor",
          "Arguing that the request does not matter and can be ignored",
          "Explaining that the request will be escalated",
          "Treating the concern calmly and respectfully"
        ],
        correct: 1,
        explanation: "The role guidance specifically warns staff not to dismiss or argue away requests about records or deletion."
      },
      {
        module: "Consent templates",
        topic: "Partial decline note",
        text: "In a verbal-consent record, why is there space to note that a beneficiary declined part of the requested data?",
        options: [
          "Because the record should reflect scope-limited agreement rather than forcing all-or-nothing collection",
          "Because partial refusal automatically converts the programme into a breach",
          "Because any incomplete form becomes unusable by law",
          "Because witnesses must decide which fields are optional"
        ],
        correct: 0,
        explanation: "The template and learning modules both support specific, limited agreement rather than assuming every field must be accepted together."
      }
    ]
  },
  {
    number: 18,
    slug: "odk-device-hygiene",
    shortTitle: "ODK Device Hygiene",
    pageTitle: "DPDP Quiz 18 - ODK Device Hygiene",
    eyebrow: "DPDP Quiz 18 | ODK Device Hygiene",
    heroTitle: "ODK Device Hygiene: Offline Forms, Sync, and Loss Response",
    heroIntro: "This set is focused on ODK-based field collection, where offline storage, sync discipline, and device safeguards strongly affect breach exposure.",
    cardDescription: "Five ODK-specific questions on encryption, sync cleanup, offline duration, remote wipe, and how to react when a device disappears.",
    audience: "Field implementors, ODK administrators, and programme tech leads",
    focus: "Offline collection risk, post-sync cleanup, remote wipe, and lost-device readiness",
    resultSummary: "This set reinforces how ODK teams should reduce exposure before and after sync, not just after a device goes missing.",
    topics: [
      { label: "Platform Setting", text: "ODK Collect and ODK Central workflows" },
      { label: "Project Stage", text: "Collection, sync, storage, and incident response" },
      { label: "Focus", text: "Encryption, deletion after sync, offline limits, and remote wipe" }
    ],
    questions: [
      {
        module: "ODK checklist",
        topic: "Baseline safeguard",
        text: "Which control is explicitly named in the ODK checklist for field devices storing offline forms?",
        options: [
          "Full device encryption",
          "Daily photo backups to personal drives",
          "Open guest access for troubleshooting",
          "Permanent local retention of every submission"
        ],
        correct: 0,
        explanation: "The checklist specifically calls for device-level encryption as a core safeguard for offline form storage."
      },
      {
        module: "ODK checklist",
        topic: "After successful sync",
        text: "What does the ODK-specific checklist expect teams to think about after forms have synced successfully?",
        options: [
          "Whether personal-data forms are deleted from devices after sync",
          "Whether synced forms are copied into a WhatsApp backup",
          "Whether the device should keep every historical submission forever",
          "Whether the phone wallpaper reflects programme branding"
        ],
        correct: 0,
        explanation: "The checklist explicitly asks whether forms containing personal data are deleted from devices once sync has succeeded."
      },
      {
        module: "ODK checklist",
        topic: "Long offline periods",
        text: "Why does the checklist ask about local storage duration and a maximum offline-period policy?",
        options: [
          "Because longer offline retention can increase exposure if a device is lost or stolen",
          "Because offline collection is prohibited under DPDP",
          "Because the law requires every form to sync within one hour",
          "Because beneficiaries may withdraw consent only while a device is online"
        ],
        correct: 0,
        explanation: "The guidance treats local storage duration as a risk-management question because unsynced personal data on a device widens exposure."
      },
      {
        module: "ODK checklist",
        topic: "Remote wipe readiness",
        text: "Why does remote wipe capability appear in the ODK checklist and breach SOP together?",
        options: [
          "Because it can help contain a lost or stolen device incident",
          "Because it replaces the need to report a breach",
          "Because it lets staff erase evidence before review",
          "Because it is only a cosmetic mobile-device feature"
        ],
        correct: 0,
        explanation: "Remote wipe is a containment tool, not a substitute for the incident workflow, which is why it appears in both places."
      },
      {
        module: "Breach SOP",
        topic: "Immediate reaction",
        text: "A field tablet carrying unsynced ODK submissions is stolen on a bus ride back from camp. Which response is closest to the combined checklist and SOP guidance?",
        options: [
          "Escalate immediately so containment and device-response steps can begin",
          "Wait until the weekly review because a stolen device may reappear",
          "Erase the central logs first to avoid confusion",
          "Replace the tablet and do not document the event"
        ],
        correct: 0,
        explanation: "The breach SOP is clear that loss of a device holding personal data should be escalated immediately so containment and documentation can begin."
      }
    ]
  },
  {
    number: 19,
    slug: "government-program-basis",
    shortTitle: "Government Program Basis",
    pageTitle: "DPDP Quiz 19 - Government Program Basis",
    eyebrow: "DPDP Quiz 19 | Government Program Basis",
    heroTitle: "Government Program Basis: Welfare, Law, and Purpose Boundaries",
    heroIntro: "This set focuses on how Section 7-type legitimate uses interact with government-linked programmes, legal obligations, and field assumptions.",
    cardDescription: "Five questions on welfare programmes, State-function processing, legal disclosure obligations, and the limits of implied expansion beyond programme purpose.",
    audience: "Programme officers, implementation leads, and teams working with government-linked systems",
    focus: "Section 7 examples, reporting by law, purpose boundaries, and discipline under legitimate use",
    resultSummary: "This set reinforces that government-programme processing may have a lawful basis, but it still remains scoped, protected, and purpose-bound.",
    topics: [
      { label: "Obligation Area", text: "Section 7 legitimate uses in government-linked programmes" },
      { label: "People Role", text: "Programme officers, implementors, and reporting teams" },
      { label: "Focus", text: "Lawful basis, legal disclosure, and no drift into unrelated use" }
    ],
    questions: [
      {
        module: "Act summary",
        topic: "Welfare programme example",
        text: "Which example is directly used in the source material to illustrate a government welfare or service context under Section 7?",
        options: [
          "Beneficiaries enrolled in programmes such as PMMVY or Nikshay",
          "Private influencer campaigns for public health awareness",
          "Open social media community groups",
          "Volunteer photo contests run for fundraising"
        ],
        correct: 0,
        explanation: "The act summary gives programme examples such as PMMVY and Nikshay when describing legitimate-use scenarios linked to government benefits or services."
      },
      {
        module: "Legitimate uses",
        topic: "What remains in force",
        text: "If a team relies on a government-programme legal basis for processing rather than fresh consent, what should they not assume?",
        options: [
          "That security and breach obligations still continue",
          "That the legal basis allows any unrelated future reuse of the same data",
          "That programme scope still matters",
          "That rights requests may still need handling"
        ],
        correct: 1,
        explanation: "The references explicitly reject the idea that legitimate use removes purpose limitation or other protective obligations."
      },
      {
        module: "Act summary",
        topic: "Disclosure required by law",
        text: "Which sharing situation is specifically recognised in the source materials as a lawful example?",
        options: [
          "Disclosure required to the State under a legal obligation or mandated reporting context",
          "Forwarding records to any interested partner for insight generation",
          "Sending spreadsheets to informal volunteer groups",
          "Posting data summaries with identifiers in public channels"
        ],
        correct: 0,
        explanation: "The summary includes examples where law requires disclosure to the State for programme or statutory purposes."
      },
      {
        module: "Program Officer guidance",
        topic: "Scope check",
        text: "A programme team collected data for a government-linked service workflow and now wants to repurpose the same identifiable records for a separate internal showcase deck. What is the safer reading?",
        options: [
          "The original lawful basis automatically covers any later internal reuse",
          "A scope check is still needed because purpose boundaries remain important",
          "Every internal use is exempt from DPDP review",
          "Government-linked data may never be stored in any form"
        ],
        correct: 1,
        explanation: "The guidance stresses purpose limitation even where processing has a lawful basis other than consent."
      },
      {
        module: "Compliance timeline",
        topic: "Operational now",
        text: "Why do the references still push teams to formalise grievance and incident handling even before full Phase III enforcement?",
        options: [
          "Because the DPBI and complaint environment are already operational from Phase I",
          "Because every programme must already appoint a mandatory DPO",
          "Because cross-border transfer rules have been fully frozen",
          "Because consent forms stop mattering after 2025"
        ],
        correct: 0,
        explanation: "The timeline notes say DPBI is already operational and complaints are already possible, so teams should not treat readiness as entirely future-tense."
      }
    ]
  },
  {
    number: 20,
    slug: "child-safety-settings",
    shortTitle: "Child Safety Settings",
    pageTitle: "DPDP Quiz 20 - Child Safety Settings",
    eyebrow: "DPDP Quiz 20 | Child Safety Settings",
    heroTitle: "Child Safety Settings: School, Creche, and Care Boundaries",
    heroIntro: "This set revisits children's data through school and care-environment examples, focusing on what the listed exemptions do and do not cover.",
    cardDescription: "Five questions on school safety tracking, creche settings, parental permission, and the difference between care operations and public storytelling.",
    audience: "Education teams, child-focused programme staff, and field supervisors",
    focus: "School and creche exemptions, parental permission, and no casual expansion beyond the child-safety context",
    resultSummary: "This set reinforces that child-safety and care exemptions are specific, not blanket permission for any later collection or publication.",
    topics: [
      { label: "Field Setting", text: "Educational and care environments involving children" },
      { label: "Obligation Area", text: "4th Schedule child-related exemptions and boundaries" },
      { label: "Focus", text: "Safety tracking, care use, parental permission, and no broad reuse" }
    ],
    questions: [
      {
        module: "Children's data",
        topic: "Creche example",
        text: "Which child-related setting is explicitly named in the summary as an exemption example for safety monitoring?",
        options: [
          "Creches and day care centres",
          "Outdoor donor events",
          "Public social media campaigns",
          "Private marketplace apps"
        ],
        correct: 0,
        explanation: "The children's-data summary names creches and day care centres as an example where safety monitoring of children in care is allowed."
      },
      {
        module: "Children's data",
        topic: "School attendance and safety",
        text: "A school-linked programme wants to track attendance and safety movement for children during educational activity. How does the repo's source material frame that?",
        options: [
          "As one of the directly relevant educational exemption examples",
          "As prohibited profiling by default",
          "As valid only if used for donor social media content too",
          "As impossible without a biometric gate"
        ],
        correct: 0,
        explanation: "The educational-activity and safety-tracking example appears directly in the listed exemptions."
      },
      {
        module: "Children's data",
        topic: "Public website reuse",
        text: "A child was photographed during a school safety activity, and a team member now wants to post that image on the foundation website because the activity itself was permitted. What is the better answer?",
        options: [
          "The activity exemption automatically covers the website publication",
          "Website publication is a separate use and should not be assumed covered by the operational exemption alone",
          "Any school-linked photo is never personal data",
          "The website use becomes lawful only if comments are disabled"
        ],
        correct: 1,
        explanation: "The sources distinguish operational or care activity from later media and publication purposes, especially where children are identifiable."
      },
      {
        module: "Act summary",
        topic: "Detrimental effect boundary",
        text: "Which broad restriction on children's data appears in the summary materials?",
        options: [
          "No processing likely to cause detrimental effect on a child's well-being",
          "No storage of any child-related information under any circumstances",
          "No use of school records for safety purposes",
          "No collection of child data after 2026"
        ],
        correct: 0,
        explanation: "The summary materials state that processing likely to cause detrimental effect on a child's well-being should not occur."
      },
      {
        module: "Karuna Fellow guidance",
        topic: "Beyond care",
        text: "Which example best shows a child-data use moving beyond the care or safety exemption and into a separate consent question?",
        options: [
          "Recording symptoms to guide direct treatment",
          "Tracking a child's presence during a supervised educational activity",
          "Using an identifiable child story in a donor-facing publicity package",
          "Maintaining a care note needed for the immediate service episode"
        ],
        correct: 2,
        explanation: "The guidance repeatedly separates direct care or safety operations from donor-facing storytelling or publicity uses."
      }
    ]
  },
  {
    number: 21,
    slug: "privacy-contact-grievances",
    shortTitle: "Privacy Contact and Grievances",
    pageTitle: "DPDP Quiz 21 - Privacy Contact and Grievances",
    eyebrow: "DPDP Quiz 21 | Privacy Contact and Grievances",
    heroTitle: "Privacy Contact and Grievances: Publish, Receive, and Respond",
    heroIntro: "This set focuses on the public-facing mechanics that make rights and grievance handling real for a Data Principal.",
    cardDescription: "Five questions on the privacy point of contact, website publication, rights routing, complaint readiness, and response expectations.",
    audience: "Privacy focal points, website owners, programme managers, and governance teams",
    focus: "Rule 9 publication, grievance workflow, and practical responsiveness",
    resultSummary: "This set reinforces that rights handling is not just an internal concept; people must be able to find a contact and receive timely responses.",
    topics: [
      { label: "Obligation Area", text: "Rule 9 contact publication and grievance handling workflow" },
      { label: "People Role", text: "Privacy contacts, web owners, and programme managers" },
      { label: "Focus", text: "Public contact details, request routing, and response discipline" }
    ],
    questions: [
      {
        module: "Rule 9",
        topic: "What to publish",
        text: "What does the source material say should be published on the website or app under the contact-information requirement?",
        options: [
          "The business contact information of the privacy point of contact or DPO, where applicable",
          "Only the name of the software vendor maintaining the platform",
          "Only a generic no-reply email address",
          "Only a donor-relations helpline"
        ],
        correct: 0,
        explanation: "The summary materials say the website or app should publish the business contact information of the designated privacy contact."
      },
      {
        module: "Rights workflow",
        topic: "Why publication matters",
        text: "Why is publishing a privacy contact operationally important in the repo's DPDP guidance?",
        options: [
          "Because people need a practical route to ask questions, exercise rights, or raise grievances",
          "Because it replaces the need for any internal workflow",
          "Because only public websites, not apps, ever process personal data",
          "Because it lets teams skip notice and consent design"
        ],
        correct: 0,
        explanation: "The materials connect the published contact point with real rights exercise and grievance handling."
      },
      {
        module: "Rights",
        topic: "Field intake",
        text: "A beneficiary raises a complaint verbally with a field worker rather than through email. What is the better handling pattern from the repo's guidance?",
        options: [
          "Ignore it until it arrives in writing",
          "Receive it respectfully, log it, and route it into the grievance process",
          "Ask the person to contact the donor instead",
          "Treat verbal complaints as outside DPDP scope"
        ],
        correct: 1,
        explanation: "The field and rights workflows emphasise logging and escalating requests or complaints even when they first arise verbally."
      },
      {
        module: "Compliance timeline",
        topic: "Readiness by date",
        text: "By when does the timeline guidance expect the privacy point of contact to be published as part of full readiness planning?",
        options: [
          "By the broader May 2027 compliance deadline, with preparation earlier",
          "Only after Piramal Foundation becomes an SDF",
          "Not until an international transfer restriction is issued",
          "Only when a donor insists on it"
        ],
        correct: 0,
        explanation: "The timeline links publication of the privacy point of contact to the overall readiness path toward full compliance, with earlier preparation encouraged."
      },
      {
        module: "Rule 14",
        topic: "Complaint exhaustion logic",
        text: "What does the source material say about how Data Principals generally approach the DPBI complaint route?",
        options: [
          "They should normally exhaust the organisation's grievance mechanism first",
          "They must never raise a concern internally",
          "They can complain only after a court order",
          "They can use DPBI only for children's-data cases"
        ],
        correct: 0,
        explanation: "The rights summary says Data Principals are expected to exhaust the organisation's grievance mechanism before approaching DPBI."
      }
    ]
  },
  {
    number: 22,
    slug: "final-readiness-check",
    shortTitle: "Final Readiness Check",
    pageTitle: "DPDP Quiz 22 - Final Readiness Check",
    eyebrow: "DPDP Quiz 22 | Final Readiness Check",
    heroTitle: "Final Readiness Check: Dates, Gaps, and Cross-Team Priorities",
    heroIntro: "This set closes the next queued block with a multi-angle readiness check spanning timeline planning, training, platform audits, and incident preparation.",
    cardDescription: "Five cross-functional questions on readiness targets, staff training, data inventory, breach protocols, and why early preparation matters.",
    audience: "Cross-functional implementation teams, governance leads, and programme managers",
    focus: "Timeline discipline, pre-deadline remediation, staff training, and readiness gaps",
    resultSummary: "This set reinforces the repo's core message: full compliance has a later hard deadline, but serious preparation should happen much earlier and across teams.",
    topics: [
      { label: "Difficulty Level", text: "Advanced cross-team readiness judgment" },
      { label: "Project Stage", text: "Gap assessment, remediation, and launch planning" },
      { label: "Focus", text: "Dates, inventories, training, breach preparation, and ownership" }
    ],
    questions: [
      {
        module: "Compliance timeline",
        topic: "Hard deadline",
        text: "According to the repo's allowed timeline sources, what should teams currently treat as the hard full-compliance deadline?",
        options: [
          "13 May 2027",
          "13 November 2025",
          "13 January 2026",
          "13 November 2026"
        ],
        correct: 0,
        explanation: "The timeline guidance says teams should keep 13 May 2027 as the confirmed hard deadline while preparing earlier."
      },
      {
        module: "Compliance timeline",
        topic: "Why train early",
        text: "Why do the readiness materials put staff training into the 2026 preparation window rather than waiting for final enforcement?",
        options: [
          "Because people need to know the rights, breach, and collection steps before the deadline",
          "Because training replaces the need for technical controls",
          "Because only HR has duties under DPDP",
          "Because training is required only for donor audits"
        ],
        correct: 0,
        explanation: "The timeline explicitly places staff training into the earlier readiness period because many obligations depend on routine behaviour, not just documents."
      },
      {
        module: "Audit checklist",
        topic: "Inventory before remediation",
        text: "Why do the source materials keep returning to data inventory and platform mapping as early tasks?",
        options: [
          "Because teams cannot fix control gaps until they know what data exists and where",
          "Because inventory is needed only for branding reports",
          "Because mapping removes the need for contracts",
          "Because the Act applies only to platforms with diagrams"
        ],
        correct: 0,
        explanation: "The readiness guidance treats inventory and mapping as foundational because the later controls depend on knowing systems, fields, and flows."
      },
      {
        module: "Breach SOP",
        topic: "Practice before crisis",
        text: "Why does the breach SOP recommend practice runs before the final compliance deadline?",
        options: [
          "Because real incident response depends on speed and coordination, not just reading the SOP after a breach occurs",
          "Because practice runs eliminate the need to notify anyone later",
          "Because simulations are required only for cloud vendors",
          "Because practice turns every breach into a low-severity event"
        ],
        correct: 0,
        explanation: "The breach SOP notes that practice is useful because the first hours of a real breach demand immediate coordinated action."
      },
      {
        module: "Compliance timeline",
        topic: "Preparation target meaning",
        text: "What is the best reading of the repo's repeated use of November 2026 as a preparation target?",
        options: [
          "It is a practical milestone for getting major controls and workflows in place before the hard deadline",
          "It means the Act stops mattering after that month",
          "It means every remaining gap becomes acceptable until 2027",
          "It applies only to privacy contacts and not to any other stream"
        ],
        correct: 0,
        explanation: "The timeline uses November 2026 as a pragmatic readiness milestone so teams are not waiting until the hard deadline to build core controls."
      }
    ]
  },
  {
    number: 23,
    slug: "platform-operations-controls",
    shortTitle: "Platform Operations Controls",
    pageTitle: "DPDP Quiz 23 - Platform Operations Controls",
    eyebrow: "DPDP Quiz 23 | Platform Operations Controls",
    heroTitle: "Platform Operations Controls: Logs, Devices, Tokens, and Escalation",
    heroIntro: "This next queued set shifts back to platform operations, focusing on the day-to-day controls developers and system owners need before privacy promises can be trusted in practice.",
    cardDescription: "Five platform-operations questions on log retention, ODK device hygiene, API token control, ABDM consent gaps, and first-response breach discipline.",
    audience: "Developers, BIDA platform owners, and IT operations teams",
    focus: "Audit logs, device controls, consent architecture gaps, and incident-first actions",
    resultSummary: "This set reinforces that DPDP readiness depends on practical controls: retained logs, cleaned devices, restricted tokens, scoped consent, and disciplined escalation.",
    topics: [
      { label: "People Role", text: "Developers, platform owners, and IT operations teams" },
      { label: "Platform Setting", text: "DHIS2, ODK, ABDM-linked workflows, and custom systems" },
      { label: "Focus", text: "Log retention, token hygiene, device handling, and breach response" }
    ],
    questions: [
      {
        module: "Role guidance",
        topic: "Audit-log retention",
        text: "A platform lead says application audit logs can be deleted after three months because storage is expensive. What is the closer DPDP-aligned reading from the source pack?",
        options: [
          "That is acceptable if backups are kept somewhere else",
          "Logs connected to personal-data processing should be retained for at least one year",
          "Only financial systems need log retention at all",
          "Logs can be removed early if no breach has happened yet"
        ],
        correct: 1,
        explanation: "The act summary and developer guidance both point to Rule 6 and the expectation that logs tied to personal-data processing are retained for a minimum of one year."
      },
      {
        module: "Audit checklist",
        topic: "Synced ODK forms",
        text: "After a field phone successfully syncs beneficiary forms to ODK Central, which control question from the checklist matters most for reducing avoidable local exposure?",
        options: [
          "Whether old forms containing personal data are deleted from the device after sync",
          "Whether the wallpaper uses the programme logo",
          "Whether the phone has two messaging apps installed",
          "Whether the same form can be printed in colour"
        ],
        correct: 0,
        explanation: "The ODK checklist explicitly asks whether forms containing personal data are deleted from devices after successful sync so extra local copies do not linger."
      },
      {
        module: "Audit checklist",
        topic: "API tokens",
        text: "Why does the DHIS2-specific checklist care about rotating API keys or tokens and logging API calls?",
        options: [
          "Because those controls help limit silent misuse and show who accessed data programmatically",
          "Because token rotation is required only for social-media integrations",
          "Because API calls stop counting as processing once they are automated",
          "Because rotation removes the need for role-based access control"
        ],
        correct: 0,
        explanation: "The platform checklist treats token rotation and API-call logging as part of access control and traceability for personal-data access through system integrations."
      },
      {
        module: "Role guidance",
        topic: "ABDM versus DPDP notice",
        text: "A team assumes ABDM consent by itself automatically covers every later health-data use in its programme workflow. Based on the developer guidance, what is the safer interpretation?",
        options: [
          "ABDM consent should be treated as complementary, and extra DPDP-specific consent may still be needed for processing beyond that health-record sharing context",
          "ABDM consent makes Rule 3 notice requirements irrelevant for every case",
          "ABDM consent allows unlimited donor reporting with identified records",
          "ABDM consent matters only if the programme never stores data digitally"
        ],
        correct: 0,
        explanation: "The role guidance says ABDM consent architecture predates the DPDP Rules and may need an added DPDP-specific layer where processing goes beyond the original health-record sharing context."
      },
      {
        module: "Breach SOP",
        topic: "First move in a compromise",
        text: "A developer notices signs that a dashboard database account was misused overnight. Before trying to clean up the system, what does the breach SOP prioritise first?",
        options: [
          "Preserve the logs and isolate the affected system before remediation changes erase evidence",
          "Quietly reset the password and avoid creating incident records",
          "Wait for a full root-cause analysis before telling IT governance",
          "Delete suspicious entries so the export list looks normal again"
        ],
        correct: 0,
        explanation: "The breach SOP is explicit that teams should preserve logs and isolate the affected system first, because evidence can be lost if remediation starts before documentation."
      }
    ]
  },
  {
    number: 24,
    slug: "readiness-timeline",
    shortTitle: "Readiness Timeline",
    pageTitle: "DPDP Quiz 24 - Readiness Timeline",
    eyebrow: "DPDP Quiz 24 | Readiness Timeline",
    heroTitle: "Readiness Timeline: What Must Happen Now, by November 2026, and by May 2027",
    heroIntro: "This queued set shifts from platform controls to rollout planning. It focuses on the DPDP compliance calendar, what is already in force, and what programme and governance teams should sequence next.",
    cardDescription: "Five rollout-planning questions on live Phase I obligations, Consent Manager timing, the May 2027 deadline, readiness sequencing, and privacy-contact publication.",
    audience: "Programme managers, IT governance leads, BIDA reviewers, and readiness coordinators",
    focus: "Rollout phases, deadline sequencing, grievance readiness, and privacy-governance milestones",
    resultSummary: "This set reinforces that DPDP planning is a staged programme: complaint readiness now, build-out through 2026, and full operational compliance by May 2027.",
    topics: [
      { label: "Project Stage", text: "Readiness planning across immediate, November 2026, and May 2027 milestones" },
      { label: "Difficulty", text: "Intermediate governance and rollout judgment for teams sequencing compliance work" },
      { label: "Focus", text: "Phase triggers, preparation priorities, and ownership of published privacy contacts" }
    ],
    questions: [
      {
        module: "Compliance timeline",
        topic: "What is already live",
        text: "A programme lead says DPDP can be ignored until May 2027 because that is the full compliance deadline. Which response best fits the compliance timeline note?",
        options: [
          "That is correct because nothing is enforceable before May 2027",
          "Only children's-data rules apply before May 2027",
          "That is incorrect because the DPBI and grievance complaint pathway are already operational from Phase I",
          "That is correct unless the programme uses a digital platform"
        ],
        correct: 2,
        explanation: "The timeline note says Phase I began on 13 November 2025, so the DPBI is already constituted and complaints can already arise even though the full compliance pack lands later."
      },
      {
        module: "Compliance timeline",
        topic: "Consent Manager date",
        text: "What is the significance of 13 November 2026 in the DPDP rollout plan used in the source pack?",
        options: [
          "It is the hard deadline for every Rule 3 to Rule 16 obligation",
          "It is when the Consent Manager framework becomes active under Phase II",
          "It is when cross-border transfers stop entirely",
          "It is when Piramal Foundation automatically becomes a Significant Data Fiduciary"
        ],
        correct: 1,
        explanation: "The compliance-timeline reference marks 13 November 2026 as Phase II, when the Consent Manager framework becomes active."
      },
      {
        module: "Compliance timeline",
        topic: "Hard planning date",
        text: "Stakeholder discussion suggested accelerating the compliance deadline to November 2026. Until a new gazette changes the rule, what planning stance does the source pack recommend?",
        options: [
          "Treat November 2026 as the legal deadline and ignore May 2027",
          "Assume the deadline is undecided and pause all preparation",
          "Plan for May 13 2027 as the hard deadline while using November 2026 as the readiness target",
          "Wait for a donor instruction before scheduling any DPDP work"
        ],
        correct: 2,
        explanation: "The timeline note is explicit: the acceleration idea was not confirmed by gazette notification, so teams should plan for 13 May 2027 as the hard deadline and use November 2026 as the preparation target."
      },
      {
        module: "Compliance timeline",
        topic: "Q3 2026 priority",
        text: "A team can fund only one readiness activity this quarter. Which option most closely matches the timeline's 'start now' priorities for 2026?",
        options: [
          "Launch a public donor microsite before documenting data flows",
          "Begin data inventory and platform audit work across systems handling beneficiary data",
          "Delay internal mapping until after the Consent Manager framework goes live",
          "Rewrite every consent form first and leave platform review for 2027"
        ],
        correct: 1,
        explanation: "The compliance timeline marks data inventory and platform audit as start-now items feeding the wider readiness programme, rather than work to postpone until the end."
      },
      {
        module: "Act and rules summary",
        topic: "Privacy contact",
        text: "By the full-compliance stage, what does Rule 9 require Piramal Foundation to publish on its website or app?",
        options: [
          "The names of all staff who ever processed personal data",
          "Business contact information for the privacy point of contact or DPO, as applicable",
          "The internal passwords used by grievance handlers",
          "A public list of every rights request ever received"
        ],
        correct: 1,
        explanation: "The act-and-rules summary says Rule 9 requires business contact information for the DPO if one exists, or otherwise a designated privacy point of contact who can answer questions about processing."
      }
    ]
  },
  {
    number: 25,
    slug: "program-officer-rights-desk",
    shortTitle: "Program Officer Rights Desk",
    pageTitle: "DPDP Quiz 25 - Program Officer Rights Desk",
    eyebrow: "DPDP Quiz 25 | Program Officer Rights Desk",
    heroTitle: "Program Officer Rights Desk: Access, Correction, Erasure, and Escalation",
    heroIntro: "This queued set moves from rollout planning into frontline rights handling. It focuses on the Program Officer's job when beneficiaries ask what data is held, request corrections, seek erasure, or want to escalate a grievance.",
    cardDescription: "Five rights-handling questions on logging requests, correcting MIS data, retention-based limits on erasure, the 90-day response window, and the DPBI escalation path.",
    audience: "Program Officers, implementors, grievance handlers, and privacy contacts",
    focus: "Rights workflow, escalation discipline, record correction, erasure limits, and grievance response timing",
    resultSummary: "This set reinforces that rights handling is operational work: log the request, check the actual record, correct what is wrong, escalate hard cases, and respond within the defined window.",
    topics: [
      { label: "People Role", text: "Program Officers, implementors, grievance handlers, and privacy contacts" },
      { label: "Project Stage", text: "Live rights-request intake, record review, correction, and grievance follow-through" },
      { label: "Focus", text: "Access requests, correction, erasure, nomination, and DPBI escalation conditions" }
    ],
    questions: [
      {
        module: "Role guidance",
        topic: "Access request intake",
        text: "A beneficiary says, \"What data do you have on me?\" According to the role guidance, what should a Program Officer do first?",
        options: [
          "Log the request, route it to the supervisor or privacy contact, and provide a record-based summary rather than guessing",
          "Answer from memory on the spot so the person does not have to wait",
          "Refuse to respond because only the DPBI can ask for record details",
          "Ask the beneficiary to come back after the next audit cycle"
        ],
        correct: 0,
        explanation: "The role guidance says staff should log the request, refer it through the rights workflow, and use the actual record for the response rather than guessing."
      },
      {
        module: "Role guidance",
        topic: "Correction workflow",
        text: "A beneficiary points out that her village name is wrong in the MIS. Which response is closest to the source guidance?",
        options: [
          "Leave it unchanged until the next annual review",
          "Correct the MIS entry, document the correction, and inform the beneficiary that it has been done",
          "Delete the full record because any mistake makes the whole file invalid",
          "Tell her corrections are allowed only if she submits a court affidavit"
        ],
        correct: 1,
        explanation: "The role guidance is explicit that inaccurate information should be corrected in the MIS, the correction should be documented, and the beneficiary should be informed."
      },
      {
        module: "Act and rules summary",
        topic: "Erasure limit",
        text: "A TB-program beneficiary asks for all her records to be deleted immediately. What is the most defensible DPDP-aligned response from the source pack?",
        options: [
          "Delete everything at once because erasure must always be immediate",
          "Reject the request automatically because DPDP never allows erasure",
          "Log and escalate the request, because data can be erased unless retention is legally required",
          "Ignore the request unless it comes by email to the DPBI"
        ],
        correct: 2,
        explanation: "The source materials say erasure requests should be logged and escalated. Data can be erased unless there is a legal retention requirement, such as programme records that must be kept by law."
      },
      {
        module: "Consent templates",
        topic: "Response window tracking",
        text: "In the rights-request tracking template, how should the response due date be set?",
        options: [
          "Exactly 30 days from the request date",
          "Only after the next monthly programme review",
          "Request date plus 90 days maximum",
          "Whenever the beneficiary next visits the field office"
        ],
        correct: 2,
        explanation: "The rights-request record template states that the response due date should be set as the request date plus the maximum 90-day response window."
      },
      {
        module: "Act and rules summary",
        topic: "Escalation beyond the organisation",
        text: "When can a beneficiary normally approach the DPBI about a grievance, according to the allowed sources?",
        options: [
          "Immediately after making the request to any field worker",
          "Only after a criminal complaint has been filed",
          "After the organisation's grievance mechanism has been exhausted",
          "Only when the matter involves children's data"
        ],
        correct: 2,
        explanation: "The act summary states that Data Principals generally need to exhaust the organisation's grievance redressal mechanism before approaching the DPBI."
      }
    ]
  },
  {
    number: 26,
    slug: "cross-border-donor-sharing",
    shortTitle: "Cross-Border Donor Sharing",
    pageTitle: "DPDP Quiz 26 - Cross-Border Donor Sharing",
    eyebrow: "DPDP Quiz 26 | Cross-Border Donor Sharing",
    heroTitle: "Cross-Border Donor Sharing: Transfers, Agreements, and Safe Reporting",
    heroIntro: "This queued set moves from frontline rights handling into international data sharing. It focuses on what BI and programme teams should check before sending beneficiary-linked information to overseas donors, evaluators, or cloud services.",
    cardDescription: "Five transfer questions on the negative-list rule, donor datasets, anonymisation limits, partner agreements, and when aggregate reporting is the safer choice.",
    audience: "BI analysts, donor-reporting teams, programme managers, and privacy reviewers",
    focus: "Cross-border transfer judgment, partner agreements, anonymisation discipline, and safe external reporting",
    resultSummary: "This set reinforces that cross-border sharing is not banned by default, but it still requires purpose discipline, minimisation, contracts, and a preference for aggregated outputs when possible.",
    topics: [
      { label: "Obligation Area", text: "Cross-border transfers, partner sharing checks, and donor-reporting safeguards" },
      { label: "Difficulty", text: "Advanced judgment for BI, reporting, and governance teams handling external disclosures" },
      { label: "Focus", text: "Negative-list status, DPA coverage, anonymisation limits, and safer reporting choices" }
    ],
    questions: [
      {
        module: "Act and rules summary",
        topic: "Transfer baseline",
        text: "A donor asks whether DPDP blocks all transfers of beneficiary data to servers outside India. Which answer best matches the allowed sources?",
        options: [
          "Yes, all international transfers are prohibited until MeitY publishes an approval list",
          "No. Transfers are currently allowed unless the government restricts a country or entity under the negative-list approach",
          "Yes, but only for NGOs working in health programmes",
          "No approval is ever needed because cross-border sharing is outside DPDP"
        ],
        correct: 1,
        explanation: "The act-and-rules summary says DPDP follows a negative-list model: cross-border transfers are permitted unless the government restricts a specific country or entity."
      },
      {
        module: "Role guidance",
        topic: "First check before donor sharing",
        text: "Before sending an individual-level beneficiary dataset to an international donor, what should the BI team check first according to the role guidance?",
        options: [
          "Whether the original consent notice covered sharing for that purpose",
          "Whether the donor promises to delete the file after reading it",
          "Whether the donor prefers Excel over CSV",
          "Whether the report deadline is within the same month"
        ],
        correct: 0,
        explanation: "The BI role guidance lists the first question as whether the original consent notice covered sharing with that partner or for that purpose."
      },
      {
        module: "Role guidance",
        topic: "Pseudonymisation limit",
        text: "A dataset replaces names with beneficiary ID numbers, but the team can still map those IDs back to people internally. How should this dataset be treated?",
        options: [
          "As fully anonymous data that can be shared freely",
          "As personal data, because pseudonymisation does not remove re-identification risk",
          "As exempt from DPDP once names are removed",
          "As outside scope only if it is sent to a research partner"
        ],
        correct: 1,
        explanation: "The BI guidance is explicit that pseudonymisation is not anonymisation. If the IDs can be linked back to people, the data remains personal data."
      },
      {
        module: "Role guidance",
        topic: "Agreement gap",
        text: "A global evaluation partner wants row-level records, but there is no data sharing agreement in place yet. What is the safest DPDP-aligned next step from the source pack?",
        options: [
          "Share the file if the partner says it is urgent",
          "Share only after legal review and a proper sharing or processing agreement is in place",
          "Upload the file to a shared drive first and negotiate the agreement later",
          "Send the data if the partner promises not to publish names"
        ],
        correct: 1,
        explanation: "The BI role guidance says do not share individual-level data with an external partner without consent coverage and a data sharing or processing agreement; legal review is required when those checks fail."
      },
      {
        module: "Role guidance",
        topic: "Safer donor reporting",
        text: "Which donor-reporting option is described in the allowed sources as the lower-risk default when the programme goal can be met without personal records?",
        options: [
          "Case studies with full names and village details",
          "Before-and-after photographs without a media consent record",
          "Aggregate district or programme-level reporting",
          "A raw line list containing phone numbers and health status"
        ],
        correct: 2,
        explanation: "The donor-reporting guidance says aggregate or anonymised reporting is the lower-risk path and should be preferred when it meets the reporting purpose."
      }
    ]
  },
  {
    number: 27,
    slug: "beginner-readiness-calendar",
    shortTitle: "Beginner Readiness Calendar",
    pageTitle: "DPDP Quiz 27 - Beginner Readiness Calendar",
    eyebrow: "DPDP Quiz 27 | Beginner Readiness Calendar",
    heroTitle: "Beginner Readiness Calendar: What Must Happen Now, By November 2026, and By May 2027",
    heroIntro: "This queued set shifts into a beginner timeline view. It checks whether teams can place the main DPDP obligations in the right phase and identify which readiness work should already be underway.",
    cardDescription: "Five timeline questions on the live phases, the November 2026 readiness target, May 2027 full compliance, and priority actions that cannot be postponed.",
    audience: "New programme staff, team leads, coordinators, and anyone building their first DPDP roadmap",
    focus: "Timeline sequencing, practical preparation targets, and distinguishing current duties from full-enforcement duties",
    resultSummary: "This set reinforces that DPDP is already operational, that November 2026 is the practical readiness milestone, and that May 2027 remains the hard full-compliance deadline in the source pack.",
    topics: [
      { label: "Project Stage", text: "Roadmap and readiness sequencing across Phase I, II, and III" },
      { label: "Difficulty", text: "Beginner-friendly timeline and obligation mapping" },
      { label: "Focus", text: "What is live now, what should be prepared by November 2026, and what becomes enforceable by May 2027" }
    ],
    questions: [
      {
        module: "Compliance timeline",
        topic: "Current phase",
        text: "According to the allowed timeline source, what changed immediately on 13 November 2025?",
        options: [
          "All notice, consent, and children's-data rules became fully enforceable",
          "The Data Protection Board of India became operational and grievance complaints became possible",
          "Cross-border transfers were frozen until a country list was published",
          "Every NGO had to appoint a full-time Data Protection Officer"
        ],
        correct: 1,
        explanation: "The compliance timeline says Phase I began on 13 November 2025, when the DPBI became operational and grievance complaints became live."
      },
      {
        module: "Compliance timeline",
        topic: "Preparation target",
        text: "What does the source pack treat as the prudent readiness target even though full enforcement is later?",
        options: [
          "13 November 2026",
          "31 March 2026",
          "1 January 2027",
          "13 November 2025"
        ],
        correct: 0,
        explanation: "The timeline note says Piramal Foundation should treat 13 November 2026 as the preparation target even though the hard full-compliance deadline remains May 2027."
      },
      {
        module: "Compliance timeline",
        topic: "Full compliance date",
        text: "By what date does the source material tell teams to treat full DPDP compliance as mandatory unless the gazette changes?",
        options: [
          "13 May 2027",
          "13 November 2026",
          "31 December 2027",
          "13 May 2026"
        ],
        correct: 0,
        explanation: "The compliance timeline explicitly says to plan for 13 May 2027 as the hard full-compliance deadline unless a later gazette changes it."
      },
      {
        module: "Compliance timeline",
        topic: "Q3 2026 priority",
        text: "Which of these is listed as a Q3 2026 preparation action rather than something to leave until the final deadline month?",
        options: [
          "Drafting consent notice templates",
          "Waiting for a breach to happen before defining a response path",
          "Postponing privacy-contact publication until after May 2027",
          "Deferring all staff training until the final week"
        ],
        correct: 0,
        explanation: "The timeline lists consent notice drafting as a Q3 2026 action alongside grievance documentation, privacy-contact publication, and staff training."
      },
      {
        module: "Compliance timeline",
        topic: "Programme action now",
        text: "A DHIS2 owner asks what should start immediately under the timeline guidance. Which answer fits the source pack best?",
        options: [
          "A platform audit and review of inactive accounts should start now",
          "Nothing should begin until the restricted-country list is notified",
          "Only child-consent processes matter before May 2027",
          "The team should stop using all digital systems until the rules mature"
        ],
        correct: 0,
        explanation: "The timeline guidance says data inventory, platform audit, and related access-control work should start now rather than wait for the full deadline."
      }
    ]
  },
  {
    number: 28,
    slug: "developer-audit-log-controls",
    shortTitle: "Developer Audit Log Controls",
    pageTitle: "DPDP Quiz 28 - Developer Audit Log Controls",
    eyebrow: "DPDP Quiz 28 | Developer Audit Log Controls",
    heroTitle: "Developer Audit Log Controls: RBAC, Logging, and Release Readiness",
    heroIntro: "This developer-focused set stays inside platform obligations. It tests whether engineering and IT teams can spot the non-negotiable DPDP controls that make privacy and incident response workable in real systems.",
    cardDescription: "Five developer questions on 1-year log retention, RBAC, encrypted backups, export logging, and why inactive accounts are a real DPDP risk.",
    audience: "Developers, DHIS2 and MIS administrators, platform owners, and IT governance reviewers",
    focus: "Security safeguards, auditability, access control, and privacy-by-design checks before release",
    resultSummary: "This set reinforces that developers are expected to build logging, RBAC, backup, and vendor-control mechanisms into the platform instead of treating DPDP as a later documentation exercise.",
    topics: [
      { label: "People Role", text: "Developer and platform-owner responsibilities under Rule 6 style controls" },
      { label: "Difficulty", text: "Intermediate platform-control judgment for technical teams" },
      { label: "Focus", text: "Logs, exports, backups, inactive accounts, and least-privilege analytics access" }
    ],
    questions: [
      {
        module: "Role guidance",
        topic: "Least privilege",
        text: "In the developer quick card, what is the expected default for analysts using dashboard views with beneficiary-linked data?",
        options: [
          "They should see aggregated data unless row-level access is explicitly authorised",
          "They should automatically receive all records so they can troubleshoot faster",
          "They should get full exports once they sign a confidentiality email",
          "They should use shared admin accounts to avoid access delays"
        ],
        correct: 0,
        explanation: "The developer guidance says analysts should see aggregated data unless they are explicitly authorised for individual-level access."
      },
      {
        module: "Act and rules summary",
        topic: "Log retention",
        text: "What minimum retention period does the source pack require for logs and personal data used for ongoing processing safeguards?",
        options: [
          "30 days",
          "90 days",
          "1 year",
          "3 years in every case"
        ],
        correct: 2,
        explanation: "The act summary states that logs and personal data needed for continued processing safeguards must be retained for a minimum of one year."
      },
      {
        module: "Data audit checklist",
        topic: "Export monitoring",
        text: "A custom MIS allows CSV downloads of beneficiary-level records, but nobody can tell who exported what. In the checklist, what is the missing control?",
        options: [
          "Bulk export logging and restriction to authorised roles",
          "A brighter dashboard colour palette",
          "A donor-facing consent manager account",
          "A rule that exports are allowed only on Fridays"
        ],
        correct: 0,
        explanation: "The custom MIS checklist asks whether bulk data exports are logged and restricted, making export monitoring a specific DPDP readiness control."
      },
      {
        module: "Role guidance",
        topic: "Inactive accounts",
        text: "Why do the developer notes call inactive DHIS2 accounts a DPDP problem rather than just a housekeeping issue?",
        options: [
          "Because unused accounts weaken access control and increase unauthorised access risk",
          "Because inactive accounts automatically delete audit logs",
          "Because DPDP allows only 100 total accounts in a platform",
          "Because deactivation is required only for significant data fiduciaries"
        ],
        correct: 0,
        explanation: "The developer guidance flags inactive accounts as a security risk because they undermine access control, which is part of the required safeguards."
      },
      {
        module: "Data audit checklist",
        topic: "Backups",
        text: "A team says it takes backups but has never checked whether they can be restored. How would the audit checklist treat that position?",
        options: [
          "As incomplete, because backups should also be tested for restorability",
          "As fully compliant once a backup folder exists",
          "As irrelevant because DPDP mentions only encryption",
          "As acceptable if the platform is hosted in India"
        ],
        correct: 0,
        explanation: "The general audit checklist asks both whether a backup process exists and whether those backups are tested for restorability."
      }
    ]
  },
  {
    number: 29,
    slug: "privacy-contact-grievance-channel",
    shortTitle: "Privacy Contact Grievance Channel",
    pageTitle: "DPDP Quiz 29 - Privacy Contact Grievance Channel",
    eyebrow: "DPDP Quiz 29 | Privacy Contact Grievance Channel",
    heroTitle: "Privacy Contact Grievance Channel: Publishing the Contact Point and Handling Complaints",
    heroIntro: "This set focuses on a practical obligation teams often postpone: publishing a real privacy contact and running a grievance mechanism that people can actually use before they escalate further.",
    cardDescription: "Five obligation questions on the website contact point, grievance handling, the 90-day response ceiling, and why channel design matters operationally.",
    audience: "Programme leads, operations teams, web owners, and privacy coordinators",
    focus: "Rule 9 contact publication, grievance workflow design, and beneficiary-facing accountability",
    resultSummary: "This set reinforces that the privacy contact and grievance path are not optional back-office extras; they are part of the published public interface required by the source materials.",
    topics: [
      { label: "Obligation Area", text: "Contact publication, rights intake, and grievance redressal operations" },
      { label: "Difficulty", text: "Beginner to intermediate operational compliance" },
      { label: "Focus", text: "Published contacts, 90-day handling, and getting complaints into the right workflow" }
    ],
    questions: [
      {
        module: "Act and rules summary",
        topic: "Website requirement",
        text: "What does Rule 9 require Piramal Foundation to publish on its website or app according to the source pack?",
        options: [
          "The business contact information of the designated privacy point of contact",
          "Only a generic social media handle",
          "A public copy of every beneficiary record",
          "The names of all field staff who collect data"
        ],
        correct: 0,
        explanation: "The act-and-rules summary says the website or app should publish the business contact information of the designated privacy contact."
      },
      {
        module: "Compliance timeline",
        topic: "Readiness milestone",
        text: "In the timeline guidance, when should publication of the privacy point of contact be targeted as part of readiness work?",
        options: [
          "Q3 2026",
          "Only after the first data breach",
          "After cross-border restrictions are notified",
          "No earlier than May 2028"
        ],
        correct: 0,
        explanation: "The compliance timeline lists publication of the privacy point of contact as a Q3 2026 readiness action."
      },
      {
        module: "Act and rules summary",
        topic: "Grievance response ceiling",
        text: "Once a grievance is raised through the organisation's mechanism, what maximum response window do the allowed sources give?",
        options: [
          "7 days",
          "30 days",
          "90 days",
          "180 days"
        ],
        correct: 2,
        explanation: "The act summary says grievances should be responded to within a maximum of 90 days."
      },
      {
        module: "Role guidance",
        topic: "Complaint intake",
        text: "A beneficiary says, \"I don't remember agreeing to this.\" What is the closest source-aligned first response from programme staff?",
        options: [
          "Acknowledge the concern calmly and refer the person to the privacy contact or rights workflow",
          "Tell them consent challenges are invalid after one week",
          "Refuse to discuss the matter until they quote the law section",
          "Ask them to raise it only on the DPBI portal"
        ],
        correct: 0,
        explanation: "The Implementor / Program Officer guidance says staff should acknowledge the concern calmly, explain that rights can be exercised, and refer the person into the proper workflow."
      },
      {
        module: "Act and rules summary",
        topic: "Escalation sequence",
        text: "Why does the source pack treat the published grievance channel as especially important before a DPBI complaint?",
        options: [
          "Because people generally need to exhaust the organisation's grievance mechanism before going to DPBI",
          "Because DPBI accepts only complaints sent by the organisation first",
          "Because the channel replaces the need for any record-keeping",
          "Because published contacts remove the need to answer access requests"
        ],
        correct: 0,
        explanation: "The source material says Data Principals generally need to exhaust the organisation's grievance mechanism before approaching the DPBI."
      }
    ]
  },
  {
    number: 30,
    slug: "karuna-child-health-exemptions",
    shortTitle: "Karuna Child Health Exemptions",
    pageTitle: "DPDP Quiz 30 - Karuna Child Health Exemptions",
    eyebrow: "DPDP Quiz 30 | Karuna Child Health Exemptions",
    heroTitle: "Karuna Child Health Exemptions: Care Activities, Consent Boundaries, and Safe Escalation",
    heroIntro: "This health-outreach set moves back to child and camp scenarios. It checks whether Karuna Fellows can tell the difference between care-related processing that fits the exemption and extra uses that still need parental consent.",
    cardDescription: "Five child-health questions on care exemptions, camp photography, verbal explanation, distress handling, and when programme databases need separate consent coverage.",
    audience: "Karuna Fellows, camp coordinators, MCH teams, and supervisors",
    focus: "Children's data, care-vs-non-care boundaries, and low-literacy field handling",
    resultSummary: "This set reinforces that child-health processing for care can fit the exemption, but photography, donor use, and broader programme systems still need explicit consent discipline.",
    topics: [
      { label: "Location", text: "Maternal and child health camps and village outreach settings" },
      { label: "Difficulty", text: "Intermediate field judgment for health teams" },
      { label: "Focus", text: "What care processing can proceed, what still needs consent, and how to respond when families are uneasy" }
    ],
    questions: [
      {
        module: "Role guidance",
        topic: "Care exemption",
        text: "At a nutrition camp, a Karuna Fellow weighs a child and records MUAC to guide care. According to the source pack, why can this happen without separate parental consent for that care step?",
        options: [
          "Because child health processing for providing care can fall within the healthcare exemption",
          "Because all data collected at camps is outside DPDP",
          "Because a field worker can always rely on oral community approval",
          "Because only photographs count as personal data for children"
        ],
        correct: 0,
        explanation: "The role guidance explains that health-service processing for a child can rely on the healthcare exemption when it is limited to providing care."
      },
      {
        module: "Role guidance",
        topic: "Beyond care",
        text: "The same team now wants to use the child's photo in a donor deck. What changes under the allowed sources?",
        options: [
          "Parental consent is needed because donor-use photography goes beyond care delivery",
          "Nothing changes because the camp visit already covered every later use",
          "The Fellow may post the image if the child's name is omitted",
          "Only the donor needs to approve the photo use"
        ],
        correct: 0,
        explanation: "The source pack draws a line between care processing and later uses like photography or donor reporting, which need consent."
      },
      {
        module: "Consent templates",
        topic: "Low-literacy handling",
        text: "When the parent cannot read the consent notice at a camp, what is the better source-aligned approach?",
        options: [
          "Read it aloud in the parent's language and document verbal agreement with a witness",
          "Skip the explanation because health work is urgent",
          "Collect a signature from any nearby volunteer instead",
          "Ask the parent to return later only if they can read English"
        ],
        correct: 0,
        explanation: "The verbal-consent template says the notice should be read aloud in plain language and the verbal agreement documented with a witness."
      },
      {
        module: "Role guidance",
        topic: "Distress response",
        text: "A family becomes visibly uncomfortable about entering camp details into a programme system. What does the Karuna guidance say to do first?",
        options: [
          "Stop, reassure them, and escalate rather than pushing through the collection",
          "Continue because camp data cannot be refused",
          "Delete every existing record immediately without review",
          "Tell them only the government can object to the entry"
        ],
        correct: 0,
        explanation: "The Karuna Fellow guidance says if a beneficiary or family member is distressed about data collection, staff should stop, reassure, and escalate."
      },
      {
        module: "Role guidance",
        topic: "Programme database boundary",
        text: "Why does the source pack treat entry into ODK or another programme monitoring system separately from the immediate care interaction?",
        options: [
          "Because programme monitoring and reporting should be covered by an enrolment consent notice even when care itself can rely on the exemption",
          "Because ODK entries are never personal data",
          "Because only paper records trigger DPDP duties",
          "Because health camps may not keep any digital records"
        ],
        correct: 0,
        explanation: "The Karuna guidance explains that while care may rely on the exemption, entry into programme systems should be covered by the enrolment consent notice."
      }
    ]
  },
  {
    number: 31,
    slug: "gandhi-fellow-media-boundaries",
    shortTitle: "Gandhi Fellow Media Boundaries",
    pageTitle: "DPDP Quiz 31 - Gandhi Fellow Media Boundaries",
    eyebrow: "DPDP Quiz 31 | Gandhi Fellow Media Boundaries",
    heroTitle: "Gandhi Fellow Media Boundaries: Surveys, Audio, and Photography with Real Consent",
    heroIntro: "This field-facing set focuses on collection behavior closest to the community. It checks whether Fellows can distinguish ordinary explanation from valid consent and avoid casual media habits that create privacy problems later.",
    cardDescription: "Five field questions on survey explanations, refusing optional fields, audio recording, child photography, and why private memories are still personal data if the person is identifiable.",
    audience: "Gandhi Fellows, community mobilisers, and field supervisors",
    focus: "Consent quality, respectful refusal handling, and media collection discipline in villages and events",
    resultSummary: "This set reinforces that community-facing staff must explain purpose clearly, accept selective refusal, and treat photos and recordings as personal data from the start.",
    topics: [
      { label: "People Role", text: "Gandhi Fellow consent and community-collection practices" },
      { label: "Difficulty", text: "Beginner to intermediate field judgment" },
      { label: "Focus", text: "Survey notice, optional fields, recordings, and child-photo boundaries" }
    ],
    questions: [
      {
        module: "Role guidance",
        topic: "Purpose explanation",
        text: "Before starting a household survey, which explanation is closest to what the Gandhi Fellow guidance expects?",
        options: [
          "Explain what information will be collected, why it is needed, and that the person can refuse",
          "Start the form first and explain only if the person asks later",
          "Say the survey is compulsory because the project is important",
          "Collect the details first and ask about consent during data cleaning"
        ],
        correct: 0,
        explanation: "The Gandhi Fellow quick card says staff should explain what data is being collected, why, and that the person can say no before collection begins."
      },
      {
        module: "Learning modules",
        topic: "Selective refusal",
        text: "A woman agrees to a maternal-health survey but does not want to disclose household income. What does the source pack suggest the Fellow should do?",
        options: [
          "Record income as declined and continue with the rest only if she still agrees",
          "End the full survey because partial responses are invalid",
          "Guess an income band from the house condition",
          "Tell her the programme requires every field"
        ],
        correct: 0,
        explanation: "The learning module example says optional information that a person declines should be left as declined rather than guessed or forced."
      },
      {
        module: "Role guidance",
        topic: "Audio recording",
        text: "A Fellow wants to record a village interview only for later note-taking. What is the safer source-aligned step before recording?",
        options: [
          "Explain the recording purpose and ask if the person agrees before starting",
          "Record silently because the file is only for internal use",
          "Send the phone to the supervisor first and record automatically",
          "Record first and ask for retroactive consent after the interview"
        ],
        correct: 0,
        explanation: "The Gandhi Fellow guidance says audio recording is processing personal data and should be explained before asking for agreement."
      },
      {
        module: "Role guidance",
        topic: "Child photography",
        text: "At a school event, a Fellow wants one close-up photo of an identifiable child for a programme update. Which answer best matches the allowed sources?",
        options: [
          "Parental consent is required before taking or using the identifiable photo",
          "It is allowed automatically because the event is educational",
          "It is allowed if the Fellow promises not to tag the child",
          "It is allowed only if another staff member also takes a copy"
        ],
        correct: 0,
        explanation: "The Gandhi Fellow guidance says photographing a child requires parental consent."
      },
      {
        module: "Role guidance",
        topic: "Personal-memory argument",
        text: "Why does the source pack still treat a beneficiary photo as personal data even if a Fellow says it is only for personal field memory?",
        options: [
          "Because an identifiable photograph is personal data regardless of the informal label given to it",
          "Because DPDP governs only images stored on social media",
          "Because the issue disappears if the photo stays on a private phone",
          "Because only donors are responsible for image consent"
        ],
        correct: 0,
        explanation: "The field guidance says an identifiable photograph is personal data, so informal personal-use language does not remove the privacy obligation."
      }
    ]
  },
  {
    number: 32,
    slug: "breach-first-six-hours",
    shortTitle: "Breach First Six Hours",
    pageTitle: "DPDP Quiz 32 - Breach First Six Hours",
    eyebrow: "DPDP Quiz 32 | Breach First Six Hours",
    heroTitle: "Breach First Six Hours: Contain, Notify, and Preserve Evidence",
    heroIntro: "This set moves into incident response. It tests whether teams can act inside the first six hours without waiting for a perfect investigation or accidentally destroying the evidence they need later.",
    cardDescription: "Five breach-response questions on the 72-hour clock, immediate containment, preserving logs, notifying affected people, and the first DPBI report.",
    audience: "Programme officers, IT teams, supervisors, and anyone who may discover a breach first",
    focus: "Initial incident handling, evidence preservation, and parallel notification duties",
    resultSummary: "This set reinforces that the clock starts on awareness, that evidence should be preserved before remedial tinkering, and that affected people and DPBI both have to hear quickly.",
    topics: [
      { label: "Project Stage", text: "Incident discovery and first-response handling" },
      { label: "Difficulty", text: "Intermediate operational incident judgment" },
      { label: "Focus", text: "Awareness trigger, containment, documentation, and parallel notifications" }
    ],
    questions: [
      {
        module: "Breach response SOP",
        topic: "Clock start",
        text: "Under the breach SOP, when does the 72-hour reporting clock begin?",
        options: [
          "When any person in Piramal Foundation becomes aware of the breach",
          "Only after legal counsel confirms the incident",
          "When the final root-cause analysis is signed",
          "Only once at least 100 people are known to be affected"
        ],
        correct: 0,
        explanation: "The breach SOP says the 72-hour deadline runs from when any person in Piramal Foundation becomes aware of the breach."
      },
      {
        module: "Breach response SOP",
        topic: "Wrong-recipient email",
        text: "A spreadsheet with beneficiary details is sent to the wrong external address. Which immediate step is explicitly listed in the SOP for this kind of physical or file-sharing breach?",
        options: [
          "Contact the recipient, request deletion, and document the response",
          "Delete the sent-mail record so the mistake is less visible",
          "Wait to see if the person opens it before recording anything",
          "Treat it as a non-breach if the recipient is outside the programme"
        ],
        correct: 0,
        explanation: "The SOP says that if a file was sent to the wrong recipient, staff should contact them, request deletion, and document the response."
      },
      {
        module: "Breach response SOP",
        topic: "System compromise",
        text: "An admin suspects unauthorised access to a platform. Before trying to fix the system, what does the SOP say should happen?",
        options: [
          "Preserve logs and evidence first, then proceed with containment",
          "Immediately wipe all recent logs to stop further risk",
          "Reset every password and ignore evidence collection",
          "Delay action until the exact attacker is identified"
        ],
        correct: 0,
        explanation: "The technical-breach SOP says logs should be preserved before remediation so the facts are not lost."
      },
      {
        module: "Breach response SOP",
        topic: "Affected individuals",
        text: "What is one required element of the notification to affected Data Principals under the source pack?",
        options: [
          "Likely consequences of the breach and the contact point for questions",
          "A full copy of the organisation's legal defence",
          "Only a promise that no breach will ever happen again",
          "The names of every internal employee involved"
        ],
        correct: 0,
        explanation: "The SOP lists required content for affected people, including what happened, likely consequences, mitigation steps, and contact details."
      },
      {
        module: "Breach response SOP",
        topic: "Initial DPBI report",
        text: "What belongs in the first DPBI notification according to the allowed breach SOP?",
        options: [
          "The nature, approximate extent, timing, location, and likely impact of the breach",
          "Only a final list of every remedial action taken over 30 days",
          "Only the name of the suspected individual who caused it",
          "No details until the 72-hour detailed report"
        ],
        correct: 0,
        explanation: "The SOP says the initial DPBI report should include the nature of the breach, approximate scope, timing, location, and likely impact."
      }
    ]
  },
  {
    number: 33,
    slug: "field-rights-request-desk",
    shortTitle: "Field Rights Request Desk",
    pageTitle: "DPDP Quiz 33 - Field Rights Request Desk",
    eyebrow: "DPDP Quiz 33 | Field Rights Request Desk",
    heroTitle: "Field Rights Request Desk: Logging, Routing, and Responding Without Guesswork",
    heroIntro: "This set returns to rights-handling but from the field desk angle. It checks whether teams can route access, correction, erasure, and grievance requests correctly instead of improvising from memory.",
    cardDescription: "Five rights-workflow questions on logging requests, record-based responses, correction tracking, lawful retention exceptions, and the request register.",
    audience: "Program Officers, block coordinators, helpline teams, and supervisors",
    focus: "Rights intake discipline, recordkeeping, and avoiding off-the-cuff answers",
    resultSummary: "This set reinforces that staff should log first, route through the rights mechanism, and respond from records rather than memory, especially where deletion interacts with legal retention duties.",
    topics: [
      { label: "People Role", text: "Program Officer and frontline rights-handling responsibilities" },
      { label: "Difficulty", text: "Intermediate workflow discipline for service teams" },
      { label: "Focus", text: "Access, correction, erasure, and request-register use" }
    ],
    questions: [
      {
        module: "Consent templates",
        topic: "Request register",
        text: "Which field appears in the rights-request tracking template so that teams do not lose the legal deadline?",
        options: [
          "A response due date calculated from the request date",
          "The beneficiary's political preference",
          "A donor approval signature",
          "A screenshot of the whole MIS export"
        ],
        correct: 0,
        explanation: "The rights-request record template includes a response due date so the case can be tracked against the maximum response window."
      },
      {
        module: "Role guidance",
        topic: "Access answer quality",
        text: "A beneficiary asks at the block office, \"Tell me exactly what you have on me.\" Why is answering from memory the wrong move under the source guidance?",
        options: [
          "Because staff should use the actual record and provide a record-based summary, not guess",
          "Because access requests must always be refused verbally",
          "Because only developers may ever view records",
          "Because the beneficiary must first bring two witnesses"
        ],
        correct: 0,
        explanation: "The Implementor guidance says staff should not guess; they should obtain the actual record and route the response properly."
      },
      {
        module: "Role guidance",
        topic: "Correction evidence",
        text: "After fixing a wrong village name in the MIS, what additional action does the source pack expect?",
        options: [
          "Document the correction and inform the beneficiary that it was done",
          "Erase the rest of the record to avoid future disputes",
          "Keep the fix secret until the annual audit",
          "Create a second duplicate record with the new village"
        ],
        correct: 0,
        explanation: "The role guidance says corrections should be documented and the beneficiary informed."
      },
      {
        module: "Act and rules summary",
        topic: "Erasure limit",
        text: "Which answer best reflects the source pack when someone asks for deletion of data that may also be tied to a legal retention duty?",
        options: [
          "The request should be logged and assessed, because data may be kept where retention is legally required",
          "Deletion must always happen instantly in every case",
          "Deletion is never allowed under DPDP",
          "The request should be ignored unless it comes through social media"
        ],
        correct: 0,
        explanation: "The source materials say erasure can be requested, but legal retention duties may limit whether the record can be deleted."
      },
      {
        module: "Learning modules",
        topic: "Sensitive phone request",
        text: "Why does the learning pack warn staff not to confirm detailed record contents casually over the phone in a sensitive complaint?",
        options: [
          "Because even confirming record status can itself create a confidentiality risk in sensitive cases",
          "Because phone calls are never allowed for any grievance intake",
          "Because the DPBI requires paper-only communication",
          "Because verbal complaints fall outside the rights process"
        ],
        correct: 0,
        explanation: "The learning module on the TB helpline scenario says staff should avoid casually confirming detailed record contents because that itself can create a data-protection risk."
      }
    ]
  },
  {
    number: 34,
    slug: "partner-sharing-checks",
    shortTitle: "Partner Sharing Checks",
    pageTitle: "DPDP Quiz 34 - Partner Sharing Checks",
    eyebrow: "DPDP Quiz 34 | Partner Sharing Checks",
    heroTitle: "Partner Sharing Checks: Scope, Agreements, and Safer Alternatives",
    heroIntro: "This set looks at ordinary partner requests before they become a problem. It focuses on what programme and BI teams should verify before sending identifiable data to evaluators, donors, state teams, or vendors.",
    cardDescription: "Five sharing questions on purpose coverage, processing agreements, anonymised alternatives, role clarity, and when escalation is required.",
    audience: "Program managers, BI teams, partnership staff, and IT governance reviewers",
    focus: "Data-sharing checks, legal coverage, and choosing aggregated outputs where they work",
    resultSummary: "This set reinforces that partner requests should be checked against consent scope, agreements, and minimisation before any identifiable file moves.",
    topics: [
      { label: "Obligation Area", text: "External sharing, role clarity, and agreement-based controls" },
      { label: "Difficulty", text: "Intermediate operational and governance judgment" },
      { label: "Focus", text: "Consent scope, DPA coverage, anonymisation, and escalation triggers" }
    ],
    questions: [
      {
        module: "Implementor / Program Officer guidance",
        topic: "State-partner request",
        text: "A programme partner asks for individual records outside the normal reporting flow. What is the safer first check from the allowed sources?",
        options: [
          "Check whether the original consent notice covered sharing for that partner or purpose",
          "Send the file first and formalise the purpose later",
          "Assume every government-linked request is automatically broad enough",
          "Replace names with initials and treat the issue as solved"
        ],
        correct: 0,
        explanation: "The role guidance says teams should first check whether the original consent notice covered that sharing purpose or partner."
      },
      {
        module: "Data audit checklist",
        topic: "Agreement control",
        text: "When the general platform checklist asks whether shared data has a Data Processing Agreement in place, what risk is it trying to control?",
        options: [
          "That external parties receive personal data without contractual security obligations",
          "That partners might request reports in PDF instead of Excel",
          "That staff might forget to use district abbreviations",
          "That the platform may have too many dashboard filters"
        ],
        correct: 0,
        explanation: "The checklist explicitly checks whether external sharing is backed by a Data Processing Agreement so security and processing duties are contractually covered."
      },
      {
        module: "Role guidance",
        topic: "Safer alternative",
        text: "If the reporting purpose can be met without identifiable records, what does the BI guidance prefer?",
        options: [
          "Aggregate or properly anonymised reporting",
          "A raw beneficiary line list with masked first names",
          "A screenshot of the entire database table",
          "A shared folder with all source exports"
        ],
        correct: 0,
        explanation: "The BI guidance says aggregate or anonymised reporting is the lower-risk default when it satisfies the purpose."
      },
      {
        module: "Data audit checklist",
        topic: "Role clarity",
        text: "Why does the Nikshay checklist ask whether Piramal Foundation's Data Processor role is formally documented?",
        options: [
          "Because role clarity affects the authority and conditions under which Nikshay data may be processed",
          "Because formal role notes automatically replace all contracts",
          "Because DPDP forbids government-platform access without a DPO",
          "Because documenting the role means consent is no longer relevant"
        ],
        correct: 0,
        explanation: "The Nikshay checklist ties role clarity to the legal basis and documented authority for processing government-platform data."
      },
      {
        module: "Role guidance",
        topic: "Escalation trigger",
        text: "When should a staff member escalate a partner's data request instead of deciding alone according to the source pack?",
        options: [
          "When the request falls outside normal programme scope or existing agreement coverage",
          "Only when the partner is based outside the district",
          "Only if the file contains more than 500 rows",
          "Only after the beneficiary complains"
        ],
        correct: 0,
        explanation: "The role guidance says out-of-scope partner or government data requests should be escalated rather than handled casually by frontline staff."
      }
    ]
  },
  {
    number: 35,
    slug: "retention-erasure-operations",
    shortTitle: "Retention Erasure Operations",
    pageTitle: "DPDP Quiz 35 - Retention Erasure Operations",
    eyebrow: "DPDP Quiz 35 | Retention Erasure Operations",
    heroTitle: "Retention Erasure Operations: Keeping What Is Needed and Deleting What Is Not",
    heroIntro: "This set moves into lifecycle management. It tests whether teams can separate genuine retention obligations from lazy record-hoarding and understand the procedural steps around erasure and notice.",
    cardDescription: "Five lifecycle questions on purpose completion, legal retention limits, 48-hour pre-erasure notice, local device copies, and documented retention policies.",
    audience: "Operations leads, MIS owners, programme teams, and governance reviewers",
    focus: "Retention policy discipline, erasure triggers, and reducing unnecessary lingering copies",
    resultSummary: "This set reinforces that records should not linger without purpose, that legal retention exceptions must be real and documented, and that systems need enforceable erasure processes.",
    topics: [
      { label: "Data Lifecycle", text: "Retention, erasure, and records that outlive their purpose" },
      { label: "Difficulty", text: "Intermediate operational data-lifecycle judgment" },
      { label: "Focus", text: "Purpose completion, pre-erasure notice, and technical deletion readiness" }
    ],
    questions: [
      {
        module: "Act and rules summary",
        topic: "Core erasure trigger",
        text: "According to the source pack, when should personal data generally be erased if no separate legal retention duty applies?",
        options: [
          "When consent is withdrawn or the specified purpose is no longer being served, whichever is earlier",
          "Only after three years in every programme",
          "Only after a beneficiary files a court petition",
          "Never, because archived records are always safer to keep"
        ],
        correct: 0,
        explanation: "The act-and-rules summary says personal data should be erased when consent is withdrawn or the specified purpose is no longer being served, unless law requires retention."
      },
      {
        module: "Act and rules summary",
        topic: "Pre-erasure notice",
        text: "What timing does the source material give for notifying a Data Principal before erasure?",
        options: [
          "At least 48 hours before erasure",
          "Within 24 hours after deletion",
          "Only at the end of the financial year",
          "Notice is never mentioned"
        ],
        correct: 0,
        explanation: "The act summary states that the Data Principal should be notified at least 48 hours before erasure."
      },
      {
        module: "Data audit checklist",
        topic: "System capability",
        text: "Why does the checklist ask whether individual records can actually be deleted on request?",
        options: [
          "Because rights compliance depends on technical controls, not just policy language",
          "Because deletion tools matter only for large e-commerce companies",
          "Because a paper policy alone satisfies Rule 8",
          "Because deleting one record automatically deletes audit logs too"
        ],
        correct: 0,
        explanation: "The audit checklist asks whether records can be deleted on request because erasure rights need real technical support."
      },
      {
        module: "Data audit checklist",
        topic: "Field-device copies",
        text: "In the ODK checklist, what is the DPDP concern if forms remain on devices long after they are synced?",
        options: [
          "Unnecessary local copies extend exposure and should be controlled by an offline-duration and deletion process",
          "Long local storage automatically changes the legal basis to deemed consent",
          "The data becomes anonymous after two weeks offline",
          "Device copies are outside audit scope once synced"
        ],
        correct: 0,
        explanation: "The ODK checklist asks about local storage duration and deletion of synced forms because lingering copies increase exposure."
      },
      {
        module: "Compliance timeline",
        topic: "Platform readiness",
        text: "Which of these is treated as part of readiness rather than something to improvise when a deletion request arrives?",
        options: [
          "Documented retention periods and an erasure policy",
          "A promise to clean old records if anyone notices them",
          "Waiting for the first audit finding before mapping data stores",
          "Leaving each platform owner to invent their own deadline later"
        ],
        correct: 0,
        explanation: "The timeline and audit materials both treat retention and erasure policy as proactive readiness work, not an ad hoc afterthought."
      }
    ]
  },
  {
    number: 36,
    slug: "advanced-research-exemption",
    shortTitle: "Advanced Research Exemption",
    pageTitle: "DPDP Quiz 36 - Advanced Research Exemption",
    eyebrow: "DPDP Quiz 36 | Advanced Research Exemption",
    heroTitle: "Advanced Research Exemption: Statistical Use, Anonymisation, and Decision Boundaries",
    heroIntro: "This advanced set closes the new block with BI and evaluation judgment. It tests whether teams can use the research or statistical pathway correctly without treating it as a blanket excuse for identifiable data sharing.",
    cardDescription: "Five advanced BI questions on Section 17(2)(b), decision-specific use, true anonymisation, secure statistical processing, and when exemptions do not remove governance duties.",
    audience: "BI analysts, evaluation partners, research teams, and data-governance leads",
    focus: "Research and statistical processing, anonymisation discipline, and limits of the exemption",
    resultSummary: "This set reinforces that the research exemption is narrow, depends on statistical or archival use, and does not excuse sloppy identifiable-data handling or decision-making about specific people.",
    topics: [
      { label: "Difficulty", text: "Advanced BI and evaluation judgment" },
      { label: "Obligation Area", text: "Research exemption, anonymisation, and accountable statistical processing" },
      { label: "Focus", text: "When Section 17-style relief can apply and what controls still matter" }
    ],
    questions: [
      {
        module: "Role guidance",
        topic: "Exemption condition",
        text: "According to the BI guidance, when is analysis most likely to fit the research or statistical exemption path?",
        options: [
          "When it is statistical or research work and is not used to make a decision about a specific individual",
          "Whenever the team prefers not to obtain consent",
          "Whenever the partner is a nonprofit organisation",
          "Whenever names are shortened to initials"
        ],
        correct: 0,
        explanation: "The BI guidance says the research or statistical pathway depends on the work being statistical in nature and not used for decisions about a specific Data Principal."
      },
      {
        module: "Role guidance",
        topic: "Anonymisation standard",
        text: "What is the key test for whether a dataset is truly anonymised under the source pack?",
        options: [
          "An individual cannot be re-identified directly or indirectly by any means",
          "Names have been replaced with serial numbers that the team can map back later",
          "The file contains more than 100 rows",
          "The dataset is stored by an external evaluator"
        ],
        correct: 0,
        explanation: "The BI guidance says true anonymisation means the individual cannot be re-identified directly or indirectly by any means."
      },
      {
        module: "Compliance timeline",
        topic: "Supporting rule",
        text: "Which compliance-timeline line explicitly calls out the need to document research or statistical exemption processes?",
        options: [
          "The Rule 16 line that says research or statistical exemption processes should follow the 2nd Schedule standards",
          "The Rule 9 line on publishing the privacy contact",
          "The Rule 10 line on child-consent verification",
          "The Rule 7 line on the initial breach notice"
        ],
        correct: 0,
        explanation: "The timeline lists a Rule 16 obligation to document research or statistical exemption processing using the 2nd Schedule standards."
      },
      {
        module: "Role guidance",
        topic: "Decision boundary",
        text: "A BI team uses a supposedly research dataset to decide which named beneficiaries will lose support next month. Why is that a problem under the allowed sources?",
        options: [
          "Because the exemption path is not for data used to make decisions specific to identifiable individuals",
          "Because statistical work is allowed only for international partners",
          "Because beneficiary decisions are fine as long as the file stays inside one department",
          "Because the only issue is whether the dashboard is encrypted"
        ],
        correct: 0,
        explanation: "The BI guidance says the research or statistical pathway does not apply when the processing is used to make a decision about a specific individual."
      },
      {
        module: "Role guidance",
        topic: "Residual controls",
        text: "Even when a statistical workflow may qualify for the exemption, what discipline does the source pack still expect?",
        options: [
          "Lawful, minimal, secure, and accountable processing rather than relaxed handling",
          "No contracts or safeguards because the exemption cancels them",
          "Unrestricted sharing with any evaluator who asks",
          "Permanent storage of every raw source file for convenience"
        ],
        correct: 0,
        explanation: "The BI guidance ties the exemption to accountable, minimal, and secure processing rather than treating it as a free pass."
      }
    ]
  },
  {
    number: 37,
    slug: "implementor-consent-records",
    shortTitle: "Implementor Consent Records",
    pageTitle: "DPDP Quiz 37 - Implementor Consent Records",
    eyebrow: "DPDP Quiz 37 | Implementor Consent Records",
    heroTitle: "Implementor Consent Records: Proving Notice, Choice, and Scope in the Field",
    heroIntro: "This next queued set moves back to frontline programme practice. It tests whether implementors can document consent properly, handle partial refusal calmly, and preserve evidence that the notice actually matched the data use.",
    cardDescription: "Five implementor-focused questions on verbal consent records, partial refusal, burden of proof, named sharing recipients, and documenting deemed-consent use correctly.",
    audience: "Program Officers, implementors, field coordinators, and enrolment reviewers",
    focus: "Consent documentation, evidence quality, notice scope, and disciplined field recording",
    resultSummary: "This set reinforces that good consent handling is not just saying the right words in the field. Teams need records that show what was explained, what the person agreed to, and when a different legal basis is actually being used.",
    topics: [
      { label: "People Role", text: "Implementor and Program Officer consent-handling judgment" },
      { label: "Difficulty", text: "Beginner to intermediate field documentation practice" },
      { label: "Focus", text: "Verbal records, refusal handling, sharing scope, and proof of consent" }
    ],
    questions: [
      {
        module: "Consent templates",
        topic: "Low-literacy documentation",
        text: "In a village enrolment where the beneficiary cannot read or sign, which record best matches the verbal-consent template from the approved source pack?",
        options: [
          "A note saying \"consent taken\" with no witness, no language used, and no fields listed",
          "A verbal-consent record showing the location, data fields collected, purpose explained, language used, exact agreement, and witness details",
          "A blank paper signed later at the block office by another staff member",
          "A WhatsApp message from the field worker saying the visit went fine"
        ],
        correct: 1,
        explanation: "The verbal-consent template expects a fuller record: where the consent happened, what data was involved, the purpose explained, the language used, the beneficiary's verbal response, and witness details."
      },
      {
        module: "Role guidance",
        topic: "Partial refusal",
        text: "During a household survey, a beneficiary agrees to share name and phone number but refuses to disclose income. What handling fits the role guidance best?",
        options: [
          "Record all fields anyway because partial refusal creates messy data",
          "Stop the entire survey permanently because one field was refused",
          "Skip the refused income field, record only what was agreed to, and continue within scope",
          "Tell the beneficiary benefits may be delayed unless every question is answered"
        ],
        correct: 2,
        explanation: "The role guidance says people must be allowed to refuse, and unnecessary collection should not continue just because a form contains the field."
      },
      {
        module: "Act and rules summary",
        topic: "Burden of proof",
        text: "Why is a supervisor wrong to say, \"Our staff usually explain the form, so we do not need proof for each beneficiary\"?",
        options: [
          "Because only digital signatures count as legal evidence",
          "Because the Data Fiduciary bears the burden of proof that notice was given and consent was obtained",
          "Because proof matters only if the programme shares data internationally",
          "Because explanation is optional when the form has more than one page"
        ],
        correct: 1,
        explanation: "The act-and-rules summary says the Data Fiduciary must be able to prove that notice was given and consent was obtained. Habit or assumption is not enough."
      },
      {
        module: "Consent templates",
        topic: "Named sharing scope",
        text: "An enrolment notice says data may be used for the programme but says nothing about sharing identifiable records with the district NHM office. Before that sharing happens, what is the safer reading from the source material?",
        options: [
          "Sharing is automatically covered because any government office can be added later",
          "The sharing should be treated carefully because the notice should identify who will see the information when consent is the basis",
          "The missing detail does not matter if the recipient promises confidentiality",
          "The team can solve the issue by changing the purpose line after collection"
        ],
        correct: 1,
        explanation: "The consent template includes a specific \"Who will see this information\" section. If consent is the basis, identifiable sharing should match what the notice actually described."
      },
      {
        module: "Consent templates",
        topic: "Government-program recordkeeping",
        text: "For a government-linked workflow where the team is relying on Section 7 deemed consent instead of the formal enrolment template, what should programme records still show?",
        options: [
          "Nothing, because deemed consent removes the need for any documentation",
          "Only the beneficiary's nickname so the file stays short",
          "The legal basis for processing should be documented in programme records rather than pretending a standard consent form was used",
          "That staff plan to collect a signature later if someone asks"
        ],
        correct: 2,
        explanation: "The consent-template notes say that when deemed consent applies, teams may not need the formal notice template, but they should document the legal basis for processing in programme records."
      }
    ]
  },
  {
    number: 38,
    slug: "jharkhand-odk-device-recovery",
    shortTitle: "Jharkhand ODK Device Recovery",
    pageTitle: "DPDP Quiz 38 - Jharkhand ODK Device Recovery",
    eyebrow: "DPDP Quiz 38 | Jharkhand ODK Device Recovery",
    heroTitle: "Jharkhand ODK Device Recovery: Protecting Offline Forms After a Field Incident",
    heroIntro: "This field-setting quiz follows the first response to a lost or compromised ODK device. It turns the breach SOP and ODK checklist into five practical choices for teams working with offline beneficiary forms.",
    cardDescription: "Five Jharkhand field questions on lost ODK devices, rapid escalation, preserving evidence, remote wipe, and reducing exposure from synced forms.",
    audience: "Field implementors, Program Officers, ODK administrators, and district IT coordinators",
    focus: "Lost-device response, breach evidence, ODK safeguards, and offline-form hygiene",
    resultSummary: "This set reinforces that an offline-device incident must be reported and contained immediately, while the team preserves evidence, assesses exposure, and follows the notification process.",
    topics: [
      { label: "Location", text: "Jharkhand field operations using offline ODK Collect forms" },
      { label: "Lifecycle Stage", text: "Incident response and recovery after collection" },
      { label: "Focus", text: "Rapid reporting, remote wipe, evidence preservation, and local-copy controls" }
    ],
    questions: [
      {
        module: "Breach response SOP",
        topic: "First report",
        text: "A Dumka field worker cannot find a phone containing unsynced ODK beneficiary forms. What should happen first under the breach SOP?",
        options: [
          "Report it to the supervisor and IT immediately, without waiting to see whether the phone turns up",
          "Wait until the end of the week so the team can search quietly",
          "Create replacement forms before telling anyone",
          "Delete the ODK account from another phone and assume that ends the incident"
        ],
        correct: 0,
        explanation: "The lost-device procedure requires immediate escalation to the supervisor and IT; delay can prevent containment and timely assessment."
      },
      {
        module: "Data audit checklist",
        topic: "Remote wipe readiness",
        text: "Which control makes it possible for IT to reduce exposure from a lost field device when the device is enrolled and reachable?",
        options: [
          "A remote wipe capability through device management",
          "A longer paper consent notice",
          "A new beneficiary ID format",
          "A public WhatsApp update about the missing phone"
        ],
        correct: 0,
        explanation: "The ODK checklist calls for remote-wipe capability for lost or stolen devices, and the SOP directs IT to attempt it promptly."
      },
      {
        module: "Breach response SOP",
        topic: "Evidence preservation",
        text: "After unauthorised access is suspected on the ODK server, what should the technical team avoid doing before preserving relevant evidence?",
        options: [
          "Trying to fix the incident before logs are preserved",
          "Recording the time the issue was noticed",
          "Alerting the IT and governance contacts",
          "Checking which accounts may have been affected"
        ],
        correct: 0,
        explanation: "The SOP says to preserve logs before actions change the environment and not to remediate first, because evidence is needed to understand and document the incident."
      },
      {
        module: "Data audit checklist",
        topic: "Synced-form deletion",
        text: "Why should an ODK team define and follow deletion of personal-data forms after successful sync?",
        options: [
          "It limits unnecessary local copies and the exposure they create on field devices",
          "It turns the form data into anonymous data automatically",
          "It removes the need for access controls on ODK Central",
          "It means a lost phone can never be a breach"
        ],
        correct: 0,
        explanation: "The audit checklist asks whether synced forms are deleted from devices because retaining unnecessary local copies increases exposure."
      },
      {
        module: "Breach response SOP",
        topic: "Incident scoping",
        text: "When documenting a stolen device with offline forms, which information is most useful for the initial assessment?",
        options: [
          "The device details, time and last location of loss, the data on it, and the approximate people affected",
          "Only the field worker's preferred replacement handset",
          "A promise that the forms were probably harmless",
          "A new schedule for next month's enrolment camp"
        ],
        correct: 0,
        explanation: "The SOP calls for documenting device details, loss timing and location, what data was present, and the scope of affected people so the incident can be assessed and handled."
      }
    ]
  },
  {
    number: 39,
    slug: "platform-audit-evidence",
    shortTitle: "Platform Audit Evidence",
    pageTitle: "DPDP Quiz 39 - Platform Audit Evidence",
    eyebrow: "DPDP Quiz 39 | Platform Audit Evidence",
    heroTitle: "Platform Audit Evidence: Proving What the System Stores, Shares, and Protects",
    heroIntro: "This queued quiz moves into the audit stage of the lifecycle. It checks whether platform owners can recognise the evidence an internal DPDP audit actually needs instead of treating readiness as a vague future exercise.",
    cardDescription: "Five audit-focused questions on data inventory, processor safeguards, backup evidence, hosted infrastructure visibility, and why the platform audit should already be underway.",
    audience: "BIDA reviewers, IT governance leads, platform owners, developers, and programme technology managers",
    focus: "Audit evidence, platform inventory, vendor safeguards, backup verification, and readiness sequencing",
    resultSummary: "This set reinforces that a DPDP platform audit needs concrete evidence about data flows, storage, sharing, and controls. Teams should be able to show where data sits, who can access it, what contracts apply, and whether safeguards really work.",
    topics: [
      { label: "Project Stage", text: "Readiness audit before full compliance becomes enforceable" },
      { label: "Obligation Area", text: "Rule 3 and Rule 6 evidence across platforms and vendors" },
      { label: "Focus", text: "Inventory, contracts, backups, hosting visibility, and remediation timing" }
    ],
    questions: [
      {
        module: "Data audit checklist",
        topic: "Inventory evidence",
        text: "During a DPDP platform review, a system owner says, \"We know the MIS is useful, but we have never mapped exactly which personal data fields it stores or where they sit.\" In the checklist, what does that reveal first?",
        options: [
          "A gap in basic data inventory that should be fixed before the audit can be considered complete",
          "A harmless documentation issue because storage details matter only after May 2027",
          "A sign that the platform can skip consent review if the team knows the beneficiary names",
          "Proof that the vendor alone now owns all DPDP responsibilities"
        ],
        correct: 0,
        explanation: "The general checklist starts with data inventory: teams should know what personal data a platform stores, where it is stored, and whether it is shared externally."
      },
      {
        module: "Act and rules summary",
        topic: "Processor safeguards",
        text: "Why does the source pack treat a missing vendor or Data Processor security clause as more than a procurement detail?",
        options: [
          "Because DPDP expects contractual provisions requiring equivalent security safeguards from the Data Processor",
          "Because vendors automatically become Data Principals once a contract is signed",
          "Because contracts matter only when the data leaves India",
          "Because a contract can replace access controls inside the platform"
        ],
        correct: 0,
        explanation: "The act-and-rules summary says Data Processor arrangements should include contractual provisions requiring equivalent security safeguards."
      },
      {
        module: "Data audit checklist",
        topic: "Backup proof",
        text: "An infrastructure lead says, \"Backups run every night, so we do not need to test restores during the audit.\" What is the closer checklist answer?",
        options: [
          "That is enough because backup existence is the only thing the audit checks",
          "Restore testing still matters because the checklist asks whether backups are tested for restorability",
          "Restore testing matters only for Significant Data Fiduciaries",
          "Backups can be ignored if logs are retained for one year"
        ],
        correct: 1,
        explanation: "The checklist asks not only whether backups exist, but whether they are tested for restorability."
      },
      {
        module: "Data audit checklist",
        topic: "Hosted infrastructure visibility",
        text: "For a custom MIS hosted by an external provider, which detail is the audit checklist explicitly trying to surface before teams assume cross-border issues are understood?",
        options: [
          "The favourite browser of each analyst",
          "Where the MIS is hosted, including cloud region or vendor, and whether that is documented",
          "Only the colour scheme used in the dashboard",
          "Whether the homepage mentions DPDP in its footer"
        ],
        correct: 1,
        explanation: "The custom MIS checklist asks where the platform is hosted and whether that hosting arrangement is documented."
      },
      {
        module: "Compliance timeline",
        topic: "Readiness sequencing",
        text: "According to the timeline guidance, how should Piramal Foundation treat the platform-audit work for systems like DHIS2, AMRIT, ODK, and Nikshay-linked flows?",
        options: [
          "Leave the audit until after the Consent Manager framework goes live",
          "Start it now as part of the November 2026 readiness target rather than waiting for the final enforcement date",
          "Do it only if the organisation becomes a Significant Data Fiduciary",
          "Postpone it until the first beneficiary complaint arrives"
        ],
        correct: 1,
        explanation: "The compliance timeline says platform audit work should start now and be part of the November 2026 readiness target, even though full compliance is enforced later."
      }
    ]
  },
  {
    number: 40,
    slug: "notice-design-withdrawal-paths",
    shortTitle: "Notice Design Withdrawal Paths",
    pageTitle: "DPDP Quiz 40 - Notice Design Withdrawal Paths",
    eyebrow: "DPDP Quiz 40 | Notice Design Withdrawal Paths",
    heroTitle: "Notice Design and Withdrawal Paths: Making Consent Understandable and Actionable",
    heroIntro: "This queued quiz shifts from audit evidence to front-end notice design. It focuses on whether teams can recognise a valid standalone notice, explain sharing clearly, and give beneficiaries a real withdrawal route instead of vague wording.",
    cardDescription: "Five Rule 3 questions on standalone notices, itemised fields, named sharing, withdrawal channels, and proving that consent was actually documented.",
    audience: "Programme teams, implementors, privacy coordinators, field supervisors, and product owners designing enrolment flows",
    focus: "Notice structure, specific purpose wording, withdrawal mechanisms, and consent evidence quality",
    resultSummary: "This set reinforces that a DPDP notice is not a formality. It must stand on its own, explain specific data and sharing clearly, and leave behind evidence that the beneficiary truly agreed.",
    topics: [
      { label: "Obligation Area", text: "Rule 3 notice design and Section 6 consent practice" },
      { label: "Project Stage", text: "Data collection and enrolment workflow design before processing begins" },
      { label: "Focus", text: "Standalone notice quality, withdrawal paths, and burden-of-proof records" }
    ],
    questions: [
      {
        module: "Consent templates",
        topic: "Standalone notice",
        text: "A product owner wants the enrolment notice placed behind a small \"learn more\" link at the end of a long programme agreement so the main page looks cleaner. Based on the source pack, what is the better DPDP view?",
        options: [
          "That is acceptable because any linked notice counts as informed consent",
          "The notice should remain understandable independently rather than being buried inside a larger document flow",
          "The notice can stay hidden if field staff promise to explain it later only when asked",
          "The notice is required only when the platform collects Aadhaar numbers"
        ],
        correct: 1,
        explanation: "The consent templates and act summary say the notice must be understandable independently and should not be buried inside a longer agreement or MOU."
      },
      {
        module: "Consent templates",
        topic: "Specific sharing disclosure",
        text: "Which enrolment line is closer to the template guidance on explaining who may see the data?",
        options: [
          "\"Your information may go to anyone supporting development work\"",
          "\"Your information may be shared with Piramal Foundation programme staff and the named government partner for programme reporting\"",
          "\"Sharing details are internal and need not be disclosed to beneficiaries\"",
          "\"We will decide later who needs access once the programme scales\""
        ],
        correct: 1,
        explanation: "The template asks teams to explain who will see the information using named or clearly described recipients, not vague future-sharing language."
      },
      {
        module: "Act and rules summary",
        topic: "Withdrawal route",
        text: "A consent notice says beneficiaries may withdraw consent by sending a written request to the state office in another city during office hours. What is the main issue under the guidance?",
        options: [
          "There is no issue because any withdrawal method is automatically valid",
          "Withdrawal should be as easy as giving consent, so the mechanism should not be needlessly hard to use",
          "Withdrawal is relevant only for children's data",
          "Withdrawal is optional if the notice already lists the data fields"
        ],
        correct: 1,
        explanation: "The act-and-rules summary states that the notice must explain how to withdraw consent and that withdrawal should be as easy as giving consent."
      },
      {
        module: "Consent templates",
        topic: "Burden of proof",
        text: "After a beneficiary questions whether she ever agreed to programme monitoring, the team can show only a screenshot saying \"consent collected\" with no date, witness, form ID, or explanation record. Which DPDP principle is weakest here?",
        options: [
          "The burden of proof that notice was given and consent was obtained",
          "The rule on cross-border negative-list monitoring",
          "The requirement to appoint a Data Protection Officer immediately",
          "The rule that every notice must include a donor logo"
        ],
        correct: 0,
        explanation: "The source pack says Piramal Foundation bears the burden of proof for giving notice and obtaining consent, so records need enough detail to show what happened."
      },
      {
        module: "Consent templates",
        topic: "Itemised data wording",
        text: "A field app notice says, \"We collect details needed for service improvement.\" Which revision better matches the approved templates?",
        options: [
          "\"We collect anything useful for future programme expansion\"",
          "\"We collect your name, mobile number, village, and pregnancy status for antenatal follow-up and programme reporting\"",
          "\"Collection details can be shared verbally only after the form is submitted\"",
          "\"Specific fields do not need to be listed if the app belongs to Piramal Foundation\""
        ],
        correct: 1,
        explanation: "The templates require itemised data fields and a specific stated purpose rather than broad statements about collecting useful details."
      }
    ]
  },
  {
    number: 41,
    slug: "bihar-voice-consent-workflows",
    shortTitle: "Bihar Voice Consent Workflows",
    pageTitle: "DPDP Quiz 41 - Bihar Voice Consent Workflows",
    eyebrow: "DPDP Quiz 41 | Bihar Voice Consent Workflows",
    heroTitle: "Bihar Voice Consent Workflows: Recordings, Retention, and Programme Boundaries",
    heroIntro: "This queued quiz moves into Bihar field and livelihood workflows where staff may record voices for surveys, training, or AI support tools. It checks whether teams can separate valid recording consent from casual collection habits and manage audio files once the work is done.",
    cardDescription: "Five Bihar-focused questions on voice-recording consent, named AI Didi purpose, withdrawal clarity, audio retention, and JEEViKA role-boundary checks.",
    audience: "Gandhi Fellows, programme coordinators, AI Didi teams, JEEViKA-facing staff, and privacy reviewers",
    focus: "Audio consent, purpose limitation, retention discipline, and partnership role clarity",
    resultSummary: "This set reinforces that voice data is personal data. Teams should explain the exact recording purpose, avoid broad future-use wording, delete files when the stated use is complete, and clarify partner roles before scaling collection.",
    topics: [
      { label: "Location", text: "Bihar community and livelihood workflows including AI Didi-style voice use" },
      { label: "People Role", text: "Field staff, programme coordinators, and partnership teams handling recordings" },
      { label: "Focus", text: "Recording consent, withdrawal routes, retention, and role-boundary checks" }
    ],
    questions: [
      {
        module: "Compliance timeline",
        topic: "AI Didi consent trigger",
        text: "A Bihar team wants to collect Bank Sakhi voice samples for an AI Didi support feature. According to the approved source pack, what is the first privacy question the team should treat as real rather than optional?",
        options: [
          "Whether voice recordings are identifiable personal data that need consent before collection",
          "Whether the recordings can be treated as anonymous because they are audio instead of text",
          "Whether the samples can skip notice if the project is described as innovation",
          "Whether only the final AI model, and not the recordings, falls under DPDP"
        ],
        correct: 0,
        explanation: "The compliance timeline explicitly flags Bank Sakhi voice recordings for AI Didi as potentially personal data if identifiable, which means teams should address consent before collecting them."
      },
      {
        module: "Consent templates",
        topic: "Specific recording purpose",
        text: "Which notice line is closer to the approved template when staff want to record a participant's voice in Bihar for a defined support use case?",
        options: [
          "\"We may use your voice in any current or future digital initiative\"",
          "\"We would like to record your voice for AI Didi training support and explain whether it will be used in training materials, internal documentation, or another named purpose\"",
          "\"Recording details are internal, so staff can decide the use after collection\"",
          "\"If the person is already in the programme, a separate recording purpose need not be explained\""
        ],
        correct: 1,
        explanation: "The photography and audio consent template requires the purpose to be described specifically, not left as a broad future-use statement."
      },
      {
        module: "Act and rules summary",
        topic: "Withdrawal path",
        text: "A recording-consent flow says a participant may withdraw only by visiting the state office in person after the pilot ends. What is the main problem under the source guidance?",
        options: [
          "There is no issue because audio consent cannot be withdrawn once captured",
          "Withdrawal should be as easy as giving consent, so the route should not be made harder than the collection flow",
          "Withdrawal rules apply only to photographs, not to voice recordings",
          "The issue is only that the office is in Bihar rather than Delhi"
        ],
        correct: 1,
        explanation: "The act-and-rules summary says the notice must explain how to withdraw consent and that withdrawal should be as easy as giving consent."
      },
      {
        module: "Role guidance",
        topic: "Retention after purpose served",
        text: "A Gandhi Fellow recorded an explanatory voice note from a participant for follow-up support and has already used it for the intended task. What does the source pack point to next?",
        options: [
          "Keep the file indefinitely in case a future programme might find it useful",
          "Share the clip in the wider team group so others can learn from it",
          "Delete the recording once the purpose it served is complete",
          "Move it to a personal phone because private storage removes DPDP concerns"
        ],
        correct: 2,
        explanation: "The role guidance says recordings are personal data and should be deleted once the purpose they served has ended."
      },
      {
        module: "Compliance timeline",
        topic: "JEEViKA role clarity",
        text: "Before scaling a Bihar voice-data workflow with JEEViKA-NRLM, what does the compliance timeline say the programme should clarify in the partnership setup?",
        options: [
          "Whether JEEViKA is acting as a joint Data Fiduciary or a Data Processor",
          "Whether staff can skip a retention policy until May 2027",
          "Whether only English notices can be used for audio collection",
          "Whether every recording must be stored outside India"
        ],
        correct: 0,
        explanation: "The compliance timeline specifically flags JEEViKA role clarity and says teams should determine whether it is acting as a joint Data Fiduciary or a Data Processor."
      }
    ]
  },
  {
    number: 42,
    slug: "platform-data-inventory-kickoff",
    shortTitle: "Platform Data Inventory Kickoff",
    pageTitle: "DPDP Quiz 42 - Platform Data Inventory Kickoff",
    eyebrow: "DPDP Quiz 42 | Platform Data Inventory Kickoff",
    heroTitle: "Platform Data Inventory Kickoff: Know the Fields, Flows, and Owners",
    heroIntro: "This queued quiz shifts into audit-readiness work. It tests whether platform owners can start a DPDP review by identifying what personal data exists, where it sits, who can access it, and which linked obligations need evidence rather than assumptions.",
    cardDescription: "Five audit-readiness questions on data dictionaries, external sharing checks, standalone notices, one-year logs, and named rights-handling ownership.",
    audience: "BIDA reviewers, IT governance teams, platform owners, programme MIS leads, and privacy coordinators",
    focus: "Data inventory, notice evidence, processor oversight, log retention, and rights workflow ownership",
    resultSummary: "This set reinforces that audit readiness starts with a usable data inventory, visible sharing flows, proof of valid notices, one-year logs, and a named person who can route rights and grievances.",
    topics: [
      { label: "Project Stage", text: "Early audit-readiness and platform control review" },
      { label: "Obligation Area", text: "Data inventory, consent evidence, security safeguards, and rights handling" },
      { label: "Focus", text: "Field-level documentation, vendor checks, retention proof, and accountable ownership" }
    ],
    questions: [
      {
        module: "Data audit checklist",
        topic: "Field-level inventory",
        text: "A platform owner says, \"We know the MIS stores beneficiary data, but we have never documented each field or table.\" Which audit artifact from the approved source pack best closes that gap first?",
        options: [
          "A data dictionary or schema that documents each field and where personal data is stored",
          "A promise to explain the system verbally during the audit meeting",
          "A screenshot of the login page because that shows the platform exists",
          "A broad note saying the platform stores only useful programme details"
        ],
        correct: 0,
        explanation: "The data-audit checklist asks whether the team knows exactly what personal data the platform stores and whether there is a data dictionary or schema documenting each field and storage location."
      },
      {
        module: "Data audit checklist",
        topic: "External sharing evidence",
        text: "During an audit, the team confirms that beneficiary data from the platform is shared with an outside vendor. What linked check does the approved checklist require next?",
        options: [
          "Whether a Data Processing Agreement is in place",
          "Whether the vendor has promised informally to be careful",
          "Whether the transfer happened only after working hours",
          "Whether the platform owner can remember the vendor's name"
        ],
        correct: 0,
        explanation: "The checklist explicitly asks: if data is shared with any external party, is there a Data Processing Agreement in place."
      },
      {
        module: "Act and rules summary",
        topic: "Notice proof",
        text: "An auditor asks how the platform proves people received a valid notice before collection. Which answer is closest to the source guidance?",
        options: [
          "The notice should be standalone, itemise the data fields, state the specific purpose, and explain withdrawal",
          "A signed MOU is enough even if the notice is buried inside it",
          "The team can leave the purpose blank if the platform is internal",
          "Specific data fields need not be listed when the platform is already in use"
        ],
        correct: 0,
        explanation: "Rule 3 in the act-and-rules summary requires a clear standalone notice that itemises the data collected, states the specific purpose, and explains how to withdraw consent."
      },
      {
        module: "Data audit checklist",
        topic: "Log retention evidence",
        text: "A reviewer finds access logs are enabled but rotated away after three months. Why is that still a DPDP gap under the approved source pack?",
        options: [
          "Logs are optional if the platform already has HTTPS",
          "DPDP expects access logs to be retained for a minimum of one year",
          "Only Significant Data Fiduciaries need any logs at all",
          "Three months is enough whenever the platform has backups"
        ],
        correct: 1,
        explanation: "Both the act-and-rules summary and the data-audit checklist state that logs should be retained for a minimum of one year."
      },
      {
        module: "Data audit checklist",
        topic: "Rights-handling ownership",
        text: "The audit shows there is no clearly named person to handle access, correction, deletion, or grievance requests. Which checklist line does this fail most directly?",
        options: [
          "Whether individual records can be exported to Excel",
          "Whether there is a designated person to handle rights requests",
          "Whether the platform uses a branded dashboard theme",
          "Whether field staff can make every privacy decision without escalation"
        ],
        correct: 1,
        explanation: "In the rights section, the checklist asks whether there is a designated person to handle rights requests and whether grievances can be resolved within 90 days."
      }
    ]
  },
  {
    number: 52,
    slug: "developer-export-access",
    shortTitle: "Developer Export Access",
    pageTitle: "DPDP Quiz 52 - Developer Export Access",
    eyebrow: "DPDP Quiz 52 | Developer Export Access",
    heroTitle: "Developer Export Access: Logs, Tokens, and Least-Privilege Controls",
    heroIntro: "This queued set shifts away from Bihar voice workflows into platform engineering. It checks whether developers and system owners can reduce export risk before beneficiary data leaves the system through APIs, spreadsheets, or admin tools.",
    cardDescription: "Five developer questions on export logging, inactive accounts, API token rotation, encrypted backups, and vendor-security clauses.",
    audience: "Developers, DHIS2 owners, MIS administrators, and IT governance reviewers",
    focus: "Rule 6 safeguards, least-privilege access, auditability, and processor-aligned security controls",
    resultSummary: "This set reinforces that export rights should be restricted, audit logs retained, stale accounts reviewed, backups protected, and vendors bound to equivalent security safeguards.",
    topics: [
      { label: "People Role", text: "Developers and platform owners shipping or maintaining data-heavy systems" },
      { label: "Project Stage", text: "Feature hardening before release and before granting export access" },
      { label: "Focus", text: "Least privilege, logging, token handling, backups, and processor contracts" }
    ],
    questions: [
      {
        module: "Data audit checklist",
        topic: "CSV export restriction",
        text: "A custom MIS lets every logged-in user export beneficiary-level CSV files because the team wants convenience. Which DPDP-oriented correction is closest to the approved checklist?",
        options: [
          "Restrict export capability to authorised roles and keep a record of who downloaded what",
          "Leave exports open because the users are all internal staff",
          "Allow exports but disable audit logging so the interface feels faster",
          "Move the export button to a harder-to-find menu and treat that as enough"
        ],
        correct: 0,
        explanation: "The platform audit checklist says bulk data exports should be restricted and logged. Convenience does not replace RBAC or auditability."
      },
      {
        module: "Role guidance",
        topic: "Inactive account review",
        text: "During a DHIS2 review, a developer sees many enabled accounts that have not logged in for over a year. What does the source pack treat as the correct next step?",
        options: [
          "Keep them because only active misuse creates DPDP risk",
          "Publish the user list to all teams so anyone can judge who seems unnecessary",
          "Review and deactivate or limit stale accounts as part of access-control hygiene",
          "Wait until May 13, 2027 before changing account status"
        ],
        correct: 2,
        explanation: "The role guidance and audit checklist both describe inactive accounts as a security risk that should be reviewed and restricted, not left open."
      },
      {
        module: "Data audit checklist",
        topic: "API token discipline",
        text: "What does the DHIS2-focused checklist expect for API access used by integrations and scripts?",
        options: [
          "API calls do not need logging if they come from trusted internal systems",
          "API keys or tokens should be rotated regularly and API calls should be logged",
          "One shared permanent token is preferable because rotation complicates automation",
          "API controls matter only after the government issues a cross-border negative list"
        ],
        correct: 1,
        explanation: "The DHIS2 checklist explicitly asks whether API keys or tokens are rotated regularly and whether API calls are logged."
      },
      {
        module: "Act and rules summary",
        topic: "Backup protection",
        text: "A team has daily backups of a beneficiary database, but the backups are copied to an unprotected drive readable by many staff. Which interpretation fits Rule 6 guidance best?",
        options: [
          "This is acceptable because having any backup satisfies the safeguard requirement",
          "Backups should support continued processing, but they still need appropriate protection such as access control and encryption",
          "Backups fall outside DPDP because they are only for disaster recovery",
          "The problem disappears if the drive is located inside India"
        ],
        correct: 1,
        explanation: "Rule 6 requires safeguards such as encryption and access control, and backups are part of continued processing. A broadly accessible backup copy is not a compliant control posture."
      },
      {
        module: "Act and rules summary",
        topic: "Vendor contract baseline",
        text: "When Piramal Foundation uses a vendor to host or maintain a system processing beneficiary data, what must the written arrangement cover?",
        options: [
          "Only commercial pricing and uptime terms",
          "A promise that the vendor will share data only on request from donors",
          "Equivalent security safeguards for the Data Processor under contract",
          "No contract is needed if the vendor is already technically skilled"
        ],
        correct: 2,
        explanation: "The act summary says Data Processor contracts must include data security requirements, and Rule 6 expects equivalent safeguards through the vendor arrangement."
      }
    ]
  },
  {
    number: 43,
    slug: "karuna-child-photo-boundaries",
    shortTitle: "Karuna Child Photo Boundaries",
    pageTitle: "DPDP Quiz 43 - Karuna Child Photo Boundaries",
    eyebrow: "DPDP Quiz 43 | Karuna Child Photo Boundaries",
    heroTitle: "Karuna Child Photo Boundaries: Care Exemptions Versus Storytelling Uses",
    heroIntro: "This set returns to field health work, but with a sharper children’s-data lens. It tests whether teams can separate direct care from photos, donor storytelling, and program databases that go beyond the healthcare exemption.",
    cardDescription: "Five Karuna-focused questions on care exemptions, parental consent for media, MIS entry boundaries, safety tracking, and child well-being protections.",
    audience: "Karuna Fellows, camp coordinators, child-health teams, and supervisors",
    focus: "Children's data, care-purpose limits, parental consent, and prohibited harmful processing",
    resultSummary: "This set reinforces that direct care has a narrow exemption, while photos, reporting, and non-care reuse need separate parental consent and caution.",
    topics: [
      { label: "People Role", text: "Karuna Fellows and camp staff working closest to mothers and children" },
      { label: "Obligation Area", text: "Section 9 children's data protections and 4th Schedule exemptions" },
      { label: "Focus", text: "Care-versus-media boundaries, MIS entry, and child-well-being safeguards" }
    ],
    questions: [
      {
        module: "Act and rules summary",
        topic: "Direct care boundary",
        text: "At a nutrition camp, a Karuna Fellow records a child's weight and MUAC to guide immediate counselling. Why can this happen without separate parental consent under the source pack?",
        options: [
          "Because all child data is automatically exempt under DPDP",
          "Because direct health-service processing for the child's care falls within the healthcare exemption",
          "Because measurement data is not treated as personal data",
          "Because any camp run by an NGO is outside the law"
        ],
        correct: 1,
        explanation: "The 4th Schedule summary says healthcare professionals and similar health-service settings can process children's health data for care without separate parental consent."
      },
      {
        module: "Consent templates",
        topic: "Child photo for donor deck",
        text: "The team wants to photograph the same child later for a donor presentation. What does the approved source pack require?",
        options: [
          "No extra step, because the child already attended the camp",
          "Only the child's oral agreement is enough",
          "Parental or guardian consent for the media use",
          "A promise not to publish the child's village name"
        ],
        correct: 2,
        explanation: "The media consent template says identifiable photos are personal data, and for children the parent or guardian must consent."
      },
      {
        module: "Role guidance",
        topic: "MIS entry outside direct care",
        text: "A fellow says, \"If care is exempt, I can enter every child detail into any program database without checking the enrolment basis.\" Which response best fits the source guidance?",
        options: [
          "That is correct because once care begins, all later processing is covered",
          "Only donor reporting is limited; program databases never need review",
          "The exemption is for care-related processing, so wider MIS or reporting use should still be covered appropriately",
          "The exemption applies only if the child is above 14 years old"
        ],
        correct: 2,
        explanation: "The role guidance draws a bright line: direct care is different from later database, reporting, or media uses, which need their own lawful basis and documentation."
      },
      {
        module: "Act and rules summary",
        topic: "School safety comparison",
        text: "Which example from the approved summary is presented as an exemption context for children's processing without fresh parental consent?",
        options: [
          "Behavioural advertising in an education app",
          "Educational activities or safety tracking by an educational institution",
          "Open-ended analytics on children's preferences for future campaigns",
          "Selling child case stories to a partner network"
        ],
        correct: 1,
        explanation: "The summary lists educational institutions and safety tracking in that context as an exemption example, while profiling and promotional reuse are not."
      },
      {
        module: "Act and rules summary",
        topic: "Detrimental-effect line",
        text: "Which practice is explicitly inconsistent with the child-protection section of the source pack?",
        options: [
          "Collecting care data during a health camp for treatment",
          "Tracking a child's behaviour or profiling them in a way likely to harm their well-being",
          "Recording a child's weight for referral support",
          "Explaining a notice to a parent in plain language"
        ],
        correct: 1,
        explanation: "The children's-data section prohibits behavioural tracking, profiling, and processing likely to cause a detrimental effect on a child's well-being."
      }
    ]
  },
  {
    number: 44,
    slug: "rights-request-ledger",
    shortTitle: "Rights Request Ledger",
    pageTitle: "DPDP Quiz 44 - Rights Request Ledger",
    eyebrow: "DPDP Quiz 44 | Rights Request Ledger",
    heroTitle: "Rights Request Ledger: Logging, Escalation, and the 90-Day Clock",
    heroIntro: "This queued quiz focuses on the mechanics of handling Data Principal rights. It checks whether staff record requests cleanly, avoid improvised answers, and keep the 90-day response window in view.",
    cardDescription: "Five rights-handling questions on access, correction, erasure, nomination, and why logging requests matters from day one.",
    audience: "Program Officers, implementors, grievance handlers, and privacy contacts",
    focus: "Rights intake, escalation, documentation, lawful retention limits, and response timing",
    resultSummary: "This set reinforces disciplined intake: receive calmly, log the request, escalate appropriately, and respond within the allowed window without guessing.",
    topics: [
      { label: "Obligation Area", text: "Sections 11 to 14 rights handling and Rule 14 response operations" },
      { label: "Project Stage", text: "Frontline request intake before detailed resolution starts" },
      { label: "Focus", text: "Access, correction, erasure, nomination, and grievance timing" }
    ],
    questions: [
      {
        module: "Consent templates",
        topic: "Minimum rights log detail",
        text: "Which entry best matches the approved rights-request tracking template when a beneficiary asks to see their record?",
        options: [
          "Only the beneficiary's first name, because more detail creates risk",
          "Request date, beneficiary name or ID, type of request, who received it, escalation, and response due date",
          "A short memory note with no date, because staff can fill in the rest later",
          "Nothing written down unless the person comes back twice"
        ],
        correct: 1,
        explanation: "The rights-request template includes the request date, beneficiary details, request type, recipient, escalation path, and response due date."
      },
      {
        module: "Learning modules",
        topic: "Access request response",
        text: "A Gandhi Fellow is asked, \"What data do you have about me?\" but cannot see the full system record. What should happen next?",
        options: [
          "Provide an estimated answer from memory so the beneficiary does not wait",
          "Say rights apply only after May 2027",
          "Log the request and escalate instead of guessing",
          "Tell the beneficiary to ask the DPBI directly first"
        ],
        correct: 2,
        explanation: "The learning modules say frontline staff should not invent an answer. They should record the request and escalate it through the proper workflow."
      },
      {
        module: "Act and rules summary",
        topic: "Erasure limit",
        text: "A beneficiary asks for deletion, but the programme is legally required to retain a related government record. Which answer is closest to the source pack?",
        options: [
          "Erasure is absolute, so legal retention never matters",
          "The request should be logged and assessed, but records required by law may need to be retained",
          "The request can be ignored if the data is old",
          "Only paper files are affected by the erasure right"
        ],
        correct: 1,
        explanation: "The act summary says erasure applies unless retention is required by law, so the request must be considered rather than dismissed or automatically granted."
      },
      {
        module: "Act and rules summary",
        topic: "Response clock",
        text: "What is the maximum response period stated for grievances and rights-related handling in the approved source pack?",
        options: [
          "30 days",
          "60 days",
          "90 days",
          "180 days"
        ],
        correct: 2,
        explanation: "The summary states that grievance responses must be provided within 90 days maximum, and the training material uses that same window operationally."
      },
      {
        module: "Act and rules summary",
        topic: "Nomination right",
        text: "Which right allows a beneficiary to designate another person to act on their behalf in case of death or incapacity?",
        options: [
          "Right to correction",
          "Right to nomination",
          "Right to data portability",
          "Right to silence"
        ],
        correct: 1,
        explanation: "Section 14 in the summary describes the right to nominate another person to exercise rights after death or incapacity."
      }
    ]
  },
  {
    number: 45,
    slug: "donor-evaluation-anonymisation",
    shortTitle: "Donor Evaluation Anonymisation",
    pageTitle: "DPDP Quiz 45 - Donor Evaluation Anonymisation",
    eyebrow: "DPDP Quiz 45 | Donor Evaluation Anonymisation",
    heroTitle: "Donor Evaluation Anonymisation: Sharing Insight Without Re-Identifying People",
    heroIntro: "This set is for BI and partnership teams who prepare reports, evaluations, and research outputs. It tests whether they can distinguish anonymisation from pseudonymisation and prefer safer sharing patterns when reporting externally.",
    cardDescription: "Five BI-focused questions on aggregate reporting, pseudonymisation limits, partner agreements, small-cell risk, and research-use boundaries.",
    audience: "BI analysts, donor-reporting teams, evaluation leads, and partnership reviewers",
    focus: "Anonymisation, purpose limitation, external sharing discipline, and research exemption boundaries",
    resultSummary: "This set reinforces that aggregated reporting is usually safer, pseudonymised data may still be personal data, and external sharing needs purpose coverage plus agreement controls.",
    topics: [
      { label: "People Role", text: "BI and evaluation teams shaping reports for donors and external partners" },
      { label: "Obligation Area", text: "Research exemption, cross-border sharing, and sharing agreements" },
      { label: "Focus", text: "Aggregation, small-cell suppression, agreements, and re-identification risk" }
    ],
    questions: [
      {
        module: "Role guidance",
        topic: "Pseudonymisation test",
        text: "An analyst replaces beneficiary names with IDs but keeps a separate table that can reconnect every ID to a person. Under the source guidance, how should that dataset be treated?",
        options: [
          "As fully anonymised and outside DPDP",
          "As personal data because re-identification remains possible",
          "As public data once shared with a donor",
          "As exempt automatically because the analyst is not a field worker"
        ],
        correct: 1,
        explanation: "The BI guidance says pseudonymisation is not anonymisation. If the data can still be linked back to individuals, it remains personal data."
      },
      {
        module: "Role guidance",
        topic: "Safer donor reporting default",
        text: "What is the default low-risk sharing pattern recommended for donor reports in the BI guidance?",
        options: [
          "Individual-level case rows with names removed but detailed geography retained",
          "Aggregate district-level reporting without individual identifiers",
          "Full beneficiary exports so donors can run their own analyses",
          "Audio recordings instead of tabular files"
        ],
        correct: 1,
        explanation: "The BI quick card says aggregate data at district or programme level is the safer default for donor reporting."
      },
      {
        module: "Act and rules summary",
        topic: "Cross-border condition",
        text: "As of mid-2026 in the approved summary, what is the practical position on cross-border transfers?",
        options: [
          "All international transfers are currently banned",
          "Transfers are allowed unless the government restricts a specific country or entity",
          "Transfers are allowed only for Significant Data Fiduciaries",
          "Transfers are allowed only after May 2027"
        ],
        correct: 1,
        explanation: "The act summary describes a negative-list approach: transfers are currently permissible unless a specific country or entity is restricted."
      },
      {
        module: "Role guidance",
        topic: "Small-cell protection",
        text: "A district dashboard shows a village count of 1 for a highly sensitive condition. Which privacy-preserving technique in the BI guidance is designed for this kind of risk?",
        options: [
          "Increasing font size so fewer people overlook the record",
          "Cell suppression for very small counts",
          "Adding more staff accounts to review the dashboard",
          "Converting the table to PDF"
        ],
        correct: 1,
        explanation: "The BI guidance recommends masking very small counts through cell suppression to reduce re-identification risk."
      },
      {
        module: "Role guidance",
        topic: "External partner pre-check",
        text: "Before sharing individual-level data with an external evaluation partner, which combination is closest to the approved pre-check?",
        options: [
          "Only whether the file is easy to email",
          "Purpose coverage in the original consent or legal basis, plus an appropriate agreement with the partner",
          "Only whether the partner is based in India",
          "Only whether the partner promises not to complain later"
        ],
        correct: 1,
        explanation: "The BI guidance says external individual-level sharing should be checked against the original purpose or lawful basis and supported by a data sharing or processing agreement."
      }
    ]
  },
  {
    number: 46,
    slug: "jharkhand-device-offline-limits",
    shortTitle: "Jharkhand Device Offline Limits",
    pageTitle: "DPDP Quiz 46 - Jharkhand Device Offline Limits",
    eyebrow: "DPDP Quiz 46 | Jharkhand Device Offline Limits",
    heroTitle: "Jharkhand Device Offline Limits: ODK Storage, Sync, and Loss Preparedness",
    heroIntro: "This set returns to a field-device theme, but with a lifecycle angle rather than incident reporting alone. It checks whether teams manage how long data stays offline, what happens after sync, and what controls exist before a phone goes missing.",
    cardDescription: "Five Jharkhand field questions on device encryption, offline-duration policy, post-sync deletion, remote wipe, and lost-device escalation.",
    audience: "Implementors, ODK administrators, programme tech leads, and field supervisors",
    focus: "Device safeguards, local-storage minimisation, sync cleanup, and lost-device readiness",
    resultSummary: "This set reinforces that offline storage should be controlled, synced data should not linger unnecessarily, devices should be wipe-capable where possible, and losses must be escalated quickly.",
    topics: [
      { label: "Location", text: "Jharkhand field deployments where connectivity gaps create offline-device risk" },
      { label: "Project Stage", text: "Collection, sync, and post-sync cleanup on field devices" },
      { label: "Focus", text: "Encryption, maximum offline duration, cleanup, and remote-wipe readiness" }
    ],
    questions: [
      {
        module: "Data audit checklist",
        topic: "Encryption baseline",
        text: "What does the ODK checklist ask first about phones or tablets collecting beneficiary data offline?",
        options: [
          "Whether the wallpaper reminds staff to be careful",
          "Whether full device encryption is enabled",
          "Whether the devices are used only during the daytime",
          "Whether the devices are purchased from one vendor"
        ],
        correct: 1,
        explanation: "The ODK-specific checklist explicitly asks whether field devices running ODK have full device encryption enabled."
      },
      {
        module: "Data audit checklist",
        topic: "Maximum offline period",
        text: "Why does the checklist ask how long personal data stays on the device before sync and whether there is a maximum offline-period policy?",
        options: [
          "Because longer local retention increases unnecessary exposure on the device",
          "Because DPDP sets a fixed national limit of 24 hours for all apps",
          "Because synced data can never be deleted afterwards",
          "Because offline collection is illegal in government programmes"
        ],
        correct: 0,
        explanation: "The checklist treats local-storage duration as a risk-management issue: personal data should not remain on devices longer than needed."
      },
      {
        module: "Data audit checklist",
        topic: "After successful sync",
        text: "Which control is specifically listed for devices once personal data has been successfully synced?",
        options: [
          "Duplicate the same forms in a personal notes app",
          "Delete synced forms containing personal data from the device",
          "Forward a sample of records to a WhatsApp group for backup",
          "Keep all records forever to help with future analytics"
        ],
        correct: 1,
        explanation: "The ODK checklist asks whether synced data is deleted from devices after successful sync, reducing unnecessary local exposure."
      },
      {
        module: "Data audit checklist",
        topic: "Remote wipe capability",
        text: "Which preparedness question in the ODK checklist speaks directly to what happens if a phone is lost or stolen?",
        options: [
          "Whether devices can be remotely wiped through an enrolled management setup",
          "Whether staff prefer Android over iOS",
          "Whether forms include a district code",
          "Whether the program uses printed registers alongside ODK"
        ],
        correct: 0,
        explanation: "The ODK checklist specifically asks whether remote wipe capability exists for lost or stolen devices."
      },
      {
        module: "Breach response SOP",
        topic: "Immediate escalation",
        text: "A field worker in Jharkhand notices a device is missing after a day of unsynced collection. What should happen first according to the source pack?",
        options: [
          "Wait until morning in case the device reappears",
          "Report it to the supervisor and IT immediately so response steps can start",
          "Delete the beneficiary from the central system and end the matter",
          "Announce the names of affected people in the village meeting"
        ],
        correct: 1,
        explanation: "The breach SOP says lost devices with personal data should be reported immediately to the supervisor and IT; staff should not wait for certainty first."
      }
    ]
  },
  {
    number: 47,
    slug: "phase-three-readiness-sprint",
    shortTitle: "Phase Three Readiness Sprint",
    pageTitle: "DPDP Quiz 47 - Phase Three Readiness Sprint",
    eyebrow: "DPDP Quiz 47 | Phase Three Readiness Sprint",
    heroTitle: "Phase Three Readiness Sprint: What Cannot Be Left Until the Deadline",
    heroIntro: "This quiz uses the compliance calendar as its theme. It checks whether teams understand what is already live, what should be ready by November 2026, and what becomes fully enforceable on May 13, 2027.",
    cardDescription: "Five timeline questions on Phase I realities, November 2026 preparation, May 2027 enforcement, grievance readiness, and staff-training priorities.",
    audience: "Programme managers, governance leads, implementation planners, and new team leads",
    focus: "Timeline sequencing, preparation targets, current obligations, and readiness ownership",
    resultSummary: "This set reinforces that DPDP is already operational, readiness work should not be delayed, and May 13, 2027 remains the hard full-compliance date in the approved pack.",
    topics: [
      { label: "Difficulty", text: "Beginner-to-intermediate timeline and readiness judgment" },
      { label: "Project Stage", text: "Planning and sequencing before the final compliance deadline" },
      { label: "Focus", text: "Phase I, Phase II readiness, Phase III enforcement, and ownership" }
    ],
    questions: [
      {
        module: "Compliance timeline",
        topic: "What is live now",
        text: "Which statement best reflects the Phase I position in the approved timeline?",
        options: [
          "Nothing is operational until May 2027",
          "The DPBI is already constituted and grievance complaints are already possible",
          "Consent Manager rules and all core compliance duties already started together in 2025",
          "Only Significant Data Fiduciaries need to care before 2027"
        ],
        correct: 1,
        explanation: "The timeline says Phase I began on November 13, 2025, with the DPBI operational and grievances already possible."
      },
      {
        module: "Compliance timeline",
        topic: "Preparation target",
        text: "Even though full enforcement is later, what readiness target does the source pack repeatedly recommend treating seriously?",
        options: [
          "November 13, 2026",
          "January 1, 2028",
          "The date of the next donor review meeting only",
          "No intermediate target is mentioned"
        ],
        correct: 0,
        explanation: "The approved timeline says teams should treat November 13, 2026 as the preparation target even while planning for May 13, 2027 as the hard deadline."
      },
      {
        module: "Compliance timeline",
        topic: "Full-enforcement date",
        text: "According to the source pack, what is the hard date for Phase III full compliance unless a new gazette notification changes it?",
        options: [
          "November 13, 2025",
          "November 13, 2026",
          "May 13, 2027",
          "May 13, 2028"
        ],
        correct: 2,
        explanation: "The timeline explicitly says to plan for May 13, 2027 as the hard deadline for full compliance."
      },
      {
        module: "Compliance timeline",
        topic: "Q3 2026 action example",
        text: "Which of these is listed as a Q3 2026-style readiness action rather than something to postpone to the last minute?",
        options: [
          "Publishing the privacy point of contact and documenting the grievance mechanism",
          "Waiting for every complaint before designing a response path",
          "Skipping staff training until the law has been enforced for a year",
          "Treating consent templates as optional until 2027"
        ],
        correct: 0,
        explanation: "The timeline lists grievance documentation and privacy-contact publication as 2026 readiness tasks, not last-minute actions."
      },
      {
        module: "Compliance timeline",
        topic: "Training ownership",
        text: "Who does the timeline identify as owning broad staff training on DPDP basics and role-specific obligations?",
        options: [
          "Only the Board of India",
          "HR together with programme teams",
          "Only external vendors",
          "No one, because training is voluntary"
        ],
        correct: 1,
        explanation: "The timeline table assigns staff training to HR plus program teams."
      }
    ]
  },
  {
    number: 48,
    slug: "processor-contract-handoffs",
    shortTitle: "Processor Contract Handoffs",
    pageTitle: "DPDP Quiz 48 - Processor Contract Handoffs",
    eyebrow: "DPDP Quiz 48 | Processor Contract Handoffs",
    heroTitle: "Processor Contract Handoffs: Role Clarity Before Data Moves",
    heroIntro: "This queued set focuses on vendor and partner interfaces. It checks whether teams can tell when a partner is acting on Piramal Foundation’s behalf, when role clarity is missing, and why written agreements matter before any individual-level data is shared.",
    cardDescription: "Five partner-management questions on Data Processor contracts, Nikshay role clarity, JEEViKA alignment, purpose limits, and equivalent safeguards.",
    audience: "Programme managers, legal reviewers, IT governance leads, and partnership teams",
    focus: "Role clarity, written contracts, scope control, and secure partner processing",
    resultSummary: "This set reinforces that data cannot move on assumption alone. Teams need role clarity, written safeguards, and purpose-limited sharing before handing data to partners.",
    topics: [
      { label: "Obligation Area", text: "Data Processor relationships and partner governance" },
      { label: "People Role", text: "Managers and reviewers approving data flows beyond Piramal Foundation" },
      { label: "Focus", text: "Contracts, purpose limits, role clarity, and equivalent security" }
    ],
    questions: [
      {
        module: "Act and rules summary",
        topic: "Processor definition",
        text: "Which statement best matches the source pack's definition of a Data Processor?",
        options: [
          "A person who decides the purpose and means of processing for themselves",
          "An organisation that processes data on behalf of a Data Fiduciary",
          "Any beneficiary who corrects their own record",
          "Only a cloud provider outside India"
        ],
        correct: 1,
        explanation: "The act summary defines a Data Processor as an entity processing data on behalf of the Data Fiduciary."
      },
      {
        module: "Data audit checklist",
        topic: "Nikshay formalisation",
        text: "What does the Nikshay integration checklist ask Piramal Foundation to formalise about its role?",
        options: [
          "Whether Piramal Foundation's role as Data Processor is formally documented",
          "Whether Nikshay can be converted into a donor platform",
          "Whether all field staff may keep local copies of Nikshay data",
          "Whether the programme should stop using written agreements"
        ],
        correct: 0,
        explanation: "The Nikshay checklist asks whether Piramal Foundation's Data Processor role is formally documented and supported by an agreement."
      },
      {
        module: "Compliance timeline",
        topic: "JEEViKA ambiguity",
        text: "The compliance timeline flags one specific partnership question for AI Didi and JEEViKA-NRLM. What is it?",
        options: [
          "Whether JEEViKA is acting as a joint Data Fiduciary or a Data Processor",
          "Whether JEEViKA can exempt all audio retention rules",
          "Whether only Delhi-based partners need a contract",
          "Whether voice data stops being personal data in a livelihood programme"
        ],
        correct: 0,
        explanation: "The timeline explicitly says JEEViKA's role should be clarified as joint Data Fiduciary or Data Processor."
      },
      {
        module: "Role guidance",
        topic: "Scope before sharing",
        text: "A partner asks for identifiable records for a new analysis that was never mentioned in the enrolment notice. What does the guidance point toward first?",
        options: [
          "Share immediately if the partner promises confidentiality",
          "Check whether the purpose is covered and escalate instead of assuming the share is allowed",
          "Remove the logo from the file and send it",
          "Share only with personal email addresses"
        ],
        correct: 1,
        explanation: "The role guidance says identifiable sharing should be checked against the original purpose or legal basis, and unclear cases should be escalated."
      },
      {
        module: "Act and rules summary",
        topic: "Equivalent safeguards",
        text: "Why does the source pack keep returning to vendor and processor agreements in security discussions?",
        options: [
          "Because DPDP applies only to written contracts",
          "Because contracts are where equivalent security safeguards must be imposed on processors",
          "Because contracts replace breach notification duties",
          "Because contracts make consent optional"
        ],
        correct: 1,
        explanation: "Rule 6 expects processor arrangements to require equivalent safeguards, so the contract is a key control point."
      }
    ]
  },
  {
    number: 49,
    slug: "beginner-consent-language",
    shortTitle: "Beginner Consent Language",
    pageTitle: "DPDP Quiz 49 - Beginner Consent Language",
    eyebrow: "DPDP Quiz 49 | Beginner Consent Language",
    heroTitle: "Beginner Consent Language: Plain Words, Clear Purpose, Easy Withdrawal",
    heroIntro: "This set is designed as a simpler refresher for frontline staff. It checks whether a notice is understandable on its own, itemises fields clearly, and gives the beneficiary a realistic withdrawal route.",
    cardDescription: "Five beginner questions on standalone notices, plain language, itemised fields, verbal consent records, and easy withdrawal paths.",
    audience: "New staff, fellows, implementors, and anyone learning DPDP consent basics",
    focus: "Notice design, understandable language, itemised data, and verifiable consent records",
    resultSummary: "This set reinforces the core habit: explain clearly, stay specific, document consent properly, and make withdrawal practical.",
    topics: [
      { label: "Difficulty", text: "Beginner refresher for frontline consent collection" },
      { label: "Obligation Area", text: "Rule 3 notice design and Section 6 consent practice" },
      { label: "Focus", text: "Standalone notices, itemisation, verbal documentation, and withdrawal" }
    ],
    questions: [
      {
        module: "Consent templates",
        topic: "Standalone notice rule",
        text: "Why does the source pack warn against hiding the consent notice inside a long MOU or multi-page agreement?",
        options: [
          "Because the notice must be understandable independently of other information",
          "Because MOUs are banned for every programme",
          "Because signatures on longer forms are always invalid",
          "Because only audio notices are recognised under DPDP"
        ],
        correct: 0,
        explanation: "Rule 3 guidance in the source pack says the notice must stand on its own and not be buried inside other terms."
      },
      {
        module: "Consent templates",
        topic: "Specific fields",
        text: "Which wording is closer to the itemised style expected in the approved templates?",
        options: [
          "\"We may collect whatever details are useful later\"",
          "\"We collect your name, mobile number, village, and household size for programme follow-up\"",
          "\"Data details can be finalised after enrolment\"",
          "\"The form fields do not matter if the staff member knows the family\""
        ],
        correct: 1,
        explanation: "The templates require itemised data fields and a specific purpose, not broad statements about collecting whatever might be useful."
      },
      {
        module: "Consent templates",
        topic: "Verbal consent record",
        text: "When a beneficiary cannot read or sign, what extra support does the approved verbal-consent template require?",
        options: [
          "No documentation at all, because the conversation itself is enough",
          "A witness and a record of the language used, date, location, and the person's response",
          "A promise that the staff member will remember it later",
          "A separate donor approval note"
        ],
        correct: 1,
        explanation: "The verbal-consent template asks for a witness plus key details such as date, location, language used, and the recorded verbal response."
      },
      {
        module: "Act and rules summary",
        topic: "Withdrawal ease",
        text: "A consent notice says withdrawal is possible only through a state-level office visit after six months. What is the central problem?",
        options: [
          "There is no problem because withdrawal can always be delayed",
          "Withdrawal should be as easy as giving consent, so the route should not be made harder",
          "Withdrawal is relevant only for photographs",
          "The only issue is that the office is state-level"
        ],
        correct: 1,
        explanation: "The act summary says the notice must explain withdrawal, and withdrawing should be as easy as giving consent."
      },
      {
        module: "Act and rules summary",
        topic: "Burden of proof",
        text: "Who carries the burden of proving that notice was given and consent was obtained?",
        options: [
          "The beneficiary alone",
          "The Data Fiduciary, which here is Piramal Foundation for its own programmes",
          "Only the technology vendor",
          "No one, because consent is assumed once data is collected"
        ],
        correct: 1,
        explanation: "The act summary explicitly says the Data Fiduciary bears the burden of proof for notice and consent."
      }
    ]
  },
  {
    number: 50,
    slug: "advanced-nikshay-role-clarity",
    shortTitle: "Advanced Nikshay Role Clarity",
    pageTitle: "DPDP Quiz 50 - Advanced Nikshay Role Clarity",
    eyebrow: "DPDP Quiz 50 | Advanced Nikshay Role Clarity",
    heroTitle: "Advanced Nikshay Role Clarity: Government Flows, Scope Limits, and Local Copies",
    heroIntro: "This queued set raises the difficulty again. It focuses on government-linked TB workflows where Piramal Foundation may be processing on behalf of the State and must avoid casual copying, unclear authority, and out-of-scope analytics.",
    cardDescription: "Five advanced questions on Nikshay role clarity, local copies, authorised access, legal-basis boundaries, and escalation when deletion authority is unclear.",
    audience: "TB programme leads, advanced implementors, governance reviewers, and integration teams",
    focus: "Government data flows, processor-vs-fiduciary clarity, scope control, and secure access handling",
    resultSummary: "This set reinforces that Nikshay-related access is purpose-bound, role clarity matters, local copies should be avoided, and deletion authority must be assessed rather than assumed.",
    topics: [
      { label: "Difficulty", text: "Advanced judgement for government-linked TB programme data" },
      { label: "Location", text: "Nikshay and NTEP-aligned workflows across programme operations" },
      { label: "Focus", text: "Role clarity, authorised use, local-copy avoidance, and escalation discipline" }
    ],
    questions: [
      {
        module: "Data audit checklist",
        topic: "Avoiding local copies",
        text: "Which control appears in the Nikshay-specific checklist to reduce unnecessary exposure on personal devices or laptops?",
        options: [
          "Avoiding local copies of Nikshay data wherever possible",
          "Printing the entire patient list for backup",
          "Letting every district worker keep their own archive",
          "Sending daily exports to private email accounts"
        ],
        correct: 0,
        explanation: "The Nikshay checklist asks whether Nikshay data is avoided from local storage rather than downloaded to personal devices."
      },
      {
        module: "Learning modules",
        topic: "Likely PF role",
        text: "When Piramal Foundation accesses Nikshay data on behalf of the TB programme, how does the source pack generally frame PF's role?",
        options: [
          "As the automatic owner of all Nikshay data",
          "As likely acting as a Data Processor for government programme data",
          "As outside DPDP entirely",
          "As a Consent Manager by default"
        ],
        correct: 1,
        explanation: "The learning modules and checklist both say PF is likely acting as a Data Processor in Nikshay-related government flows."
      },
      {
        module: "Data audit checklist",
        topic: "Access restriction",
        text: "What does the Nikshay checklist ask about login credentials?",
        options: [
          "Whether credentials are restricted to authorised staff",
          "Whether passwords are easy for district teams to remember",
          "Whether one shared state login is available to everyone",
          "Whether logins can be stored in a common spreadsheet"
        ],
        correct: 0,
        explanation: "The checklist asks whether Nikshay login credentials are restricted to authorised staff."
      },
      {
        module: "Role guidance",
        topic: "Out-of-scope analytics",
        text: "A team wants to reuse identifiable Nikshay records for a separate analytics exercise unrelated to NTEP delivery. What is the safest reading from the approved guidance?",
        options: [
          "Reuse is always allowed if the dataset is useful",
          "Use should remain within the programme scope unless separate authority or lawful basis is established",
          "Any internal analytics automatically count as anonymised",
          "Role clarity matters only for vendor contracts, not data use"
        ],
        correct: 1,
        explanation: "The Nikshay checklist and role guidance both emphasise purpose limitation: the data should be used only for the authorised programme purpose unless another lawful basis exists."
      },
      {
        module: "Learning modules",
        topic: "Deletion request ambiguity",
        text: "A beneficiary asks for deletion of data that may sit in Nikshay records. Why does the source pack tell staff to escalate rather than promise immediate deletion?",
        options: [
          "Because rights requests are optional in government-linked work",
          "Because authority to delete may rest with the government Data Fiduciary and needs assessment",
          "Because TB data is never personal data",
          "Because deletion is banned for all programme records"
        ],
        correct: 1,
        explanation: "The learning modules say that when Nikshay is involved, staff should escalate to understand whether PF actually has authority to delete the government-held record."
      }
    ]
  },
  {
    number: 51,
    slug: "retention-pre-erasure-notice",
    shortTitle: "Retention Pre-Erasure Notice",
    pageTitle: "DPDP Quiz 51 - Retention Pre-Erasure Notice",
    eyebrow: "DPDP Quiz 51 | Retention Pre-Erasure Notice",
    heroTitle: "Retention Pre-Erasure Notice: Keeping Data No Longer Than Needed",
    heroIntro: "This set closes the next queue block with a lifecycle theme. It checks whether teams understand purpose-complete deletion, legal-retention exceptions, the 48-hour pre-erasure notice, and the one-year minimum for logs.",
    cardDescription: "Five lifecycle questions on purpose-complete deletion, legal retention limits, 48-hour pre-erasure notice, platform policies, and one-year log retention.",
    audience: "System owners, programme managers, privacy reviewers, and operations teams",
    focus: "Retention schedules, erasure triggers, pre-erasure communication, and log-minimum rules",
    resultSummary: "This set reinforces that data should not be kept indefinitely. Once purpose ends or consent is withdrawn, erasure should follow unless law requires retention, while logs still have a one-year minimum.",
    topics: [
      { label: "Project Stage", text: "Retention review, deletion design, and end-of-purpose cleanup" },
      { label: "Obligation Area", text: "Rule 8 erasure duties and Rule 6 log-retention safeguards" },
      { label: "Focus", text: "Purpose completion, withdrawal, legal retention, user notice, and logs" }
    ],
    questions: [
      {
        module: "Act and rules summary",
        topic: "Main erasure trigger",
        text: "Under the approved summary, when should personal data generally be erased if no law requires it to be kept?",
        options: [
          "Only after five fixed years in every case",
          "When consent is withdrawn or the specified purpose is no longer being served, whichever is earlier",
          "Only when the database reaches storage capacity",
          "Only after the next annual audit"
        ],
        correct: 1,
        explanation: "The act summary says erasure follows when consent is withdrawn or the purpose is no longer being served, unless retention is required by law."
      },
      {
        module: "Act and rules summary",
        topic: "Pre-erasure communication",
        text: "What notice timing does the source pack specify before erasure?",
        options: [
          "At least 48 hours before erasure",
          "At least 30 days before erasure in every case",
          "No advance notice is ever required",
          "Notice only after data has already been deleted"
        ],
        correct: 0,
        explanation: "The Rule 8 summary says the Data Principal should be notified at least 48 hours before erasure."
      },
      {
        module: "Data audit checklist",
        topic: "Platform retention policy",
        text: "Which question appears in the erasure section of the platform audit checklist?",
        options: [
          "Is there a documented retention policy for this platform?",
          "Does every user have personal export rights?",
          "Is the platform logo updated each quarter?",
          "Can the platform operate without any backups?"
        ],
        correct: 0,
        explanation: "The platform checklist asks whether there is a documented retention policy and whether technical controls can enforce erasure."
      },
      {
        module: "Act and rules summary",
        topic: "Log minimum",
        text: "Even when teams want broad deletion discipline, what minimum retention rule still applies to logs under the approved summary?",
        options: [
          "Logs may be deleted immediately after each session",
          "Logs must be retained for a minimum of one year from the date of processing",
          "Logs must be kept for ten years in every system",
          "Logs matter only for Significant Data Fiduciaries"
        ],
        correct: 1,
        explanation: "Rule 6 in the source pack requires logs and related personal data needed for that safeguard context to be retained for a minimum of one year."
      },
      {
        module: "Role guidance",
        topic: "No indefinite keeping",
        text: "A staff member argues that old recordings and spreadsheets should be kept forever because they might help some future programme. What is the strongest source-based response?",
        options: [
          "That is acceptable if the files are interesting",
          "The source pack points toward purpose limitation and deletion once the stated purpose has ended",
          "DPDP encourages indefinite retention for training value",
          "Only audio files need deletion; spreadsheets do not"
        ],
        correct: 1,
        explanation: "Across the role guidance and Rule 8 summary, the approved pack rejects indefinite retention just because a future use might appear later."
      }
    ]
  },
  {
    number: 53,
    slug: "intermediate-grievance-intake",
    shortTitle: "Intermediate Grievance Intake",
    pageTitle: "DPDP Quiz 53 - Intermediate Grievance Intake",
    eyebrow: "DPDP Quiz 53 | Intermediate Grievance Intake",
    heroTitle: "Intermediate Grievance Intake: Routing Requests Before They Escalate",
    heroIntro: "This next queued set shifts from developer hardening to operational rights handling. It tests whether field and programme teams can log requests properly, avoid unsafe disclosures, and keep the published grievance route usable before matters reach the DPBI.",
    cardDescription: "Five intermediate questions on published privacy contacts, rights-request logging, 90-day responses, sensitive phone handling, and standalone grievance channels.",
    audience: "Program Officers, field supervisors, privacy contacts, and grievance handlers",
    focus: "Rule 9 contact publishing, Rule 14 rights handling, and disciplined intake of sensitive complaints",
    resultSummary: "This set reinforces that grievance handling starts with a visible contact route, clean request records, careful identity-aware communication, and responses within the 90-day limit.",
    topics: [
      { label: "Difficulty", text: "Intermediate judgement for everyday rights and grievance intake" },
      { label: "Obligation Area", text: "Rule 9 contact publication and Rule 14 grievance-response workflow" },
      { label: "Focus", text: "Logging, escalation, response timing, and safe handling of sensitive calls" }
    ],
    questions: [
      {
        module: "Act and rules summary",
        topic: "What must be published",
        text: "A programme website currently shows only a generic no-reply mailbox. According to the approved source pack, what should be available instead for DPDP compliance?",
        options: [
          "Only a donor-facing communications alias because rights queries can wait",
          "Business contact information for the designated privacy point of contact",
          "No published contact until Piramal Foundation becomes a Significant Data Fiduciary",
          "A rotating volunteer phone number with no named ownership"
        ],
        correct: 1,
        explanation: "Rule 9 in the source summary says the website or app should publish the business contact information of the designated privacy contact who can answer processing questions."
      },
      {
        module: "Consent templates",
        topic: "Minimum request record",
        text: "A beneficiary asks for correction of her phone number during a field visit. Which record format is closest to the approved rights-request template?",
        options: [
          "A note that says \"fixed later\" with no request date or owner",
          "A rights-request record showing request date, beneficiary identity, request type, who received it, escalation path, and response due date",
          "A fresh consent form replacing the original enrolment sheet",
          "A WhatsApp forward to the district group with the beneficiary's full details"
        ],
        correct: 1,
        explanation: "The consent-template pack includes a Data Principal rights request record with the request date, type, receiver, escalation path, and response timeline."
      },
      {
        module: "Act and rules summary",
        topic: "Response deadline",
        text: "Once a grievance or rights request is formally received, what maximum response window does the approved pack expect Piramal Foundation to meet?",
        options: [
          "30 days in every case",
          "72 hours because every complaint is treated like a breach",
          "90 days maximum",
          "Only by the next annual compliance review"
        ],
        correct: 2,
        explanation: "The act-and-rules summary and role guidance both state that grievances should be resolved within 90 days."
      },
      {
        module: "Learning modules",
        topic: "Sensitive helpline request",
        text: "A caller says her husband must not learn whether she appears in a TB-related record and asks the helpline to confirm it immediately. What handling pattern best matches the approved training module?",
        options: [
          "Confirm the record status on the call so she feels reassured",
          "Deny the record exists and close the matter without logging it",
          "Record the request, avoid confirming or denying specific record status on the phone, and escalate for formal handling",
          "Tell her to call back only after filing a DPBI complaint"
        ],
        correct: 2,
        explanation: "The learning module's helpline scenario says staff should not confirm or deny specific record status in a sensitive case. They should log the request and escalate it carefully."
      },
      {
        module: "Role guidance",
        topic: "Usable grievance route",
        text: "Why does the source pack treat a clear public grievance route as more than a website formality?",
        options: [
          "Because it helps people exercise rights before escalating to the DPBI",
          "Because publishing a contact removes the need to answer deletion requests",
          "Because only significant data fiduciaries need internal ownership",
          "Because grievances are handled only by external vendors"
        ],
        correct: 0,
        explanation: "Across the role guidance and summary, the published grievance path matters because Data Principals must be able to raise issues and exhaust that route before going to the DPBI."
      }
    ]
  },
  {
    number: 54,
    slug: "collection-minimum-fields",
    shortTitle: "Collection Minimum Fields",
    pageTitle: "DPDP Quiz 54 - Collection Minimum Fields",
    eyebrow: "DPDP Quiz 54 | Collection Minimum Fields",
    heroTitle: "Collection Minimum Fields: Ask Only What the Program Needs",
    heroIntro: "This queued set returns to the earliest stage of the data lifecycle. It checks whether field and programme teams can keep enrolment narrow, explain each field clearly, and document consent properly before anything reaches the MIS.",
    cardDescription: "Five collection-stage questions on data minimisation, itemised notices, Aadhaar limits, low-literacy verbal consent records, and handling optional fields respectfully.",
    audience: "Implementors, Program Officers, Fellows, and field supervisors",
    focus: "Rule 3 notice design, minimum-field collection, and documented consent at intake",
    resultSummary: "This set reinforces that strong DPDP practice begins before data entry: collect only what is needed, explain each field and purpose clearly, and record consent in a way that can later be proved.",
    topics: [
      { label: "Project Stage", text: "Initial enrolment and first-contact data collection" },
      { label: "Obligation Area", text: "Rule 3 notice design and frontline data minimisation" },
      { label: "Focus", text: "Itemised fields, optional-data restraint, Aadhaar limits, and verbal consent records" }
    ],
    questions: [
      {
        module: "Role guidance",
        topic: "Optional income field",
        text: "During a maternal-health enrolment visit, a form includes household income as an optional field, but the current service does not need it. What is the best source-based choice?",
        options: [
          "Collect it anyway because optional fields are harmless once a form exists",
          "Skip it unless the programme actually needs it for the stated purpose",
          "Collect it first and decide later whether to use it",
          "Replace it with a free-text note about the family's finances"
        ],
        correct: 1,
        explanation: "The role guidance says frontline teams should collect only the data a programme needs. If a field is optional and not needed for the stated purpose, it should be skipped."
      },
      {
        module: "Consent templates",
        topic: "Itemised notice wording",
        text: "Which notice style is closest to the approved enrolment template?",
        options: [
          "We may collect some basic details for programme support as needed",
          "We collect whatever information our staff think will be useful later",
          "We collect your name, mobile number, village, and pregnancy status to provide antenatal support and track programme outcomes",
          "By joining the programme, you accept all present and future data uses"
        ],
        correct: 2,
        explanation: "The approved template requires an itemised list of the specific data fields being collected and the specific purpose for collecting them."
      },
      {
        module: "Consent templates",
        topic: "Aadhaar restraint",
        text: "A field worker wants to make Aadhaar mandatory in every enrolment form \"just in case it helps later.\" What does the source pack support?",
        options: [
          "Collect Aadhaar only if it is actually required for government benefit linkage or the programme's defined purpose",
          "Make Aadhaar mandatory in all forms because it reduces duplicate records",
          "Collect Aadhaar but leave the purpose blank until the district team decides",
          "Ask for Aadhaar only after the beneficiary has signed a blanket future-use clause"
        ],
        correct: 0,
        explanation: "The enrolment template lists Aadhaar only where required for government benefit linkage. The broader guidance rejects collecting extra fields without a clear programme need."
      },
      {
        module: "Consent templates",
        topic: "Low-literacy verbal record",
        text: "When a beneficiary cannot read or sign, which record is most consistent with the verbal-consent template?",
        options: [
          "A staff memory that the person seemed comfortable sharing information",
          "A witness-backed record noting date, location, data collected, purpose explained, language used, and the beneficiary's verbal agreement",
          "Only the beneficiary's thumb impression with no explanation details",
          "A supervisor message saying the team usually reads notices aloud"
        ],
        correct: 1,
        explanation: "The verbal-consent template requires a documented record with the date, location, data fields, purpose explained, language used, verbal response, field staff details, and witness information."
      },
      {
        module: "Gandhi Fellow guidance",
        topic: "Refusal of one field",
        text: "A beneficiary agrees to answer a survey but refuses to share one household-detail field. What handling pattern best matches the guidance?",
        options: [
          "Stop the entire interaction and mark the person permanently ineligible",
          "Fill the missing answer from a neighbour's estimate so the record stays complete",
          "Respect the refusal, avoid collecting that field, and continue only if the rest of the collection still fits the programme purpose",
          "Insist on the field because partial consent is not recognised in the source pack"
        ],
        correct: 2,
        explanation: "The Gandhi Fellow guidance says people must be allowed to say no. If they decline a field, staff should not force collection or invent the answer."
      }
    ]
  },
  {
    number: 55,
    slug: "gandhi-fellow-voice-note-boundaries",
    shortTitle: "Gandhi Fellow Voice Note Boundaries",
    pageTitle: "DPDP Quiz 55 - Gandhi Fellow Voice Note Boundaries",
    eyebrow: "DPDP Quiz 55 | Gandhi Fellow Voice Note Boundaries",
    heroTitle: "Gandhi Fellow Voice Note Boundaries: Consent, Sharing, and Respectful Follow-Up",
    heroIntro: "This next queued set moves back to a field-role theme. It checks whether Gandhi Fellows can explain collection clearly, respect partial refusal, avoid unsafe sharing, and treat audio or media capture as a separate consent decision.",
    cardDescription: "Five Gandhi Fellow questions on plain-language notices, partial refusal, WhatsApp sharing risk, audio-consent boundaries, and escalation of rights requests.",
    audience: "Gandhi Fellows, field coordinators, Program Officers, and community-facing teams",
    focus: "Field explanation, minimum necessary collection, media consent, safe sharing, and rights escalation",
    resultSummary: "This set reinforces that Gandhi Fellows should explain purpose in simple language, respect refusal of individual fields, avoid casual sharing channels, and escalate rights requests instead of improvising.",
    topics: [
      { label: "People Role", text: "Gandhi Fellows and field teams collecting data directly from households" },
      { label: "Field Setting", text: "Village enrolment, follow-up, and low-literacy community interactions" },
      { label: "Focus", text: "Plain-language notices, audio consent, refusal handling, and safe data sharing" }
    ],
    questions: [
      {
        module: "Learning modules",
        topic: "Explain before asking",
        text: "Before starting a household survey in a village, what should a Gandhi Fellow do first according to the approved learning pack?",
        options: [
          "Begin with the most sensitive questions so the visit finishes faster",
          "Explain what data will be collected, why it is being collected, and ask for agreement before proceeding",
          "Collect the details first and explain the purpose only if the person objects later",
          "Skip the notice if the beneficiary already knows the programme name"
        ],
        correct: 1,
        explanation: "The learning modules say field staff should show or explain the notice, explain the purpose and any sharing, and ask for agreement before starting collection."
      },
      {
        module: "Learning modules",
        topic: "One-field refusal",
        text: "A woman agrees to a household survey but says she does not want to disclose one income-related field. What is the better handling pattern from the source pack?",
        options: [
          "Respect the refusal, mark that field as declined or leave it uncollected, and continue only with the rest of the permitted survey",
          "Tell her the whole survey becomes invalid unless every field is completed",
          "Guess the income range from local context so the record stays usable",
          "Collect the field anyway because the programme may need it later"
        ],
        correct: 0,
        explanation: "The learning modules and role guidance say people can refuse specific data points. Staff should respect that choice rather than forcing or inventing the answer."
      },
      {
        module: "Learning modules",
        topic: "WhatsApp follow-up list",
        text: "A Gandhi Fellow is asked to post a list of beneficiary names and phone numbers in a WhatsApp group for easier follow-up. Which answer best fits the approved guidance?",
        options: [
          "It is acceptable because internal programme groups are always secure",
          "It is acceptable if the list is deleted after a week",
          "It is risky and should be avoided because personal data can be forwarded or exposed outside controlled channels",
          "It becomes compliant automatically if the names are sorted by village"
        ],
        correct: 2,
        explanation: "The learning modules use WhatsApp-style forwarding as a warning example. Casual sharing of personal data through insecure channels creates avoidable exposure and should not be the default."
      },
      {
        module: "Learning modules",
        topic: "Voice recording purpose",
        text: "A Fellow wants to record a beneficiary's voice note to use later in programme storytelling. What is the safest source-based view?",
        options: [
          "A voice note is personal data, so a separate clear agreement is needed for that recording use",
          "Voice notes are outside DPDP if no written transcript is made",
          "Audio can always be recorded once a survey has started",
          "Storytelling use is automatically covered by consent for service delivery"
        ],
        correct: 0,
        explanation: "The learning modules say identifiable audio is personal data. Recording for storytelling is a separate use and needs clear consent rather than being assumed from routine programme collection."
      },
      {
        module: "Role guidance",
        topic: "Rights request escalation",
        text: "During a visit, a beneficiary says, \"Show me what your records say about me.\" What should the Gandhi Fellow do?",
        options: [
          "Read out whatever they remember from prior visits and close the matter informally",
          "Promise that the data will be deleted immediately without checking the system",
          "Note the request and escalate it through the Programme Officer route so the formal response can be handled properly",
          "Ignore the request unless it is submitted through a lawyer"
        ],
        correct: 2,
        explanation: "The role guidance and learning modules say field staff should log the request and escalate it rather than guessing or improvising a response."
      }
    ]
  },
  {
    number: 56,
    slug: "platform-contact-point-publish",
    shortTitle: "Platform Contact Point Publish",
    pageTitle: "DPDP Quiz 56 - Platform Contact Point Publish",
    eyebrow: "DPDP Quiz 56 | Platform Contact Point Publish",
    heroTitle: "Platform Contact Point Publish: Grievance Routes, DPBI Escalation, and Enforcement Basics",
    heroIntro: "This queued advanced set shifts from field consent to governance readiness. It checks whether teams understand what must already be published, when the DPBI path becomes relevant, and how enforcement duties differ from general programme operations.",
    cardDescription: "Five advanced questions on published privacy contacts, complaint sequencing, penalty exposure, SDF monitoring, and why DPDP is already operational.",
    audience: "Digital property owners, programme leads, privacy contacts, and governance reviewers",
    focus: "Rule 9 publication, grievance sequencing, enforcement exposure, and readiness ownership",
    resultSummary: "This set reinforces that DPDP readiness is not just about field collection. Teams also need a published contact route, a working grievance path before DPBI escalation, and a clear view of where enforcement risk is highest.",
    topics: [
      { label: "Obligation Area", text: "Rule 9 contact publication, grievance redressal, and Board-facing escalation basics" },
      { label: "Difficulty", text: "Advanced governance refresher for digital property owners and programme leads" },
      { label: "Focus", text: "Published contact routes, complaint sequencing, penalty exposure, and SDF monitoring" }
    ],
    questions: [
      {
        module: "Act and Rules summary",
        topic: "Published contact point",
        text: "A programme microsite says, \"For all privacy matters, ask your local staff member.\" What is the clearer Rule 9-aligned correction from the approved source pack?",
        options: [
          "Publish the business contact details of a designated privacy point of contact on the website or app",
          "Remove all contact details so complaints only go through district administrators",
          "Add a sentence saying questions may be answered informally whenever convenient",
          "Wait until Piramal Foundation becomes a Significant Data Fiduciary before naming any contact route"
        ],
        correct: 0,
        explanation: "The summary says website or app properties should publish the business contact information of the privacy point of contact, not leave people to chase informal channels."
      },
      {
        module: "Act and Rules summary",
        topic: "Before DPBI complaint",
        text: "A beneficiary wants to go straight to the Data Protection Board because she thinks no one will answer her. What sequencing does the approved guidance describe?",
        options: [
          "She must first exhaust Piramal Foundation's grievance mechanism before escalating to DPBI",
          "She can approach DPBI only after a court order is issued",
          "She cannot raise a DPBI complaint until the May 13, 2027 full-compliance date arrives",
          "She may complain only if more than 100 people were affected by the same issue"
        ],
        correct: 0,
        explanation: "The source pack says Data Principals should use the organisation's grievance process first, and then escalate to DPBI if unsatisfied."
      },
      {
        module: "Act and Rules summary",
        topic: "Penalty comparison",
        text: "Which lapse carries the highest maximum penalty in the approved summary's enforcement table?",
        options: [
          "Failure to implement reasonable security safeguards",
          "Failure to notify a breach",
          "Children's-data violations",
          "Other provisions of the Act or Rules"
        ],
        correct: 0,
        explanation: "The penalty table places inadequate security safeguards at the highest ceiling, up to Rs 250 crore, above breach-notification or children's-data violations."
      },
      {
        module: "Act and Rules summary",
        topic: "SDF watchlist",
        text: "If Piramal Foundation were later notified as a Significant Data Fiduciary, which extra obligation is specifically listed in the source pack?",
        options: [
          "Abolish all data-processor contracts and use only internal systems",
          "Stop all cross-border transfers automatically",
          "Appoint a Data Protection Officer and undergo added oversight duties such as independent audit or DPIA requirements",
          "Replace every consent notice with one national standard form"
        ],
        correct: 2,
        explanation: "The SDF note lists added duties such as a DPO, independent data auditor, and annual DPIA-style oversight if the government designates the organisation as an SDF."
      },
      {
        module: "Compliance timeline",
        topic: "Phase I reality",
        text: "Why does the timeline tell teams not to treat DPDP as a distant 2027-only issue?",
        options: [
          "Because the Board was already constituted on November 13, 2025 and grievance complaints are already possible",
          "Because every rule, including full notice and erasure duties, took effect on the same day in 2025",
          "Because all organisations became Significant Data Fiduciaries automatically in 2025",
          "Because the restricted-country list for transfers was published immediately with no further action needed"
        ],
        correct: 0,
        explanation: "The timeline says Phase I is already in force: the DPBI exists, complaints are live, and teams should not wait until the later full-compliance deadline to prepare."
      }
    ]
  },
  {
    number: 57,
    slug: "bihar-photo-consent-boundaries",
    shortTitle: "Bihar Photo Consent Boundaries",
    pageTitle: "DPDP Quiz 57 - Bihar Photo Consent Boundaries",
    eyebrow: "DPDP Quiz 57 | Bihar Photo Consent Boundaries",
    heroTitle: "Bihar Photo Consent Boundaries: Care Context, Storytelling Use, and Parent Approval",
    heroIntro: "This next queued set moves into a Bihar field setting. It tests whether teams separate direct service activity from photography, donor storytelling, and child-media use that require their own consent decision.",
    cardDescription: "Five Bihar-focused questions on child photos, care-versus-reporting boundaries, donor-use consent, refusal handling, and safe field media practice.",
    audience: "Karuna Fellows, Gandhi Fellows, Program Officers, and communications-aware field teams",
    focus: "Photography consent, children's data boundaries, refusal handling, and purpose-specific media use",
    resultSummary: "This set reinforces that direct care activity does not automatically authorise photography, donor storytelling, or child-media reuse. Those uses need their own clear consent path.",
    topics: [
      { label: "Location", text: "Bihar health and community field settings where photos and stories are often requested" },
      { label: "People Role", text: "Fellows and Programme Officers balancing service delivery with documentation requests" },
      { label: "Focus", text: "Child-photo consent, separate media purposes, and respectful refusal handling" }
    ],
    questions: [
      {
        module: "Consent templates",
        topic: "Donor-report photo",
        text: "At a maternal-health visit in Bihar, a field team wants to photograph a beneficiary for a donor report after finishing the service interaction. Which approach best fits the approved source pack?",
        options: [
          "Use a separate photography consent explanation because donor-report use is a distinct purpose",
          "Rely on the service interaction alone because the beneficiary already spoke with the team",
          "Take the photo first and explain later if the donor asks questions",
          "Avoid naming the beneficiary and treat the image as outside DPDP automatically"
        ],
        correct: 0,
        explanation: "The media-consent template treats report or publicity use as a separate purpose. Service delivery alone does not cover donor-facing photography."
      },
      {
        module: "Children's data",
        topic: "Child in nutrition camp photo",
        text: "A child at a nutrition camp is receiving care. The team also wants a close-up photograph for future awareness materials. What is the safest interpretation from the listed sources?",
        options: [
          "The healthcare context covers both treatment and future awareness photography",
          "Parental or guardian consent is still needed for the photograph because it goes beyond direct care",
          "The child may give valid consent alone if they agree verbally",
          "Photography is allowed automatically if the child's name is omitted from the caption"
        ],
        correct: 1,
        explanation: "The 4th Schedule care exemption is limited to health-service delivery. Photography for later materials is a separate use and still needs parent or guardian consent."
      },
      {
        module: "Consent templates",
        topic: "Right to say no",
        text: "A beneficiary agrees to enrolment but says she does not want any photograph taken. How should the team handle that response?",
        options: [
          "Record that refusal and continue with the enrolment if the service can proceed without the photo",
          "Tell her photography is mandatory for proof of participation",
          "Take one photo only for internal records without mentioning it",
          "Postpone all service delivery until she changes her mind"
        ],
        correct: 0,
        explanation: "The source pack says people can refuse media use without losing services. Consent must be free and not bundled as a condition for unrelated benefits."
      },
      {
        module: "Learning modules",
        topic: "Voice and image distinction",
        text: "Why does the source pack ask teams to treat audio, video, and photographs carefully even when programme work is legitimate?",
        options: [
          "Because media is personal data when people are identifiable and often serves a different purpose from service delivery",
          "Because media is outside DPDP unless paired with Aadhaar",
          "Because only printed photographs create privacy obligations",
          "Because field teams may always record for later training use without a separate check"
        ],
        correct: 0,
        explanation: "The learning modules say identifiable photographs, videos, and voice recordings are personal data and often require purpose-specific consent."
      },
      {
        module: "Gandhi Fellow guidance",
        topic: "Casual field sharing",
        text: "After taking consented event photos, a fellow wants to post them in a broad WhatsApp group for quick selection. Which answer best matches the approved guidance?",
        options: [
          "That is fine because the photos were already consented for any team use",
          "It remains risky because broad messaging groups are not the default controlled channel for personal data sharing",
          "It becomes safe if the message is deleted within 24 hours",
          "It is required so every district can see the documentation immediately"
        ],
        correct: 1,
        explanation: "The learning pack repeatedly treats casual WhatsApp-style sharing as an exposure risk. Consent to capture does not mean any later distribution channel is appropriate."
      }
    ]
  },
  {
    number: 58,
    slug: "retention-cleanup-checkpoint",
    shortTitle: "Retention Cleanup Checkpoint",
    pageTitle: "DPDP Quiz 58 - Retention Cleanup Checkpoint",
    eyebrow: "DPDP Quiz 58 | Retention Cleanup Checkpoint",
    heroTitle: "Retention Cleanup Checkpoint: When Purpose Ends and Copies Must Go",
    heroIntro: "This queued set returns to the data lifecycle. It focuses on retention policy discipline, pre-erasure notice, and cleaning up local or duplicate copies once programme purpose has been served.",
    cardDescription: "Five lifecycle questions on purpose completion, 48-hour pre-erasure notice, local-copy cleanup, legal-retention exceptions, and documenting deletion triggers.",
    audience: "MIS owners, Program Officers, operations leads, and governance reviewers",
    focus: "Rule 8 retention discipline, erasure triggers, and reducing unnecessary duplicate copies",
    resultSummary: "This set reinforces that retention is not indefinite. Teams need a documented policy, a trigger for erasure, and discipline around removing extra copies once they are no longer needed.",
    topics: [
      { label: "Project Stage", text: "End-of-use retention review, erasure planning, and duplicate-copy cleanup" },
      { label: "Obligation Area", text: "Rule 8 retention, pre-erasure notice, and lawful-retention exceptions" },
      { label: "Focus", text: "Purpose completion, local deletions, user notice, and policy-backed timing" }
    ],
    questions: [
      {
        module: "Act and rules summary",
        topic: "When erasure starts",
        text: "According to the approved summary, which event can trigger erasure of personal data first?",
        options: [
          "Only the end of a five-year internal archive period",
          "Either withdrawal of consent or the point when the specified purpose is no longer being served, whichever comes earlier",
          "Only a written order from the DPBI",
          "Only after a separate donor approval cycle"
        ],
        correct: 1,
        explanation: "Section 8(7) and Rule 8 in the approved summary say data should be erased when consent is withdrawn or the specified purpose is no longer being served, unless law requires retention."
      },
      {
        module: "Act and rules summary",
        topic: "Pre-erasure message",
        text: "Before automated erasure, what notice period does the source pack say should be given to the Data Principal?",
        options: [
          "No notice period is needed",
          "Seven business days",
          "48 hours",
          "Only one month before year-end"
        ],
        correct: 2,
        explanation: "The approved summary states that Data Principals should be notified at least 48 hours before erasure."
      },
      {
        module: "Data audit checklist",
        topic: "Technical enforcement",
        text: "Which checklist question best shows whether a platform can actually honour a deletion obligation instead of only promising one?",
        options: [
          "Whether individual records can be deleted on request",
          "Whether the dashboard uses the orange brand colour",
          "Whether the programme has more than one district lead",
          "Whether the server room is in the same building as finance"
        ],
        correct: 0,
        explanation: "The audit checklist explicitly asks whether individual records can be deleted on request, which is the technical backbone of a real rights and retention process."
      },
      {
        module: "Data audit checklist",
        topic: "Duplicate local copies",
        text: "A programme has completed analysis and still keeps beneficiary exports on multiple laptops \"for convenience.\" What is the safer source-based view?",
        options: [
          "Extra copies are acceptable if staff promise not to open them often",
          "Those duplicate copies should be reviewed and removed once they are no longer needed for the stated purpose",
          "Local copies must always be kept longer than the main system record",
          "Retention rules apply only to the central server, not to staff devices"
        ],
        correct: 1,
        explanation: "The source pack links retention to purpose and minimisation. Unnecessary duplicate local copies increase exposure and should not linger after the work is complete."
      },
      {
        module: "Act and rules summary",
        topic: "Legal-retention limit",
        text: "When can Piramal Foundation keep data even after a person asks for deletion or the main purpose appears finished?",
        options: [
          "Whenever a team leader feels it may be useful later",
          "Only when retention is required by law",
          "Whenever the data was first collected through a government-linked programme",
          "Only if the same record has already been backed up three times"
        ],
        correct: 1,
        explanation: "The approved summary allows continued retention only where law requires it. Internal convenience is not a lawful retention basis."
      }
    ]
  },
  {
    number: 59,
    slug: "developer-abdm-consent-gap",
    shortTitle: "Developer ABDM Consent Gap",
    pageTitle: "DPDP Quiz 59 - Developer ABDM Consent Gap",
    eyebrow: "DPDP Quiz 59 | Developer ABDM Consent Gap",
    heroTitle: "Developer ABDM Consent Gap: DPDP Layering, Logs, and Role Controls",
    heroIntro: "This queued set returns to a developer lens. It tests whether platform teams can spot where ABDM-era flows may still need DPDP-specific work around notice, withdrawal, logging, and role-based access.",
    cardDescription: "Five developer questions on ABDM notice gaps, easy withdrawal, one-year logs, RBAC, and when to escalate new child-data or Aadhaar features.",
    audience: "Developers, platform owners, IT governance leads, and digital-health reviewers",
    focus: "Privacy-by-design, ABDM overlap, access controls, and escalation of high-risk features",
    resultSummary: "This set reinforces that developers cannot assume a pre-existing health-data flow is fully DPDP-complete. Notice wording, withdrawal ease, logging, and role controls still need explicit review.",
    topics: [
      { label: "People Role", text: "Developers and platform owners responsible for privacy-by-design decisions" },
      { label: "Platform Context", text: "ABDM, AMRIT, and health-data systems with layered consent and access logic" },
      { label: "Focus", text: "Rule 3 notice fit, one-year logs, RBAC, and escalation of high-risk features" }
    ],
    questions: [
      {
        module: "Role guidance",
        topic: "ABDM review question",
        text: "The approved developer guidance says ABDM consent should be treated as complementary to DPDP until what kind of check is completed?",
        options: [
          "A review of whether the notice satisfies Rule 3 and whether withdrawal remains as easy as giving consent",
          "A review of whether the platform has a dark-mode setting",
          "A review of donor branding on every patient screen",
          "A review confirming that every record is stored only on paper"
        ],
        correct: 0,
        explanation: "The developer guidance calls out ABDM-specific gap checks around Rule 3 notice requirements and the Section 6(4) withdrawal standard."
      },
      {
        module: "Role guidance",
        topic: "High-risk feature escalation",
        text: "Which new feature should a developer escalate immediately under the role guidance rather than treat as ordinary scope?",
        options: [
          "A minor spacing change on a dashboard",
          "A feature that would process children's data or Aadhaar-linked information in a new way",
          "A report export that contains no personal data at all",
          "A logo update for the public homepage"
        ],
        correct: 1,
        explanation: "The developer quick card specifically says to escalate new features involving Aadhaar, biometrics, children's data, or potential breaches."
      },
      {
        module: "Data audit checklist",
        topic: "Log retention baseline",
        text: "A platform currently overwrites access logs after 90 days. What does the approved source pack indicate?",
        options: [
          "That is enough because only breaches need longer records",
          "Logs should be retained for at least one year",
          "Logs can be removed immediately if backups exist",
          "No retention rule applies until Significant Data Fiduciary status is notified"
        ],
        correct: 1,
        explanation: "Rule 6 in the approved materials sets a one-year minimum for logs and personal data from the date of processing."
      },
      {
        module: "Data audit checklist",
        topic: "Access restriction",
        text: "Which audit question best captures the DPDP reason for implementing strong RBAC on a health platform?",
        options: [
          "Whether access is limited to those who actually need the data for their role",
          "Whether every staff member can browse all records for convenience",
          "Whether each login page uses a different accent colour",
          "Whether reports are printed before they are viewed"
        ],
        correct: 0,
        explanation: "The checklist and role guidance both treat least-privilege access as a central Rule 6 safeguard."
      },
      {
        module: "Role guidance",
        topic: "Withdrawal friction",
        text: "If a product flow makes it much harder to withdraw consent than to give it, what is the strongest source-based concern?",
        options: [
          "That is acceptable because health systems always prioritise collection",
          "It conflicts with the requirement that withdrawal be as easy as giving consent",
          "It matters only for employees, not beneficiaries",
          "It matters only after a DPBI complaint is already filed"
        ],
        correct: 1,
        explanation: "The approved pack restates Section 6(4): withdrawal should be as easy as giving consent, so friction-heavy designs need correction."
      }
    ]
  },
  {
    number: 60,
    slug: "child-health-care-boundary",
    shortTitle: "Child Health Care Boundary",
    pageTitle: "DPDP Quiz 60 - Child Health Care Boundary",
    eyebrow: "DPDP Quiz 60 | Child Health Care Boundary",
    heroTitle: "Child Health Care Boundary: What the Care Exemption Covers and What It Does Not",
    heroIntro: "This queued set narrows in on children's data. It checks whether teams can distinguish direct care from MIS, photography, and broader programme uses that still need parent-facing consent or documentation.",
    cardDescription: "Five child-data questions on direct care exemptions, MIS entry scope, parent approval, prohibited profiling, and education or care-context limits.",
    audience: "Karuna Fellows, child-health teams, education-linked staff, and programme supervisors",
    focus: "Children's data exemptions, parent consent boundaries, and prohibited harmful processing",
    resultSummary: "This set reinforces the bright line in the approved pack: direct care or permitted institutional contexts may be exempt, but broader programme, media, and profiling uses are not automatically covered.",
    topics: [
      { label: "Obligation Area", text: "Section 9 children's-data duties and 4th Schedule care or education exemptions" },
      { label: "Field Setting", text: "Child-health camps, school-linked activity, and programme monitoring workflows" },
      { label: "Focus", text: "Care-only processing, parent consent, and banned profiling or tracking" }
    ],
    questions: [
      {
        module: "Act and rules summary",
        topic: "Default child rule",
        text: "Before processing a child's personal data, what is the general rule stated in the approved summary?",
        options: [
          "The child may always consent alone if they are over 12",
          "Verifiable parental or guardian consent is required unless a listed exemption applies",
          "No consent is required for any non-profit programme",
          "Only schools need to care about children's data"
        ],
        correct: 1,
        explanation: "The approved summary states the general rule clearly: verifiable parental or guardian consent is required before processing a child's personal data, subject to listed exemptions."
      },
      {
        module: "Learning modules",
        topic: "Care versus programme database",
        text: "A Karuna Fellow records a child's nutrition indicators during direct care and later wants to enter those details into a programme MIS for monitoring. How does the source pack frame that shift?",
        options: [
          "The care exemption automatically covers any later database use",
          "Direct care may fall within the health-service exemption, but broader programme recording should be covered by the enrolment or parent-consent path",
          "MIS entry is banned for child data under all circumstances",
          "Once data is typed into ODK it stops being children's data"
        ],
        correct: 1,
        explanation: "The training notes distinguish direct health-service processing from broader monitoring or MIS use, which should be supported by the appropriate consent or programme basis."
      },
      {
        module: "Act and rules summary",
        topic: "Prohibited practice",
        text: "Which use is explicitly prohibited for children's personal data in the approved summary?",
        options: [
          "Behavioural tracking or targeted advertising",
          "Recording a child's weight during direct care",
          "Safety monitoring in a permitted care setting",
          "Education activity tracking in an institution's normal context"
        ],
        correct: 0,
        explanation: "The children's-data section expressly prohibits behavioural tracking, targeted advertising, and profiling likely to harm a child's well-being."
      },
      {
        module: "Learning modules",
        topic: "School activity context",
        text: "What is the careful source-based view of school or child-care activity tracking?",
        options: [
          "It can fall within the listed institutional exemption, but teams should stay within that education or care purpose",
          "It automatically authorises donor-storytelling use of the same data",
          "It eliminates the need for any later rights handling",
          "It allows child data to be shared with any outside partner"
        ],
        correct: 0,
        explanation: "The approved sources note that educational institutions and care settings have specific exemptions, but the processing should stay within that permitted purpose."
      },
      {
        module: "Consent templates",
        topic: "Child photograph",
        text: "If a programme wants to use a child's identifiable photograph in training or reporting materials, what does the template pack expect?",
        options: [
          "Parent or guardian sign-off through the media consent route",
          "Only the child's oral agreement",
          "No separate step if the image is helpful to the programme",
          "A decision made only by the photographer"
        ],
        correct: 0,
        explanation: "The photography template explicitly routes child media use through parent or guardian consent."
      }
    ]
  },
  {
    number: 61,
    slug: "beginner-rights-routing",
    shortTitle: "Beginner Rights Routing",
    pageTitle: "DPDP Quiz 61 - Beginner Rights Routing",
    eyebrow: "DPDP Quiz 61 | Beginner Rights Routing",
    heroTitle: "Beginner Rights Routing: What to Log, Who to Escalate, and What Not to Promise",
    heroIntro: "This queued set lowers the difficulty level and returns to everyday rights handling. It checks whether frontline teams can recognise access, correction, erasure, and grievance requests without improvising unsafe answers.",
    cardDescription: "Five beginner questions on rights recognition, logging basics, escalation routes, lawful-retention limits, and the 90-day response window.",
    audience: "New learners, frontline implementors, Fellows, and supervisors",
    focus: "Access, correction, erasure, grievance intake, and disciplined request escalation",
    resultSummary: "This set reinforces that staff do not need to solve every rights request on the spot. They need to recognise it, log it properly, and route it through the formal response path.",
    topics: [
      { label: "Difficulty", text: "Beginner-level recognition of rights requests and safe frontline responses" },
      { label: "People Role", text: "Fellows, helpline staff, and implementors receiving requests first" },
      { label: "Focus", text: "Logging, escalation, 90-day response timing, and no off-the-cuff promises" }
    ],
    questions: [
      {
        module: "Act and rules summary",
        topic: "Right to access",
        text: "A beneficiary asks, \"What data do you have about me and who have you shared it with?\" Which DPDP right is that closest to?",
        options: [
          "Right to Access",
          "Only a media-consent request",
          "A cross-border transfer objection",
          "A request that cannot be recognised until a lawyer writes in"
        ],
        correct: 0,
        explanation: "The approved summary describes the right to know what data is held, how it is used, and who it has been shared with as the Right to Access."
      },
      {
        module: "Learning modules",
        topic: "Frontline behaviour",
        text: "When a frontline worker does not know the system answer to a beneficiary's rights request, what is the safest approved response?",
        options: [
          "Guess based on memory so the person gets a quick answer",
          "Record the request and escalate it through the supervisor or privacy route",
          "Ignore the request unless it is repeated three times",
          "Promise immediate deletion without checking whether retention is required by law"
        ],
        correct: 1,
        explanation: "The learning modules repeatedly instruct frontline staff to log the request and escalate it instead of guessing or making unsupported commitments."
      },
      {
        module: "Consent templates",
        topic: "Minimum request record",
        text: "Which detail belongs in the approved rights-request record template?",
        options: [
          "The response due date",
          "Only the district's weather conditions",
          "Only the beneficiary's nickname",
          "A list of unrelated programme milestones"
        ],
        correct: 0,
        explanation: "The rights-request template includes the request date, request type, escalation details, and the response due date."
      },
      {
        module: "Act and rules summary",
        topic: "When deletion may be refused",
        text: "If a beneficiary asks for deletion, when does the source pack clearly allow continued retention?",
        options: [
          "When a team hopes the data may be useful in a future project",
          "When retention is required by law",
          "Whenever the data relates to health",
          "Whenever the request arrives by phone instead of email"
        ],
        correct: 1,
        explanation: "The approved summary says data may be retained despite a deletion request only where law requires it."
      },
      {
        module: "Act and rules summary",
        topic: "Response window",
        text: "What is the maximum response period the approved pack gives for grievance handling?",
        options: [
          "24 hours",
          "30 days",
          "90 days",
          "One full financial year"
        ],
        correct: 2,
        explanation: "The rights and grievance sections state that grievances should be resolved within 90 days."
      }
    ]
  },
  {
    number: 62,
    slug: "sitamarhi-ai-didi-audio",
    shortTitle: "Sitamarhi AI Didi Audio",
    pageTitle: "DPDP Quiz 62 - Sitamarhi AI Didi Audio",
    eyebrow: "DPDP Quiz 62 | Sitamarhi AI Didi Audio",
    heroTitle: "Sitamarhi AI Didi Audio: Voice Consent, Retention, and Partnership Clarity",
    heroIntro: "This queued set uses the AI Didi and JEEViKA setting from the approved pack. It checks whether teams treat identifiable voice data carefully, define retention, and clarify partner roles before wider reuse.",
    cardDescription: "Five Sitamarhi-style questions on voice recordings, identifiable audio, retention policies, partner role clarity, and separate consent for AI or storytelling use.",
    audience: "AI Didi teams, Program Officers, JEEViKA-facing staff, and audio-data reviewers",
    focus: "Audio consent, purpose limitation, retention discipline, and partnership-role clarity",
    resultSummary: "This set reinforces that voice recordings are personal data when people are identifiable, and that audio use, retention, and partner access all need explicit discipline.",
    topics: [
      { label: "Location", text: "Sitamarhi or similar AI Didi field settings involving Bank Sakhi voice interactions" },
      { label: "Obligation Area", text: "Audio consent, retention policy, and partner role clarification before reuse" },
      { label: "Focus", text: "Identifiable voice data, sharing limits, and documented purpose" }
    ],
    questions: [
      {
        module: "Learning modules",
        topic: "Is voice personal data",
        text: "In the approved learning pack, how should an identifiable Bank Sakhi voice recording be treated?",
        options: [
          "As personal data that needs a clear purpose and consent where required",
          "As non-personal data because it is only sound",
          "As automatically anonymised once stored digitally",
          "As outside DPDP unless linked to a written transcript"
        ],
        correct: 0,
        explanation: "The learning modules explicitly say identifiable voice recordings are personal data."
      },
      {
        module: "Learning modules",
        topic: "Storytelling versus programme use",
        text: "A team already records voice samples for one programme task and now wants to reuse them in a public success-story clip. What is the safer source-based view?",
        options: [
          "The new storytelling use should be treated as a separate purpose and not assumed from the original recording context",
          "Any earlier recording consent covers unlimited future media use",
          "Public storytelling is allowed automatically if the speaker is praised positively",
          "Audio clips are exempt from purpose limits if the programme is government-linked"
        ],
        correct: 0,
        explanation: "The source pack rejects blanket future-use logic. Reuse for storytelling is a separate purpose that should not be assumed from the original programme recording."
      },
      {
        module: "Compliance timeline",
        topic: "Retention policy readiness",
        text: "Which AI Didi readiness task is specifically listed in the timeline table?",
        options: [
          "Audio or video data retention policy",
          "Mandatory publication of all raw training audio online",
          "Automatic deletion of every recording the same day",
          "A ban on any field audio collection"
        ],
        correct: 0,
        explanation: "The timeline's AI Didi section explicitly calls for an audio or video data retention policy."
      },
      {
        module: "Compliance timeline",
        topic: "JEEViKA role question",
        text: "What partnership question does the approved timeline say should be clarified for JEEViKA-linked work?",
        options: [
          "Whether JEEViKA is acting as joint Data Fiduciary or Data Processor",
          "Whether JEEViKA should replace all field devices with paper only",
          "Whether JEEViKA must become a Consent Manager immediately",
          "Whether JEEViKA can bypass grievance handling because it is state-linked"
        ],
        correct: 0,
        explanation: "The compliance timeline specifically flags the need to clarify whether JEEViKA is a joint Data Fiduciary or a Data Processor in the arrangement."
      },
      {
        module: "Consent templates",
        topic: "Refusal of recording",
        text: "If a participant agrees to the programme interaction but refuses audio recording, what does the source pack support?",
        options: [
          "Respect the refusal and avoid recording if the interaction can proceed without it",
          "Record anyway because voice improves training quality",
          "End all programme support immediately",
          "Treat silence as consent because the person stayed in the room"
        ],
        correct: 0,
        explanation: "The consent and learning guidance says consent must be affirmative and free. If someone refuses the recording, staff should not force it."
      }
    ]
  },
  {
    number: 63,
    slug: "bi-analyst-small-cell-guardrails",
    shortTitle: "BI Analyst Small Cell Guardrails",
    pageTitle: "DPDP Quiz 63 - BI Analyst Small Cell Guardrails",
    eyebrow: "DPDP Quiz 63 | BI Analyst Small Cell Guardrails",
    heroTitle: "BI Analyst Small Cell Guardrails: Aggregation, Re-identification, and External Sharing Discipline",
    heroIntro: "This queued set returns to the analyst perspective. It checks whether data teams can choose aggregation over row-level sharing, understand why small cells matter, and recognise where purpose or agreement gaps remain.",
    cardDescription: "Five BI questions on small-cell risk, pseudonymisation limits, partner agreements, research exemptions, and safer aggregate reporting defaults.",
    audience: "BI analysts, donor-reporting teams, evaluation leads, and governance reviewers",
    focus: "Aggregation, re-identification risk, purpose limitation, and external sharing controls",
    resultSummary: "This set reinforces the analyst default from the approved pack: analyse the minimum, share aggregated outputs where possible, and never confuse pseudonymisation with true anonymisation.",
    topics: [
      { label: "People Role", text: "BI and evaluation teams working with programme datasets and donor reporting" },
      { label: "Obligation Area", text: "External sharing discipline, anonymisation, and research or statistical boundaries" },
      { label: "Focus", text: "Small cells, row-level risk, partner agreements, and aggregate-first reporting" }
    ],
    questions: [
      {
        module: "Role guidance",
        topic: "Pseudonymisation limit",
        text: "If analysts replace names with internal IDs but can still reconnect those IDs to people, how does the approved source pack classify the data?",
        options: [
          "Still personal data because the people remain re-identifiable",
          "Fully anonymous once names are removed",
          "Outside DPDP if shared only inside one email thread",
          "Legally identical to district-level aggregation"
        ],
        correct: 0,
        explanation: "The BI guidance says pseudonymisation is not anonymisation. If records can be linked back, the data remains personal data."
      },
      {
        module: "Role guidance",
        topic: "Default donor output",
        text: "What default does the BI quick card recommend for donor reports whenever possible?",
        options: [
          "Aggregated, district-level reporting without individual identifiers",
          "Sharing every row so the donor can run its own checks",
          "Replacing names with initials and treating the file as public-safe",
          "Publishing full extracts once every quarter"
        ],
        correct: 0,
        explanation: "The BI guidance explicitly prefers aggregate donor reporting and avoiding individual identifiers."
      },
      {
        module: "Role guidance",
        topic: "Small-cell protection",
        text: "Why does the approved source pack recommend suppressing very small cells in external reports?",
        options: [
          "Because small groups can make people identifiable even without direct names",
          "Because DPDP bans all statistics below district level",
          "Because donors are not allowed to read percentages",
          "Because cell suppression replaces the need for any security safeguards"
        ],
        correct: 0,
        explanation: "The BI guidance flags small-cell risk because individuals can sometimes be inferred from tiny groups even when direct identifiers are removed."
      },
      {
        module: "Act and rules summary",
        topic: "Research exemption limit",
        text: "Which condition from the approved summary must hold for the research or statistical exemption to fit most cleanly?",
        options: [
          "The processing should not be used to make a decision specific to an individual Data Principal",
          "The data must always be published internationally",
          "The project must collect as many identifiers as possible",
          "The analysis must be completed by a government ministry only"
        ],
        correct: 0,
        explanation: "Section 17(2)(b) in the approved summary is tied to research or statistical use that is not used to make decisions about specific individuals."
      },
      {
        module: "Role guidance",
        topic: "Before partner sharing",
        text: "Before sending individual-level data to an external evaluation partner, which pair of checks does the approved BI guidance treat as essential?",
        options: [
          "Whether the original purpose or consent covers the sharing and whether a data-sharing or processing agreement is in place",
          "Whether the partner promises to respond quickly on email and whether the file is under 5 MB",
          "Whether the partner is outside India and whether the data contains at least one chart",
          "Whether the analyst personally trusts the receiving team"
        ],
        correct: 0,
        explanation: "The BI quick card says external individual-level sharing should be checked for purpose or consent coverage and backed by a formal agreement."
      }
    ]
  },
  {
    number: 64,
    slug: "nikshay-processor-scope",
    shortTitle: "Nikshay Processor Scope",
    pageTitle: "DPDP Quiz 64 - Nikshay Processor Scope",
    eyebrow: "DPDP Quiz 64 | Nikshay Processor Scope",
    heroTitle: "Nikshay Processor Scope: Role Clarity, No Local Copies, and Program-Only Use",
    heroIntro: "This queued set turns to government-linked TB workflows. It checks whether teams can distinguish Piramal Foundation's likely processor role, avoid unnecessary downloads, and stay within authorised programme purpose when using Nikshay-linked data.",
    cardDescription: "Five Nikshay-focused questions on processor-role clarity, written agreements, local-copy limits, authorised access, and programme-only use of TB data.",
    audience: "TB programme teams, Program Officers, Nikshay users, and governance reviewers",
    focus: "Processor-role clarity, authorised access, local-copy restraint, and purpose-bound government-linked data use",
    resultSummary: "This set reinforces that Nikshay-linked access does not create a free-use data pool. Role clarity, written agreements, limited access, and avoiding local downloads remain central.",
    topics: [
      { label: "Obligation Area", text: "Government-linked role clarity, processor agreements, and authorised-use boundaries" },
      { label: "Field Setting", text: "Nikshay, NTEP, and related TB programme data flows" },
      { label: "Focus", text: "No local copies, access restraint, and program-only use of TB records" }
    ],
    questions: [
      {
        module: "Data audit checklist",
        topic: "Likely PF role",
        text: "How does the approved Nikshay checklist describe Piramal Foundation's likely position for Nikshay data?",
        options: [
          "Likely a Data Processor for Nikshay data rather than the Data Fiduciary",
          "Always the Significant Data Fiduciary by default",
          "Outside DPDP entirely because the platform is government-run",
          "Automatically a Consent Manager"
        ],
        correct: 0,
        explanation: "The Nikshay checklist notes that Piramal Foundation is likely acting as a Data Processor for Nikshay data rather than the Data Fiduciary."
      },
      {
        module: "Data audit checklist",
        topic: "Formal agreement",
        text: "Which document does the source pack say should exist for Nikshay-linked processing?",
        options: [
          "A written agreement covering Piramal Foundation's processing obligations with the relevant government authority",
          "Only an oral district understanding",
          "A donor newsletter acknowledging the platform",
          "A media consent form for every staff member"
        ],
        correct: 0,
        explanation: "The checklist specifically asks whether a written agreement with NTEP or the relevant authority documents the processing obligations."
      },
      {
        module: "Data audit checklist",
        topic: "Local storage discipline",
        text: "Which checklist item most clearly reflects the safest default for Nikshay data on staff devices?",
        options: [
          "Avoid keeping Nikshay data as local copies on personal devices",
          "Download everything weekly so field teams can browse faster",
          "Move patient lists into personal spreadsheets for convenience",
          "Share screenshots of records in group chats for backup"
        ],
        correct: 0,
        explanation: "The Nikshay checklist asks whether local storage is avoided. Government-linked beneficiary records should not be copied casually onto personal devices."
      },
      {
        module: "Act and rules summary",
        topic: "Use within purpose",
        text: "A team wants to repurpose Nikshay-linked data for an unrelated analytics idea. What is the strongest source-based concern?",
        options: [
          "The data should stay within the authorised NTEP or programme purpose unless a separate lawful basis supports something broader",
          "Government-linked data may always be reused internally for any experiment",
          "Repurposing becomes fine if names are sorted alphabetically",
          "DPDP purpose limits never matter once data comes from a State programme"
        ],
        correct: 0,
        explanation: "The approved materials tie government-linked processing to the original programme or legal purpose. Unrelated reuse should not be assumed."
      },
      {
        module: "Data audit checklist",
        topic: "Authorised users only",
        text: "What access pattern does the Nikshay checklist expect?",
        options: [
          "Nikshay login credentials restricted to authorised staff",
          "Shared district credentials for faster teamwork",
          "One public dashboard with every patient record visible",
          "Open logins for any volunteer during outreach season"
        ],
        correct: 0,
        explanation: "The checklist specifically asks whether Nikshay login access is restricted to authorised staff."
      }
    ]
  },
  {
    number: 65,
    slug: "breach-notification-drill",
    shortTitle: "Breach Notification Drill",
    pageTitle: "DPDP Quiz 65 - Breach Notification Drill",
    eyebrow: "DPDP Quiz 65 | Breach Notification Drill",
    heroTitle: "Breach Notification Drill: Contain Fast, Notify Without Delay, and Preserve Evidence",
    heroIntro: "This queued set returns to incident response with a timing angle. It checks whether teams understand the order of containment, Data Principal notice, initial Board reporting, and evidence preservation when an incident breaks late in the day.",
    cardDescription: "Five breach-response questions on the first hour, wrong-recipient deletion requests, Data Principal notice content, initial Board reporting, and preserving logs before fixes.",
    audience: "Programme leads, IT teams, supervisors, and anyone likely to spot an incident first",
    focus: "Containment order, notification content, evidence preservation, and strict timing discipline",
    resultSummary: "This set reinforces that a clean breach response starts with early containment and evidence preservation, then notification without waiting for the full investigation to finish.",
    topics: [
      { label: "Project Stage", text: "Hour-zero containment, early notification, and the 72-hour reporting window" },
      { label: "Obligation Area", text: "Rule 7 breach notification duties and first-response sequencing" },
      { label: "Focus", text: "Wrong-recipient handling, Data Principal notice, DPBI reporting, and logs" }
    ],
    questions: [
      {
        module: "Breach response SOP",
        topic: "Wrong recipient first step",
        text: "A spreadsheet with beneficiary details goes to the wrong external email address. Which immediate action is specifically listed in the SOP for that kind of breach?",
        options: [
          "Contact the recipient, ask for deletion, and document the response",
          "Wait to see whether the recipient replies after a week",
          "Delete your own sent-mail record so the mistake is less visible",
          "Treat it as harmless unless the recipient confirms opening the file"
        ],
        correct: 0,
        explanation: "For wrong-recipient sharing, the SOP explicitly says to contact the recipient, request deletion, and document the response."
      },
      {
        module: "Breach response SOP",
        topic: "Notice to affected people",
        text: "Which item belongs in the notification to affected Data Principals according to Rule 7 in the approved pack?",
        options: [
          "A description of what happened, likely consequences, mitigation steps, and a contact point",
          "Only a promise that the issue will never happen again",
          "The names of every staff member involved internally",
          "A request that they not discuss the breach with anyone else"
        ],
        correct: 0,
        explanation: "The source pack lists the breach description, likely consequences, mitigation, self-protection guidance, and contact details as required notice elements."
      },
      {
        module: "Breach response SOP",
        topic: "Logs before fixes",
        text: "Why does the technical-response checklist insist on preserving logs before attempting remediation?",
        options: [
          "Because evidence can change or disappear once the system is altered",
          "Because logs are needed only for design aesthetics",
          "Because the DPBI forbids password resets during an incident",
          "Because preserving logs removes the need to notify anyone"
        ],
        correct: 0,
        explanation: "The SOP says to preserve logs before taking action because the evidence may change and is needed to understand scope, timing, and cause."
      },
      {
        module: "Breach response SOP",
        topic: "Initial Board report timing",
        text: "How does the approved SOP frame the timing for the initial notification to the Data Protection Board of India?",
        options: [
          "Without delay, with a practical target within the first six hours",
          "Only after the full 72-hour report is complete",
          "Exactly 30 days after containment",
          "Only if more than one district is involved"
        ],
        correct: 0,
        explanation: "The SOP says the initial notification should go without delay and uses the first six hours as the practical working target."
      },
      {
        module: "Breach response SOP",
        topic: "Awareness trigger",
        text: "What event starts the 72-hour reporting clock in the approved SOP?",
        options: [
          "When any person in Piramal Foundation becomes aware of the breach",
          "When the legal team signs off on the final narrative",
          "When a district office schedules a meeting",
          "When the media asks a question about the incident"
        ],
        correct: 0,
        explanation: "The SOP states that the 72-hour clock starts when any person in Piramal Foundation becomes aware of the breach."
      }
    ]
  },
  {
    number: 66,
    slug: "advanced-audit-evidence-sequencing",
    shortTitle: "Advanced Audit Evidence Sequencing",
    pageTitle: "DPDP Quiz 66 - Advanced Audit Evidence Sequencing",
    eyebrow: "DPDP Quiz 66 | Advanced Audit Evidence Sequencing",
    heroTitle: "Advanced Audit Evidence Sequencing: What to Prove First and What to Remediate Next",
    heroIntro: "This queued advanced set closes the next block with an audit-readiness theme. It checks whether governance teams can prioritise data mapping, access evidence, contract gaps, backup proof, and rights ownership in the order the approved pack expects.",
    cardDescription: "Five advanced audit questions on data inventory, export restrictions, vendor-contract checks, backup restorability, and named rights-handling ownership.",
    audience: "BIDA reviewers, IT governance leads, platform owners, and advanced DPDP learners",
    focus: "Audit evidence, platform inventory, export controls, vendor safeguards, and ownership of rights handling",
    resultSummary: "This set reinforces that audit readiness is evidence-driven: know the data, prove access limits and recoverability, close vendor-security gaps, and assign someone to handle rights requests properly.",
    topics: [
      { label: "Difficulty", text: "Advanced audit-readiness judgement across platform, contract, and rights evidence" },
      { label: "Project Stage", text: "Mid-readiness review before final remediation and full-compliance sign-off" },
      { label: "Focus", text: "Inventory, export controls, backups, vendor safeguards, and named ownership" }
    ],
    questions: [
      {
        module: "Data audit checklist",
        topic: "First inventory proof",
        text: "Which question from the general audit checklist best captures the foundation of all later DPDP controls?",
        options: [
          "Do we know exactly what personal data the platform stores and where it is stored",
          "Do we know the colour theme of each dashboard",
          "Do we know which staff member designed the first form version",
          "Do we know how many unrelated slide decks mention the platform"
        ],
        correct: 0,
        explanation: "The audit checklist begins with data inventory because later notice, sharing, security, and rights controls depend on knowing what data exists and where."
      },
      {
        module: "Data audit checklist",
        topic: "Export restriction evidence",
        text: "For a dashboard or platform, which control best demonstrates that bulk personal-data exports are not open to everyone?",
        options: [
          "Restricted export access for authorised roles, with logging of who downloaded what",
          "A shared team password used for all exports",
          "A verbal request process with no audit trail",
          "An expectation that users remember not to export too much"
        ],
        correct: 0,
        explanation: "The checklist asks whether export access is restricted and whether bulk exports are logged, which is concrete evidence of control."
      },
      {
        module: "Data audit checklist",
        topic: "Backup proof",
        text: "Why does the approved audit checklist ask not only whether backups exist, but whether they are tested for restorability?",
        options: [
          "Because an untested backup may fail when continued processing depends on recovery",
          "Because restorability tests replace the need for encryption",
          "Because only paper systems need recovery planning",
          "Because the law requires weekly restoration screenshots only"
        ],
        correct: 0,
        explanation: "The checklist treats tested backups as part of real operational resilience. A backup that cannot be restored does not provide the safeguard it appears to promise."
      },
      {
        module: "Data audit checklist",
        topic: "Vendor safeguard gap",
        text: "Which contract question appears repeatedly across the approved materials when data is handled by an outside vendor or processor?",
        options: [
          "Whether the contract requires equivalent security safeguards",
          "Whether the vendor uses the same document template as Piramal Foundation",
          "Whether the vendor is willing to present in a workshop",
          "Whether the vendor stores only non-digital information"
        ],
        correct: 0,
        explanation: "The act summary and audit checklist both ask whether data-processor or vendor contracts require equivalent security safeguards."
      },
      {
        module: "Data audit checklist",
        topic: "Rights ownership",
        text: "Which evidence shows that a platform is more ready to handle Data Principal rights requests?",
        options: [
          "A designated person or route for handling access, correction, and deletion requests",
          "A promise that any available staff member can answer from memory",
          "A rule that complaints should always be redirected outside the organisation first",
          "A system where only leadership can see whether requests exist"
        ],
        correct: 0,
        explanation: "The checklist asks whether there is a designated person to handle rights requests, which is core evidence that the process is operational."
      }
    ]
  }
];

function folderNameFor(quiz) {
  return `quiz-${String(quiz.number).padStart(2, "0")}-${quiz.slug}`;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const optionOrderPatterns = [
  [0, 1, 2, 3],
  [1, 3, 0, 2],
  [2, 0, 3, 1],
  [3, 1, 2, 0],
  [1, 0, 2, 3],
  [2, 3, 1, 0]
];

const distractorSuffixes = [
  ", with nothing else checked",
  ", and treat that as enough",
  ", without any further review",
  ", even if the programme is urgent",
  ", with no escalation at all",
  ", as the final step"
];

const correctOptionCompactors = [
  [/explicitly authorised for individual-level access/g, "authorised for row-level access"],
  [/capable of resolving grievances within 90 days/g, "to resolve grievances within 90 days"],
  [/the specified purpose is no longer being served/g, "the purpose has ended"],
  [/individuals cannot be identified/g, "people cannot be identified"],
  [/equivalent security safeguards from the Data Processor/g, "equivalent Data Processor safeguards"],
  [/should be known, documented, and monitored against future restrictions/g, "should be documented and monitored for future restrictions"],
  [/the Data Principal/g, "the person"],
  [/individual-level/g, "row-level"],
  [/ at least /g, " at least "],
  [/ +/g, " "]
];

function cloneQuestion(question) {
  return {
    ...question,
    options: [...question.options]
  };
}

function uniqueLongestCorrect(question) {
  const lengths = question.options.map((option) => option.length);
  const maxLength = Math.max(...lengths);
  return lengths[question.correct] === maxLength && lengths.filter((value) => value === maxLength).length === 1;
}

function chooseVariantIndex(...numbers) {
  return numbers.reduce((acc, value) => (acc * 31 + value) % 10007, 17);
}

function compactCorrectOption(text) {
  let compacted = text;
  for (const [pattern, replacement] of correctOptionCompactors) {
    compacted = compacted.replace(pattern, replacement);
  }
  return compacted.trim();
}

function balanceQuestionOptions(question, quizNumber, questionNumber) {
  const balanced = cloneQuestion(question);
  balanced.options[balanced.correct] = compactCorrectOption(balanced.options[balanced.correct]);
  if (!uniqueLongestCorrect(balanced)) {
    return balanced;
  }

  const wrongIndices = balanced.options
    .map((_, index) => index)
    .filter((index) => index !== balanced.correct)
    .sort((a, b) => balanced.options[b].length - balanced.options[a].length);

  for (let suffixRound = 0; suffixRound < distractorSuffixes.length && uniqueLongestCorrect(balanced); suffixRound += 1) {
    const wrongIndex = wrongIndices[suffixRound % wrongIndices.length];
    const suffix = distractorSuffixes[chooseVariantIndex(quizNumber, questionNumber, wrongIndex, suffixRound) % distractorSuffixes.length];
    if (!balanced.options[wrongIndex].endsWith(suffix)) {
      balanced.options[wrongIndex] += suffix;
    }
  }

  return balanced;
}

function reorderQuestionOptions(question, quizNumber, questionNumber) {
  const pattern = optionOrderPatterns[chooseVariantIndex(quizNumber, questionNumber) % optionOrderPatterns.length];
  const reordered = cloneQuestion(question);
  reordered.options = pattern.map((index) => question.options[index]);
  reordered.correct = pattern.indexOf(question.correct);
  return reordered;
}

function prepareQuizForRendering(quiz) {
  if (quiz.number < 7) {
    return quiz;
  }

  return {
    ...quiz,
    questions: quiz.questions.map((question, index) => {
      const balanced = balanceQuestionOptions(question, quiz.number, index + 1);
      return reorderQuestionOptions(balanced, quiz.number, index + 1);
    })
  };
}

function renderQuizHtml(quiz) {
  const preparedQuiz = prepareQuizForRendering(quiz);
  const previousQuiz = quiz.number > 1
    ? quizCatalog.find((item) => item.number === quiz.number - 1)
    : null;
  const previousHref = previousQuiz ? `../${folderNameFor(previousQuiz)}/` : "../";
  const previousLabel = previousQuiz ? `Open Quiz ${String(previousQuiz.number).padStart(2, "0")}` : "Go to quiz hub";
  const questionsJson = JSON.stringify(preparedQuiz.questions, null, 6);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Privacy-friendly analytics by Plausible -->
  <script async src="https://plausible.io/js/pa-kNfkKRdjscYYRVvZBL_67.js"></script>
  <script>
    window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
    plausible.init()
  </script>
  <title>${escapeHtml(preparedQuiz.pageTitle)}</title>
  <style>
    :root {
      --teal: #E4572E;
      --teal-dark: #7A2410;
      --teal-light: #FDE6DF;
      --red-light: #FCEBEB;
      --red-dark: #501313;
      --amber-light: #FFF1EC;
      --amber-dark: #8A3420;
      --ink: #1f1f1f;
      --muted: #5c5c5c;
      --line: #e5d7d2;
      --bg: #ffffff;
      --card: #ffffff;
      --hero-base: #ffffff;
      --hero-accent: #fff4f0;
      --surface-soft: #fff7f4;
      --toolbar-bg: rgba(255, 255, 255, 0.96);
      --toolbar-border: rgba(228, 87, 46, 0.18);
      --toolbar-shadow: 0 10px 24px rgba(54, 54, 54, 0.08);
      --hero-text: #1f1f1f;
      --hero-muted: #4f4f4f;
      --button-solid: #e4572e;
      --button-solid-hover: #c94520;
      --button-text: #ffffff;
      --answer-bg: #ffffff;
      --answer-text: #1f1f1f;
      --feedback-text: #2f2f2f;
      --badge-bg: #fff0ea;
      --badge-text: #9d3418;
      --success: #1f8f4e;
      --success-dark: #106438;
      --success-light: #e8f7ee;
      --zoom: 1;
      --space-scale: 1;
      --panel-padding: calc(24px * var(--space-scale));
      --hero-padding: calc(28px * var(--space-scale));
      --topic-padding-y: calc(14px * var(--space-scale));
      --topic-padding-x: calc(16px * var(--space-scale));
      --button-padding-y: calc(14px * var(--space-scale));
      --button-padding-x: calc(22px * var(--space-scale));
      --answer-padding-y: calc(14px * var(--space-scale));
      --answer-padding-x: calc(16px * var(--space-scale));
      --body-size: clamp(16px, calc(16px * var(--zoom)), 19px);
      --small-size: clamp(13px, calc(13px * var(--zoom)), 14px);
      --hero-copy-size: clamp(16px, calc(17px * var(--zoom)), 20px);
      --title-size: clamp(30px, calc(34px * var(--zoom)), 42px);
      --question-size: clamp(23px, calc(25px * var(--zoom)), 31px);
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      color: var(--ink);
      background: var(--bg);
      font-size: var(--body-size);
      line-height: 1.55;
    }
    .shell {
      max-width: 860px;
      margin: 0 auto;
      padding: 36px 20px 48px;
    }
    .toolbar {
      position: sticky;
      top: 12px;
      z-index: 20;
      display: flex;
      justify-content: center;
      margin: 0 auto 18px;
    }
    .toolbar-inner {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border-radius: 999px;
      background: var(--toolbar-bg);
      border: 1px solid var(--toolbar-border);
      box-shadow: var(--toolbar-shadow);
      backdrop-filter: blur(12px);
    }
    .toolbar-label {
      color: var(--muted);
      font-size: var(--small-size);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      padding: 0 6px 0 4px;
    }
    .tool-btn {
      border: 1px solid var(--toolbar-border);
      background: var(--card);
      color: var(--ink);
      border-radius: 999px;
      padding: 11px 15px;
      min-width: 44px;
      font-size: var(--small-size);
      font-weight: 700;
      cursor: pointer;
    }
    .zoom-readout {
      min-width: 56px;
      text-align: center;
      color: var(--muted);
      font-size: var(--small-size);
      font-weight: 700;
    }
    .hero {
      background:
        radial-gradient(circle at top right, rgba(228, 87, 46, 0.08), transparent 30%),
        linear-gradient(180deg, var(--hero-base) 0%, var(--hero-accent) 100%);
      color: var(--hero-text);
      border-radius: 20px;
      padding: var(--hero-padding);
      box-shadow: 0 10px 30px rgba(20, 20, 20, 0.08);
      position: relative;
      overflow: hidden;
      border: 1px solid var(--toolbar-border);
    }
    .hero::after {
      content: "";
      position: absolute;
      inset: auto -110px -120px auto;
      width: 260px;
      height: 260px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 68%);
      pointer-events: none;
    }
    .brand-row {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 18px;
      position: relative;
      z-index: 1;
    }
    .brand-mark {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 12px 16px;
      border-radius: 16px;
      background: #ffffff;
      box-shadow: inset 0 0 0 1px rgba(228, 87, 46, 0.14);
    }
    .brand-mark img {
      display: block;
      width: min(100%, 220px);
      max-width: 220px;
      height: auto;
    }
    .eyebrow {
      font-size: var(--small-size);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--hero-muted);
      margin-bottom: 10px;
    }
    h1 {
      margin: 0 0 10px;
      font-size: var(--title-size);
      line-height: 1.1;
    }
    .hero p {
      margin: 0;
      font-size: var(--hero-copy-size);
      line-height: 1.6;
      max-width: 680px;
      color: var(--hero-muted);
    }
    .panel {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 18px;
      margin-top: 20px;
      padding: var(--panel-padding);
      box-shadow: 0 10px 24px rgba(20, 20, 20, 0.06);
    }
    .topics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
      margin-top: 18px;
    }
    .topic {
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: var(--topic-padding-y) var(--topic-padding-x);
      background: var(--surface-soft);
    }
    .topic strong {
      display: inline-block;
      margin-bottom: 6px;
      color: var(--teal);
      font-size: var(--small-size);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .start {
      margin-top: 22px;
      background: var(--button-solid);
      color: var(--button-text);
      border: 0;
      border-radius: 999px;
      font-size: var(--body-size);
      font-weight: 700;
      padding: var(--button-padding-y) var(--button-padding-x);
      cursor: pointer;
      box-shadow: 0 10px 18px rgba(28, 18, 5, 0.14);
    }
    .status {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      font-size: var(--body-size);
      color: var(--muted);
      margin-bottom: 14px;
    }
    .pill {
      background: var(--surface-soft);
      color: var(--teal-dark);
      border-radius: 999px;
      padding: 6px 10px;
      font-size: var(--small-size);
      font-weight: 700;
    }
    .bar {
      width: 100%;
      height: 8px;
      background: #f3e3de;
      border-radius: 999px;
      overflow: hidden;
      margin-bottom: 22px;
    }
    .bar > div {
      height: 100%;
      background: linear-gradient(90deg, #c94520 0%, #ff7a59 100%);
      width: 0%;
      transition: width 0.25s ease;
    }
    .question {
      font-size: var(--question-size);
      line-height: 1.35;
      margin: 0 0 20px;
    }
    .answers {
      display: grid;
      gap: 12px;
    }
    .answer {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      width: 100%;
      border: 1px solid var(--line);
      border-radius: 16px;
      background: var(--answer-bg);
      color: var(--answer-text);
      padding: var(--answer-padding-y) var(--answer-padding-x);
      font: inherit;
      text-align: left;
      cursor: pointer;
      transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    }
    .answer:hover,
    .answer:focus-visible,
    .tool-btn:hover,
    .tool-btn:focus-visible,
    .start:hover,
    .start:focus-visible,
    .next:hover,
    .next:focus-visible,
    .restart:hover,
    .restart:focus-visible,
    .hub-link:hover,
    .hub-link:focus-visible {
      outline: none;
      border-color: var(--teal);
      box-shadow: 0 0 0 3px rgba(228, 87, 46, 0.14);
    }
    .answer.correct {
      border-color: rgba(31, 143, 78, 0.4);
      background: var(--success-light);
    }
    .answer.wrong {
      border-color: rgba(164, 46, 46, 0.28);
      background: var(--red-light);
    }
    .answer.faded {
      opacity: 0.72;
    }
    .answer:disabled {
      cursor: default;
    }
    .badge {
      flex: 0 0 auto;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--badge-bg);
      color: var(--badge-text);
      font-size: var(--small-size);
      font-weight: 700;
      border: 1px solid rgba(228, 87, 46, 0.18);
    }
    .answer.correct .badge {
      background: #dff4e6;
      color: var(--success-dark);
      border-color: rgba(31, 143, 78, 0.24);
    }
    .feedback {
      margin-top: 18px;
      border-radius: 16px;
      padding: 18px 18px 20px;
      background: var(--success-light);
      color: var(--feedback-text);
      border: 1px solid rgba(31, 143, 78, 0.16);
      line-height: 1.65;
    }
    .feedback.wrong {
      background: var(--red-light);
      border-color: rgba(164, 46, 46, 0.18);
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 18px;
    }
    .next,
    .restart,
    .hub-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      padding: 14px 22px;
      font: inherit;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      border: 1px solid transparent;
    }
    .next {
      background: var(--button-solid);
      color: var(--button-text);
    }
    .restart {
      background: transparent;
      color: var(--teal-dark);
      border-color: rgba(228, 87, 46, 0.24);
    }
    .hub-link {
      background: var(--surface-soft);
      color: var(--teal-dark);
      border-color: rgba(228, 87, 46, 0.16);
    }
    .result-box {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 20px;
      padding: 22px;
      border-radius: 20px;
    }
    .score-circle {
      width: 92px;
      height: 92px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      text-align: center;
      font-weight: 700;
    }
    @media (max-width: 720px) {
      .shell {
        padding: 22px 16px 40px;
      }
      .toolbar-inner {
        justify-content: center;
      }
      .status,
      .result-box {
        grid-template-columns: 1fr;
      }
      .result-box {
        justify-items: start;
      }
      .actions > * {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="shell">
    <div class="toolbar" aria-label="Reading controls">
      <div class="toolbar-inner">
        <span class="toolbar-label">View</span>
        <button class="tool-btn" id="zoomOutBtn" type="button" aria-label="Zoom out">A-</button>
        <span class="zoom-readout" id="zoomReadout">100%</span>
        <button class="tool-btn" id="zoomInBtn" type="button" aria-label="Zoom in">A+</button>
      </div>
    </div>
    <div class="hero">
      <div class="brand-row">
        <div class="brand-mark">
          <img src="./PF_Logo.jpg" alt="Piramal Foundation logo">
        </div>
      </div>
      <p class="eyebrow">${escapeHtml(preparedQuiz.eyebrow)}</p>
      <h1>${escapeHtml(preparedQuiz.heroTitle)}</h1>
      <p>${escapeHtml(preparedQuiz.heroIntro)}</p>
      <div class="topics">
        ${preparedQuiz.topics.map((topic) => `<div class="topic"><strong>${escapeHtml(topic.label)}</strong>${escapeHtml(topic.text)}</div>`).join("")}
      </div>
      <button class="start" id="startBtn">Start quiz</button>
    </div>
    <div class="panel" id="app" hidden></div>
  </div>
  <script>
    const questions = ${questionsJson};
    const letters = ["A", "B", "C", "D"];
    const app = document.getElementById("app");
    const startBtn = document.getElementById("startBtn");
    const zoomOutBtn = document.getElementById("zoomOutBtn");
    const zoomInBtn = document.getElementById("zoomInBtn");
    const zoomReadout = document.getElementById("zoomReadout");
    const ZOOM_KEY = "dpdpQuizZoom";
    const MIN_ZOOM = 0.96;
    const MAX_ZOOM = 1.18;
    const ZOOM_STEP = 0.06;

    const state = {
      started: false,
      current: 0,
      selected: null,
      answers: []
    };
    const quizTelemetryId = window.location.pathname.replace(/\\/+$/, "") || "/";

    const completionNav = {
      previousHref: "${previousHref}",
      previousLabel: "${previousLabel}",
      hubHref: "../"
    };

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function applyZoom(zoom) {
      const safeZoom = clamp(zoom, MIN_ZOOM, MAX_ZOOM);
      const root = document.documentElement;
      const spaceScale = safeZoom < 1 ? 0.9 + ((safeZoom - MIN_ZOOM) / (1 - MIN_ZOOM)) * 0.1 : 1 + ((safeZoom - 1) * 0.7);
      root.style.setProperty("--zoom", safeZoom.toFixed(2));
      root.style.setProperty("--space-scale", spaceScale.toFixed(2));
      zoomReadout.textContent = String(Math.round(safeZoom * 100)) + "%";
      localStorage.setItem(ZOOM_KEY, String(safeZoom));
    }

    function loadPreferences() {
      const savedZoom = Number(localStorage.getItem(ZOOM_KEY) || "1");
      applyZoom(Number.isFinite(savedZoom) ? savedZoom : 1);
    }

    function trackQuizCompleted(score) {
      if (typeof window.plausible !== "function") {
        return;
      }
      window.plausible("Quiz Completed", {
        props: {
          quiz: quizTelemetryId,
          score: String(score),
          total: String(questions.length)
        }
      });
    }

    function getResult(score) {
      if (score === 5) {
        return {
          label: "Perfect score",
          message: "You are reading the DPDP scenarios carefully and applying the guidance with confidence.",
          bg: "var(--teal-light)",
          color: "var(--teal-dark)",
          border: "var(--teal)"
        };
      }
      if (score >= 4) {
        return {
          label: "Excellent",
          message: "You have a strong grip on these DPDP choices. Another fresh set will help lock in the details.",
          bg: "var(--teal-light)",
          color: "var(--teal-dark)",
          border: "var(--teal)"
        };
      }
      if (score >= 3) {
        return {
          label: "Good progress",
          message: "The main ideas are there. One more round will sharpen the exact trigger points and exceptions.",
          bg: "#e7f0fb",
          color: "#123d6b",
          border: "#2d71c9"
        };
      }
      if (score >= 2) {
        return {
          label: "Keep going",
          message: "You are building momentum. Revisit the guidance and try another set to make the distinctions stick.",
          bg: "var(--amber-light)",
          color: "var(--amber-dark)",
          border: "#ba7517"
        };
      }
      return {
        label: "Just getting started",
        message: "A quick review of the DPDP learning notes will make the next attempt much easier.",
        bg: "var(--red-light)",
        color: "var(--red-dark)",
        border: "#cd4d4b"
      };
    }

    function escapeHtml(text) {
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function scrollWithToolbarOffset(targetTop) {
      const toolbarHeight = document.querySelector(".toolbar")?.offsetHeight || 0;
      const top = Math.max(0, targetTop - toolbarHeight - 16);
      window.scrollTo({ top, behavior: "smooth" });
    }

    function scrollElementToReadingPosition(element) {
      const rect = element.getBoundingClientRect();
      scrollWithToolbarOffset(window.scrollY + rect.top);
    }

    function renderIntro() {
      app.hidden = true;
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      });
    }

    function renderQuestion() {
      const q = questions[state.current];
      const answered = state.selected !== null;
      const progress = (state.current / questions.length) * 100;

      app.hidden = false;
      app.innerHTML = \`
        <div class="status">
          <div>Question \${state.current + 1} of \${questions.length}</div>
          <div class="pill">\${escapeHtml(q.module)} | \${escapeHtml(q.topic)}</div>
        </div>
        <div class="bar"><div style="width:\${progress}%"></div></div>
        <p class="question">\${escapeHtml(q.text)}</p>
        <div class="answers">
          \${q.options.map((option, i) => {
            let cls = "answer";
            if (answered) {
              if (i === q.correct) cls += " correct";
              else if (i === state.selected) cls += " wrong";
              else cls += " faded";
            }
            return \`<button class="\${cls}" data-option="\${i}" \${answered ? "disabled" : ""}>
              <span class="badge">\${letters[i]}</span>
              <span>\${escapeHtml(option)}</span>
            </button>\`;
          }).join("")}
        </div>
        \${answered ? \`
          <div class="feedback \${state.selected === q.correct ? "" : "wrong"}">
            <strong>\${state.selected === q.correct ? "Correct." : "Not quite."}</strong>
            \${escapeHtml(q.explanation)}
          </div>
          <div class="actions">
            <button class="next" id="nextBtn">\${state.current + 1 === questions.length ? "See results" : "Next question"}</button>
          </div>
        \` : ""}
      \`;

      app.querySelectorAll("[data-option]").forEach((btn) => {
        btn.addEventListener("click", () => selectAnswer(Number(btn.dataset.option)));
      });

      const nextBtn = document.getElementById("nextBtn");
      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          if (state.current + 1 === questions.length) renderResults();
          else {
            state.current += 1;
            state.selected = null;
            renderQuestion();
          }
        });

        requestAnimationFrame(() => {
          nextBtn.scrollIntoView({ behavior: "smooth", block: "center" });
        });
      }

      if (!answered) {
        requestAnimationFrame(() => {
          scrollElementToReadingPosition(app);
        });
      }
    }

    function selectAnswer(index) {
      const q = questions[state.current];
      if (state.selected !== null) return;
      state.selected = index;
      state.answers.push(index === q.correct);
      renderQuestion();
    }

    function renderResults() {
      const score = state.answers.filter(Boolean).length;
      const result = getResult(score);
      trackQuizCompleted(score);
      app.hidden = false;
      app.innerHTML = \`
        <div class="result-box" style="background:\${result.bg}; border:1px solid \${result.border}; color:\${result.color};">
          <div class="score-circle" style="background:white; border:2px solid \${result.border}; color:\${result.color};">
            <div style="font-size:30px;">\${score}</div>
            <div style="font-size:12px;">/ \${questions.length}</div>
          </div>
          <div>
            <div style="font-size:24px; font-weight:700; margin-bottom:6px;">\${result.label}</div>
            <div style="font-size:15px; line-height:1.6;">\${result.message}</div>
          </div>
        </div>
        <div style="font-size:var(--body-size); line-height:1.7; color:var(--ink); margin-top:18px;">
          ${escapeHtml(preparedQuiz.resultSummary)}
        </div>
        <div class="actions" style="justify-content:flex-start; margin-top:24px;">
          <a class="next" href="\${completionNav.previousHref}">\${completionNav.previousLabel}</a>
          <a class="hub-link" href="\${completionNav.hubHref}">Go to quiz hub</a>
          <button class="restart" id="restartBtn">Try again</button>
        </div>
      \`;
      document.getElementById("restartBtn").addEventListener("click", restart);
    }

    function restart() {
      state.started = false;
      state.current = 0;
      state.selected = null;
      state.answers = [];
      app.hidden = true;
    }

    startBtn.addEventListener("click", () => {
      state.started = true;
      state.current = 0;
      state.selected = null;
      state.answers = [];
      renderQuestion();
    });

    zoomOutBtn.addEventListener("click", () => {
      const currentZoom = Number(getComputedStyle(document.documentElement).getPropertyValue("--zoom")) || 1;
      applyZoom(currentZoom - ZOOM_STEP);
    });

    zoomInBtn.addEventListener("click", () => {
      const currentZoom = Number(getComputedStyle(document.documentElement).getPropertyValue("--zoom")) || 1;
      applyZoom(currentZoom + ZOOM_STEP);
    });

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    loadPreferences();
    renderIntro();
  </script>
</body>
</html>`;
}

function withHrefPrefix(href, prefix = ".") {
  if (href.startsWith("./")) {
    return `${prefix}${href.slice(1)}`;
  }
  return href;
}

function renderCard(quiz, hrefPrefix = ".") {
  const folder = folderNameFor(quiz);
  return `      <article class="quiz-card">
        <div class="badge-row">
          <span class="badge">Daily Release</span>
          <span class="badge success">5 questions</span>
        </div>
        <h2>DPDP Quiz ${String(quiz.number).padStart(2, "0")} | ${escapeHtml(quiz.shortTitle)}</h2>
        <p>${escapeHtml(quiz.cardDescription)}</p>
        <div class="meta">
          <div>Audience: ${escapeHtml(quiz.audience)}</div>
          <div>Focus: ${escapeHtml(quiz.focus)}</div>
        </div>
        <a class="quiz-link" href="${withHrefPrefix(`./${folder}/`, hrefPrefix)}">Open Quiz ${String(quiz.number).padStart(2, "0")}</a>
      </article>`;
}

function replaceAll(text, replacements) {
  let next = text;
  for (const [from, to] of replacements) {
    next = next.replaceAll(from, to);
  }
  return next;
}

const ngoTextReplacements = [
  ["Piramal Foundation DPDP learning pack", "DPDP learning pack for NGOs in India"],
  ["all future Piramal Foundation uses of my data", "all future uses of my data by this organisation"],
  ["all future Piramal Foundation activity", "all future activity by this organisation"],
  ["Piramal Foundation website or social media", "organisation website or social media"],
  ["Piramal Foundation website", "organisation website"],
  ["Piramal Foundation uses", "uses by this organisation"],
  ["on Piramal Foundation's behalf", "on the organisation's behalf"],
  ["When any person in Piramal Foundation becomes aware of the breach", "When any person in the organisation becomes aware of the breach"],
  ["Piramal Foundation should", "the organisation should"],
  ["Piramal Foundation becomes", "the organisation becomes"],
  ["Piramal Foundation to stop", "the organisation to stop"],
  ["Piramal Foundation can map back", "the organisation can map back"],
  ["Piramal Foundation", "the organisation"],
  ["Karuna Fellows", "health outreach workers"],
  ["Karuna Fellow", "health outreach worker"],
  ["Gandhi Fellows", "field fellows"],
  ["Gandhi Fellow", "field fellow"],
  ["Program Officers", "programme officers"],
  ["Program Officer guidance", "programme officer guidance"],
  ["Program Officer", "programme officer"],
  ["Implementors", "implementors"],
  ["Implementor", "implementor"]
];

function genericizeValue(value) {
  if (typeof value === "string") {
    return replaceAll(value, ngoTextReplacements);
  }
  if (Array.isArray(value)) {
    return value.map(genericizeValue);
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, entryValue]) => [key, genericizeValue(entryValue)]));
  }
  return value;
}

function genericizeQuiz(quiz) {
  const prepared = genericizeValue(quiz);
  if (prepared.number === 1) {
    prepared.cardDescription = "Fresh field scenarios across health outreach workers, programme officers, developers, and BI analyst decisions, with Bihar and Jharkhand examples and no repeated wording from the earlier published quiz sets.";
    prepared.topics = prepared.topics.map((topic) => topic.label === "Role"
      ? { ...topic, text: "health outreach workers, programme officers, developers, and BI analyst decisions" }
      : topic);
  }
  return prepared;
}

function renderNgoQuizHtml(quiz) {
  const html = renderQuizHtml(genericizeQuiz(quiz));
  return html.replace(
    '<img src="./PF_Logo.jpg" alt="Piramal Foundation logo">',
    '<span style="font-weight:700; letter-spacing:0.08em; color:#7A2410; font-size:clamp(20px,2.4vw,28px);">DPDP Quiz</span>'
  );
}

function renderLegacyCard(card, hrefPrefix = ".") {
  return `      <article class="quiz-card">
        <div class="badge-row">
          <span class="badge">${escapeHtml(card.badge)}</span>
          <span class="badge success">${escapeHtml(card.count)}</span>
        </div>
        <h2>${escapeHtml(card.title)}</h2>
        <p>${escapeHtml(card.description)}</p>
        <div class="meta">
          <div>Audience: ${escapeHtml(card.audience)}</div>
          <div>Focus: ${escapeHtml(card.focus)}</div>
        </div>
        <a class="quiz-link" href="${withHrefPrefix(card.href, hrefPrefix)}">${escapeHtml(card.cta)}</a>
      </article>`;
}

function renderHubHtml(publishedDailyQuizzes) {
  const dailyCards = publishedDailyQuizzes
    .sort((a, b) => b.number - a.number)
    .map((quiz) => renderCard(quiz))
    .join("\n");
  const legacyCards = legacyQuizzes.map((card) => renderLegacyCard(card)).join("\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Piramal Foundation DPDP Quiz Hub</title>
  <style>
    :root {
      --brand: #e4572e;
      --brand-dark: #8a3420;
      --brand-soft: #fff2ec;
      --brand-soft-2: #fde6df;
      --ink: #1f1f1f;
      --muted: #5b5b5b;
      --line: #ead4cc;
      --bg: #ffffff;
      --card: #ffffff;
      --success: #1f8f4e;
      --shadow: 0 18px 40px rgba(122, 36, 16, 0.09);
      --toolbar-shadow: 0 10px 24px rgba(54, 54, 54, 0.08);
      --zoom: 1;
      --body-size: clamp(16px, calc(16px * var(--zoom)), 19px);
      --small-size: clamp(13px, calc(13px * var(--zoom)), 15px);
      --title-size: clamp(2rem, calc(2.2rem * var(--zoom)), 3rem);
      --card-title: clamp(1.25rem, calc(1.35rem * var(--zoom)), 1.75rem);
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      color: var(--ink);
      background:
        radial-gradient(circle at top right, rgba(228, 87, 46, 0.08), transparent 24%),
        linear-gradient(180deg, #fffdfc 0%, #ffffff 20%, #ffffff 100%);
      font-size: var(--body-size);
      line-height: 1.6;
    }
    .shell {
      max-width: 980px;
      margin: 0 auto;
      padding: 88px 20px 56px;
    }
    .toolbar {
      position: sticky;
      top: 12px;
      z-index: 20;
      display: flex;
      justify-content: center;
      margin: 0 auto 18px;
    }
    .toolbar-inner {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      padding: 10px 12px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.96);
      border: 1px solid rgba(228, 87, 46, 0.18);
      box-shadow: var(--toolbar-shadow);
      backdrop-filter: blur(12px);
    }
    .toolbar-label,
    .zoom-readout {
      color: var(--muted);
      font-size: var(--small-size);
      font-weight: 700;
    }
    .tool-btn {
      border: 1px solid rgba(228, 87, 46, 0.22);
      background: var(--card);
      color: var(--ink);
      border-radius: 999px;
      padding: 11px 16px;
      min-width: 46px;
      font-size: var(--small-size);
      font-weight: 700;
      cursor: pointer;
    }
    .tool-btn:hover,
    .tool-btn:focus-visible,
    .quiz-link:hover,
    .quiz-link:focus-visible {
      outline: none;
      border-color: var(--brand);
      box-shadow: 0 0 0 3px rgba(228, 87, 46, 0.14);
    }
    .zoom-readout {
      min-width: 58px;
      text-align: center;
    }
    .hero,
    .quiz-card {
      border: 1px solid var(--line);
      border-radius: 28px;
      background: linear-gradient(180deg, #ffffff 0%, #fffaf7 100%);
      box-shadow: var(--shadow);
    }
    .hero {
      padding: 30px;
      margin-bottom: 26px;
    }
    .logo-wrap {
      display: inline-flex;
      align-items: center;
      padding: 12px 16px;
      border-radius: 20px;
      border: 1px solid var(--line);
      background: #ffffff;
      margin-bottom: 22px;
    }
    .logo-wrap img {
      display: block;
      max-width: min(320px, 72vw);
      height: auto;
    }
    .eyebrow {
      margin: 0 0 8px;
      color: var(--brand-dark);
      font-size: var(--small-size);
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }
    h1 {
      margin: 0 0 14px;
      font-size: var(--title-size);
      line-height: 1.12;
    }
    .hero p {
      margin: 0;
      max-width: 760px;
      color: #353535;
    }
    .hero-note {
      margin-top: 16px;
      padding: 14px 16px;
      border-left: 4px solid var(--brand);
      border-radius: 16px;
      background: var(--brand-soft);
      color: #3f312c;
    }
    .section-title {
      margin: 0 0 16px;
      font-size: clamp(1.35rem, calc(1.45rem * var(--zoom)), 1.8rem);
    }
    .quiz-list {
      display: grid;
      gap: 18px;
      margin-bottom: 28px;
    }
    .quiz-card {
      padding: 24px;
    }
    .badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 14px;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      padding: 7px 12px;
      border-radius: 999px;
      background: var(--brand-soft);
      color: var(--brand-dark);
      font-size: var(--small-size);
      font-weight: 700;
    }
    .badge.success {
      background: #e8f7ee;
      color: var(--success);
    }
    .quiz-card h2 {
      margin: 0 0 10px;
      font-size: var(--card-title);
      line-height: 1.2;
    }
    .quiz-card p {
      margin: 0 0 18px;
      color: #3c3c3c;
    }
    .meta {
      display: grid;
      gap: 10px;
      margin: 0 0 20px;
      color: var(--muted);
      font-size: var(--small-size);
    }
    .quiz-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 14px 22px;
      border-radius: 999px;
      border: 1px solid transparent;
      background: var(--brand);
      color: #ffffff;
      font-weight: 700;
      text-decoration: none;
    }
    .footer {
      margin-top: 28px;
      color: var(--muted);
      font-size: var(--small-size);
      text-align: center;
    }
    @media (max-width: 640px) {
      .shell {
        padding: 84px 16px 42px;
      }
      .hero,
      .quiz-card {
        border-radius: 22px;
        padding: 20px;
      }
      .toolbar-inner {
        justify-content: center;
      }
      .quiz-link {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="shell">
    <div class="toolbar" aria-label="Reading controls">
      <div class="toolbar-inner">
        <span class="toolbar-label">View</span>
        <button class="tool-btn" id="zoomOutBtn" type="button" aria-label="Zoom out">A-</button>
        <span class="zoom-readout" id="zoomReadout">100%</span>
        <button class="tool-btn" id="zoomInBtn" type="button" aria-label="Zoom in">A+</button>
      </div>
    </div>
    <section class="hero">
      <div class="logo-wrap">
        <img src="./PF_Logo.jpg" alt="Piramal Foundation logo">
      </div>
      <p class="eyebrow">Digital Personal Data Protection</p>
      <h1>DPDP Quiz Hub</h1>
      <p>Choose a quiz below based on the audience, theme, and depth you want. The numbered daily releases follow a queued publish pattern, while the earlier sets remain available for onboarding and workshop use.</p>
      <div class="hero-note">Tip: The latest daily release appears first. Use the older beginner and mid-level sets for longer workshops, then use the five-question daily releases for regular reinforcement.</div>
    </section>

    <h2 class="section-title">Daily Quiz Releases</h2>
    <section class="quiz-list" aria-label="Daily quiz list">
${dailyCards}
    </section>

    <h2 class="section-title">Earlier Quiz Sets</h2>
    <section class="quiz-list" aria-label="Earlier quiz list">
${legacyCards}
    </section>

    <p class="footer">Hosted on GitHub Pages for simple sharing across Teams, browser, and training workflows.</p>
  </div>

  <script>
    (function () {
      const root = document.documentElement;
      const zoomReadout = document.getElementById("zoomReadout");
      const zoomInBtn = document.getElementById("zoomInBtn");
      const zoomOutBtn = document.getElementById("zoomOutBtn");
      let zoom = 1;

      function applyZoom() {
        root.style.setProperty("--zoom", zoom.toFixed(2));
        zoomReadout.textContent = Math.round(zoom * 100) + "%";
        zoomOutBtn.disabled = zoom <= 0.9;
        zoomInBtn.disabled = zoom >= 1.2;
      }

      zoomOutBtn.addEventListener("click", function () {
        zoom = Math.max(0.9, Math.round((zoom - 0.05) * 100) / 100);
        applyZoom();
      });

      zoomInBtn.addEventListener("click", function () {
        zoom = Math.min(1.2, Math.round((zoom + 0.05) * 100) / 100);
        applyZoom();
      });

      applyZoom();
    }());
  </script>
</body>
</html>`;
}

function renderNgoHubHtml(publishedDailyQuizzes) {
  const dailyCards = publishedDailyQuizzes
    .map(genericizeQuiz)
    .sort((a, b) => b.number - a.number)
    .map((quiz) => renderCard(quiz, ".."))
    .join("\n");
  const legacyCards = ngoLegacyQuizzes.map((card) => renderLegacyCard(card, "..")).join("\n");

  return renderHubHtml([])
    .replace("<title>Piramal Foundation DPDP Quiz Hub</title>", "<title>DPDP Quiz Hub for Indian NGOs</title>")
    .replace(
      '<img src="./PF_Logo.jpg" alt="Piramal Foundation logo">',
      '<span style="font-weight:700; letter-spacing:0.08em; color:#7A2410; font-size:clamp(20px,2.4vw,28px);">DPDP Quiz</span>'
    )
    .replace(
      '<p>Choose a quiz below based on the audience, theme, and depth you want. The numbered daily releases follow a queued publish pattern, while the earlier sets remain available for onboarding and workshop use.</p>',
      '<p>Choose a quiz below based on the audience, theme, and depth you want. The numbered daily releases follow a queued publish pattern, while the earlier sets remain available for onboarding and workshop use.</p>'
    )
    .replace(
      '<div class="hero-note">Tip: The latest daily release appears first. Use the older beginner and mid-level sets for longer workshops, then use the five-question daily releases for regular reinforcement.</div>',
      '<div class="hero-note">Tip: The latest daily release appears first. Use the older beginner and mid-level sets for longer workshops, then use the five-question daily releases for regular reinforcement.</div>'
    )
    .replace(/<section class="quiz-list" aria-label="Daily quiz list">[\s\S]*?<\/section>/, `<section class="quiz-list" aria-label="Daily quiz list">\n${dailyCards}\n    </section>`)
    .replace(/<section class="quiz-list" aria-label="Earlier quiz list">[\s\S]*?<\/section>/, `<section class="quiz-list" aria-label="Earlier quiz list">\n${legacyCards}\n    </section>`)
    .replace(
      '<h1>DPDP Quiz Hub</h1>',
      '<h1>NGO Quiz Hub</h1>'
    );
}

const ngoSectionCatalog = [
  {
    key: "quizzes",
    title: "Quizzes",
    href: "./quizzes/",
    badge: "Live now",
    description: "Browse the published NGO quizzes, including the daily release stream and the earlier workshop-ready sets.",
    note: "This section is updated by the existing quiz publish pipeline."
  },
  {
    key: "roles",
    title: "Roles",
    href: "./roles/",
    badge: "Foundation ready",
    description: "Role-specific DPDP guidance for field teams, programme leaders, developers, analysts, and NGO operations leads.",
    note: "This will become the quickest route for role-based onboarding."
  },
  {
    key: "scenarios",
    title: "Scenarios",
    href: "./scenarios/",
    badge: "Foundation ready",
    description: "Scenario labs for realistic NGO situations like consent refusal, child photos, lost devices, rights requests, and safe sharing.",
    note: "These pages will be built to guide judgment, not just test recall."
  },
  {
    key: "tools",
    title: "Tools",
    href: "./tools/",
    badge: "Foundation ready",
    description: "Decision trees, checklists, and self-assessments that teams can use during implementation and review.",
    note: "This section will house practical, repeatable digital aids."
  },
  {
    key: "about",
    title: "About",
    href: "./about/",
    badge: "Live now",
    description: "Understand the scope of this NGO DPDP learning site, how to use each section, and how it stays separate from PF-only surfaces.",
    note: "This page also sets expectations for future additions."
  }
];

const ngoRolePages = [
  {
    slug: "field-staff-fellows",
    title: "Field Staff and Fellows",
    summary: "A practical guide for people collecting information directly from community members during surveys, visits, events, and enrolment workflows.",
    audience: "Field staff, outreach workers, enumerators, mobilisation teams, and community fellows",
    keyFocus: "Plain-language notice, consent quality, photography and recording boundaries, and respectful rights handling",
    whatYouHandle: [
      "Household visits, beneficiary enrolment, mobilisation activities, field surveys, event registration, and informal data collection in villages or community settings.",
      "Personal data such as names, phone numbers, household details, health-related responses, and photographs or voice recordings."
    ],
    responsibilities: [
      "Explain what data you are collecting and why before you start.",
      "Allow people to refuse a question or the full interaction without pressure.",
      "Use the approved notice and consent flow rather than improvised explanations.",
      "Treat photos, videos, and voice recordings as personal data that need a clear purpose and consent.",
      "Log access, correction, deletion, or grievance requests instead of handling them casually."
    ],
    redFlags: [
      "A person says they do not want to share one field but staff continue anyway.",
      "A beneficiary is photographed because the moment feels useful for reporting.",
      "Field notes or lists are shared in WhatsApp groups for convenience.",
      "A rights request is brushed off with a verbal assurance instead of being recorded."
    ],
    safeDefaults: [
      "Use short, direct language: what is being collected, why, and how the person can ask questions later.",
      "If someone declines a question, continue only with the agreed parts.",
      "Ask separately before taking any photo, video, or audio.",
      "If unsure whether a use was covered, pause and escalate instead of guessing."
    ],
    escalateWhen: [
      "A beneficiary asks to access, correct, delete, or formally complain about their data.",
      "A device containing forms or lists is lost, stolen, or shared with the wrong person.",
      "A partner or government official asks for individual-level data outside the normal workflow.",
      "The interaction involves a child, distress, or sensitive health information and the purpose is not clearly direct care."
    ],
    practiceNext: [
      { label: "Use a scenario", href: "../../scenarios/beneficiary-refuses-one-field/" },
      { label: "Open a tool", href: "../../tools/can-we-collect-this-data/" }
    ]
  },
  {
    slug: "programme-officer",
    title: "Programme Officer",
    summary: "Guidance for the people who oversee enrolment, reporting, partner sharing, and the first escalation path for beneficiary data issues.",
    audience: "Programme officers, implementation leads, district coordinators, and NGO team supervisors",
    keyFocus: "Consent coverage, purpose limitation, partner sharing checks, rights workflow ownership, and calm escalation",
    whatYouHandle: [
      "Programme delivery decisions, MIS supervision, field-team guidance, donor or partner reporting, and operational escalation.",
      "The point where field activity, data collection, and formal accountability meet."
    ],
    responsibilities: [
      "Confirm the data being collected matches a defined programme purpose.",
      "Make sure notices and consent records are actually documented and not only assumed.",
      "Check whether partner or government sharing is within the original scope or supported by a lawful basis.",
      "Keep a named process for rights requests and grievances that can be resolved within 90 days.",
      "Escalate incidents early when a breach, complaint, or unusual sharing request appears."
    ],
    redFlags: [
      "A programme form keeps growing because teams want 'all useful details'.",
      "A donor or evaluator asks for row-level data and the team starts preparing it before checking coverage and agreements.",
      "No one can clearly say who handles correction or deletion requests.",
      "A beneficiary complaint is treated as a communication issue rather than a rights issue."
    ],
    safeDefaults: [
      "Ask whether the current purpose really needs each field being collected.",
      "Use aggregated or anonymised reporting whenever that still serves the need.",
      "Require a documented route for rights and grievance handling rather than informal follow-up.",
      "If sharing is not obviously covered, stop and check legal basis, contract, and notice scope first."
    ],
    escalateWhen: [
      "A rights request cannot be resolved from the normal workflow.",
      "A partner asks for individual-level data without a clear agreement or basis.",
      "A breach may have occurred, even if the exact impact is still unknown.",
      "A child-related, health-related, or cross-border sharing issue falls outside the routine programme process."
    ],
    practiceNext: [
      { label: "Use a scenario", href: "../../scenarios/child-photo-donor-deck/" },
      { label: "Open a tool", href: "../../tools/consent-notice-review-checklist/" }
    ]
  },
  {
    slug: "developer-product-builder",
    title: "Developer or Product Builder",
    summary: "A guide for system owners and builders who shape how personal data is stored, accessed, exported, and secured inside digital platforms.",
    audience: "Developers, product builders, platform owners, and technical administrators",
    keyFocus: "Data inventory, RBAC, logs, exports, backups, API tokens, and processor-aligned safeguards",
    whatYouHandle: [
      "Features, forms, APIs, dashboards, integrations, exports, backups, and admin access inside systems that process personal data.",
      "Technical controls that decide whether privacy commitments can actually be enforced."
    ],
    responsibilities: [
      "Know what personal data the system stores and where it lives.",
      "Restrict access and export rights to the minimum set of authorised roles.",
      "Retain logs for a minimum of one year and make them reviewable.",
      "Protect data in transit and at rest, including backups and offline devices.",
      "Ensure vendors or processors are contractually held to equivalent safeguards."
    ],
    redFlags: [
      "Everyone with a login can export beneficiary-level CSV files.",
      "Inactive accounts stay enabled because no one owns quarterly review.",
      "A shared token runs integrations for years without rotation or logging.",
      "Backups exist but are broadly accessible and not clearly protected."
    ],
    safeDefaults: [
      "Start reviews with a data dictionary, access map, and export map.",
      "Prefer aggregated or masked views for analysis unless row-level access is justified.",
      "Treat logs, backups, and API credentials as first-class controls, not afterthoughts.",
      "When a new integration or export is proposed, ask what personal data moves and who really needs it."
    ],
    escalateWhen: [
      "There is evidence of unusual access, data exfiltration, or credential compromise.",
      "A system change affects children's data, health data, or a sensitive government-linked workflow.",
      "A vendor-hosted platform lacks clear contractual security obligations.",
      "A feature requires broader access than the current role model supports safely."
    ],
    practiceNext: [
      { label: "Use a scenario", href: "../../scenarios/lost-phone-offline-forms/" },
      { label: "Open a tool", href: "../../tools/is-this-a-breach/" }
    ]
  }
];

const ngoToolPages = [
  {
    slug: "can-we-collect-this-data",
    title: "Decision Tree: Can We Collect This Data?",
    summary: "A quick decision aid for deciding whether a team should collect a specific data point in the first place.",
    audience: "Field teams, programme leads, and form designers",
    keyFocus: "Purpose limitation, minimisation, notice readiness, and special caution for children and sensitive contexts",
    whenToUse: "Use this before adding a new field to a form, asking for a document, taking a photo, or starting a new data-collection step.",
    steps: [
      "Step 1: Can you clearly state the specific programme purpose for this data point? If no, do not collect it yet.",
      "Step 2: Is this the minimum data needed for that purpose? If no, reduce the field list first.",
      "Step 3: Can the person be told in plain language what is being collected and why? If no, fix the notice before collecting.",
      "Step 4: Is the use covered by valid consent or a clearly applicable legitimate-use basis? If no, pause and resolve the legal basis.",
      "Step 5: If the data involves a child, health information, recordings, or identifiable photos, have you checked the added safeguards and boundaries? If no, escalate."
    ],
    outcomes: [
      "Proceed only when the purpose, minimum data set, notice, and legal basis are all clear.",
      "Use a safer alternative such as an aggregated answer, a narrower field, or no collection at all when the exact data point is not essential."
    ],
    relatedLinks: [
      { label: "Role guide", href: "../../roles/field-staff-fellows/" },
      { label: "Scenario", href: "../../scenarios/beneficiary-refuses-one-field/" }
    ]
  },
  {
    slug: "is-this-a-breach",
    title: "Decision Tree: Is This a Breach?",
    summary: "A fast triage tool for deciding whether an incident should be treated as a personal data breach and escalated immediately.",
    audience: "All NGO staff, especially field teams, programme officers, and technical owners",
    keyFocus: "Unauthorised access, wrong sharing, loss of devices, accidental disclosure, and early escalation",
    whenToUse: "Use this the moment a device is lost, a file is sent wrongly, a system account looks compromised, or personal data may have been seen by someone who should not have it.",
    steps: [
      "Step 1: Did personal data become unavailable, exposed, shared, changed, or accessed without authorisation? If yes, treat it as a breach candidate.",
      "Step 2: Was a device, spreadsheet, account, chat message, or printed list involved? If yes, assume evidence must be preserved and escalate.",
      "Step 3: Can you confirm the data stayed fully within authorised access and no confidentiality, integrity, or availability issue occurred? If no, keep treating it as a breach candidate.",
      "Step 4: Would delay make containment harder, such as remote wipe, access revocation, or wrong-recipient follow-up? If yes, act immediately and investigate in parallel."
    ],
    outcomes: [
      "If there is unauthorised access, wrong disclosure, loss, destruction, or unavailability affecting personal data, escalate as a breach immediately.",
      "When unsure, treat it as a breach first and refine the facts after containment starts."
    ],
    relatedLinks: [
      { label: "Checklist", href: "../../tools/breach-first-response-checklist/" },
      { label: "Scenario", href: "../../scenarios/lost-phone-offline-forms/" }
    ]
  },
  {
    slug: "breach-first-response-checklist",
    title: "Checklist: Breach First Response",
    summary: "A practical first-response checklist for the first hour and first six hours after discovering a likely breach.",
    audience: "Programme leads, IT or platform teams, and first discoverers of incidents",
    keyFocus: "Containment, evidence preservation, affected-data scoping, and fast escalation",
    whenToUse: "Use this as soon as a likely breach is discovered, especially for lost devices, wrong sharing, unauthorised system access, or compromised accounts.",
    steps: [
      "Immediate containment: preserve evidence, stop further spread, and trigger remote wipe, credential revocation, or wrong-recipient follow-up as relevant.",
      "Scope quickly: identify what categories of personal data were involved, how many people may be affected, and whether the incident is still active.",
      "Notify internally without delay: bring in the responsible technical and programme escalation path immediately rather than waiting for a finished investigation.",
      "Prepare beneficiary and regulator communication in parallel: initial reporting should not wait for perfect information."
    ],
    outcomes: [
      "The first goal is to contain and document, not to hide or quietly fix the incident.",
      "A timely, incomplete report is better than a late report after the evidence has already shifted."
    ],
    relatedLinks: [
      { label: "Decision tree", href: "../../tools/is-this-a-breach/" },
      { label: "Role guide", href: "../../roles/programme-officer/" }
    ]
  },
  {
    slug: "consent-notice-review-checklist",
    title: "Checklist: Consent Notice Review",
    summary: "A short review aid for checking whether a notice and consent flow are understandable, itemised, and specific enough before use.",
    audience: "Programme officers, field leads, and anyone preparing enrolment or media-consent materials",
    keyFocus: "Standalone notice, itemised fields, specific purpose, withdrawal path, and documentation quality",
    whenToUse: "Use this before approving a beneficiary form, verbal-consent process, photo consent sheet, or translated notice.",
    steps: [
      "Check that the notice stands on its own and is not buried inside a long agreement.",
      "Check that the exact fields being collected are itemised rather than hidden behind broad wording.",
      "Check that the purpose is specific and understandable, not 'all future uses'.",
      "Check that the withdrawal route and contact point are clearly explained.",
      "Check that the documentation route fits the setting, including witness-backed verbal consent where needed."
    ],
    outcomes: [
      "A notice is ready only when a person can understand it independently and decide meaningfully whether to agree.",
      "If one part is vague, expand it before use rather than relying on verbal explanation later."
    ],
    relatedLinks: [
      { label: "Role guide", href: "../../roles/programme-officer/" },
      { label: "Scenario", href: "../../scenarios/child-photo-donor-deck/" }
    ]
  }
];

const ngoScenarioPages = [
  {
    slug: "beneficiary-refuses-one-field",
    title: "Scenario: Beneficiary Refuses One Field",
    summary: "A field enrolment case about partial refusal and whether a team can keep collecting the rest of the form.",
    audience: "Field staff, outreach workers, and programme supervisors",
    setting: "A field worker is enrolling a beneficiary for a programme form that includes name, phone number, village, household size, and income range.",
    situation: "The beneficiary agrees to most questions but says they do not want to share income information.",
    bestResponse: "Respect the refusal on that field, continue only with the agreed questions if the programme can still proceed, and avoid inventing or forcing an answer.",
    whyBest: [
      "Consent should remain free and specific, which means a person can decline part of a data request.",
      "The field team should not convert refusal into pressure just because the form was originally designed with that field."
    ],
    riskyOptions: [
      "Recording a guessed or zero value to make the form complete.",
      "Telling the person the whole service or conversation cannot continue unless every field is answered, unless that is genuinely required and clearly explained beforehand.",
      "Promising that the field 'does not matter' and collecting it anyway."
    ],
    escalateNote: "Escalate if the programme cannot operate without that field, or if the field was not truly necessary and the form needs redesign.",
    relatedLinks: [
      { label: "Role guide", href: "../../roles/field-staff-fellows/" },
      { label: "Tool", href: "../../tools/can-we-collect-this-data/" }
    ]
  },
  {
    slug: "child-photo-donor-deck",
    title: "Scenario: Child Photo for Donor Deck",
    summary: "A common reporting case about whether a useful programme photograph can be reused for donor communication.",
    audience: "Programme officers, communications leads, and field teams",
    setting: "At a community activity, a team member has a strong photo of a child with staff during service delivery.",
    situation: "The photo would work well in a donor deck, but the original interaction focused on service delivery rather than media use.",
    bestResponse: "Treat donor-use photography as a separate purpose and obtain clear parental or guardian consent before using the child’s image for reports or external communication.",
    whyBest: [
      "Direct care or programme interaction does not automatically cover donor or storytelling reuse.",
      "Children’s data requires additional caution, and identifiable images are personal data."
    ],
    riskyOptions: [
      "Assuming the photo is fine because the child’s name will not be shown.",
      "Relying on the fact that the programme visit itself was legitimate to justify a different media purpose.",
      "Using the image internally first and deciding on external use later."
    ],
    escalateNote: "Escalate if no clear parental permission exists, if the image might reveal sensitive context, or if the team is unsure how broadly it will be circulated.",
    relatedLinks: [
      { label: "Role guide", href: "../../roles/programme-officer/" },
      { label: "Tool", href: "../../tools/consent-notice-review-checklist/" }
    ]
  },
  {
    slug: "lost-phone-offline-forms",
    title: "Scenario: Lost Phone with Offline Forms",
    summary: "A device-loss case focused on the first response when personal data may be sitting offline on a field phone.",
    audience: "Field implementors, programme leads, and technical support teams",
    setting: "A field phone used for offline form collection is lost while returning from programme work.",
    situation: "The device may contain unsynced forms with beneficiary details, and the staff member is unsure whether to wait until the phone turns up.",
    bestResponse: "Treat the loss as a likely breach, report it immediately, preserve the timeline, and start containment actions such as remote wipe or account review without waiting for certainty.",
    whyBest: [
      "A lost device with personal data is a breach candidate even before actual misuse is proven.",
      "Delay makes containment and documentation harder, especially when remote actions or log checks are time-sensitive."
    ],
    riskyOptions: [
      "Waiting to see if the phone is recovered before telling anyone.",
      "Deleting central records quietly without preserving incident evidence.",
      "Assuming there is no issue because the device belonged to an internal team member."
    ],
    escalateNote: "Escalate to the designated technical and programme response path immediately and document what data the device likely held.",
    relatedLinks: [
      { label: "Role guide", href: "../../roles/developer-product-builder/" },
      { label: "Tool", href: "../../tools/is-this-a-breach/" }
    ]
  }
];

function renderNgoSitePage({
  title,
  eyebrow,
  heroTitle,
  intro,
  note,
  currentKey = "home",
  basePath = "./",
  bodyHtml,
  footer = "Hosted on GitHub Pages as a lightweight NGO DPDP learning site."
}) {
  const navItems = [
    { key: "home", label: "Home", href: `${basePath}` },
    { key: "quizzes", label: "Quizzes", href: `${basePath}quizzes/` },
    { key: "roles", label: "Roles", href: `${basePath}roles/` },
    { key: "scenarios", label: "Scenarios", href: `${basePath}scenarios/` },
    { key: "tools", label: "Tools", href: `${basePath}tools/` },
    { key: "about", label: "About", href: `${basePath}about/` }
  ];

  const navHtml = navItems.map((item) => {
    const activeClass = item.key === currentKey ? " nav-link active" : " nav-link";
    const ariaCurrent = item.key === currentKey ? ' aria-current="page"' : "";
    return `          <a class="${activeClass.trim()}" href="${item.href}"${ariaCurrent}>${item.label}</a>`;
  }).join("\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <style>
    :root {
      --brand: #e4572e;
      --brand-dark: #8a3420;
      --brand-soft: #fff2ec;
      --brand-soft-2: #fde6df;
      --ink: #1f1f1f;
      --muted: #5b5b5b;
      --line: #ead4cc;
      --bg: #ffffff;
      --card: #ffffff;
      --success: #1f8f4e;
      --shadow: 0 18px 40px rgba(122, 36, 16, 0.09);
      --toolbar-shadow: 0 10px 24px rgba(54, 54, 54, 0.08);
      --zoom: 1;
      --body-size: clamp(16px, calc(16px * var(--zoom)), 19px);
      --small-size: clamp(13px, calc(13px * var(--zoom)), 15px);
      --title-size: clamp(2rem, calc(2.2rem * var(--zoom)), 3rem);
      --card-title: clamp(1.2rem, calc(1.25rem * var(--zoom)), 1.6rem);
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      color: var(--ink);
      background:
        radial-gradient(circle at top right, rgba(228, 87, 46, 0.08), transparent 24%),
        linear-gradient(180deg, #fffdfc 0%, #ffffff 20%, #ffffff 100%);
      font-size: var(--body-size);
      line-height: 1.6;
    }
    .shell {
      max-width: 1080px;
      margin: 0 auto;
      padding: 88px 20px 56px;
    }
    .toolbar {
      position: sticky;
      top: 12px;
      z-index: 20;
      display: flex;
      justify-content: center;
      margin: 0 auto 18px;
    }
    .toolbar-inner {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      padding: 10px 12px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.96);
      border: 1px solid rgba(228, 87, 46, 0.18);
      box-shadow: var(--toolbar-shadow);
      backdrop-filter: blur(12px);
    }
    .toolbar-label,
    .zoom-readout {
      color: var(--muted);
      font-size: var(--small-size);
      font-weight: 700;
    }
    .tool-btn {
      border: 1px solid rgba(228, 87, 46, 0.22);
      background: var(--card);
      color: var(--ink);
      border-radius: 999px;
      padding: 11px 16px;
      min-width: 46px;
      font-size: var(--small-size);
      font-weight: 700;
      cursor: pointer;
    }
    .tool-btn:hover,
    .tool-btn:focus-visible,
    .nav-link:hover,
    .nav-link:focus-visible,
    .cta-link:hover,
    .cta-link:focus-visible {
      outline: none;
      border-color: var(--brand);
      box-shadow: 0 0 0 3px rgba(228, 87, 46, 0.14);
    }
    .zoom-readout {
      min-width: 58px;
      text-align: center;
    }
    .hero,
    .nav-wrap,
    .panel,
    .resource-card,
    .spotlight {
      border: 1px solid var(--line);
      border-radius: 28px;
      background: linear-gradient(180deg, #ffffff 0%, #fffaf7 100%);
      box-shadow: var(--shadow);
    }
    .hero,
    .panel,
    .spotlight {
      padding: 30px;
    }
    .hero {
      margin-bottom: 20px;
    }
    .nav-wrap {
      padding: 14px;
      margin-bottom: 24px;
    }
    .nav-list {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .nav-link,
    .cta-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 12px 18px;
      border-radius: 999px;
      border: 1px solid rgba(228, 87, 46, 0.2);
      color: var(--ink);
      text-decoration: none;
      background: #fff;
      font-size: var(--small-size);
      font-weight: 700;
    }
    .nav-link.active,
    .cta-link.primary {
      background: var(--brand);
      color: #fff;
      border-color: transparent;
    }
    .eyebrow {
      margin: 0 0 8px;
      color: var(--brand-dark);
      font-size: var(--small-size);
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }
    h1, h2, h3 {
      margin-top: 0;
    }
    h1 {
      margin-bottom: 14px;
      font-size: var(--title-size);
      line-height: 1.12;
    }
    .hero p,
    .panel p,
    .resource-card p,
    .spotlight p {
      margin: 0;
      color: #353535;
    }
    .hero-note {
      margin-top: 16px;
      padding: 14px 16px;
      border-left: 4px solid var(--brand);
      border-radius: 16px;
      background: var(--brand-soft);
      color: #3f312c;
    }
    .section-title {
      margin: 0 0 16px;
      font-size: clamp(1.35rem, calc(1.45rem * var(--zoom)), 1.8rem);
    }
    .grid {
      display: grid;
      gap: 18px;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    }
    .resource-card {
      padding: 24px;
    }
    .badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 14px;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      padding: 7px 12px;
      border-radius: 999px;
      background: var(--brand-soft);
      color: var(--brand-dark);
      font-size: var(--small-size);
      font-weight: 700;
    }
    .badge.success {
      background: #e8f7ee;
      color: var(--success);
    }
    .resource-card h3,
    .spotlight h2,
    .panel h2 {
      margin-bottom: 10px;
      font-size: var(--card-title);
      line-height: 1.2;
    }
    .resource-card p {
      margin-bottom: 14px;
    }
    .meta-list,
    .bullet-list {
      display: grid;
      gap: 10px;
      color: var(--muted);
      font-size: var(--small-size);
      margin: 14px 0 20px;
    }
    .content-stack {
      display: grid;
      gap: 24px;
    }
    .footer {
      margin-top: 28px;
      color: var(--muted);
      font-size: var(--small-size);
      text-align: center;
    }
    @media (max-width: 640px) {
      .shell {
        padding: 84px 16px 42px;
      }
      .hero,
      .panel,
      .spotlight,
      .resource-card {
        border-radius: 22px;
        padding: 20px;
      }
      .toolbar-inner,
      .nav-list {
        justify-content: center;
      }
      .cta-link,
      .nav-link {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="shell">
    <div class="toolbar" aria-label="Reading controls">
      <div class="toolbar-inner">
        <span class="toolbar-label">View</span>
        <button class="tool-btn" id="zoomOutBtn" type="button" aria-label="Zoom out">A-</button>
        <span class="zoom-readout" id="zoomReadout">100%</span>
        <button class="tool-btn" id="zoomInBtn" type="button" aria-label="Zoom in">A+</button>
      </div>
    </div>
    <section class="hero">
      <p class="eyebrow">${escapeHtml(eyebrow)}</p>
      <h1>${escapeHtml(heroTitle)}</h1>
      <p>${escapeHtml(intro)}</p>
      <div class="hero-note">${escapeHtml(note)}</div>
    </section>
    <nav class="nav-wrap" aria-label="NGO learning navigation">
      <div class="nav-list">
${navHtml}
      </div>
    </nav>
    <div class="content-stack">
${bodyHtml}
    </div>
    <p class="footer">${escapeHtml(footer)}</p>
  </div>
  <script>
    (function () {
      const root = document.documentElement;
      const zoomReadout = document.getElementById("zoomReadout");
      const zoomInBtn = document.getElementById("zoomInBtn");
      const zoomOutBtn = document.getElementById("zoomOutBtn");
      let zoom = 1;

      function applyZoom() {
        root.style.setProperty("--zoom", zoom.toFixed(2));
        zoomReadout.textContent = Math.round(zoom * 100) + "%";
        zoomOutBtn.disabled = zoom <= 0.9;
        zoomInBtn.disabled = zoom >= 1.2;
      }

      zoomOutBtn.addEventListener("click", function () {
        zoom = Math.max(0.9, Math.round((zoom - 0.05) * 100) / 100);
        applyZoom();
      });

      zoomInBtn.addEventListener("click", function () {
        zoom = Math.min(1.2, Math.round((zoom + 0.05) * 100) / 100);
        applyZoom();
      });

      applyZoom();
    }());
  </script>
</body>
</html>`;
}

function renderNgoSectionCard(section, hrefPrefix = ".") {
  return `        <article class="resource-card">
          <div class="badge-row">
            <span class="badge">${escapeHtml(section.badge)}</span>
          </div>
          <h3>${escapeHtml(section.title)}</h3>
          <p>${escapeHtml(section.description)}</p>
          <div class="meta-list">
            <div>${escapeHtml(section.note)}</div>
          </div>
          <a class="cta-link primary" href="${withHrefPrefix(section.href, hrefPrefix)}">Open ${escapeHtml(section.title)}</a>
        </article>`;
}

function renderNgoHubResourceCard(item) {
  const focusLine = item.keyFocus ?? item.whenToUse ?? item.setting ?? "Practical DPDP guidance for NGO teams.";
  return `        <article class="resource-card">
          <div class="badge-row">
            <span class="badge success">Live now</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <div class="meta-list">
            <div>Audience: ${escapeHtml(item.audience)}</div>
            <div>Focus: ${escapeHtml(focusLine)}</div>
          </div>
          <a class="cta-link primary" href="./${escapeHtml(item.slug)}/">Open page</a>
        </article>`;
}

function renderBulletList(items) {
  return items.map((item) => `          <div>${escapeHtml(item)}</div>`).join("\n");
}

function renderNgoActionLinks(links) {
  return links.map((link) => `          <a class="cta-link" href="${link.href}">${escapeHtml(link.label)}</a>`).join("\n");
}

function renderRoleDetailHtml(page) {
  return renderNgoSitePage({
    title: page.title,
    eyebrow: "Role guide",
    heroTitle: page.title,
    intro: page.summary,
    note: "This page is designed for quick practical use. It focuses on safe defaults and escalation points rather than legal jargon.",
    currentKey: "roles",
    basePath: "../../",
    bodyHtml: `      <section class="panel">
        <h2 class="section-title">What this role usually handles</h2>
        <div class="bullet-list">
${renderBulletList(page.whatYouHandle)}
        </div>
      </section>
      <section class="panel">
        <h2 class="section-title">Key DPDP responsibilities</h2>
        <div class="bullet-list">
${renderBulletList(page.responsibilities)}
        </div>
      </section>
      <section class="panel">
        <h2 class="section-title">Red flags</h2>
        <div class="bullet-list">
${renderBulletList(page.redFlags)}
        </div>
      </section>
      <section class="panel">
        <h2 class="section-title">Safe default actions</h2>
        <div class="bullet-list">
${renderBulletList(page.safeDefaults)}
        </div>
      </section>
      <section class="panel">
        <h2 class="section-title">Escalate when</h2>
        <div class="bullet-list">
${renderBulletList(page.escalateWhen)}
        </div>
      </section>
      <section class="panel">
        <h2 class="section-title">Practice next</h2>
        <div class="nav-list">
${renderNgoActionLinks(page.practiceNext)}
        </div>
      </section>`
  });
}

function renderToolDetailHtml(page) {
  return renderNgoSitePage({
    title: page.title,
    eyebrow: "Decision aid",
    heroTitle: page.title,
    intro: page.summary,
    note: page.whenToUse,
    currentKey: "tools",
    basePath: "../../",
    bodyHtml: `      <section class="panel">
        <h2 class="section-title">When to use this tool</h2>
        <div class="bullet-list">
          <div>${escapeHtml(page.whenToUse)}</div>
        </div>
      </section>
      <section class="panel">
        <h2 class="section-title">Steps</h2>
        <div class="bullet-list">
${renderBulletList(page.steps)}
        </div>
      </section>
      <section class="panel">
        <h2 class="section-title">What good output looks like</h2>
        <div class="bullet-list">
${renderBulletList(page.outcomes)}
        </div>
      </section>
      <section class="panel">
        <h2 class="section-title">Use with</h2>
        <div class="nav-list">
${renderNgoActionLinks(page.relatedLinks)}
        </div>
      </section>`
  });
}

function renderScenarioDetailHtml(page) {
  return renderNgoSitePage({
    title: page.title,
    eyebrow: "Scenario lab",
    heroTitle: page.title,
    intro: page.summary,
    note: "Read the situation first, decide what should happen next, and then compare your instinct with the guided answer.",
    currentKey: "scenarios",
    basePath: "../../",
    bodyHtml: `      <section class="panel">
        <h2 class="section-title">Setting</h2>
        <div class="bullet-list">
          <div>${escapeHtml(page.setting)}</div>
        </div>
      </section>
      <section class="panel">
        <h2 class="section-title">Situation</h2>
        <div class="bullet-list">
          <div>${escapeHtml(page.situation)}</div>
        </div>
      </section>
      <section class="panel">
        <h2 class="section-title">Best response</h2>
        <div class="bullet-list">
          <div>${escapeHtml(page.bestResponse)}</div>
        </div>
      </section>
      <section class="panel">
        <h2 class="section-title">Why this is the safest choice</h2>
        <div class="bullet-list">
${renderBulletList(page.whyBest)}
        </div>
      </section>
      <section class="panel">
        <h2 class="section-title">Risky options to avoid</h2>
        <div class="bullet-list">
${renderBulletList(page.riskyOptions)}
        </div>
      </section>
      <section class="panel">
        <h2 class="section-title">Escalation note</h2>
        <div class="bullet-list">
          <div>${escapeHtml(page.escalateNote)}</div>
        </div>
      </section>
      <section class="panel">
        <h2 class="section-title">Related pages</h2>
        <div class="nav-list">
${renderNgoActionLinks(page.relatedLinks)}
        </div>
      </section>`
  });
}

function renderNgoLandingHtml(latestQuiz) {
  const latestCard = latestQuiz ? `      <section class="spotlight">
        <div class="badge-row">
          <span class="badge success">Latest quiz live</span>
          <span class="badge">Quiz ${String(latestQuiz.number).padStart(2, "0")}</span>
        </div>
        <h2>Latest release: DPDP Quiz ${String(latestQuiz.number).padStart(2, "0")} | ${escapeHtml(genericizeQuiz(latestQuiz).shortTitle)}</h2>
        <p>${escapeHtml(genericizeQuiz(latestQuiz).cardDescription)}</p>
        <div class="meta-list">
          <div>Audience: ${escapeHtml(genericizeQuiz(latestQuiz).audience)}</div>
          <div>Focus: ${escapeHtml(genericizeQuiz(latestQuiz).focus)}</div>
        </div>
        <div class="nav-list">
          <a class="cta-link primary" href="./${folderNameFor(latestQuiz)}/">Open latest quiz</a>
          <a class="cta-link" href="./quizzes/">Browse all quizzes</a>
        </div>
      </section>` : "";

  const sectionCards = ngoSectionCatalog.map((section) => renderNgoSectionCard(section)).join("\n");
  return renderNgoSitePage({
    title: "DPDP Learning Hub for Indian NGOs",
    eyebrow: "Digital Personal Data Protection",
    heroTitle: "DPDP Learning Hub for Indian NGOs",
    intro: "This NGO learning site now has a dedicated landing page, a separate quiz hub, and section hubs for the next digital capacity-building formats we will release online.",
    note: "The quiz pipeline stays intact. New sections are being staged in the same GitHub Pages site so future capacity-building formats can grow without disturbing the daily quiz stream.",
    currentKey: "home",
    basePath: "./",
    bodyHtml: `${latestCard}
      <section class="panel">
        <h2 class="section-title">Choose a learning path</h2>
        <div class="grid">
${sectionCards}
        </div>
      </section>`
  });
}

function renderNgoSectionHubHtml(sectionKey) {
  const pageMap = {
    roles: {
      title: "NGO Roles Hub",
      eyebrow: "Role-based guidance",
      heroTitle: "Role-based DPDP guidance for NGO teams",
      intro: "This section now includes the first role guides for NGO teams that collect, supervise, or technically manage personal data.",
      note: "Use these pages for onboarding, refresher practice, and clear escalation defaults."
    },
    scenarios: {
      title: "NGO Scenario Hub",
      eyebrow: "Scenario labs",
      heroTitle: "Scenario labs for practical DPDP judgment",
      intro: "This section now includes realistic NGO situations where users can test their judgment and compare it with guided reasoning.",
      note: "Scenario labs are designed to complement quizzes by focusing on applied judgment rather than only right or wrong recall."
    },
    tools: {
      title: "NGO Tools Hub",
      eyebrow: "Decision aids",
      heroTitle: "Digital DPDP tools for NGO implementation",
      intro: "This section now includes practical decision trees and checklists that teams can use during actual field, programme, and platform work.",
      note: "The aim is to make recurring compliance decisions faster, clearer, and easier to repeat across teams."
    },
    about: {
      title: "About This NGO Site",
      eyebrow: "Scope and use",
      heroTitle: "How to use this NGO DPDP learning site",
      intro: "This section explains what is already live, what is being added next, and how the NGO site stays separate from the Piramal Foundation surfaces.",
      note: "The NGO site is built as a generic, practical learning surface for Indian NGOs and related teams working on DPDP readiness."
    }
  };

  const page = pageMap[sectionKey];
  const libraryMap = {
    roles: ngoRolePages,
    scenarios: ngoScenarioPages,
    tools: ngoToolPages
  };
  const bodyHtml = sectionKey === "about"
    ? `      <section class="panel">
        <h2 class="section-title">Current site status</h2>
        <div class="bullet-list">
          <div>The quiz stream is live and continues to publish from the existing queue.</div>
          <div>The root NGO page is now a landing page, while quizzes have a dedicated section at <code>/ngo/quizzes/</code>.</div>
          <div>Roles, Scenarios, and Tools now have stable hubs so we can add content without changing the route structure again.</div>
          <div>PF-specific and NGO-specific surfaces remain separate in wording and navigation.</div>
        </div>
      </section>`
    : `      <section class="panel">
        <h2 class="section-title">Live pages in this section</h2>
        <div class="grid">
${(libraryMap[sectionKey] ?? []).map(renderNgoHubResourceCard).join("\n")}
        </div>
      </section>`;

  return renderNgoSitePage({
    title: page.title,
    eyebrow: page.eyebrow,
    heroTitle: page.heroTitle,
    intro: page.intro,
    note: page.note,
    currentKey: sectionKey,
    basePath: "../",
    bodyHtml
  });
}

function writeNgoContentPages() {
  for (const page of ngoRolePages) {
    const dir = path.join(ngoDir, "roles", page.slug);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, "index.html"), renderRoleDetailHtml(page), "utf8");
  }

  for (const page of ngoToolPages) {
    const dir = path.join(ngoDir, "tools", page.slug);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, "index.html"), renderToolDetailHtml(page), "utf8");
  }

  for (const page of ngoScenarioPages) {
    const dir = path.join(ngoDir, "scenarios", page.slug);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, "index.html"), renderScenarioDetailHtml(page), "utf8");
  }
}

function listQuizDirs(baseDir) {
  if (!fs.existsSync(baseDir)) return [];
  return fs.readdirSync(baseDir, { withFileTypes: true })
    .filter((entry) => {
      if (!entry.isDirectory() || !/^quiz-\d+/.test(entry.name)) {
        return false;
      }
      return fs.existsSync(path.join(baseDir, entry.name, "index.html"));
    })
    .map((entry) => entry.name)
    .sort((a, b) => extractQuizNumber(a) - extractQuizNumber(b) || a.localeCompare(b));
}

function extractQuizNumber(folderName) {
  const match = folderName.match(/^quiz-(\d+)/);
  return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
}

function copyDirectoryRecursive(sourceDir, targetDir) {
  ensureDir(targetDir);
  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);
    if (entry.isDirectory()) {
      copyDirectoryRecursive(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

function extractQuestionTexts(html) {
  const matches = [...html.matchAll(/text:\s*"([^"]+)"/g), ...html.matchAll(/"text":\s*"([^"]+)"/g)];
  return matches.map((match) => match[1]);
}

function assertNoExactRepeats() {
  const publishedDirs = listQuizDirs(docsDir);
  const queuedDirs = listQuizDirs(queueDir);
  const generatedFolders = new Set(quizCatalog.map(folderNameFor));
  const baselineFolder = folderNameFor(quizCatalog[0]);
  const existingQuestions = new Set();

  for (const folder of publishedDirs) {
    if (generatedFolders.has(folder) && folder !== baselineFolder) continue;
    const file = path.join(docsDir, folder, "index.html");
    if (!fs.existsSync(file)) continue;
    const html = fs.readFileSync(file, "utf8");
    for (const text of extractQuestionTexts(html)) {
      existingQuestions.add(text);
    }
  }

  for (const folder of queuedDirs) {
    if (generatedFolders.has(folder)) continue;
    const file = path.join(queueDir, folder, "index.html");
    if (!fs.existsSync(file)) continue;
    const html = fs.readFileSync(file, "utf8");
    for (const text of extractQuestionTexts(html)) {
      existingQuestions.add(text);
    }
  }

  for (const quiz of quizCatalog.filter((item) => item.number >= 2).sort((a, b) => a.number - b.number)) {
    let repeatCount = 0;
    for (const question of quiz.questions) {
      if (existingQuestions.has(question.text)) {
        repeatCount += 1;
      }
    }
    const allowedRepeats = quiz.number <= 10 ? 0 : 1;
    if (repeatCount > allowedRepeats) {
      throw new Error(`Exact question repeat limit exceeded for quiz ${quiz.number}: ${repeatCount} repeats`);
    }
    for (const question of quiz.questions) {
      existingQuestions.add(question.text);
    }
  }
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function loadManifest() {
  if (!fs.existsSync(manifestPath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
}

function getTodayLocalDate() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Calcutta"
  }).format(new Date());
}

function reconcilePublishedAndQueuedCopies() {
  const published = new Set(listQuizDirs(docsDir));
  for (const folder of listQuizDirs(queueDir)) {
    if (published.has(folder)) {
      fs.rmSync(path.join(queueDir, folder), { recursive: true, force: true });
    }
  }
}

function writeQueueBatch(overwriteExisting = false) {
  ensureDir(queueDir);
  if (!fs.existsSync(queueReadme)) {
    fs.writeFileSync(queueReadme, "# Release queue\n", "utf8");
  }

  for (const quiz of quizCatalog.filter((item) => item.number >= 2)) {
    const folder = folderNameFor(quiz);
    const docsPath = path.join(docsDir, folder);
    const queuePath = path.join(queueDir, folder);

    if (fs.existsSync(docsPath)) {
      continue;
    }

    ensureDir(queuePath);
    fs.copyFileSync(logoSource, path.join(queuePath, "PF_Logo.jpg"));
    if (overwriteExisting || !fs.existsSync(path.join(queuePath, "index.html"))) {
      fs.writeFileSync(path.join(queuePath, "index.html"), renderQuizHtml(quiz), "utf8");
    }
  }
}

function writePublishedGeneratedPages(overwriteExisting = false) {
  for (const quiz of quizCatalog.filter((item) => item.number >= 2)) {
    const docsPath = path.join(docsDir, folderNameFor(quiz));
    if (!fs.existsSync(docsPath)) {
      continue;
    }
    if (!fs.existsSync(path.join(docsPath, "PF_Logo.jpg"))) {
      fs.copyFileSync(logoSource, path.join(docsPath, "PF_Logo.jpg"));
    }
    if (overwriteExisting || !fs.existsSync(path.join(docsPath, "index.html"))) {
      fs.writeFileSync(path.join(docsPath, "index.html"), renderQuizHtml(quiz), "utf8");
    }
  }
}

function writeNgoPublishedPages(overwriteExisting = false) {
  ensureDir(ngoDir);
  for (const quiz of quizCatalog.filter((item) => item.number >= 1)) {
    const docsPath = path.join(docsDir, folderNameFor(quiz));
    if (!fs.existsSync(docsPath)) {
      continue;
    }
    const ngoPath = path.join(ngoDir, folderNameFor(quiz));
    ensureDir(ngoPath);
    if (overwriteExisting || !fs.existsSync(path.join(ngoPath, "index.html"))) {
      fs.writeFileSync(path.join(ngoPath, "index.html"), renderNgoQuizHtml(quiz), "utf8");
    }
  }
}

function publishNextQueuedQuiz() {
  const queuedFolders = listQuizDirs(queueDir);
  if (queuedFolders.length === 0) {
    return null;
  }

  const nextFolder = queuedFolders[0];
  const fromPath = path.join(queueDir, nextFolder);
  const toPath = path.join(docsDir, nextFolder);

  if (!fs.existsSync(toPath)) {
    try {
      fs.renameSync(fromPath, toPath);
    } catch {
      copyDirectoryRecursive(fromPath, toPath);
      fs.rmSync(fromPath, { recursive: true, force: true });
    }
  }

  return nextFolder;
}

function writeManifest(publishedFolder) {
  const queueFolders = listQuizDirs(queueDir);
  const existingManifest = loadManifest();
  const publishedAt = publishedFolder ? new Date().toISOString() : existingManifest?.lastPublishedAt ?? null;
  const publishedOnLocalDate = publishedFolder ? getTodayLocalDate() : existingManifest?.lastPublishedOnLocalDate ?? null;
  const payload = {
    updatedAt: new Date().toISOString(),
    publishedThisRun: publishedFolder ?? existingManifest?.publishedThisRun ?? null,
    latestPublishedFolder: publishedFolder ?? existingManifest?.latestPublishedFolder ?? null,
    lastPublishedAt: publishedAt,
    lastPublishedOnLocalDate: publishedOnLocalDate,
    lastNotificationSentFor: existingManifest?.lastNotificationSentFor ?? null,
    queuedFolders: queueFolders,
    queuedCount: queueFolders.length
  };
  fs.writeFileSync(manifestPath, JSON.stringify(payload, null, 2) + "\n", "utf8");
}

function writeHub() {
  const publishedDaily = listQuizDirs(docsDir)
    .map((folder) => quizCatalog.find((quiz) => folderNameFor(quiz) === folder))
    .filter(Boolean);
  fs.writeFileSync(path.join(docsDir, "index.html"), renderHubHtml(publishedDaily), "utf8");
}

function writeNgoHub() {
  ensureDir(ngoDir);
  ensureDir(ngoQuizHubDir);
  ensureDir(path.join(ngoDir, "roles"));
  ensureDir(path.join(ngoDir, "scenarios"));
  ensureDir(path.join(ngoDir, "tools"));
  ensureDir(path.join(ngoDir, "about"));
  writeNgoContentPages();
  const publishedDaily = listQuizDirs(docsDir)
    .map((folder) => quizCatalog.find((quiz) => folderNameFor(quiz) === folder))
    .filter(Boolean);
  fs.writeFileSync(path.join(ngoDir, "index.html"), renderNgoLandingHtml(publishedDaily.sort((a, b) => a.number - b.number).at(-1) ?? null), "utf8");
  fs.writeFileSync(path.join(ngoQuizHubDir, "index.html"), renderNgoHubHtml(publishedDaily), "utf8");
  fs.writeFileSync(path.join(ngoDir, "roles", "index.html"), renderNgoSectionHubHtml("roles"), "utf8");
  fs.writeFileSync(path.join(ngoDir, "scenarios", "index.html"), renderNgoSectionHubHtml("scenarios"), "utf8");
  fs.writeFileSync(path.join(ngoDir, "tools", "index.html"), renderNgoSectionHubHtml("tools"), "utf8");
  fs.writeFileSync(path.join(ngoDir, "about", "index.html"), renderNgoSectionHubHtml("about"), "utf8");
}

function latestPublishedQuiz() {
  return listQuizDirs(docsDir)
    .map((folder) => quizCatalog.find((quiz) => folderNameFor(quiz) === folder))
    .filter(Boolean)
    .sort((a, b) => a.number - b.number)
    .at(-1) ?? null;
}

function renderWhatsAppMessage(quiz) {
  const folder = folderNameFor(quiz);
  return [
    `${quiz.eyebrow}`,
    "",
    quiz.cardDescription,
    "",
    `https://abeezith.github.io/dpdp-knowledge/${folder}/`,
    "",
    "Note: with minimal and anonymous usage stats enabled. No. of visits and completion of quiz are captured"
  ].join("\n");
}

function writeLatestWhatsAppMessage() {
  const latestQuiz = latestPublishedQuiz();
  if (!latestQuiz) {
    return;
  }

  const nextContent = renderWhatsAppMessage(latestQuiz);
  const currentContent = fs.existsSync(latestWhatsAppMessagePath)
    ? fs.readFileSync(latestWhatsAppMessagePath, "utf8").trim()
    : null;

  if (currentContent !== nextContent) {
    fs.writeFileSync(latestWhatsAppMessagePath, `${nextContent}\n`, "utf8");
  }
}

function main() {
  const shouldPublishRequested = process.argv.includes("--publish");
  const shouldWriteHub = process.argv.includes("--write-hub");
  const shouldRefreshExisting = process.argv.includes("--refresh-existing");
  const shouldRefreshQueue = process.argv.includes("--refresh-queue");
  const existingManifest = loadManifest();
  const todayLocalDate = getTodayLocalDate();
  const alreadyPublishedToday = existingManifest?.lastPublishedOnLocalDate === todayLocalDate;

  reconcilePublishedAndQueuedCopies();
  assertNoExactRepeats();
  writeQueueBatch(shouldRefreshExisting || shouldRefreshQueue);
  reconcilePublishedAndQueuedCopies();
  if (shouldRefreshExisting) {
    writePublishedGeneratedPages(true);
  }
  const shouldPublish = shouldPublishRequested && !alreadyPublishedToday;
  const publishedFolder = shouldPublish ? publishNextQueuedQuiz() : null;
  if (shouldWriteHub) {
    writeHub();
    writeNgoHub();
  }
  writeNgoPublishedPages(shouldRefreshExisting || shouldWriteHub);
  writeManifest(publishedFolder);
  writeLatestWhatsAppMessage();

  const queuedCount = listQuizDirs(queueDir).length;
  const publishedDailyCount = listQuizDirs(docsDir).length;
  console.log(JSON.stringify({
    alreadyPublishedToday,
    publishedFolder,
    queuedCount,
    publishedDailyCount,
    todayLocalDate
  }, null, 2));
}

main();

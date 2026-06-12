import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const docsDir = path.join(root, "docs");
const queueDir = path.join(root, "release-queue");
const logoSource = path.join(docsDir, "quiz-01-role-field-scenarios", "PF_Logo.jpg");
const queueReadme = path.join(queueDir, "README.md");
const manifestPath = path.join(queueDir, "manifest.json");

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

function renderQuizHtml(quiz) {
  const previousQuiz = quiz.number > 1
    ? quizCatalog.find((item) => item.number === quiz.number - 1)
    : null;
  const previousHref = previousQuiz ? `../${folderNameFor(previousQuiz)}/` : "../";
  const previousLabel = previousQuiz ? `Open Quiz ${String(previousQuiz.number).padStart(2, "0")}` : "Go to quiz hub";
  const questionsJson = JSON.stringify(quiz.questions, null, 6);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(quiz.pageTitle)}</title>
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
      padding: 88px 20px 48px;
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
        padding: 82px 16px 40px;
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
      <p class="eyebrow">${escapeHtml(quiz.eyebrow)}</p>
      <h1>${escapeHtml(quiz.heroTitle)}</h1>
      <p>${escapeHtml(quiz.heroIntro)}</p>
      <div class="topics">
        ${quiz.topics.map((topic) => `<div class="topic"><strong>${escapeHtml(topic.label)}</strong>${escapeHtml(topic.text)}</div>`).join("")}
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

    function renderIntro() {
      app.hidden = true;
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
          ${escapeHtml(quiz.resultSummary)}
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

    loadPreferences();
    renderIntro();
  </script>
</body>
</html>`;
}

function renderCard(quiz) {
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
        <a class="quiz-link" href="./${folder}/">Open Quiz ${String(quiz.number).padStart(2, "0")}</a>
      </article>`;
}

function renderLegacyCard(card) {
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
        <a class="quiz-link" href="${card.href}">${escapeHtml(card.cta)}</a>
      </article>`;
}

function renderHubHtml(publishedDailyQuizzes) {
  const dailyCards = publishedDailyQuizzes
    .sort((a, b) => b.number - a.number)
    .map(renderCard)
    .join("\n");
  const legacyCards = legacyQuizzes.map(renderLegacyCard).join("\n");

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
    .sort();
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

  for (const quiz of quizCatalog.filter((item) => item.number >= 2)) {
    if (quiz.number <= 10) {
      for (const question of quiz.questions) {
        if (existingQuestions.has(question.text)) {
          throw new Error(`Exact question repeat detected before quiz 10: ${question.text}`);
        }
      }
    }
  }
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeQueueBatch() {
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
    fs.writeFileSync(path.join(queuePath, "index.html"), renderQuizHtml(quiz), "utf8");
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
    copyDirectoryRecursive(fromPath, toPath);
    fs.rmSync(fromPath, { recursive: true, force: true });
  }

  return nextFolder;
}

function writeManifest(publishedFolder) {
  const queueFolders = listQuizDirs(queueDir);
  const payload = {
    updatedAt: new Date().toISOString(),
    publishedThisRun: publishedFolder,
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

function main() {
  const shouldPublish = process.argv.includes("--publish");
  const shouldWriteHub = process.argv.includes("--write-hub");
  assertNoExactRepeats();
  writeQueueBatch();
  const publishedFolder = shouldPublish ? publishNextQueuedQuiz() : null;
  if (shouldWriteHub) {
    writeHub();
  }
  writeManifest(publishedFolder);

  const queuedCount = listQuizDirs(queueDir).length;
  const publishedDailyCount = listQuizDirs(docsDir).length;
  console.log(JSON.stringify({
    publishedFolder,
    queuedCount,
    publishedDailyCount
  }, null, 2));
}

main();

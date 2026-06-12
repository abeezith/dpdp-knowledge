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
          "Because rights handling, breach response, and good collection practice depend on people knowing what to do before the deadline",
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
          "Because teams cannot sensibly fix consent, security, retention, or sharing gaps without knowing what data exists and where",
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
  const existingManifest = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, "utf8"))
    : null;
  const payload = {
    updatedAt: new Date().toISOString(),
    publishedThisRun: publishedFolder ?? existingManifest?.publishedThisRun ?? null,
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

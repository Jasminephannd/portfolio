import React, { useState } from "react";
import avatar from "../assets/img/avatar.png";
import resumePdf from "../assets/img/jasminephan-resume.pdf";
import nemEnergyImg from "../assets/img/projects/nem-energy-pipeline.png";
import hackernewsImg from "../assets/img/projects/hackernews-data-engineering.png";
import salesDashboardImg from "../assets/img/projects/sales-dashboard.png";
import juristechneLogo from "../assets/img/experience/juristechne-logo.png";
import utsLogo from "../assets/img/experience/uts-logo.jpg";
import studynswLogo from "../assets/img/experience/studynsw-logo.jpg";
import nswgovLogo from "../assets/img/experience/nswgov-logo.png";
import researchLogo from "../assets/img/experience/research-logo.jpg";
import woolworthsLogo from "../assets/img/experience/woolworths-logo.png";
import studynswCert from "../assets/img/experience/studynsw-cert.png";
import nswgovCert from "../assets/img/experience/nswgov-cert.png";
import woolworthsCert from "../assets/img/experience/woolworths-cert.pdf";
import federationLogo from "../assets/img/qualifications/federation-logo.jpg";
import spjainLogo from "../assets/img/qualifications/spjain-logo.webp";
import geminiCert from "../assets/img/qualifications/gemini-cert.pdf";
import awsCert from "../assets/img/qualifications/aws-cert.pdf";
import sqlIntermediateCert from "../assets/img/qualifications/sql-intermediate-cert.png";
import matlabCert from "../assets/img/qualifications/matlab-cert.jpg";
import pandasCert from "../assets/img/qualifications/pandas-cert.png";
import matplotlibCert from "../assets/img/qualifications/matplotlib-cert.pdf";
import intermediatePythonCert from "../assets/img/qualifications/intermediate-python-cert.pdf";
import samplingInPythonCert from "../assets/img/qualifications/sampling-in-python-cert.pdf";
import yowLogo from "../assets/img/volunteer/yow-logo.jpg";
import destinationNswLogo from "../assets/img/volunteer/destination-nsw-logo.jpg";

/* ============================================================
   Everything on the page is driven by the objects below.
   ============================================================ */

const profile = {
  name: "Jasmine Phan",
  title: "Data Engineer",
  location: "Based in Sydney, Australia",
  about:
    "Motivated Data Engineer with hands-on experience building and maintaining data pipelines using Python, SQL, Neo4j, and AWS. Holds a Master of Data Science and has practical experience transforming messy, real-world data into structured, ML-ready datasets, supporting analytics and machine learning workflows. Seeking a Data Engineer role where I can design scalable, reliable data systems, collaborate closely with domain experts, and contribute to data platforms that power decision-making.",
  linkedin: "https://www.linkedin.com/in/jasminephannd/",
  github: "https://github.com/Jasminephannd",
  email: "jasminephannd@gmail.com",
  cvPath: resumePdf,
};

const skills = {
  "Programming & Querying": ["Python", "SQL", "R"],
  "Data Engineering & Databases": [
    "ETL Pipelines",
    "Data Ingestion",
    "Data Transformation",
    "Data Quality Checks",
    "Neo4j (Cypher)",
    "MySQL",
    "SQL Server",
    "MongoDB",
    "DynamoDB",
  ],
  "Cloud & DevOps": ["AWS", "Git", "Bitbucket"],
  "Analytics & BI": ["Excel", "Power BI", "Tableau", "SPSS"],
};

const softSkills = [
  "Strong communication skills and attention to detail",
  "Punctual, reliable, well presented, and highly motivated",
  "Works autonomously and in team environments",
  "Strong time management and problem-solving skills",
];

const hobbies = {
  Sports: ["Pickleball", "Running", "Volleyball", "Basketball", "Badminton", "Table Tennis"],
  Music: ["Piano", "Ukulele"],
};

/* PROJECTS — newest first. Add more entries below as needed. */
const projects = [
  {
    title: "NEM Energy Pipeline (Azure · Power BI)",
    description:
      "End-to-end Azure pipeline for Australia's National Electricity Market (AEMO). A Python C/I/D/F parser lands 5-minute dispatch data into a bronze/silver/gold lakehouse, a metadata-driven Azure Data Factory pipeline loads a SQL star schema, and Power BI surfaces pricing, renewable-share and data-quality insights.",
    image: nemEnergyImg,
    tags: ["Azure", "Azure Data Factory", "Azure SQL", "Python", "T-SQL", "Power BI", "Bicep", "Data Quality", "Star Schema"],
    href: "https://github.com/Jasminephannd/nem-energy-pipeline",
    report: "https://clear-jasmine-526.notion.site/NEM-Energy-Pipeline-Report-3aa5663db26b81d190b6d4eccecdcf18",
    date: "Jul 2026",
  },
  {
    title: "Hacker News Data Engineering Pipeline",
    description:
      "End-to-end ETL pipeline that ingests Hacker News data through a modern data stack – orchestrated with Airflow and Celery, staged in Postgres and S3, then catalogued with AWS Glue and queried via Athena.",
    image: hackernewsImg,
    tags: ["Python", "Airflow", "Celery", "Postgres", "AWS S3", "AWS Glue", "Athena", "ETL"],
    href: "https://github.com/Jasminephannd/hackernews-data-engineering",
    date: "Mar 2026",
  },
  {
    title: "Sales Performance Dashboard",
    description:
      "Interactive Tableau dashboards for sales managers and executives – tracking revenue trends year-over-year plus customer behaviour and segmentation, with dynamic filtering by product and location for data-driven decisions.",
    image: salesDashboardImg,
    tags: ["Tableau", "Data Visualization", "Business Intelligence", "Dashboard Design"],
    href: "https://github.com/Jasminephannd/sales_performance_dashboard",
    date: "Oct 2024",
  },
];

const experience = [
  {
    category: "Professional Experience",
    items: [
      {
        org: "JurisTechne (Legal Tech Startup), Sydney NSW",
        url: "https://juristechne.com/",
        logo: juristechneLogo,
        roles: [
          { role: "Data Engineer", period: "Apr 2025 – Jul 2026" },
          { role: "Data Engineer Intern", period: "Jan 2025 – Mar 2025" },
        ],
        bullets: [
          "Built and maintained Python-based ETL pipelines processing 300,000+ legal documents into analytics-ready and ML-ready datasets.",
          "Identified and resolved 40,000+ data quality and metadata inconsistencies, improving dataset reliability and downstream processing accuracy.",
          "Automated document ingestion, parsing, and transformation workflows for legislation, case law, and regulatory content across multiple Australian jurisdictions.",
          "Enhanced legal data schemas to support accurate extraction and representation of penalties, definitions, legal entities, and hierarchical document structures.",
          "Developed graph database ingestion workflows using Neo4j and supported vector database integrations for AI-powered semantic search applications.",
          "Developed and maintained data processing workflows using Python, Neo4j, and AWS, supporting scalable storage, transformation, and retrieval of legal datasets.",
          "Collaborated with AI researchers and legal domain experts to align data models, ontologies, and business requirements.",
        ],
        tags: ["Python", "SQL", "Neo4j", "AWS", "ETL Pipelines", "Data Ingestion", "Data Transformation", "Data Quality Checks", "MySQL", "Bitbucket"],
      },
    ],
  },
  {
    category: "Additional Experience",
    items: [
      {
        period: "Feb 2026 – Present",
        role: "Casual Academic Tutor",
        org: "University of Technology Sydney – Understanding Data and Statistical Design (Postgraduate)",
        url: "https://www.uts.edu.au/",
        logo: utsLogo,
        bullets: [
          "Facilitate postgraduate data analysis and statistics workshops using R.",
          "Support students in statistical modelling, data interpretation and coding.",
          "Assess assignments and provide structured academic feedback.",
        ],
        tags: ["R", "Statistics", "Data Analysis", "Teaching"],
      },
      {
        period: "Feb 2022 – Jan 2023",
        role: "Research Assistant",
        org: "FinTech & Cybersecurity Research",
        logo: researchLogo,
        bullets: [
          "Assisted with research-related work in FinTech and Cybersecurity domains using Confluence.",
          "Managed copyright clearance processes and summarised academic research articles.",
        ],
        tags: ["Research", "FinTech", "Cybersecurity", "Confluence"],
      },
    ],
  },
  {
    category: "Internships & Industry Projects",
    items: [
      {
        period: "Nov 2023 – Dec 2023",
        role: "Industry Project – StudyNSW JobsConnect",
        org: "Practera, Sydney NSW",
        url: "https://practera.com/",
        logo: studynswLogo,
        cert: studynswCert,
        programLink: "https://practera.com/saiep/",
        bullets: [
          "Consulted for an online platform connecting customers with beauty and wellness centres.",
          "Conducted market research and competitive analysis to support business expansion strategy.",
          "Developed investor outreach plan and stakeholder engagement strategy.",
        ],
        tags: ["Market Research", "Business Analysis", "Strategy", "Excel"],
      },
      {
        period: "Jul 2023",
        role: "NSW Government Virtual Internship Program Participant",
        org: "NSW Government",
        url: "https://www.nsw.gov.au/",
        logo: nswgovLogo,
        cert: nswgovCert,
        programLink: "https://www.psc.nsw.gov.au/virtual-internship-program",
        bullets: [
          "Analysed part-time employment trends in the NSW public sector using SAP Lumira.",
          "Examined male and female representation and sector-wise distribution across a four-year period.",
          "Produced data-driven insights to support workforce planning and policy decisions.",
        ],
        tags: ["Data Analysis", "SAP Lumira", "Excel", "Government"],
      },
      {
        period: "Jun 2020 – Aug 2020",
        role: "Woolworths Industry Interface Project",
        org: "SP Jain School of Global Management (Industry Collaboration)",
        url: "https://www.spjain.org/",
        logo: woolworthsLogo,
        credentialLink: woolworthsCert,
        bullets: [
          "Analysed Woolworths' call recording system and proposed improved form formats using script editor.",
          "Performed SPSS quantitative analysis including frequency and crosstab analyses on clean data.",
          "Identified challenges in forms and personnel practices at Woolworths Supply Chain and provided improvement recommendations.",
        ],
        tags: ["SPSS", "Data Analysis", "Data Transformation", "Supply Chain", "Excel"],
      },
    ],
  },
];

const education = [
  {
    period: "Jul 2022 – Jul 2024",
    degree: "Master of Data Science",
    degreeUrl: "https://www.federation.edu.au/courses/dcx9-master-of-data-science/",
    school: "Federation University (IIBIT Campus), Sydney NSW",
    url: "https://www.federation.edu.au/",
    logo: federationLogo,
    detail:
      "GPA 6.833 / 7 · Academic Commendation for Outstanding Academic Performance",
  },
  {
    period: "Sep 2019 – Jun 2022",
    degree: "Bachelor of Data Science",
    degreeUrl: "https://www.spjain.edu.au/programs/undergraduate/bachelor-of-data-science",
    school: "SP Jain School of Global Management, Sydney NSW",
    url: "https://www.spjain.org/",
    logo: spjainLogo,
    detail: "GPA 3.58 / 4.15 · Dean's Lister (2019) · Global Citizenship Award",
  },
];

const certifications = [
  {
    category: "Cloud",
    items: [
      { name: "Associate Cloud Engineer", issuer: "Google Cloud", date: "Feb 2025", expires: "Feb 2028", link: "https://www.credly.com/badges/f945f44e-a36a-421a-8004-724550400b8b/public_url" },
      { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services (AWS)", date: "Feb 2022", expires: "Feb 2025", expired: true, link: awsCert },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "Introduction to Neo4j Graph Data Science", issuer: "Neo4j", date: "Mar 2025", link: "https://graphacademy.neo4j.com/c/a50458ae-ac2d-447f-a047-5615abb19a0b/" },
      { name: "Cypher Fundamentals", issuer: "Neo4j", date: "Jan 2025", link: "https://graphacademy.neo4j.com/c/c47afb80-d861-42e4-b0e8-be27342878cd/" },
      { name: "Neo4j Fundamentals", issuer: "Neo4j", date: "Jan 2025", link: "https://graphacademy.neo4j.com/c/ccb33b99-5e11-4455-8622-0587d2826ea9/" },
      { name: "SQL (Intermediate)", issuer: "HackerRank", date: "Apr 2022", link: sqlIntermediateCert },
    ],
  },
  {
    category: "Programming & Data",
    items: [
      { name: "MATLAB Onramp", issuer: "MathWorks", date: "Mar 2024", link: matlabCert },
      { name: "Introduction to Data Visualization with Matplotlib", issuer: "DataCamp", date: "Jan 2023", link: matplotlibCert },
      { name: "Data Manipulation with pandas", issuer: "DataCamp", date: "Dec 2022", link: pandasCert },
      { name: "Sampling in Python", issuer: "DataCamp", date: "Nov 2022", link: samplingInPythonCert },
      { name: "Intermediate Python", issuer: "DataCamp", date: "Jul 2022", link: intermediatePythonCert },
    ],
  },
  {
    category: "AI & Education",
    items: [
      { name: "Gemini Certified Educator", issuer: "Google for Education", date: "Dec 2025", expires: "Dec 2028", link: geminiCert },
    ],
  },
];

const volunteering = [
  {
    period: "Dec 2024",
    role: "Event Volunteer",
    org: "YOW! Conferences, Sydney",
    url: "https://yowcon.com/",
    logo: yowLogo,
    detail:
      "Supported attendee registration and conference operations for a large-scale technology event.",
  },
  {
    period: "May – Jun 2023",
    role: "Guest Services & Way-Finding",
    org: "Vivid Sydney, Destination NSW",
    url: "https://www.vividsydney.com/",
    logo: destinationNswLogo,
    detail:
      "Assisted visitors and supported event operations during Australia's largest light, music and ideas festival.",
  },
];

/* ============================================================
   COMPONENT (you usually won't need to edit below this line)
   ============================================================ */

const Pill = ({ children }) => (
  <span className="inline-block px-2.5 py-1 rounded-full text-sm bg-navy_light text-navy mr-1 mb-1">
    {children}
  </span>
);

const SectionLabel = ({ children }) => (
  <p className="flex text-sm text-gray-600 font-mono uppercase tracking-wide">
    {children}
  </p>
);

/* Derive up to two initials from a company/org name for the monogram fallback. */
function initialsFromOrg(org) {
  const stop = new Set(["of", "the", "and", "for", "&"]);
  const cleaned = org.split(/[(,—–]|\s-\s/)[0].trim();
  const words = cleaned
    .split(/\s+/)
    .filter((w) => w && !stop.has(w.toLowerCase()));
  if (words.length === 0) return "•";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

/* Shared outlined-pill style for the experience action buttons/links. */
const actionBtn =
  "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-normal border border-navy text-navy hover:bg-navy hover:text-white transition-colors duration-200 cursor-pointer";

/* Bullet list + tag pills shared by single-role and grouped experience entries. */
function RoleDetails({ bullets, tags }) {
  return (
    <>
      <ul className="list-disc ml-5 mt-2 text-sm text-gray-600 space-y-1">
        {bullets.map((b, j) => (
          <li key={j}>{b}</li>
        ))}
      </ul>
      <div className="mt-3">
        {tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </>
  );
}

/* Org / school name, rendered as a link to its website when a url is provided. */
function OrgName({ name, url }) {
  if (!url) return name;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="hover:text-navy hover:underline underline-offset-2 transition-colors duration-200"
    >
      {name}
    </a>
  );
}

/* Small square company logo; falls back to an initials monogram when no image. */
function CompanyLogo({ name, src, size = "w-12 h-12" }) {
  if (src) {
    return (
      <img
        src={src}
        alt={`${name} logo`}
        className={`${size} rounded-lg object-contain bg-white border border-gray-200 flex-none`}
      />
    );
  }
  return (
    <div className={`${size} rounded-lg bg-navy_light text-navy flex items-center justify-center text-sm font-semibold flex-none`}>
      {initialsFromOrg(name)}
    </div>
  );
}

function Sidebar() {
  const [emailCopied, setEmailCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(profile.email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  }

  return (
    <div className="sm:p-4 p-2">
      <div className="sticky sm:top-4 top-2">
        <div className="md:flex-none md:w-96 sm:p-6 p-4 rounded-2xl bg-white shadow-lg shadow-gray-100 border border-gray-200">
          <img
            className="mb-4 h-20 w-20 rounded-full lg:w-24 lg:h-24 object-cover"
            src={avatar}
            alt={profile.name}
          />
          <p className="text-2xl font-semibold mb-1 text-gray-900">
            {profile.name}
          </p>
          <p className="text-md text-gray-900 mb-1">{profile.title}</p>
          <p className="flex text-sm text-gray-600">{profile.location}</p>

          {/* Social links */}
          <div className="flex text-gray-600 mt-4 items-center gap-x-1">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-navy transition-colors duration-200"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5 m-1.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-navy transition-colors duration-200"
            >
              <span className="sr-only">GitHub</span>
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 m-1.5" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <button
              onClick={copyEmail}
              title={emailCopied ? "Copied!" : profile.email}
              className="relative text-gray-600 hover:text-navy transition-colors duration-200 cursor-pointer"
            >
              <span className="sr-only">Copy email</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 m-1.5">
                <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z" />
              </svg>
              {emailCopied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>
          </div>

          {/* Section nav */}
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-5 text-sm">
            {[
              ["Projects", "projects"],
              ["Experience", "experience"],
              ["Education", "education"],
              ["Certifications", "certifications"],
              ["Volunteering", "volunteering"],
            ].map(([label, id], i, arr) => (
              <React.Fragment key={id}>
                <a
                  href={`#${id}`}
                  className="text-gray-600 hover:text-navy transition-colors duration-200"
                >
                  {label}
                </a>
                {i < arr.length - 1 && <span className="text-gray-300">·</span>}
              </React.Fragment>
            ))}
          </nav>

          {/* About */}
          <p className="flex text-sm text-gray-600 mt-10 mb-2 font-mono uppercase">About</p>
          <p className="text-sm text-gray-900 mb-8 leading-relaxed">{profile.about}</p>

          {/* Skills — grouped by category */}
          <p className="flex text-sm text-gray-600 mb-3 font-mono uppercase">Skills</p>
          <div className="space-y-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs text-gray-400 font-mono uppercase tracking-wide mb-1">{category}</p>
                <div>
                  {items.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Personal Attributes */}
          <p className="flex text-sm text-gray-600 mt-6 mb-2 font-mono uppercase">Attributes</p>
          <ul className="text-sm text-gray-600 space-y-1 list-disc ml-4">
            {softSkills.map((attr, i) => (
              <li key={i}>{attr}</li>
            ))}
          </ul>

          {/* CV button */}
          <div className="mt-8">
            <a
              href={profile.cvPath}
              target="_blank"
              rel="noreferrer"
              className="items-center inline-flex px-3 py-1.5 rounded-full text-sm font-normal border border-navy text-navy hover:bg-navy hover:text-white transition-colors duration-200"
            >
              <svg className="mr-1 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.962 2.513a.75.75 0 0 1-.475.949l-.816.272a.25.25 0 0 0-.171.237V21.25c0 .138.112.25.25.25h14.5a.25.25 0 0 0 .25-.25V3.97a.25.25 0 0 0-.17-.236l-.817-.272a.75.75 0 0 1 .474-1.424l.816.273A1.751 1.751 0 0 1 21 3.97v17.28A1.75 1.75 0 0 1 19.25 23H4.75A1.75 1.75 0 0 1 3 21.25V3.97a1.75 1.75 0 0 1 1.197-1.66l.816-.272a.75.75 0 0 1 .949.475Z" />
                <path d="M7 1.75C7 .784 7.784 0 8.75 0h6.5C16.216 0 17 .784 17 1.75v1.5A1.75 1.75 0 0 1 15.25 5h-6.5A1.75 1.75 0 0 1 7 3.25Zm1.75-.25a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25Z" />
              </svg>
              View CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center text-sm text-navy hover:underline underline-offset-4"
    >
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
      </svg>
    </a>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col bg-white shadow-lg shadow-gray-100 border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
      <a href={project.href} target="_blank" rel="noreferrer" className="block">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-auto" />
        ) : (
          <div className="w-full h-36 bg-gradient-to-br from-navy to-[#33597f] flex items-center justify-center">
            <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
          </div>
        )}
      </a>
      <div className="sm:px-4 px-3 sm:pb-4 pb-3 flex flex-col flex-1">
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="text-md text-gray-900 mb-1 mt-3 font-semibold group-hover:underline group-hover:underline-offset-4"
        >
          {project.title}
        </a>
        {project.tags && project.tags.length > 0 && (
          <div className="mt-2">
            {project.tags.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        )}
        <p className="text-sm text-gray-600 mb-1 mt-2">{project.description}</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
          <CardLink href={project.href}>View on GitHub</CardLink>
          {project.report && <CardLink href={project.report}>Read the report</CardLink>}
        </div>
      </div>
    </div>
  );
}

function MainColumn() {
  const [cert, setCert] = useState(null); // certificate image src shown in the lightbox

  return (
    <div className="w-full">
      <div className="sm:p-4 p-2">
        {/* Projects */}
        <div id="projects" className="scroll-mt-6">
          <SectionLabel>Projects</SectionLabel>
        </div>
        <div className="grid mt-3 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

        {/* Experience */}
        <div id="experience" className="sm:mt-12 mt-8 scroll-mt-6">
          <SectionLabel>Experience</SectionLabel>
        </div>
        <div className="mt-3 bg-white shadow-lg shadow-gray-100 border border-gray-200 rounded-2xl sm:p-6 p-4">
          {experience.map((group) => (
            <div key={group.category} className="mb-8 last:mb-0">
              <p className="text-xs text-gray-400 font-mono uppercase tracking-wide mb-3">
                {group.category}
              </p>
              {group.items.map((job, i) => (
            <div key={i} className={i < group.items.length - 1 ? "mb-6" : ""}>
              {job.roles ? (
                <>
                  <div className="flex items-center gap-3">
                    <CompanyLogo name={job.org} src={job.logo} />
                    <p className="text-md text-gray-900 font-semibold leading-snug min-w-0">
                      <OrgName name={job.org} url={job.url} />
                    </p>
                  </div>
                  <div className="mt-3 space-y-2">
                    {job.roles.map((r, ri) => (
                      <div key={ri}>
                        <p className="text-md text-gray-900 font-semibold leading-snug">
                          {r.role}
                        </p>
                        <p className="text-sm text-gray-600">{r.period}</p>
                        {r.bullets && <RoleDetails bullets={r.bullets} tags={r.tags} />}
                      </div>
                    ))}
                  </div>
                  {job.bullets && <RoleDetails bullets={job.bullets} tags={job.tags} />}
                </>
              ) : (
                <>
                  <div className="flex items-start gap-3">
                    <CompanyLogo name={job.org} src={job.logo} />
                    <div className="min-w-0">
                      <p className="text-md text-gray-900 font-semibold leading-snug">
                        {job.role}
                      </p>
                      <p className="text-sm text-gray-900">
                        <OrgName name={job.org} url={job.url} />
                      </p>
                      <p className="text-sm text-gray-600">{job.period}</p>
                    </div>
                  </div>
                  <RoleDetails bullets={job.bullets} tags={job.tags} />
                  {(job.cert || job.credentialLink || job.programLink) && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.cert && (
                    <button type="button" onClick={() => setCert(job.cert)} className={actionBtn}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      View credential
                    </button>
                  )}
                  {job.credentialLink && (
                    <a href={job.credentialLink} target="_blank" rel="noreferrer" className={actionBtn}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      View credential
                    </a>
                  )}
                  {job.programLink && (
                    <a href={job.programLink} target="_blank" rel="noreferrer" className={actionBtn}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                      About the program
                    </a>
                  )}
                </div>
                  )}
                </>
              )}
            </div>
              ))}
            </div>
          ))}
        </div>

        {/* Education */}
        <div id="education" className="sm:mt-12 mt-8 scroll-mt-6">
          <SectionLabel>Education</SectionLabel>
        </div>
        <div className="mt-3 bg-white shadow-lg shadow-gray-100 border border-gray-200 rounded-2xl sm:p-6 p-4">
          {education.map((ed, i) => (
            <div key={i} className={i < education.length - 1 ? "mb-5" : ""}>
              <div className="flex items-start gap-3">
                <CompanyLogo name={ed.school} src={ed.logo} size="w-16 h-16" />
                <div className="min-w-0">
                  <p className="text-md text-gray-900 font-semibold leading-snug">
                    <OrgName name={ed.degree} url={ed.degreeUrl} />
                  </p>
                  <p className="text-sm text-gray-900">
                    <OrgName name={ed.school} url={ed.url} />
                  </p>
                  <p className="text-sm text-gray-600">{ed.period}</p>
                  <p className="text-sm text-gray-600">{ed.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div id="certifications" className="sm:mt-12 mt-8 scroll-mt-6">
          <SectionLabel>Certifications</SectionLabel>
        </div>
        <div className="mt-3 bg-white shadow-lg shadow-gray-100 border border-gray-200 rounded-2xl sm:p-6 p-4 space-y-4">
          {certifications.map((group) => (
            <div key={group.category}>
              <p className="text-xs text-gray-400 font-mono uppercase tracking-wide mb-1">
                {group.category}
              </p>
              <ul className="list-disc ml-5 text-sm space-y-1.5">
                {group.items.map((c, i) => (
                  <li key={i} className={c.expired ? "text-gray-400" : "text-gray-900"}>
                    {c.link ? (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium hover:text-navy hover:underline underline-offset-2 transition-colors duration-200"
                      >
                        {c.name}
                      </a>
                    ) : (
                      <span className="font-medium">{c.name}</span>
                    )}
                    <span className={c.expired ? "text-gray-400" : "text-gray-500"}>
                      {" "}– {c.issuer} · {c.date}
                    </span>
                    {c.expires && !c.expired && (
                      <span className="text-gray-400"> · Expires {c.expires}</span>
                    )}
                    {c.expired && (
                      <span className="text-gray-400"> · Expired {c.expires}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Volunteering */}
        <div id="volunteering" className="sm:mt-12 mt-8 scroll-mt-6">
          <SectionLabel>Volunteering</SectionLabel>
        </div>
        <div className="mt-3 bg-white shadow-lg shadow-gray-100 border border-gray-200 rounded-2xl sm:p-6 p-4">
          {volunteering.map((v, i) => (
            <div key={i} className={i < volunteering.length - 1 ? "mb-5" : ""}>
              <div className="flex items-start gap-3">
                <CompanyLogo name={v.org} src={v.logo} />
                <div className="min-w-0">
                  <p className="text-md text-gray-900 font-semibold leading-snug">
                    {v.role}
                  </p>
                  <p className="text-sm text-gray-900">
                    <OrgName name={v.org} url={v.url} />
                  </p>
                  <p className="text-sm text-gray-600">{v.period}</p>
                  <p className="text-sm text-gray-600">{v.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hobbies & Interests */}
        <div className="sm:mt-12 mt-8">
          <SectionLabel>Hobbies & Interests</SectionLabel>
        </div>
        <div className="mt-3 mb-10 bg-white shadow-lg shadow-gray-100 border border-gray-200 rounded-2xl sm:p-6 p-4">
          {Object.entries(hobbies).map(([category, items]) => (
            <div key={category} className="mb-3 last:mb-0">
              <p className="text-sm text-gray-900 font-semibold mb-0.5">{category}</p>
              <p className="text-sm text-gray-600">{items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate lightbox */}
      {cert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setCert(null)}
            aria-label="Close"
            className="absolute top-4 right-4 text-white/90 hover:text-white text-3xl leading-none cursor-pointer"
          >
            &times;
          </button>
          <img
            src={cert}
            alt="Certificate"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="antialiased text-gray-900 bg-[#fcfcfc] min-h-screen">
      <div className="md:flex md:gap-0 max-w-7xl mx-auto">
        <Sidebar />
        <MainColumn />
      </div>
    </div>
  );
}

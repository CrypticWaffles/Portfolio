export const projects = [
  /*{
    title: "Title",
    description:
      "Desc",
    tech: ["Stack Item 1", "Stack Item 2", "Stack Item 3", "Etc"],
    status: "In Progress",
    image: "images/image.jpg-png-etc",
    github: "link",
    demo: "link",
  },*/
  {
    title: "Pipeline",
    description:
      "A full-stack job-application tracker with a five-stage drag-and-drop Kanban board. Signs in with Google OAuth via Passport.js and JWT, with every query scoped to the signed-in user. Includes CSV import/export and a metrics dashboard built on SQL aggregations. Deployed with a no-login demo mode; I use it to track about 60 of my own applications. Covered by 16 API tests with Vitest and Supertest, run with lint on every push through GitHub Actions.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Google OAuth", "JWT", "Vitest", "GitHub Actions"],
    github: "https://github.com/CrypticWaffles/Pipeline",
    demo: "https://pipeline-nu-ecru.vercel.app",
    image: "/images/pipeline.png",
  },
  {
    title: "Hospital Management System",
    description:
      "A hospital management system with a Windows Forms client and an ASP.NET Core 8 SignalR server, built with a two-person team. Features login and registration with BCrypt-hashed passwords, a role-based hub for five user roles, real-time chat, a live dashboard pushing simulated vitals every 2 seconds, and analytics reports over SQL Server data with export to CSV, JSON, and XML.",
    tech: ["C#", "ASP.NET Core", "SignalR", "Windows Forms", "SQL Server", "MongoDB"],
    github: "https://github.com/CrypticWaffles/HospitalManagementSystem",
    presentation: "https://1drv.ms/v/c/b6c0d45c28bc44af/IQDn2q6INyUrSIUVWJ-1AgfQAfOvLuc1tmZIJtCOjTIRFSs?e=jyml0R",
    image: "/images/HMS.png",
  },
  {
    title: "E-Voter",
    description:
      "A civic engagement app built with Sails.js where users watch legislative videos and vote yes/no, with results aggregated by state via a ZIP-to-state lookup. I conceived the product and served as lead developer and product owner for a team of 4, writing about 75% of 92 commits across 70+ pull requests.",
    tech: ["Sails.js", "Node.js", "EJS", "Bootstrap"],
    github: "https://github.com/CrypticWaffles/E-Voter",
    demo: "https://e-voter-5tp3.onrender.com",
    image: "/images/evoter.png",
  },
  {
    title: "Queued",
    description:
      "An Android app for tracking TV shows. Users can search a catalog via the TVmaze API with debounced search, sort and filter results, mark favorites, and manage a personal watchlist with local SQLite persistence.",
    tech: ["SQLite", "Java", "Android", "TVmaze API"],
    github: "https://github.com/CrypticWaffles/Queued",
    demo: "https://appetize.io/app/b_6pdork34eiaei2tu6cignrfbgi",
    image: "/images/Queued.jpg",
  },
];

export const skills = {
  Languages: {
    proficient: ["JavaScript", "C#", "SQL", "Java", "HTML5", "CSS3"],
    familiar: ["TypeScript", "Python"],
  },
  Frameworks: {
    proficient: ["React", "Node.js", "Express", "ASP.NET Core", ".NET", "SignalR", "Tailwind CSS", "Bootstrap"],
    familiar: ["Sails.js"],
  },
  "Databases & Cloud": {
    proficient: ["PostgreSQL", "SQL Server", "MongoDB", "SQLite"],
    familiar: ["Firebase", "Google Cloud"],
  },
  Tools: {
    proficient: ["Git", "GitHub", "GitHub Actions", "Vitest", "Vercel", "Railway", "Render", "Visual Studio", "Android Studio", "AI-Assisted Development (Claude Code, Gemini)"],
    familiar: ["Docker"],
  },
  Practices: {
    proficient: ["REST APIs", "OAuth 2.0", "JWT", "Unit Testing", "CI/CD", "Agile/Scrum", "Pull Requests & Code Review"],
    familiar: [],
  },
  "Spoken Languages": {
    proficient: ["English"],
    familiar: ["Japanese (conversational)"],
  },
};

export const current = {
  building: "Pipeline — expanding features & test coverage",
  buildingLink: "https://github.com/CrypticWaffles/Pipeline",
  learning: "Software Testing & Project Management",
};

export const education = [
  {
    school: "Bellevue College",
    degree: "Bachelor of Applied Science in Software Development",
    dates: "Expected December 2026",
    notes: "GPA: 3.72 · Relevant coursework: Data Structures & Algorithms, Software Testing, Application Architecture, Advanced Web Development",
  },
  {
    school: "Bellevue College",
    degree: "Associate of Applied Science in Software Development",
    dates: "Received December 2024 · With Honors",
    notes: "GPA: 3.68",
  },
];

export const experience = [
  {
    title: "Warehouse Receiver",
    company: "Snoqualmie Casino & Hotel",
    dates: "September 2025 – Present",
    bullets: [
      "Receive about 12 truck deliveries per weekday on a 5–7 person team across two warehouses, verifying each against purchase orders before stocking or routing direct to venues",
      "Fulfill about 50 internal orders per day for 12 food and beverage venues and internal departments",
      "Audit stock by reconciling physical counts with inventory records; hold a Snoqualmie Gaming Commission license",
    ],
  },
  {
    title: "Drive Up & Go Lead (Department Supervisor)",
    company: "Safeway",
    dates: "September 2023 – September 2024",
    bullets: [
      "Promoted from Shopper after 8 months to supervise a team of 6 fulfilling 40–120 online orders per day across 2–3 shifts",
      "Reviewed order accuracy, pick rate, and on-time completion with the store manager weekly, and audited shopper orders for procedure compliance",
      "Trained new hires and wrote the department's onboarding materials",
    ],
  },
  {
    title: "Drive Up & Go Shopper",
    company: "Safeway",
    dates: "January 2023 – September 2023",
  },
];

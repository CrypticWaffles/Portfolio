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
      "A full-stack job-application tracker with a five-stage drag-and-drop Kanban board. Signs in with Google OAuth via Passport.js and JWT, with every query scoped to the signed-in user. Includes CSV import/export and a metrics dashboard built on SQL aggregations. Deployed with a no-login demo mode; I use it to track about 60 of my own applications.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Google OAuth", "JWT"],
    github: "https://github.com/CrypticWaffles/Pipeline",
    demo: "https://pipeline-nu-ecru.vercel.app",
    /*image: "images/pipeline.png",*/
  },
  {
    title: "Hospital Management System",
    description:
      "A hospital management system with a Windows Forms client and an ASP.NET Core 8 SignalR server, built with a two-person team. Features a role-based login hub, real-time chat, a live dashboard pushing simulated patient vitals, and analytics reports over SQL Server data with export to CSV, JSON, and XML.",
    tech: ["C#", "ASP.NET Core", "SignalR", "Windows Forms", "SQL Server", "MongoDB"],
    github: "https://github.com/CrypticWaffles/HospitalManagementSystem",
    presentation: "https://1drv.ms/v/c/b6c0d45c28bc44af/IQDn2q6INyUrSIUVWJ-1AgfQAfOvLuc1tmZIJtCOjTIRFSs?e=jyml0R",
  },
  {
    title: "E-Voter",
    description:
      "A civic engagement app built with Sails.js where users watch legislative videos and vote yes/no, with results aggregated by state via a ZIP-to-state lookup. I conceived the product and served as lead developer and product owner for a team of 4, writing about 75% of 92 commits across 70+ pull requests.",
    tech: ["Sails.js", "Node.js", "EJS", "Bootstrap"],
    github: "https://github.com/CrypticWaffles/E-Voter",
    demo: "https://e-voter-5tp3.onrender.com",
    /*image: "images/evoter.png",*/
  },
  {
    title: "Queued",
    description:
      "An Android app for tracking TV shows. Users can search a catalog via the TVmaze API with debounced search, sort and filter results, mark favorites, and manage a personal watchlist with local SQLite persistence.",
    tech: ["SQLite", "Java", "Android", "TVmaze API"],
    github: "https://github.com/CrypticWaffles/Queued",
    demo: "https://appetize.io/app/b_6pdork34eiaei2tu6cignrfbgi",
    /*image: "images/queued.png",*/
  },
];

export const skills = {
  Languages: {
    proficient: ["JavaScript", "C#", "SQL", "Java", "HTML", "CSS"],
    familiar: ["TypeScript", "Python"],
  },
  Frameworks: {
    proficient: ["React", "Node.js", "Express", "ASP.NET Core", "Tailwind CSS", "Bootstrap"],
    familiar: ["Sails.js"],
  },
  "Databases & Cloud": {
    proficient: ["PostgreSQL", "SQL Server", "MongoDB", "SQLite"],
    familiar: ["Firebase", "Google Cloud"],
  },
  Tools: {
    proficient: ["Git", "GitHub", "GitHub Actions", "Vite", "VS Code", "SSMS"],
    familiar: ["AI-Assisted Development (Claude Code, Gemini)"],
  },
};

export const current = {
  building: "Pipeline — adding automated tests & CI",
  buildingLink: "https://github.com/CrypticWaffles/Pipeline",
  learning: "Software Testing & Project Management",
};

export const education = [
  {
    school: "Bellevue College",
    degree: "Bachelor of Applied Science in Software Development",
    dates: "Expected December 2026",
    notes: "GPA: 3.7 · Relevant coursework: Data Structures & Algorithms, Application Architecture, Advanced Web Development, Information Security Essentials, Advanced Data Access Techniques",
  },
  {
    school: "Bellevue College",
    degree: "Associate of Applied Science in Software Development",
    dates: "Received December 2024 · With Honors",
    notes: "GPA: 3.68 · Relevant coursework: Object-Oriented Programming, Server-Side Web Development, Database Theory & SQL, Mobile Solution Implementation, Systems Analysis & Design",
  },
];

export const experience = [
  {
    title: "Warehouse Receiver",
    company: "Snoqualmie Casino & Hotel",
    dates: "September 2025 – Present",
    bullets: [
      "Managed and received incoming shipments, verifying quantities and maintaining accurate inventory records across multiple product categories.",
      "Conducted systematic warehouse audits and documented findings to ensure data accuracy and accountability.",
      "Coordinated timely delivery of products to multiple departments using structured routing and scheduling.",
      "Kept all receiving areas clean and well organized.",
    ],
  },
  {
    title: "In-Store Shopping Lead",
    company: "Safeway",
    dates: "September 2023 – September 2024",
    bullets: [
      "Led a team of in-store shoppers, scheduling daily tasks and tracking order fulfillment metrics to ensure efficiency.",
      "Developed and delivered onboarding training for new employees, standardizing workflows and quality expectations.",
      "Maintained high order accuracy through systematic verification processes, improving customer satisfaction scores.",
      "Analyzed shopping route data with store management to reduce pick times and improve team throughput.",
    ],
  },
  {
    title: "In-Store Shopper",
    company: "Safeway",
    dates: "February 2023 – September 2023",
    bullets: [
      "Fulfilled customer orders accurately and efficiently in a fast-paced environment.",
      "Communicated with team members and management to resolve issues and improve performance.",
    ],
  },
];

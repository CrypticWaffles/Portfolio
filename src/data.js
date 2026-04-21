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
    title: "Queued",
    description:
      "An exploratory Android application for tracking movies and TV shows. Users can search a catalog, mark titles as watched, and manage a personal watchlist. I made this as a basic project to explore android.",
    tech: ["SQLite", "Java", "Android"],
    github: "https://github.com/CrypticWaffles/Queued",
    demo: "https://appetize.io/app/b_6pdork34eiaei2tu6cignrfbgi",
    /*image: "images/queued.png",*/
  },
  {
    title: "Hospital Management System",
    description:
      "A full-stack hospital management system built with SignalR, C#, and MongoDB. Features real-time communication, user management, and data persistence.",
    tech: ["SignalR", "C#", "MongoDB"],
    github: "https://github.com/CrypticWaffles/HospitalManagementSystem",
    presentation: "https://1drv.ms/v/c/b6c0d45c28bc44af/IQDn2q6INyUrSIUVWJ-1AgfQAfOvLuc1tmZIJtCOjTIRFSs?e=jyml0R",
  },
  {
    title: "Reaper",
    description:
      "REAPER is a React Native daily reflection system built to run on Android/IPhone using HealthKit. It measures whether your recent behavior is keeping up with the constant pressure of time. Repository is private.",
    tech: ["React Native", "Expo", "Zustand", "MMKV Storage", "JavaScript"],
    status: "In Progress",
  },
  {
    title: "Pipeline",
    description: "A Kanban board for tracking job applications through every stage of the search. Users can drag cards across stages, log salary and notes, and view metrics on a live dashboard. Authenticated with Google OAuth.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Google OAuth"],
    github: "https://github.com/CrypticWaffles/Pipeline",
    demo: "https://pipeline-nu-ecru.vercel.app",
    /*image: "images/pipeline.png",*/
  },
  {
    title: "E-Voter",
    description:
      "A full-stack online voting platform built with Sails.js and a SQLite backend. Features secure authentication, and real-time vote tallying.",
    tech: ["Sails.js", "Node.js", "SQLite", "JavaScript"],
    github: "https://github.com/CrypticWaffles/E-Voter",
    demo: "https://e-voter-5tp3.onrender.com",
    /*image: "images/evoter.png",*/
  },
];

export const skills = {
  Languages: {
    proficient: ["JavaScript", "HTML", "CSS", "SQL", "C#"],
    familiar: ["Python", "Java", "Kotlin"],
  },
  Frameworks: {
    proficient: ["React", "React Native", "Bootstrap", "Node.js"],
    familiar: ["Sails.js", "Tailwind CSS"],
  },
  "Databases & Cloud": {
    proficient: ["PostgreSQL", "Firebase", "MongoDB", "SQLite"],
    familiar: ["Google Cloud"],
  },
  Tools: {
    proficient: ["Git", "GitHub", "Expo", "VS Code", "SSMS"],
    familiar: ["Vite"],
  },
};

export const current = {
  building: "Reaper — a React Native daily reflection app",
  buildingLink: "#projects",
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

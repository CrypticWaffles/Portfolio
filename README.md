# Miles Griffith — Portfolio

Personal portfolio website built with React and Vite.

## Overview

A single-page application showcasing projects, skills, education, and work experience. Sections include:

- **Hero** — intro
- **About** — background summary
- **Skills** — languages, frameworks, databases, and tools
- **Projects** — List of projects i've worked on
- **Experience** — work history & Education
- **Contact** — contact info / links

## Tech Stack

- React 19
- Vite 7
- Plain CSS

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
├── data.js       # All content data (projects, skills, education, experience)
├── App.jsx
└── App.css
public/
└── Miles_Griffith.pdf
```

All site content (projects, skills, education, experience) is centralized in [src/data.js](src/data.js).

import { StaticImageData } from "next/image";

import {
  AnneMichelleImage,
  BiologicsImage,
  ProjectIPhiImage,
  SSIASemiconductorImage,
} from "@/assets";

export interface IProjectData {
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData;
}

export const DATA = {
  HEADER: {
    NAME: "Amir Ismail",
    AGE: "28",
    PRONOUN: "he/him",
    HEADLINE:
      "Passionate about building high-performance and scalable web applications.",
    RESUME: "/Amir Ismail- resume .pdf",
    EMAIL: "mailto:amir.ismail@example.com",
    GITHUB: "https://github.com/nikecodedev",
    LINKEDIN: "https://www.linkedin.com/in/amirismail-in",
  },

  ABOUT_ME: {
    INTRO:
      "Software Engineer with 6 years of experience building robust web and mobile applications. Experienced in delivering scalable APIs, interactive dashboards, and polished UIs for startups and established companies across Fintech, Financial Services, EdTech, Logistics, SaaS, AI-powered platforms, and Enterprise Software.",
    EXPERTISE:
      "Passionate about creating high-performance solutions with clean architecture and modern technologies.",
    BLOG: "I would love publishing blogs and sharing insights on web development, best practices, and new technologies.",
  },

  EXPERIENCE: {
    "TechVision Solutions": {
      WEBSITE: "https://www.techvisionsolutions.com/",
      POSITION: "Senior Software Engineer",
      LOCATION: "Kuala Lumpur, Malaysia",
      DURATION: "02/2022 – Present",
      DESCRIPTION: [
        "Led development of microservices for financial applications, improving system scalability by 40%.",
        "Built high-performance dashboards in React + Redux, integrated with secure APIs.",
        "Automated deployment pipelines using Docker + Kubernetes on AWS, reducing downtime by 25%.",
        "Mentored 4 junior engineers, conducted code reviews, and introduced coding best practices.",
      ],
      TECH_STACK: [
        "React",
        "Redux",
        "Node.js",
        "Microservices",
        "Docker",
        "Kubernetes",
        "AWS",
        "JavaScript",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
        "Git",
      ],
    },
    "DigitalWave Technologies": {
      WEBSITE: "https://www.digitalwave.com/",
      POSITION: "Software Engineer",
      LOCATION: "Penang, Malaysia",
      DURATION: "03/2020 – 11/2021",
      DESCRIPTION: [
        "Developed e-commerce features (shopping cart, payments, delivery tracking) using Node.js + MongoDB.",
        "Integrated third-party APIs (GrabPay, PayPal, logistics providers).",
        "Collaborated in an Agile Scrum team delivering 2 week sprints.",
        "Optimized queries and caching, improving response times by 35%.",
      ],
      TECH_STACK: [
        "Node.js",
        "MongoDB",
        "React",
        "Express.js",
        "REST APIs",
        "Payment Integration",
        "Agile",
        "Scrum",
        "JavaScript",
        "HTML/CSS",
        "Git",
      ],
    },
    "SmartApps Sdn Bhd": {
      WEBSITE: "https://www.smartapps.com.my/",
      POSITION: "Software Engineer",
      LOCATION: "Selangor, Malaysia",
      DURATION: "01/2018 – 09/2019",
      DESCRIPTION: [
        "Maintained legacy PHP + MySQL applications, refactoring modules for better maintainability.",
        "Assisted in building mobile apps using React Native, integrated with REST APIs.",
        "Wrote unit and integration tests, increasing test coverage from 45% to 75%.",
        "Supported client troubleshooting and bug fixing within SLA.",
      ],
      TECH_STACK: [
        "PHP",
        "MySQL",
        "React Native",
        "REST APIs",
        "JavaScript",
        "HTML/CSS",
        "Unit Testing",
        "Integration Testing",
        "Git",
      ],
    },
  },

  PROJECTS: {
    "Anne Michelle Fashions": {
      DESCRIPTION: [
        "Developed a WooCommerce web platform with custom interactive design and payment interfaces for ethical fashion products.",
        "Created product category portfolio and custom sliders for enhanced user experience.",
        "Implemented contact forms with email gateway integration for customer communication.",
        "Designed responsive web layout ensuring compatibility across all devices.",
        "Added high-secure SSL certificate for enhanced site security and customer trust.",
      ],
      TECH_STACK: [
        "WordPress",
        "WooCommerce",
        "PHP",
        "MySQL",
        "HTML/CSS",
        "JavaScript",
        "SSL",
        "Email Gateway",
        "Responsive Design",
        "Custom Sliders",
      ],
      IMAGE: AnneMichelleImage,
    },
    "Construction Project Management System": {
      DESCRIPTION: [
        "Developed ProjectiPhi - Construction Project Management System providing comprehensive tools for project management.",
        "Implemented Gantt Charts for project timeline visualization and task management capabilities.",
        "Created budgeting tools and resource allocation features for effective project planning.",
        "Built user-friendly interface to streamline team collaboration and project execution from day one.",
      ],
      TECH_STACK: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Project Management",
        "Gantt Charts",
        "Task Management",
        "Budgeting Tools",
        "Team Collaboration",
        "Responsive Design",
      ],
      IMAGE: ProjectIPhiImage,
    },
    "Biologics CDMO": {
      DESCRIPTION: [
        "Developed website for Asia's largest biologics CDMO brand Kemwell Biopharma.",
        "Integrated high-quality contact forms and lead generation mechanisms for business growth.",
        "Implemented brochure download functionality for product information sharing.",
        "Set up email gateways for seamless communication between clients and company.",
      ],
      TECH_STACK: [
        "WordPress",
        "PHP",
        "MySQL",
        "HTML/CSS",
        "JavaScript",
        "Lead Generation",
        "Email Gateway",
        "Contact Forms",
        "File Management",
        "Responsive Design",
      ],
      IMAGE: BiologicsImage,
    },
    "SSIA Semiconductor": {
      DESCRIPTION: [
        "Developed website for SSIA - association facilitating growth in Singapore's semiconductor industry.",
        "Created event management system for virtual career fairs and industry showcases.",
        "Implemented targeted content for students, job seekers, and mid-career seekers.",
        "Built awareness and engagement platform for Electronics Industry Day 2022 (EID 2022) event.",
      ],
      TECH_STACK: [
        "WordPress",
        "PHP",
        "MySQL",
        "Event Management",
        "Career Portal",
        "Virtual Events",
        "Industry Showcase",
        "Lead Generation",
        "Responsive Design",
      ],
      IMAGE: SSIASemiconductorImage,
    },
  },

  EDUCATION: {
    "Bachelor of Computer Science": {
      DEGREE: "Bachelor of Computer Science (Software Engineering)",
      UNIVERSITY: "Universiti Malaya",
      DURATION: "2014 – 2018",
      LOCATION: "Kuala Lumpur, Malaysia",
    },
  },

  SKILLS: {
    Languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Node.js"],
    Frameworks: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Astro",
      "Express.js",
      "React Native",
      "Expo",
      "Electron",
      "PWA",
    ],
    Libraries: [
      "React Query",
      "Tailwind CSS",
      "ShadCN UI",
      "Ant Design",
      "Styled Components",
      "Material UI",
    ],
    "Database & Backend": [
      "MongoDB",
      "Redis",
      "Contentful",
      "Firebase",
      "GraphQL",
      "JWT",
      "Auth.js",
      "Clerk",
    ],
    "Cloud & Deployment": [
      "Google Cloud Platform (GCP)",
      "Amazon Web Services (AWS)",
      "Vercel",
    ],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "Visual Studio Code",
      "Prettier",
      "Sentry",
    ],
    "Package Managers & Build Tools": ["NPM", "PNPM", "Yarn", "Bun", "Vite"],
  },
};

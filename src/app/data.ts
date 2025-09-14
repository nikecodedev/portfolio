import { StaticImageData } from "next/image";

import {
  AirwatchImage,
  TodoImage,
  VueBitsImage,
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
    "Vue Bits": {
      SLUG: "vue-bits",
      LIVE_PREVIEW: "https://vue-bits.dev/",
      DESCRIPTION: [
        "Contributed 20+ components to the largest and most creative library of animated Vue components.",
        "Helped develop highly customizable animated UI elements for modern web projects, including text animations, backgrounds, and interactive visuals.",
        "Components are designed for seamless integration with Vue.js and Nuxt projects, providing minimal dependencies and flexible prop-based customization.",
        "Open-source collection growing weekly, inspired by the React Bits project.",
      ],
      TECH_STACK: ["Vue.js", "TypeScript", "Tailwind CSS"],
      IMAGE: VueBitsImage,
    },
    "AirWatch PWA": {
      LIVE_PREVIEW: "https://airwatch-pwa-app.vercel.app/",
      DESCRIPTION: [
        "Built a fully responsive, offline-capable Progressive Web App (PWA) using Next.js 15 to monitor air quality in real-time.",
        "Integrated Firebase Cloud Messaging for push notifications and AI-powered smart insights using Groq SDK.",
        "Implemented interactive charts with Recharts and Google Maps for detailed visualizations.",
        "Designed a beautiful UI using TailwindCSS, ShadCN UI, and Lucide Icons with strong TypeScript typing and scalable architecture.",
      ],
      TECH_STACK: [
        "Next.js",
        "ShadCN UI",
        "Tailwind CSS",
        "TypeScript",
        "Firebase",
        "Recharts",
        "Google Maps API",
        "Groq SDK",
        "PWA",
      ],
      IMAGE: AirwatchImage,
    },
    "ToDo Extension with Chrome Storage API": {
      LIVE_PREVIEW: "https://todo-extension-webapp.vercel.app/",
      DESCRIPTION: [
        "Developed and launched a Chrome extension for task management using Chrome Storage API.",
        "Implemented user-friendly interface to enhance productivity and task tracking.",
        "Designed responsive layout ensuring seamless experience across different screen sizes and browsers.",
        "Integrated message broadcasting for real-time updates and synchronization",
      ],
      NOTE: "Note: The extension is not published on the Chrome Web Store.",
      TECH_STACK: [
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "Borwser Extension",
        "Chrome Storage API",
        "Message Broadcasting",
      ],
      IMAGE: TodoImage,
    },
    "Anne Michelle Fashions": {
      LIVE_PREVIEW: "https://annemichellefashions.com/",
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
      LIVE_PREVIEW: "https://projectiphi.com/",
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
      LIVE_PREVIEW: "https://kemwell.com/",
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
      LIVE_PREVIEW: "https://ssia.org.sg/",
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

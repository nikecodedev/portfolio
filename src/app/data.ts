import { StaticImageData } from "next/image";

import {
  AnneMichelleImage,
  BiologicsImage,
  ProjectIPhiImage,
  SSIASemiconductorImage,
  RentalApplicationImage,
  CorribOilImage,
  AccessMedlabImage,
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
    RESUME: "/amirismail-resume.pdf",
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
    "Tech Vision Solution": {
      WEBSITE: "https://www.techvision.my/",
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
    "Digital Wave Technology": {
      WEBSITE: "https://www.digitalwavetechnology.com/",
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
    "Smart App Connect Sdn. Bhd.": {
      WEBSITE: "https://innovationo2o.com/",
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
    "Rental Application Development": {
      DESCRIPTION: [
        "Developed a platform for customers to enquire properties for long-stays via the platform and also a backend for the company to manage all received enquiries and storage of all statutory rental documents for the purpose of financial records and audits.",
        "The portal also includes a backend to upload new properties as well as manage all customer data using the required encryption.",
      ],
      TECH_STACK: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JWT Authentication",
        "File Upload",
        "Data Encryption",
        "REST APIs",
        "Responsive Design",
        "Property Management",
      ],
      IMAGE: RentalApplicationImage,
    },
    "Corrib Oil": {
      DESCRIPTION: [
        "For Irish customers, Corrib Oil combines the ease of managing energy product orders with the perks of a rewarding loyalty program—all accessible from a modern, user-friendly platform.",
        "Whether placing an order or tracking loyalty points, Corrib Oil's solution offers a streamlined and efficient experience.",
      ],
      TECH_STACK: [
        "React.js",
        "Node.js",
        "PostgreSQL",
        "Express.js",
        "Loyalty System",
        "Order Management",
        "Payment Integration",
        "REST APIs",
        "Responsive Design",
        "Energy Products",
      ],
      IMAGE: CorribOilImage,
    },
    "Access Medlab": {
      DESCRIPTION: [
        "The client wanted to move the laboratory from a fully manual system to a fully automated and cloud-based lab solution with scalability, security, and high performance.",
        "The goal was to fix problems, improve the system, and add functionality for operational development and future technological requirements.",
        "The solution had to transfer significant amounts of historical data, enhance the efficiency of processes that demand many resources, and make the system more convenient for administrators and users.",
      ],
      TECH_STACK: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Cloud Infrastructure",
        "Data Migration",
        "Laboratory Management",
        "Automation",
        "Security",
        "Scalability",
        "Performance Optimization",
      ],
      IMAGE: AccessMedlabImage,
    },
    "ProjectiPhi": {
      DESCRIPTION: [
        "Successful projects begin with effective project management software. ProjectiPhi – Construction Project Management System provides you with all the tools you need to get your project up and running from day one.",
        "From Gantt Charts to Task Management to Budgeting, we make it easier for your team to get the job done.",
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
        "Construction Industry",
        "Responsive Design",
      ],
      IMAGE: ProjectIPhiImage,
    },
    "SSIA Semiconductor": {
      DESCRIPTION: [
        "SSIA is an association committed to facilitating growth in Singapore's semiconductor industry. One of the ways it does so is by organizing events that bring together businesses and partners to showcase the industry's opportunities and growth.",
        "In January 2022, SSIA hosted a virtual career fair called 'Electronics Industry Day 2022' (EID 2022) that was aimed at 3 target groups, namely students, job seekers, and mid-career seekers.",
        "Our client approached us hoping to generate awareness and buzz around this event.",
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
        "Semiconductor Industry",
        "Responsive Design",
      ],
      IMAGE: SSIASemiconductorImage,
    },
    "Anne Michelle Fashions": {
      DESCRIPTION: [
        "How we helped our client in fashion industry develop an e-commerce website platform:",
        "Developed a woo-commerce web platform with custom interactive design, payment interfaces, product category portfolio for a business which deals in the manufacturing of ethical fashion products.",
        "Designed custom sliders, contact forms with email gateway, responsive web design, added high-secure SSL for the site.",
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
        "E-commerce",
        "Fashion Industry",
      ],
      IMAGE: AnneMichelleImage,
    },
    "Biologics CDMO": {
      DESCRIPTION: [
        "Web Development for Asia's Largest Biologics CDMO",
        "Rorko worked on the development of the website for Asia's largest biologics CDMO brand Kemwell Biopharma.",
        "Integrated high-quality features such as contact forms, lead generations mechanisms, brochure downloadable, email gateways & more.",
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
        "Biologics Industry",
        "CDMO",
      ],
      IMAGE: BiologicsImage,
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

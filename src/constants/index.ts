import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  jobit,
  threejs,
  sawi,
  axenda,
  kaust,
  chartWise,
  mostaqbali,
  msd,
  pathfinding,
  sortvis,
  blockchain,
} from "../assets/index";
import {
  Experience,
  NavLink,
  Project,
  Service,
  Technology,
  Testimonial,
} from "../types";

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  { id: "projects", title: " Projects" },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: Service[] = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "AI & Machine Learning",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: creator,
  },
];

const technologies: Technology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company_name: "Sawi",
    icon: sawi, // Replace with actual icon
    iconBg: "#fff",
    date: "December 2023 - Present",
    points: [
      "Migrated legacy frontend from Redux to React Query, refactored components, and optimized workflows.",
      "Rebuilt backend from Express.js to NestJS, enhancing performance and scalability.",
      "Improved backend responsiveness by optimizing API endpoints for high traffic scenarios.",
    ],
  },
  {
    title: "AI & Machine Learning Intern",
    company_name: "KAUST AI Academy",
    icon: kaust, // Replace with actual icon
    iconBg: "#fff",
    date: "June 2024 - August 2024",
    points: [
      "Focused on advanced topics in AI, including generative AI, NLP, and computer vision.",
      "Engaged in intensive learning and hands-on experience with cutting-edge AI technologies and methodologies.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Axenda",
    icon: axenda, // Replace with actual icon
    iconBg: "#1e1e1e",
    date: "September 2022 - April 2023",
    points: [
      "Led the development of a Learning Management System (LMS) for a student platform, integrating with an existing application.",
      "Built the frontend with React, Next.js, Chakra UI, tRPC, and Zod, focusing on performance and user experience.",
      "Designed the backend using tRPC, Supabase, Prisma, and Postgres, incorporating role-based access control.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Axenda",
    icon: axenda, // Replace with actual icon
    iconBg: "#1e1e1e",
    date: "June 2022 - September 2022",
    points: [
      "Enhanced collaboration skills by improving Git workflows and team communication as part of the frontend team.",
      "Contributed to frontend development and supported various tasks to meet project goals.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "Business Analysis AI Assistant",
    description:
      "Developed an AI assistant leveraging LangChain and Streamlit, integrating a Retrieval-Augmented Generation (RAG) system, query decomposition, and a novel method for better data analysis. Includes web search functionality and database integration.",
    tags: [
      {
        name: "LangChain",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: chartWise, // replace with actual image path
    source_code_link: "https://github.com/omardr777/",
  },
  {
    name: "Mostaqbali Landing Page",
    description:
      "Created a responsive landing page for Mostaqbali using Next.js and Tailwind CSS, integrated with a headless CMS (Strapi) to enable dynamic content management.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Strapi",
        color: "pink-text-gradient",
      },
    ],
    image: mostaqbali,
    source_code_link: "https://github.com/omardr777/",
  },
  {
    name: "Medical Safety Device (MSD)",
    description:
      "Designed and developed a web application using Next.js, Tailwind CSS, and Shadcn UI to help users manage medication schedules with automated reminders.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Shadcn UI",
        color: "pink-text-gradient",
      },
    ],
    image: msd,
    source_code_link: "https://github.com/omardr777/",
  },
  {
    name: "Atheer LMS",
    description:
      "Contributed to improving the frontend and adding new features to Atheer, a Learning Management System (LMS), during a volunteer role. Worked with Vue.js to optimize performance and enhance user experience.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "LMS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/omardr777/",
  },
  {
    name: "Pathfinding Visualizer",
    description:
      "Created an interactive tool that visualizes pathfinding algorithms such as A* and Dijkstra, helping users understand the underlying mechanics of these algorithms.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Canvas",
        color: "green-text-gradient",
      },
      {
        name: "Algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: pathfinding,
    source_code_link: "https://github.com/omardr777/PathFinding-Visualizer",
  },
  {
    name: "Sorting Algorithm Visualizer",
    description:
      "A web application that visualizes popular sorting algorithms including Bubble Sort, Quick Sort, Merge Sort, and Insertion Sort. Built using raw HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: sortvis,
    source_code_link: "https://omardr777.github.io/sortingAlgoVisualizer/",
  },
  {
    name: "Blockchain Visualizer",
    description:
      "Built a blockchain visualizer using Vue.js and Bootstrap to demonstrate the concepts behind how blockchain technology works.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: blockchain,
    source_code_link: "https://github.com/omardr777/BlockchainVisualizer",
  },
];

export { services, technologies, experiences, projects };

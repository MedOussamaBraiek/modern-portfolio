const skills = [
  {
    category: "Languages",
    tools: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
    ],
  },
  {
    category: "Frontend",
    tools: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        invert: true,
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Zustand",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zustand/zustand-original.svg",
      },
      {
        name: "shadcn/ui",
        icon: "/assets/logos/shadcnui.svg",
      },

      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    category: "Backend",
    tools: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        invert: true,
      },
      {
        name: "Prisma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        invert: true,
      },
      {
        name: "Socket.IO",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        invert: true,
      },
      {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      },
    ],
  },
  {
    category: "Database",
    tools: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    category: "AI & LLMs",
    tools: [
      {
        name: "Hugging Face",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/huggingface.svg",
      },
      {
        name: "LangChain",
        icon: "/assets/logos/langchain.svg",
      },
      {
        name: "LangGraph",
        icon: "/assets/logos/langgraph.svg",
      },
      {
        name: "RAG",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
  },
  {
    category: "Mobile",
    tools: [
      {
        name: "Flutter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "Dart",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      },
      {
        name: "Kotlin",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      },
    ],
  },
  {
    category: "Tooling",
    tools: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        invert: true,
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Cypress",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg",
      },
      {
        name: "Blender",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
      },
    ],
  },
];

const projects = [
  {
    id: 1,
    title: "FabrionLab",
    type: "E-Commerce · Brand",
    description:
      "Full-stack e-commerce platform for my 3D printing brand — custom anime, F1, and gaming merchandise. Sole developer and brand owner, from product design to deployment.",
    tags: ["Next.js", "Zustand", "ShadCN", "Vercel"],
    url: "https://fabrionlab.vercel.app",
    cover: "/assets/projects/fabrion.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Oussama's AI",
    type: "AI · Portfolio",
    description:
      "AI-powered portfolio using RAG — answers questions about my work and skills in natural language.",
    tags: ["Next.js", "LangChain", "RAG"],
    url: "https://oussama-ai-portfolio.vercel.app/",
    cover: "/assets/projects/ai-portfolio.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Jocker Shop",
    type: "E-Commerce",
    description:
      "E-commerce store with product customization, cart management, and a Prisma-backed database.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    url: "https://jocker-shop.vercel.app",
    cover: "/assets/projects/jocker-shop.png",
    featured: false,
  },
  {
    id: 4,
    title: "Hablar",
    type: "Real-Time · Chat",
    description:
      "Real-time MERN chat app with Socket.IO — instant messaging, image sharing, and live presence indicators.",
    tags: ["React", "Socket.IO", "MongoDB"],
    url: "https://hablar.onrender.com",
    cover: "/assets/projects/hablar.png",
    featured: false,
  },
  //   {
  //     id: 5,
  //     title: "Clinic DR. Karim",
  //     type: "Healthcare · Web App",
  //     description:
  //       "Patient appointment booking platform with an interactive scheduling calendar for clinic management.",
  //     tags: ["React", "Node.js", "MongoDB"],
  //     url: "https://docteur-karim-somai.vercel.app/",
  //     cover: "/assets/projects/dr-karim.png",
  //     featured: false,
  //   },
  {
    id: 5,
    title: "Responsive Dashboard",
    type: "Mobile · Dashboard",
    description:
      "Cross-platform Flutter dashboard with Firebase Auth, data charts, and dark/light mode.",
    tags: ["Flutter", "Firebase", "Google Auth"],
    url: null,
    cover: "/assets/projects/flutter-dashboard.png",
    featured: false,
  },
];

const certificates = [
  {
    name: "Full Stack Web Bootcamp",
    issuer: "Udemy",
    year: "2022",
    image: "/assets/certificates/certif-web.jpg",
  },
  {
    name: "Flutter Mobile App Bootcamp",
    issuer: "Udemy",
    year: "2023",
    image: "/assets/certificates/certif-flutter.jpg",
  },
  {
    name: "AI Engineering Bootcamp",
    issuer: "Udemy",
    year: "2026",
    image: "/assets/certificates/certif-ai-engineer.jpg",
  },
];

export { skills, projects, certificates };

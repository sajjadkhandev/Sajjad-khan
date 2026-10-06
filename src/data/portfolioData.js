export const personalInfo = {
  name: "Sajjad Khan",
  role: "MERN Stack Developer",
  status: "Available for work",
  experienceLevel: "~1 Year",
  location: {
    current: "Karachi, Pakistan",
    origin: "Waziristan, Pakistan",
    display: "Karachi, Pakistan (Orig. Waziristan)"
  },
  avatar: "/images/sajjad-khan.jpg",
  tagline: "MERN Stack Developer with 1 year of experience building modern and responsive web applications. I create clean, user-friendly, and scalable solutions using React.js, Node.js, Express.js, and MongoDB.",
  bio: [
    "Passionate MERN Stack Developer based in Karachi, originally from Waziristan, Pakistan. With roughly one year of focused, hands-on engineering experience, I specialize in architecting responsive user interfaces and robust server-side APIs.",
    "My development philosophy centers on writing clean, modular code, crafting predictable database structures, and building seamless digital experiences that solve real-world problems."
  ],
  social: {
    github: "https://github.com/sajjadkhandev",
    linkedin: "https://www.linkedin.com/in/sajjad-wazir-251a20361/",
    email: "sajjadwazir4459@gmail.com",
    phone: "03069122770",
    phoneDisplay: "+92 306 9122770",
    whatsapp: "https://wa.me/923069122770",
    whatsappDirect: "https://wa.me/923069122770?text=Hi%20Sajjad,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
  }
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export const experienceData = [
  {
    role: "MERN Stack Developer",
    period: "1 Year",
    badge: "Full-Stack Engineering",
    description:
      "Developing full-stack web applications with React.js, Node.js, Express.js, and MongoDB. Creating reusable components, RESTful endpoints, database schemas, and maintainable codebases.",
    highlights: [
      "Engineered responsive, accessible single-page web applications utilizing modern React.js patterns and Tailwind CSS.",
      "Constructed RESTful HTTP APIs and middleware using Express.js and Node.js for reliable client-server communication.",
      "Designed and queried NoSQL database schemas using MongoDB and Mongoose, prioritizing data integrity and efficient queries.",
      "Employed modular component architecture and Git-based collaborative workflows for clean version control."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "JavaScript (ES6+)", "Git"]
  }
];

export const skillCategories = [
  {
    title: "Frontend Engineering",
    description: "Crafting fluid, pixel-perfect, and accessible user interfaces.",
    gradient: "from-[#1DCD9F]/20 via-[#2a9d8f]/10 to-transparent",
    borderHover: "hover:border-[#1DCD9F]/70",
    glowColor: "group-hover:shadow-[0_12px_30px_-6px_rgba(29,205,159,0.25)]",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Core Framework", iconName: "Atom" },
      { name: "JavaScript (ES6+)", level: "Modern Standards", iconName: "Code2" },
      { name: "Tailwind CSS", level: "Utility-First Styling", iconName: "Palette" },
      { name: "HTML5", level: "Semantic Markup", iconName: "FileCode" },
      { name: "CSS3", level: "Responsive Layouts", iconName: "Layers" }
    ]
  },
  {
    title: "Backend & Database",
    description: "Architecting resilient RESTful APIs and optimized database layers.",
    gradient: "from-[#2a9d8f]/25 via-[#1DCD9F]/10 to-transparent",
    borderHover: "hover:border-[#1DCD9F]/70",
    glowColor: "group-hover:shadow-[0_12px_30px_-6px_rgba(29,205,159,0.25)]",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Runtime Engine", iconName: "Cpu" },
      { name: "Express.js", level: "API Framework", iconName: "Network" },
      { name: "MongoDB", level: "NoSQL Database", iconName: "Database" },
      { name: "REST APIs", level: "HTTP Architecture", iconName: "Workflow" }
    ]
  },
  {
    title: "Tools & Workflow",
    description: "Modern development toolchains ensuring efficient delivery and versioning.",
    gradient: "from-[#1DCD9F]/20 via-[#222222]/30 to-transparent",
    borderHover: "hover:border-[#1DCD9F]/70",
    glowColor: "group-hover:shadow-[0_12px_30px_-6px_rgba(29,205,159,0.25)]",
    icon: "Terminal",
    skills: [
      { name: "Git", level: "Version Control", iconName: "GitBranch" },
      { name: "GitHub", level: "Code Collaboration", iconName: "GitPullRequest" },
      { name: "Postman", level: "API Verification", iconName: "Send" },
      { name: "Vite", level: "Modern Bundler", iconName: "Zap" }
    ]
  }
];

export const projectsData = [
  {
    id: "shopsphere",
    title: "ShopSphere — MERN E-Commerce Platform",
    category: "E-Commerce",
    badge: "Full-Stack Application",
    tagline: "High-performance digital storefront with secure authentication, cart state, and inventory management.",
    description:
      "A complete full-stack e-commerce web application engineered with the MERN stack. Features comprehensive product catalogs with multi-faceted filtering, persistent shopping cart management, user order tracking, and an administrative inventory control system.",
    highlights: [
      "Secured JWT authentication and role-based access control for customers and store administrators.",
      "Optimized MongoDB aggregation pipelines for instant full-text product search and category filtering.",
      "Fluid, mobile-responsive checkout workflow with simulated payment verification and order history."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://shopsphere-mern.example.com",
    githubUrl: "https://github.com/sajjadkhandev/shopsphere-mern",
    accentColor: "from-[#1DCD9F]/25 via-[#2a9d8f]/15 to-transparent",
    borderHover: "hover:border-[#1DCD9F]/70",
    glowHover: "hover:shadow-[0_14px_35px_-6px_rgba(29,205,159,0.3)]",
    iconColor: "text-[#1DCD9F]"
  },
  {
    id: "taskflow",
    title: "TaskFlow — Collaborative Kanban Board",
    category: "Productivity",
    badge: "Workflow Management",
    tagline: "Agile task tracking solution featuring fluid drag-and-drop state, deadlines, and project analytics.",
    description:
      "A modern task management application built to streamline agile workflows. Enables users to organize sprint backlogs, move cards across customizable Kanban columns, assign priority tags, and monitor completion progress in real-time.",
    highlights: [
      "Interactive drag-and-drop interface for intuitive task movement across pipeline stages.",
      "RESTful API architecture handling atomic MongoDB updates with activity history logs.",
      "Responsive obsidian dashboard layout with deadline alerts and priority-level filtering."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://taskflow-app.example.com",
    githubUrl: "https://github.com/sajjadkhandev/taskflow-mern",
    accentColor: "from-[#2a9d8f]/30 via-[#1DCD9F]/15 to-transparent",
    borderHover: "hover:border-[#1DCD9F]/70",
    glowHover: "hover:shadow-[0_14px_35px_-6px_rgba(29,205,159,0.3)]",
    iconColor: "text-[#1DCD9F]"
  },
  {
    id: "devpulse",
    title: "DevPulse — Tech Community & Blog Hub",
    category: "Content & Web",
    badge: "Publishing Platform",
    tagline: "Full-stack technical publishing platform with live markdown rendering and community engagement.",
    description:
      "A developer-focused blogging and discussion portal designed for sharing code walkthroughs and engineering tutorials. Supports rich markdown authoring with live syntax highlighting, nested discussion threads, and tag-based article categorization.",
    highlights: [
      "Real-time markdown editor with instant preview and automatic code syntax highlighting.",
      "NoSQL schema designed for efficient querying of nested comments and article reactions.",
      "Clean reader-centric UI optimized for high-contrast accessibility and snappy mobile browsing."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    liveUrl: "https://devpulse-blog.example.com",
    githubUrl: "https://github.com/sajjadkhandev/devpulse-mern",
    accentColor: "from-[#1DCD9F]/20 via-[#222222]/30 to-transparent",
    borderHover: "hover:border-[#1DCD9F]/70",
    glowHover: "hover:shadow-[0_14px_35px_-6px_rgba(29,205,159,0.3)]",
    iconColor: "text-[#1DCD9F]"
  },
  {
    id: "reserveease",
    title: "ReserveEase — Resource & Desk Booking System",
    category: "SaaS & Systems",
    badge: "Booking Engine",
    tagline: "Smart workspace reservation engine with automated collision prevention and time-slot scheduling.",
    description:
      "An automated space and resource reservation platform created to manage office workspaces, meeting rooms, and shared equipment. Implements rigorous overlap-prevention algorithms to ensure smooth booking experiences without schedule conflicts.",
    highlights: [
      "Server-side validation logic eliminating overlapping time slot bookings in MongoDB.",
      "Interactive visual calendar grid with instant availability status and reservation filters.",
      "Complete user booking dashboard with real-time cancellation and confirmation management."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://reserveease.example.com",
    githubUrl: "https://github.com/sajjadkhandev/reserveease-mern",
    accentColor: "from-[#2a9d8f]/30 via-[#222222]/30 to-transparent",
    borderHover: "hover:border-[#1DCD9F]/70",
    glowHover: "hover:shadow-[0_14px_35px_-6px_rgba(29,205,159,0.3)]",
    iconColor: "text-[#1DCD9F]"
  }
];

export const terminalCodeSnippets = [
  { line: "const developer = {", color: "text-indigo-400" },
  { line: '  name: "Sajjad Khan",', color: "text-slate-300" },
  { line: '  role: "MERN Stack Developer",', color: "text-cyan-400" },
  { line: '  location: "Karachi, Pakistan",', color: "text-emerald-400" },
  { line: '  roots: "Waziristan, Pakistan",', color: "text-emerald-400" },
  { line: '  experience: "~1 Year Full-Stack",', color: "text-amber-300" },
  { line: "  stack: ['MongoDB', 'Express', 'React', 'Node'],", color: "text-sky-300" },
  { line: '  status: "Available for high-impact opportunities",', color: "text-teal-300" },
  { line: "};", color: "text-indigo-400" }
];

import {
  Layers,
  Eye,
  Gamepad2,
  Code2,
  Users,
  Globe,
  Trophy,
  Monitor,
  Database,
  Cpu,
  Palette,
  Smartphone,
  Zap,
} from "lucide-react";

// ==========================================
// PERSONAL INFO & CONTACT
// ==========================================
export const personalInfo = {
  name: "Jane Doe",
  role: "Frontend Developer",
  availableForFreelance: true,
  heroText:
    "Building digital experiences that combine brutalist aesthetics with flawless performance.",
  aboutText:
    "I'm a Frontend Developer and UI Engineer specializing in building scalable web applications. I bridge the gap between design and engineering, combining brutalist aesthetics with flawless performance.",
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:hello@example.com",
  },
  contact: {
    title: "Let's build something brutal.",
    description:
      "I'm currently accepting new projects. I specialize in complex web applications, design systems, and performance optimization.",
    availability: "Open for work",
  },
};

// ==========================================
// STATS
// ==========================================
export const stats = [
  {
    icon: Code2,
    value: 40,
    suffix: "+",
    label: "Projects Delivered",
    color: "yellow" as const,
  },
  {
    icon: Users,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    color: "cyan" as const,
  },
  {
    icon: Globe,
    value: 12,
    suffix: "+",
    label: "Countries Served",
    color: "pink" as const,
  },
  {
    icon: Trophy,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    color: "lime" as const,
  },
];

// ==========================================
// TECH STACK
// ==========================================
export const techStack = [
  { name: "React", icon: "⚛️", color: "cyan" as const },
  { name: "Next.js", icon: "▲", color: "yellow" as const },
  { name: "TypeScript", icon: "TS", color: "pink" as const },
  { name: "Tailwind CSS", icon: "🌊", color: "yellow" as const },
  { name: "Framer Motion", icon: "✨", color: "lime" as const },
  { name: "Python", icon: "🐍", color: "lime" as const },
  { name: "FastAPI", icon: "🚀", color: "cyan" as const },
  { name: "PostgreSQL", icon: "🐘", color: "pink" as const },
];

// ==========================================
// EXPERIENCES
// ==========================================
export const experiences = [
  {
    id: 1,
    num: "01",
    role: "Frontend Developer",
    company: "IGMC Indonesia",
    location: "Indonesia",
    period: "2023 — Present",
    highlights: [
      "UI/UX implementation from Figma to pixel-perfect React components",
      "REST & GraphQL API integration with robust error handling",
      "Performance optimization achieving 95+ Lighthouse scores",
      "Design system maintenance and component library architecture",
    ],
    color: "yellow" as const,
    stripColor: "bg-accent-yellow",
  },
  {
    id: 2,
    num: "02",
    role: "Freelance Software Engineer",
    company: "Self-Employed",
    location: "Remote / International",
    period: "2021 — Present",
    highlights: [
      "End-to-end development of ERP and WMS systems for startups",
      "Real-time computer vision dashboards with Python backends",
      "Game UI ecosystems with custom Lua scripting engines",
      "Direct client collaboration across US, EU, and APAC timezones",
    ],
    color: "cyan" as const,
    stripColor: "bg-accent-cyan",
  },
  {
    id: 3,
    num: "03",
    role: "Junior Frontend Developer",
    company: "Tech Startup",
    location: "Indonesia",
    period: "2020 — 2021",
    highlights: [
      "Built responsive web applications using React and Vue.js",
      "Integrated third-party APIs including payment gateways",
      "Collaborated with UX team to implement design systems",
      "Implemented CI/CD pipelines for automated deployments",
    ],
    color: "pink" as const,
    stripColor: "bg-accent-pink",
  },
  {
    id: 4,
    num: "04",
    role: "Web Developer Intern",
    company: "Digital Agency",
    location: "Indonesia",
    period: "2019 — 2020",
    highlights: [
      "Developed WordPress themes and custom plugins",
      "Landing page development with HTML, CSS, and JavaScript",
      "Cross-browser compatibility testing and bug fixes",
      "Client communication and requirement gathering",
    ],
    color: "lime" as const,
    stripColor: "bg-accent-lime",
  },
];

// ==========================================
// PROJECTS
// ==========================================
export const projects = [
  {
    id: 1,
    num: "01",
    title: "NexusFlow 2026",
    year: "2026",
    status: "In Production",
    description:
      "ERP Startup integrating WMS, POS, and HR modules using Python and modern frontend architecture. Scalable, real-time, and designed for enterprise growth.",
    tags: ["Python", "React", "Next.js", "PostgreSQL"],
    color: "yellow" as const,
    stripColor: "bg-accent-yellow",
    icon: Layers,
    category: "web",
    details: {
      features: [
        "Unified WMS + POS + HR module dashboard",
        "Role-based access control (RBAC)",
        "Real-time inventory sync across warehouses",
        "Automated reporting & analytics pipeline",
        "Multi-language & multi-currency support",
      ],
      architecture: [
        "Next.js 15 App Router with React Server Components",
        "Python FastAPI microservices architecture",
        "PostgreSQL + Redis caching layer",
        "Docker & Kubernetes deployment pipeline",
        "Tailwind CSS + shadcn/ui design system",
      ],
      impact:
        "Reduced operational overhead by 40% and unified 3 previously siloed systems into a single ERP platform.",
    },
  },
  {
    id: 2,
    num: "02",
    title: "YOLOv8 Vision System",
    year: "2025",
    status: "Deployed",
    description:
      "Real-Time Automated Object Detection system built with YOLOv8, OpenCV, and a custom dashboard. Optimized for edge deployment and high-throughput processing.",
    tags: ["Python", "YOLOv8", "OpenCV", "FastAPI"],
    color: "pink" as const,
    stripColor: "bg-accent-pink",
    icon: Eye,
    category: "ai",
    details: {
      features: [
        "Real-time object detection at 30 FPS",
        "Multi-class classification dashboard",
        "Alert system for anomaly detection",
        "Video recording & playback with annotations",
        "Edge-optimized model export (ONNX/TensorRT)",
      ],
      architecture: [
        "YOLOv8 + OpenCV Python inference engine",
        "FastAPI WebSocket for real-time stream",
        "React dashboard with Canvas overlay rendering",
        "MinIO object storage for recorded footage",
        "NVIDIA Jetson edge deployment support",
      ],
      impact:
        "Achieved 94.7% mAP on custom dataset and reduced false positives by 60% over previous system.",
    },
  },
  {
    id: 3,
    num: "03",
    title: "Subterra",
    year: "2024",
    status: "Live",
    description:
      "Complex game scripting and UI development across an interconnected ecosystem. Custom Lua engines, real-time multiplayer UIs, and performance-critical rendering.",
    tags: ["Lua", "React", "Game UI", "WebSockets"],
    color: "lime" as const,
    stripColor: "bg-accent-lime",
    icon: Gamepad2,
    category: "game",
    details: {
      features: [
        "Custom Lua-to-React bridge for UI rendering",
        "Real-time multiplayer inventory sync",
        "Dynamic HUD with sub-16ms render times",
        "Cross-platform controller support",
        "In-game economy dashboard",
      ],
      architecture: [
        "Roblox/FiveM Lua backend server",
        "React frontend embedded via CEF/WebViews",
        "Zustand state management for rapid updates",
        "Custom WebSocket protocol for telemetry",
        "Framer Motion for complex UI animations",
      ],
      impact:
        "Supported 500+ concurrent players with zero UI-related crash reports during launch week.",
    },
  },
  {
    id: 4,
    num: "04",
    title: "E-Commerce Platform",
    year: "2024",
    status: "Live",
    description:
      "Full-stack e-commerce solution with multi-vendor support, real-time inventory, and AI-powered recommendations. Built for scale with 10k+ concurrent users.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    color: "cyan" as const,
    stripColor: "bg-accent-cyan",
    icon: Layers,
    category: "web",
    details: {
      features: [
        "Multi-vendor dashboard",
        "AI-powered recommendations",
        "Real-time inventory tracking",
      ],
      architecture: [
        "Next.js App Router",
        "Node.js Backend",
        "PostgreSQL + Redis",
      ],
      impact: "Increased sales by 30% and improved inventory management.",
    },
  },
  {
    id: 5,
    num: "05",
    title: "Face Recognition Attendance",
    year: "2023",
    status: "Deployed",
    description:
      "Automated attendance system using face recognition. Features liveness detection, mask detection, and integration with HR management systems.",
    tags: ["Python", "OpenCV", "FaceNet", "FastAPI"],
    color: "pink" as const,
    stripColor: "bg-accent-pink",
    icon: Eye,
    category: "ai",
    details: {
      features: [
        "Liveness detection",
        "Mask detection",
        "HR system integration",
      ],
      architecture: [
        "Python + OpenCV",
        "FaceNet model",
        "FastAPI Backend",
      ],
      impact: "Automated attendance tracking for 500+ employees.",
    },
  },
  {
    id: 6,
    num: "06",
    title: "Racing Game HUD",
    year: "2023",
    status: "Live",
    description:
      "Custom HUD system for a multiplayer racing game. Real-time leaderboards, telemetry displays, and interactive menu system built with React and custom shaders.",
    tags: ["Lua", "React", "WebGPU", "WebSockets"],
    color: "lime" as const,
    stripColor: "bg-accent-lime",
    icon: Gamepad2,
    category: "game",
    details: {
      features: [
        "Real-time telemetry displays",
        "Interactive menu system",
        "Dynamic leaderboards",
      ],
      architecture: [
        "Lua backend",
        "React UI",
        "WebSockets",
      ],
      impact: "Improved player immersion and UI responsiveness.",
    },
  },
];

// ==========================================
// SERVICES
// ==========================================
export const services = [
  {
    id: 1,
    num: "01",
    title: "Frontend Architecture",
    description:
      "Scalable React/Next.js applications with TypeScript. Design systems, component libraries, and performance-first engineering.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Design Systems"],
    icon: Monitor,
    color: "yellow" as const,
    stripColor: "bg-accent-yellow",
    details: {
      deliverables: [
        "Component library & design system",
        "Performance-optimized build pipeline",
        "Accessibility audit (WCAG 2.1 AA)",
        "Storybook documentation",
        "CI/CD integration setup",
      ],
      process: [
        "Discovery & tech stack audit",
        "Architecture blueprint & data flow",
        "Component library scaffolding",
        "Performance benchmarking",
        "Documentation & handoff",
      ],
    },
  },
  {
    id: 2,
    num: "02",
    title: "Full-Stack Integration",
    description:
      "End-to-end systems connecting modern frontends to Python/FastAPI backends. REST, GraphQL, WebSocket, real-time data pipelines.",
    tags: ["Python", "FastAPI", "GraphQL", "WebSocket", "PostgreSQL"],
    icon: Database,
    color: "cyan" as const,
    stripColor: "bg-accent-cyan",
    details: {
      deliverables: [
        "RESTful or GraphQL API design",
        "Database schema & migration scripts",
        "Authentication & authorization layer",
        "Real-time WebSocket handlers",
        "Swagger/OpenAPI documentation",
      ],
      process: [
        "Requirements analysis",
        "API contract definition",
        "Backend scaffolding & DB setup",
        "Frontend integration & testing",
        "Deployment & monitoring",
      ],
    },
  },
  {
    id: 3,
    num: "03",
    title: "Computer Vision UI",
    description:
      "Dashboards and control interfaces for YOLO, OpenCV, and ML pipelines. Real-time video feeds with low-latency rendering.",
    tags: ["YOLOv8", "OpenCV", "Real-time", "WebRTC", "Dashboards"],
    icon: Cpu,
    color: "pink" as const,
    stripColor: "bg-accent-pink",
    details: {
      deliverables: [
        "Real-time video feed dashboard",
        "Bounding box overlay components",
        "Alert & notification system",
        "Analytics & reporting views",
        "Edge deployment config",
      ],
      process: [
        "Hardware constraints analysis",
        "Pipeline architecture",
        "UI prototype for monitoring",
        "Integration with inference engine",
        "Stress testing & optimization",
      ],
    },
  },
  {
    id: 4,
    num: "04",
    title: "Game UI & Scripting",
    description:
      "Complex game UI ecosystems and Lua scripting. Multiplayer interfaces, HUD design, and performance-critical rendering layers.",
    tags: ["Lua", "Game UI", "WebSockets", "HUD", "Multiplayer"],
    icon: Palette,
    color: "lime" as const,
    stripColor: "bg-accent-lime",
    details: {
      deliverables: [
        "Custom Lua-to-Web bridge",
        "In-game HUD and menus",
        "Inventory & economy interfaces",
        "Admin control panels",
        "Asset optimization pipeline",
      ],
      process: [
        "Engine constraints review",
        "Bridge architecture setup",
        "UI state management design",
        "Component development",
        "In-engine integration testing",
      ],
    },
  },
  {
    id: 5,
    num: "05",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications with React Native and Expo. Native modules, push notifications, and offline-first architecture.",
    tags: ["React Native", "Expo", "iOS", "Android", "TypeScript"],
    icon: Smartphone,
    color: "yellow" as const,
    stripColor: "bg-accent-yellow",
    details: {
      deliverables: [
        "Cross-platform application",
        "Offline-first architecture",
        "Push notifications setup",
        "App Store & Google Play deployment",
      ],
      process: [
        "UI/UX Design for Mobile",
        "Component Development",
        "Native API Integration",
        "Testing & QA",
        "Store Submission",
      ],
    },
  },
  {
    id: 6,
    num: "06",
    title: "Performance Optimization",
    description:
      "Comprehensive performance audits and optimization. Bundle analysis, lazy loading, caching strategies, and Core Web Vitals improvement.",
    tags: ["Lighthouse", "Webpack", "Vite", "Caching", "Analytics"],
    icon: Zap,
    color: "cyan" as const,
    stripColor: "bg-accent-cyan",
    details: {
      deliverables: [
        "Performance audit report",
        "Bundle size reduction",
        "Core Web Vitals improvements",
        "Caching strategy implementation",
      ],
      process: [
        "Initial Audit",
        "Bottleneck Identification",
        "Optimization Implementation",
        "Final Audit & Reporting",
      ],
    },
  },
];

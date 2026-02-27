import cinemaniaCover from "@/assets/cinemania.png";
import focusframeCover from "@/assets/focusframe.png";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  role: string;
  githubUrl: string;
  liveDemoUrl: string;
  image: string;
  teamSize: number;
  category: string;
  features: string[];
  additionalFeatures?: string[];
  technicalRequirements?: string[];
  highlights: string[];
  apiInfo?: { provider: string; description: string };
}

export const projects: Project[] = [
  {
    id: "cinemania",
    title: "Cinemania",
    subtitle: "Digital Movie Discovery Platform",
    description:
      "A modern, responsive movie discovery experience powered by real-time film data from TMDB API. Cinemania is a fully responsive, multi-page web application developed as a collaborative group project within the GoIT Full Stack Developer Program. Users can browse trending films, search movies by keyword or year, explore upcoming releases, and manage a personalized movie library.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Vite", "TMDB API", "REST API", "Git & GitHub"],
    role: "Footer & Team Modal",
    githubUrl: "https://github.com/kutluhangil",
    liveDemoUrl: "https://kutluhangil.github.io",
    image: cinemaniaCover,
    teamSize: 10,
    category: "Team Project",
    apiInfo: {
      provider: "TMDB (The Movie Database)",
      description: "Real-time film data including trending movies, upcoming releases, and detailed movie information.",
    },
    features: [
      "Mobile-first responsive layout (320px / 768px / 1280px)",
      "Theme switcher (Dark / Light) with localStorage persistence",
      "Hero section with daily trending movie",
      "Movie detail modal with trailer support",
      "My Library with add/remove logic (localStorage)",
      "Footer with team modal (GoIT Students)",
    ],
    additionalFeatures: [
      "Weekly Trends & Upcoming This Month sections",
      "Catalog search with year filter",
      "Server-side pagination & load more functionality",
      "Scroll-to-top button",
      "Global loader (spinner) for async requests",
    ],
    technicalRequirements: [
      "Semantic HTML5 structure",
      "Modern-normalize integrated",
      "Fonts via @font-face",
      "Optimized retina-ready images",
      "Passed W3C HTML & CSS validation",
      "PageSpeed score ≥ 80%",
      "No console errors",
      "Published on GitHub Pages",
    ],
    highlights: [
      "Built with Vanilla JavaScript – no frameworks",
      "Mobile-First approach with modern frontend best practices",
      "Modular CSS architecture & asynchronous JS logic",
      "Collaborative team of 10 developers",
    ],
  },
  {
    id: "focusframe",
    title: "Focus.Frame",
    subtitle: "Single-Page Photography Website",
    description:
      "A single-page, fully responsive photography school website developed as part of the GoIT Full Stack Developer course. Focus.Frame simulates a real landing page experience with sections for courses, mentors, reviews, contact information, and a professional footer — all built pixel-perfect from Figma mockups.",
    technologies: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Figma", "Git & GitHub"],
    role: "Footer",
    githubUrl: "https://github.com/kutluhangil",
    liveDemoUrl: "https://kutluhangil.github.io",
    image: focusframeCover,
    teamSize: 8,
    category: "Team Project",
    features: [
      "Fully responsive (mobile 375px – tablet 768px – desktop 1280px+)",
      "Hero section introducing the school",
      "Course cards (Basics, Landscape, Portrait) with Sign Up links",
      "Mentor profiles with photos and experience",
      "Student reviews with ratings",
      "Sign Up form with input validation",
      "Footer with social links (Instagram, YouTube, Facebook) and contact info",
      "Mobile sidebar navigation filling viewport height",
    ],
    technicalRequirements: [
      "Must pass W3C HTML & CSS validation",
      "Semantic HTML5 standards compliance",
      "Externally linked fonts",
      "Optimized images for Retina displays",
      "All SVG icons linked via sprite",
      "Favicon image included",
      "Phone number with tel: protocol",
      "Social links open in new tab",
    ],
    highlights: [
      "Pixel-perfect Figma implementation",
      "Semantic HTML5 structure",
      "SVG sprite icons throughout",
      "Retina-ready optimized images",
      "Collaborative team using GitHub branches, PRs, and Trello",
    ],
  },
];

export const getProjectById = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);

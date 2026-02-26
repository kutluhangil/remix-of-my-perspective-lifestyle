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
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "cinemania",
    title: "Cinemania",
    subtitle: "Digital Movie Discovery Platform",
    description:
      "A modern, responsive movie discovery experience powered by real-time film data from TMDB API. Users can browse trending films, search movies by keyword or year, explore upcoming releases, and manage a personalized movie library.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Vite", "TMDB API", "REST API"],
    role: "Footer & Team Modal",
    githubUrl: "https://github.com/kutluhangil",
    liveDemoUrl: "https://kutluhangil.github.io",
    image: cinemaniaCover,
    teamSize: 10,
    category: "Team Project",
    features: [
      "Mobile-first responsive layout (320px / 768px / 1280px)",
      "Theme switcher (Dark / Light) with localStorage persistence",
      "Hero section with daily trending movie",
      "Movie detail modal with trailer support",
      "My Library with add/remove logic (localStorage)",
      "Weekly Trends & Upcoming This Month sections",
      "Catalog search with year filter",
      "Server-side pagination & load more",
    ],
    highlights: [
      "Built with Vanilla JavaScript – no frameworks",
      "PageSpeed score ≥ 80%",
      "Passed W3C HTML & CSS validation",
      "Collaborative team of 10 developers",
    ],
  },
  {
    id: "focusframe",
    title: "Focus.Frame",
    subtitle: "Single-Page Photography Website",
    description:
      "A single-page, fully responsive photography school website developed as part of the GoIT Full Stack Developer course. The page includes sections for courses, mentors, reviews, contact information, and a professional footer.",
    technologies: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Figma"],
    role: "Footer",
    githubUrl: "https://github.com/kutluhangil",
    liveDemoUrl: "https://kutluhangil.github.io",
    image: focusframeCover,
    teamSize: 8,
    category: "Team Project",
    features: [
      "Fully responsive (mobile–tablet–desktop)",
      "Hero section introducing the school",
      "Course cards (Basics, Landscape, Portrait)",
      "Mentor profiles with photos",
      "Student reviews with ratings",
      "Sign Up form with validation",
      "Footer with social links and contact info",
    ],
    highlights: [
      "Pixel-perfect Figma implementation",
      "Semantic HTML5 structure",
      "SVG sprite icons",
      "Retina-ready optimized images",
    ],
  },
];

export const getProjectById = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);

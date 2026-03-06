export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  role: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "CrestScan",
    description:
      "Electronic Medical Records platform with POS, result checker, and desktop application.",
    stack: ["Next.js", "TypeScript", "Express.js", "Electron", "PostgreSQL"],
    liveUrl: "https://crestscan.org",
    role: "Full-Stack Engineer",
    image: "/images/crestscan.png",
  },
  {
    title: "Miel",
    description:
      "E-commerce backend architecture for a fashion brand with payments, auth, and analytics.",
    stack: ["NestJS", "TypeScript", "MongoDB", "Google Cloud Run"],
    liveUrl: "https://mielofficial.ng",
    role: "Backend Engineer",
    image: "/images/miel.png",
  },
  {
    title: "Richlist",
    description:
      "Event ticketing platform with event creation, ticket purchases, and real-time chat.",
    stack: ["NestJS", "React", "MongoDB", "AWS", "Socket.io"],
    liveUrl: "https://richlists-frontend.vercel.app/",
    role: "Full-Stack Developer",
    image: "/images/richlist.png",
  },
  {
    title: "NYSC Guide",
    description:
      "Full-stack content platform for NYSC updates with blog publishing and admin dashboard.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "https://nyscguide-zeta.vercel.app",
    role: "Full-Stack Developer",
    image: "/images/nysc-guide.png",
  },
];
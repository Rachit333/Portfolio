"use client";

import { useState } from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllExp, setShowAllExp] = useState(false);

  const skills = {
    languages: ["HTML", "CSS", "JavaScript", "Java", "Python", "TypeScript", "SQL", "PHP"],
    frameworks: ["React.js", "Express.js", "Node.js", "PostgreSQL", "MongoDB", "Next.js", "TailWind CSS"],
    tools: ["Firebase", "Redis", "Gemini API", "JWT", "bcryptjs", "Ollama"],
  };

  const experiences = [
    {
      company: "AI-Powered Web Development",
      roles: [
        {
          title: "Full-Stack Developer",
          period: "Jan 2026 - Present",
          description: "Built Nebulux with AI code generation and cloud sync",
          tags: ["Next.js", "TypeScript", "Firebase", "Gemini API"],
        },
      ],
    },
    {
      company: "Freelance Development",
      roles: [
        {
          title: "Full-Stack Developer",
          period: "Dec 2024 - Feb 2025",
          description: "Built client-facing full-stack applications with JWT authentication",
          tags: ["Full-Stack", "JWT", "Production"],
        },
      ],
    },
  ];

  const projects = [
    {
      name: "Nebulux: AI-Powered Web IDE",
      period: "Jan 2026 - Present",
      description: "Real-time editing, AI code generation, Redis-backed autosave, Firebase cloud sync",
      tags: ["Next.js", "TypeScript", "Firebase", "Redis", "Gemini API"],
      link: "https://github.com/Rachit333",
    },
    {
      name: "GrindX: Coding Practice Tracker",
      period: "Sept 2024 - Dec 2024",
      description: "Full-stack platform with LeetCode/GFG API integration, ML recommendations, collaborative rooms",
      tags: ["Next.js", "MongoDB", "Express", "Node.js", "ML"],
      link: "https://github.com/Rachit333",
    },
    {
      name: "Niraamya: Healthcare Management",
      period: "Oct 2023 - Feb 2024",
      description: "Secure REST APIs with role-based access control and AI medical chatbot",
      tags: ["Node.js", "Express", "MongoDB", "JWT", "LLM"],
      link: "https://github.com/Rachit333",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <Header />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <Hero />
        <About />
        <Stack skills={skills} />
        <Experience experiences={experiences} showAll={showAllExp} />
        <Projects
          projects={projects}
          showAll={showAllProjects}
          onToggle={() => setShowAllProjects(!showAllProjects)}
        />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

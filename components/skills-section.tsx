"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "PHP", "HTML / CSS"],
    },
    {
      category: "Frameworks & Tools",
      skills: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Tailwind CSS"],
    },
    {
      category: "Concepts",
      skills: ["Data Structures", "Algorithms", "System Design", "Networking", "Database Design"],
    },
  ]

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      const columns = gridRef.current?.querySelectorAll(":scope > div")
      if (columns) {
        gsap.set(columns, { opacity: 1, y: 0 })
        gsap.from(columns, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-16 flex items-end justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">03 / Toolkit</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">SKILLS & TECH STACK</h2>
        </div>
        <p className="hidden md:block max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
          A curated set of technologies and concepts that power my development workflow.
        </p>
      </div>

      {/* Skills grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} category={category} index={index} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({ category, index }: { category: { category: string; skills: string[] }; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative border border-border/40 p-8 transition-all duration-500 cursor-default overflow-hidden",
        isHovered && "border-accent/60",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background layer */}
      <div
        className={cn(
          "absolute inset-0 bg-accent/5 transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Corner line */}
      <div
        className={cn(
          "absolute top-0 right-0 w-12 h-12 transition-all duration-500",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3
          className={cn(
            "font-[var(--font-bebas)] text-2xl tracking-tight mb-8 transition-colors duration-300",
            isHovered ? "text-accent" : "text-foreground",
          )}
        >
          {category.category}
        </h3>

        <ul className="space-y-3">
          {category.skills.map((skill, skillIndex) => (
            <li
              key={skillIndex}
              className={cn(
                "font-mono text-sm transition-all duration-300 flex items-center gap-3",
                isHovered ? "text-accent" : "text-muted-foreground",
              )}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  isHovered ? "bg-accent scale-125" : "bg-accent/40",
                )}
              />
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Index marker */}
      <span
        className={cn(
          "absolute bottom-4 right-4 font-mono text-[10px] transition-colors duration-300",
          isHovered ? "text-accent" : "text-muted-foreground/40",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  )
}

"use client"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const buildingItems = [
  {
    title: "Nebulux",
    category: "AI-powered developer IDE",
    description: "Building an advanced browser-based IDE with real-time code execution, AI-assisted code generation, and cloud synchronization.",
  },
  {
    title: "AI-assisted development tools",
    category: "Current interest",
    description: "Exploring tools that use LLMs to improve developer productivity and code quality.",
  },
  {
    title: "Intelligent developer workflows",
    category: "Current interest",
    description: "Designing systems that make development faster, more intuitive, and more enjoyable.",
  },
  {
    title: "Scalable backend architecture",
    category: "Current interest",
    description: "Learning and implementing patterns for building systems that scale to millions of users.",
  },
]

export function BuildingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!sectionRef.current || !cursorRef.current) return

    const section = sectionRef.current
    const cursor = cursorRef.current

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 24,
        y: e.clientY - 24,
        duration: 0.5,
        ease: "power3.out",
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    section.addEventListener("mousemove", handleMouseMove)
    section.addEventListener("mouseenter", handleMouseEnter)
    section.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      section.removeEventListener("mousemove", handleMouseMove)
      section.removeEventListener("mouseenter", handleMouseEnter)
      section.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in from left
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(
          cards,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="signals" ref={sectionRef} className="relative py-32 pl-6 md:pl-28">
      <div
        ref={cursorRef}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-50",
          "w-12 h-12 rounded-full border-2 border-accent bg-accent/10",
          "transition-opacity duration-300 flex items-center justify-center",
          isHovering ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Section header */}
      <div ref={headerRef} className="mb-16 pr-6 md:pr-12 flex items-end justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">04 / Currently</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">BUILDING NOW</h2>
        </div>
        <p className="hidden md:block max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
          Projects and ideas I'm actively working on and exploring right now.
        </p>
      </div>

      {/* Grid of building items */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-6 md:pr-12">
        {buildingItems.map((item, index) => (
          <BuildingCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

function BuildingCard({
  item,
  index,
}: {
  item: { title: string; category: string; description: string }
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <article
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
        {/* Category label */}
        <span
          className={cn(
            "font-mono text-[10px] uppercase tracking-[0.3em] mb-4 inline-block transition-colors duration-300",
            isHovered ? "text-accent" : "text-muted-foreground",
          )}
        >
          {item.category}
        </span>

        {/* Title */}
        <h3
          className={cn(
            "mt-4 font-[var(--font-bebas)] text-3xl tracking-tight mb-6 transition-colors duration-300",
            isHovered ? "text-accent" : "text-foreground",
          )}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p className={cn("font-mono text-xs leading-relaxed transition-colors duration-300", isHovered ? "text-foreground" : "text-muted-foreground")}>
          {item.description}
        </p>
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
    </article>
  )
}

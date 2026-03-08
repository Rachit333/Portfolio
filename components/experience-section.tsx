"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !contentRef.current) return

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

      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">03 / Background</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">EXPERIENCE</h2>
      </div>

      {/* Content */}
      <div ref={contentRef} className="max-w-3xl space-y-16">
        {/* Work Experience */}
        <div>
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-2">Freelance Full-Stack Developer</h3>
              <p className="font-mono text-sm text-muted-foreground">2024 – 2025</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Built and deployed client-facing web applications using modern full-stack technologies.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Implemented secure authentication systems, optimized backend APIs, and scalable database architecture.
            </p>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-2">Education</h3>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-[var(--font-bebas)] text-lg tracking-tight">Bachelor of Technology in Computer Science</p>
            <p className="font-mono text-sm text-muted-foreground">Lovely Professional University</p>
            <p className="font-mono text-sm text-muted-foreground">2022 – 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}

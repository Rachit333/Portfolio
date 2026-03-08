"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
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
    <section ref={sectionRef} id="contact" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30">
      {/* Content */}
      <div ref={contentRef} className="max-w-2xl">
        <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight mb-8">Let&apos;s Work Together</h2>
        
        <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-12">
          Interested in working together or discussing projects? Feel free to reach out through any of these channels.
        </p>

        <div className="space-y-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Email</p>
            <a
              href="mailto:jasoriarachit@gmail.com"
              className="font-mono text-sm text-foreground hover:text-accent transition-colors duration-200"
            >
              jasoriarachit@gmail.com
            </a>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">GitHub</p>
            <a
              href="https://github.com/Rachit333"
              className="font-mono text-sm text-foreground hover:text-accent transition-colors duration-200"
            >
              github.com/Rachit333
            </a>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/rachit-jasoria"
              className="font-mono text-sm text-foreground hover:text-accent transition-colors duration-200"
            >
              linkedin.com/in/rachit-jasoria
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client";

import { useEffect, useRef, useState } from "react";
import { ScrambleTextOnHover } from "@/components/scramble-text";
import { SplitFlapText } from "@/components/split-flap-text";
import { AnimatedNoise } from "@/components/animated-noise";
import { BitmapChevron } from "@/components/bitmap-chevron";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [viewProjectsHover, setViewProjectsHover] = useState(0);
  const [githubHover, setGithubHover] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12"
    >
      <AnimatedNoise opacity={0.03} />

      {/* Left vertical labels */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          SIGNAL
        </span>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full">
        <div className="relative">
          <SplitFlapText text="RACHIT." speed={80} />
        </div>

        <h2 className="font-[var(--font-bebas)] text-muted-foreground/60 text-[clamp(1rem,3vw,2rem)] mt-4 tracking-wide">
          Full-Stack Developer • Systems Builder
        </h2>

        <p className="mt-12 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
          I build full-stack applications, AI-powered developer tools, and
          scalable backend systems. My work focuses on intelligent software,
          real-world problem solving, and building products that developers and
          users actually use.
        </p>

        <div className="mt-16 flex items-center gap-8">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
            onMouseEnter={() => setViewProjectsHover((prev) => prev + 1)}
          >
            <ScrambleTextOnHover
              text="View Projects"
              as="span"
              duration={0.6}
              trigger={viewProjectsHover}
            />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>
          <a
            href="https://github.com/Rachit333"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
            onMouseEnter={() => setGithubHover((prev) => prev + 1)}
          >
            <ScrambleTextOnHover
              text="GitHub"
              as="span"
              duration={0.6}
              trigger={githubHover}
            />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>
          <a
            href="mailto:jasoriarachit@gmail.com"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Floating info tag */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <div className="border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          v1.0 / Personal Portfolio
        </div>
      </div>
    </section>
  );
}

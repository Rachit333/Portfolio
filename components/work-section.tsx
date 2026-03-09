"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BitmapChevron } from "@/components/bitmap-chevron";
import { url } from "inspector";

gsap.registerPlugin(ScrollTrigger);

const experiments = [
  {
    title: "Nebulux",
    medium: "Developer Tool",
    description:
      "AI-powered browser IDE featuring real-time editing, AI code generation, autosave, and cloud sync.",
    url: "https://nebulux.vercel.app/",
    span: "col-span-2 row-span-2",
  },
  {
    title: "GrindX",
    medium: "Developer Platform",
    description:
      "Smart coding practice tracker integrating LeetCode, HackerRank, and GFG with ML-based recommendations.",
    url: "https://grind-x.vercel.app/",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Niraamya",
    medium: "AI Healthcare System",
    description:
      "Full-stack healthcare management platform with role-based APIs and a local LLM medical chatbot.",
    url: "#",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Freelance Systems",
    medium: "Production Web Apps",
    description:
      "Built client-facing full-stack applications with secure JWT authentication and optimized database schemas.",
    url: "#",
    span: "col-span-1 row-span-1",
  },
];

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !cursorRef.current) return;

    const section = sectionRef.current;
    const cursor = cursorRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 24,
        y: e.clientY - 24,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return;

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
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );

      const cards = gridRef.current?.querySelectorAll("article");
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 60, opacity: 0 });
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12"
    >
      {/* Custom cursor for project cards */}
      <div
        ref={cursorRef}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-50",
          "w-12 h-12 rounded-full border-2 border-accent bg-accent/10",
          "transition-opacity duration-300 flex items-center justify-center",
          isHovering ? "opacity-100" : "opacity-0",
        )}
      >
        {isHovering && <BitmapChevron className="w-4 h-4 text-accent" />}
      </div>

      {/* Section header */}
      <div ref={headerRef} className="mb-16 flex items-end justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            02 / Projects
          </span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
            SELECTED WORK
          </h2>
        </div>
        <p className="hidden md:block max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
          Developer tools, AI systems, and production applications built for
          real-world impact.
        </p>
      </div>

      {/* Asymmetric grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]"
      >
        {experiments.map((experiment, index) => (
          <WorkCard
            key={index}
            experiment={experiment}
            index={index}
            persistHover={index === 0}
            onCardHover={setIsHovering}
            isExpanded={expandedCardIndex === index}
            expandedCardIndex={expandedCardIndex}
            onCardHoverChange={(isHovering) => {
              setExpandedCardIndex(isHovering ? index : null);
            }}
          />
        ))}
      </div>
    </section>
  );
}

function WorkCard({
  experiment,
  index,
  persistHover = false,
  onCardHover,
  isExpanded = false,
  expandedCardIndex = null,
  onCardHoverChange,
}: {
  experiment: {
    title: string;
    medium: string;
    description: string;
    url: string;
    span: string;
  };
  index: number;
  persistHover?: boolean;
  onCardHover?: (isHovering: boolean) => void;
  isExpanded?: boolean;
  expandedCardIndex?: number | null;
  onCardHoverChange?: (isHovering: boolean) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isScrollActive, setIsScrollActive] = useState(false);

  // Check if this is a small card (row-span-1) that can expand
  const isSmallCard = experiment.span.includes("row-span-1");
  const canExpand = isSmallCard;

  // Determine if this card should be hidden based on expansion
  const shouldHide = () => {
    if (!expandedCardIndex) return false;
    // GrindX (index 1) and Freelance Systems (index 3) should hide each other
    if (expandedCardIndex === 1 && index === 3) return true; // Hide Freelance when GrindX expanded
    if (expandedCardIndex === 3 && index === 1) return true; // Hide GrindX when Freelance expanded
    return false;
  };

  useEffect(() => {
    if (!isExpanded || !cardRef.current) return;

    const ctx = gsap.context(() => {
      const card = cardRef.current;
      if (!card) return;

      const baseHeight = 200; // md:auto-rows-[200px]
      const expandHeight = baseHeight * 2 + 24; // Two rows + gap

      if (isExpanded) {
        // GrindX (index 1) expands downward only (y: 0)
        // Freelance (index 3) expands upward only (y: negative)
        const translateY = index === 1 ? 0 : -(expandHeight - baseHeight);
        gsap.to(card, {
          height: expandHeight,
          y: translateY,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        gsap.to(card, {
          height: baseHeight,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, [isExpanded, index]);

  useEffect(() => {
    if (!persistHover || !cardRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 80%",
        onEnter: () => setIsScrollActive(true),
      });
    }, cardRef);

    return () => ctx.revert();
  }, [persistHover]);

  const isActive = isHovered || isScrollActive;

  return (
    <a
      href={experiment.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      className={cn(
        "group relative border border-border/40 p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer",
        isExpanded && index === 3 ? "overflow-visible" : "overflow-hidden",
        experiment.span,
        isActive && "border-accent/60",
        isExpanded && "z-20",
      )}
      style={{
        visibility: shouldHide() ? "hidden" : "visible",
        opacity: shouldHide() ? 0 : 1,
        pointerEvents: shouldHide() ? "none" : "auto",
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onCardHover?.(true);
        if (canExpand) {
          onCardHoverChange?.(true);
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onCardHover?.(false);
        if (canExpand) {
          onCardHoverChange?.(false);
        }
      }}
    >
      {/* Background layer */}
      <div
        className={cn(
          "absolute inset-0 bg-accent/5 transition-opacity duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Content */}

        <div className="relative z-10">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {experiment.medium}
          </span>
          <h3
            className={cn(
              "mt-3 font-[var(--font-bebas)] text-2xl md:text-4xl tracking-tight transition-colors duration-300",
              isActive ? "text-accent" : "text-foreground",
            )}
          >
            {experiment.title}
          </h3>
        </div>

      {/* Description - reveals on hover */}
      <div className="relative z-10">
        <p
          className={cn(
            "font-mono text-xs text-muted-foreground leading-relaxed transition-all duration-500 max-w-[280px]",
            index === 2 || isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
        >
          {experiment.description}
        </p>
      </div>

      {/* Index marker */}
      <span
        className={cn(
          "absolute bottom-4 right-4 font-mono text-[10px] transition-colors duration-300",
          isActive ? "text-accent" : "text-muted-foreground/40",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Corner line */}
      <div
        className={cn(
          "absolute top-0 right-0 w-12 h-12 transition-all duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
      </div>
    </a>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/lib/data";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-item", {
        scrollTrigger: {
          trigger: ".skills-item", // element that triggers the animation when scrolled into view
          start: "top 85%", // animation starts when the top of .skills-item hits 85% of the viewport
        },
        y: 30, // elements start 30px **lower** than their normal position
        opacity: 0, // start invisible
        duration: 0.8, // animation lasts 0.8 seconds
        stagger: 0.08, // animate multiple items **one after another**, 0.08s delay
        ease: "power3.out", // easing curve, makes animation smooth and natural
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-32">
      {/* Section label */}
      <div className="skills-item flex items-center gap-4 mb-16">
        <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted">
          02 — Skills
        </span>
        <div className="h-px flex-1 bg-black/8" />
      </div>

      <div className="skills-item mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-text tracking-tight">
          My <span className="text-accent">Stack</span>
        </h2>
      </div>

      <div className="flex flex-col gap-12">
        {skills.map((group) => (
          <div key={group.category} className="skills-item flex flex-col gap-4">
            {/* Category label */}
            <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted">
              {group.category}
            </span>

            {/* Tools */}
            <div className="flex flex-wrap gap-3">
              {group.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group flex items-center gap-2.5 px-4 py-2.5 bg-surface border border-black/6 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 cursor-default"
                >
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={100}
                    height={100}
                    className={`w-4 h-4 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 ${
                      tool.invert ? "opacity-60" : ""
                    }`}
                  />
                  <span className="text-sm font-semibold text-text">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

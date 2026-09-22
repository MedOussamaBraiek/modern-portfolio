"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/lib/data";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-item", {
        scrollTrigger: {
          trigger: ".skills-item",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-32">
      {/* Section label */}
      <div className="skills-item flex items-center gap-4 mb-16">
        <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted">
          {t.skills.sectionLabel}
        </span>
        <div className="h-px flex-1 bg-black/8" />
      </div>

      <div className="skills-item mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-text tracking-tight">
          {t.skills.heading} <span className="text-accent">{t.skills.headingAccent}</span>
        </h2>
      </div>

      <div className="flex flex-col gap-12">
        {skills.map((group) => (
          <div key={group.category} className="skills-item flex flex-col gap-4">
            {/* Category label */}
            <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted">
              {t.skills.categories[group.category] ?? group.category}
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

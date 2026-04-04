"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-item", {
        scrollTrigger: {
          trigger: ".about-item",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="py-32">
      {/* Section label */}
      <div className="about-item flex items-center gap-4 mb-16">
        <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted">
          01 — About
        </span>
        <div className="h-px flex-1 bg-black/8" />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left — Bio */}
        <div className="flex flex-col gap-6">
          <h2 className="about-item text-4xl md:text-5xl font-bold text-text leading-tight tracking-tight">
            I build things <br />
            <span className="text-accent">that matter.</span>
          </h2>

          <p className="about-item text-muted leading-relaxed">
            I&apos;m Oussama, a Full Stack Developer and AI Engineer based in
            Tunisia. I care deeply about writing clean, maintainable code and
            building products that are fast, accessible, and purposeful.
          </p>

          <p className="about-item text-muted leading-relaxed">
            I&apos;ve built everything from real-time chat apps and e-commerce
            platforms to AI-powered portfolios using RAG and LangChain. I work
            across the full stack — from database design to deployment — and
            I&apos;m always looking for the next hard problem to solve.
          </p>

          <p className="about-item text-muted leading-relaxed">
            Currently open to full-time remote roles or on-site opportunities
            where I can contribute, grow, and build great products with great
            teams.
          </p>
        </div>

        {/* Right — Details */}
        <div className="flex flex-col gap-8 mt-3!">
          {/* Education */}
          <div className="about-item flex flex-col gap-2">
            <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted">
              Education
            </span>
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-4 py-4 border-t border-black/8">
                <div>
                  <p className="font-semibold text-text text-sm">
                    Engineering Degree in Software Development
                  </p>
                  <p className="font-mono text-xs text-muted mt-1">
                    The Private Higher School of Engineering and Technology:
                    Esprit University
                  </p>
                </div>
                <span className="font-mono text-xs text-muted shrink-0">
                  2020 — 2023
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-4 py-4 border-t border-black/8">
                <div>
                  <p className="font-semibold text-text text-sm">
                    Bachelor of Science in Computer Engineering
                  </p>
                  <p className="font-mono text-xs text-muted mt-1">
                    The Higher School of Informatics and Mathematical: ISIMM
                    University
                  </p>
                </div>
                <span className="font-mono text-xs text-muted shrink-0">
                  2017 — 2020
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="about-item grid grid-cols-2 gap-4">
            <div className="p-6 pt-2 bg-surface flex flex-col gap-2">
              <span className="text-4xl font-bold text-text">10+</span>
              <span className="font-mono text-xs tracking-widest uppercase text-muted">
                Projects Shipped
              </span>
            </div>
            <div className="p-6 pt-2 bg-surface flex flex-col gap-2">
              <span className="text-4xl font-bold text-text">3+</span>
              <span className="font-mono text-xs tracking-widest uppercase text-muted">
                Years Building
              </span>
            </div>
            <div className="p-6 pt-2 bg-surface flex flex-col gap-2">
              <span className="text-4xl font-bold text-text">3</span>
              <span className="font-mono text-xs tracking-widest uppercase text-muted">
                Tech Stacks
              </span>
            </div>
            <div className="p-6 pt-2 bg-surface flex flex-col gap-2">
              <span className="text-4xl font-bold text-accent">Open</span>
              <span className="font-mono text-xs tracking-widest uppercase text-muted">
                To Work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

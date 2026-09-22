"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { t } = useLanguage();
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
          {t.about.sectionLabel}
        </span>
        <div className="h-px flex-1 bg-black/8" />
      </div>
      {/* Top — two columns */}
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left — Bio */}
        <div className="flex flex-col gap-6">
          <h2 className="about-item text-4xl md:text-5xl font-bold text-text leading-tight tracking-tight">
            {t.about.heading} <br />
            <span className="text-accent">{t.about.headingAccent}</span>
          </h2>
          <p className="about-item text-muted leading-relaxed">{t.about.bio1}</p>
          <p className="about-item text-muted leading-relaxed">{t.about.bio2}</p>

          {/* Education */}
          <div className="about-item flex flex-col gap-2 pt-4">
            <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted mb-1">
              {t.about.educationLabel}
            </span>
            <div className="flex items-start justify-between gap-4 py-3 border-t border-black/8">
              <div>
                <p className="font-semibold text-text text-sm">
                  {t.about.degree1Title}
                </p>
                <p className="font-mono text-xs text-muted mt-0.5">
                  {t.about.degree1School}
                </p>
              </div>
              <span className="font-mono text-xs text-muted shrink-0 pt-0.5">
                {t.about.degree1Years}
              </span>
            </div>
            <div className="flex items-start justify-between gap-4 py-3 border-t border-black/8">
              <div>
                <p className="font-semibold text-text text-sm">
                  {t.about.degree2Title}
                </p>
                <p className="font-mono text-xs text-muted mt-0.5">
                  {t.about.degree2School}
                </p>
              </div>
              <span className="font-mono text-xs text-muted shrink-0 pt-0.5">
                {t.about.degree2Years}
              </span>
            </div>
          </div>
        </div>

        {/* Right — Experience */}
        <div className="about-item flex flex-col gap-2">
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted mb-1">
            {t.about.experienceLabel}
          </span>

          <div className="flex items-start justify-between gap-4 py-3 border-t border-black/8">
            <div>
              <p className="font-semibold text-text text-sm">{t.about.exp1Title}</p>
              <p className="font-mono text-xs text-muted mt-0.5">{t.about.exp1Desc}</p>
            </div>
            <span className="font-mono text-xs text-muted shrink-0 pt-0.5">
              {t.about.exp1Years}
            </span>
          </div>

          <div className="flex items-start justify-between gap-4 py-3 border-t border-black/8">
            <div>
              <p className="font-semibold text-text text-sm">{t.about.exp2Title}</p>
              <p className="font-mono text-xs text-muted mt-0.5">{t.about.exp2Desc}</p>
            </div>
            <span className="font-mono text-xs text-muted shrink-0 pt-0.5">
              {t.about.exp2Years}
            </span>
          </div>

          <div className="flex items-start justify-between gap-4 py-3 border-t border-black/8">
            <div>
              <p className="font-semibold text-text text-sm">{t.about.exp3Title}</p>
              <p className="font-mono text-xs text-muted mt-0.5">{t.about.exp3Desc}</p>
            </div>
            <span className="font-mono text-xs text-muted shrink-0 pt-0.5">
              {t.about.exp3Years}
            </span>
          </div>

          <div className="about-item grid grid-cols-2  gap-4 ">
            <div className="p-6 bg-surface flex flex-col gap-2">
              <span className="text-4xl font-bold text-text">10+</span>
              <span className="font-mono text-xs tracking-widest uppercase text-muted">
                {t.about.projectsShipped}
              </span>
            </div>
            <div className="p-6 bg-surface flex flex-col gap-2">
              <span className="text-4xl font-bold text-text">3+</span>
              <span className="font-mono text-xs tracking-widest uppercase text-muted">
                {t.about.yearsBuilding}
              </span>
            </div>
            <div className="p-6 bg-surface flex flex-col gap-2">
              <span className="text-4xl font-bold text-text">3</span>
              <span className="font-mono text-xs tracking-widest uppercase text-muted">
                {t.about.techStacks}
              </span>
            </div>
            <div className="p-6 bg-surface flex flex-col gap-2">
              <span className="text-4xl font-bold text-accent">Open</span>
              <span className="font-mono text-xs tracking-widest uppercase text-muted">
                {t.about.openToWork}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

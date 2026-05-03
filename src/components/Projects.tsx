"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/data";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="group flex flex-col overflow-hidden border border-black/8 hover:border-black/20 transition-all duration-300 h-110">
      {/* Image */}
      <div className="relative overflow-hidden h-50">
        <Image
          src={project.cover}
          alt={project.title}
          width={800}
          height={800}
          className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg/60 to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted">
              {project.type}
            </span>
            <h3 className="text-lg font-bold text-text mt-1">
              {project.title}
            </h3>
          </div>
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              className="shrink-0 font-mono text-[10px] tracking-widest uppercase text-muted hover:text-text border border-black/10 hover:border-black/25 px-3 py-1.5 transition-all duration-200"
            >
              Visit ↗
            </Link>
          )}
        </div>

        <p className="text-sm text-muted leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 bg-surface text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="group flex flex-col md:flex-row overflow-hidden border border-black/8 hover:border-black/20 transition-all duration-300 h-60">
      {/* Image */}
      <div className="relative overflow-hidden md:w-1/2 h-ful">
        <Image
          src={project.cover}
          alt={project.title}
          width={800}
          height={800}
          className="w-full h-full object-fill grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-bg/50 to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-8 flex-1 justify-center">
        <div>
          <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted">
            {project.type}
          </span>
          <div className="flex items-center justify-between gap-4 mt-1">
            <h3 className="text-2xl font-bold text-text">{project.title}</h3>
            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                className="shrink-0 font-mono text-[10px] tracking-widest uppercase text-muted hover:text-text border border-black/10 hover:border-black/25 px-3 py-1.5 transition-all duration-200"
              >
                Visit ↗
              </Link>
            )}
          </div>
        </div>

        <p className="text-sm text-muted leading-relaxed max-w-md">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 bg-surface text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-item", {
        scrollTrigger: {
          trigger: ".project-item",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-32">
      {/* Section label */}
      <div className="project-item flex items-center gap-4 mb-16">
        <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted">
          03 — Projects
        </span>
        <div className="h-px flex-1 bg-black/8" />
      </div>

      <div className="project-item mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-text tracking-tight">
          Selected <span className="text-accent">Work</span>
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {/* Featured */}
        <div className="project-item">
          <FeaturedCard project={featured} />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {rest.map((project) => (
            <div key={project.id} className="project-item">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

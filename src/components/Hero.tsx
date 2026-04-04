"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center pt-16"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
        {/* Left — Text */}
        <div className="flex flex-col gap-6 max-w-xl">
          <div className="hero-item">
            <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted border border-black/10 px-3 py-1.5 rounded-full">
              Available for work
            </span>
          </div>

          <h1 className="hero-item text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-[1.05] tracking-tight">
            Full Stack <br />
            <span className="text-accent">Developer</span> &<br />
            AI Engineer
          </h1>

          <p className="hero-item font-mono text-sm text-muted leading-relaxed max-w-sm">
            I build fast, clean web applications and AI-powered products. Based
            in Tunisia, open for new opportunities worldwide.
          </p>

          <div className="hero-item flex items-center gap-4">
            <Link
              href="#projects"
              className="px-6 py-3 bg-text text-bg text-sm font-semibold hover:bg-accent hover:text-text transition-all duration-300"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border border-black/10 text-text text-sm font-semibold hover:border-black/30 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>

          {/* Socials */}
          <div className="hero-item flex items-center gap-6 pt-2">
            <Link
              href="https://github.com/MedOussamaBraiek"
              target="_blank"
              className="font-mono text-xs tracking-widest uppercase text-muted hover:text-text transition-colors"
            >
              GitHub ↗
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohamed-oussama-braiek-9955b5191/"
              target="_blank"
              className="font-mono text-xs tracking-widest uppercase text-muted hover:text-text transition-colors"
            >
              LinkedIn ↗
            </Link>
          </div>
        </div>

        {/* Right — Image */}
        <div className="hero-item relative shrink-0 mx-auto md:mx-0">
          {/* Accent box behind image */}
          <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-accent" />

          <div className="relative w-65 h-80 md:w-75 md:h-92.5 lg:w-85 lg:h-105 overflow-hidden bg-surface">
            <Image
              src="/assets/oussama.jpg"
              alt="Oussama Braiek"
              width={500}
              height={500}
              className="w-full h-full object-cover object-top  hover:grayscale-0 transition-all duration-500"
            />
            {/* grayscale */}
          </div>
        </div>
      </div>

      <div className="hero-item mt-20 flex items-center gap-3">
        <div className="w-px h-12 bg-black/10 mx-auto" />
      </div>
    </section>
  );
};

export default Hero;

"use client";

import { certificates } from "@/lib/data";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Certificates = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".certif-header", {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from(".certif-item", {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="certificates" className="py-32" ref={ref}>
      <div className="certif-header flex items-center gap-4 mb-16">
        <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted">
          04 — Certificates
        </span>
        <div className="h-px flex-1 bg-black/8" />
      </div>

      <div className="grid md:grid-cols-3 gap-8 certif-header">
        {certificates.map((cert) => (
          <div
            key={cert.name}
            className=" p-4 bg-surface border border-black/6 rounded-lg hover:shadow-md transition-all duration-200"
          >
            <Image
              src={cert.image}
              alt={cert.name}
              width={400}
              height={250}
              className="rounded-md object-cover"
            />
            <p className="font-semibold text-text text-sm mt-2">{cert.name}</p>
            <p className="font-mono text-xs text-muted">
              {cert.issuer} — {cert.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

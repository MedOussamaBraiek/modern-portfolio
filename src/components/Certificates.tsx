"use client";

import { certificates } from "@/lib/data";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Certificates = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imgSrc: string) => {
    setSelectedImage(imgSrc || "");
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
          {t.certificates.sectionLabel}
        </span>
        <div className="h-px flex-1 bg-black/8" />
      </div>

      <div className="grid md:grid-cols-3 gap-8 certif-header">
        {certificates.map((cert) => (
          <div
            key={cert.name}
            className="flex flex-col p-4 bg-surface border border-black/6 rounded-lg hover:shadow-md transition-all duration-200"
            onClick={() => openModal(cert.image)}
          >
            <Image
              src={cert.image}
              alt={cert.name}
              width={400}
              height={250}
              className="rounded-md object-cover flex-1"
            />
            <p className="font-semibold text-text text-sm mt-2">{cert.name}</p>
            <p className="font-mono text-xs text-muted">
              {cert.issuer} — {cert.year}
            </p>
          </div>
        ))}

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/50 bg-opacity-70 flex items-center justify-center z-2000"
            onClick={closeModal}
          >
            <div className="relative">
              <Image
                src={selectedImage}
                alt="Selected Certificate"
                className="max-w-[90vw] max-h-[90vh] sm:max-w-[70vw] sm:max-h-[70vh] rounded-lg w-auto h-auto"
                width={600}
                height={600}
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-2xl bg-red-500 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

type Status = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-item", {
        scrollTrigger: {
          trigger: ".contact-item",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="py-32">
      <div className="contact-item flex items-center gap-4 mb-16">
        <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted">
          {t.contact.sectionLabel}
        </span>
        <div className="h-px flex-1 bg-black/8" />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left — Intro */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="contact-item text-4xl md:text-5xl font-bold text-text leading-tight tracking-tight">
              {t.contact.heading} <br />
              <span className="text-accent">{t.contact.headingAccent}</span>
            </h2>
            <p className="contact-item text-muted leading-relaxed">
              {t.contact.description}
            </p>
          </div>

          {/* Direct links */}
          <div className="contact-item flex flex-col gap-3">
            <Link
              href="mailto:oussemabraiek@gmail.com"
              className="group flex items-center justify-between py-4 border-t border-black/8 hover:border-black/20 transition-colors duration-200"
            >
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-xs tracking-widest uppercase text-muted">
                  {t.contact.emailLabel}
                </span>
                <span className="text-sm font-semibold text-text">
                  oussemabraiek@gmail.com
                </span>
              </div>
              <span className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all duration-200">
                ↗
              </span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/mohamed-oussama-braiek-9955b5191/"
              target="_blank"
              className="group flex items-center justify-between py-4 border-t border-black/8 hover:border-black/20 transition-colors duration-200"
            >
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-xs tracking-widest uppercase text-muted">
                  {t.contact.linkedinLabel}
                </span>
                <span className="text-sm font-semibold text-text">
                  linkedin.com/MedOussamaBraiek
                </span>
              </div>
              <span className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all duration-200">
                ↗
              </span>
            </Link>

            <Link
              href="https://github.com/MedOussamaBraiek"
              target="_blank"
              className="group flex items-center justify-between py-4 border-t border-black/8 hover:border-black/20 transition-colors duration-200"
            >
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-xs tracking-widest uppercase text-muted">
                  {t.contact.githubLabel}
                </span>
                <span className="text-sm font-semibold text-text">
                  github.com/MedOussamaBraiek
                </span>
              </div>
              <span className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all duration-200">
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* Right — Form */}
        <form
          onSubmit={handleSubmit}
          className="contact-item flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs tracking-widest uppercase text-muted">
              {t.contact.nameLabel}
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder={t.contact.namePlaceholder}
              className="p-4 border border-black/8 bg-surface text-text placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs tracking-widest uppercase text-muted">
              {t.contact.emailInputLabel}
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder={t.contact.emailPlaceholder}
              className="p-4 border border-black/8 bg-surface text-text placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs tracking-widest uppercase text-muted">
              {t.contact.messageLabel}
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder={t.contact.messagePlaceholder}
              className="p-4 border border-black/8 bg-surface text-text placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-4 bg-text text-bg font-semibold text-sm tracking-wide hover:bg-accent hover:text-text transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? t.contact.sending : t.contact.sendButton}
          </button>

          {/* Feedback */}
          {status === "success" && (
            <p className="font-mono text-xs text-center text-green-600 tracking-widest uppercase">
              {t.contact.successMessage}
            </p>
          )}
          {status === "error" && (
            <p className="font-mono text-xs text-center text-red-500 tracking-widest uppercase">
              {t.contact.errorMessage}
            </p>
          )}
        </form>
      </div>

      <div className="contact-item mt-24 pt-8 border-t border-black/8 flex items-center justify-between">
        <span className="font-mono text-xs text-muted tracking-widest uppercase">
          Mohamed Oussama Braiek · {new Date().getFullYear()}
        </span>
        <span className="font-mono text-xs text-muted tracking-widest uppercase">
          {t.contact.builtWith}
        </span>
      </div>
    </section>
  );
};

export default Contact;

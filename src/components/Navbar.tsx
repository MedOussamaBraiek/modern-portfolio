"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { locale, t, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const links = [
    { label: t.navbar.about, href: "#about" },
    { label: t.navbar.skills, href: "#skills" },
    { label: t.navbar.projects, href: "#projects" },
    { label: t.navbar.certificates, href: "#certificates" },
    { label: t.navbar.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (resumeRef.current && !resumeRef.current.contains(e.target as Node)) {
        setResumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0  w-full flex justify-center z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-sm border-b border-black/10"
            : "bg-transparent"
        }`}
      >
        <nav className="lg:max-w-6xl w-full mx-auto sm:px-6! px-3! h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-[22px] font-bold text-text tracking-tight shrink-0"
          >
            OUSSAMA <span className="text-accent">BRAIEK</span>
          </Link>

          {/* Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-xs tracking-widest uppercase text-muted hover:text-text transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={() => setLocale(locale === "en" ? "fr" : "en")}
              className="font-mono text-xs tracking-widest uppercase text-muted hover:text-text transition-colors duration-200 px-2 py-1"
              aria-label="Switch language"
            >
              {locale === "en" ? "FR" : "EN"}
            </button>

            {/* Resume dropdown */}
            <div className="relative" ref={resumeRef}>
              <button
                onClick={() => setResumeOpen((prev) => !prev)}
                className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase px-4 py-2 border border-black/10 text-text hover:bg-text hover:text-bg transition-all duration-200 shrink-0"
              >
                {t.navbar.resume}
                <span
                  className={`text-[9px] transition-transform duration-200 ${
                    resumeOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {resumeOpen && (
                <div className="absolute right-0 top-full mt-1 border border-black/10 bg-bg shadow-sm flex flex-col min-w-[130px] z-10">
                  <a
                    href="/assets/Resume-MedOussamaBraiek-EN.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setResumeOpen(false)}
                    className="font-mono text-[10px] tracking-widest uppercase px-4 py-3 text-text hover:bg-text hover:text-bg transition-all duration-200 flex items-center justify-between gap-3"
                  >
                    {t.navbar.resumeEN} <span>↗</span>
                  </a>
                  <a
                    href="/assets/Resume-MedOussamaBraiek-FR.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setResumeOpen(false)}
                    className="font-mono text-[10px] tracking-widest uppercase px-4 py-3 text-text hover:bg-text hover:text-bg transition-all duration-200 flex items-center justify-between gap-3 border-t border-black/10"
                  >
                    {t.navbar.resumeFR} <span>↗</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex justify-center items-center w-8 h-8 cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        style={{ backgroundColor: "#faf8f3" }}
        className={`fixed inset-0 z-40 bg-bg pt-16 flex flex-col justify-center items-center gap-10 transition-all duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-bold text-text hover:text-accent transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}

        {/* Language toggle mobile */}
        <button
          onClick={() => setLocale(locale === "en" ? "fr" : "en")}
          className="font-mono text-sm tracking-widest uppercase text-muted hover:text-text transition-colors duration-200"
        >
          {locale === "en" ? "Passer en français" : "Switch to English"}
        </button>

        {/* Resume links mobile */}
        <div className="flex items-center gap-3 mt-2">
          <a
            href="/assets/Resume-MedOussamaBraiek-EN.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="font-mono text-xs tracking-widest uppercase px-5 py-3 border border-black/10 text-text"
          >
            {t.navbar.resumeEN} ↗
          </a>
          <a
            href="/assets/Resume-MedOussamaBraiek-FR.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="font-mono text-xs tracking-widest uppercase px-5 py-3 border border-black/10 text-text"
          >
            {t.navbar.resumeFR} ↗
          </a>
        </div>
      </div>
    </>
  );
}

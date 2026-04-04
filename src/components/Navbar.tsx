"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

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
          <ul className="hidden md:flex items-center gap-8">
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

          {/* CTA */}
          <Link
            href="/assets/Resume-MedOussamaBraiek.pdf"
            download="Resume-MedOussamaBraiek.pdf"
            target="_blank"
            className="hidden md:inline-block font-mono text-xs tracking-widest uppercase px-4 py-2 border border-black/10 text-text hover:bg-text hover:text-bg transition-all duration-200 shrink-0"
          >
            Resume ↗
          </Link>

          {!menuOpen && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
              aria-label="Toggle menu"
            >
              <Menu />
            </button>
          )}
          {menuOpen && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
              aria-label="Toggle menu"
            >
              <X />
            </button>
          )}
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col justify-center items-center gap-10 transition-all duration-300 md:hidden ${
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
        <Link
          href="/assets/Resume-MedOussamaBraiek.pdf"
          download="/assets/Resume-MedOussamaBraiek.pdf"
          target="_blank"
          onClick={() => setMenuOpen(false)}
          className="mt-4 font-mono text-xs tracking-widest uppercase px-6 py-3 border border-black/10 text-text"
        >
          Resume ↗
        </Link>
      </div>
    </>
  );
}

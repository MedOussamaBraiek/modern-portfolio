import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="about-item flex items-center gap-4 mb-16">
        <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted">
          05 — Contact
        </span>
        <div className="h-px flex-1 bg-black/8" />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left — Intro */}
        <div className="flex flex-col gap-6">
          <h2 className="about-item text-4xl md:text-5xl font-bold text-text leading-tight tracking-tight">
            Let’s build something <br />
            <span className="text-accent">together.</span>
          </h2>
          <p className="about-item text-muted leading-relaxed">
            I’m always open to new opportunities, collaborations, or even a
            quick chat. Drop me a message and I’ll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Right — Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 border border-black/6 rounded-lg bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border border-black/6 rounded-lg bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-4 border border-black/6 rounded-lg bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="px-6 py-3 cursor-pointer bg-accent text-text font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

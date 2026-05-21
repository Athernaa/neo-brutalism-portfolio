"use client";

import { useEffect, useRef } from "react";
import { BrutalistButton } from "@/components/brutalist-button";
import { motion } from "framer-motion";
import gsap from "gsap";
import { personalInfo } from "@/config/portfolio";

const marqueeWords = [
  "React",
  "TypeScript",
  "Python",
  "Lua",
  "Architecture",
  "Next.js",
  "Tailwind",
  "Node.js",
];

export function HeroSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeInner = marqueeRef.current.querySelector(".marquee-inner");
    if (!marqueeInner) return;

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(marqueeInner, {
      xPercent: -50,
      duration: 20,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4 py-20">
      {/* Marquee Background */}
      <div
        ref={marqueeRef}
        className="absolute inset-0 flex items-center overflow-hidden opacity-[0.07] pointer-events-none select-none"
      >
        <div className="marquee-inner flex whitespace-nowrap will-change-transform">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map(
            (word, i) => (
              <span
                key={i}
                className="text-[12rem] md:text-[16rem] font-bold mx-8 text-foreground"
              >
                {word} <span className="text-accent-yellow">•</span>{" "}
              </span>
            )
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-2 mb-8 text-sm font-bold brutal-border brutal-shadow bg-accent-yellow text-text-on-yellow">
            AVAILABLE FOR FREELANCE
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          {personalInfo.name.split(" ")[0]}
          <br />
          <span className="relative inline-block">
            {personalInfo.name.split(" ").slice(1).join(" ")}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
            >
              <path
                d="M0,8 Q50,0 100,8 T200,8"
                fill="none"
                stroke="var(--foreground)"
                strokeWidth="4"
              />
            </svg>
          </span>{" "}
          <br />
          <span className="text-accent-pink">{personalInfo.role}</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-foreground/80 font-medium"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {personalInfo.heroText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <BrutalistButton href="#projects" variant="accent-yellow">
            View Projects
          </BrutalistButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-8 h-12 brutal-border brutal-shadow-sm flex items-start justify-center pt-2 bg-background">
          <motion.div
            className="w-2 h-2 bg-foreground"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

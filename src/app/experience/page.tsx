"use client";

import { useEffect, useRef } from "react";
import { BrutalistButton } from "@/components/brutalist-button";
import { BrutalistCard } from "@/components/brutalist-card";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/config/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function ExperiencePage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".exp-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: index % 2 === 0 ? -60 : 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: index * 0.15,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-bold brutal-border brutal-shadow-sm bg-accent-yellow text-text-on-yellow">
              WORK HISTORY
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Professional Experience
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 font-medium max-w-2xl">
              A timeline of my professional journey, building high-performance
              web interfaces and complex systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Cards */}
      <section
        ref={sectionRef}
        className="py-16 md:py-24 px-4 md:px-8 bg-accent-yellow text-text-on-yellow"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 md:gap-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="exp-card">
                <BrutalistCard
                  hoverColor={exp.color}
                  shadowSize="xl"
                  className="p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 brutal-border brutal-shadow-sm flex items-center justify-center bg-background shrink-0">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-semibold text-foreground/80">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 md:text-right">
                      <div className="flex items-center gap-2 md:justify-end text-sm font-bold">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 md:justify-end text-sm font-bold text-foreground/70">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-foreground/90 font-medium"
                      >
                        <span className="mt-2 w-2 h-2 bg-foreground shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </BrutalistCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to Work Together?
            </h2>
            <p className="text-lg font-medium text-foreground/85 mb-8 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects and opportunities.
            </p>
            <BrutalistButton variant="accent-pink" href="/#contact">
              Get in Touch
            </BrutalistButton>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

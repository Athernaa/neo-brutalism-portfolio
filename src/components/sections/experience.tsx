"use client";

import { useEffect, useRef } from "react";
import { BrutalistCard } from "@/components/brutalist-card";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { experiences } from "@/config/portfolio";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
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
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-4 md:px-8 bg-accent-yellow text-text-on-yellow"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-bold brutal-border brutal-shadow-sm bg-background">
            WORK HISTORY
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Professional Experience
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-12">
          {experiences.slice(0, 2).map((exp) => (
            <div key={exp.id} className="exp-card">
              <BrutalistCard
                hoverColor={exp.color}
                shadowSize="xl"
                className="overflow-hidden"
              >
                {/* Colored top strip */}
                <div className={`h-3 w-full ${exp.stripColor}`} />

                <div className="p-6 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-4xl font-bold text-foreground/20">
                          {exp.num}
                        </span>
                        <div className="w-12 h-12 brutal-border brutal-shadow-sm flex items-center justify-center bg-background">
                          <Briefcase size={20} />
                        </div>
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
                </div>
              </BrutalistCard>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {experiences.length > 2 && (
          <motion.div
            className="mt-16 md:mt-20 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/experience"
              className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-bold brutal-border brutal-shadow bg-background hover:bg-hover-pink hover:text-text-on-pink transition-colors"
            >
              <span>View All Experience</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

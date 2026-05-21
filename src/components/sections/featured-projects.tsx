"use client";

import { useEffect, useRef, useState } from "react";
import { BrutalistCard } from "@/components/brutalist-card";
import { ProjectModal } from "@/components/project-modal";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Layers, Eye, Gamepad2 } from "lucide-react";
import Link from "next/link";
import { projects as allProjects } from "@/config/portfolio";

gsap.registerPlugin(ScrollTrigger);

const projects = allProjects.slice(0, 3);

export function FeaturedProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".project-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
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
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 px-4 md:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-bold brutal-border brutal-shadow-sm bg-accent-cyan text-text-on-cyan">
            SELECTED WORK
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.id} className="project-card">
                <BrutalistCard
                  hoverColor={project.color}
                  shadowSize="lg"
                  className="h-full flex flex-col group relative overflow-hidden"
                  onClick={() => setActiveProject(project)}
                >
                  {/* Colored top strip */}
                  <div className={`h-3 w-full ${project.stripColor}`} />

                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    {/* Meta row: number + year + status */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-foreground/20">
                          {project.num}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-foreground/50 uppercase tracking-wider">
                            {project.year}
                          </span>
                          <span className="text-xs font-bold text-accent-pink">
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <div className="w-10 h-10 brutal-border flex items-center justify-center bg-background group-hover:bg-foreground group-hover:text-background transition-colors">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 brutal-border brutal-shadow-sm flex items-center justify-center bg-background group-hover:bg-foreground group-hover:text-background transition-colors mb-6">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 font-medium mb-6 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm font-bold brutal-border-2 bg-background"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </BrutalistCard>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          className="mt-16 md:mt-20 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-bold brutal-border brutal-shadow bg-background hover:bg-hover-cyan hover:text-text-on-cyan transition-colors"
          >
            <span>View All Projects</span>
            <ArrowUpRight
              size={20}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </motion.div>

        <ProjectModal
          isOpen={activeProject !== null}
          onClose={() => setActiveProject(null)}
          project={activeProject}
        />
      </div>
    </section>
  );
}

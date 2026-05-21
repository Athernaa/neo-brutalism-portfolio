"use client";

import { useState } from "react";
import { BrutalistButton } from "@/components/brutalist-button";
import { BrutalistCard } from "@/components/brutalist-card";
import { ProjectModal } from "@/components/project-modal";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, Eye, Gamepad2, Filter } from "lucide-react";

import { projects as allProjects } from "@/config/portfolio";

const filters = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "ai", label: "AI / Computer Vision" },
  { id: "game", label: "Game / Interactive" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeProject, setActiveProject] = useState<typeof allProjects[0] | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

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
            <span className="inline-block px-4 py-2 mb-6 text-sm font-bold brutal-border brutal-shadow-sm bg-accent-cyan text-text-on-cyan">
              ALL WORK
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Project Portfolio
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 font-medium max-w-2xl">
              A collection of web applications, AI systems, and game interfaces
              I&apos;ve built over the years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 md:px-8 border-b-4 border-foreground sticky top-0 bg-background z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter size={20} className="shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 text-sm font-bold brutal-border-2 whitespace-nowrap transition-colors ${
                  activeFilter === filter.id
                    ? "bg-foreground text-background"
                    : "bg-background hover:bg-hover-yellow hover:text-text-on-yellow"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BrutalistCard
                      hoverColor={project.color}
                      shadowSize="lg"
                      className="h-full flex flex-col group relative overflow-hidden"
                      onClick={() => setActiveProject(project)}
                    >
                      <div className={`h-3 w-full ${project.stripColor}`} />

                      <div className="p-6 md:p-8 flex flex-col flex-1">
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
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-foreground/60 font-medium text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <ProjectModal
        isOpen={activeProject !== null}
        onClose={() => setActiveProject(null)}
        project={activeProject}
      />
    </main>
  );
}

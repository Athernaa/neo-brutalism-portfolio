"use client";

import { Modal } from "@/components/modal";
import { BrutalistButton } from "@/components/brutalist-button";
import { ArrowRight, Layers, Eye, Gamepad2 } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    num: string;
    title: string;
    year: string;
    status: string;
    description: string;
    tags: string[];
    color: string;
    stripColor: string;
    icon: typeof Layers;
    details: {
      features: string[];
      architecture: string[];
      impact: string;
    };
  } | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  const details = project.details;

  const Icon = project.icon;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="space-y-8">
        {/* Header strip + meta */}
        <div className={`h-4 w-full ${project.stripColor}`} />

        <div className="flex items-center gap-4">
          <span className="text-4xl font-bold text-foreground/20">
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
          <div className="ml-auto w-12 h-12 brutal-border brutal-shadow-sm flex items-center justify-center bg-background">
            <Icon size={24} />
          </div>
        </div>

        {/* Description */}
        <p className="text-lg font-medium leading-relaxed text-foreground/85">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="brutal-border p-5 md:p-6 bg-background brutal-shadow-sm">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
            Key Features
          </h4>
          <ul className="space-y-2">
            {details.features.map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-medium">
                <span className="mt-1.5 w-2 h-2 bg-accent-pink shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
            Architecture & Stack
          </h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-bold brutal-border bg-background"
              >
                {tag}
              </span>
            ))}
          </div>
          <ul className="space-y-2">
            {details.architecture.map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-medium text-foreground/80">
                <span className="mt-1.5 w-2 h-2 bg-accent-cyan shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Impact */}
        <div className="brutal-border p-5 md:p-6 bg-accent-yellow text-text-on-yellow">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-2">
            Impact
          </h4>
          <p className="font-bold text-lg">{details.impact}</p>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t-4 border-foreground">
          <p className="font-medium mb-4">
            Want to see more details or a live demo? Let&apos;s talk.
          </p>
          <BrutalistButton
            onClick={() => {
              onClose();
              setTimeout(() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }, 300);
            }}
            variant="accent-cyan"
          >
            <ArrowRight size={18} className="mr-2" />
            Discuss This Project
          </BrutalistButton>
        </div>
      </div>
    </Modal>
  );
}

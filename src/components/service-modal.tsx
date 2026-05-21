"use client";

import { Modal } from "@/components/modal";
import { BrutalistButton } from "@/components/brutalist-button";
import { Check, ArrowRight } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    num: string;
    title: string;
    description: string;
    tags: string[];
    color: string;
    details: {
      deliverables: string[];
      process: string[];
    };
  } | null;
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service) return null;

  const details = service.details;

  const colorMap: Record<string, string> = {
    yellow: "bg-accent-yellow text-text-on-yellow",
    cyan: "bg-accent-cyan text-text-on-cyan",
    pink: "bg-accent-pink text-text-on-pink",
    lime: "bg-accent-lime text-text-on-lime",
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={service.title}>
      <div className="space-y-8">
        {/* Number + Description */}
        <div>
          <span className="inline-block px-3 py-1 text-sm font-bold brutal-border brutal-shadow-sm mb-4 bg-background">
            SERVICE {service.num}
          </span>
          <p className="text-lg font-medium leading-relaxed text-foreground/85">
            {service.description}
          </p>
        </div>

        {/* Tech Tags */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 text-sm font-bold brutal-border ${colorMap[service.color] || "bg-background"}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="brutal-border p-5 md:p-6 bg-background brutal-shadow-sm">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
            What You Get
          </h4>
          <ul className="space-y-3">
            {details.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-medium">
                <Check size={18} className="shrink-0 mt-0.5 text-accent-pink" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Process */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
            Process
          </h4>
          <div className="flex flex-col gap-0">
            {details.process.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 brutal-border flex items-center justify-center bg-background font-bold text-sm">
                    {i + 1}
                  </div>
                  {i < details.process.length - 1 && (
                    <div className="w-0.5 h-6 bg-foreground/20" />
                  )}
                </div>
                <span className="font-bold pb-6">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t-4 border-foreground">
          <p className="font-medium mb-4">
            Interested in this service? Let&apos;s discuss your project.
          </p>
          <BrutalistButton
            onClick={() => {
              onClose();
              setTimeout(() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }, 300);
            }}
            variant="accent-pink"
          >
            <ArrowRight size={18} className="mr-2" />
            Get in Touch
          </BrutalistButton>
        </div>
      </div>
    </Modal>
  );
}

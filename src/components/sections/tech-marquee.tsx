"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BrutalistCard } from "@/components/brutalist-card";
import { techStack } from "@/config/portfolio";

export function TechMarqueeSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const items = track.querySelectorAll(".tech-item");

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(track, {
      xPercent: -50,
      duration: 15,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  const duplicatedItems = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <section className="py-16 bg-accent-cyan brutal-border-2 border-y-4 overflow-hidden text-text-on-cyan">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold uppercase tracking-widest">
          Core Tech Stack
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 w-max will-change-transform"
        >
          {duplicatedItems.map((item, i) => (
            <div key={i} className="tech-item shrink-0">
              <BrutalistCard
                hoverColor={item.color}
                shadowSize="sm"
                className="px-10 py-6 min-w-50 text-center"
              >
                <span className="text-2xl md:text-3xl font-bold">
                  {item.name}
                </span>
              </BrutalistCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

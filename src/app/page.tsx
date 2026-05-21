"use client";

import { HeroSection } from "@/components/sections/hero";
import { TechMarqueeSection } from "@/components/sections/tech-marquee";
import { StatsSection } from "@/components/sections/stats";
import { ServicesSection } from "@/components/sections/services";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactFooterSection } from "@/components/sections/contact-footer";
import { useEffect } from "react";

export default function Home() {

  // Handle hash scrolling on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return (
    <main className="flex flex-col">
      <div id="home">
        <HeroSection />
      </div>
      <TechMarqueeSection />
      <StatsSection />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="projects">
        <FeaturedProjectsSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="contact">
        <ContactFooterSection />
      </div>
    </main>
  );
}

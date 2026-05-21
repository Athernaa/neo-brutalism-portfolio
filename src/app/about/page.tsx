"use client";

import { BrutalistButton } from "@/components/brutalist-button";
import { BrutalistCard } from "@/components/brutalist-card";
import { motion } from "framer-motion";
import { ArrowRight, Code2, MapPin, Mail, Download } from "lucide-react";
import { personalInfo } from "@/config/portfolio";

export default function AboutPage() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Python", "FastAPI", "Node.js", "GraphQL", "PostgreSQL"] },
    { category: "AI/ML", items: ["YOLOv8", "OpenCV", "PyTorch", "TensorFlow", "Computer Vision"] },
    { category: "Tools", items: ["Git", "Docker", "Kubernetes", "AWS", "CI/CD"] },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-b-4 border-foreground">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-bold brutal-border brutal-shadow-sm bg-accent-yellow text-text-on-yellow">
              ABOUT ME
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Building Digital Products with
              <span className="text-accent-pink"> Purpose & Precision</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-medium mb-8">
              {personalInfo.aboutText}
            </p>
            <div className="flex flex-wrap gap-4">
              <BrutalistButton variant="accent-cyan">
                <Download size={18} className="mr-2" />
                Download Resume
              </BrutalistButton>
              <BrutalistButton variant="secondary">
                <Mail size={18} className="mr-2" />
                Contact Me
              </BrutalistButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Story</h2>
            <div className="brutal-border p-6 md:p-8 brutal-shadow-sm bg-background">
              <p className="text-foreground/85 font-medium leading-relaxed mb-4">
                I started my journey as a self-taught developer, driven by curiosity about how things work
                on the web. What began as simple HTML/CSS projects evolved into a passion for building
                complex, data-driven applications.
              </p>
              <p className="text-foreground/85 font-medium leading-relaxed mb-4">
                Over the years, I&apos;ve worked with startups and enterprises across Indonesia, the US,
                and Europe. My experience spans from crafting pixel-perfect UI components to architecting
                full-stack systems that power real-time applications.
              </p>
              <p className="text-foreground/85 font-medium leading-relaxed">
                I believe in clean code, thoughtful architecture, and user-centric design. Every project
                I take on is an opportunity to learn, grow, and deliver something exceptional.
              </p>
            </div>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BrutalistCard hoverColor="yellow" shadowSize="sm" className="p-6 text-center">
              <div className="w-12 h-12 brutal-border brutal-shadow-sm flex items-center justify-center bg-background mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Based In</h3>
              <p className="text-foreground/80 font-medium">Indonesia</p>
            </BrutalistCard>
            <BrutalistCard hoverColor="cyan" shadowSize="sm" className="p-6 text-center">
              <div className="w-12 h-12 brutal-border brutal-shadow-sm flex items-center justify-center bg-background mx-auto mb-4">
                <Code2 size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Experience</h3>
              <p className="text-foreground/80 font-medium">5+ Years</p>
            </BrutalistCard>
            <BrutalistCard hoverColor="pink" shadowSize="sm" className="p-6 text-center">
              <div className="w-12 h-12 brutal-border brutal-shadow-sm flex items-center justify-center bg-background mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Availability</h3>
              <p className="text-foreground/80 font-medium">Open for Work</p>
            </BrutalistCard>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, idx) => (
                <BrutalistCard
                  key={skillGroup.category}
                  hoverColor="lime"
                  shadowSize="sm"
                  className="p-6"
                >
                  <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-sm font-bold brutal-border-2 bg-background"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </BrutalistCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-accent-cyan border-t-4 border-b-4 border-foreground text-text-on-cyan">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-lg font-medium text-foreground/85 mb-8">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
            <BrutalistButton variant="accent-pink" href="/#contact">
              <ArrowRight size={18} className="mr-2" />
              Get in Touch
            </BrutalistButton>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

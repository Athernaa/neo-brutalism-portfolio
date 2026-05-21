"use client";

import { useEffect, useRef, useState } from "react";
import { BrutalistCard } from "@/components/brutalist-card";
import { ServiceModal } from "@/components/service-modal";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/config/portfolio";

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState<typeof services[0] | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".service-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          delay: index * 0.12,
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
      className="py-24 md:py-32 px-4 md:px-8 bg-accent-pink"
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
            WHAT I DO
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-text-on-pink">
            Services & Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.slice(0, 3).map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="service-card">
                <BrutalistCard
                  hoverColor={service.color}
                  shadowSize="lg"
                  className="h-full flex flex-col group relative overflow-hidden cursor-pointer"
                  onClick={() => setActiveService(service)}
                >
                  {/* Colored top strip */}
                  <div className={`h-3 w-full ${service.stripColor}`} />

                  <div className="p-6 md:p-8 flex flex-col flex-1 relative">
                    {/* Giant number watermark */}
                    <span className="absolute -top-2 -right-2 text-[8rem] md:text-[10rem] font-bold leading-none text-foreground/4 select-none pointer-events-none">
                      {service.num}
                    </span>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 brutal-border brutal-shadow-sm flex items-center justify-center bg-background group-hover:bg-foreground group-hover:text-background transition-colors">
                          <Icon size={26} />
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-4xl font-bold text-foreground/20 group-hover:text-foreground transition-colors">
                            {service.num}
                          </span>
                          <div className="w-10 h-10 brutal-border flex items-center justify-center bg-background group-hover:bg-foreground group-hover:text-background transition-colors">
                            <ArrowRight
                              size={18}
                              className="group-hover:translate-x-0.5 transition-transform"
                            />
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {service.title}
                      </h3>
                      <p className="text-foreground/85 font-medium leading-relaxed mb-6 flex-1">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-bold brutal-border-2 bg-background"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </BrutalistCard>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        {services.length > 3 && (
          <motion.div
            className="mt-16 md:mt-20 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-bold brutal-border brutal-shadow bg-background hover:bg-hover-lime hover:text-text-on-lime transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </motion.div>
        )}
      </div>

      <ServiceModal
        isOpen={activeService !== null}
        onClose={() => setActiveService(null)}
        service={activeService}
      />
    </section>
  );
}

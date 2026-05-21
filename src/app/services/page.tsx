"use client";

import { useState } from "react";
import { BrutalistButton } from "@/components/brutalist-button";
import { BrutalistCard } from "@/components/brutalist-card";
import { ServiceModal } from "@/components/service-modal";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/config/portfolio";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<typeof services[0] | null>(null);

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
            <span className="inline-block px-4 py-2 mb-6 text-sm font-bold brutal-border brutal-shadow-sm bg-accent-lime text-text-on-lime">
              WHAT I DO
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Services & Expertise
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 font-medium max-w-2xl">
              Specialized frontend engineering services for building high-performance
              web interfaces and complex systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-accent-pink">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: service.id * 0.1 }}
                >
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
                              <ArrowRight size={18} />
                            </div>
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                          {service.title}
                        </h3>
                        <p className="text-foreground/85 font-medium leading-relaxed mb-6">
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
              </motion.div>
            );
          })}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg font-medium text-foreground/85 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help bring your vision to life with
              high-performance, scalable solutions.
            </p>
            <BrutalistButton variant="accent-cyan" href="/#contact">
              <ArrowRight size={18} className="mr-2" />
              Get in Touch
            </BrutalistButton>
          </motion.div>
        </div>
      </section>

      <ServiceModal
        isOpen={activeService !== null}
        onClose={() => setActiveService(null)}
        service={activeService}
      />
    </main>
  );
}

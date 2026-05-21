"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BrutalistCard } from "@/components/brutalist-card";
import { Code2, Users, Globe, Trophy } from "lucide-react";
import { stats } from "@/config/portfolio";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();
    const startValue = 0;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (value - startValue) * eased);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-bold brutal-border brutal-shadow-sm bg-accent-lime text-text-on-lime">
            BY THE NUMBERS
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Impact in Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BrutalistCard
                  hoverColor={stat.color}
                  shadowSize="md"
                  className="p-6 md:p-8 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-12 h-12 brutal-border brutal-shadow-sm flex items-center justify-center bg-background mb-4">
                    <Icon size={24} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm md:text-base font-bold text-foreground/80 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </BrutalistCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

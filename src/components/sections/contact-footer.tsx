"use client";

import { useState } from "react";
import { BrutalistButton } from "@/components/brutalist-button";
import { BrutalistCard } from "@/components/brutalist-card";
import { motion } from "framer-motion";
import { Code2, Globe, MessageSquare, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/config/portfolio";

const socialLinks = [
  { name: "GitHub", icon: Code2, href: personalInfo.socialLinks.github },
  { name: "LinkedIn", icon: Globe, href: personalInfo.socialLinks.linkedin },
  { name: "Twitter", icon: MessageSquare, href: personalInfo.socialLinks.twitter },
  { name: "Email", icon: Mail, href: personalInfo.socialLinks.email },
];

export function ContactFooterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* CTA Headline */}
        <motion.div
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Let&apos;s Work{" "}
            <span className="text-accent-pink">Together</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 font-medium">
            Whether you need a high-performance frontend, a complex system
            architect, or a reliable engineering partner — I&apos;m ready to
            build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BrutalistCard
              hoverColor="white"
              shadowSize="xl"
              className="p-6 md:p-10"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 text-base font-medium bg-background brutal-border brutal-shadow-sm outline-none focus:bg-accent-yellow/10 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 text-base font-medium bg-background brutal-border brutal-shadow-sm outline-none focus:bg-accent-yellow/10 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 text-base font-medium bg-background brutal-border brutal-shadow-sm outline-none focus:bg-accent-yellow/10 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <BrutalistButton
                  type="submit"
                  variant="accent-pink"
                  className="w-full mt-2"
                >
                  <Mail size={20} className="mr-2" />
                  Submit
                </BrutalistButton>
              </form>
            </BrutalistCard>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BrutalistCard
              hoverColor="lime"
              shadowSize="lg"
              className="p-6 md:p-10"
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                {personalInfo.contact.title}
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 font-medium max-w-xl mb-8">
                {personalInfo.contact.description}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 brutal-border-2 bg-accent-lime font-bold text-sm text-text-on-lime">
                <span className="w-2 h-2 bg-foreground animate-pulse" />
                {personalInfo.contact.availability}
              </div>
            </BrutalistCard>

            <BrutalistCard
              hoverColor="cyan"
              shadowSize="lg"
              className="p-6 md:p-10"
            >
              <h3 className="text-2xl font-bold mb-6">Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 brutal-border brutal-shadow-sm bg-background hover:bg-hover-cyan hover:text-text-on-cyan transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={20} />
                        <span className="font-bold">{social.name}</span>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  );
                })}
              </div>
            </BrutalistCard>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 pt-8 brutal-border-2 border-t-4 border-b-0 border-x-0 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-bold text-foreground/70">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All
            rights reserved.
          </p>
          <p className="text-sm font-bold text-foreground/70">
            Built with Next.js, Tailwind & GSAP.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileOpen(false);

    // Home link - scroll to top if on home page, otherwise navigate
    if (href === "/") {
      if (window.location.pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      return; // Let it navigate naturally
    }

    // Hash anchor on home page
    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        e.preventDefault();
        window.location.href = href;
        return;
      }
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // External page link - let it navigate naturally
    return;
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 brutal-border bg-background transition-all duration-300 ${
            isScrolled ? "brutal-shadow" : "brutal-shadow-sm"
          }`}
        >
          <Link
            href="/#home"
            onClick={(e) => handleClick(e as any, "#home")}
            className="text-xl font-bold tracking-tight"
          >
            PORTFOLIO<span className="text-accent-pink">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e as any, link.href)}
                className="px-4 py-2 text-sm font-bold hover:bg-hover-yellow hover:text-text-on-yellow transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={(e) => handleClick(e as any, "#contact")}
              className="ml-2 px-5 py-2 text-sm font-bold bg-foreground text-background brutal-border-2 hover:bg-hover-pink hover:text-text-on-pink transition-colors"
            >
              Hire Me
            </Link>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="w-10 h-10 brutal-border-2 flex items-center justify-center bg-background"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          </div>
        </div>
      </motion.nav>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background brutal-border border-t-0 flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e as any, link.href)}
                className="text-3xl font-bold hover:text-accent-pink transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={(e) => handleClick(e as any, "#contact")}
              className="mt-4 px-8 py-3 text-xl font-bold bg-foreground text-background brutal-border"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

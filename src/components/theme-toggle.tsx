"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 brutal-border-2 flex items-center justify-center bg-background" />
    );
  }

  const themes = [
    { name: "light", icon: Sun, label: "Light" },
    { name: "dark", icon: Moon, label: "Dark" },
    { name: "system", icon: Laptop, label: "System" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 brutal-border-2 flex items-center justify-center bg-background hover:bg-hover-yellow hover:text-text-on-yellow transition-colors"
        aria-label="Toggle theme"
      >
        {resolvedTheme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 w-36 bg-background brutal-border brutal-shadow-sm flex flex-col z-50 overflow-hidden"
          >
            {themes.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.name}
                  onClick={() => {
                    setTheme(t.name);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-bold text-left transition-colors ${
                    theme === t.name
                      ? "bg-foreground text-background"
                      : "hover:bg-hover-yellow hover:text-text-on-yellow"
                  }`}
                >
                  <Icon size={16} />
                  {t.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

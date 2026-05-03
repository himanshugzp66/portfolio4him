"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X, Download } from "lucide-react";

import { personal } from "@/data/personal";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = links.map((l) => l.href.slice(1));
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <nav
          className={cn(
            "flex items-center justify-between gap-2 rounded-full border px-2 py-2 backdrop-blur-xl transition-all duration-500 sm:px-3",
            scrolled
              ? "border-white/10 bg-ink-950/70 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
              : "border-white/5 bg-white/[0.02]",
          )}
        >
          <Link
            href="#hero"
            aria-label="Go to top"
            className="flex min-w-0 items-center gap-2 pl-1"
          >
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet p-[1px]">
              <div className="grid h-full w-full place-items-center rounded-[7px] bg-ink-950 font-display text-[11px]">
                {personal.initials}
              </div>
            </div>
            <span className="truncate font-display text-sm tracking-wide text-white/90">
              <span className="hidden sm:inline">{personal.name}</span>
              <span className="sm:hidden">{personal.shortName}</span>
              <span className="text-accent-cyan">.</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={cn(
                      "relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-white/[0.06] ring-1 ring-white/10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hidden h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5 hover:text-white lg:grid"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hidden h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5 hover:text-white lg:grid"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={personal.resumeUrl}
              download
              className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet p-[1px] md:flex"
            >
              <span className="flex items-center gap-2 rounded-full bg-ink-950 px-3 py-1.5 text-xs font-medium text-white transition group-hover:bg-ink-950/60">
                <Download className="h-3.5 w-3.5" />
                Resume
              </span>
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5 hover:text-white md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink-950/90 backdrop-blur-2xl md:hidden"
          >
            <div className="flex items-center justify-between px-4 py-4 sm:px-6">
              <span className="font-display text-lg">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 transition hover:bg-white/5"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ul className="mt-2 flex flex-1 flex-col items-center justify-center gap-4 px-6 pb-10 text-xl sm:gap-5 sm:text-2xl">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 font-display text-white/85 hover:text-white"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 flex flex-wrap items-center justify-center gap-3"
              >
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 transition hover:bg-white/5"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 transition hover:bg-white/5"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={personal.resumeUrl}
                  download
                  aria-label="Download Resume"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 transition hover:bg-white/5"
                >
                  <Download className="h-4 w-4" />
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

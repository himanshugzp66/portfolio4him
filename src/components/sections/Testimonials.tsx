"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What people say"
          title={
            <>
              Trusted by{" "}
              <span className="text-gradient">engineering leaders</span>
            </>
          }
          description="Feedback from managers, architects and SRE leads I've collaborated with."
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author + t.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="glass relative overflow-hidden rounded-2xl p-5 sm:p-6"
            >
              <Quote
                aria-hidden
                className="absolute right-4 top-4 h-6 w-6 text-white/15"
              />
              <blockquote className="text-sm leading-relaxed text-white/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet font-display text-xs">
                  {t.author
                    .split(" ")
                    .map((s) => s[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="font-display text-sm">{t.author}</div>
                  <div className="text-[11px] text-white/50">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

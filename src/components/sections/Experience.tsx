"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { experiences, type Experience as ExperienceItem } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              4+ years building{" "}
              <span className="text-gradient">cloud platforms</span>
            </>
          }
          description="A timeline of the missions I owned — from CI/CD modernization to multi-region cloud architecture and AI-driven DevOps."
        />

        <div className="relative mx-auto mt-12 max-w-4xl sm:mt-16">
          <div
            aria-hidden
            className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-accent-cyan/40 to-transparent md:left-1/2"
          />
          <div className="space-y-10 sm:space-y-12">
            {experiences.map((e, i) => (
              <TimelineItem key={`${e.role}-${i}`} item={e} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const left = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12"
    >
      <div
        aria-hidden
        className="absolute left-4 top-3 -translate-x-1/2 md:left-1/2"
      >
        <span className="relative grid h-3 w-3 place-items-center">
          <span className="absolute inset-[-6px] animate-ping rounded-full bg-accent-cyan/40" />
          <span className="h-3 w-3 rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet shadow-[0_0_15px_rgba(34,211,238,0.7)]" />
        </span>
      </div>

      <div className={`md:col-span-1 ${left ? "md:order-1" : "md:order-2"}`}>
        <motion.div
          whileHover={{ y: -4 }}
          className="glass ml-10 rounded-2xl p-5 sm:p-6 md:ml-0"
        >
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/55">
            <Briefcase className="h-3.5 w-3.5 shrink-0" />
            <span>{item.company}</span>
            <span className="opacity-40">•</span>
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span>{item.location}</span>
          </div>
          <h3 className="mt-2 font-display text-lg sm:text-xl">{item.role}</h3>
          <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-accent-cyan sm:text-xs">
            {item.period}
          </p>
          <p className="mt-3 text-sm text-white/65">{item.summary}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {item.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet shadow-[0_0_6px_rgba(168,85,247,0.7)]" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div
        className={`hidden md:col-span-1 md:block ${
          left ? "md:order-2" : "md:order-1"
        }`}
      />
    </motion.div>
  );
}

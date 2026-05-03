"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title={
            <>
              Verified <span className="text-gradient">credentials</span>
            </>
          }
          description="Industry-recognized certifications backing the production work."
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-6"
            >
              <div
                aria-hidden
                className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${c.color} opacity-20 blur-3xl transition group-hover:opacity-40`}
              />

              <div className="relative flex items-start gap-3 sm:gap-4">
                <div
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${c.color} text-white shadow-lg sm:h-14 sm:w-14`}
                >
                  <Award className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="break-words font-display text-sm leading-tight sm:text-base">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-xs text-white/55">
                    {c.issuer} · {c.year}
                  </p>
                  {c.source && (
                    <p className="mt-1 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-white/40">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent-cyan/70" />
                      <span>Source · {c.source}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-white/65"
                  >
                    <BadgeCheck className="h-3 w-3 text-emerald-400" /> {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

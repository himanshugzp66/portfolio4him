"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkle } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.07),transparent_60%)]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Projects with{" "}
              <span className="text-gradient">measurable impact</span>
            </>
          }
          description="A snapshot of high-leverage platforms and pipelines I've designed, shipped and operated in production."
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-colors hover:border-white/25 sm:p-6"
            >
              <div
                aria-hidden
                className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent-violet/10 blur-3xl transition group-hover:bg-accent-violet/25"
              />
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--mx,50%) var(--my,0%), rgba(34,211,238,0.08), transparent 40%)",
                }}
              />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/60">
                    <Sparkle className="h-3 w-3 text-accent-cyan" />
                    {p.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </div>

                <h3 className="mt-5 font-display text-lg leading-tight sm:text-xl">
                  {p.title}
                </h3>

                <dl className="mt-5 space-y-3 text-sm text-white/70">
                  <Detail label="Problem" value={p.problem} />
                  <Detail label="Solution" value={p.solution} />
                  <Detail label="Impact" value={p.impact} accent />
                </dl>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/65"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Detail({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </dt>
      <dd className={`mt-1 ${accent ? "text-accent-cyan" : "text-white/75"}`}>
        {value}
      </dd>
    </div>
  );
}

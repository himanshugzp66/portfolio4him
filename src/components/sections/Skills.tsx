"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-24 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_30%,transparent_80%)] opacity-40"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              The <span className="text-gradient">stack</span> I build &
              ship with
            </>
          }
          description="A pragmatic engineering toolkit spanning AWS Lambda, serverless microservices, Serverless Framework, API Gateway, event-driven architectures, cloud-native containers, Kubernetes orchestration, Infrastructure as Code, CI/CD automation, and observability — battle-tested in enterprise production."
        />

        <div className="mt-10 grid gap-3.5 sm:mt-14 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-colors hover:border-white/25 sm:p-5"
            >
              <div
                aria-hidden
                className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-25 bg-gradient-to-br ${s.color}`}
              />
              <div className="flex items-center gap-3">
                <div
                  className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg shadow-black/30`}
                >
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-display text-sm">{s.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {s.category}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.1,
                      ease: "easeOut",
                      delay: 0.1 + i * 0.02,
                    }}
                    className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                  />
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-white/45">
                  <span>Proficiency</span>
                  <span>{s.level}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

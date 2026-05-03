"use client";

import { motion } from "framer-motion";
import { Rocket, ShieldCheck, TrendingDown, Workflow } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

const cards = [
  {
    icon: Rocket,
    label: "40% faster deployments",
    desc: "Re-architected CI/CD with parallel builds and progressive delivery — cut release cycle time materially.",
  },
  {
    icon: Workflow,
    label: "20+ pipelines built",
    desc: "Designed Jenkins, GitHub Actions and CodePipeline flows used across an SDLC stack of 65k+ projects.",
  },
  {
    icon: ShieldCheck,
    label: "99.9% uptime",
    desc: "Hardened production with HA designs, blast-radius isolation and proactive observability.",
  },
  {
    icon: TrendingDown,
    label: "35% lower cloud cost",
    desc: "Drove FinOps with rightsizing, auto-scaling and CUR-driven dashboards across 20+ AWS accounts.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.06),transparent_60%)]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Engineer who treats{" "}
              <span className="text-gradient">infrastructure as a product</span>
            </>
          }
          description="Dynamic DevOps engineer with 4+ years of experience designing and automating cloud-native infrastructures across AWS. Passionate about reliability, automation, scaling systems — and bringing AI-driven thinking into the DevOps lifecycle."
        />

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:col-span-5"
          >
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent-violet/20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -left-16 -bottom-16 h-60 w-60 rounded-full bg-accent-cyan/20 blur-3xl"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/60">
                Profile
              </span>
              <h3 className="mt-4 font-display text-xl leading-tight sm:text-2xl md:text-3xl">
                Building reliable platforms for fast-moving teams.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                I specialize in CI/CD pipeline design, IaC with Terraform &
                CloudFormation, Kubernetes orchestration and Linux system
                administration. I&apos;ve led enterprise-wide DevOps initiatives,
                streamlined SDLC stacks for 65k+ projects, and integrated AI to
                automate triage, configuration and predictive monitoring.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-2.5 text-[11px] text-white/70 sm:gap-3 sm:text-xs">
                {[
                  "Reliability First",
                  "Automation Mindset",
                  "FinOps Aware",
                  "Security by Default",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-2 sm:px-3"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
                    <span className="truncate">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:col-span-7">
            {cards.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass group relative overflow-hidden rounded-2xl p-5 sm:p-6"
              >
                <div
                  aria-hidden
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 blur-2xl transition group-hover:from-accent-cyan/30 group-hover:to-accent-violet/30"
                />
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 text-white">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-display text-base sm:text-lg">
                    {c.label}
                  </h4>
                  <p className="mt-2 text-sm text-white/60">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

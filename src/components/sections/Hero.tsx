"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Cpu,
  Download,
  GitBranch,
  Mail,
  Server,
  Sparkles,
} from "lucide-react";

import RotatingText from "@/components/ui/RotatingText";
import { ButtonLink } from "@/components/ui/Button";
import ParticlesBackground from "@/components/effects/ParticlesBackground";
import { personal } from "@/data/personal";

const floaters = [
  {
    icon: Cloud,
    label: "AWS",
    pos: "left-[6%] top-[22%]",
    grad: "from-amber-400 to-orange-500",
    delay: 0,
  },
  {
    icon: Cpu,
    label: "Terraform",
    pos: "right-[8%] top-[28%]",
    grad: "from-violet-500 to-purple-600",
    delay: 0.4,
  },
  {
    icon: GitBranch,
    label: "GitOps",
    pos: "left-[10%] bottom-[26%]",
    grad: "from-emerald-400 to-teal-500",
    delay: 0.8,
  },
  {
    icon: Server,
    label: "Kubernetes",
    pos: "right-[6%] bottom-[22%]",
    grad: "from-sky-400 to-indigo-500",
    delay: 1.2,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_70%_50%_at_50%_30%,black_50%,transparent_85%)] opacity-60"
      />
      <div aria-hidden className="absolute inset-0 bg-hero-glow" />
      <div
        aria-hidden
        className="absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 h-[420px] w-full max-w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.2),transparent_60%)] blur-2xl"
      />
      <ParticlesBackground />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-white/70 backdrop-blur-xl sm:mb-6 sm:px-4 sm:text-xs"
        >
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-accent-cyan" />
          <span>Available for Senior DevOps · Cloud · SRE roles</span>
          <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-[34px] leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px]"
        >
          <span className="block text-white/95">{personal.name}</span>
          <span className="mt-3 block text-xl sm:text-3xl md:text-4xl lg:text-5xl">
            <RotatingText words={personal.roles} />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-balance text-sm text-white/65 sm:mt-6 sm:text-base md:text-lg"
        >
          {personal.tagline} I design, automate and operate cloud-native
          platforms across <span className="text-white/90">AWS</span>,{" "}
          <span className="text-white/90">Kubernetes</span> and{" "}
          <span className="text-white/90">Terraform</span> — built for
          speed, safety and scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-7 flex w-full flex-wrap items-center justify-center gap-2.5 sm:mt-9 sm:gap-3"
        >
          <ButtonLink href="#projects" variant="primary">
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
          <ButtonLink href={personal.resumeUrl} variant="outline" download>
            <Download className="h-4 w-4" /> Download Resume
          </ButtonLink>
          <ButtonLink href="#contact" variant="ghost">
            <Mail className="h-4 w-4" /> Contact Me
          </ButtonLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.25em] text-white/40 sm:mt-14 sm:gap-x-8 sm:text-[11px] sm:tracking-[0.3em]"
        >
          <span>AWS · Azure · GCP</span>
          <span>Kubernetes · EKS · AKS</span>
          <span>Terraform · CloudFormation · CDK</span>
          <span>Jenkins · GitHub Actions · GitLab</span>
        </motion.div>

        {floaters.map(({ icon: Icon, label, pos, grad, delay }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + delay * 0.1, duration: 0.6 }}
            className={`pointer-events-none absolute hidden md:block ${pos}`}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4 + delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center"
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br p-[1px] ${grad}`}
              >
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-ink-950/85 backdrop-blur-xl">
                  <Icon className="h-5 w-5 text-white/85" />
                </div>
              </div>
              <span className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/40">
                {label}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

import Counter from "@/components/ui/Counter";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section id="stats" className="relative py-14 sm:py-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,rgba(124,58,237,0.05),transparent)]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass relative overflow-hidden rounded-3xl">
          <div
            aria-hidden
            className="absolute -inset-px rounded-3xl bg-gradient-to-r from-accent-cyan/0 via-accent-violet/40 to-accent-cyan/0 opacity-30"
            style={{
              maskImage:
                "linear-gradient(black,black) content-box, linear-gradient(black,black)",
              WebkitMaskImage:
                "linear-gradient(black,black) content-box, linear-gradient(black,black)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "1px",
            }}
          />
          <div className="grid divide-y divide-white/5 sm:grid-cols-2 sm:divide-x lg:grid-cols-5 lg:divide-y-0">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07 }}
                className="px-4 py-6 text-center sm:px-6 sm:py-8"
              >
                <div className="font-display text-3xl tracking-tight sm:text-4xl">
                  <span className="text-gradient-strong">
                    <Counter
                      to={s.value}
                      suffix={s.suffix}
                      decimals={s.decimals ?? 0}
                    />
                  </span>
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-white/55 sm:text-xs sm:tracking-[0.3em]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[200] grid place-items-center bg-ink-950"
        >
          <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_50%_40%_at_50%_50%,black_30%,transparent_70%)] opacity-40" />

          <div className="relative">
            <div className="absolute -inset-12 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet opacity-30 blur-3xl" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="h-24 w-24 rounded-full border-2 border-transparent border-t-accent-cyan border-r-accent-violet"
            />
            <div className="absolute inset-0 grid place-items-center font-display text-2xl">
              <span className="text-gradient">HP</span>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-16 text-[10px] uppercase tracking-[0.4em] text-white/55"
          >
            Provisioning experience…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

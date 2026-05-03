"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          aria-label="Back to top"
          className="fixed z-40 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition hover:bg-white/10 sm:h-12 sm:w-12"
          style={{
            bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
            right: "calc(env(safe-area-inset-right, 0px) + 1rem)",
          }}
        >
          <span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet opacity-40 blur-xl"
          />
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

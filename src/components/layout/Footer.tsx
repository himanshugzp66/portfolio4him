import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div className="absolute inset-x-0 -top-px mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 text-center sm:gap-6 sm:px-6 sm:py-10 md:flex-row md:text-left lg:px-8">
        <Link
          href="#hero"
          aria-label={`Back to top — ${personal.name}`}
          className="group flex items-center gap-3 rounded-xl outline-none transition focus-visible:ring-2 focus-visible:ring-accent-cyan/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
        >
          <div className="h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet p-[1px] transition group-hover:shadow-[0_0_20px_-4px_rgba(34,211,238,0.55)]">
            <div className="grid h-full w-full place-items-center rounded-[7px] bg-ink-950 font-display text-[11px]">
              {personal.initials}
            </div>
          </div>
          <div>
            <p className="font-display text-sm transition group-hover:text-white">
              {personal.name}
            </p>
            <p className="text-xs text-white/50 transition group-hover:text-white/70">
              DevOps · Cloud · SRE
            </p>
          </div>
        </Link>

        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} {personal.name}
          <span className="mx-2 text-white/25">·</span>
          All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          <Link
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5 hover:text-white sm:h-9 sm:w-9"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5 hover:text-white sm:h-9 sm:w-9"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5 hover:text-white sm:h-9 sm:w-9"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

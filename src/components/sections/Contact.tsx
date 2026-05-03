"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { Button, ButtonLink } from "@/components/ui/Button";
import { personal } from "@/data/personal";

type Status = "idle" | "sending" | "sent" | "error";

const initialForm = { name: "", email: "", message: "", website: "" };

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [form, setForm] = useState(initialForm);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          website: form.website,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("sent");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_60%)]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Hire me for{" "}
              <span className="text-gradient">DevOps · Cloud · SRE</span>{" "}
              roles
            </>
          }
          description="Open to senior engineering opportunities, consulting and platform-building missions. Let's talk."
        />

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:col-span-5"
          >
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-accent-cyan/20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -left-16 -bottom-16 h-60 w-60 rounded-full bg-accent-violet/20 blur-3xl"
            />
            <div className="relative">
              <h3 className="font-display text-xl sm:text-2xl">
                Let&apos;s build something reliable.
              </h3>
              <p className="mt-3 text-sm text-white/60">
                Reach out for full-time roles, contracts or platform-engineering
                projects. I usually respond within 24 hours.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <ContactRow
                  icon={Mail}
                  label={personal.email}
                  href={`mailto:${personal.email}`}
                />
                <ContactRow
                  icon={Phone}
                  label={personal.phone}
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                />
                <ContactRow icon={MapPin} label={personal.location} />
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <ButtonLink
                  href={personal.linkedin}
                  variant="outline"
                  external
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </ButtonLink>
                <ButtonLink href={personal.github} variant="outline" external>
                  <Github className="h-4 w-4" /> GitHub
                </ButtonLink>
                <ButtonLink
                  href={personal.resumeUrl}
                  variant="primary"
                  download={personal.resumeDownloadName}
                >
                  <Download className="h-4 w-4" /> Resume
                </ButtonLink>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:col-span-7"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" id="name">
                <input
                  id="name"
                  required
                  autoComplete="name"
                  maxLength={120}
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="input"
                  placeholder="Jane Recruiter"
                />
              </Field>
              <Field label="Email" id="email">
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  maxLength={254}
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className="input"
                  placeholder="jane@company.com"
                />
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Message" id="message">
                <textarea
                  id="message"
                  rows={5}
                  required
                  minLength={5}
                  maxLength={5000}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className="input resize-none"
                  placeholder="Tell me about the role, team and timelines…"
                />
              </Field>
            </div>

            <div
              aria-hidden
              className="absolute -left-[9999px] -top-[9999px]"
            >
              <label htmlFor="website">
                Website (leave blank)
                <input
                  id="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, website: e.target.value }))
                  }
                />
              </label>
            </div>

            <AnimatePresence mode="wait">
              {status === "sent" && (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm text-emerald-300"
                  role="status"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  <div>
                    <p className="font-medium text-emerald-200">
                      Message sent.
                    </p>
                    <p className="text-emerald-300/80">
                      Thanks — I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mt-5 flex items-start gap-3 rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 text-sm text-rose-300"
                  role="alert"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <div>
                    <p className="font-medium text-rose-200">
                      Could not send.
                    </p>
                    <p className="text-rose-300/80">{errorMsg}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-white/50">
                Your message is securely stored and only seen by me.
              </p>
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : status === "sent" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
}: {
  icon: LucideIcon;
  label: string;
  href?: string;
}) {
  const inner = (
    <span className="flex min-w-0 items-center gap-3 text-white/75">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03]">
        <Icon className="h-4 w-4 text-accent-cyan" />
      </span>
      <span className="min-w-0 truncate">{label}</span>
    </span>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="block hover:text-white">
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={id}
      className="block text-xs uppercase tracking-[0.25em] text-white/55"
    >
      {label}
      <div className="mt-2">{children}</div>
    </label>
  );
}

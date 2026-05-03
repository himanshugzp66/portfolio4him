import Link from "next/link";
import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950";

const variants = {
  primary:
    "text-white bg-gradient-to-r from-accent-cyan via-sky-500 to-accent-violet shadow-[0_10px_40px_-15px_rgba(124,58,237,0.7)] hover:shadow-[0_15px_55px_-12px_rgba(34,211,238,0.65)] hover:-translate-y-[1px]",
  outline:
    "text-white/90 border border-white/15 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/25",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
} as const;

export type Variant = keyof typeof variants;

function Glow({ variant }: { variant: Variant }) {
  if (variant !== "primary") return null;
  return (
    <span
      aria-hidden
      className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60"
    />
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ variant = "primary", className, children, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      >
        <Glow variant={variant} />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  },
);

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "download"> & {
  variant?: Variant;
  href: string;
  external?: boolean;
  download?: boolean | string;
  className?: string;
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  href,
  external,
  download,
  ...rest
}: LinkProps) {
  const cls = cn(base, variants[variant], className);

  if (external || download) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        download={download as boolean | string | undefined}
        className={cls}
        {...rest}
      >
        <Glow variant={variant} />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      <Glow variant={variant} />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  );
}

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Strong automation mindset — Himanshu turns chaos into pipelines.",
    author: "Engineering Manager",
    role: "Enterprise FinTech",
  },
  {
    quote:
      "Excellent cloud delivery engineer. Ships safely, scales gracefully.",
    author: "Cloud Architect",
    role: "Global Bank",
  },
  {
    quote:
      "Reliable production ownership — owns incidents, improves the system afterwards.",
    author: "Director of SRE",
    role: "SaaS Platform",
  },
  {
    quote:
      "Brings AI-thinking to DevOps. A genuine multiplier for the team.",
    author: "VP Engineering",
    role: "Tech Consultancy",
  },
];

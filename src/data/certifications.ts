export type Certification = {
  name: string;
  issuer: string;
  year: string;
  color: string;
  skills: string[];
  source?: string;
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
    color: "from-amber-400 to-orange-500",
    skills: ["AWS Core", "Security", "Billing & Pricing", "Well-Architected"],
    source: "Corporate L&D Program",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF · Linux Foundation",
    year: "2023",
    color: "from-blue-400 to-indigo-500",
    skills: ["Cluster Ops", "Networking", "Storage", "Troubleshooting"],
    source: "Corporate L&D Program",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    year: "2024",
    color: "from-violet-500 to-purple-600",
    skills: ["IaC", "Modules", "State", "Workflows"],
    source: "Corporate L&D Program",
  },
  {
    name: "Linux System Administration",
    issuer: "Linux Foundation",
    year: "2022",
    color: "from-yellow-400 to-amber-500",
    skills: ["Ubuntu", "CentOS", "Shell", "Performance Tuning"],
    source: "Corporate L&D Program",
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker, Inc.",
    year: "2022",
    color: "from-sky-400 to-blue-500",
    skills: ["Containers", "Compose", "Registry"],
    source: "Corporate L&D Program",
  },
  {
    name: "Course of Computer Concept (CCC)",
    issuer: "NIELIT",
    year: "2020",
    color: "from-emerald-400 to-teal-500",
    skills: ["Computing Fundamentals", "Office", "Internet"],
  },
];

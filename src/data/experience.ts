export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Senior DevOps Engineer",
    company: "A3 Ideanix Technology Pvt. Ltd.",
    period: "May 2025 — Present",
    location: "India",
    summary:
      "Leading cloud platform engineering and DevOps initiatives — owning AWS infrastructure, CI/CD modernization and AI-driven automation end-to-end.",
    highlights: [
      "Architecting scalable, secure AWS infrastructure with Terraform and Kubernetes (EKS).",
      "Designing zero-downtime CI/CD pipelines on GitHub Actions & Jenkins with progressive delivery and automated rollbacks.",
      "Driving observability across services with Prometheus, Grafana and centralized logging — cutting MTTD significantly.",
      "Embedding AI agents (OpenAI, Claude, Cursor) into developer workflows for triage, config generation and auto-remediation.",
      "Championing FinOps with rightsizing, auto-scaling and cost-aware architecture decisions across multi-account AWS.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Techwave",
    period: "Apr 2022 — Mar 2025",
    location: "India",
    summary:
      "Drove enterprise-wide CI/CD for 65k+ projects, modernized release engineering, and led AI-driven automation across the SDLC.",
    highlights: [
      "Automated CI/CD pipelines with GitHub Actions, Jenkins & AWS CodePipeline, cutting deployment time by 45%.",
      "Integrated OpenAI, Claude, Cursor AI agents for AI-driven DevOps automation — predictive monitoring & auto-remediation.",
      "Built Terraform modules for shared-VPC onboarding and consolidated CloudWatch dashboards across 20+ AWS accounts..",
      "Managed releases for self-hosted GitHub Actions, Bitbucket Pipelines & Nexus with zero-downtime strategies.",
      "Built Terraform modules for shared-VPC onboarding and consolidated CloudWatch dashboards across 20+ AWS accounts.",
    ],
  },
  {
    role: "Cloud & Release Engineer",
    company: "Techwave",
    period: "2023 — 2025",
    location: "India",
    summary:
      "Owned cloud delivery, observability and release engineering across the multi-account AWS estate.",
    highlights: [
      "Provisioned CloudFront for internet-facing apps with ECS/EKS backends.",
      "Configured network connectivity & firewalls between on-prem and AWS.",
      "Led the Sky Risk Remediation program — closing security violations and adopting cloud best practices.",
      "Wrote REST APIs converting payloads to authenticated SMTP for the internal mail server.",
    ],
  },
  {
    role: "DevOps & Service Operations",
    company: "Techwave",
    period: "2022 — 2023",
    location: "India",
    summary:
      "Built CI pipelines, container fleets and configuration management foundations.",
    highlights: [
      "Migrated legacy Jenkins to Jenkins 2.4 with parallel builds — 200% reduction in cycle time.",
      "Authored Ansible playbooks for 14 Linux & 3 Windows applications.",
      "Operated container fleets across ECS, Docker & Kubernetes for micro-services.",
      "Implemented database deployment automation using Flyway with version control.",
    ],
  },
  {
    role: "Cloud Initiative & DevOps Dashboard",
    company: "Techwave",
    period: "2022",
    location: "India",
    summary:
      "Joined the Cloud Center of Excellence, drove migrations and built the central observability platform.",
    highlights: [
      "Migrated 14 on-prem applications to AWS via Lift-Shift, Replatform & Refactor strategies.",
      "Cloud CoE member — applied Well-Architected best practices across teams.",
      "Onboarded 190+ teams to a centralized Grafana-Prometheus monitoring stack with containerized deployment.",
    ],
  },
];

export type Project = {
  title: string;
  tag: string;
  problem: string;
  solution: string;
  tools: string[];
  impact: string;
};

export const projects: Project[] = [
  {
    title: "Multi-Region AWS Infrastructure",
    tag: "Cloud Architecture",
    problem:
      "Critical workloads needed regional resilience without ballooning ops overhead.",
    solution:
      "Designed an active-passive multi-region AWS architecture with Terraform modules, Route 53 health-checked failover and Aurora Global replication.",
    tools: ["AWS", "Terraform", "Route 53", "Aurora Global", "CloudFront"],
    impact: "RTO < 5 min, RPO < 30 s, 99.99% effective availability.",
  },
  {
    title: "Kubernetes Deployment Platform",
    tag: "Platform Engineering",
    problem:
      "Teams shipped to clusters via brittle, snowflake scripts with no guardrails.",
    solution:
      "Built an internal EKS platform with Helm charts, GitOps via ArgoCD, OPA policies and self-service onboarding.",
    tools: ["EKS", "Helm", "ArgoCD", "OPA", "Kustomize"],
    impact: "Onboarded 40+ services; deploy time hours → minutes.",
  },
  {
    title: "Zero-Downtime CI/CD Pipeline",
    tag: "Release Engineering",
    problem:
      "Production deploys caused customer-visible downtime and painful rollbacks.",
    solution:
      "Implemented blue/green & canary releases in Jenkins + AWS CodeDeploy with automated smoke tests and progressive traffic shifting.",
    tools: ["Jenkins", "CodeDeploy", "AWS ALB", "Datadog", "Bash"],
    impact: "Zero-downtime deploys, 40% faster releases, rollback < 60 s.",
  },
  {
    title: "Cost Optimization Dashboard",
    tag: "FinOps",
    problem:
      "Cloud bill grew 2× YoY with no clear ownership or rightsizing signal.",
    solution:
      "Built a FinOps dashboard merging CUR, tag taxonomy, rightsizing recommendations and auto-scaling policies — surfaced via Grafana.",
    tools: ["AWS CUR", "Athena", "Grafana", "Lambda", "Python"],
    impact: "Cut infra cost by 35% via rightsizing and auto-scaling.",
  },
  {
    title: "Monitoring & Alerting Stack",
    tag: "Observability",
    problem:
      "190+ teams lacked unified observability, slowing incident response.",
    solution:
      "Containerized Prometheus + Grafana + Alertmanager stack with Loki for logs and a self-service onboarding pipeline.",
    tools: ["Prometheus", "Grafana", "Loki", "Alertmanager", "Kubernetes"],
    impact:
      "MTTD reduced 60%; 190+ teams onboarded to real-time observability.",
  },
  {
    title: "AI-Driven DevOps Automation",
    tag: "AI Ops",
    problem:
      "Repetitive triage, config and remediation work was eating engineering hours.",
    solution:
      "Integrated Cursor AI agents, Claude into pipelines for log triage, config generation and auto-remediation runbooks driven by predictive signals.",
    tools: ["OpenAI", "Python", "Jenkins", "Lambda", "Slack"],
    impact: "~50% reduction in manual troubleshooting across the org.",
  },
];

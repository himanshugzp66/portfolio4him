import {
  Cloud,
  Box,
  Layers,
  Cpu,
  Workflow,
  GitBranch,
  Terminal,
  Code2,
  Activity,
  Settings,
  Server,
  Shield,
  Network,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  name: string;
  level: number;
  category: string;
  icon: LucideIcon;
  color: string;
};

export const skills: Skill[] = [
  {
    name: "AWS",
    level: 95,
    category: "Cloud",
    icon: Cloud,
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "Docker",
    level: 92,
    category: "Containers",
    icon: Box,
    color: "from-sky-400 to-blue-500",
  },
  {
    name: "Kubernetes",
    level: 90,
    category: "Orchestration",
    icon: Layers,
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Terraform",
    level: 90,
    category: "IaC",
    icon: Cpu,
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Jenkins",
    level: 92,
    category: "CI/CD",
    icon: Workflow,
    color: "from-rose-500 to-red-600",
  },
  {
    name: "GitHub Actions",
    level: 90,
    category: "CI/CD",
    icon: GitBranch,
    color: "from-zinc-200 to-zinc-400",
  },
  {
    name: "Linux",
    level: 92,
    category: "Systems",
    icon: Terminal,
    color: "from-yellow-400 to-amber-500",
  },
  {
    name: "Bash",
    level: 88,
    category: "Scripting",
    icon: Terminal,
    color: "from-emerald-400 to-green-500",
  },
  {
    name: "Python",
    level: 85,
    category: "Scripting",
    icon: Code2,
    color: "from-yellow-300 to-blue-500",
  },
  {
    name: "Prometheus / Grafana",
    level: 88,
    category: "Monitoring",
    icon: Activity,
    color: "from-orange-500 to-pink-500",
  },
  {
    name: "Ansible",
    level: 86,
    category: "Config Mgmt",
    icon: Settings,
    color: "from-red-500 to-rose-600",
  },
  {
    name: "Nginx",
    level: 85,
    category: "Web / Proxy",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "CI/CD",
    level: 95,
    category: "Pipelines",
    icon: Workflow,
    color: "from-cyan-400 to-sky-500",
  },
  {
    name: "Security",
    level: 84,
    category: "Compliance",
    icon: Shield,
    color: "from-fuchsia-500 to-pink-600",
  },
  {
    name: "Networking",
    level: 84,
    category: "Infra",
    icon: Network,
    color: "from-indigo-400 to-violet-600",
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
};

export const stats: Stat[] = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Production Deployments" },
  { value: 99.9, suffix: "%", label: "Uptime Achieved", decimals: 1 },
  { value: 20, suffix: "+", label: "Pipelines Built" },
  { value: 10, suffix: "+", label: "Cloud Projects Delivered" },
];

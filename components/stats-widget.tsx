'use client';

import { Award, Hammer, Rocket, Trophy } from 'lucide-react';
import { AnimatedCounter } from '@/components/animated-counter';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const stats: Stat[] = [
  {
    label: 'Production Projects',
    value: 4,
    suffix: '',
    icon: Rocket,
    color: 'text-blue-500',
  },
  {
    label: 'Hackathon Wins',
    value: 2,
    suffix: '',
    icon: Trophy,
    color: 'text-yellow-500',
  },
  {
    label: 'Core Skills',
    value: 15,
    suffix: '+',
    icon: Hammer,
    color: 'text-green-500',
  },
  {
    label: 'Certifications',
    value: 6,
    suffix: '',
    icon: Award,
    color: 'text-orange-500',
  },
];

function StatItem({ stat }: { stat: Stat }) {
  const Icon = stat.icon;

  return (
    <div className="group flex min-w-0 items-center justify-center gap-2 px-2 py-3 transition-colors hover:bg-white/[0.035] sm:gap-3 sm:px-3">
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] ${stat.color}`}>
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <AnimatedCounter
          target={stat.value}
          duration={1600}
          suffix={stat.suffix}
          className={`text-lg font-bold leading-none sm:text-xl ${stat.color}`}
        />
        <p className="mt-1 whitespace-normal text-[10px] font-medium leading-tight text-muted-foreground sm:text-xs">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

export function StatsWidget() {
  return (
    <section aria-label="Portfolio highlights" className="mx-auto mt-8 w-full max-w-2xl">
      <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.08] overflow-hidden rounded-2xl border border-white/[0.1] bg-slate-950/60 shadow-lg shadow-blue-950/15 sm:grid-cols-4 sm:divide-y-0">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}

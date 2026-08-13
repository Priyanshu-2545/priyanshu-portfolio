'use client';

import { useAnimatedCounter } from '@/hooks/use-animated-counter';
import { GlassCard } from '@/components/glass-card';
import { AnimatedCounter } from '@/components/animated-counter';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
  color: string;
}

const stats: Stat[] = [
  {
    label: 'Production Projects',
    value: 4,
    suffix: '',
    icon: '🚀',
    color: 'text-blue-500',
  },
  {
    label: 'Hackathon Wins',
    value: 2,
    suffix: '',
    icon: '🏆',
    color: 'text-yellow-500',
  },
  {
    label: 'Core Skills',
    value: 15,
    suffix: '+',
    icon: '🛠️',
    color: 'text-green-500',
  },
  {
    label: 'Certifications',
    value: 3,
    suffix: '',
    icon: '📜',
    color: 'text-orange-500',
  },
];

function StatItem({ stat }: { stat: Stat }) {
  return (
    <GlassCard className="group relative p-6 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 space-y-3 text-center">
        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
          {stat.icon}
        </div>
        <div>
          <p className={`text-3xl lg:text-4xl font-bold ${stat.color} transition-colors`}>
            <AnimatedCounter
              target={stat.value}
              duration={2000}
              suffix={stat.suffix}
              className="text-3xl lg:text-4xl font-bold"
            />
          </p>
          <p className="text-sm text-muted-foreground font-medium mt-2">{stat.label}</p>
        </div>
      </div>
    </GlassCard>
  );
}

export function StatsWidget() {
  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <StatItem key={idx} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

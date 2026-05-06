'use client';

import { useAnimatedCounter } from '@/hooks/use-animated-counter';

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
  const { ref, value } = useAnimatedCounter(stat.value, 2000, stat.suffix);

  return (
    <div
      ref={ref}
      className="group relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden"
    >
      {/* Hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 space-y-3 text-center">
        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
          {stat.icon}
        </div>
        <div>
          <p className={`text-3xl lg:text-4xl font-bold ${stat.color} transition-colors`}>
            {value}
          </p>
          <p className="text-sm text-muted-foreground font-medium mt-2">{stat.label}</p>
        </div>
      </div>

      {/* Border animation on hover */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/20 transition-all duration-500 pointer-events-none" />
    </div>
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

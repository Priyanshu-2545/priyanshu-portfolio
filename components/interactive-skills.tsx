'use client';

import { useState, useEffect } from 'react';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'AWS', icon: '☁️', level: 85, category: 'Cloud' },
  { name: 'Docker', icon: '🐳', level: 90, category: 'DevOps' },
  { name: 'Kubernetes', icon: '⚙️', level: 75, category: 'DevOps' },
  { name: 'Node.js', icon: '💚', level: 90, category: 'Backend' },
  { name: 'React', icon: '⚛️', level: 95, category: 'Frontend' },
  { name: 'Next.js', icon: '▲', level: 85, category: 'Frontend' },
  { name: 'MongoDB', icon: '🍃', level: 80, category: 'Database' },
  { name: 'PostgreSQL', icon: '🐘', level: 85, category: 'Database' },
  { name: 'TypeScript', icon: '📘', level: 90, category: 'Frontend' },
  { name: 'Git', icon: '📦', level: 95, category: 'Tools' },
  { name: 'Jenkins', icon: '🔧', level: 75, category: 'DevOps' },
  { name: 'Redis', icon: '🔴', level: 70, category: 'Database' },
];

export function InteractiveSkills() {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    // Generate random positions for floating skills
    const newPositions = skills.map(() => ({
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    }));
    setPositions(newPositions);
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-slate-900/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="space-y-2 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 text-center">
          <p className="text-blue-500 font-semibold text-xs sm:text-sm tracking-widest uppercase">Interactive</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Skills in Focus</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Hover over each skill to see proficiency level. Interactive showcase of technical expertise.
          </p>
        </div>

        {/* Interactive Skills Grid */}
        <div className="relative min-h-[500px] sm:min-h-[600px]">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="absolute cursor-pointer transition-all duration-500 ease-out"
              style={{
                left: `${positions[idx]?.x || 50}%`,
                top: `${positions[idx]?.y || 50}%`,
                transform: `translate(-50%, -50%) ${hoveredSkill === skill ? 'scale-125' : 'scale-100'}`,
                animation: `float ${3 + idx * 0.3}s ease-in-out infinite`,
              }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className={`relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                  hoveredSkill === skill
                    ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500 shadow-xl shadow-blue-500/30'
                    : 'bg-white/5 border border-white/10 hover:border-blue-500/50'
                }`}
              >
                <div className="text-3xl sm:text-4xl mb-2">{skill.icon}</div>
                <div className="text-xs sm:text-sm font-bold text-center">{skill.name}</div>
                
                {/* Progress bar on hover */}
                {hoveredSkill === skill && (
                  <div className="mt-3 space-y-1">
                    <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-xs text-center text-blue-400 font-semibold">
                      {skill.level}% Proficiency
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Center Info Panel */}
          {hoveredSkill && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-slate-900/90 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl max-w-sm mx-4 animate-in fade-in zoom-in duration-300">
                <div className="text-4xl sm:text-5xl mb-3">{hoveredSkill.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{hoveredSkill.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{hoveredSkill.category}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-blue-400 font-semibold">{hoveredSkill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                      style={{ width: `${hoveredSkill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Default center message */}
          {!hoveredSkill && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl mb-4 animate-pulse">👆</div>
                <p className="text-sm sm:text-base text-muted-foreground">Hover over any skill to see details</p>
              </div>
            </div>
          )}
        </div>

        {/* Category Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {['Cloud', 'DevOps', 'Backend', 'Frontend', 'Database', 'Tools'].map((category) => (
            <div
              key={category}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-xs sm:text-sm font-medium text-muted-foreground"
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-15px); }
        }
      `}</style>
    </section>
  );
}

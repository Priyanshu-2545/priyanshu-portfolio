'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface SkillData {
  name: string;
  level: number;
  category: string;
  color: string;
}

const skillsData: SkillData[] = [
  { name: 'Docker', level: 80, category: 'DevOps', color: '#3B82F6' },
  { name: 'AWS', level: 75, category: 'Cloud', color: '#F59E0B' },
  { name: 'CI/CD', level: 78, category: 'DevOps', color: '#10B981' },
  { name: 'Node.js', level: 82, category: 'Backend', color: '#22C55E' },
  { name: 'React', level: 80, category: 'Frontend', color: '#60A5FA' },
  { name: 'PostgreSQL', level: 77, category: 'Database', color: '#8B5CF6' },
  { name: 'Kubernetes', level: 70, category: 'DevOps', color: '#0EA5E9' },
  { name: 'Next.js', level: 78, category: 'Frontend', color: '#64748B' },
];

export function SkillsRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animTimeRef = useRef(0);
  const rafRef = useRef<number>(0);
  const progressRef = useRef(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [currentTopSkillIndex, setCurrentTopSkillIndex] = useState(0);
  const [canvasSize, setCanvasSize] = useState(480);

  // Carousel animation for top skills
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTopSkillIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle responsive canvas sizing
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const newSize = Math.min(width - 32, 480);
      setCanvasSize(newSize);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const drawRadar = useCallback((canvas: HTMLCanvasElement, progress: number, animTime: number) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(canvas.width, canvas.height) / 2 - 40;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Animated concentric circles with pulse effect
    const pulse = Math.sin(animTime * 0.03) * 0.2 + 0.8;
    for (let i = 1; i <= 5; i++) {
      const radius = (maxRadius / 5) * i;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(59, 130, 246, ${(0.1 + i * 0.04) * pulse})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw radial lines
    const angleSlice = (Math.PI * 2) / skillsData.length;
    for (let i = 0; i < skillsData.length; i++) {
      const angle = angleSlice * i - Math.PI / 2;
      const x = centerX + Math.cos(angle) * maxRadius;
      const y = centerY + Math.sin(angle) * maxRadius;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw skill labels - responsive font sizing with better positioning
      const labelDist = maxRadius + 50;
      const labelX = centerX + Math.cos(angle) * labelDist;
      const labelY = centerY + Math.sin(angle) * labelDist;

      const fontSize = canvas.width > 400 ? 12 : canvas.width > 300 ? 11 : 9;
      ctx.font = `bold ${fontSize}px 'Arial', sans-serif`;
      ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';

      const metrics = ctx.measureText(skillsData[i].name);
      const textWidth = metrics.width + 10;
      const textHeight = 18;

      // Draw rounded rectangle background
      ctx.beginPath();
      ctx.roundRect(
        labelX - textWidth / 2,
        labelY - textHeight / 2,
        textWidth,
        textHeight,
        3
      );
      ctx.fill();

      // Draw text with better contrast
      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `bold ${fontSize}px 'Arial', sans-serif`;
      ctx.fillText(skillsData[i].name, labelX, labelY);
    }

    // Draw filled polygon
    ctx.beginPath();
    for (let i = 0; i < skillsData.length; i++) {
      const angle = angleSlice * i - Math.PI / 2;
      const skillLevel = (skillsData[i].level / 100) * maxRadius * progress;
      const x = centerX + Math.cos(angle) * skillLevel;
      const y = centerY + Math.sin(angle) * skillLevel;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();

    ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
    ctx.fill();

    ctx.strokeStyle = 'rgba(59, 130, 246, 0.6)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw points on polygon with enhanced glow
    for (let i = 0; i < skillsData.length; i++) {
      const angle = angleSlice * i - Math.PI / 2;
      const skillLevel = (skillsData[i].level / 100) * maxRadius * progress;
      const x = centerX + Math.cos(angle) * skillLevel;
      const y = centerY + Math.sin(angle) * skillLevel;

      // Animated glow effect
      const glowIntensity = Math.sin((animTime + i * 45) * 0.05) * 0.3 + 0.7;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 12);
      const alphaHex = Math.floor(60 * glowIntensity).toString(16).padStart(2, '0');
      gradient.addColorStop(0, skillsData[i].color + alphaHex);
      gradient.addColorStop(1, skillsData[i].color + '00');
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Main point
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = skillsData[i].color;
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    progressRef.current = 0;
    let isRunning = true;

    const animate = () => {
      if (!isRunning) return;

      animTimeRef.current += 1;
      if (progressRef.current < 1) {
        progressRef.current = Math.min(progressRef.current + 0.02, 1);
      }

      drawRadar(canvas, progressRef.current, animTimeRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      isRunning = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, [drawRadar, canvasSize]);

  // Top skills card with carousel
  const topSkills = [...skillsData].sort((a, b) => b.level - a.level).slice(0, 3);
  const displayedSkills = [
    topSkills[(currentTopSkillIndex) % 3],
    topSkills[(currentTopSkillIndex + 1) % 3],
    topSkills[(currentTopSkillIndex + 2) % 3],
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-slate-900/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-2 sm:space-y-3 text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-base text-blue-500 font-semibold uppercase tracking-widest animate-pulse">
            Proficiency Map
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Skills Radar
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Comprehensive overview of expertise across technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Radar Canvas - Full width on mobile */}
          <div ref={containerRef} className="md:col-span-2 flex justify-center w-full">
            <div className="relative w-full max-w-md aspect-square bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-border p-3 sm:p-4">
              <canvas
                ref={canvasRef}
                width={canvasSize}
                height={canvasSize}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right Side - Stats & Top Skills - Stacked on mobile */}
          <div className="space-y-4 sm:space-y-6 w-full">
            {/* Top Skills Carousel Card */}
            <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200/50 dark:border-blue-900/30 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl animate-bounce">🔥</span>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-950 dark:text-blue-200">
                  Top Strengths
                </h3>
              </div>

              {/* Carousel with animation */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                {displayedSkills.map((skill, idx) => (
                  <div
                    key={skill.name}
                    className="absolute w-full transition-all duration-700 ease-out"
                    style={{
                      opacity: idx === 0 ? 1 : 0,
                      transform: idx === 0 ? 'translateX(0)' : 'translateX(20px)',
                      pointerEvents: idx === 0 ? 'auto' : 'none',
                    }}
                  >
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg flex-shrink-0">
                          #{currentTopSkillIndex + 1}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 truncate">
                            {skill.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">{skill.category}</p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="h-2.5 sm:h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r transition-all duration-1000 ease-out shadow-lg"
                            style={{
                              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                              width: `${skill.level}%`,
                            }}
                          />
                        </div>
                        <p className="text-right text-xs font-bold" style={{ color: skill.color }}>
                          {skill.level}% Proficiency
                        </p>
                      </div>

                      <div className="grid grid-cols-5 gap-1 pt-1 sm:pt-2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="h-1 rounded-full transition-all duration-300"
                            style={{
                              backgroundColor: i < Math.round(skill.level / 20) ? skill.color : '#e2e8f0',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel indicators */}
              <div className="flex gap-1.5 justify-center mt-3 sm:mt-4">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTopSkillIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentTopSkillIndex
                        ? 'w-6 bg-blue-500'
                        : 'w-2 bg-blue-300 dark:bg-blue-700 hover:bg-blue-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Overall Stats */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200/50 dark:border-green-900/30 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                <p className="text-xs font-bold text-muted-foreground uppercase mb-1 sm:mb-2 group-hover:translate-y-[-2px] transition-transform">
                  Total
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform origin-left">
                  {skillsData.length}
                </p>
              </div>
              <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border border-orange-200/50 dark:border-orange-900/30 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                <p className="text-xs font-bold text-muted-foreground uppercase mb-1 sm:mb-2 group-hover:translate-y-[-2px] transition-transform">
                  Average
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform origin-left">
                  {Math.round(skillsData.reduce((a, b) => a + b.level, 0) / skillsData.length)}%
                </p>
              </div>
            </div>

            {/* All Skills Interactive List - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block p-4 rounded-lg bg-slate-50/50 dark:bg-slate-900/30 border border-border/50">
              <p className="text-xs font-bold text-muted-foreground uppercase mb-3 tracking-widest">
                All Skills
              </p>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {skillsData.map((skill, idx) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200 cursor-pointer group"
                    style={{
                      animation: `slideIn 0.5s ease-out ${idx * 50}ms backwards`,
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300 shadow-lg"
                      style={{ backgroundColor: skill.color }}
                    />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300 flex-1 truncate group-hover:translate-x-1 transition-transform">
                      {skill.name}
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Skills List - Visible only on mobile */}
        <div className="md:hidden mt-8 p-4 rounded-lg bg-slate-50/50 dark:bg-slate-900/30 border border-border/50">
          <p className="text-xs font-bold text-muted-foreground uppercase mb-3 tracking-widest">
            All Skills
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700/50 transition-colors duration-200"
              >
                <div
                  className="w-3 h-3 rounded-full mb-1.5 shadow-lg"
                  style={{ backgroundColor: skill.color }}
                />
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">
                  {skill.name}
                </p>
                <p className="text-xs font-bold" style={{ color: skill.color }}>
                  {skill.level}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend', color: '#61dafb', icon: '⚛️' },
  { name: 'Next.js', level: 92, category: 'Frontend', color: '#000000', icon: '▲' },
  { name: 'TypeScript', level: 90, category: 'Language', color: '#3178c6', icon: 'TS' },
  { name: 'Node.js', level: 88, category: 'Backend', color: '#68a063', icon: '⬢' },
  { name: 'PostgreSQL', level: 87, category: 'Database', color: '#336791', icon: '🔵' },
  { name: 'Docker', level: 85, category: 'DevOps', color: '#2496ed', icon: '🐳' },
  { name: 'AWS', level: 82, category: 'Cloud', color: '#ff9900', icon: '☁️' },
  { name: 'Kubernetes', level: 80, category: 'DevOps', color: '#326ce5', icon: '⚙️' },
  { name: 'CI/CD', level: 84, category: 'DevOps', color: '#f7931e', icon: '🔄' },
  { name: 'Tailwind', level: 93, category: 'Frontend', color: '#38b6d5', icon: '🎨' },
];

interface Particle {
  id: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  skill: Skill;
  angle: number;
  distance: number;
}

export function SkillGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Initialize particles
  useEffect(() => {
    const particles: Particle[] = skills.map((skill, idx) => {
      const angle = (Math.PI * 2 * idx) / skills.length;
      const distance = 120;
      return {
        id: idx,
        x: Math.cos(angle) * distance,
        y: (Math.random() - 0.5) * 150,
        z: Math.sin(angle) * distance,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.5,
        skill,
        angle,
        distance,
      };
    });
    particlesRef.current = particles;
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Update rotation based on mouse
      rotationRef.current.x += mouseRef.current.y * 0.02;
      rotationRef.current.y += mouseRef.current.x * 0.02;

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Orbital motion
        particle.angle += 0.003;
        particle.distance = 120 + Math.sin(particle.angle * 0.5) * 20;
        particle.x = Math.cos(particle.angle) * particle.distance;
        particle.z = Math.sin(particle.angle) * particle.distance;
        particle.y += particle.vy;

        // Bounce y
        if (particle.y > 100) {
          particle.vy = -Math.abs(particle.vy) * 0.9;
          particle.y = 100;
        }
        if (particle.y < -100) {
          particle.vy = Math.abs(particle.vy) * 0.9;
          particle.y = -100;
        }

        // 3D rotation
        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);

        let x = particle.x;
        let y = particle.y * cosX - particle.z * sinX;
        let z = particle.y * sinX + particle.z * cosX;

        const x2 = x * cosY + z * sinY;
        const z2 = -x * sinY + z * cosY;

        // Perspective
        const scale = 300 / (300 + z2);
        const screenX = centerX + x2 * scale;
        const screenY = centerY + y * scale;

        // Draw glow
        const glowSize = 25 * scale * (particle.skill.level / 100);
        const gradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, glowSize);
        gradient.addColorStop(0, particle.skill.color + '60');
        gradient.addColorStop(1, particle.skill.color + '00');
        ctx.fillStyle = gradient;
        ctx.fillRect(
          screenX - glowSize,
          screenY - glowSize,
          glowSize * 2,
          glowSize * 2
        );

        // Draw particle
        ctx.fillStyle = particle.skill.color;
        ctx.beginPath();
        ctx.arc(screenX, screenY, 8 * scale, 0, Math.PI * 2);
        ctx.fill();

        // Draw label
        if (z2 > -100) {
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, scale * 0.8)})`;
          ctx.font = 'bold 12px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(particle.skill.name, screenX, screenY - 20 * scale);

          // Draw level
          ctx.fillStyle = `rgba(100, 200, 255, ${Math.max(0, scale * 0.6)})`;
          ctx.font = '10px Arial';
          ctx.fillText(`${particle.skill.level}%`, screenX, screenY + 20 * scale);
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas || !containerRef.current) return;
      canvas.width = containerRef.current.clientWidth;
      canvas.height = containerRef.current.clientHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Skill categories
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-slate-900/30 to-slate-950/50 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="space-y-2 sm:space-y-3 text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
            <p className="text-sm sm:text-base text-blue-500 font-semibold uppercase tracking-widest">
              Interactive Showcase
            </p>
            <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Skills in Motion
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Move your mouse around to explore my tech stack. Each skill orbits based on proficiency level.
          </p>
        </div>

        {/* 3D Globe Canvas */}
        <div
          ref={containerRef}
          className="relative w-full bg-gradient-to-b from-slate-900 via-slate-950 to-black rounded-3xl overflow-hidden shadow-2xl border border-slate-800 mb-12 sm:mb-16"
          style={{ aspectRatio: '16/9' }}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full block"
            width={800}
            height={450}
          />

          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl" />
          </div>
        </div>

        {/* Skill Categories Legend */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            const avgLevel =
              categorySkills.reduce((sum, s) => sum + s.level, 0) / categorySkills.length;
            return (
              <div
                key={category}
                className="relative group p-3 sm:p-4 rounded-xl bg-white/5 border border-slate-700 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm sm:text-base font-bold text-white">{category}</h3>
                  <span className="text-xs sm:text-sm font-semibold text-blue-400">
                    {Math.round(avgLevel)}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 sm:h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                    style={{ width: `${avgLevel}%` }}
                  />
                </div>

                {/* Skills in category */}
                <div className="mt-2 text-xs text-slate-400">
                  {categorySkills.map((s) => s.name).join(', ')}
                </div>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16">
          {[
            {
              title: 'Orbital Animation',
              desc: 'Skills rotate around the center based on their proficiency level',
            },
            {
              title: 'Mouse Interaction',
              desc: 'Move your mouse to control the globe rotation in 3D space',
            },
            {
              title: 'Depth Perception',
              desc: 'Perspective and scale changes create immersive 3D effect',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-xl bg-white/5 border border-slate-700 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes grid-animation {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 20px 20px;
          }
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
            0deg,
            rgba(59, 130, 246, 0.1) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(59, 130, 246, 0.1) 1px,
            transparent 1px
          );
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}

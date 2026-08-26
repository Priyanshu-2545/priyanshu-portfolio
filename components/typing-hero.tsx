'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { DotGrid } from '@/components/dot-grid';
import { MagneticButton } from '@/components/magnetic-button';
import { useAnimatedCounter } from '@/hooks/use-animated-counter';
import { TextScramble } from '@/components/text-scramble';
import { GradientText } from '@/components/gradient-text';

const technologies = [
  'AWS Engineer',
  'Kubernetes Expert',
  'CI/CD Master',
  'Cloud Architect',
  'DevOps Pro',
  'Full-Stack Dev',
];

function StatCard({
  value,
  suffix,
  label,
  colorClass,
  bgClass,
  borderClass,
}: {
  value: number;
  suffix?: string;
  label: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
}) {
  const { ref, value: displayVal } = useAnimatedCounter(value, 1800, suffix || '');

  return (
    <div ref={ref} className={`p-4 rounded-lg ${bgClass} border ${borderClass}`}>
      <p className={`text-3xl font-bold ${colorClass}`}>{displayVal}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function TypingHero() {
  const [displayText, setDisplayText] = useState('');
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentTech = technologies[currentTechIndex];
    let timeout: NodeJS.Timeout;

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2500);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentTechIndex((prev) => (prev + 1) % technologies.length);
      }
    } else {
      if (displayText.length < currentTech.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTech.slice(0, displayText.length + 1));
        }, 80);
      } else {
        setIsWaiting(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentTechIndex, isDeleting, isWaiting]);

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 -z-10">
        <DotGrid />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6">
          {/* Main Heading with Typing Effect */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hey, I&apos;m
              <br />
              <GradientText text="Priyanshu Garg" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" />
            </h2>

            {/* Typing Animation */}
            <div className="h-16 sm:h-20 flex items-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words">
                <span className="text-blue-500">&lt;</span>
                <span className="text-yellow-500">{displayText}</span>
                <span className="animate-pulse text-blue-500">|</span>
                <span className="text-blue-500">/&gt;</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I build scalable cloud infrastructure and deploy enterprise-grade applications. Specialized in DevOps, Kubernetes, and full-stack development.
            </p>
          </div>

          {/* CTA Buttons with Magnetic Effect */}
          <div className="flex gap-3 sm:gap-4 pt-4 flex-wrap">
            <MagneticButton strength={0.2}>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border border-border hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 rounded-lg font-semibold transition"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
            </MagneticButton>
          </div>

          {/* Tech Stack Tags */}
          <div className="pt-6 sm:pt-8 border-t border-border">
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 font-semibold uppercase tracking-wide">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Docker', 'Kubernetes', 'Node.js', 'PostgreSQL', 'Next.js', 'React', 'Jenkins'].map(
                (tech) => (
                  <TextScramble
                    key={tech}
                    text={tech}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 font-medium rounded-lg text-blue-600 dark:text-blue-400 hover:border-blue-500 hover:scale-105 transition-all duration-200"
                  />
                ),
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Stats Card - Hidden on mobile, visible from lg */}
        <div className="hidden lg:block bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-6 md:p-8 space-y-6 sticky top-32 hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10">
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              value={10}
              suffix="k"
              label="Hacktoberfest Global"
              colorClass="text-blue-500"
              bgClass="bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
              borderClass="border-blue-500/20"
            />
            <StatCard
              value={3}
              suffix="+"
              label="Real-World Projects"
              colorClass="text-green-500"
              bgClass="bg-gradient-to-br from-green-500/10 to-emerald-500/10"
              borderClass="border-green-500/20"
            />
            <div className="p-4 rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
              <p className="text-3xl font-bold text-amber-500">AWS</p>
              <p className="text-sm text-muted-foreground">Certified</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
              <p className="text-3xl font-bold text-orange-500">Smart</p>
              <p className="text-sm text-muted-foreground">India Hackathon</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3 font-semibold uppercase tracking-wide">Expertise</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                <span>AWS & Cloud Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0" />
                <span>Docker & Kubernetes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <span>CI/CD Pipelines & Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                <span>Full-Stack Development</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats - Visible only below lg */}
        <div className="lg:hidden bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <StatCard
              value={10}
              suffix="k"
              label="Hacktoberfest"
              colorClass="text-blue-500"
              bgClass="bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
              borderClass="border-blue-500/20"
            />
            <StatCard
              value={3}
              suffix="+"
              label="Projects"
              colorClass="text-green-500"
              bgClass="bg-gradient-to-br from-green-500/10 to-emerald-500/10"
              borderClass="border-green-500/20"
            />
            <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
              <p className="text-xl sm:text-2xl font-bold text-amber-500">AWS + GCP</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Certified</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
              <p className="text-2xl sm:text-3xl font-bold text-orange-500">Smart</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Hackathon</p>
            </div>
          </div>

          <div className="pt-3 sm:pt-4 border-t border-border">
            <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 font-semibold uppercase tracking-wide">Expertise</p>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                <span>AWS & Cloud</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0" />
                <span>Docker & K8s</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <span>CI/CD & Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                <span>Full-Stack Dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

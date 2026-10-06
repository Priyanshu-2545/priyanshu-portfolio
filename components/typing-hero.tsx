'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, ArrowRight, Mail } from 'lucide-react';
import { StatsWidget } from '@/components/stats-widget';

const roles = [
  'Full-Stack Developer',
  'DevOps Engineer',
  'AWS Cloud Engineer',
  'Backend Developer',
  'Software Engineer',
];

export function TypingHero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_40%,rgba(14,165,233,0.15),transparent_38%),radial-gradient(ellipse_at_10%_70%,rgba(37,99,235,0.12),transparent_34%)]" />
      <div className="mx-auto grid min-h-[620px] max-w-7xl grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 sm:py-12 md:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="order-1 relative mx-auto w-full max-w-[280px] -translate-y-2 sm:max-w-[320px] lg:mx-0 lg:max-w-[400px] lg:-translate-y-16">
          <div className="absolute -inset-5 animate-[spin_40s_linear_infinite] rounded-full border-2 border-dashed border-blue-400/50" />
          <div className="absolute -inset-10 animate-[pulse_6s_ease-in-out_infinite] rounded-full border border-sky-400/[0.15]" />
          <div className="relative aspect-square overflow-hidden rounded-full border-[6px] border-blue-500/90 bg-slate-900 shadow-[0_0_80px_rgba(37,99,235,0.35)] transition-all duration-500 hover:shadow-[0_0_100px_rgba(37,99,235,0.45)]">
            <Image
              src="/images/my-pic.jpg"
              alt="Portrait of Priyanshu Garg"
              fill
              priority
              sizes="(max-width: 768px) 280px, 400px"
              className="object-cover object-[center_31%]"
            />
          </div>
          <span className="absolute bottom-3 right-0 rounded-full border border-sky-400/40 bg-slate-950/90 px-5 py-2.5 text-xs font-medium text-sky-200 shadow-2xl backdrop-blur-sm sm:-right-4">
            <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </span>
        </div>

        <div className="order-2 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:-translate-y-8 lg:text-left">
          <p className="mb-3 text-xl font-medium text-muted-foreground sm:text-2xl">Hi, I&apos;m</p>
          <h1 className="text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
            <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Priyanshu Garg
            </span>
            <span className="text-sky-400">.</span>
          </h1>
          <div
            aria-label={roles[roleIndex]}
            className="relative mt-5 h-9 overflow-hidden font-mono text-xl font-semibold text-sky-300 sm:h-11 sm:text-3xl"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
                transition={{ duration: 0.32, ease: 'easeOut' }}
                className="absolute inset-x-0 top-0 whitespace-nowrap lg:inset-x-auto"
              >
                {roles[roleIndex]}
                <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-cyan-300 align-middle sm:h-6" />
              </motion.p>
            </AnimatePresence>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-9 text-muted-foreground sm:text-xl lg:mx-0">
            I build cloud infrastructure, automated delivery pipelines, and full-stack products—from dependable deployments to thoughtful user experiences.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/40"
            >
              Explore my work
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-border bg-card/60 px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/[0.08]"
            >
              <Mail className="h-5 w-5" />
              Get in touch
            </a>
          </div>

          <StatsWidget />

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-300 lg:justify-start">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Based in India · Open to meaningful work
          </div>
        </div>
      </div>
      <a
        href="#projects"
        aria-label="Scroll to featured projects"
        className="mx-auto mb-10 hidden w-fit items-center gap-2.5 text-sm text-muted-foreground transition-all duration-300 hover:text-sky-300 md:flex"
      >
        Scroll to explore
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}

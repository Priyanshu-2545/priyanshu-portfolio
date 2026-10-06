'use client';

import { Code, Database, Cloud, Layers, Smartphone, Cpu } from 'lucide-react';

const focusAreas = [
  {
    title: 'Web Application Development',
    description: 'Building scalable, responsive web applications using modern frameworks and best practices.',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end development from frontend UI to backend APIs and database management.',
    icon: Layers,
    color: 'from-sky-500 to-blue-500',
  },
  {
    title: 'DevOps & Cloud',
    description: 'Automated CI/CD pipelines, containerization, and cloud infrastructure deployment.',
    icon: Cloud,
    color: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'AWS Deployment',
    description: 'Expertise in AWS services including EC2, S3, Lambda, and infrastructure as code.',
    icon: Database,
    color: 'from-teal-500 to-green-500',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive user interfaces and seamless user experiences with modern design principles.',
    icon: Smartphone,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'System Architecture',
    description: 'Designing robust, scalable system architectures that handle high traffic and complex workflows.',
    icon: Cpu,
    color: 'from-emerald-500 to-cyan-500',
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-y border-white/[0.06] bg-[#0b0715] py-20 sm:py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(91,33,182,0.2),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(37,99,235,0.09),transparent_38%)]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
            About me
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Software <span className="gradient-words">Engineering Focus</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            I&apos;m a Computer Science undergraduate interested in building useful web products,
            full-stack applications, and reliable cloud deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#100b1d]/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/35 hover:bg-[#140d24] hover:shadow-xl hover:shadow-blue-950/30 sm:p-7"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/50 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 text-sky-300 transition duration-300 group-hover:scale-105 group-hover:border-cyan-300">
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-100 transition-colors group-hover:text-sky-300 sm:text-xl">
                  {area.title}
                </h3>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                {area.description}
              </p>
              <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
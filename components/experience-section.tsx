'use client';

import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'India Space Lab (ISL)',
    position: 'Technical Intern – GIS & Spatial Data Engineering',
    period: 'Feb 2026 – Mar 2026',
    type: 'Remote',
    achievements: [
      'Automated geospatial data pipelines on Linux, reducing manual processing effort by 40%',
      'Managed workflow scheduling and version-controlled pipeline scripts using Git',
      'Optimized PostgreSQL (PostGIS) queries for faster spatial data retrieval in production',
    ],
    icon: '🛰️',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-2 sm:space-y-3 mb-10 sm:mb-12">
          <p className="text-blue-500 font-semibold text-xs sm:text-sm uppercase tracking-wide">Career</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Professional Experience</h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-background border border-border rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex gap-3 sm:gap-4">
                <div className="text-3xl sm:text-4xl pt-0 sm:pt-1 flex-shrink-0">{exp.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold">{exp.position}</h3>
                      <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs sm:text-sm text-muted-foreground">{exp.period}</p>
                      <p className="text-xs text-muted-foreground">{exp.type}</p>
                    </div>
                  </div>
                  <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
                    {exp.achievements.map((achievement, aidx) => (
                      <li key={aidx} className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                        <span className="text-blue-500 font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

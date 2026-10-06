'use client';

import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  period: string;
  type: string;
  achievements: string[];
  icon: string;
  verificationLink?: string;
}

const experiences: Experience[] = [
  {
    company: 'India Space Lab (ISL)',
    position: 'Technical Intern – GIS & Spatial Data Engineering',
    period: 'Feb 2026 – Mar 2026',
    type: 'Remote',
    achievements: [
      'Automated geospatial data pipelines on Linux, reducing manual processing effort by 40%.',
      'Managed workflow scheduling and version-controlled pipeline scripts using Git.',
      'Optimized PostgreSQL (PostGIS) queries for faster spatial data retrieval in production.',
    ],
    icon: '🛰️',
  },
  {
    company: 'Open Source & Community',
    position: 'Hacktoberfest Supercontributor',
    period: 'Oct 2025 – Nov 2025',
    type: 'Global',
    achievements: [
      'Contributed to open-source repositories and improved project quality through meaningful pull requests.',
      'Focused on maintainable code, community collaboration, and practical engineering improvements.',
      'Built contribution momentum through consistent, quality-first work across the development community.',
    ],
    icon: '🌍',
    verificationLink: 'https://www.holopin.io/hacktoberfest2025/userbadge/cmgusqszh007bky04icq5iyk4',
  },
];

const education = [
  {
    institution: 'Geetanjali Institute of Technical Studies',
    degree: 'B.Tech in Computer Science & Engineering',
    period: '2022 – 2026',
    location: 'Udaipur, Rajasthan',
    achievements: ['CGPA: 8.27'],
    focusAreas: [
      'Software Engineering',
      'Web Application Development',
      'Data Structures and Algorithms',
    ],
    icon: '🎓',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-24 md:py-28 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-3 mb-12 sm:mb-16">
          <p className="text-sky-500 font-semibold text-xs sm:text-sm uppercase tracking-[0.22em]">Career & Education</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Professional Journey</h2>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-sky-500" />
            <h3 className="text-2xl font-bold">Work Experience</h3>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-background border border-border rounded-xl p-6 sm:p-8 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 group"
              >
                <div className="flex gap-4 sm:gap-6">
                  <div className="text-4xl sm:text-5xl pt-1 flex-shrink-0">{exp.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">{exp.position}</h3>
                        <p className="text-base sm:text-lg text-sky-600 dark:text-sky-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm sm:text-base text-muted-foreground font-medium">{exp.period}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-end gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.type}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {exp.achievements.map((achievement, aidx) => (
                        <li key={aidx} className="flex gap-3 text-sm sm:text-base text-muted-foreground">
                          <span className="text-sky-500 font-bold mt-1 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.verificationLink && (
                      <a
                        href={exp.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/[0.07] px-4 py-2 text-sm font-semibold text-sky-600 transition hover:border-sky-400/50 hover:bg-sky-400/[0.12] dark:text-sky-300"
                      >
                        Verify Hacktoberfest badge
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-sky-500" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-background border border-border rounded-xl p-6 sm:p-8 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 group"
              >
                <div className="flex gap-4 sm:gap-6">
                  <div className="text-4xl sm:text-5xl pt-1 flex-shrink-0">{edu.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">{edu.degree}</h3>
                        <p className="text-base sm:text-lg text-sky-600 dark:text-sky-400 font-semibold">{edu.institution}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm sm:text-base text-muted-foreground font-medium">{edu.period}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-end gap-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {edu.achievements.map((achievement, aidx) => (
                        <li key={aidx} className="flex gap-3 text-sm sm:text-base text-muted-foreground">
                          <span className="text-sky-500 font-bold mt-1 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {edu.focusAreas.map((focusArea) => (
                        <span
                          key={focusArea}
                          className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1.5 text-xs font-medium text-cyan-300"
                        >
                          {focusArea}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

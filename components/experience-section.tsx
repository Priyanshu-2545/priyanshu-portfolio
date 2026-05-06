'use client';

import { Briefcase, Award, ExternalLink } from 'lucide-react';

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

interface Achievement {
  title: string;
  date: string;
  description: string;
  icon: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    title: 'AWS Cloud Quest: Cloud Practitioner',
    date: 'Apr 2026',
    description: 'Certified in AWS services including EC2, VPC, RDS, and DynamoDB',
    icon: '🏆',
    link: 'https://www.credly.com/badges/8bc8be88-8bc3-4ed7-9a7d-69d40780238e/public_url',
  },
  {
    title: 'Google Cloud Computing Foundations',
    date: '2024',
    description: 'Certified in cloud computing fundamentals and infrastructure',
    icon: '☁️',
    link: 'https://www.credly.com/badges/75e7abcd-cba0-4418-acc1-244e42e3dcac/public_url',
  },
  {
    title: 'Smart India Hackathon 2024 Winner',
    date: '2024',
    description: 'Won for Smart Asset Monitoring System project',
    icon: '🚀',
  },
  {
    title: 'Global Top 10k – Hacktoberfest 2025',
    date: '2025',
    description: 'Super Contributor in open-source contributions',
    icon: '⭐',
  },
  {
    title: 'GDG Udaipur Core Team Member',
    date: '2024-2025',
    description: 'Organized Google DevFest for 300+ attendees',
    icon: '👥',
  },
  {
    title: 'Full Stack Web Development (MERN)',
    date: '2023',
    description: 'Certified by Grras Solutions',
    icon: '📚',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Experience */}
        <div className="mb-12 sm:mb-16">
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

        {/* Achievements & Certifications */}
        <div>
          <div className="space-y-2 sm:space-y-3 mb-10 sm:mb-12">
            <p className="text-blue-500 font-semibold text-xs sm:text-sm uppercase tracking-wide">Recognition</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Achievements & Certifications</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className={`relative group bg-background border border-border rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all duration-300 ${
                  achievement.link
                    ? 'hover:border-blue-500 cursor-pointer hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-1'
                    : 'hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10'
                }`}
                onClick={() => {
                  if (achievement.link) {
                    window.open(achievement.link, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                {/* Hover glow effect for clickable certs */}
                {achievement.link && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                )}

                <div className="flex gap-3 sm:gap-4 relative z-10">
                  <div className="text-2xl sm:text-3xl flex-shrink-0">{achievement.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm sm:text-base mb-0.5 sm:mb-1 group-hover:text-blue-500 transition-colors line-clamp-2">
                          {achievement.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">{achievement.date}</p>
                      </div>
                      {achievement.link && (
                        <ExternalLink className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-muted-foreground group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300 flex-shrink-0 mt-0.5" />
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{achievement.description}</p>
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

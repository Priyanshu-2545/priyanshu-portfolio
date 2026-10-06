'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
  link?: string;
}

const timeline: TimelineItem[] = [
  {
    year: '2022',
    title: 'B.Tech journey began',
    description: 'Started Computer Science & Engineering at Geetanjali Institute of Technical Studies, Udaipur.',
    icon: '🎓',
  },
  {
    year: '2023',
    title: 'Started MERN stack journey',
    description: 'Built my foundation in full-stack development with MongoDB, Express, React, and Node.js.',
    icon: '🚀',
  },
  {
    year: '2023',
    title: 'Kavach Hackathon finalist',
    description: 'Reached the Grand Finale of the Kavach Cyber Security Hackathon by the Government of India.',
    icon: '🛡️',
    highlight: true,
  },
  {
    year: '2024',
    title: 'Hack-Avishkar champion',
    description: 'Won Hack-Avishkar and developed solutions focused on practical, impactful engineering.',
    icon: '🥇',
    highlight: true,
  },
  {
    year: '2024',
    title: 'Smart India Hackathon winner',
    description: 'Won SIH 2024 with the Smart Asset Monitoring System project.',
    icon: '🏆',
    highlight: true,
  },
  {
    year: '2024',
    title: 'GCP Cloud Certified',
    description: 'Earned the Google Cloud Computing Foundations certification and deepened my cloud learning.',
    icon: '☁️',
  },
  {
    year: '2024',
    title: 'GDG core team member',
    description: 'Served as a volunteer member of the GDG Udaipur Core Team and helped drive community events.',
    icon: '👥',
  },
  {
    year: '2025',
    title: 'Hacktoberfest supercontributor',
    description: 'Contributed to open-source projects and earned recognition as a Hacktoberfest supercontributor.',
    icon: '⭐',
    highlight: true,
    link: 'https://www.holopin.io/hacktoberfest2025/userbadge/cmgusqszh007bky04icq5iyk4',
  },
  {
    year: '2025',
    title: 'MongoDB developer certification',
    description: 'Strengthened my backend and database skills with MongoDB-focused learning and hands-on work.',
    icon: '📘',
  },
  {
    year: '2026',
    title: 'Internship and AWS certification',
    description: 'Completed a GIS & spatial data internship and earned the AWS Cloud Practitioner certification.',
    icon: '☁️',
    highlight: true,
  },
];

export function TimelineAchievements() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-slate-900/10">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-2 sm:space-y-3 text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-blue-500 font-semibold text-xs sm:text-sm uppercase tracking-widest">Journey</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Career Timeline</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Key milestones and achievements in my professional development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - Hidden on mobile */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 -translate-x-1/2" />
          {/* Mobile left line */}
          <div className="sm:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500" />

          {/* Items */}
          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex gap-4 sm:gap-8 ${isEven ? 'sm:flex-row flex-row' : 'sm:flex-row-reverse flex-row'} items-start`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                    transition: `opacity 0.7s ease-out ${idx * 100}ms, transform 0.7s ease-out ${idx * 100}ms`,
                  }}
                >
                  {/* Mobile Dot */}
                  <div className="sm:hidden hidden-sm absolute left-1 top-6 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-background -translate-x-2.5" />

                  {/* Content */}
                  <div className="flex-1 pl-6 sm:pl-0">
                    <div
                      className={`relative p-4 sm:p-6 rounded-lg border transition-all duration-300 ${
                        item.highlight
                          ? 'border-blue-500/50 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20'
                          : 'border-border bg-card hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10'
                      }`}
                    >
                      <div className="flex gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <span className="text-xl sm:text-2xl flex-shrink-0">{item.icon}</span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-sm font-bold text-blue-500">{item.year}</p>
                          <h3 className="text-base sm:text-lg font-bold group-hover:text-blue-500 transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm line-clamp-3">{item.description}</p>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-500 transition-colors hover:text-cyan-400"
                        >
                          Verify Hacktoberfest badge
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}

                      {item.highlight && (
                        <div className="absolute top-2 right-2">
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative flex justify-center">
                    <div
                      className={`w-5 h-5 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                        item.highlight
                          ? 'border-blue-500 bg-blue-500 scale-150 shadow-lg shadow-blue-500/50'
                          : 'border-cyan-500 bg-background hover:scale-125 hover:shadow-lg hover:shadow-cyan-500/30'
                      }`}
                    >
                      {item.highlight && (
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
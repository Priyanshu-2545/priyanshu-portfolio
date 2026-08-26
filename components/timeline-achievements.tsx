'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

const timeline: TimelineItem[] = [
  {
    year: '2023',
    title: 'Kavach Hackathon Grand Finalist',
    description: 'Reached Grand Finale in Kavach Cyber Security Hackathon - Government of India initiative',
    icon: '🛡️',
    highlight: true,
  },
  {
    year: '2023',
    title: 'Started MERN Journey',
    description: 'Completed Full-Stack Web Development certification with hands-on projects',
    icon: '🚀',
  },
  {
    year: '2024',
    title: 'GCP Cloud Certified',
    description: 'Earned Google Cloud Computing Foundations certification',
    icon: '☁️',
  },
  {
    year: '2024',
    title: 'Hack-Avishkar Champion',
    description: '1st Place Winner at Hack-Avishkar Competition hosted by Google Developer Student Clubs',
    icon: '🥇',
    highlight: true,
  },
  {
    year: '2024',
    title: 'Smart India Hackathon Winner',
    description: 'Won Smart India Hackathon with innovative Smart Asset Monitoring System',
    icon: '🏆',
    highlight: true,
  },
  {
    year: '2024',
    title: 'DevOps Specialization',
    description: 'Mastered Docker, Kubernetes, CI/CD pipelines, and cloud infrastructure',
    icon: '⚙️',
  },
  {
    year: '2024',
    title: 'MongoDB & IBM Certified',
    description: 'Earned MongoDB Developer Associate and IBM Project Management certifications',
    icon: '📜',
  },
  {
    year: '2024',
    title: 'GDG Core Team Member',
    description: 'Joined GDG Udaipur Core Team, organized DevFest for 300+ attendees',
    icon: '👥',
  },
  {
    year: '2025',
    title: 'Hacktoberfest Supercontributor',
    description: 'Global Top 10k ranking with 6+ accepted PRs/MRs in open-source',
    icon: '⭐',
    highlight: true,
  },
  {
    year: '2026',
    title: 'AWS Cloud Certified',
    description: 'Earned AWS Cloud Quest: Cloud Practitioner certification',
    icon: '☁️',
  },
];

const certificates = [
  {
    title: 'Kavach Hackathon',
    image: '/kavachh.jpeg',
    year: '2023',
  },
  {
    title: 'Hack-Avishkar',
    image: '/hack-avishkar.jpeg',
    year: '2024',
  },
  {
    title: 'GDG Groups',
    image: '/Gdggroups.jpeg',
    year: '2024',
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

        {/* Certificate Images */}
        <div className="mt-16 sm:mt-20">
          <div className="space-y-2 sm:space-y-3 text-center mb-8 sm:mb-10">
            <p className="text-blue-500 font-semibold text-xs sm:text-sm uppercase tracking-widest">Certificates</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Achievement Certificates</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-semibold text-sm">{cert.title}</span>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <p className="font-bold text-sm sm:text-base text-center">{cert.title}</p>
                  <p className="text-xs text-muted-foreground text-center mt-1">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
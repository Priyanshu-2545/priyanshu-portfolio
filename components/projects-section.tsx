'use client';

import { ExternalLink, Github, Award, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { TiltCard } from '@/components/tilt-card';

const projects = [
  {
    id: 1,
    title: 'Cloud-Native CI/CD Pipeline for Containerized Web Application',
    description: 'Built enterprise-grade CI/CD pipeline reducing deployment time from 2 hours to 10 minutes using Jenkins and GitHub Webhooks.',
    longDesc: 'Containerized Node.js applications with Docker, deployed on Kubernetes AWS EC2 with zero-downtime rolling updates. Configured Nginx as reverse proxy with load balancing across Kubernetes pods. Monitored CPU, memory & request latency using Prometheus metrics and Grafana dashboards.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Nginx', 'Prometheus', 'Grafana'],
    icon: '⚙️',
    achievement: '92% deployment time reduction',
    github: 'https://github.com/Priyanshu-2545/cloud-native-cicd-nodejs',
    demo: 'https://github.com/Priyanshu-2545/cloud-native-cicd-nodejs',
  },
  {
    id: 2,
    title: 'SUSTAINA - Water & Electricity Management System',
    description: 'Full-stack application tracking water & electricity usage with real-time dashboards and secure authentication.',
    longDesc: 'Implemented Supabase with Row Level Security for data protection. Built interactive dashboard with data visualization and real-time aggregation. Developed scalable backend handling real-time data streams. Live demo available with full functionality.',
    tags: ['React.js', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'REST APIs'],
    icon: '💧',
    achievement: 'Live Demo Available',
    github: 'https://github.com/Priyanshu-2545/Sustaina-water-electricity-',
    demo: 'https://sustaina-water-electricity-app.vercel.app/',
  },
  {
    id: 3,
    title: 'SAMS - Smart Asset Monitoring System',
    description: 'GPS-based asset tracking system for 10k+ assets with predictive monitoring using JWT authentication.',
    longDesc: 'Built scalable Node.js backend with Express.js and MongoDB. Implemented JWT-based REST APIs for asset tracking and monitoring. Reduced operational cost by 80% using predictive monitoring. Winner of Smart India Hackathon 2024.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'GPS Tracking'],
    icon: '📍',
    achievement: 'Smart India Hackathon 2024 Winner',
    github: 'https://github.com/Priyanshu-2545',
    demo: 'https://github.com/Priyanshu-2545',
  },
  {
    id: 4,
    title: 'Geospatial Data Pipeline - GIS & Spatial Data Engineering',
    description: 'Automated Linux-based pipeline for processing geospatial data with optimized PostgreSQL PostGIS queries.',
    longDesc: 'Automated data processing reducing manual effort by 40%. Managed workflow scheduling with Git version control. Optimized spatial data retrieval for production environments at India Space Lab. Handled 1000+ spatial datasets daily.',
    tags: ['Linux', 'PostgreSQL', 'PostGIS', 'Git', 'Shell Scripts', 'Data Pipeline'],
    icon: '🗺️',
    achievement: 'Production Ready - 40% efficiency gain',
    github: 'https://github.com/Priyanshu-2545',
    demo: 'https://github.com/Priyanshu-2545',
  },
];

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-slate-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-2 sm:space-y-4 mb-10 sm:mb-12 md:mb-16">
          <p className="text-blue-500 font-semibold text-xs sm:text-sm tracking-widest uppercase">Projects</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Featured Work</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
            A selection of projects showcasing expertise in cloud infrastructure, DevOps, and full-stack development.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {projects.map((project, idx) => (
            <TiltCard
              key={project.id}
              intensity={15}
              className="group bg-gradient-to-r from-background to-background border border-border rounded-xl sm:rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
                {/* Content */}
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-start">
                  {/* Left Section */}
                  <div className="flex-1 space-y-3 sm:space-y-4 w-full">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{project.icon}</div>
                        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 group-hover:text-blue-500 transition duration-300 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-4 line-clamp-2">{project.description}</p>
                      </div>
                    </div>

                    {/* Full Description - Hidden on mobile */}
                    <p className="hidden sm:block text-muted-foreground leading-relaxed text-sm md:text-base">
                      {project.longDesc}
                    </p>

                    {/* Achievement Badge */}
                    <div className="flex items-center gap-2 pt-2 sm:pt-4">
                      <Award className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 line-clamp-1">
                        {project.achievement}
                      </span>
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-2 sm:pt-4">
                      <p className="text-xs font-bold text-muted-foreground mb-2 sm:mb-3 uppercase tracking-widest">Tech Stack</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-lg hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition duration-200 whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 pt-4 sm:pt-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg font-semibold text-xs sm:text-sm transition duration-200 group/btn whitespace-nowrap"
                      >
                        <Github className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span>View Code</span>
                        <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover/btn:translate-x-1 transition hidden sm:block" />
                      </a>
                      {project.demo && project.demo !== project.github && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-xs sm:text-sm transition duration-200 group/btn whitespace-nowrap"
                        >
                          <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
                          <span>Live Demo</span>
                          <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover/btn:translate-x-1 transition hidden sm:block" />
                        </a>
                      )}
                      {project.demo === project.github && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-xs sm:text-sm transition duration-200 group/btn whitespace-nowrap"
                        >
                          <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
                          <span>Learn More</span>
                          <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover/btn:translate-x-1 transition hidden sm:block" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Background */}
                {hoveredId === project.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 -z-10 rounded-2xl" />
                )}
              </div>
            </TiltCard>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">Interested in more of my work?</p>
          <a
            href="https://github.com/Priyanshu-2545"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
          >
            <Github className="w-4 sm:w-6 h-4 sm:h-6" />
            <span>Visit My GitHub</span>
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 hidden sm:block" />
          </a>
        </div>
      </div>
    </section>
  );
}
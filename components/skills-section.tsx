'use client';

import { useState } from 'react';
import { Cloud, Database, Code as Code2, Zap, GitBranch, Activity, Download } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  count: number;
  skills: string[];
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    count: 7,
    skills: ['AWS (EC2, S3, RDS, DynamoDB)', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Nginx', 'Linux'],
    description: 'Cloud infrastructure and containerization',
  },
  {
    title: 'Backend Development',
    icon: Code2,
    color: 'from-green-500 to-emerald-500',
    count: 7,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Microservices', 'Middleware', 'Web Sockets'],
    description: 'Server-side architecture and APIs',
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    count: 7,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase', 'Prisma ORM', 'PostGIS'],
    description: 'Data management and optimization',
  },
  {
    title: 'Frontend Development',
    icon: Code2,
    color: 'from-cyan-500 to-blue-500',
    count: 6,
    skills: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Responsive Design'],
    description: 'User interface and experiences',
  },
  {
    title: 'Monitoring & Logging',
    icon: Activity,
    color: 'from-orange-500 to-red-500',
    count: 5,
    skills: ['Prometheus', 'Grafana', 'AWS CloudWatch', 'Log Aggregation', 'Performance Monitoring'],
    description: 'System metrics and observability',
  },
  {
    title: 'Developer Tools',
    icon: GitBranch,
    color: 'from-red-500 to-pink-500',
    count: 6,
    skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Docker Compose', 'Shell Scripting'],
    description: 'Development and deployment tools',
  },
];

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const category = skillCategories[selectedCategory];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="space-y-2 sm:space-y-4 mb-10 sm:mb-12 md:mb-16">
          <p className="text-blue-500 font-semibold text-xs sm:text-sm tracking-widest uppercase">Technical Skills</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Expertise & Proficiency</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl">
            Interactive showcase of my technical skills and proficiency levels across cloud infrastructure, development, and DevOps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Left: Skills Grid */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 sm:gap-3">
              {skillCategories.map((cat, idx) => {
                const IconComponent = cat.icon;
                const isSelected = selectedCategory === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(idx)}
                    className={`group relative p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                      isSelected
                        ? `border-blue-500 bg-gradient-to-br ${cat.color} bg-opacity-10`
                        : 'border-border hover:border-blue-500/50 bg-card'
                    }`}
                  >
                    {/* Background Glow */}
                    {isSelected && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-5 -z-10`} />
                    )}

                    <div className={`mb-2 sm:mb-3 text-center transition-colors ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-muted-foreground group-hover:text-blue-500'}`}>
                      <IconComponent className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 mx-auto" />
                    </div>
                    <p className={`text-xs font-bold text-center leading-tight transition-colors ${
                      isSelected ? 'text-blue-600 dark:text-blue-400' : ''
                    }`}>
                      {cat.title}
                    </p>
                    <p className="text-xs text-muted-foreground text-center mt-0.5 sm:mt-1">{cat.count} Tech</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Details Terminal */}
          <div className="relative">
            <div className="bg-slate-950 dark:bg-slate-900 border border-slate-800 rounded-lg sm:rounded-xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-slate-800 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-1.5 sm:gap-2 border-b border-slate-700">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500" />
                </div>
                <p className="text-xs font-mono text-slate-400 ml-2 sm:ml-4 truncate">skill-terminal ~ {category.title}</p>
              </div>

              {/* Terminal Content */}
              <div className="p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm space-y-2 sm:space-y-3 overflow-x-auto">
                {/* Command Line */}
                <div className="space-y-4">
                  <div>
                    <p className="text-green-400">
                      <span className="text-slate-400">$</span> expertise <span className="text-blue-400">--category</span> "{category.title.toLowerCase()}"
                    </p>
                  </div>

                  {/* Category Info */}
                  <div className="space-y-2 text-slate-300">
                    <p className="text-cyan-400">
                      {'>>'} <span className="text-slate-400">Loading</span> {category.title}...
                    </p>
                    <p className="text-cyan-400">
                      {'>>'} <span className="text-slate-400">Total Technologies:</span> <span className="text-green-400">{category.count}</span>
                    </p>
                    <p className="text-cyan-400">
                      {'>>'} <span className="text-slate-400">Category:</span> <span className="text-yellow-400">{category.description}</span>
                    </p>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2 pt-4 border-t border-slate-700">
                    <p className="text-slate-400 mb-3">Skills:</p>
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300">
                        <span className="text-green-400">✓</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress */}
                  <div className="pt-4 border-t border-slate-700">
                    <p className="text-slate-400 mb-2">Proficiency:</p>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 w-[85%] rounded-full" />
                    </div>
                    <p className="text-xs text-green-400 mt-2">85% - Advanced Level</p>
                  </div>

                  {/* Status */}
                  <div className="pt-4 border-t border-slate-700 text-green-400">
                    <p className="text-sm">
                      <span className="animate-pulse">●</span> Ready for next challenge
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Download Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-900 rounded-xl p-8 md:p-10">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Download My Resume</h3>
              <p className="text-muted-foreground max-w-2xl">
                Choose the appropriate resume based on the role you're hiring for. Both resumes include detailed experience, certifications, and technical expertise.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/Priyanshu_Garg_DevOps_Engineer.pdf"
                download="Priyanshu_Garg_DevOps_Engineer.pdf"
                className="group inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 whitespace-nowrap"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>DevOps Engineer Resume</span>
              </a>
              <a
                href="/Priyanshu_Garg_SDE.pdf"
                download="Priyanshu_Garg_SDE.pdf"
                className="group inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 whitespace-nowrap"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Software Developer Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

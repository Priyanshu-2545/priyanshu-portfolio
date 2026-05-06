'use client';

import { ExternalLink, Github, Linkedin, Mail, Globe } from 'lucide-react';

const badges = [
  {
    icon: Github,
    label: 'GitHub',
    link: 'https://github.com/Priyanshu-2545',
    color: 'from-gray-600 to-gray-800',
    accentColor: 'text-gray-400',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/priyanshu-garg25/',
    color: 'from-blue-600 to-blue-800',
    accentColor: 'text-blue-400',
  },
  {
    icon: Mail,
    label: 'Email',
    link: 'mailto:priyanshugarg2525@gmail.com',
    color: 'from-red-600 to-red-800',
    accentColor: 'text-red-400',
  },
  {
    icon: Globe,
    label: 'Portfolio',
    link: '#',
    color: 'from-cyan-600 to-blue-800',
    accentColor: 'text-cyan-400',
  },
];

export function CtaBadges() {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-12">
          {/* Main CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">Let's Connect & Build Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next project or collaborate on something amazing? Reach out through any of the channels below.
            </p>
          </div>

          {/* Animated Badges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {badges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <a
                  key={idx}
                  href={badge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl transition-all duration-500"
                  style={{
                    animation: `float ${3 + idx * 0.5}s ease-in-out infinite`,
                  }}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col items-center justify-center gap-3 bg-card border border-border group-hover:border-transparent transition-all duration-500">
                    {/* Icon background */}
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${badge.color} rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-500`}
                      />
                      <div className={`relative p-3 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-white/10 transition-all duration-500`}>
                        <Icon className={`w-6 h-6 ${badge.accentColor} group-hover:text-white transition-colors duration-500`} />
                      </div>
                    </div>

                    {/* Label */}
                    <div className="text-center">
                      <p className="font-semibold text-sm group-hover:text-white transition-colors duration-500">
                        {badge.label}
                      </p>
                      <div className="flex items-center gap-1 justify-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-xs text-white/70 group-hover:text-white/90">Visit</span>
                        <ExternalLink className="w-3 h-3 text-white/70 group-hover:text-white/90 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      animation: 'shimmer 2s infinite',
                    }}
                  />
                </a>
              );
            })}
          </div>

          {/* Quick Contact Info */}
          <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Email</p>
                  <a
                    href="mailto:priyanshugarg2525@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    priyanshugarg2525@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">📱</div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Phone</p>
                  <a
                    href="tel:+917791994483"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    +91 7791994483
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Location</p>
                  <p className="font-medium">Udaipur, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}

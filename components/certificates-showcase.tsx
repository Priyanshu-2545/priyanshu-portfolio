'use client';

import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  color: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    id: 'aws',
    title: 'AWS Cloud Quest',
    issuer: 'Cloud Practitioner',
    date: 'Apr 2026',
    icon: '🏆',
    color: 'from-orange-500 to-yellow-500',
    link: 'https://www.credly.com/badges/8bc8be88-8bc3-4ed7-9a7d-69d40780238e/public_url',
  },
  {
    id: 'google',
    title: 'Google Cloud',
    issuer: 'Computing Foundations',
    date: '2024',
    icon: '☁️',
    color: 'from-blue-500 to-cyan-500',
    link: 'https://www.credly.com/badges/75e7abcd-cba0-4418-acc1-244e42e3dcac/public_url',
  },
];

export function CertificatesShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [rotations, setRotations] = useState<Record<string, number>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setRotations((prev) => ({
        ...Object.keys(certificates).reduce(
          (acc, cert) => ({
            ...acc,
            [cert]: ((prev[cert] || 0) + 0.5) % 360,
          }),
          {}
        ),
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-slate-900/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-2 sm:space-y-3 mb-10 sm:mb-12 md:mb-16 text-center">
          <p className="text-blue-500 font-semibold text-xs sm:text-sm uppercase tracking-widest">Verified Credentials</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Professional Certifications</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications showcasing expertise in cloud technologies and software development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="w-full max-w-sm sm:max-w-md perspective"
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                perspective: '1000px',
              }}
            >
              {/* Certificate Card */}
              <div
                className="relative w-full h-64 sm:h-72 md:h-80 cursor-pointer group"
                style={{
                  transformStyle: 'preserve-3d',
                  transform:
                    hoveredId === cert.id
                      ? 'rotateX(15deg) rotateY(-15deg) scale(1.05)'
                      : 'rotateX(0deg) rotateY(0deg) scale(1)',
                  transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                }}
              >
                {/* Main Card */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl p-8 flex flex-col items-center justify-center border border-white/20 shadow-2xl overflow-hidden`}
                  style={{
                    transform: hoveredId === cert.id ? 'translateZ(50px)' : 'translateZ(0)',
                    transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                  }}
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)]"
                      style={{
                        backgroundSize: '20px 20px',
                        animation: 'slideBackground 20s linear infinite',
                      }}
                    />
                  </div>

                  {/* Floating orbits */}
                  <div className="absolute inset-0">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="absolute border border-white/20 rounded-full"
                        style={{
                          width: `${80 + i * 60}px`,
                          height: `${80 + i * 60}px`,
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          animation: `rotate-orbit ${8 + i * 2}s linear infinite`,
                          animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
                        }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="text-7xl mb-6 drop-shadow-lg filter drop-shadow-2xl">
                      {cert.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      {cert.title}
                    </h3>
                    <p className="text-white/90 text-lg font-semibold drop-shadow-lg mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-white/80 text-sm drop-shadow-lg">
                      Issued {cert.date}
                    </p>
                  </div>

                  {/* Corner ribbons */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-white/30 rounded-tl-2xl pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-white/30 rounded-br-2xl pointer-events-none" />
                </div>

                {/* Shine effect */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
                    transform: hoveredId === cert.id ? 'translateX(100%)' : 'translateX(-100%)',
                    transition: 'transform 0.6s',
                  }}
                />
              </div>

              {/* Info below */}
              <div className="mt-8 text-center space-y-3">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 group/btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Credential
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideBackground {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }

        @keyframes rotate-orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { Award, ExternalLink, ZoomIn } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'AWS Cloud Quest: Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Apr 2026',
    image: '/image.png',
    link: 'https://www.credly.com/badges/8bc8be88-8bc3-4ed7-9a7d-69d40780238e/public_url',
  },
  {
    id: '2',
    title: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud',
    date: '2024',
    image: '/image copy.png',
    link: 'https://www.credly.com/badges/75e7abcd-cba0-4418-acc1-244e42e3dcac/public_url',
  },
  {
    id: '3',
    title: 'MongoDB Developer Associate',
    issuer: 'MongoDB',
    date: '2024',
    image: '/image.png',
    link: 'https://www.credly.com/badges/aaaf19af-0c10-4297-9c2b-8b0a956093ec/public_url',
  },
  {
    id: '4',
    title: 'Project Management Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Jul 2024',
    image: '/image copy.png',
    link: 'https://www.credly.com/badges/7696f61d-579f-47e6-9227-d22d96c8e49a/public_url',
  },
  {
    id: '5',
    title: 'SQL Masterclass: Basic to Advanced',
    issuer: 'BE10X AI Career Accelerator',
    date: '2024',
    image: '/image.png',
    link: 'https://app.aicareeraccelerator.in/certificate/TYDHRHyASRKZpiS',
  },
  {
    id: '6',
    title: 'Full Stack Web Development (MERN)',
    issuer: 'Grras Solutions',
    date: '2023',
    image: '/image copy.png',
  },
];

export function CertificationsGallery() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="space-y-2 sm:space-y-3 text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest">
            Verified Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Industry-recognized certifications validating technical expertise
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-slate-200 dark:border-slate-700"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex items-center gap-2 text-white">
                    <ZoomIn className="w-5 h-5" />
                    <span className="text-sm font-semibold">View Certificate</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white line-clamp-2 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{cert.date}</span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
              >
                ✕
              </button>

              {/* Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {selectedCert.title}
                    </h3>
                    <p className="text-base text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {selectedCert.issuer}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{selectedCert.date}</p>
                  </div>
                </div>
                {selectedCert.link && (
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                  >
                    <span>View Original Credential</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

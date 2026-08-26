'use client';

import { useState } from 'react';
import { Award, ExternalLink, Shield, Trophy, Star, Zap } from 'lucide-react';

interface Credential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
  type: 'certification' | 'achievement' | 'badge';
  featured?: boolean;
}

const credentials: Credential[] = [
  {
    id: '1',
    title: 'AWS Cloud Quest: Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Apr 2026',
    description: 'Certified in AWS services including EC2, VPC, RDS, and DynamoDB',
    icon: Shield,
    link: 'https://www.credly.com/badges/8bc8be88-8bc3-4ed7-9a7d-69d40780238e/public_url',
    type: 'certification',
    featured: true,
  },
  {
    id: '2',
    title: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud',
    date: '2024',
    description: 'Certified in cloud computing fundamentals and infrastructure',
    icon: Shield,
    link: 'https://www.credly.com/badges/75e7abcd-cba0-4418-acc1-244e42e3dcac/public_url',
    type: 'certification',
  },
  {
    id: '3',
    title: 'MongoDB Developer Associate',
    issuer: 'MongoDB',
    date: '2024',
    description: 'Certified in MongoDB database development and administration',
    icon: Shield,
    link: 'https://www.credly.com/badges/aaaf19af-0c10-4297-9c2b-8b0a956093ec/public_url',
    type: 'certification',
    featured: true,
  },
  {
    id: '4',
    title: 'Project Management Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Jul 2024',
    description: 'Certified in project management essentials',
    icon: Shield,
    link: 'https://www.credly.com/badges/7696f61d-579f-47e6-9227-d22d96c8e49a/public_url',
    type: 'certification',
  },
  {
    id: '5',
    title: 'SQL Masterclass: Basic to Advanced',
    issuer: 'BE10X AI Career Accelerator',
    date: '2024',
    description: 'Completed comprehensive SQL course',
    icon: Shield,
    link: 'https://app.aicareeraccelerator.in/certificate/TYDHRHyASRKZpiS',
    type: 'certification',
  },
  {
    id: '6',
    title: 'Kavach Hackathon Grand Finalist',
    issuer: 'Government of India',
    date: '2023',
    description: 'Reached Grand Finale in Kavach Cyber Security Hackathon',
    icon: Trophy,
    link: '#',
    type: 'achievement',
    featured: true,
  },
  {
    id: '7',
    title: 'Hack-Avishkar Champion',
    issuer: 'Google Developer Student Clubs',
    date: '2024',
    description: '1st Place Winner at Hack-Avishkar Competition',
    icon: Trophy,
    link: '#',
    type: 'achievement',
    featured: true,
  },
  {
    id: '8',
    title: 'Smart India Hackathon 2024 Winner',
    issuer: 'Government of India',
    date: '2024',
    description: 'Won for Smart Asset Monitoring System project',
    icon: Trophy,
    link: '#',
    type: 'achievement',
    featured: true,
  },
  {
    id: '9',
    title: 'GDG Udaipur Core Team Member',
    issuer: 'Google Developer Groups',
    date: '2024-2025',
    description: 'Organized Google DevFest for 300+ attendees',
    icon: Award,
    link: '#',
    type: 'achievement',
  },
  {
    id: '10',
    title: 'Hacktoberfest 2025: Supercontributor',
    issuer: 'DigitalOcean & GitHub',
    date: '2025',
    description: 'Global Top 10k - 6+ accepted PRs/MRs in open-source contributions',
    icon: Star,
    link: 'https://www.holopin.io/hacktoberfest2025/userbadge/cmgusqszh007bky04icq5iyk4',
    type: 'badge',
    featured: true,
  },
  {
    id: '11',
    title: 'Full Stack Web Development (MERN)',
    issuer: 'Grras Solutions',
    date: '2023',
    description: 'Certified in MongoDB, Express.js, React, Node.js',
    icon: Shield,
    link: '#',
    type: 'certification',
  },
];

export function CredentialsShowcase() {
  const [filter, setFilter] = useState<'all' | 'certification' | 'achievement' | 'badge'>('all');

  const filteredCredentials = credentials.filter(
    (cred) => filter === 'all' || cred.type === filter
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'certification':
        return 'from-blue-500 to-cyan-500';
      case 'achievement':
        return 'from-yellow-500 to-orange-500';
      case 'badge':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'certification':
        return 'Certification';
      case 'achievement':
        return 'Achievement';
      case 'badge':
        return 'Badge';
      default:
        return 'Credential';
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-slate-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="space-y-2 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 text-center">
          <p className="text-blue-500 font-semibold text-xs sm:text-sm tracking-widest uppercase">Credentials</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Certifications & Achievements</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of professional certifications, achievements, and badges earned through continuous learning and contributions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {(['all', 'certification', 'achievement', 'badge'] as const).map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
                filter === filterType
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCredentials.map((credential) => {
            const Icon = credential.icon;
            return (
              <div
                key={credential.id}
                className={`group relative bg-background border-2 rounded-xl p-5 sm:p-6 transition-all duration-300 overflow-hidden cursor-pointer ${
                  credential.featured
                    ? 'border-blue-500/50 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105'
                    : 'border-border hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-102'
                }`}
                onClick={() => credential.link !== '#' && window.open(credential.link, '_blank', 'noopener,noreferrer')}
              >
                {/* Featured Badge */}
                {credential.featured && (
                  <div className="absolute top-3 right-3">
                    <div className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-white">
                      Featured
                    </div>
                  </div>
                )}

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(credential.type)} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${getTypeColor(credential.type)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>

                  {/* Type Badge */}
                  <div className="inline-block px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-muted-foreground mb-3">
                    {getTypeLabel(credential.type)}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base sm:text-lg mb-1 group-hover:text-blue-500 transition-colors line-clamp-2">
                    {credential.title}
                  </h3>

                  {/* Issuer & Date */}
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">{credential.issuer}</p>
                    <span className="text-muted-foreground">•</span>
                    <p className="text-xs text-muted-foreground">{credential.date}</p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-4">
                    {credential.description}
                  </p>

                  {/* Link Indicator */}
                  {credential.link !== '#' && (
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
                      <span>View Credential</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">6</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Certifications</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl">
            <p className="text-2xl sm:text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">4</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Achievements</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl">
            <p className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">1</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Badge</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
            <p className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">11</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Total</p>
          </div>
        </div>
      </div>
    </section>
  );
}

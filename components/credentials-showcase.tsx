import {
  Award,
  BadgeCheck,
  BookOpenCheck,
  Braces,
  Cloud,
  Database,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

const learningPaths = [
  {
    title: 'Cloud & Infrastructure',
    subtitle: 'Cloud platforms and operations',
    icon: Cloud,
    accent: 'cyan',
    credentials: [
      {
        title: 'AWS Cloud Quest: Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: 'Apr 2026',
        description: 'AWS services including EC2, VPC, RDS, and DynamoDB.',
        href: 'https://www.credly.com/badges/8bc8be88-8bc3-4ed7-9a7d-69d40780238e/public_url',
        featured: true,
      },
      {
        title: 'Google Cloud Computing Foundations',
        issuer: 'Google Cloud',
        date: '2024',
        description: 'Cloud computing fundamentals and infrastructure.',
        href: 'https://www.credly.com/badges/75e7abcd-cba0-4418-acc1-244e42e3dcac/public_url',
      },
    ],
  },
  {
    title: 'Databases & Engineering',
    subtitle: 'Data skills and engineering foundations',
    icon: Database,
    accent: 'blue',
    credentials: [
      {
        title: 'MongoDB Developer Associate',
        issuer: 'MongoDB',
        date: '2024',
        description: 'MongoDB database development and administration.',
        href: 'https://www.credly.com/badges/aaaf19af-0c10-4297-9c2b-8b0a956093ec/public_url',
        featured: true,
      },
      {
        title: 'SQL Masterclass: Basic to Advanced',
        issuer: 'BE10X AI Career Accelerator',
        date: '2024',
        description: 'Completed a comprehensive SQL course.',
        href: 'https://app.aicareeraccelerator.in/certificate/TYDHRHyASRKZpiS',
      },
      {
        title: 'Project Management Fundamentals',
        issuer: 'IBM SkillsBuild',
        date: 'Jul 2024',
        description: 'Project planning and management essentials.',
        href: 'https://www.credly.com/badges/7696f61d-579f-47e6-9227-d22d96c8e49a/public_url',
      },
    ],
  },
  {
    title: 'Web Development',
    subtitle: 'Full-stack application development',
    icon: Braces,
    accent: 'teal',
    credentials: [
      {
        title: 'Full Stack Web Development (MERN)',
        issuer: 'Grras Solutions',
        date: '2023',
        description: 'MongoDB, Express.js, React, and Node.js.',
        href: 'https://drive.google.com/file/d/1Kp6qxpHSeR_91rsMzL91_-EYE8RMQPdY/view?usp=sharing',
        featured: true,
      },
    ],
  },
];

const accentStyles = {
  cyan: {
    border: 'border-cyan-400',
    glow: 'bg-cyan-400/[0.04]',
    icon: 'border-cyan-400 text-cyan-300',
    item: 'text-cyan-400',
  },
  blue: {
    border: 'border-blue-500',
    glow: 'bg-blue-500/[0.04]',
    icon: 'border-blue-500 text-blue-300',
    item: 'text-blue-400',
  },
  teal: {
    border: 'border-teal-400',
    glow: 'bg-teal-400/[0.04]',
    icon: 'border-teal-400 text-teal-300',
    item: 'text-teal-400',
  },
};

export function CredentialsShowcase() {
  return (
    <section
      id="learning"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_20%,rgba(37,99,235,0.12),transparent_38%),radial-gradient(ellipse_at_90%_80%,rgba(20,184,166,0.08),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-[1.75rem] border border-white/[0.09] bg-slate-950/55 p-5 shadow-2xl shadow-blue-950/10 backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="mb-8 flex items-start gap-4 sm:mb-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 sm:h-14 sm:w-14">
              <Award className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div>
              <p className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                <BookOpenCheck className="h-4 w-4" />
                Continuous Learning
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Certifications and Learning
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Focused learning across cloud, DevOps, software engineering, databases, and web development.
              </p>
            </div>
          </div>

          <div className="grid items-stretch gap-4 lg:grid-cols-3 lg:gap-5">
            {learningPaths.map((path) => {
              const Icon = path.icon;
              const styles = accentStyles[path.accent as keyof typeof accentStyles];

              return (
                <article
                  key={path.title}
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-black/25 ${styles.glow}`}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 ${styles.border} border-t-2`} />
                  <div className="flex items-center gap-3 p-4 pb-3 sm:p-5 sm:pb-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-slate-950/70 ${styles.icon}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-foreground sm:text-base">{path.title}</h3>
                      <p className="text-xs text-muted-foreground">{path.subtitle}</p>
                    </div>
                    <ShieldCheck className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                  </div>

                  <ul className="flex flex-1 flex-col gap-2 px-4 pb-4 sm:px-5 sm:pb-5">
                    {path.credentials.map((credential) => (
                      <li key={credential.title}>
                        <a
                          href={credential.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/item block rounded-xl border border-white/[0.08] bg-slate-950/55 p-3 transition duration-200 hover:border-blue-400/35 hover:bg-white/[0.03]"
                        >
                          <div className="flex items-start gap-2">
                            <BadgeCheck className={`mt-0.5 h-4 w-4 shrink-0 ${styles.item}`} />
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                                <h4 className="text-xs font-semibold leading-5 text-foreground sm:text-sm">
                                  {credential.title}
                                </h4>
                                {credential.featured && (
                                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-blue-300">
                                    Featured
                                  </span>
                                )}
                              </div>
                              <p className="mt-1 text-[11px] leading-4 text-muted-foreground">
                                {credential.issuer} <span className="px-1 text-blue-400">·</span> {credential.date}
                              </p>
                              <p className="mt-1.5 text-[11px] leading-4 text-slate-400">
                                {credential.description}
                              </p>
                              <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-300 transition-colors group-hover/item:text-cyan-300">
                                View Credential
                                <ExternalLink className="h-3 w-3" />
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

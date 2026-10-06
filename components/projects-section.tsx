import Image from 'next/image';
import { ArrowUpRight, Github, Layers3, Trophy } from 'lucide-react';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  tags: string[];
  tagLabel: string;
  github?: string;
  demo?: string;
  award?: string;
}

const projects: Project[] = [
  {
    number: '01',
    title: 'SmarSetu',
    category: 'Digital military memorial platform',
    description:
      "A digital memorial preserving India's Armed Forces stories and making the country's military history easy to explore.",
    highlights: [
      'Built a digital memorial covering 190+ soldiers, 109+ operations, and 174+ regiments.',
      'Deployed on AWS with Terraform, Docker, and k3s for zero-downtime updates and secure TLS ingress.',
      'Connected live Wikipedia and Wikidata data to reduce manual records management and keep the platform current.',
    ],
    image: '/images/smarsetu/smar-screen.jpg',
    imageAlt: 'SmarSetu military heritage and remembrance platform',
    imageWidth: 1887,
    imageHeight: 897,
    tags: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'AWS', 'Terraform', 'Docker', 'Kubernetes (k3s)', 'GitHub Actions', 'Traefik', 'Trivy'],
    tagLabel: 'Tech stack',
    demo: 'https://smarsetu.app/',
  },
  {
    number: '02',
    title: 'SUSTAINA',
    category: 'Smart resource management',
    description:
      'A full-stack app for tracking water and electricity usage, setting goals, and making more sustainable choices.',
    highlights: [
      'Created a unified dashboard to track utility consumption and support better daily decisions.',
      'Secured user data with Supabase Row Level Security and clean, role-aware access patterns.',
      'Turned usage trends into visual summaries to help users monitor goals and reduce waste.',
    ],
    image: '/images/sustaina/home.jpg',
    imageAlt: 'SUSTAINA water and electricity management app landing page',
    imageWidth: 1875,
    imageHeight: 877,
    tags: ['React', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'REST APIs'],
    tagLabel: 'Tech stack',
    github: 'https://github.com/Priyanshu-2545/Sustaina-water-electricity-',
    demo: 'https://sustaina-water-electricity-app.vercel.app/',
  },
  {
    number: '03',
    title: 'Cloud-native CI/CD Pipeline',
    category: 'DevOps & automation',
    description:
      'An automated delivery pipeline for building, deploying, and monitoring a containerized web application on AWS.',
    highlights: [
      'Automated build, validation, and release steps using Jenkins and GitHub webhooks.',
      'Deployed containerized workloads on Kubernetes with zero-downtime rolling updates and health checks.',
      'Added monitoring and proxy routing with Nginx, Prometheus, and Grafana for easier operations.',
    ],
    image: '/images/cicd/cicd-new.jpg',
    imageAlt: 'CI/CD pipeline stages from integration through delivery',
    imageWidth: 1817,
    imageHeight: 866,
    tags: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Nginx', 'Prometheus', 'Grafana', 'GitHub Actions'],
    tagLabel: 'Tech stack',
    github: 'https://github.com/Priyanshu-2545/cloud-native-cicd-nodejs',
  },
  {
    number: '04',
    title: 'SAMS',
    category: 'Smart asset monitoring',
    description:
      'A smart monitoring dashboard that brings asset locations, device health, alerts, and operational insights together.',
    highlights: [
      'Mapped asset locations and monitored operational zones in a single dashboard view.',
      'Summarized real-time alerts and device health details to help teams respond faster.',
      'Improved tracking of asset distribution and activity across field operations for smarter planning.',
    ],
    image: '/images/sams/dashboard.jpg',
    imageAlt: 'SAMS smart asset monitoring dashboard with live map and analytics',
    imageWidth: 1536,
    imageHeight: 1024,
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'GPS tracking'],
    tagLabel: 'Tech stack',
    github: 'https://github.com/Priyanshu-2545',
    award: 'Smart India Hackathon 2024 winner',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Selected work</p>
            <h2 className="section-heading">
              Projects built to <span className="gradient-words">make an impact.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              From cloud automation to products with a purpose—here are a few things I&apos;ve
              designed, built, and shipped.
            </p>
          </div>
          <a
            href="https://github.com/Priyanshu-2545"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-sky-400/40 hover:text-sky-300"
          >
            <Github className="h-4 w-4" />
            More on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-card/65 transition duration-500 hover:-translate-y-1 hover:border-sky-400/25 hover:shadow-2xl hover:shadow-sky-950/20"
            >
              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <a
                  href={project.demo || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="relative block h-[260px] w-full overflow-hidden bg-[#080d15] sm:h-[320px] lg:h-[430px]"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-5 scale-110 bg-cover bg-center opacity-40 blur-2xl"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="z-[1] object-contain object-center transition duration-500 group-hover:scale-[1.01]"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-slate-950/75 px-3 py-1.5 font-mono text-xs text-white/90 backdrop-blur-sm sm:left-5 sm:top-5">
                    PROJECT {project.number}
                  </span>
                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-slate-950/75 text-white backdrop-blur-sm transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-sky-500 sm:bottom-5 sm:right-5 sm:h-11 sm:w-11">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </a>

                <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-sky-400/20 bg-sky-400/[0.07] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-300">
                      {project.category}
                    </span>
                    {project.award && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/[0.07] px-3 py-1 text-[11px] font-medium text-amber-300">
                        <Trophy className="h-3 w-3" />
                        {project.award}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-sky-300 sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-white/[0.08] pt-5">
                    <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      <Layers3 className="h-3.5 w-3.5 text-sky-400" />
                      {project.tagLabel}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition hover:border-sky-400/25 hover:text-sky-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-sky-500/20"
                      >
                        Visit live project
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-sky-400/40 hover:text-sky-300"
                      >
                        <Github className="h-4 w-4" />
                        {project.number === '04' ? 'GitHub profile' : 'View code'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

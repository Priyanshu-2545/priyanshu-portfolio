import {
  Activity,
  Braces,
  Cloud,
  Code2,
  Database,
  Download,
  Gauge,
  GitBranch,
  Layers3,
  PanelsTopLeft,
  Radio,
  ScrollText,
  SquareTerminal,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { SimpleIcon } from 'simple-icons';
import {
  siDocker,
  siExpress,
  siGithub,
  siGithubactions,
  siGit,
  siGrafana,
  siHtml5,
  siJenkins,
  siJsonwebtokens,
  siKubernetes,
  siLinux,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPrisma,
  siPrometheus,
  siReact,
  siRedis,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
} from 'simple-icons';

interface SkillItem {
  name: string;
  brand?: SimpleIcon;
  icon?: LucideIcon;
  color?: string;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  accent: string;
  description: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'text-sky-300',
    accent: '#38bdf8',
    description: 'Cloud infrastructure, containers, and delivery automation.',
    skills: [
      { name: 'AWS', icon: Cloud, color: '#f59e0b' },
      { name: 'Docker', brand: siDocker },
      { name: 'Kubernetes', brand: siKubernetes },
      { name: 'Jenkins', brand: siJenkins },
      { name: 'GitHub Actions', brand: siGithubactions },
      { name: 'Nginx', brand: siNginx },
      { name: 'Linux', brand: siLinux },
    ],
  },
  {
    title: 'Backend Development',
    icon: Code2,
    color: 'text-emerald-300',
    accent: '#34d399',
    description: 'Server-side development, APIs, and application architecture.',
    skills: [
      { name: 'Node.js', brand: siNodedotjs },
      { name: 'Express.js', brand: siExpress },
      { name: 'REST APIs', icon: Braces, color: '#38bdf8' },
      { name: 'JWT Auth', brand: siJsonwebtokens },
      { name: 'Microservices', icon: Workflow, color: '#a78bfa' },
      { name: 'Middleware', icon: Layers3, color: '#fb923c' },
      { name: 'WebSockets', icon: Radio, color: '#22d3ee' },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'text-violet-300',
    accent: '#a78bfa',
    description: 'Relational, document, and hosted data platforms.',
    skills: [
      { name: 'PostgreSQL', brand: siPostgresql },
      { name: 'MongoDB', brand: siMongodb },
      { name: 'MySQL', brand: siMysql },
      { name: 'Redis', brand: siRedis },
      { name: 'Supabase', brand: siSupabase },
      { name: 'Prisma', brand: siPrisma },
      { name: 'PostGIS', brand: siPostgresql, color: '#77b7d5' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: PanelsTopLeft,
    color: 'text-cyan-300',
    accent: '#22d3ee',
    description: 'Responsive interfaces and modern web experiences.',
    skills: [
      { name: 'Next.js', brand: siNextdotjs },
      { name: 'React.js', brand: siReact },
      { name: 'TypeScript', brand: siTypescript },
      { name: 'Tailwind CSS', brand: siTailwindcss },
      { name: 'HTML5', brand: siHtml5 },
      { name: 'Responsive UI', icon: PanelsTopLeft, color: '#22d3ee' },
    ],
  },
  {
    title: 'Monitoring & Logging',
    icon: Activity,
    color: 'text-orange-300',
    accent: '#fb923c',
    description: 'Observability, system metrics, and performance insights.',
    skills: [
      { name: 'Prometheus', brand: siPrometheus },
      { name: 'Grafana', brand: siGrafana },
      { name: 'CloudWatch', icon: Activity, color: '#f59e0b' },
      { name: 'Log Aggregation', icon: ScrollText, color: '#38bdf8' },
      { name: 'Performance', icon: Gauge, color: '#34d399' },
    ],
  },
  {
    title: 'Developer Tools',
    icon: GitBranch,
    color: 'text-rose-300',
    accent: '#fb7185',
    description: 'Version control, API testing, and deployment tools.',
    skills: [
      { name: 'Git', brand: siGit },
      { name: 'GitHub', brand: siGithub },
      { name: 'Postman', brand: siPostman },
      { name: 'Vercel', brand: siVercel },
      { name: 'Docker Compose', brand: siDocker },
      { name: 'Shell Scripting', icon: SquareTerminal, color: '#fda4af' },
    ],
  },
];

const categoryOnlySkills = new Set([
  'Middleware',
  'PostGIS',
  'Responsive UI',
  'Log Aggregation',
  'Performance',
  'Microservices',
  'CloudWatch',
  'Postman',
  'Docker Compose',
  'Vercel',
  'Prisma',
  'Supabase',
  'WebSockets',
  'JWT Auth',
]);

const darkBrandSlugs = new Set(['express', 'nextdotjs', 'github', 'vercel']);

function skillColor(skill: SkillItem, fallback: string) {
  if (skill.color) return skill.color;
  if (skill.brand && darkBrandSlugs.has(skill.brand.slug)) return '#e2e8f0';
  return skill.brand ? `#${skill.brand.hex}` : fallback;
}

const allSkills = skillCategories.flatMap((category) =>
  category.skills
    .filter((skill) => !categoryOnlySkills.has(skill.name))
    .map((skill) => ({
      ...skill,
      category: category.title,
      categoryColor: category.accent,
    })),
);

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell border-y border-white/[0.05] bg-white/[0.015]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="section-eyebrow">Technical skills</p>
          <h2 className="section-heading">
            The tools behind <span className="gradient-words">the work.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
            A practical toolkit for building web products, automating delivery, and running
            reliable cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
          {allSkills.map((skill) => {
            const Icon = skill.icon;
            const color = skillColor(skill, skill.categoryColor);

            return (
              <div
                key={`${skill.category}-${skill.name}`}
                className="group relative flex min-h-[126px] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/[0.09] bg-card/70 px-3 py-4 text-center transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-card hover:shadow-xl"
                style={{ boxShadow: `inset 0 2px 0 ${color}70` }}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.12] bg-slate-950/90 transition duration-300 group-hover:scale-110"
                  style={{
                    color,
                  }}
                  aria-hidden="true"
                >
                  {skill.brand ? (
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d={skill.brand.path} />
                    </svg>
                  ) : Icon ? (
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  ) : null}
                </span>
                <span className="text-xs font-semibold text-slate-200 transition-colors group-hover:text-white sm:text-sm">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-7 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-sky-400/50" />
          {allSkills.length} tools across 6 skill areas
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-sky-400/50" />
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-card/40 p-5 transition duration-300 hover:border-white/[0.16] hover:bg-card/70 sm:p-6"
              >
                <span
                  className="absolute bottom-0 left-0 top-0 w-1"
                  style={{ backgroundColor: category.accent }}
                />
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-xl border p-2.5 ${category.color}`}
                    style={{
                      backgroundColor: `${category.accent}16`,
                      borderColor: `${category.accent}50`,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className={`font-semibold ${category.color}`}>{category.title}</h3>
                </div>
                <p className="mt-4 min-h-12 text-sm leading-6 text-muted-foreground">
                  {category.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-full border px-3 py-1.5 text-xs"
                      style={{
                        color: skillColor(skill, category.accent),
                        backgroundColor: `${category.accent}10`,
                        borderColor: `${category.accent}40`,
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 rounded-2xl border border-sky-400/15 bg-gradient-to-r from-blue-500/[0.08] via-slate-900/40 to-cyan-500/[0.06] p-6 sm:mt-14 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-lg font-semibold text-foreground">Want the full picture?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose the resume that best matches the role.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/resumes/Priyanshu_Garg_DevOps_Engineer.pdf"
              download="Priyanshu_Garg_DevOps_Engineer.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Download className="h-4 w-4" />
              DevOps resume
            </a>
            <a
              href="/resumes/Priyanshu_Garg_SDE.pdf"
              download="Priyanshu_Garg_SDE.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-sky-400/40 hover:text-sky-300"
            >
              <Download className="h-4 w-4" />
              Software resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

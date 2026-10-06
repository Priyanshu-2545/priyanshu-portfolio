import { ArrowUpRight, ShieldCheck, Trophy } from 'lucide-react';

const hackathons = [
  {
    title: 'Hack-Avishkar Champion',
    event: 'Google Developer Student Clubs',
    year: '2024',
    result: '1st Place Winner',
    description:
      'Won first place at Hack-Avishkar by building and presenting a solution with a focus on practical impact.',
    icon: Trophy,
    accent: 'amber',
    href: 'https://drive.google.com/file/d/1xE6Y5H2aG8kH_3pJ2mIiWwnBjE0xbX3-/view?usp=sharing',
  },
  {
    title: 'Smart India Hackathon',
    event: 'Government of India',
    year: '2024',
    result: 'Winner',
    description:
      'Won SIH 2024 for the Smart Asset Monitoring System, bringing asset tracking and operational insights together.',
    icon: Trophy,
    accent: 'cyan',
  },
  {
    title: 'Kavach Hackathon Grand Finalist',
    event: 'Government of India',
    year: '2023',
    result: 'Grand Finale',
    description:
      'Reached the Grand Finale of the Kavach Cyber Security Hackathon with a cybersecurity-focused solution.',
    icon: ShieldCheck,
    accent: 'violet',
    href: 'https://drive.google.com/file/d/1mAZ_1DcBs66e4dzetFEDmzZo0_aFhoT6/view?usp=sharing',
  },
];

const accentStyles = {
  amber: {
    border: 'hover:border-amber-400/40',
    icon: 'from-amber-500/20 to-orange-500/10 text-amber-300',
    badge: 'border-amber-400/20 bg-amber-400/10 text-amber-200',
    glow: 'group-hover:shadow-amber-950/20',
  },
  cyan: {
    border: 'hover:border-cyan-400/40',
    icon: 'from-cyan-500/20 to-blue-500/10 text-cyan-300',
    badge: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-200',
    glow: 'group-hover:shadow-cyan-950/20',
  },
  violet: {
    border: 'hover:border-violet-400/40',
    icon: 'from-violet-500/20 to-fuchsia-500/10 text-violet-300',
    badge: 'border-violet-400/20 bg-violet-400/10 text-violet-200',
    glow: 'group-hover:shadow-violet-950/20',
  },
};

export function HackathonsShowcase() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(245,158,11,0.07),transparent_35%),radial-gradient(ellipse_at_85%_50%,rgba(99,102,241,0.09),transparent_38%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-9 max-w-3xl sm:mb-12">
          <p className="section-eyebrow">Building under pressure</p>
          <h2 className="section-heading">
            Hackathon <span className="gradient-words">highlights.</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            Teamwork, rapid prototyping, and problem-solving recognized at national and community events.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {hackathons.map((hackathon) => {
            const Icon = hackathon.icon;
            const styles = accentStyles[hackathon.accent as keyof typeof accentStyles];
            const content = (
              <>
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${styles.icon}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${styles.badge}`}>
                    {hackathon.result}
                  </span>
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  {hackathon.event} <span className="px-1 text-sky-400">·</span> {hackathon.year}
                </p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-foreground sm:text-xl">
                  {hackathon.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{hackathon.description}</p>

                {hackathon.href && (
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition-colors group-hover:text-cyan-300">
                    View achievement
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                )}
              </>
            );

            const className = `group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-slate-950/55 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 ${styles.border} ${styles.glow}`;

            return hackathon.href ? (
              <a
                key={hackathon.title}
                href={hackathon.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            ) : (
              <article key={hackathon.title} className={className}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

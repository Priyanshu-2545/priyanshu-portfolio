import { Github, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Priyanshu-2545',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/priyanshu-garg25/',
    icon: Linkedin,
  },
];

export function SocialRail() {
  return (
    <>
      <aside
        aria-label="Social media links"
        className="fixed left-5 top-[60%] z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] font-medium tracking-[0.16em] text-slate-400">
          Follow Me
        </span>
        <span className="h-8 w-px bg-gradient-to-b from-sky-400/60 to-slate-700" />
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow Priyanshu on ${label}`}
            title={label}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.09] bg-slate-950/90 text-slate-300 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:border-sky-400/40 hover:text-sky-300 hover:shadow-sky-950/30"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        ))}
        <span className="h-8 w-px bg-gradient-to-b from-slate-700 to-transparent" />
      </aside>

      <aside
        aria-label="Social media links"
        className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-slate-950/90 px-3 py-2 shadow-xl backdrop-blur-lg lg:hidden"
      >
        <span className="pr-1 text-[11px] font-medium text-slate-400">Follow Me</span>
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow Priyanshu on ${label}`}
            title={label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </aside>
    </>
  );
}

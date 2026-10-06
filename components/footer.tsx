import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const footerLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-slate-950/70">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <a
              href="#home"
              className="font-mono text-xl font-bold tracking-tight text-foreground transition-colors hover:text-sky-300"
            >
              <span className="text-sky-400">&lt;</span>Priyanshu /&gt;
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
              DevOps and software engineering—building practical products and dependable
              infrastructure.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Explore</h2>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-sky-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Let&apos;s connect</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Have a role, idea, or project in mind? I&apos;d be glad to hear from you.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="mailto:priyanshugarg2525@gmail.com"
                aria-label="Email Priyanshu Garg"
                className="rounded-full border border-white/[0.1] p-2.5 text-muted-foreground transition hover:border-sky-400/40 hover:text-sky-300"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Priyanshu-2545"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Priyanshu Garg on GitHub"
                className="rounded-full border border-white/[0.1] p-2.5 text-muted-foreground transition hover:border-sky-400/40 hover:text-sky-300"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshu-garg25/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Priyanshu Garg on LinkedIn"
                className="rounded-full border border-white/[0.1] p-2.5 text-muted-foreground transition hover:border-sky-400/40 hover:text-sky-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://smarsetu.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-white/[0.1] px-3 py-2 text-xs text-muted-foreground transition hover:border-sky-400/40 hover:text-sky-300"
              >
                SmarSetu
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Built with care by Priyanshu Garg.</p>
          <p>© {new Date().getFullYear()} Priyanshu Garg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

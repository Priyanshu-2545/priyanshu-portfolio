'use client';

import { MouseEvent, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function PortfolioNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMenuOpen(false);
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    document.getElementById(href.slice(1))?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-background/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a
          href="#home"
          onClick={(event) => scrollToSection(event, '#home')}
          className="font-mono text-lg font-bold tracking-tight text-foreground transition-colors hover:text-sky-400"
          aria-label="Priyanshu Garg home"
        >
          <span className="text-sky-400">&lt;</span>Priyanshu<span className="text-sky-400"> /&gt;</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => scrollToSection(event, link.href)}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/resumes/Priyanshu_Garg_DevOps_Engineer.pdf"
            download="Priyanshu_Garg_DevOps_Engineer.pdf"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/15 transition hover:-translate-y-0.5 hover:shadow-blue-500/25 sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:border-sky-500/50 md:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-white/[0.08] px-5 py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => scrollToSection(event, link.href)}
                className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resumes/Priyanshu_Garg_SDE.pdf"
              download="Priyanshu_Garg_SDE.pdf"
              className="mt-2 inline-flex items-center gap-2 rounded-lg bg-sky-500/10 px-3 py-3 text-sm font-medium text-sky-300"
            >
              <Download className="h-4 w-4" />
              Download software developer resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

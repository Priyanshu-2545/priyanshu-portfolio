'use client';

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="space-y-1 sm:space-y-2">
            <div className="text-lg sm:text-2xl font-bold">Priyanshu Garg</div>
            <p className="text-xs sm:text-sm text-slate-400">DevOps Engineer | Full-Stack Developer | Cloud Architect</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-slate-400">
              <li>
                <a href="#projects" className="text-xs sm:text-sm hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-xs sm:text-sm hover:text-white transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-xs sm:text-sm hover:text-white transition">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-xs sm:text-sm hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-4">Connect</h3>
            <div className="flex gap-2 sm:gap-4">
              <a
                href="https://github.com/Priyanshu-2545"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition hover:scale-110 duration-200"
                title="GitHub"
              >
                <Github className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshu-garg25/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition hover:scale-110 duration-200"
                title="LinkedIn"
              >
                <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a
                href="mailto:priyanshugarg2525@gmail.com"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition hover:scale-110 duration-200"
                title="Email"
              >
                <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-slate-400 text-xs sm:text-sm text-center sm:text-left">
            <p>Built with Next.js, Tailwind CSS & deployed on Vercel</p>
            <p>
              2024 - {new Date().getFullYear()} &copy; Priyanshu Garg. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

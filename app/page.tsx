import { Code as Code2 } from 'lucide-react';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { ExperienceSection } from '@/components/experience-section';
import { TerminalSection } from '@/components/terminal-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { ThemeToggle } from '@/components/theme-toggle';
import { TypingHero } from '@/components/typing-hero';
import { ScrollProgress } from '@/components/scroll-progress';
import { ScrollReveal } from '@/components/scroll-reveal';
import { CertificatesShowcase } from '@/components/certificates-showcase';
import { TimelineAchievements } from '@/components/timeline-achievements';
import { AmbientBg } from '@/components/ambient-bg';
import { StatsWidget } from '@/components/stats-widget';
import { CtaBadges } from '@/components/cta-badges';
import { TestimonialsSection } from '@/components/testimonials-section';
import { SkillGlobe } from '@/components/skill-globe';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-slate-900/5">
      <AmbientBg />
      <ScrollProgress />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">Priyanshu</span>
          </div>
          <div className="flex gap-6 items-center">
            <div className="hidden md:flex gap-8">
              <a href="#projects" className="text-sm hover:text-blue-500 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full">Projects</a>
              <a href="#skills" className="text-sm hover:text-blue-500 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full">Skills</a>
              <a href="#experience" className="text-sm hover:text-blue-500 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full">Experience</a>
              <a href="#contact" className="text-sm hover:text-blue-500 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full">Contact</a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Typing Hero Section */}
      <TypingHero />

      {/* Stats Widget */}
      <ScrollReveal>
        <StatsWidget />
      </ScrollReveal>

      {/* Projects Section */}
      <ScrollReveal>
        <ProjectsSection />
      </ScrollReveal>

      {/* 3D Skill Globe - Interactive Premium Feature */}
      <ScrollReveal delay={100}>
        <SkillGlobe />
      </ScrollReveal>

      {/* Skills Section */}
      <ScrollReveal delay={100}>
        <SkillsSection />
      </ScrollReveal>

      {/* Certificates Showcase - Unique Feature */}
      <ScrollReveal delay={100}>
        <CertificatesShowcase />
      </ScrollReveal>

      {/* Terminal Section */}
      <ScrollReveal delay={100}>
        <TerminalSection />
      </ScrollReveal>

      {/* Experience Section */}
      <ScrollReveal delay={100}>
        <ExperienceSection />
      </ScrollReveal>

      {/* Timeline Achievements - Premium USP Feature */}
      <ScrollReveal delay={100}>
        <TimelineAchievements />
      </ScrollReveal>

      {/* Testimonials Section - Social Proof */}
      <ScrollReveal delay={100}>
        <TestimonialsSection />
      </ScrollReveal>

      {/* CTA Badges - Connect Section */}
      <ScrollReveal delay={100}>
        <CtaBadges />
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal delay={100}>
        <ContactSection />
      </ScrollReveal>

      {/* Footer */}
      <Footer />
    </div>
  );
}

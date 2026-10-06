import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { ExperienceSection } from '@/components/experience-section';
import { AboutSection } from '@/components/about-section';
import { TerminalSection } from '@/components/terminal-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { PortfolioNav } from '@/components/portfolio-nav';
import { TypingHero } from '@/components/typing-hero';
import { ScrollProgress } from '@/components/scroll-progress';
import { ScrollReveal } from '@/components/scroll-reveal';
import { CredentialsShowcase } from '@/components/credentials-showcase';
import { TimelineAchievements } from '@/components/timeline-achievements';
import { AmbientBg } from '@/components/ambient-bg';
import { CtaBadges } from '@/components/cta-badges';
import { ParticleBackground } from '@/components/particle-background';
import { ParallaxSection } from '@/components/parallax-section';

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-background">
      <ParticleBackground />
      <AmbientBg />
      <ScrollProgress />
      <PortfolioNav />

      <main>
        <ParallaxSection speed={0.2}>
          <TypingHero />
        </ParallaxSection>

        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectsSection />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ExperienceSection />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <TimelineAchievements />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <CredentialsShowcase />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <SkillsSection />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <CtaBadges />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ContactSection />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}

import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { ArchitectureSection } from '../sections/ArchitectureSection';
import { ApiDesignSection } from '../sections/ApiDesignSection';
import { SystemThinkingSection } from '../sections/SystemThinkingSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { motion, useScroll, useSpring } from 'framer-motion';
import { WhatsAppButton } from './WhatsAppButton';
import { CursorFollower } from './CursorFollower';

export function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary">
       {/* Scroll Progress Bar */}
       <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ArchitectureSection />
        <ApiDesignSection />
        <SystemThinkingSection />
        <ExperienceSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <CursorFollower />
    </div>
  );
}

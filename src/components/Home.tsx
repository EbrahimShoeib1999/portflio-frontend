import { lazy, Suspense } from 'react';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { WhatsAppButton } from './WhatsAppButton';
import { CursorFollower } from './CursorFollower';
import { Loader2 } from 'lucide-react';

const ArchitectureSection = lazy(() => import('../sections/ArchitectureSection').then(m => ({ default: m.ArchitectureSection })));
const ApiDesignSection = lazy(() => import('../sections/ApiDesignSection').then(m => ({ default: m.ApiDesignSection })));
const SystemThinkingSection = lazy(() => import('../sections/SystemThinkingSection').then(m => ({ default: m.SystemThinkingSection })));
const ExperienceSection = lazy(() => import('../sections/ExperienceSection').then(m => ({ default: m.ExperienceSection })));

const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center">
    <Loader2 className="w-8 h-8 text-primary animate-spin" />
  </div>
);

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
        <Suspense fallback={<SectionLoader />}>
          <ArchitectureSection />
          <ApiDesignSection />
          <SystemThinkingSection />
          <ExperienceSection />
        </Suspense>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <CursorFollower />
    </div>
  );
}

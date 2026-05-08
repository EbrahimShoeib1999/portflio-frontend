import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { SectionWrapper } from '../components/SectionWrapper';
import { ThemeToggle } from '../components/ThemeToggle';

const phrases = [
  'Building scalable SaaS & ERP systems',
  'Architecting backend-first platforms',
  'Shipping reliable production software',
];

export function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [typed, setTyped] = useState('');

  const phrase = useMemo(() => phrases[currentPhrase], [currentPhrase]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentPhrase]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTyped(phrase.slice(0, index + 1));
      index += 1;
      if (index === phrase.length) {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [phrase]);

  return (
    <SectionWrapper id="home" className="relative overflow-hidden pt-32 pb-20 bg-[#06070f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.15),transparent_30%)]" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6"
          >
            Ibrahim Mohamed Shoeib
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-8"
          >
            Full-Stack Developer
            <br />
            <span className="text-primary">Backend-Focused</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl text-white/70 mb-12 min-h-[3rem] flex items-center justify-center"
          >
            {typed}
            <span className="animate-pulse text-primary">|</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute top-8 right-8"
        >
          <ThemeToggle />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
